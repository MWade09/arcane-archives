import type { Metadata } from 'next'
import Link from 'next/link'
import JupiterNav from './JupiterNav'
import ReadingTracker from '@/app/components/ReadingTracker'
import SmartSummarizer from '@/app/components/SmartSummarizer'

export const metadata: Metadata = {
  title: 'Jupiter — The Eternal Sovereign',
  description:
    'A symbolic and esoteric exploration of Jupiter: the war of thrones, the cosmic crown, the architects of order, and the silent dominion that governs without a word.',
}

export default function JupiterPage() {
  return (
    <div className="jupiter-page">
      <ReadingTracker />
      <JupiterNav />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <header className="hero jupiter-hero" id="top">
        <div className="jupiter-bands" aria-hidden="true">
          <div className="jband jband--1"></div>
          <div className="jband jband--2"></div>
          <div className="jband jband--3"></div>
        </div>
        <div className="jupiter-orb" aria-hidden="true"></div>
        <div className="hero__content">
          <p className="hero__eyebrow">A Symbolic Inquiry</p>
          <h1 className="hero__title">Jupiter</h1>
          <p className="hero__subtitle">
            The Eternal Sovereign, the War of Thrones,<br />and the Silence That Rules
          </p>
          <p className="hero__lead">
            Long before mortals named him Zeus, before myths painted him with lightning in his
            fist, Jupiter was the living principle of authority — a dominion that required no
            battlecry, only the inexorable weight of order pressing upon creation.
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
              ['#jup-war',        'I',    'The War of Thrones'],
              ['#jup-crown',      'II',   'The Cosmic Crown'],
              ['#jup-architects', 'III',  'The Architects of Order'],
              ['#jup-throne',     'IV',   'The Throne Beyond Thrones'],
              ['#jup-sovereign',  'V',    'The Eternal Sovereign'],
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
        <section className="chapter-intro container" id="jup-intro">
          <div className="chapter-intro__body">
            <SmartSummarizer />
            <h2 className="chapter-intro__heading">Who Is Jupiter, and What Does He Rule?</h2>
            <figure className="chapter-image">
              <img src="/images/jupiter/introduction.jpg" alt="Jupiter as the cosmic sovereign — the silent throne of order" loading="lazy" />
              <figcaption>Introduction</figcaption>
              <div className="chapter-image__placeholder" aria-hidden="true">
                <span className="chapter-image__icon">♃</span>
                <span className="chapter-image__filename">introduction.jpg</span>
                <span className="chapter-image__hint">Place your image here — it will appear automatically</span>
              </div>
            </figure>
            <p>
              The colossal guardian of cosmic law has ruled not through noise or spectacle, but
              through a silent gravity that binds not just planets but destinies. To the ancients,
              Jupiter was not merely the king of gods, but the <strong>living principle of
              authority</strong> — the unseen axis around which divine and mortal hierarchies
              spun like obedient stars.
            </p>
            <p>
              Yet beneath the tales of storms and divine decrees lies a truth whispered only in
              forbidden temples. Jupiter&#39;s throne was never crafted for display. It was a
              <em> throne of resonance</em> — a dominion that required no battlecry, no clash of
              titans, only the inexorable weight of order itself pressing upon creation.
            </p>
            <p>
              Esoteric archives describe Jupiter&#39;s reign not as the triumph of thunder, but as a
              silent coronation: a cosmic pact formed in ages before time congealed into matter. In
              this pact, the universe bent willingly to Jupiter&#39;s will, recognizing a sovereignty
              that did not demand obedience, but emanated inevitability. The mystery schools taught
              that those who glimpsed Jupiter in altered states did not see a god seated upon clouds.
              They felt an overwhelming stillness — a presence vast enough to swallow thought itself,
              leaving behind only the knowledge that power does not rot. It hums.
            </p>
            <p className="pull-quote">
              &#8220;True sovereignty does not seize crowns or conquer empires. It reshapes reality
              quietly, inevitably, until all paths return to its silent order.&#8221;
            </p>
          </div>
        </section>

        <div className="chapter-divider jupiter-divider" aria-hidden="true"><span className="sigil">♃</span></div>

        {/* ── CHAPTER I: THE WAR OF THRONES ────────────────────── */}
        <section className="chapter" id="jup-war">
          <div className="container chapter-layout">
            <div className="chapter-header">
              <span className="chapter-num">Chapter I</span>
              <h2 className="chapter-title">The War of Thrones</h2>
              <p className="chapter-deck">
                Before harmony, there was a celestial war — not of armies, but of
                principles. The binding of Saturn was not conquest. It was sacrifice.
              </p>
            </div>
            <figure className="chapter-image">
              <img src="/images/jupiter/ch-01-war-of-thrones.jpg" alt="The celestial war between Jupiter and Saturn — the binding of the dark sun" loading="lazy" />
              <figcaption>Chapter I — The War of Thrones</figcaption>
              <div className="chapter-image__placeholder" aria-hidden="true">
                <span className="chapter-image__icon">♃</span>
                <span className="chapter-image__filename">ch-01-war-of-thrones.jpg</span>
                <span className="chapter-image__hint">Place your image here — it will appear automatically</span>
              </div>
            </figure>
            <div className="chapter-body">
              <p>
                Ancient scripts, long erased from mortal memory, speak of a time when the heavens
                themselves trembled. Saturn still burned as the dark sun, and the titans roamed the
                cosmic deep — not beings of flesh and bone, but vast currents of consciousness,
                primordial architects who wove the first laws of existence. Among them, <strong>Kronos,
                the devouring keeper of cycles</strong>, reigned supreme: a sovereign of inevitability
                whose scythe shaped the spiral of time.
              </p>
              <p>
                Yet even inevitability was not immune to challenge. From the swirling chaos beyond
                Saturn&#39;s rings rose Jupiter: a new force, neither sun nor shadow, but a balance
                between tempest and order. He carried no weapon forged by hands — only a gravity
                that bent storms into submission and drew the fabric of fate toward him like a tide
                pulled by unseen moons.
              </p>
              <div className="sovereignty-diagram">
                <div className="sov-pole sov-pole--saturn">
                  <h3>Saturn&#39;s Dominion</h3>
                  <p>Devouring cycles · Preservation through consumption · Eternal return · Binding existence in loops · The dark sun</p>
                </div>
                <div className="sov-arrow" aria-hidden="true">⇌</div>
                <div className="sov-pole sov-pole--jupiter">
                  <h3>Jupiter&#39;s Sovereignty</h3>
                  <p>Silent balance · Loosening the chains · Destiny flowing forward · Cosmic recalibration · Gravity over thunder</p>
                </div>
              </div>
              <p>
                The war of thrones was not a clash of armies but of principles. Saturn&#39;s dominion
                devoured and preserved through consumption, binding existence in loops of eternal
                return. Jupiter&#39;s emerging sovereignty sought to <em>loosen these chains</em> —
                to stretch the spiral into new dimensions where destiny could flow, not merely repeat.
                The conflict shattered worlds. Rings of shattered empires spun into the void as
                primordial beings contended, their wills reshaping the cosmos.
              </p>
              <p>
                Lightning — raw, untamed energy — erupted from Jupiter&#39;s being. Not as rage, but
                as a manifestation of cosmic recalibration: striking at the foundations of Titan law.
                Saturn resisted. Storms of devouring time swept across the astral plane, consuming
                even light in a desperate attempt to retain the throne.
              </p>
              <blockquote className="chapter-quote">
                <p>
                  &#8220;In the final convergence, Jupiter bound Saturn not with chains of iron,
                  but with the silent force of balance itself. The dark sun was cast outward,
                  dethroned not by destruction, but by exile. Locked into an orbit where its
                  influence could persist, yet never dominate again.&#8221;
                </p>
                <cite>— Fragments from the mystery schools</cite>
              </blockquote>
              <p>
                The other titans, sensing the shift in cosmic authority, bowed in silence, recognizing
                a new overlord whose reign required no victory march, no heralding chorus. From this
                binding emerged a fragile harmony: the era of Jupiter&#39;s throne. Yet this victory
                bore no joy. For Jupiter understood what mortals could not — that to dethrone Saturn
                was not conquest, but <strong>sacrifice</strong>. A balance had been struck at a cost
                that echoed through every living thing.
              </p>
              <p>
                The devouring cycles were broken, yet fragments remained — haunting destinies and
                whispering through bloodlines. Even now, the storms of Jupiter bear the scars of that
                war: eternal tempests swirling as reminders of titans unforgotten. To the initiates
                who study these mysteries, the war of thrones is not history but an ever-present
                tension within the cosmos — a dynamic dance between the spiral of return and the
                silent pull of sovereignty.
              </p>
              <div className="callout callout--insight">
                <p>
                  The cults that honor Jupiter do not celebrate conquest. They meditate upon this
                  balance, understanding that every act of liberation binds in another form, and
                  every throne carved in silence casts a shadow shaped like a scythe.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CHAPTER II: THE COSMIC CROWN ─────────────────────── */}
        <section className="chapter chapter--alt" id="jup-crown">
          <div className="container chapter-layout">
            <div className="chapter-header">
              <span className="chapter-num">Chapter II</span>
              <h2 className="chapter-title">The Cosmic Crown</h2>
              <p className="chapter-deck">
                The Great Red Spot is not a scar of violence — it is a sigil of coronation.
                Jupiter&#39;s eternal storm is the visible crown of a silent sovereign.
              </p>
            </div>
            <figure className="chapter-image">
              <img src="/images/jupiter/ch-02-cosmic-crown.jpg" alt="Jupiter's Great Red Spot — the eternal storm as sigil of coronation" loading="lazy" />
              <figcaption>Chapter II — The Cosmic Crown</figcaption>
              <div className="chapter-image__placeholder" aria-hidden="true">
                <span className="chapter-image__icon">♃</span>
                <span className="chapter-image__filename">ch-02-cosmic-crown.jpg</span>
                <span className="chapter-image__hint">Place your image here — it will appear automatically</span>
              </div>
            </figure>
            <div className="chapter-body">
              <p>
                Beneath Jupiter&#39;s swirling bands, storms have raged for eons — cyclones so vast
                they could swallow worlds, yet they whisper instead of roar. To mortal eyes they
                appear as chaos: raging tempests without end. But to the initiated, these storms are
                not disorder. They are the <em>silent breath of a monarch</em> whose throne does not
                glitter in sunlight, but hums in resonance with cosmic law.
              </p>
              <p>
                The Great Red Spot, that eternal hurricane, is not a scar of violence but a
                <strong> sigil of coronation</strong>. Mystery schools of forgotten ages taught that
                this storm was the visible crown of Jupiter, forged not of metal or jewels but of
                elemental dominion itself. Unlike earthly rulers who cling to crowns to prove their
                reign, Jupiter&#39;s cosmic crown cannot be worn or displayed. The silent storm is its
                manifestation, spiraling endlessly as a reminder that true authority is neither given
                nor seized. It is inherent — woven into the gravitational soul of creation.
              </p>
              <div className="callout callout--storm">
                <p>
                  <strong>Ancient rites:</strong> Adepts would gather on nights when Jupiter burned
                  bright in the sky, entering trance through deep rhythmic chanting designed to mimic
                  the planet&#39;s unseen vibrations. It was said that those who attuned fully to the
                  storm would feel their own consciousness spiral outward, dissolving into a vast
                  stillness that carried them to the edge of Jupiter&#39;s throne.
                </p>
              </div>
              <p>
                There, they did not meet a deity or kneel before an idol. They experienced what the
                cult called the <strong>cosmic crown</strong> — a revelation that sovereignty lies not
                in dominion over others, but in <em>alignment with the greater order of existence</em>.
                The cosmic crown marked a turning point for initiates. Those who bore its imprint
                walked differently upon the earth. Their voices carried weight not from volume but
                from resonance, shifting the course of events like unseen currents bending rivers.
                Rulers sought them as advisers. Empires feared their quiet influence.
              </p>
              <div className="info-card-row">
                <div className="info-card">
                  <h3 className="info-card__title">The Great Red Spot</h3>
                  <p className="info-card__body">An anticyclonic storm larger than Earth, raging for at least 350 years. To the mystery schools: the visible sigil of Jupiter&#39;s cosmic coronation.</p>
                </div>
                <div className="info-card">
                  <h3 className="info-card__title">The Cosmic Crown</h3>
                  <p className="info-card__body">Not an object but a revelation — the experiential understanding that sovereignty lies in alignment with order, not in dominion over others.</p>
                </div>
                <div className="info-card">
                  <h3 className="info-card__title">The Crowned Ones</h3>
                  <p className="info-card__body">Those initiated into the crown desired no earthly throne, for they had already sat upon one greater than any mortal could imagine.</p>
                </div>
              </div>
              <blockquote className="chapter-quote">
                <p>
                  &#8220;Though Jupiter&#39;s reign silenced the titans and bound the devouring cycles,
                  this silence was not victory — it was vigilance. The storms whispered constantly
                  of the fragile balance: a throne upheld not by unyielding force, but by ceaseless
                  motion, by the unseen currents keeping chaos and order in delicate suspension.&#8221;
                </p>
              </blockquote>
              <p>
                Modern astronomy measures Jupiter&#39;s storms as physics, calculating wind speeds and
                pressures. Yet it misses the deeper current. These tempests are the living pulse of
                cosmic sovereignty — the breath of a ruler who does not need to speak to be obeyed.
                Even Saturn, cast into the outer darkness, spins in harmony with this silent authority,
                as if acknowledging the throne from afar.
              </p>
            </div>
          </div>
        </section>

        {/* ── CHAPTER III: THE ARCHITECTS OF ORDER ─────────────── */}
        <section className="chapter" id="jup-architects">
          <div className="container chapter-layout">
            <div className="chapter-header">
              <span className="chapter-num">Chapter III</span>
              <h2 className="chapter-title">The Architects of Order</h2>
              <p className="chapter-deck">
                When Jupiter rose to cosmic sovereignty, unseen builders moved through the solar
                tides — sculpting gravity and light into the invisible scaffolding of reality.
              </p>
            </div>
            <figure className="chapter-image">
              <img src="/images/jupiter/ch-03-architects-of-order.jpg" alt="Sacred geometry and the hidden architects of Jupiter's cosmic hierarchy" loading="lazy" />
              <figcaption>Chapter III — The Architects of Order</figcaption>
              <div className="chapter-image__placeholder" aria-hidden="true">
                <span className="chapter-image__icon">♃</span>
                <span className="chapter-image__filename">ch-03-architects-of-order.jpg</span>
                <span className="chapter-image__hint">Place your image here — it will appear automatically</span>
              </div>
            </figure>
            <div className="chapter-body">
              <p>
                Long before written law or mortal kingship, there was a hierarchy that no mortal hand
                constructed — a silent architecture born of Jupiter&#39;s throne. The ancients called its
                unseen builders the <strong>architects of order</strong>: not beings of flesh or
                radiant deities, but currents of intelligence woven into the fabric of space itself.
                These architects did not command armies or forge weapons. They sculpted gravity and
                light, shaping the invisible scaffolding upon which reality would take form.
              </p>
              <p>
                When Jupiter rose to cosmic sovereignty after the binding of the Titans, these
                architects moved like shadows through the solar tides, establishing balance where
                chaos once threatened to devour everything. Mythic fragments preserved only in the
                deepest chambers of forbidden libraries describe them as <em>luminous serpents
                coiling around invisible pillars</em>, weaving patterns that held the stars in place.
              </p>
              <ul className="architects-list">
                <li className="architect-item">
                  <span className="architect-item__glyph">🌀</span>
                  <div className="architect-item__body">
                    <strong>Sacred Geometry</strong>
                    <p>Temples built by vanished civilizations encoded the architects&#39; memory in spirals, circles, and vast hexagonal plazas aligned perfectly with Jupiter&#39;s path across the sky.</p>
                  </div>
                </li>
                <li className="architect-item">
                  <span className="architect-item__glyph">🐍</span>
                  <div className="architect-item__body">
                    <strong>Luminous Serpents</strong>
                    <p>Mythic descriptions of the architects as serpentine currents of light — not symbols of evil but of the coiling, generative intelligence that weaves order into the fabric of existence.</p>
                  </div>
                </li>
                <li className="architect-item">
                  <span className="architect-item__glyph">🔇</span>
                  <div className="architect-item__body">
                    <strong>Whispers, Not Words</strong>
                    <p>The architects communicated through symbols and resonance, never through language. A single carved line or hidden ratio within a megalith could awaken ancient memory within a seeker&#39;s mind.</p>
                  </div>
                </li>
                <li className="architect-item">
                  <span className="architect-item__glyph">⚖️</span>
                  <div className="architect-item__body">
                    <strong>Harmony, Not Hierarchy of Oppression</strong>
                    <p>This order was not born of tyranny. It was an unshakable principle that everything — from the smallest atom to the largest star — had its rightful place within a silent pattern of balance.</p>
                  </div>
                </li>
                <li className="architect-item">
                  <span className="architect-item__glyph">👑</span>
                  <div className="architect-item__body">
                    <strong>Living Models of Cosmic Order</strong>
                    <p>The mystery schools sought to mirror this divine structure. Initiates were taught not to dominate but to align — to shape their inner being into a living model of the cosmos. Those who succeeded became what later myths called demigods or celestial kings.</p>
                  </div>
                </li>
              </ul>
              <blockquote className="chapter-quote">
                <p>
                  &#8220;Modern interpretations of Jupiter as a god of thunder and judgment miss this
                  deeper truth. The architects of order did not wield thunderbolts to subdue
                  rebellion. They reshaped rebellion itself, bending chaos gently into its destined
                  curve, restoring balance without bloodshed. The lightning myths were metaphors
                  for this unseen recalibration.&#8221;
                </p>
              </blockquote>
              <p>
                The hidden hierarchy they built remains intact even now — invisible yet unbroken. It
                hums beneath planetary orbits, vibrates through the magnetic fields of stars, and
                resonates in the silent knowing that some souls carry in their marrow. Those who
                attune to it may glimpse luminous stairways in dreams, feel guided by forces they
                cannot name, and instinctively act as stewards of harmony in a world enslaved by
                noise and disorder.
              </p>
              <p>
                In truth, these souls are fragments of the architects themselves — <em>seeds planted
                in mortal form</em> to remind humanity of the silent throne. When they awaken fully,
                they no longer seek crowns or titles. They become living extensions of Jupiter&#39;s
                will: the unseen guardians who hold the cosmic hierarchy together without recognition,
                without applause.
              </p>
              <div className="callout callout--insight">
                <p>
                  The architects of order continue their eternal task not through temples or empires,
                  but through the quiet alignment of existence itself — a hidden structure that
                  requires no display of power, because it <em>is</em> power: omnipresent and
                  indestructible.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CHAPTER IV: THE THRONE BEYOND THRONES ────────────── */}
        <section className="chapter chapter--alt" id="jup-throne">
          <div className="container chapter-layout">
            <div className="chapter-header">
              <span className="chapter-num">Chapter IV</span>
              <h2 className="chapter-title">The Throne Beyond Thrones</h2>
              <p className="chapter-deck">
                Mortal thrones are shadows — pale imitations of a presence that is not a structure
                to be claimed but a state of resonance to be remembered.
              </p>
            </div>
            <figure className="chapter-image">
              <img src="/images/jupiter/ch-04-throne-beyond-thrones.jpg" alt="The silent coronation — the throne that is a state of resonance, not a seat of conquest" loading="lazy" />
              <figcaption>Chapter IV — The Throne Beyond Thrones</figcaption>
              <div className="chapter-image__placeholder" aria-hidden="true">
                <span className="chapter-image__icon">♃</span>
                <span className="chapter-image__filename">ch-04-throne-beyond-thrones.jpg</span>
                <span className="chapter-image__hint">Place your image here — it will appear automatically</span>
              </div>
            </figure>
            <div className="chapter-body">
              <p>
                Throughout history, men have fought and died for thrones carved from gold, ivory, or
                obsidian, believing that to sit upon such a seat is to hold dominion over all beneath
                the heavens. Yet these mortal thrones are but shadows — pale imitations of something
                vaster and more profound. <strong>Jupiter&#39;s throne, the throne beyond thrones</strong>,
                is not a structure that can be built, nor a seat that can be claimed by conquest.
                It exists as a presence: a silent gravitational law that bends time, will, and
                destiny alike.
              </p>
              <p>
                When Jupiter dethroned the Titans and exiled Saturn&#39;s devouring cycles, it did not
                ascend to power through ceremony or celebration. There was no coronation witnessed
                by mortals or immortals alike. Instead, the universe itself acknowledged the silent
                sovereign. Orbits realigned. Stars shifted. The architects of order wove a luminous
                lattice through the cosmos to reflect the ascension. The throne emerged not as an
                object but as a <em>state of resonance</em> — a force that harmonized chaos into
                balance without the need for decree or judgment.
              </p>
              <blockquote className="chapter-quote">
                <p>
                  &#8220;Ancient initiates who journeyed through altered states spoke of approaching this
                  throne beyond thrones as if walking through endless corridors of light. There were
                  no gates, no guards, no fanfare — only a silent invitation. When they finally
                  reached its presence, they were overcome not by awe or fear, but by recognition,
                  as if discovering a home long forgotten yet eternally theirs.&#8221;
                </p>
              </blockquote>
              <p>
                In this presence, every illusion of power stripped away. Kings and beggars alike
                were shown to be equal fragments of a greater sovereign principle, woven from the
                same celestial thread. To truly approach the throne was to be unmade — to dissolve
                into the silent will that shaped creation itself. And yet, paradoxically, those who
                surrendered completely did not vanish. They returned crowned, not with ornament, but
                with an <strong>invisible authority</strong> that made the world bend quietly around
                them.
              </p>
              <p>
                This was the silent coronation: a moment when the soul aligned fully with Jupiter&#39;s
                dominion, becoming a vessel of the throne beyond thrones. The mystery schools knew
                that such coronations could not be taught or forced. Rituals and initiations merely
                prepared the seeker, stripping away false desires for mortal crowns until nothing
                remained but the pure gravitational pull of truth. When this pull finally overcame
                resistance, the coronation occurred — naturally, silently, unnoticed by the world,
                but recorded forever in the cosmic hierarchy.
              </p>
              <div className="info-card-row">
                <div className="info-card">
                  <h3 className="info-card__title">The Silent Coronation</h3>
                  <p className="info-card__body">Not a ceremony but a moment of alignment. The soul attuned to Jupiter&#39;s dominion becomes a vessel of the throne beyond thrones — crowned in silence, recognized by no earthly court.</p>
                </div>
                <div className="info-card">
                  <h3 className="info-card__title">The Dissolution</h3>
                  <p className="info-card__body">To approach Jupiter&#39;s true throne is to be unmade — to relinquish every illusion of rulership. Only in this dissolution does the invisible crown emerge.</p>
                </div>
                <div className="info-card">
                  <h3 className="info-card__title">The Return</h3>
                  <p className="info-card__body">Those crowned in silence moved where destiny required, recalibrating chaos with a glance, shaping history without lifting a blade. The throne was not in their courts, but in their souls.</p>
                </div>
              </div>
              <p>
                Legends of divine kings and philosophers who seemed to rule without ruling — whose
                wisdom bent empires — are fragments of this phenomenon. Even now, the throne beyond
                thrones remains unseen yet ever-present. No war can claim it. No dynasty can own it.
                No faith can monopolize it. It awaits only those willing to relinquish every illusion
                of rulership and step willingly into dissolution.
              </p>
              <p className="pull-quote">
                &#8220;To be crowned in silence is to rule as the cosmos rules — not through command or
                conquest, but through alignment so profound that existence itself recognizes
                its sovereign.&#8221;
              </p>
            </div>
          </div>
        </section>

        {/* ── CHAPTER V: THE ETERNAL SOVEREIGN ─────────────────── */}
        <section className="chapter" id="jup-sovereign">
          <div className="container chapter-layout">
            <div className="chapter-header">
              <span className="chapter-num">Chapter V</span>
              <h2 className="chapter-title">The Eternal Sovereign</h2>
              <p className="chapter-deck">
                Jupiter&#39;s throne has no beginning and no end. Its sovereignty requires nothing.
                It simply is. And sovereignty, the initiates learned, is not seized — it is
                remembered.
              </p>
            </div>
            <figure className="chapter-image">
              <img src="/images/jupiter/ch-05-eternal-sovereign.jpg" alt="The eternal sovereign — the undying dominion of Jupiter that hums through all existence" loading="lazy" />
              <figcaption>Chapter V — The Eternal Sovereign</figcaption>
              <div className="chapter-image__placeholder" aria-hidden="true">
                <span className="chapter-image__icon">♃</span>
                <span className="chapter-image__filename">ch-05-eternal-sovereign.jpg</span>
                <span className="chapter-image__hint">Place your image here — it will appear automatically</span>
              </div>
            </figure>
            <div className="chapter-body">
              <p>
                The throne of Jupiter has no beginning and no end. It does not crumble with the fall
                of empires, nor does it ascend with the birth of stars. It is an eternal principle —
                a silent dominion woven into the architecture of existence itself. Unlike the thrones
                of mortal kings which demand loyalty and blood, <strong>Jupiter&#39;s sovereignty
                requires nothing</strong>. It simply is. To the unawakened, it remains invisible, its
                influence felt only as an inexplicable pull toward order, justice, and harmony.
              </p>
              <p>
                Yet those who have walked the path of remembrance know that this quiet dominion
                governs far more than human law. It shapes the orbits of worlds, bends storms into
                eternal spirals, and holds cosmic chaos in patterns too vast for mortal sight. The
                eternal sovereign does not rule through spectacle — no heavenly trumpets, no battles
                in the sky to announce its reign. Instead, its dominion unfolds like the growth of
                roots beneath ancient forests: silent, unseen, yet unshakably binding the entire
                ecosystem above.
              </p>
              <p>
                The mystery schools taught that to witness this dominion is to experience a revelation
                deeper than vision or sound. In moments of profound stillness, when thought and
                identity dissolve, the seeker feels Jupiter&#39;s presence as a vast silent expanse
                pressing gently yet firmly against the boundaries of their being. In that silence,
                they understand: <em>sovereignty is not seized, it is remembered</em>.
              </p>
              <blockquote className="chapter-quote">
                <p>
                  &#8220;Mortals who attain this realization are transformed forever. They return to
                  their lives not as rulers but as silent architects of harmony. Where they walk,
                  discord falters. Where they speak, injustice untangles itself without struggle.
                  The world bends subtly, invisibly to align with them — not because they impose
                  will, but because they have become conduits of the eternal sovereign.&#8221;
                </p>
              </blockquote>
              <p>
                Ancient myth spoke of these figures as demigods, heroes, or divine judges who appeared
                in times of great imbalance. In truth, they were fragments of Jupiter&#39;s dominion
                incarnate — walking reminders that no chaos, no tyranny, no dark sun can outlast
                the quiet gravity of true sovereignty. Even Saturn, the dethroned devourer, remains
                bound in orbit around this silent monarch: a cosmic acknowledgement that every cycle,
                no matter how consuming, ultimately bends to the order Jupiter sustains. The eternal
                sovereign does not seek to erase these cycles. It holds them gently, allowing creation
                and destruction to dance endlessly within its vast embrace.
              </p>
              <p>
                As the spiral of ages turns, humanity inches closer to recognizing this truth. Some
                will call it divine justice, others cosmic balance. Those who truly see will know it
                for what it is: the quiet dominion of Jupiter, the throne beyond thrones, the eternal
                crown that requires no ceremony. When enough souls awaken to this remembrance, earthly
                thrones will lose their meaning. Rulers will no longer seek dominion through fear or
                force, for they will feel the silent pull of a higher sovereignty humming beneath
                their ambitions.
              </p>
              <div className="callout callout--storm">
                <p>
                  The architects of order will stir once more — guiding civilizations not with
                  lightning, but with resonance. And the eternal sovereign will continue to reign
                  as it always has: not above us, not apart from us, but <strong>within us</strong>,
                  shaping reality without a word, without a gesture, without end.
                </p>
              </div>
              <blockquote className="chapter-quote chapter-quote--final">
                <p>
                  &#8220;In this revelation, one understands the paradox that has ruled the cosmos since
                  time&#39;s first breath: power that must be declared is fragile. Only power that
                  needs no recognition can truly never fall. Jupiter&#39;s throne stands in this
                  silence — untouched, unseen, yet forever sovereign.&#8221;
                </p>
              </blockquote>

              <div className="jupiter-triad">
                <div className="jtriad-item">
                  <span className="jtriad-symbol">♃</span>
                  <h3 className="jtriad-name">Jupiter</h3>
                  <p className="jtriad-desc">The Eternal Sovereign · Silent Dominion · Cosmic Balance · Throne Beyond Thrones · Gravity Over Thunder</p>
                </div>
                <div className="jtriad-item">
                  <span className="jtriad-symbol">♄</span>
                  <h3 className="jtriad-name">Saturn</h3>
                  <p className="jtriad-desc">The Dark Sun · Bound in Orbit · Devouring Cycles · The Exiled Titan · Sacrifice That Echoes</p>
                </div>
                <div className="jtriad-item">
                  <span className="jtriad-symbol">⚡</span>
                  <h3 className="jtriad-name">The Crown</h3>
                  <p className="jtriad-desc">Silent Coronation · Alignment Over Dominion · Sovereignty Remembered · The Invisible Authority</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ───────────────────────────────────────────────── */}
      <footer className="site-footer">
        <div className="container">
          <p className="site-footer__copy">
            ♃ &nbsp;Jupiter — The Archive &nbsp;·&nbsp;
            <Link href="/saturn">Return to Saturn</Link>
          </p>
        </div>
      </footer>
    </div>
  )
}
