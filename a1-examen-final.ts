// ============================================================================
// French course · «L’examen final» (home icon q1-exam) — three stages:
// présentations (greetings, name, age, origin, family, profession, languages,
// hobbies) → la journée (time, weather, meals, school) → les projets
// (future tense, conditionnel, hopes). Grammar met on the way: futur simple
// of aller/être and the conditionnel of vouloir/aimer.
// ============================================================================

import { phrase, say, stage } from './kit'

const PRESENTATIONS = stage({
  id: 'fr1-exam-presentation',
  emoji: '🎓',
  title: ['Les présentations', 'Introducing yourself', 'التعرّف على النفس'],
  setting: ['Karim et Salma se présentent en classe.', 'Karim and Salma introduce themselves in class.', 'كريم وسلمى يُعرّفان عن نفسيهما في الصف.'],
  scene: [
    say('karim', 'Bonjour ! Je m’appelle Karim et j’ai douze ans.', 'Hello! My name is Karim and I’m twelve.', 'مرحبًا! اسمي كريم وعمري اثنا عشر عامًا.'),
    say('salma', 'Moi, je viens du Maroc et j’habite à Rabat.', 'Me, I come from Morocco and I live in Rabat.', 'أمّا أنا فأنا من المغرب وأعيش في الرباط.'),
    say('karim', 'J’ai deux frères et une sœur à la maison.', 'I have two brothers and a sister at home.', 'لديّ أخوان وأخت في البيت.'),
    say('salma', 'Je suis élève à l’école primaire du quartier.', 'I’m a student at the neighborhood primary school.', 'أنا تلميذة في المدرسة الابتدائية في الحيّ.'),
    say('karim', 'Je parle arabe et français à la maison.', 'I speak Arabic and French at home.', 'أتحدّث بالعربية والفرنسية في البيت.'),
    say('duck', 'Bravo ! J’aime le foot et la musique.', 'Bravo! I like football and music.', 'أحسنت! أحبّ كرة القدم والموسيقى.'),
  ],
  phrases: [
    phrase('je m’appelle Karim et j’ai douze ans', '🙋', ['My name is Karim and I’m twelve', 'اسمي كريم وعمري اثنا عشر عامًا'], ['Combines name and age.', 'تجمع الاسم والعمر.'], [
      ['Bonjour ! Je m’appelle Karim et j’ai douze ans.', 'Hello! My name is Karim and I’m twelve.', 'مرحبًا! اسمي كريم وعمري اثنا عشر عامًا.'],
      ['Salut, je m’appelle Karim et j’ai douze ans.', 'Hi, my name is Karim and I’m twelve.', 'مرحبًا، اسمي كريم وعمري اثنا عشر عامًا.'],
    ]),
    phrase('je viens du Maroc et j’habite à Rabat', '🌍', ['I come from Morocco and I live in Rabat', 'أنا من المغرب وأعيش في الرباط'], ['Origin + city.', 'الأصل + المدينة.'], [
      ['Je viens du Maroc et j’habite à Rabat.', 'I come from Morocco and I live in Rabat.', 'أنا من المغرب وأعيش في الرباط.'],
      ['Moi, je viens du Maroc et j’habite à Rabat.', 'Me, I come from Morocco and I live in Rabat.', 'أمّا أنا فأنا من المغرب وأعيش في الرباط.'],
    ]),
    phrase('j’ai deux frères et une sœur', '👨‍👧‍👦', ['I have two brothers and one sister', 'لديّ أخوان وأخت'], ['Family count.', 'عدد العائلة.'], [
      ['J’ai deux frères et une sœur à la maison.', 'I have two brothers and a sister at home.', 'لديّ أخوان وأخت في البيت.'],
      ['Moi, j’ai deux frères et une sœur.', 'Me, I have two brothers and a sister.', 'أمّا أنا فلديّ أخوان وأخت.'],
    ]),
    phrase('je suis élève à l’école', '🏫', ['I’m a student at school', 'أنا تلميذ في المدرسة'], ['Profession + place.', 'المهنة + المكان.'], [
      ['Je suis élève à l’école primaire du quartier.', 'I’m a student at the neighborhood primary school.', 'أنا تلميذة في المدرسة الابتدائية في الحيّ.'],
      ['Moi, je suis élève à l’école du village.', 'Me, I’m a student at the village school.', 'أمّا أنا فأنا تلميذ في مدرسة القرية.'],
    ]),
    phrase('je parle arabe et français', '🗣️', ['I speak Arabic and French', 'أتحدّث بالعربية والفرنسية'], ['Languages spoken.', 'اللغات المتحدّث بها.'], [
      ['Je parle arabe et français à la maison.', 'I speak Arabic and French at home.', 'أتحدّث بالعربية والفرنسية في البيت.'],
      ['Moi, je parle arabe et français avec mes amis.', 'Me, I speak Arabic and French with my friends.', 'أمّا أنا فأتحدّث بالعربية والفرنسية مع أصدقائي.'],
    ]),
    phrase('j’aime le foot et la musique', '⚽🎵', ['I like football and music', 'أحبّ كرة القدم والموسيقى'], ['Two hobbies combined.', 'هوايتان مجتمعتان.'], [
      ['J’aime le foot et la musique le week-end.', 'I like football and music on weekends.', 'أحبّ كرة القدم والموسيقى في عطلة نهاية الأسبوع.'],
      ['Moi, j’aime le foot et la musique aussi.', 'Me, I like football and music too.', 'أمّا أنا فأحبّ كرة القدم والموسيقى أيضًا.'],
    ]),
    phrase('mon père est médecin', '👨‍⚕️', ['My father is a doctor', 'أبي طبيب'], ['Family profession.', 'مهنة في العائلة.'], [
      ['Mon père est médecin à l’hôpital.', 'My father is a doctor at the hospital.', 'أبي طبيب في المستشفى.'],
      ['Chez moi, mon père est médecin.', 'At my home, my father is a doctor.', 'في بيتنا، أبي طبيب.'],
    ]),
    phrase('nous sommes une famille de cinq', '👨‍👩‍👧‍👦', ['We are a family of five', 'نحن عائلة من خمسة'], ['Family size.', 'حجم العائلة.'], [
      ['Nous sommes une famille de cinq personnes.', 'We are a family of five people.', 'نحن عائلة من خمسة أشخاص.'],
      ['À la maison, nous sommes une famille de cinq.', 'At home, we are a family of five.', 'في البيت، نحن عائلة من خمسة.'],
    ]),
  ],
  talk: {
    setting: ['Salma pose des questions à Karim.', 'Salma asks Karim questions.', 'سلمى تطرح أسئلة على كريم.'],
    lines: [
      say('salma', 'Karim, comment tu t’appelles et quel âge as-tu ?', 'Karim, what’s your name and how old are you?', 'كريم، ما اسمك وكم عمرك؟'),
      say('karim', 'Je m’appelle Karim et j’ai douze ans.', 'My name is Karim and I’m twelve.', 'اسمي كريم وعمري اثنا عشر عامًا.'),
    ],
  },
  grammar: {
    examples: ['Je [m’appelle] Karim et j’ai douze ans. (s’appeler)', 'J’[ai] deux frères. (avoir)', 'Je [parle] arabe et français. (parler)'],
    question: ['« My name is Karim » : « Je ___ Karim. »', '«اسمي كريم»: « Je ___ Karim. »'],
    options: [['m’appelle', 'm’appelle'], ['viens', 'viens'], ['suis', 'suis']],
    correct: 0,
    explanation: [
      'Verbs to introduce yourself: s’appeler (to be called) → je m’appelle. avoir (to have) → j’ai. parler (to speak) → je parle. These combine name, age and languages in one sentence.',
      'الأفعال لتقديم نفسك: s’appeler (يُسمّى) ← je m’appelle. avoir (يملك) ← j’ai. parler (يتحدّث) ← je parle. تجمع الاسم والعمر واللغات في جملة واحدة.',
    ],
  },
  transfer: {
    setting: ['Rana présente son ami Zaid à la classe.', 'Rana introduces her friend Zaid to the class.', 'رنا تُعرّف صديقها زيدًا للصف.'],
    lines: [
      say('rana', 'Salut ! Je m’appelle Rana et j’ai dix ans.', 'Hi! My name is Rana and I’m ten.', 'مرحبًا! اسمي رنا وعمري عشر سنوات.'),
      say('zaid', 'Moi, je m’appelle Zaid et j’ai onze ans.', 'Me, my name is Zaid and I’m eleven.', 'أمّا أنا فاسمي زيد وعمري إحدى عشرة سنة.'),
    ],
  },
  write: {
    prompt: ['Say "my name is Karim".', 'قل «اسمي كريم».'],
    mustInclude: ['Karim'],
    model: 'Je m’appelle Karim.',
    frame: 'Je m’appelle ___.',
  },
  drills: [
    ['Je m’___ Karim.', ['appelle', 'viens', 'suis'], ['am called.', 'أُسمّى.']],
    ['J’ai ___ frères et une sœur.', ['deux', 'midi', 'sept'], ['two.', 'اثنان.']],
    ['Je ___ arabe et français.', ['parle', 'mange', 'dîne'], ['speak.', 'أتحدّث.']],
  ],
})

const JOURNEE = stage({
  id: 'fr1-exam-journee',
  emoji: '⏰',
  title: ['La journée', 'The day', 'اليوم'],
  setting: ['Karim raconte sa journée type.', 'Karim describes his typical day.', 'يصف كريم يومه المعتاد.'],
  scene: [
    say('karim', 'Le matin je me lève à sept heures pile.', 'In the morning I get up at exactly seven.', 'في الصباح أستيقظ في السابعة تمامًا.'),
    say('salma', 'À huit heures je prends mon petit-déjeuner.', 'At eight o’clock I have my breakfast.', 'في الثامنة أتناول فطوري.'),
    say('karim', 'À neuf heures je vais à l’école.', 'At nine o’clock I go to school.', 'في التاسعة أذهب إلى المدرسة.'),
    say('salma', 'À midi je mange à la cantine.', 'At noon I eat at the cafeteria.', 'في الظهر آكل في الكافتيريا.'),
    say('karim', 'L’après-midi je fais mes devoirs.', 'In the afternoon I do my homework.', 'بعد الظهر أؤدّي واجباتي.'),
    say('duck', 'Bravo ! Le soir je dîne avec ma famille.', 'Bravo! In the evening I dine with my family.', 'أحسنت! في المساء أتعشّى مع عائلتي.'),
  ],
  phrases: [
    phrase('le matin je me lève à sept heures', '🌅', ['In the morning I get up at seven', 'في الصباح أستيقظ في السابعة'], ['Time + routine.', 'الوقت + الروتين.'], [
      ['Le matin je me lève à sept heures pile.', 'In the morning I get up at exactly seven.', 'في الصباح أستيقظ في السابعة تمامًا.'],
      ['D’habitude, le matin je me lève à sept heures.', 'Usually, in the morning I get up at seven.', 'عادةً، في الصباح أستيقظ في السابعة.'],
    ]),
    phrase('à huit heures je prends mon petit-déjeuner', '🥐', ['At eight I have my breakfast', 'في الثامنة أتناول فطوري'], ['Time + meal.', 'الوقت + الوجبة.'], [
      ['À huit heures je prends mon petit-déjeuner.', 'At eight o’clock I have my breakfast.', 'في الثامنة أتناول فطوري.'],
      ['Le matin à huit heures je prends mon petit-déjeuner.', 'In the morning at eight o’clock I have my breakfast.', 'في الصباح في الثامنة أتناول فطوري.'],
    ]),
    phrase('à neuf heures je vais à l’école', '🎒', ['At nine I go to school', 'في التاسعة أذهب إلى المدرسة'], ['Time + school.', 'الوقت + المدرسة.'], [
      ['À neuf heures je vais à l’école.', 'At nine o’clock I go to school.', 'في التاسعة أذهب إلى المدرسة.'],
      ['Chaque jour à neuf heures je vais à l’école.', 'Every day at nine o’clock I go to school.', 'كلّ يوم في التاسعة أذهب إلى المدرسة.'],
    ]),
    phrase('à midi je mange à la cantine', '🍽️', ['At noon I eat at the cafeteria', 'في الظهر آكل في الكافتيريا'], ['Time + meal + place.', 'الوقت + الوجبة + المكان.'], [
      ['À midi je mange à la cantine.', 'At noon I eat at the cafeteria.', 'في الظهر آكل في الكافتيريا.'],
      ['À l’école, à midi je mange à la cantine.', 'At school, at noon I eat at the cafeteria.', 'في المدرسة، في الظهر آكل في الكافتيريا.'],
    ]),
    phrase('l’après-midi je fais mes devoirs', '📚', ['In the afternoon I do my homework', 'بعد الظهر أؤدّي واجباتي'], ['Time + activity.', 'الوقت + النشاط.'], [
      ['L’après-midi je fais mes devoirs après la classe.', 'In the afternoon I do my homework after class.', 'بعد الظهر أؤدّي واجباتي بعد الدرس.'],
      ['Toujours l’après-midi je fais mes devoirs.', 'Always in the afternoon I do my homework.', 'دائمًا بعد الظهر أؤدّي واجباتي.'],
    ]),
    phrase('le soir je dîne avec ma famille', '🌙', ['In the evening I dine with my family', 'في المساء أتعشّى مع عائلتي'], ['Time + meal + family.', 'الوقت + الوجبة + العائلة.'], [
      ['Le soir je dîne avec ma famille à la maison.', 'In the evening I dine with my family at home.', 'في المساء أتعشّى مع عائلتي في البيت.'],
      ['Tous les jours le soir je dîne avec ma famille.', 'Every day in the evening I dine with my family.', 'كلّ يوم في المساء أتعشّى مع عائلتي.'],
    ]),
    phrase('à dix heures je me couche', '🛏️', ['At ten I go to bed', 'في العاشرة أنام'], ['Time + routine.', 'الوقت + الروتين.'], [
      ['À dix heures je me couche dans mon lit.', 'At ten o’clock I go to bed in my bed.', 'في العاشرة أنام في سريري.'],
      ['Le soir à dix heures je me couche.', 'In the evening at ten o’clock I go to bed.', 'في المساء في العاشرة أنام.'],
    ]),
    phrase('le week-end je joue au foot', '⚽', ['On weekends I play football', 'في عطلة نهاية الأسبوع ألعب كرة القدم'], ['Weekend activity.', 'نشاط نهاية الأسبوع.'], [
      ['Le week-end je joue au foot au parc.', 'On weekends I play football at the park.', 'في عطلة نهاية الأسبوع ألعب كرة القدم في الحديقة.'],
      ['Avec mes amis le week-end je joue au foot.', 'With my friends on weekends I play football.', 'مع أصدقائي في عطلة نهاية الأسبوع ألعب كرة القدم.'],
    ]),
  ],
  talk: {
    setting: ['Salma demande à Karim sa journée.', 'Salma asks Karim about his day.', 'سلمى تسأل كريمًا عن يومه.'],
    lines: [
      say('salma', 'Karim, à quelle heure te lèves-tu le matin ?', 'Karim, what time do you get up in the morning?', 'كريم، في أيّ ساعة تستيقظ في الصباح؟'),
      say('karim', 'Le matin je me lève à sept heures.', 'In the morning I get up at seven.', 'في الصباح أستيقظ في السابعة.'),
    ],
  },
  grammar: {
    examples: ['À huit heures je [prends] mon petit-déjeuner. (prendre)', 'À midi je [mange] à la cantine. (manger)', 'Le soir je [dîne] avec ma famille. (dîner)'],
    question: ['« At noon I eat at the cafeteria » : « À midi je ___ à la cantine. »', '«في الظهر آكل في الكافتيريا»: « À midi je ___ à la cantine. »'],
    options: [['mange', 'mange'], ['vais', 'vais'], ['prends', 'prends']],
    correct: 0,
    explanation: [
      'Daily routine verbs: prendre (to take) → je prends (mon petit-déjeuner). manger (to eat) → je mange. dîner (to dine) → je dîne. Each is paired with a time expression (à huit heures, à midi, le soir).',
      'أفعال الروتين اليومي: prendre (يأخذ) ← je prends (فطوري). manger (يأكل) ← je mange. dîner (يتعشّى) ← je dîne. كلٌّ مقرون بتعبير زمني (à huit heures، à midi، le soir).',
    ],
  },
  transfer: {
    setting: ['Rana décrit sa journée à Zaid.', 'Rana describes her day to Zaid.', 'رنا تصف يومها لزيد.'],
    lines: [
      say('rana', 'À midi je mange à la cantine de l’école.', 'At noon I eat at the school cafeteria.', 'في الظهر آكل في كافتيريا المدرسة.'),
      say('zaid', 'Moi aussi ! Et le soir je dîne avec ma famille.', 'Me too! And in the evening I dine with my family.', 'وأنا أيضًا! وفي المساء أتعشّى مع عائلتي.'),
    ],
  },
  write: {
    prompt: ['Say "in the morning I get up at seven".', 'قل «في الصباح أستيقظ في السابعة».'],
    mustInclude: ['matin'],
    model: 'Le matin je me lève à sept heures.',
    frame: 'Le ___ je me lève.',
  },
  drills: [
    ['Le matin je me ___ à sept heures.', ['lève', 'couche', 'mange'], ['get up.', 'أستيقظ.']],
    ['À midi je ___ à la cantine.', ['mange', 'vais', 'prends'], ['eat.', 'آكل.']],
    ['Le soir je me ___ à dix heures.', ['couche', 'lève', 'fais'], ['go to bed.', 'أنام.']],
  ],
})

const PROJETS = stage({
  id: 'fr1-exam-projets',
  emoji: '🚀',
  title: ['Les projets', 'Future plans', 'الخطط المستقبلية'],
  setting: ['Karim et Salma parlent de leurs projets d’avenir.', 'Karim and Salma talk about their future plans.', 'يتحدّث كريم وسلمى عن خططهما المستقبليّة.'],
  scene: [
    say('karim', 'L’année prochaine j’irai au collège en ville.', 'Next year I will go to middle school in town.', 'في العام المقبل سأذهب إلى الإعدادية في المدينة.'),
    say('salma', 'Plus tard je serai médecin comme mon père.', 'Later I will be a doctor like my father.', 'لاحقًا سأكون طبيبًا مثل أبي.'),
    say('karim', 'Je voudrais voyager en France cet été.', 'I would like to travel to France this summer.', 'أودّ السفر إلى فرنسا هذا الصيف.'),
    say('salma', 'Si j’avais de l’argent j’achèterais une maison grande.', 'If I had money I would buy a big house.', 'لو كان لديّ مال لاشتريت بيتًا كبيرًا.'),
    say('karim', 'Quand je serai grand je parlerai bien français.', 'When I’m big I will speak French well.', 'حين أكبر سأتحدّث الفرنسية جيّدًا.'),
    say('duck', 'Bravo ! L’avenir sera brillant pour nous.', 'Bravo! The future will be bright for us.', 'أحسنت! المستقبل سيكون مشرقًا لنا.'),
  ],
  phrases: [
    phrase('l’année prochaine j’irai au collège', '🏫', ['Next year I will go to middle school', 'في العام المقبل سأذهب إلى الإعدادية'], ['Future + school.', 'المستقبل + المدرسة.'], [
      ['L’année prochaine j’irai au collège en ville.', 'Next year I will go to middle school in town.', 'في العام المقبل سأذهب إلى الإعدادية في المدينة.'],
      ['En septembre l’année prochaine j’irai au collège.', 'In September next year I will go to middle school.', 'في سبتمبر في العام المقبل سأذهب إلى الإعدادية.'],
    ]),
    phrase('plus tard je serai médecin', '🩺', ['Later I will be a doctor', 'لاحقًا سأكون طبيبًا'], ['Future + profession.', 'المستقبل + المهنة.'], [
      ['Plus tard je serai médecin comme mon père.', 'Later I will be a doctor like my father.', 'لاحقًا سأكون طبيبًا مثل أبي.'],
      ['Dans la vie, plus tard je serai médecin.', 'In life, later I will be a doctor.', 'في الحياة، لاحقًا سأكون طبيبًا.'],
    ]),
    phrase('je voudrais voyager en France', '✈️', ['I would like to travel to France', 'أودّ السفر إلى فرنسا'], ['Conditionnel + travel.', 'الشرطي + السفر.'], [
      ['Je voudrais voyager en France cet été.', 'I would like to travel to France this summer.', 'أودّ السفر إلى فرنسا هذا الصيف.'],
      ['Moi, je voudrais voyager en France un jour.', 'Me, I would like to travel to France one day.', 'أمّا أنا فأودّ السفر إلى فرنسا يومًا ما.'],
    ]),
    phrase('si j’avais de l’argent j’achèterais une maison', '🏡', ['If I had money I would buy a house', 'لو كان لديّ مال لاشتريت بيتًا'], ['Hypothetical sentence.', 'جملة افتراضيّة.'], [
      ['Si j’avais de l’argent j’achèterais une maison grande.', 'If I had money I would buy a big house.', 'لو كان لديّ مال لاشتريت بيتًا كبيرًا.'],
      ['Alors si j’avais de l’argent j’achèterais une maison.', 'So if I had money I would buy a house.', 'إذًا لو كان لديّ مال لاشتريت بيتًا.'],
    ]),
    phrase('quand je serai grand je parlerai bien français', '🗣️', ['When I’m big I will speak French well', 'حين أكبر سأتحدّث الفرنسية جيّدًا'], ['Future + language.', 'المستقبل + اللغة.'], [
      ['Quand je serai grand je parlerai bien français à l’école.', 'When I’m big I will speak French well at school.', 'حين أكبر سأتحدّث الفرنسية جيّدًا في المدرسة.'],
      ['Un jour quand je serai grand je parlerai bien français.', 'One day when I’m big I will speak French well.', 'يومًا ما حين أكبر سأتحدّث الفرنسية جيّدًا.'],
    ]),
    phrase('j’aimerais avoir une grande famille', '👨‍👩‍👧‍👦', ['I would like to have a big family', 'أودّ أن يكون لديّ عائلة كبيرة'], ['Conditionnel + family.', 'الشرطي + العائلة.'], [
      ['J’aimerais avoir une grande famille un jour.', 'I would like to have a big family one day.', 'أودّ أن يكون لديّ عائلة كبيرة يومًا ما.'],
      ['Plus tard j’aimerais avoir une grande famille.', 'Later I would like to have a big family.', 'لاحقًا أودّ أن يكون لديّ عائلة كبيرة.'],
    ]),
    phrase('je ferai mes études à l’université', '🎓', ['I will study at the university', 'سأدرس في الجامعة'], ['Future + education.', 'المستقبل + التعليم.'], [
      ['Je ferai mes études à l’université plus tard.', 'I will study at the university later.', 'سأدرس في الجامعة لاحقًا.'],
      ['Plus tard je ferai mes études à l’université.', 'Later I will study at the university.', 'لاحقًا سأدرس في الجامعة.'],
    ]),
    phrase('l’avenir sera brillant', '✨', ['The future will be bright', 'المستقبل سيكون مشرقًا'], ['Hope for the future.', 'أمل في المستقبل.'], [
      ['L’avenir sera brillant pour nous tous.', 'The future will be bright for all of us.', 'المستقبل سيكون مشرقًا لنا جميعًا.'],
      ['Je crois, l’avenir sera brillant.', 'I believe, the future will be bright.', 'أعتقد، المستقبل سيكون مشرقًا.'],
    ]),
  ],
  talk: {
    setting: ['Salma parle de l’avenir avec Karim.', 'Salma talks about the future with Karim.', 'سلمى تتحدّث عن المستقبل مع كريم.'],
    lines: [
      say('salma', 'Karim, que feras-tu plus tard ?', 'Karim, what will you do later?', 'كريم، ماذا ستفعل لاحقًا؟'),
      say('karim', 'Plus tard je serai médecin.', 'Later I will be a doctor.', 'لاحقًا سأكون طبيبًا.'),
    ],
  },
  grammar: {
    examples: ['L’année prochaine j’[irai] au collège. (futur, aller)', 'Plus tard je [serai] médecin. (futur, être)', 'Je [voudrais] voyager en France. (conditionnel, vouloir)'],
    question: ['« Later I will be a doctor » : « Plus tard je ___ médecin. »', '«لاحقًا سأكون طبيبًا»: « Plus tard je ___ médecin. »'],
    options: [['serai', 'serai'], ['suis', 'suis'], ['voudrais', 'voudrais']],
    correct: 0,
    explanation: [
      'Future tense (futur simple): aller → j’irai; être → je serai. Conditional (conditionnel): vouloir → je voudrais; aimer → j’aimerais. Used to talk about future plans, dreams and hypotheses.',
      'زمن المستقبل (futur simple): aller ← j’irai؛ être ← je serai. والشرطي (conditionnel): vouloir ← je voudrais؛ aimer ← j’aimerais. تُستعمل للحديث عن خطط وأحلام وافتراضات المستقبل.',
    ],
  },
  transfer: {
    setting: ['Rana partage ses projets avec Zaid.', 'Rana shares her plans with Zaid.', 'رنا تشارك خططها مع زيد.'],
    lines: [
      say('rana', 'Je voudrais voyager en France un jour.', 'I would like to travel to France one day.', 'أودّ أن أسافر إلى فرنسا يومًا ما.'),
      say('zaid', 'Moi, je ferai mes études à l’université.', 'Me, I will study at the university.', 'أمّا أنا فسأدرس في الجامعة.'),
    ],
  },
  write: {
    prompt: ['Say "the future will be bright".', 'قل «المستقبل سيكون مشرقًا».'],
    mustInclude: ['avenir'],
    model: 'L’avenir sera brillant.',
    frame: 'L’___ sera brillant.',
  },
  drills: [
    ['L’année prochaine j’___ au collège.', ['irai', 'suis', 'ai'], ['will go.', 'سأذهب.']],
    ['Plus tard je ___ médecin.', ['serai', 'mange', 'parle'], ['will be.', 'سأكون.']],
    ['Je ___ voyager en France.', ['voudrais', 'serai', 'irai'], ['would like.', 'أودّ.']],
  ],
})

export const FR_EXAMEN_FINAL = [PRESENTATIONS, JOURNEE, PROJETS]
