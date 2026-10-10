/**
 * Aquarian Answers - Daily Reading
 * State management and interaction logic
 */

// DOM Elements
const app = document.getElementById('app');
const actionButton = document.getElementById('actionButton');
const cardImage = document.getElementById('cardImage');
const cardName = document.getElementById('cardName');
const cardOrientation = document.getElementById('cardOrientation');
const interpretationText = document.getElementById('interpretationText');
const interpretationSection = document.querySelector('.interpretation-section');
const scrollIndicator = document.querySelector('.scroll-indicator');
const cardContainer = document.getElementById('cardContainer');

// State
let currentState = 'welcome'; // 'welcome' or 'reading'
let currentCard = null;
let currentOrientation = null;

/**
 * Initialize the app
 */
function init() {
    setupEventListeners();
    displayWelcomeState();
}

/**
 * Setup event listeners
 */
function setupEventListeners() {
    actionButton.addEventListener('click', handleActionButtonClick);

    // The card back acts as the button on the welcome screen
    cardContainer.addEventListener('click', handleCardBackActivate);
    cardContainer.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleCardBackActivate();
        }
    });
}

/**
 * Clicking the card back draws a card, but only on the welcome screen.
 * A drawn card face is not clickable.
 */
function handleCardBackActivate() {
    if (currentState === 'welcome') {
        drawNewCard();
    }
}

/**
 * Handle action button click
 * In welcome state: transition to reading state
 * In reading state: draw a new card
 */
function handleActionButtonClick(e) {
    e.preventDefault();

    if (currentState === 'welcome') {
        drawNewCard();
    } else if (currentState === 'reading') {
        drawNewCard();
    }
}

/**
 * Display welcome state
 */
function displayWelcomeState() {
    currentState = 'welcome';

    // Update app state class
    app.classList.add('welcome-state');

    // Update card image (show back.png or welcome.png)
    cardImage.src = 'assets/cards/back.png';
    cardImage.alt = 'Card back';

    // Make the card back behave as a button
    cardContainer.setAttribute('role', 'button');
    cardContainer.setAttribute('tabindex', '0');
    cardContainer.setAttribute('aria-label', 'Draw your card');

    // Update button
    actionButton.textContent = 'Draw Your Card';
    actionButton.setAttribute('aria-label', 'Draw your first card');

    // Hide interpretation elements
    interpretationSection.classList.add('hidden');
    scrollIndicator.classList.add('hidden');

    // Reset current card state
    currentCard = null;
    currentOrientation = null;
}

/**
 * Draw a new card
 */
function drawNewCard() {
    // Get random card and orientation
    currentCard = getRandomCard();
    currentOrientation = getRandomOrientation();

    // Update state
    currentState = 'reading';
    app.classList.remove('welcome-state');

    // The drawn card face is not a button
    cardContainer.removeAttribute('role');
    cardContainer.removeAttribute('tabindex');
    cardContainer.removeAttribute('aria-label');

    // Get image and text
    const imagePath = getCardImage(currentCard, currentOrientation);
    const text = getCardText(currentCard, currentOrientation);

    // Update card image
    cardImage.src = imagePath;

    // Create alt text for accessibility
    const altText = `${currentCard.name} card, ${currentOrientation} orientation. ${text}`;
    cardImage.alt = altText;

    // Update interpretation display
    updateInterpretationDisplay();

    // Show interpretation elements
    interpretationSection.classList.remove('hidden');
    scrollIndicator.classList.remove('hidden');

    // Update button
    actionButton.textContent = 'Draw a New Card';
    actionButton.setAttribute('aria-label', `Draw another card. Current card: ${currentCard.name}, ${currentOrientation}`);

    // Scroll to top to show the card
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Update the interpretation display section
 */
function updateInterpretationDisplay() {
    if (!currentCard || !currentOrientation) {
        return;
    }

    const text = getCardText(currentCard, currentOrientation);

    // Update elements
    cardName.textContent = currentCard.name;
    cardOrientation.textContent = `${currentOrientation}`;
    interpretationText.textContent = text;

    // Update aria-live region for screen readers
    interpretationSection.setAttribute('aria-live', 'polite');
}

/**
 * Utility: Parse card name to file-friendly format
 * e.g., "The Sun" -> "sun"
 */
function cardNameToFileName(name) {
    return name
        .toLowerCase()
        .replace(/^the\s+/, '')
        .replace(/\s+/g, '-');
}

/** Select a card from the full deck in cards.js. */
function getRandomCard() {
    return CARDS[Math.floor(Math.random() * CARDS.length)];
}

/** Each reading has an equal chance of upright or reversed. */
function getRandomOrientation() {
    return Math.random() < 0.5 ? 'Upright' : 'Reversed';
}

function getCardImage(card, orientation) {
    return orientation === 'Reversed' ? card.imageReversed : card.imageUpright;
}

function getCardText(card, orientation) {
    return orientation === 'Reversed' ? card.textReversed : card.textUpright;
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}