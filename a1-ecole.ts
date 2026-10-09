// ============================================================================
// French course · «À l’école» (home icon q1-l8) — three stages:
// school items → where things are → what is it? Grammar met on the way:
// articles (un/une/le/la/les), prepositions of place (dans, sur, sous),
// and qu’est-ce que c’est? with c’est un/une.
// ============================================================================

import { phrase, say, stage } from './kit'

const FOURNITURES = stage({
  id: 'fr1-ecole-fournitures',
  emoji: '✏️',
  title: ["À l’école", 'At school', 'في المدرسة'],
  setting: ['En classe, les enfants sortent leurs affaires.', 'In class, the children take out their things.', 'في الصف، الأطفال يخرجون أغراضهم.'],
  scene: [
    say('duck', 'Sortez vos affaires, les enfants.', 'Take out your things, children.', 'أخرجوا أغراضكم يا أطفال.'),
    say('karim', 'Voici un livre et un cahier.', 'Here is a book and a notebook.', 'هذا كتاب ودفتر.'),
    say('nour', 'Et un crayon pour écrire.', 'And a pencil to write.', 'وقلم رصاص للكتابة.'),
    say('salma', 'Où est mon sac ?', 'Where is my bag?', 'أين حقيبتي؟'),
    say('zaid', 'Regarde, un stylo rouge !', 'Look, a red pen!', 'انظر، قلم حبر أحمر!'),
    say('duck', 'Très bien ! On commence la leçon.', 'Very good! Let’s start the lesson.', 'ممتاز! لنبدأ الدرس.'),
  ],
  phrases: [
    phrase('un livre', '📖', ['A book', 'كتاب'], ['For reading.', 'للقراءة.'], [
      ['J’ai un livre.', 'I have a book.', 'لديّ كتاب.'],
      ['C’est un livre.', 'It’s a book.', 'إنّه كتاب.'],
    ]),
    phrase('un cahier', '📓', ['A notebook', 'دفتر'], ['For writing.', 'للكتابة.'], [
      ['J’écris dans un cahier.', 'I write in a notebook.', 'أكتب في دفتر.'],
      ['J’ai un cahier.', 'I have a notebook.', 'لديّ دفتر.'],
    ]),
    phrase('un crayon', '✏️', ['A pencil', 'قلم رصاص'], ['For writing.', 'للكتابة.'], [
      ['J’écris avec un crayon.', 'I write with a pencil.', 'أكتب بقلم رصاص.'],
      ['Un crayon jaune.', 'A yellow pencil.', 'قلم رصاص أصفر.'],
    ]),
    phrase('un stylo', '🖊️', ['A pen', 'قلم حبر'], ['For writing in ink.', 'للكتابة بالحبر.'], [
      ['J’ai un stylo.', 'I have a pen.', 'لديّ قلم حبر.'],
      ['J’ai un stylo bleu.', 'I have a blue pen.', 'لديّ قلم حبر أزرق.'],
    ]),
    phrase('le sac', '🎒', ['The bag', 'الحقيبة'], ['For carrying school things.', 'لحمل أغراض المدرسة.'], [
      ['Le sac est lourd.', 'The bag is heavy.', 'الحقيبة ثقيلة.'],
      ['Le sac est ici.', 'The bag is here.', 'الحقيبة هنا.'],
    ]),
    phrase('la leçon', '📝', ['The lesson', 'الدرس'], ['What the teacher teaches.', 'ما يُعلّمه المعلّم.'], [
      ['La leçon est facile.', 'The lesson is easy.', 'الدرس سهل.'],
      ['J’écoute la leçon.', 'I listen to the lesson.', 'أستمع للدرس.'],
    ]),
    phrase('la classe', '🏫', ['The class / classroom', 'الصفّ'], ['Where students learn.', 'حيث يتعلّم الطلاب.'], [
      ['La classe est grande.', 'The classroom is big.', 'الصفّ كبير.'],
      ['Dans la classe, on apprend.', 'In the classroom, we learn.', 'في الصفّ، نتعلّم.'],
    ]),
    phrase('la maîtresse', '👩‍🏫', ['The teacher (f)', 'المعلّمة (مؤنّث)'], ['A female teacher.', 'معلّمة أنثى.'], [
      ['La maîtresse parle.', 'The teacher speaks.', 'المعلّمة تتكلّم.'],
      ['J’écoute la maîtresse.', 'I listen to the teacher.', 'أستمع للمعلّمة.'],
    ]),
  ],
  talk: {
    setting: ['Emma montre ses affaires à Lily.', 'Emma shows her things to Lily.', 'إيما تُري أغراضها لليلي.'],
    lines: [
      say('salma', 'Lily, j’ai un cahier neuf.', 'Lily, I have a new notebook.', 'ليلي، لديّ دفتر جديد.'),
      say('nour', 'Super ! Et un crayon ?', 'Great! And a pencil?', 'رائع! وقلم رصاص؟'),
    ],
  },
  grammar: {
    examples: ['[un] livre (a book)', '[le] livre (the book)', '[la] classe (the classroom, f.)'],
    question: ['The book: « ___ livre »', 'الكتاب: « ___ livre »'],
    options: [['le', 'le'], ['la', 'la'], ['un', 'un']],
    correct: 0,
    explanation: [
      'French has definite (le/la/les = the) and indefinite (un/une/des = a) articles. le is masculine, la is feminine, les is plural.',
      'الفرنسيّة فيها أدوات معرّفة (le/la/les = الـ) وأدوات تنكير (un/une/des = واحد). le للمذكّر، la للمؤنّث، les للجمع.',
    ],
  },
  transfer: {
    setting: ['Adam parle de sa classe à Sam.', 'Adam talks about his class to Sam.', 'آدم يتحدّث عن صفّه لسام.'],
    lines: [
      say('karim', 'Ma classe est grande !', 'My class is big!', 'صفّي كبير!'),
      say('zaid', 'Et ta maîtresse, elle est gentille ?', 'And your teacher, is she kind?', 'ومعلّمتك، هل هي طيّبة؟'),
    ],
  },
  write: {
    prompt: ['Say "I have a book".', 'قل «لديّ كتاب».'],
    mustInclude: ['livre'],
    model: "J’ai un livre.",
    frame: "J’ai un ___.",
  },
  drills: [
    ['___ livre est bleu.', ['Le', 'La', 'Les'], ['The book.', 'الكتاب.']],
    ['J’ai ___ cahier.', ['un', 'une', 'des'], ['A notebook.', 'دفتر.']],
    ['___ classe est grande.', ['La', 'Le', 'Un'], ['The classroom.', 'الصفّ.']],
  ],
})

const PLACE = stage({
  id: 'fr1-ecole-place',
  emoji: '📍',
  title: ['Où est le livre ?', 'Where is the book?', 'أين الكتاب؟'],
  setting: ['Les enfants cherchent leurs affaires.', 'The children look for their things.', 'الأطفال يبحثون عن أغراضهم.'],
  scene: [
    say('nour', 'Où est mon livre ?', 'Where is my book?', 'أين كتابي؟'),
    say('karim', 'Regarde, dans le sac !', 'Look, in the bag!', 'انظر، في الحقيبة!'),
    say('nour', 'Et mon crayon ?', 'And my pencil?', 'وقلم رصاصي؟'),
    say('salma', 'Sur la table !', 'On the table!', 'على الطاولة!'),
    say('zaid', 'Et le cahier, où est-il ?', 'And the notebook, where is it?', 'والدفتر، أين هو؟'),
    say('duck', 'Sous la chaise, regardez !', 'Under the chair, look!', 'تحت الكرسي، انظروا!'),
  ],
  phrases: [
    phrase('dans', '📥', ['In / inside', 'في / داخل'], ['Preposition of place.', 'حرف جرّ للمكان.'], [
      ['Dans le sac.', 'In the bag.', 'في الحقيبة.'],
      ['Dans la classe.', 'In the classroom.', 'في الصفّ.'],
    ]),
    phrase('sur', '⬆️', ['On / on top of', 'على / فوق'], ['Preposition of place.', 'حرف جرّ للمكان.'], [
      ['Sur la table.', 'On the table.', 'على الطاولة.'],
      ['Sur la chaise.', 'On the chair.', 'على الكرسي.'],
    ]),
    phrase('sous', '⬇️', ['Under / below', 'تحت'], ['Preposition of place.', 'حرف جرّ للمكان.'], [
      ['Sous la table.', 'Under the table.', 'تحت الطاولة.'],
      ['Sous la chaise.', 'Under the chair.', 'تحت الكرسي.'],
    ]),
    phrase('où est', '❓', ['Where is', 'أين'], ['To ask the location of something.', 'للسؤال عن مكان شيء.'], [
      ['Où est le livre ?', 'Where is the book?', 'أين الكتاب؟'],
      ['Où est le crayon ?', 'Where is the pencil?', 'أين قلم الرصاص؟'],
    ]),
    phrase('la table', '🪑', ['The table', 'الطاولة'], ['Where you work or eat.', 'حيث تعمل أو تأكل.'], [
      ['Le livre est sur la table.', 'The book is on the table.', 'الكتاب على الطاولة.'],
      ['La table est grande.', 'The table is big.', 'الطاولة كبيرة.'],
    ]),
    phrase('la chaise', '🪑', ['The chair', 'الكرسي'], ['Where you sit.', 'حيث تجلس.'], [
      ['La chaise est sous la table.', 'The chair is under the table.', 'الكرسي تحت الطاولة.'],
      ['La chaise est rouge.', 'The chair is red.', 'الكرسي أحمر.'],
    ]),
    phrase('regarde', '👀', ['Look', 'انظر'], ['The verb regarder, je form.', 'فعل regarder، صيغة الأمر.'], [
      ['Regarde ici !', 'Look here!', 'انظر هنا!'],
      ['Regarde le tableau.', 'Look at the board.', 'انظر إلى السبّورة.'],
    ]),
    phrase('cherche', '🔍', ['I look for', 'أبحث عن'], ['The verb chercher, je form.', 'فعل chercher، صيغة je.'], [
      ['Je cherche mon livre.', 'I look for my book.', 'أبحث عن كتابي.'],
      ['Cherche le crayon !', 'Look for the pencil!', 'ابحث عن قلم الرصاص!'],
    ]),
  ],
  talk: {
    setting: ['Lily cherche son crayon.', 'Lily looks for her pencil.', 'ليلي تبحث عن قلمها.'],
    lines: [
      say('nour', 'Je cherche mon crayon !', 'I look for my pencil!', 'أبحث عن قلمي!'),
      say('salma', 'Regarde, dans ton sac !', 'Look, in your bag!', 'انظري، في حقيبتك!'),
    ],
  },
  grammar: {
    examples: ['Le livre est [dans] le sac.', 'Le crayon est [sur] la table.', 'Le cahier est [sous] la chaise.'],
    question: ['The book is on the table: « Le livre est ___ la table. »', 'الكتاب على الطاولة: « Le livre est ___ la table. »'],
    options: [['sur', 'sur'], ['dans', 'dans'], ['sous', 'sous']],
    correct: 0,
    explanation: [
      'Prepositions of place: dans (in/inside), sur (on), sous (under). They tell where something is.',
      'حروف الجرّ للمكان: dans (في/داخل)، sur (على/فوق)، sous (تحت). تخبر أين يوجد الشيء.',
    ],
  },
  transfer: {
    setting: ['Sam range ses affaires.', 'Sam puts away his things.', 'سام يرتّب أغراضه.'],
    lines: [
            say('zaid', 'Mon livre est dans le sac.', 'My book is in the bag.', 'كتابي في الحقيبة.'),
      say('bear', 'Et le crayon, où est-il ?', 'And the pencil, where is it?', 'وقلم الرصاص، أين هو؟'),
    ],
  },
  write: {
    prompt: ['Say "the book is on the table".', 'قل «الكتاب على الطاولة».'],
    mustInclude: ['sur'],
    model: 'Le livre est sur la table.',
    frame: 'Le livre est ___ la table.',
  },
  drills: [
    ['Le livre est ___ le sac.', ['dans', 'sur', 'de'], ['In the bag.', 'في الحقيبة.']],
    ['Le crayon est ___ la table.', ['sur', 'dans', 'pour'], ['On the table.', 'على الطاولة.']],
    ['___ est le cahier ?', ['Où', 'Que', 'Qui'], ['Where is it?', 'أين هو؟']],
  ],
})

const QUESTION = stage({
  id: 'fr1-ecole-question',
  emoji: '❓',
  title: ["Qu’est-ce que c’est ?", 'What is it?', 'ما هذا؟'],
  setting: ['Le maître montre des objets et pose des questions.', 'The teacher shows objects and asks questions.', 'المعلّم يُري أشياءً ويسأل أسئلة.'],
  scene: [
    say('duck', 'Regardez ! Qu’est-ce que c’est ?', 'Look! What is it?', 'انظروا! ما هذا؟'),
    say('karim', 'C’est un livre !', 'It’s a book!', 'إنّه كتاب!'),
    say('duck', 'Et ici, qu’est-ce que c’est ?', 'And here, what is it?', 'وهنا، ما هذا؟'),
    say('nour', 'C’est une gomme !', 'It’s an eraser!', 'إنّها ممحاة!'),
    say('duck', 'Très bien ! Et ça ?', 'Very good! And this?', 'ممتاز! وهذا؟'),
        say('salma', 'C’est une règle, monsieur !', 'It’s a ruler, sir!', 'إنّها مسطرة يا سيّدي!'),
  ],
  phrases: [
    phrase("qu’est-ce que c’est ?", '❓', ['What is it?', 'ما هذا؟'], ['To ask what something is.', 'للسؤال عن شيء.'], [
      ['Qu’est-ce que c’est ?', 'What is it?', 'ما هذا؟'],
      ['Ça, qu’est-ce que c’est ?', 'That, what is it?', 'ذلك، ما هو؟'],
    ]),
    phrase("c’est un", '👉', ["It's a (m)", 'إنّه (مذكّر)'], ['Before a masculine noun.', 'قبل اسم مذكّر.'], [
      ['C’est un cahier.', 'It’s a notebook.', 'إنّه دفتر.'],
      ['C’est un crayon.', 'It’s a pencil.', 'إنّه قلم رصاص.'],
    ]),
    phrase("c’est une", '👉', ["It's a (f)", 'إنّها (مؤنّث)'], ['Before a feminine noun.', 'قبل اسم مؤنّث.'], [
      ['C’est une gomme.', 'It’s an eraser.', 'إنّها ممحاة.'],
      ['C’est une règle.', 'It’s a ruler.', 'إنّها مسطرة.'],
    ]),
    phrase('une gomme', '🧽', ['An eraser', 'ممحاة'], ['To erase mistakes.', 'للمحو الأخطاء.'], [
      ["J’ai une gomme.", 'I have an eraser.', 'لديّ ممحاة.'],
      ['Une gomme blanche.', 'A white eraser.', 'ممحاة بيضاء.'],
    ]),
    phrase('une règle', '📏', ['A ruler', 'مسطرة'], ['To draw straight lines.', 'لرسم خطوط مستقيمة.'], [
      ['Je dessine avec une règle.', 'I draw with a ruler.', 'أرسم بمسطرة.'],
      ['C'est une règle.', "It's a ruler.", 'إنّها مسطرة.'],
    ]),
    phrase('ça', '👉', ['This / that', 'هذا / ذلك'], ['Informal way to point.', 'طريقة غير رسميّة للإشارة.'], [
      ['Ça, c’est quoi ?', 'That, what is it?', 'ذلك، ما هو؟'],
      ['Regarde ça !', 'Look at that!', 'انظر إلى ذلك!'],
    ]),
    phrase('je dessine', '🎨', ['I draw', 'أرسم'], ['The verb dessiner, je form.', 'فعل dessiner، صيغة je.'], [
      ['Je dessine un chat.', 'I draw a cat.', 'أرسم قطًّا.'],
      ['Je dessine une fleur.', 'I draw a flower.', 'أرسم زهرة.'],
    ]),
    phrase("j’écris", '✍️', ['I write', 'أكتب'], ['The verb écrire, je form.', 'فعل écrire، صيغة je.'], [
      ["J’écris une lettre.", 'I write a letter.', 'أكتب رسالة.'],
      ['J’écris un mot.', 'I write a word.', 'أكتب كلمة.'],
    ]),
  ],
  talk: {
    setting: ['Emma demande ce qu’est un objet.', 'Emma asks what an object is.', 'إيما تسأل عن شيء ما.'],
    lines: [
      say('salma', 'Lily, qu’est-ce que c’est ?', 'Lily, what is it?', 'ليلي، ما هذا؟'),
      say('nour', 'C’est une règle, Emma !', 'It’s a ruler, Emma!', 'إنّها مسطرة يا إيما!'),
    ],
  },
  grammar: {
    examples: ['[C’est un] livre. (m.)', '[C’est une] gomme. (f.)', '[Qu’est-ce que c’est] ?'],
    question: ['Pointing at a book (m.): « ___ livre. »', 'مشيرًا إلى كتاب (مذكّر): « ___ livre. »'],
    options: [["C’est un", "C’est un"], ["C’est une", "C’est une"], ['C’est le', 'C’est le']],
    correct: 0,
    explanation: [
      'Use "qu’est-ce que c’est?" to ask what something is. Answer: c’est un (masculine) or c’est une (feminine).',
      'استخدم "qu’est-ce que c’est?" للسؤال عن شيء. والجواب: c’est un (مذكّر) أو c’est une (مؤنّث).',
    ],
  },
  transfer: {
    setting: ['Adam découvre un objet nouveau.', 'Adam discovers a new object.', 'آدم يكتشف شيئًا جديدًا.'],
    lines: [
      say('karim', 'Sam, qu’est-ce que c’est ?', 'Sam, what is it?', 'سام، ما هذا؟'),
      say('zaid', 'C’est une gomme !', 'It’s an eraser!', 'إنّها ممحاة!'),
    ],
  },
  write: {
    prompt: ['Ask "what is it?".', 'اسأل «ما هذا؟».'],
    mustInclude: ["qu’est-ce"],
    model: "Qu’est-ce que c’est ?",
    frame: "Qu’est-ce que ___ ?",
  },
  drills: [
    ['___ c’est ?', ['Qu’est-ce que', 'Où est', 'Qui est'], ['What is it?', 'ما هذا؟']],
    ['C’est ___ livre.', ['un', 'une', 'des'], ["It's a book.", 'إنّه كتاب.']],
    ['C’est ___ gomme.', ['une', 'un', 'le'], ["It's an eraser.", 'إنّها ممحاة.']],
  ],
})

export const FR_ECOLE = [FOURNITURES, PLACE, QUESTION]
