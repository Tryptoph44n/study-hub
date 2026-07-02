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
  // N2 文法 — Nihongo Sou Matome (週ごと / week by week)
  n2Grammar: {
    source: '日本語総まとめ N2 文法',
    weeks: [
      {
        week: 1,
        title: 'おぼえずにはいられない',
        titleEn: "I can't help remembering",
        theme: 'Suffixes of appearance, the もの family, comparison & strong feelings',
        days: [
          {
            day: 1,
            theme: '様子・傾向 — Appearance & tendency',
            points: [
              {
                pattern: '〜げ', meaning: 'looking ~, seeming ~ (an outward impression)',
                connection: 'いA(−い)＋げ ／ naA＋げ ／ Vます＋たげ',
                examples: [
                  { jp: 'あの人はさびしげな目をしている。', en: 'That person has lonely-looking eyes.' },
                  { jp: '彼は何か言いたげだった。', en: 'He looked like he wanted to say something.' },
                ],
                note: 'Turns a feeling-adjective into "looks/seems ~". さびしい → さびしげ。',
              },
              {
                pattern: '〜がち', meaning: 'tends to ~, prone to ~ (usually a negative tendency)',
                connection: 'Vます＋がち ／ N＋がち',
                examples: [
                  { jp: '私は子どもの頃、病気がちだった。', en: 'As a child, I was often sick / prone to illness.' },
                  { jp: '最近、彼は仕事を休みがちだ。', en: 'Lately he tends to take days off work.' },
                ],
                note: 'Implies it happens more often than is good. 曇りがち、遅れがち、忘れがち。',
              },
              {
                pattern: '〜っぽい', meaning: '-ish; has a strong quality of ~; tends to ~',
                connection: 'N＋っぽい ／ Vます＋っぽい ／ いA(−い)＋っぽい',
                examples: [
                  { jp: '年を取ると、忘れっぽくなる。', en: 'As you get older, you become forgetful.' },
                  { jp: 'このコート、デザインはいいけれど、安っぽい。', en: 'This coat has a nice design, but it looks cheap.' },
                ],
                note: '怒りっぽい (quick to anger)、水っぽい (watery)、子どもっぽい (childish).',
              },
              {
                pattern: '〜気味', meaning: 'a touch of ~, slightly ~, a tendency toward ~',
                connection: 'Vます＋気味 ／ N＋気味',
                examples: [
                  { jp: '残業続きで疲れ気味だ。', en: "With continuous overtime, I'm feeling a bit tired." },
                  { jp: '新入社員は緊張気味の顔をしていた。', en: 'The new employee looked a little nervous.' },
                ],
                note: '風邪気味 (a touch of a cold)、太り気味、遅れ気味。',
              },
            ],
          },
          {
            day: 2,
            theme: 'もの — The もの family',
            points: [
              {
                pattern: '〜ものなら', meaning: 'if (by some chance) one could ~ (expressing a wish/challenge)',
                connection: 'V(potential)＋ものなら',
                examples: [
                  { jp: '帰れるものなら、今すぐ国へ帰りたい。', en: "If I could go back, I'd return to my country right now." },
                  { jp: 'やれるものなら、やってみろ。', en: 'If you can do it, then go ahead and try.' },
                ],
                note: 'Attaches to the potential form. Often a wish that is hard to fulfill, or a challenge.',
              },
              {
                pattern: '〜ものだから', meaning: 'because ~ (giving a reason/excuse, with feeling)',
                connection: 'V／いA／naA(な)／N(な)＋ものだから',
                examples: [
                  { jp: '上着を脱いでもいいですか。暑いものですから。', en: "May I take my jacket off? It's because it's so hot." },
                  { jp: '遅くなってすみません。道路が混んでいたものだから。', en: 'Sorry I\'m late — the roads were jammed, you see.' },
                ],
                note: 'Used to explain/justify, often apologetically. もん in casual speech.',
              },
              {
                pattern: '〜もの／もん', meaning: '~, after all / because ~ (casual emotional reason)',
                connection: 'V／A／naな／N(なん)＋(んだ)もの／もん',
                examples: [
                  { jp: 'パーティーには行かなかったよ。知らなかったんだもの。', en: "I didn't go to the party — I didn't know about it, after all." },
                  { jp: 'しょうがないよ、子どもなんだもん。', en: "It can't be helped, he's just a kid." },
                ],
                note: 'Sentence-final, casual. Gives a reason while appealing to feeling. もん is very casual.',
              },
              {
                pattern: '〜ものの', meaning: 'although ~, even though ~ (but the expected result doesn\'t follow)',
                connection: 'V／いA／naAな／Nである＋ものの',
                examples: [
                  { jp: '車の運転免許は持っているものの、ほとんど運転したことがない。', en: 'Although I have a driver\'s license, I\'ve hardly ever driven.' },
                  { jp: '申し込みはしたものの、試験を受けるかどうか未定だ。', en: 'Although I applied, whether I\'ll take the exam is undecided.' },
                ],
                note: 'Formal "although". Similar to が／けれど but more written/literary.',
              },
            ],
          },
          {
            day: 3,
            theme: '比較・度外視 — Comparison & setting aside',
            points: [
              {
                pattern: '〜はもとより', meaning: 'not only ~ (but also); ~ goes without saying',
                connection: 'N＋はもとより',
                examples: [
                  { jp: 'うちには、車はもとより自転車もないんです。', en: "We don't have a car, let alone a bicycle." },
                  { jp: 'レタスはサラダで食べるのはもとより、炒めてもおいしい。', en: 'Lettuce is good in salad, of course, and also delicious stir-fried.' },
                ],
                note: 'Written/formal. Equivalent to 〜はもちろん.',
              },
              {
                pattern: '〜はともかく', meaning: 'setting ~ aside; ~ aside (let\'s leave that for now)',
                connection: 'N＋はともかく(として)',
                examples: [
                  { jp: '母の料理は見た目はともかく味はおいしい。', en: "My mother's cooking — appearance aside — tastes good." },
                  { jp: 'あの女優は、顔はともかくとして演技がすばらしい。', en: 'That actress — looks aside — has wonderful acting.' },
                ],
                note: 'Puts one point on hold to focus on a more important one.',
              },
              {
                pattern: '〜はまだしも', meaning: '~ would be acceptable/one thing, but… (the rest is not)',
                connection: 'N＋はまだしも ／ 〜ならまだしも',
                examples: [
                  { jp: '私の英語力では、旅行はまだしも、留学なんて無理です。', en: 'With my English, travel would be one thing, but studying abroad is impossible.' },
                  { jp: '10分や20分ならまだしも、1時間も待てません。', en: "10 or 20 minutes would be fine, but I can't wait a whole hour." },
                ],
                note: 'First item is tolerable; what follows is not.',
              },
            ],
          },
          {
            day: 4,
            theme: '強い気持ち — Unbearable feelings',
            points: [
              {
                pattern: '〜てたまらない', meaning: 'unbearably ~; can\'t stand how ~ (spontaneous strong feeling)',
                connection: 'いA(−くて)／naAで／Vたくて＋たまらない',
                examples: [
                  { jp: '子どものことが心配でたまらない。', en: "I'm unbearably worried about my children." },
                  { jp: '家族に会いたくてたまらない。', en: 'I want to see my family so badly.' },
                ],
                note: 'For feelings/sensations that arise naturally and strongly.',
              },
              {
                pattern: '〜てしょうがない', meaning: "can't help feeling ~; extremely ~ (also 〜てしようがない)",
                connection: 'いA(−くて)／naAで／Vて＋しょうがない',
                examples: [
                  { jp: '今日は何もすることがなくて、ひまで仕方がない。', en: "I have nothing to do today, I'm terribly bored." },
                  { jp: 'そんな方法では、時間がかかってしょうがない。', en: 'That method takes way too much time.' },
                ],
                note: '仕方がない (written) = しょうがない (spoken). Strong spontaneous state.',
              },
              {
                pattern: '〜てかなわない', meaning: "unbearable; can't put up with ~ (annoyance/trouble)",
                connection: 'いA(−くて)／naAで＋かなわない',
                examples: [
                  { jp: '隣の工事がうるさくてかなわない。', en: 'The construction next door is unbearably noisy.' },
                  { jp: '私の家は、駅から遠くて不便でかなわない。', en: 'My house is far from the station and unbearably inconvenient.' },
                ],
                note: 'Only for negative/troublesome feelings — a complaint.',
              },
            ],
          },
          {
            day: 5,
            theme: '二重否定 — Double negatives',
            points: [
              {
                pattern: '〜ないことはない／ないこともない', meaning: "it's not that ~ can't; ~ is possible (partial affirmation)",
                connection: 'いA(−くない)／naAじゃない／Vない／Vられない＋ことは(も)ない',
                examples: [
                  { jp: '食べないことはないが、あまり好きじゃない。', en: "It's not that I won't eat it, but I don't like it much." },
                  { jp: 'お酒やタバコをやめるのは難しいが、やめられないことはない。', en: "Quitting drinking and smoking is hard, but it's not impossible." },
                  { jp: '毎日、漢字を4つか5つなら、覚えられないこともない。', en: "If it's just 4 or 5 kanji a day, it's not that I can't memorize them." },
                ],
                note: 'A double negative softens to a cautious "yes, it is possible".',
              },
              {
                pattern: '〜ないではいられない', meaning: "can't help but ~; can't keep from ~ing",
                connection: 'Vない＋ではいられない',
                examples: [
                  { jp: '態度の悪い店員に、一言文句を言わないではいられなかった。', en: "I couldn't help complaining to the rude clerk." },
                  { jp: '工事の音がうるさくて、耳をふさがないではいられない。', en: "The construction noise is so loud I can't help covering my ears." },
                ],
                note: 'An urge too strong to resist. ずにはいられない is the more formal variant.',
              },
            ],
          },
          {
            day: 6,
            theme: '義務・禁止 — Obligation & prohibition',
            points: [
              {
                pattern: '〜ねばならない', meaning: 'must ~; have to ~ (formal/written)',
                connection: 'Vない(stem)＋ねばならない（する→せねばならない）',
                examples: [
                  { jp: 'ビザが切れたので、国に帰らねばならない。', en: 'My visa expired, so I have to return to my country.' },
                  { jp: 'それが真実であることを確かめねばならない。', en: 'I must confirm that it is true.' },
                ],
                note: 'Formal/written equivalent of なければならない. Irregular: する → せねばならない.',
              },
              {
                pattern: '〜てはならない', meaning: 'must not ~ (formal prohibition)',
                connection: 'Vて＋はならない',
                examples: [
                  { jp: 'この悲惨な体験を決して忘れてはならない。', en: 'We must never forget this tragic experience.' },
                  { jp: '失敗を人のせいにしてはなりません。', en: 'You must not blame others for your mistakes.' },
                ],
                note: 'Strong, formal prohibition — often for rules or moral lessons.',
              },
              {
                pattern: '〜てはいられない', meaning: "can't afford to ~; can't keep ~ing (no time/leeway)",
                connection: 'Vて＋はいられない',
                examples: [
                  { jp: 'もう待ってはいられないから、先に行こう。', en: "I can't wait any longer, so let's go on ahead." },
                  { jp: '忙しくてテレビなんか見てはいられない。', en: "I'm so busy I can't afford to be watching TV." },
                ],
                note: 'There is no time or leeway to keep doing something.',
              },
              {
                pattern: '〜てばかりはいられない', meaning: "can't just keep ~ing (only doing that one thing)",
                connection: 'Vて＋ばかりはいられない',
                examples: [
                  { jp: '連休だけれど、もうすぐ試験があるから、遊んでばかりはいられない。', en: "It's a holiday, but exams are coming, so I can't just keep playing." },
                  { jp: 'もう親に頼ってばかりはいられない。', en: "I can't keep relying on my parents anymore." },
                ],
                note: 'You cannot continue doing only that (easy/pleasant) thing.',
              },
            ],
          },
        ],
      },
      {
        week: 2,
        title: 'やればやるほどおぼえられる',
        titleEn: 'The more you do it, the better you get at it',
        theme: 'Worth & effort, verb-stem compounds, conditions & proportional change',
        days: [
          {
            day: 1,
            theme: '努力・価値 — Worth & effort',
            points: [
              {
                pattern: '〜かいがあって', meaning: 'it was worth ~ing; ~ paid off',
                connection: 'Vた／Nの＋かいがあって',
                examples: [
                  { jp: '努力のかいがあって、希望の大学に合格した。', en: 'My efforts paid off — I got into the university I wanted.' },
                  { jp: '待ったかいがあって、すてきな人と結婚できた。', en: 'It was worth the wait — I married a wonderful person.' },
                ],
                note: 'A good result made the effort worthwhile. Opposite: かいもなく。',
              },
              {
                pattern: '〜かいもなく', meaning: 'despite ~; in vain, to no avail',
                connection: 'Vた／Nの＋かいもなく',
                examples: [
                  { jp: '手術のかいもなく、愛犬が死んでしまった。', en: 'Despite the operation, my dog died.' },
                  { jp: '一生懸命練習したかいもなく、予選で落ちてしまった。', en: 'All my hard practice was in vain — I lost in the preliminaries.' },
                ],
                note: 'The effort did NOT pay off — the opposite of かいがあって。',
              },
              {
                pattern: '〜がい', meaning: 'worth ~ing; rewarding to ~',
                connection: 'Vます＋がい',
                examples: [
                  { jp: 'これはやりがいのある仕事だ。', en: 'This is work worth doing.' },
                  { jp: '教えがいのある生徒。', en: 'A student who is rewarding to teach.' },
                ],
                note: '生きがい = something that makes life worth living.',
              },
              {
                pattern: '〜てまで／〜までして', meaning: 'going so far as to ~ (extreme lengths)',
                connection: 'Vて＋まで ／ N＋までして',
                examples: [
                  { jp: '借金してまで、海外旅行に行きたくない。', en: "I don't want to travel abroad if it means going into debt." },
                  { jp: 'いやな思いまでして、彼と付き合うことはない。', en: "There's no need to keep seeing him if it makes you miserable." },
                ],
                note: 'Doing something undesirable to reach a goal — usually said with disapproval.',
              },
            ],
          },
          {
            day: 2,
            theme: '複合動詞 — Verb-stem compounds',
            points: [
              {
                pattern: '〜かける', meaning: 'start to ~; be partway through ~',
                connection: 'Vます＋かける ／ かけのN',
                examples: [
                  { jp: '読みかけの本が何冊もある。', en: 'I have several half-read books.' },
                  { jp: '彼女は何か言いかけてやめた。', en: 'She started to say something, then stopped.' },
                ],
                note: 'An action begun but not finished. 死にかける = to nearly die.',
              },
              {
                pattern: '〜切る', meaning: 'do ~ completely / all the way; finish ~ing',
                connection: 'Vます＋切る',
                examples: [
                  { jp: 'この小説はおもしろくて、1日で読み切った。', en: 'This novel was so good I finished it in a day.' },
                  { jp: '彼は疲れ切った顔をしている。', en: 'He looks utterly exhausted.' },
                ],
                note: 'To the very end / to the maximum. 〜切れない = can\'t finish.',
              },
              {
                pattern: '〜うる／える', meaning: "it's possible to ~; can ~",
                connection: 'Vます＋うる／える（得る）',
                examples: [
                  { jp: '博士でも間違うことはありうる。', en: 'Even an expert can make mistakes — it\'s possible.' },
                  { jp: 'これが私の知りうるすべての情報です。', en: 'This is all the information I could possibly obtain.' },
                ],
                note: 'Possibility. ありうる／ありえる both fine; negative is ありえない。',
              },
              {
                pattern: '〜抜く', meaning: 'do ~ through to the end; ~ thoroughly (persevere)',
                connection: 'Vます＋抜く',
                examples: [
                  { jp: '大変な仕事でも、やり抜く自信があります。', en: "Even with hard work, I'm confident I can see it through to the end." },
                  { jp: '彼は最後まで走り抜いた。', en: 'He ran all the way through to the end.' },
                ],
                note: '考え抜く (think through), 生き抜く (survive). Emphasizes persistence.',
              },
            ],
          },
          {
            day: 3,
            theme: '時・条件 — Time & condition',
            points: [
              {
                pattern: '〜ないうちに', meaning: 'before ~ (while ~ has not yet happened)',
                connection: 'Vない／Vている／Aい／naな／Nの＋うちに',
                examples: [
                  { jp: '忘れないうちに、メモしておこう。', en: 'Let me jot it down before I forget.' },
                  { jp: '桜がきれいなうちに、お花見に行きましょう。', en: "Let's go blossom-viewing while they're still beautiful." },
                ],
                note: 'Do something within the window before a change happens.',
              },
              {
                pattern: '〜か〜ないかのうちに', meaning: 'no sooner than ~; just as ~',
                connection: 'Vる＋か＋Vない＋かのうちに',
                examples: [
                  { jp: '授業が終わるか終わらないかのうちに、彼は教室を出た。', en: 'He left the classroom the moment class ended.' },
                  { jp: '布団に入るか入らないかのうちに眠ってしまう。', en: 'I fall asleep the instant I get into bed.' },
                ],
                note: 'Two things happen almost simultaneously.',
              },
              {
                pattern: '〜限り', meaning: 'as long as ~; to the extent that ~',
                connection: 'Vる／Vない／Aい／naである／Nである＋限り',
                examples: [
                  { jp: '日本にいる限り、日本語は必要だ。', en: "As long as I'm in Japan, Japanese is necessary." },
                  { jp: '悪い生活習慣を改めない限り、健康にはなれない。', en: "Unless you change your bad habits, you won't be healthy." },
                ],
                note: '私の知る限り = as far as I know; 見た限り = as far as I saw.',
              },
              {
                pattern: '〜に限り／〜に限って', meaning: 'limited to ~; (negatively) of all times/people ~',
                connection: 'N＋に限り／に限って／に限らず',
                examples: [
                  { jp: '70歳以上の方に限り、入場無料です。', en: 'Free admission only for those aged 70 and over.' },
                  { jp: 'うちの子に限って、そんなことをするはずがない。', en: 'My child of all children would never do such a thing.' },
                ],
                note: 'に限らず = not limited to (女性に限らず男性も…). に限って (negative nuance) = of all times.',
              },
            ],
          },
          {
            day: 4,
            theme: '強調・条件 — Emphasis & condition',
            points: [
              {
                pattern: '〜さえ〜ば', meaning: 'if only ~; as long as just ~',
                connection: 'Nさえ＋ば ／ Vます＋さえすれば ／ Aく・naで＋さえあれば',
                examples: [
                  { jp: 'これさえあれば、時計もカメラもいらない。', en: 'As long as I have this, I need neither a watch nor a camera.' },
                  { jp: 'この薬をのみさえすれば、すぐに治ります。', en: "If you just take this medicine, you'll recover right away." },
                ],
                note: 'A single condition is enough to bring the result.',
              },
              {
                pattern: '〜からこそ', meaning: 'precisely because ~ (emphatic reason)',
                connection: 'V／A／na／N＋(だ)からこそ',
                examples: [
                  { jp: '子どもがかわいいからこそ、しかるんです。', en: "It's precisely because I love my children that I scold them." },
                  { jp: '努力したからこそ、成功したんです。', en: "It's precisely because I worked hard that I succeeded." },
                ],
                note: 'Strongly emphasizes the reason. Variant: 〜ばこそ。',
              },
              {
                pattern: '〜てこそ', meaning: 'only after / only by ~ing (does X become possible)',
                connection: 'Vて＋こそ',
                examples: [
                  { jp: 'お互いに信頼してこそ、悩みも言える。', en: 'Only when we trust each other can we share our worries.' },
                  { jp: '親になってこそ、親の苦労がわかる。', en: "Only after becoming a parent do you understand a parent's hardships." },
                ],
                note: '≒ Vてはじめて. The result is possible only through that action.',
              },
              {
                pattern: '〜ばかりだ', meaning: 'keep ~ing (a one-way trend, often negative)',
                connection: 'Vる＋ばかりだ',
                examples: [
                  { jp: '物価は上がるばかりだ。', en: 'Prices just keep going up.' },
                  { jp: '解決策はなく、不安はつのるばかりだ。', en: 'There is no solution; the anxiety only keeps growing.' },
                ],
                note: 'A change in one direction only. Different from 〜たばかりだ (just did).',
              },
            ],
          },
          {
            day: 5,
            theme: '立場・仮定 — Standpoint & supposition',
            points: [
              {
                pattern: '〜にしたら／にすれば／にしてみれば', meaning: "from ~'s standpoint; for ~",
                connection: 'N＋にしたら／にすれば／にしてみれば',
                examples: [
                  { jp: '大きすぎる親の期待は、子どもにしたら苦痛だ。', en: "Parents' excessive expectations are painful from the child's point of view." },
                  { jp: '犬や猫はかわいいが、飼っていない人にすれば迷惑なこともある。', en: "Dogs and cats are cute, but for people who don't keep them they can be a nuisance." },
                ],
                note: "Shows another person's perspective or feelings.",
              },
              {
                pattern: '〜としたら／とすれば', meaning: 'supposing ~; if ~ (hypothetical)',
                connection: 'V／A／na／N(だ)＋としたら／とすれば',
                examples: [
                  { jp: 'もし、それが本当だとしたら、夢のようです。', en: "If that's true, it would be like a dream." },
                  { jp: 'あの人が今も生きているとすれば、もう90歳でしょう。', en: "Supposing that person is still alive, they'd be 90 by now." },
                ],
                note: 'Assume a situation, then consider its consequence.',
              },
              {
                pattern: '〜としても', meaning: 'even if / even supposing ~',
                connection: 'V／A／na／N(だ)＋としても ／ N・naにしても',
                examples: [
                  { jp: '行くとしても、旅行者としては行けない。', en: "Even if I go, I can't go as a tourist." },
                  { jp: '負けてくやしいのは、選手だけでなく監督にしても同じだ。', en: 'The frustration of losing is the same even for the coach, not just the players.' },
                ],
                note: 'Concession — even granting the supposition, the result still holds.',
              },
              {
                pattern: '〜を目的として', meaning: 'with the aim / purpose of ~',
                connection: 'N＋を目的として／を中心として／をテーマとして',
                examples: [
                  { jp: 'この祭りは、住民の社会参加を目的として始められた。', en: "This festival was started with the aim of residents' social participation." },
                  { jp: '環境問題をテーマとするテレビ番組を見た。', en: 'I watched a TV program on the theme of environmental issues.' },
                ],
                note: 'Also 〜を中心として (centered on), 〜をテーマとして (themed on).',
              },
            ],
          },
          {
            day: 6,
            theme: '変化・並行 — Change & parallel',
            points: [
              {
                pattern: '〜とともに', meaning: 'together with ~; as ~ (at the same time)',
                connection: 'N＋とともに ／ Vる＋とともに',
                examples: [
                  { jp: '家族とともに来日した。', en: 'I came to Japan together with my family.' },
                  { jp: '自動車が増えるとともに、事故も増加した。', en: 'As cars increased, so did accidents.' },
                ],
                note: 'Simultaneous occurrence or accompaniment.',
              },
              {
                pattern: '〜にともなって', meaning: 'accompanying ~; as ~ (one change brings another)',
                connection: 'N＋にともなって ／ Vる＋のにともなって',
                examples: [
                  { jp: '人口の増加にともない、資源の消費量も増える。', en: 'As the population grows, resource consumption also increases.' },
                  { jp: 'マラソン大会が行われるのにともなって、この道路は通行止めになります。', en: 'In connection with the marathon being held, this road will be closed.' },
                ],
                note: 'Formal; a change brings about a related change.',
              },
              {
                pattern: '〜につれて', meaning: 'as ~ (gradual, proportional change)',
                connection: 'Vる／N＋につれて',
                examples: [
                  { jp: '年を取るにつれて、体のいろいろな機能が低下する。', en: 'As you age, various bodily functions decline.' },
                  { jp: '町の発展につれて、自然が少なくなった。', en: 'As the town developed, nature decreased.' },
                ],
                note: 'Two things change in proportion, gradually.',
              },
              {
                pattern: '〜にしたがって', meaning: 'in accordance with ~; as ~ (proportional / following)',
                connection: 'Vる／N＋にしたがって',
                examples: [
                  { jp: '高くなるにしたがって、空気が薄くなる。', en: 'As you go higher, the air gets thinner.' },
                  { jp: '工業化がすすむにしたがって、環境問題が深刻になった。', en: 'As industrialization advanced, environmental problems became serious.' },
                ],
                note: 'Similar to につれて; also means "in accordance with" rules or instructions.',
              },
            ],
          },
        ],
      },
      {
        week: 3,
        title: 'おぼえないわけにはいかない',
        titleEn: 'You must remember',
        theme: 'Reporting & manner, the わけ family, the moment/outcome, degree & contrast',
        days: [
          {
            day: 1,
            theme: '伝聞・様子 — As said & circumstance',
            points: [
              {
                pattern: '〜とおり(に)／〜どおり', meaning: 'just as ~; in accordance with ~',
                connection: 'Vる／Vた／Nの＋とおり(に) ／ N＋どおり(に)',
                examples: [
                  { jp: '友達が言ったとおり、日本の物価は高い。', en: 'Just as my friend said, prices in Japan are high.' },
                  { jp: '自分の思うとおりに生きることは難しい。', en: 'Living just as you please is difficult.' },
                ],
                note: '希望どおり (as hoped), アドバイスどおり (as advised).',
              },
              {
                pattern: '〜ままに', meaning: 'just as ~; following along (passively)',
                connection: 'Vる／Vられる＋ままに',
                examples: [
                  { jp: 'セールスマンに言われるまま、契約書にサインをしてしまった。', en: 'I signed the contract just as the salesman told me to.' },
                  { jp: '足の向くままに歩く。', en: "To wander wherever one's feet lead." },
                ],
                note: 'Doing something passively, following another\'s lead or impulse.',
              },
              {
                pattern: '〜ことに', meaning: "to one's ~ (emotion); ~ly enough",
                connection: 'Aい／naな／Vた＋ことに',
                examples: [
                  { jp: '驚いたことに、彼女は同じ相手と2回も離婚して再婚しているんです。', en: 'To my surprise, she divorced and remarried the same person twice.' },
                  { jp: 'おもしろいことに、隣の家もうちと同じ名字なのです。', en: 'Interestingly, the neighbors have the same surname as mine.' },
                ],
                note: '残念なことに, うれしいことに, 驚いたことに — leads with the speaker\'s feeling.',
              },
              {
                pattern: '〜のあまり／〜あまり', meaning: 'out of too much ~; from excessive ~',
                connection: 'Nのあまり ／ Vる＋あまり',
                examples: [
                  { jp: '緊張のあまり、体が震えた。', en: 'I trembled from too much nervousness.' },
                  { jp: '心配するあまり、母は病気になってしまった。', en: 'My mother fell ill from worrying too much.' },
                ],
                note: '悲しみのあまり, 驚きのあまり — an extreme emotion causing a result.',
              },
            ],
          },
          {
            day: 2,
            theme: 'わけ — The わけ family',
            points: [
              {
                pattern: '〜わけだ', meaning: 'no wonder ~; that\'s why ~ (a natural conclusion)',
                connection: 'A／na／V(plain)＋わけだ',
                examples: [
                  { jp: '寒いわけだ。雪が降っている。', en: "No wonder it's cold — it's snowing." },
                  { jp: '定価の1万円で2割引きだから、8千円になるわけだ。', en: "It's 10,000 yen at a 20% discount, so naturally it comes to 8,000 yen." },
                ],
                note: 'States a logical, "of course that follows" conclusion.',
              },
              {
                pattern: '〜わけではない', meaning: "it's not that ~; not necessarily ~",
                connection: 'A／na／V(plain)＋わけではない',
                examples: [
                  { jp: 'ほしくないわけではないけれど、お金がないから買えない。', en: "It's not that I don't want it, but I can't afford it." },
                  { jp: 'テレビはつけてあるが、見ているわけではない。', en: "The TV is on, but it's not that I'm watching it." },
                ],
                note: 'A partial denial — softens or qualifies a statement.',
              },
              {
                pattern: '〜わけがない', meaning: "there's no way ~; it's impossible that ~",
                connection: 'A／na／V(plain)＋わけがない',
                examples: [
                  { jp: 'うちの子がそんなことをするわけがない。', en: "There's no way my child would do such a thing." },
                  { jp: 'ほめられて、うれしくないわけがない。', en: "There's no way I'm not happy to be praised." },
                ],
                note: 'Strong certainty that something is impossible.',
              },
              {
                pattern: '〜わけにはいかない', meaning: "can't (afford to) ~ (for social/moral reasons)",
                connection: 'Vる／Vない＋わけにはいかない',
                examples: [
                  { jp: '重要な会議があるので、病気でも会社を休むわけにはいかない。', en: "I have an important meeting, so I can't take the day off even if I'm sick." },
                  { jp: '税金は、高くても払わないわけにはいかない。', en: "Even if taxes are high, you can't not pay them." },
                ],
                note: 'Vない＋わけにはいかない = have no choice but to do it.',
              },
            ],
          },
          {
            day: 3,
            theme: '瞬間・結末 — The moment & the outcome',
            points: [
              {
                pattern: '〜たとたん(に)', meaning: 'the moment ~; as soon as ~ (sudden, unexpected)',
                connection: 'Vた＋とたん(に)',
                examples: [
                  { jp: '窓を開けたとたん、強い風が入ってきた。', en: 'The moment I opened the window, a strong wind blew in.' },
                  { jp: 'お酒を飲んだとたん、顔が赤くなった。', en: 'As soon as I drank, my face went red.' },
                ],
                note: 'A sudden, often surprising result right after the action.',
              },
              {
                pattern: '〜あげく(に)', meaning: 'after ~ (much trouble), in the end (bad result)',
                connection: 'Vた／Nの＋あげく(に)',
                examples: [
                  { jp: '彼は酔っ払って騒いだあげく、寝てしまった。', en: 'After getting drunk and making a scene, he ended up falling asleep.' },
                  { jp: '何度も手術したあげく、治らないと言われた。', en: 'After many operations, in the end I was told it would not heal.' },
                ],
                note: 'Negative outcome after a long or troublesome process.',
              },
              {
                pattern: '〜末(に)', meaning: 'after ~ (much effort/thought), finally',
                connection: 'Vた／Nの＋末(に)',
                examples: [
                  { jp: '悩んだ末、進学ではなく就職することにした。', en: 'After much thought, I decided to get a job rather than continue studying.' },
                  { jp: '住民との話し合いの末、建設は中止となった。', en: 'After discussions with residents, construction was finally cancelled.' },
                ],
                note: 'A considered result after a process — neutral/positive (unlike あげく).',
              },
              {
                pattern: '〜かと思ったら／かと思うと', meaning: 'just when ~, (suddenly) ~',
                connection: 'Vた＋かと思ったら／かと思うと',
                examples: [
                  { jp: 'あの人は忙しい人で、来たかと思ったら、もう帰ってしまった。', en: "He's so busy — just when he'd arrived, he'd already left." },
                  { jp: '花が咲いたかと思ったら、もう散ってしまった。', en: "Just when the flowers bloomed, they'd already scattered." },
                ],
                note: 'Two things happen in quick, surprising succession.',
              },
            ],
          },
          {
            day: 4,
            theme: '場面・程度 — Situation & degree',
            points: [
              {
                pattern: '〜ところ(を)', meaning: 'at a time when ~ (often polite set phrases)',
                connection: 'Aい／Nの／Vる／Vている／Vた＋ところ(を)',
                examples: [
                  { jp: 'お忙しいところ(を)すみません。', en: "Sorry to trouble you when you're busy." },
                  { jp: '会いたいと思っていたところです。', en: 'I was just thinking I wanted to see you.' },
                ],
                note: 'お休みのところ, お急ぎのところ — polite framing of the listener\'s situation.',
              },
              {
                pattern: '〜たところ', meaning: 'upon ~ing (and as a result discovered...)',
                connection: 'Vた＋ところ',
                examples: [
                  { jp: '病院で検査したところ、異常はなかった。', en: 'When examined at the hospital, there were no problems.' },
                  { jp: '駅に問い合わせたところ、忘れ物は届いていた。', en: 'When I asked at the station, my lost item had been turned in.' },
                ],
                note: 'Do something, then discover the result. More formal/written.',
              },
              {
                pattern: '〜どころではない', meaning: 'this is no time for ~; not in a position to ~',
                connection: 'Nどころではない ／ Vる＋どころではない',
                examples: [
                  { jp: '工場で火事があり、仕事どころではなかった。', en: 'There was a fire at the factory — it was no time for work.' },
                  { jp: '風邪がひどくて、遊びに行くどころではない。', en: "My cold is so bad I'm in no state to go out." },
                ],
                note: 'それどころじゃない — circumstances make it impossible.',
              },
              {
                pattern: '〜どころか', meaning: 'far from ~; not only ~ but on the contrary',
                connection: 'N／Vる／Aい／naな＋どころか',
                examples: [
                  { jp: '忙しくて、夏休みどころか日曜日も休めない。', en: "I'm so busy I can't even take Sundays off, let alone summer break." },
                  { jp: '忙しいどころか、暇すぎて困っている。', en: "Far from being busy, we're in trouble for being too idle." },
                ],
                note: 'Strongly reverses the expectation.',
              },
            ],
          },
          {
            day: 5,
            theme: '状態 — States & conditions',
            points: [
              {
                pattern: '〜だらけ', meaning: 'full of ~; covered in ~ (negative)',
                connection: 'N＋だらけ',
                examples: [
                  { jp: 'この手紙の日本語は間違いだらけだ。', en: 'The Japanese in this letter is full of mistakes.' },
                  { jp: 'ちゃんとたたまなかったので、服がしわだらけになった。', en: "I didn't fold them, so my clothes got all wrinkled." },
                ],
                note: '血だらけ, ほこりだらけ, 泥だらけ — a critical, "too much" nuance.',
              },
              {
                pattern: '〜きり／〜たきり', meaning: 'only ~; ~ and nothing since',
                connection: 'Vた＋きり／っきり ／ N＋きり',
                examples: [
                  { jp: 'うちの子は遊びに行ったきり帰ってこない。', en: "My child went out to play and hasn't come back since." },
                  { jp: '彼とは去年の忘年会で会ったきり、会っていない。', en: "I met him at last year's year-end party and not since." },
                ],
                note: '一人っきり, 二人っきり, これっきり.',
              },
              {
                pattern: '〜っぱなし', meaning: 'leaving ~ on/undone; ~ the whole time',
                connection: 'Vます＋っぱなし',
                examples: [
                  { jp: '電車が混んでいて、東京まで立ちっぱなしだった。', en: 'The train was packed, so I stood all the way to Tokyo.' },
                  { jp: 'テレビをつけっぱなしで寝てしまった。', en: 'I fell asleep with the TV left on.' },
                ],
                note: 'Careless/continuous — leaving something just as it is.',
              },
            ],
          },
          {
            day: 6,
            theme: '対比・傾向 — Contrast & trend',
            points: [
              {
                pattern: '〜に反して', meaning: 'contrary to ~; against ~',
                connection: 'N＋に反して',
                examples: [
                  { jp: '専門家の予想に反して、景気は回復し始めた。', en: "Contrary to experts' predictions, the economy began to recover." },
                  { jp: '我々の期待に反して、新商品はあまり売れなかった。', en: "Contrary to our expectations, the new product didn't sell well." },
                ],
                note: '予想に反して, 期待に反して.',
              },
              {
                pattern: '〜反面／半面', meaning: 'on the other hand; while ~ (two sides of one thing)',
                connection: 'Aい／naな／Vる＋反面',
                examples: [
                  { jp: 'パソコンは便利な反面、トラブルも多い。', en: 'PCs are convenient but, on the other hand, cause many problems.' },
                  { jp: '彼は優れた学者である反面、精神的に弱い。', en: "He's an excellent scholar but, on the other hand, mentally fragile." },
                ],
                note: 'Presents two contrasting aspects of the same thing.',
              },
              {
                pattern: '〜一方(で)', meaning: 'on one hand ~, on the other ~; meanwhile',
                connection: 'Aい／naな／Vる／Nである＋一方(で)',
                examples: [
                  { jp: 'この市は水に強い一方、熱に弱い。', en: 'It is strong against water but, on the other hand, weak against heat.' },
                  { jp: 'このあたりは静かな一方、不便である。', en: 'This area is quiet but, on the other hand, inconvenient.' },
                ],
                note: 'Compares two simultaneous, contrasting sides.',
              },
              {
                pattern: '〜一方だ', meaning: 'keep ~ing more and more (a one-way trend)',
                connection: 'Vる＋一方だ',
                examples: [
                  { jp: '大気中のCO2濃度の上昇とともに、地球の温暖化は進む一方だ。', en: 'With rising CO2, global warming only keeps advancing.' },
                  { jp: '天気のせいで、野菜の値段は上がる一方だ。', en: 'Because of the weather, vegetable prices keep climbing.' },
                ],
                note: 'A continuous one-directional change. Cf. 〜ばかりだ.',
              },
            ],
          },
        ],
      },
      {
        week: 4,
        title: 'おぼえざるをえない',
        titleEn: 'You have no choice but to remember',
        theme: 'The 上 family, target & condition, relation, concession, obligation, scope',
        days: [
          {
            day: 1,
            theme: '〜上 — The 上 family',
            points: [
              {
                pattern: '〜上に', meaning: 'in addition to ~; on top of ~',
                connection: 'V／Aい／naな／Nの＋上に',
                examples: [
                  { jp: '彼は仕事ができる上に優しい。', en: "He's not only good at his job but also kind." },
                  { jp: '昨日は風が強かった上に、雨も激しかった。', en: 'Yesterday, on top of being windy, it also rained hard.' },
                ],
                note: 'Adds a further point in the same direction.',
              },
              {
                pattern: '〜上で', meaning: 'after ~ing; upon ~ (then proceed)',
                connection: 'Vた／Nの＋上で',
                examples: [
                  { jp: 'よく考えた上で決めたい。', en: 'I want to decide after thinking it over carefully.' },
                  { jp: '家族と相談の上、お返事します。', en: "I'll reply after consulting my family." },
                ],
                note: 'Do A as a basis/precondition, then do B.',
              },
              {
                pattern: '〜上は', meaning: 'now that ~; since ~ (so one naturally must)',
                connection: 'Vた＋上は',
                examples: [
                  { jp: 'キャプテンに選ばれた上は、がんばるしかない。', en: "Now that I've been chosen as captain, I can only do my best." },
                  { jp: '約束した上は、必ず守るべきだ。', en: "Now that I've promised, I must keep it." },
                ],
                note: 'Given a decision/fact, a natural obligation follows.',
              },
              {
                pattern: '〜上では', meaning: 'according to ~; in terms of ~ (data/theory)',
                connection: 'Nの＋上では',
                examples: [
                  { jp: '地図の上では近いのに、実際はとても遠い。', en: "On the map it's close, but in reality it's very far." },
                  { jp: '理論上はできるはずだったが、実験では失敗した。', en: 'In theory it should have worked, but the experiment failed.' },
                ],
                note: '計算上, データ上, 統計上.',
              },
            ],
          },
          {
            day: 2,
            theme: '対象・条件 — Target & condition',
            points: [
              {
                pattern: '〜向け／向き', meaning: 'for / aimed at ~ (向け); suited to ~ (向き)',
                connection: 'N＋向け(の) ／ N＋向き',
                examples: [
                  { jp: 'それは初心者向けの教科書です。', en: "That's a textbook for beginners." },
                  { jp: 'この店の料理は量が少なく見た目がきれいなので、女性向きだ。', en: "The food here is small and pretty, so it's suited for women." },
                ],
                note: '向け = intentionally aimed at; 向き = naturally suitable for.',
              },
              {
                pattern: '〜次第で(は)', meaning: 'depending on ~',
                connection: 'N＋次第で(は)',
                examples: [
                  { jp: '花火大会は天気次第で中止になる場合もあります。', en: 'The fireworks may be cancelled depending on the weather.' },
                  { jp: '仕事は自分の気持ち次第で、うまくいくかどうか決まる。', en: 'Whether work goes well depends on your own attitude.' },
                ],
                note: 'The result varies according to N.',
              },
              {
                pattern: '〜次第', meaning: 'as soon as ~',
                connection: 'Vます＋次第',
                examples: [
                  { jp: '田中が戻り次第、お電話させます。', en: "As soon as Tanaka returns, I'll have him call you." },
                  { jp: '決まり次第、ご連絡いたします。', en: "I'll contact you as soon as it's decided." },
                ],
                note: 'Formal "immediately after".',
              },
              {
                pattern: '〜次第だ／次第です', meaning: "that's how / that's why ~ (formal explanation)",
                connection: 'V(plain)＋次第だ／次第です',
                examples: [
                  { jp: '日時の変更を知って、改めてお知らせする次第です。', en: 'I learned the date and time had changed, which is why I am informing you again.' },
                  { jp: 'そういうわけで、本日伺った次第です。', en: "That being the case, that is why I have come today." },
                ],
                note: 'Formal way to explain a circumstance or reason.',
              },
            ],
          },
          {
            day: 3,
            theme: '対応・関係 — Response & relation',
            points: [
              {
                pattern: '〜にこたえて', meaning: 'in response to ~; living up to ~',
                connection: 'Nに＋こたえて',
                examples: [
                  { jp: '客の意見にこたえて、営業時間を延長する。', en: 'In response to customer feedback, we extended our hours.' },
                  { jp: '親の期待にこたえて、がんばった。', en: "I worked hard to live up to my parents' expectations." },
                ],
                note: '期待・要望・リクエストにこたえて.',
              },
              {
                pattern: '〜に対して', meaning: 'toward ~; in contrast to ~',
                connection: 'Nに対して',
                examples: [
                  { jp: '目上の人に対して、そういう言い方は失礼だ。', en: 'That way of speaking is rude toward your superiors.' },
                  { jp: '都市で人口が増えているのに対し、農村では減っている。', en: 'In contrast to rising urban population, rural areas are declining.' },
                ],
                note: 'Two uses — direction ("toward") and contrast.',
              },
              {
                pattern: '〜により／による', meaning: 'by ~; due to ~; depending on (formal)',
                connection: 'Nにより／による',
                examples: [
                  { jp: '未成年者の飲酒は、法律により禁じられている。', en: 'Drinking by minors is prohibited by law.' },
                  { jp: 'その地震による被害は、過去最大だった。', en: 'The damage from that earthquake was the worst ever.' },
                ],
                note: 'Means / cause / agent; = によって.',
              },
              {
                pattern: '〜にかかわって／にかかわる', meaning: 'relating to ~; involving ~',
                connection: 'Nに＋かかわって／かかわる',
                examples: [
                  { jp: '彼は汚職事件にかかわって逮捕された。', en: 'He was arrested for involvement in a corruption case.' },
                  { jp: '息子はマスコミにかかわる仕事をしている。', en: 'My son works in a job involving the media.' },
                ],
                note: '命にかかわる = life-threatening.',
              },
            ],
          },
          {
            day: 4,
            theme: '逆接・進行 — Concession & progression',
            points: [
              {
                pattern: '〜ながら(も)', meaning: 'while ~; even though ~ (concession)',
                connection: 'Vます／Aい／naであり／Nであり＋ながら(も)',
                examples: [
                  { jp: '悪いことと知りながら、盗みを繰り返した。', en: 'Even though I knew it was wrong, I kept stealing.' },
                  { jp: '「狭いながらも楽しい我が家」という言葉がある。', en: 'There is a saying, "a small but happy home."' },
                ],
                note: 'Concessive ながら — NOT the "while doing" use.',
              },
              {
                pattern: '〜つつ(も)', meaning: 'while ~ing; even though ~ (formal/written)',
                connection: 'Vます＋つつ',
                examples: [
                  { jp: '彼女は忙しいと言いつつ、長電話をしている。', en: "Though she says she's busy, she keeps making long phone calls." },
                  { jp: '今日こそがんばろうと思いつつ、また勉強しなかった。', en: 'I keep meaning to try hard, yet again I did not study.' },
                ],
                note: 'Written equivalent of ながら; 〜つつも adds concession.',
              },
              {
                pattern: '〜つつある', meaning: 'be in the process of ~ing (gradual change)',
                connection: 'Vます＋つつある',
                examples: [
                  { jp: '医療はますます進歩しつつある。', en: 'Medicine keeps advancing more and more.' },
                  { jp: '新種のウイルスによる被害は、全国に広がりつつある。', en: 'Damage from the new virus is spreading nationwide.' },
                ],
                note: 'A gradual ongoing change; ≒ だんだん〜ている.',
              },
              {
                pattern: '〜くせに／くせして', meaning: 'even though ~ (with criticism/blame)',
                connection: 'V／Aい／naな／Nの＋くせに',
                examples: [
                  { jp: '知らないくせして、知っているようなことを言う。', en: "Even though he doesn't know, he talks as if he does." },
                  { jp: '大学生のくせして、そんなことも知らないの?', en: "You're a university student and don't even know that?" },
                ],
                note: 'Informal; carries blame or contempt.',
              },
            ],
          },
          {
            day: 5,
            theme: '義務・断定 — Obligation & assertion',
            points: [
              {
                pattern: '〜べきだ／べきではない', meaning: 'should ~ / should not ~ (moral, social)',
                connection: 'Vる＋べき（する→すべき）',
                examples: [
                  { jp: 'そんなことをすべきではない。', en: "You shouldn't do such a thing." },
                  { jp: 'もっと勉強すべきだった。', en: 'I should have studied more.' },
                ],
                note: 'Moral/social obligation. する→すべき or するべき.',
              },
              {
                pattern: '〜ざるをえない', meaning: 'have no choice but to ~; must (reluctantly)',
                connection: 'Vない(stem)＋ざるをえない（する→せざるをえない）',
                examples: [
                  { jp: 'いやな仕事でも、生活のためには続けざるをえない。', en: 'Even an unpleasant job, I have no choice but to keep it for my livelihood.' },
                  { jp: 'この戦争は間違いだったと言わざるをえない。', en: 'I must say this war was a mistake.' },
                ],
                note: 'Unavoidable and reluctant. する→せざるをえない.',
              },
              {
                pattern: '〜ことになっている', meaning: "it's the rule/arrangement that ~",
                connection: 'Vる／Vない／Nという＋ことになっている',
                examples: [
                  { jp: '明日、ここで卒業式が行われることになっている。', en: 'The graduation is scheduled to be held here tomorrow.' },
                  { jp: '60点以上が合格ということになっている。', en: 'A passing grade is set at 60 or above.' },
                ],
                note: 'An established rule, schedule, or arrangement.',
              },
              {
                pattern: '〜にすぎない', meaning: 'nothing more than ~; merely ~',
                connection: 'V／Aい／naである／N(である)＋にすぎない',
                examples: [
                  { jp: '単なる言い間違いにすぎない。', en: "It's nothing more than a slip of the tongue." },
                  { jp: '簡単な日常英会話ができるにすぎない。', en: 'I can only manage simple everyday English.' },
                ],
                note: 'Downplays — "just / merely".',
              },
            ],
          },
          {
            day: 6,
            theme: '時点・範囲 — Occasion & scope',
            points: [
              {
                pattern: '〜にあたって／にあたり', meaning: 'on the occasion of ~; when doing ~ (formal)',
                connection: 'N／Vる＋にあたって／にあたり',
                examples: [
                  { jp: '図書館の利用にあたり、図書カードが必要です。', en: 'A library card is required to use the library.' },
                  { jp: 'アルバイトをするにあたっては、学業や体に無理のないように。', en: "When taking a part-time job, don't overdo it with your studies or health." },
                ],
                note: 'Before a significant action; formal.',
              },
              {
                pattern: '〜に沿って', meaning: 'along ~; in accordance with ~',
                connection: 'Nに沿って／沿った',
                examples: [
                  { jp: '資料に沿って、ご説明いたします。', en: 'I will explain in accordance with the handout.' },
                  { jp: 'お客様のご希望に沿った旅行プランをお作りします。', en: "We make travel plans in line with the customer's wishes." },
                ],
                note: '方針に沿って, 希望に沿って.',
              },
              {
                pattern: '〜に先立ち／に先立って', meaning: 'prior to ~; before ~',
                connection: 'N／Vる＋に先立ち／に先立って',
                examples: [
                  { jp: '開店に先立ち、関係者だけのパーティーが行われた。', en: 'Prior to opening, a party was held for insiders only.' },
                  { jp: '新製品の開発に先立って、アンケート調査を行った。', en: 'We ran a survey before developing the new product.' },
                ],
                note: 'In advance of a significant event.',
              },
              {
                pattern: '〜にわたって／にわたる', meaning: 'over ~; throughout ~ (a span or range)',
                connection: 'Nに＋わたって／わたる／わたり',
                examples: [
                  { jp: '台風の影響で、関東地方は広い範囲にわたって大雨となるでしょう。', en: 'Due to the typhoon, the Kanto region will see heavy rain over a wide area.' },
                  { jp: 'わが社は20年間にわたり、この薬の研究開発に努めてきた。', en: 'Our company has devoted 20 years to the R&D of this drug.' },
                ],
                note: '範囲・期間・回数 (range / period / count).',
              },
            ],
          },
        ],
      },
      {
        week: 5,
        title: 'おぼえてみようではないか',
        titleEn: 'Why not try to remember',
        theme: 'Impossibility & difficulty, reason from facts, evaluation, not-only, conjecture, basis',
        days: [
          {
            day: 1,
            theme: '不可能・困難 — Impossibility & difficulty',
            points: [
              {
                pattern: '〜っこない', meaning: "there's no way ~; definitely won't (casual)",
                connection: 'Vます＋っこない',
                examples: [
                  { jp: '一日でこの本の文法全部なんて、覚えられっこない。', en: "There's no way I can memorize all the grammar in this book in a day." },
                  { jp: '今の実力では、試験に受かりっこない。', en: "With my current ability, there's no way I'll pass the exam." },
                ],
                note: 'Casual, emphatic "impossible".',
              },
              {
                pattern: '〜かねない', meaning: 'might (well) ~; could end up ~ (something bad)',
                connection: 'Vます＋かねない',
                examples: [
                  { jp: 'そんなひどいことも、あの人なら言いかねない。', en: "It wouldn't surprise me if he said something that awful." },
                  { jp: '放っておいたら、国際問題になりかねない。', en: 'If left alone, it could well become an international issue.' },
                ],
                note: 'A negative possibility — "it could happen".',
              },
              {
                pattern: '〜かねる', meaning: 'cannot ~; be unable to ~ (formal, polite)',
                connection: 'Vます＋かねる',
                examples: [
                  { jp: '申し訳ありませんが、私にはわかりかねます。', en: "I'm sorry, but I'm unable to say." },
                  { jp: 'そのようなご依頼は、お引き受けいたしかねます。', en: 'I cannot accept such a request.' },
                ],
                note: 'Formal/written, polite way to say "can\'t".',
              },
              {
                pattern: '〜がたい', meaning: 'hard to ~; difficult to ~ (by nature/emotion)',
                connection: 'Vます＋がたい',
                examples: [
                  { jp: 'これは信じがたい話だが、事実である。', en: "This is hard to believe, but it's true." },
                  { jp: '人が人の命をうばうなんて、許しがたい。', en: "For one person to take another's life is unforgivable." },
                ],
                note: '信じがたい, 許しがたい, 理解しがたい.',
              },
            ],
          },
          {
            day: 2,
            theme: '理由・条件 — Reason & condition',
            points: [
              {
                pattern: '〜ことから', meaning: 'because (of the fact that) ~; judging from ~',
                connection: 'V／A／naな・である／Nである＋ことから',
                examples: [
                  { jp: '富士山が見えることから、この町は富士見町という名前がついた。', en: 'Because you can see Mt. Fuji, this town was named Fujimi-cho.' },
                  { jp: '桜の名所であることから、春には花見客が大勢やってくる。', en: "Since it's famous for cherry blossoms, crowds come in spring." },
                ],
                note: 'Gives the basis for a name or conclusion.',
              },
              {
                pattern: '〜ことだから', meaning: "because it's ~ (judging from N's known character)",
                connection: 'Nの＋ことだから',
                examples: [
                  { jp: 'いつも遅刻する彼のことだから、もうすぐ現れるだろう。', en: "Knowing him — always late — he'll show up soon." },
                  { jp: '親切な林さんのことだから、手伝ってくれるよ。', en: "Since Hayashi-san is kind, he'll surely help." },
                ],
                note: 'A judgment based on what you know about N.',
              },
              {
                pattern: '〜ことなく', meaning: 'without ~ing (formal, written)',
                connection: 'Vる＋ことなく',
                examples: [
                  { jp: '雨は休むことなく降り続いた。', en: 'The rain kept falling without a pause.' },
                  { jp: '時は止まることなく流れる。', en: 'Time flows on without ever stopping.' },
                ],
                note: 'Written equivalent of 〜ないで.',
              },
              {
                pattern: '〜ないことには', meaning: 'unless ~; without ~ing (then can\'t)',
                connection: 'Vない＋ことには',
                examples: [
                  { jp: 'やってみないことには、できるかどうかわからない。', en: "Unless you try, you can't know if you can do it." },
                  { jp: '実物を見ないことには、買う気になれない。', en: "Unless I see the real thing, I can't feel like buying it." },
                ],
                note: "Without doing X first, Y can't happen.",
              },
            ],
          },
          {
            day: 3,
            theme: '評価・程度 — Evaluation & degree',
            points: [
              {
                pattern: '〜て当然だ／当たり前だ', meaning: "it's only natural that ~",
                connection: 'Vて／Aくて／naで＋当然だ',
                examples: [
                  { jp: 'ひどいことばかり言ったので、彼女に嫌われて当然だ。', en: 'I said so many awful things, so naturally she dislikes me.' },
                  { jp: '相手のチームは弱い。勝って当たり前だ。', en: "The other team is weak — of course we'd win." },
                ],
                note: '当然だ／当たり前だ — the expected, deserved result.',
              },
              {
                pattern: '〜のももっともだ', meaning: "it's understandable/reasonable that ~",
                connection: 'Vる／Aい／naな＋のももっともだ',
                examples: [
                  { jp: '君が裏切ったのだから、彼女が怒るのももっともだ。', en: "You betrayed her, so it's understandable she's angry." },
                  { jp: 'あなたが怒るのはもっともだ。', en: "It's quite right that you're angry." },
                ],
                note: 'Justified, reasonable given the circumstances.',
              },
              {
                pattern: '〜も同然だ', meaning: 'practically ~; as good as ~',
                connection: 'V／N(も)＋同然だ',
                examples: [
                  { jp: 'この車は中古車といっても新品も同然だ。', en: 'Though used, this car is practically brand new.' },
                  { jp: '彼の財産はないも同然だ。', en: 'He has virtually no assets.' },
                ],
                note: 'Almost the same as ~.',
              },
              {
                pattern: '〜だけましだ', meaning: 'at least ~ (could be worse); be thankful that ~',
                connection: 'V／Aい／naな＋だけましだ',
                examples: [
                  { jp: '君は仕事があるだけましだ。僕は無職になってしまった。', en: "At least you have a job — I've become unemployed." },
                  { jp: '給料が減ったけれど、首にならないだけましだ。', en: "My pay was cut, but at least I wasn't fired." },
                ],
                note: 'Grateful that things are not worse.',
              },
            ],
          },
          {
            day: 4,
            theme: '付加・原因 — Addition & cause',
            points: [
              {
                pattern: '〜だけあって', meaning: 'as expected of ~; fitting that ~',
                connection: 'V／A／naな／N＋だけあって',
                examples: [
                  { jp: 'ここは一流ホテルだけあって快適だった。', en: 'As expected of a first-rate hotel, it was comfortable.' },
                  { jp: 'このバッグは安いだけあってすぐ壊れた。', en: 'This bag was cheap, so fittingly it broke right away.' },
                ],
                note: 'Also だけに, だけのことはある — a befitting result.',
              },
              {
                pattern: '〜ばかりか／ばかりでなく', meaning: 'not only ~ but also ~',
                connection: 'V／A／naな／N＋ばかりか',
                examples: [
                  { jp: 'あの人は成績がいいばかりかスポーツもできる。', en: 'He not only gets good grades but is also athletic.' },
                  { jp: 'このあたりは空気ばかりでなく水も汚染されている。', en: 'Around here, not just the air but also the water is polluted.' },
                ],
                note: 'Adds something further on top.',
              },
              {
                pattern: '〜ばかりに', meaning: 'simply because ~ (with a bad result)',
                connection: 'V／A／naな／Nである＋ばかりに',
                examples: [
                  { jp: 'あの飛行機に乗ったばかりに、彼は死んだ。', en: 'Simply because he boarded that plane, he died.' },
                  { jp: '英語の先生が嫌いなばかりに、英語も嫌いになった。', en: 'Just because I disliked the teacher, I came to dislike English too.' },
                ],
                note: 'Emphasizes the regrettable cause.',
              },
              {
                pattern: '〜のみならず', meaning: 'not only ~ but also (formal/written)',
                connection: 'V／A／naである／N＋のみならず',
                examples: [
                  { jp: 'その映画は日本のみならず、外国でも広く知られている。', en: 'That film is widely known not only in Japan but also abroad.' },
                  { jp: 'この料理は味が良いのみならず、見た目も美しい。', en: 'This dish is not only tasty but also beautiful.' },
                ],
                note: 'Formal version of ばかりでなく.',
              },
            ],
          },
          {
            day: 5,
            theme: '意志・比況 — Volition & semblance',
            points: [
              {
                pattern: '〜ようではないか', meaning: "let's ~; why don't we ~ (strong call to action)",
                connection: 'V(volitional)＋ではないか',
                examples: [
                  { jp: '今日はお祝いだ。みんなで飲もうではないか。', en: "It's a celebration — let's all drink together." },
                  { jp: 'だれもやらないなら、ぼくがやってみようじゃないか。', en: "If no one will, why don't I give it a go." },
                ],
                note: 'Strong will/invitation; somewhat masculine.',
              },
              {
                pattern: '〜ようがない／ようもない', meaning: "there's no way to ~; can't possibly ~",
                connection: 'Vます＋ようがない',
                examples: [
                  { jp: '何と言ったらいいか、言いようがない。', en: 'I have no way to express how I feel.' },
                  { jp: '日本語がめちゃくちゃで、直しようがない。', en: "The Japanese is so broken there's no way to fix it." },
                ],
                note: 'No method or means exists to do it.',
              },
              {
                pattern: '〜かのようだ', meaning: 'as if ~; as though ~',
                connection: 'V／A／naである／Nである＋かのようだ',
                examples: [
                  { jp: '葬式が始まると雨が降り出した。まるで空が泣いているかのようだ。', en: 'As the funeral began, rain fell — as if the sky were crying.' },
                  { jp: '怖いものでも見たかのように、彼女は震えていた。', en: "She trembled as if she'd seen something frightening." },
                ],
                note: 'A figurative comparison (not actually the case).',
              },
              {
                pattern: '〜そうにない／そうもない', meaning: "unlikely to ~; doesn't look like it'll ~",
                connection: 'Vます＋そうにない',
                examples: [
                  { jp: '最近は仕事が忙しくて、同窓会に行けそうにない。', en: "Work's so busy lately I'm unlikely to make the reunion." },
                  { jp: 'できそうもないことを、できると言って後悔している。', en: 'I regret claiming I could do something that seems impossible.' },
                ],
                note: 'Negative of 〜そうだ (looks like it will).',
              },
            ],
          },
          {
            day: 6,
            theme: '基準・場面 — Basis & occasion',
            points: [
              {
                pattern: '〜に際して', meaning: 'on the occasion of ~; when ~ (formal)',
                connection: 'N／Vる＋に際して',
                examples: [
                  { jp: 'お申し込みに際しては、写真が必要となります。', en: 'When applying, a photograph is required.' },
                  { jp: 'A氏は日本を訪問するに際し、喜びを語った。', en: 'Mr. A spoke of his joy on the occasion of visiting Japan.' },
                ],
                note: 'Formal; similar to にあたって.',
              },
              {
                pattern: '〜に基づいて', meaning: 'based on ~; on the basis of ~',
                connection: 'Nに基づいて／基づき／基づいた',
                examples: [
                  { jp: 'この工事は市の計画に基づいて進められる。', en: "This construction is carried out based on the city's plan." },
                  { jp: '長年の経験に基づき、新入社員を教育する。', en: 'Based on years of experience, I train the new employees.' },
                ],
                note: '事実に基づいて, 資料に基づいて.',
              },
              {
                pattern: '〜に応じて', meaning: 'in response to ~; according to ~ (varying with)',
                connection: 'Nに応じて／応じた',
                examples: [
                  { jp: 'ソフトは、必要に応じてダウンロードしてください。', en: 'Download the software as needed.' },
                  { jp: 'テスト結果に基づき、能力に応じたクラスに分けられる。', en: "Based on test results, you're placed in classes according to ability." },
                ],
                note: 'Flexibly varies with N. 収入に応じて.',
              },
              {
                pattern: '〜の下で／の下に', meaning: 'under ~ (guidance / conditions)',
                connection: 'Nの＋下で／下に',
                examples: [
                  { jp: '子どもたちが青空の下で元気に遊んでいる。', en: 'The children are playing happily under the blue sky.' },
                  { jp: '田中先生のご指導の下、研究論文を書いている。', en: "I'm writing my research paper under Tanaka-sensei's guidance." },
                ],
                note: '指導の下 (under guidance), 青空の下 (under the open sky).',
              },
            ],
          },
        ],
      },
      {
        week: 6,
        title: 'やるからにはおぼえよう',
        titleEn: 'As long as you do it, remember',
        theme: 'Since/given that, viewpoint & judgment, just-because, negative will, certainty, scope & formality',
        days: [
          {
            day: 1,
            theme: '前提 — Since / given that',
            points: [
              {
                pattern: '〜以来', meaning: 'since ~ (ever since)',
                connection: 'N／Vて＋以来',
                examples: [
                  { jp: '日本に来て以来、母の料理を食べていない。', en: "Since I came to Japan, I haven't eaten my mother's cooking." },
                  { jp: '入学以来、一度も授業を休んでいない。', en: "Since entering school, I haven't missed a single class." },
                ],
                note: 'From a past point continuing up to now.',
              },
              {
                pattern: '〜以上(は)', meaning: 'now that ~; since ~ (so one must)',
                connection: 'Vる／Vた／Nである＋以上(は)',
                examples: [
                  { jp: '試験を受ける以上、いい点を取りたい。', en: "Now that I'm taking the exam, I want a good score." },
                  { jp: '日本に住む以上は、日本語ができるようになりたい。', en: 'Now that I live in Japan, I want to become able to speak Japanese.' },
                ],
                note: 'A natural obligation follows. ≒ からには.',
              },
              {
                pattern: '〜からには', meaning: 'now that ~; since ~ (so one naturally must)',
                connection: 'Vる／Vた＋からには',
                examples: [
                  { jp: '約束したからには、守るべきだ。', en: "Now that I've promised, I must keep it." },
                  { jp: '試合に出るからには、勝ちたい。', en: "Since I'm playing in the match, I want to win." },
                ],
                note: 'Strong resolve/obligation. ≒ 以上は.',
              },
              {
                pattern: '〜折に／折には', meaning: 'on the occasion of ~; when ~ (formal, polite)',
                connection: 'N／Vた＋折に(は)',
                examples: [
                  { jp: '来日の折には、ぜひこちらにお立ち寄りください。', en: 'When you come to Japan, please be sure to drop by.' },
                  { jp: '次にお目にかかった折に、お借りした本をお返しします。', en: "When I next see you, I'll return the book I borrowed." },
                ],
                note: 'Polite/formal for "when / on the occasion of".',
              },
            ],
          },
          {
            day: 2,
            theme: '視点・判断 — Viewpoint & judgment',
            points: [
              {
                pattern: '〜から言うと／から言えば', meaning: 'speaking from ~; in terms of ~',
                connection: 'Nから＋言うと／言えば',
                examples: [
                  { jp: '客の立場から言うと、この店は入り口がせまくて入りにくい。', en: "From the customer's standpoint, this shop has a narrow, hard-to-enter doorway." },
                  { jp: '品質の面から言えば、これは優れている。', en: 'In terms of quality, this one is excellent.' },
                ],
                note: 'States a viewpoint or criterion. Also 〜から言って.',
              },
              {
                pattern: '〜からすると／からすれば', meaning: 'judging from ~; based on ~',
                connection: 'Nから＋すると／すれば',
                examples: [
                  { jp: '症状からすると、心臓の病気かもしれません。', en: 'Judging from the symptoms, it may be a heart condition.' },
                  { jp: '周りの態度からすると、あの方が社長ではないでしょうか。', en: "Judging from how everyone acts, he's probably the president." },
                ],
                note: 'A basis for inference.',
              },
              {
                pattern: '〜からして', meaning: 'judging even from ~; (taking) ~ as an example',
                connection: 'Nからして',
                examples: [
                  { jp: '彼は服装からしてだらしない。きっとほかの面も同じだろう。', en: "He's sloppy even from his clothes — probably the same in other ways too." },
                  { jp: 'この映画は題名からして暗そうだ。', en: 'This movie sounds gloomy even just from its title.' },
                ],
                note: 'Gives a representative example — "even just from N".',
              },
              {
                pattern: '〜から見ると／から見れば／から見て', meaning: "seen from ~; from ~'s perspective",
                connection: 'Nから＋見ると／見れば／見て',
                examples: [
                  { jp: '日本の習慣は、外国人から見ると妙なものもあるだろう。', en: "Some Japanese customs seem strange seen from a foreigner's view." },
                  { jp: '昔の人から見れば、現代人の生活は速すぎるかもしれない。', en: 'From the perspective of people in the past, modern life may be too fast.' },
                ],
                note: 'The perspective of an observer.',
              },
            ],
          },
          {
            day: 3,
            theme: '根拠・範囲 — Reason & range',
            points: [
              {
                pattern: '〜からといって', meaning: 'just because ~ (doesn\'t mean ~)',
                connection: 'V／A／naな／Nである＋からといって',
                examples: [
                  { jp: '好きだからといって、同じ食品ばかり食べるのはよくない。', en: "Just because you like it, eating only that food isn't good." },
                  { jp: '日本に住んでいるからといって、日本語ができるとは限らない。', en: "Just because you live in Japan doesn't mean you can speak Japanese." },
                ],
                note: 'Casual からって; denies a hasty conclusion.',
              },
              {
                pattern: '〜てからでないと／てからでなければ', meaning: 'not until after ~; unless you first ~',
                connection: 'Vて＋からでないと／からでなければ',
                examples: [
                  { jp: '手続きしてからでないと、図書館の本は借りられない。', en: "You can't borrow library books unless you finish the procedures first." },
                  { jp: '親の許可をもらってからでなければ、申し込めない。', en: "You can't apply unless you first get your parents' permission." },
                ],
                note: 'A required prior step.',
              },
              {
                pattern: '〜から〜にかけて', meaning: 'from ~ to ~ (over a span of time or place)',
                connection: 'N₁から＋N₂にかけて',
                examples: [
                  { jp: '2007年から2009年にかけて、ロンドンに住んでいました。', en: 'I lived in London from 2007 to 2009.' },
                  { jp: 'この駅からあそこの通りにかけて、再開発されるそうです。', en: 'The area from this station to that street is to be redeveloped.' },
                ],
                note: 'A vague, continuous span.',
              },
              {
                pattern: '〜にかけては', meaning: 'when it comes to ~; in terms of (a skill)',
                connection: 'Nにかけては',
                examples: [
                  { jp: '足の速さにかけては、彼は町で一番だ。', en: "When it comes to running speed, he's the best in town." },
                  { jp: '歌のうまさにかけては、彼に勝てる人はいない。', en: 'When it comes to singing, no one can beat him.' },
                ],
                note: 'Emphasizes excellence in one particular area.',
              },
            ],
          },
          {
            day: 4,
            theme: '伝聞・否定の意志 — Hearsay & negative will',
            points: [
              {
                pattern: '〜とか', meaning: 'I hear that ~; something like ~ (vague hearsay)',
                connection: 'V／A／naだ／Nだ＋とか',
                examples: [
                  { jp: '今夜の花火大会は、雨で中止だとか。', en: "I hear tonight's fireworks are cancelled due to rain." },
                  { jp: '今、インフルエンザがはやっているとか。', en: 'I hear the flu is going around now.' },
                ],
                note: 'Softer and less certain than 〜そうだ.',
              },
              {
                pattern: '〜まい (negative will)', meaning: "won't ~; will never ~ (a decision not to)",
                connection: 'Vる＋まい（する→すまい, くる→こまい）',
                examples: [
                  { jp: 'あんなひどいところ、二度と行くまい。', en: "I'll never go to such an awful place again." },
                  { jp: '絶対に買った水以外は飲むまいと思った。', en: "I decided I'd never drink anything but bottled water." },
                ],
                note: 'A firm decision NOT to do something.',
              },
              {
                pattern: '〜まい (negative conjecture)', meaning: 'probably won\'t ~; surely not ~',
                connection: 'Vる＋まい',
                examples: [
                  { jp: '彼には私の気持ちはわかるまい。', en: "He probably won't understand my feelings." },
                  { jp: '上級者でも、この問題はできまい。', en: "Even advanced learners surely can't answer this." },
                ],
                note: '〜ではあるまいか = perhaps ~? (a guess)',
              },
              {
                pattern: '〜(よ)うか〜まいか', meaning: 'whether or not to ~ (deliberation)',
                connection: 'Vよう＋か＋Vまい＋か',
                examples: [
                  { jp: '本当のことを話そうか話すまいか迷った。', en: 'I agonized over whether to tell the truth.' },
                  { jp: '食べようか食べまいか考えている。', en: "I'm wondering whether or not to eat." },
                ],
                note: 'Wavering over a yes/no decision.',
              },
            ],
          },
          {
            day: 5,
            theme: '確信・限定 — Certainty & limitation',
            points: [
              {
                pattern: '〜に決まっている', meaning: 'surely ~; bound to ~ (I\'m certain)',
                connection: 'V／A／naな／N＋に決まっている',
                examples: [
                  { jp: 'あのチームが勝つに決まっている。', en: 'That team is bound to win.' },
                  { jp: '彼が犯人に決まっている。', en: 'He must be the culprit.' },
                ],
                note: 'Strong subjective certainty. ≒ に違いない.',
              },
              {
                pattern: '〜とは限らない', meaning: 'not necessarily ~; not always ~',
                connection: 'V／A／naな／N＋とは限らない',
                examples: [
                  { jp: '相手が弱いチームでも、必ず勝つとは限らない。', en: "Even against a weak team, you won't necessarily win." },
                  { jp: 'お金持ちが幸せだとは限らない。', en: "The rich aren't necessarily happy." },
                ],
                note: 'Often with 必ずしも〜とは限らない.',
              },
              {
                pattern: '〜よりほかない／よりほかはない', meaning: 'have no choice but to ~',
                connection: 'Vる＋よりほかない',
                examples: [
                  { jp: '全力をつくした。あとは祈るよりほかない。', en: "I've done my best; now I can only pray." },
                  { jp: 'もう後には戻れない。前進するよりほかない。', en: "I can't go back; I have no choice but to move forward." },
                ],
                note: '= 〜しかない.',
              },
              {
                pattern: '〜にほかならない', meaning: 'it is nothing but ~; precisely ~',
                connection: 'Nに＋ほかならない',
                examples: [
                  { jp: '合格したのは、彼の努力の結果にほかならない。', en: 'His passing is nothing but the result of his effort.' },
                  { jp: '成功は努力の積み重ねにほかならない。', en: 'Success is nothing other than accumulated effort.' },
                ],
                note: 'Emphatic "exactly / nothing other than".',
              },
            ],
          },
          {
            day: 6,
            theme: '範囲・改まった表現 — Scope & formal expressions',
            points: [
              {
                pattern: '〜をはじめ／をはじめとする', meaning: 'starting with ~; including ~ (leading example)',
                connection: 'Nを＋はじめ／はじめとする／はじめとして',
                examples: [
                  { jp: '会議には中国をはじめ、アジアの国々が参加した。', en: 'Asian countries, starting with China, took part in the conference.' },
                  { jp: 'わが国では、野球をはじめとして、サッカーやテニスなどがさかんだ。', en: 'In our country, sports like baseball, soccer, and tennis are popular.' },
                ],
                note: 'Names a representative example first.',
              },
              {
                pattern: '〜をめぐって／をめぐる', meaning: 'concerning ~; over ~ (a dispute or issue)',
                connection: 'Nを＋めぐって／めぐる',
                examples: [
                  { jp: '憲法改正をめぐって、長い間、論争が続いている。', en: "There's been a long dispute over constitutional reform." },
                  { jp: '教育制度をめぐる諸問題について話し合う。', en: 'We discuss the issues surrounding the education system.' },
                ],
                note: 'Usually a controversy or debate around N.',
              },
              {
                pattern: '〜において／における', meaning: 'in / at / regarding ~ (formal)',
                connection: 'Nにおいて／における',
                examples: [
                  { jp: '京都において、シンポジウムが行われた。', en: 'A symposium was held in Kyoto.' },
                  { jp: '国際社会における我が国の役割を考える。', en: "We consider our nation's role in the international community." },
                ],
                note: 'Formal version of で (place / field / situation).',
              },
              {
                pattern: '〜にて', meaning: 'at / by / with ~ (very formal, written)',
                connection: 'N＋にて',
                examples: [
                  { jp: '現地にて解散となります。', en: 'We will disband at the site.' },
                  { jp: '電話かメールにてご連絡ください。', en: 'Please contact us by phone or email.' },
                ],
                note: 'Formal/written equivalent of で.',
              },
            ],
          },
        ],
      },
      {
        week: 7,
        title: 'がんばればおぼえられるというものだ',
        titleEn: 'If you try hard enough, you can likely remember',
        theme: 'Regardless of, listing & alternatives, social-norm もの, via/centered-on, risk & impression, basis & trigger',
        days: [
          {
            day: 1,
            theme: '無関係 — Regardless of',
            points: [
              {
                pattern: '〜もかまわず', meaning: 'without caring about ~; heedless of ~',
                connection: 'Nも／Vるのも＋かまわず',
                examples: [
                  { jp: '彼女は人目もかまわず子どものように泣いた。', en: 'She cried like a child, heedless of how it looked.' },
                  { jp: '彼は靴が脱げるのもかまわず走り続けた。', en: 'He kept running, not caring that his shoes were coming off.' },
                ],
                note: 'Ignoring something one would normally mind.',
              },
              {
                pattern: '〜にもかかわらず', meaning: 'despite ~; in spite of ~',
                connection: 'V／A／naである／Nである＋にもかかわらず',
                examples: [
                  { jp: '雨にもかかわらず、大勢の人々が集まった。', en: 'Despite the rain, a big crowd gathered.' },
                  { jp: '見たにもかかわらず、彼は見なかったと言った。', en: "Even though he saw it, he said he hadn't." },
                ],
                note: 'Contrary to what is expected.',
              },
              {
                pattern: '〜にかかわらず／にかかわりなく', meaning: 'regardless of ~; irrespective of ~',
                connection: 'Vる-Vない／Aい-Aくない／N＋にかかわらず',
                examples: [
                  { jp: '来る来ないにかかわらず、連絡をください。', en: 'Regardless of whether you come, please contact me.' },
                  { jp: '国籍にかかわらず、歓迎します。', en: 'We welcome you regardless of nationality.' },
                ],
                note: 'あるなし／上手下手にかかわらず.',
              },
              {
                pattern: '〜を問わず', meaning: 'regardless of ~; no matter the ~ (formal)',
                connection: 'N＋を問わず',
                examples: [
                  { jp: '年齢を問わず、多くの人々が集まった。', en: 'People of all ages gathered.' },
                  { jp: 'このアルバイトは経験を問いません。', en: 'This job requires no experience, regardless of background.' },
                ],
                note: '男女・経験・年齢・昼夜を問わず.',
              },
            ],
          },
          {
            day: 2,
            theme: '列挙・選択 — Listing & alternatives',
            points: [
              {
                pattern: '〜やら〜やら', meaning: 'things like ~ and ~ (and so on)',
                connection: 'N／A／naだ／V＋やら〜やら',
                examples: [
                  { jp: '机の上は本やらノートやらいっぱいだ。', en: 'The desk is piled with books, notebooks, and so on.' },
                  { jp: '目がかゆいやら鼻水が出るやら、大変だ。', en: "My eyes itch, my nose runs — it's awful." },
                ],
                note: 'Lists examples, often a nuisance or jumble.',
              },
              {
                pattern: '〜につけ〜につけ', meaning: 'whether ~ or ~; every time ~',
                connection: 'Vる／Aい＋につけ',
                examples: [
                  { jp: '写真を見るにつけ、国を思い出す。', en: 'Every time I see photos, I remember my country.' },
                  { jp: 'いいにつけ悪いにつけ、子は親に似る。', en: 'For better or worse, children resemble their parents.' },
                ],
                note: '何かにつけ = at every opportunity.',
              },
              {
                pattern: '〜にしろ〜にしろ／にせよ〜にせよ', meaning: 'whether ~ or ~ (either way)',
                connection: 'V／A／naである／N＋にしろ〜にしろ',
                examples: [
                  { jp: '行くにしろ行かないにしろ、連絡してください。', en: 'Whether you go or not, please let me know.' },
                  { jp: '受験はするにしろ、勉強はしなさい。', en: 'Whether you take the exam or not, study.' },
                ],
                note: 'にせよ is the more formal variant.',
              },
              {
                pattern: '〜も〜ば〜も', meaning: 'both ~ and ~ (parallel listing)',
                connection: 'Nも＋Vば／Aければ／naなら＋Nも',
                examples: [
                  { jp: '彼は勉強もできればスポーツもできる。', en: 'He can both study and play sports well.' },
                  { jp: '私は歌も下手ならダンスも下手だ。', en: "I'm bad at both singing and dancing." },
                ],
                note: 'Lists two parallel facts (good or bad).',
              },
            ],
          },
          {
            day: 3,
            theme: '常識・主張 — Common sense & assertion',
            points: [
              {
                pattern: '〜ものだ', meaning: 'should ~; one ought to ~ (general truth)',
                connection: 'Vる／Aい／naな＋ものだ',
                examples: [
                  { jp: '薬は苦いものだ。', en: 'Medicine is (by nature) bitter.' },
                  { jp: '学生は勉強するものだ。', en: 'Students are supposed to study.' },
                ],
                note: 'A general truth or how things naturally are.',
              },
              {
                pattern: '〜ものではない', meaning: "shouldn't ~; one must not ~ (advice)",
                connection: 'Vる＋ものではない',
                examples: [
                  { jp: '目上の人にそんな言い方をするものではない。', en: "You shouldn't speak that way to a superior." },
                  { jp: '口の中にものを入れたまましゃべるものではない。', en: "You shouldn't talk with your mouth full." },
                ],
                note: 'Advice against improper behavior.',
              },
              {
                pattern: '〜というものだ', meaning: "it's truly ~; that's what you call ~",
                connection: 'Vる／N／na＋というものだ',
                examples: [
                  { jp: '今日中にこれを全部終わらせるのは無理というものだ。', en: 'Finishing all this today is simply impossible.' },
                  { jp: '夜中に電話をするのは非常識というものだ。', en: 'Calling in the middle of the night is just inconsiderate.' },
                ],
                note: 'An emphatic conclusion or judgment.',
              },
              {
                pattern: '〜ものか／もんか', meaning: 'absolutely not ~; as if ~ (strong refusal)',
                connection: 'Vる／Aい／naな／Nな＋ものか',
                examples: [
                  { jp: 'あんな店、二度と行くものか。', en: "I'll never go to that shop again!" },
                  { jp: '元気なもんか。くたくただよ。', en: "Energetic? No way — I'm exhausted." },
                ],
                note: 'Rhetorical, emphatic negative.',
              },
            ],
          },
          {
            day: 4,
            theme: '手段・中心 — Means & focus',
            points: [
              {
                pattern: '〜を中心に／を中心として', meaning: 'centered on ~; mainly ~',
                connection: 'Nを＋中心に／中心として／中心とした',
                examples: [
                  { jp: '東京を中心に、関東地方は風が強くなっている。', en: 'Centered on Tokyo, the Kanto region has strong winds.' },
                  { jp: 'この店はスキー用品を中心としたスポーツ店だ。', en: 'This is a sports shop centered on ski equipment.' },
                ],
                note: 'The focal point of something.',
              },
              {
                pattern: '〜をこめて', meaning: 'with (full of) ~ (feeling)',
                connection: 'Nを＋こめて',
                examples: [
                  { jp: '感謝の気持ちをこめてマフラーを編んだ。', en: 'I knitted a scarf full of gratitude.' },
                  { jp: '愛をこめてカードを贈る。', en: 'I send a card with love.' },
                ],
                note: '心をこめて, 愛をこめて — pour feeling into it.',
              },
              {
                pattern: '〜を通じて／を通して', meaning: 'through ~; throughout ~',
                connection: 'Nを＋通じて／通して',
                examples: [
                  { jp: '友人を通じて彼と知り合った。', en: 'I got to know him through a friend.' },
                  { jp: 'テレビのニュースを通じてその事件を知った。', en: 'I learned of the incident through TV news.' },
                ],
                note: 'Also "throughout" — 一年を通じて (throughout the year).',
              },
              {
                pattern: '〜を頼りに', meaning: 'relying on ~; with the help of ~',
                connection: 'Nを＋頼りに／頼りにして',
                examples: [
                  { jp: '地図を頼りに、レストランへ行った。', en: 'Relying on a map, I went to the restaurant.' },
                  { jp: '祖父はつえを頼りにして歩いている。', en: 'My grandfather walks with the help of a cane.' },
                ],
                note: 'Depend on N as a guide or support.',
              },
            ],
          },
          {
            day: 5,
            theme: '危険・印象 — Risk & impression',
            points: [
              {
                pattern: '〜恐れがある', meaning: "there's a risk/fear that ~ (formal)",
                connection: 'Vる／Nの＋恐れがある',
                examples: [
                  { jp: '地震の際には、窓ガラスが割れる恐れがある。', en: 'In an earthquake, windows may break.' },
                  { jp: '台風は今夜、四国に上陸する恐れがあります。', en: 'The typhoon may make landfall in Shikoku tonight.' },
                ],
                note: 'A feared negative possibility; news/formal.',
              },
              {
                pattern: '〜ものがある', meaning: "there's something ~ about it; it's truly ~",
                connection: 'Vる／Aい／naな＋ものがある',
                examples: [
                  { jp: '満員電車で毎日通勤するのはつらいものがある。', en: 'Commuting daily on a packed train is genuinely hard.' },
                  { jp: '彼の歌にはひびくものがある。', en: 'His songs have something that resonates.' },
                ],
                note: 'Expresses a felt impression or quality.',
              },
              {
                pattern: '〜というものでもない', meaning: "it's not necessarily ~; not as though ~",
                connection: 'Vば／Aければ／naなら／N(だ)という＋ものでもない',
                examples: [
                  { jp: '何でも多ければいいというものでもない。', en: "Having a lot isn't necessarily good." },
                  { jp: 'お金があれば幸せだというものでもない。', en: "Having money doesn't necessarily make you happy." },
                ],
                note: 'Denies an oversimplified idea.',
              },
              {
                pattern: '〜ないものか／ないものだろうか', meaning: 'isn\'t there some way to ~? (a strong wish)',
                connection: 'Vない＋ものか／ものだろうか',
                examples: [
                  { jp: 'この渋滞、どうにかならないものか。', en: "Isn't there some way to fix this traffic jam?" },
                  { jp: 'なんとか安く手に入らないものだろうか。', en: "Isn't there some way to get it cheaply?" },
                ],
                note: 'A strong wish/hope that something could be done.',
              },
            ],
          },
          {
            day: 6,
            theme: '基準・契機 — Basis & trigger',
            points: [
              {
                pattern: '〜をもとに(して)', meaning: 'based on ~; using ~ as a basis',
                connection: 'Nを＋もとに／もとにして',
                examples: [
                  { jp: 'この小説は事実をもとに書かれた。', en: 'This novel is based on fact.' },
                  { jp: '失敗をもとにして発明が生まれる。', en: 'Inventions come from building on failure.' },
                ],
                note: 'The source material. Cf. に基づいて (more formal).',
              },
              {
                pattern: '〜につき', meaning: 'due to ~; because of ~ (formal notice)',
                connection: 'N＋につき',
                examples: [
                  { jp: 'この機械はただ今調整中につき、ご使用になれません。', en: 'This machine is out of service due to maintenance.' },
                  { jp: '本日は祝日につき、休業いたします。', en: 'As today is a holiday, we are closed.' },
                ],
                note: 'Formal, often on signs/notices. (Also means "per".)',
              },
              {
                pattern: '〜をきっかけに(して)', meaning: 'taking ~ as an opportunity; triggered by ~',
                connection: 'Nを／Vるの＋きっかけに(して)',
                examples: [
                  { jp: '大学入学をきっかけに、引っ越した。', en: 'I moved when I started university.' },
                  { jp: '病気をきっかけに、たばこをやめた。', en: 'An illness prompted me to quit smoking.' },
                ],
                note: 'Also 〜を契機に (more formal).',
              },
              {
                pattern: '〜の際に／際は', meaning: 'on the occasion of ~; when ~ (formal)',
                connection: 'Nの／Vる／Vた＋際に',
                examples: [
                  { jp: '受験の際に、写真が必要です。', en: 'A photo is required when you take the exam.' },
                  { jp: '申し込みの際、住所を間違って書いてしまった。', en: 'When applying, I wrote my address wrong.' },
                ],
                note: 'お帰りの際, お降りの際 — formal "when".',
              },
            ],
          },
        ],
      },
      {
        week: 8,
        title: 'むずかしい。それでもおぼえよう。',
        titleEn: "It's difficult, but I'll memorize it",
        theme: '接続詞 — Conjunctions: contrast, result, topic shift, restatement, inference, addition',
        days: [
          {
            day: 1,
            theme: '逆接・順接 — Contrast & result',
            points: [
              {
                pattern: 'それなのに', meaning: 'and yet; despite that (unexpected result)',
                connection: '〔A: fact〕。それなのに〔B: unexpected〕',
                examples: [
                  { jp: 'この時計は高かった。それなのにすぐ壊れた。', en: 'This watch was expensive, and yet it broke right away.' },
                  { jp: '一生懸命勉強している。それなのに成績はよくならない。', en: "I study hard, and yet my grades don't improve." },
                ],
                note: 'An unexpected, contrary result. ≒ ところが.',
              },
              {
                pattern: 'それでも', meaning: 'even so; nevertheless',
                connection: '〔A: situation〕。それでも〔B: action despite A〕',
                examples: [
                  { jp: '外は大雨だ。それでも出かけないといけない。', en: "It's pouring out. Even so, I have to go." },
                  { jp: 'みんなに反対されている。それでも私は彼と結婚したい。', en: "Everyone's against it. Even so, I want to marry him." },
                ],
                note: 'Doing B despite A. ≒ だけど.',
              },
              {
                pattern: 'それなら', meaning: "if that's the case; then",
                connection: '「A」それなら「B」',
                examples: [
                  { jp: '「道がすごく渋滞しているようだよ。」「それなら電車で行こう。」', en: '"The roads seem jammed." "Then let\'s take the train."' },
                  { jp: '「今、やりたくない。」「それならやらなくていいよ。」', en: '"I don\'t want to now." "Then you don\'t have to."' },
                ],
                note: 'B follows from A. ≒ じゃあ／それじゃ.',
              },
              {
                pattern: 'それで', meaning: 'and so; because of that (result)',
                connection: '〔A: reason〕。それで〔B: result〕',
                examples: [
                  { jp: '父は働きすぎた。それで病気になった。', en: 'My father overworked, and so he fell ill.' },
                  { jp: '「田中君、インフルエンザにかかったんだって。」「それで学校を休んだんだね。」', en: '"Tanaka caught the flu." "So that\'s why he was absent."' },
                ],
                note: '≒ だから. Also prompts "and then?".',
              },
            ],
          },
          {
            day: 2,
            theme: '展開・話題転換 — Development & topic shift',
            points: [
              {
                pattern: 'それが', meaning: 'but (unexpectedly); actually',
                connection: '〔A〕。それが〔B: contrary to expectation〕',
                examples: [
                  { jp: '「もう大学をご卒業されたでしょう?」「それが、まだなんですよ。」', en: '"You must have graduated by now?" "Well, actually, not yet."' },
                  { jp: 'たばこをやめると言った。それが、三日でまた吸ってしまった。', en: "I said I'd quit smoking. But in three days I was smoking again." },
                ],
                note: 'Introduces an unexpected, often regrettable fact. ≒ ところが.',
              },
              {
                pattern: 'そこで', meaning: 'and so; thereupon (so I did B)',
                connection: '〔A: situation〕。そこで〔B: action taken〕',
                examples: [
                  { jp: '明日は車が混むらしい。そこで早く出発するつもりだ。', en: 'Traffic will be bad tomorrow, so I plan to leave early.' },
                  { jp: '「アメリカに行きます。そこでお願いがあるのですが…」', en: '"I\'m going to America. In that connection, I have a favor..."' },
                ],
                note: 'Take action B in response to A. ≒ そういうわけで.',
              },
              {
                pattern: 'そういえば', meaning: 'come to think of it; speaking of which',
                connection: '〔A〕。そういえば〔related topic〕',
                examples: [
                  { jp: '「そういえば、田中君、元気かな?」', en: '"Come to think of it, I wonder how Tanaka is."' },
                  { jp: '「いい家ですね。そういえば、お父様は設計士さんでしたよね。」', en: '"Nice house. Speaking of which, your father was an architect, right?"' },
                ],
                note: 'Recalls a related topic prompted by the conversation.',
              },
              {
                pattern: 'それはそうと', meaning: 'anyway; by the way (changing topic)',
                connection: '〔A〕。それはそうと〔new topic〕',
                examples: [
                  { jp: '「今日の授業、ためになったね。それはそうと、今度の試験いつだっけ?」', en: '"Today\'s class was useful. By the way, when\'s the next exam?"' },
                  { jp: '「春になりましたね。それはそうと、田中さんの息子さん、大学受かったでしょうか。」', en: '"Spring\'s here. By the way, did Mr. Tanaka\'s son get into university?"' },
                ],
                note: 'Changes the topic. ≒ ところで.',
              },
            ],
          },
          {
            day: 3,
            theme: '言い換え・選択 — Restatement & alternative',
            points: [
              {
                pattern: 'すなわち', meaning: 'namely; in other words; that is',
                connection: '〔A〕、すなわち〔A restated〕',
                examples: [
                  { jp: '母の兄、すなわち僕のおじさん。', en: "My mother's older brother, namely my uncle." },
                  { jp: 'このペットボトルには1,000ミリリットル、すなわち1リットルの水が入っている。', en: 'This bottle holds 1,000 mL — that is, 1 liter — of water.' },
                ],
                note: 'Restates in clearer terms. ≒ 言い換えると.',
              },
              {
                pattern: 'あるいは', meaning: 'or; either ~ or ~',
                connection: '〔A〕あるいは〔B〕',
                examples: [
                  { jp: 'ファックス、あるいはメールでお知らせください。', en: 'Please notify us by fax or email.' },
                  { jp: '来週の火曜の午後、あるいは水曜の午前でもかまいません。', en: 'Tuesday afternoon next week, or Wednesday morning, is fine.' },
                ],
                note: 'Presents alternatives. ≒ または.',
              },
              {
                pattern: 'だが', meaning: 'but; however (formal, written)',
                connection: '〔A〕。だが〔B: contrast〕',
                examples: [
                  { jp: 'これは難しい挑戦だ。だが失敗を恐れてはいけない。', en: "This is a hard challenge. But we mustn't fear failure." },
                  { jp: '生活は貧しい。だが幸せだ。', en: "Life is poor. But we're happy." },
                ],
                note: 'Formal/written. ≒ しかし／けれども.',
              },
              {
                pattern: 'だって', meaning: 'because; but (casual reason/excuse)',
                connection: '「A?」「だって〜だもん」',
                examples: [
                  { jp: '「何を怒ってるの?」「だって、約束を破ったんだもん。」', en: '"Why are you mad?" "Because you broke your promise."' },
                  { jp: '「テスト、よかったんでしょう?」「うん。だってがんばったんだもん。」', en: '"Did well on the test?" "Yeah, because I worked hard."' },
                ],
                note: 'Casual, often defensive reason. Pairs with 〜もん.',
              },
            ],
          },
          {
            day: 4,
            theme: '推論・説明 — Inference & explanation',
            points: [
              {
                pattern: 'ということは', meaning: 'that means; which means (inference)',
                connection: '〔A〕。ということは〔conclusion〕',
                examples: [
                  { jp: '彼はまだ来ません。ということは欠席ということですね。', en: "He hasn't come. That means he's absent." },
                  { jp: '「もうお酒を飲みます。」「ということは二十歳を過ぎてるんだね。」', en: '"I drink now." "That means you\'re over twenty."' },
                ],
                note: 'Draws a conclusion from a fact. ≒ つまり.',
              },
              {
                pattern: 'というのは', meaning: "that's because; the reason is",
                connection: '〔A〕。というのは〔reason〕',
                examples: [
                  { jp: '今日は家を出られないんです。というのは父の具合が悪くて…。', en: "I can't go out today. That's because my father is unwell." },
                  { jp: '卵が食べられない。というのは、アレルギーがあるんです。', en: "I can't eat eggs. The reason is, I have an allergy." },
                ],
                note: 'Explains the reason for A. ≒ なぜかというと.',
              },
              {
                pattern: 'したがって', meaning: 'therefore; consequently (formal)',
                connection: '〔A〕。したがって〔logical result〕',
                examples: [
                  { jp: '彼は誠実な人だ。したがってみんなから信頼されている。', en: "He's a sincere person. Therefore everyone trusts him." },
                  { jp: '教授は病気で来られません。したがって講義は中止です。', en: "The professor can't come due to illness. Therefore the lecture is cancelled." },
                ],
                note: 'Formal logical result. ≒ だから／その結果.',
              },
              {
                pattern: 'ただし', meaning: 'however; provided that (condition/exception)',
                connection: '〔A〕。ただし〔condition / exception〕',
                examples: [
                  { jp: '全商品3割引。ただしこの棚の商品は除く。', en: 'All items 30% off. However, items on this shelf are excluded.' },
                  { jp: '明日は9時に集合です。ただし、雨の場合は中止です。', en: "Meet at 9 tomorrow. However, if it rains it's cancelled." },
                ],
                note: 'Adds a condition or exception to what was said.',
              },
            ],
          },
          {
            day: 5,
            theme: '補足・転換 — Supplement & transition',
            points: [
              {
                pattern: 'もっとも', meaning: 'but then; although (a qualification)',
                connection: '〔A〕。もっとも〔exception/qualification〕',
                examples: [
                  { jp: '検査の前夜から飲食禁止です。もっとも水は飲んでもかまいません。', en: 'No food from the night before the exam. But then, water is fine.' },
                  { jp: '全員参加です。もっとも病気の場合は別です。', en: 'Everyone participates. Though, illness is an exception.' },
                ],
                note: 'Adds a qualifying exception. ≒ ただし.',
              },
              {
                pattern: 'なお', meaning: 'also; in addition; note that (formal)',
                connection: '〔A〕。なお、〔supplementary info〕',
                examples: [
                  { jp: '「説明は以上です。なお、詳細についてはプリントをご覧ください。」', en: '"That\'s all. Also, please see the handout for details."' },
                  { jp: '「今日はこれで終わります。なお、次回の日時は…」', en: '"We\'ll finish here. Also, the next date is..."' },
                ],
                note: 'Formal; adds supplementary information.',
              },
              {
                pattern: 'さて', meaning: 'now then; well (shifts to next topic)',
                connection: '〔A〕。さて、〔next topic〕',
                examples: [
                  { jp: '「これで授業を終わります。さて、来週の予定ですが…」', en: '"That ends class. Now then, about next week..."' },
                  { jp: '「以上、ニュースをお伝えしました。さて、次は天気予報です。」', en: '"That was the news. Now, next is the weather forecast."' },
                ],
                note: 'Transitions to a new topic.',
              },
              {
                pattern: 'すると', meaning: 'then; thereupon (and as a result)',
                connection: '〔A〕。すると〔B: right after / inferred〕',
                examples: [
                  { jp: '薬を塗った。すると痛みが治まった。', en: 'I applied the medicine. Thereupon the pain eased.' },
                  { jp: '「私は外出していました。」「すると、家には誰もいなかったんですね。」', en: '"I was out." "Then nobody was home, I see."' },
                ],
                note: 'B happens right after A, or follows logically.',
              },
            ],
          },
          {
            day: 6,
            theme: '要約・追加 — Summary & addition',
            points: [
              {
                pattern: '要するに', meaning: 'in short; to sum up',
                connection: '〔A〕。要するに〔summary〕',
                examples: [
                  { jp: '試合に大負けした。要するに、力の差があったということだ。', en: 'We lost badly. In short, there was a gap in strength.' },
                  { jp: '彼は一度も入賞しなかった。要するに、才能がなかったということだ。', en: 'He never won a prize. In short, he had no talent.' },
                ],
                note: 'Summarizes the point plainly. ≒ まとめると.',
              },
              {
                pattern: 'しかも', meaning: "moreover; what's more",
                connection: '〔A〕。しかも〔further point, same direction〕',
                examples: [
                  { jp: '彼女は美人だ。しかも性格もいい。', en: "She's beautiful. What's more, she has a good personality." },
                  { jp: 'そのホテルは古くて高かった。しかもサービスも悪かった。', en: 'The hotel was old and expensive. Moreover, the service was bad too.' },
                ],
                note: 'Adds a further point. ≒ そのうえ／さらに.',
              },
              {
                pattern: 'おまけに', meaning: 'on top of that; to make matters worse',
                connection: '〔A〕。おまけに〔extra point, often negative〕',
                examples: [
                  { jp: '日本の夏は暑い。おまけに湿気も多い。', en: 'Japanese summers are hot. On top of that, very humid.' },
                  { jp: 'あの店は高いし、まずい。おまけにサービスも悪い。', en: 'That shop is expensive and bad — and on top of that, the service is bad too.' },
                ],
                note: 'Adds an extra (often negative) point. ≒ その上.',
              },
              {
                pattern: 'ちなみに', meaning: 'incidentally; by the way (for your information)',
                connection: '〔A〕。ちなみに〔related side info〕',
                examples: [
                  { jp: 'ペットを飼う家が年々増えているようだ。ちなみに、うちにも犬が1匹と猫が2匹いる。', en: 'Pet-owning households are rising. Incidentally, we have a dog and two cats too.' },
                  { jp: '燃えるゴミは月曜と木曜です。ちなみに、資源ゴミは毎月第3水曜です。', en: 'Burnable trash is Mon and Thu. Incidentally, recyclables are the 3rd Wednesday each month.' },
                ],
                note: 'Adds related supplementary information.',
              },
            ],
          },
        ],
      },
    ],
  },

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
