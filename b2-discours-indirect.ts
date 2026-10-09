// ============================================================================
// French course · «Le discours direct et indirect» (B2) — three stages:
// reported statements → reported questions → reported orders. Grammar met on
// the way: indirect speech uses «que» for statements, «si» for yes/no
// questions, question words (où, quand, pourquoi, ce que, qui, comment,
// combien) for other questions, and «de + infinitive» for orders; tense
// concordance applies (présent → imparfait, passé composé → plus-que-parfait,
// futur → conditionnel) when the reporting verb is in the past.
// ============================================================================

import { phrase, say, stage } from './kit'

const DECLARATIONS = stage({
  id: 'fr2-di-decl',
  emoji: '🗣️',
  title: ['Les déclarations rapportées', 'Reported statements', 'التصريحات المنقولة'],
  setting: ['Salma rapporte ce que les autres ont dit.', 'Salma reports what the others said.', 'تسلم سلمى ما قاله الآخرون.'],
  scene: [
    say('bear', 'Salma écoute les déclarations.', 'Salma listens to the statements.', 'سلمى تستمع إلى التصريحات.'),
    say('salma', 'Karim dit qu’il viendra demain.', 'Karim says he will come tomorrow.', 'كريم يقول إنه سيأتي غدًا.'),
    say('bear', 'Il dit qu’il est malade aussi ?', 'He says he is sick too?', 'هل يقول إنه مريض أيضًا؟'),
    say('salma', 'Non. Il m’a dit qu’il avait fini.', 'No. He told me he had finished.', 'لا. قال لي إنه كان قد أنهى.'),
    say('bear', 'Elle a dit qu’elle partirait tôt.', 'She said she would leave early.', 'قالت إنها ستغادر مبكّرًا.'),
    say('duck', 'Bravo ! Le discours indirect est clair.', 'Bravo! Indirect speech is clear.', 'أحسنت! الكلام المنقول واضح.'),
  ],
  phrases: [
    phrase('il dit qu’il viendra', '➡️', ['He says he will come', 'يقول إنه سيأتي'], ['Reported statement with «que» + futur.', 'تصريح منقول بـ «que» + futur.'], [
      ['Il dit qu’il viendra demain soir.', 'He says he will come tomorrow evening.', 'يقول إنه سيأتي غدًا مساءً.'],
      ['Il dit qu’il viendra nous voir.', 'He says he will come see us.', 'يقول إنه سيأتي لرؤيتنا.'],
    ]),
    phrase('il dit qu’il est malade', '🤒', ['He says he is sick', 'يقول إنه مريض'], ['Reported statement, present state.', 'تصريح منقول، حالة مضارع.'], [
      ['Il dit qu’il est malade aujourd’hui.', 'He says he is sick today.', 'يقول إنه مريض اليوم.'],
      ['Il dit qu’il est malade et reste au lit.', 'He says he is sick and stays in bed.', 'يقول إنه مريض ويبقى في الفراش.'],
    ]),
    phrase('elle dit qu’elle a faim', '🍽️', ['She says she is hungry', 'تقول إنها جائعة'], ['Reported statement with avoir faim.', 'تصريح منقول بـ avoir faim.'], [
      ['Elle dit qu’elle a faim maintenant.', 'She says she is hungry now.', 'تقول إنها جائعة الآن.'],
      ['Elle dit qu’elle a faim après le sport.', 'She says she is hungry after sport.', 'تقول إنها جائعة بعد الرياضة.'],
    ]),
    phrase('il m’a dit qu’il avait fini', '✅', ['He told me he had finished', 'قال لي إنه كان قد أنهى'], ['Past report + plus-que-parfait.', 'نقل ماضٍ + plus-que-parfait.'], [
      ['Il m’a dit qu’il avait fini son travail.', 'He told me he had finished his work.', 'قال لي إنه كان قد أنهى عمله.'],
      ['Il m’a dit qu’il avait fini tôt.', 'He told me he had finished early.', 'قال لي إنه كان قد أنهى مبكّرًا.'],
    ]),
    phrase('elle a dit qu’elle partirait', '🚪', ['She said she would leave', 'قالت إنها ستغادر'], ['Past report + conditionnel.', 'نقل ماضٍ + conditionnel.'], [
      ['Elle a dit qu’elle partirait demain.', 'She said she would leave tomorrow.', 'قالت إنها ستغادر غدًا.'],
      ['Elle a dit qu’elle partirait en train.', 'She said she would leave by train.', 'قالت إنها ستغادر بالقطار.'],
    ]),
    phrase('il dit qu’il sait', '💡', ['He says he knows', 'يقول إنه يعرف'], ['Reported statement with savoir.', 'تصريح منقول بـ savoir.'], [
      ['Il dit qu’il sait la réponse.', 'He says he knows the answer.', 'يقول إنه يعرف الإجابة.'],
      ['Il dit qu’il sait nager.', 'He says he knows how to swim.', 'يقول إنه يعرف السباحة.'],
    ]),
    phrase('elle dit qu’elle comprend', '🧠', ['She says she understands', 'تقول إنها تفهم'], ['Reported statement with comprendre.', 'تصريح منقول بـ comprendre.'], [
      ['Elle dit qu’elle comprend la leçon.', 'She says she understands the lesson.', 'تقول إنها تفهم الدرس.'],
      ['Elle dit qu’elle comprend bien.', 'She says she understands well.', 'تقول إنها تفهم جيّدًا.'],
    ]),
    phrase('il a dit qu’il avait mangé', '🍞', ['He said he had eaten', 'قال إنه كان قد أكل'], ['Past report + plus-que-parfait of manger.', 'نقل ماضٍ + plus-que-parfait لـ manger.'], [
      ['Il a dit qu’il avait mangé à midi.', 'He said he had eaten at noon.', 'قال إنه كان قد أكل ظهرًا.'],
      ['Il a dit qu’il avait mangé une pomme.', 'He said he had eaten an apple.', 'قال إنه كان قد أكل تفّاحة.'],
    ]),
  ],
  talk: {
    setting: ['Salma parle à Nour des déclarations rapportées.', 'Salma talks to Nour about reported statements.', 'تتحدّث سلمى مع نور عن التصريحات المنقولة.'],
    lines: [
      say('salma', 'Karim dit qu’il viendra demain ?', 'Karim says he will come tomorrow?', 'كريم يقول إنه سيأتي غدًا؟'),
      say('nour', 'Oui ! Et il dit qu’il est malade.', 'Yes! And he says he is sick.', 'نعم! وهو يقول إنه مريض.'),
    ],
  },
  grammar: {
    examples: ['Il [dit] qu’il viendra. (présent + que + futur)', 'Il m’[a] dit qu’il avait fini. (passé + que + plus-que-parfait)', 'Elle a dit qu’elle [partirait]. (passé + que + conditionnel)'],
    question: ['He says he will come: « Il ___ qu’il viendra. »', 'يقول إنه سيأتي: « Il ___ qu’il viendra. »'],
    options: [['dit', 'dit'], ['demande', 'demande'], ['parle', 'parle']],
    correct: 0,
    explanation: [
      'Indirect statements use «que» to link the reporting verb to the reported clause: il dit que... When the reporting verb is in the past (il a dit), the tense of the reported clause shifts: présent → imparfait (il est → il était), passé composé → plus-que-parfait (il a fini → il avait fini), futur → conditionnel (il viendra → il viendrait).',
      'التصريحات المنقولة تستخدم «que» لربط فعل النقل بالجملة المنقولة: il dit que... وعندما يكون فعل النقل في الماضي (il a dit)، يتغيّر زمن الجملة المنقولة: المضارع ← الـ imparfait، والـ passé composé ← الـ plus-que-parfait، والمستقبل ← الـ conditionnel.',
    ],
  },
  transfer: {
    setting: ['Karim rapporte une déclaration.', 'Karim reports a statement.', 'كريم ينقل تصريحًا.'],
    lines: [
      say('karim', 'Il m’a dit qu’il avait fini.', 'He told me he had finished.', 'قال لي إنه كان قد أنهى.'),
      say('rana', 'Bien ! Elle a dit qu’elle partirait.', 'Good! She said she would leave.', 'جيّد! قالت إنها ستغادر.'),
    ],
  },
  write: {
    prompt: ['Say "he says he will come".', 'قل «هو يقول إنه سيأتي».'],
    mustInclude: ['dit'],
    model: 'Il dit qu’il viendra.',
    frame: 'Il ___ qu’il viendra.',
  },
  drills: [
    ['Il ___ qu’il viendra.', ['dit', 'demande', 'parle'], ['Says.', 'يقول.']],
    ['Il m’a ___ qu’il avait fini.', ['dit', 'demande', 'parle'], ['Said (told).', 'قال.']],
    ['Elle a dit qu’elle ___.', ['partirait', 'viendra', 'malade'], ['Would leave.', 'ستغادر.']],
  ],
})

const QUESTIONS = stage({
  id: 'fr2-di-quest',
  emoji: '❓',
  title: ['Les questions rapportées', 'Reported questions', 'الأسئلة المنقولة'],
  setting: ['Salma rapporte les questions qu’on lui a posées.', 'Salma reports the questions she was asked.', 'تنقل سلمى الأسئلة التي وُجّهت إليها.'],
  scene: [
    say('bear', 'Salma écoute les questions.', 'Salma listens to the questions.', 'سلمى تستمع إلى الأسئلة.'),
    say('salma', 'Il demande si je viens demain.', 'He asks if I am coming tomorrow.', 'يسأل إن كنت آتي غدًا.'),
    say('bear', 'Elle demande où je vais ?', 'She asks where I am going?', 'تسأل أين أذهب؟'),
    say('salma', 'Il demande quand tu arrives aussi.', 'He asks when you arrive too.', 'يسأل متى تصل أيضًا.'),
    say('bear', 'Elle demande pourquoi tu pleures ?', 'She asks why you are crying?', 'تسأل لماذا تبكي؟'),
    say('duck', 'Bravo ! Les questions rapportées.', 'Bravo! Reported questions.', 'أحسنت! الأسئلة المنقولة.'),
  ],
  phrases: [
    phrase('il demande si je viens', '🤔', ['He asks if I am coming', 'يسأل إن كنت آتي'], ['Yes/no question with «si».', 'سؤال نعم/لا بـ «si».'], [
      ['Il demande si je viens demain.', 'He asks if I am coming tomorrow.', 'يسأل إن كنت آتي غدًا.'],
      ['Il demande si je viens en bus.', 'He asks if I am coming by bus.', 'يسأل إن كنت آتي بالحافلة.'],
    ]),
    phrase('elle demande où je vais', '🧭', ['She asks where I am going', 'تسأل أين أذهب'], ['Wh-question with «où».', 'سؤال بـ «où».'], [
      ['Elle demande où je vais ce soir.', 'She asks where I am going tonight.', 'تسأل أين أذهب هذا المساء.'],
      ['Elle demande où je vais en vacances.', 'She asks where I am going on holiday.', 'تسأل أين أذهب في العطلة.'],
    ]),
    phrase('il demande quand tu arrives', '🕐', ['He asks when you arrive', 'يسأل متى تصل'], ['Wh-question with «quand».', 'سؤال بـ «quand».'], [
      ['Il demande quand tu arrives à Paris.', 'He asks when you arrive in Paris.', 'يسأل متى تصل إلى باريس.'],
      ['Il demande quand tu arrives demain.', 'He asks when you arrive tomorrow.', 'يسأل متى تصل غدًا.'],
    ]),
    phrase('elle demande pourquoi tu pleures', '😢', ['She asks why you are crying', 'تسأل لماذا تبكي'], ['Wh-question with «pourquoi».', 'سؤال بـ «pourquoi».'], [
      ['Elle demande pourquoi tu pleures maintenant.', 'She asks why you are crying now.', 'تسأل لماذا تبكي الآن.'],
      ['Elle demande pourquoi tu pleures souvent.', 'She asks why you cry often.', 'تسأل لماذا تبكي كثيرًا.'],
    ]),
    phrase('il demande ce que tu fais', '📝', ['He asks what you are doing', 'يسأل ماذا تفعل'], ['Wh-question with «ce que».', 'سؤال بـ «ce que».'], [
      ['Il demande ce que tu fais là.', 'He asks what you are doing there.', 'يسأل ماذا تفعل هناك.'],
      ['Il demande ce que tu fais ce soir.', 'He asks what you are doing tonight.', 'يسأل ماذا تفعل هذا المساء.'],
    ]),
    phrase('elle demande qui est là', '👥', ['She asks who is there', 'تسأل من هناك'], ['Wh-question with «qui».', 'سؤال بـ «qui».'], [
      ['Elle demande qui est là dehors.', 'She asks who is outside.', 'تسأل من هناك في الخارج.'],
      ['Elle demande qui est là dans la salle.', 'She asks who is in the room.', 'تسأل من هناك في القاعة.'],
    ]),
    phrase('il demande comment tu vas', '💬', ['He asks how you are', 'يسأل كيف حالك'], ['Wh-question with «comment».', 'سؤال بـ «comment».'], [
      ['Il demande comment tu vas aujourd’hui.', 'He asks how you are today.', 'يسأل كيف حالك اليوم.'],
      ['Il demande comment tu vas à l’école.', 'He asks how you go to school.', 'يسأل كيف تذهب إلى المدرسة.'],
    ]),
    phrase('elle demande combien ça coûte', '💰', ['She asks how much it costs', 'تسأل كم يكلّف هذا'], ['Wh-question with «combien».', 'سؤال بـ «combien».'], [
      ['Elle demande combien ça coûte exactement.', 'She asks how much it costs exactly.', 'تسأل كم يكلّف هذا بالضبط.'],
      ['Elle demande combien ça coûte au marché.', 'She asks how much it costs at the market.', 'تسأل كم يكلّف هذا في السوق.'],
    ]),
  ],
  talk: {
    setting: ['Salma parle à Nour des questions rapportées.', 'Salma talks to Nour about reported questions.', 'تتحدّث سلمى مع نور عن الأسئلة المنقولة.'],
    lines: [
      say('salma', 'Il demande si je viens ?', 'He asks if I am coming?', 'يسأل إن كنت آتي؟'),
      say('nour', 'Oui ! Et elle demande où je vais.', 'Yes! And she asks where I am going.', 'نعم! وهي تسأل أين أذهب.'),
    ],
  },
  grammar: {
    examples: ['Il [demande] si je viens. (yes/no question → si)', 'Elle demande [où] je vais. (wh-question → où)', 'Il demande [quand] tu arrives. (wh-question → quand)'],
    question: ['He asks if I am coming: « Il demande ___ je viens. »', 'يسأل إن كنت آتي: « Il demande ___ je viens. »'],
    options: [['si', 'si'], ['que', 'que'], ['de', 'de']],
    correct: 0,
    explanation: [
      'Reported yes/no questions use «si»: il demande si je viens (does he ask if I am coming?). Reported wh-questions keep the question word: où (where), quand (when), pourquoi (why), ce que (what), qui (who), comment (how), combien (how much). After these words the subject and verb are NOT inverted in indirect speech: il demande où je vais (not «où vais-je»).',
      'الأسئلة المنقولة من نوع نعم/لا تستخدم «si»: il demande si je viens. وأسئلة الاستفهام تحتفظ بأداة السؤال: où (أين)، quand (متى)، pourquoi (لماذا)، ce que (ماذا)، qui (مَن)، comment (كيف)، combien (كم). وبعد هذه الأدوات لا يُعكس ترتيب الفاعل والفعل في الكلام المنقول: il demande où je vais.',
    ],
  },
  transfer: {
    setting: ['Karim rapporte une question.', 'Karim reports a question.', 'كريم ينقل سؤالًا.'],
    lines: [
      say('karim', 'Elle demande pourquoi tu pleures.', 'She asks why you are crying.', 'تسأل لماذا تبكي.'),
      say('rana', 'Je vois ! Il demande ce que tu fais.', 'I see! He asks what you are doing.', 'أرى! هو يسأل ماذا تفعل.'),
    ],
  },
  write: {
    prompt: ['Say "he asks if I am coming".', 'قل «هو يسأل إن كنت آتي».'],
    mustInclude: ['demande'],
    model: 'Il demande si je viens.',
    frame: 'Il ___ si je viens.',
  },
  drills: [
    ['Il demande ___ je viens.', ['si', 'que', 'de'], ['If.', 'هل.']],
    ['Elle demande ___ je vais.', ['où', 'si', 'de'], ['Where.', 'أين.']],
    ['Il demande ___ tu arrives.', ['quand', 'si', 'que'], ['When.', 'متى.']],
  ],
})

const ORDRES = stage({
  id: 'fr2-di-ordres',
  emoji: '👉',
  title: ['Les ordres rapportés', 'Reported orders', 'الأوامر المنقولة'],
  setting: ['Salma rapporte les ordres qu’on lui a donnés.', 'Salma reports the orders she was given.', 'تنقل سلمى الأوامر التي أُعطيت لها.'],
  scene: [
    say('bear', 'Salma écoute les ordres.', 'Salma listens to the orders.', 'سلمى تستمع إلى الأوامر.'),
    say('salma', 'Il me dit de venir tôt.', 'He tells me to come early.', 'يقول لي أن آتي مبكّرًا.'),
    say('bear', 'Elle me dit de partir ?', 'She tells me to leave?', 'تقول لي أن أغادر؟'),
    say('salma', 'Oui. Il me dit de manger aussi.', 'Yes. He tells me to eat too.', 'نعم. هو يقول لي أن آكل أيضًا.'),
    say('bear', 'Elle me dit de dormir tôt.', 'She tells me to sleep early.', 'تقول لي أن أنام مبكّرًا.'),
    say('duck', 'Bravo ! Les ordres rapportés.', 'Bravo! Reported orders.', 'أحسنت! الأوامر المنقولة.'),
  ],
  phrases: [
    phrase('il me dit de venir', '🚶', ['He tells me to come', 'يقول لي أن آتي'], ['Reported order with «de» + infinitive.', 'أمر منقول بـ «de» + المصدر.'], [
      ['Il me dit de venir tôt.', 'He tells me to come early.', 'يقول لي أن آتي مبكّرًا.'],
      ['Il me dit de venir à huit heures.', 'He tells me to come at eight.', 'يقول لي أن آتي في الثامنة.'],
    ]),
    phrase('elle me dit de partir', '🚪', ['She tells me to leave', 'تقول لي أن أغادر'], ['Reported order with «de» + partir.', 'أمر منقول بـ «de» + partir.'], [
      ['Elle me dit de partir maintenant.', 'She tells me to leave now.', 'تقول لي أن أغادر الآن.'],
      ['Elle me dit de partir vite.', 'She tells me to leave quickly.', 'تقول لي أن أغادر بسرعة.'],
    ]),
    phrase('il me dit de manger', '🍽️', ['He tells me to eat', 'يقول لي أن آكل'], ['Reported order with «de» + manger.', 'أمر منقول بـ «de» + manger.'], [
      ['Il me dit de manger ma soupe.', 'He tells me to eat my soup.', 'يقول لي أن آكل حسائي.'],
      ['Il me dit de manger lentement.', 'He tells me to eat slowly.', 'يقول لي أن آكل ببطء.'],
    ]),
    phrase('elle me dit de dormir', '😴', ['She tells me to sleep', 'تقول لي أن أنام'], ['Reported order with «de» + dormir.', 'أمر منقول بـ «de» + dormir.'], [
      ['Elle me dit de dormir tôt.', 'She tells me to sleep early.', 'تقول لي أن أنام مبكّرًا.'],
      ['Elle me dit de dormir huit heures.', 'She tells me to sleep eight hours.', 'تقول لي أن أنام ثماني ساعات.'],
    ]),
    phrase('il me dit de lire', '📖', ['He tells me to read', 'يقول لي أن أقرأ'], ['Reported order with «de» + lire.', 'أمر منقول بـ «de» + lire.'], [
      ['Il me dit de lire un livre.', 'He tells me to read a book.', 'يقول لي أن أقرأ كتابًا.'],
      ['Il me dit de lire la lettre.', 'He tells me to read the letter.', 'يقول لي أن أقرأ الرسالة.'],
    ]),
    phrase('elle me dit d’écrire', '✍️', ['She tells me to write', 'تقول لي أن أكتب'], ['«de» + vowel → «d’» + écrire.', '«de» + حرف متحرّك ← «d’» + écrire.'], [
      ['Elle me dit d’écrire un poème.', 'She tells me to write a poem.', 'تقول لي أن أكتب قصيدة.'],
      ['Elle me dit d’écrire en français.', 'She tells me to write in French.', 'تقول لي أن أكتب بالفرنسية.'],
    ]),
    phrase('il me dit de finir', '✅', ['He tells me to finish', 'يقول لي أن أنهي'], ['Reported order with «de» + finir.', 'أمر منقول بـ «de» + finir.'], [
      ['Il me dit de finir mon devoir.', 'He tells me to finish my homework.', 'يقول لي أن أنهي واجبي.'],
      ['Il me dit de finir avant midi.', 'He tells me to finish before noon.', 'يقول لي أن أنهي قبل الظهر.'],
    ]),
    phrase('elle me dit de comprendre', '🧠', ['She tells me to understand', 'تقول لي أن أفهم'], ['Reported order with «de» + comprendre.', 'أمر منقول بـ «de» + comprendre.'], [
      ['Elle me dit de comprendre la règle.', 'She tells me to understand the rule.', 'تقول لي أن أفهم القاعدة.'],
      ['Elle me dit de comprendre la leçon.', 'She tells me to understand the lesson.', 'تقول لي أن أفهم الدرس.'],
    ]),
  ],
  talk: {
    setting: ['Salma parle à Nour des ordres rapportés.', 'Salma talks to Nour about reported orders.', 'تتحدّث سلمى مع نور عن الأوامر المنقولة.'],
    lines: [
      say('salma', 'Il me dit de venir ?', 'He tells me to come?', 'يقول لي أن آتي؟'),
      say('nour', 'Oui ! Et elle me dit de partir.', 'Yes! And she tells me to leave.', 'نعم! وهي تقول لي أن أغادر.'),
    ],
  },
  grammar: {
    examples: ['Il me [dit] de venir. (dire + de + infinitive)', 'Elle me dit [de] partir. (de + infinitive)', 'Il me dit de [lire]. (de + lire)'],
    question: ['He tells me to come: « Il me dit ___ venir. »', 'يقول لي أن آتي: « Il me dit ___ venir. »'],
    options: [['de', 'de'], ['que', 'que'], ['si', 'si']],
    correct: 0,
    explanation: [
      'Reported orders use «dire + de + infinitive»: il me dit de venir (he tells me to come). The preposition «de» becomes «d’’» before a vowel: elle me dit d’écrire. Negative orders keep «ne...pas» around the infinitive: il me dit de ne pas partir.',
      'الأوامر المنقولة تستخدم «dire + de + المصدر»: il me dit de venir. وحرف الجر «de» يصير «d’» قبل حرف متحرّك: elle me dit d’écrire. والأوامر النافية تحتفظ بـ «ne...pas» حول المصدر: il me dit de ne pas partir.',
    ],
  },
  transfer: {
    setting: ['Karim rapporte un ordre.', 'Karim reports an order.', 'كريم ينقل أمرًا.'],
    lines: [
      say('karim', 'Elle me dit de dormir.', 'She tells me to sleep.', 'تقول لي أن أنام.'),
      say('rana', 'D’accord ! Il me dit de finir.', 'Okay! He tells me to finish.', 'حسنًا! هو يقول لي أن أنهي.'),
    ],
  },
  write: {
    prompt: ['Say "he tells me to come".', 'قل «هو يقول لي أن آتي».'],
    mustInclude: ['venir'],
    model: 'Il me dit de venir.',
    frame: 'Il me dit de ___.',
  },
  drills: [
    ['Il me dit ___ venir.', ['de', 'que', 'si'], ['To.', 'أن.']],
    ['Elle me dit de ___.', ['partir', 'que', 'si'], ['Leave.', 'تغادر.']],
    ['Il me dit de ___.', ['lire', 'que', 'si'], ['Read.', 'يقرأ.']],
  ],
})

export const FR_DISCOURS_INDIRECT = [DECLARATIONS, QUESTIONS, ORDRES]
