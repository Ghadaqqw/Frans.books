// ============================================================================
// French course · «Les vêtements» (home icon q1-l9) — three stages:
// clothing items → wearing them (je porte) → this/that (ce, cet, cette).
// Grammar met on the way: the verb porter (je porte / tu portes / il porte),
// possessive review (mon pantalon, ma robe), and demonstratives ce/cet/cette.
// ============================================================================

import { phrase, say, stage } from './kit'

const HABITS = stage({
  id: 'fr1-vet-habits',
  emoji: '👕',
  title: ['Mes vêtements', 'My clothes', 'ملابسي'],
  setting: ['Le matin, les enfants s’habillent.', 'In the morning, the children get dressed.', 'في الصباح، الأطفال يلبسون.'],
  scene: [
    say('cat', 'Dépêche-toi, Lily ! Habille-toi.', 'Hurry up, Lily! Get dressed.', 'أسرعي يا ليلي! البسي.'),
    say('nour', 'Je mets ma robe, maman.', 'I put on my dress, Mum.', 'ألبس فستاني يا أمّي.'),
    say('cat', 'Et un pantalon pour Sam ?', 'And trousers for Sam?', 'وبنطلون لسام؟'),
    say('zaid', 'Voici mon pantalon !', 'Here are my trousers!', 'هذا بنطلوني!'),
    say('karim', 'Et moi, je mets un pull.', 'And me, I put on a sweater.', 'وأنا ألبس كنزة.'),
    say('cat', 'N’oubliez pas votre manteau !', "Don't forget your coat!", 'لا تنسوا معاطفكم!'),
  ],
  phrases: [
    phrase('un pantalon', '👖', ['Trousers / pants', 'بنطلون'], ['Masculine, singular in French.', 'مذكّر، مفرد في الفرنسيّة.'], [
      ['Je mets un pantalon.', 'I put on trousers.', 'ألبس بنطلونًا.'],
      ['C'est un pantalon.', "It's trousers.", 'إنّه بنطلون.'],
    ]),
    phrase('une robe', '👗', ['A dress', 'فستان'], ['For a girl or woman.', 'لبنت أو امرأة.'], [
      ['Je mets une robe.', 'I put on a dress.', 'ألبس فستانًا.'],
      ['C'est une robe.', "It's a dress.", 'إنّه فستان.'],
    ]),
    phrase('un pull', '👕', ['A sweater / pullover', 'كنزة'], ['Warm clothing.', 'لباس دافئ.'], [
      ['J’ai un pull.', 'I have a sweater.', 'لديّ كنزة.'],
      ['C’est un pull.', 'It’s a sweater.', 'إنّها كنزة.'],
    ]),
    phrase('une veste', '🧥', ['A jacket', 'سترة'], ['A light coat.', 'معطف خفيف.'], [
      ['Je mets une veste.', 'I put on a jacket.', 'ألبس سترة.'],
      ['C'est une veste.', "It's a jacket.", 'إنّها سترة.'],
    ]),
    phrase('une chemise', '👔', ['A shirt', 'قميص'], ['For boys or men.', 'للأولاد أو الرجال.'], [
      ['Je mets une chemise.', 'I put on a shirt.', 'ألبس قميصًا.'],
      ['C'est une chemise.', "It's a shirt.", 'إنّه قميص.'],
    ]),
    phrase('des chaussures', '👟', ['Shoes', 'أحذية'], ['For the feet.', 'للقدمين.'], [
      ['Je mets des chaussures.', 'I put on shoes.', 'ألبس حذاء.'],
      ['Ce sont des chaussures.', "They're shoes.", 'إنّها أحذية.'],
    ]),
    phrase("je m’habille", '🧥', ['I get dressed', 'ألبس'], ['The verb s’habiller, je form.', 'فعل s’habiller، صيغة je.'], [
      ['Je m’habille le matin.', 'I get dressed in the morning.', 'ألبس في الصباح.'],
      ['Je m’habille vite !', 'I get dressed quickly!', 'ألبس بسرعة!'],
    ]),
    phrase('je mets', '👕', ['I put on / I wear', 'ألبس'], ['The verb mettre, je form.', 'فعل mettre، صيغة je.'], [
      ['Je mets ma robe.', 'I put on my dress.', 'ألبس فستاني.'],
      ['Je mets un pull.', 'I put on a sweater.', 'ألبس كنزة.'],
    ]),
  ],
  talk: {
    setting: ['Lily parle de sa robe à Emma.', 'Lily talks about her dress to Emma.', 'ليلي تتحدّث عن فستانها لإيما.'],
    lines: [
      say('nour', 'Regarde, ma robe est bleue !', 'Look, my dress is blue!', 'انظري، فستاني أزرق!'),
      say('salma', 'Elle est jolie, Lily !', 'It’s pretty, Lily!', 'إنّه جميل يا ليلي!'),
    ],
  },
  grammar: {
    examples: ['[un] pantalon (m.)', '[une] robe (f.)', '[des] chaussures (plural)'],
    question: ['A dress: « ___ robe »', 'فستان: « ___ robe »'],
    options: [['une', 'une'], ['un', 'un'], ['des', 'des']],
    correct: 0,
    explanation: [
      'Each clothing item is masculine or feminine: un pantalon, un pull (m.); une robe, une chemise (f.); des chaussures (plural).',
      'كلّ قطعة ملابس مذكّرة أو مؤنّثة: un pantalon، un pull (مذكّر)؛ une robe، une chemise (مؤنّث)؛ des chaussures (جمع).',
    ],
  },
  transfer: {
    setting: ['Sam parle de ses vêtements à Adam.', 'Sam talks about his clothes to Adam.', 'سام يتحدّث عن ملابسه لآدم.'],
    lines: [
            say('zaid', 'Mon pantalon est bleu.', 'My trousers are blue.', 'بنطلوني أزرق.'),
      say('karim', 'Et ton pull, Sam ?', 'And your sweater, Sam?', 'وكنزتك يا سام؟'),
    ],
  },
  write: {
    prompt: ['Say "I put on a dress".', 'قل «ألبس فستانًا».'],
    mustInclude: ['robe'],
    model: 'Je mets une robe.',
    frame: 'Je mets une ___.',
  },
  drills: [
    ['Mon ___ est bleu.', ['pantalon', 'robe', 'chaussures'], ['Trousers.', 'بنطلون.']],
    ['Ma ___ est jolie.', ['robe', 'pantalon', 'pull'], ['Dress.', 'فستان.']],
    ['Je mets un ___.', ['pull', 'robe', 'chemise'], ['A sweater.', 'كنزة.']],
  ],
})

const PORTER = stage({
  id: 'fr1-vet-porter',
  emoji: '🧍',
  title: ['Je porte', 'I wear', 'أنا ألبس'],
  setting: ['En classe, les enfants décrivent leurs vêtements.', 'In class, the children describe their clothes.', 'في الصف، الأطفال يصفّون ملابسهم.'],
  scene: [
        say('duck', "Aujourd’hui, décrivez vos vêtements.", 'Today, describe your clothes.', 'اليوم، صِفوا ملابسكم.'),
        say('karim', 'Je porte un pantalon noir.', 'I wear black trousers.', 'ألبس بنطلونًا أسود.'),
        say('salma', 'Moi, je porte une robe rouge.', 'Me, I wear a red dress.', 'أنا ألبس فستانًا أحمر.'),
    say('nour', 'Tu portes quoi, Sam ?', 'What do you wear, Sam?', 'ماذا تلبس يا سام؟'),
        say('zaid', 'Je porte un pull bleu.', 'I wear a blue sweater.', 'ألبس كنزة زرقاء.'),
        say('duck', 'Très bien ! Et toi, Emma ?', 'Very good! And you, Emma?', 'ممتاز! وأنتِ يا إيما؟'),
  ],
  phrases: [
    phrase('je porte', '🧍', ['I wear', 'ألبس'], ['The verb porter, je form.', 'فعل porter، صيغة je.'], [
      ['Je porte un pull.', 'I wear a sweater.', 'ألبس كنزة.'],
      ['Je porte une chemise.', 'I wear a shirt.', 'ألبس قميصًا.'],
    ]),
    phrase('tu portes', '🤔', ['You wear', 'تلبس'], ['To a friend or child.', 'لصديق أو طفل.'], [
      ['Tu portes quoi ?', 'What do you wear?', 'ماذا تلبس؟'],
      ['Tu portes une robe.', 'You wear a dress.', 'أنت تلبسين فستانًا.'],
    ], 'friendly'),
    phrase('il porte', '👨', ['He wears', 'يلبس'], ['For a male.', 'للمذكّر.'], [
      ['Il porte un pantalon.', 'He wears trousers.', 'هو يلبس بنطلونًا.'],
      ['Il porte un manteau.', 'He wears a coat.', 'هو يلبس معطفًا.'],
    ]),
    phrase('elle porte', '👩', ['She wears', 'تلبس'], ['For a female.', 'للمؤنّث.'], [
      ['Elle porte une robe.', 'She wears a dress.', 'هي تلبس فستانًا.'],
      ['Elle porte des chaussures.', 'She wears shoes.', 'هي تلبس حذاء.'],
    ]),
    phrase('propre', '✨', ['Clean', 'نظيف'], ['Not dirty.', 'غير متّسخ.'], [
      ['La chemise est propre.', 'The shirt is clean.', 'القميص نظيف.'],
      ['Un pantalon propre.', 'Clean trousers.', 'بنطلون نظيف.'],
    ]),
    phrase('joli', '✨', ['Pretty (m)', 'جميل (مذكّر)'], ['Nice to look at.', 'جميل المنظر.'], [
      ['Un pull joli.', 'A pretty sweater.', 'كنزة جميلة.'],
      ['Le pantalon est joli.', 'The trousers are pretty.', 'البنطلون جميل.'],
    ]),
    phrase('long', '📏', ['Long (m)', 'طويل (مذكّر)'], ['For a masculine noun.', 'لاسم مذكّر.'], [
      ['Un pantalon long.', 'Long trousers.', 'بنطلون طويل.'],
      ['Le pull est long.', 'The sweater is long.', 'الكنزة طويلة.'],
    ]),
    phrase('je décris', '📝', ['I describe', 'أصف'], ['The verb décrire, je form.', 'فعل décrire، صيغة je.'], [
      ['Je décris ma robe.', 'I describe my dress.', 'أصف فستاني.'],
      ['Je décris mes vêtements.', 'I describe my clothes.', 'أصف ملابسي.'],
    ]),
  ],
  talk: {
    setting: ['Emma décrit ses vêtements à Lily.', 'Emma describes her clothes to Lily.', 'إيما تصف ملابسها لليلي.'],
    lines: [
            say('salma', 'Je porte une robe rouge.', 'I wear a red dress.', 'ألبس فستانًا أحمر.'),
      say('nour', 'Et moi, je porte une robe bleue !', 'And me, I wear a blue dress!', 'وأنا ألبس فستانًا أزرق!'),
    ],
  },
  grammar: {
    examples: ['[Je] porte un pull.', '[Tu] portes quoi ?', '[Elle] porte une robe.'],
    question: ['You wear a sweater: « ___ porte un pull. »', 'أنت تلبس كنزة: « ___ porte un pull. »'],
    options: [['Je', 'Je'], ['Tu', 'Tu'], ['Il', 'Il']],
    correct: 0,
    explanation: [
      'The verb porter (to wear): je porte, tu portes, il/elle porte. Like manger, only tu adds -s.',
      'فعل porter (يلبس): je porte، tu portes، il/elle porte. مثل manger، فقط tu تضيف s.'],
  },
  transfer: {
    setting: ['Adam décrit sa tenue à Mia.', 'Adam describes his outfit to Mia.', 'آدم يصف زيّه لميا.'],
    lines: [
      say('karim', 'Je porte un pull bleu, Mia.', 'I wear a blue sweater, Mia.', 'ألبس كنزة زرقاء يا ميا.'),
      say('rana', 'Très joli, Adam !', 'Very nice, Adam!', 'جميل جدًّا يا آدم!'),
    ],
  },
  write: {
    prompt: ['Say "I wear a blue sweater".', 'قل «ألبس كنزة زرقاء».'],
    mustInclude: ['porte', 'bleu'],
    model: 'Je porte un pull bleu.',
    frame: 'Je porte un pull ___.',
  },
  drills: [
    ['Je ___ un pull.', ['porte', 'portes', 'porter'], ['I wear.', 'ألبس.']],
    ['Tu ___ quoi ?', ['portes', 'porte', 'porter'], ['You wear.', 'تلبس.']],
    ['Un pantalon ___.', ['noir', 'noire', 'noirs'], ['Black (m).', 'أسود (مذكّر).']],
  ],
})

const DEMONSTRATIFS = stage({
  id: 'fr1-vet-demonstratifs',
  emoji: '👉',
  title: ['Ce pull, cette robe', 'This sweater, this dress', 'هذه الكنزة، هذا الفستان'],
  setting: ['Au magasin, les enfants choisissent des vêtements.', 'At the shop, the children choose clothes.', 'في المتجر، الأطفال يختارون ملابس.'],
  scene: [
    say('peacock', 'Bonjour ! Vous cherchez quoi ?', 'Hello! What are you looking for?', 'مرحبًا! عمّا تبحثون؟'),
    say('salma', 'Je voudrais ce pull, s’il vous plaît.', 'I would like this sweater, please.', 'أودّ هذه الكنزة من فضلك.'),
    say('peacock', 'Voici ce pull bleu.', 'Here is this blue sweater.', 'هذه كنزة زرقاء.'),
    say('nour', 'Et cette robe, elle est jolie !', 'And this dress, it’s pretty!', 'وهذا الفستان، إنّه جميل!'),
    say('zaid', 'Moi, je veux ce pantalon noir.', 'Me, I want these black trousers.', 'أنا أريد هذا البنطلون الأسود.'),
    say('peacock', 'Très bon choix !', 'Very good choice!', 'اختيار ممتاز!'),
  ],
  phrases: [
    phrase('ce', '👉', ['This / that (m)', 'هذا (مذكّر)'], ['Before a masculine noun.', 'قبل اسم مذكّر.'], [
      ['Ce pull est bleu.', 'This sweater is blue.', 'هذه الكنزة زرقاء.'],
      ['Ce pantalon est noir.', 'These trousers are black.', 'هذا البنطلون أسود.'],
    ]),
    phrase('cet', '👉', ['This (m, before vowel)', 'هذا (مذكّر، قبل حرف متحرّك)'], ['Before a masculine noun starting with a vowel.', 'قبل اسم مذكّر يبدأ بحرف متحرّك.'], [
      ['Cet anorak est chaud.', 'This anorak is warm.', 'هذا المعطف الدافئ دافئ.'],
      ['Cet habit est joli.', 'This outfit is pretty.', 'هذا الزيّ جميل.'],
    ]),
    phrase('cette', '👉', ['This / that (f)', 'هذه (مؤنّث)'], ['Before a feminine noun.', 'قبل اسم مؤنّث.'], [
      ['Cette robe est rouge.', 'This dress is red.', 'هذا الفستان أحمر.'],
      ['Cette chemise est blanche.', 'This shirt is white.', 'هذا القميص أبيض.'],
    ]),
    phrase('ce pull', '👕', ['This sweater', 'هذه الكنزة'], ['Demonstrative + masculine noun.', 'إشارة + اسم مذكّر.'], [
      ['Je veux ce pull.', 'I want this sweater.', 'أريد هذه الكنزة.'],
      ['Ce pull est joli.', 'This sweater is pretty.', 'هذه الكنزة جميلة.'],
    ]),
    phrase('cette robe', '👗', ['This dress', 'هذا الفستان'], ['Demonstrative + feminine noun.', 'إشارة + اسم مؤنّث.'], [
      ['Cette robe est bleue.', 'This dress is blue.', 'هذا الفستان أزرق.'],
      ['J’aime cette robe.', 'I like this dress.', 'أحبّ هذا الفستان.'],
    ]),
    phrase('le choix', '✨', ['The choice', 'الاختيار'], ['Picking what you want.', 'اختيار ما تريد.'], [
      ['Le choix est bon.', 'The choice is good.', 'الاختيار جيّد.'],
      ['C’est le choix.', "It’s the choice.", 'هذا هو الاختيار.'],
    ]),
    phrase('le magasin', '🏪', ['The shop', 'المتجر'], ['Where you buy clothes.', 'حيث تشتري الملابس.'], [
      ['Le magasin est grand.', 'The shop is big.', 'المتجر كبير.'],
      ['Le magasin est ouvert.', 'The shop is open.', 'المتجر مفتوح.'],
    ]),
    phrase('vous cherchez', '🤔', ['You look for (polite or plural)', 'تبحثون (مهذّب أو جمع)'], ['To a customer or group.', 'للزبون أو لمجموعة.'], [
      ['Vous cherchez quoi ?', 'What do you look for?', 'عمّا تبحثون؟'],
      ['Vous cherchez un pull ?', 'Do you look for a sweater?', 'هل تبحثون عن كنزة؟'],
    ], 'formal'),
  ],
  talk: {
    setting: ['Emma choisit une robe au magasin.', 'Emma chooses a dress at the shop.', 'إيما تختار فستانًا في المتجر.'],
    lines: [
      say('salma', 'Cette robe est jolie !', 'This dress is pretty!', 'هذا الفستان جميل!'),
      say('peacock', 'Oui, très joli choix !', 'Yes, very pretty choice!', 'نعم، اختيار جميل جدًّا!'),
    ],
  },
  grammar: {
    examples: ['[ce] pull (m.)', '[cet] anorak (m. + vowel)', '[cette] robe (f.)'],
    question: ['This dress: « ___ robe »', 'هذا الفستان: « ___ robe »'],
    options: [['cette', 'cette'], ['ce', 'ce'], ['cet', 'cet']],
    correct: 0,
    explanation: [
      'Demonstrative adjectives: ce (masculine), cet (masculine before a vowel), cette (feminine). They point to something: this, that, these.',
      'صفات الإشارة: ce (مذكّر)، cet (مذكّر قبل حرف متحرّك)، cette (مؤنّث). تشير إلى شيء: هذا، هذه.'],
  },
  transfer: {
    setting: ['Lily montre sa nouvelle robe à Sam.', 'Lily shows her new dress to Sam.', 'ليلي تُري فستانها الجديد لسام.'],
    lines: [
      say('nour', 'Regarde, cette robe est rouge !', 'Look, this dress is red!', 'انظر، هذا الفستان أحمر!'),
      say('zaid', 'Elle est super, Lily !', 'It’s great, Lily!', 'إنّه رائع يا ليلي!'),
    ],
  },
  write: {
    prompt: ['Say "this dress is pretty".', 'قل «هذا الفستان جميل».'],
    mustInclude: ['cette'],
    model: 'Cette robe est jolie.',
    frame: 'Cette robe est ___.',
  },
  drills: [
    ['___ pull est bleu.', ['Ce', 'Cet', 'Cette'], ['This sweater.', 'هذه الكنزة.']],
    ['___ robe est rouge.', ['Cette', 'Ce', 'Cet'], ['This dress.', 'هذا الفستان.']],
    ['Vous ___ quoi ?', ['cherchez', 'cherches', 'cherche'], ['You look for.', 'تبحثون عن.']],
  ],
})

export const FR_VETEMENTS = [HABITS, PORTER, DEMONSTRATIFS]
