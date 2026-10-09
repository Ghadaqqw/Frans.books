// ============================================================================
// French course · «La voix passive» (home icon q1-l47) — three stages:
// the present passive → the past passive → introducing the agent with «par».
// Grammar met on the way: être + past participle (present), avoir + été +
// participle (past), and the preposition «par» to mark the agent (by).
// ============================================================================

import { phrase, say, stage } from './kit'

const PRESENT_PASSIF = stage({
  id: 'fr1-vp-present',
  emoji: '✅',
  title: ['Le présent passif', 'The present passive', 'المبني للمجهول في المضارع'],
  setting: ['Lily apprend la voix passive au présent.', 'Lily learns the passive voice in the present.', 'ليلي تتعلّم المبني للمجهول في المضارع.'],
  scene: [
    say('nour', 'Regarde ! Le travail est fait.', 'Look! The work is done.', 'انظري! العمل منجز.'),
    say('bear', 'Le pain est mangé par l’enfant.', 'The bread is eaten by the child.', 'الخبز يأكله الطفل.'),
    say('nour', 'Le livre est écrit en français.', 'The book is written in French.', 'الكتاب مكتوب بالفرنسية.'),
    say('bear', 'Le café est bu le matin.', 'Coffee is drunk in the morning.', 'القهوة تُشرب صباحًا.'),
    say('nour', 'Le cadeau est donné à l’enfant.', 'The gift is given to the child.', 'الهدية تُعطى للطفل.'),
    say('duck', 'Bravo ! Le film est vu par tous.', 'Bravo! The film is seen by everyone.', 'أحسنت! الفيلم يُشاهده الجميع.'),
  ],
  phrases: [
    phrase('est fait', '✅', ['Is done', 'منجز (مذكّر)'], ['Passive: être + past participle.', 'مبني للمجهول: être + اسم مفعول.'], [
      ['Le travail est fait.', 'The work is done.', 'العمل منجز.'],
      ['Le devoir est fait par l’élève.', 'The homework is done by the student.', 'الواجب يؤدّيه التلميذ.'],
    ]),
    phrase('est écrit', '✍️', ['Is written', 'مكتوب (مذكّر)'], ['Passive of écrire.', 'مبني للمجهول من écrire.'], [
      ['Le livre est écrit en français.', 'The book is written in French.', 'الكتاب مكتوب بالفرنسية.'],
      ['Le mot est écrit sur le mur.', 'The word is written on the wall.', 'الكلمة مكتوبة على الجدار.'],
    ]),
    phrase('est lu', '📖', ['Is read', 'مقروء (مذكّر)'], ['Passive of lire.', 'مبني للمجهول من lire.'], [
      ['Le poème est lu à voix haute.', 'The poem is read aloud.', 'القصيدة تُقرأ بصوت عالٍ.'],
      ['Le journal est lu le matin.', 'The newspaper is read in the morning.', 'الجريدة تُقرأ صباحًا.'],
    ]),
    phrase('est mangé', '🍞', ['Is eaten', 'مأكول (مذكّر)'], ['Passive of manger.', 'مبني للمجهول من manger.'], [
      ['Le pain est mangé.', 'The bread is eaten.', 'الخبز مأكول.'],
      ['Le gâteau est mangé par l’enfant.', 'The cake is eaten by the child.', 'الكيكة يأكلها الطفل.'],
    ]),
    phrase('est bu', '☕', ['Is drunk', 'مشروب (مذكّر)'], ['Passive of boire.', 'مبني للمجهول من boire.'], [
      ['Le café est bu le matin.', 'Coffee is drunk in the morning.', 'القهوة تُشرب صباحًا.'],
      ['Le thé est bu l’après-midi.', 'Tea is drunk in the afternoon.', 'الشاي يُشرب بعد الظهر.'],
    ]),
    phrase('est vu', '🎬', ['Is seen', 'مرئيّ (مذكّر)'], ['Passive of voir.', 'مبني للمجهول من voir.'], [
      ['Le film est vu par tous.', 'The film is seen by everyone.', 'الفيلم يُشاهده الجميع.'],
      ['Le tableau est vu au musée.', 'The painting is seen at the museum.', 'اللوحة تُشاهد في المتحف.'],
    ]),
    phrase('est pris', '🚆', ['Is taken', 'مأخوذ (مذكّر)'], ['Passive of prendre.', 'مبني للمجهول من prendre.'], [
      ['Le train est pris par les voyageurs.', 'The train is taken by the travellers.', 'القطار يستقلّه المسافرون.'],
      ['Le chemin est pris.', 'The path is taken.', 'الطريق مأخوذ.'],
    ]),
    phrase('est donné', '🎁', ['Is given', 'مُعطى (مذكّر)'], ['Passive of donner.', 'مبني للمجهول من donner.'], [
      ['Le cadeau est donné à l’enfant.', 'The gift is given to the child.', 'الهدية تُعطى للطفل.'],
      ['Le conseil est donné par le maître.', 'The advice is given by the master.', 'النصيحة يقدّمها المعلّم.'],
    ]),
  ],
  talk: {
    setting: ['Emma parle à Lily du présent passif.', 'Emma talks to Lily about the present passive.', 'إيما تتحدّث مع ليلي عن المبني للمجهول في المضارع.'],
    lines: [
      say('salma', 'Lily, le travail est fait ?', 'Lily, is the work done?', 'ليلي، هل العمل منجز؟'),
      say('nour', 'Oui, Emma ! Et le film est vu par tous.', 'Yes, Emma! And the film is seen by everyone.', 'نعم يا إيما! والفيلم يُشاهده الجميع.'),
    ],
  },
  grammar: {
    examples: ['Le travail [est] fait. (être + past participle)', 'Le livre [est écrit]. (passive of écrire)', 'Le cadeau [est donné]. (passive of donner)'],
    question: ['The work is done: « Le travail ___ fait. »', 'العمل منجز: « Le travail ___ fait. »'],
    options: [['est', 'est'], ['a', 'a'], ['sont', 'sont']],
    correct: 0,
    explanation: [
      'The passive voice = être (conjugated) + past participle. The subject receives the action: «Le travail est fait» = the work is done (by someone). Est fait, est écrit, est lu, est mangé, est bu, est vu, est pris, est donné are all present passive forms.',
      'المبني للمجهول = être (متصرفة) + اسم المفعول. والفاعل يتلقّى الفعل: «Le travail est fait» = العمل منجز (من قِبَل شخص). وest fait، est écrit، est lu، est mangé، est bu، est vu، est pris، est donné كلّها صيغ المبني للمجهول في المضارع.',
    ],
  },
  transfer: {
    setting: ['Adam apprend le présent passif.', 'Adam learns the present passive.', 'آدم يتعلّم المبني للمجهول في المضارع.'],
    lines: [
      say('karim', 'Regarde ! Le pain est mangé !', 'Look! The bread is eaten!', 'انظر! الخبز مأكول!'),
      say('rana', 'Oui ! Le cadeau est donné, Adam.', 'Yes! The gift is given, Adam.', 'نعم! الهدية تُعطى يا آدم.'),
    ],
  },
  write: {
    prompt: ['Say "the work is done".', 'قل «العمل منجز».'],
    mustInclude: ['travail'],
    model: 'Le travail est fait.',
    frame: 'Le travail ___ fait.',
  },
  drills: [
    ['Le travail ___ fait.', ['est', 'a', 'sont'], ['Is.', 'مبني للمجهول.']],
    ['Le livre ___ écrit en français.', ['est', 'a', 'sont'], ['Is.', 'مبني للمجهول.']],
    ['Le café ___ bu le matin.', ['est', 'a', 'sont'], ['Is.', 'مبني للمجهول.']],
  ],
})

const PASSE_PASSIF = stage({
  id: 'fr1-vp-passe',
  emoji: '📜',
  title: ['Le passé passif', 'The past passive', 'المبني للمجهول في الماضي'],
  setting: ['Lily découvre la voix passive au passé.', 'Lily discovers the passive voice in the past.', 'ليلي تكتشف المبني للمجهول في الماضي.'],
  scene: [
    say('nour', 'Regarde ! Le travail a été fait hier.', 'Look! The work was done yesterday.', 'انظري! العمل أُنجز أمس.'),
    say('bear', 'Le pain a été mangé ce matin.', 'The bread was eaten this morning.', 'الخبز أُكل صباح اليوم.'),
    say('nour', 'Le livre a été écrit en 1990.', 'The book was written in 1990.', 'الكتاب كُتب سنة 1990.'),
    say('bear', 'Le film a été vu par tous.', 'The film was seen by everyone.', 'الفيلم شاهده الجميع.'),
    say('nour', 'Le cadeau a été donné hier.', 'The gift was given yesterday.', 'الهدية أُعطيت أمس.'),
    say('duck', 'Bravo ! Le mot a été dit clairement.', 'Bravo! The word was said clearly.', 'أحسنت! الكلمة قيلت بوضوح.'),
  ],
  phrases: [
    phrase('a été fait', '✅', ['Was done', 'أُنجز (مذكّر)'], ['Past passive of faire.', 'مبني للمجهول الماضي من faire.'], [
      ['Le travail a été fait hier.', 'The work was done yesterday.', 'العمل أُنجز أمس.'],
      ['Le pain a été fait ce matin.', 'The bread was made this morning.', 'الخبز خُبز صباح اليوم.'],
    ]),
    phrase('a été écrit', '✍️', ['Was written', 'كُتب (مذكّر)'], ['Past passive of écrire.', 'مبني للمجهول الماضي من écrire.'], [
      ['Le livre a été écrit en 1990.', 'The book was written in 1990.', 'الكتاب كُتب سنة 1990.'],
      ['Le message a été écrit vite.', 'The message was written quickly.', 'الرسالة كُتبت بسرعة.'],
    ]),
    phrase('a été lu', '📖', ['Was read', 'قُرئ (مذكّر)'], ['Past passive of lire.', 'مبني للمجهول الماضي من lire.'], [
      ['Le journal a été lu par tous.', 'The newspaper was read by everyone.', 'الجريدة قرأها الجميع.'],
      ['Le poème a été lu à voix haute.', 'The poem was read aloud.', 'القصيدة قُرأت بصوت عالٍ.'],
    ]),
    phrase('a été mangé', '🍞', ['Was eaten', 'أُكل (مذكّر)'], ['Past passive of manger.', 'مبني للمجهول الماضي من manger.'], [
      ['Le pain a été mangé vite.', 'The bread was eaten quickly.', 'الخبز أُكل بسرعة.'],
      ['Le gâteau a été mangé par l’enfant.', 'The cake was eaten by the child.', 'الكيكة أكلها الطفل.'],
    ]),
    phrase('a été vu', '🎬', ['Was seen', 'شُوهِد (مذكّر)'], ['Past passive of voir.', 'مبني للمجهول الماضي من voir.'], [
      ['Le film a été vu par tous.', 'The film was seen by everyone.', 'الفيلم شاهده الجميع.'],
      ['Le tableau a été vu au musée.', 'The painting was seen at the museum.', 'اللوحة شُوهِدت في المتحف.'],
    ]),
    phrase('a été pris', '🚆', ['Was taken', 'أُخذ (مذكّر)'], ['Past passive of prendre.', 'مبني للمجهول الماضي من prendre.'], [
      ['Le train a été pris par les voyageurs.', 'The train was taken by the travellers.', 'القطار استقلّه المسافرون.'],
      ['Le chemin a été pris.', 'The path was taken.', 'الطريق أُخذ.'],
    ]),
    phrase('a été donné', '🎁', ['Was given', 'أُعطي (مذكّر)'], ['Past passive of donner.', 'مبني للمجهول الماضي من donner.'], [
      ['Le cadeau a été donné hier.', 'The gift was given yesterday.', 'الهدية أُعطيت أمس.'],
      ['Le conseil a été donné par le maître.', 'The advice was given by the master.', 'النصيحة قدّمها المعلّم.'],
    ]),
    phrase('a été dit', '💬', ['Was said', 'قِيل (مذكّر)'], ['Past passive of dire.', 'مبني للمجهول الماضي من dire.'], [
      ['Le mot a été dit clairement.', 'The word was said clearly.', 'الكلمة قيلت بوضوح.'],
      ['Le secret a été dit à voix haute.', 'The secret was said aloud.', 'السرّ قيل بصوت عالٍ.'],
    ]),
  ],
  talk: {
    setting: ['Emma parle à Lily du passé passif.', 'Emma talks to Lily about the past passive.', 'إيما تتحدّث مع ليلي عن المبني للمجهول في الماضي.'],
    lines: [
      say('salma', 'Lily, le travail a été fait hier ?', 'Lily, was the work done yesterday?', 'ليلي، هل العمل أُنجز أمس؟'),
      say('nour', 'Oui, Emma ! Et le film a été vu par tous.', 'Yes, Emma! And the film was seen by everyone.', 'نعم يا إيما! والفيلم شاهده الجميع.'),
    ],
  },
  grammar: {
    examples: ['Le travail a [été] fait. (avoir + été + participle)', 'Le livre a [été écrit]. (past passive of écrire)', 'Le mot a [été dit]. (past passive of dire)'],
    question: ['The work was done: « Le travail a ___ fait. »', 'العمل أُنجز: « Le travail a ___ fait. »'],
    options: [['été', 'été'], ['est', 'est'], ['sont', 'sont']],
    correct: 0,
    explanation: [
      'Past passive = avoir (conjugated) + été + past participle. «A été fait» = was done. The subject receives the past action. A été fait, a été écrit, a été lu, a été mangé, a été vu, a été pris, a été donné, a été dit are past passive forms.',
      'المبني للمجهول الماضي = avoir (متصرفة) + été + اسم المفعول. و«a été fait» = أُنجز. والفاعل يتلقّى الفعل الماضي. وa été fait، a été écrit، a été lu، a été mangé، a été vu، a été pris، a été donné، a été dit كلّها صيغ المبني للمجهول في الماضي.',
    ],
  },
  transfer: {
    setting: ['Adam découvre le passé passif.', 'Adam discovers the past passive.', 'آدم يكتشف المبني للمجهول في الماضي.'],
    lines: [
      say('karim', 'Regarde ! Le pain a été mangé !', 'Look! The bread was eaten!', 'انظر! الخبز أُكل!'),
      say('rana', 'Oui ! Le cadeau a été donné, Adam.', 'Yes! The gift was given, Adam.', 'نعم! الهدية أُعطيت يا آدم.'),
    ],
  },
  write: {
    prompt: ['Say "the work was done".', 'قل «العمل أُنجز».'],
    mustInclude: ['travail'],
    model: 'Le travail a été fait.',
    frame: 'Le travail a ___ fait.',
  },
  drills: [
    ['Le travail a ___ fait.', ['été', 'est', 'sont'], ['Was.', 'كان.']],
    ['Le livre a ___ écrit.', ['été', 'est', 'sont'], ['Was.', 'كان.']],
    ['Le film a ___ vu.', ['été', 'est', 'sont'], ['Was.', 'كان.']],
  ],
})

const AGENT = stage({
  id: 'fr1-vp-agent',
  emoji: '👆',
  title: ['L’agent', 'The agent', 'الفاعل'],
  setting: ['Lily apprend à exprimer l’agent avec «par».', 'Lily learns to express the agent with "par".', 'ليلي تتعلّم التعبير عن الفاعل بـ«par».'],
  scene: [
    say('nour', 'Regarde ! Le pain est fait par le boulanger.', 'Look! The bread is made by the baker.', 'انظري! الخبز يصنعه الخبّاز.'),
    say('bear', 'La leçon est donnée par le maître.', 'The lesson is given by the master.', 'الدرس يقدّمه المعلّم.'),
    say('nour', 'Le poème est lu par l’élève.', 'The poem is read by the student.', 'القصيدة يقرؤها التلميذ.'),
    say('bear', 'La porte est ouverte par le vent.', 'The door is opened by the wind.', 'الباب تفتحه الريح.'),
    say('nour', 'La terre est chauffée par le soleil.', 'The earth is heated by the sun.', 'الأرض تسخّنها الشمس.'),
    say('duck', 'Bravo ! La maison est brûlée par le feu.', 'Bravo! The house is burned by the fire.', 'أحسنت! البيت يحرقه النار.'),
  ],
  phrases: [
    phrase('par le boulanger', '👨‍🍳', ['By the baker', 'من قِبَل الخبّاز'], ['Agent phrase with par.', 'عبارة الفاعل بـpar.'], [
      ['Le pain est fait par le boulanger.', 'The bread is made by the baker.', 'الخبز يصنعه الخبّاز.'],
      ['La tarte est cuite par le boulanger.', 'The tart is baked by the baker.', 'الفطيرة يخبزها الخبّاز.'],
    ]),
    phrase('par le maître', '🧑‍🏫', ['By the master', 'من قِبَل المعلّم'], ['Agent phrase with par.', 'عبارة الفاعل بـpar.'], [
      ['La leçon est donnée par le maître.', 'The lesson is given by the master.', 'الدرس يقدّمه المعلّم.'],
      ['La règle est expliquée par le maître.', 'The rule is explained by the master.', 'القاعدة يشرحها المعلّم.'],
    ]),
    phrase('par l’élève', '🧑‍🎓', ['By the student', 'من قِبَل التلميذ'], ['Agent phrase with par.', 'عبارة الفاعل بـpar.'], [
      ['La question est posée par l’élève.', 'The question is asked by the student.', 'السؤال يطرحه التلميذ.'],
      ['Le poème est lu par l’élève.', 'The poem is read by the student.', 'القصيدة يقرؤها التلميذ.'],
    ]),
    phrase('par le vent', '💨', ['By the wind', 'من قِبَل الريح'], ['Agent phrase with par.', 'عبارة الفاعل بـpar.'], [
      ['La porte est ouverte par le vent.', 'The door is opened by the wind.', 'الباب تفتحه الريح.'],
      ['Le toit est soufflé par le vent.', 'The roof is blown by the wind.', 'السقف تهبّه الريح.'],
    ]),
    phrase('par le soleil', '☀️', ['By the sun', 'من قِبَل الشمس'], ['Agent phrase with par.', 'عبارة الفاعل بـpar.'], [
      ['La terre est chauffée par le soleil.', 'The earth is heated by the sun.', 'الأرض تسخّنها الشمس.'],
      ['La plante est éclairée par le soleil.', 'The plant is lit by the sun.', 'النبتة تُضيئها الشمس.'],
    ]),
    phrase('par l’eau', '💧', ['By the water', 'من قِبَل الماء'], ['Agent phrase with par.', 'عبارة الفاعل بـpar.'], [
      ['La roche est usée par l’eau.', 'The rock is worn by the water.', 'الصخرة تأكلها الماء.'],
      ['Le feu est éteint par l’eau.', 'The fire is put out by the water.', 'النار يطفئها الماء.'],
    ]),
    phrase('par le feu', '🔥', ['By the fire', 'من قِبَل النار'], ['Agent phrase with par.', 'عبارة الفاعل بـpar.'], [
      ['La maison est brûlée par le feu.', 'The house is burned by the fire.', 'البيت يحرقه النار.'],
      ['Le bois est consumé par le feu.', 'The wood is consumed by the fire.', 'الحطب يلتهمه النار.'],
    ]),
    phrase('par la main', '✋', ['By the hand', 'من قِبَل اليد'], ['Agent phrase with par.', 'عبارة الفاعل بـpar.'], [
      ['Le mur est peint par la main.', 'The wall is painted by the hand.', 'الجدار ترسمه اليد.'],
      ['Le tissu est cousu par la main.', 'The fabric is sewn by the hand.', 'القماش يخيطه اليد.'],
    ]),
  ],
  talk: {
    setting: ['Emma parle à Lily de l’agent.', 'Emma talks to Lily about the agent.', 'إيما تتحدّث مع ليلي عن الفاعل.'],
    lines: [
      say('salma', 'Lily, le pain est fait par le boulanger ?', 'Lily, is the bread made by the baker?', 'ليلي، هل الخبز يصنعه الخبّاز؟'),
      say('nour', 'Oui, Emma ! Et la leçon est donnée par le maître.', 'Yes, Emma! And the lesson is given by the master.', 'نعم يا إيما! والدرس يقدّمه المعلّم.'),
    ],
  },
  grammar: {
    examples: ['Le pain est fait [par] le boulanger. (par = by)', 'La leçon est donnée [par] le maître. (par introduces agent)', 'La porte est ouverte [par] le vent. (agent phrase)'],
    question: ['The bread is made by the baker: « Le pain est fait ___ le boulanger. »', 'الخبز يصنعه الخبّاز: « Le pain est fait ___ le boulanger. »'],
    options: [['par', 'par'], ['avec', 'avec'], ['pour', 'pour']],
    correct: 0,
    explanation: [
      'In the passive voice, the agent (the doer) is introduced by «par» (by): par le boulanger, par le maître, par l’élève, par le vent, par le soleil, par l’eau, par le feu, par la main. The subject receives the action, and «par + noun» tells who or what performs it.',
      'في المبني للمجهول، يُذكَر الفاعل (مَن يقوم بالفعل) بواسطة «par» (من قِبَل): par le boulanger، par le maître، par l’élève، par le vent، par le soleil، par l’eau، par le feu، par la main. والفاعل يتلقّى الفعل، و«par + اسم» يخبر مَن أو ماذا يقوم به.',
    ],
  },
  transfer: {
    setting: ['Adam apprend l’agent.', 'Adam learns the agent.', 'آدم يتعلّم الفاعل.'],
    lines: [
      say('karim', 'Regarde ! Le pain est fait par le boulanger !', 'Look! The bread is made by the baker!', 'انظر! الخبز يصنعه الخبّاز!'),
      say('rana', 'Oui ! Le poème est lu par l’élève, Adam.', 'Yes! The poem is read by the student, Adam.', 'نعم! القصيدة يقرؤها التلميذ يا آدم.'),
    ],
  },
  write: {
    prompt: ['Say "the bread is made by the baker".', 'قل «الخبز يصنعه الخبّاز».'],
    mustInclude: ['boulanger'],
    model: 'Le pain est fait par le boulanger.',
    frame: 'Le pain est fait ___ le boulanger.',
  },
  drills: [
    ['Le pain est fait ___ le boulanger.', ['par', 'avec', 'pour'], ['By.', 'من قِبَل.']],
    ['La leçon est donnée ___ le maître.', ['par', 'avec', 'pour'], ['By.', 'من قِبَل.']],
    ['La porte est ouverte ___ le vent.', ['par', 'avec', 'pour'], ['By.', 'من قِبَل.']],
  ],
})

export const FR_VOIX_PASSIVE = [PRESENT_PASSIF, PASSE_PASSIF, AGENT]
