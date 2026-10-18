# Aquarian Answers: Daily Reading

A one-card daily tarot reading for Adrienne Moore's Aquarian Answers practice. Adrienne owns the voice and all card text. Ben builds the app.

## What it does

The deck is the only control. Tap it and one card is dealt: it travels from the deck, flips face up and lands upright or reversed (50/50), and its reading fades in beside it. Tap again for a new card.

The app is embedded in a page on Adrienne's site through an iframe, so all sizing and breakpoints in `styles.css` are measured against the iframe, not the browser window. The background color matches the host page section.

## Scope

V1 is the card of the day only. Yes/no readings and multi-card spreads are possible later phases, scoped separately. Every card needs both upright and reversed text, because those later phases depend on it too.

## Voice

Direct, psychologically grounded, practical and kind. Accessible to skeptics. Not "witchy" or performative. It should be quick and understated enough to use discreetly in public.

## Files

| File | What it holds |
| --- | --- |
| `index.html` | Page structure: deck, card slot, reading |
| `script.js` | Draw logic and animations; respects reduced-motion settings |
| `styles.css` | Layout, colors, sizing |
| `cards.js` | All 78 cards: name, image paths, upright and reversed text |
| `assets/cards/` | Card art: one upright and one reversed image per card, plus `back.png` |

## Card data

Each card in `cards.js` looks like this:

```js
{
  id: 1,
  name: "The Fool",
  imageUpright: "assets/cards/fool.png",
  imageReversed: "assets/cards/fool-reversed.png",
  textUpright: "...",
  textReversed: "..."
}
```

To change a reading, edit its text here. To swap art, replace the PNG with one of the same filename, or change the path.

## Terminology

- **Reversed**: the card drawn upside down. It has its own text. In the current build it also has its own image file rather than the upright image rotated in code.
- **Card back**: `back.png`, used for the deck and for the card while it is being dealt.

## Current state

- Text is written for cards 1 to 36: the Major Arcana and Wands.
- Cups, Swords and Pentacles (cards 37 to 78) show a placeholder: "I'm sorry. I can't come to the reading right now. Please try a new card."
- `assets/cards/clean-back.png` is not used anywhere.

## Open items

- Confirm the Rider-Waite-Smith image source is a genuinely public-domain scan. Many cleaned-up reproductions carry their own copyright. A custom deck is planned later.

## Background

The original planning Master Document is archived in Google Drive (folder `1m_8769YsBbjb3ec6acCNKTINWcHT6KOm`). It predates the build and is out of date on tech stack and image handling. When it disagrees with this README or the code, this README and the code are correct.
