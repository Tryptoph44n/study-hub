// Polymer enrichment layer — plain-English "in simple terms", an analogy,
// and a simple figure for every concept. Rendered ABOVE the rigorous content
// so you grasp the idea first, then read the detail. Keyed by concept id.
// Figures: maroon strokes (var(--accent)) + dark labels (var(--text)), on a card.

const POLYMER_ENRICH = {

  'atoms-bonds': {
    simple: "Atoms join up because sharing electrons makes them more stable — like holding hands to stay steady. Carbon can hold four 'hands' at once, so it builds long chains. Those chains are the backbone of every polymer.",
    analogy: "A covalent bond is two kids each putting one hand into a shared grip so neither lets go — that shared grip *is* the bond.",
    figure: `<svg viewBox="0 0 300 130" style="width:100%;height:auto">
      <circle cx="95" cy="65" r="34" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
      <circle cx="205" cy="65" r="34" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
      <text x="95" y="71" text-anchor="middle" font-size="20" font-weight="700" fill="var(--text)">C</text>
      <text x="205" y="71" text-anchor="middle" font-size="20" font-weight="700" fill="var(--text)">H</text>
      <circle cx="143" cy="58" r="5" fill="var(--accent)"/><circle cx="157" cy="58" r="5" fill="var(--accent)"/>
      <text x="150" y="105" text-anchor="middle" font-size="11" fill="var(--text)">shared electrons = the bond</text>
    </svg>`,
  },

  'intermolecular-forces': {
    simple: "Strong bonds hold atoms together *inside* one molecule. Much weaker 'sticky' forces hold separate molecules *near* each other. A long polymer has thousands of these sticky points, so together they decide whether the plastic is hard or soft.",
    analogy: "One Velcro hook is weak, but a whole strip grips firmly — that's how many weak forces along a chain add up to real strength.",
    figure: `<svg viewBox="0 0 300 130" style="width:100%;height:auto">
      <line x1="30" y1="45" x2="270" y2="45" stroke="var(--accent)" stroke-width="3"/>
      <line x1="30" y1="95" x2="270" y2="95" stroke="var(--accent)" stroke-width="3"/>
      <g stroke="var(--accent)" stroke-width="1.5" stroke-dasharray="3 3">
        <line x1="70" y1="48" x2="70" y2="92"/><line x1="120" y1="48" x2="120" y2="92"/>
        <line x1="170" y1="48" x2="170" y2="92"/><line x1="220" y1="48" x2="220" y2="92"/>
      </g>
      <text x="150" y="20" text-anchor="middle" font-size="11" fill="var(--text)">chains (strong bonds —)</text>
      <text x="150" y="120" text-anchor="middle" font-size="11" fill="var(--text)">weak forces between (- - -)</text>
    </svg>`,
  },

  'functional-groups': {
    simple: "A functional group is a small 'reactive part' of a molecule. You don't memorise the whole molecule — you spot its reactive part and you know how it will behave. A C=C, an –OH, a –COOH each act in their own predictable way.",
    analogy: "Functional groups are like USB ports: the device differs, but once you recognise the port, you know exactly what plugs in.",
    figure: `<svg viewBox="0 0 300 130" style="width:100%;height:auto">
      <g font-size="15" font-weight="700" fill="var(--text)" text-anchor="middle">
        <rect x="20" y="40" width="70" height="46" rx="10" fill="none" stroke="var(--accent)" stroke-width="2"/>
        <text x="55" y="69">C=C</text>
        <rect x="115" y="40" width="70" height="46" rx="10" fill="none" stroke="var(--accent)" stroke-width="2"/>
        <text x="150" y="69">–OH</text>
        <rect x="210" y="40" width="80" height="46" rx="10" fill="none" stroke="var(--accent)" stroke-width="2"/>
        <text x="250" y="69">–COOH</text>
      </g>
      <text x="150" y="110" text-anchor="middle" font-size="11" fill="var(--text)">spot the part → know the reaction</text>
    </svg>`,
  },

  'reaction-mechanisms': {
    simple: "A mechanism is the step-by-step story of how bonds break and form, following where the electrons go. Three players: electron-rich 'givers' (nucleophiles), electron-poor 'takers' (electrophiles), and very reactive loners (radicals).",
    analogy: "Electrons are like money: nucleophiles are buyers with cash to hand over, electrophiles are sellers who want it, radicals are reckless spenders grabbing whatever they touch.",
    figure: `<svg viewBox="0 0 300 120" style="width:100%;height:auto">
      <circle cx="60" cy="55" r="26" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
      <text x="60" y="60" text-anchor="middle" font-size="12" font-weight="700" fill="var(--text)">Nu:⁻</text>
      <circle cx="240" cy="55" r="26" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
      <text x="240" y="60" text-anchor="middle" font-size="13" font-weight="700" fill="var(--text)">E⁺</text>
      <line x1="92" y1="55" x2="206" y2="55" stroke="var(--accent)" stroke-width="2" marker-end="url(#ar)"/>
      <defs><marker id="ar" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="var(--accent)"/></marker></defs>
      <text x="150" y="45" text-anchor="middle" font-size="11" fill="var(--text)">gives electrons →</text>
    </svg>`,
  },

  'what-is-polymer': {
    simple: "A polymer is one tiny unit (a monomer) repeated thousands of times, like beads on a string. Same beads — but how you arrange the string (straight, branched, or a net) changes whether you get a bag, a bottle, or rubber.",
    analogy: "Monomers are LEGO bricks; a polymer is what you build by clicking the same brick over and over.",
    figure: `<svg viewBox="0 0 300 110" style="width:100%;height:auto">
      <line x1="20" y1="55" x2="280" y2="55" stroke="var(--accent)" stroke-width="2"/>
      <g fill="var(--accent)">
        <circle cx="40" cy="55" r="13"/><circle cx="90" cy="55" r="13"/><circle cx="140" cy="55" r="13"/>
        <circle cx="190" cy="55" r="13"/><circle cx="240" cy="55" r="13"/>
      </g>
      <text x="150" y="95" text-anchor="middle" font-size="11" fill="var(--text)">monomer repeated → polymer chain ( ⟮ ⟯ₙ )</text>
    </svg>`,
  },

  'molecular-weight': {
    simple: "A polymer sample isn't all one length — it's a mix of short and long chains. So we use averages: Mₙ counts chains, M𝓌 weighs by size. Their ratio Ð shows how even the lengths are (1 = perfectly even).",
    analogy: "Like a bag of spaghetti snapped into random lengths — you describe it by an average length and how spread out the lengths are.",
    figure: `<svg viewBox="0 0 300 130" style="width:100%;height:auto">
      <path d="M20 105 Q110 5 150 5 Q190 5 280 105" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
      <line x1="20" y1="105" x2="280" y2="105" stroke="var(--text)" stroke-width="1"/>
      <line x1="130" y1="30" x2="130" y2="105" stroke="var(--accent)" stroke-width="1.5" stroke-dasharray="3 3"/>
      <line x1="170" y1="30" x2="170" y2="105" stroke="var(--accent)" stroke-width="1.5" stroke-dasharray="3 3"/>
      <text x="125" y="25" text-anchor="end" font-size="11" fill="var(--text)">Mₙ</text>
      <text x="175" y="25" text-anchor="start" font-size="11" fill="var(--text)">M𝓌</text>
      <text x="150" y="123" text-anchor="middle" font-size="11" fill="var(--text)">spread of chain lengths · Ð = M𝓌/Mₙ</text>
    </svg>`,
  },

  'step-vs-chain': {
    simple: "Two ways monomers join. Step-growth: anyone links with anyone, so long chains only appear right at the very end. Chain-growth: monomers add one-by-one to a growing tip, so long chains exist almost from the start.",
    analogy: "Step-growth is people randomly pairing at a party, pairs then merging. Chain-growth is a conga line — you can only join at the end.",
    figure: `<svg viewBox="0 0 300 130" style="width:100%;height:auto">
      <text x="10" y="35" font-size="11" font-weight="700" fill="var(--accent)">step</text>
      <g fill="var(--accent)"><circle cx="60" cy="30" r="7"/><circle cx="80" cy="30" r="7"/><circle cx="140" cy="30" r="7"/><circle cx="160" cy="30" r="7"/><circle cx="220" cy="30" r="7"/><circle cx="240" cy="30" r="7"/></g>
      <text x="150" y="55" text-anchor="middle" font-size="10" fill="var(--text)">small bits everywhere, merge late</text>
      <text x="10" y="95" font-size="11" font-weight="700" fill="var(--accent)">chain</text>
      <line x1="55" y1="92" x2="250" y2="92" stroke="var(--accent)" stroke-width="2"/>
      <g fill="var(--accent)"><circle cx="60" cy="92" r="7"/><circle cx="85" cy="92" r="7"/><circle cx="110" cy="92" r="7"/><circle cx="135" cy="92" r="7"/></g>
      <text x="200" y="96" font-size="18" fill="var(--accent)">＋•</text>
      <text x="150" y="118" text-anchor="middle" font-size="10" fill="var(--text)">grows one-by-one at the tip</text>
    </svg>`,
  },

  'radical-polymerization': {
    simple: "The most common method. A 'starter' makes a radical, which grabs monomers super fast to grow a chain, until two chains bump and stop. It's cheap and tough — but chain lengths come out uneven.",
    analogy: "Like popcorn: kernels (starters) pop at random times, each grows fast, and they finish at random — so you end up with all sizes.",
    figure: `<svg viewBox="0 0 300 120" style="width:100%;height:auto">
      <g text-anchor="middle" font-size="11" fill="var(--text)">
        <circle cx="50" cy="40" r="24" fill="none" stroke="var(--accent)" stroke-width="2"/><text x="50" y="44">start</text>
        <circle cx="150" cy="40" r="24" fill="none" stroke="var(--accent)" stroke-width="2"/><text x="150" y="38">grow</text><text x="150" y="50">fast</text>
        <circle cx="250" cy="40" r="24" fill="none" stroke="var(--accent)" stroke-width="2"/><text x="250" y="44">stop</text>
      </g>
      <g stroke="var(--accent)" stroke-width="2" marker-end="url(#ar2)"><line x1="76" y1="40" x2="122" y2="40"/><line x1="176" y1="40" x2="222" y2="40"/></g>
      <defs><marker id="ar2" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="var(--accent)"/></marker></defs>
      <text x="150" y="100" text-anchor="middle" font-size="11" fill="var(--text)">random start &amp; stop → uneven lengths</text>
    </svg>`,
  },

  'living-polymerization': {
    simple: "Here chains never 'die' — they keep growing as long as you feed them monomer. Because they all start together and none stop, every chain ends up the same length. That control is how you build block copolymers.",
    analogy: "Like everyone planting seeds at the exact same moment and watering them equally — all the plants grow to the same height.",
    figure: `<svg viewBox="0 0 300 120" style="width:100%;height:auto">
      <g stroke="var(--accent)" stroke-width="4" stroke-linecap="round">
        <line x1="40" y1="30" x2="180" y2="30"/><line x1="40" y1="55" x2="180" y2="55"/><line x1="40" y1="80" x2="180" y2="80"/>
      </g>
      <line x1="180" y1="20" x2="180" y2="90" stroke="var(--text)" stroke-width="1" stroke-dasharray="3 3"/>
      <text x="150" y="110" text-anchor="middle" font-size="11" fill="var(--text)">all start together, all the same length (Ð≈1)</text>
    </svg>`,
  },

  'thermodynamics-mixing': {
    simple: "Will two things mix? Weigh the energy 'reward' against the 'freedom' gained by mixing. For polymers the freedom gained is tiny (a 1000-unit chain counts as just one piece), so they dissolve poorly and two different polymers almost never mix.",
    analogy: "Mixing small molecules is like shuffling loose cards (easy). Mixing polymers is like shuffling cards glued into long strips — they barely move.",
    figure: `<svg viewBox="0 0 300 130" style="width:100%;height:auto">
      <rect x="20" y="20" width="120" height="90" rx="8" fill="none" stroke="var(--text)" stroke-width="1"/>
      <g fill="var(--accent)"><circle cx="45" cy="45" r="5"/><circle cx="75" cy="60" r="5"/><circle cx="110" cy="40" r="5"/><circle cx="60" cy="90" r="5"/><circle cx="115" cy="85" r="5"/></g>
      <text x="80" y="125" text-anchor="middle" font-size="10" fill="var(--text)">small: mix easily</text>
      <rect x="165" y="20" width="120" height="90" rx="8" fill="none" stroke="var(--text)" stroke-width="1"/>
      <g stroke="var(--accent)" stroke-width="3" fill="none"><path d="M180 40 H270"/><path d="M180 65 H270"/><path d="M180 90 H270"/></g>
      <text x="225" y="125" text-anchor="middle" font-size="10" fill="var(--text)">chains: stay apart</text>
    </svg>`,
  },

  'glass-transition': {
    simple: "Tg is the temperature where a polymer flips from hard-and-glassy to soft-and-rubbery, because the chains begin to wiggle. Above Tg they move; below, they're frozen. This matters because ions can only travel when chains can wiggle.",
    analogy: "Like butter: straight from the fridge it's hard (below Tg); left on the counter it turns soft and spreadable (above Tg).",
    figure: `<svg viewBox="0 0 300 130" style="width:100%;height:auto">
      <line x1="30" y1="110" x2="285" y2="110" stroke="var(--text)" stroke-width="1"/>
      <line x1="30" y1="20" x2="30" y2="110" stroke="var(--text)" stroke-width="1"/>
      <path d="M40 95 L150 70 L260 25" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
      <line x1="150" y1="70" x2="150" y2="110" stroke="var(--accent)" stroke-width="1.5" stroke-dasharray="3 3"/>
      <text x="150" y="124" text-anchor="middle" font-size="11" fill="var(--text)">Tg</text>
      <text x="80" y="100" font-size="10" fill="var(--text)">glassy</text>
      <text x="215" y="40" font-size="10" fill="var(--text)">rubbery</text>
      <text x="15" y="18" font-size="10" fill="var(--text)">motion →</text>
    </svg>`,
  },

  'gpc': {
    simple: "GPC measures how long your chains are. The solution flows through a column packed with porous beads: big chains can't fit in the pores, so they rush out first; small chains wander inside and come out last. The timing gives the size distribution.",
    analogy: "Like a crowd leaving a hall full of side-rooms: big people skip the rooms and exit first; small people pop into rooms and dawdle out last.",
    figure: `<svg viewBox="0 0 300 130" style="width:100%;height:auto">
      <rect x="120" y="15" width="60" height="100" rx="6" fill="none" stroke="var(--text)" stroke-width="1.5"/>
      <g fill="none" stroke="var(--accent)" stroke-width="1"><circle cx="138" cy="40" r="6"/><circle cx="162" cy="55" r="6"/><circle cx="140" cy="75" r="6"/><circle cx="160" cy="95" r="6"/></g>
      <circle cx="150" cy="8" r="9" fill="var(--accent)"/><text x="200" y="12" font-size="10" fill="var(--text)">big = out first</text>
      <circle cx="150" cy="124" r="4" fill="var(--accent)"/><text x="200" y="127" font-size="10" fill="var(--text)">small = out last</text>
      <line x1="150" y1="115" x2="150" y2="123" stroke="var(--accent)" stroke-width="2" marker-end="url(#ar3)"/>
      <defs><marker id="ar3" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="var(--accent)"/></marker></defs>
    </svg>`,
  },

  'thermal-analysis': {
    simple: "Two heat tests. DSC watches heat flow to find transitions (Tg, melting). TGA watches weight as you heat, to see when it decomposes and what's inside. Together they reveal a material's safe temperature range and its makeup.",
    analogy: "DSC is like feeling the moment ice turns to water (a change you sense). TGA is like weighing a wet towel as it dries to see how much was water.",
    figure: `<svg viewBox="0 0 300 130" style="width:100%;height:auto">
      <text x="75" y="18" text-anchor="middle" font-size="10" font-weight="700" fill="var(--accent)">DSC</text>
      <path d="M20 80 L60 80 Q75 40 90 80 L130 80" fill="none" stroke="var(--accent)" stroke-width="2"/>
      <text x="75" y="100" text-anchor="middle" font-size="9" fill="var(--text)">melt peak</text>
      <text x="225" y="18" text-anchor="middle" font-size="10" font-weight="700" fill="var(--accent)">TGA</text>
      <path d="M170 45 L210 45 L235 85 L280 88" fill="none" stroke="var(--accent)" stroke-width="2"/>
      <text x="225" y="105" text-anchor="middle" font-size="9" fill="var(--text)">mass drops = decomposes</text>
    </svg>`,
  },

  'polymer-electrolytes': {
    simple: "A solid polymer electrolyte swaps the flammable liquid in a battery for a soft solid that still carries Li⁺ ions. It's safer and bendy — but it moves ions more slowly, and that's the central challenge.",
    analogy: "Liquid electrolyte is a wide-open highway for ions; a solid polymer is a crowded sidewalk — much safer, but slower going.",
    figure: `<svg viewBox="0 0 300 110" style="width:100%;height:auto">
      <path d="M20 70 Q60 40 100 70 T180 70 T260 70" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
      <g fill="var(--text)"><circle cx="60" cy="52" r="6"/><circle cx="140" cy="52" r="6"/><circle cx="220" cy="52" r="6"/></g>
      <text x="60" y="40" text-anchor="middle" font-size="10" fill="var(--text)">Li⁺</text>
      <text x="150" y="100" text-anchor="middle" font-size="11" fill="var(--text)">Li⁺ hops along the polymer chain</text>
    </svg>`,
  },

  'binders-separators': {
    simple: "Besides the electrolyte, polymers do two more jobs. The binder is the glue holding the electrode powder together on the metal. The separator is a thin porous film that keeps the two sides apart while letting ions slip through.",
    analogy: "The binder is the syrup holding a granola bar together; the separator is a coffee filter — it blocks the grounds but lets the liquid pass.",
    figure: `<svg viewBox="0 0 300 120" style="width:100%;height:auto">
      <g fill="var(--accent)" opacity="0.85"><circle cx="45" cy="50" r="11"/><circle cx="68" cy="62" r="11"/><circle cx="52" cy="74" r="11"/><circle cx="75" cy="42" r="11"/></g>
      <text x="60" y="100" text-anchor="middle" font-size="10" fill="var(--text)">binder glues powder</text>
      <rect x="150" y="25" width="14" height="75" fill="none" stroke="var(--accent)" stroke-width="2"/>
      <g stroke="var(--accent)" stroke-width="1"><line x1="157" y1="35" x2="157" y2="42"/><line x1="157" y1="55" x2="157" y2="62"/><line x1="157" y1="75" x2="157" y2="82"/></g>
      <text x="220" y="55" text-anchor="middle" font-size="10" fill="var(--text)">separator</text>
      <text x="220" y="70" text-anchor="middle" font-size="10" fill="var(--text)">(porous film)</text>
    </svg>`,
  },

  'how-liion-works': {
    simple: "A battery shuttles Li⁺ ions back and forth between two electrodes — charging pushes them one way, using it sends them back. Nothing is used up; the same lithium just rocks side to side, which is why it recharges.",
    analogy: "Like a rocking chair: the same person (Li⁺) rocks from one side to the other and back, over and over — the 'rocking chair' battery.",
    figure: `<svg viewBox="0 0 300 120" style="width:100%;height:auto">
      <rect x="25" y="30" width="40" height="70" rx="4" fill="none" stroke="var(--accent)" stroke-width="2"/>
      <rect x="235" y="30" width="40" height="70" rx="4" fill="none" stroke="var(--accent)" stroke-width="2"/>
      <text x="45" y="115" text-anchor="middle" font-size="10" fill="var(--text)">anode</text>
      <text x="255" y="115" text-anchor="middle" font-size="10" fill="var(--text)">cathode</text>
      <circle cx="150" cy="55" r="9" fill="var(--text)"/><text x="150" y="40" text-anchor="middle" font-size="10" fill="var(--text)">Li⁺</text>
      <g stroke="var(--accent)" stroke-width="2" marker-end="url(#ar4)"><line x1="80" y1="70" x2="150" y2="70"/><line x1="220" y1="85" x2="160" y2="85"/></g>
      <defs><marker id="ar4" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="var(--accent)"/></marker></defs>
      <text x="150" y="105" text-anchor="middle" font-size="9" fill="var(--text)">charge → / ← discharge</text>
    </svg>`,
  },

  'sei-layer': {
    simple: "On the first charge, a thin protective skin (the SEI) forms on the anode. It uses up a little lithium — a one-time loss — but then shields the electrolyte from breaking down further. A good, stable SEI means a long-lived battery.",
    analogy: "Like the skin on warm pudding: it costs a little pudding to form, but then it stops the rest from drying out.",
    figure: `<svg viewBox="0 0 300 110" style="width:100%;height:auto">
      <rect x="40" y="25" width="60" height="70" fill="none" stroke="var(--accent)" stroke-width="2"/>
      <rect x="100" y="25" width="10" height="70" fill="var(--accent)" opacity="0.5"/>
      <rect x="110" y="25" width="150" height="70" fill="none" stroke="var(--text)" stroke-width="1" stroke-dasharray="3 3"/>
      <text x="70" y="113" text-anchor="middle" font-size="10" fill="var(--text)">anode</text>
      <text x="105" y="18" text-anchor="middle" font-size="9" fill="var(--accent)">SEI</text>
      <text x="185" y="113" text-anchor="middle" font-size="10" fill="var(--text)">electrolyte (protected)</text>
    </svg>`,
  },

  'battery-safety': {
    simple: "Batteries store lots of energy, so they can fail dangerously. Overcharging plates metal lithium that grows spiky 'dendrites'. These can pierce the separator and short the cell, triggering runaway heating and fire.",
    analogy: "Dendrites are like icicles growing across a gap until they touch — once they bridge it, you get a short, and the flammable liquid is the fuel.",
    figure: `<svg viewBox="0 0 300 110" style="width:100%;height:auto">
      <rect x="30" y="25" width="30" height="70" fill="var(--accent)" opacity="0.85"/>
      <rect x="240" y="25" width="30" height="70" fill="none" stroke="var(--accent)" stroke-width="2"/>
      <line x1="150" y1="20" x2="150" y2="100" stroke="var(--text)" stroke-width="1" stroke-dasharray="2 3"/>
      <path d="M60 55 L100 50 L130 60 L160 52 L185 58" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
      <text x="150" y="108" text-anchor="middle" font-size="10" fill="var(--text)">dendrite spikes across → short circuit</text>
    </svg>`,
  },

  'cathode-chemistries': {
    simple: "The cathode sets a battery's energy, safety, and cost. Four common types trade these off: LCO (high energy, pricey), LMO (cheap & safe, less capacity), LFP (very safe, long life, no cobalt), NMC (balanced & tunable — the EV favourite).",
    analogy: "Like choosing a car: a sports car (LCO — fast but costly), a dependable city car (LFP — safe, long-lasting), or an all-round SUV (NMC).",
    figure: `<svg viewBox="0 0 300 120" style="width:100%;height:auto">
      <g font-size="10" fill="var(--text)" text-anchor="middle">
        <rect x="20" y="40" width="40" height="60" fill="var(--accent)" opacity="0.9"/><text x="40" y="113">LCO</text>
        <rect x="90" y="65" width="40" height="35" fill="var(--accent)" opacity="0.6"/><text x="110" y="113">LMO</text>
        <rect x="160" y="70" width="40" height="30" fill="var(--accent)" opacity="0.45"/><text x="180" y="113">LFP</text>
        <rect x="230" y="50" width="40" height="50" fill="var(--accent)" opacity="0.75"/><text x="250" y="113">NMC</text>
      </g>
      <text x="150" y="18" text-anchor="middle" font-size="10" fill="var(--text)">↑ energy density (bar height)</text>
    </svg>`,
  },

  'high-nickel-nmc': {
    simple: "In NMC, nickel gives energy, cobalt gives stability (but is costly and ethically fraught), manganese is cheap support. So makers push nickel UP and cobalt DOWN (e.g. NMC-811) for more energy and less cobalt — but the trade-off is lower stability.",
    analogy: "Like making a cake richer by piling in more of the very ingredient you're trying to cut back — tastier, but harder to bake without it collapsing.",
    figure: `<svg viewBox="0 0 300 120" style="width:100%;height:auto">
      <text x="60" y="18" text-anchor="middle" font-size="10" fill="var(--text)">NMC-111</text>
      <g><rect x="30" y="30" width="60" height="22" fill="var(--accent)" opacity="0.9"/><rect x="30" y="52" width="60" height="22" fill="var(--accent)" opacity="0.55"/><rect x="30" y="74" width="60" height="22" fill="var(--accent)" opacity="0.3"/></g>
      <text x="240" y="18" text-anchor="middle" font-size="10" fill="var(--text)">NMC-811</text>
      <g><rect x="210" y="30" width="60" height="53" fill="var(--accent)" opacity="0.9"/><rect x="210" y="83" width="60" height="7" fill="var(--accent)" opacity="0.55"/><rect x="210" y="90" width="60" height="6" fill="var(--accent)" opacity="0.3"/></g>
      <text x="150" y="60" text-anchor="middle" font-size="14" fill="var(--text)">→</text>
      <text x="150" y="112" text-anchor="middle" font-size="9" fill="var(--text)">more Ni (dark), less Co</text>
    </svg>`,
  },

  'cathode-degradation': {
    simple: "Batteries fade, they don't just die. In manganese types, Mn³⁺ distorts the crystal (Jahn-Teller) and dissolves away, poisoning the other side. More generally, cracking, metal-mixing, and surface side-reactions slowly eat capacity.",
    analogy: "Like a wooden chair used daily: joints loosen and bits flake off — not one dramatic break, but slow wear that weakens it over time.",
    figure: `<svg viewBox="0 0 300 110" style="width:100%;height:auto">
      <g stroke="var(--accent)" stroke-width="1.5" fill="none">
        <rect x="40" y="30" width="30" height="30"/><rect x="70" y="30" width="30" height="30"/><rect x="40" y="60" width="30" height="30"/><rect x="70" y="60" width="30" height="30"/>
      </g>
      <text x="150" y="62" text-anchor="middle" font-size="16" fill="var(--text)">→</text>
      <g stroke="var(--accent)" stroke-width="1.5" fill="none">
        <path d="M200 30 h30 v30 h-30 z"/><path d="M230 32 l28 -2 v30 l-26 1 z"/><path d="M200 60 h30 v28 h-32 z" stroke-dasharray="3 2"/>
      </g>
      <text x="150" y="105" text-anchor="middle" font-size="10" fill="var(--text)">neat crystal → distorted &amp; cracked</text>
    </svg>`,
  },

  'liquid-to-solid': {
    simple: "Normal batteries use a flammable liquid electrolyte that can leak or catch fire. Solid (SPE) and gel (GPE) polymer electrolytes fix this: SPE is fully solid and safest but slow; GPE is a polymer soaked with liquid — a safer middle ground.",
    analogy: "Liquid = water (spills, flammable). GPE = a wet sponge (holds the liquid in place). SPE = firm jelly (no spills at all).",
    figure: `<svg viewBox="0 0 300 110" style="width:100%;height:auto">
      <g text-anchor="middle">
        <rect x="20" y="35" width="70" height="45" rx="6" fill="var(--accent)" opacity="0.25"/><text x="55" y="62" font-size="11" fill="var(--text)">liquid</text>
        <rect x="115" y="35" width="70" height="45" rx="6" fill="var(--accent)" opacity="0.55"/><text x="150" y="62" font-size="11" fill="var(--text)">gel</text>
        <rect x="210" y="35" width="70" height="45" rx="6" fill="var(--accent)" opacity="0.9"/><text x="245" y="62" font-size="11" fill="#fff">solid</text>
      </g>
      <text x="150" y="22" text-anchor="middle" font-size="10" fill="var(--text)">faster ←  conductivity / safety  → safer</text>
    </svg>`,
  },

  'peo-ion-transport': {
    simple: "PEO is the go-to electrolyte polymer. Its oxygen atoms grab Li⁺ ions, and as the chains wiggle, the ion 'hops' from one grip to the next. This only works where chains are loose (amorphous, above Tg) — frozen crystal regions block it.",
    analogy: "Li⁺ crosses a river by hopping between stepping-stones that people keep shifting. If the stones freeze in place, the hopping stops.",
    figure: `<svg viewBox="0 0 300 110" style="width:100%;height:auto">
      <path d="M20 75 Q70 45 120 75 T220 75 T300 75" fill="none" stroke="var(--accent)" stroke-width="2"/>
      <g fill="var(--accent)"><circle cx="70" cy="60" r="4"/><circle cx="120" cy="75" r="4"/><circle cx="170" cy="60" r="4"/><circle cx="220" cy="75" r="4"/></g>
      <circle cx="95" cy="48" r="7" fill="var(--text)"/>
      <path d="M78 55 Q95 30 145 50" fill="none" stroke="var(--text)" stroke-width="1.5" stroke-dasharray="3 2" marker-end="url(#ar5)"/>
      <defs><marker id="ar5" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="var(--text)"/></marker></defs>
      <text x="150" y="103" text-anchor="middle" font-size="10" fill="var(--text)">Li⁺ hops between O grips on a wiggling chain</text>
    </svg>`,
  },

  'gpe-synthesis': {
    simple: "Gel electrolytes form two ways. Physical: the network is held by weak, reversible links, so it can re-melt. Chemical: the network is locked by permanent cross-links — a true solid that can't re-melt. Chemical is tougher; physical is easier to reprocess.",
    analogy: "Physical gel is like jelly (set by cooling, can re-melt). Chemical gel is like a baked cake (cross-linked — you can't un-bake it).",
    figure: `<svg viewBox="0 0 300 115" style="width:100%;height:auto">
      <text x="75" y="18" text-anchor="middle" font-size="10" font-weight="700" fill="var(--accent)">physical</text>
      <g stroke="var(--accent)" stroke-width="2" fill="none"><path d="M30 40 H120"/><path d="M30 65 H120"/><path d="M30 90 H120"/></g>
      <g fill="var(--accent)"><circle cx="60" cy="52" r="3"/><circle cx="90" cy="78" r="3"/></g>
      <text x="75" y="110" text-anchor="middle" font-size="9" fill="var(--text)">weak links (re-melts)</text>
      <text x="225" y="18" text-anchor="middle" font-size="10" font-weight="700" fill="var(--accent)">chemical</text>
      <g stroke="var(--accent)" stroke-width="2"><path d="M180 40 H270" fill="none"/><path d="M180 65 H270" fill="none"/><path d="M180 90 H270" fill="none"/><line x1="210" y1="40" x2="210" y2="90"/><line x1="245" y1="40" x2="245" y2="90"/></g>
      <text x="225" y="110" text-anchor="middle" font-size="9" fill="var(--text)">locked cross-links</text>
    </svg>`,
  },

  'inpc-llzo': {
    simple: "Mix a flexible polymer with a hard ceramic (LLZO) and you get the best of both: the ceramic adds fast ion paths and strength, the polymer adds flexibility and good contact. The tricky part is the boundary where the ion must cross between them.",
    analogy: "Like reinforced concrete: flexible cement (the polymer) plus strong steel bars (the ceramic) — together far stronger than either alone.",
    figure: `<svg viewBox="0 0 300 110" style="width:100%;height:auto">
      <rect x="20" y="20" width="260" height="75" rx="8" fill="var(--accent)" opacity="0.15"/>
      <g fill="var(--accent)"><circle cx="70" cy="45" r="12"/><circle cx="150" cy="65" r="12"/><circle cx="220" cy="40" r="12"/></g>
      <path d="M30 80 Q110 55 300 80" fill="none" stroke="var(--text)" stroke-width="1.5" stroke-dasharray="4 3"/>
      <text x="150" y="105" text-anchor="middle" font-size="10" fill="var(--text)">polymer (soft) + ceramic particles (Li⁺ paths)</text>
    </svg>`,
  },

  'lithium-salts': {
    simple: "The salt supplies the Li⁺ ions, and the choice of its partner (the anion) changes everything. Big, loose anions (LiTFSI, LiFSI) release Li⁺ easily → better conductivity. LiPF₆ is standard but makes acid with water; LiBOB builds a great protective SEI.",
    analogy: "The anion is like a dance partner — the more easily it lets Li⁺ go, the more freely the ions can move across the floor.",
    figure: `<svg viewBox="0 0 300 110" style="width:100%;height:auto">
      <circle cx="95" cy="55" r="20" fill="var(--text)"/><text x="95" y="60" text-anchor="middle" font-size="12" font-weight="700" fill="#fff">Li⁺</text>
      <circle cx="150" cy="55" r="22" fill="none" stroke="var(--accent)" stroke-width="2"/><text x="150" y="60" text-anchor="middle" font-size="11" fill="var(--text)">anion</text>
      <path d="M118 55 H128" stroke="var(--accent)" stroke-width="2" marker-end="url(#ar6)"/>
      <path d="M180 35 q40 20 0 40" fill="none" stroke="var(--accent)" stroke-width="2" marker-end="url(#ar6)"/>
      <defs><marker id="ar6" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="var(--accent)"/></marker></defs>
      <text x="230" y="60" font-size="10" fill="var(--text)">Li⁺ breaks free</text>
      <text x="150" y="100" text-anchor="middle" font-size="10" fill="var(--text)">loose anion → more free ions → conducts better</text>
    </svg>`,
  },

};

if (typeof module !== 'undefined') module.exports = POLYMER_ENRICH;
