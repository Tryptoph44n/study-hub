// Japanese Study Content — N3 Level
// Organized by real-life situations Edward faces at Sophia University

const JAPANESE_CONTENT = {

  // ─── SCENARIOS ──────────────────────────────────────────────────────────────
  // Each scenario is a full conversation you might actually have.
  // dialogue: alternating lines, vocab: words from that scene, grammar: one key pattern.

  scenarios: [

    // ─── LAB ────────────────────────────────────────────────────────────────

    {
      id: 'lab-first-day',
      category: 'lab',
      level: 1,
      title: 'First day in the lab',
      titleJp: '研究室の初日',
      situation: 'You just joined Prof. Tanaka\'s polymer research lab. You introduce yourself and ask about the rules.',
      dialogue: [
        { speaker: 'あなた', jp: '田中先生、本日からお世話になります。ヨハンと申します。', romaji: 'Tanaka-sensei, honjitsu kara osewa ni narimasu. Johan to moushimasu.', en: 'Prof. Tanaka, I\'ll be in your care starting today. My name is Johan.' },
        { speaker: '田中先生', jp: 'ようこそ。こちらこそよろしく。まず研究室のルールを説明しますね。', romaji: 'Youkoso. Kochira koso yoroshiku. Mazu kenkyuushitsu no ruuru wo setsumei shimasu ne.', en: 'Welcome. Likewise, nice to meet you. First, let me explain the lab rules.' },
        { speaker: '田中先生', jp: '実験を始める前に、必ず保護メガネと白衣を着用してください。', romaji: 'Jikken wo hajimeru mae ni, kanarazu hogo megane to hakui wo chakuyou shite kudasai.', en: 'Before starting any experiment, always wear safety goggles and a lab coat.' },
        { speaker: 'あなた', jp: 'わかりました。薬品はどこに保管されていますか？', romaji: 'Wakarimashita. Yakuhin wa doko ni hokan sarete imasu ka?', en: 'Understood. Where are the chemicals stored?' },
        { speaker: '田中先生', jp: 'ドラフトチャンバーの隣のキャビネットに入っています。取り出す前に必ず確認してください。', romaji: 'Dorafuto chanbaa no tonari no kyabinetto ni haitte imasu. Toridasu mae ni kanarazu kakunin shite kudasai.', en: 'They\'re in the cabinet next to the fume hood. Always check before taking them out.' },
        { speaker: 'あなた', jp: '実験ノートは自分で用意するのですか？', romaji: 'Jikken nooto wa jibun de youi suru no desu ka?', en: 'Do I prepare my own lab notebook?' },
        { speaker: '田中先生', jp: 'はい。実験の記録は毎回詳しく書いてください。後で論文を書く時に重要になります。', romaji: 'Hai. Jikken no kiroku wa maikai kuwashiku kaite kudasai. Ato de ronbun wo kaku toki ni juuyou ni narimasu.', en: 'Yes. Write detailed records of every experiment. It becomes important when writing your thesis later.' },
      ],
      vocab: [
        { jp: '研究室', reading: 'けんきゅうしつ', en: 'research laboratory', example: '研究室には朝9時に来てください。' },
        { jp: '保護メガネ', reading: 'ほごメガネ', en: 'safety goggles', example: '実験中は保護メガネが必要です。' },
        { jp: '白衣', reading: 'はくい', en: 'lab coat', example: '白衣を着て実験しましょう。' },
        { jp: '薬品', reading: 'やくひん', en: 'chemicals / reagents', example: '薬品は慎重に扱ってください。' },
        { jp: 'ドラフトチャンバー', reading: 'ドラフトチャンバー', en: 'fume hood', example: '揮発性の薬品はドラフトチャンバーで使います。' },
        { jp: '実験ノート', reading: 'じっけんノート', en: 'lab notebook', example: '実験ノートに結果を記録します。' },
        { jp: '保管', reading: 'ほかん', en: 'storage, safekeeping', example: '試薬は冷蔵庫に保管しています。' },
        { jp: '着用', reading: 'ちゃくよう', en: 'to wear (formal)', example: '安全のため保護具を着用してください。' },
      ],
      grammar: {
        pattern: '〜する前に',
        meaning: 'Before doing ~',
        explanation: 'Use this to express doing something BEFORE another action. Very useful in lab settings for safety instructions.',
        examples: [
          { jp: '実験を始める前に確認してください。', en: 'Please check before starting the experiment.' },
          { jp: '研究室に入る前に白衣を着てください。', en: 'Please wear your lab coat before entering the lab.' },
          { jp: '帰る前に机を片付けてください。', en: 'Please clean up your desk before leaving.' },
        ]
      },
      practiceQuestions: [
        { type: 'translate', prompt: 'How do you say "Where are the chemicals stored?" in Japanese?', answer: '薬品はどこに保管されていますか？', hints: ['薬品 = chemicals', '保管 = storage', 'どこ = where'] },
        { type: 'fill', prompt: '実験を始める___に、保護メガネをつけてください。', answer: '前', options: ['前', '後', '間', '時'] },
        { type: 'choose', prompt: 'You want to say "I will be in your care starting today." Which is correct?', options: ['本日からお世話になります。', '今日から大丈夫です。', '今日からよろしいですか？', '本日からお願いします。'], answer: 0 },
      ]
    },

    {
      id: 'lab-experiment-help',
      category: 'lab',
      level: 1,
      title: 'Asking for help during an experiment',
      titleJp: '実験中に質問する',
      situation: 'During a synthesis experiment, something doesn\'t look right. You ask your senior lab member (先輩) for advice.',
      dialogue: [
        { speaker: 'あなた', jp: 'すみません、山田先輩、少しよろしいですか？', romaji: 'Sumimasen, Yamada-senpai, sukoshi yoroshii desu ka?', en: 'Excuse me, Yamada-senpai, do you have a moment?' },
        { speaker: '山田先輩', jp: 'どうしたの？', romaji: 'Doushita no?', en: 'What\'s up?' },
        { speaker: 'あなた', jp: '重合反応をしているんですが、溶液の色が変わってきて、これは正常ですか？', romaji: 'Juugou hannou wo shite iru n desu ga, youeki no iro ga kawatte kite, kore wa seijou desu ka?', en: 'I\'m doing a polymerization reaction, but the color of the solution is changing. Is this normal?' },
        { speaker: '山田先輩', jp: 'ちょっと見せて。……あ、これはモノマーが消費されているサインだよ。問題ないよ。', romaji: 'Chotto misete. ...A, kore wa monoomaa ga shouhi sarete iru sain da yo. Mondai nai yo.', en: 'Let me see. ...Oh, this is a sign that the monomer is being consumed. No problem.' },
        { speaker: 'あなた', jp: 'そうですか。反応時間はあとどのくらいかかりますか？', romaji: 'Sou desu ka. Hannou jikan wa ato dono kurai kakarimasu ka?', en: 'I see. About how much longer will the reaction take?' },
        { speaker: '山田先輩', jp: 'この温度だと、あと2時間くらいかな。その間は30分ごとにサンプルを取って確認するといいよ。', romaji: 'Kono ondo da to, ato ni jikan kurai kana. Sono aida wa sanjuppun goto ni sanpuru wo totte kakunin suru to ii yo.', en: 'At this temperature, about 2 more hours. During that time, it\'s good to take a sample every 30 minutes to check.' },
        { speaker: 'あなた', jp: 'わかりました。ありがとうございます、助かりました。', romaji: 'Wakarimashita. Arigatou gozaimasu, tasukarimashita.', en: 'Understood. Thank you, that was a big help.' },
      ],
      vocab: [
        { jp: '重合反応', reading: 'じゅうごうはんのう', en: 'polymerization reaction', example: 'ラジカル重合反応を観察しています。' },
        { jp: '溶液', reading: 'ようえき', en: 'solution', example: '溶液の濃度を測定してください。' },
        { jp: 'モノマー', reading: 'モノマー', en: 'monomer', example: 'モノマーがポリマーになります。' },
        { jp: '消費', reading: 'しょうひ', en: 'consumption', example: '試薬が消費されました。' },
        { jp: '反応時間', reading: 'はんのうじかん', en: 'reaction time', example: '反応時間は2時間です。' },
        { jp: '温度', reading: 'おんど', en: 'temperature', example: '温度を80°Cに保ってください。' },
        { jp: 'サンプルを取る', reading: 'サンプルをとる', en: 'to take a sample', example: '30分ごとにサンプルを取ります。' },
        { jp: '助かりました', reading: 'たすかりました', en: 'that was a big help', example: '説明してくれて助かりました。' },
      ],
      grammar: {
        pattern: '〜んですが',
        meaning: 'I am doing / It is the case that ~ (softened explanation seeking response)',
        explanation: 'This is one of the most natural ways to introduce a situation before asking a question. It sounds much more natural than stating things directly. Essential for talking to seniors/professors.',
        examples: [
          { jp: '反応がうまくいかないんですが、見ていただけますか？', en: 'The reaction isn\'t going well, could you take a look?' },
          { jp: 'データの解釈に迷っているんですが、相談できますか？', en: 'I\'m unsure about interpreting the data, can we talk about it?' },
          { jp: '先生に相談したいんですが、今よろしいですか？', en: 'I wanted to consult with you, do you have a moment now?' },
        ]
      },
      practiceQuestions: [
        { type: 'choose', prompt: 'How do you ask a senior for a moment of their time (politely)?', options: ['ちょっといい？', 'すみません、少しよろしいですか？', '時間ある？', 'お願いします。'], answer: 1 },
        { type: 'translate', prompt: '"The reaction isn\'t going well" — say it naturally in Japanese using 〜んですが', answer: '反応がうまくいかないんですが', hints: ['反応 = reaction', 'うまくいかない = not going well'] },
        { type: 'fill', prompt: 'この温度だと、あと2時間___かかります。', answer: 'くらい', options: ['くらい', 'ごろ', 'ほど', 'まで'] },
      ]
    },

    {
      id: 'lab-meeting-presentation',
      category: 'lab',
      level: 2,
      title: 'Lab meeting — presenting your progress',
      titleJp: 'ゼミ発表',
      situation: 'Weekly lab meeting (ゼミ). You present your experimental results and Prof. Tanaka asks you questions.',
      dialogue: [
        { speaker: 'あなた', jp: '先週の結果について発表します。ポリスチレンの合成を行い、分子量の測定を行いました。', romaji: 'Senshuu no kekka ni tsuite happyou shimasu. Porisuchiren no gousei wo okonai, bunshiryou no sokutei wo okonaimashita.', en: 'I will present last week\'s results. I performed polystyrene synthesis and measured the molecular weight.' },
        { speaker: 'あなた', jp: 'GPC分析の結果、数平均分子量は50,000 g/molで、分散度は1.2でした。', romaji: 'GPC bunseki no kekka, su-heikin bunshiryou wa 50,000 g/mol de, bunsando wa 1.2 deshita.', en: 'From GPC analysis, the number-average molecular weight was 50,000 g/mol, and the dispersity was 1.2.' },
        { speaker: '田中先生', jp: 'この分散度についてどう思いますか？', romaji: 'Kono bunsando ni tsuite dou omoimasu ka?', en: 'What do you think about this dispersity value?' },
        { speaker: 'あなた', jp: '1.2という値はリビング重合としては比較的良い結果だと考えています。ただ、もう少し低くできると思うので、次回は開始剤の量を調整してみます。', romaji: '1.2 to iu atai wa ribingu juugou to shite wa hikaku-teki yoi kekka da to kangaete imasu. Tada, mou sukoshi hikuku dekiru to omou node, jikai wa kaishi-zai no ryou wo chousei shite mimasu.', en: 'I think a value of 1.2 is a relatively good result for living polymerization. However, I think we can get it a bit lower, so next time I\'ll try adjusting the amount of initiator.' },
        { speaker: '田中先生', jp: 'いい考えですね。どの程度調整するつもりですか？', romaji: 'Ii kangae desu ne. Dono teido chousei suru tsumori desu ka?', en: 'Good thinking. How much do you plan to adjust it?' },
        { speaker: 'あなた', jp: '現在の濃度の80%に下げてみようと思っています。文献によると、この条件ではより狭い分散度が得られるようです。', romaji: 'Genzai no noudo no 80% ni sagete miyou to omotteimasu. Bunken ni yoru to, kono jouken dewa yori semai bunsando ga erareru you desu.', en: 'I\'m thinking of lowering it to 80% of the current concentration. According to the literature, narrower dispersity can be obtained under these conditions.' },
      ],
      vocab: [
        { jp: '発表', reading: 'はっぴょう', en: 'presentation, announcement', example: '来週ゼミで発表があります。' },
        { jp: '分子量', reading: 'ぶんしりょう', en: 'molecular weight', example: '分子量を測定しました。' },
        { jp: '分散度', reading: 'ぶんさんど', en: 'dispersity (Ð)', example: '分散度が低いほど均一です。' },
        { jp: '測定', reading: 'そくてい', en: 'measurement', example: 'GPCで分子量を測定します。' },
        { jp: '開始剤', reading: 'かいしざい', en: 'initiator', example: 'ラジカル重合には開始剤が必要です。' },
        { jp: '調整', reading: 'ちょうせい', en: 'adjustment', example: '条件を調整して実験します。' },
        { jp: '文献', reading: 'ぶんけん', en: 'literature, references', example: '文献を参考にしました。' },
        { jp: '濃度', reading: 'のうど', en: 'concentration', example: '溶液の濃度を変えてみます。' },
      ],
      grammar: {
        pattern: '〜と考えています / 〜と思っています',
        meaning: 'I think / I believe / I am thinking (expressing your opinion professionally)',
        explanation: 'When presenting to professors, use these instead of 〜と思います for a more confident, considered tone. Combine with 〜ようです (it appears that) when citing evidence.',
        examples: [
          { jp: 'この結果は予想通りだと考えています。', en: 'I believe this result is as expected.' },
          { jp: '文献によると、温度が影響していると考えられます。', en: 'According to the literature, temperature is considered to have an effect.' },
          { jp: '次回は条件を変えてみようと思っています。', en: 'I\'m thinking of trying different conditions next time.' },
        ]
      },
      practiceQuestions: [
        { type: 'translate', prompt: 'Say "I will present the results" formally.', answer: '結果について発表します', hints: ['結果 = results', '発表する = to present'] },
        { type: 'choose', prompt: 'Prof. asks your opinion on a result. Most professional response?', options: ['いい結果です！', 'この値は比較的良い結果だと考えています。', 'まあまあだと思います。', 'わかりません。'], answer: 1 },
        { type: 'fill', prompt: '文献に___と、この条件でより良い結果が得られるようです。', answer: 'よると', options: ['よると', 'ついて', 'おいて', 'したがって'] },
      ]
    },

    {
      id: 'lab-equipment',
      category: 'lab',
      level: 1,
      title: 'Using lab equipment for the first time',
      titleJp: '機器の使い方を教えてもらう',
      situation: 'You need to use the rotary evaporator for the first time. Your senior shows you how.',
      dialogue: [
        { speaker: 'あなた', jp: 'ロータリーエバポレーターを使ったことがないんですが、使い方を教えていただけますか？', romaji: 'Rootarii ebapooreeta wo tsukatta koto ga nai n desu ga, tsukaikata wo oshiete itadakemasu ka?', en: 'I\'ve never used the rotary evaporator before — could you teach me how to use it?' },
        { speaker: '山田先輩', jp: 'もちろん。まず、フラスコをセットして、真空ポンプをつなぎます。', romaji: 'Mochiron. Mazu, furasuko wo setto shite, shinku ponpu wo tsunagimasu.', en: 'Of course. First, set the flask, then connect the vacuum pump.' },
        { speaker: '山田先輩', jp: '次に、温水バスの温度を設定して、回転数を調整します。今日は60°C、100rpmでやってみましょう。', romaji: 'Tsugi ni, onsui basu no ondo wo settei shite, kaiten-suu wo chousei shimasu. Kyou wa 60°C, 100rpm de yatte mimashou.', en: 'Next, set the temperature of the water bath and adjust the rotation speed. Today let\'s try 60°C at 100 rpm.' },
        { speaker: 'あなた', jp: 'バスの温度を上げすぎると、溶媒が急に沸騰することがありますか？', romaji: 'Basu no ondo wo agestugiru to, youbai ga kyuu ni futtou suru koto ga arimasu ka?', en: 'If the bath temperature is too high, can the solvent suddenly boil over?' },
        { speaker: '山田先輩', jp: 'そう、バンピングといってね。だから少しずつ温度を上げるのが大事。', romaji: 'Sou, banpingu to itte ne. Dakara sukoshi zutsu ondo wo ageru no ga daiji.', en: 'Exactly, that\'s called bumping. So it\'s important to raise the temperature gradually.' },
        { speaker: 'あなた', jp: 'わかりました。溶媒を回収した後はどうすればいいですか？', romaji: 'Wakarimashita. Youbai wo kaishuu shita ato wa dou sureba ii desu ka?', en: 'Understood. What should I do after collecting the solvent?' },
        { speaker: '山田先輩', jp: '回収したものは廃液タンクに適切に処理してください。絶対に流しに捨てないでね。', romaji: 'Kaishuu shita mono wa haieki tanku ni tekisetsu ni shori shite kudasai. Zettai ni nagashi ni sutenaide ne.', en: 'Dispose of what you collect properly in the waste solvent tank. Never pour it down the drain.' },
      ],
      vocab: [
        { jp: 'ロータリーエバポレーター', reading: 'ロータリーエバポレーター', en: 'rotary evaporator', example: 'ロータリーエバポレーターで溶媒を除去します。' },
        { jp: '真空ポンプ', reading: 'しんくうポンプ', en: 'vacuum pump', example: '真空ポンプで圧力を下げます。' },
        { jp: '溶媒', reading: 'ようばい', en: 'solvent', example: '溶媒を蒸発させます。' },
        { jp: '沸騰', reading: 'ふっとう', en: 'boiling', example: '溶媒が沸騰し始めました。' },
        { jp: '廃液', reading: 'はいえき', en: 'waste liquid', example: '廃液は適切に処理してください。' },
        { jp: '回収', reading: 'かいしゅう', en: 'collection, recovery', example: '溶媒を回収してください。' },
        { jp: '処理', reading: 'しょり', en: 'treatment, disposal', example: '廃液を適切に処理します。' },
        { jp: '使い方', reading: 'つかいかた', en: 'how to use', example: '機器の使い方を教えてください。' },
      ],
      grammar: {
        pattern: '〜た ことが ない',
        meaning: 'Have never done ~',
        explanation: 'Use this to honestly say you\'ve never done something. Very useful when asking for instructions. Much more natural than just saying わかりません.',
        examples: [
          { jp: 'GPC分析をしたことがないんですが、教えてもらえますか？', en: 'I\'ve never done GPC analysis — could you teach me?' },
          { jp: 'この装置を使ったことがないです。', en: 'I\'ve never used this instrument.' },
          { jp: '論文を書いたことがないので、心配です。', en: 'I\'m worried because I\'ve never written a paper.' },
        ]
      },
      practiceQuestions: [
        { type: 'translate', prompt: '"Could you teach me how to use it?" (polite, to senior)', answer: '使い方を教えていただけますか？', hints: ['使い方 = how to use', '教えていただく = to be taught (humble)'] },
        { type: 'fill', prompt: 'GPC分析を___ことがないんですが、説明してもらえますか？', answer: 'した', options: ['した', 'して', 'する', 'し'] },
        { type: 'choose', prompt: 'Where do you dispose of waste solvents?', options: ['流しに捨てる', '廃液タンクに処理する', 'ゴミ箱に入れる', 'どこでもいい'], answer: 1 },
      ]
    },

    // ─── DAILY LIFE ───────────────────────────────────────────────────────────

    {
      id: 'convenience-store',
      category: 'daily',
      level: 1,
      title: 'Convenience store',
      titleJp: 'コンビニで',
      situation: 'You stop by 7-Eleven near Sophia University to grab lunch and get points on your app.',
      dialogue: [
        { speaker: 'スタッフ', jp: 'いらっしゃいませ。', romaji: 'Irasshaimase.', en: 'Welcome!' },
        { speaker: 'あなた', jp: 'あたためてもらえますか？', romaji: 'Atatamete moraemasuka?', en: 'Could you heat this up for me?' },
        { speaker: 'スタッフ', jp: 'はい、少々お待ちください。……温まりました。袋はご入用ですか？', romaji: 'Hai, shoushou omachi kudasai. ...Atatama rimashita. Fukuro wa go-iri you desu ka?', en: 'Yes, one moment please. ...It\'s warmed up. Do you need a bag?' },
        { speaker: 'あなた', jp: 'いいえ、大丈夫です。セブンアプリのポイント、使えますか？', romaji: 'Iie, daijoubu desu. Sebun apuri no pointo, tsukaemasu ka?', en: 'No, I\'m fine. Can I use 7-Eleven app points?' },
        { speaker: 'スタッフ', jp: 'はい、バーコードをスキャンしてください。', romaji: 'Hai, baakood wo sukyan shite kudasai.', en: 'Yes, please scan your barcode.' },
        { speaker: 'あなた', jp: '合計はいくらですか？', romaji: 'Goukei wa ikura desu ka?', en: 'How much is the total?' },
        { speaker: 'スタッフ', jp: '538円になります。', romaji: '538-en ni narimasu.', en: 'That\'ll be 538 yen.' },
        { speaker: 'あなた', jp: 'PayPayで払えますか？', romaji: 'PayPay de haraemasu ka?', en: 'Can I pay with PayPay?' },
        { speaker: 'スタッフ', jp: 'はい、こちらのQRコードを読み取ってください。', romaji: 'Hai, kochira no QR koodo wo yomitotte kudasai.', en: 'Yes, please scan this QR code.' },
      ],
      vocab: [
        { jp: 'あたためる', reading: 'あたためる', en: 'to heat up', example: 'お弁当をあたためてもらえますか？' },
        { jp: '袋', reading: 'ふくろ', en: 'bag', example: '袋は要りません。' },
        { jp: 'ご入用', reading: 'ごいりよう', en: 'do you need (formal)', example: '袋はご入用ですか？' },
        { jp: '合計', reading: 'ごうけい', en: 'total', example: '合計で千円です。' },
        { jp: '読み取る', reading: 'よみとる', en: 'to scan/read', example: 'QRコードを読み取ってください。' },
        { jp: '払う', reading: 'はらう', en: 'to pay', example: 'クレジットカードで払えますか？' },
        { jp: '少々お待ちください', reading: 'しょうしょうおまちください', en: 'please wait a moment (formal)', example: '少々お待ちください。' },
        { jp: 'スキャン', reading: 'スキャン', en: 'scan', example: 'バーコードをスキャンしてください。' },
      ],
      grammar: {
        pattern: '〜てもらえますか？',
        meaning: 'Could you ~ (for me)? — Natural request form',
        explanation: 'This is the most natural, non-pushy way to ask someone to do something for you in service situations. More polite than 〜てください.',
        examples: [
          { jp: 'レシートをもらえますか？', en: 'Could I get a receipt?' },
          { jp: 'もう一度言ってもらえますか？', en: 'Could you say that one more time?' },
          { jp: '領収書を出してもらえますか？', en: 'Could you give me a receipt (for reimbursement)?' },
        ]
      },
      practiceQuestions: [
        { type: 'translate', prompt: '"Could you heat this up?"', answer: 'あたためてもらえますか？', hints: ['あたためる = to heat up', '〜てもらえますか = could you'] },
        { type: 'choose', prompt: 'You want to pay with a card. What do you say?', options: ['カードでいいですか？', 'カードで払えますか？', 'カードをください。', 'カードはありますか？'], answer: 1 },
        { type: 'fill', prompt: '袋は___入用ですか？', answer: 'ご', options: ['ご', 'お', 'に', 'を'] },
      ]
    },

    {
      id: 'train-station',
      category: 'daily',
      level: 1,
      title: 'Getting around — trains and directions',
      titleJp: '電車と道案内',
      situation: 'You need to get from Sophia University (四ツ谷駅) to Shibuya. You miss your train and ask station staff.',
      dialogue: [
        { speaker: 'あなた', jp: 'すみません、渋谷駅に行くにはどの電車に乗ればいいですか？', romaji: 'Sumimasen, Shibuya-eki ni iku ni wa dono densha ni noreba ii desu ka?', en: 'Excuse me, which train should I take to get to Shibuya station?' },
        { speaker: '駅員', jp: '丸ノ内線で赤坂見附まで行って、銀座線に乗り換えてください。', romaji: 'Marunouchi-sen de Akasaka-mitsuke made itte, Ginza-sen ni norikaete kudasai.', en: 'Take the Marunouchi line to Akasaka-mitsuke, then transfer to the Ginza line.' },
        { speaker: 'あなた', jp: '所要時間はどのくらいですか？', romaji: 'Shoyou jikan wa dono kurai desu ka?', en: 'About how long does it take?' },
        { speaker: '駅員', jp: 'およそ25分くらいです。', romaji: 'Oyoso 25-fun kurai desu.', en: 'About 25 minutes.' },
        { speaker: 'あなた', jp: '改札の外に出てしまったんですが、どうすればいいですか？', romaji: 'Kaisatsu no soto ni dete shimatta n desu ga, dou sureba ii desu ka?', en: 'I accidentally went through the exit gate — what should I do?' },
        { speaker: '駅員', jp: '係員のいる窓口に声をかけてください。対応できます。', romaji: 'Kakari-in no iru madoguchi ni koe wo kakete kudasai. Taiou dekimasu.', en: 'Please speak to the staff at the service window. They can handle it.' },
        { speaker: 'あなた', jp: 'ありがとうございます。ICカードが使えますか？', romaji: 'Arigatou gozaimasu. IC kaado ga tsukaemasu ka?', en: 'Thank you. Can I use an IC card (Suica/Pasmo)?' },
        { speaker: '駅員', jp: 'はい、Suicaも PASMOも使えます。', romaji: 'Hai, Suica mo PASMO mo tsukaemasu.', en: 'Yes, both Suica and PASMO work.' },
      ],
      vocab: [
        { jp: '乗り換え', reading: 'のりかえ', en: 'transfer (trains)', example: '新宿で乗り換えてください。' },
        { jp: '所要時間', reading: 'しょようじかん', en: 'required time, duration', example: '所要時間は約30分です。' },
        { jp: '改札', reading: 'かいさつ', en: 'ticket gate', example: '改札を通ってください。' },
        { jp: '係員', reading: 'かかりいん', en: 'staff member in charge', example: '係員に聞いてみましょう。' },
        { jp: '窓口', reading: 'まどぐち', en: 'service window, counter', example: '窓口で確認してください。' },
        { jp: '声をかける', reading: 'こえをかける', en: 'to speak to, to call out to', example: 'スタッフに声をかけてください。' },
        { jp: '〜てしまった', reading: '〜てしまった', en: 'accidentally did ~ / did ~ (regret)', example: '改札を出てしまいました。' },
        { jp: 'およそ', reading: 'およそ', en: 'approximately, about', example: 'およそ20分かかります。' },
      ],
      grammar: {
        pattern: '〜てしまいました',
        meaning: 'I accidentally ~ / I ended up ~ (often with mild regret)',
        explanation: 'Use when something happened unintentionally, or you did something you shouldn\'t have. Very useful when explaining mistakes or accidents in daily life.',
        examples: [
          { jp: 'パスモを忘れてしまいました。', en: 'I accidentally forgot my PASMO.' },
          { jp: '反応を止めるのが遅すぎてしまいました。', en: 'I ended up stopping the reaction too late.' },
          { jp: '電車に乗り過ごしてしまいました。', en: 'I accidentally missed my stop.' },
        ]
      },
      practiceQuestions: [
        { type: 'translate', prompt: '"Which train should I take to go to Shibuya?"', answer: '渋谷に行くにはどの電車に乗ればいいですか？', hints: ['渋谷 = Shibuya', '〜に行くには = to go to ~', '乗ればいい = should ride'] },
        { type: 'fill', prompt: '改札の外に出て___んですが、どうすればいいですか？', answer: 'しまった', options: ['しまった', 'いた', 'みた', 'おいた'] },
        { type: 'choose', prompt: 'You want to know how long it takes. What do you ask?', options: ['いつ着きますか？', '所要時間はどのくらいですか？', '電車は何時ですか？', '時間はありますか？'], answer: 1 },
      ]
    },

    {
      id: 'restaurant-izakaya',
      category: 'daily',
      level: 1,
      title: 'Izakaya with labmates',
      titleJp: '居酒屋で先輩と',
      situation: 'After a long week, your lab goes out to an izakaya near campus. You order, chat, and handle the bill.',
      dialogue: [
        { speaker: 'スタッフ', jp: '何名様ですか？', romaji: 'Nan-mei sama desu ka?', en: 'How many people in your party?' },
        { speaker: 'あなた', jp: '4人です。禁煙席をお願いします。', romaji: 'Yonin desu. Kin-en seki wo onegai shimasu.', en: 'Four people. A non-smoking seat, please.' },
        { speaker: 'スタッフ', jp: 'こちらへどうぞ。ご注文はお決まりですか？', romaji: 'Kochira e douzo. Go-chuumon wa o-kimari desu ka?', en: 'This way please. Have you decided on your order?' },
        { speaker: 'あなた', jp: 'とりあえず生ビールを4つと、枝豆をください。あとは少し後で。', romaji: 'Toriaezu nama biiru wo yottsu to, edamame wo kudasai. Ato wa sukoshi ato de.', en: 'For now, four draft beers and edamame please. We\'ll order the rest in a little while.' },
        { speaker: '山田先輩', jp: 'ヨハンは日本語うまいな。どこで勉強したの？', romaji: 'Johan wa nihongo umai na. Doko de benkyou shita no?', en: 'Johan, your Japanese is good. Where did you study?' },
        { speaker: 'あなた', jp: 'ありがとうございます。でも、まだまだです。ずっと独学でやってきたんですが、会話が一番難しいです。', romaji: 'Arigatou gozaimasu. Demo, mada mada desu. Zutto dokugyaku de yatte kita n desu ga, kaiwa ga ichiban muzukashii desu.', en: 'Thank you. But I still have a long way to go. I\'ve been self-studying, but conversation is the hardest.' },
        { speaker: 'あなた', jp: 'すみません、お会計をお願いします。別々でお願いできますか？', romaji: 'Sumimasen, o-kaikei wo onegai shimasu. Betsu-betsu de onegai dekimasu ka?', en: 'Excuse me, can we have the bill? Can we pay separately?' },
        { speaker: 'スタッフ', jp: '申し訳ありませんが、別々でのお会計はできかねます。', romaji: 'Moushiwake arimasen ga, betsu-betsu de no o-kaikei wa deki-kanemasu.', en: 'I\'m sorry, but we\'re unable to split the bill separately.' },
        { speaker: '山田先輩', jp: '割り勘にしよう。一人2000円ずつでいい？', romaji: 'Warikan ni shiyou. Hitori 2000-en zutsu de ii?', en: 'Let\'s split it evenly. 2000 yen each OK?' },
      ],
      vocab: [
        { jp: '禁煙席', reading: 'きんえんせき', en: 'non-smoking seat', example: '禁煙席をお願いします。' },
        { jp: 'とりあえず', reading: 'とりあえず', en: 'for now, for the time being', example: 'とりあえずビールをください。' },
        { jp: 'まだまだ', reading: 'まだまだ', en: 'still have a long way to go, not yet there', example: '日本語はまだまだです。' },
        { jp: '独学', reading: 'どくがく', en: 'self-study', example: '独学でプログラミングを学びました。' },
        { jp: 'お会計', reading: 'おかいけい', en: 'bill, check', example: 'お会計をお願いします。' },
        { jp: '別々', reading: 'べつべつ', en: 'separately', example: '別々に払えますか？' },
        { jp: '割り勘', reading: 'わりかん', en: 'splitting the bill', example: '割り勘にしましょう。' },
        { jp: 'できかねます', reading: 'できかねます', en: 'unable to do (polite refusal)', example: '対応できかねます。' },
      ],
      grammar: {
        pattern: 'まだまだです',
        meaning: 'I still have a long way to go (humble, self-deprecating)',
        explanation: 'Japanese culture values humility. When someone compliments your Japanese, "まだまだです" is the natural, expected response — not accepting the compliment directly. Use it freely.',
        examples: [
          { jp: 'A: 日本語が上手ですね。B: いいえ、まだまだです。', en: 'A: Your Japanese is good. B: No, I still have a long way to go.' },
          { jp: '研究はまだまだこれからです。', en: 'My research still has a long way to go.' },
        ]
      },
      practiceQuestions: [
        { type: 'translate', prompt: '"Can we pay separately?" at a restaurant', answer: '別々でお願いできますか？', hints: ['別々 = separately', 'お願いできますか = can you please'] },
        { type: 'choose', prompt: 'A labmate says "日本語が上手ですね！". Natural response?', options: ['ありがとうございます！', 'まだまだです。', 'そうですね。', '知っています。'], answer: 1 },
        { type: 'fill', prompt: 'とりあえず生ビールを4___ください。', answer: 'つ', options: ['つ', 'こ', '本', '枚'] },
      ]
    },

    // ─── UNIVERSITY LIFE ──────────────────────────────────────────────────────

    {
      id: 'professor-office-hours',
      category: 'university',
      level: 2,
      title: 'Office hours — asking professor a question',
      titleJp: '先生のオフィスアワー',
      situation: 'You go to Prof. Tanaka\'s office to ask about a concept from the lecture that wasn\'t clear.',
      dialogue: [
        { speaker: 'あなた', jp: 'すみません、先生、少しよろしいでしょうか。先週の講義について質問があるんですが。', romaji: 'Sumimasen, sensei, sukoshi yoroshii deshou ka. Senshuu no kougi ni tsuite shitsumon ga aru n desu ga.', en: 'Excuse me, Professor, do you have a moment? I have a question about last week\'s lecture.' },
        { speaker: '田中先生', jp: 'どうぞ、入ってください。どの部分ですか？', romaji: 'Douzo, haitte kudasai. Dono bubun desu ka?', en: 'Please, come in. Which part is it?' },
        { speaker: 'あなた', jp: 'リビングアニオン重合のところで、分子量分布が狭くなる理由がよく理解できなくて。', romaji: 'Ribingu anion juugou no tokoro de, bunshiryou bunpu ga semaku naru riyuu ga yoku rikai dekinakute.', en: 'In the living anionic polymerization section, I couldn\'t quite understand why the molecular weight distribution becomes narrow.' },
        { speaker: '田中先生', jp: 'ああ、そこは重要なポイントですね。開始反応が成長反応より速いから全てのチェーンが同時に成長するんです。', romaji: 'Aa, soko wa juuyou na pointo desu ne. Kaishi hannou ga seichou hannou yori hayai kara subete no cheen ga doujini seichou suru n desu.', en: 'Ah, that\'s an important point. Because the initiation reaction is faster than the propagation reaction, all chains grow simultaneously.' },
        { speaker: 'あなた', jp: 'なるほど。つまり、全てのチェーンがほぼ同じ長さになるということですか？', romaji: 'Naruhodo. Tsumari, subete no cheen ga hobo onaji nagasa ni naru to iu koto desu ka?', en: 'I see. So that means all the chains become approximately the same length?' },
        { speaker: '田中先生', jp: 'その通りです。理解が早いですね。', romaji: 'Sono toori desu. Rikai ga hayai desu ne.', en: 'Exactly right. You grasp things quickly.' },
        { speaker: 'あなた', jp: 'ありがとうございます。追加でもう一つ聞いてもいいですか？', romaji: 'Arigatou gozaimasu. Tsuika de mou hitotsu kiite mo ii desu ka?', en: 'Thank you. Is it alright if I ask one more additional question?' },
      ],
      vocab: [
        { jp: '講義', reading: 'こうぎ', en: 'lecture', example: '先週の講義は難しかったです。' },
        { jp: '理解', reading: 'りかい', en: 'understanding, comprehension', example: '概念の理解が重要です。' },
        { jp: '分子量分布', reading: 'ぶんしりょうぶんぷ', en: 'molecular weight distribution', example: '分子量分布が狭いほど均一なポリマーです。' },
        { jp: 'なるほど', reading: 'なるほど', en: 'I see, I understand (realization)', example: 'なるほど、そういうことか。' },
        { jp: 'つまり', reading: 'つまり', en: 'in other words, that means', example: 'つまり、温度が重要だということですか？' },
        { jp: 'その通り', reading: 'そのとおり', en: 'exactly right, that\'s correct', example: 'その通りです。' },
        { jp: '追加で', reading: 'ついかで', en: 'additionally, on top of that', example: '追加で質問があります。' },
        { jp: 'オフィスアワー', reading: 'オフィスアワー', en: 'office hours', example: 'オフィスアワーに先生に会いに行きます。' },
      ],
      grammar: {
        pattern: 'なるほど / つまり〜ということですか？',
        meaning: 'I see... / So that means ~ ?',
        explanation: 'These two phrases are essential for academic conversations. "なるほど" shows you\'re following. "つまり〜ということですか" lets you confirm your understanding by paraphrasing — professors love this because it shows genuine engagement.',
        examples: [
          { jp: 'なるほど。つまり、温度が高いほど反応が速くなるということですか？', en: 'I see. So that means the higher the temperature, the faster the reaction?' },
          { jp: 'なるほど、そういうことか。', en: 'I see, so that\'s how it is.' },
          { jp: 'つまり、二つの方法は本質的に同じということですか？', en: 'In other words, the two methods are essentially the same?' },
        ]
      },
      practiceQuestions: [
        { type: 'translate', prompt: '"I couldn\'t quite understand that part" (for professor)', answer: 'よく理解できなくて', hints: ['よく = well/fully', '理解できない = cannot understand'] },
        { type: 'choose', prompt: 'Professor explains something. How do you show you understood and confirm?', options: ['はい、わかりました。', 'なるほど。つまり〜ということですか？', 'そうですか。', 'わからないです。'], answer: 1 },
        { type: 'fill', prompt: '___で、もう一つ聞いてもいいですか？', answer: '追加', options: ['追加', '以上', '最後', '補足'] },
      ]
    },

    {
      id: 'campus-registration',
      category: 'university',
      level: 1,
      title: 'Course registration & campus admin',
      titleJp: '履修登録と事務手続き',
      situation: 'You need to sort out course registration and visit the academic affairs office (教務課) at Sophia.',
      dialogue: [
        { speaker: 'あなた', jp: 'すみません、履修登録について聞きたいんですが。', romaji: 'Sumimasen, rishuutouroku ni tsuite kikitai n desu ga.', en: 'Excuse me, I\'d like to ask about course registration.' },
        { speaker: '事務員', jp: 'はい、どのようなご用件でしょうか？', romaji: 'Hai, dono you na go-youken deshou ka?', en: 'Yes, what can I help you with?' },
        { speaker: 'あなた', jp: '大学院の授業を学部生として受講できますか？', romaji: 'Daigakuin no jugyou wo gakubu-sei to shite jukou dekimasu ka?', en: 'Can I take graduate school courses as an undergraduate student?' },
        { speaker: '事務員', jp: '指導教員の許可があれば可能です。まず先生にご相談ください。', romaji: 'Shidou kyouin no kyoka ga areba kanou desu. Mazu sensei ni go-soudan kudasai.', en: 'It\'s possible if you have your supervising professor\'s permission. Please consult your professor first.' },
        { speaker: 'あなた', jp: 'わかりました。それから、成績証明書を発行してもらいたいんですが、どこで申請できますか？', romaji: 'Wakarimashita. Sorekara, seiseki shoumeisho wo hakkou shite moraitai n desu ga, doko de shinsei dekimasu ka?', en: 'I see. Also, I\'d like to get my transcript issued — where can I apply for that?' },
        { speaker: '事務員', jp: 'こちらの窓口で申請できます。学生証を持ってきてください。即日発行できます。', romaji: 'Kochira no madoguchi de shinsei dekimasu. Gakusei-shou wo motte kite kudasai. Sokujitsu hakkou dekimasu.', en: 'You can apply at this window. Please bring your student ID. We can issue it the same day.' },
        { speaker: 'あなた', jp: 'ありがとうございます。何部必要ですか？と聞かれたら、何と答えればいいですか？', romaji: 'Arigatou gozaimasu. Nan-bu hitsuyou desu ka? to kikaretara, nani to kotaereba ii desu ka?', en: 'Thank you. If they ask how many copies I need, what should I say?' },
        { speaker: '事務員', jp: '必要な部数をそのままお伝えください。例えば「2部お願いします」でいいです。', romaji: 'Hitsuyou na busuu wo sono mama o-tsutae kudasai. Tatoeba "ni-bu onegai shimasu" de ii desu.', en: 'Just tell us the number of copies you need. For example, "2 copies please" is fine.' },
      ],
      vocab: [
        { jp: '履修登録', reading: 'りしゅうとうろく', en: 'course registration', example: '履修登録の期限は今週です。' },
        { jp: '受講', reading: 'じゅこう', en: 'taking a course, attending a class', example: '大学院の授業を受講します。' },
        { jp: '指導教員', reading: 'しどうきょういん', en: 'supervising professor', example: '指導教員に相談してください。' },
        { jp: '成績証明書', reading: 'せいせきしょうめいしょ', en: 'academic transcript', example: '就職活動に成績証明書が必要です。' },
        { jp: '発行', reading: 'はっこう', en: 'issuance', example: '証明書を発行してもらいます。' },
        { jp: '申請', reading: 'しんせい', en: 'application, request', example: '窓口で申請してください。' },
        { jp: '即日', reading: 'そくじつ', en: 'same day', example: '即日発行できます。' },
        { jp: '学生証', reading: 'がくせいしょう', en: 'student ID card', example: '学生証を持ってきてください。' },
      ],
      grammar: {
        pattern: '〜てもらいたいんですが',
        meaning: 'I would like you to ~ (polite request at offices/admin)',
        explanation: 'The go-to phrase for official requests at university offices, government offices, or any formal service. More polite and softer than 〜てください.',
        examples: [
          { jp: '成績証明書を発行してもらいたいんですが。', en: 'I would like to have my transcript issued.' },
          { jp: '在学証明書を出してもらいたいんですが。', en: 'I would like to have an enrollment certificate issued.' },
          { jp: '住所変更の手続きをしてもらいたいんですが。', en: 'I would like to process an address change.' },
        ]
      },
      practiceQuestions: [
        { type: 'translate', prompt: '"Can I take a graduate course as an undergraduate?"', answer: '大学院の授業を学部生として受講できますか？', hints: ['大学院 = graduate school', '学部生 = undergraduate', '受講 = taking a course'] },
        { type: 'fill', prompt: '___教員の許可があれば、大学院の授業を受けられます。', answer: '指導', options: ['指導', '担当', '研究', '学部'] },
        { type: 'choose', prompt: 'You want your transcript issued. Best way to request at the window?', options: ['成績証明書をください。', '成績証明書を発行してもらいたいんですが。', '成績証明書が欲しいです。', '成績証明書、ありますか？'], answer: 1 },
      ]
    },

  ],

  // ─── VOCABULARY SETS ─────────────────────────────────────────────────────
  // Extra vocabulary grouped by topic for dedicated review sessions

  vocabSets: [
    {
      id: 'lab-equipment',
      title: 'Lab Equipment (実験器具)',
      words: [
        { jp: 'フラスコ', en: 'flask', example: '丸底フラスコを使います。' },
        { jp: '試験管', reading: 'しけんかん', en: 'test tube', example: '試験管に入れてください。' },
        { jp: 'ビーカー', en: 'beaker', example: '500mLのビーカーが必要です。' },
        { jp: 'ピペット', en: 'pipette', example: 'ピペットで5mL取ります。' },
        { jp: '遠心分離機', reading: 'えんしんぶんりき', en: 'centrifuge', example: '遠心分離機で分離します。' },
        { jp: '攪拌機', reading: 'かくはんき', en: 'stirrer', example: '攪拌機で混ぜます。' },
        { jp: '還流冷却器', reading: 'かんりゅうれいきゃくき', en: 'reflux condenser', example: '還流冷却器をつけてください。' },
        { jp: '分液漏斗', reading: 'ぶんえきろうと', en: 'separatory funnel', example: '分液漏斗で分離します。' },
        { jp: 'pH計', reading: 'pHけい', en: 'pH meter', example: 'pH計でpHを測ります。' },
        { jp: '天秤', reading: 'てんびん', en: 'balance, scale', example: '天秤で質量を測ります。' },
      ]
    },
    {
      id: 'n3-keigo',
      title: 'Essential Keigo (敬語) for Sophia',
      words: [
        { jp: 'いただく', en: 'to receive (humble) / to eat/drink (humble)', example: '先生に説明していただきました。' },
        { jp: 'おっしゃる', en: 'to say (respectful)', example: '先生がおっしゃった通りです。' },
        { jp: 'いらっしゃる', en: 'to be / to go / to come (respectful)', example: '先生は研究室にいらっしゃいますか？' },
        { jp: 'ご〜になる', en: 'honorific prefix for verbs', example: 'ご覧になりましたか？' },
        { jp: 'お〜する', en: 'humble prefix for verbs', example: 'お伝えします。' },
        { jp: '申し訳ありません', en: 'I\'m very sorry (formal apology)', example: '遅れて申し訳ありません。' },
        { jp: 'よろしければ', en: 'if it\'s alright with you', example: 'よろしければ、ご説明します。' },
        { jp: 'お世話になっております', en: 'Thank you for your continued support (email opener)', example: 'いつもお世話になっております。' },
      ]
    },
    {
      id: 'daily-expressions',
      title: 'Useful Daily Expressions',
      words: [
        { jp: 'ちなみに', en: 'by the way, incidentally', example: 'ちなみに、出身はどこですか？' },
        { jp: 'せっかく', en: 'since we\'re at it / it would be a waste not to', example: 'せっかく来たから、もう少しいましょう。' },
        { jp: 'そういえば', en: 'now that you mention it / speaking of which', example: 'そういえば、明日休みでしたね。' },
        { jp: 'なんとか', en: 'somehow, manage to', example: 'なんとかなりますよ。' },
        { jp: 'とにかく', en: 'anyway, in any case', example: 'とにかく、やってみましょう。' },
        { jp: 'むしろ', en: 'rather, on the contrary', example: 'むしろこの方法の方がいいと思います。' },
        { jp: 'ついでに', en: 'while I\'m at it, on the way', example: 'ついでにコーヒーを買ってきてもいいですか？' },
        { jp: 'わざわざ', en: 'going out of one\'s way to', example: 'わざわざ来てくれてありがとう。' },
      ]
    }
  ],

  // ─── GRAMMAR POINTS ──────────────────────────────────────────────────────
  // Standalone N3 grammar reference

  grammarPoints: [
    { pattern: '〜ば〜ほど', meaning: 'The more ~ the more ~', example: '勉強すればするほど、上手になります。' },
    { pattern: '〜ようになる', meaning: 'To come to be able to / to start doing', example: '日本語で話せるようになりました。' },
    { pattern: '〜にもかかわらず', meaning: 'Despite ~, in spite of ~', example: '忙しいにもかかわらず、来てくれました。' },
    { pattern: '〜からといって', meaning: 'Just because ~ doesn\'t mean ~', example: '日本語が上手だからといって、油断してはいけません。' },
    { pattern: '〜わけではない', meaning: 'It\'s not that ~', example: '嫌いなわけではないが、得意ではない。' },
    { pattern: '〜に反して', meaning: 'Contrary to ~, against ~', example: '予想に反して、実験がうまくいった。' },
    { pattern: '〜をはじめ', meaning: 'Starting with ~, including ~', example: '田中先生をはじめ、多くの人に感謝しています。' },
    { pattern: '〜に際して', meaning: 'On the occasion of ~, when doing ~', example: '実験に際して、安全を確認してください。' },
  ]
};

if (typeof module !== 'undefined') module.exports = JAPANESE_CONTENT;
