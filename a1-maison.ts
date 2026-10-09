// ============================================================================
// French course · «La maison» (home icon q1-l11) — three stages:
// rooms of the house → furniture (il y a) → where? (où? + prépositions).
// Grammar met on the way: rooms (feminine/masculine), il y a for "there is",
// and où? with prepositions (dans, sur, sous, à).
// ============================================================================

import { phrase, say, stage } from './kit'

const PIECES = stage({
  id: 'fr1-mais-pieces',
  emoji: '🏠',
  title: ['La maison', 'The house', 'البيت'],
  setting: ['Sam visite la maison de Lily.', 'Sam visits Lily’s house.', 'سام يزور بيت ليلي.'],
  scene: [
    say('zaid', 'Ta maison est grande, Lily !', 'Your house is big, Lily!', 'بيتك كبير يا ليلي!'),
    say('nour', 'Merci ! Voici la cuisine.', 'Thanks! Here is the kitchen.', 'شكرًا! هذا المطبخ.'),
    say('zaid', 'Et là, c’est quoi ?', 'And there, what is it?', 'وهناك، ما هذا؟'),
    say('nour', 'C’est ma chambre !', 'It’s my bedroom!', 'إنّها غرفتي!'),
    say('zaid', 'Et le salon ?', 'And the living room?', 'وغرفة الجلوس؟'),
    say('nour', 'Le salon est là, regarde !', 'The living room is there, look!', 'غرفة الجلوس هناك، انظر!'),
  ],
  phrases: [
    phrase('la maison', '🏠', ['The house', 'البيت'], ['Where you live.', 'حيث تعيش.'], [
      ['La maison est grande.', 'The house is big.', 'البيت كبير.'],
      ['La maison est ici.', 'The house is here.', 'البيت هنا.'],
    ]),
    phrase('la cuisine', '🍳', ['The kitchen', 'المطبخ'], ['Where you cook.', 'حيث تطبخ.'], [
      ['La cuisine est petite.', 'The kitchen is small.', 'المطبخ صغير.'],
      ['Maman est dans la cuisine.', 'Mum is in the kitchen.', 'أمّي في المطبخ.'],
    ]),
    phrase('la chambre', '🛏️', ['The bedroom', 'الغرفة'], ['Where you sleep.', 'حيث تنام.'], [
      ['La chambre est bleue.', 'The bedroom is blue.', 'الغرفة زرقاء.'],
      ['La chambre est grande.', 'The bedroom is big.', 'الغرفة كبيرة.'],
    ]),
    phrase('le salon', '🛋️', ['The living room', 'غرفة الجلوس'], ['Where the family gathers.', 'حيث تجتمع العائلة.'], [
      ['Le salon est confortable.', 'The living room is comfortable.', 'غرفة الجلوس مريحة.'],
      ['On mange dans le salon.', 'We eat in the living room.', 'نأكل في غرفة الجلوس.'],
    ]),
    phrase('la salle de bain', '🚿', ['The bathroom', 'الحمّام'], ['Where you wash.', 'حيث تغتسل.'], [
      ['La salle de bain est propre.', 'The bathroom is clean.', 'الحمّام نظيف.'],
      ['Je me lave dans la salle de bain.', 'I wash in the bathroom.', 'أغتسل في الحمّام.'],
    ]),
    phrase('les toilettes', '🚽', ['The toilet', 'المرحاض'], ['Plural in French.', 'جمع في الفرنسيّة.'], [
      ['Les toilettes sont là.', 'The toilet is there.', 'المرحاض هناك.'],
      ['Où sont les toilettes ?', 'Where is the toilet?', 'أين المرحاض؟'],
    ]),
    phrase("c’est quoi", '❓', ["What is it?", 'ما هذا؟'], ['Informal way to ask.', 'طريقة غير رسميّة للسؤال.'], [
      ['C’est quoi, ça ?', 'What is it, that?', 'ما هذا؟'],
      ['C’est quoi, ici ?', 'What is it, here?', 'ما هذا هنا؟'],
    ], 'friendly'),
    phrase('je visite', '🚪', ['I visit', 'أزور'], ['The verb visiter, je form.', 'فعل visiter، صيغة je.'], [
      ['Je visite la maison.', 'I visit the house.', 'أزور البيت.'],
      ['Je visite une ville.', 'I visit a city.', 'أزور مدينة.'],
    ]),
  ],
  talk: {
    setting: ['Emma parle de sa maison à Lily.', 'Emma talks about her house to Lily.', 'إيما تتحدّث عن بيتها لليلي.'],
    lines: [
      say('salma', 'Ma maison a un grand salon !', 'My house has a big living room!', 'بيتي فيه غرفة جلوس كبيرة!'),
      say('nour', 'Cool ! Et une chambre bleue ?', 'Cool! And a blue bedroom?', 'رائع! وغرفة زرقاء؟'),
    ],
  },
  grammar: {
    examples: ['[la] cuisine (f.)', '[le] salon (m.)', '[la] chambre (f.)'],
    question: ['The kitchen: « ___ cuisine »', 'المطبخ: « ___ cuisine »'],
    options: [['la', 'la'], ['le', 'le'], ['les', 'les']],
    correct: 0,
    explanation: [
      'Each room is masculine or feminine: la cuisine, la chambre, la salle de bain (f.); le salon (m.); les toilettes (plural).',
      'كلّ غرفة مذكّرة أو مؤنّثة: la cuisine، la chambre، la salle de bain (مؤنّث)؛ le salon (مذكّر)؛ les toilettes (جمع).',
    ],
  },
  transfer: {
    setting: ['Adam décrit sa maison à Mia.', 'Adam describes his house to Mia.', 'آدم يصف بيته لميا.'],
    lines: [
      say('karim', 'Ma maison a trois chambres !', 'My house has three bedrooms!', 'بيتي فيه ثلاث غرف!'),
      say('rana', 'Waouh ! C’est grand, Adam !', 'Wow! It’s big, Adam!', 'واو! إنّه كبير يا آدم!'),
    ],
  },
  write: {
    prompt: ['Say "my house is big".', 'قل «بيتي كبير».'],
    mustInclude: ['maison'],
    model: 'La maison est grande.',
    frame: 'La ___ est grande.',
  },
  drills: [
    ['La ___ est petite.', ['cuisine', 'salon', 'toilettes'], ['The kitchen.', 'المطبخ.']],
    ['Le ___ est confortable.', ['salon', 'cuisine', 'chambre'], ['The living room.', 'غرفة الجلوس.']],
    ['___ quoi, ça ?', ["C’est", 'Où', 'Qui'], ['What is it?', 'ما هذا؟']],
  ],
})

const MEUBLES = stage({
  id: 'fr1-mais-meubles',
  emoji: '🛋️',
  title: ['Il y a un lit', 'There is a bed', 'يوجد سرير'],
  setting: ['Dans la chambre, Sam découvre les meubles.', 'In the bedroom, Sam discovers the furniture.', 'في الغرفة، سام يكتشف الأثاث.'],
  scene: [
    say('nour', 'Dans ma chambre, il y a un lit.', 'In my bedroom, there is a bed.', 'في غرفتي، يوجد سرير.'),
    say('zaid', 'Et là, c’est quoi ?', 'And there, what is it?', 'وهناك، ما هذا؟'),
    say('nour', 'C’est une table !', 'It’s a table!', 'إنّها طاولة!'),
    say('zaid', 'Et une chaise pour s’asseoir ?', 'And a chair to sit?', 'وكرسي للجلوس؟'),
    say('nour', 'Oui ! Et un placard pour les habits.', 'Yes! And a closet for clothes.', 'نعم! وخزانة للملابس.'),
    say('zaid', 'Ta chambre est super !', 'Your bedroom is great!', 'غرفتك رائعة!'),
  ],
  phrases: [
    phrase('un lit', '🛏️', ['A bed', 'سرير'], ['Where you sleep.', 'حيث تنام.'], [
      ['Il y a un lit.', 'There is a bed.', 'يوجد سرير.'],
      ['C'est un lit.', "It's a bed.", 'إنّه سرير.'],
    ]),
    phrase('une armoire', '🗄️', ['A wardrobe', 'خزانة ملابس'], ['For storing clothes.', 'لخزن الملابس.'], [
      ['Il y a une armoire.', 'There is a wardrobe.', 'يوجد خزانة ملابس.'],
      ['C’est une armoire.', 'It’s a wardrobe.', 'إنّها خزانة ملابس.'],
    ]),
    phrase('une chaise', '🪑', ['A chair', 'كرسي'], ['Where you sit.', 'حيث تجلس.'], [
      ['Il y a une chaise.', 'There is a chair.', 'يوجد كرسي.'],
      ['Une chaise est là.', 'A chair is there.', 'كرسي هناك.'],
    ]),
    phrase('un placard', '🗄️', ['A closet / cupboard', 'خزانة'], ['Where you store things.', 'حيث تخزّن الأشياء.'], [
      ['Il y a un placard.', 'There is a closet.', 'يوجد خزانة.'],
      ['C'est un placard.', "It's a closet.", 'إنّها خزانة.'],
    ]),
    phrase('une porte', '🚪', ['A door', 'باب'], ['To enter or leave a room.', 'للدخول أو الخروج من غرفة.'], [
      ['Il y a une porte.', 'There is a door.', 'يوجد باب.'],
      ['C'est une porte.', "It's a door.", 'إنّه باب.'],
    ]),
    phrase('une fenêtre', '🪟', ['A window', 'نافذة'], ['To see outside and get air.', 'لترى الخارج وتحصل على الهواء.'], [
      ['Il y a une fenêtre.', 'There is a window.', 'يوجد نافذة.'],
      ['C'est une fenêtre.', "It's a window.", 'إنّها نافذة.'],
    ]),
    phrase('les meubles', '🛋️', ['Furniture', 'أثاث'], ['Things in a house.', 'أشياء في البيت.'], [
      ['Les meubles sont jolis.', 'The furniture is pretty.', 'الأثاث جميل.'],
      ['J’aime les meubles.', 'I like the furniture.', 'أحبّ الأثاث.'],
    ]),
    phrase("je m’assois", '🪑', ['I sit', 'أجلس'], ['The verb s’asseoir, je form.', 'فعل s’asseoir، صيغة je.'], [
      ['Je m’assois sur la chaise.', 'I sit on the chair.', 'أجلس على الكرسي.'],
      ['Je m’assois ici !', 'I sit here!', 'أجلس هنا!'],
    ]),
  ],
  talk: {
    setting: ['Emma décrit sa chambre à Lily.', 'Emma describes her bedroom to Lily.', 'إيما تصف غرفتها لليلي.'],
    lines: [
            say('salma', 'Dans ma chambre, il y a un lit.', 'In my bedroom, there is a bed.', 'في غرفتي، يوجد سرير.'),
      say('nour', 'Et une fenêtre, Emma ?', 'And a window, Emma?', 'ونافذة يا إيما؟'),
    ],
  },
  grammar: {
    examples: ['Il y a [un] lit. (m.)', 'Il y a [une] table. (f.)', 'Il y a [des] meubles. (plural)'],
    question: ['There is a table: « Il y a ___ table. »', 'يوجد طاولة: « Il y a ___ table. »'],
    options: [['une', 'une'], ['un', 'un'], ['des', 'des']],
    correct: 0,
    explanation: [
      'Use "il y a" to say "there is" or "there are". It is followed by un/une/des or le/la/les: il y a un lit, il y a une table.',
      'نستخدم "il y a" لقول «يوجد». يليها un/une/des أو le/la/les: il y a un lit، il y a une table.',
    ],
  },
  transfer: {
    setting: ['Adam montre sa chambre à Sam.', 'Adam shows his bedroom to Sam.', 'آدم يُري غرفته لسام.'],
    lines: [
      say('karim', 'Regarde, il y a un lit et une table.', 'Look, there is a bed and a table.', 'انظر، يوجد سرير وطاولة.'),
      say('zaid', 'Et une fenêtre, Adam ?', 'And a window, Adam?', 'ونافذة يا آدم؟'),
    ],
  },
  write: {
    prompt: ['Say "there is a bed".', 'قل «يوجد سرير».'],
    mustInclude: ['lit'],
    model: 'Il y a un lit.',
    frame: 'Il y a un ___.',
  },
  drills: [
    ['Il y a ___ lit.', ['un', 'une', 'des'], ['A bed.', 'سرير.']],
    ['Il y a ___ table.', ['une', 'un', 'des'], ['A table.', 'طاولة.']],
    ['Il y a ___ meubles.', ['des', 'un', 'une'], ['Furniture.', 'أثاث.']],
  ],
})

const OU = stage({
  id: 'fr1-mais-ou',
  emoji: '📍',
  title: ['Où est le lit ?', 'Where is the bed?', 'أين السرير؟'],
  setting: ['Sam cherche les meubles dans la maison.', 'Sam looks for the furniture in the house.', 'سام يبحث عن الأثاث في البيت.'],
  scene: [
    say('zaid', 'Lily, où est le lit ?', 'Lily, where is the bed?', 'ليلي، أين السرير؟'),
    say('nour', 'Le lit est dans la chambre.', 'The bed is in the bedroom.', 'السرير في الغرفة.'),
    say('zaid', 'Et la table ?', 'And the table?', 'والطاولة؟'),
    say('nour', 'La table est dans le salon.', 'The table is in the living room.', 'الطاولة في غرفة الجلوس.'),
    say('zaid', 'Où sont les chaussures ?', 'Where are the shoes?', 'أين الأحذية؟'),
    say('nour', 'Sous le lit, regarde !', 'Under the bed, look!', 'تحت السرير، انظر!'),
  ],
  phrases: [
    phrase('où', '❓', ['Where', 'أين'], ['To ask the location.', 'للسؤال عن المكان.'], [
      ['Où est le lit ?', 'Where is the bed?', 'أين السرير؟'],
      ['Où est la table ?', 'Where is the table?', 'أين الطاولة؟'],
    ]),
    phrase('ici', '📍', ['Here', 'هنا'], ['At this place.', 'في هذا المكان.'], [
      ['Le lit est ici.', 'The bed is here.', 'السرير هنا.'],
      ['Viens ici !', 'Come here!', 'تعال إلى هنا!'],
    ]),
    phrase('là', '👉', ['There', 'هناك'], ['At that place.', 'في ذلك المكان.'], [
      ['La table est là.', 'The table is there.', 'الطاولة هناك.'],
      ['Regarde là !', 'Look there!', 'انظر هناك!'],
    ]),
    phrase('à droite', '➡️', ['On the right', 'على اليمين'], ['To your right side.', 'على جانبك الأيمن.'], [
      ['À droite, la chambre.', 'On the right, the bedroom.', 'على اليمين، الغرفة.'],
      ['Le lit est à droite.', 'The bed is on the right.', 'السرير على اليمين.'],
    ]),
    phrase('à gauche', '⬅️', ['On the left', 'على اليسار'], ['To your left side.', 'على جانبك الأيسر.'], [
      ['À gauche, le salon.', 'On the left, the living room.', 'على اليسار، غرفة الجلوس.'],
      ['La porte est à gauche.', 'The door is on the left.', 'الباب على اليسار.'],
    ]),
    phrase('près de', '📍', ['Near', 'بالقرب من'], ['Close to something.', 'قريب من شيء.'], [
      ['Le lit est près de la porte.', 'The bed is near the door.', 'السرير قريب من الباب.'],
      ['Près de la fenêtre !', 'Near the window!', 'بالقرب من النافذة!'],
    ]),
    phrase('loin de', '🚶', ['Far from', 'بعيد عن'], ['Not close to something.', 'ليس قريبًا من شيء.'], [
      ['La cuisine est loin de la chambre.', 'The kitchen is far from the bedroom.', 'المطبخ بعيد عن الغرفة.'],
      ['Loin de la porte !', 'Far from the door!', 'بعيد عن الباب!'],
    ]),
    phrase("j’entre", '🚪', ['I enter', 'أدخل'], ['The verb entrer, je form.', 'فعل entrer، صيغة je.'], [
      ["J’entre dans la maison.", 'I enter the house.', 'أدخل البيت.'],
      ["J’entre avec Sam.", 'I enter with Sam.', 'أدخل مع سام.'],
    ]),
  ],
  talk: {
    setting: ['Emma cherche la salle de bain.', 'Emma looks for the bathroom.', 'إيما تبحث عن الحمّام.'],
    lines: [
      say('salma', 'Où est la salle de bain, Lily ?', 'Where is the bathroom, Lily?', 'أين الحمّام يا ليلي؟'),
      say('nour', 'À droite, Emma !', 'On the right, Emma!', 'على اليمين يا إيما!'),
    ],
  },
  grammar: {
    examples: ['Le lit est [dans] la chambre.', 'La table est [à] droite.', 'Le lit est [près de] la porte.'],
    question: ['The bed is near the door: « Le lit est ___ la porte. »', 'السرير قريب من الباب: « Le lit est ___ la porte. »'],
    options: [['près de', 'près de'], ['loin de', 'loin de'], ['dans', 'dans']],
    correct: 0,
    explanation: [
      'Place words: où (where), ici (here), là (there), à droite (right), à gauche (left), près de (near), loin de (far from).',
      'كلمات المكان: où (أين)، ici (هنا)، là (هناك)، à droite (يمين)، à gauche (يسار)، près de (قرب)، loin de (بعيد عن).',
    ],
  },
  transfer: {
    setting: ['Adam décrit sa chambre à Mia.', 'Adam describes his bedroom to Mia.', 'آدم يصف غرفته لميا.'],
    lines: [
            say('karim', 'Mon lit est près de la fenêtre.', 'My bed is near the window.', 'سريري قريب من النافذة.'),
      say('rana', 'Et la porte, où est-elle ?', 'And the door, where is it?', 'والباب، أين هو؟'),
    ],
  },
  write: {
    prompt: ['Say "the bed is here".', 'قل «السرير هنا».'],
    mustInclude: ['ici'],
    model: 'Le lit est ici.',
    frame: 'Le lit est ___.',
  },
  drills: [
    ['Le lit est ___.', ['ici', 'où', 'dans'], ['Here.', 'هنا.']],
    ['La chambre est à ___.', ['droite', 'ici', 'là'], ['On the right.', 'على اليمين.']],
    ['Le lit est ___ de la porte.', ['près', 'loin', 'dans'], ['Near.', 'قريب.']],
  ],
})

export const FR_MAISON = [PIECES, MEUBLES, OU]
