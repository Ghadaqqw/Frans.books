// ============================================================================
// French course · «Le plus-que-parfait» (B2) — three stages: past before
// another past with avoir → past with être → narrative context. Grammar
// met on the way: imparfait of avoir/être + past participle; the
// anteriority relationship in past narrative; and indirect speech with
// "que" + plus-que-parfait.
// ============================================================================

import { phrase, say, stage } from './kit'

const AVOIR = stage({
  id: 'fr2-pqp-avoir',
  emoji: '🕰️',
  title: ['Le passé antérieur à un autre passé', 'The past before another past', 'الماضي السابق على ماضٍ آخر'],
  setting: ['Nour décrit ce qu’elle avait fait avant le concert.', 'Nour describes what she had done before the concert.', 'تصف نور ما كانت قد فعلته قبل الحفلة.'],
  scene: [
    say('bear', 'Avant le concert, j’avais mangé une pomme.', 'Before the concert, I had eaten an apple.', 'قبل الحفلة، كنت قد أكلت تفاحة.'),
    say('nour', 'J’avais parlé à mon ami aussi.', 'I had spoken to my friend too.', 'كنت قد تكلّمت مع صديقي أيضًا.'),
    say('bear', 'J’avais fini mon travail tôt.', 'I had finished my work early.', 'كنت قد أنهيت عملي مبكّرًا.'),
    say('nour', 'J’avais lu un roman le matin.', 'I had read a novel in the morning.', 'كنت قد قرأت رواية في الصباح.'),
    say('bear', 'J’avais écrit un poème avant.', 'I had written a poem before.', 'كنت قد كتبت قصيدة من قبل.'),
    say('duck', 'Bravo ! J’avais vu la mer hier.', 'Bravo! I had seen the sea yesterday.', 'أحسنت! كنت قد رأيت البحر أمس.'),
  ],
  phrases: [
    phrase('j’avais mangé', '🍎', ['I had eaten', 'كنت قد أكلت'], ['Imparfait of avoir + mangé.', 'الـ imparfait من avoir + mangé.'], [
      ['J’avais mangé une pomme avant le dîner.', 'I had eaten an apple before dinner.', 'كنت قد أكلت تفاحة قبل العشاء.'],
      ['J’avais mangé du pain quand il est arrivé.', 'I had eaten some bread when he arrived.', 'كنت قد أكلت خبزًا عندما وصل.'],
    ]),
    phrase('j’avais parlé', '💬', ['I had spoken', 'كنت قد تكلّمت'], ['Imparfait of avoir + parlé.', 'الـ imparfait من avoir + parlé.'], [
      ['J’avais parlé à mon ami avant le concert.', 'I had spoken to my friend before the concert.', 'كنت قد تكلّمت مع صديقي قبل الحفلة.'],
      ['J’avais parlé français quand elle est venue.', 'I had spoken French when she came.', 'كنت قد تكلّمت بالفرنسيّة عندما جاءت.'],
    ]),
    phrase('j’avais fini', '✅', ['I had finished', 'كنت قد أنهيت'], ['Imparfait of avoir + fini.', 'الـ imparfait من avoir + fini.'], [
      ['J’avais fini mon travail avant midi.', 'I had finished my work before noon.', 'كنت قد أنهيت عملي قبل الظهر.'],
      ['J’avais fini le livre quand tu es arrivé.', 'I had finished the book when you arrived.', 'كنت قد أنهيت الكتاب عندما وصلت.'],
    ]),
    phrase('j’avais lu', '📖', ['I had read', 'كنت قد قرأت'], ['Imparfait of avoir + lu.', 'الـ imparfait من avoir + lu.'], [
      ['J’avais lu un roman avant de dormir.', 'I had read a novel before sleeping.', 'كنت قد قرأت رواية قبل النوم.'],
      ['J’avais lu la lettre quand il a appelé.', 'I had read the letter when he called.', 'كنت قد قرأت الرسالة عندما اتصل.'],
    ]),
    phrase('j’avais écrit', '✍️', ['I had written', 'كنت قد كتبت'], ['Imparfait of avoir + écrit.', 'الـ imparfait من avoir + écrit.'], [
      ['J’avais écrit un poème avant la fête.', 'I had written a poem before the party.', 'كنت قد كتبت قصيدة قبل الحفلة.'],
      ['J’avais écrit la réponse quand il a demandé.', 'I had written the answer when he asked.', 'كنت قد كتبت الجواب عندما سأل.'],
    ]),
    phrase('j’avais vu', '👁️', ['I had seen', 'كنت قد رأيت'], ['Imparfait of avoir + vu.', 'الـ imparfait من avoir + vu.'], [
      ['J’avais vu ce film avant.', 'I had seen this film before.', 'كنت قد رأيت هذا الفيلم من قبل.'],
      ['J’avais vu la mer déjà.', 'I had already seen the sea.', 'كنت قد رأيت البحر بالفعل.'],
    ]),
    phrase('j’avais pris', '✋', ['I had taken', 'كنت قد أخذت'], ['Imparfait of avoir + pris.', 'الـ imparfait من avoir + pris.'], [
      ['J’avais pris le train avant.', 'I had taken the train before.', 'كنت قد أخذت القطار من قبل.'],
      ['J’avais pris un café déjà.', 'I had already had a coffee.', 'كنت قد أخذت قهوة بالفعل.'],
    ]),
    phrase('j’avais bu', '☕', ['I had drunk', 'كنت قد شربت'], ['Imparfait of avoir + bu.', 'الـ imparfait من avoir + bu.'], [
      ['J’avais bu du lait avant.', 'I had drunk milk before.', 'كنت قد شربت حليبًا من قبل.'],
      ['J’avais bu un café déjà.', 'I had already drunk a coffee.', 'كنت قد شربت قهوة بالفعل.'],
    ]),
  ],
  talk: {
    setting: ['Salma demande à Nur ce qu’elle avait fait.', 'Salma asks Nour what she had done.', 'تسأل سلمى نور عمّا كانت قد فعلته.'],
    lines: [
      say('salma', 'Nour, tu avais mangé une pomme avant ?', 'Nour, had you eaten an apple before?', 'نور، هل كنت قد أكلت تفاحة من قبل؟'),
      say('nour', 'Oui, Salma ! Et j’avais lu un roman le matin.', 'Yes, Salma! And I had read a novel in the morning.', 'نعم يا سلمى! وكنت قد قرأت رواية في الصباح.'),
    ],
  },
  grammar: {
    examples: ['J’[avais] mangé une pomme. (imparfait avoir + participe)', 'J’[avais] fini mon travail. (imparfait avoir + participe)', 'J’[avais] lu un roman. (imparfait avoir + participe)'],
    question: ['I had eaten an apple: « J’___ une pomme. »', 'كنت قد أكلت تفاحة: « J’___ une pomme. »'],
    options: [['avais mangé', 'avais mangé'], ['ai mangé', 'ai mangé'], ['mangeais', 'mangeais']],
    correct: 0,
    explanation: [
      'Le plus-que-parfait se forme avec l’imparfait de l’auxiliaire avoir (j’avais, tu avais, il avait, nous avions, vous aviez, ils avaient) + le participe passé. Il exprime une action achevée avant une autre action passée. Exemples: j’avais mangé (I had eaten), j’avais fini (I had finished), j’avais lu (I had read).',
      'يتكوّن الـ plus-que-parfait باستخدام الـ imparfait من الفعل المساعد avoir (j’avais، tu avais، il avait، nous avions، vous aviez، ils avaient) + اسم المفعول. ويعبّر عن فعلٍ اكتمل قبل فعلٍ آخر في الماضي. أمثلة: j’avais mangé (كنت قد أكلت)، j’avais fini (كنت قد أنهيت)، j’avais lu (كنت قد قرأت).',
    ],
  },
  transfer: {
    setting: ['Karim décrit ce qu’il avait fait avant le voyage.', 'Karim describes what he had done before the trip.', 'يصف كريم ما كان قد فعله قبل الرحلة.'],
    lines: [
      say('karim', 'Regarde ! J’avais pris le train avant !', 'Look! I had taken the train before!', 'انظر! كنت قد أخذت القطار من قبل!'),
      say('rana', 'Oui ! J’avais bu un café déjà, Karim.', 'Yes! I had already drunk a coffee, Karim.', 'نعم! كنت قد شربت قهوة بالفعل يا كريم.'),
    ],
  },
  write: {
    prompt: ['Say "I had eaten an apple".', 'قل «كنت قد أكلت تفاحة».'],
    mustInclude: ['avais mangé'],
    model: 'J’avais mangé une pomme.',
    frame: 'J’___ une pomme.',
  },
  drills: [
    ['J’___ une pomme.', ['avais mangé', 'ai mangé', 'mangeais'], ['Had eaten.', 'كان قد أكل.']],
    ['J’___ mon travail.', ['avais fini', 'ai fini', 'finissais'], ['Had finished.', 'كان قد أنهى.']],
    ['J’___ un roman.', ['avais lu', 'ai lu', 'lisais'], ['Had read.', 'كان قد قرأ.']],
  ],
})

const ETRE = stage({
  id: 'fr2-pqp-etre',
  emoji: '🚶',
  title: ['Avec l’être comme auxiliaire', 'With être as auxiliary', 'مع être فعلًا مساعدًا'],
  setting: ['Nour décrit ses déplacements passés avec l’auxiliaire être.', 'Nour describes her past movements with the auxiliary être.', 'تصف نور تنقّلاتها الماضية مع الفعل المساعد être.'],
  scene: [
    say('bear', 'Avant, j’étais allé à Paris.', 'Before, I had gone to Paris.', 'من قبل، كنت قد ذهبت إلى باريس.'),
    say('nour', 'J’étais venu ici aussi.', 'I had come here too.', 'كنت قد جئت إلى هنا أيضًا.'),
    say('bear', 'J’étais parti avant midi.', 'I had left before noon.', 'كنت قد غادرت قبل الظهر.'),
    say('nour', 'J’étais arrivé tôt.', 'I had arrived early.', 'كنت قد وصلت مبكّرًا.'),
    say('bear', 'J’étais monté déjà.', 'I had already gone up.', 'كنت قد صعدت بالفعل.'),
    say('duck', 'Bravo ! J’étais né à Lyon.', 'Bravo! I had been born in Lyon.', 'أحسنت! كنت قد وُلدت في ليون.'),
  ],
  phrases: [
    phrase('j’étais allé', '🗼', ['I had gone', 'كنت قد ذهبت'], ['Imparfait of être + allé.', 'الـ imparfait من être + allé.'], [
      ['J’étais allé à Paris avant.', 'I had gone to Paris before.', 'كنت قد ذهبت إلى باريس من قبل.'],
      ['J’étais allé au marché déjà.', 'I had already gone to the market.', 'كنت قد ذهبت إلى السوق بالفعل.'],
    ]),
    phrase('j’étais venu', '🚪', ['I had come', 'كنت قد جئت'], ['Imparfait of être + venu.', 'الـ imparfait من être + venu.'], [
      ['J’étais venu ici avant.', 'I had come here before.', 'كنت قد جئت إلى هنا من قبل.'],
      ['J’étais venu tôt déjà.', 'I had already come early.', 'كنت قد جئت مبكّرًا بالفعل.'],
    ]),
    phrase('j’étais parti', '🚙', ['I had left', 'كنت قد غادرت'], ['Imparfait of être + parti.', 'الـ imparfait من être + parti.'], [
      ['J’étais parti avant midi.', 'I had left before noon.', 'كنت قد غادرت قبل الظهر.'],
      ['J’étais parti quand tu es venu.', 'I had left when you came.', 'كنت قد غادرت عندما جئت.'],
    ]),
    phrase('j’étais arrivé', '🕒', ['I had arrived', 'كنت قد وصلت'], ['Imparfait of être + arrivé.', 'الـ imparfait من être + arrivé.'], [
      ['J’étais arrivé avant toi.', 'I had arrived before you.', 'كنت قد وصلت قبلك.'],
      ['J’étais arrivé tôt déjà.', 'I had already arrived early.', 'كنت قد وصلت مبكّرًا بالفعل.'],
    ]),
    phrase('j’étais monté', '🪜', ['I had gone up', 'كنت قد صعدت'], ['Imparfait of être + monté.', 'الـ imparfait من être + monté.'], [
      ['J’étais monté avant toi.', 'I had gone up before you.', 'كنت قد صعدت قبلك.'],
      ['J’étais monté déjà.', 'I had already gone up.', 'كنت قد صعدت بالفعل.'],
    ]),
    phrase('j’étais descendu', '↩️', ['I had gone down', 'كنت قد نزلت'], ['Imparfait of être + descendu.', 'الـ imparfait من être + descendu.'], [
      ['J’étais descendu avant.', 'I had gone down before.', 'كنت قد نزلت من قبل.'],
      ['J’étais descendu déjà.', 'I had already gone down.', 'كنت قد نزلت بالفعل.'],
    ]),
    phrase('j’étais né', '👶', ['I had been born', 'كنت قد وُلدت'], ['Imparfait of être + né.', 'الـ imparfait من être + né.'], [
      ['J’étais né à Lyon avant.', 'I had been born in Lyon before.', 'كنت قد وُلدت في ليون من قبل.'],
      ['J’étais né en France déjà.', 'I had already been born in France.', 'كنت قد وُلدت في فرنسا بالفعل.'],
    ]),
    phrase('j’étais tombé', '🤕', ['I had fallen', 'كنت قد سقطت'], ['Imparfait of être + tombé.', 'الـ imparfait من être + tombé.'], [
      ['J’étais tombé avant hier.', 'I had fallen the day before yesterday.', 'كنت قد سقطت أول أمس.'],
      ['J’étais tombé malade déjà.', 'I had already fallen ill.', 'كنت قد مرضت بالفعل.'],
    ]),
  ],
  talk: {
    setting: ['Salma demande à Nur où elle était allée.', 'Salma asks Nour where she had gone.', 'تسأل سلمى نور أين كانت قد ذهبت.'],
    lines: [
      say('salma', 'Nour, tu étais allé à Paris avant ?', 'Nour, had you gone to Paris before?', 'نور، هل كنت قد ذهبت إلى باريس من قبل؟'),
      say('nour', 'Oui, Salma ! Et j’étais venu ici aussi.', 'Yes, Salma! And I had come here too.', 'نعم يا سلمى! وكنت قد جئت إلى هنا أيضًا.'),
    ],
  },
  grammar: {
    examples: ['J’[étais] allé à Paris. (imparfait être + participe)', 'J’[étais] parti avant midi. (imparfait être + participe)', 'J’[étais] arrivé tôt. (imparfait être + participe)'],
    question: ['I had gone to Paris: « J’___ à Paris. »', 'كنت قد ذهبت إلى باريس: « J’___ à Paris. »'],
    options: [['étais allé', 'étais allé'], ['suis allé', 'suis allé'], ['allais', 'allais']],
    correct: 0,
    explanation: [
      'Certains verbes (mouvement et état) forment le plus-que-parfait avec l’auxiliaire être: j’étais allé, j’étais venu, j’étais parti, j’étais arrivé, j’étais monté, j’étais descendu, j’étais né, j’étais tombé. Le participe passé s’accorde en genre et en nombre avec le sujet (j’étais allé / j’étais allée).',
      'بعض الأفعال (الحركة والحالة) تكوّن الـ plus-que-parfait مع الفعل المساعد être: j’étais allé، j’étais venu، j’étais parti، j’étais arrivé، j’étais monté، j’étais descendu، j’étais né، j’étais tombé. ويطابق اسم المفعول الفاعل في الجنس والعدد (j’étais allé / j’étais allée).',
    ],
  },
  transfer: {
    setting: ['Karim décrit ses déplacements passés.', 'Karim describes his past movements.', 'يصف كريم تنقّلاته الماضية.'],
    lines: [
      say('karim', 'Regarde ! J’étais arrivé tôt !', 'Look! I had arrived early!', 'انظر! كنت قد وصلت مبكّرًا!'),
      say('rana', 'Oui ! J’étais monté déjà, Karim.', 'Yes! I had already gone up, Karim.', 'نعم! كنت قد صعدت بالفعل يا كريم.'),
    ],
  },
  write: {
    prompt: ['Say "I had gone to Paris".', 'قل «كنت قد ذهبت إلى باريس».'],
    mustInclude: ['étais allé'],
    model: 'J’étais allé à Paris.',
    frame: 'J’___ à Paris.',
  },
  drills: [
    ['J’___ à Paris.', ['étais allé', 'suis allé', 'allais'], ['Had gone.', 'كان قد ذهب.']],
    ['J’___ avant midi.', ['étais parti', 'suis parti', 'partais'], ['Had left.', 'كان قد غادر.']],
    ['J’___ tôt.', ['étais arrivé', 'suis arrivé', 'arrivais'], ['Had arrived.', 'كان قد وصل.']],
  ],
})

const NARRATION = stage({
  id: 'fr2-pqp-narration',
  emoji: '📜',
  title: ['Le contexte narratif', 'Narrative context', 'السياق السردي'],
  setting: ['Nour raconte des histoires avec le plus-que-parfait.', 'Nour tells stories with the pluperfect tense.', 'تروي نور قصصًا باستخدام الـ plus-que-parfait.'],
  scene: [
    say('bear', 'Quand je suis arrivé, il avait déjà fini.', 'When I arrived, he had already finished.', 'عندما وصلت، كان قد أنهى بالفعل.'),
    say('nour', 'Avant que je vienne, il était parti.', 'Before I came, he had left.', 'قبل أن آتي، كان قد غادر.'),
    say('bear', 'Je croyais qu’il avait mangé.', 'I thought he had eaten.', 'ظننت أنّه كان قد أكل.'),
    say('nour', 'Je pensais qu’elle avait lu.', 'I thought she had read.', 'ظننت أنّها كانت قد قرأت.'),
    say('bear', 'Il m’a dit qu’il avait vu.', 'He told me he had seen.', 'أخبرني أنّه كان قد رأى.'),
    say('duck', 'Bravo ! J’imaginais qu’elle avait réussi.', 'Bravo! I imagined she had succeeded.', 'أحسنت! تخيّلت أنّها كانت قد نجحت.'),
  ],
  phrases: [
    phrase('il avait déjà fini', '🏁', ['he had already finished', 'كان قد أنهى بالفعل'], ['Plus-que-parfait with déjà.', 'plus-que-parfait مع déjà.'], [
      ['Quand je suis arrivé, il avait déjà fini.', 'When I arrived, he had already finished.', 'عندما وصلت، كان قد أنهى بالفعل.'],
      ['Avant mon appel, il avait déjà fini.', 'Before my call, he had already finished.', 'قبل اتصالي، كان قد أنهى بالفعل.'],
    ]),
    phrase('il était parti', '🚪', ['he had left', 'كان قد غادر'], ['Plus-que-parfait with être.', 'plus-que-parfait مع être.'], [
      ['Avant que je vienne, il était parti.', 'Before I came, he had left.', 'قبل أن آتي، كان قد غادر.'],
      ['Quand je suis venu, il était parti.', 'When I came, he had left.', 'عندما جئت، كان قد غادر.'],
    ]),
    phrase('qu’il avait mangé', '🍎', ['that he had eaten', 'أنّه كان قد أكل'], ['Indirect speech + plus-que-parfait.', 'خطاب غير مباشر + plus-que-parfait.'], [
      ['Je croyais qu’il avait mangé.', 'I thought he had eaten.', 'ظننت أنّه كان قد أكل.'],
      ['Je pensais qu’il avait mangé.', 'I thought he had eaten.', 'اعتقدت أنّه كان قد أكل.'],
    ]),
    phrase('qu’elle avait lu', '📚', ['that she had read', 'أنّها كانت قد قرأت'], ['Indirect speech + plus-que-parfait.', 'خطاب غير مباشر + plus-que-parfait.'], [
      ['Je pensais qu’elle avait lu.', 'I thought she had read.', 'ظننت أنّها كانت قد قرأت.'],
      ['Je croyais qu’elle avait lu.', 'I thought she had read.', 'اعتقدت أنّها كانت قد قرأت.'],
    ]),
    phrase('qu’il avait vu', '👁️', ['that he had seen', 'أنّه كان قد رأى'], ['Indirect speech + plus-que-parfait.', 'خطاب غير مباشر + plus-que-parfait.'], [
      ['Il m’a dit qu’il avait vu.', 'He told me he had seen.', 'أخبرني أنّه كان قد رأى.'],
      ['J’ai su qu’il avait vu.', 'I learned he had seen.', 'علمت أنّه كان قد رأى.'],
    ]),
    phrase('qu’elle avait écrit', '✍️', ['that she had written', 'أنّها كانت قد كتبت'], ['Indirect speech + plus-que-parfait.', 'خطاب غير مباشر + plus-que-parfait.'], [
      ['J’ai compris qu’elle avait écrit.', 'I understood she had written.', 'فهمت أنّها كانت قد كتبت.'],
      ['J’ai su qu’elle avait écrit.', 'I learned she had written.', 'علمت أنّها كانت قد كتبت.'],
    ]),
    phrase('qu’ils avaient pris', '🚆', ['that they had taken', 'أنّهم كانوا قد أخذوا'], ['Plural plus-que-parfait.', 'plus-que-parfait جمع.'], [
      ['Je savais qu’ils avaient pris.', 'I knew they had taken.', 'علمت أنّهم كانوا قد أخذوا.'],
      ['Je croyais qu’ils avaient pris.', 'I thought they had taken.', 'ظننت أنّهم كانوا قد أخذوا.'],
    ]),
    phrase('qu’elle avait réussi', '🏆', ['that she had succeeded', 'أنّها كانت قد نجحت'], ['Indirect speech + plus-que-parfait.', 'خطاب غير مباشر + plus-que-parfait.'], [
      ['J’imaginais qu’elle avait réussi.', 'I imagined she had succeeded.', 'تخيّلت أنّها كانت قد نجحت.'],
      ['Je pensais qu’elle avait réussi.', 'I thought she had succeeded.', 'اعتقدت أنّها كانت قد نجحت.'],
    ]),
  ],
  talk: {
    setting: ['Salma demande à Nur ses histoires passées.', 'Salma asks Nour about her past stories.', 'تسأل سلمى نور عن قصصها الماضية.'],
    lines: [
      say('salma', 'Nour, il avait déjà fini avant ?', 'Nour, had he already finished before?', 'نور، هل كان قد أنهى بالفعل من قبل؟'),
      say('nour', 'Oui, Salma ! Et il était parti avant.', 'Yes, Salma! And he had left before.', 'نعم يا سلمى! وكان قد غادر من قبل.'),
    ],
  },
  grammar: {
    examples: ['Quand je suis arrivé, il [avait] déjà fini. (antériorité)', 'Je croyais qu’il [avait] mangé. (discours indirect)', 'Il m’a dit qu’il [avait] vu. (discours indirect)'],
    question: ['He had already finished: « Il ___ déjà fini. »', 'كان قد أنهى بالفعل: « Il ___ déjà fini. »'],
    options: [['avait', 'avait'], ['a', 'a'], ['est', 'est']],
    correct: 0,
    explanation: [
      'Le plus-que-parfait exprime l’antériorité dans un récit au passé: une action achevée avant une autre action passée (quand je suis arrivé, il avait déjà fini). Il est aussi utilisé dans le discours indirect après "que" (je croyais qu’il avait mangé, il m’a dit qu’il avait vu, j’imaginais qu’elle avait réussi).',
      'يعبّر الـ plus-que-parfait عن السبق في سردٍ ماضٍ: فعلٌ اكتمل قبل فعلٍ ماضٍ آخر (quand je suis arrivé، il avait déjà fini). ويُستخدم أيضًا في الخطاب غير المباشر بعد «que» (je croyais qu’il avait mangé، il m’a dit qu’il avait vu، j’imaginais qu’elle avait réussi).',
    ],
  },
  transfer: {
    setting: ['Karim raconte une histoire passée.', 'Karim tells a past story.', 'يروي كريم قصّة ماضية.'],
    lines: [
      say('karim', 'Regarde ! Il avait déjà fini avant !', 'Look! He had already finished before!', 'انظر! كان قد أنهى بالفعل من قبل!'),
      say('rana', 'Oui ! Je savais qu’ils avaient pris, Karim.', 'Yes! I knew they had taken, Karim.', 'نعم! علمت أنّهم كانوا قد أخذوا يا كريم.'),
    ],
  },
  write: {
    prompt: ['Say "he had already finished".', 'قل «كان قد أنهى بالفعل».'],
    mustInclude: ['avait déjà fini'],
    model: 'Il avait déjà fini.',
    frame: 'Il ___ déjà fini.',
  },
  drills: [
    ['Il ___ déjà fini.', ['avait', 'a', 'est'], ['Had.', 'كان قد.']],
    ['Je croyais qu’il ___ mangé.', ['avait', 'a', 'est'], ['Had.', 'كان قد.']],
    ['Il m’a dit qu’il ___ vu.', ['avait', 'a', 'est'], ['Had.', 'كان قد.']],
  ],
})

export const FR_PLUS_QUE_PARFAIT = [AVOIR, ETRE, NARRATION]
