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
const returnHomeLink = document.querySelector('.return-home-link');

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
    returnHomeLink.addEventListener('click', handleReturnHome);
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
 * Handle return home link
 */
function handleReturnHome(e) {
    e.preventDefault();
    displayWelcomeState();
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
    cardImage.alt = 'Welcome card. Click Draw Your Card to begin your reading.';

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

// Initialize on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}