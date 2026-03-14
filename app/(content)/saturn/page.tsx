import type { Metadata } from 'next'
import Link from 'next/link'
import SaturnNav from './SaturnNav'

export const metadata: Metadata = {
  title: 'Saturn — The Celestial King',
  description:
    'An in-depth symbolic and philosophical exploration of Saturn: from the Golden Age and Hyperborea to alchemy, the Black Cube, and the spiritual quest for the primordial self.',
}

export default function SaturnPage() {
  return (
    <>
      <SaturnNav />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <header className="hero" id="top">
        <div className="hero__rings" aria-hidden="true">
          <div className="ring ring--1"></div>
          <div className="ring ring--2"></div>
          <div className="ring ring--3"></div>
        </div>
        <div className="hero__orb" aria-hidden="true"></div>
        <div className="hero__content">
          <p className="hero__eyebrow">A Symbolic Inquiry</p>
          <h1 className="hero__title">Saturn</h1>
          <p className="hero__subtitle">
            The Celestial King, the Golden Age,<br />and the Devouring Father
          </p>
          <p className="hero__lead">
            The ringed planet carries the weight of civilizations — king of a primordial paradise,
            tyrant of time, and hidden promise of a restored self. This is a meditation on one of
            history&#39;s most layered archetypes.
          </p>
          <a href="#toc" className="btn btn--primary">Explore the Archive</a>
        </div>
        <div className="hero__scroll-hint" aria-hidden="true">
          <span></span><span></span><span></span>
        </div>
      </header>

      {/* ── TABLE OF CONTENTS ────────────────────────────────────── */}
      <nav className="toc-section" id="toc" aria-label="Chapters">
        <div className="container">
          <h2 className="section-eyebrow">Contents</h2>
          <ol className="toc-grid">
            {[
              ['#ch-conspiracy',  'I',     'Conspiracy Theories'],
              ['#ch-golden-age',  'II',    'The Golden Age'],
              ['#ch-seventh',     'III',   'The Seventh Heaven'],
              ['#ch-hyperborea',  'IV',    'Hyperborea'],
              ['#ch-santa',       'V',     'Santa Claus?'],
              ['#ch-titans',      'VI',    'Titans & Exile'],
              ['#ch-mortal',      'VII',   'The Mortal Body'],
              ['#ch-saturnalia',  'VIII',  'Saturnalia'],
              ['#ch-satan',       'IX',    'Satan & the Serpent'],
              ['#ch-abraham',     'X',     'Abraham & the Grail King'],
              ['#ch-hero',        'XI',    'The Spiritual Hero'],
              ['#ch-black-cube',  'XII',   'The Black Cube'],
              ['#ch-chronos',     'XIII',  'Chronos & Apollo'],
              ['#ch-conclusion',  'XIV',   'Conclusion'],
            ].map(([href, num, label]) => (
              <li key={href as string}>
                <a href={href as string} className="toc-card">
                  <span className="toc-num">{num}</span>
                  <span className="toc-label">{label}</span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </nav>

      <main>
        {/* ── CHAPTER INTRO ──────────────────────────────────────── */}
        <section className="chapter-intro container" id="ch-intro">
          <div className="chapter-intro__body">
            <h2 className="chapter-intro__heading">Who Is Saturn, and What Does He Want?</h2>
            <figure className="chapter-image">
              <img src="/images/introduction.jpg" alt="Modern conspiracy imagery surrounding the Saturn archetype" loading="lazy" />
              <figcaption>Introduction</figcaption>
              <div className="chapter-image__placeholder" aria-hidden="true">
                <span className="chapter-image__icon">♄</span>
                <span className="chapter-image__filename">introduction.jpg</span>
                <span className="chapter-image__hint">Place your image here — it will appear automatically</span>
              </div>
            </figure>
            <p>
              The ringed planet has been called the seventh heaven, king of the golden age, old mankind,
              devouring father, overthrower of heaven — and devil. His symbolism weaves through
              ancient mythology, Platonic philosophy, hermetic alchemy, medieval theology, and
              contemporary conspiracy theory alike.
            </p>
            <p>
              On one level, Saturn is the topmost planetary sphere — the contemplative summit above
              the noise of ordinary experience. On another, he is the relentless devourer of his
              own children — time eating everything it creates. These two faces are not contradictions
              but stages: an archetype of both the primordial paradise we carry within us and the
              fall into material identification that hides it.
            </p>
            <p className="pull-quote">
              &#8220;There is a true Saturn — the primordial state — and there is the incorrect view of our being as mere body. Golden Age contra Saturnalia.&#8221;
            </p>
          </div>
        </section>

        <div className="chapter-divider" aria-hidden="true"><span className="sigil">♄</span></div>

        {/* ── CHAPTER I: CONSPIRACY THEORIES ───────────────────── */}
        <section className="chapter" id="ch-conspiracy">
          <div className="container chapter-layout">
            <div className="chapter-header">
              <span className="chapter-num">Chapter I</span>
              <h2 className="chapter-title">Conspiracy Theories</h2>
              <p className="chapter-deck">
                Saturn has recently become the principal deity of modern conspiracy imagination —
                and on a purely symbolic level, that reading is not without merit.
              </p>
            </div>
            <figure className="chapter-image">
              <img src="/images/ch-01-conspiracy.jpg" alt="Modern conspiracy imagery surrounding the Saturn archetype" loading="lazy" />
              <figcaption>Chapter I — Conspiracy Theories</figcaption>
              <div className="chapter-image__placeholder" aria-hidden="true">
                <span className="chapter-image__icon">♄</span>
                <span className="chapter-image__filename">ch-01-conspiracy.jpg</span>
                <span className="chapter-image__hint">Place your image here — it will appear automatically</span>
              </div>
            </figure>
            <div className="chapter-body">
              <p>
                Saturn emasculates his father, the sky deity, rebelling against the old order. The violent
                overthrow of a reigning celestial father god occurs in several traditions. It does suggest
                something like a rebellion in heaven that succeeded — reality no longer depending on a
                stable transcendent order, but on power alone. It is a rejection of metaphysics.
              </p>
              <p>
                Thinkers like David Icke propose that Saturn is essentially the Gnostic demiurge: from
                the rings of that planet our false reality — the matrix in which we live — is being
                transmitted. Those inside the simulation are like gods swallowed inside the belly
                of the devouring father.
              </p>
              <div className="callout callout--warning">
                <p>
                  <strong>Note:</strong> These theories are discussed here as <em>symbolic recurrences of older themes</em>,
                  not as literal claims about planetary broadcasts or secret societies.
                </p>
              </div>
              <p>
                David Talbot&#39;s <em>The Saturn Myth</em> (1980) argues that Saturn was once
                clearly visible as a fixed point dominating the Earth&#39;s sky — its rings appearing
                as the outline of an all-seeing eye. Most solar symbolism, in this reading, traces
                back to Saturn. A cataclysmatic event then shifted Saturn to its current position.
                Norman Bergrund&#39;s <em>Ringmakers of Saturn</em> (1986) went further,
                suggesting the rings are artificial — maintained by giant vessels.
              </p>
              <p>
                Symbolically, these modern sci-fi materialist readings recapitulate themes already
                prominent in antiquity, the Middle Ages, and early modernity — the tradition
                the rest of this exploration focuses on.
              </p>
            </div>
          </div>
        </section>

        {/* ── CHAPTER II: THE GOLDEN AGE ───────────────────────── */}
        <section className="chapter chapter--alt" id="ch-golden-age">
          <div className="container chapter-layout">
            <div className="chapter-header">
              <span className="chapter-num">Chapter II</span>
              <h2 className="chapter-title">The Golden Age</h2>
              <p className="chapter-deck">
                At the root of the Western tradition, Saturn is not tyrant but king of paradise —
                and &#8220;paradise&#8221; may be an inner state as much as a mythic era.
              </p>
            </div>
            <figure className="chapter-image">
              <img src="/images/ch-02-golden-age.jpg" alt="The Golden Age — Kronos reigning over a primordial paradise" loading="lazy" />
              <figcaption>Chapter II — The Golden Age</figcaption>
              <div className="chapter-image__placeholder" aria-hidden="true">
                <span className="chapter-image__icon">♄</span>
                <span className="chapter-image__filename">ch-02-golden-age.jpg</span>
                <span className="chapter-image__hint">Place your image here — it will appear automatically</span>
              </div>
            </figure>
            <div className="chapter-body">
              <p>
                Plato&#39;s instinct was to reject the stories of Saturn as emasculator and consumer as
                &#8220;no pretty inventions&#8221; — providing early evidence for the split in the figure of Saturn
                between the dark poetic version and the philosophical ideal. For the Platonic tradition,
                Saturn is above all king of the <em>golden age</em>.
              </p>
              <p>
                The Roman name Saturn may connect etymologically to the Sanskrit <strong>sat</strong> —
                meaning <em>being</em> or <em>truth</em> — which is the root of <em>Satya Yuga</em>,
                the golden age in Indian cosmology. Saturn would then mean &#8220;that which relates to sat,&#8221;
                the primordial state in which persons had direct perception of their own being: felt
                immediacy of the present moment, the giftedness of existing, undistracted by the mind&#39;s
                constant activity.
              </p>
              <blockquote className="chapter-quote">
                <p>
                  &#8220;First of all the deathless gods who dwell on Olympus made a golden race of mortal
                  men who lived in the time of Kronos when he was reigning in heaven. And they lived
                  like the gods without sorrow of heart, remote and free from toil and grief…&#8221;
                </p>
                <cite>— Hesiod</cite>
              </blockquote>
              <p>
                Guénon writes that Saturn must not be considered primarily malevolent, &#8220;for it must
                not be forgotten that he is before all else the regent of the golden age.&#8221; Neoplatonists
                like Proclus stress that Saturn and his wife Rhea are conjoined. If the gods are
                metaphysical principles, this unity represents the male principle — present awareness,
                the penetrative faculty of consciousness — wed to the female principle: the field of
                possibility, dynamism, experience. These are not yet divided as they will be when we
                lose the sense of being.
              </p>
              <div className="info-card-row">
                <div className="info-card">
                  <h3 className="info-card__title">Sat</h3>
                  <p className="info-card__body">Sanskrit root for &#8220;being&#8221; or &#8220;truth.&#8221; The primordial sense of presence before mental identification obscures it.</p>
                </div>
                <div className="info-card">
                  <h3 className="info-card__title">Satya Yuga</h3>
                  <p className="info-card__body">The Golden Age in Indian cosmology — the cycle of time in which consciousness is clearest and least fallen.</p>
                </div>
                <div className="info-card">
                  <h3 className="info-card__title">Kronos / Saturn</h3>
                  <p className="info-card__body">King of the Golden Age in Greek and Roman tradition; the highest planetary sphere; regent of the contemplative life.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CHAPTER III: THE SEVENTH HEAVEN ─────────────────── */}
        <section className="chapter" id="ch-seventh">
          <div className="container chapter-layout">
            <div className="chapter-header">
              <span className="chapter-num">Chapter III</span>
              <h2 className="chapter-title">The Seventh Heaven</h2>
              <p className="chapter-deck">
                In the medieval cosmos, Saturn crowns the planetary spheres —
                the abode of contemplatives and saints.
              </p>
            </div>
            <figure className="chapter-image">
              <img src="/images/ch-03-seventh-heaven.jpg" alt="The seven planetary spheres — Saturn at the summit" loading="lazy" />
              <figcaption>Chapter III — The Seventh Heaven</figcaption>
              <div className="chapter-image__placeholder" aria-hidden="true">
                <span className="chapter-image__icon">♄</span>
                <span className="chapter-image__filename">ch-03-seventh-heaven.jpg</span>
                <span className="chapter-image__hint">Place your image here — it will appear automatically</span>
              </div>
            </figure>
            <div className="chapter-body">
              <p>
                Saturn&#39;s status as king of the golden age corresponds to his position as the
                <strong> seventh planetary sphere</strong> — the highest heaven before the realm
                of fixed stars and angelic intelligences. He is the seventh heaven, the heavenly
                sphere of the contemplatives.
              </p>
              <p>
                In the <em>Divine Comedy</em>, Dante places St. Benedict in Saturn&#39;s sphere.
                The state of people who lived in the golden age — in Greek and Indian tradition —
                is equivalent to the state of the saints who access the seventh heaven in Christian
                and Islamic mysticism. The number seven recurs across traditions bearing this weight:
                completeness, the summit reached after six stages of ascent.
              </p>
              <div className="planetary-ladder" aria-label="Medieval planetary spheres, outermost first">
                {[
                  { id: 'planet-saturn',  symbol: '♄', name: 'Saturn',  note: 'VII — Contemplation', active: true },
                  { id: 'planet-jupiter', symbol: '♃', name: 'Jupiter', note: 'VI — Reflexive Consciousness' },
                  { id: 'planet-mars',    symbol: '♂', name: 'Mars',    note: 'V' },
                  { id: 'planet-sun',     symbol: '☉', name: 'Sun',     note: 'IV' },
                  { id: 'planet-venus',   symbol: '♀', name: 'Venus',   note: 'III' },
                  { id: 'planet-mercury', symbol: '☿', name: 'Mercury', note: 'II' },
                  { id: 'planet-moon',    symbol: '☽', name: 'Moon',    note: 'I — Closest to Earth' },
                ].map(p => (
                  <div key={p.id} id={p.id} className={`planet-step${p.active ? ' planet-step--active' : ''}`}>
                    <span className="planet-symbol">{p.symbol}</span>
                    <span className="planet-name">{p.name}</span>
                    <span className="planet-note">{p.note}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CHAPTER IV: HYPERBOREA ────────────────────────────── */}
        <section className="chapter chapter--alt" id="ch-hyperborea">
          <div className="container chapter-layout">
            <div className="chapter-header">
              <span className="chapter-num">Chapter IV</span>
              <h2 className="chapter-title">Hyperborea</h2>
              <p className="chapter-deck">
                A paradisial realm beyond the north wind where the golden age never ended —
                and Apollo reigns.
              </p>
            </div>
            <figure className="chapter-image">
              <img src="/images/ch-04-hyperborea.jpg" alt="Hyperborea — the far northern paradise beyond the wind" loading="lazy" />
              <figcaption>Chapter IV — Hyperborea</figcaption>
              <div className="chapter-image__placeholder" aria-hidden="true">
                <span className="chapter-image__icon">♄</span>
                <span className="chapter-image__filename">ch-04-hyperborea.jpg</span>
                <span className="chapter-image__hint">Place your image here — it will appear automatically</span>
              </div>
            </figure>
            <div className="chapter-body">
              <p>
                The <em>Hyperborea</em> — the &#8220;far north&#8221; — is a paradisial realm on Earth described
                in Hesiod&#39;s <em>Catalogue of Women</em>, Pindar&#39;s <em>Pythian Odes</em>, and
                Herodotus&#39; <em>Histories</em>. It is depicted in terms strikingly similar to the
                golden age: a hidden paradise where that age never ended.
              </p>
              <blockquote className="chapter-quote">
                <p>
                  &#8220;Neither by taking ship, neither by any travel on foot to the Hyperborean folk
                  shalt thou find the wondrous way. Forever in their feasts and hymns hath Apollo
                  special joy, nor pestilence, nor wasting eld approach that hallowed race.
                  They toil not, neither do they fight and dwell unharmed of cruel Nemesis.&#8221;
                </p>
                <cite>— Pindar</cite>
              </blockquote>
              <p>
                The connection between the golden age and Hyperborea also connects Saturn to
                <strong> Apollo</strong>, who is the god of Hyperborea just as Saturn is king of the
                golden age. This affinity foreshadows the deeper identification — explored later —
                between Saturn and the solar hero who recovers the primordial state.
              </p>
            </div>
          </div>
        </section>

        {/* ── CHAPTER V: SANTA CLAUS ────────────────────────────── */}
        <section className="chapter" id="ch-santa">
          <div className="container chapter-layout">
            <div className="chapter-header">
              <span className="chapter-num">Chapter V</span>
              <h2 className="chapter-title">Santa Claus?</h2>
              <p className="chapter-deck">
                The jolly figure at the north pole carries ancient freight about primordial paradise
                and time&#39;s axis.
              </p>
            </div>
            <figure className="chapter-image">
              <img src="/images/ch-05-santa.jpg" alt="Santa Claus and the north pole as Saturn archetype" loading="lazy" />
              <figcaption>Chapter V — Santa Claus?</figcaption>
              <div className="chapter-image__placeholder" aria-hidden="true">
                <span className="chapter-image__icon">♄</span>
                <span className="chapter-image__filename">ch-05-santa.jpg</span>
                <span className="chapter-image__hint">Place your image here — it will appear automatically</span>
              </div>
            </figure>
            <div className="chapter-body">
              <p>
                The modern figure of Santa Claus dwells at the north pole — the Hyperborea atop
                the earth&#39;s axis, the stable center around which the planet rotates. That pole is
                a place beyond the cycles of history. The earth&#39;s revolutions may be read as
                analogous to the cycles of history; the north pole becomes the prehistoric golden age,
                unfallen but present <em>in the midst</em> of history.
              </p>
              <p>
                Christmas falls around <em>Saturnalia</em>, the Roman festival honoring Saturn held
                in mid-December — and near pre-Christian solar festivals, which again suggests an
                affinity between Saturn and Apollo. The gift-giver from beyond time, descending once
                a year to distribute bounty, echoes both the Saturnalian dispensation of abundance
                and the golden age&#39;s effortless plenty.
              </p>
              <div className="callout callout--insight">
                <p>
                  The north pole as locus of the timeless: a point beyond history where the golden
                  age persists latently, breaking through in festivals when ordinary order is
                  suspended and gifts are given freely.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CHAPTER VI: TITANS & EXILE ───────────────────────── */}
        <section className="chapter chapter--alt" id="ch-titans">
          <div className="container chapter-layout">
            <div className="chapter-header">
              <span className="chapter-num">Chapter VI</span>
              <h2 className="chapter-title">Titans &amp; Exile from Heaven</h2>
              <p className="chapter-deck">
                The myth of Saturn&#39;s war with the Titans and his eventual exile read, in a Platonic
                light, as an account of the inner fall from present awareness.
              </p>
            </div>
            <figure className="chapter-image">
              <img src="/images/ch-06-titans-exile.jpg" alt="Jupiter exiling Saturn — the fall from primordial awareness" loading="lazy" />
              <figcaption>Chapter VI — Titans &amp; Exile from Heaven</figcaption>
              <div className="chapter-image__placeholder" aria-hidden="true">
                <span className="chapter-image__icon">♄</span>
                <span className="chapter-image__filename">ch-06-titans-exile.jpg</span>
                <span className="chapter-image__hint">Place your image here — it will appear automatically</span>
              </div>
            </figure>
            <div className="chapter-body">
              <p>
                Saturn&#39;s war against the Titans is not merely cosmic politics. On a symbolic reading,
                the Titans represent the lower forces in us — the body&#39;s instincts, the mind&#39;s
                constant need for activity. When one enters the present moment through prayer or
                contemplation, one begins to gain power over these titanic forces. Saturn —
                the sense of being — subdues them.
              </p>
              <p>
                But then Jupiter, his son, rebels and exiles him. <strong>Jupiter is the self-reflective
                consciousness</strong> — our ability to separate from our own being and reflect upon it.
                This is a wonderful faculty; it is what makes humans human. But it opens the door
                to becoming identified with the mind&#39;s contents and losing perception of our own being,
                becoming estranged from ourselves.
              </p>
              <blockquote className="chapter-quote">
                <p>
                  &#8220;I remember how Saturn was received in this land. He had been driven by Jupiter
                  from the celestial realms. From that time the folk long retained the name of
                  Saturnian and the country too was called Latium from the <em>hiding</em> (latente)
                  of the god.&#8221;
                </p>
              </blockquote>
              <p>
                The primordial state becomes <strong>latent within us</strong>, dormant, hidden —
                dwelling in Latium, the land etymologically glossed as &#8220;the place of hiding.&#8221;
                Once Saturn is exiled and the primordial sense of being recedes, we begin to
                perceive the body and matter as our origin, our father — a false being.
              </p>
              <div className="duality-block">
                <div className="duality-side duality-side--gold">
                  <h3>Saturn</h3>
                  <p>Primordial awareness · Present being · The golden age · Contemplation · The sense of existing</p>
                </div>
                <div className="duality-divider" aria-hidden="true">vs.</div>
                <div className="duality-side duality-side--blue">
                  <h3>Jupiter</h3>
                  <p>Reflexive consciousness · Self-reflection · Historical time · Philosophical analysis · The discursive mind</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CHAPTER VII: THE MORTAL BODY ─────────────────────── */}
        <section className="chapter" id="ch-mortal">
          <div className="container chapter-layout">
            <div className="chapter-header">
              <span className="chapter-num">Chapter VII</span>
              <h2 className="chapter-title">The Mortal Body</h2>
              <p className="chapter-deck">
                In alchemical symbolism, Saturn is both the divine gold at the center and the lead
                that imprisons it — depending on which aspect has been activated.
              </p>
            </div>
            <figure className="chapter-image">
              <img src="/images/ch-07-mortal-body.jpg" alt="Saturn as lead and gold — the dual nature of the mortal body" loading="lazy" />
              <figcaption>Chapter VII — The Mortal Body</figcaption>
              <div className="chapter-image__placeholder" aria-hidden="true">
                <span className="chapter-image__icon">♄</span>
                <span className="chapter-image__filename">ch-07-mortal-body.jpg</span>
                <span className="chapter-image__hint">Place your image here — it will appear automatically</span>
              </div>
            </figure>
            <div className="chapter-body">
              <p>Julius Evola&#39;s reading of hermetic alchemy provides the clearest articulation of Saturn&#39;s duality in material terms:</p>
              <blockquote className="chapter-quote">
                <p>
                  &#8220;In man before everything else there is a celestial being also called a Saturnian being
                  or simply Saturn. It&#39;s through him that the earth force acts which determines and maintains
                  the density or heaviness, our lead. In alchemical terms, this is the hard and tangible
                  animal body. This entity is seen as the power of devouring and yearning, the root of
                  all thirst and desire. Even though it&#39;s the eternal matrix of individual bodies, at the
                  same time, since they are so ephemeral, it appears as the god who after having created
                  them devours them.&#8221;
                </p>
                <cite>— Julius Evola, on hermetic alchemy</cite>
              </blockquote>
              <p>Saturn as hard, tangible body corresponds to astrology&#39;s understanding of this planet as bringing solidity and concretization — which can be positive or become an excess. Evola summarizes the duality:</p>
              <blockquote className="chapter-quote">
                <p>
                  &#8220;Thus in alchemy we encounter a duplication: Saturn is the ancient and the divine,
                  and at the same time the inverted gold — lead — the vulgar body.&#8221;
                </p>
                <cite>— Julius Evola</cite>
              </blockquote>
              <p>
                Once we lose perception of the former we come to feel the latter is our only origin. The body is only a devil when we confuse it for the Saturn of contemplation. When the body&#39;s instincts are no longer aligned with anything higher — because we don&#39;t perceive anything higher — they feel supreme.
              </p>
            </div>
          </div>
        </section>

        {/* ── CHAPTER VIII: SATURNALIA ──────────────────────────── */}
        <section className="chapter chapter--alt" id="ch-saturnalia">
          <div className="container chapter-layout">
            <div className="chapter-header">
              <span className="chapter-num">Chapter VIII</span>
              <h2 className="chapter-title">Saturnalia</h2>
              <p className="chapter-deck">
                The Roman festival of inversion dramatizes the loss of the true Saturn
                and the reign of the false.
              </p>
            </div>
            <figure className="chapter-image">
              <img src="/images/ch-08-saturnalia.jpg" alt="Saturnalia — the Roman festival of ritual inversion" loading="lazy" />
              <figcaption>Chapter VIII — Saturnalia</figcaption>
              <div className="chapter-image__placeholder" aria-hidden="true">
                <span className="chapter-image__icon">♄</span>
                <span className="chapter-image__filename">ch-08-saturnalia.jpg</span>
                <span className="chapter-image__hint">Place your image here — it will appear automatically</span>
              </div>
            </figure>
            <div className="chapter-body">
              <p>
                <em>Saturnalia</em> was a Roman carnival in which slaves ordered masters about —
                a ritual of inversion. It illustrates the idea that the true Saturn has been lost:
                metaphysics has been inverted, and we end up with <em>carne</em> — the body — as
                supreme. <em>Carnival</em> itself derives from the Latin for &#8220;meat&#8221; (carne), pointing
                to the reign of bodily instinct when the higher faculty is eclipsed.
              </p>
              <blockquote className="chapter-quote">
                <p>
                  &#8220;During these festivals, the slaves ordered the masters about and the masters served
                  the slaves. One then had the image of a truly upside down world wherein everything
                  was done in reverse of the normal order… such a reversal constitutes generally
                  speaking one of the plainest characteristics of Satanism. We must therefore see
                  here something that relates much rather to the sinister aspect of Saturn — an
                  aspect which certainly does not pertain to him as god of the golden age.&#8221;
                </p>
                <cite>— René Guénon</cite>
              </blockquote>
              <p>
                Saturnalia does not celebrate the golden age — it parodies it. The historical
                claim that such festivals commemorate that paradise is, for Guénon, clearly false.
                The reversal of hierarchy is not a golden age but its negation — its photographic
                negative, the world seen from the perspective of the dethroned spirit.
              </p>
            </div>
          </div>
        </section>

        {/* ── CHAPTER IX: SATAN & THE SERPENT ──────────────────── */}
        <section className="chapter" id="ch-satan">
          <div className="container chapter-layout">
            <div className="chapter-header">
              <span className="chapter-num">Chapter IX</span>
              <h2 className="chapter-title">Satan &amp; the Serpent</h2>
              <p className="chapter-deck">
                How the inverted Saturn — matter made supreme — became identified with
                the Christian devil.
              </p>
            </div>
            <figure className="chapter-image">
              <img src="/images/ch-09-satan-serpent.jpg" alt="The serpent — Saturn's dark aspect and the medieval devil" loading="lazy" />
              <figcaption>Chapter IX — Satan &amp; the Serpent</figcaption>
              <div className="chapter-image__placeholder" aria-hidden="true">
                <span className="chapter-image__icon">♄</span>
                <span className="chapter-image__filename">ch-09-satan-serpent.jpg</span>
                <span className="chapter-image__hint">Place your image here — it will appear automatically</span>
              </div>
            </figure>
            <div className="chapter-body">
              <p>
                The Saturnalian inversion is described as satanic in the sense of the substitution
                of materialism for metaphysics — the body&#39;s titanic instincts as a devouring head and belly,
                the serpent: basic reptilian instinct. This is not evil in itself if it is in proper relation
                to the higher. It becomes demonic when in <em>rebellion against</em> the higher, detached from it.
              </p>
              <p>For this reason, serpents became a symbol for Saturn, and in medieval astrology he was identified with the devil:</p>
              <blockquote className="chapter-quote">
                <p>
                  &#8220;In medieval astrology, Saturn was believed to be the abode of the devil. Saturn is
                  a black star anciently reputed as Maleficus. Dragons, serpents, scorpions, vipers
                  belong to Saturn.&#8221;
                </p>
                <cite>— Carl Jung</cite>
              </blockquote>
              <p>
                The assimilation of Satan and false Saturn also occurs in John&#39;s Apocalypse, where
                the dragon means to consume the child as it is born — Christ as a Jupiter figure,
                the devil repeating the Saturn myth as devouring father, false father. Our true self
                sleeps, and we are assailed by the serpent.
              </p>
            </div>
          </div>
        </section>

        {/* ── CHAPTER X: ABRAHAM & THE GRAIL KING ──────────────── */}
        <section className="chapter chapter--alt" id="ch-abraham">
          <div className="container chapter-layout">
            <div className="chapter-header">
              <span className="chapter-num">Chapter X</span>
              <h2 className="chapter-title">Abraham &amp; the Grail King</h2>
              <p className="chapter-deck">
                The wounded father waiting to be rescued — from sacred scripture to Arthurian
                romance to pop culture.
              </p>
            </div>
            <figure className="chapter-image">
              <img src="/images/ch-10-abraham-grail.jpg" alt="Abraham, the Grail King, and the archetype of the wounded father" loading="lazy" />
              <figcaption>Chapter X — Abraham &amp; the Grail King</figcaption>
              <div className="chapter-image__placeholder" aria-hidden="true">
                <span className="chapter-image__icon">♄</span>
                <span className="chapter-image__filename">ch-10-abraham-grail.jpg</span>
                <span className="chapter-image__hint">Place your image here — it will appear automatically</span>
              </div>
            </figure>
            <div className="chapter-body">
              <p>
                In Islamic mysticism, the seventh heaven — Saturn&#39;s sphere — is assigned to the
                patriarch Abraham. The story of Abraham almost sacrificing his son parallels the
                Saturn myth of the devouring father, but the angel who stays his hand represents
                the <em>correction</em> of the Saturn archetype: the transition from false father
                to true father, from consuming to giving.
              </p>
              <p>The archetype of the injured king appears across traditions:</p>
              <ul className="tradition-list">
                <li className="tradition-item"><strong>The Grail King</strong> — wounded on his side or loins, waiting for his descendant Galahad to restore him. Just as Saturn is emasculated by Jupiter, the wound represents the wasting of energy, the loss of virility, the divorce from the feminine principle Rhea.</li>
                <li className="tradition-item"><strong>Tobit</strong> — Father weakened and blind, restored by his son Tobias in the biblical Book of Tobit.</li>
                <li className="tradition-item"><strong>Jacob &amp; Joseph</strong> — Jacob goes blind in the Quran, restored by reunion with Joseph.</li>
                <li className="tradition-item"><strong>Aeneas &amp; Anchises</strong> — Aeneas carries his injured father out of the burning city of Troy.</li>
                <li className="tradition-item"><strong>Darth Vader &amp; Luke Skywalker</strong> — The fallen father, recalled to his original self by his son.</li>
              </ul>
              <p>
                In biblical terms: Eve came from Adam&#39;s side. But now the emergence of the
                feminine from the masculine is experienced as a wound — the present moment
                alienated from our perception, male and female divorced. Christ&#39;s wound on the
                cross manifests this wound of humanity; from the blood and water flows the new Eve,
                the Church. The true father must be raised up, the golden age restored.
              </p>
            </div>
          </div>
        </section>

        {/* ── CHAPTER XI: THE SPIRITUAL HERO ───────────────────── */}
        <section className="chapter" id="ch-hero">
          <div className="container chapter-layout">
            <div className="chapter-header">
              <span className="chapter-num">Chapter XI</span>
              <h2 className="chapter-title">The Spiritual Hero</h2>
              <p className="chapter-deck">
                Casting out the false Saturn and recovering the true — the alchemical
                work of Jupiter rising from the black belly.
              </p>
            </div>
            <figure className="chapter-image">
              <img src="/images/ch-11-spiritual-hero.jpg" alt="The solar hero emerging from the black Saturn — alchemical rebirth" loading="lazy" />
              <figcaption>Chapter XI — The Spiritual Hero</figcaption>
              <div className="chapter-image__placeholder" aria-hidden="true">
                <span className="chapter-image__icon">♄</span>
                <span className="chapter-image__filename">ch-11-spiritual-hero.jpg</span>
                <span className="chapter-image__hint">Place your image here — it will appear automatically</span>
              </div>
            </figure>
            <div className="chapter-body">
              <blockquote className="chapter-quote">
                <p>
                  &#8220;The golden child is hidden by Saturn behind a black cape. It&#39;s the tomb of Osiris,
                  the body turned into the sealer of the living. In Hermetism, it&#39;s never a question
                  of separating from the body in order to escape, but of separating in order to
                  reestablish a causal and dominating relationship of the solar principle free of passion.&#8221;
                </p>
                <cite>— Julius Evola</cite>
              </blockquote>
              <p>
                We separate from the body because we have become too identified with it. In doing so,
                we re-establish our supremacy over it — not escaping but repossessing. At this point the
                myth of Jupiter exiling Saturn acquires a new meaning: the separation from the body
                perceived as devouring is represented by Jupiter casting the false Saturn, the devouring
                Saturn, out of heaven. Jupiter becomes a St. Michael figure; Saturn becomes a falling Satan.
              </p>
              <p>
                But it is not enough to cast out the false. You have to regain the original. This is
                why in the Grail stories you gain the Grail — originally a gem on the crown of Lucifer,
                separated as he fell, a piece of heaven to be recovered. <strong>Cast out the false
                Saturn; regain the true Saturn.</strong>
              </p>
              <p>
                Jung writes that in alchemical symbolism, Saturn is called the <em>black sun</em> —
                black outside like lead, but white inside. The golden child hidden within the black cape
                is the Jupiter who breaks out of the false Saturn&#39;s imprisoning womb, overcoming the
                apparent primacy of the body over consciousness.
              </p>
              <div className="alchemy-diagram" aria-label="Alchemical process of Saturn">
                <div className="alc-stage">
                  <div className="alc-symbol">⬛</div>
                  <div className="alc-label">Black Saturn</div>
                  <div className="alc-desc">Lead · False father · Body mistaken as supreme</div>
                </div>
                <div className="alc-arrow" aria-hidden="true">→</div>
                <div className="alc-stage">
                  <div className="alc-symbol">⚔️</div>
                  <div className="alc-label">Jupiter Rises</div>
                  <div className="alc-desc">Reflexive consciousness separates from false identification</div>
                </div>
                <div className="alc-arrow" aria-hidden="true">→</div>
                <div className="alc-stage">
                  <div className="alc-symbol">☀️</div>
                  <div className="alc-label">Solar Hero</div>
                  <div className="alc-desc">True Saturn recovered · Primordial awareness restored · Gold revealed</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CHAPTER XII: THE BLACK CUBE ──────────────────────── */}
        <section className="chapter chapter--alt" id="ch-black-cube">
          <div className="container chapter-layout">
            <div className="chapter-header">
              <span className="chapter-num">Chapter XII</span>
              <h2 className="chapter-title">The Black Cube</h2>
              <p className="chapter-deck">
                Six faces, a seventh center — the cube as completion of space, and its
                counterfeit in modern techno-materialist imagery.
              </p>
            </div>
            <figure className="chapter-image">
              <img src="/images/ch-12-black-cube.jpg" alt="The Black Cube — Saturn's geometry and the end of the cycle" loading="lazy" />
              <figcaption>Chapter XII — The Black Cube</figcaption>
              <div className="chapter-image__placeholder" aria-hidden="true">
                <span className="chapter-image__icon">♄</span>
                <span className="chapter-image__filename">ch-12-black-cube.jpg</span>
                <span className="chapter-image__hint">Place your image here — it will appear automatically</span>
              </div>
            </figure>
            <div className="chapter-body">
              <p>
                The cube has six faces representing the six spatial coordinates: up, down, forward,
                back, right, left. The six points of space plus the seventh center — the
                <em> quintessence</em>. You can think of the cube as a folded-up cross, the sign of
                Jesus pointing in the four directions plus a center. The Latin <em>quintessentia</em>
                — the fifth essence — is that center within physical space.
              </p>
              <p>For Plato the cube is the earth — the earthly equivalent of the heavenly sphere. If the cube is isolated from the sky, it represents the earth as prison, cut off from what is above it. Guénon writes:</p>
              <blockquote className="chapter-quote">
                <p>
                  &#8220;At the end of a cycle the circle is replaced by the square. The sphere, which
                  represents the development of possibilities by the expansion of the primordial
                  point, is transformed into a cube when this development is completed.&#8221;
                </p>
                <cite>— René Guénon</cite>
              </blockquote>
              <p>
                In the beginning: sphere. At the end: cube — the final symmetry of creation.
                The traditional theme of history ending with the heavenly cube (and the sphere of Eden
                giving way to the heavenly city of the New Jerusalem) is parodied by the black box of AI
                as a technos singularity — the dystopian anti-human bad ending, the false feminine
                swallowing up the child rather than birthing it. The sphere contains the masculine.
                The cube is feminine spaciousness given masculine form. Both are necessary; the perversion
                is in their detachment from each other.
              </p>
            </div>
          </div>
        </section>

        {/* ── CHAPTER XIII: CHRONOS & APOLLO ───────────────────── */}
        <section className="chapter" id="ch-chronos">
          <div className="container chapter-layout">
            <div className="chapter-header">
              <span className="chapter-num">Chapter XIII</span>
              <h2 className="chapter-title">Chronos &amp; Apollo</h2>
              <p className="chapter-deck">
                The split of Kronos into dark Kronos and bright Carneos — and the solar hero
                who discovers the true primordial king.
              </p>
            </div>
            <figure className="chapter-image">
              <img src="/images/ch-13-chronos-apollo.jpg" alt="Carneos — the horned Apollo, solar hero who recovers the true Kronos" loading="lazy" />
              <figcaption>Chapter XIII — Chronos &amp; Apollo</figcaption>
              <div className="chapter-image__placeholder" aria-hidden="true">
                <span className="chapter-image__icon">♄</span>
                <span className="chapter-image__filename">ch-13-chronos-apollo.jpg</span>
                <span className="chapter-image__hint">Place your image here — it will appear automatically</span>
              </div>
            </figure>
            <div className="chapter-body">
              <p>
                Guénon argues that Kronos was never primarily a god of time (chronology), but a
                heavenly deity whose name was later phonetically assimilated to <em>khronos</em>, time.
                Even if we took him as a god of time, it would be time not as devouring mortality
                but as the <strong>eternal moment</strong> — the golden age before history,
                contemplation above the other spheres.
              </p>
              <p>
                Guénon identifies a split of the original name Kronos into two Greek deities:
                the malevolent aspect concentrating on Kronos, while the beneficent aspect remained
                attached to <strong>Carneos</strong> — a Doric form of Apollo. Carneos is the god
                of the high place, the sacred mountain, the pole — associated with the cubic stone.
                He is a horned sun god, Apollo with horns:
              </p>
              <blockquote className="chapter-quote">
                <p>
                  &#8220;The name Kronos is perfectly appropriate for Saturn who in fact corresponds to
                  the highest planetary sphere. The word horn itself is linked with the root K‑R‑N
                  and the same applies to crown. In Latin, cornu and corona are very close to
                  one another.&#8221;
                </p>
                <cite>— René Guénon</cite>
              </blockquote>
              <p>
                Crown and horn: the high place, the summit, rays emanating from the sun or a weapon.
                The crown of thorns on Jesus carries a solar meaning — rays, emanations. Horns represent
                the animal self tamed and integrated; one wears horns as a king because one has
                subdued the animal self. In the Apocalypse, Christ appears as the Lamb with
                <strong> seven eyes and seven horns</strong> — seven, the number of Saturn.
              </p>
              <div className="info-card-row">
                <div className="info-card">
                  <h3 className="info-card__title">Carneos</h3>
                  <p className="info-card__body">Doric Apollo · Horned sun god · Festival of atonement (Carneia) · The high place · The recovered golden child of alchemy</p>
                </div>
                <div className="info-card">
                  <h3 className="info-card__title">Mithras</h3>
                  <p className="info-card__body">Solar hero who slays the bull · Master of the animal self · Initiatic figure parallel to Carneos</p>
                </div>
                <div className="info-card">
                  <h3 className="info-card__title">Dhul-Qarnayn</h3>
                  <p className="info-card__body">&#8220;The Two-Horned One&#8221; of the Quran · Follows the sun to east and west · Looks beyond chronological time to the primordial present</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CHAPTER XIV: CONCLUSION ──────────────────────────── */}
        <section className="chapter chapter--alt" id="ch-conclusion">
          <div className="container chapter-layout">
            <div className="chapter-header">
              <span className="chapter-num">Chapter XIV</span>
              <h2 className="chapter-title">Conclusion: The Golden Age Restored</h2>
              <p className="chapter-deck">
                Apollo, the clarified mind, the Apollonian personality — a new heaven and earth
                that dawn upon everything history has earned.
              </p>
            </div>
            <figure className="chapter-image">
              <img src="/images/ch-14-conclusion.jpg" alt="The Golden Age restored — Apollo, the luminous personality, new heaven and earth" loading="lazy" />
              <figcaption>Chapter XIV — The Golden Age Restored</figcaption>
              <div className="chapter-image__placeholder" aria-hidden="true">
                <span className="chapter-image__icon">♄</span>
                <span className="chapter-image__filename">ch-14-conclusion.jpg</span>
                <span className="chapter-image__hint">Place your image here — it will appear automatically</span>
              </div>
            </figure>
            <div className="chapter-body">
              <p>
                <strong>Jupiter</strong> is the reflexive consciousness — our ability to unfold from
                our own being and examine it — wonderful unless it leads to identification with mere
                mental content. <strong>Apollo / Carneos</strong> is the realized personality: once
                reflexive consciousness recovers present awareness, rescues the father rather than
                being alienated by mental activity from its own being, the mind clarifies. The
                personality becomes luminous — Apollonian.
              </p>
              <p>
                The golden age is restored, but not as innocent Eden. It dawns on everything we have
                gained through history — all knowledge acquired, all contents of the mind ordered.
                New heaven and new earth. The idea is to inhabit the clarified mind while exercising
                the reflective faculty while remaining aware of the contemplative core.
              </p>
              <blockquote className="chapter-quote chapter-quote--final">
                <p>
                  &#8220;The atom of Eden is the Saturn of the golden age. The Adam that emerges from Hades
                  is like Saturn awakening in Latium.&#8221;
                </p>
              </blockquote>
              <p>
                In Neoplatonism: Saturn–Rhea is the monad, the unity of the One as it first manifests.
                Jupiter is the demiurge who, contemplating the monad, produces the cosmos. In Indian
                terms: <em>sat</em> (being, contemplative consciousness), <em>chit</em> (reflexive
                consciousness), <em>ānanda</em> (bliss, experiential consciousness). In Daniel&#39;s
                vision: Saturn proper is the Ancient of Days; the dynamic aspect is the Son of Man.
              </p>
              <p>
                These traditions, pagan and biblical alike, are not contradictions but different
                lights on the same inner landscape. The human mind is always yearning for the good,
                the true, and the beautiful. Even in perverse or broken form, the stories that surface
                from the human soul can be turned over; the truth within them can be found, refined,
                and — perhaps — baptized into service of a righteous culture yet to come.
              </p>
              <div className="closing-triad">
                <div className="triad-item">
                  <span className="triad-symbol">♄</span>
                  <h3 className="triad-name">Saturn</h3>
                  <p>The Ancient of Days · Sat · Monad · Present awareness · True father</p>
                </div>
                <div className="triad-item">
                  <span className="triad-symbol">♃</span>
                  <h3 className="triad-name">Jupiter</h3>
                  <p>The Demiurge · Chit · Reflexive consciousness · Son of Man</p>
                </div>
                <div className="triad-item">
                  <span className="triad-symbol">☉</span>
                  <h3 className="triad-name">Apollo</h3>
                  <p>The Solar Hero · Ānanda · Realized personality · New heaven &amp; earth</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ───────────────────────────────────────────────── */}
      <footer className="site-footer">
        <div className="container">
          <span className="sigil large" aria-hidden="true">♄</span>
          <p className="footer-text">
            A symbolic study drawing on Plato, Hesiod, Pindar, Dante, Guénon, Evola, Carl Jung,
            and the wider hermetic and neoplatonic tradition.
          </p>
          <nav className="footer-stories" aria-label="Other sections">
            <p className="footer-stories__label">Explore Further</p>
            <Link href="/arcane" className="footer-stories__link">
              <span className="footer-stories__sigil" aria-hidden="true">✦</span>
              <span>The Arcane Archive — A Directory of Esoteric Knowledge</span>
            </Link>
          </nav>
          <a href="#top" className="btn btn--ghost btn--sm">Back to Top ↑</a>
        </div>
      </footer>
    </>
  )
}
