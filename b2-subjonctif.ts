// ============================================================================
// French course · «Le subjonctif présent» (B2) — three stages:
// obligation & necessity → emotions & doubt → negative opinion verbs and
// conjunctions. Grammar met on the way: when to use the subjonctif and how to
// form it (take the ils form of the present, drop -ent, add the endings
// -e, -es, -e, -ions, -iez, -ent).
// ============================================================================

import { phrase, say, stage } from './kit'

const OBLIGATION = stage({
  id: 'fr2-sub-obligation',
  emoji: '✅',
  title: ['L’obligation et la nécessité', 'Obligation and necessity', 'الواجب والضرورة'],
  setting: ['Salma explique les obligations à Karim.', 'Salma explains obligations to Karim.', 'سلمى تشرح الواجبات لكريم.'],
  scene: [
    say('salma', 'Il faut que je fasse mes devoirs.', 'I must do my homework.', 'يجب أن أنجز واجباتي.'),
    say('karim', 'Il faut que tu viennes à l’heure.', 'You must come on time.', 'يجب أن تأتي في الوقت المحدّد.'),
    say('salma', 'Il faut qu’il parle au professeur.', 'He must speak to the teacher.', 'يجب أن يتحدّث مع المعلم.'),
    say('karim', 'Il est important que je sois prêt.', 'It is important that I be ready.', 'من المهم أن أكون مستعدًّا.'),
    say('salma', 'Il est nécessaire que je sois là.', 'It is necessary that I be there.', 'من الضروري أن أكون هناك.'),
    say('duck', 'Bravo ! Il faut que nous mangions.', 'Bravo! We must eat.', 'أحسنت! يجب أن نأكل.'),
  ],
  phrases: [
    phrase('il faut que je fasse', '📝', ['I must do', 'يجب أن أفعل'], ['Obligation + subjonctif.', 'واجب + صيغة شرطية.'], [
      ['Il faut que je fasse mes devoirs.', 'I must do my homework.', 'يجب أن أنجز واجباتي.'],
      ['Il faut que je fasse attention.', 'I must be careful.', 'يجب أن أُنتبه.'],
    ]),
    phrase('il faut que tu viennes', '⏰', ['You must come', 'يجب أن تأتي'], ['Obligation + venir (subjonctif).', 'واجب + venir (صيغة شرطية).'], [
      ['Il faut que tu viennes demain.', 'You must come tomorrow.', 'يجب أن تأتي غدًا.'],
      ['Il faut que tu viennes à l’heure.', 'You must come on time.', 'يجب أن تأتي في الوقت المحدّد.'],
    ]),
    phrase('il faut qu’il parle', '🗣️', ['He must speak', 'يجب أن يتكلّم'], ['Il faut que + il + subjonctif.', 'Il faut que + il + صيغة شرطية.'], [
      ['Il faut qu’il parle à son père.', 'He must speak to his father.', 'يجب أن يتحدّث مع أبيه.'],
      ['Il faut qu’il parle français.', 'He must speak French.', 'يجب أن يتكلّم بالفرنسية.'],
    ]),
    phrase('il est important que je sois', '⭐', ['It is important that I be', 'من المهم أن أكون'], ['Impersonal expression + être (subjonctif).', 'صيغة غير شخصية + être (صيغة شرطية).'], [
      ['Il est important que je sois là.', 'It is important that I be there.', 'من المهم أن أكون هناك.'],
      ['Il est important que je sois prêt.', 'It is important that I be ready.', 'من المهم أن أكون مستعدًّا.'],
    ]),
    phrase('il est nécessaire que je sois là', '📌', ['It is necessary that I be there', 'من الضروري أن أكون هناك'], ['Impersonal + être + là.', 'صيغة غير شخصية + être + là.'], [
      ['Il est nécessaire que je sois là maintenant.', 'It is necessary that I be there now.', 'من الضروري أن أكون هناك الآن.'],
      ['Il est nécessaire que je sois là ce soir.', 'It is necessary that I be there this evening.', 'من الضروري أن أكون هناك هذا المساء.'],
    ]),
    phrase('il faut que nous mangions', '🍽️', ['We must eat', 'يجب أن نأكل'], ['Il faut que + nous + subjonctif.', 'Il faut que + nous + صيغة شرطية.'], [
      ['Il faut que nous mangions maintenant.', 'We must eat now.', 'يجب أن نأكل الآن.'],
      ['Il faut que nous mangions ensemble.', 'We must eat together.', 'يجب أن نأكل معًا.'],
    ]),
    phrase('il faut que vous partiez', '🚪', ['You (pl.) must leave', 'يجب أن تغادروا'], ['Il faut que + vous + subjonctif.', 'Il faut que + vous + صيغة شرطية.'], [
      ['Il faut que vous partiez tôt.', 'You must leave early.', 'يجب أن تغادروا مبكرًا.'],
      ['Il faut que vous partiez vite.', 'You must leave quickly.', 'يجب أن تغادروا بسرعة.'],
    ]),
    phrase('il faut qu’ils sachent', '📚', ['They must know', 'يجب أن يعرفوا'], ['Il faut que + ils + savoir (subjonctif).', 'Il faut que + ils + savoir (صيغة شرطية).'], [
      ['Il faut qu’ils sachent la vérité.', 'They must know the truth.', 'يجب أن يعرفوا الحقيقة.'],
      ['Il faut qu’ils sachent la réponse.', 'They must know the answer.', 'يجب أن يعرفوا الإجابة.'],
    ]),
  ],
  talk: {
    setting: ['Karim pose des questions sur l’obligation.', 'Karim asks questions about obligation.', 'كريم يطرح أسئلة عن الواجب.'],
    lines: [
      say('karim', 'Salma, il faut que je fasse mes devoirs ?', 'Salma, must I do my homework?', 'سلمى، هل يجب أن أنجز واجباتي؟'),
      say('salma', 'Oui ! Et il faut que nous mangions après.', 'Yes! And we must eat afterwards.', 'نعم! ويجب أن نأكل بعد ذلك.'),
    ],
  },
  grammar: {
    examples: ['Il faut que je [fasse] mes devoirs. (faire, subjonctif)', 'Il est important que je [sois] prêt. (être, subjonctif)', 'Il faut qu’ils [sachent] la vérité. (savoir, subjonctif)'],
    question: ['I must do my homework: « Il faut que je ___ mes devoirs. »', 'يجب أن أنجز واجباتي: « Il faut que je ___ mes devoirs. »'],
    options: [['fasse', 'fasse'], ['fais', 'fais'], ['fait', 'fait']],
    correct: 0,
    explanation: [
      'The subjonctif présent is used after « il faut que », « il est important que », « il est nécessaire que ». Conjugation: take the ils form of the present (ils font → fass-, ils sont → soy-, ils savent → sach-), drop -ent, add the endings -e, -es, -e, -ions, -iez, -ent.',
      'تُستخدم صيغة الشرط (subjonctif présent) بعد « il faut que » و« il est important que » و« il est nécessaire que ». والتصريف: نأخذ صيغة ils في المضارع (ils font ← fass-، ils sont ← soy-، ils savent ← sach-)، نحذف -ent، نضيف النهايات -e, -es, -e, -ions, -iez, -ent.',
    ],
  },
  transfer: {
    setting: ['Rana parle à Zaid des obligations.', 'Rana talks to Zaid about obligations.', 'رنا تتحدّث مع زيد عن الواجبات.'],
    lines: [
      say('rana', 'Zaid, il faut que tu viennes à l’heure !', 'Zaid, you must come on time!', 'زيد، يجب أن تأتي في الوقت المحدّد!'),
      say('zaid', 'D’accord ! Et il faut que nous mangions après.', 'Okay! And we must eat afterwards.', 'حسنًا! ويجب أن نأكل بعد ذلك.'),
    ],
  },
  write: {
    prompt: ['Say "I must do my homework".', 'قل «يجب أن أنجز واجباتي».'],
    mustInclude: ['fasse'],
    model: 'Il faut que je fasse mes devoirs.',
    frame: 'Il faut que je ___ mes devoirs.',
  },
  drills: [
    ['Il faut que je ___ mes devoirs.', ['fasse', 'fais', 'fait'], ['Do (subjonctif).', 'أفعل (شرطي).']],
    ['Il faut que tu ___ à l’heure.', ['viennes', 'viens', 'vient'], ['Come (subjonctif).', 'تأتي (شرطي).']],
    ['Il faut qu’ils ___ la vérité.', ['sachent', 'savent', 'sait'], ['Know (subjonctif).', 'يعرفون (شرطي).']],
  ],
})

const EMOTIONS = stage({
  id: 'fr2-sub-emotions',
  emoji: '💭',
  title: ['Les émotions et le doute', 'Emotions and doubt', 'المشاعر والشكّ'],
  setting: ['Karim parle de ses émotions et de ses doutes.', 'Karim speaks about his emotions and doubts.', 'كريم يتحدّث عن مشاعره وشكوكه.'],
  scene: [
    say('karim', 'Je veux que tu sois là avec moi.', 'I want you to be here with me.', 'أريد أن تكون هنا معي.'),
    say('salma', 'J’aimerais que tu viennes me voir.', 'I would like you to come see me.', 'وددت أن تأتي لرؤيتي.'),
    say('karim', 'Je doute qu’il arrive à temps.', 'I doubt he will arrive on time.', 'أشكّ في أن يصل في الوقت المحدّد.'),
    say('salma', 'Je crains qu’il ne vienne en retard.', 'I fear he may come late.', 'أخشى أن يأتي متأخّرًا.'),
    say('karim', 'Je suis content que tu sois là enfin.', 'I am glad you are here at last.', 'أنا سعيد بأنك هنا أخيرًا.'),
    say('duck', 'Bravo ! Je suis surpris qu’elle réussisse.', 'Bravo! I am surprised she succeeds.', 'أحسنت! أنا متفاجئ بأنها تنجح.'),
  ],
  phrases: [
    phrase('je veux que tu sois là', '🤗', ['I want you to be here', 'أريد أن تكون هنا'], ['Volition + subjonctif.', 'إرادة + صيغة شرطية.'], [
      ['Je veux que tu sois là avec moi.', 'I want you to be here with me.', 'أريد أن تكون هنا معي.'],
      ['Je veux que tu sois là demain.', 'I want you to be here tomorrow.', 'أريد أن تكون هنا غدًا.'],
    ]),
    phrase('j’aimerais que tu viennes', '💌', ['I would like you to come', 'وددت أن تأتي'], ['Polite wish + subjonctif.', 'رغبة مهذّبة + صيغة شرطية.'], [
      ['J’aimerais que tu viennes me voir.', 'I would like you to come see me.', 'وددت أن تأتي لرؤيتي.'],
      ['J’aimerais que tu viennes avec nous.', 'I would like you to come with us.', 'وددت أن تأتي معنا.'],
    ]),
    phrase('je doute qu’il arrive', '❓', ['I doubt he will arrive', 'أشكّ في وصوله'], ['Doubt + subjonctif.', 'شكّ + صيغة شرطية.'], [
      ['Je doute qu’il arrive à temps.', 'I doubt he will arrive on time.', 'أشكّ في أن يصل في الوقت المحدّد.'],
      ['Je doute qu’il arrive demain.', 'I doubt he will arrive tomorrow.', 'أشكّ في أن يصل غدًا.'],
    ]),
    phrase('je crains qu’il ne vienne', '😰', ['I fear he may come', 'أخشى أن يأتي'], ['Fear + ne explétif + subjonctif.', 'خوف + ne الزائدة + صيغة شرطية.'], [
      ['Je crains qu’il ne vienne en retard.', 'I fear he may come late.', 'أخشى أن يأتي متأخّرًا.'],
      ['Je crains qu’il ne vienne sans cadeau.', 'I fear he may come without a gift.', 'أخشى أن يأتي بدون هدية.'],
    ]),
    phrase('je suis content que tu sois là', '😊', ['I am glad you are here', 'أنا سعيد بوجودك هنا'], ['Emotion + subjonctif.', 'عاطفة + صيغة شرطية.'], [
      ['Je suis content que tu sois là aujourd’hui.', 'I am glad you are here today.', 'أنا سعيد بأنك هنا اليوم.'],
      ['Je suis content que tu sois là enfin.', 'I am glad you are here at last.', 'أنا سعيد بأنك هنا أخيرًا.'],
    ]),
    phrase('je suis triste qu’il parte', '😢', ['I am sad he is leaving', 'أنا حزين لرحيله'], ['Emotion + subjonctif.', 'عاطفة + صيغة شرطية.'], [
      ['Je suis triste qu’il parte demain.', 'I am sad he is leaving tomorrow.', 'أنا حزين لأنه يغادر غدًا.'],
      ['Je suis triste qu’il parte si tôt.', 'I am sad he is leaving so soon.', 'أنا حزين لأنه يغادر بهذه السرعة.'],
    ]),
    phrase('je suis surpris qu’elle réussisse', '😲', ['I am surprised she succeeds', 'أنا متفاجئ بنجاحها'], ['Emotion + subjonctif.', 'عاطفة + صيغة شرطية.'], [
      ['Je suis surpris qu’elle réussisse son examen.', 'I am surprised she passes her exam.', 'أنا متفاجئ بأنها تنجح في امتحانها.'],
      ['Je suis surpris qu’elle réussisse aussi bien.', 'I am surprised she does so well.', 'أنا متفاجئ بأنها تنجح بهذا الشكل الجيّد.'],
    ]),
    phrase('je ne crois pas qu’il ait raison', '🤔', ['I don’t think he is right', 'لا أعتقد أنه على حقّ'], ['Negative belief + subjonctif.', 'اعتقاد منفي + صيغة شرطية.'], [
      ['Je ne crois pas qu’il ait raison maintenant.', 'I don’t think he is right now.', 'لا أعتقد أنه على حقّ الآن.'],
      ['Je ne crois pas qu’il ait raison sur ce point.', 'I don’t think he is right on this point.', 'لا أعتقد أنه على حقّ في هذه النقطة.'],
    ]),
  ],
  talk: {
    setting: ['Salma demande à Karim ses sentiments.', 'Salma asks Karim about his feelings.', 'سلمى تسأل كريم عن مشاعره.'],
    lines: [
      say('salma', 'Karim, je veux que tu sois là avec moi ?', 'Karim, do I want you to be here with me?', 'كريم، هل أريد أن تكون هنا معي؟'),
      say('karim', 'Oui ! Et je suis content que tu sois là enfin.', 'Yes! And I am glad you are here at last.', 'نعم! وأنا سعيد بأنك هنا أخيرًا.'),
    ],
  },
  grammar: {
    examples: ['Je veux que tu [sois] là. (être, subjonctif)', 'Je doute qu’il [arrive] à temps. (arriver, subjonctif)', 'Je suis surpris qu’elle [réussisse]. (réussir, subjonctif)'],
    question: ['I doubt he will arrive on time: « Je doute qu’il ___ à temps. »', 'أشكّ في وصوله في الوقت المحدّد: « Je doute qu’il ___ à temps. »'],
    options: [['arrive', 'arrive'], ['arrives', 'arrives'], ['arrivera', 'arrivera']],
    correct: 0,
    explanation: [
      'The subjonctif is used after expressions of emotion (je suis content que, je suis triste que, je suis surpris que) and of volition (je veux que, j’aimerais que). After verbs of doubt (je doute que) and fear (je crains que) the subjonctif is also used, and « craindre » often takes a « ne explétif »: je crains qu’il ne vienne.',
      'تُستخدم صيغة الشرط بعد عبارات المشاعر (je suis content que، je suis triste que، je suis surpris que) وعبارات الإرادة (je veux que، j’aimerais que). وبعد أفعال الشكّ (je doute que) والخوف (je crains que) تُستخدم صيغة الشرط أيضًا، وغالبًا ما يأخذ «craindre» نفيًا زائدًا «ne explétif»: je crains qu’il ne vienne.',
    ],
  },
  transfer: {
    setting: ['Nour parle à Rana de ses émotions.', 'Nour talks to Rana about her emotions.', 'نور تتحدّث مع رنا عن مشاعرها.'],
    lines: [
      say('nour', 'Rana, je suis contente que tu sois là !', 'Rana, I am glad you are here!', 'رنا، أنا سعيدة بوجودك هنا!'),
      say('rana', 'Merci ! Et je doute qu’il arrive à temps.', 'Thank you! And I doubt he will arrive on time.', 'شكرًا! وأشكّ في أن يصل في الوقت المحدّد.'),
    ],
  },
  write: {
    prompt: ['Say "I doubt he will arrive on time".', 'قل «أشكّ في وصوله في الوقت المحدّد».'],
    mustInclude: ['doute'],
    model: 'Je doute qu’il arrive à temps.',
    frame: 'Je ___ qu’il arrive à temps.',
  },
  drills: [
    ['Je veux que tu ___ là.', ['sois', 'es', 'seras'], ['Be (subjonctif).', 'تكون (شرطي).']],
    ['Je doute qu’il ___ à temps.', ['arrive', 'arrivera', 'arrives'], ['Arrive (subjonctif).', 'يصل (شرطي).']],
    ['Je suis surpris qu’elle ___.', ['réussisse', 'réussit', 'réussira'], ['Succeed (subjonctif).', 'تنجح (شرطي).']],
  ],
})

const OPINION = stage({
  id: 'fr2-sub-opinion',
  emoji: '🧩',
  title: ['Les verbes d’opinion négatifs et les conjonctions', 'Negative opinion verbs and conjunctions', 'أفعال الرأي المنفيّة وأدوات الربط'],
  setting: ['Salma et Karim discutent opinions et conjonctions.', 'Salma and Karim discuss opinions and conjunctions.', 'سلمى وكريم يناقشان الآراء وأدوات الربط.'],
  scene: [
    say('salma', 'Je ne pense pas qu’il soit malade aujourd’hui.', 'I don’t think he is sick today.', 'لا أعتقد أنه مريض اليوم.'),
    say('karim', 'Je ne crois pas qu’elle vienne demain.', 'I don’t think she will come tomorrow.', 'لا أعتقد أنها ستأتي غدًا.'),
    say('salma', 'Bien que je sois fatigué, je travaille.', 'Although I am tired, I am working.', 'رغم أنني متعب، أعمل.'),
    say('karim', 'Quoique tu dises le contraire, je reste.', 'Although you say the opposite, I stay.', 'رغم قولك العكس، أبقى.'),
    say('salma', 'Je t’aide pour que tu réussisses.', 'I help you so that you succeed.', 'أساعدك لتنجح.'),
    say('duck', 'Bravo ! Dis-moi avant que tu partes.', 'Bravo! Tell me before you leave.', 'أحسنت! أخبرني قبل أن تغادر.'),
  ],
  phrases: [
    phrase('je ne pense pas qu’il soit malade', '🤒', ['I don’t think he is sick', 'لا أعتقد أنه مريض'], ['Negative opinion + subjonctif.', 'رأي منفي + صيغة شرطية.'], [
      ['Je ne pense pas qu’il soit malade aujourd’hui.', 'I don’t think he is sick today.', 'لا أعتقد أنه مريض اليوم.'],
      ['Je ne pense pas qu’il soit malade vraiment.', 'I don’t think he is really sick.', 'لا أعتقد أنه مريض فعلًا.'],
    ]),
    phrase('je ne crois pas qu’elle vienne', '🚫', ['I don’t think she will come', 'لا أعتقد أنها ستأتي'], ['Negative belief + subjonctif.', 'اعتقاد منفي + صيغة شرطية.'], [
      ['Je ne crois pas qu’elle vienne demain.', 'I don’t think she will come tomorrow.', 'لا أعتقد أنها ستأتي غدًا.'],
      ['Je ne crois pas qu’elle vienne seule.', 'I don’t think she will come alone.', 'لا أعتقد أنها ستأتي وحدها.'],
    ]),
    phrase('bien que je sois fatigué', '😴', ['Although I am tired', 'رغم أنني متعب'], ['Concession + subjonctif.', 'تنازل + صيغة شرطية.'], [
      ['Bien que je sois fatigué, je travaille.', 'Although I am tired, I am working.', 'رغم أنني متعب، أعمل.'],
      ['Bien que je sois fatigué, je viens.', 'Although I am tired, I am coming.', 'رغم أنني متعب، آتي.'],
    ]),
    phrase('quoique tu dises', '🔄', ['Although you say', 'رغم قولك'], ['Concession + dire (subjonctif).', 'تنازل + dire (صيغة شرطية).'], [
      ['Quoique tu dises le contraire, je reste.', 'Although you say the opposite, I stay.', 'رغم قولك العكس، أبقى.'],
      ['Quoique tu dises non, j’insiste.', 'Although you say no, I insist.', 'رغم قولك لا، أُصرّ.'],
    ]),
    phrase('pour que tu réussisses', '🎯', ['So that you succeed', 'لكي تنجح'], ['Purpose + subjonctif.', 'غرض + صيغة شرطية.'], [
      ['Je t’aide pour que tu réussisses.', 'I help you so that you succeed.', 'أساعدك لتنجح.'],
      ['Travaille pour que tu réussisses.', 'Work so that you succeed.', 'اعمل لتنجح.'],
    ]),
    phrase('avant que tu partes', '⏳', ['Before you leave', 'قبل أن تغادر'], ['Time + subjonctif.', 'زمن + صيغة شرطية.'], [
      ['Parle-moi avant que tu partes.', 'Speak to me before you leave.', 'تحدّث معي قبل أن تغادر.'],
      ['Dis au revoir avant que tu partes.', 'Say goodbye before you leave.', 'ودّع قبل أن تغادر.'],
    ]),
    phrase('sans que je le sache', '🤫', ['Without me knowing', 'دون أن أعرف'], ['Absence + subjonctif.', 'غياب + صيغة شرطية.'], [
      ['Il part sans que je le sache.', 'He leaves without me knowing.', 'يغادر دون أن أعرف.'],
      ['Il l’a fait sans que je le sache.', 'He did it without me knowing.', 'فعل ذلك دون أن أعرف.'],
    ]),
    phrase('de peur qu’il ne vienne', '🔒', ['Lest he come', 'خوفًا من أن يأتي'], ['Fear + ne explétif + subjonctif.', 'خوف + ne الزائدة + صيغة شرطية.'], [
      ['Je ferme la porte de peur qu’il ne vienne.', 'I close the door lest he come.', 'أغلق الباب خوفًا من أن يأتي.'],
      ['Je me cache de peur qu’il ne vienne.', 'I hide lest he come.', 'أختبئ خوفًا من أن يأتي.'],
    ]),
  ],
  talk: {
    setting: ['Karim demande à Salma des précisions.', 'Karim asks Salma for clarification.', 'كريم يطلب من سلمى توضيحًا.'],
    lines: [
      say('karim', 'Salma, bien que je sois fatigué, je viens ?', 'Salma, although I am tired, am I coming?', 'سلمى، رغم أنني متعب، هل سآتي؟'),
      say('salma', 'Oui ! Et je t’aide pour que tu réussisses.', 'Yes! And I help you so that you succeed.', 'نعم! وأساعدك لتنجح.'),
    ],
  },
  grammar: {
    examples: ['Je ne pense pas qu’il [soit] malade. (être, subjonctif)', 'Bien que je [sois] fatigué, je travaille. (être, subjonctif)', 'Je t’aide pour que tu [réussisses]. (réussir, subjonctif)'],
    question: ['Although I am tired, I am working: « ___ je sois fatigué, je travaille. »', 'رغم أنني متعب، أعمل: « ___ je sois fatigué, je travaille. »'],
    options: [['Bien que', 'Bien que'], ['Parce que', 'Parce que'], ['Puisque', 'Puisque']],
    correct: 0,
    explanation: [
      'Negative opinion verbs (je ne pense pas que, je ne crois pas que) trigger the subjonctif. Conjunctions of concession (bien que, quoique), purpose (pour que, afin que), time (avant que, jusqu’à ce que), absence (sans que) and fear (de peur que, de crainte que) also require the subjonctif. « Bien que » = although; « quoique » = even though.',
      'أفعال الرأي المنفيّة (je ne pense pas que، je ne crois pas que) تستوجب صيغة الشرط. وأدوات الربط الدّالة على التنازل (bien que، quoique)، والغرض (pour que، afin que)، والزمن (avant que، jusqu’à ce que)، والغياب (sans que)، والخوف (de peur que، de crainte que) تتطلّب صيغة الشرط أيضًا. «Bien que» = رغم أنّ؛ و«quoique» = على الرغم من أنّ.',
    ],
  },
  transfer: {
    setting: ['Zaid parle à Nour des conjonctions.', 'Zaid talks to Nour about conjunctions.', 'زيد يتحدّث مع نور عن أدوات الربط.'],
    lines: [
      say('zaid', 'Nour, bien que je sois fatigué, je viens !', 'Nour, although I am tired, I am coming!', 'نور، رغم أنني متعب، سآتي!'),
      say('nour', 'Merci ! Et parle-moi avant que tu partes.', 'Thank you! And speak to me before you leave.', 'شكرًا! وتحدّث معي قبل أن تغادر.'),
    ],
  },
  write: {
    prompt: ['Say "although I am tired, I am working".', 'قل «رغم أنني متعب، أعمل».'],
    mustInclude: ['fatigué'],
    model: 'Bien que je sois fatigué, je travaille.',
    frame: 'Bien que je sois ___, je travaille.',
  },
  drills: [
    ['Je ne pense pas qu’il ___ malade.', ['soit', 'est', 'sera'], ['Be (subjonctif).', 'يكون (شرطي).']],
    ['___ je sois fatigué, je travaille.', ['Bien que', 'Parce que', 'Puisque'], ['Although.', 'رغم أنّ.']],
    ['Je t’aide pour que tu ___.', ['réussisses', 'réussis', 'réussiras'], ['Succeed (subjonctif).', 'تنجح (شرطي).']],
  ],
})

export const FR_SUBJONCTIF = [OBLIGATION, EMOTIONS, OPINION]
