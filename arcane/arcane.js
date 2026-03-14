/* ══════════════════════════════════════════════════════════════
   ARCANE ARCHIVE — arcane.js
   Data store + rendering engine for the esoteric knowledge
   directory. This file drives both the directory (index.html)
   and the single-entry view (entry.html).

   ┌──────────────────────────────────────────────────────────┐
   │  TO ADD AN ENTRY — append an object to ARCANE_ENTRIES.   │
   │  TO ADD CONTENT  — populate the `content` field with     │
   │                    an HTML string.                        │
   │  TO ADD A SOURCE — push to the entry's `sources` array.  │
   │    String form:  "Author, Title (Year)"                   │
   │    Object form:  { label: "Title", url: "https://…" }    │
   └──────────────────────────────────────────────────────────┘
   ══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ══════════════════════════════════════════════════════════
     CATEGORY METADATA
     ══════════════════════════════════════════════════════════ */

  var CATEGORIES = {
    traditions: { label: 'Traditions',  color: 'var(--clr-accent)' },
    figures:    { label: 'Figures',     color: '#7ab5a0' },
    texts:      { label: 'Texts',       color: '#a07ab5' },
    symbols:    { label: 'Symbols',     color: '#a09a5e' },
    concepts:   { label: 'Concepts',    color: '#5e8ea0' },
  };


  /* ══════════════════════════════════════════════════════════
     ENTRY DATA
     Status: 'stub' | 'in-progress' | 'complete'
     ══════════════════════════════════════════════════════════ */

  var ARCANE_ENTRIES = [

    /* ── TRADITIONS ─────────────────────────────────────── */

    {
      id:       'hermeticism',
      category: 'traditions',
      sigil:    '☿',
      title:    'Hermeticism',
      tagline:  '"As above, so below" — the philosophy of universal correspondence revealed through Hermes Trismegistus.',
      summary:  'Hermeticism is an ancient philosophical and spiritual tradition rooted in the writings attributed to Hermes Trismegistus, synthesizing Greek Neoplatonism and Egyptian religious thought into a unified vision of a hierarchically ordered cosmos governed by analogy, sympathy, and the ascent of the soul.',
      status:   'stub',
      content:  '',
      sources:  [],
      related:  ['hermes-trismegistus', 'corpus-hermeticum', 'emerald-tablet', 'alchemy', 'marsilio-ficino'],
    },

    {
      id:       'alchemy',
      category: 'traditions',
      sigil:    '△',
      title:    'Alchemy',
      tagline:  'The Great Work of transforming base lead into gold — and the mortal soul into imperishable spirit.',
      summary:  'Alchemy is one of history\'s most layered traditions, spanning practical laboratory work, proto-chemistry, and a profound symbolic language for the soul\'s transformation. Its imagery — the calcination, dissolution, and coagulation of matter — maps onto the stages of inner purification.',
      status:   'stub',
      content:  '',
      sources:  [],
      related:  ['hermeticism', 'philosophers-stone', 'the-great-work', 'paracelsus', 'emerald-tablet'],
    },

    {
      id:       'kabbalah',
      category: 'traditions',
      sigil:    'א',
      title:    'Kabbalah',
      tagline:  'The mystical tradition of Jewish esotericism — the hidden face of Torah and the map of the divine cosmos.',
      summary:  'Kabbalah is the body of Jewish mystical thought concerned with the nature of God, the structure of the cosmos, and the soul\'s ascent through the ten Sephiroth of the Tree of Life. Its central text, the Zohar, became a major influence on Christian mysticism and Renaissance occultism.',
      status:   'stub',
      content:  '',
      sources:  [],
      related:  ['zohar', 'gnosis', 'cornelius-agrippa', 'correspondences'],
    },

    {
      id:       'gnosticism',
      category: 'traditions',
      sigil:    'Φ',
      title:    'Gnosticism',
      tagline:  'The divine spark imprisoned in matter — and the secret knowledge that sets it free.',
      summary:  'Gnosticism is a diverse constellation of ancient religious movements united by the conviction that the material world was created by a flawed or malevolent demiurge, and that fragments of divine light trapped within humanity can be liberated through gnosis — a direct, experiential knowledge of the true God beyond creation.',
      status:   'stub',
      content:  '',
      sources:  [],
      related:  ['gnosis', 'neoplatonism', 'corpus-hermeticum', 'ouroboros'],
    },

    {
      id:       'neoplatonism',
      category: 'traditions',
      sigil:    '∞',
      title:    'Neoplatonism',
      tagline:  'The emanation of the One into multiplicity — and the soul\'s philosophical return to its source.',
      summary:  'Founded by Plotinus in the 3rd century CE, Neoplatonism describes a cosmos emanating downward from an ineffable, transcendent One through Nous (divine Mind) and World Soul into matter — and a corresponding ascent, through contemplation and virtue, back toward unity. It became the philosophical backbone of virtually all subsequent Western esotericism.',
      status:   'stub',
      content:  '',
      sources:  [],
      related:  ['gnosticism', 'hermeticism', 'marsilio-ficino', 'macrocosm-microcosm'],
    },

    {
      id:       'rosicrucianism',
      category: 'traditions',
      sigil:    '✝',
      title:    'Rosicrucianism',
      tagline:  'The invisible brotherhood of the Rosy Cross — Christian mysticism and Hermetic philosophy united in a universal reformation.',
      summary:  'Rosicrucianism emerged in early 17th-century Germany through three anonymous manifestos announcing a secret fraternity pledged to heal the sick, reform corrupted knowledge, and prepare the world for a new age. Its blend of Christian millennialism, Paracelsian medicine, and Hermetic theosophy made it one of the most influential currents in Western esotericism.',
      status:   'stub',
      content:  '',
      sources:  [],
      related:  ['hermeticism', 'alchemy', 'cornelius-agrippa', 'john-dee', 'the-great-work'],
    },


    /* ── FIGURES ─────────────────────────────────────────── */

    {
      id:       'hermes-trismegistus',
      category: 'figures',
      sigil:    '☿',
      title:    'Hermes Trismegistus',
      tagline:  '"Thrice-greatest Hermes" — the legendary divine scribe standing at the fountainhead of all esoteric tradition.',
      summary:  'Hermes Trismegistus is the syncretic fusion of the Greek god Hermes and the Egyptian god Thoth, revered as the author of the Hermetic corpus. Whether historical sage, composite legend, or pure myth, his name became the authorizing cipher of an entire civilization\'s worth of spiritual philosophy.',
      status:   'stub',
      content:  '',
      sources:  [],
      related:  ['hermeticism', 'corpus-hermeticum', 'emerald-tablet'],
    },

    {
      id:       'marsilio-ficino',
      category: 'figures',
      sigil:    '☉',
      title:    'Marsilio Ficino',
      tagline:  'The Florentine priest who translated Plato and channeled the whole Hermetic inheritance into the Renaissance.',
      summary:  'Marsilio Ficino (1433–1499) was head of the Platonic Academy in Florence under Cosimo de\' Medici. His translations of Plato, Plotinus, and the Corpus Hermeticum — completed in a single generation — seeded the Renaissance with ancient wisdom and created the template for Western learned esotericism as a coherent discipline.',
      status:   'stub',
      content:  '',
      sources:  [],
      related:  ['neoplatonism', 'hermeticism', 'corpus-hermeticum', 'correspondences'],
    },

    {
      id:       'cornelius-agrippa',
      category: 'figures',
      sigil:    '✦',
      title:    'Cornelius Agrippa',
      tagline:  'The Renaissance polymath whose <em>De Occulta Philosophia</em> remains the most complete synthesis of Western occult science.',
      summary:  'Heinrich Cornelius Agrippa von Nettesheim (1486–1535) was a German lawyer, physician, and philosopher whose three-volume <em>De Occulta Philosophia</em> brought together natural magic, celestial magic, ceremonial magic, Kabbalah, numerology, and a theory of the perfected magician as a bridge between matter and spirit.',
      status:   'stub',
      content:  '',
      sources:  [],
      related:  ['hermeticism', 'kabbalah', 'de-occulta-philosophia', 'john-dee'],
    },

    {
      id:       'john-dee',
      category: 'figures',
      sigil:    '◊',
      title:    'John Dee',
      tagline:  'Mathematician, cartographer, royal astrologer, and communicant with angelic intelligences beyond the veil.',
      summary:  'John Dee (1527–1608) was among the most learned figures of Elizabethan England — an advisor to the Navy, a pioneer of cartography, and Queen Elizabeth\'s court astrologer. In the latter half of his life he devoted himself to angelic communication through his scryer Edward Kelley, producing a vast archive of received angelic language and the foundations of Enochian magic.',
      status:   'stub',
      content:  '',
      sources:  [],
      related:  ['hermeticism', 'kabbalah', 'cornelius-agrippa', 'rosicrucianism'],
    },

    {
      id:       'paracelsus',
      category: 'figures',
      sigil:    '♃',
      title:    'Paracelsus',
      tagline:  'The stormy Renaissance physician who fused alchemy, astrology, and mystical theology into a new medicine of the whole person.',
      summary:  'Philippus Aureolus Theophrastus Bombastus von Hohenheim, known as Paracelsus (1493–1541), revolutionized medicine by insisting on direct empirical observation, chemical rather than herbal remedies, and a holistic vision of the human being as a microcosm of the universe. His alchemical cosmology influenced a century of Hermetic medicine.',
      status:   'stub',
      content:  '',
      sources:  [],
      related:  ['alchemy', 'macrocosm-microcosm', 'correspondences', 'rosicrucianism'],
    },

    {
      id:       'giordano-bruno',
      category: 'figures',
      sigil:    '◉',
      title:    'Giordano Bruno',
      tagline:  'Wandering philosopher of an infinite universe — Hermetic magician, memory artist, burned at the stake for his vision.',
      summary:  'Giordano Bruno (1548–1600) was a Dominican friar, Hermetic philosopher, and poet who championed Copernican heliocentrism, proposed an infinite cosmos of innumerable worlds, and practiced an elaborate art of memory rooted in Hermetic magic. After years of wandering the courts of Europe, he was burned at the Campo de\' Fiori by the Inquisition.',
      status:   'stub',
      content:  '',
      sources:  [],
      related:  ['hermeticism', 'neoplatonism', 'marsilio-ficino', 'macrocosm-microcosm'],
    },


    /* ── TEXTS ───────────────────────────────────────────── */

    {
      id:       'corpus-hermeticum',
      category: 'texts',
      sigil:    '☽',
      title:    'Corpus Hermeticum',
      tagline:  'The foundational scripture of the Hermetic tradition — seventeen treatises attributed to Hermes Trismegistus.',
      summary:  'The Corpus Hermeticum is a collection of Greek Hermetic dialogues composed between the 1st and 3rd centuries CE. When Marsilio Ficino translated them from a newly arrived manuscript in 1463 — believing them to be the work of an ancient Egyptian sage — they became the cornerstone of Renaissance Hermeticism and transformed the intellectual culture of Europe.',
      status:   'stub',
      content:  '',
      sources:  [],
      related:  ['hermes-trismegistus', 'hermeticism', 'marsilio-ficino', 'gnosis'],
    },

    {
      id:       'emerald-tablet',
      category: 'texts',
      sigil:    '✧',
      title:    'The Emerald Tablet',
      tagline:  '"That which is below is as that which is above" — the cryptic fourteen lines that contain the whole of Hermetic philosophy.',
      summary:  'The Tabula Smaragdina, or Emerald Tablet, is the most compressed and commented-upon document in the alchemical tradition. First appearing in Arabic sources around the 6th–8th century and attributed to Hermes Trismegistus, its single axiom of correspondence between above and below became the operative principle of all Hermetic science.',
      status:   'stub',
      content:  '',
      sources:  [],
      related:  ['hermes-trismegistus', 'hermeticism', 'alchemy', 'corpus-hermeticum'],
    },

    {
      id:       'zohar',
      category: 'texts',
      sigil:    'ז',
      title:    'The Zohar',
      tagline:  'The Book of Splendour — the supreme work of Kabbalistic mysticism and the inner light of Torah.',
      summary:  'The Zohar (ספר הזוהר, "Book of Radiance") is the foundational work of Jewish mystical literature. Composed primarily in Aramaic, it first appeared in 13th-century Spain through Moses de León, purporting to record the teachings of the 2nd-century sage Rabbi Shimon bar Yochai. It became one of the most influential religious texts in Jewish history.',
      status:   'stub',
      content:  '',
      sources:  [],
      related:  ['kabbalah', 'gnosis'],
    },

    {
      id:       'kybalion',
      category: 'texts',
      sigil:    '✶',
      title:    'The Kybalion',
      tagline:  'Seven Hermetic principles decoded — the secret laws of mind and universe published in 1908 by "Three Initiates."',
      summary:  'Published in 1908 and now attributed to William Walker Atkinson, The Kybalion presents seven fundamental Hermetic principles — Mentalism, Correspondence, Vibration, Polarity, Rhythm, Cause and Effect, and Gender — as the underlying mechanics of all phenomena, from physics to consciousness.',
      status:   'stub',
      content:  '',
      sources:  [],
      related:  ['hermeticism', 'correspondences', 'macrocosm-microcosm'],
    },

    {
      id:       'de-occulta-philosophia',
      category: 'texts',
      sigil:    '✦',
      title:    'De Occulta Philosophia',
      tagline:  'Agrippa\'s three-volume encyclopaedia of natural, celestial, and ceremonial magic.',
      summary:  'Heinrich Cornelius Agrippa\'s <em>De Occulta Philosophia Libri Tres</em> (1531) is the most ambitious single synthesis of Renaissance occultism. Its three books cover elemental and natural magic, celestial magic through astrology and Kabbalah, and ceremonial magic — building to a vision of the perfected magician as a being who commands all levels of the cosmic hierarchy.',
      status:   'stub',
      content:  '',
      sources:  [],
      related:  ['cornelius-agrippa', 'hermeticism', 'kabbalah', 'correspondences'],
    },


    /* ── SYMBOLS ─────────────────────────────────────────── */

    {
      id:       'ouroboros',
      category: 'symbols',
      sigil:    '◉',
      title:    'Ouroboros',
      tagline:  'The serpent devouring its own tail — eternal return, self-renewal, and the annihilation of the boundary between end and beginning.',
      summary:  'The Ouroboros is one of the oldest surviving symbols in the world, appearing in Egyptian funerary texts and Greek alchemical manuscripts. Throughout Gnosticism, Hermeticism, and alchemy it figures the cyclical nature of time, the self-containing unity of the cosmos, and the paradox of a process that destroys and creates itself simultaneously.',
      status:   'stub',
      content:  '',
      sources:  [],
      related:  ['alchemy', 'gnosticism', 'hermeticism', 'the-great-work'],
    },

    {
      id:       'philosophers-stone',
      category: 'symbols',
      sigil:    '♦',
      title:    "The Philosopher's Stone",
      tagline:  'The supreme product of the Great Work — universal medicine, transmuting agent, and emblem of the perfected soul.',
      summary:  'The Philosopher\'s Stone (Lapis Philosophorum) is the legendary end-product of the alchemical Great Work — a substance capable of transmuting any base metal into gold, curing all disease, and conferring immortality. On the spiritual level it represents the perfected, incorruptible self that has undergone the full cycle of dissolution and renewal.',
      status:   'stub',
      content:  '',
      sources:  [],
      related:  ['alchemy', 'the-great-work', 'paracelsus', 'ouroboros'],
    },

    {
      id:       'sacred-geometry',
      category: 'symbols',
      sigil:    '△',
      title:    'Sacred Geometry',
      tagline:  'The divine mathematical patterns — Platonic solids, the golden ratio, and the invisible architecture of creation.',
      summary:  'Sacred geometry is the study of geometric forms and proportions held to underlie all natural structure and divine creation — from the Platonic solids and the Fibonacci spiral to the architecture of temples, cathedrals, and mandalas. In Neoplatonic and Hermetic thought, these forms are the thoughts of the divine Mind made visible in matter.',
      status:   'stub',
      content:  '',
      sources:  [],
      related:  ['neoplatonism', 'correspondences', 'hermeticism'],
    },

    {
      id:       'caduceus',
      category: 'symbols',
      sigil:    '☿',
      title:    'The Caduceus',
      tagline:  'Twin serpents on a winged staff — the axis of mediation between opposites and the emblem of Hermetic wisdom.',
      summary:  'The Caduceus is the staff of Hermes, entwined by two ascending serpents and crowned with wings. In Hermetic philosophy it represents the reconciliation of opposites — the ida and pingala of the spine, the sulphur and mercury of alchemy, the above and below of the great axiom — united by the winged mind that stands at the world\'s axis.',
      status:   'stub',
      content:  '',
      sources:  [],
      related:  ['hermes-trismegistus', 'alchemy', 'correspondences', 'ouroboros'],
    },


    /* ── CONCEPTS ────────────────────────────────────────── */

    {
      id:       'the-great-work',
      category: 'concepts',
      sigil:    '◈',
      title:    'The Great Work',
      tagline:  'Magnum Opus — the four-stage process of spiritual and material perfection at the heart of the alchemical tradition.',
      summary:  'The Great Work (Magnum Opus) is the central operative concept of alchemy — the process by which base matter, and by analogy the human soul, is purified through four successive stages: nigredo (blackening / dissolution), albedo (whitening / purification), citrinitas (yellowing / dawning), and rubedo (reddening / perfection). It is the template for all subsequent theories of spiritual transformation.',
      status:   'stub',
      content:  '',
      sources:  [],
      related:  ['alchemy', 'philosophers-stone', 'initiation', 'gnosis', 'ouroboros'],
    },

    {
      id:       'macrocosm-microcosm',
      category: 'concepts',
      sigil:    '∞',
      title:    'Macrocosm & Microcosm',
      tagline:  'Man as a mirror of the universe — the operative axiom linking the scales of being from stars to cells.',
      summary:  'The macrocosm/microcosm doctrine holds that the human being is a small-scale replica of the cosmos — that the same principles, proportions, and forces governing the stars also operate within the body. This is the operative principle of astrology, physiognomy, alchemical medicine, and Renaissance humanism: to know man is to know the universe, and vice versa.',
      status:   'stub',
      content:  '',
      sources:  [],
      related:  ['hermeticism', 'correspondences', 'neoplatonism', 'paracelsus', 'kybalion'],
    },

    {
      id:       'gnosis',
      category: 'concepts',
      sigil:    'γ',
      title:    'Gnosis',
      tagline:  'Direct, transformative knowledge of the divine — not belief, not argument, but living encounter.',
      summary:  'Gnosis (Greek: γνῶσις) denotes the immediate, experiential apprehension of ultimate reality — a mode of knowing that is not mediated by doctrine or inference but is itself a form of union. It is the goal of Gnosticism, the summit of Hermetic philosophy, the telos of Neoplatonic contemplation, and the inner dimension of nearly every esoteric path.',
      status:   'stub',
      content:  '',
      sources:  [],
      related:  ['gnosticism', 'hermeticism', 'initiation', 'the-great-work'],
    },

    {
      id:       'correspondences',
      category: 'concepts',
      sigil:    '≈',
      title:    'Correspondences',
      tagline:  'The hidden sympathies linking planets to metals, hours to angels, and stars to the organs of the body.',
      summary:  'The doctrine of correspondences is the operative framework of Hermetic cosmology: all things in the universe are linked by hidden sympathies and analogies running through every level of being. The seven planets correspond to seven metals, seven days, seven colors, seven musical tones, seven organs, and seven spiritual states. This network of sympathy is what makes magic possible.',
      status:   'stub',
      content:  '',
      sources:  [],
      related:  ['hermeticism', 'macrocosm-microcosm', 'kybalion', 'sacred-geometry', 'de-occulta-philosophia'],
    },

    {
      id:       'initiation',
      category: 'concepts',
      sigil:    '✶',
      title:    'Initiation',
      tagline:  'Ritual death and rebirth — the threshold passage between the profane world and the world of sacred knowledge.',
      summary:  'Initiation is the structured ritual crossing of a threshold — from ignorance to knowledge, from the profane to the sacred, from one ontological state to another. It is the organizing principle of the mystery schools of antiquity, the Masonic degrees, the Hermetic orders, and the shamanic traditions: a deliberate enactment of death and resurrection that leaves the candidate permanently altered.',
      status:   'stub',
      content:  '',
      sources:  [],
      related:  ['gnosis', 'the-great-work', 'rosicrucianism', 'hermeticism'],
    },

  ];


  /* ══════════════════════════════════════════════════════════
     HELPERS
     ══════════════════════════════════════════════════════════ */

  function findEntry(id) {
    return ARCANE_ENTRIES.find(function (e) { return e.id === id; }) || null;
  }

  function categoryLabel(cat) {
    return (CATEGORIES[cat] && CATEGORIES[cat].label) || cat;
  }


  /* ══════════════════════════════════════════════════════════
     RENDER — DIRECTORY CARD
     ══════════════════════════════════════════════════════════ */

  function renderCard(entry) {
    return '<a href="entry.html?id=' + entry.id + '" class="arc-card" data-category="' + entry.category + '">'
      + '<span class="arc-card__sigil">' + entry.sigil + '</span>'
      + '<span class="arc-card__badge">' + categoryLabel(entry.category) + '</span>'
      + '<h3 class="arc-card__title">' + entry.title + '</h3>'
      + '<p class="arc-card__tagline">' + entry.tagline + '</p>'
      + '<span class="arc-card__arrow" aria-hidden="true">\u2192</span>'
      + '</a>';
  }


  /* ══════════════════════════════════════════════════════════
     RENDER — SINGLE ENTRY
     ══════════════════════════════════════════════════════════ */

  function renderEntry(entry) {
    var cat = categoryLabel(entry.category);

    // Content block
    var contentHTML = entry.content
      ? '<div class="arc-content">' + entry.content + '</div>'
      : '<div class="arc-content arc-content--pending">'
          + '<p class="arc-pending">This entry is being researched. Full content will appear here as sources are gathered and verified.</p>'
        + '</div>';

    // Sources block
    var sourcesHTML = '';
    if (entry.sources && entry.sources.length) {
      var items = entry.sources.map(function (s) {
        if (typeof s === 'string') {
          return '<li>' + s + '</li>';
        }
        return '<li><a href="' + s.url + '" target="_blank" rel="noopener noreferrer">' + s.label + '</a></li>';
      }).join('');
      sourcesHTML = '<section class="arc-sources">'
        + '<h3 class="arc-section-heading">Sources &amp; Further Reading</h3>'
        + '<ol class="arc-sources__list">' + items + '</ol>'
        + '</section>';
    }

    // Related entries block
    var relatedHTML = '';
    if (entry.related && entry.related.length) {
      var relCards = entry.related
        .map(findEntry)
        .filter(Boolean)
        .map(function (rel) {
          return '<a href="entry.html?id=' + rel.id + '" class="arc-related__card">'
            + '<span class="arc-related__sigil">' + rel.sigil + '</span>'
            + '<span class="arc-related__label">' + rel.title + '</span>'
            + '</a>';
        }).join('');

      if (relCards) {
        relatedHTML = '<section class="arc-related">'
          + '<h3 class="arc-section-heading">Related Entries</h3>'
          + '<div class="arc-related__grid">' + relCards + '</div>'
          + '</section>';
      }
    }

    return '<article class="arc-entry">'
      + '<header class="arc-entry__header container">'
        + '<span class="arc-entry__sigil">' + entry.sigil + '</span>'
        + '<span class="arc-entry__badge">' + cat + '</span>'
        + '<h1 class="arc-entry__title">' + entry.title + '</h1>'
        + '<p class="arc-entry__tagline">' + entry.tagline + '</p>'
      + '</header>'
      + '<div class="arc-entry__body container">'
        + '<p class="arc-entry__summary">' + entry.summary + '</p>'
        + contentHTML
        + sourcesHTML
        + relatedHTML
      + '</div>'
      + '</article>';
  }


  /* ══════════════════════════════════════════════════════════
     INIT — DIRECTORY PAGE  (index.html)
     ══════════════════════════════════════════════════════════ */

  function initDirectory() {
    var grid = document.getElementById('arc-grid');
    if (!grid) return;

    var tabs        = document.querySelectorAll('.arc-tab');
    var searchInput = document.querySelector('.arc-search');
    var countEl     = document.getElementById('arc-count');

    var activeCategory = 'all';
    var query          = '';

    // IntersectionObserver for card reveal animations
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('is-visible');
          observer.unobserve(en.target);
        }
      });
    }, { threshold: 0.06 });

    function getFiltered() {
      return ARCANE_ENTRIES.filter(function (e) {
        var catOk  = activeCategory === 'all' || e.category === activeCategory;
        var q      = query.toLowerCase();
        var textOk = !q
          || e.title.toLowerCase().indexOf(q) !== -1
          || e.tagline.toLowerCase().indexOf(q) !== -1
          || e.summary.toLowerCase().indexOf(q) !== -1;
        return catOk && textOk;
      });
    }

    function render() {
      var results = getFiltered();

      if (countEl) {
        countEl.textContent = results.length + '\u00a0' + (results.length === 1 ? 'entry' : 'entries');
      }

      grid.innerHTML = results.length
        ? results.map(renderCard).join('')
        : '<p class="arc-empty">No entries match your search.</p>';

      // Observe newly rendered cards
      grid.querySelectorAll('.arc-card').forEach(function (card) {
        observer.observe(card);
      });
    }

    // Filter tabs
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        tabs.forEach(function (t) { t.classList.remove('is-active'); });
        tab.classList.add('is-active');
        activeCategory = tab.dataset.cat;
        render();
      });
    });

    // Search
    if (searchInput) {
      searchInput.addEventListener('input', function () {
        query = searchInput.value.trim();
        render();
      });
    }

    render(); // initial paint
  }


  /* ══════════════════════════════════════════════════════════
     INIT — ENTRY PAGE  (entry.html)
     ══════════════════════════════════════════════════════════ */

  function initEntry() {
    var root = document.getElementById('arc-entry-root');
    if (!root) return;

    var params = new URLSearchParams(window.location.search);
    var id     = params.get('id');
    var entry  = id ? findEntry(id) : null;

    if (!entry) {
      root.innerHTML = '<div class="container arc-not-found">'
        + '<p>Entry not found. <a href="index.html">\u2190 Return to the Arcane Archive.</a></p>'
        + '</div>';
      return;
    }

    // Update breadcrumb label
    var navTitle = document.getElementById('arc-nav-title');
    if (navTitle) navTitle.textContent = entry.title;

    // Update browser tab title
    document.title = entry.title + ' \u2014 The Arcane Archive';

    root.innerHTML = renderEntry(entry);
  }


  /* ══════════════════════════════════════════════════════════
     BOOT
     ══════════════════════════════════════════════════════════ */

  document.addEventListener('DOMContentLoaded', function () {
    initDirectory();
    initEntry();
  });

}());
