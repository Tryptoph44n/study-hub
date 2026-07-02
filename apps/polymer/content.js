// Polymer Chemistry Study Content
// Built from first principles → up to battery materials & physical chemistry
// Each concept: intro (plain) → principle (formal) → deepDive → examQA → professorMode

const POLYMER_CONTENT = {

  modules: [
    {
      id: 'foundations',
      order: 1,
      title: 'Foundations',
      titleJp: '基礎',
      icon: '⚛️',
      desc: 'Atoms, bonds, and forces — the ground everything stands on.',
    },
    {
      id: 'organic',
      order: 2,
      title: 'Organic Chemistry Refresher',
      titleJp: '有機化学',
      icon: '🔬',
      desc: 'Functional groups and reactions you must own before polymers.',
    },
    {
      id: 'polymer-basics',
      order: 3,
      title: 'Polymer Fundamentals',
      titleJp: '高分子の基礎',
      icon: '🔗',
      desc: 'What a polymer is, how we describe it, and molecular weight.',
    },
    {
      id: 'polymerization',
      order: 4,
      title: 'Polymerization',
      titleJp: '重合',
      icon: '⚙️',
      desc: 'How monomers become chains: step-growth, chain-growth, living.',
    },
    {
      id: 'physical',
      order: 5,
      title: 'Physical Chemistry of Polymers',
      titleJp: '高分子物理化学',
      icon: '🌡️',
      desc: 'Thermodynamics, Tg, crystallinity — why polymers behave as they do.',
    },
    {
      id: 'characterization',
      order: 6,
      title: 'Characterization',
      titleJp: '分析・評価',
      icon: '📊',
      desc: 'GPC, NMR, DSC, TGA — how we measure what we made.',
    },
    {
      id: 'battery',
      order: 7,
      title: 'Battery Materials',
      titleJp: '電池材料',
      icon: '🔋',
      desc: 'Polymer electrolytes, binders, separators — your research frontier.',
    },
    {
      id: 'batt-fundamentals',
      order: 8,
      title: 'Battery Fundamentals & Safety',
      titleJp: '電池の基礎と安全',
      icon: '🪫',
      desc: 'How a Li-ion cell works — intercalation, SEI, and what makes it fail.',
    },
    {
      id: 'cathodes',
      order: 9,
      title: 'Cathode Materials',
      titleJp: '正極材料',
      icon: '🧱',
      desc: 'LCO, LMO, LFP, NMC — chemistries, the low-cobalt shift, and degradation.',
    },
    {
      id: 'batt-electrolytes',
      order: 10,
      title: 'Polymer Electrolytes for Batteries',
      titleJp: '高分子電解質',
      icon: '💧',
      desc: 'From flammable liquids to SPE & GPE — PEO, ion hopping, synthesis.',
    },
    {
      id: 'batt-advanced',
      order: 11,
      title: 'Advanced Innovations',
      titleJp: '先端技術',
      icon: '🔬',
      desc: 'INPC composites with LLZO fillers, and how lithium salts tune performance.',
    },
  ],

  concepts: [

    // ─── FOUNDATIONS ──────────────────────────────────────────────────────
    {
      id: 'atoms-bonds',
      module: 'foundations',
      level: 1,
      title: 'Atoms, Electrons & Chemical Bonds',
      titleJp: '原子と化学結合',
      intro: `Everything in chemistry comes down to electrons looking for a stable arrangement. Atoms bond because sharing or transferring electrons lowers their energy. Three bond types matter for us:
• **Covalent** — atoms share electrons (the C–C and C–H bonds that make up every polymer backbone).
• **Ionic** — one atom gives up electrons to another (Li⁺ and its counter-ion in a battery).
• **Metallic** — a sea of shared electrons (the current collectors in a cell).`,
      principle: `A covalent bond forms when atomic orbitals overlap and electrons pair up in a lower-energy molecular orbital. Carbon's ability to form **four** strong, stable covalent bonds — to itself and to H, O, N — is the entire reason organic chemistry and polymers exist. The strength of a C–C bond (~348 kJ/mol) is why polymer backbones survive processing and use.`,
      deepDive: `Bond **polarity** matters enormously later. When two bonded atoms differ in electronegativity (e.g. C–O, C–F), electron density shifts, creating a dipole. These dipoles drive:
- intermolecular forces (next concept),
- reactivity (where a nucleophile attacks),
- and ion transport in polymer electrolytes (Li⁺ hops between polar C–O groups in PEO).

Hybridization (sp³, sp², sp) sets bond angles and geometry — sp³ carbon is tetrahedral (109.5°), giving polymer chains their zig-zag, rotatable backbone.`,
      equations: [
        { label: 'Bond dissociation energy', expr: 'A–B → A• + B•   (ΔH = BDE)' },
      ],
      examQA: [
        { q: 'Why is carbon uniquely suited to forming polymers?', a: 'Carbon forms four strong, stable covalent bonds, including to itself (catenation), allowing long chains and diverse architectures with high bond energy (~348 kJ/mol for C–C).' },
        { q: 'What is bond polarity and why will it matter for battery electrolytes?', a: 'Polarity is uneven electron sharing due to electronegativity difference. In PEO electrolytes, polar C–O–C ether groups coordinate Li⁺ ions, enabling ion transport.' },
      ],
      professorMode: `If a professor asks "why polymers?", anchor on carbon: "Carbon's tetravalency and catenation let it build long, kinetically stable chains. The C–C bond energy means the backbone is robust, while substituents tune properties." Then bridge to your interest: "And the polarity of heteroatom bonds — like the ether oxygens in PEO — is exactly what lets a polymer also conduct ions."`,
    },
    {
      id: 'intermolecular-forces',
      module: 'foundations',
      level: 1,
      title: 'Intermolecular Forces',
      titleJp: '分子間力',
      intro: `Bonds hold atoms together *within* a molecule. **Intermolecular forces (IMFs)** hold separate molecules *near* each other. They're much weaker than covalent bonds — but in polymers, you have thousands of them per chain, so they add up to dominate physical properties (melting, strength, solubility).`,
      principle: `Three main IMFs, weakest to strongest:
1. **London dispersion** — temporary dipoles, present in everything; scales with size/contact area.
2. **Dipole–dipole** — between permanent polar groups.
3. **Hydrogen bonding** — a special strong dipole interaction (N–H, O–H to N, O). This is why nylon and cellulose are so strong.`,
      deepDive: `In polymers, IMFs explain almost all macroscopic behavior:
- **Strength & melting point**: more/stronger IMFs → higher Tm, tougher material. Nylon's H-bonds make it strong; polyethylene relies only on dispersion, so it's softer.
- **Solubility**: "like dissolves like" — a polymer dissolves when polymer–solvent IMFs are comparable to polymer–polymer IMFs.
- **Tg** (glass transition): IMFs resist chain motion; stronger IMFs → higher Tg.`,
      examQA: [
        { q: 'Why is nylon stronger than polyethylene despite both having C–C backbones?', a: 'Nylon has amide groups that form hydrogen bonds between chains; polyethylene only has weak London dispersion forces. The stronger interchain IMFs give nylon higher strength and melting point.' },
        { q: 'How do IMFs determine whether a polymer dissolves in a solvent?', a: 'A polymer dissolves when polymer–solvent interactions are energetically comparable to polymer–polymer interactions ("like dissolves like"), making mixing thermodynamically favorable.' },
      ],
      professorMode: `Frame it as a hierarchy of energy scales: "Covalent bonds (~100s kJ/mol) set what the molecule *is*; intermolecular forces (~1–40 kJ/mol) set how it *behaves* in bulk. In polymers the IMFs are multiplied across the chain length, so even weak dispersion forces become mechanically significant." This shows you understand why molecular weight matters too.`,
    },

    // ─── ORGANIC REFRESHER ────────────────────────────────────────────────
    {
      id: 'functional-groups',
      module: 'organic',
      level: 1,
      title: 'Functional Groups',
      titleJp: '官能基',
      intro: `A functional group is a specific cluster of atoms that gives a molecule characteristic reactivity. You don't memorize every molecule — you recognize its functional groups and you know how it reacts. For polymers, a handful matter most.`,
      principle: `Key groups for polymer chemistry:
- **Alkene (C=C)** — the reactive site for chain-growth (addition) polymerization. Vinyl monomers (styrene, ethylene, acrylates).
- **Hydroxyl (–OH)** and **Carboxylic acid (–COOH)** — react to form esters (polyesters).
- **Amine (–NH₂)** + **Carboxylic acid** → amide (nylons).
- **Ether (C–O–C)** — backbone of PEO, key for Li⁺ conduction.
- **Epoxide** — strained 3-membered ring, very reactive (epoxy resins).`,
      deepDive: `The logic of step-growth polymers is just functional-group pairing: a difunctional acid + a difunctional alcohol = polyester; diacid + diamine = polyamide (nylon). Recognizing a monomer's groups tells you *which polymerization* and *what backbone* you'll get.

For your battery interest: ester and ether groups carry lone-pair oxygens that coordinate cations — the same chemistry that makes a polyester reactive makes a polyether a Li⁺ host.`,
      examQA: [
        { q: 'Which functional group enables chain-growth (addition) polymerization, and why?', a: 'The C=C double bond (alkene). Its π electrons are reactive and can open to form two new single bonds, adding monomer units sequentially without losing atoms.' },
        { q: 'What two functional groups combine to make a polyamide like nylon?', a: 'A carboxylic acid (–COOH) and an amine (–NH₂) condense to form an amide bond, releasing water — a step-growth (condensation) polymerization.' },
      ],
      professorMode: `Show pattern-recognition thinking: "I read a monomer by its functional groups. A C=C tells me chain-growth; complementary pairs like –COOH and –OH or –NH₂ tell me step-growth condensation. The group also predicts the backbone heteroatoms, which predict the physical properties." Professors love when you reason from structure to property.`,
    },
    {
      id: 'reaction-mechanisms',
      module: 'organic',
      level: 2,
      title: 'Reaction Mechanisms: Nucleophiles, Electrophiles & Radicals',
      titleJp: '反応機構',
      intro: `A mechanism is the step-by-step story of how bonds break and form, tracked by where the electrons go. Master three actors and most polymer reactions make sense: **nucleophiles** (electron-rich, "attack"), **electrophiles** (electron-poor, "get attacked"), and **radicals** (unpaired electron, very reactive).`,
      principle: `- **Nucleophilic addition/substitution**: an electron-rich species donates a pair to an electron-poor carbon. Drives anionic polymerization and step-growth condensations.
- **Radical chain reactions**: a radical adds to a C=C, generating a new radical that adds again — the basis of free-radical polymerization (the most industrially common).
- Curved arrows track electron *pairs* (heterolytic) or single electrons (homolytic, radical).`,
      deepDive: `Why this matters for control: radical polymerization is fast and tolerant but gives broad molecular weight distributions (Ð often 1.5–2+) because chains start and die randomly. Ionic/living mechanisms are cleaner — all chains initiate together and don't terminate, giving narrow Ð (~1.0–1.2). This is the exact trade-off you discussed in the Japanese ゼミ scenario — now you know the *mechanistic* reason behind it.`,
      examQA: [
        { q: 'Why does free-radical polymerization give a broader molecular weight distribution than living polymerization?', a: 'In radical polymerization, chains initiate at different times and terminate randomly (combination/disproportionation), so chains have varied lengths. In living polymerization, all chains initiate together and do not terminate, so they grow uniformly → narrow Ð.' },
        { q: 'Define nucleophile and electrophile.', a: 'A nucleophile is electron-rich and donates an electron pair to form a bond; an electrophile is electron-poor and accepts that electron pair.' },
      ],
      professorMode: `Tie mechanism to outcome: "The mechanism isn't trivia — it dictates the molecular weight distribution. Radical = random birth and death of chains = broad Ð. Living = simultaneous birth, no death = narrow Ð and control over architecture." This connects organic chemistry to materials properties, which is the heart of polymer science.`,
    },

    // ─── POLYMER FUNDAMENTALS ─────────────────────────────────────────────
    {
      id: 'what-is-polymer',
      module: 'polymer-basics',
      level: 1,
      title: 'What Is a Polymer?',
      titleJp: '高分子とは',
      intro: `A polymer is a large molecule (macromolecule) built by repeating a small unit — the **monomer** — many times. "Poly" = many, "mer" = part. Polyethylene is just –(CH₂–CH₂)– repeated thousands of times. The repeat unit is what you put in brackets with a subscript *n* (the degree of polymerization).`,
      principle: `Classifications you must know:
- **By origin**: natural (cellulose, DNA, proteins) vs synthetic (PE, PET, nylon).
- **By architecture**: linear, branched, cross-linked (networks), star, comb.
- **By thermal behavior**: thermoplastics (melt & reflow) vs thermosets (cross-linked, don't melt).
- **By response**: homopolymer (one monomer) vs copolymer (two+; random, block, alternating, graft).`,
      deepDive: `Architecture controls properties at fixed chemistry:
- Linear chains pack well → can crystallize, stronger, can melt-process (HDPE).
- Branching disrupts packing → lower density, more flexible (LDPE).
- Cross-linking locks the network → rubber elasticity or rigid thermoset; can't be remelted.

**Block copolymers** are central to advanced battery electrolytes: e.g. a PS-*b*-PEO block copolymer self-assembles so the PS block gives mechanical strength while the PEO block conducts Li⁺ — solving the strength-vs-conductivity trade-off.`,
      examQA: [
        { q: 'What is the difference between a thermoplastic and a thermoset?', a: 'A thermoplastic consists of independent chains held by IMFs, so it melts and can be reshaped repeatedly. A thermoset is covalently cross-linked into a network, so it degrades rather than melts and cannot be reformed.' },
        { q: 'Why are block copolymers attractive for solid polymer electrolytes?', a: 'They microphase-separate so one block (e.g. PS) provides mechanical integrity while another (e.g. PEO) provides ionic conductivity, decoupling two properties that are hard to optimize in a single homopolymer.' },
      ],
      professorMode: `Lead with the structure–property paradigm: "Polymer properties come from three levers — chemistry of the repeat unit, molecular weight, and architecture. Same ethylene chemistry gives rigid HDPE or floppy LDPE purely through branching." Then flag block copolymers as your bridge to battery work.`,
    },
    {
      id: 'molecular-weight',
      module: 'polymer-basics',
      level: 2,
      title: 'Molecular Weight & Dispersity',
      titleJp: '分子量と分散度',
      intro: `Unlike a small molecule with one exact mass, a polymer sample is a *mixture* of chains of different lengths. So we describe it with **averages** and a measure of spread. Getting this right is essential — it appears in every characterization report you'll write.`,
      principle: `Two key averages:
- **Number-average (Mₙ)**: total weight ÷ number of chains. Sensitive to small chains.
- **Weight-average (M𝓌)**: weights larger chains more. Always M𝓌 ≥ Mₙ.

**Dispersity (Ð) = M𝓌 / Mₙ.** Ð = 1 means all chains identical (ideal). Radical polymerization: Ð ≈ 1.5–2.0. Living polymerization: Ð ≈ 1.0–1.1.`,
      principleExtra: true,
      equations: [
        { label: 'Number-average', expr: 'Mₙ = Σ(NᵢMᵢ) / Σ(Nᵢ)' },
        { label: 'Weight-average', expr: 'M𝓌 = Σ(NᵢMᵢ²) / Σ(NᵢMᵢ)' },
        { label: 'Dispersity', expr: 'Ð = M𝓌 / Mₙ  (≥ 1)' },
      ],
      deepDive: `Why two averages? Different properties depend on different averages. Colligative properties and end-group chemistry track Mₙ; melt viscosity and toughness track M𝓌. A high-Ð sample behaves differently than a narrow one at the same Mₙ.

There's a critical molecular weight (Mₑ, entanglement) above which chains entangle and mechanical strength jumps — below it the material is brittle/waxy. This is *why* you need high MW for useful properties, and why measuring MW (GPC) is non-negotiable.`,
      examQA: [
        { q: 'A sample has Mₙ = 50,000 and M𝓌 = 60,000 g/mol. What is Ð and what does it indicate?', a: 'Ð = 60,000/50,000 = 1.2. This is a relatively narrow distribution, consistent with a controlled/living polymerization.' },
        { q: 'Why is M𝓌 always greater than or equal to Mₙ?', a: 'M𝓌 weights each chain by its mass (Mᵢ²/Mᵢ), so larger chains contribute disproportionately, pulling the average up. They are equal only when all chains are identical (Ð = 1).' },
      ],
      professorMode: `Be precise with definitions and connect to measurement: "Mₙ counts chains, M𝓌 weights by mass, and their ratio Ð quantifies uniformity. I'd measure both by GPC. The reason I care: properties partition — Mₙ for end-group/stoichiometry, M𝓌 for melt and mechanical response, and entanglement above Mₑ is what makes the material useful." This is exactly the depth a polymer professor expects.`,
    },

    // ─── POLYMERIZATION ───────────────────────────────────────────────────
    {
      id: 'step-vs-chain',
      module: 'polymerization',
      level: 1,
      title: 'Step-Growth vs Chain-Growth',
      titleJp: '逐次重合と連鎖重合',
      intro: `There are two fundamentally different ways monomers link up. Confusing them is the most common beginner mistake — so nail this distinction early.`,
      principle: `**Step-growth (condensation):** any two species with reactive ends can join — monomer+monomer, dimer+trimer, etc. High molecular weight only at *very* high conversion (>99%). Often releases a small molecule (water). Examples: polyesters (PET), nylons, polyurethanes.

**Chain-growth (addition):** monomers add one at a time to an active chain end (radical/ion). High MW reached *early*, even at low conversion. No byproduct. Requires initiation, propagation, termination. Examples: PE, PS, PVC, PMMA.`,
      deepDive: `The conversion-vs-MW behavior is the key fingerprint:
- Step-growth: MW rises slowly then explodes near 100% conversion (Carothers equation: DP = 1/(1−p)). Lose 1% stoichiometry and you cap your MW.
- Chain-growth: high MW chains exist from the start; conversion just increases *yield*, not chain length.

This is why step-growth demands exact stoichiometry and high purity, while chain-growth demands clean initiation and control of termination.`,
      equations: [
        { label: 'Carothers equation (step-growth)', expr: 'DP = 1 / (1 − p)   (p = fractional conversion)' },
      ],
      examQA: [
        { q: 'In step-growth polymerization, why is high conversion essential for high molecular weight?', a: 'By the Carothers equation DP = 1/(1−p), molecular weight only becomes large as conversion p approaches 1. At 99% conversion DP ≈ 100; at 90% only DP ≈ 10. Chains build by combining all species, so most growth happens at the very end.' },
        { q: 'How does chain-growth differ in its conversion–MW relationship?', a: 'In chain-growth, high-MW polymer forms from the start via active chain ends; increasing conversion raises yield (amount of polymer) but not the length of individual chains.' },
      ],
      professorMode: `Use the conversion plot as your anchor: "The cleanest way to tell them apart is the molecular-weight-vs-conversion curve. Step-growth: MW stays low until p→1, governed by Carothers. Chain-growth: high MW immediately, conversion just adds yield. That single graph also explains the practical demands — stoichiometric precision for step-growth, initiation/termination control for chain-growth."`,
    },
    {
      id: 'radical-polymerization',
      module: 'polymerization',
      level: 2,
      title: 'Free-Radical Polymerization',
      titleJp: 'ラジカル重合',
      intro: `The workhorse of industry — over half of all synthetic polymers. A radical initiator kicks things off, the radical chews through C=C monomers, and chains eventually kill each other off. Robust, water-tolerant, but not very controlled.`,
      principle: `Three stages:
1. **Initiation**: initiator (e.g. AIBN, peroxide) decomposes to radicals; a radical adds to the first monomer.
2. **Propagation**: the chain radical adds monomer after monomer, very fast.
3. **Termination**: two radicals meet — combination (join) or disproportionation (one grabs an H). This randomness gives broad Ð.`,
      deepDive: `Kinetic chain length ν ≈ rate of propagation / rate of termination. Because termination is bimolecular in radicals, raising initiator concentration *lowers* MW (more chains, shorter each). Rate of polymerization Rₚ ∝ [M][I]^½ — note the half-order in initiator, a classic exam result derived from the steady-state approximation.

**Controlled radical polymerization (CRP)** — ATRP, RAFT, NMP — tames termination by reversibly "capping" the radical, so you get living-like narrow Ð *with* radical robustness. Hugely important for making block copolymers for battery membranes.`,
      equations: [
        { label: 'Rate of polymerization', expr: 'Rₚ = kₚ[M]( kd[I]/kt )^½' },
      ],
      examQA: [
        { q: 'Derive why Rₚ depends on the square root of initiator concentration.', a: 'Using the steady-state approximation, rate of initiation = rate of termination: 2fkd[I] = 2kt[M•]². Solving for radical concentration [M•] = (fkd[I]/kt)^½. Since Rₚ = kₚ[M][M•], Rₚ ∝ [I]^½.' },
        { q: 'What problem do RAFT and ATRP solve compared to conventional radical polymerization?', a: 'They introduce reversible deactivation of the growing radical, suppressing irreversible termination. This gives controlled molecular weight, narrow dispersity, and access to block copolymers, while keeping the tolerance of radical chemistry.' },
      ],
      professorMode: `Be ready to derive Rₚ ∝ [I]^½ on the board — it's a favorite. Say: "From the steady-state radical concentration, termination being second-order in radicals forces the half-order dependence. The practical consequence is the rate–MW trade-off: more initiator speeds things up but shortens chains." Then mention CRP as the modern fix enabling block architectures for your electrolyte membranes.`,
    },
    {
      id: 'living-polymerization',
      module: 'polymerization',
      level: 2,
      title: 'Living / Ionic Polymerization',
      titleJp: 'リビング重合',
      intro: `"Living" means the chain ends never die — no termination, no chain transfer. Add more monomer and they keep growing. This control is how chemists build precise architectures: exact MW, ultra-narrow Ð, and block copolymers.`,
      principle: `Classic example: **living anionic polymerization** (e.g. styrene with sec-BuLi). Initiation is fast and complete, so all chains start together; with no termination they all grow at the same rate. Result: Ð → 1.0–1.05 and MW set simply by [monomer]/[initiator].`,
      deepDive: `Because all chains are still "alive" at full conversion, you can add a second monomer to make a clean **A-b-B block copolymer**. This is the textbook route to PS-*b*-PEO and similar electrolyte materials.

Requirements are strict: rigorously dry, oxygen-free, pure monomer (any impurity terminates a living chain). That's why the lab safety/cleanliness habits from your Japanese scenarios genuinely matter here.`,
      equations: [
        { label: 'Degree of polymerization', expr: 'DP = [Monomer] / [Initiator] × conversion' },
        { label: 'Predicted Mₙ', expr: 'Mₙ = ([M]₀/[I]₀) × M₀ × p' },
      ],
      examQA: [
        { q: 'How does living polymerization let you target a specific molecular weight?', a: 'With no termination and fast complete initiation, every initiator starts one chain that grows uniformly. So Mₙ = ([M]/[I]) × (monomer mass) × conversion — you dial MW directly by the monomer-to-initiator ratio.' },
        { q: 'Why must living anionic polymerization be done under rigorously inert, dry conditions?', a: 'The carbanion chain ends are highly reactive and irreversibly terminated by trace water, oxygen, or CO₂. Any impurity kills living chains, broadening Ð and capping MW.' },
      ],
      professorMode: `Connect control to capability: "Living polymerization removes termination, so chains grow uniformly and I can predict Mₙ from [M]/[I], reach Ð near 1, and crucially chain-extend into block copolymers by sequential monomer addition. The cost is stringent purity — but that's exactly what's needed to build a PS-b-PEO electrolyte with both strength and conductivity."`,
    },

    // ─── PHYSICAL CHEMISTRY ───────────────────────────────────────────────
    {
      id: 'thermodynamics-mixing',
      module: 'physical',
      level: 2,
      title: 'Thermodynamics of Polymer Solutions',
      titleJp: '高分子溶液の熱力学',
      intro: `Will a polymer dissolve or mix? That's a thermodynamics question: ΔGmix = ΔHmix − TΔSmix. The twist for polymers is that the entropy of mixing is *tiny* compared to small molecules — because one chain of 1000 units is one particle, not 1000.`,
      principle: `The **Flory–Huggins theory** captures this. The free energy of mixing per site:
ΔGmix/RT = (φ₁/N₁)ln φ₁ + (φ₂/N₂)ln φ₂ + χφ₁φ₂
where φ = volume fractions, N = degrees of polymerization, χ = interaction parameter (enthalpy). For polymers N is large, so the entropy terms shrink — mixing hinges on χ.`,
      deepDive: `Consequences:
- Polymers are **harder to dissolve** than small molecules (small ΔSmix), and two different polymers almost never mix (both N large) → most blends phase-separate.
- The **χ parameter** encodes whether contacts are favorable (χ small/negative → miscible) or unfavorable (χ large → demix).
- This is *why* block copolymers **microphase-separate** instead of fully separating: the blocks are covalently tethered, so they form nanostructures (lamellae, cylinders) — the morphology that makes structured electrolytes work.`,
      equations: [
        { label: 'Flory–Huggins free energy', expr: 'ΔGmix/RT = (φ₁/N₁)lnφ₁ + (φ₂/N₂)lnφ₂ + χφ₁φ₂' },
        { label: 'Gibbs criterion', expr: 'Miscible if ΔGmix < 0 and ∂²ΔGmix/∂φ² > 0' },
      ],
      examQA: [
        { q: 'Why do polymers dissolve less readily than small molecules?', a: 'The combinatorial entropy of mixing scales as 1/N (one chain = one particle), so for large N the favorable entropy term is very small. Mixing then depends critically on the enthalpy (χ), making dissolution harder and demixing common.' },
        { q: 'Why do block copolymers microphase-separate rather than macrophase-separate?', a: 'The incompatible blocks want to demix (positive χ) but are covalently joined, so they cannot fully separate. They compromise by forming nanoscale domains (lamellae, cylinders, spheres), set by block ratio and χN.' },
      ],
      professorMode: `Flory–Huggins is the centerpiece — know the three terms and what each means physically. Say: "The two log terms are combinatorial entropy, suppressed by 1/N for polymers; χφ₁φ₂ is the enthalpic penalty. Large N kills the entropy, so χ rules — that's why blends demix and why covalent tethering in block copolymers forces microphase separation into the ordered morphologies I'd want in an electrolyte membrane."`,
    },
    {
      id: 'glass-transition',
      module: 'physical',
      level: 1,
      title: 'Glass Transition & Crystallinity',
      titleJp: 'ガラス転移と結晶性',
      intro: `Two thermal landmarks define how a polymer behaves at a given temperature: the **glass transition (Tg)** and, for crystallizable polymers, the **melting temperature (Tm)**. Below Tg a polymer is a hard glass; above it, rubbery and mobile. This single fact governs whether your material is a brittle plastic or a soft ion conductor.`,
      principle: `**Tg** is where large-scale chain segmental motion "unfreezes" — a kinetic, second-order-like transition (a step in heat capacity, seen in DSC). **Tm** is the first-order melting of crystalline regions (a sharp endotherm). Amorphous polymers have only Tg; semicrystalline polymers have both.`,
      deepDive: `What raises Tg: stiff backbones, bulky side groups, strong IMFs, cross-linking, high MW (up to a plateau). What lowers it: flexible backbones, plasticizers, side-chain spacing.

**Direct battery relevance**: ion transport in a polymer electrolyte happens through *segmental motion* of the chains above Tg. PEO conducts Li⁺ well only in its amorphous, above-Tg state — but PEO also crystallizes, and crystalline regions *block* conduction. So a central research goal is suppressing PEO crystallinity (via block copolymers, plasticizers, or cross-linking) while keeping mechanical integrity. This is likely close to your research.`,
      equations: [
        { label: 'Fox equation (copolymer/blend Tg)', expr: '1/Tg = w₁/Tg₁ + w₂/Tg₂' },
      ],
      examQA: [
        { q: 'Why is the glass transition critical for polymer electrolyte conductivity?', a: 'Ion transport occurs via segmental motion of polymer chains, which only happens above Tg. A lower Tg (more chain mobility) generally enables higher ionic conductivity; below Tg the chains are frozen and conduction drops sharply.' },
        { q: 'Why does crystallinity reduce conductivity in PEO electrolytes?', a: 'Crystalline regions have ordered, immobile chains that cannot undergo the segmental motion needed for ion hopping, so Li⁺ transport is confined to (and slowed by the tortuosity of) the amorphous fraction.' },
      ],
      professorMode: `This is your home turf — speak confidently: "Tg is a kinetic transition marking the onset of segmental mobility; Tm is the thermodynamic melting of crystallites. For a PEO electrolyte both matter: conduction needs amorphous, above-Tg chains, so crystallinity is the enemy. Strategies — block copolymers, plasticization, cross-linking — lower crystallinity and Tg to boost conductivity while retaining mechanical strength." That answer signals you're ready for battery research.`,
    },

    // ─── CHARACTERIZATION ─────────────────────────────────────────────────
    {
      id: 'gpc',
      module: 'characterization',
      level: 1,
      title: 'GPC / SEC — Molecular Weight',
      titleJp: 'GPC（分子量測定）',
      intro: `Gel Permeation Chromatography (GPC, a.k.a. SEC) is how you actually *measure* Mₙ, M𝓌, and Ð. It's the single most common polymer characterization — you'll run it constantly. It separates chains by size in solution.`,
      principle: `A dilute polymer solution flows through a column packed with porous beads. **Small chains** enter more pores → take a *longer* path → elute *later*. **Large chains** are excluded → elute *first*. A detector (RI, UV, or light scattering) records concentration vs elution time, giving the full MW distribution after calibration.`,
      deepDive: `Caveats to mention in lab meetings:
- Conventional GPC is **relative** — calibrated against standards (often polystyrene), so reported MW is "PS-equivalent" unless you use absolute detection (multi-angle light scattering, MALS).
- Solvent, column, and temperature must match calibration.
- The *shape* of the trace tells you about Ð (narrow peak = low Ð) and reveals problems (shoulders = bimodal distribution, e.g. from chain coupling).`,
      examQA: [
        { q: 'In GPC, do large or small molecules elute first, and why?', a: 'Large molecules elute first. They are too big to enter most pores in the column packing, so they take a shorter path through the column; small molecules penetrate the pores, travel a longer path, and elute later.' },
        { q: 'Why might a GPC molecular weight be reported as "polystyrene-equivalent"?', a: 'Conventional GPC is a relative method calibrated with polystyrene standards. Unless absolute detection (e.g. light scattering) is used, the values are accurate only relative to PS, not the true MW of a chemically different polymer.' },
      ],
      professorMode: `Show you know its limits, not just how it works: "GPC separates by hydrodynamic size, so large elutes first. But conventional calibration is relative — I'd state values as PS-equivalent or switch to MALS for absolute MW. I also read the trace shape: a shoulder suggests a bimodal distribution, perhaps from termination by combination." Knowing the caveats is what separates a competent student from a careful one.`,
    },
    {
      id: 'thermal-analysis',
      module: 'characterization',
      level: 1,
      title: 'DSC & TGA — Thermal Analysis',
      titleJp: 'DSC・TGA（熱分析）',
      intro: `Two complementary thermal techniques. **DSC** finds transitions (Tg, Tm, crystallization, curing) by measuring heat flow. **TGA** measures mass loss vs temperature — telling you thermal stability, decomposition, and filler/solvent content.`,
      principle: `**DSC (Differential Scanning Calorimetry):** heats sample and reference, records heat-flow difference. Tg shows as a *step* in baseline (heat capacity change); Tm shows as an *endothermic peak*; crystallization as an *exothermic peak*.
**TGA (Thermogravimetric Analysis):** records weight vs T. Onset of mass loss = decomposition temperature; plateaus and steps quantify volatiles, polymer, and residue/filler.`,
      deepDive: `Used together they characterize a material fully: DSC for the transitions that govern use temperature and processing, TGA for the stability window and composition. For a battery electrolyte you'd use DSC to confirm low crystallinity and Tg (for conductivity) and TGA to verify the membrane is stable above operating temperature and to check residual solvent — a real safety concern in cells.`,
      examQA: [
        { q: 'How does a glass transition appear in a DSC trace versus a melting transition?', a: 'A glass transition appears as a step change in the baseline (a shift in heat capacity), while melting appears as an endothermic peak (latent heat absorbed at a first-order transition).' },
        { q: 'What does TGA tell you about a polymer electrolyte membrane?', a: 'TGA gives the decomposition/thermal-stability temperature and quantifies residual solvent and inorganic filler content from the mass-loss steps and final residue — important for safety and composition verification.' },
      ],
      professorMode: `Pair the techniques deliberately: "I use DSC and TGA together — DSC for Tg/Tm/crystallinity that set processing and, for my electrolyte, conductivity; TGA for the stability window and residual-solvent check that matters for cell safety. The two answer different questions: transitions versus mass changes." Demonstrating *why you'd choose each* is the goal.`,
    },

    // ─── BATTERY MATERIALS ────────────────────────────────────────────────
    {
      id: 'polymer-electrolytes',
      module: 'battery',
      level: 3,
      title: 'Solid Polymer Electrolytes',
      titleJp: '固体高分子電解質',
      intro: `This is the frontier you're aiming at. A solid polymer electrolyte (SPE) replaces the flammable liquid electrolyte in a Li battery with a solid polymer that both conducts Li⁺ ions *and* acts as the separator. Safer, flexible, enables lithium-metal anodes — but conductivity is the challenge.`,
      principle: `The classic SPE is **PEO + a lithium salt** (e.g. LiTFSI). The ether oxygens coordinate Li⁺; ions move by hopping between coordination sites, *driven by segmental motion* of the amorphous chains above Tg. So conductivity depends on: salt concentration, amorphous fraction (low crystallinity), and low Tg.`,
      deepDive: `The central tension: things that raise conductivity (more chain mobility, lower Tg) also lower mechanical strength — but you need strength to block lithium dendrites. Solutions under active research:
- **Block copolymers** (PS-*b*-PEO): rigid block for strength, PEO block for conduction (microphase separation — recall Flory–Huggins).
- **Plasticizers / ionic liquids**: boost mobility.
- **Inorganic fillers / composite (hybrid) electrolytes**: ceramic particles add conductivity pathways and strength.
- **Single-ion conductors**: anion tethered to backbone so only Li⁺ moves (high transference number).

Key metrics: ionic conductivity σ (target >10⁻³ S/cm at RT), Li⁺ transference number t₊, electrochemical stability window, and modulus.`,
      equations: [
        { label: 'Arrhenius / VTF conductivity', expr: 'σ = σ₀ exp(−Eₐ / R(T−T₀))   (VTF, segmental motion)' },
        { label: 'Transference number', expr: 't₊ = (Li⁺ current) / (total ionic current)' },
      ],
      examQA: [
        { q: 'Why does PEO conductivity follow VTF rather than simple Arrhenius behavior?', a: 'Ion transport is coupled to polymer segmental motion, not a fixed activation barrier. VTF (Vogel–Tammann–Fulcher) accounts for the temperature dependence of free volume/segmental mobility relative to a reference temperature T₀ near Tg, fitting the curved log σ vs 1/T plot.' },
        { q: 'Explain the conductivity–mechanical strength trade-off in solid polymer electrolytes and one strategy to resolve it.', a: 'High conductivity needs mobile, low-Tg amorphous chains, but mechanical strength (to suppress dendrites) needs rigid, immobile chains. Block copolymers like PS-b-PEO resolve this by microphase separation: the glassy PS domains give modulus while the PEO domains conduct Li⁺.' },
        { q: 'Why is a high Li⁺ transference number desirable?', a: 'If anions also move, they build up concentration gradients (polarization) that limit rate and cause cell failure. A high t₊ (ideally near 1, as in single-ion conductors) means most current is carried by Li⁺, reducing polarization and improving performance.' },
      ],
      professorMode: `This is your thesis-level pitch — integrate everything: "An SPE must do two opposing jobs: conduct Li⁺ via segmental motion (so low Tg, low crystallinity, VTF behavior) and resist dendrites (so high modulus). The elegant resolution is microphase-separated block copolymers — PS-b-PEO — which I understand thermodynamically through Flory–Huggins. I'd characterize σ by impedance, t₊ electrochemically, Tg/crystallinity by DSC, and modulus mechanically." Delivering this connects every module you've studied — that's exactly the synthesis a professor wants to hear.`,
    },
    {
      id: 'binders-separators',
      module: 'battery',
      level: 2,
      title: 'Binders & Separators',
      titleJp: 'バインダーとセパレーター',
      intro: `Beyond the electrolyte, polymers do two more critical jobs in every lithium battery: holding the electrode together (**binder**) and physically separating the electrodes (**separator**). Unglamorous but essential — and active research areas.`,
      principle: `**Binder:** a polymer (classically PVDF; increasingly water-based CMC/SBR) that glues active material + conductive carbon onto the metal current collector, accommodating volume changes during cycling. Must be electrochemically stable and adhesive.
**Separator:** a porous polymer film (typically polyethylene/polypropylene) that prevents electrical short circuits while letting ions pass through its pores. Thermal shutdown behavior (pores close on overheating) is a key safety feature.`,
      deepDive: `Research directions tie back to your fundamentals:
- **Si anodes** swell ~300%, destroying PVDF binders → need elastic, self-healing, or covalently bonding binders (drawing on cross-linking and IMF chemistry).
- **Separators**: ceramic-coated or polymer-grafted to improve thermal stability and wettability.
- Aqueous binders (CMC/SBR) avoid toxic NMP solvent — a green-chemistry and processing advantage you can connect to TGA (residual solvent) and adhesion testing.`,
      examQA: [
        { q: 'Why are conventional PVDF binders problematic for silicon anodes?', a: 'Silicon expands ~300% on lithiation. The relatively rigid, non-covalent PVDF binder cannot accommodate this volume change, so the electrode pulverizes and loses electrical contact. Elastic, self-healing, or covalently bonding binders are being developed instead.' },
        { q: 'What safety function can a polymer separator provide during overheating?', a: 'Thermal shutdown: as temperature approaches the polymer melting point, the pores close, shutting off ion transport and stopping the electrochemical reaction before thermal runaway.' },
      ],
      professorMode: `Show breadth — that batteries are a polymer-systems problem: "Polymers appear three times in a cell: electrolyte, binder, and separator. A binder must stay adhesive and electrochemically stable through volume changes — which is why Si anodes break PVDF and motivate self-healing or covalent binders. Separators add a safety layer via thermal shutdown. Each is a structure–property problem I can reason about from IMFs, cross-linking, and thermal transitions." This signals you see the whole device, not just one material.`,
    },

    // ═══ MODULE 8 — BATTERY FUNDAMENTALS & SAFETY ═══════════════════════════
    {
      id: 'how-liion-works',
      module: 'batt-fundamentals',
      level: 1,
      title: 'How a Lithium-Ion Battery Works',
      titleJp: 'リチウムイオン電池の仕組み',
      intro: `A lithium-ion battery stores energy by shuttling Li⁺ ions back and forth between two electrodes. Because the ions just "rock" from one side to the other and back during charge/discharge, it's nicknamed the **"rocking chair" model**. Nothing is consumed — the same lithium moves home and away, over and over.`,
      principle: `Three core components:
- **Cathode (positive electrode)**: a lithium-containing transition-metal compound (e.g. LiCoO₂). Source of Li⁺ when the cell is made.
- **Anode (negative electrode)**: usually graphite, which hosts Li⁺ between its layers.
- **Electrolyte**: an ion conductor (liquid salt solution or polymer) that lets Li⁺ pass but blocks electrons, forcing electrons through the external circuit to do work.

**Intercalation** is the key process: Li⁺ ions insert into (and de-insert from) the layered host structures *without destroying* them.`,
      deepDive: `Charge vs discharge:
- **Charging**: Li⁺ leaves the cathode, travels through the electrolyte, and intercalates into the graphite anode. Electrons flow the opposite way through the charger.
- **Discharging**: the reverse — Li⁺ returns to the cathode, pushing electrons through your device.

The "rocking chair" name captures that the host lattices are preserved; only guests (Li⁺) move. This reversibility is *why* Li-ion is rechargeable hundreds of times. The voltage of the cell is set by the energy difference of Li in the cathode vs the anode.`,
      equations: [
        { label: 'Cathode (discharge, LCO example)', expr: 'Li₁₋ₓCoO₂ + xLi⁺ + xe⁻ → LiCoO₂' },
        { label: 'Anode (discharge)', expr: 'LiₓC₆ → C₆ + xLi⁺ + xe⁻' },
      ],
      flashcards: [
        { front: 'Intercalation', back: 'Reversible insertion of Li⁺ ions into a host lattice (e.g. graphite layers, layered oxides) without destroying its structure.' },
        { front: '"Rocking chair" model', back: 'Li⁺ ions shuttle back and forth between cathode and anode during charge/discharge; the host lattices are preserved.' },
        { front: 'Role of the electrolyte', back: 'Conducts Li⁺ ions between electrodes while blocking electrons, forcing electrons through the external circuit.' },
        { front: 'What moves during charging?', back: 'Li⁺ moves from cathode → anode (graphite) internally; electrons flow the same direction externally via the charger.' },
      ],
      mcq: [
        { q: 'In the "rocking chair" model, what is actually moving back and forth?', options: ['The electrode materials', 'Li⁺ ions between the two electrodes', 'Electrons through the electrolyte', 'The separator membrane'], answer: 1, explain: 'Only Li⁺ ions shuttle between cathode and anode; the host lattices stay intact.' },
        { q: 'During discharge, lithium ions move…', options: ['from anode to cathode', 'from cathode to anode', 'they stay still', 'out of the cell entirely'], answer: 0, explain: 'On discharge, Li⁺ returns from the graphite anode to the cathode, driving electrons through your device.' },
        { q: 'Why must the electrolyte block electrons?', options: ['To prevent overheating', 'To force electrons through the external circuit to do useful work', 'To stop lithium from moving', 'To keep the cell dry'], answer: 1, explain: 'If electrons could cross internally, the cell would short and do no useful work.' },
      ],
      examQA: [
        { q: 'Explain the "rocking chair" model of a lithium-ion battery.', a: 'Li⁺ ions shuttle reversibly between the cathode and anode during charge and discharge, intercalating into each host lattice without destroying it. The lattices act as fixed "chairs" while the lithium "rocks" between them, enabling rechargeability.' },
        { q: 'What is intercalation and why is it important for rechargeability?', a: 'Intercalation is the reversible insertion of Li⁺ into a host structure (graphite, layered oxide) without structural breakdown. Because the host is preserved, the process can repeat for hundreds of cycles, which is what makes the battery rechargeable.' },
      ],
      professorMode: `Anchor on reversibility: "A Li-ion cell is a rocking-chair device — Li⁺ intercalates reversibly between a layered cathode and a graphite anode, while the electrolyte conducts ions but forces electrons through the external circuit. The host lattices are preserved on cycling, which is precisely what enables hundreds of recharge cycles." Then you can pivot to your interest: the electrolyte is where polymer chemistry enters.`,
    },
    {
      id: 'sei-layer',
      module: 'batt-fundamentals',
      level: 2,
      title: 'The Solid Electrolyte Interphase (SEI)',
      titleJp: 'SEI被膜',
      intro: `The SEI is a thin passivating film that forms on the anode surface during the first few charge cycles, when the electrolyte reacts with the highly reducing lithiated graphite. It's a paradox: it *consumes* some lithium and electrolyte (a permanent capacity loss), yet a good SEI is *essential* — it protects the electrolyte from continuous decomposition.`,
      principle: `Because graphite operates at a potential where the organic electrolyte is thermodynamically unstable, the electrolyte reduces on first charge, depositing a layer of decomposition products (Li₂CO₃, LiF, organic lithium salts). Once formed, a good SEI is:
- **Electronically insulating** (stops further electrolyte reduction), but
- **Ionically conducting** (lets Li⁺ pass to the anode).`,
      deepDive: `A stable, uniform SEI is the difference between a battery that lasts years and one that dies fast:
- **Good SEI** → self-limiting, mechanically stable, blocks further side reactions → long cycle life.
- **Bad SEI** → cracks during the volume changes of cycling, exposing fresh surface that consumes more lithium → continuous capacity fade.

The SEI also governs safety: it suppresses lithium plating and dendrite nucleation. Much electrolyte/additive research (e.g. salts like LiBOB, FEC additives) exists purely to engineer a better SEI — a direct link to your salt-selection work in Module 11.`,
      flashcards: [
        { front: 'SEI', back: 'Solid Electrolyte Interphase — a passivating film on the anode formed by electrolyte decomposition during initial cycling.' },
        { front: 'SEI paradox', back: 'It causes an irreversible first-cycle capacity loss, yet is essential because it stops continuous electrolyte decomposition.' },
        { front: 'Ideal SEI properties', back: 'Electronically insulating (blocks further reduction) but ionically conducting (passes Li⁺), and mechanically stable.' },
        { front: 'Why SEI matters for cycle life', back: 'A stable SEI is self-limiting; a cracking SEI exposes fresh surface that keeps consuming Li⁺ → capacity fade.' },
      ],
      mcq: [
        { q: 'The ideal SEI layer should be…', options: ['conductive to both ions and electrons', 'insulating to ions, conductive to electrons', 'ionically conducting but electronically insulating', 'insulating to both'], answer: 2, explain: 'It must pass Li⁺ to the anode while blocking electrons so the electrolyte stops decomposing.' },
        { q: 'Why does SEI formation cause an irreversible capacity loss?', options: ['It heats the cell', 'It permanently consumes some lithium and electrolyte', 'It shorts the electrodes', 'It melts the separator'], answer: 1, explain: 'The lithium and electrolyte locked into the SEI film can no longer cycle.' },
        { q: 'A cracking, unstable SEI leads to…', options: ['higher voltage', 'continuous capacity fade as fresh surface keeps reacting', 'faster charging', 'no effect'], answer: 1, explain: 'Cracks expose fresh anode that consumes more Li⁺ and electrolyte each cycle.' },
      ],
      examQA: [
        { q: 'What is the SEI and why is it both a problem and a necessity?', a: 'The SEI is a passivating film formed on the anode by electrolyte reduction during early cycling. It is a problem because it irreversibly consumes lithium and electrolyte (first-cycle capacity loss), but a necessity because, once formed, it blocks further electrolyte decomposition — being electronically insulating yet ionically conducting.' },
        { q: 'How does SEI quality affect battery cycle life?', a: 'A stable, uniform, mechanically robust SEI is self-limiting and prevents ongoing side reactions, giving long cycle life. An unstable SEI cracks during volume changes, repeatedly exposing fresh surface that consumes lithium and electrolyte, causing continuous capacity fade.' },
      ],
      professorMode: `Frame the SEI as engineered, not accidental: "The SEI forms because graphite sits below the electrolyte's stability window, so the electrolyte reduces and passivates the surface. We want it electronically insulating but ionically conducting and mechanically stable — which is why additives and salts like LiBOB are chosen specifically to tune SEI chemistry. It's a controlled sacrifice of first-cycle capacity for long-term stability and safety."`,
    },
    {
      id: 'battery-safety',
      module: 'batt-fundamentals',
      level: 2,
      title: 'Operational Hazards: Thermal Runaway, Overcharge & Dendrites',
      titleJp: '熱暴走とデンドライト',
      intro: `Lithium batteries pack enormous energy into a small space — which is also why they can fail dangerously. The three classic hazards are **thermal runaway**, **overcharging**, and **lithium dendrite formation**. Understanding them is what motivates much of solid-electrolyte research (your field).`,
      principle: `- **Thermal runaway**: a self-accelerating chain reaction. Heat triggers exothermic decompositions (SEI breakdown → electrolyte reaction → cathode oxygen release), each producing more heat, spiraling to fire/explosion.
- **Overcharging**: pushing voltage too high over-delithiates the cathode (destabilizing it) and plates metallic lithium on the anode — both dangerous and degrading.
- **Lithium dendrites**: needle-like metallic lithium growths that form during plating; they can pierce the separator and short-circuit the cell, triggering thermal runaway.`,
      deepDive: `These hazards are interlinked: overcharge → lithium plating → dendrites → internal short → thermal runaway. The flammable liquid electrolyte is the fuel that makes runaway catastrophic.

This is exactly why **solid polymer electrolytes** are so attractive: a mechanically strong solid electrolyte can physically block dendrite penetration, and a non-flammable polymer removes the fuel. The conductivity–modulus trade-off you studied (block copolymers) is, at its heart, a *safety* engineering problem.`,
      flashcards: [
        { front: 'Thermal runaway', back: 'A self-accelerating exothermic chain reaction: heat → decomposition → more heat → fire/explosion.' },
        { front: 'Lithium dendrite', back: 'Needle-like metallic Li growth during plating that can pierce the separator and short the cell.' },
        { front: 'Overcharging hazard', back: 'Excess voltage over-delithiates the cathode and plates Li metal on the anode — degrading and dangerous.' },
        { front: 'Why solid electrolytes improve safety', back: 'A strong, non-flammable solid electrolyte blocks dendrite penetration and removes the flammable liquid fuel.' },
      ],
      mcq: [
        { q: 'Thermal runaway is best described as…', options: ['a slow, steady discharge', 'a self-accelerating exothermic chain reaction', 'normal charging behavior', 'the SEI forming'], answer: 1, explain: 'Each exothermic step generates heat that triggers the next, spiraling out of control.' },
        { q: 'Lithium dendrites are dangerous because they…', options: ['increase capacity', 'can pierce the separator and cause an internal short', 'improve conductivity', 'form the SEI'], answer: 1, explain: 'A dendrite bridging the electrodes shorts the cell and can trigger thermal runaway.' },
        { q: 'Why are solid polymer electrolytes promising for safety?', options: ['They are cheaper', 'They are non-flammable and can mechanically block dendrites', 'They charge faster', 'They weigh less only'], answer: 1, explain: 'Removing flammable liquid and adding mechanical strength addresses both fuel and dendrite penetration.' },
      ],
      examQA: [
        { q: 'Describe the chain of events that leads from overcharging to thermal runaway.', a: 'Overcharging raises voltage beyond safe limits, over-delithiating the cathode and plating metallic lithium on the anode. The plated lithium grows dendrites that can pierce the separator, causing an internal short circuit. The short generates heat, triggering exothermic decomposition reactions that self-accelerate into thermal runaway — fire or explosion, fueled by the flammable liquid electrolyte.' },
        { q: 'Why does solid-electrolyte research directly address battery safety?', a: 'Solid electrolytes are non-flammable (removing the fuel for runaway) and, if mechanically strong enough, physically block lithium dendrite penetration. This is why the conductivity-versus-modulus trade-off in polymer electrolytes is fundamentally a safety engineering challenge.' },
      ],
      professorMode: `Connect hazard to your research motivation: "The three failure modes — thermal runaway, overcharge, and dendrite-induced shorts — are interlinked, and the flammable liquid electrolyte makes them catastrophic. That's the core case for solid polymer electrolytes: non-flammable, and mechanically capable of blocking dendrites. So when I optimize a block-copolymer electrolyte for both conductivity and modulus, I'm really engineering safety."`,
    },

    // ═══ MODULE 9 — CATHODE MATERIALS ═══════════════════════════════════════
    {
      id: 'cathode-chemistries',
      module: 'cathodes',
      level: 2,
      title: 'Cathode Chemistries: LCO, LMO, LFP, NMC',
      titleJp: '正極材料の比較',
      intro: `The cathode is where most of a Li-ion cell's cost, energy density, and safety character come from. Four families dominate, each a different trade-off between energy, safety, cost, and lifespan. There is no single "best" — the choice depends on the application (phone vs EV vs grid).`,
      principle: `- **LCO (LiCoO₂)**: high energy density, high voltage — but expensive, low thermal stability, short life. Used in phones/laptops.
- **LMO (LiMn₂O₄, spinel)**: cheap, safe, high power, good thermal stability — but lower capacity and prone to Mn dissolution.
- **LFP (LiFePO₄, olivine)**: very safe, long life, cheap, cobalt-free — but lower energy density and voltage. Booming for EVs/grid.
- **NMC (LiNiₓMnᵧCoᵤO₂)**: balanced — high energy, decent life, tunable by composition. The dominant EV chemistry.`,
      deepDive: `The structure dictates behavior:
- **Layered** (LCO, NMC): high capacity, 2D Li diffusion.
- **Spinel** (LMO): 3D Li diffusion, high power, but Jahn-Teller-prone.
- **Olivine** (LFP): very stable P–O covalent framework (no oxygen release → safe), but 1D diffusion limits rate.

LFP's strong phosphate bonds are why it doesn't release oxygen on abuse — its core safety advantage. NMC's tunability (vary Ni:Mn:Co) is why it became the EV workhorse, and sets up the high-nickel story in the next concept.`,
      flashcards: [
        { front: 'LCO (LiCoO₂)', back: 'High energy density, high voltage; but costly, thermally unstable, short life. Used in consumer electronics.' },
        { front: 'LMO (LiMn₂O₄)', back: 'Spinel; cheap, safe, high power, thermally stable; but lower capacity and Mn dissolution issues.' },
        { front: 'LFP (LiFePO₄)', back: 'Olivine; very safe, long life, cheap, cobalt-free; lower energy density/voltage. Strong P–O bonds → no O₂ release.' },
        { front: 'NMC', back: 'Layered Li(Ni,Mn,Co)O₂; balanced high energy, good life, tunable composition. Dominant EV cathode.' },
        { front: 'Why LFP is so safe', back: 'The covalent phosphate (P–O) framework resists oxygen release during abuse, avoiding the exothermic O₂-driven reactions.' },
      ],
      mcq: [
        { q: 'Which cathode is cobalt-free and prized for safety and long life?', options: ['LCO', 'LFP', 'NMC', 'NCA'], answer: 1, explain: 'LiFePO₄ contains no cobalt, and its phosphate framework gives excellent thermal stability and cycle life.' },
        { q: 'Why does LFP have a strong safety advantage?', options: ['It has the highest voltage', 'Its P–O covalent bonds resist oxygen release on abuse', 'It contains cobalt', 'It has 3D diffusion'], answer: 1, explain: 'The strong phosphate bonds prevent the oxygen release that drives thermal runaway in oxide cathodes.' },
        { q: 'Which cathode family is the dominant choice for EVs due to balanced, tunable properties?', options: ['LCO', 'LMO', 'NMC', 'LFP'], answer: 2, explain: 'NMC balances energy, life, and cost, and its Ni:Mn:Co ratio can be tuned for the target application.' },
      ],
      examQA: [
        { q: 'Compare LCO and LFP across energy density, safety, cost, and typical application.', a: 'LCO has high energy density and voltage but is expensive, thermally unstable, and short-lived — used in phones/laptops. LFP has lower energy density and voltage but is very safe (P–O framework resists oxygen release), long-lasting, cheap, and cobalt-free — used in EVs and grid storage.' },
        { q: 'How does crystal structure relate to cathode performance for layered, spinel, and olivine types?', a: 'Layered oxides (LCO, NMC) give high capacity with 2D Li diffusion. Spinel (LMO) offers 3D diffusion and high power but is Jahn-Teller-prone. Olivine (LFP) has a very stable covalent framework (1D diffusion) — limiting rate but providing excellent safety and stability.' },
      ],
      professorMode: `Resist naming a single "best" cathode — show you think in trade-offs: "Cathode choice is application-driven. LCO maximizes energy for electronics; LFP maximizes safety, life, and cost for EVs and grid; NMC balances everything and is tunable for EVs. The structure explains it — layered for capacity, spinel for power, olivine for stability. LFP's phosphate bonds resisting oxygen release is the textbook example of structure dictating safety."`,
    },
    {
      id: 'high-nickel-nmc',
      module: 'cathodes',
      level: 3,
      title: 'The Shift to High-Nickel, Low-Cobalt NMC',
      titleJp: 'ハイニッケル化と脱コバルト',
      intro: `Within NMC, the industry is racing to *increase nickel* and *decrease cobalt* — from NMC-111 (equal parts) toward NMC-811 (80% Ni, 10% Mn, 10% Co) and beyond. This is driven by two forces at once: more energy density, and escaping cobalt's cost and ethics.`,
      principle: `Each metal plays a role:
- **Nickel (Ni)**: the main redox-active, capacity-providing element. More Ni → more energy density.
- **Cobalt (Co)**: stabilizes the layered structure and improves rate, but is expensive and ethically fraught.
- **Manganese (Mn)**: cheap, provides structural stability, electrochemically less active.

So raising Ni boosts energy and cuts cobalt — but at a cost in stability.`,
      deepDive: `Why cobalt is being designed out:
- **Cost**: cobalt is one of the most expensive battery raw materials and price-volatile.
- **Ethics**: much of the world's cobalt is mined in the DRC under conditions linked to child labor and unsafe artisanal mining — a serious supply-chain and reputational concern.

The catch — high-nickel cathodes are **less stable**: more reactive Ni⁴⁺ at the surface, more parasitic reactions with the electrolyte, cation mixing, microcracking, and faster capacity fade. So high-Ni NMC research leans heavily on surface coatings, single-crystal particles, and electrolyte additives to compensate. This is an active frontier where electrolyte engineering (your area) directly enables higher-Ni cathodes.`,
      flashcards: [
        { front: 'NMC-811', back: 'A high-nickel NMC cathode: 80% Ni, 10% Mn, 10% Co — high energy density with minimal cobalt.' },
        { front: 'Role of nickel in NMC', back: 'The main redox-active element providing capacity; more Ni → higher energy density (but lower stability).' },
        { front: 'Role of cobalt in NMC', back: 'Stabilizes the layered structure and improves rate — but expensive and ethically problematic.' },
        { front: 'Why reduce cobalt?', back: 'High cost/price-volatility and ethical concerns (DRC mining, child labor). Also frees energy-density gains via more Ni.' },
        { front: 'Downside of high-nickel', back: 'Reduced structural/thermal stability: reactive Ni⁴⁺, surface side-reactions, cation mixing, microcracking, faster fade.' },
      ],
      mcq: [
        { q: 'In NMC, which element primarily provides capacity/energy density?', options: ['Manganese', 'Cobalt', 'Nickel', 'Oxygen'], answer: 2, explain: 'Nickel is the main redox-active element, so increasing Ni increases energy density.' },
        { q: 'A main motivation for reducing cobalt content is…', options: ['it improves energy density directly', 'high cost and ethical/supply-chain concerns', 'it makes cells heavier', 'it lowers voltage'], answer: 1, explain: 'Cobalt is expensive and largely sourced from the DRC under ethically problematic conditions.' },
        { q: 'A key drawback of high-nickel NMC is…', options: ['lower energy density', 'reduced structural and thermal stability', 'higher cobalt content', 'no rate capability'], answer: 1, explain: 'More reactive Ni⁴⁺ drives side reactions, cation mixing, and microcracking, reducing stability.' },
      ],
      examQA: [
        { q: 'Why is the battery industry shifting toward high-nickel, low-cobalt NMC, and what is the trade-off?', a: 'Raising nickel increases energy density (Ni is the main redox-active element) while reducing cobalt cuts cost and avoids the ethical/supply-chain problems of cobalt mining (largely DRC, linked to child labor). The trade-off is stability: high-Ni cathodes have more reactive Ni⁴⁺, more electrolyte side reactions, cation mixing, and microcracking, leading to faster capacity fade — requiring coatings, single-crystal designs, and electrolyte additives.' },
        { q: 'What roles do Ni, Mn, and Co play in NMC cathodes?', a: 'Nickel provides capacity (redox-active, energy density); cobalt stabilizes the layered structure and improves rate but is costly/ethically fraught; manganese is cheap and gives structural stability while being largely electrochemically inactive.' },
      ],
      professorMode: `Show you grasp the cross-pressures: "High-Ni, low-Co NMC is driven by two simultaneous goals — more energy density from nickel, and escaping cobalt's cost and DRC supply-chain ethics. But high-Ni sacrifices stability through reactive surface Ni⁴⁺ and microcracking, so it's enabled by surface coatings and tailored electrolytes. That's precisely where electrolyte and interphase engineering — my interest — becomes the enabler for next-generation cathodes."`,
    },
    {
      id: 'cathode-degradation',
      module: 'cathodes',
      level: 3,
      title: 'Degradation: Jahn-Teller Distortion & Capacity Fade',
      titleJp: '劣化機構とヤーン・テラー歪み',
      intro: `Batteries don't fail all at once — they fade. Understanding *why* cathodes degrade lets you design around it. Two key mechanisms: **Jahn-Teller distortion** (especially in manganese spinels) and general **capacity fade** from structural and interfacial damage.`,
      principle: `**Jahn-Teller distortion**: when Mn³⁺ (a d⁴ ion) forms, its asymmetric electron configuration distorts the octahedral coordination, elongating the lattice. In LMO spinel during deep discharge, Mn³⁺ accumulates, the distortion stresses the structure, and the lattice can transform/collapse — causing capacity loss.

**Capacity fade** more broadly: loss of cyclable lithium and active material over time.`,
      deepDive: `Mechanisms of capacity fade:
- **Structural**: phase transitions, cation mixing (Ni²⁺ migrating into Li sites in high-Ni layered oxides), microcracking from repeated volume change.
- **Interfacial**: cathode-electrolyte side reactions, surface reconstruction, transition-metal dissolution (e.g. Mn²⁺ from disproportionation of Mn³⁺ → Mn²⁺ + Mn⁴⁺), which then poisons the anode SEI.
- **Loss of lithium inventory**: Li locked into growing SEI or trapped in dead material.

Jahn-Teller-driven Mn dissolution is the classic LMO weakness; doping (e.g. with Al) and coatings suppress it. These degradation pathways are why electrolyte/additive design (controlling interfaces) is so central.`,
      flashcards: [
        { front: 'Jahn-Teller distortion', back: 'Geometric distortion of an octahedral complex (e.g. Mn³⁺, d⁴) that elongates bonds to lower energy — stresses spinel lattices.' },
        { front: 'Why Mn³⁺ harms LMO', back: 'Accumulating Mn³⁺ drives Jahn-Teller distortion and disproportionation (2Mn³⁺ → Mn²⁺ + Mn⁴⁺); Mn²⁺ dissolves and poisons the anode.' },
        { front: 'Capacity fade', back: 'Gradual loss of usable capacity from structural damage, interfacial side reactions, and loss of cyclable lithium.' },
        { front: 'Cation mixing', back: 'Transition-metal ions (e.g. Ni²⁺) migrating into lithium sites, blocking Li diffusion — a fade mechanism in high-Ni layered oxides.' },
      ],
      mcq: [
        { q: 'Jahn-Teller distortion in LMO is associated with which ion?', options: ['Mn⁴⁺', 'Mn³⁺', 'Li⁺', 'Co³⁺'], answer: 1, explain: 'Mn³⁺ (d⁴) has the asymmetric electron configuration that drives the distortion.' },
        { q: 'Manganese dissolution from LMO degrades the cell mainly by…', options: ['increasing voltage', 'poisoning the anode SEI and losing active material', 'improving conductivity', 'forming dendrites directly'], answer: 1, explain: 'Dissolved Mn²⁺ migrates to the anode and disrupts the SEI, accelerating fade.' },
        { q: 'Cation mixing causes capacity fade by…', options: ['adding lithium', 'transition metals occupying Li sites and blocking Li diffusion', 'cooling the cell', 'thickening the separator'], answer: 1, explain: 'When TM ions sit in lithium sites, Li⁺ pathways are blocked, reducing usable capacity.' },
      ],
      examQA: [
        { q: 'Explain Jahn-Teller distortion and how it degrades manganese spinel cathodes.', a: 'Jahn-Teller distortion occurs when Mn³⁺ (a d⁴ ion) forms, whose asymmetric electron configuration distorts the octahedral coordination and elongates the lattice. In LMO during deep discharge, accumulating Mn³⁺ stresses and can transform the spinel structure. Mn³⁺ also disproportionates (2Mn³⁺ → Mn²⁺ + Mn⁴⁺); soluble Mn²⁺ dissolves into the electrolyte and poisons the anode SEI — together causing capacity fade.' },
        { q: 'List the main mechanisms of cathode capacity fade.', a: 'Structural (phase transitions, cation mixing, microcracking from volume change), interfacial (cathode-electrolyte side reactions, surface reconstruction, transition-metal dissolution), and loss of lithium inventory (Li consumed in SEI growth or trapped in dead material).' },
      ],
      professorMode: `Demonstrate mechanistic depth: "Degradation is multi-pathway. In LMO specifically, Mn³⁺ triggers Jahn-Teller distortion and disproportionates to soluble Mn²⁺, which poisons the anode SEI. More generally, fade comes from cation mixing, microcracking, interfacial side reactions, and lithium-inventory loss. Crucially, most of these are interfacial — which is the argument for engineering the electrolyte and coatings to stabilize the cathode surface."`,
    },

    // ═══ MODULE 10 — POLYMER ELECTROLYTES FOR BATTERIES ═════════════════════
    {
      id: 'liquid-to-solid',
      module: 'batt-electrolytes',
      level: 2,
      title: 'From Liquid Electrolytes to SPE & GPE',
      titleJp: '液体から固体電解質へ',
      intro: `Conventional Li-ion cells use a **liquid electrolyte** (lithium salt dissolved in organic carbonates). It conducts ions superbly — but it's **flammable** and can **leak**, the root of most safety incidents. The response is a move toward **Solid Polymer Electrolytes (SPEs)** and the in-between **Gel Polymer Electrolytes (GPEs)**.`,
      principle: `- **Liquid electrolyte**: highest conductivity (~10⁻² S/cm), but flammable, volatile, leaks, and allows dendrites.
- **SPE (solid polymer electrolyte)**: salt dissolved in a solid polymer (e.g. PEO). Non-flammable, no leakage, flexible, blocks dendrites — but low room-temperature conductivity.
- **GPE (gel polymer electrolyte)**: a polymer matrix swollen with a liquid electrolyte. A compromise — much higher conductivity than SPE, safer and leak-resistant compared to pure liquid.`,
      deepDive: `Think of it as a spectrum of conductivity vs safety:

liquid (high σ, low safety) → GPE (medium σ, medium safety) → SPE (low σ, high safety).

GPEs are the pragmatic near-term technology (already in some commercial pouch cells): the polymer immobilizes the liquid, reducing leakage and flammability while keeping usable conductivity. SPEs are the long-term goal — fully solid, safest, dendrite-blocking — once the conductivity problem (your research) is solved. This directly extends the Module 7 "Solid Polymer Electrolytes" concept.`,
      flashcards: [
        { front: 'Why move away from liquid electrolytes?', back: 'They are flammable, volatile, can leak, and allow dendrite growth — the main safety liabilities of Li-ion cells.' },
        { front: 'SPE (Solid Polymer Electrolyte)', back: 'Lithium salt in a solid polymer (e.g. PEO). Non-flammable, leak-free, dendrite-blocking; but low room-temp conductivity.' },
        { front: 'GPE (Gel Polymer Electrolyte)', back: 'A polymer matrix swollen with liquid electrolyte — a compromise: higher conductivity than SPE, safer than pure liquid.' },
        { front: 'Conductivity–safety spectrum', back: 'Liquid (high σ, low safety) → GPE (medium) → SPE (low σ, high safety).' },
      ],
      mcq: [
        { q: 'The primary safety problem with conventional liquid electrolytes is that they are…', options: ['too viscous', 'flammable and prone to leakage', 'too conductive', 'solid'], answer: 1, explain: 'Flammability and leakage of the organic carbonate solvents drive most safety incidents.' },
        { q: 'A gel polymer electrolyte (GPE) is best described as…', options: ['a pure dry solid polymer', 'a polymer matrix swollen with liquid electrolyte', 'a liquid with no polymer', 'a ceramic'], answer: 1, explain: 'GPEs trap a liquid electrolyte in a polymer matrix — a compromise between SPE and liquid.' },
        { q: 'Compared to liquids, the main weakness of solid polymer electrolytes (SPEs) is…', options: ['flammability', 'low room-temperature ionic conductivity', 'leakage', 'high cost only'], answer: 1, explain: 'SPEs are safe but their room-temperature conductivity is much lower than liquids — the key challenge.' },
      ],
      examQA: [
        { q: 'What are the limitations of liquid electrolytes, and how do SPEs and GPEs address them?', a: 'Liquid electrolytes are flammable, volatile, can leak, and permit dendrite growth. SPEs replace the liquid with a solid polymer — non-flammable, leak-free, and dendrite-blocking — but suffer low room-temperature conductivity. GPEs are a compromise: a polymer matrix swollen with liquid electrolyte, giving much higher conductivity than SPEs while being safer and more leak-resistant than pure liquids.' },
        { q: 'Place liquid, GPE, and SPE on the conductivity–safety spectrum.', a: 'Liquid = highest conductivity but lowest safety; GPE = intermediate conductivity and safety; SPE = lowest (room-temp) conductivity but highest safety. GPEs are the pragmatic near-term option; SPEs are the long-term goal once conductivity is solved.' },
      ],
      professorMode: `Present it as an engineering spectrum, not a binary: "Liquid electrolytes win on conductivity but lose on safety — flammable, leaky, dendrite-permeable. SPEs invert that, and GPEs sit in between by immobilizing a liquid in a polymer matrix. GPEs are the realistic near-term step already in some commercial cells, while SPEs are the endgame, gated by the room-temperature conductivity problem I want to work on."`,
    },
    {
      id: 'peo-ion-transport',
      module: 'batt-electrolytes',
      level: 3,
      title: 'PEO Matrices & the Ion-Hopping Mechanism',
      titleJp: 'PEOとイオン伝導機構',
      intro: `Polyethylene oxide (**PEO**) is *the* benchmark polymer for solid electrolytes. Its ether oxygens (–CH₂–CH₂–O–) coordinate Li⁺ ions, and the ions move by "hopping" between these coordination sites — but only when the polymer chains are mobile. This concept is the mechanistic heart of your research area.`,
      principle: `Li⁺ transport in PEO works like this:
1. Ether oxygens coordinate Li⁺ (typically ~5–6 oxygens wrap around each ion).
2. **Segmental motion** of the polymer chains constantly makes and breaks these coordinations.
3. The Li⁺ "hops" from one coordination site to the next, riding the local chain wiggling.

Critically, this only happens in the **amorphous phase** above Tg — crystalline PEO is too ordered/rigid to allow hopping.`,
      deepDive: `The amorphous-phase requirement is the central tension:
- PEO readily **crystallizes** at room temperature, and crystalline domains are essentially non-conducting (chains can't wiggle).
- So PEO conducts well only above its melting point (~60 °C), which is impractical.

**Goal: maximize the amorphous fraction at room temperature.** Strategies: add plasticizers, blend or copolymerize (block copolymers), add ceramic fillers (next module), or cross-link to disrupt crystallization. Because hopping is coupled to segmental motion, conductivity follows **VTF** behavior (tied to Tg), not simple Arrhenius. This is exactly why lowering Tg and crystallinity is the whole game.`,
      equations: [
        { label: 'VTF (segmental-motion-coupled conduction)', expr: 'σ = σ₀ exp(−B / (T − T₀))' },
      ],
      flashcards: [
        { front: 'PEO', back: 'Polyethylene oxide — the benchmark solid-electrolyte polymer; ether oxygens coordinate and transport Li⁺.' },
        { front: 'Ion-hopping mechanism', back: 'Li⁺ moves by hopping between ether-oxygen coordination sites, driven by polymer segmental motion.' },
        { front: 'Why the amorphous phase matters', back: 'Only mobile amorphous chains (above Tg) allow segmental motion and ion hopping; crystalline PEO is non-conducting.' },
        { front: 'PEO\'s core problem', back: 'It crystallizes at room temperature, so it only conducts well above ~60 °C — impractical without suppressing crystallinity.' },
        { front: 'VTF vs Arrhenius', back: 'PEO conductivity follows VTF (coupled to Tg/free volume) because transport depends on segmental motion, not a fixed barrier.' },
      ],
      mcq: [
        { q: 'In PEO, Li⁺ ions are coordinated and transported by…', options: ['the carbon backbone', 'the ether oxygen atoms', 'hydrogen atoms', 'the lithium salt anion'], answer: 1, explain: 'The lone pairs on ether oxygens coordinate Li⁺, and ions hop between these sites.' },
        { q: 'Ion conduction in PEO requires…', options: ['crystalline, ordered regions', 'mobile amorphous chains above Tg', 'completely frozen chains', 'no lithium salt'], answer: 1, explain: 'Segmental motion in the amorphous phase makes/breaks coordinations to enable hopping.' },
        { q: 'Why does pure PEO conduct poorly at room temperature?', options: ['It has no oxygen', 'It crystallizes, immobilizing chains', 'It is too amorphous', 'It is flammable'], answer: 1, explain: 'Room-temperature crystallization locks chains in place, preventing segmental motion.' },
      ],
      examQA: [
        { q: 'Describe the ion-hopping mechanism of Li⁺ transport in PEO and why the amorphous phase is essential.', a: 'Ether oxygens in PEO coordinate Li⁺ ions (about 5–6 oxygens per ion). Segmental motion of the polymer chains continuously forms and breaks these coordinations, allowing Li⁺ to hop from one site to the next. This requires the chains to be mobile, which only occurs in the amorphous phase above Tg — crystalline PEO is too ordered to permit segmental motion, so it is essentially non-conducting.' },
        { q: 'Why does PEO conductivity follow VTF rather than Arrhenius behavior, and what does this imply for design?', a: 'Because transport is coupled to polymer segmental motion (free volume) rather than a fixed activation barrier, conductivity follows the VTF equation tied to Tg. The design implication is to lower Tg and suppress crystallinity (plasticizers, block copolymers, fillers, cross-linking) to maximize the conducting amorphous fraction at room temperature.' },
      ],
      professorMode: `This is your core mechanism — own it: "In PEO, ether oxygens coordinate Li⁺, and ions hop between coordination sites driven by chain segmental motion. That coupling means conduction only occurs in the amorphous phase above Tg, and follows VTF, not Arrhenius. Since PEO crystallizes near room temperature, the entire research problem reduces to maximizing the room-temperature amorphous fraction — via plasticizers, block copolymers, ceramic fillers, or cross-linking."`,
    },
    {
      id: 'gpe-synthesis',
      module: 'batt-electrolytes',
      level: 2,
      title: 'GPE Synthesis: Physical vs Chemical',
      titleJp: 'ゲル電解質の合成法',
      intro: `Gel polymer electrolytes can be made two fundamentally different ways, distinguished by *how the network holds together*: **physical gelation** (reversible physical interactions) versus **chemical gelation** (permanent covalent cross-links). The choice affects stability, processing, and performance.`,
      principle: `- **Physical GPE**: the polymer network is held by reversible physical interactions — chain entanglements, crystallites, hydrogen bonding, or van der Waals forces. Formed by dissolving polymer + salt + solvent, then casting/cooling so it gels. **Thermoreversible** (can re-melt).
- **Chemical GPE**: the network is built by **covalent cross-linking** (e.g. polymerizing monomers/crosslinkers in situ, often by heat or UV). Forms a permanent, **thermoset** network that traps the liquid electrolyte.`,
      deepDive: `Trade-offs:
- **Physical** — easy, solvent-castable, recyclable/reprocessable, but mechanically weaker and can lose integrity at higher temperature (the physical junctions melt/loosen) or leak solvent over time.
- **Chemical** — mechanically robust, thermally stable, better solvent retention and dimensional stability, but irreversible (can't reprocess) and requires controlled cross-linking (curing) chemistry.

This maps directly onto your Module 3 thermoplastic-vs-thermoset distinction: physical GPE ≈ thermoplastic-like (reversible), chemical GPE ≈ thermoset (cross-linked network). Recognizing that connection is exactly the kind of structure–property reasoning professors want.`,
      flashcards: [
        { front: 'Physical GPE', back: 'Network held by reversible physical interactions (entanglements, crystallites, H-bonds); thermoreversible, reprocessable, weaker.' },
        { front: 'Chemical GPE', back: 'Network built by covalent cross-linking (in-situ polymerization/curing); permanent thermoset, robust, better solvent retention, irreversible.' },
        { front: 'Physical vs chemical — key difference', back: 'Physical = reversible non-covalent junctions; chemical = permanent covalent cross-links.' },
        { front: 'GPE analogy to Module 3', back: 'Physical GPE ≈ thermoplastic (reversible); chemical GPE ≈ thermoset (cross-linked network).' },
      ],
      mcq: [
        { q: 'A chemically cross-linked GPE is best described as a…', options: ['thermoplastic that re-melts', 'permanent thermoset network', 'pure liquid', 'crystalline solid'], answer: 1, explain: 'Covalent cross-links form an irreversible thermoset that traps the liquid electrolyte.' },
        { q: 'Which property is characteristic of a physical (not chemical) GPE?', options: ['irreversible covalent network', 'thermoreversibility / reprocessability', 'highest mechanical strength', 'requires UV curing'], answer: 1, explain: 'Physical gels rely on reversible interactions, so they can re-melt and be reprocessed.' },
        { q: 'A key advantage of chemical GPEs over physical GPEs is…', options: ['easier reprocessing', 'better mechanical and thermal/dimensional stability', 'lower cost always', 'no need for any polymer'], answer: 1, explain: 'Covalent networks are more robust and retain solvent and shape better at temperature.' },
      ],
      examQA: [
        { q: 'Differentiate the physical and chemical synthesis of gel polymer electrolytes.', a: 'Physical GPEs form via reversible physical interactions (chain entanglements, crystallites, hydrogen bonding) — typically by dissolving polymer, salt, and solvent then casting/cooling to gel; they are thermoreversible and reprocessable but mechanically weaker. Chemical GPEs form via covalent cross-linking (in-situ polymerization/curing by heat or UV), giving a permanent thermoset network that is mechanically robust and retains solvent well but is irreversible and cannot be reprocessed.' },
        { q: 'How does the physical-vs-chemical GPE distinction relate to thermoplastics and thermosets?', a: 'Physical GPEs behave like thermoplastics — held by reversible interactions, so they can re-melt/reprocess. Chemical GPEs behave like thermosets — covalently cross-linked networks that are permanent and do not melt, offering greater stability at the cost of reprocessability.' },
      ],
      professorMode: `Tie it back to fundamentals: "GPE synthesis splits on how the network forms. Physical gelation uses reversible junctions — entanglements, crystallites, hydrogen bonds — so it's thermoreversible, essentially a thermoplastic gel. Chemical gelation uses covalent cross-linking for a permanent thermoset network with superior mechanical and solvent-retention stability, at the cost of reprocessability. It's the thermoplastic-versus-thermoset trade-off applied to electrolytes."`,
    },

    // ═══ MODULE 11 — ADVANCED INNOVATIONS ═══════════════════════════════════
    {
      id: 'inpc-llzo',
      module: 'batt-advanced',
      level: 3,
      title: 'INPC Composite Electrolytes & LLZO Fillers',
      titleJp: 'INPC複合電解質とLLZO',
      intro: `One of the most promising routes to a practical solid electrolyte is the **composite** approach: combine an organic polymer with an inorganic ceramic. **Interpenetrating Network PolyCarbonate (INPC)** composites with **LLZO** garnet filler are a leading example — marrying the flexibility of polymers with the conductivity and strength of ceramics.`,
      principle: `- **Polycarbonate matrix**: polycarbonate-based electrolytes have a high dielectric constant (good salt dissociation) and a wide electrochemical window. Built as an **interpenetrating network (IPN)** — two cross-linked networks interlaced — for mechanical robustness plus ion-conducting pathways.
- **LLZO (Li₇La₃Zr₂O₁₂)**: a garnet-type ceramic with high intrinsic Li⁺ conductivity and high modulus. Added as an **inorganic filler**.`,
      deepDive: `Why composites beat either component alone:
- **Ceramic fillers (LLZO)** do three things: (1) provide fast ion-conduction pathways, (2) disrupt polymer crystallization (raising the conducting amorphous fraction), and (3) add mechanical strength to block dendrites.
- **The polymer** provides flexibility, processability, and good interfacial contact with electrodes (ceramics alone are brittle with poor contact).
- The **interpenetrating network** architecture decouples mechanical strength from ion transport — similar in spirit to the block-copolymer strategy, achieving both at once.

The remaining challenge is the **polymer–ceramic interface**: Li⁺ must cross between phases, and a poorly designed interface adds resistance. Optimizing filler loading, particle size, and interfacial chemistry is the active research frontier.`,
      flashcards: [
        { front: 'LLZO', back: 'Li₇La₃Zr₂O₁₂ — a garnet-type ceramic electrolyte with high Li⁺ conductivity and high modulus; used as an inorganic filler.' },
        { front: 'INPC', back: 'Interpenetrating Network PolyCarbonate — a composite electrolyte combining interlaced polymer networks with ceramic filler.' },
        { front: 'Three roles of ceramic fillers', back: '(1) fast ion-conduction pathways, (2) disrupt polymer crystallization (more amorphous phase), (3) add mechanical strength to block dendrites.' },
        { front: 'Why a composite beats pure ceramic or pure polymer', back: 'Polymer gives flexibility and good electrode contact; ceramic gives conductivity and strength — together they overcome each other\'s weaknesses.' },
        { front: 'Main challenge in composites', back: 'The polymer–ceramic interface: Li⁺ must cross phases, and poor interfacial design adds resistance.' },
      ],
      mcq: [
        { q: 'LLZO is a…', options: ['flammable liquid solvent', 'garnet-type ceramic with high Li⁺ conductivity', 'lithium salt', 'type of graphite'], answer: 1, explain: 'Li₇La₃Zr₂O₁₂ is a garnet solid electrolyte used as a conductive, high-modulus filler.' },
        { q: 'Adding a ceramic filler like LLZO to a polymer electrolyte does NOT typically…', options: ['provide ion-conduction pathways', 'disrupt polymer crystallization', 'increase flammability', 'add mechanical strength'], answer: 2, explain: 'Ceramics are non-flammable; fillers improve conduction, reduce crystallinity, and add strength.' },
        { q: 'The biggest remaining challenge in polymer–ceramic composite electrolytes is…', options: ['too much flexibility', 'the polymer–ceramic interfacial resistance', 'lack of any conductivity', 'excessive flammability'], answer: 1, explain: 'Li⁺ crossing between the polymer and ceramic phases is the key resistance to optimize.' },
      ],
      examQA: [
        { q: 'How do INPC composite electrolytes with LLZO fillers combine the strengths of polymers and ceramics?', a: 'The interpenetrating polycarbonate network provides flexibility, processability, good electrode contact, salt dissociation (high dielectric constant), and a wide electrochemical window. The LLZO garnet filler provides fast Li⁺ conduction pathways, disrupts polymer crystallization to raise the amorphous (conducting) fraction, and adds mechanical strength to block dendrites. The IPN architecture decouples mechanical strength from ion transport, achieving both simultaneously — overcoming the brittleness/poor-contact of pure ceramics and the low conductivity of pure polymers.' },
        { q: 'What are the three roles of an inorganic ceramic filler in a composite polymer electrolyte?', a: '(1) Provide additional fast ion-conduction pathways, (2) disrupt polymer crystallization to increase the conducting amorphous fraction, and (3) add mechanical strength/modulus to suppress dendrite growth.' },
      ],
      professorMode: `Show systems thinking: "Composite electrolytes like INPC with LLZO are compelling because they decouple the conductivity–strength trade-off. The polycarbonate IPN gives flexibility, electrode contact, and a wide window; the LLZO filler adds conduction pathways, suppresses crystallinity, and provides dendrite-blocking modulus. The frontier is the polymer–ceramic interface — minimizing the resistance Li⁺ faces crossing between phases. That interfacial engineering is exactly where I'd want to contribute."`,
    },
    {
      id: 'lithium-salts',
      module: 'batt-advanced',
      level: 3,
      title: 'Lithium Salts: LiPF₆, LiTFSI, LiBOB, LiFSI',
      titleJp: 'リチウム塩の選択',
      intro: `The lithium salt is the source of the mobile Li⁺ ions — and the choice of *anion* dramatically affects conductivity, electrochemical stability, SEI quality, and safety. Four salts dominate research and industry, each a different compromise.`,
      principle: `- **LiPF₆**: the industry standard for liquid cells. Great conductivity and balanced properties — but thermally unstable and hydrolyzes with trace water to form corrosive HF.
- **LiTFSI** (bis(trifluoromethanesulfonyl)imide): highly stable, large delocalized anion → great salt dissociation and conductivity, especially in polymers; but can corrode the aluminum current collector at high potential.
- **LiBOB** (bis(oxalato)borate): forms an excellent, stable SEI; good for high-temperature and cycle life — but limited solubility and lower conductivity.
- **LiFSI** (bis(fluorosulfonyl)imide): high conductivity, good thermal stability, forms a robust SEI — increasingly favored; but also has aluminum-corrosion concerns.`,
      deepDive: `The anion is the lever:
- **Dissociation/conductivity**: large, charge-delocalized anions (TFSI⁻, FSI⁻) dissociate easily from Li⁺, freeing more mobile ions → higher conductivity. This makes TFSI/FSI especially good in polymer electrolytes.
- **SEI formation**: LiBOB's borate decomposes into a particularly stable, protective SEI — sometimes added in small amounts purely as an additive.
- **Stability window**: governs the highest voltage cathode you can use.
- **Safety/corrosion**: LiPF₆ → HF risk; TFSI/FSI → Al corrosion at high V.

In practice, **salt blends** and additives are common — e.g. LiFSI for conductivity plus a LiBOB additive for SEI quality. Salt selection is a tuning knob that interacts with everything else (cathode, electrolyte, interface) you've studied.`,
      flashcards: [
        { front: 'LiPF₆', back: 'Industry-standard salt: good balanced conductivity, but thermally unstable and hydrolyzes to corrosive HF with trace water.' },
        { front: 'LiTFSI', back: 'Large delocalized imide anion → excellent dissociation/conductivity (great in polymers) and high stability; but corrodes Al at high potential.' },
        { front: 'LiBOB', back: 'Borate salt that forms an excellent, stable SEI (good high-T and cycle life); limited solubility and lower conductivity — often used as an additive.' },
        { front: 'LiFSI', back: 'High conductivity, good thermal stability, robust SEI; increasingly favored, but has Al-corrosion concerns.' },
        { front: 'Why anion size/delocalization matters', back: 'Larger, charge-delocalized anions (TFSI⁻, FSI⁻) dissociate from Li⁺ more easily, freeing more mobile ions → higher conductivity.' },
      ],
      mcq: [
        { q: 'Which salt is the conventional liquid-cell standard but generates corrosive HF with trace water?', options: ['LiTFSI', 'LiBOB', 'LiPF₆', 'LiFSI'], answer: 2, explain: 'LiPF₆ hydrolyzes with moisture to form HF, a key stability liability.' },
        { q: 'Why do TFSI⁻ and FSI⁻ anions give high conductivity, especially in polymers?', options: ['they are very small', 'their charge delocalization promotes salt dissociation, freeing more Li⁺', 'they are solid', 'they block lithium'], answer: 1, explain: 'Delocalized charge weakens the Li⁺–anion pairing, releasing more mobile ions.' },
        { q: 'LiBOB is especially valued for…', options: ['the highest conductivity', 'forming an excellent, stable SEI', 'being the cheapest', 'never corroding aluminum'], answer: 1, explain: 'Its borate decomposition products build a particularly protective SEI, often used as an additive.' },
      ],
      examQA: [
        { q: 'Compare LiPF₆, LiTFSI, LiBOB, and LiFSI in terms of conductivity, stability, and key weaknesses.', a: 'LiPF₆: balanced conductivity and the liquid-cell standard, but thermally unstable and hydrolyzes to corrosive HF. LiTFSI: large delocalized anion giving excellent dissociation/conductivity (great in polymers) and high stability, but corrodes aluminum at high potential. LiBOB: forms an excellent stable SEI with good high-temperature/cycle performance, but has limited solubility and lower conductivity (often an additive). LiFSI: high conductivity, good thermal stability, and a robust SEI — increasingly favored — but also has aluminum-corrosion concerns.' },
        { q: 'How does the choice of anion influence ionic conductivity?', a: 'Large, charge-delocalized anions (e.g. TFSI⁻, FSI⁻) bind Li⁺ weakly, so the salt dissociates more readily and frees more mobile Li⁺ ions, raising conductivity. This is especially beneficial in polymer electrolytes, where salt dissociation is otherwise limited.' },
      ],
      professorMode: `Treat the salt as a multi-objective tuning knob: "The anion controls dissociation, hence conductivity — delocalized TFSI⁻ and FSI⁻ free more Li⁺, which is why they shine in polymers. But each salt trades off: LiPF₆ risks HF, TFSI/FSI risk Al corrosion, and LiBOB sacrifices conductivity for a superb SEI. In practice we blend — e.g. LiFSI for transport with a LiBOB additive for interphase. Salt selection couples to the cathode window and the electrolyte chemistry, so it's never chosen in isolation."`,
    },
  ],

  // Quick-reference glossary for the Terms tab
  glossary: [
    { term: 'Monomer', jp: '単量体', def: 'The small repeating unit that builds a polymer.' },
    { term: 'Degree of polymerization (DP)', jp: '重合度', def: 'Number of repeat units in a chain.' },
    { term: 'Dispersity (Ð)', jp: '分散度', def: 'M𝓌/Mₙ; width of the molecular-weight distribution. 1 = uniform.' },
    { term: 'Tg (glass transition)', jp: 'ガラス転移温度', def: 'Temperature where segmental motion unfreezes; glass→rubber.' },
    { term: 'Tm (melting temperature)', jp: '融点', def: 'Melting of crystalline regions (first-order transition).' },
    { term: 'χ (chi) parameter', jp: '相互作用パラメータ', def: 'Flory–Huggins enthalpic interaction parameter; sets miscibility.' },
    { term: 'Living polymerization', jp: 'リビング重合', def: 'Chain growth without termination; gives narrow Ð and block copolymers.' },
    { term: 'GPC / SEC', jp: 'ゲル浸透クロマトグラフィー', def: 'Separates chains by size to measure MW distribution.' },
    { term: 'Transference number (t₊)', jp: '輸率', def: 'Fraction of ionic current carried by the cation (Li⁺).' },
    { term: 'SPE', jp: '固体高分子電解質', def: 'Solid polymer electrolyte — conducts ions and separates electrodes.' },
    { term: 'VTF behavior', jp: 'VTF式', def: 'Conductivity model coupling ion motion to polymer segmental dynamics.' },
    { term: 'Block copolymer', jp: 'ブロック共重合体', def: 'Two+ chemically distinct blocks joined; microphase-separates into nanostructures.' },
  ],
};

if (typeof module !== 'undefined') module.exports = POLYMER_CONTENT;
