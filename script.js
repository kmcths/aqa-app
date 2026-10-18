/**
 * Aquarian Answers - Daily Reading
 *
 * The deck is the only control. Each click deals the top card:
 * it travels from the deck to the card slot while flipping face up,
 * then the reading fades in beside it.
 *
 * First draw: the deck also slides from the center to its place on the left.
 * Later draws: the current card and reading clear first.
 */

// Card back used on the card while it is being dealt.
const DEALING_CARD_BACK = 'assets/cards/back.png';

// Timing (ms)
const DECK_SLIDE_MS = 550;
const DEAL_MS = 850;
const CLEAR_MS = 300;
const PROMPT_OUT_MS = 250;
const TEXT_IN_MS = 400;

// DOM
const app = document.getElementById('app');
const deck = document.getElementById('deck');
const flipCard = document.getElementById('flipCard');
const flipInner = document.getElementById('flipInner');
const cardImage = document.getElementById('cardImage');
const interpretation = document.getElementById('interpretation');
const cardName = document.getElementById('cardName');
const cardOrientation = document.getElementById('cardOrientation');
const interpretationText = document.getElementById('interpretationText');
const askPrompt = document.getElementById('askPrompt');
const askHand = document.getElementById('askHand');
const deckLabel = document.getElementById('deckLabel');

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

let hasDrawn = false;
let busy = false;

function init() {
    flipCard.querySelector('.face-back').src = DEALING_CARD_BACK;
    deck.addEventListener('click', handleDraw);
    // The prompt and hand are part of the invitation, so tapping them draws too
    askPrompt.addEventListener('click', handleDraw);
    askHand.addEventListener('click', handleDraw);
}

async function handleDraw() {
    if (busy) return;
    busy = true;
    deck.setAttribute('aria-disabled', 'true');

    const card = getRandomCard();
    const orientation = getRandomOrientation();
    const imagePath = getCardImage(card, orientation);
    const imageReady = loadImage(imagePath); // start loading right away

    try {
        if (!hasDrawn) {
            await moveDeckToSide();
            hasDrawn = true;
        } else {
            await clearCurrentCard();
        }

        await imageReady;
        cardImage.src = imagePath;
        cardImage.alt = `${card.name}, ${orientation}`;
        cardName.textContent = card.name;
        cardOrientation.textContent = orientation;
        interpretationText.textContent = getCardText(card, orientation);

        await dealCard();
        await showReading();
    } finally {
        busy = false;
        deck.removeAttribute('aria-disabled');
        deck.setAttribute('aria-label', 'Ask again');
    }
}

/** First draw: slide the deck from center stage to its spot on the left. */
async function moveDeckToSide() {
    // The welcome prompt fades away first; it is not shown again
    await Promise.all([askPrompt, askHand].map(el =>
        animate(el, [{ opacity: 1 }, { opacity: 0 }],
            { duration: PROMPT_OUT_MS, easing: 'ease-in', fill: 'forwards' })));

    const first = deck.getBoundingClientRect();
    app.classList.remove('welcome-state');
    app.classList.add('reading-state');
    const last = deck.getBoundingClientRect();

    // "Ask Again" waits until the deck has settled, then fades in
    deckLabel.style.opacity = '0';
    await animate(deck, [
        { transform: fromTo(first, last) },
        { transform: 'none' }
    ], { duration: DECK_SLIDE_MS, easing: 'cubic-bezier(0.2, 0.7, 0.2, 1)' });
    deckLabel.style.opacity = '';
    animate(deckLabel, [{ opacity: 0 }, { opacity: 1 }], { duration: TEXT_IN_MS, easing: 'ease-out' });
}

/** Later draws: the current card slides away and the text fades. */
async function clearCurrentCard() {
    await Promise.all([
        animate(interpretation, [{ opacity: 1 }, { opacity: 0 }],
            { duration: CLEAR_MS, easing: 'ease-in' }),
        animate(flipCard, [
            { opacity: 1, transform: 'none' },
            { opacity: 0, transform: 'translateX(32px)' }
        ], { duration: CLEAR_MS, easing: 'ease-in' })
    ]);
    interpretation.classList.add('is-hidden');
    flipCard.classList.add('is-hidden');
}

/** Lift the top card off the deck, carry it to the slot and flip it face up. */
async function dealCard() {
    flipCard.classList.remove('is-hidden');
    const from = deck.getBoundingClientRect();
    const to = flipCard.getBoundingClientRect();

    const dx = from.left - to.left;
    const dy = from.top - to.top;
    const s = from.width / to.width;
    const midScale = (s + 1) / 2;

    const timing = { duration: DEAL_MS, easing: 'cubic-bezier(0.3, 0.6, 0.2, 1)', fill: 'backwards' };

    await Promise.all([
        animate(flipCard, [
            { transform: `translate(${dx}px, ${dy}px) scale(${s})` },
            { transform: `translate(${dx / 2}px, ${dy / 2 - 28}px) scale(${midScale})`, offset: 0.5 },
            { transform: 'none' }
        ], timing),
        animate(flipInner, [
            { transform: 'rotateY(0deg)' },
            { transform: 'rotateY(180deg)' }
        ], timing)
    ]);
}

/** Fade the reading in beside the card. */
async function showReading() {
    interpretation.classList.remove('is-hidden');
    await animate(interpretation, [
        { opacity: 0, transform: 'translateY(8px)' },
        { opacity: 1, transform: 'none' }
    ], { duration: TEXT_IN_MS, easing: 'ease-out', fill: 'backwards' });
}

/* ---------- helpers ---------- */

/** Run a Web Animation and wait for it; skipped when reduced motion is on. */
function animate(el, keyframes, options) {
    if (reduceMotion.matches || !el.animate) return Promise.resolve();
    return el.animate(keyframes, options).finished.catch(() => {});
}

/** Transform that places an element at `last` back where `first` was. */
function fromTo(first, last) {
    const dx = first.left - last.left;
    const dy = first.top - last.top;
    const s = first.width / last.width;
    return `translate(${dx}px, ${dy}px) scale(${s})`;
}

/** Resolve once the image is downloaded and decoded (never rejects). */
function loadImage(src) {
    const img = new Image();
    img.src = src;
    return (img.decode ? img.decode() : Promise.resolve()).catch(() => {});
}

function getRandomCard() {
    return CARDS[Math.floor(Math.random() * CARDS.length)];
}

function getRandomOrientation() {
    return Math.random() < 0.5 ? 'Upright' : 'Reversed';
}

function getCardImage(card, orientation) {
    return orientation === 'Reversed' ? card.imageReversed : card.imageUpright;
}

function getCardText(card, orientation) {
    return orientation === 'Reversed' ? card.textReversed : card.textUpright;
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
