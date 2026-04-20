import type { Metadata } from 'next'
import Link from 'next/link'
import MarsNav from './MarsNav'
import ReadingTracker from '@/app/components/ReadingTracker'
import SmartSummarizer from '@/app/components/SmartSummarizer'

export const metadata: Metadata = {
  title: 'Mars — The Red Wanderer',
  description:
    'A symbolic and esoteric exploration of Mars: the fiery apparition across ancient civilizations, the cosmic twin, the phantom engineers, the war of shadows, and the blood memory that endures.',
}

export default function MarsPage() {
  return (
    <div className="mars-page">
      <ReadingTracker />
      <MarsNav />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <header className="hero mars-hero" id="top">
        <div className="mars-rings" aria-hidden="true">
          <div className="mring mring--1"></div>
          <div className="mring mring--2"></div>
          <div className="mring mring--3"></div>
        </div>
        <div className="mars-orb" aria-hidden="true"></div>
        <div className="hero__content">
          <p className="hero__eyebrow">A Symbolic Inquiry</p>
          <h1 className="hero__title">Mars</h1>
          <p className="hero__subtitle">
            The Red Wanderer, the Phantom Twin,<br />and the War Written in Blood
          </p>
          <p className="hero__lead">
            Across continents that never touched, across civilizations that never spoke, the same
            vision appeared — a planet that was not a planet, a visitor that came unbidden, then
            vanished into silence. The ancients remembered even when science today denies it.
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
              ['#mars-apparition', 'I',    'The Fiery Apparition'],
              ['#mars-twin',       'II',   'The Cosmic Twin'],
              ['#mars-engineers',  'III',  'The Phantom Engineers'],
              ['#mars-war',        'IV',   'The War of Shadows'],
              ['#mars-blood',      'V',    'Blood Memory'],
              ['#mars-return',     'VI',   'The Return'],
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
        <section className="chapter-intro container" id="mars-intro">
          <div className="chapter-intro__body">
            <SmartSummarizer />
            <h2 className="chapter-intro__heading">The Red Wanderer: A Star That Should Not Exist</h2>
            <figure className="chapter-image">
              <img src="/images/mars/introduction.jpg" alt="The Red Wanderer — the crimson apparition that haunted ancient civilizations" loading="lazy" />
              <figcaption>Introduction</figcaption>
              <div className="chapter-image__placeholder" aria-hidden="true">
                <span className="chapter-image__icon">♂</span>
                <span className="chapter-image__filename">introduction.jpg</span>
                <span className="chapter-image__hint">Place your image here — it will appear automatically</span>
              </div>
            </figure>
            <p>
              They spoke of a star that bled fire — a wandering eye of crimson tearing across the
              sky, burning the heavens with its fleeting presence. In Sumerian clay tablets, it was
              called the destroyer. In the temples of Egypt, it was whispered as the eye of raw
              unleashed. And in the glyphs of the Maya, it was drawn as a <strong>red serpent</strong>,
              crossing the vault of night and dissolving into nothingness.
            </p>
            <p>
              Across continents that never touched, across civilizations that never spoke, the same
              vision appeared. A planet that was not a planet. A visitor that came unbidden, then
              vanished into silence. A fiery sphere too close to Earth, too alive in the memory of
              those who witnessed it. But what was it? An illusion carved into myth by fear? A comet
              mistaken for a god? Or was it something far more terrifying — an entire world, a rogue
              planet of fire drifting too near, then exiled back into the void?
            </p>
            <p>
              The ancients remembered even when science today denies it. They encoded it in their
              scriptures, their calendars, their sacrifices. And when they looked into the night sky,
              they trembled not at what was there, but at what was <em>missing</em>. The red wanderer.
              The lost fiery planet. The ghost of a world that may never have existed — and yet haunts
              our myths as though it did.
            </p>
            <p className="pull-quote">
              &#8220;What happens to a planet that disappears from the universe but not from human memory?&#8221;
            </p>
          </div>
        </section>

        <div className="chapter-divider mars-divider" aria-hidden="true"><span className="sigil">♂</span></div>

        {/* ── CHAPTER I: THE FIERY APPARITION ──────────────────── */}
        <section className="chapter" id="mars-apparition">
          <div className="container chapter-layout">
            <div className="chapter-header">
              <span className="chapter-num">Chapter I</span>
              <h2 className="chapter-title">The Fiery Apparition</h2>
              <p className="chapter-deck">
                It was not a comet — the ancients knew comets well and drew their tails. This was
                round, full, a fiery world that drifted across the sky with the weight of a planet.
              </p>
            </div>
            <figure className="chapter-image">
              <img src="/images/mars/ch-01-fiery-apparition.jpg" alt="The Red Wanderer as described across Sumerian, Egyptian and Mayan traditions" loading="lazy" />
              <figcaption>Chapter I — The Fiery Apparition</figcaption>
              <div className="chapter-image__placeholder" aria-hidden="true">
                <span className="chapter-image__icon">♂</span>
                <span className="chapter-image__filename">ch-01-fiery-apparition.jpg</span>
                <span className="chapter-image__hint">Place your image here — it will appear automatically</span>
              </div>
            </figure>
            <div className="chapter-body">
              <p>
                The red wanderer came as a scar of fire dripping blood upon the heavens, casting
                its glow upon the trembling earth below. And the people — those who looked up — did
                not mistake it for Venus, nor for Mars, nor for any familiar light. This was something
                else: something that moved with a rhythm <em>outside the known order</em>. It did
                not belong, yet it demanded reverence.
              </p>
              <p>
                In the Sumerian <em>Enuma Elish</em> fragments, a blazing star approached the lands
                of men during times of upheaval — a sphere that devoured the horizon and turned the
                rivers to red. Scholars dismiss these passages as metaphor. But why then does the same
                fiery orb appear in the Mayan <em>Popol Vuh</em>? In those glyphs, the red serpent
                was drawn devouring the sun, swallowing light only to vanish. And in Egypt, carved
                deep within temple walls, the eye of Ra is shown not as a gentle sun but as a
                <strong> raging disc of crimson fire</strong> sent to punish, to cleanse, to annihilate.
              </p>
              <div className="info-card-row">
                <div className="info-card">
                  <h3 className="info-card__title">Sumer — The Destroyer</h3>
                  <p className="info-card__body">Clay tablets describe a blazing star that approached during upheaval, devouring the horizon and turning the rivers to red. Not metaphor — the same image recurs on every continent.</p>
                </div>
                <div className="info-card">
                  <h3 className="info-card__title">Maya — The Red Serpent</h3>
                  <p className="info-card__body">Drawn in the Popol Vuh devouring the sun, swallowing light. Maya priests sacrificed blood to it, believing it could only be appeased by offerings of life.</p>
                </div>
                <div className="info-card">
                  <h3 className="info-card__title">Egypt — The Eye of Sekhmet</h3>
                  <p className="info-card__body">Carved as a raging crimson disc sent to punish humanity's rebellion. Described not as a star but as a sphere — full, round, alive — crossing the sky with the weight of a world.</p>
                </div>
              </div>
              <p>
                This apparition was not tied to seasons. It did not return in cycles. It came
                suddenly, without pattern, as though it were a drifter in the void. The ancients
                did not speak of comets — they knew comets well, they drew their tails, they feared
                their omens. No: this was <strong>round, this was full</strong>, a body, a sphere, a
                fiery world that drifted across the sky with the weight of a planet. Its presence
                terrified them not because it was unfamiliar, but because it felt <em>alive</em>.
              </p>
              <blockquote className="chapter-quote">
                <p>
                  &#8220;They wrote of oceans boiling, of rains of fire, of blood staining the earth
                  in its wake. Different continents, different ages, different languages — whispering
                  of a sphere of fire that appeared where no planet should be. A phantom. A wanderer.
                  An outlaw of the sky.&#8221;
                </p>
              </blockquote>
              <p>
                Astronomers today have long whispered of <strong>Planet V</strong> — a world once
                existing between Mars and Jupiter, shattered into the asteroid belt we now know. Could
                the red wanderer have been its ghost? A fragment too large, too radiant, sweeping
                past the inner planets before being swallowed by the sun&#39;s gravity or expelled into
                the dark? Or perhaps it was never a fragment at all. Perhaps it was a visitor — a rogue
                planet pulled in from the abyss. A cosmic trespasser who came too close and left scars
                upon the human soul.
              </p>
              <div className="callout callout--crimson">
                <p>
                  The fiery apparition is remembered in cycles of catastrophe. When civilizations fell,
                  when floods came, when famine struck — the red wanderer&#39;s shadow seemed to loom.
                  Was it simply a symbol for chaos? Or was it truly there, hovering above, staining
                  the night sky with its red wound?
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CHAPTER II: THE COSMIC TWIN ───────────────────────── */}
        <section className="chapter chapter--alt" id="mars-twin">
          <div className="container chapter-layout">
            <div className="chapter-header">
              <span className="chapter-num">Chapter II</span>
              <h2 className="chapter-title">The Cosmic Twin</h2>
              <p className="chapter-deck">
                The ancients did not always describe it as an alien horror. Sometimes their words
                were softer — tinged with the grief of recognition. They spoke of a second world
                resembling our own, but drenched in crimson.
              </p>
            </div>
            <figure className="chapter-image">
              <img src="/images/mars/ch-02-cosmic-twin.jpg" alt="Earth and its red twin — the mirror worlds of ancient cosmology" loading="lazy" />
              <figcaption>Chapter II — The Cosmic Twin</figcaption>
              <div className="chapter-image__placeholder" aria-hidden="true">
                <span className="chapter-image__icon">♂</span>
                <span className="chapter-image__filename">ch-02-cosmic-twin.jpg</span>
                <span className="chapter-image__hint">Place your image here — it will appear automatically</span>
              </div>
            </figure>
            <div className="chapter-body">
              <p>
                What if the red wanderer was not merely a rogue intruder — not a comet, not a shard
                of destruction — but something far more intimate: an echo of Earth itself, a twin
                lost to cosmic catastrophe? In Sumerian tablets, fragments describe a <em>second earth</em>,
                a mirror world whose rise in the heavens brought both awe and dread. The Maya carved
                into stone the image of two spheres — one blue, one red — locked in an eternal dance
                as though reflecting one another across a cosmic mirror. And in esoteric Egyptian
                texts, the priests whispered of Sekhmet&#39;s double: a red sphere that shadowed
                Ra&#39;s golden chariot, feeding upon its light.
              </p>
              <div className="twin-diagram">
                <div className="twin-pole twin-pole--earth">
                  <h3>Earth — The Blue Sphere</h3>
                  <p>Vessel of life · Blue oceans and fertile soil · The living world · Memory of harmony</p>
                </div>
                <div className="twin-arrow" aria-hidden="true">⇌</div>
                <div className="twin-pole twin-pole--mars">
                  <h3>The Red Twin</h3>
                  <p>Vessel of memory · Scorched seas turned to magma · Skies drowned in red haze · Keeper of catastrophe</p>
                </div>
              </div>
              <p>
                These were not visions of something entirely foreign. They were echoes. Shadows.
                Twins. Planetary scientists today speculate about Planet V — a world that may have
                once circled between Mars and Jupiter, torn apart by gravitational instability, leaving
                only the rubble of the asteroid belt as its grave. But myth suggests otherwise. What
                if this planet was not simply destroyed, but <strong>displaced</strong> — its orbit
                twisted, its path torn away until it drifted like a phantom?
              </p>
              <p>
                Legends speak of a red reflection: a world of fire and blood, as though Earth itself
                had been split in two. One half clothed in blue oceans and fertile soil; the other
                scorched, its seas turned to magma, its skies drowned in red haze. Could the ancients
                have glimpsed this double during its close approaches? Was the red wanderer once locked
                in orbital harmony with Earth — its path resonant, its presence familiar — until some
                violent upheaval cast it adrift?
              </p>
              <blockquote className="chapter-quote">
                <p>
                  &#8220;The Maya called it the red serpent — but they also called it the brother star.
                  The Sumerians named it Nibiru: crossing point, the planet that passes, that connects.
                  To the Egyptians, it was the eye of Sekhmet — but also the balance to Ra&#39;s power,
                  the counterweight in the cosmic scales.&#8221;
                </p>
              </blockquote>
              <p>
                A twin does not exist merely to destroy. It exists to reflect, to remind, to balance.
                If Earth is the vessel of life, then its red twin may have been the <em>vessel of
                memory</em> — the keeper of catastrophe, the shadow that ensures the dance of
                creation does not become complacent. Its disappearance, then, is not the end of its
                influence. For even in absence, a twin exerts pull: gravitational, mythological,
                spiritual.
              </p>
              <p className="pull-quote">
                &#8220;What if Earth&#39;s true fear is not that the Red Wanderer was alien — but that it
                was <em>us</em>? That somewhere in the infinite symmetry of the cosmos, there must
                always be two, and we have lost the other.&#8221;
              </p>
            </div>
          </div>
        </section>

        {/* ── CHAPTER III: THE PHANTOM ENGINEERS ───────────────── */}
        <section className="chapter" id="mars-engineers">
          <div className="container chapter-layout">
            <div className="chapter-header">
              <span className="chapter-num">Chapter III</span>
              <h2 className="chapter-title">The Phantom Engineers</h2>
              <p className="chapter-deck">
                The myths do not merely describe a rogue planet. They describe intention, design,
                purpose. Was the red wanderer not born of natural chaos, but an engineered sphere —
                a machine wearing the mask of a planet?
              </p>
            </div>
            <figure className="chapter-image">
              <img src="/images/mars/ch-03-phantom-engineers.jpg" alt="Sacred geometry, engineered orbits, and the phantom architects of the red wanderer" loading="lazy" />
              <figcaption>Chapter III — The Phantom Engineers</figcaption>
              <div className="chapter-image__placeholder" aria-hidden="true">
                <span className="chapter-image__icon">♂</span>
                <span className="chapter-image__filename">ch-03-phantom-engineers.jpg</span>
                <span className="chapter-image__hint">Place your image here — it will appear automatically</span>
              </div>
            </figure>
            <div className="chapter-body">
              <p>
                The Sumerians spoke of the Anunnaki not as distant gods, but as <strong>architects,
                shapers of worlds</strong> — placing their forges not only in the heavens but in the
                fabric of planets themselves. The Maya called the red wanderer the <em>moving
                temple</em>: a house of the gods that carried its own altars in the sky. And the
                Egyptians, in fragments too fractured for easy interpretation, whispered of Sekhmet
                as a weapon — something crafted to unleash balance upon Earth when hubris grew too
                strong.
              </p>
              <p>
                These were not the words of mere astronomy. This was the language of design, of
                machinery cloaked in divinity. Imagine it not as a planet of rock but as a vessel —
                a hollow sphere, a machine masked in stone. Its fiery glow not volcanic fury, but
                the radiance of engines hidden beneath. Perhaps its crimson glare was not only
                atmosphere, but an aura of energy: a resonance field visible to the naked eye of
                ancient stargazers.
              </p>
              <ul className="engineer-list">
                <li className="engineer-item">
                  <span className="engineer-item__glyph">🔺</span>
                  <div className="engineer-item__body">
                    <strong>Anunnaki — The Sumerian Architects</strong>
                    <p>Described as shapers of worlds who placed their forges in the fabric of planets. Nibiru — the crossing point — was both their chariot and their stage for celestial struggle.</p>
                  </div>
                </li>
                <li className="engineer-item">
                  <span className="engineer-item__glyph">🏛️</span>
                  <div className="engineer-item__body">
                    <strong>The Moving Temple — Maya</strong>
                    <p>The red wanderer described not as a natural body but as a house of gods that carried its own altars through the sky — architecture in motion, orbiting with deliberate purpose.</p>
                  </div>
                </li>
                <li className="engineer-item">
                  <span className="engineer-item__glyph">⚒️</span>
                  <div className="engineer-item__body">
                    <strong>Hephaestus — The Greek Forge</strong>
                    <p>The smith of the gods, hammering in cosmic forges where fire and stone were indistinguishable. A memory of the phantom engineers encoded in the Olympian pantheon.</p>
                  </div>
                </li>
                <li className="engineer-item">
                  <span className="engineer-item__glyph">🧠</span>
                  <div className="engineer-item__body">
                    <strong>Ptah — The Egyptian Demiurge</strong>
                    <p>Who shaped the world by thought and word, implying not chaos but calculation. Creation as engineering. The cosmos as a deliberate artifact.</p>
                  </div>
                </li>
                <li className="engineer-item">
                  <span className="engineer-item__glyph">💠</span>
                  <div className="engineer-item__body">
                    <strong>Sacred Geometry as Circuit</strong>
                    <p>Pyramids align with stars as if serving a larger circuit. Monuments across Earth echo celestial orbits. The phantom engineers encoded their patterns in stone — their machine&#39;s schedule written in every ziggurat and megalith.</p>
                  </div>
                </li>
              </ul>
              <blockquote className="chapter-quote">
                <p>
                  &#8220;The asteroid belt may not be a graveyard of failed planets. It may be the
                  remains of dismantled architecture — stripped, scattered, and concealed. If so,
                  the Red Wanderer was not destroyed by accident, but silenced: buried, hidden from
                  our sky until the cycle deems its return necessary.&#8221;
                </p>
              </blockquote>
              <p>
                If the red wanderer was an engineered sphere, this explains the fear that goes beyond
                awe. The ancients were not just watching a world. They were watching <em>a machine</em>
                — an object alive with purpose. But whose purpose? Some say it was the phantom
                engineers of deep time: builders unseen, whose fingerprints marked not only pyramids
                and ziggurats, but <strong>orbits and celestial alignments</strong>. These were not
                mortals. They were custodians of cycles, keepers of resonance, shaping planets as
                though shaping clay.
              </p>
              <div className="callout callout--crimson">
                <p>
                  To confront the idea of the Phantom Engineers is to confront the possibility that
                  our universe is not chaos, but architecture — that planets themselves are artifacts,
                  designed and repurposed, and that Earth is not the center of life but one chamber
                  in a vast engineered temple.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CHAPTER IV: THE WAR OF SHADOWS ───────────────────── */}
        <section className="chapter chapter--alt" id="mars-war">
          <div className="container chapter-layout">
            <div className="chapter-header">
              <span className="chapter-num">Chapter IV</span>
              <h2 className="chapter-title">The War of Shadows</h2>
              <p className="chapter-deck">
                The red wanderer was never a quiet event. Ancient texts never spoke of it in neutral
                tones — they spoke of blood, fire, and battles too vast for human eyes to witness.
              </p>
            </div>
            <figure className="chapter-image">
              <img src="/images/mars/ch-04-war-of-shadows.jpg" alt="The war of shadows — celestial conflict encoded in myth and planetary scars" loading="lazy" />
              <figcaption>Chapter IV — The War of Shadows</figcaption>
              <div className="chapter-image__placeholder" aria-hidden="true">
                <span className="chapter-image__icon">♂</span>
                <span className="chapter-image__filename">ch-04-war-of-shadows.jpg</span>
                <span className="chapter-image__hint">Place your image here — it will appear automatically</span>
              </div>
            </figure>
            <div className="chapter-body">
              <p>
                The arrival of the red wanderer was never described as a quiet event. It was
                <strong> war embodied in the sky</strong> — the harbinger of conflict among gods,
                kings, and empires. They called it a planet, yes, but also a weapon, a throne, a
                battlefield between forces unseen. In the myths of Sumer, the red wanderer was
                Nibiru — the crossing planet, the stage upon which the Anunnaki waged their struggles
                for dominion. Marduk&#39;s war chariot: the fiery deity who rose against the elder gods,
                splitting the great sea-dragon Tiamat. His weapon was not merely divine will but the
                presence of this wandering world itself — a planet that struck like a sword through
                the fabric of the heavens.
              </p>
              <div className="duality-block">
                <div className="duality-side duality-side--gold">
                  <h3>Protectors</h3>
                  <p>Factions who used the red wanderer as guardian · Marduk defeating Tiamat · Michael&#39;s army in heaven · Engineers who maintained the garden of Earth</p>
                </div>
                <div className="duality-divider" aria-hidden="true">⚔</div>
                <div className="duality-side duality-side--blue">
                  <h3>Destroyers</h3>
                  <p>Factions who wielded it as executioner · Sekhmet unleashed · The dragon of Revelation · Engineers who sought to prune rather than protect</p>
                </div>
              </div>
              <p>
                The Egyptians whispered of Sekhmet unleashed — a lioness of fire sent by Ra to purge
                humankind when they grew rebellious. Her eye was described as red, blazing, relentless:
                a mirror of the fiery sphere in the sky. The war was not only divine but judicial.
                The red wanderer was execution — a cosmic army deployed in the theater above. Among
                the Maya, the Popol Vuh speaks of celestial trials of gods who played ball with the
                very orbits of the heavens, deciding the fate of humanity in contests of blood. The
                red wanderer, they said, was the <em>blood sun</em> — a phantom light that burned
                through the night, carrying the echoes of battles fought in shadow.
              </p>
              <blockquote className="chapter-quote">
                <p>
                  &#8220;The asteroid belt — those scattered bones between Mars and Jupiter — may be
                  the wreckage of such a battle. Not the accidental failure of a planet, but the
                  debris of one torn apart in celestial conflict. Mars itself, scarred with chasms
                  deeper than any canyon on Earth, may bear the wounds of near destruction.
                  Olympus Mons — the tallest mountain in the solar system — not simply a volcano,
                  but a scar left by a cosmic weapon.&#8221;
                </p>
              </blockquote>
              <p>
                The Greeks remembered this in their own tongue. <strong>Ares, god of war</strong>,
                was not only bloodthirsty but fiery, red, destructive — always tied to Mars, the
                scarred world beside the void where Planet V once lay. Did they remember the shadow
                war not only as divine myth, but as planetary memory? Mars as the surviving witness
                of a cataclysm fought between worlds? Even in the Bible there are echoes:
                <em> &#8220;And there was war in heaven. Michael and his angels fought against the
                dragon.&#8221;</em> A battle above, too vast for mortals to perceive, recorded only in
                fractured memory. Could the red wanderer have been the dragon itself — the fiery
                intruder? Or was it the battlefield upon which that war unfolded?
              </p>
              <p>
                Wars do not end. They pause. They enter silence. And silence can be more dangerous
                than battle itself — for it is the waiting breath before the sword strikes again.
              </p>
            </div>
          </div>
        </section>

        {/* ── CHAPTER V: BLOOD MEMORY ───────────────────────────── */}
        <section className="chapter" id="mars-blood">
          <div className="container chapter-layout">
            <div className="chapter-header">
              <span className="chapter-num">Chapter V</span>
              <h2 className="chapter-title">Blood Memory</h2>
              <p className="chapter-deck">
                The red wanderer may have vanished from the sky, but its shadow did not. It seeped
                into blood, into bone, into the memory of humanity itself.
              </p>
            </div>
            <figure className="chapter-image">
              <img src="/images/mars/ch-05-blood-memory.jpg" alt="Blood sacrifice, ritual, and the inherited memory of the Red Wanderer" loading="lazy" />
              <figcaption>Chapter V — Blood Memory</figcaption>
              <div className="chapter-image__placeholder" aria-hidden="true">
                <span className="chapter-image__icon">♂</span>
                <span className="chapter-image__filename">ch-05-blood-memory.jpg</span>
                <span className="chapter-image__hint">Place your image here — it will appear automatically</span>
              </div>
            </figure>
            <div className="chapter-body">
              <p>
                Though planets may fall and empires may collapse, memory survives — in ritual, in
                symbols, in the hidden codes of flesh and spirit. The ancients called it
                <strong> blood memory</strong>: the inheritance not of wealth or name but of scars
                carried silently across generations. Every civilization that spoke of the fiery
                intruder also spoke of sacrifice.
              </p>
              <ul className="blood-timeline">
                <li className="blood-event">
                  <p className="blood-event__culture">Sumer</p>
                  <p className="blood-event__desc">Poured libations of blood into the earth to appease gods who once descended with fire. The spilling was not arbitrary — it was patterned, as if the blood itself were currency: resonance-payment to a cosmic ledger written when the wanderer last crossed the sky.</p>
                </li>
                <li className="blood-event">
                  <p className="blood-event__culture">Aztec</p>
                  <p className="blood-event__desc">Staring at the heavens, they tore out hearts to mirror the burning sphere they believed would return. The sacrifice was not superstition — it was synchronization: an attempt to align human life-force with the rhythm of the wanderer itself.</p>
                </li>
                <li className="blood-event">
                  <p className="blood-event__culture">Hebrew</p>
                  <p className="blood-event__desc">Marked doorways with crimson to ward off the angel of destruction. The blood on the doorpost — a boundary drawn between those the wanderer claimed and those it passed over. Memory encoded in ritual law.</p>
                </li>
                <li className="blood-event">
                  <p className="blood-event__culture">Royal Dynasties</p>
                  <p className="blood-event__desc">Kings claimed descent from fiery gods. Priests insisted their veins carried the ichor of celestial beings. This obsession with blue blood may not have been arrogance — but an attempt to preserve a fragment of the wanderer&#39;s resonance, keeping alive a connection to the war of shadows.</p>
                </li>
              </ul>
              <blockquote className="chapter-quote">
                <p>
                  &#8220;Could it be that humanity&#39;s obsession with blood — its purity, its spilling,
                  its sanctity — is an echo of this celestial encounter? Blood is memory. Blood is
                  record. Within its iron and salt may lie signatures of events older than Earth&#39;s
                  own myths: traces of radiation, resonance, or design seated when the red wanderer
                  passed close enough to change us.&#8221;
                </p>
              </blockquote>
              <p>
                Carl Jung spoke of archetypes — primal patterns surfacing in every culture as if
                shared across time. Why do so many people dream of floods, of fire, of falling stars?
                Why do visions of red skies haunt prophets, poets, and visionaries? Perhaps dreams
                are the subconscious exhalations of this inherited memory. When the red wanderer
                passed, it carved itself not only into Earth but into mind, leaving <em>dream as
                its surviving theater</em>.
              </p>
              <p>
                Consider lunar eclipses — when the moon itself turns crimson. Even now, people gather
                in silence, unease curling in their bones. They may not know why, but their blood
                remembers. The red light is a mirror: a shadow performance of the ancient intruder.
                Our rituals may have changed, but the resonance has not. The wanderer still speaks —
                not in words, but in pulses, through blood, through dreams, through fear.
              </p>
              <div className="callout callout--crimson">
                <p>
                  Perhaps the phantom engineers encoded in us a failsafe — a ritualized system of
                  remembrance to ensure that when the planet returned, we would already be prepared
                  to recognize it. Memory becomes prophecy. If blood encodes the past, it also
                  whispers of recurrence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CHAPTER VI: THE RETURN ────────────────────────────── */}
        <section className="chapter chapter--alt" id="mars-return">
          <div className="container chapter-layout">
            <div className="chapter-header">
              <span className="chapter-num">Chapter VI</span>
              <h2 className="chapter-title">The Return</h2>
              <p className="chapter-deck">
                Myths do not cling so fiercely to absence unless they anticipate a return. Across
                every ancient tongue, every scattered scripture, every blood-soaked ritual — the same
                refrain: the fiery star will come again.
              </p>
            </div>
            <figure className="chapter-image">
              <img src="/images/mars/ch-06-the-return.jpg" alt="The return of the Red Wanderer — prophecy, Planet 9, and the invocation through blood" loading="lazy" />
              <figcaption>Chapter VI — The Return</figcaption>
              <div className="chapter-image__placeholder" aria-hidden="true">
                <span className="chapter-image__icon">♂</span>
                <span className="chapter-image__filename">ch-06-the-return.jpg</span>
                <span className="chapter-image__hint">Place your image here — it will appear automatically</span>
              </div>
            </figure>
            <div className="chapter-body">
              <p>
                Astronomers whisper of anomalies at the edge of our system — perturbations in orbits,
                shadows that should not be there. Some speak of <strong>Planet 9</strong>: a hidden
                body pulling subtly at the gravity of worlds. But what if this is no new discovery?
                What if it is the ancient red wanderer, circling back from its long exile, preparing
                to cross the threshold once more? Science dresses it in sterile terms — rogue planet,
                eccentric orbit, gravitational mystery. Myth calls it what it truly is: the destroyer,
                the twin, the god of fire returning to collect its due.
              </p>
              <p>
                Its return is not only physical. The blood remembers. Dreams intensify. Nightmares of
                red skies plague even the most rational minds. Prophets rise again, speaking in
                half-forgotten tongues, warning of a crimson light that will split the heavens. Entire
                generations feel an unease they cannot name. It is the <em>resonance awakening</em> —
                humanity already preparing unconsciously for recognition.
              </p>
              <blockquote className="chapter-quote">
                <p>
                  &#8220;Perhaps the red wanderer does not need to return physically. Perhaps it never
                  left. If its resonance lives in blood, in ritual, in the collective subconscious,
                  then every time we dream of red skies, every eclipse, every war fought under the
                  shadow of blood — it has already returned. The planet is not only a body in space.
                  It is a pattern, a frequency, a presence. And presences do not fade with distance.
                  They awaken when called.&#8221;
                </p>
              </blockquote>
              <p>
                What happens when it arrives? The myths differ but they overlap like layers of smoke.
                Floods. Fire. Upheaval. The collapse of empires. Some say the red wanderer comes to
                <strong> harvest</strong> — life, blood, memory itself. Others claim it brings
                alignment: a synchronization of human frequency to a higher order, a purging of the
                unworthy and the awakening of the chosen. Perhaps it is both. To some, it will be
                apocalypse. To others, ascension. The war of shadows is not over. It merely paused,
                awaiting the stage to be set again.
              </p>
              <p>
                There is a darker possibility. The unspoken war still raging — not only in the
                heavens, but in veins, in dynasties, in secret orders who claim to guard ancient
                blood. They are not preserving history. They are preserving <em>compatibility</em>.
                They wait for the return, guarding the key written in their very cells.
              </p>
              <div className="callout callout--warning">
                <p>
                  <strong>Note:</strong> These traditions are explored here as <em>mythic and symbolic
                  inheritances</em>, recurring archetypes encoded across independent civilizations —
                  not as literal predictions of astronomical catastrophe.
                </p>
              </div>
              <blockquote className="chapter-quote chapter-quote--final">
                <p>
                  &#8220;The red wanderer will come. Whether in fire across the sky or as an awakening
                  within our own blood, it will not be denied. We may call it Nibiru, Planet X, the
                  destroyer, the phantom twin — but the name is irrelevant. What matters is
                  recognition. The ancient seers knew this truth: only those who remember will endure.
                  The return is both prophecy and inevitability. The Red Wanderer has never been lost.
                  It has only been waiting.&#8221;
                </p>
              </blockquote>

              <div className="mars-triad">
                <div className="mtriad-item">
                  <span className="mtriad-symbol">♂</span>
                  <h3 className="mtriad-name">The Red Wanderer</h3>
                  <p className="mtriad-desc">The Fiery Intruder · Destroyer &amp; Twin · Phantom Planet · The Wandering Eye of Crimson</p>
                </div>
                <div className="mtriad-item">
                  <span className="mtriad-symbol">🩸</span>
                  <h3 className="mtriad-name">Blood Memory</h3>
                  <p className="mtriad-desc">Inherited Scars · Ritual as Remembrance · DNA as Archive · The Resonance That Endures</p>
                </div>
                <div className="mtriad-item">
                  <span className="mtriad-symbol">⚙️</span>
                  <h3 className="mtriad-name">The Engineers</h3>
                  <p className="mtriad-desc">Architects of Orbits · Shaping Planets as Clay · The Hammer of Cycles · Unseen Custodians</p>
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
            ♂ &nbsp;Mars — The Archive &nbsp;·&nbsp;
            <Link href="/jupiter">Return to Jupiter</Link>
            &nbsp;·&nbsp;
            <Link href="/saturn">Return to Saturn</Link>
          </p>
        </div>
      </footer>
    </div>
  )
}
