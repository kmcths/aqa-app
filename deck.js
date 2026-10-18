/**
 * Aquarian Answers - The Tarot Deck
 *
 * Browse the deck by group and open any card to read both meanings.
 * Uses the same cards.js as the daily reading.
 *
 * The address bar tracks where you are, so the back button works and any
 * card can be linked to directly:
 *   deck.html#cups              the Cups group
 *   deck.html#cups/queen-of-cups that card, open
 */

const GROUPS = [
    { id: 'major',     name: 'Major Arcana', from: 1,  to: 22 },
    { id: 'wands',     name: 'Wands',        from: 23, to: 36 },
    { id: 'cups',      name: 'Cups',         from: 37, to: 50 },
    { id: 'swords',    name: 'Swords',       from: 51, to: 64 },
    { id: 'pentacles', name: 'Pentacles',    from: 65, to: 78 }
];

// DOM
const groupTabs = document.getElementById('groupTabs');
const cardGrid = document.getElementById('cardGrid');
const detail = document.getElementById('cardDetail');
const detailBack = document.getElementById('detailBack');
const detailBackLabel = document.getElementById('detailBackLabel');
const detailPrev = document.getElementById('detailPrev');
const detailNext = document.getElementById('detailNext');
const detailImage = document.getElementById('detailImage');
const detailName = document.getElementById('detailName');
const detailUpright = document.getElementById('detailUpright');
const detailReversed = document.getElementById('detailReversed');
const detailReversedThumb = document.getElementById('detailReversedThumb');

let currentGroup = null;
let openedFromGrid = false;   // true when the open card was reached by tapping in the grid

/* ---------- card helpers ---------- */

const slugOf = card => card.image.split('/').pop().replace(/\.\w+$/, '');
const thumbOf = card => card.image.replace('assets/cards/', 'assets/cards/thumbs/');
const cardsIn = group => CARDS.filter(c => c.id >= group.from && c.id <= group.to);
const groupOf = card => GROUPS.find(g => card.id >= g.from && card.id <= g.to);

/* ---------- build ---------- */

function buildTabs() {
    GROUPS.forEach(group => {
        const tab = document.createElement('button');
        tab.type = 'button';
        tab.className = 'group-tab';
        tab.setAttribute('role', 'tab');
        tab.dataset.group = group.id;
        tab.textContent = group.name;
        tab.addEventListener('click', () => go(group.id));
        groupTabs.appendChild(tab);
    });
}

function renderGroup(group) {
    if (group === currentGroup) return;
    currentGroup = group;

    groupTabs.querySelectorAll('.group-tab').forEach(tab => {
        const on = tab.dataset.group === group.id;
        tab.setAttribute('aria-selected', on);
        tab.tabIndex = on ? 0 : -1;
    });

    cardGrid.setAttribute('aria-label', group.name);
    cardGrid.innerHTML = '';
    cardsIn(group).forEach(card => {
        const li = document.createElement('li');
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'grid-card';
        btn.dataset.slug = slugOf(card);
        btn.innerHTML = `<img src="${thumbOf(card)}" alt="" loading="lazy" width="180" height="283"><span>${card.name}</span>`;
        btn.addEventListener('click', () => {
            openedFromGrid = true;
            go(`${group.id}/${slugOf(card)}`);
        });
        li.appendChild(btn);
        cardGrid.appendChild(li);
    });
}

function showCard(card) {
    const group = groupOf(card);
    const list = cardsIn(group);
    const i = list.indexOf(card);

    detailImage.src = card.image;
    detailImage.alt = card.name;
    detailReversedThumb.src = thumbOf(card);
    detailName.textContent = card.name;
    detailUpright.textContent = card.textUpright;
    detailReversed.textContent = card.textReversed;
    detailBackLabel.textContent = `Back to ${group.name}`;

    detailPrev.disabled = i === 0;
    detailNext.disabled = i === list.length - 1;
    detailPrev.onclick = () => step(list[i - 1]);
    detailNext.onclick = () => step(list[i + 1]);

    if (!detail.open) detail.showModal();
    detail.querySelector('.detail-body').scrollTop = 0;
}

/** Previous/next swap the card in place, without stacking up history. */
function step(card) {
    if (!card) return;
    history.replaceState(null, '', `#${groupOf(card).id}/${slugOf(card)}`);
    route();
}

function closeCard() {
    const slug = location.hash.split('/')[1];
    if (openedFromGrid) {
        history.back();             // return to the grid entry we came from
    } else {
        history.replaceState(null, '', `#${currentGroup.id}`);
        route();
    }
    openedFromGrid = false;
    // put focus back on the card that was open, so keyboard users keep their place
    requestAnimationFrame(() => cardGrid.querySelector(`[data-slug="${slug}"]`)?.focus());
}

/* ---------- routing ---------- */

function go(hash) {
    location.hash = hash;
}

function route() {
    const [groupId, slug] = location.hash.slice(1).split('/');
    const group = GROUPS.find(g => g.id === groupId) || GROUPS[0];
    renderGroup(group);

    const card = slug && cardsIn(group).find(c => slugOf(c) === slug);
    if (card) {
        showCard(card);
    } else if (detail.open) {
        detail.close();
    }
}

/* ---------- events ---------- */

detailBack.addEventListener('click', closeCard);

// Esc closes the dialog natively; keep the address bar in step
detail.addEventListener('cancel', event => {
    event.preventDefault();
    closeCard();
});

// Clicking the dimmed area outside the panel also closes it
detail.addEventListener('click', event => {
    if (event.target === detail) closeCard();
});

// Arrow keys move through the group while a card is open
detail.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft' && !detailPrev.disabled) detailPrev.click();
    if (event.key === 'ArrowRight' && !detailNext.disabled) detailNext.click();
});

// Arrow keys move between tabs
groupTabs.addEventListener('keydown', event => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    const i = GROUPS.indexOf(currentGroup) + (event.key === 'ArrowRight' ? 1 : -1);
    const next = GROUPS[(i + GROUPS.length) % GROUPS.length];
    go(next.id);
    groupTabs.querySelector(`[data-group="${next.id}"]`).focus();
});

window.addEventListener('hashchange', route);

buildTabs();
route();
