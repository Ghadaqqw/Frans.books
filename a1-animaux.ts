// ============================================================================
// French course · «Les animaux» (home icon q1-l10) — three stages:
// pets and farm animals → masculine/feminine (chat/chatte) → describing
// animals. Grammar met on the way: c’est un/une, the feminine of animal
// names (-e or special), and adjective agreement (grand/grande).
// ============================================================================

import { phrase, say, stage } from './kit'

const ANIMAUX_DOMESTIQUES = stage({
  id: 'fr1-anim-domestiques',
  emoji: '🐱',
  title: ['Les animaux', 'Animals', 'الحيوانات'],
  setting: ['À la ferme, les enfants découvrent les animaux.', 'At the farm, the children discover the animals.', 'في المزرعة، الأطفال يكتشفون الحيوانات.'],
  scene: [
    say('duck', 'Regardez les animaux de la ferme !', 'Look at the farm animals!', 'انظروا إلى حيوانات المزرعة!'),
    say('karim', 'C’est un chat ! Il est mignon.', 'It’s a cat! It’s cute.', 'إنّه قطّ! إنّه لطيف.'),
    say('nour', 'Et là, c’est un chien !', 'And there, it’s a dog!', 'وهناك، إنّه كلب!'),
    say('salma', 'Regarde, un cheval grand !', 'Look, a big horse!', 'انظر، حصان كبير!'),
    say('zaid', 'Et une vache pour le lait !', 'And a cow for milk!', 'وبقرة للحليب!'),
    say('duck', 'Oui ! La vache est gentille.', 'Yes! The cow is kind.', 'نعم! البقرة طيّبة.'),
  ],
  phrases: [
    phrase('un chat', '🐱', ['A cat', 'قطّ'], ['A small pet that says miaou.', 'حيوان أليف صغير يقول مياو.'], [
      ['C’est un chat.', 'It’s a cat.', 'إنّه قطّ.'],
      ['Un chat gris.', 'A gray cat.', 'قطّ رماديّ.'],
    ]),
    phrase('un chien', '🐶', ['A dog', 'كلب'], ['A pet that says wouf.', 'حيوان أليف يقول ووف.'], [
      ['C’est un chien.', 'It’s a dog.', 'إنّه كلب.'],
      ['Un chien mignon.', 'A cute dog.', 'كلب لطيف.'],
    ]),
    phrase('un cheval', '🐴', ['A horse', 'حصان'], ['A big animal you can ride.', 'حيوان كبير يمكنك ركوبه.'], [
      ['Je monte un cheval.', 'I ride a horse.', 'أركب حصانًا.'],
      ['C'est un cheval.', "It's a horse.", 'إنّه حصان.'],
    ]),
    phrase('une vache', '🐄', ['A cow', 'بقرة'], ['Gives milk.', 'تعطي الحليب.'], [
      ['C’est une vache.', 'It’s a cow.', 'إنّها بقرة.'],
      ['Une vache est là.', 'A cow is there.', 'بقرة هناك.'],
    ]),
    phrase('une poule', '🐔', ['A hen', 'دجاجة'], ['A female chicken.', 'أنثى الدجاج.'], [
      ['C’est une poule.', 'It’s a hen.', 'إنّها دجاجة.'],
      ['Une poule est là.', 'A hen is there.', 'دجاجة هناك.'],
    ]),
    phrase('un mouton', '🐑', ['A sheep', 'خروف'], ['Gives wool.', 'يعطي الصوف.'], [
      ['C’est un mouton.', 'It’s a sheep.', 'إنّه خروف.'],
      ['Un mouton blanc.', 'A white sheep.', 'خروف أبيض.'],
    ]),
    phrase('la ferme', '🚜', ['The farm', 'المزرعة'], ['Where animals live.', 'حيث تعيش الحيوانات.'], [
      ['La ferme est grande.', 'The farm is big.', 'المزرعة كبيرة.'],
      ['On va à la ferme.', 'We go to the farm.', 'نذهب إلى المزرعة.'],
    ]),
    phrase('un œuf', '🥚', ['An egg', 'بيضة'], ['Laid by a hen.', 'تبيضه الدجاجة.'], [
      ['La poule fait un œuf.', 'The hen makes an egg.', 'الدجاجة تضع بيضة.'],
      ['Un œuf pour manger.', 'An egg to eat.', 'بيضة للأكل.'],
    ]),
  ],
  talk: {
    setting: ['Emma parle du chien de Sam.', 'Emma talks about Sam’s dog.', 'إيما تتحدّث عن كلب سام.'],
    lines: [
      say('salma', 'Sam a un chien ?', 'Sam has a dog?', 'هل لدى سام كلب؟'),
      say('nour', 'Oui ! C’est un chien mignon.', 'Yes! It’s a cute dog.', 'نعم! إنّه كلب لطيف.'),
    ],
  },
  grammar: {
    examples: ['C’est [un] chat. (m.)', 'C’est [une] vache. (f.)', 'C’est [un] cheval. (m.)'],
    question: ['A cow: « C’est ___ vache. »', 'بقرة: « C’est ___ vache. »'],
    options: [['une', 'une'], ['un', 'un'], ['des', 'des']],
    correct: 0,
    explanation: [
      'Use c’est un before a masculine animal, c’est une before a feminine animal. Each animal has a gender in French: un chat (m.), une vache (f.).',
      'نستخدم c’est un قبل حيوان مذكّر، c’est une قبل حيوان مؤنّث. كلّ حيوان له جنس في الفرنسيّة: un chat (مذكّر)، une vache (مؤنّث).',
    ],
  },
  transfer: {
    setting: ['Adam parle de son chat à Mia.', 'Adam talks about his cat to Mia.', 'آدم يتحدّث عن قطّه لميا.'],
    lines: [
      say('karim', 'Mia, j’ai un chat !', 'Mia, I have a cat!', 'ميا، لديّ قطّ!'),
      say('rana', 'Vraiment ? Il est mignon !', 'Really? It’s cute!', 'حقًّا؟ إنّه لطيف!'),
    ],
  },
  write: {
    prompt: ['Say "it is a cat".', 'قل «إنّه قطّ».'],
    mustInclude: ['chat'],
    model: 'C’est un chat.',
    frame: 'C’est un ___.',
  },
  drills: [
    ['C’est ___ chat.', ['un', 'une', 'des'], ["It's a cat.", 'إنّه قطّ.']],
    ['C’est ___ vache.', ['une', 'un', 'des'], ["It's a cow.", 'إنّها بقرة.']],
    ['Le ___ est grand.', ['cheval', 'vache', 'poule'], ['The horse.', 'الحصان.']],
  ],
})

const MASCULIN_FEMININ = stage({
  id: 'fr1-anim-masculin-feminin',
  emoji: '⚧️',
  title: ['Chat et chatte', 'Male and female animals', 'الذكر والأنثى'],
  setting: ['Le maître explique le mâle et la femelle.', 'The teacher explains male and female.', 'المعلّم يشرح الذكر والأنثى.'],
  scene: [
    say('duck', 'Aujourd’hui, mâle et femelle !', 'Today, male and female!', 'اليوم، الذكر والأنثى!'),
        say('duck', 'Un chat, une chatte.', 'A male cat, a female cat.', 'قطّ وقطّة.'),
        say('karim', 'Un chien, une chienne !', 'A male dog, a female dog!', 'كلب وكلبة!'),
        say('nour', 'Et un cochon, une truie !', 'And a boar, a sow!', 'وخنزير وخنزيرة!'),
    say('duck', 'Bravo, Lily ! Le mâle et la femelle.', 'Bravo, Lily! The male and the female.', 'أحسنت يا ليلي! الذكر والأنثى.'),
        say('zaid', 'Moi, j’aime les chats.', 'Me, I like cats a lot.', 'أنا أحبّ القطط كثيرًا.'),
  ],
  phrases: [
    phrase('une chatte', '🐈', ['A female cat', 'قطّة'], ['The female of chat.', 'أنثى القطّ.'], [
      ['C’est une chatte.', 'It’s a female cat.', 'إنّها قطّة.'],
      ['Une chatte blanche.', 'A white female cat.', 'قطّة بيضاء.'],
    ]),
    phrase('une chienne', '🐕', ['A female dog', 'كلبة'], ['The female of chien.', 'أنثى الكلب.'], [
      ['C’est une chienne.', 'It’s a female dog.', 'إنّها كلبة.'],
      ['Une chienne brune.', 'A brown female dog.', 'كلبة بنّيّة.'],
    ]),
    phrase('le mâle', '♂️', ['The male', 'الذكر'], ['The male animal.', 'الحيوان الذكر.'], [
      ['Le mâle est ici.', 'The male is here.', 'الذكر هنا.'],
      ['C’est le mâle.', 'It’s the male.', 'إنّه الذكر.'],
    ]),
    phrase('la femelle', '♀️', ['The female', 'الأنثى'], ['The female animal.', 'الحيوان الأنثى.'], [
      ['La femelle est là.', 'The female is there.', 'الأنثى هناك.'],
      ['C’est la femelle.', 'It’s the female.', 'إنّها الأنثى.'],
    ]),
    phrase('un cochon', '🐖', ['A pig', 'خنزير'], ['A farm animal.', 'حيوان مزرعة.'], [
      ['C’est un cochon.', 'It’s a pig.', 'إنّه خنزير.'],
      ['Un cochon rose.', 'A pink pig.', 'خنزير ورديّ.'],
    ]),
    phrase('un lapin', '🐇', ['A rabbit', 'أرنب'], ['A small animal with long ears.', 'حيوان صغير بأذنين طويلتين.'], [
      ['C’est un lapin.', 'It’s a rabbit.', 'إنّه أرنب.'],
      ['Un lapin blanc.', 'A white rabbit.', 'أرنب أبيض.'],
    ]),
    phrase('une souris', '🐭', ['A mouse', 'فأر'], ['A tiny animal.', 'حيوان صغير جدًّا.'], [
      ['C’est une souris.', 'It’s a mouse.', 'إنّها فأر.'],
      ['Une souris petite.', 'A small mouse.', 'فأر صغير.'],
    ]),
    phrase('bravo', '👏', ['Well done / bravo', 'أحسنت'], ['To say "well done".', 'لتقول «أحسنت».'], [
      ['Bravo, Lily !', 'Well done, Lily!', 'أحسنت يا ليلي!'],
      ['Bravo, c’est juste !', 'Well done, it’s correct!', 'أحسنت، إنّه صحيح!'],
    ]),
  ],
  talk: {
    setting: ['Emma apprend le mâle et la femelle.', 'Emma learns male and female.', 'إيما تتعلّم الذكر والأنثى.'],
    lines: [
      say('salma', 'Lily, un chat, c’est mâle ?', 'Lily, a cat, is it male?', 'ليلي، القطّ ذكر؟'),
      say('nour', 'Oui ! Et une chatte, femelle.', 'Yes! And a female cat, female.', 'نعم! والقطّة أنثى.'),
    ],
  },
  grammar: {
    examples: ['un chat → une [chatte] (+e)', 'un chien → une [chienne] (+ne)', 'un cochon → une [truie] (different word)'],
    question: ['The female of "chat": « une ___ »', 'أنثى القطّ: « une ___ »'],
    options: [['chatte', 'chatte'], ['chate', 'chate'], ['chatteuse', 'chatteuse']],
    correct: 0,
    explanation: [
      'For the female of an animal, French often adds -e: un chat → une chatte, un chien → une chienne. But some have a different word: un cochon → une truie.',
      'لأنثى الحيوان، غالبًا ما تضيف الفرنسيّة e: un chat → une chatte، un chien → une chienne. لكنّ بعضها له كلمة مختلفة: un cochon → une truie.',
    ],
  },
  transfer: {
    setting: ['Sam montre son lapin à Adam.', 'Sam shows his rabbit to Adam.', 'سام يُري أرنبه لآدم.'],
    lines: [
      say('zaid', 'Adam, j’ai un lapin !', 'Adam, I have a rabbit!', 'آدم، لديّ أرنب!'),
      say('karim', 'Il est blanc, ton lapin ?', 'Is it white, your rabbit?', 'هل هو أبيض يا أرنبك؟'),
    ],
  },
  write: {
    prompt: ['Say "it is a female cat".', 'قل «إنّها قطّة».'],
    mustInclude: ['chatte'],
    model: 'C’est une chatte.',
    frame: 'C’est une ___.',
  },
  drills: [
    ['C’est une ___ (femelle de chat).', ['chatte', 'chat', 'chien'], ['Female cat.', 'قطّة.']],
    ['Le chat est un ___.', ['mâle', 'femelle', 'chienne'], ['The cat is male.', 'القطّ ذكر.']],
    ['C’est un ___.', ['lapin', 'lapine', 'lapins'], ['A rabbit.', 'أرنب.']],
  ],
})

const DESCRIPTION = stage({
  id: 'fr1-anim-description',
  emoji: '📝',
  title: ['Grand et petit', 'Big and small', 'كبير وصغير'],
  setting: ['Les enfants décrivent les animaux.', 'The children describe the animals.', 'الأطفال يصفّون الحيوانات.'],
  scene: [
    say('nour', 'Regarde ! Le cheval est grand.', 'Look! The horse is big.', 'انظر! الحصان كبير.'),
    say('salma', 'Et le chat, il est petit.', 'And the cat, it’s small.', 'والقطّ، إنّه صغير.'),
    say('karim', 'Le mouton est blanc.', 'The sheep is white.', 'الخروف أبيض.'),
    say('zaid', 'Et la vache est gentille !', 'And the cow is kind!', 'والبقرة طيّبة!'),
    say('nour', 'Le chien court vite.', 'The dog runs fast.', 'الكلب يركض بسرعة.'),
    say('duck', 'Très bien ! Vous décrivez bien.', 'Very good! You describe well.', 'ممتاز! تصفّون جيّدًا.'),
  ],
  phrases: [
    phrase('fort', '💪', ['Strong (m)', 'قويّ (مذكّر)'], ['For a masculine animal.', 'لحيوان مذكّر.'], [
      ['Le cheval est fort.', 'The horse is strong.', 'الحصان قويّ.'],
      ['Un chien fort.', 'A strong dog.', 'كلب قويّ.'],
    ]),
    phrase('forte', '💪', ['Strong (f)', 'قويّة (مؤنّث)'], ['For a feminine animal.', 'لحيوان مؤنّث.'], [
      ['La vache est forte.', 'The cow is strong.', 'البقرة قويّة.'],
      ['Une chatte forte.', 'A strong female cat.', 'قطّة قويّة.'],
    ]),
    phrase('rapide', '⚡', ['Fast', 'سريع'], ['An animal that runs fast.', 'حيوان يركض بسرعة.'], [
      ['Le chien est rapide.', 'The dog is fast.', 'الكلب سريع.'],
      ['Un cheval rapide.', 'A fast horse.', 'حصان سريع.'],
    ]),
    phrase('il court', '🏃', ['He runs', 'هو يركض'], ['The verb courir, il form.', 'فعل courir، صيغة il.'], [
      ['Il court vite.', 'He runs fast.', 'هو يركض بسرعة.'],
      ['Il court bien.', 'He runs well.', 'هو يركض جيّدًا.'],
    ]),
    phrase('le chat', '🍴', ['The cat', 'القطّ'], ['A cat that eats.', 'قطّ يأكل.'], [
      ['Le chat mange.', 'The cat eats.', 'القطّ يأكل.'],
      ['Le chat est mignon.', 'The cat is cute.', 'القطّ لطيف.'],
    ]),
    phrase("j’aime bien", '❤️', ['I like a lot', 'أحبّ كثيرًا'], ['To say you like something.', 'لتقول إنّك تحبّ شيئًا.'], [
      ["J’aime bien les chats.", 'I like cats a lot.', 'أحبّ القطط كثيرًا.'],
      ["J’aime bien les chiens.", 'I like dogs a lot.', 'أحبّ الكلاب كثيرًا.'],
    ]),
    phrase('les animaux', '🐾', ['Animals', 'الحيوانات'], ['Plural, all animals.', 'جمع، كلّ الحيوانات.'], [
      ['J’aime les animaux.', 'I like animals.', 'أحبّ الحيوانات.'],
      ['Les animaux sont ici.', 'The animals are here.', 'الحيوانات هنا.'],
    ]),
    phrase('jolie', '✨', ['Pretty (f)', 'جميلة (مؤنّث)'], ['For a masculine animal.', 'لحيوان مذكّر.'], [
      ['Cette chatte est jolie.', 'This female cat is pretty.', 'هذه القطّة جميلة.'],
      ['Une jolie chatte.', 'A pretty female cat.', 'قطّة جميلة.'],
    ]),
  ],
  talk: {
    setting: ['Lily décrit son chat à Emma.', 'Lily describes her cat to Emma.', 'ليلي تصف قطّها لإيما.'],
    lines: [
            say('nour', 'Mon chat est petit et joli.', 'My cat is small and pretty.', 'قطّي صغير وجميل.'),
      say('salma', 'Il est mignon, Lily !', 'He’s cute, Lily!', 'إنّه لطيف يا ليلي!'),
    ],
  },
  grammar: {
    examples: ['Le cheval est [grand]. (m.)', 'La vache est [grande]. (f.)', 'Le chien est [rapide]. (no change)'],
    question: ['The cow (f.) is big: « La vache est ___ »', 'البقرة (مؤنّث) كبيرة: « La vache est ___ »'],
    options: [['grande', 'grande'], ['grand', 'grand'], ['grands', 'grands']],
    correct: 0,
    explanation: [
      'Adjectives agree with the animal: grand (masculine) → grande (feminine, +e). Some adjectives never change: rapide, joli… wait, joli does change: jolie for feminine.',
      'الصفات تتوافق مع الحيوان: grand (مذكّر) تصبح grande (مؤنّث بإضافة e). وبعض الصفات لا تتغيّر أبدًا: rapide.',
    ],
  },
  transfer: {
    setting: ['Adam décrit son chien à Sam.', 'Adam describes his dog to Sam.', 'آدم يصف كلبه لسام.'],
    lines: [
            say('karim', 'Mon chien est grand et rapide.', 'My dog is big and fast.', 'كلبي كبير وسريع.'),
      say('zaid', 'Il est super, Adam !', 'He’s great, Adam!', 'إنّه رائع يا آدم!'),
    ],
  },
  write: {
    prompt: ['Say "the horse is big".', 'قل «الحصان كبير».'],
    mustInclude: ['grand'],
    model: 'Le cheval est grand.',
    frame: 'Le cheval est ___.',
  },
  drills: [
    ['Le cheval est ___.', ['grand', 'grande', 'grands'], ['Big (m).', 'كبير (مذكّر).']],
    ['La vache est ___.', ['grande', 'grand', 'grands'], ['Big (f).', 'كبيرة (مؤنّث).']],
    ['Le chien est ___.', ['rapide', 'rapides', 'rapidee'], ['Fast.', 'سريع.']],
  ],
})

export const FR_ANIMAUX = [ANIMAUX_DOMESTIQUES, MASCULIN_FEMININ, DESCRIPTION]
