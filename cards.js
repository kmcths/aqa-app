/**
 * Card Data Structure
 *
 * Each card object contains:
 * - id: Unique identifier (1-12 for demo, up to 78 for full deck)
 * - name: Display name of the card (e.g., "The Sun")
 * - imageUpright: Path to upright card image (1410x2250px PNG)
 * - imageReversed: Path to reversed card image (1410x2250px PNG)
 * - textUpright: Interpretation text when card is upright
 * - textReversed: Interpretation text when card is reversed
 */

const CARDS = [
    {
    id: 1,
    name: "The Chariot",
    imageUpright: "assets/cards/chariot.png",
    imageReversed: "assets/cards/chariot-reversed.png",
    textUpright: "Look at you, grabbing the reins and actually going somewhere. Momentum is on your side, and for once the horses seem to agree. Pick a direction and keep moving before anyone asks for a map.",
    textReversed: "Easy there, Ben-Hur. You may be moving fast, but that doesn't mean you're headed anywhere useful. Check the wheels, loosen your grip, and make sure everyone is pulling in roughly the same direction."
},
{
    id: 2,
    name: "Death",
    imageUpright: "assets/cards/death.png",
    imageReversed: "assets/cards/death-reversed.png",
    textUpright: "Well, that's over. Probably for the best. Something has run its course, cleared its desk, and left the building. Let it go and enjoy the strange amount of room it leaves behind.",
    textReversed: "You know that thing that's clearly finished? You're still carrying it around. No need for a dramatic funeral, but maybe stop watering it. Make some space and see what insists on growing there instead."
},
{
    id: 3,
    name: "The Devil",
    imageUpright: "assets/cards/devil.png",
    imageReversed: "assets/cards/devil-reversed.png",
    textUpright: "Ooh, tempting. You know exactly what you want, and apparently it comes with excellent lighting and questionable judgment. Enjoy the attraction, but keep one hand on the exit door.",
    textReversed: "The spell is wearing off, and honestly, it wasn't that good a spell. Whatever has been tugging at your sleeve may not deserve this much attention. Step outside, get some air, and reconsider the terms."
},
{
    id: 4,
    name: "The Hanged Man",
    imageUpright: "assets/cards/hanged.png",
    imageReversed: "assets/cards/hanged-reversed.png",
    textUpright: "Well, this is awkward. Still, the view from upside down is surprisingly informative. Stop trying to wriggle free for a minute and see what becomes obvious when you aren't charging straight at it.",
    textReversed: "You've been hanging around long enough to qualify as furniture. Reflection is useful, but eventually it turns into procrastination with better branding. Untangle yourself and make one small move."
},
{
    id: 5,
    name: "The Hermit",
    imageUpright: "assets/cards/hermit.png",
    imageReversed: "assets/cards/hermit-reversed.png",
    textUpright: "Congratulations, you've found the quiet corner. No meetings, no chatter, just you and one suspiciously tiny lantern. Stay there long enough to hear yourself think, then bring something useful back with you.",
    textReversed: "Solitude is lovely until you start giving yourself terrible advice. You may have disappeared a little too effectively. Open the door, answer a message, and let another human being challenge your brilliant conclusions."
},
{
    id: 6,
    name: "The Moon",
    imageUpright: "assets/cards/moon.png",
    imageReversed: "assets/cards/moon-reversed.png",
    textUpright: "Everything looks stranger after dark, which is half the fun. Your instincts are picking up things your daylight brain keeps missing. Follow the glow, but don't assume every mysterious shape needs an explanation.",
    textReversed: "That shadow may be a wolf, or it may be a recycling bin. Your imagination is doing overtime and charging you for it. Wait for better light before making any declarations, accusations, or life-changing purchases."
},
{
    id: 7,
    name: "The Star",
    imageUpright: "assets/cards/star.png",
    imageReversed: "assets/cards/star-reversed.png",
    textUpright: "There it is: one bright, ridiculous little reason to keep going. Things may not be fixed yet, but at least the sky has stopped sulking. Take the encouragement and use it while it's available.",
    textReversed: "The stars are still up there, even if you're currently under a cloud, an awning, or a bad mood. Don't demand inspiration on schedule. Do one decent thing and let hope catch up later."
},
{
    id: 8,
    name: "Strength",
    imageUpright: "assets/cards/strength.png",
    imageReversed: "assets/cards/strength-reversed.png",
    textUpright: "You don't have to wrestle the lion. Apparently you can just sit beside it and be charming. Calm confidence will get you farther than showing everyone your teeth. Use the soft voice first.",
    textReversed: "You're trying very hard to look strong, which is usually when someone drops a jar. Stop white-knuckling everything. Ask for help, take the easier route, and save the roaring for a situation that actually requires it."
},
{
    id: 9,
    name: "The Sun",
    imageUpright: "assets/cards/sun.png",
    imageReversed: "assets/cards/sun-reversed.png",
    textUpright: "What a nice day! Like a little seedling you are reaching up and soaking it all in. There is no better star to reach for.",
    textReversed: "Whoa! Where's your sunscreen? It's hot today, are you sure you can handle it? Maybe best to find a bit of, out-of-the-way shade until evening."
},
{
    id: 10,
    name: "The Tower",
    imageUpright: "assets/cards/tower.png",
    imageReversed: "assets/cards/tower-reversed.png",
    textUpright: "Well, that escalated quickly. Something unstable has finally had the courtesy to collapse in public. Once the dust settles, take a good look at what no longer needs pretending, patching, or propping up.",
    textReversed: "You can hear the creaking, can't you? Nothing has fallen yet, but maybe don't schedule a rooftop party. Make the boring repair now, before the universe decides to handle demolition itself."
},
{
    id: 11,
    name: "The Wheel of Fortune",
    imageUpright: "assets/cards/wheel.png",
    imageReversed: "assets/cards/wheel-reversed.png",
    textUpright: "Round and round it goes, and somehow you've landed on a good square. Enjoy the lift while you've got it. Say yes, take the opening, and remember to wave politely as the wheel keeps turning.",
    textReversed: "The wheel has hit a pothole. Annoying, yes, but hardly a curse from the heavens. Don't chase your losses or kick the machinery. Adjust your footing and wait for the next turn."
},
{
    id: 12,
    name: "The World",
    imageUpright: "assets/cards/world.png",
    imageReversed: "assets/cards/world-reversed.png",
    textUpright: "Look at that: you actually finished something. The pieces fit, the circle closes, and nobody even had to fake a power outage. Take the victory lap, then decide what deserves your attention next.",
    textReversed: "You're almost there, which is exactly why you're suddenly reorganizing the junk drawer. One loose end is keeping the whole thing from feeling finished. Find it, deal with it, and stop inventing bonus levels."
},
];

/**
 * Get a random card from the deck
 * @returns {Object} A random card object
 */
function getRandomCard() {
    const randomIndex = Math.floor(Math.random() * CARDS.length);
    return CARDS[randomIndex];
}

/**
 * Get a random orientation
 * @returns {string} Either "upright" or "reversed"
 */
function getRandomOrientation() {
    return Math.random() > 0.5 ? "upright" : "reversed";
}

/**
 * Get the correct image path based on orientation
 * @param {Object} card - The card object
 * @param {string} orientation - "upright" or "reversed"
 * @returns {string} Path to the card image
 */
function getCardImage(card, orientation) {
    return orientation === "upright" ? card.imageUpright : card.imageReversed;
}

/**
 * Get the correct interpretation text based on orientation
 * @param {Object} card - The card object
 * @param {string} orientation - "upright" or "reversed"
 * @returns {string} Interpretation text
 */
function getCardText(card, orientation) {
    return orientation === "upright" ? card.textUpright : card.textReversed;
}