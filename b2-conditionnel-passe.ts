// ============================================================================
// French course · «Le conditionnel passé» (B2) — three stages: regrets →
// être as auxiliary → past hypotheses. Grammar met on the way: the
// conditionnel passé is built with the conditionnel présent of avoir/être +
// past participle (j’aurais mangé, je serais allé); used to express regrets
// and hypothetical past actions; combined with «si + plus-que-parfait» for
// "if I had..., I would have..." (si j’avais su, j’aurais agi autrement).
// ============================================================================

import { phrase, say, stage } from './kit'

const REGRETS = stage({
  id: 'fr2-copasse-regrets',
  emoji: '😔',
  title: ['Les regrets', 'Regrets', 'النّدم'],
  setting: ['Nour exprime des regrets sur le passé.', 'Nour expresses regrets about the past.', 'تعرب نور عن ندمها على الماضي.'],
  scene: [
    say('bear', 'J’aurais mangé cette pomme hier.', 'I would have eaten this apple yesterday.', 'كنت سآكل هذه التفاحة أمس.'),
    say('nour', 'J’aurais parlé plus fort hier soir.', 'I would have spoken louder last night.', 'كنت سأتحدّث بصوت أعلى البارحة.'),
    say('bear', 'J’aurais fini mon travail tôt.', 'I would have finished my work early.', 'كنت سأنهي عملي مبكّرًا.'),
    say('nour', 'J’aurais lu ce roman en entier.', 'I would have read this novel entirely.', 'كنت سأقرأ هذه الرواية كاملة.'),
    say('bear', 'J’aurais écrit une longue lettre.', 'I would have written a long letter.', 'كنت سأكتب رسالة طويلة.'),
    say('duck', 'Bravo ! J’aurais vu ce film aussi.', 'Bravo! I would have seen this movie too.', 'أحسنت! كنت سأشاهد هذا الفيلم أيضًا.'),
  ],
  phrases: [
    phrase('j’aurais mangé', '🍎', ['I would have eaten', 'كنت سآكل'], ['Conditionnel passé of manger, je form.', 'الـ conditionnel passé لـ manger، صيغة je.'], [
      ['J’aurais mangé cette pomme.', 'I would have eaten this apple.', 'كنت سآكل هذه التفاحة.'],
      ['J’aurais mangé avec vous.', 'I would have eaten with you.', 'كنت سآكل معكم.'],
    ]),
    phrase('j’aurais parlé', '🗣️', ['I would have spoken', 'كنت سأتحدّث'], ['Conditionnel passé of parler, je form.', 'الـ conditionnel passé لـ parler، صيغة je.'], [
      ['J’aurais parlé plus fort.', 'I would have spoken louder.', 'كنت سأتحدّث بصوت أعلى.'],
      ['J’aurais parlé à mon frère.', 'I would have spoken to my brother.', 'كنت سأتحدّث مع أخي.'],
    ]),
    phrase('j’aurais fini', '✅', ['I would have finished', 'كنت سأنهي'], ['Conditionnel passé of finir, je form.', 'الـ conditionnel passé لـ finir، صيغة je.'], [
      ['J’aurais fini mon travail.', 'I would have finished my work.', 'كنت سأنهي عملي.'],
      ['J’aurais fini à temps.', 'I would have finished on time.', 'كنت سأنهي في الوقت.'],
    ]),
    phrase('j’aurais lu', '📖', ['I would have read', 'كنت سأقرأ'], ['Conditionnel passé of lire, je form.', 'الـ conditionnel passé لـ lire، صيغة je.'], [
      ['J’aurais lu ce roman.', 'I would have read this novel.', 'كنت سأقرأ هذه الرواية.'],
      ['J’aurais lu la lettre vite.', 'I would have read the letter quickly.', 'كنت سأقرأ الرسالة بسرعة.'],
    ]),
    phrase('j’aurais écrit', '✍️', ['I would have written', 'كنت سأكتب'], ['Conditionnel passé of écrire, je form.', 'الـ conditionnel passé لـ écrire، صيغة je.'], [
      ['J’aurais écrit une lettre.', 'I would have written a letter.', 'كنت سأكتب رسالة.'],
      ['J’aurais écrit un poème.', 'I would have written a poem.', 'كنت سأكتب قصيدة.'],
    ]),
    phrase('j’aurais vu', '👀', ['I would have seen', 'كنت سأرى'], ['Conditionnel passé of voir, je form.', 'الـ conditionnel passé لـ voir، صيغة je.'], [
      ['J’aurais vu ce film.', 'I would have seen this movie.', 'كنت سأشاهد هذا الفيلم.'],
      ['J’aurais vu la mer.', 'I would have seen the sea.', 'كنت سأرى البحر.'],
    ]),
    phrase('j’aurais pris', '✋', ['I would have taken', 'كنت سآخذ'], ['Conditionnel passé of prendre, je form.', 'الـ conditionnel passé لـ prendre، صيغة je.'], [
      ['J’aurais pris le train.', 'I would have taken the train.', 'كنت سآخذ القطار.'],
      ['J’aurais pris un café.', 'I would have taken a coffee.', 'كنت سآخذ قهوة.'],
    ]),
    phrase('j’aurais compris', '🧠', ['I would have understood', 'كنت سأفهم'], ['Conditionnel passé of comprendre, je form.', 'الـ conditionnel passé لـ comprendre، صيغة je.'], [
      ['J’aurais compris la leçon.', 'I would have understood the lesson.', 'كنت سأفهم الدرس.'],
      ['J’aurais compris vite aussi.', 'I would have understood quickly.', 'كنت سأفهم بسرعة أيضًا.'],
    ]),
  ],
  talk: {
    setting: ['Salma demande à Nur ses regrets.', 'Salma asks Nour about her regrets.', 'تسأل سلمى نور عن ندمها.'],
    lines: [
      say('salma', 'Nour, qu’est-ce que tu aurais fait ?', 'Nour, what would you have done?', 'نور، ماذا كنت ستفعلين؟'),
      say('nour', 'J’aurais mangé cette pomme, Salma.', 'I would have eaten this apple, Salma.', 'كنت سآكل هذه التفاحة يا سلمى.'),
    ],
  },
  grammar: {
    examples: ['J’aurais [mangé] cette pomme. (conditionnel présent of avoir + past participle of manger)', 'J’aurais [fini] mon travail. (conditionnel présent of avoir + past participle of finir)', 'J’aurais [vu] ce film. (conditionnel présent of avoir + past participle of voir)'],
    question: ['I would have eaten: « J’___ cette pomme. »', 'كنت سآكل: « J’___ cette pomme. »'],
    options: [['aurais mangé', 'aurais mangé'], ['avais mangé', 'avais mangé'], ['ai mangé', 'ai mangé']],
    correct: 0,
    explanation: [
      'The conditionnel passé is formed with the conditionnel présent of avoir (j’aurais, tu aurais, il aurait, nous aurions, vous auriez, ils auraient) + the past participle. Examples: j’aurais mangé (I would have eaten), j’aurais fini (I would have finished), j’aurais pris (I would have taken). It expresses a regret or a hypothetical past action.',
      'يتكوّن الـ conditionnel passé من الـ conditionnel présent لـ avoir (j’aurais، tu aurais، il aurait، nous aurions، vous auriez، ils auraient) + اسم المفعول. أمثلة: j’aurais mangé (كنت سآكل)، j’aurais fini (كنت سأنهي)، j’aurais pris (كنت سآخذ). ويعبّر عن ندم أو فعل افتراضيّ في الماضي.',
    ],
  },
  transfer: {
    setting: ['Karim exprime des regrets.', 'Karim expresses regrets.', 'يعرب كريم عن ندم.'],
    lines: [
      say('karim', 'Regarde ! J’aurais lu ce roman !', 'Look! I would have read this novel!', 'انظر! كنت سأقرأ هذه الرواية!'),
      say('rana', 'Oui ! J’aurais écrit un poème, Karim.', 'Yes! I would have written a poem, Karim.', 'نعم! كنت سأكتب قصيدة يا كريم.'),
    ],
  },
  write: {
    prompt: ['Say "I would have eaten this apple".', 'قل «كنت سآكل هذه التفاحة».'],
    mustInclude: ['aurais mangé'],
    model: 'J’aurais mangé cette pomme.',
    frame: 'J’___ cette pomme.',
  },
  drills: [
    ['J’___ cette pomme.', ['aurais mangé', 'avais mangé', 'ai mangé'], ['Would have eaten.', 'كنت سآكل.']],
    ['J’___ mon travail.', ['aurais fini', 'avais fini', 'ai fini'], ['Would have finished.', 'كنت سأنهي.']],
    ['J’___ ce film.', ['aurais vu', 'avais vu', 'ai vu'], ['Would have seen.', 'كنت سأشاهد.']],
  ],
})

const ETRE = stage({
  id: 'fr2-copasse-etre',
  emoji: '🚶',
  title: ['Avec l’être comme auxiliaire', 'With être as auxiliary', 'مع الفعل المساعد être'],
  setting: ['Nour utilise l’auxiliaire être au conditionnel passé.', 'Nour uses the auxiliary être in the past conditional.', 'تستخدم نور الفعل المساعد être في الـ conditionnel passé.'],
  scene: [
    say('bear', 'Je serais allé à Paris hier soir.', 'I would have gone to Paris last night.', 'كنت سأذهب إلى باريس البارحة.'),
    say('nour', 'Je serais venu te voir hier.', 'I would have come to see you yesterday.', 'كنت سآتي لأراك أمس.'),
    say('bear', 'Je serais parti en voyage avec vous.', 'I would have left on a trip with you.', 'كنت سأغادر في رحلة معكم.'),
    say('nour', 'Je serais arrivé en avance hier.', 'I would have arrived early yesterday.', 'كنت سأصل مبكّرًا أمس.'),
    say('bear', 'Je serais monté tout en haut.', 'I would have gone right to the top.', 'كنت سأصعد إلى القمّة.'),
    say('duck', 'Bravo ! Je serais descendu prudemment.', 'Bravo! I would have come down carefully.', 'أحسنت! كنت سأنزل بحذر.'),
  ],
  phrases: [
    phrase('je serais allé', '🛫', ['I would have gone', 'كنت سأذهب'], ['Conditionnel passé of aller (être), je form.', 'الـ conditionnel passé لـ aller (être)، صيغة je.'], [
      ['Je serais allé à Paris.', 'I would have gone to Paris.', 'كنت سأذهب إلى باريس.'],
      ['Je serais allé au cinéma.', 'I would have gone to the cinema.', 'كنت سأذهب إلى السينما.'],
    ]),
    phrase('je serais venu', '🚪', ['I would have come', 'كنت سآتي'], ['Conditionnel passé of venir (être), je form.', 'الـ conditionnel passé لـ venir (être)، صيغة je.'], [
      ['Je serais venu hier soir.', 'I would have come last night.', 'كنت سآتي البارحة.'],
      ['Je serais venu avec plaisir.', 'I would have come with pleasure.', 'كنت سآتي بسرور.'],
    ]),
    phrase('je serais parti', '🧳', ['I would have left', 'كنت سأغادر'], ['Conditionnel passé of partir (être), je form.', 'الـ conditionnel passé لـ partir (être)، صيغة je.'], [
      ['Je serais parti tôt.', 'I would have left early.', 'كنت سأغادر مبكّرًا.'],
      ['Je serais parti en voyage.', 'I would have left on a trip.', 'كنت سأغادر في رحلة.'],
    ]),
    phrase('je serais arrivé', '🏁', ['I would have arrived', 'كنت سأصل'], ['Conditionnel passé of arriver (être), je form.', 'الـ conditionnel passé لـ arriver (être)، صيغة je.'], [
      ['Je serais arrivé à l’heure.', 'I would have arrived on time.', 'كنت سأصل في الوقت.'],
      ['Je serais arrivé en retard.', 'I would have arrived late.', 'كنت سأصل متأخّرًا.'],
    ]),
    phrase('je serais monté', '🪜', ['I would have gone up', 'كنت سأصعد'], ['Conditionnel passé of monter (être), je form.', 'الـ conditionnel passé لـ monter (être)، صيغة je.'], [
      ['Je serais monté en haut.', 'I would have gone upstairs.', 'كنت سأصعد إلى الأعلى.'],
      ['Je serais monté dans le train.', 'I would have boarded the train.', 'كنت سأركب القطار.'],
    ]),
    phrase('je serais descendu', '🪜', ['I would have gone down', 'كنت سأنزل'], ['Conditionnel passé of descendre (être), je form.', 'الـ conditionnel passé لـ descendre (être)، صيغة je.'], [
      ['Je serais descendu vite.', 'I would have come down quickly.', 'كنت سأنزل بسرعة.'],
      ['Je serais descendu à la cave.', 'I would have gone down to the cellar.', 'كنت سأنزل إلى القبو.'],
    ]),
    phrase('je serais tombé', '🍂', ['I would have fallen', 'كنت أسقط'], ['Conditionnel passé of tomber (être), je form.', 'الـ conditionnel passé لـ tomber (être)، صيغة je.'], [
      ['Je serais tombé par terre.', 'I would have fallen on the ground.', 'كنت أسقط على الأرض.'],
      ['Je serais tombé dans l’eau.', 'I would have fallen in the water.', 'كنت أسقط في الماء.'],
    ]),
    phrase('je me serais levé', '🛏️', ['I would have gotten up', 'كنت أقوم'], ['Conditionnel passé of se lever (être), je form.', 'الـ conditionnel passé لـ se lever (être)، صيغة je.'], [
      ['Je me serais levé tôt.', 'I would have gotten up early.', 'كنت أقوم مبكّرًا.'],
      ['Je me serais levé avant vous.', 'I would have gotten up before you.', 'كنت أقوم قبلكم.'],
    ]),
  ],
  talk: {
    setting: ['Salma demande à Nur ses déplacements passés.', 'Salma asks Nour about her past movements.', 'تسأل سلمى نور عن تنقّلاتها الماضية.'],
    lines: [
      say('salma', 'Nour, tu serais venue me voir ?', 'Nour, would you have come to see me?', 'نور، هل كنت ستأتين لرؤيتي؟'),
      say('nour', 'Oui, Salma ! Je serais allée à Paris.', 'Yes, Salma! I would have gone to Paris.', 'نعم يا سلمى! كنت سأذهب إلى باريس.'),
    ],
  },
  grammar: {
    examples: ['Je serais [allé] à Paris. (conditionnel présent of être + past participle of aller)', 'Je serais [venu] hier soir. (conditionnel présent of être + past participle of venir)', 'Je me serais [levé] tôt. (conditionnel présent of être + past participle of se lever)'],
    question: ['I would have gone to Paris: « Je ___ à Paris. »', 'كنت سأذهب إلى باريس: « Je ___ à Paris. »'],
    options: [['serais allé', 'serais allé'], ['avais allé', 'avais allé'], ['suis allé', 'suis allé']],
    correct: 0,
    explanation: [
      'Movement and reflexive verbs use être as the auxiliary in the conditionnel passé: je serais allé, je serais venu, je serais parti, je serais arrivé, je serais monté, je serais descendu, je serais tombé, je me serais levé. The past participle agrees in gender and number with the subject (je serais allé for a male, je serais allée for a female).',
      'أفعال الحركة والانعكاسيّة تستخدم être كفعل مساعد في الـ conditionnel passé: je serais allé، je serais venu، je serais parti، je serais arrivé، je serais monté، je serais descendu، je serais tombé، je me serais levé. ويُطابق اسم المفعول في الجنس والعدد مع الفاعل (je serais allé للمذكّر، je serais allée للمؤنّث).',
    ],
  },
  transfer: {
    setting: ['Karim imagine ses déplacements passés.', 'Karim imagines his past movements.', 'يتخيّل كريم تنقّلاته الماضية.'],
    lines: [
      say('karim', 'Regarde ! Je serais venu hier soir !', 'Look! I would have come last night!', 'انظر! كنت سآتي البارحة!'),
      say('rana', 'Oui ! Je serais parti en voyage, Karim.', 'Yes! I would have left on a trip, Karim.', 'نعم! كنت سأغادر في رحلة يا كريم.'),
    ],
  },
  write: {
    prompt: ['Say "I would have gone to Paris".', 'قل «كنت سأذهب إلى باريس».'],
    mustInclude: ['serais allé'],
    model: 'Je serais allé à Paris.',
    frame: 'Je ___ à Paris.',
  },
  drills: [
    ['Je ___ à Paris.', ['serais allé', 'avais allé', 'suis allé'], ['Would have gone.', 'كنت سأذهب.']],
    ['Je ___ hier soir.', ['serais venu', 'avais venu', 'suis venu'], ['Would have come.', 'كنت سآتي.']],
    ['Je ___ tôt.', ['serais parti', 'avais parti', 'suis parti'], ['Would have left.', 'كنت سأغادر.']],
  ],
})

const HYPOTHESES = stage({
  id: 'fr2-copasse-hypotheses',
  emoji: '🔮',
  title: ['Les hypothèses du passé', 'Past hypotheses', 'الفرضيّات الماضية'],
  setting: ['Nour imagine des hypothèses sur le passé.', 'Nour imagines hypotheses about the past.', 'تتخيّل نور فرضيّات عن الماضي.'],
  scene: [
    say('bear', 'Si j’avais su hier, j’aurais agi autrement.', 'If I had known yesterday, I would have acted differently.', 'لو كنت عرفت أمس، لكنت تصرّفت بشكل آخر.'),
    say('nour', 'Si j’avais eu le temps, j’aurais voyagé loin.', 'If I had had time, I would have traveled far.', 'لو كان لديّ وقت، لكنت سافرت بعيدًا.'),
    say('bear', 'Si tu m’avais dit la vérité, je serais venu.', 'If you had told me the truth, I would have come.', 'لو أخبرتني بالحقيقة، لكنت أتيت.'),
    say('nour', 'Si elle avait pu venir, elle serait partie.', 'If she had been able to come, she would have left.', 'لو استطاعت المجيء، لكنت غادرت.'),
    say('bear', 'Si nous avions su le sujet, nous aurions répondu.', 'If we had known the topic, we would have answered.', 'لو عرفنا الموضوع، لكنّا أجبنا.'),
    say('duck', 'Bravo ! Si vous aviez étudié plus, vous auriez réussi.', 'Bravo! If you had studied more, you would have succeeded.', 'أحسنت! لو درستم أكثر، لكنتم نجحتم.'),
  ],
  phrases: [
    phrase('si j’avais su', '🤔', ['If I had known', 'لو كنت عرفت'], ['si + plus-que-parfait of savoir.', 'si + plus-que-parfait لـ savoir.'], [
      ['Si j’avais su, j’aurais agi autrement.', 'If I had known, I would have acted differently.', 'لو كنت عرفت، لكنت تصرّفت بشكل آخر.'],
      ['Si j’avais su, j’aurais téléphoné.', 'If I had known, I would have called.', 'لو كنت عرفت، لكنت اتّصلت.'],
    ]),
    phrase('si j’avais eu le temps', '⏰', ['If I had had time', 'لو كان لديّ وقت'], ['si + plus-que-parfait of avoir.', 'si + plus-que-parfait لـ avoir.'], [
      ['Si j’avais eu le temps, j’aurais voyagé.', 'If I had had time, I would have traveled.', 'لو كان لديّ وقت، لكنت سافرت.'],
      ['Si j’avais eu le temps, j’aurais écrit.', 'If I had had time, I would have written.', 'لو كان لديّ وقت، لكنت كتبت.'],
    ]),
    phrase('si tu m’avais dit', '💬', ['If you had told me', 'لو أخبرتني'], ['si + plus-que-parfait of se dire.', 'si + plus-que-parfait لـ se dire.'], [
      ['Si tu m’avais dit, je serais venu.', 'If you had told me, I would have come.', 'لو أخبرتني، لكنت أتيت.'],
      ['Si tu m’avais dit la vérité, j’aurais compris.', 'If you had told me the truth, I would have understood.', 'لو أخبرتني بالحقيقة، لكنت فهمت.'],
    ]),
    phrase('si elle avait pu', '💪', ['If she had been able to', 'لو استطاعت'], ['si + plus-que-parfait of pouvoir.', 'si + plus-que-parfait لـ pouvoir.'], [
      ['Si elle avait pu, elle serait partie.', 'If she had been able to, she would have left.', 'لو استطاعت، لكنت غادرت.'],
      ['Si elle avait pu, elle aurait dansé.', 'If she had been able to, she would have danced.', 'لو استطاعت، لكنت رقصت.'],
    ]),
    phrase('si nous avions su', '👥', ['If we had known', 'لو عرفنا'], ['si + plus-que-parfait of savoir, nous form.', 'si + plus-que-parfait لـ savoir، صيغة nous.'], [
      ['Si nous avions su, nous aurions répondu.', 'If we had known, we would have answered.', 'لو عرفنا، لكنّا أجبنا.'],
      ['Si nous avions su, nous serions venus.', 'If we had known, we would have come.', 'لو عرفنا، لكنّا أتينا.'],
    ]),
    phrase('si vous aviez étudié', '📚', ['If you had studied', 'لو درستم'], ['si + plus-que-parfait of étudier, vous form.', 'si + plus-que-parfait لـ étudier، صيغة vous.'], [
      ['Si vous aviez étudié, vous auriez réussi.', 'If you had studied, you would have succeeded.', 'لو درستم، لكنتم نجحتم.'],
      ['Si vous aviez étudié, vous auriez compris.', 'If you had studied, you would have understood.', 'لو درستم، لكنتم فهمتم.'],
    ]),
    phrase('s’ils avaient eu de l’argent', '💰', ['If they had had money', 'لو كان لديهم مال'], ['si + plus-que-parfait of avoir.', 'si + plus-que-parfait لـ avoir.'], [
      ['S’ils avaient eu de l’argent, ils auraient acheté.', 'If they had had money, they would have bought.', 'لو كان لديهم مال، لكنّم اشتروا.'],
      ['S’ils avaient eu de l’argent, ils auraient voyagé.', 'If they had had money, they would have traveled.', 'لو كان لديهم مال، لكنّم سافروا.'],
    ]),
    phrase('si j’avais été riche', '💎', ['If I had been rich', 'لو كنت غنيًّا'], ['si + plus-que-parfait of être + adjective.', 'si + plus-que-parfait لـ être + صفة.'], [
      ['Si j’avais été riche, j’aurais aidé.', 'If I had been rich, I would have helped.', 'لو كنت غنيًّا، لكنت ساعدت.'],
      ['Si j’avais été riche, j’aurais voyagé.', 'If I had been rich, I would have traveled.', 'لو كنت غنيًّا، لكنت سافرت.'],
    ]),
  ],
  talk: {
    setting: ['Salma demande à Nur ses hypothèses passées.', 'Salma asks Nour about her past hypotheses.', 'تسأل سلمى نور عن فرضيّاتها الماضية.'],
    lines: [
      say('salma', 'Nour, si tu avais su, tu aurais fait quoi ?', 'Nour, if you had known, what would you have done?', 'نور، لو كنت عرفت، ماذا كنت ستفعلين؟'),
      say('nour', 'Si j’avais su, j’aurais agi autrement, Salma.', 'If I had known, I would have acted differently, Salma.', 'لو كنت عرفت، لكنت تصرّفت بشكل آخر يا سلمى.'),
    ],
  },
  grammar: {
    examples: ['Si j’avais su, j’aurais [agi] autrement. (si + plus-que-parfait + conditionnel passé)', 'Si tu m’avais dit, je serais [venu]. (si + plus-que-parfait + conditionnel passé)', 'Si vous aviez étudié, vous auriez [réussi]. (si + plus-que-parfait + conditionnel passé)'],
    question: ['If I had known, I would have acted: « Si j’avais su, j’___ autrement. »', 'لو كنت عرفت لكنت تصرّفت: « Si j’avais su, j’___ autrement. »'],
    options: [['aurais agi', 'aurais agi'], ['ai agi', 'ai agi'], ['agissais', 'agissais']],
    correct: 0,
    explanation: [
      'Past hypothetical sentences use « si + plus-que-parfait, conditionnel passé ». The si-clause takes the plus-que-parfait (j’avais su, j’avais eu, tu m’avais dit, elle avait pu, nous avions su, vous aviez étudié, ils avaient eu, j’avais été) and the main clause takes the conditionnel passé (j’aurais agi, j’aurais voyagé, je serais venu, elle serait partie, nous aurions répondu, vous auriez réussi, ils auraient acheté, j’aurais aidé). This expresses what would have happened in the past if a condition had been met.',
      'الجمل الافتراضيّة الماضية تستخدم «si + plus-que-parfait، conditionnel passé». جملة si تأخذ الـ plus-que-parfait (j’avais su، j’avais eu، tu m’avais dit، elle avait pu، nous avions su، vous aviez étudié، ils avaient eu، j’avais été) والجملة الرئيسيّة تأخذ الـ conditionnel passé (j’aurais agi، j’aurais voyagé، je serais venu، elle serait partie، nous aurions répondu، vous auriez réussi، ils auraient acheté، j’aurais aidé). يعبّر هذا عمّا كان سيحدث في الماضي لو تحقّق شرط.',
    ],
  },
  transfer: {
    setting: ['Karim imagine une hypothèse passée.', 'Karim imagines a past hypothesis.', 'يتخيّل كريم فرضيّة ماضية.'],
    lines: [
      say('karim', 'Regarde ! Si j’avais été riche, j’aurais aidé !', 'Look! If I had been rich, I would have helped!', 'انظر! لو كنت غنيًّا، لكنت ساعدت!'),
      say('rana', 'Oui ! Si nous avions su, nous aurions répondu, Karim.', 'Yes! If we had known, we would have answered, Karim.', 'نعم! لو عرفنا، لكنّا أجبنا يا كريم.'),
    ],
  },
  write: {
    prompt: ['Say "if I had known, I would have acted differently".', 'قل «لو كنت عرفت لكنت تصرّفت بشكل آخر».'],
    mustInclude: ['aurais agi'],
    model: 'Si j’avais su, j’aurais agi autrement.',
    frame: 'Si j’avais su, j’___ autrement.',
  },
  drills: [
    ['Si j’avais su, j’___ autrement.', ['aurais agi', 'ai agi', 'agissais'], ['Would have acted.', 'كنت أتصرّف.']],
    ['Si vous aviez étudié, vous ___ réussi.', ['auriez', 'avez', 'aviez'], ['Would have.', 'لكنتم.']],
    ['Si nous avions su, nous ___ répondu.', ['aurions', 'avons', 'avions'], ['Would have.', 'لكنّا.']],
  ],
})

export const FR_CONDITIONNEL_PASSE = [REGRETS, ETRE, HYPOTHESES]
