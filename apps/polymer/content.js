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
