// ============================================================================
// French course · «Le futur antérieur» (home icon q2-fa) — three stages:
// future-perfect with avoir → future-perfect with être → temporal clauses
// and deadlines. Grammar met on the way: futur simple of avoir/être +
// past participle, agreement of the past participle with être, and the
// use of the futur antérieur for an action completed before another future
// action or before a specific future moment.
// ============================================================================

import { phrase, say, stage } from './kit'

const AVOIR = stage({
  id: 'fr2-fa-avoir',
  emoji: '✅',
  title: ['L’action accomplie dans le futur', 'Completed future action', 'الفعل المنجز في المستقبل'],
  setting: ['Karim et Salma découvrent le futur antérieur avec avoir.', 'Karim and Salma discover the future perfect with avoir.', 'كريم وسلمى يكتشفان صيغة المستقبل السابق مع الفعل avoir.'],
  scene: [
    say('karim', 'Demain à midi, j’aurai mangé.', 'Tomorrow at noon, I will have eaten.', 'غدًا ظهرًا، سأكون قد أكلت.'),
    say('salma', 'Et j’aurai parlé à Marie.', 'And I will have spoken to Marie.', 'وسأكون قد تكلّمت مع ماري.'),
    say('karim', 'J’aurai fini mon devoir.', 'I will have finished my homework.', 'سأكون قد أنهيت واجبي.'),
    say('salma', 'J’aurai lu ce livre.', 'I will have read this book.', 'سأكون قد قرأت هذا الكتاب.'),
    say('zaid', 'J’aurai écrit la lettre.', 'I will have written the letter.', 'سأكون قد كتبت الرسالة.'),
    say('duck', 'Bravo ! C’est le futur antérieur.', 'Bravo! This is the future perfect.', 'أحسنت! هذه صيغة المستقبل السابق.'),
  ],
  phrases: [
    phrase('j’aurai mangé', '🍎', ['I will have eaten', 'سأكون قد أكلت'], ['Futur antérieur of manger.', 'المستقبل السابق لـ manger.'], [
      ['J’aurai mangé une pomme.', 'I will have eaten an apple.', 'سأكون قد أكلت تفّاحة.'],
      ['J’aurai mangé à midi.', 'I will have eaten at noon.', 'سأكون قد أكلت ظهرًا.'],
    ]),
    phrase('j’aurai parlé', '💬', ['I will have spoken', 'سأكون قد تكلّمت'], ['Futur antérieur of parler.', 'المستقبل السابق لـ parler.'], [
      ['J’aurai parlé à Marie.', 'I will have spoken to Marie.', 'سأكون قد تكلّمت مع ماري.'],
      ['J’aurai parlé français.', 'I will have spoken French.', 'سأكون قد تكلّمت بالفرنسيّة.'],
    ]),
    phrase('j’aurai fini', '✅', ['I will have finished', 'سأكون قد أنهيت'], ['Futur antérieur of finir.', 'المستقبل السابق لـ finir.'], [
      ['J’aurai fini mon devoir.', 'I will have finished my homework.', 'سأكون قد أنهيت واجبي.'],
      ['J’aurai fini ce livre.', 'I will have finished this book.', 'سأكون قد أنهيت هذا الكتاب.'],
    ]),
    phrase('j’aurai lu', '📖', ['I will have read', 'سأكون قد قرأت'], ['Futur antérieur of lire.', 'المستقبل السابق لـ lire.'], [
      ['J’aurai lu le roman.', 'I will have read the novel.', 'سأكون قد قرأت الرواية.'],
      ['J’aurai lu deux pages.', 'I will have read two pages.', 'سأكون قد قرأت صفحتين.'],
    ]),
    phrase('j’aurai écrit', '✍️', ['I will have written', 'سأكون قد كتبت'], ['Futur antérieur of écrire.', 'المستقبل السابق لـ écrire.'], [
      ['J’aurai écrit la lettre.', 'I will have written the letter.', 'سأكون قد كتبت الرسالة.'],
      ['J’aurai écrit un poème.', 'I will have written a poem.', 'سأكون قد كتبت قصيدة.'],
    ]),
    phrase('j’aurai vu', '👀', ['I will have seen', 'سأكون قد رأيت'], ['Futur antérieur of voir.', 'المستقبل السابق لـ voir.'], [
      ['J’aurai vu le film.', 'I will have seen the film.', 'سأكون قد شاهدت الفيلم.'],
      ['J’aurai vu la tour.', 'I will have seen the tower.', 'سأكون قد رأيت البرج.'],
    ]),
    phrase('j’aurai pris', '🚆', ['I will have taken', 'سأكون قد أخذت'], ['Futur antérieur of prendre.', 'المستقبل السابق لـ prendre.'], [
      ['J’aurai pris le train.', 'I will have taken the train.', 'سأكون قد ركبت القطار.'],
      ['J’aurai pris le bus.', 'I will have taken the bus.', 'سأكون قد ركبت الحافلة.'],
    ]),
    phrase('j’aurai compris', '🧠', ['I will have understood', 'سأكون قد فهمت'], ['Futur antérieur of comprendre.', 'المستقبل السابق لـ comprendre.'], [
      ['J’aurai compris la leçon.', 'I will have understood the lesson.', 'سأكون قد فهمت الدرس.'],
      ['J’aurai compris la règle.', 'I will have understood the rule.', 'سأكون قد فهمت القاعدة.'],
    ]),
  ],
  talk: {
    setting: ['Salma parle à Karim du futur antérieur.', 'Salma talks to Karim about the future perfect.', 'سلمى تتحدّث مع كريم عن صيغة المستقبل السابق.'],
    lines: [
      say('salma', 'Karim, tu auras mangé à midi ?', 'Karim, will you have eaten at noon?', 'كريم، هل ستكون قد أكلت ظهرًا؟'),
      say('karim', 'Oui ! Et j’aurai fini mon devoir.', 'Yes! And I will have finished my homework.', 'نعم! وسأكون قد أنهيت واجبي.'),
    ],
  },
  grammar: {
    examples: ['J’[aurai] mangé une pomme. (avoir au futur simple + mangé)', 'J’[aurai] fini mon devoir. (avoir au futur + fini)', 'J’[aurai] compris la leçon. (avoir au futur + compris)'],
    question: ['I will have eaten an apple: « J’___ mangé une pomme. »', 'سأكون قد أكلت تفّاحة: « J’___ mangé une pomme. »'],
    options: [['aurai', 'aurai'], ['mange', 'mange'], ['auras', 'auras']],
    correct: 0,
    explanation: [
      'The futur antérieur = futur simple of avoir (j’aurai, tu auras, il aura, nous aurons, vous aurez, ils auront) + past participle. It expresses an action that will be completed before another future action or before a specific future moment. With avoir, the past participle does not agree with the subject.',
      'المستقبل السابق = مستقبل avoir البسيط (j’aurai، tu auras، il aura، nous aurons، vous aurez، ils auront) + اسم المفعول. ويعبّر عن فعلٍ سيكون قد اكتمل قبل فعلٍ مستقبليّ آخر أو قبل لحظة مستقبليّة محدّدة. ومع avoir لا يطابق اسم المفعول الفاعل.',
    ],
  },
  transfer: {
    setting: ['Zaid parle à Salma du futur antérieur.', 'Zaid talks to Salma about the future perfect.', 'زيد يتحدّث مع سلمى عن صيغة المستقبل السابق.'],
    lines: [
      say('zaid', 'Salma, tu auras lu ce livre ?', 'Salma, will you have read this book?', 'سلمى، هل ستكونين قد قرأت هذا الكتاب؟'),
      say('salma', 'Oui ! J’aurai compris la leçon, Zaid.', 'Yes! I will have understood the lesson, Zaid.', 'نعم! سأكون قد فهمت الدرس يا زيد.'),
    ],
  },
  write: {
    prompt: ['Say "I will have eaten an apple".', 'قل «سأكون قد أكلت تفّاحة».'],
    mustInclude: ['aurai'],
    model: 'J’aurai mangé une pomme.',
    frame: 'J’___ mangé une pomme.',
  },
  drills: [
    ['J’___ mangé une pomme.', ['aurai', 'mange', 'auras'], ['Will have eaten.', 'سأكون قد أكلت.']],
    ['J’___ fini mon devoir.', ['aurai', 'finit', 'auras'], ['Will have finished.', 'سأكون قد أنهيت.']],
    ['J’___ compris la leçon.', ['aurai', 'comprends', 'aura'], ['Will have understood.', 'سأكون قد فهمت.']],
  ],
})

const ETRE = stage({
  id: 'fr2-fa-etre',
  emoji: '🚶',
  title: ['Avec l’être comme auxiliaire', 'With être as auxiliary', 'مع الفعل المساعد être'],
  setting: ['Les amis apprennent le futur antérieur avec l’auxiliaire être.', 'The friends learn the future perfect with the auxiliary être.', 'الأصدقاء يتعلّمون صيغة المستقبل السابق مع الفعل المساعد être.'],
  scene: [
    say('karim', 'Demain, je serai allé à Paris.', 'Tomorrow, I will have gone to Paris.', 'غدًا، سأكون قد ذهبت إلى باريس.'),
    say('salma', 'Je serai venue ici.', 'I will have come here.', 'سأكون قد أتيت إلى هنا.'),
    say('karim', 'Je serai parti avant.', 'I will have left before.', 'سأكون قد غادرت قبل ذلك.'),
    say('salma', 'Je serai arrivée à l’heure.', 'I will have arrived on time.', 'سأكون قد وصلت في الوقت.'),
    say('zaid', 'Je serai monté à l’étage.', 'I will have gone up to the floor.', 'سأكون قد صعدت إلى الطابق.'),
    say('duck', 'Bravo ! Avec l’être comme auxiliaire.', 'Bravo! With être as the auxiliary.', 'أحسنت! مع الفعل المساعد être.'),
  ],
  phrases: [
    phrase('je serai allé', '🗼', ['I will have gone', 'سأكون قد ذهبت'], ['Futur antérieur of aller.', 'المستقبل السابق لـ aller.'], [
      ['Je serai allé à Paris.', 'I will have gone to Paris.', 'سأكون قد ذهبت إلى باريس.'],
      ['Je serai allé au marché.', 'I will have gone to the market.', 'سأكون قد ذهبت إلى السوق.'],
    ]),
    phrase('je serai venu', '🚪', ['I will have come', 'سأكون قد أتيت'], ['Futur antérieur of venir.', 'المستقبل السابق لـ venir.'], [
      ['Je serai venu ici.', 'I will have come here.', 'سأكون قد أتيت إلى هنا.'],
      ['Je serai venu tôt.', 'I will have come early.', 'سأكون قد أتيت مبكّرًا.'],
    ]),
    phrase('je serai parti', '🚪', ['I will have left', 'سأكون قد غادرت'], ['Futur antérieur of partir.', 'المستقبل السابق لـ partir.'], [
      ['Je serai parti tôt.', 'I will have left early.', 'سأكون قد غادرت مبكّرًا.'],
      ['Je serai parti avant.', 'I will have left before.', 'سأكون قد غادرت قبل ذلك.'],
    ]),
    phrase('je serai arrivé', '🏁', ['I will have arrived', 'سأكون قد وصلت'], ['Futur antérieur of arriver.', 'المستقبل السابق لـ arriver.'], [
      ['Je serai arrivé à l’heure.', 'I will have arrived on time.', 'سأكون قد وصلت في الوقت.'],
      ['Je serai arrivé demain.', 'I will have arrived tomorrow.', 'سأكون قد وصلت غدًا.'],
    ]),
    phrase('je serai monté', '🪜', ['I will have gone up', 'سأكون قد صعدت'], ['Futur antérieur of monter.', 'المستقبل السابق لـ monter.'], [
      ['Je serai monté en haut.', 'I will have gone up to the top.', 'سأكون قد صعدت إلى الأعلى.'],
      ['Je serai monté à l’étage.', 'I will have gone up to the floor.', 'سأكون قد صعدت إلى الطابق.'],
    ]),
    phrase('je serai descendu', '⬇️', ['I will have gone down', 'سأكون قد نزلت'], ['Futur antérieur of descendre.', 'المستقبل السابق لـ descendre.'], [
      ['Je serai descendu vite.', 'I will have gone down fast.', 'سأكون قد نزلت بسرعة.'],
      ['Je serai descendu en ville.', 'I will have gone down to town.', 'سأكون قد نزلت إلى المدينة.'],
    ]),
    phrase('je serai né', '🎂', ['I will have been born', 'سأكون قد وُلدت'], ['Futur antérieur of naître.', 'المستقبل السابق لـ naître.'], [
      ['Je serai né avant l’an 2000.', 'I will have been born before 2000.', 'سأكون قد وُلدت قبل عام 2000.'],
      ['Je serai né en été.', 'I will have been born in summer.', 'سأكون قد وُلدت في الصيف.'],
    ]),
    phrase('je serai tombé', '🤕', ['I will have fallen', 'سأكون قد سقطت'], ['Futur antérieur of tomber.', 'المستقبل السابق لـ tomber.'], [
      ['Je serai tombé par terre.', 'I will have fallen on the ground.', 'سأكون قد سقطت على الأرض.'],
      ['Je serai tombé malade.', 'I will have fallen ill.', 'سأكون قد مرضت.'],
    ]),
  ],
  talk: {
    setting: ['Salma parle à Karim du futur antérieur avec être.', 'Salma talks to Karim about the future perfect with être.', 'سلمى تتحدّث مع كريم عن صيغة المستقبل السابق مع être.'],
    lines: [
      say('salma', 'Karim, tu seras allé à Paris ?', 'Karim, will you have gone to Paris?', 'كريم، هل ستكون قد ذهبت إلى باريس؟'),
      say('karim', 'Oui ! Je serai parti avant midi.', 'Yes! I will have left before noon.', 'نعم! سأكون قد غادرت قبل الظهر.'),
    ],
  },
  grammar: {
    examples: ['Je [serai] allé à Paris. (être au futur simple + allé)', 'Je [serai] parti avant. (être au futur + parti)', 'Je [serai] tombé malade. (être au futur + tombé)'],
    question: ['I will have gone to Paris: « Je ___ allé à Paris. »', 'سأكون قد ذهبت إلى باريس: « Je ___ allé à Paris. »'],
    options: [['serai', 'serai'], ['suis', 'suis'], ['seras', 'seras']],
    correct: 0,
    explanation: [
      'With être as auxiliary, the futur antérieur = futur simple of être (je serai, tu seras, il sera, nous serons, vous serez, ils seront) + past participle. The past participle agrees in gender and number with the subject: je serai allé (m.) / je serai allée (f.) / ils seront venus / elles seront venues. Used for movement verbs (aller, venir, partir, arriver, monter, descendre, naître, tomber).',
      'مع الفعل المساعد être، يكون المستقبل السابق = مستقبل être البسيط (je serai، tu seras، il sera، nous serons، vous serez، ils seront) + اسم المفعول. ويطابق اسم المفعول الفاعل في التذكير والتأنيث والإفراد والجمع: je serai allé (مذكّر) / je serai allée (مؤنّث) / ils seront venus / elles seront venues. ويُستعمل مع أفعال الحركة (aller، venir، partir، arriver، monter، descendre، naître، tomber).',
    ],
  },
  transfer: {
    setting: ['Zaid parle à Salma du futur antérieur avec être.', 'Zaid talks to Salma about the future perfect with être.', 'زيد يتحدّث مع سلمى عن صيغة المستقبل السابق مع être.'],
    lines: [
      say('zaid', 'Salma, tu seras venue ici ?', 'Salma, will you have come here?', 'سلمى، هل ستكونين قد أتيت إلى هنا؟'),
      say('salma', 'Oui ! Je serai arrivée tôt, Zaid.', 'Yes! I will have arrived early, Zaid.', 'نعم! سأكون قد وصلت مبكّرًا يا زيد.'),
    ],
  },
  write: {
    prompt: ['Say "I will have gone to Paris".', 'قل «سأكون قد ذهبت إلى باريس».'],
    mustInclude: ['serai'],
    model: 'Je serai allé à Paris.',
    frame: 'Je ___ allé à Paris.',
  },
  drills: [
    ['Je ___ allé à Paris.', ['serai', 'suis', 'seras'], ['Will have gone.', 'سأكون قد ذهبت.']],
    ['Je ___ parti avant.', ['serai', 'suis', 'sera'], ['Will have left.', 'سأكون قد غادرت.']],
    ['Je ___ tombé malade.', ['serai', 'tombe', 'seras'], ['Will have fallen ill.', 'سأكون قد مرضت.']],
  ],
})

const PREVISIONS = stage({
  id: 'fr2-fa-prev',
  emoji: '⏰',
  title: ['Les prévisions et les délais', 'Predictions and deadlines', 'التوقّعات والمواعيد'],
  setting: ['Les amis utilisent le futur antérieur pour parler de prévisions et de délais.', 'The friends use the future perfect for predictions and deadlines.', 'الأصدقاء يستعملون صيغة المستقبل السابق للتحدّث عن التوقّعات والمواعيد.'],
  scene: [
    say('karim', 'Quand tu auras fini, tu pourras sortir.', 'When you have finished, you can go out.', 'عندما تنهي، يمكنك الخروج.'),
    say('salma', 'Dès que j’aurai mangé, j’irai à l’école.', 'As soon as I have eaten, I will go to school.', 'بمجرّد أن آكل، سأذهب إلى المدرسة.'),
    say('rana', 'Aussitôt qu’il sera arrivé, on commencera.', 'As soon as he has arrived, we will start.', 'بمجرّد أن يصل، سنبدأ.'),
    say('zaid', 'Une fois que tu auras lu, tu me diras.', 'Once you have read, you will tell me.', 'بمجرّد أن تقرأ، ستخبرني.'),
    say('nour', 'Avant qu’elle soit partie, je la verrai.', 'Before she leaves, I will see her.', 'قبل أن تغادر، سأراها.'),
    say('duck', 'Bravo ! Les prévisions et les délais !', 'Bravo! Predictions and deadlines!', 'أحسنت! التوقّعات والمواعيد!'),
  ],
  phrases: [
    phrase('quand tu auras fini', '✅', ['When you have finished', 'عندما تنهي'], ['Temporal clause + futur antérieur.', 'جملة ظرفيّة + المستقبل السابق.'], [
      ['Quand tu auras fini, tu pourras sortir.', 'When you have finished, you can go out.', 'عندما تنهي، يمكنك الخروج.'],
      ['Quand tu auras fini, appelle-moi.', 'When you have finished, call me.', 'عندما تنهي، اتصل بي.'],
    ]),
    phrase('dès que j’aurai mangé', '🍽️', ['As soon as I have eaten', 'بمجرّد أن آكل'], ['Dès que + futur antérieur.', 'dès que + المستقبل السابق.'], [
      ['Dès que j’aurai mangé, j’irai à l’école.', 'As soon as I have eaten, I will go to school.', 'بمجرّد أن آكل، سأذهب إلى المدرسة.'],
      ['Dès que j’aurai mangé, je partirai.', 'As soon as I have eaten, I will leave.', 'بمجرّد أن آكل، سأغادر.'],
    ]),
    phrase('aussitôt qu’il sera arrivé', '🚪', ['As soon as he has arrived', 'بمجرّد أن يصل'], ['Aussitôt que + futur antérieur.', 'aussitôt que + المستقبل السابق.'], [
      ['Aussitôt qu’il sera arrivé, on commencera.', 'As soon as he has arrived, we will start.', 'بمجرّد أن يصل، سنبدأ.'],
      ['Aussitôt qu’il sera arrivé, on mangera.', 'As soon as he has arrived, we will eat.', 'بمجرّد أن يصل، سنأكل.'],
    ]),
    phrase('une fois que tu auras lu', '📖', ['Once you have read', 'بمجرّد أن تقرأ'], ['Une fois que + futur antérieur.', 'une fois que + المستقبل السابق.'], [
      ['Une fois que tu auras lu, tu me diras.', 'Once you have read, you will tell me.', 'بمجرّد أن تقرأ، ستخبرني.'],
      ['Une fois que tu auras lu, tu fermeras le livre.', 'Once you have read, you will close the book.', 'بمجرّد أن تقرأ، ستغلق الكتاب.'],
    ]),
    phrase('avant qu’elle soit partie', '👋', ['Before she leaves', 'قبل أن تغادر'], ['Avant que + subjonctif.', 'avant que + المصداقيّة.'], [
      ['Avant qu’elle soit partie, je la verrai.', 'Before she leaves, I will see her.', 'قبل أن تغادر، سأراها.'],
      ['Avant qu’elle soit partie, je lui parlerai.', 'Before she leaves, I will speak to her.', 'قبل أن تغادر، سأتكلّم معها.'],
    ]),
    phrase('quand nous aurons fini', '👥', ['When we have finished', 'عندما ننهي'], ['Quand + futur antérieur (nous).', 'quand + المستقبل السابق (نحن).'], [
      ['Quand nous aurons fini, nous rentrerons.', 'When we have finished, we will go home.', 'عندما ننهي، سنعود إلى البيت.'],
      ['Quand nous aurons fini, nous dinerons.', 'When we have finished, we will have dinner.', 'عندما ننهي، سنتعشّى.'],
    ]),
    phrase('lorsque vous serez rentrés', '🏠', ['When you have returned home', 'عندما تعودوا'], ['Lorsque + futur antérieur (vous).', 'lorsque + المستقبل السابق (أنتم).'], [
      ['Lorsque vous serez rentrés, téléphonez-moi.', 'When you have returned home, call me.', 'عندما تعودوا، اتصلوا بي.'],
      ['Lorsque vous serez rentrés, reposez-vous.', 'When you have returned home, rest.', 'عندما تعودوا، استريحوا.'],
    ]),
    phrase('dès qu’ils auront compris', '🧠', ['As soon as they have understood', 'بمجرّد أن يفهموا'], ['Dès que + futur antérieur (ils).', 'dès que + المستقبل السابق (هم).'], [
      ['Dès qu’ils auront compris, ils expliqueront.', 'As soon as they have understood, they will explain.', 'بمجرّد أن يفهموا، سيشرحون.'],
      ['Dès qu’ils auront compris, ils agiront.', 'As soon as they have understood, they will act.', 'بمجرّد أن يفهموا، سيتصرّفون.'],
    ]),
  ],
  talk: {
    setting: ['Salma parle à Karim des prévisions.', 'Salma talks to Karim about predictions.', 'سلمى تتحدّث مع كريم عن التوقّعات.'],
    lines: [
      say('salma', 'Karim, quand tu auras fini, tu sortiras ?', 'Karim, when you have finished, will you go out?', 'كريم، عندما تنهي، هل ستخرج؟'),
      say('karim', 'Oui ! Dès que j’aurai mangé, je sortirai.', 'Yes! As soon as I have eaten, I will go out.', 'نعم! بمجرّد أن آكل، سأخرج.'),
    ],
  },
  grammar: {
    examples: ['Quand tu [auras] fini, tu pourras sortir. (quand + futur antérieur)', 'Dès que j’[aurai] mangé, je partirai. (dès que + futur antérieur)', 'Avant qu’elle [soit] partie, je la verrai. (avant que + subjonctif)'],
    question: ['When you have finished, you can go out: « Quand tu ___ fini, tu pourras sortir. »', 'عندما تنهي، يمكنك الخروج: « Quand tu ___ fini, tu pourras sortir. »'],
    options: [['auras', 'auras'], ['as', 'as'], ['aura', 'aura']],
    correct: 0,
    explanation: [
      'The futur antérieur is used in temporal clauses introduced by quand, lorsque, dès que, aussitôt que, une fois que to express an action that will be completed before the main clause action. Note: after avant que, the subjunctive is used (avant qu’elle soit partie), not the futur antérieur. The main clause is in the futur simple.',
      'تُستعمل صيغة المستقبل السابق في الجمل الظرفيّة الزمنيّة التي تبدأ بـ quand، lorsque، dès que، aussitôt que، une fois que للتعبير عن فعلٍ سيكون قد اكتمل قبل فعل الجملة الرئيسيّة. وانتبه: بعد avant que نستعمل صيغة المصداقيّة (avant qu’elle soit partie) وليس المستقبل السابق. والجملة الرئيسيّة تكون في المستقبل البسيط.',
    ],
  },
  transfer: {
    setting: ['Zaid parle à Salma des délais.', 'Zaid talks to Salma about deadlines.', 'زيد يتحدّث مع سلمى عن المواعيد.'],
    lines: [
      say('zaid', 'Salma, dès que tu auras lu, tu me diras ?', 'Salma, once you have read, will you tell me?', 'سلمى، بمجرّد أن تقرئي، هل ستخبرينني؟'),
      say('salma', 'Oui ! Aussitôt que j’aurai fini, Zaid.', 'Yes! As soon as I have finished, Zaid.', 'نعم! بمجرّد أن أنهي يا زيد.'),
    ],
  },
  write: {
    prompt: ['Say "when you have finished, you can go out".', 'قل «عندما تنهي، يمكنك الخروج».'],
    mustInclude: ['auras'],
    model: 'Quand tu auras fini, tu pourras sortir.',
    frame: 'Quand tu ___ fini, tu pourras sortir.',
  },
  drills: [
    ['Quand tu ___ fini, tu pourras sortir.', ['auras', 'as', 'aura'], ['Will have finished.', 'ستكون قد أنهيت.']],
    ['Dès que j’___ mangé, je partirai.', ['aurai', 'ai', 'aura'], ['Will have eaten.', 'سأكون قد أكلت.']],
    ['Avant qu’elle ___ partie, je la verrai.', ['soit', 'est', 'sera'], ['Be (subjunctive).', 'تكون (مصداقيّة).']],
  ],
})

export const FR_FUTUR_ANTERIEUR = [AVOIR, ETRE, PREVISIONS]
