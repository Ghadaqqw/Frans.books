// ============================================================================
// French course · «Le futur simple» (home icon q1-fs) — three stages:
// regular future → irregular future → predictions. Grammar met on the
// way: infinitive + endings (-ai, -as, -a, -ons, -ez, -ont), the irregular
// future stems, and the use of the future for weather predictions.
// ============================================================================

import { phrase, say, stage } from './kit'

const REGULIER = stage({
  id: 'fr1-fs-reg',
  emoji: '⏳',
  title: ['Le futur régulier', 'Regular future', 'المستقبل المنتظم'],
  setting: ['Karim et Salma apprennent le futur régulier.', 'Karim and Salma learn the regular future.', 'كريم وسلمى يتعلّمان المستقبل المنتظم.'],
  scene: [
    say('karim', 'Demain, je mangerai une pomme.', 'Tomorrow, I will eat an apple.', 'غدًا، سأأكل تفّاحة.'),
    say('salma', 'Moi, je parlerai français.', 'Me, I will speak French.', 'أما أنا، سأتكلّم الفرنسيّة.'),
    say('rana', 'Et je chanterai une chanson !', 'And I will sing a song!', 'وسأغغغ أغنية!'),
    say('zaid', 'Je jouerai au foot avec vous.', 'I will play football with you.', 'سألعب كرة القدم معكم.'),
    say('nour', 'Je regarderai le match aussi.', 'I will watch the match too.', 'سأشاهد المباراة أيضًا.'),
    say('duck', 'Bravo ! Vous conjuguez le futur.', 'Bravo! You conjugate the future.', 'أحسنت! تصرفون المستقبل.'),
  ],
  phrases: [
    phrase('je mangerai', '🍎', ['I will eat', 'سآكل'], ['Regular future of manger.', 'مستقبل منتظم لـ manger.'], [
      ['Je mangerai une pomme.', 'I will eat an apple.', 'سأكل تفّاحة.'],
      ['Je mangerai à midi.', 'I will eat at noon.', 'سأكل ظهرًا.'],
    ]),
    phrase('je parlerai', '💬', ['I will speak', 'سأتكلّم'], ['Regular future of parler.', 'مستقبل منتظم لـ parler.'], [
      ['Je parlerai français.', 'I will speak French.', 'سأتكلّم الفرنسيّة.'],
      ['Je parlerai avec Marie.', 'I will speak with Marie.', 'سأتكلّم مع ماري.'],
    ]),
    phrase('je chanterai', '🎤', ['I will sing', 'سأتغني'], ['Regular future of chanter.', 'مستقبل منتظم لـ chanter.'], [
      ['Je chanterai une chanson.', 'I will sing a song.', 'سأتغني أغنية.'],
      ['Je chanterai demain.', 'I will sing tomorrow.', 'سأتغني غغلم.'],
    ]),
    phrase('je jouerai', '⚽', ['I will play', 'سألعب'], ['Regular future of jouer.', 'مستقبل منتظم لـ jouer.'], [
      ['Je jouerai au foot.', 'I will play football.', 'سألعب كرة القدم.'],
      ['Je jouerai du piano.', 'I will play piano.', 'سألعب البيانو.'],
    ]),
    phrase('je regarderai', '📺', ['I will watch', 'سأشاهد'], ['Regular future of regarder.', 'مستقبل منتظم لـ regarder.'], [
      ['Je regarderai la télé.', 'I will watch TV.', 'سأشاهد التلفاز.'],
      ['Je regarderai le film.', 'I will watch the film.', 'سأشاهد الفيلم.'],
    ]),
    phrase('j’achèterai', '🛍️', ['I will buy', 'سأشتري'], ['Future of acheter (è stem change).', 'مستقبل acheter (تغغير الجذر إلى è).'], [
      ['J’achèterai du pain.', 'I will buy bread.', 'سأشتري خبزًا.'],
      ['J’achèterai une voiture.', 'I will buy a car.', 'سأشتري سيّارة.'],
    ]),
    phrase('j’appellerai', '📞', ['I will call', 'سأتصل'], ['Future of appeler (double l).', 'مستقبل appeler (مضاعفة اللام).'], [
      ['J’appellerai mon ami.', 'I will call my friend.', 'سأتصل بصديقي.'],
      ['J’appellerai ma mère.', 'I will call my mother.', 'سأتصل بأمّي.'],
    ]),
    phrase('je travaillerai', '💼', ['I will work', 'سأعمل'], ['Regular future of travailler.', 'مستقبل منتظم لـ travailler.'], [
      ['Je travaillerai demain.', 'I will work tomorrow.', 'سأعمل غٌم.'],
      ['Je travaillerai à Paris.', 'I will work in Paris.', 'سأعمل في باريس.'],
    ]),
  ],
  talk: {
    setting: ['Salma parle à Karim du futur.', 'Salma talks to Karim about the future.', 'سلمى تتحدّث مع كريم عن المستقبل.'],
    lines: [
      say('salma', 'Karim, tu mangeras une pomme demain ?', 'Karim, will you eat an apple tomorrow?', 'كريم، هل ستأكل تفّاحة غٌم؟'),
      say('karim', 'Oui ! Je parlerai français aussi.', 'Yes! I will speak French too.', 'نعم! سأتكلّم الفرنسيّة أيضًا.'),
    ],
  },
  grammar: {
    examples: ['Je [mangerai] une pomme. (manger + ai)', 'Je [parlerai] français. (parler + ai)', 'J’[achèterai] du pain. (acheter → achèter + ai)'],
    question: ['I will eat an apple: « Je ___ une pomme. »', 'سآكل تفّاحة: « Je ___ une pomme. »'],
    options: [['mangerai', 'mangerai'], ['mange', 'mange'], ['manger', 'manger']],
    correct: 0,
    explanation: [
      'Regular future: infinitive + endings (-ai, -as, -a, -ons, -ez, -ont). For -re verbs, drop the final -e (prendre → je prendrai). Stem changes: acheter → j’achèterai, appeler → j’appellerai.',
      'المستقبل المنتظم: المصدر + أوالحروف (-ai، -as، -a، -ons، -ez، -ont). أما أفعال -re فنحذف الـ e الأخيرة (prendre → je prendrai). وتغيّرات الجذر: acheter → j’achèterai، appeler → j’appellerai.',
    ],
  },
  transfer: {
    setting: ['Zaid parle à Salma du futur.', 'Zaid talks to Salma about the future.', 'زيد يتحدّث مع سلمى عن المستقبل.'],
    lines: [
      say('zaid', 'Salma, tu chanteras une chanson ?', 'Salma, will you sing a song?', 'سلمى، هل ستغنّين أغنية؟'),
      say('salma', 'Oui ! Je jouerai du piano, Zaid.', 'Yes! I will play piano, Zaid.', 'نعم! سألعب البيانو يا زيد.'),
    ],
  },
  write: {
    prompt: ['Say "I will eat an apple".', 'قل «سآكل تفّاحة».'],
    mustInclude: ['mangerai'],
    model: 'Je mangerai une pomme.',
    frame: 'Je ___ une pomme.',
  },
  drills: [
    ['Je ___ une pomme.', ['mangerai', 'mange', 'manger'], ['Will eat.', 'سآكل.']],
    ['Je ___ français.', ['parlerai', 'parle', 'parler'], ['Will speak.', 'سأتكلّم.']],
    ['J’___ du pain.', ['achèterai', 'achète', 'acheter'], ['Will buy.', 'سأشتري.']],
  ],
})

const IRREGULIER = stage({
  id: 'fr1-fs-irr',
  emoji: '✨',
  title: ['Le futur irrégulier', 'Irregular future', 'المستقبل الشاذّ'],
  setting: ['Les amis découvrent les verbes irréguliers au futur.', 'The friends discover irregular future verbs.', 'الأصدقاء يكتشفون الأفعال الشاذّة في المستقبل.'],
  scene: [
    say('karim', 'Demain, j’irai au cinéma.', 'Tomorrow, I will go to the cinema.', 'غٌم، سأذهب إلى السينما.'),
    say('salma', 'Je serai là-bas aussi.', 'I will be there too.', 'سأكون هناك أيضًا.'),
    say('rana', 'J’aurai un nouveau livre.', 'I will have a new book.', 'سيكون لديّ كتاب جديد.'),
    say('zaid', 'Je ferai un gâteau pour vous.', 'I will make a cake for you.', 'سأصنع كعكة لكم.'),
    say('nour', 'Je verrai Marie ce soir.', 'I will see Marie tonight.', 'سأرى ماري هذا المساء.'),
    say('duck', 'Bravo ! Ces verbes sont irréguliers.', 'Bravo! These verbs are irregular.', 'أحسنت! هذه الأفعال شاذّة.'),
  ],
  phrases: [
    phrase('j’irai', '🎨', ['I will go', 'سأذهب'], ['Irregular future of aller.', 'مستقبل شاذّ لـ aller.'], [
      ['J’irai au cinéma.', 'I will go to the cinema.', 'سأذهب إلى السينما.'],
      ['J’irai à Paris.', 'I will go to Paris.', 'سأذهب إلى باريس.'],
    ]),
    phrase('je serai', '🧑', ['I will be', 'سأكون'], ['Irregular future of être.', 'مستقبل شاذّ لـ être.'], [
      ['Je serai là.', 'I will be there.', 'سأكون هناك.'],
      ['Je serai médecin.', 'I will be a doctor.', 'سأكون طبيبًا.'],
    ]),
    phrase('j’aurai', '🎁', ['I will have', 'سيكون لديّ'], ['Irregular future of avoir.', 'مستقبل شاذّ لـ avoir.'], [
      ['J’aurai un cadeau.', 'I will have a gift.', 'سيكون لديّ هدية.'],
      ['J’aurai 20 ans.', 'I will be 20 years old.', 'سأصبح في العشرين من عمري.'],
    ]),
    phrase('je ferai', '🧁', ['I will make', 'سأصنع'], ['Irregular future of faire.', 'مستقبل شاذّ لـ faire.'], [
      ['Je ferai mes devoirs.', 'I will do my homework.', 'سأنجز وظائفي.'],
      ['Je ferai un gâteau.', 'I will make a cake.', 'سأصنع كعكة.'],
    ]),
    phrase('je verrai', '👁️', ['I will see', 'سأرى'], ['Irregular future of voir.', 'مستقبل شاذّ لـ voir.'], [
      ['Je verrai Marie.', 'I will see Marie.', 'سأرى ماري.'],
      ['Je verrai le film.', 'I will see the film.', 'سأرى الفيلم.'],
    ]),
    phrase('je viendrai', '🤺', ['I will come', 'سأتي'], ['Irregular future of venir.', 'مستقبل شاذّ لـ venir.'], [
      ['Je viendrai demain.', 'I will come tomorrow.', 'سأتي غٌم.'],
      ['Je viendrai à la fête.', 'I will come to the party.', 'سأتي إلى الحفلة.'],
    ]),
    phrase('je saurai', '🧠', ['I will know', 'سأعرف'], ['Irregular future of savoir.', 'مستقبل شاذّ لـ savoir.'], [
      ['Je saurai la réponse.', 'I will know the answer.', 'سأعرف الإجابة.'],
      ['Je saurai la vérité.', 'I will know the truth.', 'سأعرف الحقيقة.'],
    ]),
    phrase('je pourrai', '💪', ['I will be able', 'سأستطيع'], ['Irregular future of pouvoir.', 'مستقبل شاذّ لـ pouvoir.'], [
      ['Je pourrai venir.', 'I will be able to come.', 'سأستطيع أن آتي.'],
      ['Je pourrai t’aider.', 'I will be able to help you.', 'سأستطيع مساعدتك.'],
    ]),
  ],
  talk: {
    setting: ['Salma parle à Karim du cinéma.', 'Salma talks to Karim about the cinema.', 'سلمى تتحدّث مع كريم عن السينما.'],
    lines: [
      say('salma', 'Karim, tu iras au cinéma demain ?', 'Karim, will you go to the cinema tomorrow?', 'كريم، هل ستذهب إلى السينما غٌم؟'),
      say('karim', 'Oui ! Je serai là-bas à midi.', 'Yes! I will be there at noon.', 'نعم! سأكون هناك ظهرًا.'),
    ],
  },
  grammar: {
    examples: ['J’[irai] au cinéma. (ir- futur)', 'Je [serai] là. (ser- futur)', 'Je [ferai] un gâteau. (fer- futur)'],
    question: ['I will go to the cinema: « J’___ au cinéma. »', 'سأذهب إلى السينما: « J’___ au cinéma. »'],
    options: [['irai', 'irai'], ['vais', 'vais'], ['allai', 'allai']],
    correct: 0,
    explanation: [
      'Irregular future stems: aller → j’irai, être → je serai, avoir → j’aurai, faire → je ferai, voir → je verrai, venir → je viendrai, savoir → je saurai, pouvoir → je pourrai.',
      'جذور المستقبل الشاذّة: aller → j’irai، être → je serai، avoir → j’aurai، faire → je ferai، voir → je verrai، venir → je viendrai، savoir → je saurai، pouvoir → je pourrai.',
    ],
  },
  transfer: {
    setting: ['Zaid parle à Salma du gâteau.', 'Zaid talks to Salma about the cake.', 'زيد يتحدّث مع سلمى عن الكعكة.'],
    lines: [
      say('zaid', 'Salma, tu feras un gâteau ?', 'Salma, will you make a cake?', 'سلمى، هل ستصنعين كعكة؟'),
      say('salma', 'Oui ! Je verrai Marie aussi, Zaid.', 'Yes! I will see Marie too, Zaid.', 'نعم! سأرى ماري أيضًا يا زيد.'),
    ],
  },
  write: {
    prompt: ['Say "I will go to the cinema".', 'قل «سأذهب إلى السينما».'],
    mustInclude: ['irai'],
    model: 'J’irai au cinéma.',
    frame: 'J’___ au cinéma.',
  },
  drills: [
    ['J’___ au cinéma.', ['irai', 'vais', 'allai'], ['Will go.', 'سأذهب.']],
    ['Je ___ un gâteau.', ['ferai', 'fais', 'faisais'], ['Will make.', 'سأصنع.']],
    ['Je ___ Marie ce soir.', ['verrai', 'vois', 'voyais'], ['Will see.', 'سأرى.']],
  ],
})

const PREDICTIONS = stage({
  id: 'fr1-fs-pred',
  emoji: '🌧️',
  title: ['Les prédictions', 'Predictions', 'التنبّؤات'],
  setting: ['Karim prédit le temps de demain.', 'Karim predicts tomorrow’s weather.', 'كريم يتنبّأ بطقس الغد.'],
  scene: [
    say('karim', 'Demain, il pleuvra fort.', 'Tomorrow, it will rain hard.', 'غٌم، ستمطر بغزة.'),
    say('salma', 'Mais après, il fera beau.', 'But after, it will be nice.', 'لكن بعدها، سيكون الجوّ جميلاً.'),
    say('rana', 'Le soleil brillera le matin.', 'The sun will shine in the morning.', 'الشمس ستلمع في الصّباح.'),
    say('zaid', 'Le vent soufflera un peu.', 'The wind will blow a little.', 'الريح ستهبّ قليلاً.'),
    say('nour', 'Les fleurs pousseront vite.', 'The flowers will grow fast.', 'الزهور ستنمو بسرعة.'),
    say('duck', 'Bravo ! Le printemps arrivera bientôt.', 'Bravo! Spring will arrive soon.', 'أحسنت! سيأتي الرّبيع قريبًا.'),
  ],
  phrases: [
    phrase('il pleuvra', '🌧️', ['It will rain', 'ستمطر'], ['Future of pleuvoir.', 'مستقبل pleuvoir.'], [
      ['Il pleuvra demain.', 'It will rain tomorrow.', 'ستمطر غٌم.'],
      ['Il pleuvra toute la nuit.', 'It will rain all night.', 'ستمطر طوام الليل.'],
    ]),
    phrase('il fera beau', '☀️', ['It will be nice', 'سيكون الجوّ جميلاً'], ['Future of faire (weather).', 'مستقبل faire (طقس).'], [
      ['Il fera beau demain.', 'It will be nice tomorrow.', 'سيكون الجوّ جميلاً غٌم.'],
      ['Il fera beau dimanche.', 'It will be nice on Sunday.', 'سيكون الجوّ جميلاً ييم الأحد.'],
    ]),
    phrase('le soleil brillera', '🌞', ['The sun will shine', 'الشمس ستلمع'], ['Future of briller.', 'مستقبل briller.'], [
      ['Le soleil brillera demain.', 'The sun will shine tomorrow.', 'الشمس ستلمع غٌم.'],
      ['Le soleil brillera le matin.', 'The sun will shine in the morning.', 'الشمس ستلمع في الصّباح.'],
    ]),
    phrase('le vent soufflera', '🍃', ['The wind will blow', 'الريح ستهبّ'], ['Future of souffler.', 'مستقبل souffler.'], [
      ['Le vent soufflera fort.', 'The wind will blow hard.', 'الريح ستهبّ بغزة.'],
      ['Le vent soufflera ce soir.', 'The wind will blow tonight.', 'الريح ستهبّ هذا المساء.'],
    ]),
    phrase('la neige tombera', '❄️', ['The snow will fall', 'الثلج سيتساقط'], ['Future of tomber (snow).', 'مستقبل tomber (ثلج).'], [
      ['La neige tombera demain.', 'The snow will fall tomorrow.', 'الثلج سيتساقط غٌم.'],
      ['La neige tombera en hiver.', 'The snow will fall in winter.', 'الثلج سيتساقط في الشّتاء.'],
    ]),
    phrase('les fleurs pousseront', '🌼', ['The flowers will grow', 'الزهور ستنمو'], ['Future plural of pousser.', 'مستقبل جمع pousser.'], [
      ['Les fleurs pousseront au printemps.', 'The flowers will grow in spring.', 'الزهور ستنمو في الرّبيع.'],
      ['Les fleurs pousseront dans le jardin.', 'The flowers will grow in the garden.', 'الزهور ستنمو في الحديقة.'],
    ]),
    phrase('les oiseaux chanteront', '🐦', ['The birds will sing', 'الطيور ستغرّد'], ['Future plural of chanter.', 'مستقبل جمع chanter.'], [
      ['Les oiseaux chanteront demain.', 'The birds will sing tomorrow.', 'الطيور ستغرّد غٌم.'],
      ['Les oiseaux chanteront le matin.', 'The birds will sing in the morning.', 'الطيور ستغرّد في الصّباح.'],
    ]),
    phrase('le printemps arrivera', '🌸', ['Spring will arrive', 'الرّبيع سيأتي'], ['Future of arriver.', 'مستقبل arriver.'], [
      ['Le printemps arrivera bientôt.', 'Spring will arrive soon.', 'الرّبيع سيأتي قريبًا.'],
      ['Le printemps arrivera en mars.', 'Spring will arrive in March.', 'الرّبيع سيأتي في مارس.'],
    ]),
  ],
  talk: {
    setting: ['Salma parle à Karim du temps.', 'Salma talks to Karim about the weather.', 'سلمى تتحدّث مع كريم عن الطقس.'],
    lines: [
      say('salma', 'Karim, il pleuvra demain ?', 'Karim, will it rain tomorrow?', 'كريم، هل ستمطر غٌم؟'),
      say('karim', 'Oui ! Et le soleil brillera après.', 'Yes! And the sun will shine after.', 'نعم! والشمس ستلمع بعدها.'),
    ],
  },
  grammar: {
    examples: ['Il [pleuvra] demain. (pleuvoir futur)', 'Le soleil [brillera]. (briller futur)', 'Les fleurs [pousseront]. (pousser futur, plural)'],
    question: ['It will rain tomorrow: « Il ___ demain. »', 'ستمطر غٌم: « Il ___ demain. »'],
    options: [['pleuvra', 'pleuvra'], ['pleut', 'pleut'], ['pleuva', 'pleuva']],
    correct: 0,
    explanation: [
      'Future for weather predictions: il pleuvra, il fera beau, il neigera. Plural subjects take -ont: les fleurs pousseront, les oiseaux chanteront. Single things still take -a: le soleil brillera, le vent soufflera.',
      'المستقبل للتنبّؤات بالطقس: il pleuvra، il fera beau، il neigera. السُميّة الجمع تأخذ -ont: les fleurs pousseront، les oiseaux chanteront. أما المفرد فيأخذ -a: le soleil brillera، le vent soufflera.',
    ],
  },
  transfer: {
    setting: ['Zaid parle à Salma du dimanche.', 'Zaid talks to Salma about Sunday.', 'زيد يتحدّث مع سلمى عن ييم الأحد.'],
    lines: [
      say('zaid', 'Salma, il fera beau dimanche ?', 'Salma, will it be nice on Sunday?', 'سلمى، هل سيكون الجوّ جميلاً ييم الأحد؟'),
      say('salma', 'Oui ! Les fleurs pousseront vite, Zaid.', 'Yes! The flowers will grow fast, Zaid.', 'نعم! الزهور ستنمو بسرعة يا زيد.'),
    ],
  },
  write: {
    prompt: ['Say "it will rain tomorrow".', 'قل «ستمطر غٌم».'],
    mustInclude: ['pleuvra'],
    model: 'Il pleuvra demain.',
    frame: 'Il ___ demain.',
  },
  drills: [
    ['Il ___ demain.', ['pleuvra', 'pleut', 'pleuvait'], ['Will rain.', 'ستمطر.']],
    ['Le soleil ___ demain.', ['brillera', 'brille', 'brillait'], ['Will shine.', 'ستلمع.']],
    ['Les fleurs ___ vite.', ['pousseront', 'poussent', 'poussaient'], ['Will grow.', 'ستنمو.']],
  ],
})

export const FR_FUTUR_SIMPLE = [REGULIER, IRREGULIER, PREDICTIONS]
