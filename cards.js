// Tarot cards data for Aquarian Answers app
// Generated from Choose_Your_Card-AQA.txt
//
// NOTE: Image paths assume you have:
// - assets/cards/<card-name>.webp (the card art; reversed cards are this image rotated 180 degrees in code)
// - assets/cards/thumbs/<card-name>.webp (180px thumbnails)
//
// Filenames match the 78 named card images; numbering follows the card list.

const CARDS = [
  {
    id: 1,
    name: "The Fool",
    image: "assets/cards/fool.webp",
    textUpright: "Go for it, whatever it is. Don't worry that you don't have a plan, or any clear sense of what you're trying to accomplish. The important thing is to move, to begin, to trust that the Universe will create the path under your feet even where no path existed before.",
    textReversed: "Have a little more faith in the process. You don't need to make the plan. All you need to do is begin. Open the door. Sniff the breeze. Follow your nose, and trust that your co-pilot, the Universe itself, will help you find the way. All you need to bring is your spirit of adventure."
  },
  {
    id: 2,
    name: "The Magician",
    image: "assets/cards/magician.webp",
    textUpright: "You are acting from the most powerful ignition point there is for manifesting your dreams—the spark of your own desire. No need to worry about what is prudent, realistic, or dutiful right now. There is boundless energy to achieve your vision when you operate from your curiosity, your interest, your enthusiasm, and your enjoyment.",
    textReversed: "You are not honoring what you truly want. Perhaps you think it's impossible, or against some rule. Maybe you're afraid you'll get in trouble or people will judge you. Dear one, none of that matters. How can the Universe grant your heart's desire if you don't let yourself make the wish?"
  },
  {
    id: 3,
    name: "The High Priestess",
    image: "assets/cards/high-priestess.webp",
    textUpright: "Never underestimate the power of an invitation. The magic of the High Priestess is that she knows how to invite the Universe to fulfill her vision. She doesn't worry about how that vision will come about. She simply draws such an attractive picture that the Universe can't resist making it come true.",
    textReversed: "You know what you want, but you are holding back from inviting it into your life. Maybe you have decided it's impossible, just because you can't yet see how it could happen. Don't worry about the how. Leave that part up to the Universe, which is capable of miracles. Your job right now is to draw such an inviting picture of what you want that the Universe won't be able to resist your invitation."
  },
  {
    id: 4,
    name: "The Empress",
    image: "assets/cards/empress.webp",
    textUpright: "You are putting in the time, energy, resources and practical step-by-step effort to bring your vision into reality. You are joyfully and gracefully mothering your creation into being.",
    textReversed: "Something is holding you back from the practical, hands-on effort of bringing your dream into reality. Most likely the obstacle is a perceived lack of resources. Where might you locate the money, time, or materials to nurture your creation into being?"
  },
  {
    id: 5,
    name: "The Emperor",
    image: "assets/cards/emperor.webp",
    textUpright: "You have the stability and the authority to get your way in the matter at hand, and most likely you are interested in keeping things the way they are. The Emperor likes his life the way it is, thank you, and he has the power to keep it that way.",
    textReversed: "You may be trying to hold back the tide in some fashion. The Emperor likes his life the way it is, and tends to resist change. And yet, in a head-to-head battle, change always wins. You will be better served by accepting the transformation at hand, and putting your efforts into guiding it in a direction that suits you."
  },
  {
    id: 6,
    name: "The Hierophant",
    image: "assets/cards/hierophant.webp",
    textUpright: "The Hierophant gets his authority from established institutions and the structures they have built—the law, the government, the university, the church. In your current situation, the traditional ways are serving you, or perhaps it's in your best interests to serve them, at least for the time being. Sometimes the wisdom of our forebears is exactly what we need.",
    textReversed: "Sometimes \"the way we have always done things around here\" provides structure and stability, but right now that structure feels more like a cage. Creative rebellion is the recommended approach here, but you will need to be strategic. The Hierophant likes his rules and has plenty of ways to enforce them."
  },
  {
    id: 7,
    name: "The Lovers",
    image: "assets/cards/lovers.webp",
    textUpright: "We create the life we're living through the choices we make every day, and right now you are urged to choose your heart's desire. Sometimes we treat life like a guessing game, trying to strategize our way to a desired outcome, when what's called for is a simpler approach. What do you truly want? Choose that.",
    textReversed: "We create the life we're living through the choices we make every day, and your heart's choice is always the way to go. But our heart's choice does not always seem convenient, safe, or sane. Are you trying to talk your heart into something it doesn't want, or out of something it does? Consider giving it what it wants, torpedos be damned."
  },
  {
    id: 8,
    name: "The Chariot",
    image: "assets/cards/chariot.webp",
    textUpright: "The Chariot rides out from the walled city to greet and address any challengers who approach. It claims jurisdiction in matters that affect its interests, rather than retreating behind high walls and drawing up the bridge. You are advised to do the same. Claim your ground and stand it. You've got this.",
    textReversed: "The Chariot rides out from the walled city to greet and address any challengers who approach. It claims jurisdiction in matters that affect its interests, and takes an active approach to meeting them. You may be struggling to find the confidence to do the same. Courage, dear heart. This challenge is yours for the winning, but you have to show up and claim your ground."
  },
  {
    id: 9,
    name: "Strength",
    image: "assets/cards/strength.webp",
    textUpright: "You know the stories about mothers lifting cars to save their children? Our greatest source of strength is not our muscles, but our spirit. When we act in alignment with our soul's purpose, we unlock super powers that we never discover when we act from duty, routine, or training. Focus your efforts on the thing that truly matters to you, and trust that whatever it takes lies within you.",
    textReversed: "When we act in alignment with what is meaningful and important to us, there is very little we can't accomplish. If you are feeling overwhelmed and incapable right now, it is very likely because you are focusing your efforts in a direction that is not aligned with your soul's purpose. Sometimes \"I can't\" doesn't mean you are weak. Sometimes it just means you didn't come here for this."
  },
  {
    id: 10,
    name: "The Hermit",
    image: "assets/cards/hermit.webp",
    textUpright: "Hermits walk their own path by the light of their own lanterns. This card is a strong confirmation that what you are undertaking now is aligned with what is meaningful and important to you, and your way is illuminated by the light you generate with your own desire and sense of purpose.",
    textReversed: "Hermits are associated with solitude, not because they are lonely, but because they walk their own path. When the Hermit appears in reverse, it's a sign that other people's agendas are drawing you off the path of what is meaningful and important to you. The lantern is fueled by the pursuit of your own unique purpose. If you walk someone else's path, it will burn out and leave you stumbling in the dark."
  },
  {
    id: 11,
    name: "Wheel of Fortune",
    image: "assets/cards/wheel-of-fortune.webp",
    textUpright: "The Wheel of Fortune is like a water wheel powered by the Universal current of creative expansion. It turns in your favor when you act from your desire, your curiosity, your enthusiasm and your sense of purpose. You are bringing your best creative self to your vision, and the Universe is inspired to help carry you on your mission.",
    textReversed: "The Wheel of Fortune is like a water wheel powered by the Universal current of creative expansion. When it appears in reverse, it's a sign that you are trying to swim against this current, or resist its flow. What fear is holding you back from your true creative mission? How can you change course to act from your hope, your desire, your sense of meaning and purpose, instead?"
  },
  {
    id: 12,
    name: "Justice",
    image: "assets/cards/justice.webp",
    textUpright: "Justice occurs when the Universe responds favorably to our petition. The door is opening to the thing you have been inviting, envisioning, hoping for, and very likely it's a door you never suspected until it appeared. That's because it probably didn't exist until you invited it into being with your vision.",
    textReversed: "Justice occurs when the Universe responds favorably to our petition. If your invitation is being left on read, review your vision. Are you inviting what you truly want, or only what you think you can get? Are you being too specific about how you want your request to be granted? Try to get clear on what you truly wish to bring into being, and leave the how to the Universe, which is capable of miracles."
  },
  {
    id: 13,
    name: "The Hanged Man",
    image: "assets/cards/hanged-man.webp",
    textUpright: "In this material world, things take time to develop. Acorns don't grow into oak trees overnight. You may feel that nothing is happening, but that's probably how a child in the womb feels, too, when nothing could be farther from the truth. Trust that you and your creative projects are currently in gestation. When things finally get moving again, you will be amazed how much has changed during this seeming pause.",
    textReversed: "In this material world, things take time to develop. Caterpillars don't transform overnight. However, at some point, all butterflies must emerge from the chrysalis. What are you waiting for? Permission? The perfect moment? Nonsense. It's time to come forth, and spread your wings."
  },
  {
    id: 14,
    name: "Death",
    image: "assets/cards/death.webp",
    textUpright: "In this ever-expanding Universe, the only certainty is change. Anything that has gotten too comfortable just the way it is, thank you, is heading for a shake-up. And that shake-up represents true transformation, the established and calcified becoming luminous and new.",
    textReversed: "In this ever-expanding Universe, the only certainty is change. Resistance is futile, and yet, resist we do. What necessary transformation is it time to give in to?"
  },
  {
    id: 15,
    name: "Temperance",
    image: "assets/cards/temperance.webp",
    textUpright: "To temper something is to subject it to a process that transforms it into a more valuable state. In this case, you are putting some established and probably hidebound way of doing things through your own unique creative process in order to improve it as only you can.",
    textReversed: "This card refers to using your creative process to transform some established and hidebound way of doing things into a form that will suit you better. Right now, the old way is sticking to its guns, and trying your temper. Trust that the transformation you long for is within your power. Search your cupboards and you will find the spell you're looking for."
  },
  {
    id: 16,
    name: "The Devil",
    image: "assets/cards/devil.webp",
    textUpright: "The Devil appears when the choices you once freely made have now become a cage. You chose your way into this mess and you have the power to choose your way out. Though you may fear the sacrifice that this new choice will require, there is no doubt that the sacrifice of staying where you are is much, much greater.",
    textReversed: "You've been trapped in a cage of your own choosing, but you have discovered that the door is unlocked. What stops you from setting yourself free? Usually fear. And here's the thing. Fear is a mirage that vanishes the moment you walk through it. But every day you stay in the cage is another day of your life sacrificed."
  },
  {
    id: 17,
    name: "The Tower",
    image: "assets/cards/tower.webp",
    textUpright: "When life challenges you, you have the option of riding out to meet that challenge, or retreating to higher ground. While retreat might look like a prudent choice in the short-term, in the long run, you will run out of higher ground. And everything you've run from will be waiting for you at the bottom. This card invites you to notice where you've been playing victim when hero would be a more becoming role.",
    textReversed: "When life challenges you, you have the option of riding out to meet that challenge, or retreating to higher ground. While retreat might look like a prudent choice in the short-term, in the long run, you will run out of higher ground. You figured this out before the siege got fully underway, and are climbing down from your tower to address your challengers on solid ground."
  },
  {
    id: 18,
    name: "The Star",
    image: "assets/cards/star.webp",
    textUpright: "When your spirit chose the specific human life that you are currently living, it did so out of Love. Whatever role we came here to play, no matter that we don't remember and can't imagine its significance from our human perspective, had meaning and purpose to the part of us that is and always will be one with the Universe. When this card appears, you are touching this sense of meaning and purpose. Whatever the matter at hand, this is what you came for.",
    textReversed: "When your spirit chose the specific human life that you are currently living, it did so out of Love. Whatever role we came here to play had meaning and purpose to the part of us that is and always will be one with the Universe. When this card is reversed, you are experiencing the grief of forgetting that this is the case. Take courage, Star Child. You don't need to remember why you came here to trust that it was for the best of reasons, and that you are playing your part."
  },
  {
    id: 19,
    name: "The Moon",
    image: "assets/cards/moon.webp",
    textUpright: "In this world of duality, nothing bright and beautiful can exist without its opposite. Each of us came here with the intention to find a better way. But before we can make something better, we have to experience what we wish to change. The waxing moon creates its light from its own darkness, and you, Child of the Moon, are doing the same.",
    textReversed: "The waxing moon creates its light from its own darkness. But also in every moon cycle, darkness takes over and swallows the light. Don't be afraid. This darkness is only temporary. It's here to show you precisely where you came to shine your light."
  },
  {
    id: 20,
    name: "The Sun",
    image: "assets/cards/sun.webp",
    textUpright: "The light, warmth, and energy of the Sun powers the creativity of life on Earth. Likewise, human creativity is powered by our sunny sense of agency, the faith and confidence that attracts support for our dreams long before we have any practical ability to work towards them.",
    textReversed: "No matter the potential in the seed, it can't grow without the light, warmth, and energy of the Sun. Likewise, no amount of talent, training, or planning will bear fruit without the energy and power of your desire. If you're feeling listless and burned out, chances are you've gotten caught up in the pursuit of someone else's dream. Reconnect with the boundless energy source of what you truly want."
  },
  {
    id: 21,
    name: "Judgement",
    image: "assets/cards/judgement.webp",
    textUpright: "You invited the thing you want to achieve, and the Universe opened the door. You are stepping through it, onto a path that didn't exist until you wanted it to be there. The journey still lies ahead of you, with all its twists and turns, but this is the moment when it begins. Congratulations, and godspeed.",
    textReversed: "An opportunity, perhaps one you hoped for, has opened before you, but it no longer feels meant for you. No worries. The clarity of knowing which path not to take is also a gift."
  },
  {
    id: 22,
    name: "The World",
    image: "assets/cards/world.webp",
    textUpright: "The World represents birth, the bringing forth of your creation. It's a card of completion, the end of your labor and the beginning of what you have brought into being. This is a moment to release and let go. Because this is an ending as well as a beginning, you may be mourning as much as celebrating, but where either option is valid, celebration is preferred.",
    textReversed: "This is a moment of completion, but you are still holding on. You may be very focused on what is ending, and fearful of the new beginning that lies beyond it. Remember that fear is about something that is not happening now, and may not happen. The same definition applies to hope. When fear rises up, remember that hope is equally valid, and a much more pleasant way to move into the unknown."
  },
  {
    id: 23,
    name: "Ace of Wands",
    image: "assets/cards/ace-of-wands.webp",
    textUpright: "Every fire begins with a single spark, the impulse that generates light and heat where before there was nothing. This is that moment of ignition, the desire that creates the first burst of energy that sets everything that follows in motion.",
    textReversed: "Every fire begins with a single spark, the impulse that generates light and heat where before there was nothing. But the spark is tiny and easily quenched. What desire is getting snuffed out before it has a chance to blaze?"
  },
  {
    id: 24,
    name: "Two of Wands",
    image: "assets/cards/two-of-wands.webp",
    textUpright: "Every journey begins with a fantasy. Who's going, where, and what do we want to do? This is not the moment to get too bogged down in the how—this is the time to develop the vision and the excitement that will launch the expedition.",
    textReversed: "Every journey begins with a fantasy. Who's going, where, and what do we want to do? The easiest way to sabotage this stage is to put the how ahead of the what. Let yourself dream and get excited first, before you tackle the budget."
  },
  {
    id: 25,
    name: "Three of Wands",
    image: "assets/cards/three-of-wands.webp",
    textUpright: "This is where you untie your moorings and launch. The dreaming and planning are behind you—now is the time to set sail and put the vision into action.",
    textReversed: "This is the moment to set sail and be on your merry way, but something is holding you back. What is causing the delay? Is it last-minute jitters, or are you on the wrong ship?"
  },
  {
    id: 26,
    name: "Four of Wands",
    image: "assets/cards/four-of-wands.webp",
    textUpright: "This moment represents a homecoming, a reunion, a celebration, or some situation where the action reinforces and solidifies what has already been accomplished, rather than launching some new enterprise.",
    textReversed: "Something that previously felt homelike and stable, an established foundation, is not giving you that feeling at the moment."
  },
  {
    id: 27,
    name: "Five of Wands",
    image: "assets/cards/five-of-wands.webp",
    textUpright: "There is an established, tried-and-true way of doing things, and that is not the way you, personally, want to proceed in this matter. The old ways have momentum that is difficult to shift, but you didn't come here to follow someone else's script. Just note that when teaching a new trick to an old dog, strategy and diplomacy work better than force.",
    textReversed: "You are butting heads with some hidebound force, probably one with an established bureaucracy. Right now, the fight is going against you. Is your cause worth the battle? If so, you may want to consider a change in strategy."
  },
  {
    id: 28,
    name: "Six of Wands",
    image: "assets/cards/six-of-wands.webp",
    textUpright: "This is an action that others will celebrate and view as successful, and which will inspire them to lend their efforts to yours.",
    textReversed: "You may feel that your efforts are not being recognized or rewarded, and that others are not supporting you. That doesn't mean it's the wrong thing to do. Just make sure it matters enough to you that you won't need a parade in your honor to make it worthwhile."
  },
  {
    id: 29,
    name: "Seven of Wands",
    image: "assets/cards/seven-of-wands.webp",
    textUpright: "This challenge is yours for the winning. Claim your ground and show up for the contest.",
    textReversed: "You may feel overwhelmed by the challenge you are facing. Know that it's yours for the winning, but you have to claim your ground and show up for the contest. Walking away now will only make you the victim of the situation."
  },
  {
    id: 30,
    name: "Eight of Wands",
    image: "assets/cards/eight-of-wands.webp",
    textUpright: "It's go time! Act now, and do not hesitate. Your odds of success are excellent.",
    textReversed: "You feel a pressing sense of urgency but your progress is stalled, like being stuck in traffic on your way to the airport. Know that the flight meant for you will not leave until you are on it. Take a deep breath and trust that this delay is happening for you, not to you."
  },
  {
    id: 31,
    name: "Nine of Wands",
    image: "assets/cards/nine-of-wands.webp",
    textUpright: "This is the last hurdle before the finish line, and you're already in the air. Everything you've learned along the way has gotten you to this point. Just do what you know how to do, and victory is yours.",
    textReversed: "You've fought this battle a thousand times. You could do it in your sleep. And then wake up and do it again. But don't you have better things to do with your time?"
  },
  {
    id: 32,
    name: "Ten of Wands",
    image: "assets/cards/ten-of-wands.webp",
    textUpright: "Hooray, you did it! You made it the whole way! And if you're not careful, momentum will carry you right past your destination. A different kind of effort is needed now. Apply the breaks. Set down your burdens, or hand them off. This is what you came for.",
    textReversed: "You've carried this load as far as you can take it, and yet you are still carrying it. Dear one, it is time to stop. You have accomplished what you came here to do, and any further effort will not help your cause, but it will injure you."
  },
  {
    id: 33,
    name: "Page of Wands",
    image: "assets/cards/page-of-wands.webp",
    textUpright: "You are trying something you haven't done before and the energy of your enthusiasm is powering your efforts. You are letting the process be your teacher, and you are an excellent student.",
    textReversed: "You want to try something new, something you haven't done before, and you don't know how to begin. That's fine, you're not supposed to know how. For now, just focus on the what. The clearer you are about what you want, the more easily you will recognize the opportunity when it shows up."
  },
  {
    id: 34,
    name: "Knight of Wands",
    image: "assets/cards/knight-of-wands.webp",
    textUpright: "You have the courage of your convictions and the energy to match. Now is not the time to twiddle thumbs and await the decision of the board. Now is the time to ride at dawn.",
    textReversed: "You have all of the energy and none of the patience, but your horse is lame and you can't get this show on the road. Take off your blinders and look around. If the way you're trying to go is shut, what other outlets might there be for your energy and passion?"
  },
  {
    id: 35,
    name: "Queen of Wands",
    image: "assets/cards/queen-of-wands.webp",
    textUpright: "You are taking action to create what you want to achieve. As you well know, some things must move to take form—bread must be kneaded, and pudding stirred. Your efforts are fruitful and the fruit is delicious.",
    textReversed: "Your most natural creative mode is action—stirring the pudding, kneading the bread, putting the life in the party—but just at the moment your battery is drained. Sometimes action isn't the answer. What do you need instead?"
  },
  {
    id: 36,
    name: "King of Wands",
    image: "assets/cards/king-of-wands.webp",
    textUpright: "You are in chief executive mode, taking action to create the material reality you wish to live in.",
    textReversed: "You have the capacity to take the actions that will lead to the material reality you wish to live in, but you are not taking them. What is stopping you? Is it fear? Are you waiting for permission? Your majesty, kings have nothing to fear but fear itself, and do not need permission. Pick up your magic wand and have at it."
  },
  {
    id: 37,
    name: "Ace of Cups",
    image: "assets/cards/ace-of-cups.webp",
    textUpright: "I'm sorry. I can't come to the reading right now. Please try a new card.",
    textReversed: "I'm sorry. I can't come to the reading right now. Please try a new card."
  },
  {
    id: 38,
    name: "Two of Cups",
    image: "assets/cards/two-of-cups.webp",
    textUpright: "I'm sorry. I can't come to the reading right now. Please try a new card.",
    textReversed: "I'm sorry. I can't come to the reading right now. Please try a new card."
  },
  {
    id: 39,
    name: "Three of Cups",
    image: "assets/cards/three-of-cups.webp",
    textUpright: "I'm sorry. I can't come to the reading right now. Please try a new card.",
    textReversed: "I'm sorry. I can't come to the reading right now. Please try a new card."
  },
  {
    id: 40,
    name: "Four of Cups",
    image: "assets/cards/four-of-cups.webp",
    textUpright: "I'm sorry. I can't come to the reading right now. Please try a new card.",
    textReversed: "I'm sorry. I can't come to the reading right now. Please try a new card."
  },
  {
    id: 41,
    name: "Five of Cups",
    image: "assets/cards/five-of-cups.webp",
    textUpright: "I'm sorry. I can't come to the reading right now. Please try a new card.",
    textReversed: "I'm sorry. I can't come to the reading right now. Please try a new card."
  },
  {
    id: 42,
    name: "Six of Cups",
    image: "assets/cards/six-of-cups.webp",
    textUpright: "I'm sorry. I can't come to the reading right now. Please try a new card.",
    textReversed: "I'm sorry. I can't come to the reading right now. Please try a new card."
  },
  {
    id: 43,
    name: "Seven of Cups",
    image: "assets/cards/seven-of-cups.webp",
    textUpright: "I'm sorry. I can't come to the reading right now. Please try a new card.",
    textReversed: "I'm sorry. I can't come to the reading right now. Please try a new card."
  },
  {
    id: 44,
    name: "Eight of Cups",
    image: "assets/cards/eight-of-cups.webp",
    textUpright: "I'm sorry. I can't come to the reading right now. Please try a new card.",
    textReversed: "I'm sorry. I can't come to the reading right now. Please try a new card."
  },
  {
    id: 45,
    name: "Nine of Cups",
    image: "assets/cards/nine-of-cups.webp",
    textUpright: "I'm sorry. I can't come to the reading right now. Please try a new card.",
    textReversed: "I'm sorry. I can't come to the reading right now. Please try a new card."
  },
  {
    id: 46,
    name: "Ten of Cups",
    image: "assets/cards/ten-of-cups.webp",
    textUpright: "I'm sorry. I can't come to the reading right now. Please try a new card.",
    textReversed: "I'm sorry. I can't come to the reading right now. Please try a new card."
  },
  {
    id: 47,
    name: "Page of Cups",
    image: "assets/cards/page-of-cups.webp",
    textUpright: "I'm sorry. I can't come to the reading right now. Please try a new card.",
    textReversed: "I'm sorry. I can't come to the reading right now. Please try a new card."
  },
  {
    id: 48,
    name: "Knight of Cups",
    image: "assets/cards/knight-of-cups.webp",
    textUpright: "I'm sorry. I can't come to the reading right now. Please try a new card.",
    textReversed: "I'm sorry. I can't come to the reading right now. Please try a new card."
  },
  {
    id: 49,
    name: "Queen of Cups",
    image: "assets/cards/queen-of-cups.webp",
    textUpright: "I'm sorry. I can't come to the reading right now. Please try a new card.",
    textReversed: "I'm sorry. I can't come to the reading right now. Please try a new card."
  },
  {
    id: 50,
    name: "King of Cups",
    image: "assets/cards/king-of-cups.webp",
    textUpright: "I'm sorry. I can't come to the reading right now. Please try a new card.",
    textReversed: "I'm sorry. I can't come to the reading right now. Please try a new card."
  },
  {
    id: 51,
    name: "Ace of Swords",
    image: "assets/cards/ace-of-swords.webp",
    textUpright: "I'm sorry. I can't come to the reading right now. Please try a new card.",
    textReversed: "I'm sorry. I can't come to the reading right now. Please try a new card."
  },
  {
    id: 52,
    name: "Two of Swords",
    image: "assets/cards/two-of-swords.webp",
    textUpright: "I'm sorry. I can't come to the reading right now. Please try a new card.",
    textReversed: "I'm sorry. I can't come to the reading right now. Please try a new card."
  },
  {
    id: 53,
    name: "Three of Swords",
    image: "assets/cards/three-of-swords.webp",
    textUpright: "I'm sorry. I can't come to the reading right now. Please try a new card.",
    textReversed: "I'm sorry. I can't come to the reading right now. Please try a new card."
  },
  {
    id: 54,
    name: "Four of Swords",
    image: "assets/cards/four-of-swords.webp",
    textUpright: "I'm sorry. I can't come to the reading right now. Please try a new card.",
    textReversed: "I'm sorry. I can't come to the reading right now. Please try a new card."
  },
  {
    id: 55,
    name: "Five of Swords",
    image: "assets/cards/five-of-swords.webp",
    textUpright: "I'm sorry. I can't come to the reading right now. Please try a new card.",
    textReversed: "I'm sorry. I can't come to the reading right now. Please try a new card."
  },
  {
    id: 56,
    name: "Six of Swords",
    image: "assets/cards/six-of-swords.webp",
    textUpright: "I'm sorry. I can't come to the reading right now. Please try a new card.",
    textReversed: "I'm sorry. I can't come to the reading right now. Please try a new card."
  },
  {
    id: 57,
    name: "Seven of Swords",
    image: "assets/cards/seven-of-swords.webp",
    textUpright: "I'm sorry. I can't come to the reading right now. Please try a new card.",
    textReversed: "I'm sorry. I can't come to the reading right now. Please try a new card."
  },
  {
    id: 58,
    name: "Eight of Swords",
    image: "assets/cards/eight-of-swords.webp",
    textUpright: "I'm sorry. I can't come to the reading right now. Please try a new card.",
    textReversed: "I'm sorry. I can't come to the reading right now. Please try a new card."
  },
  {
    id: 59,
    name: "Nine of Swords",
    image: "assets/cards/nine-of-swords.webp",
    textUpright: "I'm sorry. I can't come to the reading right now. Please try a new card.",
    textReversed: "I'm sorry. I can't come to the reading right now. Please try a new card."
  },
  {
    id: 60,
    name: "Ten of Swords",
    image: "assets/cards/ten-of-swords.webp",
    textUpright: "I'm sorry. I can't come to the reading right now. Please try a new card.",
    textReversed: "I'm sorry. I can't come to the reading right now. Please try a new card."
  },
  {
    id: 61,
    name: "Page of Swords",
    image: "assets/cards/page-of-swords.webp",
    textUpright: "I'm sorry. I can't come to the reading right now. Please try a new card.",
    textReversed: "I'm sorry. I can't come to the reading right now. Please try a new card."
  },
  {
    id: 62,
    name: "Knight of Swords",
    image: "assets/cards/knight-of-swords.webp",
    textUpright: "I'm sorry. I can't come to the reading right now. Please try a new card.",
    textReversed: "I'm sorry. I can't come to the reading right now. Please try a new card."
  },
  {
    id: 63,
    name: "Queen of Swords",
    image: "assets/cards/queen-of-swords.webp",
    textUpright: "I'm sorry. I can't come to the reading right now. Please try a new card.",
    textReversed: "I'm sorry. I can't come to the reading right now. Please try a new card."
  },
  {
    id: 64,
    name: "King of Swords",
    image: "assets/cards/king-of-swords.webp",
    textUpright: "I'm sorry. I can't come to the reading right now. Please try a new card.",
    textReversed: "I'm sorry. I can't come to the reading right now. Please try a new card."
  },
  {
    id: 65,
    name: "Ace of Pentacles",
    image: "assets/cards/ace-of-pentacles.webp",
    textUpright: "I'm sorry. I can't come to the reading right now. Please try a new card.",
    textReversed: "I'm sorry. I can't come to the reading right now. Please try a new card."
  },
  {
    id: 66,
    name: "Two of Pentacles",
    image: "assets/cards/two-of-pentacles.webp",
    textUpright: "I'm sorry. I can't come to the reading right now. Please try a new card.",
    textReversed: "I'm sorry. I can't come to the reading right now. Please try a new card."
  },
  {
    id: 67,
    name: "Three of Pentacles",
    image: "assets/cards/three-of-pentacles.webp",
    textUpright: "I'm sorry. I can't come to the reading right now. Please try a new card.",
    textReversed: "I'm sorry. I can't come to the reading right now. Please try a new card."
  },
  {
    id: 68,
    name: "Four of Pentacles",
    image: "assets/cards/four-of-pentacles.webp",
    textUpright: "I'm sorry. I can't come to the reading right now. Please try a new card.",
    textReversed: "I'm sorry. I can't come to the reading right now. Please try a new card."
  },
  {
    id: 69,
    name: "Five of Pentacles",
    image: "assets/cards/five-of-pentacles.webp",
    textUpright: "I'm sorry. I can't come to the reading right now. Please try a new card.",
    textReversed: "I'm sorry. I can't come to the reading right now. Please try a new card."
  },
  {
    id: 70,
    name: "Six of Pentacles",
    image: "assets/cards/six-of-pentacles.webp",
    textUpright: "I'm sorry. I can't come to the reading right now. Please try a new card.",
    textReversed: "I'm sorry. I can't come to the reading right now. Please try a new card."
  },
  {
    id: 71,
    name: "Seven of Pentacles",
    image: "assets/cards/seven-of-pentacles.webp",
    textUpright: "I'm sorry. I can't come to the reading right now. Please try a new card.",
    textReversed: "I'm sorry. I can't come to the reading right now. Please try a new card."
  },
  {
    id: 72,
    name: "Eight of Pentacles",
    image: "assets/cards/eight-of-pentacles.webp",
    textUpright: "I'm sorry. I can't come to the reading right now. Please try a new card.",
    textReversed: "I'm sorry. I can't come to the reading right now. Please try a new card."
  },
  {
    id: 73,
    name: "Nine of Pentacles",
    image: "assets/cards/nine-of-pentacles.webp",
    textUpright: "I'm sorry. I can't come to the reading right now. Please try a new card.",
    textReversed: "I'm sorry. I can't come to the reading right now. Please try a new card."
  },
  {
    id: 74,
    name: "Ten of Pentacles",
    image: "assets/cards/ten-of-pentacles.webp",
    textUpright: "I'm sorry. I can't come to the reading right now. Please try a new card.",
    textReversed: "I'm sorry. I can't come to the reading right now. Please try a new card."
  },
  {
    id: 75,
    name: "Page of Pentacles",
    image: "assets/cards/page-of-pentacles.webp",
    textUpright: "I'm sorry. I can't come to the reading right now. Please try a new card.",
    textReversed: "I'm sorry. I can't come to the reading right now. Please try a new card."
  },
  {
    id: 76,
    name: "Knight of Pentacles",
    image: "assets/cards/knight-of-pentacles.webp",
    textUpright: "I'm sorry. I can't come to the reading right now. Please try a new card.",
    textReversed: "I'm sorry. I can't come to the reading right now. Please try a new card."
  },
  {
    id: 77,
    name: "Queen of Pentacles",
    image: "assets/cards/queen-of-pentacles.webp",
    textUpright: "I'm sorry. I can't come to the reading right now. Please try a new card.",
    textReversed: "I'm sorry. I can't come to the reading right now. Please try a new card."
  },
  {
    id: 78,
    name: "King of Pentacles",
    image: "assets/cards/king-of-pentacles.webp",
    textUpright: "I'm sorry. I can't come to the reading right now. Please try a new card.",
    textReversed: "I'm sorry. I can't come to the reading right now. Please try a new card."
  }
];

// Export for use in your app
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CARDS;
}