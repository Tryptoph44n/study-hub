// History timeline content — 6 eras, ~48 events.
// blurb = short hook (shown by default). detail = long multi-paragraph read
// (opt-in via "Tell me more"); paragraphs are separated by blank lines.
// image = a Wikimedia Commons filename (public domain); app.js builds a
// Special:FilePath URL, with a clean typographic fallback if it fails.

const HISTORY_CONTENT = {

  eras: [
    { id: 'ancient',     order: 1, name: 'The Ancient World',          range: 'before ~500 AD',  blurb: 'Pyramids, empires and the first great cities — where recorded history begins.' },
    { id: 'medieval',    order: 2, name: 'The Medieval World',         range: '~500 – 1500',     blurb: 'Faith, plague and vast empires stitched the continents together.' },
    { id: 'exploration', order: 3, name: 'Exploration & Early Modern', range: '1400s – 1700s',   blurb: 'Ships, printing and new ideas remade the map of the known world.' },
    { id: 'revolutions', order: 4, name: 'The Age of Revolutions',     range: '1700s – 1800s',   blurb: 'People overthrew kings, machines overthrew muscle, and the modern world took shape.' },
    { id: 'modern',      order: 5, name: 'The Modern World',           range: '1900s',           blurb: 'World wars, the atom, and a footprint on the Moon — all within one century.' },
    { id: 'curveball',   order: 6, name: "Wait, That's Real?",         range: 'across all eras',  blurb: 'True stories from history that sound completely made up.' },
  ],

  events: [

    // ─────────── ANCIENT WORLD ───────────
    {
      id: 'giza-pyramids', era: 'ancient', title: 'The Great Pyramids of Giza', date: 'c. 2560 BC',
      blurb: "Built as tombs for Egypt's pharaohs, the Great Pyramid stood as the tallest human-made structure on Earth for nearly 3,800 years. Around 2.3 million limestone blocks were stacked with astonishing precision — without iron tools, wheels or pulleys.",
      detail: `The Great Pyramid was built for the pharaoh Khufu around 2560 BC and originally rose about 146 metres — a record for the tallest structure on Earth that stood for almost four thousand years, until medieval cathedrals finally surpassed it. It contains roughly 2.3 million blocks of limestone and granite, some weighing as much as 80 tonnes, hauled from quarries that were in some cases hundreds of kilometres away and floated down the Nile on barges.

For centuries people assumed such a monument could only have been raised by armies of slaves, but archaeology has overturned that story. Excavations near the pyramid uncovered a whole workers' town, complete with bakeries, breweries, and the tombs of the labourers themselves — buried with honour in the shadow of the king's monument. The evidence points to a skilled, organised and paid workforce of perhaps 20,000 people, rotating in and out over roughly two decades, fed on bread, beer and thousands of cattle.

The precision is what still astonishes engineers. The base is level to within about two centimetres across 230 metres, and the sides are aligned to the cardinal directions with an error of only a fraction of a degree — an accuracy achieved with ropes, water levels, sightings on the stars and sheer human discipline. Originally the whole structure was sheathed in polished white limestone casing stones that would have blazed blindingly in the desert sun; most were later stripped away to build medieval Cairo, which is why the pyramid we see today has its stepped, weathered look.

Alongside the Great Pyramid stand those of Khufu's successors and the enigmatic Great Sphinx. Together they were considered one of the Seven Wonders of the Ancient World — and they are the only wonder still standing, a 4,500-year-old message that a civilisation once organised itself on a scale we can barely imagine.`,
      image: 'All_Gizah_Pyramids.jpg', caption: 'The pyramids of Giza, Egypt.', tags: ['empire', 'architecture'],
    },
    {
      id: 'athens-democracy', era: 'ancient', title: 'Athenian Democracy', date: 'c. 508 BC',
      blurb: "The city-state of Athens invented a radical idea: rule by the people. Ordinary citizens voted directly on laws in a public assembly — the first large-scale democracy, and the root of the word itself (demos = people, kratos = power).",
      detail: `Around 508 BC, after a period of tyranny and aristocratic feuding, an Athenian reformer named Cleisthenes reorganised the city's politics to break the grip of the old noble families. He is often called the "father of democracy," and the system he set in motion was unlike anything before it: not rule by a king or a small elite, but by the demos — the ordinary body of male citizens.

Athenian democracy was direct, not representative. Instead of electing politicians to decide for them, citizens gathered in person — sometimes six thousand or more at a time — on a rocky hillside called the Pnyx, where they debated and voted on war, laws, taxes and foreign policy by a show of hands. Many public offices were not elected at all but filled by lottery, on the striking belief that any citizen was capable of governing and that election tended to favour the rich and famous. Juries could number hundreds of ordinary people, and a peculiar institution called ostracism let the assembly vote to exile any man seen as too dangerous for ten years, his name scratched onto a pottery shard.

It is important to be honest about its limits. "The people" meant free adult male citizens — perhaps only 10 to 20 percent of the population. Women had no political voice, and the whole system rested on the labour of a large enslaved population and excluded foreigners no matter how long they had lived in the city. By modern standards it was narrow and exclusionary.

And yet the idea proved unkillable. The Athenians produced, in the same few generations, the philosophy of Socrates, Plato and Aristotle, the plays still performed today, and the architecture of the Parthenon. Above all they left behind a principle that would echo for 2,500 years and eventually reshape the entire world: that the legitimacy of a government flows not from gods or bloodlines, but from the consent of the people it governs.`,
      image: 'The_Parthenon_in_Athens.jpg', caption: 'The Parthenon on the Athenian Acropolis.', tags: ['politics', 'ideas'],
    },
    {
      id: 'alexander', era: 'ancient', title: 'Alexander the Great', date: '336–323 BC',
      blurb: "In just over a decade, a young Macedonian king conquered from Greece to the edge of India, building one of the largest empires the ancient world had ever seen — and he never lost a battle. He died at 32, and his generals tore the empire apart.",
      detail: `Alexander III of Macedon inherited far more than a throne when his father, King Philip II, was assassinated in 336 BC. Philip had already forged the Macedonians into the most formidable fighting force in the Greek world, built around the terrifying phalanx — tight blocks of infantry bristling with pikes up to six metres long — and the hard-charging Companion cavalry. As a boy, Alexander had been tutored by the philosopher Aristotle, and he carried a copy of Homer's Iliad on campaign, modelling himself on the hero Achilles.

At just twenty, he crossed into Asia and began a campaign of almost unbelievable audacity against the Persian Empire, then the largest the world had known. At Issus and again at Gaugamela he shattered Persian armies many times the size of his own through sheer speed, discipline and personal recklessness — he repeatedly led charges from the front and was wounded again and again. Within a few years he had toppled the Persian king Darius III, seized the fabulous treasuries of Babylon and Persepolis, and been hailed as pharaoh in Egypt, where he founded the greatest of the roughly twenty cities he would name Alexandria after himself.

He did not stop. Driven by a restless hunger the ancient sources call pothos — a yearning for the unknown — he pushed his exhausted army east over the mountains into Central Asia and finally into India, winning a brutal battle against war elephants on the Hydaspes River. Only when his soldiers flatly refused to go further did he reluctantly turn back.

In 323 BC, back in Babylon and planning yet more conquests, Alexander fell suddenly ill and died at just 32 — possibly of fever, possibly poisoned, the truth lost to history. He left no capable heir, and his generals promptly carved the empire into rival kingdoms that fought for generations. But his true legacy was cultural: he had spread Greek language, art and ideas across three continents, blending them with Persian, Egyptian and Indian traditions to create the "Hellenistic" world — a fusion whose influence would still be felt centuries later in the streets of Rome and the libraries of the East.`,
      image: 'Alexander_the_Great_mosaic.jpg', caption: 'Alexander in the Alexander Mosaic, Pompeii.', tags: ['empire', 'war'],
    },
    {
      id: 'roman-empire', era: 'ancient', title: 'The Roman Empire', date: '27 BC – 476 AD',
      blurb: "At its height, Rome ruled around 60 million people across Europe, North Africa and the Middle East, bound by roads, law and a common currency. Its engineering, language and legal ideas still shape the Western world today.",
      detail: `Rome began as a modest city-state and spent centuries as a republic, governed by elected officials and a powerful Senate, before the ambition of generals like Julius Caesar tore that system apart in civil war. Out of the wreckage, Caesar's heir Augustus emerged in 27 BC as the first emperor — careful never to call himself king, but holding absolute power behind a mask of restored tradition. The empire he founded would endure, in one form or another, for five centuries in the west and a further thousand years in the east.

At its peak in the 2nd century AD, the Roman Empire ruled perhaps 60 to 70 million people — around a fifth of all humanity — across an area stretching from rainy Britain to the deserts of Egypt and the banks of the Euphrates. What held such a sprawl together was infrastructure and organisation. Roman engineers built more than 400,000 kilometres of roads, so well-made that some are still walked on today; aqueducts carried fresh water dozens of kilometres into cities on precisely calculated gradients; and vast public works like the Colosseum, which could seat 50,000 spectators for gladiatorial games, showcased both engineering genius and imperial power.

Rome's deeper legacy is in things less visible than stone. Latin evolved into Italian, Spanish, French, Portuguese and Romanian, and seeded much of English vocabulary. Roman law — with concepts like "innocent until proven guilty," legal contracts and the rights of citizens — underpins the legal systems of much of the world. The empire also became the vehicle by which Christianity, once a persecuted sect, spread across Europe and beyond.

The decline was long and complex: political instability, economic strain, plague, the pressure of migrating peoples, and the sheer difficulty of governing so vast a territory. In 476 AD the last western emperor was quietly deposed by a Germanic commander, a date historians use to mark the "fall" of Rome. But the eastern half carried on for another thousand years as the Byzantine Empire, and the idea of Rome — its law, its language, its dream of universal order — never really died at all.`,
      image: 'Colosseum_in_Rome,_Italy_-_April_2007.jpg', caption: 'The Colosseum in Rome.', tags: ['empire', 'architecture'],
    },
    {
      id: 'cleopatra', era: 'ancient', title: 'Cleopatra, Last Pharaoh of Egypt', date: '51–30 BC',
      blurb: "Cleopatra VII was the final ruler of ancient Egypt — a shrewd, multilingual diplomat who allied with (and married) the most powerful men in Rome. Her death marked the end of 3,000 years of pharaohs and Egypt's absorption into the Roman Empire.",
      detail: `Cleopatra VII was not, despite the name, Egyptian by blood: she belonged to the Ptolemaic dynasty, descendants of one of Alexander the Great's generals who had ruled Egypt as Greek-speaking pharaohs for nearly three centuries. What set Cleopatra apart from her ancestors was that she reportedly became the first of her line to actually learn the Egyptian language — one of as many as nine tongues she is said to have spoken. She was, above all, a formidably intelligent and calculating politician in an age of ruthless men.

She came to the throne as a teenager in a snake-pit of palace intrigue, forced by custom to share power with (and marry) her own younger brother. Ousted in a coup, she made one of history's great entrances: smuggled into the palace, according to legend rolled inside a carpet or bedsack, to plead her case directly to Julius Caesar, who had arrived in Egypt pursuing his rivals. She won his support — and his affection — and bore him a son.

After Caesar's assassination she formed an even more famous alliance with Mark Antony, one of the men who inherited Caesar's power. Their partnership was both a genuine romance and a hard-headed political merger: Antony needed Egypt's immense wealth and grain, and Cleopatra needed Roman muscle to keep her kingdom independent. Together they lived in legendary luxury and defied Caesar's heir, Octavian, who skilfully painted them to the Roman public as decadent traitors seduced by an eastern queen.

The reckoning came at the sea battle of Actium in 31 BC, where Octavian's fleet crushed theirs. With his cause lost, Antony took his own life; Cleopatra, refusing to be paraded through Rome as a trophy, followed him — traditionally by pressing an asp, a venomous snake, to her skin, though the true method is uncertain. With her death, Octavian annexed Egypt, ending both the Ptolemaic dynasty and some three thousand years of pharaonic rule. Egypt became a Roman province, and its last independent queen passed into legend as one of history's most enduring symbols of intelligence, ambition and power.`,
      image: 'Cleopatra_and_Caesar_by_Jean-Leon-Gerome.jpg', caption: 'Cleopatra and Caesar, painting by Jean-Léon Gérôme.', tags: ['empire', 'politics'],
    },
    {
      id: 'great-wall', era: 'ancient', title: 'The Great Wall Begins', date: 'from c. 220 BC',
      blurb: "China's first emperor, Qin Shi Huang, linked earlier walls into a single defensive barrier against northern nomads. Over centuries it grew into a system stretching more than 20,000 km — the longest structure ever built by humans.",
      detail: `When Qin Shi Huang unified the warring Chinese states into a single empire in 221 BC, becoming China's first emperor, he faced a persistent threat from the fast-moving nomadic horsemen of the northern steppe. His solution was to connect and extend the defensive walls that rival states had already built into one continuous barrier — the first true "Great Wall." It was an act of staggering forced labour: hundreds of thousands of conscripts, soldiers and convicts were marched north to raise ramparts of rammed earth in harsh, remote terrain, and so many died in the process that the wall gained a grim nickname as the "longest cemetery on Earth," with the dead sometimes buried near where they fell.

That first Qin wall has largely eroded away. The magnificent stone-and-brick fortifications that tourists photograph today were mostly built far later, under the Ming dynasty between the 14th and 17th centuries, after a catastrophic defeat convinced the Ming to invest enormously in fixed defences. The Ming wall was a sophisticated military system: not just a wall but a network of watchtowers, beacon platforms for smoke and fire signals, garrison forts and troop barracks, snaking for thousands of kilometres along mountain ridges.

Measured across all its branches and eras, the entire Great Wall system runs to more than 20,000 kilometres — comfortably the longest structure ever built by human hands. It was never a single unbroken line, and it never perfectly kept invaders out; famously, the Ming dynasty finally fell when a gate was simply opened from the inside during a rebellion.

One thing it definitely is not is visible from space with the naked eye — a popular myth, repeatedly debunked by astronauts, since the wall is long but very narrow and blends into the landscape. Its real significance is as a symbol: of the immense organising power of the Chinese state, of the age-old clash between settled farmers and steppe nomads, and of the sheer human cost that monumental ambition can demand.`,
      image: 'The_Great_Wall_of_China_at_Jinshanling-edit.jpg', caption: 'The Great Wall at Jinshanling.', tags: ['empire', 'architecture'],
    },
    {
      id: 'pompeii', era: 'ancient', title: 'Vesuvius Destroys Pompeii', date: '79 AD',
      blurb: "When Mount Vesuvius erupted, it buried the Roman city of Pompeii under metres of ash in hours. The disaster froze an entire town in time — bakeries, graffiti, even final poses — preserving Roman daily life in extraordinary detail.",
      detail: `On an August or October day in 79 AD, the people of the prosperous Roman town of Pompeii went about ordinary lives in the shadow of a mountain they did not even realise was a volcano. Vesuvius had been quiet for centuries. Then, with almost no warning beyond some earth tremors, it exploded, blasting a column of superheated ash and pumice more than 30 kilometres into the sky. For hours, a rain of stone and ash fell on Pompeii, collapsing roofs and burying the streets.

Some residents fled early; many others sheltered indoors, hoping to wait it out. That was fatal. In the small hours, the towering eruption column collapsed and sent pyroclastic surges racing down the slopes — avalanches of gas and debris travelling at over 100 kilometres per hour and hot enough to kill instantly. The nearby seaside town of Herculaneum was engulfed first, then Pompeii. The city was sealed under metres of ash, and there it stayed, forgotten, for almost 1,700 years.

That burial is exactly why Pompeii is priceless. Where most ancient cities were looted, rebuilt and worn away, Pompeii was frozen in a single moment. Excavators found loaves of bread still in ovens, election slogans and rude jokes painted on walls, shops with their counters and jars intact, and lavish villas with vivid frescoes still glowing on the plaster. It is the most complete portrait of Roman daily life anywhere in existence.

Most hauntingly of all, the ash hardened around the bodies of the dead and then, over centuries, the bodies decayed away, leaving human-shaped voids. In the 19th century an archaeologist realised he could pour liquid plaster into these hollows to cast the victims in their final moments — a mother shielding a child, a chained dog straining against its leash, people huddled together as the surge arrived. Those casts turn a distant catastrophe into something unbearably intimate, and Vesuvius, still active over the modern city of Naples, remains one of the most closely watched and dangerous volcanoes on Earth.`,
      image: 'Karl_Brullov_-_The_Last_Day_of_Pompeii_-_Google_Art_Project.jpg', caption: 'The Last Day of Pompeii, by Karl Bryullov.', tags: ['disaster'],
    },
    {
      id: 'caesar', era: 'ancient', title: 'Caesar Crosses the Rubicon', date: '49 BC',
      blurb: "When Julius Caesar led his army across the Rubicon river into Italy, he broke Roman law and made civil war inevitable — supposedly declaring 'the die is cast.' His rise and dramatic assassination helped end the Roman Republic.",
      detail: `By 49 BC, Julius Caesar was the most successful and popular general in Rome, fresh from nearly a decade of brutal conquest in Gaul (roughly modern France) that had made him fabulously rich and beloved by his battle-hardened legions. That very success terrified his rivals in the Senate, led by his former ally Pompey, who feared Caesar meant to seize absolute power. They ordered him to disband his army and return to Rome as a private citizen — where they intended to prosecute and destroy him.

Roman law strictly forbade a general from leading an army out of his province into Italy itself; the small Rubicon river marked that boundary. To cross it under arms was treason and meant civil war with no way back. Caesar hesitated on the bank, weighing everything — and then crossed, reportedly quoting a line from a Greek play: "let the die be cast." To this day, "crossing the Rubicon" means committing irreversibly to a dangerous course.

The gamble worked. Caesar swept through Italy, chased Pompey to Greece and Egypt, and defeated his enemies across the Mediterranean. Made dictator, he pushed through popular reforms — resettling veterans, relieving debt, and overhauling the calendar into a solar system so accurate that our own calendar still descends from it (the month of July is named for him).

But his growing power and the suspicion that he wanted to make himself king alarmed the old aristocracy. On the Ides of March — 15 March, 44 BC — a group of around sixty senators, including his friend Brutus, surrounded Caesar at a Senate meeting and stabbed him twenty-three times. They believed they were saving the Republic. Instead, his death plunged Rome into a fresh round of civil wars from which his adopted heir Octavian emerged as Augustus, the first emperor. The assassins had tried to rescue the Republic and, tragically for their cause, delivered its final death blow instead.`,
      image: 'Vincenzo_Camuccini_-_La_morte_di_Cesare.jpg', caption: 'The Death of Caesar, by Vincenzo Camuccini.', tags: ['politics', 'war'],
    },

    // ─────────── MEDIEVAL WORLD ───────────
    {
      id: 'rise-of-islam', era: 'medieval', title: 'The Rise of Islam', date: '610–750 AD',
      blurb: "Within roughly a century of the Prophet Muhammad's teachings in Arabia, Arab-Muslim armies and merchants built an empire stretching from Spain to Central Asia — one of the fastest expansions in history, spreading a new faith, language and learning.",
      detail: `In the early 7th century, the Arabian Peninsula was a patchwork of feuding tribes on the fringe of the great Byzantine and Persian empires. Around 610 AD, a merchant named Muhammad in the city of Mecca began preaching a message of strict monotheism — submission to one God, "Allah" — that would become Islam. Facing hostility, he and his followers migrated to Medina in 622, an event (the Hijra) so pivotal that it marks year one of the Islamic calendar. By the time of his death in 632, much of Arabia had united under the new faith.

What happened next was one of the most rapid expansions in world history. Muhammad's successors, the caliphs, led unified Arab armies out of the peninsula and found the two neighbouring superpowers — Byzantium and Sasanian Persia — exhausted by decades of war with each other. Within a single century, Muslim rule stretched from Spain and North Africa in the west, across the Middle East, to the borders of India and China in the east. Persia was absorbed entirely; the Byzantines lost their richest provinces.

Crucially, this was not merely conquest. The new empire became one of history's great bridges between civilisations. Muslim scholars gathered, translated and preserved the philosophy, mathematics, medicine and astronomy of the Greeks, Persians and Indians at a time when much of that learning was being lost in western Europe — then pushed it forward. Cities like Baghdad, Damascus, Cairo and Córdoba grew into dazzling centres of trade, art and scholarship.

Much of that accumulated knowledge — including the "Arabic" numerals we still use, the foundations of algebra, advances in optics and medicine, and the preserved works of Aristotle — would later flow into Europe and help ignite the Renaissance. In just a few generations, a religious movement born among desert tribes had reshaped the map, the faith and the intellectual life of a huge swath of the planet.`,
      image: 'Age_of_Caliphs.png', caption: 'The expansion of the early caliphates.', tags: ['empire', 'religion'],
    },
    {
      id: 'vikings', era: 'medieval', title: 'The Age of the Vikings', date: '793–1066',
      blurb: "Norse seafarers from Scandinavia raided, traded and settled across Europe in shallow, fast longships. They reached Baghdad, founded Dublin and Kyiv, and landed in North America 500 years before Columbus.",
      detail: `The Viking Age is traditionally said to begin in 793 AD with a shocking raid on the wealthy, undefended monastery of Lindisfarne off the English coast. To the monks who recorded it, these seaborne raiders from Scandinavia seemed like a punishment from God, striking without warning and vanishing back to sea. For the next three centuries, the Norse would terrorise, trade with and settle across an astonishing range of the medieval world.

Their secret weapon was the longship — a sleek, shallow-drafted, immensely seaworthy vessel that could cross open ocean yet also row far up rivers to strike deep inland. In these ships the Vikings were not just raiders but some of the greatest explorers and traders of the age. To the east, Swedish "Rus" travelled the rivers of Russia to trade in furs and slaves, reaching the markets of Baghdad and the walls of Constantinople, and giving their name to Russia itself while helping found early states around Kyiv and Novgorod. To the west, Danes and Norwegians raided and then settled England, Ireland (founding Dublin) and northern France, where their descendants became the Normans.

The Vikings were also the first Europeans known to reach the Americas. Around 1000 AD, Leif Erikson sailed from the Norse colony in Greenland to a land he called Vinland — and archaeologists have confirmed a genuine Norse settlement at L'Anse aux Meadows in Newfoundland, Canada, some five centuries before Columbus. The colony did not last, but the achievement is remarkable.

Over time the raiders became settlers, traders and Christians, folding into the kingdoms of medieval Europe. The Viking Age is often said to end in 1066, the year a Norwegian king's invasion of England failed — and, weeks later, the Normans (themselves of Viking descent) conquered England instead. Far from being simple barbarians, the Norse were master shipwrights, long-distance merchants and settlers whose networks briefly stitched together three continents.`,
      image: 'Guests_from_Overseas_(Vasnetsov).jpg', caption: 'Guests from Overseas, by Nicholas Roerich.', tags: ['exploration', 'war'],
    },
    {
      id: 'genghis-khan', era: 'medieval', title: 'Genghis Khan & the Mongol Empire', date: '1206–1368',
      blurb: "From a fractured set of nomadic tribes, Genghis Khan forged the largest contiguous land empire in history — stretching from Korea to Eastern Europe. The Mongols were feared conquerors but also great connectors of trade and ideas.",
      detail: `The man who became Genghis Khan was born Temüjin, around 1162, into the harsh world of the Mongolian steppe — a landscape of feuding nomadic clans where his own father was poisoned and his family left destitute. Through a mix of charisma, ruthlessness and genuine tactical genius, he united the warring Mongol tribes and in 1206 was proclaimed Genghis Khan, "universal ruler."

He then unleashed on the settled civilisations of Asia a military machine unlike anything they had faced. The Mongol army was almost entirely cavalry, mounted on tough steppe horses, capable of covering enormous distances at speed and living off the land. They combined feigned retreats, coordinated manoeuvres directed by signal flags, siege engineers borrowed from conquered peoples, and psychological terror: cities that resisted could be annihilated as a warning to others. Empire after empire — in China, Central Asia and Persia — fell before them.

At its height under Genghis's successors, the Mongol Empire covered around 24 million square kilometres, from Korea to the gates of Eastern Europe — the largest contiguous land empire the world has ever seen, ruling perhaps a quarter of humanity. The human cost of the conquests was immense, with some campaigns killing millions.

Yet the Mongols were more than destroyers. Once the fighting stopped, they imposed a period of relative order across Eurasia sometimes called the Pax Mongolica, making the Silk Road safe enough that merchants, missionaries and travellers — including Marco Polo — could journey from Europe to China. Goods, technologies (such as gunpowder and printing), ideas and, unfortunately, diseases flowed across the continent as never before. The empire eventually fragmented into rival khanates, but its impact on trade, warfare and the connection of East and West was profound — and genetic studies suggest a remarkable number of men across Asia today descend from Genghis's line.`,
      image: 'YuanEmperorAlbumGenghisPortrait.jpg', caption: 'Portrait of Genghis Khan (Yuan-era album).', tags: ['empire', 'war'],
    },
    {
      id: 'black-death', era: 'medieval', title: 'The Black Death', date: '1347–1351',
      blurb: "A plague pandemic swept from Asia into Europe and killed an estimated one-third to one-half of the population in just a few years — perhaps the deadliest disaster in human history. It reshaped economies, faith and society.",
      detail: `In 1347, trading ships arriving at Sicilian and Italian ports carried a horrifying cargo: sailors dead or dying of a disease that covered the body in black swellings. Within a few years, the Black Death had swept across the entire European continent, following the same trade routes that had knitted the medieval world together. It is now generally thought to have been the plague bacterium, spread by fleas carried on rats — and, in its deadliest pneumonic form, directly between people through the air.

The mortality is almost impossible to grasp. Contemporary chroniclers described towns where there were not enough living to bury the dead, and modern estimates suggest the pandemic killed between a third and a half of Europe's population in just four years — perhaps 25 to 50 million people, on top of vast numbers across Asia and the Middle East. Whole villages were simply wiped out.

The psychological and religious shock was enormous. People tried everything: fleeing to the countryside, extreme religious penance (bands of flagellants whipped themselves through the streets), and, tragically, scapegoating — Jewish communities in particular were massacred by mobs who blamed them for the plague. Faith in the Church was shaken when prayers and processions did nothing to stop the dying.

Strangely, one of the plague's deepest effects was economic and social. With so many dead, labour suddenly became scarce and precious. Surviving peasants and workers could demand higher wages and better conditions, and rigid feudal ties began to loosen despite frantic attempts by rulers to freeze wages. Historians often see the Black Death as a grim turning point that helped bring the Middle Ages to an end — clearing the ground, in a terrible way, for the changes that would lead to the Renaissance and the early modern world.`,
      image: 'Doktor_Schnabel_von_Rom_(Colored_version).png', caption: 'A 17th-century plague doctor illustration.', tags: ['disaster', 'disease'],
    },
    {
      id: 'crusades', era: 'medieval', title: 'The Crusades', date: '1095–1291',
      blurb: "A series of religious wars saw European Christians march to seize the Holy Land from Muslim rule, while cultures clashed and mixed for two centuries. The campaigns reshaped trade, warfare and the relationship between Christendom and Islam.",
      detail: `In 1095, Pope Urban II stood before a crowd at the Council of Clermont in France and called on the knights of Christendom to march east — to aid the Christian Byzantine Empire against advancing Muslim Turks and to wrest the holy city of Jerusalem from Muslim control. He promised spiritual rewards to those who took up the cross, and the response was overwhelming. So began the First Crusade, and nearly two centuries of religious warfare in the eastern Mediterranean.

Against long odds, the First Crusade succeeded, capturing Jerusalem in 1099 in a bloody sack and establishing a string of "Crusader states" along the coast of the Holy Land. But holding them proved far harder than taking them. Muslim leaders eventually rallied, most famously Saladin, who recaptured Jerusalem in 1187 — an event that triggered the Third Crusade and the celebrated (and inconclusive) contest between Saladin and England's Richard the Lionheart. Over the following century the Crusader states were steadily worn down, until the last major stronghold fell in 1291.

The Crusades were as much about power, land and plunder as piety, and they left an ugly legacy of violence — including the notorious Fourth Crusade of 1204, which never reached the Holy Land at all but instead sacked Christian Constantinople, fatally weakening the Byzantine Empire and deepening the split between the eastern and western churches.

Yet the long collision also had unintended consequences. Sustained contact with the wealthier, more advanced economies of the Islamic world and Byzantium exposed Europeans to new goods, foods, technologies and ideas, and helped stimulate Mediterranean trade that enriched cities like Venice and Genoa. The Crusades reshaped the relationship between Christian Europe and the Islamic world for centuries to come — a relationship whose memory, for better and worse, still echoes today.`,
      image: 'Counciloclermont.jpg', caption: 'Pope Urban II at the Council of Clermont, 1095.', tags: ['war', 'religion'],
    },
    {
      id: 'mansa-musa', era: 'medieval', title: 'Mansa Musa of Mali', date: 'reigned c. 1312–1337',
      blurb: "The ruler of the West African Empire of Mali may have been the richest person in history. On his pilgrimage to Mecca he handed out so much gold that he accidentally crashed local economies for years.",
      detail: `In the 14th century, the West African Empire of Mali sat astride one of the most lucrative trade networks on Earth: the trans-Saharan routes carrying gold from the mines of the south and salt from the desert north. Its ruler, Mansa ("emperor") Musa, controlled so much of the world's gold supply that he is frequently described — with all the necessary caveats about comparing across eras — as possibly the richest human being who ever lived.

Mansa Musa became famous far beyond Africa because of his spectacular pilgrimage to Mecca in 1324. A devout Muslim, he crossed thousands of kilometres of desert with an entourage that ancient sources number in the tens of thousands, including soldiers, officials, and camels and servants laden with gold. As the caravan passed through Cairo, Musa gave away and spent gold so lavishly — to officials, to the poor, in the markets — that he flooded the local economy with the metal and reportedly devalued gold in Egypt for a decade, an early real-world lesson in inflation.

The pilgrimage put Mali firmly on the map — literally. Word of the fabulously wealthy African emperor spread through the Mediterranean world, and decades later the famous Catalan Atlas of 1375 depicted Mansa Musa enthroned in West Africa, holding a golden orb or nugget, drawing European eyes toward the region for the first time.

Back home, Musa used his wealth to build rather than merely dazzle. He expanded and adorned the city of Timbuktu, drawing scholars, architects and books, and helping turn it into a renowned centre of Islamic learning with libraries and universities whose reputation lasted for centuries. His reign is a powerful reminder that medieval Africa was home to rich, sophisticated and internationally connected states — a part of history too often left out of the story.`,
      image: 'Mansa_Musa.jpg', caption: 'Mansa Musa depicted in the Catalan Atlas, 1375.', tags: ['empire', 'wealth'],
    },
    {
      id: 'byzantium', era: 'medieval', title: 'Byzantium & Hagia Sophia', date: '330–1453',
      blurb: "The eastern half of the Roman Empire outlived the west by a thousand years, ruled from Constantinople. Its masterpiece, the Hagia Sophia, was the largest cathedral in the world for nearly a millennium.",
      detail: `When people say "Rome fell in 476," they mean only the western half. The eastern Roman Empire — which we call Byzantine, though its own people simply called themselves Romans — carried on for nearly another thousand years, ruled from the magnificent city of Constantinople (modern Istanbul), strategically straddling the crossing between Europe and Asia. Greek-speaking and Christian, it preserved Roman law and administration and Greek learning through the centuries when much of western Europe had fragmented into small warring kingdoms.

For much of the Middle Ages, Constantinople was the largest and richest city in Christendom, protected by its famous triple land walls and its position on the water. It acted as a bulwark, absorbing wave after wave of invasion from the east and shielding Europe behind it. Its diplomats, silks, gold coins and religious missionaries spread Byzantine influence far and wide; it was Byzantine missionaries who converted much of the Slavic world to Orthodox Christianity and gave it the Cyrillic alphabet.

The empire's supreme monument was the Hagia Sophia, the "Church of Holy Wisdom," completed in just five years under the emperor Justinian in 537. Its vast central dome, more than 30 metres across, was pierced by a ring of windows so that it seemed — to awestruck visitors — to float weightlessly on a halo of light. For almost a thousand years it was the largest cathedral in the world, an engineering feat that later architects struggled to match.

Byzantium's long decline came from many directions: the loss of its richest provinces to the rise of Islam, the catastrophic sack by fellow Christians in the Fourth Crusade, and finally the rise of the Ottoman Turks. In 1453 Constantinople fell to Ottoman cannon, ending the empire for good. The Hagia Sophia became a mosque, then in modern times a museum and mosque again — but its dome still stands as a symbol of a remarkable civilisation that bridged the ancient and medieval worlds.`,
      image: 'Hagia_Sophia_Mars_2013.jpg', caption: 'The Hagia Sophia in Istanbul.', tags: ['empire', 'architecture'],
    },
    {
      id: 'angkor', era: 'medieval', title: 'Angkor & the Khmer Empire', date: '9th–15th century',
      blurb: "In what is now Cambodia, the Khmer Empire built Angkor — the largest pre-industrial city in the world — and Angkor Wat, the biggest religious monument ever constructed. At its height it may have housed nearly a million people.",
      detail: `From roughly the 9th to the 15th centuries, the Khmer Empire dominated much of mainland Southeast Asia from its capital region of Angkor, in what is now Cambodia. At its peak, Angkor was almost certainly the largest city in the pre-industrial world — recent aerial surveys using laser scanning (LiDAR) have revealed a sprawling low-density metropolis, with temples, roads, houses and reservoirs spread across an area comparable to a modern city, home to perhaps 750,000 to a million people.

The secret of Angkor's power lay underground and in the water. The Khmer built an immense and ingenious system of canals, moats and vast reservoirs called barays, some several kilometres long, to capture and store the water of the monsoon and release it through the dry season. This mastery of water let them grow enough rice to feed a huge population and fund monumental construction on a scale few societies have matched.

Their crowning achievement was Angkor Wat, begun in the early 12th century under King Suryavarman II. Originally a Hindu temple dedicated to the god Vishnu — and later adapted for Buddhist worship — it is the largest religious monument ever built, its five iconic towers rising above a moat wide enough to be a lake. Its walls are covered with kilometres of exquisitely detailed carvings depicting gods, kings, armies and scenes from Hindu epics.

The empire declined over the 1400s, probably from a combination of causes: prolonged droughts followed by destructive floods that damaged the delicate waterworks, shifting trade routes, warfare, and the rise of rival powers. The capital was eventually abandoned, and the jungle slowly swallowed the temples — until Angkor Wat was "rediscovered" by the wider world in the 19th century. Today it is Cambodia's national symbol, appearing even on the country's flag, and a breathtaking reminder of a civilisation that once shaped a continent.`,
      image: 'Angkor_Wat.jpg', caption: 'Angkor Wat, Cambodia.', tags: ['empire', 'architecture'],
    },

    // ─────────── EXPLORATION & EARLY MODERN ───────────
    {
      id: 'fall-constantinople', era: 'exploration', title: 'The Fall of Constantinople', date: '1453',
      blurb: "After a 53-day siege, the Ottoman Sultan Mehmed II captured Constantinople, ending the thousand-year Byzantine Empire. Massive cannon shattered walls that had held for a millennium — a turning point often used to mark the end of the Middle Ages.",
      detail: `For over a thousand years, the triple land walls of Constantinople had been considered all but impregnable, turning back army after army and shielding Christian Europe behind them. By 1453, however, the once-mighty Byzantine Empire had shrivelled to little more than the city itself, ringed by the rising power of the Ottoman Turks. The young Ottoman sultan Mehmed II — just 21 years old, brilliant and utterly determined — set out to take the great prize that had eluded his ancestors.

His decisive advantage was new technology: gunpowder artillery. Mehmed commissioned enormous bronze cannon, including a monster so large it needed teams of oxen to move and could hurl stone balls weighing over 500 kilograms. For weeks these guns pounded the ancient walls that no army had ever broken by force. The defenders, hopelessly outnumbered, patched the breaches by night as fast as the cannon smashed them by day, in a desperate 53-day siege.

In the early hours of 29 May 1453, the Ottomans launched their final assault. After ferocious fighting, they broke through; the last Byzantine emperor, Constantine XI, is said to have died sword in hand amid his soldiers, his body never certainly identified. Constantinople fell, and with it the last remnant of the Roman Empire, which could trace its lineage back nearly 1,500 years.

The consequences rippled across the world. Constantinople became Istanbul, the glittering capital of an Ottoman Empire that would dominate the eastern Mediterranean for centuries. The fall sent Greek scholars and their precious ancient manuscripts fleeing west into Italy, helping to fuel the Renaissance. And by tightening Ottoman control over the old overland trade routes to Asia, it spurred the seafaring nations of Portugal and Spain to seek new sea routes to the riches of the East — helping to launch the Age of Exploration and, ultimately, the European voyages that would reach the Americas just four decades later.`,
      image: 'Benjamin-Constant-The_Entry_of_Mahomet_II_into_Constantinople-1876.jpg', caption: "Mehmed II's entry into Constantinople, by Jean-Joseph Benjamin-Constant.", tags: ['war', 'empire'],
    },
    {
      id: 'columbus', era: 'exploration', title: 'Columbus Reaches the Americas', date: '1492',
      blurb: "Sailing west for Spain in search of Asia, Christopher Columbus instead landed in the Caribbean — linking the Old World and the Americas permanently for the first time. It opened an age of exploration, empire and catastrophe for Indigenous peoples.",
      detail: `In August 1492, an Italian navigator named Christopher Columbus set out from Spain with three small ships and a bold, badly-mistaken theory. Educated people already knew the Earth was round; what Columbus got wrong was its size, drastically underestimating the distance west to Asia. Convinced he could reach the spice-rich "Indies" by sailing west, he had spent years persuading the Spanish monarchs Ferdinand and Isabella to fund the gamble.

After weeks at sea with a nervous crew, his expedition made landfall in October on an island in the Caribbean, probably in the modern Bahamas. Columbus was certain he had reached Asia — a belief he clung to for the rest of his life, even after four voyages, which is why he called the Indigenous peoples he met "Indians." He had, of course, stumbled onto a hemisphere unknown to Europe, inhabited by tens of millions of people in civilisations of great sophistication.

The true significance of 1492 was not "discovery" — people had lived in the Americas for over ten thousand years — but connection. Columbus's voyages permanently linked the Old World and the New, unleashing what historians call the Columbian Exchange: a vast, two-way transfer of crops, animals, people and ideas. Potatoes, maize, tomatoes, chocolate and tobacco flowed east and transformed diets across Europe, Africa and Asia; horses, wheat, cattle and sugar flowed west.

But the exchange also carried catastrophe. Old World diseases like smallpox, to which Indigenous Americans had no immunity, swept through the continents and killed an estimated majority of the pre-contact population within a century — one of the greatest demographic disasters in human history. Columbus himself governed brutally, and the voyages opened the door to centuries of European conquest, colonisation and the transatlantic slave trade. It is an event celebrated by some and mourned by others, but there is no doubt it reshaped the entire planet more profoundly than almost any other.`,
      image: 'Desembarco_de_Colón_de_Dióscoro_Puebla.jpg', caption: 'The Landing of Columbus, by Dióscoro Puebla.', tags: ['exploration'],
    },
    {
      id: 'renaissance', era: 'exploration', title: 'The Renaissance', date: '14th–17th century',
      blurb: "A rebirth of art, science and learning swept from Italy across Europe, reviving the ideas of ancient Greece and Rome. Figures like Leonardo da Vinci and Michelangelo blurred the line between artist and scientist.",
      detail: `The word "Renaissance" means "rebirth," and that is exactly how the thinkers and artists of 14th- to 17th-century Europe saw their age: a rediscovery of the lost glories of ancient Greece and Rome after what they dismissively called the "Middle" Ages. Beginning in the wealthy city-states of Italy — above all Florence — it was a flowering of art, learning, science and human confidence that would reshape Western culture.

Several forces fed it. Wealthy merchant families like the Medici of Florence poured fortunes into sponsoring artists and scholars, competing for prestige. The fall of Constantinople sent Greek scholars and ancient manuscripts flooding into Italy. And a rediscovered admiration for classical texts encouraged a new outlook called humanism, which prized human reason, potential and achievement, and the close study of the natural world.

In art, the results were revolutionary. Painters mastered linear perspective to create convincing depth, studied anatomy to render the human body realistically, and produced works of staggering beauty and confidence: Leonardo da Vinci's Mona Lisa and The Last Supper, Michelangelo's David and his ceiling in the Sistine Chapel, Raphael's serene compositions. The very idea of the "genius" artist was born here.

The Renaissance figure who best captures the spirit of the age is Leonardo himself — painter, but also engineer, anatomist, botanist and inventor, filling notebooks with sketches of flying machines and detailed dissections centuries ahead of their time. That fusion of art and science, and the era's bold faith in what human beings could understand and achieve, helped lay the intellectual groundwork for the Scientific Revolution and, eventually, the modern world.`,
      image: 'Mona_Lisa,_by_Leonardo_da_Vinci,_from_C2RMF_retouched.jpg', caption: 'The Mona Lisa, by Leonardo da Vinci.', tags: ['ideas', 'art'],
    },
    {
      id: 'aztec-conquest', era: 'exploration', title: 'Conquest of the Aztec Empire', date: '1519–1521',
      blurb: "A small band of Spanish conquistadors under Hernán Cortés, allied with rival Indigenous peoples, toppled the mighty Aztec Empire and its capital Tenochtitlan — one of the largest cities in the world at the time.",
      detail: `When the Spanish adventurer Hernán Cortés landed on the coast of Mexico in 1519 with a few hundred men, he was marching toward one of the most powerful and sophisticated states in the world: the Aztec Empire, which ruled millions of people across central Mexico. Its capital, Tenochtitlan, was built on an island in a lake, connected to the shore by great causeways and threaded with canals; with perhaps 200,000 inhabitants, it was larger than any city in Spain, and the conquistadors who first saw its gleaming temples and vast markets wondered if they were dreaming.

That such an empire could be toppled by so few outsiders seems impossible — and, in truth, it was not the Spanish alone who did it. The Aztecs ruled through fear and demanded heavy tribute and captives for human sacrifice from subject peoples, breeding deep resentment. Cortés shrewdly exploited these divisions, forging alliances with rival groups, above all the Tlaxcalans, so that his army swelled with tens of thousands of Indigenous warriors who wanted the Aztecs gone.

Even so, the decisive weapon was invisible. Smallpox, introduced by the Europeans, tore through Tenochtitlan during the siege, killing a huge portion of the population — including much of its leadership — while the Spanish, with acquired immunity, were largely spared. Weakened by disease, betrayal and blockade, the great city finally fell in 1521 after brutal street fighting, and was largely destroyed.

On its ruins the Spanish built Mexico City, and the fall of the Aztecs opened the way for three centuries of Spanish colonial rule over much of the Americas. Enormous quantities of silver would flow from the mines of Mexico and Peru back to Europe, transforming the global economy — while for the Indigenous peoples, conquest brought demographic collapse, forced conversion and the loss of their independence. It remains one of history's most consequential, and most tragic, encounters between civilisations.`,
      image: 'The_Conquest_of_Tenochtitlan.jpg', caption: 'The Conquest of Tenochtitlan (17th-century painting).', tags: ['war', 'empire'],
    },
    {
      id: 'reformation', era: 'exploration', title: 'The Protestant Reformation', date: 'from 1517',
      blurb: "When the monk Martin Luther publicly challenged the Catholic Church, he split Western Christianity and reshaped Europe. Aided by the new printing press, his ideas spread faster than any authority could contain.",
      detail: `In 1517, an obscure German monk and university professor named Martin Luther grew furious at a practice he considered a corruption of the faith: the Church's sale of "indulgences," documents that promised buyers reduced punishment for their sins, effectively selling forgiveness to raise money. According to tradition, he nailed a list of 95 arguments — the Ninety-Five Theses — to the door of a church in Wittenberg, inviting debate. He almost certainly did not expect to start a revolution.

But he had lit a fuse in a newly flammable world. Just decades earlier, the printing press had arrived in Europe, and Luther's writings — printed cheaply, in everyday German rather than scholarly Latin — spread across the continent with unprecedented speed. Ordinary people could suddenly read arguments against Church authority for themselves, and Luther's central claims proved explosive: that salvation came through faith alone, not through good works or Church-sold pardons, and that the Bible, not the Pope, was the ultimate authority.

Ordered to recant, Luther refused, reportedly declaring "Here I stand; I can do no other." He was excommunicated and declared an outlaw, but powerful German princes protected him — some from genuine conviction, some because breaking with Rome meant seizing Church lands and power. New "Protestant" churches sprang up, and other reformers like John Calvin pushed the movement further.

The consequences were vast and often violent. Europe fractured into Catholic and Protestant camps and was convulsed by more than a century of brutal religious wars. But the Reformation also drove up literacy (people were now urged to read scripture themselves), weakened the idea of a single unquestionable authority, and encouraged new ways of thinking about conscience, individual judgement and the relationship between church and state — ripples that would spread far beyond religion and help shape the modern Western world.`,
      image: 'Lucas_Cranach_d.Ä._-_Martin_Luther,_1528_(Veste_Coburg).jpg', caption: 'Martin Luther, by Lucas Cranach the Elder.', tags: ['religion', 'ideas'],
    },
    {
      id: 'scientific-revolution', era: 'exploration', title: 'The Scientific Revolution', date: '1543–1687',
      blurb: "Thinkers like Copernicus, Galileo and Newton replaced ancient authority with observation and mathematics, discovering that the Earth orbits the Sun and that the same laws govern the heavens and the ground. It is the foundation of modern science.",
      detail: `For most of history, understanding nature meant deferring to ancient authorities — above all the Greek philosopher Aristotle — and to the teachings of the Church. The Scientific Revolution, unfolding across the 16th and 17th centuries, replaced that deference with something radical: the insistence that ideas about the natural world must be tested against careful observation, measurement and mathematics, and that nature itself has the final say.

The spark is often dated to 1543, when the Polish astronomer Nicolaus Copernicus published his argument that the Earth is not the fixed centre of the universe but a planet orbiting the Sun. It was a profoundly unsettling claim, seeming to demote humanity from the centre of creation. Decades later the Italian Galileo Galilei turned one of the first telescopes to the night sky and found evidence to back it: mountains on the Moon, the phases of Venus, and four moons orbiting Jupiter — plainly not everything circled the Earth. For insisting on these findings, Galileo was tried by the Church and forced to recant, spending his last years under house arrest.

The revolution reached its climax with the Englishman Isaac Newton. In his 1687 masterwork, the Principia, Newton set out three laws of motion and the law of universal gravitation, showing with mathematics that a falling apple on Earth and the Moon in its orbit obey exactly the same rules. For the first time, a single, elegant framework explained motion both on the ground and across the heavens.

What made all this a "revolution" was not just the discoveries but the method: form a hypothesis, test it against evidence and experiment, express the results mathematically, and let anyone check your work. That method — sceptical, empirical, self-correcting — is the engine of modern science, and everything from medicine to spaceflight to the device you are reading this on descends directly from it.`,
      image: 'Galileo.arp.300pix.jpg', caption: 'Galileo Galilei, by Justus Sustermans.', tags: ['science', 'ideas'],
    },
    {
      id: 'inca', era: 'exploration', title: 'The Inca Empire & Machu Picchu', date: '1438–1533',
      blurb: "The Inca built the largest empire in the pre-Columbian Americas, running some 4,000 km along the Andes — without the wheel, iron tools or a writing system as we know it. Their mountain citadel, Machu Picchu, still stuns visitors today.",
      detail: `In little more than a century, the Inca grew from a single valley kingdom into the largest empire the Americas had ever seen, stretching some 4,000 kilometres down the spine of the Andes Mountains through modern Peru, Ecuador, Bolivia, Chile and Argentina, and ruling perhaps ten to twelve million people. What makes this astonishing is what they achieved without: no wheeled vehicles, no iron tools, no draft animals like horses or oxen, and no writing system as we usually define it.

Their genius was organisation. The Inca bound their vast, vertical empire together with a network of roughly 40,000 kilometres of stone roads, complete with rope suspension bridges over gorges, roadside storehouses stocked against famine, and a relay of trained runners who could carry messages hundreds of kilometres a day. In place of writing, they kept detailed records — censuses, taxes, tributes — on the quipu, an intricate system of knotted and coloured cords whose full workings scholars are still deciphering.

Inca stonework remains a marvel. Their masons cut and fitted enormous irregular blocks so precisely, without mortar, that a knife blade cannot slip between them — and these walls have survived centuries of earthquakes that flattened later colonial buildings. The most famous example is Machu Picchu, a royal estate perched dramatically on a mountain ridge, hidden among the clouds and never found by the Spanish, which is why it survives so beautifully today.

The empire's end came with shocking speed. When the conquistador Francisco Pizarro arrived in the 1530s with a tiny force, the Inca had just been devastated by a smallpox epidemic (spread ahead of the Europeans) and torn apart by a civil war between rival heirs. Pizarro exploited the chaos, captured and executed the emperor, and toppled the state within a couple of years — another case where disease and internal division did as much as any conqueror's sword.`,
      image: 'Machu_Picchu,_Peru.jpg', caption: 'Machu Picchu, Peru.', tags: ['empire', 'architecture'],
    },
    {
      id: 'printing-press', era: 'exploration', title: "Gutenberg's Printing Press", date: 'c. 1440',
      blurb: "Johannes Gutenberg's movable-type printing press made books cheap and plentiful for the first time in the West. Ideas could now spread faster than rulers or churches could control — arguably the most consequential invention before the internet.",
      detail: `Before the middle of the 15th century, books in Europe were extraordinarily rare and precious. Each one had to be copied out by hand, usually by monks, taking months of painstaking labour, so that a single volume could cost as much as a small farm and libraries held only a few hundred books. Knowledge was scarce, expensive, and easy for authorities to control.

Around 1440 in the German city of Mainz, a goldsmith named Johannes Gutenberg changed that forever. His breakthrough was not printing itself — block printing existed in Asia — but a practical system of movable type in the West: individual, reusable metal letters that could be arranged into a page, inked and pressed onto paper, then rearranged for the next page. He combined this with an oil-based ink that clung to metal and a press adapted from the kind used to crush grapes for wine. His masterpiece, a beautiful edition of the Bible, showed that printed books could rival the finest handwritten ones.

The effect was explosive. Within just fifty years, printing presses had sprung up in cities all across Europe and had produced millions of books — more than all the scribes of the previous thousand years combined. The price of books collapsed, and literacy began to climb.

It is hard to overstate what this unleashed. Cheap, fast-spreading print powered the Protestant Reformation, carried the discoveries of the Scientific Revolution to a wide audience, standardised languages, and made it possible for radical new ideas of every kind to reach ordinary people faster than any king, pope or censor could suppress them. Many historians consider Gutenberg's press the single most consequential invention between the wheel and the internet — the moment information itself became something the common person could hold in their hands.`,
      image: 'Gutenberg_Bible,_Lenox_Copy,_New_York_Public_Library,_2009._Pic_01.jpg', caption: 'A Gutenberg Bible, New York Public Library.', tags: ['technology', 'ideas'],
    },

    // ─────────── AGE OF REVOLUTIONS ───────────
    {
      id: 'american-revolution', era: 'revolutions', title: 'The American Revolution', date: '1775–1783',
      blurb: "Thirteen British colonies declared independence and, against long odds, defeated the world's leading empire. The result was a new nation founded on the then-radical idea that governments derive their power from the consent of the governed.",
      detail: `By the 1770s, thirteen British colonies along the eastern coast of North America were increasingly angry at being taxed by a Parliament in London in which they had no representation — "no taxation without representation" became the rallying cry. Tensions over taxes, trade restrictions and the presence of British troops boiled over into protest, then bloodshed, and in 1775 into open war between colonial militias and the armies of the world's foremost empire.

In 1776 the colonies took the decisive step of declaring independence. The Declaration of Independence, drafted largely by Thomas Jefferson, proclaimed that "all men are created equal" and endowed with rights to "life, liberty and the pursuit of happiness," and that governments derive their just powers "from the consent of the governed." These were genuinely radical ideas for an age of kings — though the young nation's failure to extend them to enslaved people, women and Indigenous peoples exposed a contradiction it would wrestle with for centuries.

Militarily, the odds looked hopeless. The Continental Army under George Washington was outnumbered, poorly supplied and repeatedly beaten, surviving brutal winters like the famous encampment at Valley Forge. Washington's genius lay less in winning battles than in keeping his army alive and the cause afloat. The turning point came when the colonists' victory at Saratoga persuaded France — eager to strike at its old rival Britain — to enter the war on the American side, providing crucial money, troops and naval power.

British surrender at Yorktown in 1781 effectively ended the fighting, and independence was recognised in 1783. The new United States then did something almost as remarkable as winning the war: it wrote a Constitution creating a durable federal republic with checks and balances designed to prevent any one person or branch from seizing absolute power. Imperfect and unfinished, the American experiment nonetheless proved that a large nation could govern itself without a king — and its example would inspire revolutionaries around the world.`,
      image: 'Washington_Crossing_the_Delaware_by_Emanuel_Leutze,_MMA-NYC,_1851.jpg', caption: 'Washington Crossing the Delaware, by Emanuel Leutze.', tags: ['revolution', 'politics'],
    },
    {
      id: 'french-revolution', era: 'revolutions', title: 'The French Revolution', date: '1789–1799',
      blurb: "The French people overthrew their monarchy, executed their king and queen, and tried to rebuild society around liberty, equality and fraternity. It was inspiring and terrifying — and it permanently ended the idea that kings ruled by divine right.",
      detail: `In the late 1780s, France was the most populous and powerful nation in western Europe — and it was breaking under its own contradictions. The monarchy was effectively bankrupt (partly from funding the American Revolution), harvests had failed and bread prices soared, and society was locked into a rigid order in which the clergy and nobility enjoyed vast privileges and paid little tax, while the common people (the "Third Estate") carried the burden. When the king reluctantly summoned a national assembly to fix the finances, the pent-up demand for change burst its banks.

In July 1789 a Parisian crowd stormed the Bastille, a royal fortress-prison that symbolised the old regime's power — an event still celebrated as France's national day. The revolutionaries abolished feudal privileges and issued the Declaration of the Rights of Man and of the Citizen, proclaiming liberty, equality and the rights of all citizens. For a moment it seemed a new and rational society might be born.

But the revolution spiralled. Threatened by hostile foreign monarchies and internal enemies, and gripped by fear and factional struggle, it descended into the Reign of Terror (1793–94), when the radical government executed tens of thousands of supposed enemies by guillotine — including King Louis XVI and Queen Marie Antoinette, and eventually the revolutionaries themselves. The dream of liberty had turned to paranoia and mass killing.

Out of the exhaustion and chaos rose a brilliant young general, Napoleon Bonaparte, who seized power in 1799 and ended the revolution as a political event — even as he carried many of its reforms across Europe. The French Revolution's legacy is double-edged and enormous: it permanently shattered the idea that kings ruled by divine right, spread the ideals of citizenship, nationalism and human rights that underpin modern democracy — and left a lasting warning about how quickly a revolution in the name of freedom can consume its own children.`,
      image: 'Eugène_Delacroix_-_Le_28_Juillet._La_Liberté_guidant_le_peuple.jpg', caption: 'Liberty Leading the People, by Eugène Delacroix.', tags: ['revolution', 'politics'],
    },
    {
      id: 'napoleon', era: 'revolutions', title: 'Napoleon Bonaparte', date: '1799–1815',
      blurb: "Rising from the French Revolution, Napoleon crowned himself emperor and conquered much of Europe with brilliant military campaigns. He also spread a modern legal code that still shapes law across the world — before his ambition finally undid him.",
      detail: `Napoleon Bonaparte was born on the island of Corsica, a minor noble of modest means, and rose through the chaos of the French Revolution on pure talent as an artillery officer. By 1799 he had seized political power in a coup, and in 1804 he crowned himself Emperor of the French — famously taking the crown from the Pope's hands to place it on his own head, a gesture declaring that his authority came from his own achievements, not from God or tradition.

As a commander he was one of the greatest in history. Through speed, daring and a gift for concentrating force at the decisive point, he won a dazzling string of victories — Austerlitz, Jena, Friedland — that left him master of most of continental Europe, redrawing borders and placing his relatives on thrones from Spain to Poland. For a decade the map of Europe was essentially whatever Napoleon wanted it to be.

His impact went far beyond the battlefield. The Napoleonic Code, his sweeping reform of French law, swept away the tangle of feudal privileges and enshrined principles like equality before the law, secular government, property rights and religious tolerance. This code was carried across his empire and became the model for legal systems in much of Europe, Latin America and beyond — arguably a more lasting conquest than any battle.

His downfall came from overreach. In 1812 he invaded Russia with the largest army Europe had ever seen; the Russians retreated, burning everything, and the brutal winter destroyed his forces on the long retreat — only a fraction returned. A coalition of his enemies drove him from power and exiled him, but he escaped for one last dramatic campaign, finally and decisively defeated at the Battle of Waterloo in 1815. Exiled again to the remote Atlantic island of Saint Helena, he died there in 1821 — but the legal, administrative and national ideas he spread had already reshaped the modern world.`,
      image: 'David_-_Napoleon_crossing_the_Alps_-_Malmaison2.jpg', caption: 'Napoleon Crossing the Alps, by Jacques-Louis David.', tags: ['war', 'politics'],
    },
    {
      id: 'industrial-revolution', era: 'revolutions', title: 'The Industrial Revolution', date: 'c. 1760–1840',
      blurb: "Steam engines, factories and machines transformed how humans made things — and how they lived. In a few generations, societies shifted from farms to cities, from muscle to coal power, launching the modern industrial world.",
      detail: `For almost all of human history, the power to make things came from muscle, wind and water: human and animal labour, sailing ships, and mills turned by rivers. The Industrial Revolution, beginning in Britain around the 1760s, shattered that limit forever by harnessing the concentrated energy of coal through the steam engine — and in a few generations changed not just how people worked, but how they lived, ate, travelled and thought.

It began with textiles. New machines could spin thread and weave cloth far faster than any hand, and when James Watt's improved steam engine was harnessed to drive them, production moved out of cottages and into factories — huge, powered workplaces gathering hundreds of workers under one roof. Iron and coal industries boomed to feed the machines. Then steam went mobile: railways and steamships shrank distances that had limited humanity for millennia, moving goods and people at once-unimaginable speed.

The transformation of daily life was staggering. People poured off the land and into fast-growing industrial cities like Manchester, which swelled from a town into a smoke-choked metropolis in decades. Mass production made goods cheaper and more plentiful than ever before, and populations and living standards would eventually rise dramatically.

But the early cost was harsh. Cities were overcrowded and filthy; factory work was often dangerous, monotonous and poorly paid; and young children laboured long hours in mills and mines. These conditions fuelled powerful reactions — reform movements, trade unions, and new political ideologies including socialism and the ideas of Karl Marx. Almost every feature of the modern world, for good and ill — mass production, fossil-fuel energy, commuting, urban living, and the environmental strain that came with them — can be traced back to this single, world-altering upheaval.`,
      image: 'Coalbrookdale_by_Night.jpg', caption: 'Coalbrookdale by Night, by Philip James de Loutherbourg.', tags: ['technology', 'economy'],
    },
    {
      id: 'civil-war-abolition', era: 'revolutions', title: 'Abolition & the US Civil War', date: '1861–1865',
      blurb: "A century-long movement to end slavery reached a violent climax in the American Civil War, the deadliest conflict in US history. Its outcome abolished slavery in the United States and reshaped the meaning of freedom and citizenship.",
      detail: `The transatlantic slave trade forcibly carried around twelve million Africans across the ocean over several centuries, and slavery became woven into the economies of the Americas. But the same Enlightenment ideals of liberty and equality that drove the age's revolutions also fuelled a growing movement to abolish it. Formerly enslaved writers, Quakers, religious reformers and activists campaigned for decades; Britain abolished the slave trade in 1807 and slavery across its empire in 1833.

In the United States the issue proved impossible to resolve peacefully. The nation was split between a northern economy of free labour and industry and a southern economy built on enslaved people working cotton plantations. As new western territories were added, the bitter question of whether slavery would expand into them pushed the country toward breaking point. When Abraham Lincoln — opposed to slavery's expansion — was elected president in 1860, eleven southern states seceded to form the Confederacy, determined to preserve slavery.

The resulting Civil War (1861–1865) was staggeringly bloody, the deadliest conflict in American history, killing an estimated 600,000 to 750,000 people as industrialised weapons met massed armies. Midway through, Lincoln issued the Emancipation Proclamation, transforming the war's purpose into a fight to end slavery itself, and tens of thousands of Black soldiers joined the Union cause.

The Union's victory in 1865 preserved the country and led to the Thirteenth Amendment, which abolished slavery throughout the United States. But Lincoln was assassinated days after the war ended, and the promise of genuine freedom and equality for formerly enslaved people was quickly undermined by new forms of oppression and segregation. The Civil War settled that the nation would endure and that slavery would end — but the long, unfinished struggle for real equality and civil rights would continue for another century and beyond.`,
      image: 'Battle_of_Gettysburg,_by_Currier_and_Ives.png', caption: 'The Battle of Gettysburg, Currier and Ives print.', tags: ['war', 'rights'],
    },
    {
      id: 'meiji', era: 'revolutions', title: 'The Meiji Restoration (Japan)', date: '1868',
      blurb: "Japan ended over two centuries of self-imposed isolation and, in a single generation, transformed from a feudal society into a modern industrial power. It is one of history's fastest and most deliberate national reinventions.",
      detail: `For more than 250 years, Japan had deliberately sealed itself off from most of the outside world under the rule of the Tokugawa shoguns — military dictators who governed in the emperor's name while the emperor himself remained a powerless, almost sacred figurehead. Society was frozen into rigid classes topped by the samurai warrior elite, and foreign contact was banned on pain of death. Then, in 1853, American warships under Commodore Perry sailed into Tokyo Bay and, with the threat of their cannon, forced Japan to open to trade.

The humiliation of being bullied by foreign powers — and the fear of being colonised like China was being carved up — triggered a political earthquake. Reform-minded samurai overthrew the shogunate and in 1868 "restored" power to the young Emperor Meiji, giving the era its name. But this was no return to the past; it was a springboard into the future. Under the slogan "rich country, strong army," Japan's new leaders set out to modernise as fast as humanly possible so the nation could meet the West on equal terms.

The pace of change was breathtaking. The government abolished the feudal domains and the samurai class itself, sent officials and students abroad to study the world's best systems, and hired foreign experts — then rapidly built railways, telegraphs, factories, a modern banking system, a national school system that made Japan one of the most literate nations on Earth, and a Western-style army and navy.

Within a single generation, Japan transformed from an isolated feudal society into an industrial and military power capable of defeating much larger nations. The Meiji Restoration stands as one of history's most successful and deliberate national reinventions — a country choosing, on its own terms, to remake itself. It set Japan on the path to becoming a modern great power, and its legacy shapes the nation, and the language, studied elsewhere in this very app.`,
      image: 'Meiji_tenno1.jpg', caption: 'The Meiji Emperor of Japan.', tags: ['revolution', 'modernization'],
    },
    {
      id: 'darwin', era: 'revolutions', title: 'Darwin & the Theory of Evolution', date: '1859',
      blurb: "Charles Darwin's On the Origin of Species proposed that all living things evolved over vast time through natural selection. It was one of the most powerful — and controversial — scientific ideas ever published.",
      detail: `As a young man, Charles Darwin spent nearly five years aboard HMS Beagle on a voyage around the world, serving as the ship's naturalist. Everywhere he went he collected specimens and puzzled over what he saw — but it was the Galápagos Islands, off South America, that planted the crucial seed. There he noticed that closely related species differed subtly from island to island, as if they had each adapted to slightly different conditions from a common ancestor.

Over the following two decades, Darwin gathered evidence and slowly assembled a theory of breathtaking simplicity and power. Living things produce more offspring than can survive, and those offspring vary; individuals whose inherited traits happen to suit their environment are more likely to survive and reproduce, passing those traits on. Repeated over countless generations and vast stretches of time, this process of "natural selection" could gradually reshape species and, ultimately, produce the entire tree of life from common ancestors. He delayed publishing for years, aware of how explosive the idea would be — and finally released On the Origin of Species in 1859 when another naturalist, Alfred Russel Wallace, arrived at the same conclusion independently.

The theory struck at some of the deepest beliefs of the age, implying that humans were not specially created but were themselves a product of the same natural processes as every other animal. It provoked fierce debate, some of it still echoing today, and Darwin himself was cautious and often unwell, leaving much of the public defence to others.

Yet the evidence has only grown stronger. Evolution by natural selection is now the unifying framework of all biology, confirmed and enriched by genetics, fossils and DNA that Darwin never knew about. It underpins modern medicine (from understanding antibiotic resistance to developing vaccines), agriculture and ecology. Few single books have ever changed humanity's understanding of its own place in nature so profoundly.`,
      image: 'Charles_Darwin_seated_crop.jpg', caption: 'Charles Darwin, photographed c. 1869.', tags: ['science', 'ideas'],
    },
    {
      id: 'electric-age', era: 'revolutions', title: 'The Age of Electric Invention', date: '1870s–1900s',
      blurb: "In a few remarkable decades, inventors gave the world practical electric light, the telephone and recorded sound. Cities lit up at night, voices crossed continents, and daily life changed forever.",
      detail: `If the early Industrial Revolution ran on steam and coal, its later phase — sometimes called the Second Industrial Revolution — ran on electricity, and it packed an astonishing burst of world-changing inventions into just a few decades around the turn of the 20th century. In this period the fundamental technologies of modern life were born almost all at once.

Two names loom especially large. In the United States, Thomas Edison built the first great industrial research laboratory, an "invention factory" that produced a practical, long-lasting electric light bulb and the systems to power it, along with the phonograph — the first device that could record and play back sound, a genuine marvel to people who had never heard a voice or music without a living performer. Meanwhile Alexander Graham Bell patented the telephone in 1876, and for the first time human voices could travel instantly across great distances along a wire.

Electricity's spread was not without drama. A fierce commercial and technical struggle known as the "War of the Currents" pitted Edison's direct-current system against the alternating-current systems championed by the brilliant inventor Nikola Tesla and the industrialist George Westinghouse. Alternating current won, because it could be sent efficiently over long distances, and it became the basis of the power grids that still light our homes.

Together these inventions transformed everyday life more visibly than almost anything before them. Cities that had gone dark at sunset for all of human history now glowed through the night; factories could run around the clock; messages and voices crossed continents in moments. Combined with other breakthroughs of the era — the internal combustion engine, radio, powered flight just around the corner — this electric age set the stage for the fully wired, fast-moving 20th century.`,
      image: 'Thomas_Edison2.jpg', caption: 'Thomas Edison with his phonograph.', tags: ['technology', 'science'],
    },

    // ─────────── MODERN WORLD ───────────
    {
      id: 'wwi', era: 'modern', title: 'World War I', date: '1914–1918',
      blurb: "Sparked by a single assassination, a web of alliances dragged the great powers into an industrial-scale war of trenches, machine guns and poison gas. Around 20 million people died, and the old empires of Europe collapsed.",
      detail: `In the summer of 1914, Europe was a tinderbox of rival empires bound together by a tangle of secret alliances, colonial rivalries, arms races and nationalism. The spark came in Sarajevo, where a Serbian nationalist assassinated Archduke Franz Ferdinand, heir to the throne of Austria-Hungary. Within weeks, the alliance system dragged the great powers in one after another, and a local crisis exploded into a continental — soon global — war that almost no one had truly wanted or expected.

Everyone assumed it would be over by Christmas. Instead, it became a horrifying stalemate. On the Western Front, opposing armies dug vast networks of trenches stretching from the North Sea to Switzerland, and for four years hurled millions of men against each other across the shell-blasted wasteland of "No Man's Land." Industrial technology met 19th-century tactics with catastrophic results: machine guns, massed artillery, barbed wire and poison gas turned single battles like the Somme and Verdun into slaughters costing hundreds of thousands of lives for a few kilometres of mud.

The war eventually spread far beyond Europe, drawing in colonial troops from around the world and, decisively, the United States in 1917. It also toppled thrones: by its end in November 1918, the German, Austro-Hungarian, Russian and Ottoman empires had all collapsed, and the map of Europe and the Middle East was redrawn — often with careless lines that would cause conflict for generations.

Around 20 million people, soldiers and civilians, lay dead, and a generation was traumatised. The harsh peace imposed on Germany at Versailles left deep bitterness and economic ruin, while new nations and grievances proliferated. Meant to be "the war to end all wars," World War I instead sowed many of the seeds — political, economic and emotional — that would grow into an even greater catastrophe just twenty years later.`,
      image: 'Cheshire_Regiment_trench_Somme_1916.jpg', caption: 'British troops in a trench at the Somme, 1916.', tags: ['war'],
    },
    {
      id: 'russian-revolution', era: 'modern', title: 'The Russian Revolution', date: '1917',
      blurb: "Amid the misery of World War I, revolutionaries overthrew the Russian Tsar and then seized power under Lenin's Bolsheviks. It created the world's first communist state and set up a global ideological struggle that lasted most of the century.",
      detail: `By 1917, the Russian Empire was collapsing under the strain of World War I. Millions of poorly-equipped soldiers had been killed or wounded, cities were gripped by hunger and freezing shortages, and the autocratic Tsar Nicholas II — who had disastrously taken personal command of the failing war — had lost the confidence of almost everyone. That February, bread riots and strikes in the capital swelled into a spontaneous uprising, and within days the three-hundred-year-old Romanov dynasty simply fell; the Tsar abdicated, ending centuries of imperial rule.

But the moderate provisional government that replaced him made a fatal error: it kept Russia in the hated war. Into this vacuum stepped Vladimir Lenin and his radical Bolshevik party, promising the exhausted masses exactly what they craved — "Peace, Land and Bread." In October (November by the modern calendar), the Bolsheviks seized power in a swift, well-organised coup, determined to build the world's first state run on the communist ideas of Karl Marx.

They quickly pulled Russia out of the war, but plunged it into a brutal civil war between the Bolshevik "Reds" and a loose coalition of "White" opponents, with foreign powers intervening. The Reds won after years of bloodshed and famine, and out of the wreckage emerged the Soviet Union — a one-party state pursuing a radical experiment in abolishing private property and running the entire economy from the centre.

The consequences were vast and often tragic. Under Lenin's successor Stalin, the Soviet Union industrialised at ferocious speed but at a horrific human cost, including engineered famines and mass political purges. And ideologically, the revolution divided the 20th-century world in two: the communist East versus the capitalist West, a rivalry that would define global politics — through the Cold War, proxy conflicts and the nuclear arms race — for the next seventy years.`,
      image: 'Boris_Kustodiev_-_Bolshevik.jpg', caption: 'The Bolshevik, by Boris Kustodiev.', tags: ['revolution', 'politics'],
    },
    {
      id: 'great-depression', era: 'modern', title: 'The Great Depression', date: '1929–1939',
      blurb: "A stock-market crash spiraled into the worst economic collapse of the modern era. Banks failed, unemployment soared to a quarter of the workforce in some countries, and the crisis reshaped politics across the globe.",
      detail: `The 1920s had roared — a decade of soaring stock prices, new consumer goods and giddy optimism, especially in the United States. Much of the boom, however, was built on reckless speculation and debt. In October 1929 the bubble burst: the American stock market crashed, wiping out fortunes in days and shattering confidence. That crash was not the whole story, but it triggered a downward spiral that became the deepest and longest economic depression of the modern age.

The collapse fed on itself. Frightened people rushed to withdraw their savings, and thousands of banks — holding no insurance — simply failed, taking their depositors' money with them. Businesses could not get credit and went under; as they closed, workers were thrown out of jobs; as the unemployed stopped spending, more businesses failed. In the worst years, roughly a quarter of American workers were unemployed, and the misery spread around the interconnected world, hammering trade and industry from Germany to Japan.

The human face of the Depression was stark: soup kitchens and bread lines, shantytowns of the homeless, and — in the American heartland — the "Dust Bowl," where years of drought and poor farming turned the plains to blowing dust and drove ruined farm families west in search of any work, immortalised in photographs and novels of the era.

Governments were forced to rethink the role of the state in the economy. In the United States, President Franklin Roosevelt's "New Deal" launched public works, financial regulation and social programs to provide relief and jobs. Elsewhere the desperation had darker consequences, feeding the rise of extremist and authoritarian movements — most fatefully in Germany, where economic ruin helped bring the Nazis to power. In the end, the Depression only truly lifted with the massive government spending and full employment of the Second World War.`,
      image: 'Lange-MigrantMother02.jpg', caption: "Migrant Mother, by Dorothea Lange, 1936.", tags: ['economy', 'disaster'],
    },
    {
      id: 'wwii', era: 'modern', title: 'World War II', date: '1939–1945',
      blurb: "The deadliest conflict in human history engulfed the globe, killing an estimated 70–85 million people. It ended with the defeat of Nazi Germany and Imperial Japan, the dawn of the atomic age, and a world split into new superpowers.",
      detail: `World War II was the deadliest and most widespread conflict in human history, killing an estimated 70 to 85 million people — most of them civilians — and touching almost every corner of the globe. In Europe it grew out of the bitter aftermath of World War I and the rise of Adolf Hitler's Nazi Germany, an aggressive, racist dictatorship bent on conquest. When Germany invaded Poland in September 1939, Britain and France declared war, and the fighting was on.

Germany's early "blitzkrieg" (lightning war) overran much of Europe with terrifying speed. Britain held on alone through the aerial Battle of Britain, and the war then exploded in scale: Hitler invaded the Soviet Union in 1941, opening a colossal and savage Eastern Front, while in the Pacific, Imperial Japan attacked the American naval base at Pearl Harbor, bringing the United States fully into the war. It became a truly global struggle across Europe, North Africa, the Atlantic, and the vast reaches of Asia and the Pacific.

The war featured industrialised destruction on an unimaginable scale: tank battles across whole countries, fleets of aircraft carriers, the systematic bombing of entire cities, and the machinery of genocide. The tide turned in 1942–43 at brutal battles like Stalingrad and Midway, and the Allies — chiefly the United States, the Soviet Union and the British Empire — slowly closed in. The D-Day landings in Normandy in June 1944 opened the final drive into Germany from the west while the Soviets pushed from the east; Germany surrendered in May 1945, and Japan followed that August after the atomic bombings.

The war reshaped the world utterly. Europe's old empires were exhausted and would soon unravel; the United States and Soviet Union emerged as rival superpowers whose Cold War would dominate the next half-century; and the horrors of the conflict, above all the Holocaust, drove the creation of the United Nations and a new framework of human rights, in a determined — if imperfect — effort to ensure such a catastrophe could never happen again.`,
      image: 'Into_the_Jaws_of_Death_23-0455M_edit.jpg', caption: 'US troops landing in Normandy on D-Day, 1944.', tags: ['war'],
    },
    {
      id: 'holocaust', era: 'modern', title: 'The Holocaust', date: '1941–1945',
      blurb: "During World War II, Nazi Germany systematically murdered six million Jews, along with millions of Roma, disabled people, political prisoners and others. It stands as a defining warning about where hatred and unchecked state power can lead.",
      detail: `The Holocaust was the deliberate, state-organised murder of six million Jewish men, women and children by Nazi Germany and its collaborators during World War II — around two-thirds of all the Jews in Europe. It was carried out alongside the mass murder of millions of others the Nazis deemed "undesirable": Roma people, disabled people, Soviet prisoners of war, political dissidents, gay people and others. It stands as one of the darkest chapters in all of human history.

It did not begin with the death camps. It grew step by step from years of propaganda that dehumanised Jews as enemies, then stripped them of rights, citizenship, property and dignity through discriminatory laws, boycotts and violence. As Germany conquered Europe, Jews were herded into overcrowded, starving ghettos and, from 1941, murdered on a mass scale — first by mobile killing squads shooting communities into pits, and then through an industrialised system of extermination.

The Nazis built camps whose purpose was killing on an assembly-line scale, the most infamous being Auschwitz-Birkenau, where more than a million people were murdered in gas chambers, their deaths coldly organised by a vast bureaucracy of trains, records and orders. It was genocide conducted with the tools of a modern industrial state — one of the most chilling aspects of the entire horror.

When Allied soldiers liberated the camps in 1945, the full scale of what had happened stunned the world and permanently changed it. The Holocaust gave rise to the very concept of "crimes against humanity," prosecuted at the Nuremberg trials, and helped drive the modern international framework of human rights and the Genocide Convention. Remembering it accurately — honouring the victims and understanding how ordinary societies can be led into atrocity — remains a solemn duty, captured in two words: "never again."`,
      image: 'Selection_Birkenau_ramp.jpg', caption: 'Arrivals at Auschwitz-Birkenau, 1944.', tags: ['war', 'rights'],
    },
    {
      id: 'atomic-age', era: 'modern', title: 'The Atomic Age', date: '1945',
      blurb: "The United States dropped atomic bombs on Hiroshima and Nagasaki, ending World War II and unleashing a weapon capable of destroying cities in an instant. Humanity now held the power to end itself — and had to learn to live with it.",
      detail: `In the final months of World War II, a top-secret American effort called the Manhattan Project — mobilising many of the world's greatest physicists — succeeded in turning the theoretical energy locked inside the atom into a weapon of unprecedented destructive power. On 6 August 1945, a single American bomber dropped one atomic bomb on the Japanese city of Hiroshima; three days later, another destroyed Nagasaki. Each weapon flattened a city in a single blinding flash.

The bombs killed well over a hundred thousand people, the overwhelming majority of them civilians, through the initial blast and firestorm and then the lingering horror of radiation sickness. Japan surrendered within days, ending the war. The bombings remain among the most fiercely debated decisions in history — credited by some with avoiding an even bloodier invasion of Japan, condemned by others as an atrocity against civilians — but their world-changing significance is beyond dispute.

Humanity had crossed a threshold: for the first time, it possessed the power to destroy its own cities, and eventually its own civilisation, at the push of a button. The genie could not be put back. Within a few years the Soviet Union had its own bomb, and the two Cold War superpowers raced to build ever-larger arsenals — including hydrogen bombs thousands of times more powerful than the Hiroshima weapon — capable of destroying the world many times over.

This produced a strange, tense peace held together by the grim logic of "mutually assured destruction": neither side dared start a war it could not survive. The atomic age also brought nuclear power and medicine, and lasting, urgent debates about the responsibilities that come with such god-like technology. We still live in the shadow of that August in 1945 — in a world that has the means to end itself, and must keep choosing, every day, not to.`,
      image: 'Atomic_cloud_over_Hiroshima.jpg', caption: 'The mushroom cloud over Hiroshima, 1945.', tags: ['war', 'science'],
    },
    {
      id: 'moon-landing', era: 'modern', title: 'The Moon Landing', date: '1969',
      blurb: "Apollo 11 carried humans to the surface of another world for the first time. As Neil Armstrong stepped onto the Moon, an estimated 600 million people watched — the largest live audience in history to that point.",
      detail: `On 20 July 1969, two human beings walked on the surface of another world for the first time in the history of life on Earth. Neil Armstrong and Buzz Aldrin of NASA's Apollo 11 mission descended in a fragile lander to the dusty grey plain of the Moon while their crewmate Michael Collins orbited above. As Armstrong stepped off the ladder, he spoke words that would echo forever: "That's one small step for man, one giant leap for mankind." An estimated 600 million people — a fifth of everyone alive — watched or listened, the largest shared human audience the world had ever known.

The landing was the climax of the "Space Race," a Cold War contest for prestige between the United States and the Soviet Union. The Soviets had shocked America by launching the first satellite, Sputnik, in 1957 and the first human into space in 1961. In response, President John F. Kennedy made an audacious pledge that year: to land a man on the Moon and return him safely before the decade was out. It was a staggering goal — much of the technology needed did not yet exist.

Meeting it required one of the greatest engineering efforts ever undertaken. Hundreds of thousands of people spent years inventing the giant Saturn V rocket, the spacecraft, the life-support systems, and much of modern computing along the way — the guidance computer that landed on the Moon had less power than a modern pocket calculator. The journey was genuinely dangerous, and the landing itself came within seconds of running out of fuel as Armstrong steered manually past a boulder field.

For all its Cold War motives, the moment transcended politics. The astronauts left behind a plaque reading "We came in peace for all mankind," and the photographs of a small, blue, cloud-wrapped Earth hanging in black space gave humanity a new perspective on its own fragile, shared home — helping inspire the modern environmental movement. It stands as one of the proudest demonstrations of what human beings can achieve when they set their minds to the seemingly impossible.`,
      image: 'Aldrin_Apollo_11_original.jpg', caption: 'Buzz Aldrin on the Moon, Apollo 11, 1969.', tags: ['science', 'exploration'],
    },
    {
      id: 'berlin-wall', era: 'modern', title: 'The Fall of the Berlin Wall', date: '1989',
      blurb: "The wall that had divided the German city of Berlin — and symbolized the Cold War split between East and West — was suddenly opened by jubilant crowds. Within two years the Soviet Union itself dissolved.",
      detail: `After World War II, Germany — and its capital, Berlin — was split between the democratic, capitalist West and the communist East controlled by the Soviet Union. West Berlin became a small island of freedom and prosperity deep inside communist East Germany, and so many East Germans fled through it to a better life that in 1961 the East German regime threw up a wall almost overnight to seal them in. For 28 years the Berlin Wall — concrete, barbed wire, watchtowers and a deadly "death strip" — stood as the single most potent symbol of the Cold War division of the world, and of the "Iron Curtain" separating East from West. People were shot trying to cross it.

By the late 1980s, the communist system was crumbling under economic stagnation, and the reformist Soviet leader Mikhail Gorbachev signalled he would no longer send tanks to crush change in the Eastern Bloc, as had happened before. A wave of largely peaceful revolutions swept across Eastern Europe in 1989, as country after country cast off communist rule.

The Wall's fall itself was almost accidental. On the evening of 9 November 1989, an East German official, confused about new travel rules, announced at a press conference that citizens could cross the border "immediately." Word spread like wildfire, and huge crowds surged to the checkpoints. Overwhelmed and with no orders to shoot, the border guards finally opened the gates. Ecstatic Berliners from both sides climbed atop the Wall, embraced strangers, and began hacking it apart with hammers.

The images flashed around the world and marked, more than any other single moment, the peaceful end of the Cold War. Germany was reunified within a year, and by the end of 1991 the Soviet Union itself had dissolved, ending the decades-long superpower standoff. For a brief, hopeful moment, it seemed history had turned a corner toward freedom — a night when ordinary people, with their bare hands, tore down one of the most feared barriers on Earth.`,
      image: 'West_and_East_Germans_at_the_Brandenburg_Gate_in_1989.jpg', caption: 'Germans at the Brandenburg Gate as the Wall opens, 1989.', tags: ['politics', 'revolution'],
    },

    // ─────────── CURVEBALLS ───────────
    {
      id: 'library-alexandria', era: 'curveball', title: 'The Library of Alexandria', date: 'c. 285 BC – ?',
      blurb: "The ancient world's greatest library aimed to collect all human knowledge under one roof. Its slow loss is often mourned as one of history's great intellectual tragedies — though it didn't burn down in a single dramatic night as the legend claims.",
      detail: `Founded in Egypt around the 3rd century BC by the Ptolemaic dynasty — the same Greek line that would end with Cleopatra — the Library of Alexandria set itself a breathtaking goal: to gather all the knowledge of the known world in one place. Attached to a research institute called the Mouseion (the origin of the word "museum"), it drew leading scholars, poets, mathematicians and scientists from across the Mediterranean, who lived, studied and argued there at royal expense.

The library's methods for acquiring books were famously aggressive. Ships docking at the busy port of Alexandria were reportedly searched, and any scrolls found aboard were confiscated to be copied — with the copies, not always the originals, returned to their owners. At its height the collection may have numbered in the hundreds of thousands of scrolls, holding works of literature, science, medicine and philosophy, many of which exist nowhere else and are known to us today only as tantalising references.

Popular legend blames the library's destruction on a single dramatic fire — often pinned on Julius Caesar, whose forces accidentally set part of the harbour ablaze during a war. But the real story is almost certainly sadder and more mundane. The library seems to have declined slowly over centuries, worn down by funding cuts, political turmoil, the expulsion of scholars, neglect, and repeated damage, until eventually it simply ceased to exist.

That slow fade is exactly why the Library of Alexandria endures as a symbol. It represents both the highest ambition of the ancient world — the dream of collecting and preserving all human knowledge — and a haunting warning that such knowledge is fragile. It can be lost not only in a single catastrophe, but through the quieter enemies of indifference, underfunding and the slow erosion of the will to preserve it.`,
      image: 'Ancientlibraryalex.jpg', caption: "A 19th-century artist's impression of the Library.", tags: ['ideas', 'mystery'],
    },
    {
      id: 'bronze-age-collapse', era: 'curveball', title: 'The Bronze Age Collapse', date: 'c. 1200–1150 BC',
      blurb: "Around 1200 BC, a whole interconnected world of Mediterranean kingdoms — Mycenaean Greece, the Hittites and more — collapsed within a couple of generations. Cities burned, writing was lost, and no one is entirely sure why.",
      detail: `Around 1200 BC, the eastern Mediterranean was home to a glittering, interconnected network of Bronze Age civilisations: Mycenaean Greece of the Trojan War legends, the mighty Hittite Empire in Anatolia, the New Kingdom of Egypt, and rich trading cities along the coast of the Levant. They exchanged goods, letters and diplomats, and their prosperity depended on long-distance trade — especially in the tin and copper needed to make bronze, which came from far-flung sources.

Then, within the span of just a few decades, almost all of it collapsed. City after city across the region was violently destroyed and often never rebuilt. The Hittite Empire vanished entirely. Mycenaean Greece fell so completely that its people even forgot how to write, plunging the region into a "Dark Age" that lasted centuries. It was one of the most dramatic and mysterious societal collapses in all of history — and historians still argue about why it happened.

There is no single agreed cause. Ancient Egyptian records describe waves of mysterious raiders they called the "Sea Peoples," who attacked coastlines and even threatened Egypt itself. But most scholars now think no one factor is enough. The likeliest explanation is a cascading "perfect storm": a run of severe droughts and famine, earthquakes, warfare and migration, all striking a tightly interconnected system in which the failure of one part brought down the others like dominoes.

That is precisely what makes the Bronze Age Collapse so unsettling — and so relevant. It is a stark historical example of how a sophisticated, wealthy, globalised world, one that seemed permanent, can unravel with terrifying speed when several shocks hit at once and the connections that made it strong suddenly become the channels through which it falls apart.`,
      image: 'Medinet_Habu_Ramses_III._Tempel_Nordwand_Abzeichnung_01.jpg', caption: 'Egyptian relief showing battle with the Sea Peoples.', tags: ['disaster', 'mystery'],
    },
    {
      id: 'antikythera', era: 'curveball', title: 'The Antikythera Mechanism', date: 'c. 100 BC',
      blurb: "Divers found a corroded lump of bronze in an ancient shipwreck that turned out to be a hand-cranked astronomical computer — with dozens of precision gears. Nothing of comparable complexity is known for the next 1,000-plus years.",
      detail: `In 1901, sponge divers exploring an ancient Roman-era shipwreck off the tiny Greek island of Antikythera hauled up, among statues and treasure, an unremarkable-looking lump of corroded bronze about the size of a shoebox. For decades it sat largely ignored in a museum, slowly revealing that it was something that should not, by all conventional understanding, have existed in the ancient world.

Inside the corrosion was a mechanism of astonishing sophistication: dozens of finely-cut, interlocking bronze gears, some with teeth barely a millimetre apart. Modern X-ray and CT scanning finally revealed what it did. By turning a hand crank, an ancient user could model the movements of the Sun, the Moon and the known planets across the sky; track the phases of the Moon; and even predict solar and lunar eclipses years in advance. It also displayed calendars — including, remarkably, the four-year schedule of the ancient Greek athletic games such as the Olympics.

In other words, it was an analog computer, built around 100 BC, that encoded a working model of the cosmos in bronze gearwork. What makes it almost eerie is that nothing else of remotely comparable mechanical complexity survives from the ancient world — and nothing like it would appear again for well over a thousand years, until the intricate astronomical clocks of medieval and Renaissance Europe.

The Antikythera Mechanism forces historians to confront how much has simply been lost. It proves that ancient Greek engineering and mathematical craftsmanship reached heights we had never imagined, and it raises a haunting question: if a device this advanced was casually being shipped across the Mediterranean two thousand years ago, what other knowledge and technology of the ancient world vanished without leaving a trace?`,
      image: "NAMA_Machine_d'Anticythère_1.jpg", caption: 'A fragment of the Antikythera Mechanism.', tags: ['science', 'mystery'],
    },
    {
      id: 'ching-shih', era: 'curveball', title: 'Ching Shih, the Pirate Queen', date: 'early 1800s',
      blurb: "A former performer in China became the most powerful pirate in history, commanding a fleet of hundreds of ships and tens of thousands of pirates — far larger than most navies. Then she negotiated her own retirement and kept the loot.",
      detail: `The most successful pirate in all of history was not Blackbeard or any of the famous Caribbean buccaneers — it was a woman named Ching Shih (also known as Zheng Yi Sao), who terrorised the South China Sea in the early 1800s. Beginning life in obscurity, she married a powerful pirate leader, and when he died she did not fade into the background: she took command of his entire pirate confederation and expanded it into something no one else in history has matched.

At the height of her power, Ching Shih commanded a staggering force — by some estimates as many as 1,800 ships and 70,000 to 80,000 pirates, sailors and support staff. That was larger than the navies of most nations. To hold such an unruly empire together, she ran it not on chaos but on strict discipline, issuing a detailed code of laws with severe punishments for disobedience, desertion or mistreating captives. Her fleet raided coastal towns, seized shipping and even ran protection rackets, and she repeatedly humiliated the naval forces sent to destroy her — Chinese imperial, Portuguese and British alike.

Unable to defeat her by force, the Chinese government eventually did the only thing left: they offered a deal. In 1810, Ching Shih negotiated an amnesty for herself and most of her pirates. And here is the truly remarkable part — she walked away from the negotiating table not in chains but a free and wealthy woman, allowed to keep the fortune she had plundered.

She retired from piracy and lived out a long, comfortable life, reportedly running a gambling house, and died peacefully in old age. In a profession famous for ending on the gallows or at the bottom of the sea, Ching Shih built the largest pirate empire ever known and then successfully retired with the loot — a genuine historical figure whose story sounds far too good to be true, and yet is.`,
      image: 'Ching_Shih.jpg', caption: 'A depiction of the pirate leader Ching Shih.', tags: ['adventure', 'mystery'],
    },
    {
      id: 'dancing-plague', era: 'curveball', title: 'The Dancing Plague of 1518', date: '1518',
      blurb: "In Strasbourg, a woman began dancing in the street and couldn't stop. Within a month, hundreds had joined her, dancing for days on end — some reportedly until they collapsed or died. Historians still debate what actually happened.",
      detail: `In July 1518, in the city of Strasbourg (then part of the Holy Roman Empire), a woman named Frau Troffea stepped into the street and began to dance. There was no music and no celebration — she simply could not stop. She danced for days. Then, bizarrely, others began to join her: within a week dozens were dancing uncontrollably, and within a month the number had reportedly swelled to around 400 people, caught in the same relentless, involuntary compulsion.

This was no party. Contemporary accounts and city records — which is why we know it genuinely happened — describe people dancing themselves to exhaustion and collapse, some suffering strokes, heart attacks or dying from the sheer physical strain. The baffled city authorities consulted physicians, who concluded, disastrously, that the sufferers could only recover by dancing the mania out of their systems. So the city actually provided halls, musicians and dancers to encourage them — which almost certainly made everything worse.

What on earth caused it? Historians have proposed several theories and still debate them. One popular idea blames ergot, a toxic mould that grows on damp rye and can cause convulsions and hallucinations — though it's unclear it could produce sustained, coordinated dancing. The explanation many historians now favour is mass psychogenic illness (a "mass hysteria"): a stress-induced, contagious disorder that spread through a population already traumatised by famine, disease and religious dread, perhaps amplified by local beliefs about a saint who could curse people with compulsive dancing.

Whatever the true cause, the Dancing Plague of 1518 is one of the strangest genuinely-documented events in European history — an entire community seized by a compulsion to dance until they dropped. It stands as a haunting reminder of how powerfully the human mind, and collective fear, can act upon the body in ways we still don't fully understand.`,
      image: 'Pieter_Bruegel_the_Elder_-_The_Beggars_-_WGA3512.jpg', caption: 'A 16th-century scene (illustrative).', tags: ['mystery', 'disease'],
    },
    {
      id: 'house-of-wisdom', era: 'curveball', title: "Baghdad's House of Wisdom", date: '8th–13th century',
      blurb: "While much of Europe struggled after Rome's fall, Baghdad hosted a golden age of learning where scholars translated and expanded the knowledge of the ancient world. The very words 'algebra' and 'algorithm' come from this era.",
      detail: `In the centuries after the fall of the western Roman Empire, a common (and oversimplified) image is of Europe sunk in a "Dark Age." But at the very same time, on the other side of the Mediterranean, one of history's greatest flowerings of learning was underway. Under the Abbasid caliphs, the new city of Baghdad grew into the largest and richest metropolis in the world, and at its heart lay a great centre of scholarship often remembered as the "House of Wisdom."

There, a remarkable project unfolded: the systematic gathering and translation of the accumulated knowledge of the ancient world — Greek, Persian, Indian and more — into Arabic. Scholars of many faiths, Muslim, Christian and Jewish, worked side by side to preserve texts by thinkers like Aristotle, Euclid and Ptolemy, many of which might otherwise have been lost forever. Crucially, they did not merely copy; they questioned, corrected and built upon what they found.

The advances were profound and their fingerprints are all over modern life. The mathematician al-Khwarizmi wrote a foundational treatise whose title gave us the word "algebra," and his own Latinised name gave us the word "algorithm" — the concept at the heart of every computer program running today. Scholars in this world made major strides in medicine, astronomy, optics, chemistry and more, and adopted the Indian decimal number system (including zero) that we still use, spreading it westward as "Arabic numerals."

Perhaps the most important part of the story is what came next. Much of this preserved and advanced knowledge eventually flowed into Europe — through Muslim Spain, through the contacts of the Crusades and through translation — where it helped ignite the Renaissance and the Scientific Revolution. The House of Wisdom is a powerful reminder that knowledge belongs to no single culture: it is passed, like a torch, from civilisation to civilisation across the centuries.`,
      image: 'Maqamat_hariri.jpg', caption: 'Scholars in a library, from a 13th-century manuscript.', tags: ['ideas', 'science'],
    },
    {
      id: 'year-without-summer', era: 'curveball', title: 'The Year Without a Summer', date: '1816',
      blurb: "A gigantic volcanic eruption on the far side of the world cooled the entire planet, causing crop failures, famine and snow in summer. It also, strangely, helped inspire the novel Frankenstein.",
      detail: `In April 1815, Mount Tambora on the Indonesian island of Sumbawa erupted in the single most powerful volcanic explosion in recorded human history. The blast killed tens of thousands of people directly and blew an immense quantity of ash and sulphur gases high into the upper atmosphere, where they spread around the entire planet, forming a veil that dimmed the sunlight reaching the Earth's surface.

The result, over a year later and half a world away, was catastrophe by climate. The year 1816 became known across Europe and North America as "the Year Without a Summer." Temperatures dropped abnormally; there were freak frosts and even snow in June and July; skies were strangely dim and lurid, producing eerie, glowing sunsets that some painters of the era captured on canvas. Crops failed across the Northern Hemisphere, triggering food shortages, soaring prices, riots and one of the worst famines of the 19th century.

The knock-on effects rippled through society in unexpected ways. The failure of oat harvests, which fed horses, may even have helped inspire the invention of an early bicycle as an alternative form of transport. But the strangest cultural consequence unfolded on the shores of Lake Geneva in Switzerland. There, a group of writers on holiday — including the poet Lord Byron and the young Mary Shelley — found themselves trapped indoors by the relentless cold and gloom.

To pass the miserable time, they challenged each other to write ghost stories. Out of that dark, volcano-chilled summer came Mary Shelley's tale of a scientist who reanimates the dead: Frankenstein, one of the most influential novels ever written and a founding work of science fiction. It's a perfect, almost unbelievable illustration of how interconnected the world is — how a volcano erupting on a remote Indonesian island can starve European farmers and, in the same stroke, help give birth to a monster that still haunts our imagination two centuries later.`,
      image: '1815_tambora_explosion.png', caption: "Map of the 1815 Tambora eruption's ashfall.", tags: ['disaster', 'science'],
    },
    {
      id: 'emu-war', era: 'curveball', title: 'The Great Emu War', date: '1932',
      blurb: "Australia deployed soldiers with machine guns to cull tens of thousands of emus raiding farmland — and the emus, more or less, won. The birds scattered, dodged and outlasted the military, which withdrew in something close to defeat.",
      detail: `In 1932, in the middle of the Great Depression, farmers in the Western Australian district of Campion faced an unusual crisis. Around 20,000 emus — large, fast, flightless native birds — had descended on their wheat fields to feast and drink, trampling crops and wrecking fences at a time when the farmers, many of them struggling war veterans, could least afford the losses. Desperate, they appealed to the government for help, and the government responded in a way that has delighted history buffs ever since: it sent in the army.

A small military detachment was dispatched, armed with Lewis machine guns and thousands of rounds of ammunition, under the command of a Major Meredith. On paper it looked like an easy operation. In practice, it turned into a comedy of frustration. The emus proved to be far more cunning and resilient adversaries than anyone expected — fast runners that scattered in all directions at the first sign of trouble, split into small groups that were nearly impossible to target, and shrugged off hits with astonishing toughness.

The soldiers found the birds almost impossible to bring down in useful numbers. Ambushes failed, the guns jammed at crucial moments, and one attempt to mount a machine gun on a moving truck was defeated simply because the truck couldn't keep up with the sprinting emus over rough ground. After expending a large quantity of ammunition for a very modest tally of birds, the operation was quietly withdrawn. Major Meredith is even said to have remarked, with rueful admiration, that if the army had a division of soldiers with the emus' ability to take bullets, it could face any army in the world.

The "Emu War" thus went down as one of the few wars, tongue firmly in cheek, that a nation lost to a flock of birds. It's a genuine, well-documented episode — a reminder that history is not only tragedy and grandeur, but also, sometimes, gloriously absurd.`,
      image: 'Dromaius_novaehollandiae_-_台北市立動物園.jpg', caption: 'Emus — the unlikely victors of 1932.', tags: ['adventure', 'mystery'],
    },

    // ─────────── JAPAN ───────────
    {
      id: 'tale-of-genji', era: 'medieval', title: 'The Tale of Genji', date: 'c. 1008',
      blurb: "Around 1008, a lady of the Japanese imperial court wrote what many scholars call the world's first true novel — The Tale of Genji. Its psychological depth and elegance were centuries ahead of anything being written in Europe.",
      detail: `The author, known to us as Murasaki Shikibu, was a lady-in-waiting at the Heian court in Kyoto — the dazzling, hyper-refined imperial capital of early Japan. We do not even know her real name; "Murasaki" comes from a character in her own book. At a time when elite Japanese men wrote in Chinese, considered the "serious" language, aristocratic women wrote in the flowing Japanese kana script — and it was in that supposedly lesser medium that one of them produced a masterpiece.

The Tale of Genji follows the life and many loves of Hikaru Genji, the charming son of an emperor, and then the generation that follows him. Across 54 chapters and some 400 characters, it is astonishingly modern: less about action than about emotion, memory, jealousy, ageing and the bittersweet passing of time. It reads like a psychological novel written nine hundred years before the term existed.

The world it captures is that of the Heian aristocracy (roughly 794–1185), a court obsessed with beauty, poetry, calligraphy, incense and the exact shading of a robe's colours. Its guiding aesthetic was mono no aware — a gentle, wistful sensitivity to the impermanence of things, the sadness woven into fleeting beauty, like cherry blossoms precisely because they fall. That sensibility still runs deep in Japanese culture today.

Remarkably, the book has never gone out of readership in its thousand-year life. It has been endlessly illustrated, adapted, translated and studied, and it stands as a founding monument not only of Japanese literature but of world literature — and as a reminder that some of the most sophisticated art of the medieval world came from the brush of a court woman whose name we have lost.`,
      image: 'Genji_emaki_01003_002.jpg', caption: 'Scene from an illustrated Tale of Genji handscroll.', tags: ['ideas', 'art'],
    },
    {
      id: 'mongol-invasions-japan', era: 'medieval', title: 'The Mongol Invasions & the Kamikaze', date: '1274 & 1281',
      blurb: "Twice the Mongol Empire hurled vast invasion fleets at Japan, and twice enormous typhoons smashed them apart. The Japanese called these storms kamikaze — the 'divine wind' that saved their islands.",
      detail: `By the 1270s, the Mongols under Kublai Khan had conquered China and founded the Yuan dynasty, and they turned their gaze to the island kingdom of Japan. When the Japanese refused to submit, Kublai launched an invasion in 1274 — a huge fleet carrying tens of thousands of Mongol, Chinese and Korean troops that landed at Hakata Bay in Kyushu. The samurai, used to formal one-on-one combat, were shaken by the Mongols' massed tactics, exploding bombs and poisoned arrows.

Then the weather intervened. A powerful storm blew in and wrecked much of the fleet at anchor, forcing the survivors to retreat. Undeterred, Kublai returned in 1281 with an even more colossal force — one of the largest seaborne invasions in history before the 20th century, with some accounts describing over 4,000 ships and 140,000 men. The samurai, who had spent years building a defensive wall along the coast, held them at the beaches for weeks.

And once again, a massive typhoon struck, battering the anchored invasion fleet against the shore and drowning a huge portion of the invaders. Japan was saved a second time. The Japanese became convinced that their islands were divinely protected, and named the miraculous storms kamikaze — "divine wind."

The legend had a long and dark afterlife. Centuries later, in the desperate final months of World War II, Japan revived the word "kamikaze" for its suicide pilots, invoking that same idea of a divine wind that would repel a foreign invasion. In recent decades, underwater archaeologists have actually found the wreckage of Kublai's lost fleets off the Japanese coast, confirming the astonishing scale of the invasions the storms destroyed.`,
      image: 'Mōko_Shūrai_Ekotoba.jpg', caption: 'A samurai faces Mongol invaders (Moko Shurai Ekotoba scroll).', tags: ['war', 'empire'],
    },
    {
      id: 'sengoku-unification', era: 'exploration', title: 'The Unification of Japan', date: '1467–1615',
      blurb: "After a century of civil war, three warlords — Oda Nobunaga, Toyotomi Hideyoshi and Tokugawa Ieyasu — unified Japan one after another. A famous proverb captures each of their characters by how he would make a cuckoo sing.",
      detail: `For over a hundred years, Japan tore itself apart in the Sengoku ("Warring States") period, as regional warlords called daimyo fought endlessly for territory while the emperor and shogun looked on, powerless. Out of this chaos rose three extraordinary men who, in succession, would reunite the country.

First came Oda Nobunaga, a brilliant and ruthless innovator who embraced the newly-arrived European firearms and used them to devastating effect, crushing rivals and seizing central Japan before being betrayed and forced to take his own life by one of his own generals. His most capable follower, Toyotomi Hideyoshi — a man of humble, near-peasant origins, which made his rise almost unthinkable in that rigid society — avenged him and completed the conquest, becoming the effective ruler of all Japan.

After Hideyoshi's death, the patient and calculating Tokugawa Ieyasu outmaneuvered his rivals, won the decisive Battle of Sekigahara in 1600, and by 1615 had eliminated the last opposition. He founded the Tokugawa shogunate, which would rule Japan in peace for over 250 years — the era of the samurai, isolation, and the flourishing culture of Edo.

The Japanese remember the three unifiers through a famous proverb about a cuckoo that will not sing. Nobunaga says, "If the cuckoo does not sing, kill it." Hideyoshi says, "If the cuckoo does not sing, make it want to sing." Ieyasu says, "If the cuckoo does not sing, wait." In three short lines it captures the ruthless conqueror, the persuasive schemer, and the patient strategist who ultimately outlasted them both — and it's still used in Japan today to describe personality and leadership.`,
      image: 'Odanobunaga.jpg', caption: 'Oda Nobunaga, the first of the three unifiers.', tags: ['war', 'politics'],
    },
    {
      id: 'great-wave-hokusai', era: 'revolutions', title: "Hokusai's Great Wave", date: 'c. 1831',
      blurb: "Katsushika Hokusai's woodblock print 'The Great Wave off Kanagawa' is one of the most recognised images on Earth — and a product of Edo Japan's booming popular art form, ukiyo-e.",
      detail: `During Japan's peaceful, prosperous Edo period, a vibrant urban culture flourished in cities like Edo (modern Tokyo), and with it came ukiyo-e — "pictures of the floating world." These were woodblock prints depicting the pleasures of city life: kabuki actors, fashionable beauties, landscapes and famous views. Crucially, because prints could be mass-produced from carved blocks, they were cheap and popular art for ordinary townspeople, not treasures locked away for the elite.

The undisputed master was Katsushika Hokusai, an eccentric, endlessly inventive artist who claimed he only truly began to understand his craft in old age. Around 1831, when he was already about seventy, he created his series Thirty-Six Views of Mount Fuji — and its first print, The Great Wave off Kanagawa, became the most famous Japanese artwork in the world.

Look closely and the composition is genius: a towering, claw-like wave rears up, dwarfing three slender boats of terrified fishermen, while in the distance the serene, snow-capped Mount Fuji sits small and calm — the still, eternal centre against nature's fury. Hokusai used a brilliant new imported pigment, Prussian blue, to give the wave its vivid, lasting colour.

When Japan later opened to the West, prints like these flooded into Europe and set off a craze called Japonisme. Their bold flat colours, daring compositions and everyday subjects astonished and influenced Western artists — Monet collected them, Van Gogh copied them, and the composer Debussy put the Great Wave on the cover of his orchestral work La Mer. A humble, mass-produced print from Edo had quietly helped reshape the course of modern art.`,
      image: 'The_Great_Wave_off_Kanagawa.jpg', caption: 'The Great Wave off Kanagawa, by Katsushika Hokusai.', tags: ['art', 'ideas'],
    },
    {
      id: 'japan-economic-miracle', era: 'modern', title: "Japan's Economic Miracle", date: '1945–1990',
      blurb: "From the ashes and rubble of World War II, Japan rebuilt itself into the second-largest economy in the world within just a few decades — symbolised by the 1964 Tokyo Olympics and the first high-speed bullet train.",
      detail: `In 1945 Japan lay devastated: its cities firebombed, two obliterated by atomic weapons, its industry in ruins and its people facing hunger. Almost no one imagined that within a single generation the country would become an economic superpower. Yet that is exactly what happened, in a transformation so dramatic it is simply called the "economic miracle."

Through a combination of intense national effort, close cooperation between government and industry, heavy investment in education and technology, and a fierce dedication to manufacturing quality, Japan rebuilt at astonishing speed. Companies like Toyota, Sony, Honda and Panasonic grew from small firms into global giants, and "Made in Japan" went from meaning "cheap" to meaning "reliable and advanced." By the late 1960s Japan had the world's second-largest economy.

The symbolic moment came in 1964, when Tokyo hosted the Olympic Games — a proud announcement to the world that Japan had returned. Days before the opening ceremony, the country unveiled the Tōkaidō Shinkansen, the world's first high-speed "bullet train," streaking between Tokyo and Osaka at speeds no train had reached in regular service. It became an enduring emblem of Japanese engineering and ambition.

The boom eventually inflated into a colossal asset bubble in the 1980s, and its bursting around 1990 led to a long economic slowdown. But the achievement remains one of the great stories of the 20th century: a nation that turned total defeat into peaceful, world-leading prosperity in a matter of decades — and, incidentally, built the modern, high-tech Japan whose language is studied elsewhere in this app.`,
      image: 'Shinkansen_0_JNR.jpg', caption: 'The original 0-series Shinkansen bullet train.', tags: ['economy', 'technology'],
    },

    // ─────────── INDONESIA & SOUTHEAST ASIA ───────────
    {
      id: 'borobudur', era: 'medieval', title: 'Borobudur', date: 'c. 800',
      blurb: "On the Indonesian island of Java stands Borobudur, the largest Buddhist temple in the world — a colossal stone mandala built around 800 AD, then mysteriously abandoned and buried under volcanic ash and jungle for centuries.",
      detail: `Borobudur was built around 800 AD by the Sailendra dynasty, at a time when Java was a wealthy and sophisticated centre of Buddhist civilisation. It is not a temple you enter, but one you climb: an immense stepped pyramid of some two million blocks of volcanic stone, rising through nine stacked platforms toward a great central dome, forming a giant three-dimensional mandala — a map of the Buddhist cosmos in stone.

The scale of its artistry is staggering. Its walls carry more than 2,600 relief panels — the largest and most complete collection of Buddhist reliefs on Earth — telling stories of the Buddha's life and teachings, alongside 504 seated Buddha statues. Pilgrims were meant to walk clockwise up through the levels, moving symbolically from the world of desire, through the world of forms, to the formless enlightenment at the summit.

Then, remarkably, it was abandoned. Within a couple of centuries the centre of Javanese power shifted east, the island gradually converted to Islam, and Borobudur was left to the jungle. Volcanic eruptions blanketed it in ash, and vegetation swallowed it, until this colossal monument effectively vanished from memory for hundreds of years.

It was brought back to the world's attention in 1814, during a brief British administration of Java, when Sir Thomas Stamford Raffles heard rumours of a great buried monument and sent men to investigate. What they uncovered astonished them. After major 20th-century restoration efforts, Borobudur is once again a place of pilgrimage and a UNESCO World Heritage Site — a breathtaking reminder of the depth and grandeur of Southeast Asia's own ancient civilisations.`,
      image: 'Borobudur_Temple.jpg', caption: 'Borobudur, Central Java, Indonesia.', tags: ['religion', 'architecture'],
    },
    {
      id: 'majapahit', era: 'exploration', title: 'The Majapahit Empire', date: 'c. 1293–1527',
      blurb: "Based on Java, Majapahit was the greatest maritime empire of medieval Southeast Asia, its trade and naval power reaching across much of what is now Indonesia — and its memory still shapes the nation today.",
      detail: `Founded in 1293, the Majapahit Empire grew from its heartland in eastern Java into the dominant power of the region, a "thalassocracy" — an empire of the sea. Rather than ruling through conquest of vast land territories, it projected influence across the islands of the archipelago through naval strength, trade and diplomacy, controlling the lucrative flow of spices, gold and goods that passed through Southeast Asian waters.

Its golden age is associated with the powerful prime minister Gajah Mada, who according to tradition swore a famous oath — the Palapa oath — that he would taste no spice or luxury until he had brought the whole archipelago, or Nusantara, under Majapahit's sway. Under his leadership the empire reached its greatest extent, its influence touching much of modern Indonesia and beyond.

Majapahit was a Hindu-Buddhist civilisation, and its court produced sophisticated literature, art and law, blending Indian religious traditions with local Javanese culture. Merchants from China, India and the Middle East thronged its ports, making it a genuinely cosmopolitan hub of the medieval maritime world.

The empire gradually declined through the 1400s and 1500s amid internal conflict and the steady spread of Islam through the trading networks of the islands, eventually giving way to the Muslim sultanates. But Majapahit never faded from memory. Modern Indonesia consciously draws on it as a founding symbol of national unity across the archipelago — even Gajah Mada's word "Nusantara" was chosen as the name of the country's new capital, a direct link across seven centuries to that medieval empire of the sea.`,
      image: 'Majapahit_Empire.svg', caption: 'The extent of the Majapahit Empire.', tags: ['empire', 'exploration'],
    },
    {
      id: 'krakatoa', era: 'revolutions', title: 'The Eruption of Krakatoa', date: '1883',
      blurb: "The 1883 eruption of Krakatoa in Indonesia produced one of the loudest sounds ever recorded — heard nearly 5,000 km away — and its tsunamis killed tens of thousands. It even cooled the entire planet.",
      detail: `In August 1883, the volcanic island of Krakatoa, sitting in the strait between Java and Sumatra, tore itself apart in a series of colossal explosions. The climactic blast is considered one of the most violent volcanic events in recorded history, and it produced what may be the loudest sound humans have ever documented: it was clearly heard on Rodrigues Island nearly 5,000 kilometres away, and the atmospheric pressure wave it generated was detected circling the entire globe multiple times on barometers around the world.

The greatest killer was not the eruption itself but the sea. The collapse of the island triggered enormous tsunamis, some over 30 metres high, that slammed into the densely populated coasts of Java and Sumatra and killed an estimated 36,000 people. Ships were carried far inland; entire towns were swept away.

The eruption's reach was global. It hurled so much ash and gas into the upper atmosphere that average world temperatures dropped for years, and skies around the planet were tinted with strange, vivid red sunsets — so striking that some scholars believe the lurid sky in Edvard Munch's painting The Scream was inspired by them.

Krakatoa also became one of the first great natural disasters of the modern connected age: thanks to the newly-laid global telegraph network, news of it flashed around the world within hours, and people everywhere followed the catastrophe almost in real time. The volcano itself was not finished — decades later a new cone, Anak Krakatau ("Child of Krakatoa"), rose from the sea where the old island had been, and it remains restless and dangerous today.`,
      image: 'Krakatoa_eruption_lithograph.jpg', caption: 'An 1888 lithograph of the 1883 Krakatoa eruption.', tags: ['disaster', 'science'],
    },
    {
      id: 'indonesia-independence', era: 'modern', title: 'Indonesian Independence', date: '1945',
      blurb: "Two days after Japan's surrender ended World War II, Sukarno proclaimed Indonesia's independence — sparking a four-year revolution against returning Dutch colonial rule that finally triumphed in 1949.",
      detail: `For over three centuries, the vast archipelago that is now Indonesia had been colonised by the Dutch, who grew fabulously wealthy from its spices, coffee, sugar and rubber while the local population had little say over their own land. A nationalist movement had been building for decades, led by figures like the charismatic Sukarno, who dreamed of a single unified nation stretching across the thousands of islands.

The turning point came with World War II. Japan occupied the Dutch East Indies from 1942 to 1945, shattering the myth of European invincibility and, in some ways, giving nationalist leaders more room to organise. When Japan suddenly surrendered in August 1945, a window opened. On 17 August 1945 — just two days later — Sukarno and Mohammad Hatta read out a short, momentous Proclamation of Independence, declaring the birth of the Republic of Indonesia.

Independence was proclaimed, but it still had to be won. The Dutch attempted to reassert colonial control, and there followed four years of bitter armed struggle and tense diplomacy — the Indonesian National Revolution — marked by fierce battles like the one at Surabaya. Under growing international pressure, the Netherlands finally recognised Indonesian sovereignty in December 1949.

The new nation was the fourth most populous country on Earth and the largest Muslim-majority nation in the world, an astonishingly diverse patchwork of hundreds of ethnic groups and languages spread across an archipelago wider than the United States. Its national motto, Bhinneka Tunggal Ika — "Unity in Diversity" — captured the enormous challenge and promise of binding so many peoples into one country. 17 August is still celebrated every year as Indonesia's Independence Day.`,
      image: 'Indonesia_declaration_of_independence_17_August_1945.jpg', caption: 'Sukarno proclaims Indonesian independence, 17 August 1945.', tags: ['revolution', 'politics'],
    },

    // ─────────── BROADER ASIA ───────────
    {
      id: 'zheng-he', era: 'exploration', title: "Zheng He's Treasure Voyages", date: '1405–1433',
      blurb: "Nearly a century before Columbus, the Chinese admiral Zheng He led seven epic voyages across the Indian Ocean with fleets of gigantic 'treasure ships' that dwarfed anything Europe would build for centuries.",
      detail: `In the early 1400s, Ming dynasty China launched a series of maritime expeditions on a scale the world had never seen. They were commanded by Zheng He, a remarkable figure — a Muslim court eunuch of humble origins who rose to become the emperor's grand admiral. Between 1405 and 1433 he led seven great voyages westward across the seas.

The fleets were staggering. Contemporary records describe "treasure ships" that some historians estimate were up to 120 metres long — several times the length of Columbus's Santa María — sailing in armadas of hundreds of vessels carrying as many as 27,000 sailors, soldiers, translators, doctors and craftsmen. Nothing in Europe came close for another five centuries.

Yet unlike the later European voyages of conquest, Zheng He's expeditions were mainly about prestige, diplomacy and trade. He sailed to Southeast Asia, India, the Persian Gulf, Arabia and the east coast of Africa, exchanging gifts, establishing tributary relationships, and returning with exotic treasures — most famously a live giraffe from Africa, which caused a sensation at the Chinese court, where some took it for the mythical qilin, a sign of heavenly favour.

Then, abruptly, it all stopped. After the voyages ended, a more inward-looking faction gained power at court, the expeditions were halted as wasteful, and the great fleets were left to rot; some records were even destroyed. China turned away from the oceans just as Europe was about to turn toward them. It stands as one of history's great "what ifs" — a moment when the most powerful maritime nation on Earth chose to sail home and shut the door.`,
      image: 'Tribute_Giraffe_with_Attendant.jpg', caption: 'A giraffe brought back by Zheng He, depicted in a Ming painting.', tags: ['exploration', 'empire'],
    },
    {
      id: 'taj-mahal', era: 'exploration', title: 'The Taj Mahal', date: '1632–1653',
      blurb: "The Mughal emperor Shah Jahan built the Taj Mahal as a tomb for his beloved wife — a monument of white marble so perfect it is widely considered the most beautiful building ever made.",
      detail: `In the 17th century, the Mughal Empire ruled most of the Indian subcontinent in fabulous wealth and splendour, blending Persian, Islamic and Indian traditions into a dazzling court culture. Its emperor, Shah Jahan, was a passionate builder — but his greatest creation was born of grief. When his beloved wife Mumtaz Mahal died giving birth to their fourteenth child, the heartbroken emperor resolved to build her a tomb worthy of his love.

The result, constructed over roughly two decades from around 1632, was the Taj Mahal at Agra. It reportedly took more than 20,000 workers and craftsmen, along with over a thousand elephants to haul materials, drawing artisans from across the empire and beyond. The gleaming white marble was inlaid with thousands of semi-precious stones — jade, turquoise, lapis lazuli — in intricate floral patterns.

Its beauty lies in its perfect balance. The whole complex is almost flawlessly symmetrical, set within formal gardens and reflected in a long watercourse, with four slender minarets framing the central dome. The marble seems to change colour with the light — soft pink at dawn, dazzling white at midday, silvery under the moon — as if the building itself were alive.

There is a poignant coda. In his old age, Shah Jahan was overthrown and imprisoned by his own ruthless son, Aurangzeb. He spent his final years confined in the Agra Fort, from where, it is said, he could gaze across the river at the tomb he had built for his wife. When he died, he was laid to rest beside her inside it. The Taj Mahal endures as both a masterpiece of Indo-Islamic architecture and the world's most famous monument to love.`,
      image: 'Taj_Mahal_(Edited).jpeg', caption: 'The Taj Mahal at Agra, India.', tags: ['architecture', 'empire'],
    },
    {
      id: 'gandhi-independence', era: 'modern', title: 'Gandhi & Indian Independence', date: '1947',
      blurb: "Mohandas Gandhi led India to independence from the British Empire through mass nonviolent resistance — a strategy that won freedom for one-fifth of humanity and inspired civil-rights movements worldwide.",
      detail: `For nearly two centuries, Britain ruled India — the "jewel in the crown" of its empire — governing hundreds of millions of people. The movement that ended that rule was led, above all, by Mohandas Karamchand Gandhi, a slight, softly-spoken lawyer who became one of the most influential figures of the 20th century, revered as "Mahatma" (great soul).

Gandhi's revolutionary idea was satyagraha — nonviolent resistance. Rather than meeting imperial power with weapons, he mobilised ordinary Indians in mass campaigns of civil disobedience: boycotting British goods, refusing to cooperate with unjust laws, and enduring beatings and imprisonment without striking back. His most famous act was the Salt March of 1930, a 385-kilometre walk to the sea to make salt in defiance of the British monopoly — a simple, brilliant gesture that galvanised the whole nation and drew the world's attention.

After decades of struggle, and weakened by the Second World War, Britain finally agreed to leave. India won its independence on 15 August 1947. But the triumph was shadowed by tragedy: the subcontinent was partitioned into two nations, India and Pakistan, along religious lines. The Partition uprooted an estimated 15 million people in a chaotic mass migration and unleashed horrific communal violence in which hundreds of thousands died.

Gandhi himself, heartbroken by the bloodshed and pleading for peace between Hindus and Muslims, was assassinated in 1948 by an extremist who opposed his tolerance. Yet his method of principled nonviolence became one of the most powerful ideas of the modern age, directly inspiring Martin Luther King Jr. in the American civil-rights movement and Nelson Mandela's long struggle against apartheid — proof that immense political change can be won without firing a shot.`,
      image: 'Mahatma-Gandhi,_studio,_1931.jpg', caption: 'Mahatma Gandhi, photographed in 1931.', tags: ['revolution', 'rights'],
    },
  ],
};

if (typeof module !== 'undefined') module.exports = HISTORY_CONTENT;
