// ===== نور الفجر — محرّك القصص اليومية =====

const NOUR_BASE_PROMPT = "anime comic book illustration, beautiful young Arab girl superhero named Nour, wearing teal and gold hijab, golden dawn light radiating from her hands, sunrise background, teal and gold costume, hopeful powerful expression";

// ===== قصة البدايات — الحلقات ١ إلى ٥ =====

const ORIGIN_STORY = [
  {
    title: "ليلة الظلام الكبير",
    setting: "مدينة الفجر الساحلية — انقطاع كامل للكهرباء",
    isOrigin: true,
    story: "في ليلة من ليالي الشتاء البارد، انقطع الكهرباء عن مدينة الفجر بالكامل. لم يكن ذلك عطلاً عادياً — بل كان ظلاماً من نوع آخر، ثقيل وصامت، كأن الليل قرّر أن يبقى للأبد. وفي الشارع رقم سبعة، في الطابق الثالث من بناية قديمة، كانت نور البالغة من العمر ثلاثة عشر عاماً تجلس وحدها وسط الحلك، تمدّ يدها أمامها ولا ترى شيئاً. ثم — لأول مرة في حياتها — رأت اليد نفسها تضيء.",
    panels: [
      { caption: "مدينة الفجر. الساعة التاسعة مساءً. انقطع الكهرباء عن كامل المدينة دفعةً واحدة، وغرق كل شيء في ظلام لم يشهده أحد من قبل.", speech: "انقطع الكهرباء! يا ولاد، لا تتحركوا — ابقوا أين أنتم!", speaker: "أحد الجيران", isNour: false, scene: "entire coastal city plunging into total darkness at night, apartment buildings going dark, people calling from windows, candles appearing in some windows, the sudden silence of a city without power, atmospheric comic panel" },
      { caption: "في غرفتها، مدّت نور يدها في الظلام الدامس — ثم توقّف قلبها للحظة. كانت يدها تضيء. ضوء ذهبي دافئ يخرج من أصابعها.", speech: "ما... ما هذا؟! يدي — يدي تضيء!", speaker: "نور", isNour: true, scene: "teenage girl in dark room staring at her own hand which is glowing warm gold, eyes wide with shock and wonder, darkness all around her, the light from her hand illuminating her face, beautiful origin moment comic art" },
      { caption: "بلا تفكير، نزلت نور إلى الشارع. الجيران يتحسسون الطريق في الظلام. الأطفال يبكون. الكبار في حيرة. وهي تحمل في يديها ما يحتاجه الجميع.", speech: "لا تخافوا — أنا هنا. سأضيء لكم الطريق.", speaker: "نور", isNour: true, scene: "teenage girl walking into dark street with golden light emanating from both her hands, scared neighbors visible in the darkness around her, children stopping crying as they see the light, first public use of her power, moving comic panel" },
      { caption: "تلك الليلة، أضاءت نور الشارع كله حتى عاد الكهرباء. ولم تفهم ما حدث — لكنها لم تخف. بدلاً من ذلك، فكّرت: لماذا جاء هذا النور الآن؟", speech: "أتساءل... هل كان الضوء دائماً هناك، ينتظر أن يُستدعى؟", speaker: "نور", isNour: true, scene: "teenage girl sitting on her building steps after power returned, looking at her now-normal hands thoughtfully, street lights back on, neighbors glancing at her, a girl beginning to understand she is something new, comic art" }
    ]
  },
  {
    title: "النور في يديها",
    setting: "شاطئ مدينة الفجر — الفجر الأول بعد الاكتشاف",
    isOrigin: true,
    story: "لم تنم نور تلك الليلة. خرجت قبل شروق الشمس إلى الشاطئ الخالي، حيث لم يكن أحد يراها. جلست على الرمال الباردة وبدأت تسأل يديها أسئلة — بجدية، بصبر، كمن يتعلم لغة جديدة. ما الذي يجعل النور يأتي؟ ما الذي يجعله يذهب؟ ومتى يقرر بنفسه؟",
    panels: [
      { caption: "قبل الفجر بساعة. نور تجلس وحدها على الشاطئ الخالي، تمدّ كفّيها نحو السماء المعتمة، وتسأل بصمت: هل أنتِ هنا؟", speech: "إذا كنتِ هناك... أرنا نفسكِ مرة أخرى. من فضلك.", speaker: "نور", isNour: true, scene: "teenage girl sitting alone on empty dark beach before dawn, both hands raised palms up toward the dark sky, speaking softly, the sea behind her, pre-dawn darkness, intimate and hopeful comic panel" },
      { caption: "جاء النور. هذه المرة أقوى — دائرة ذهبية تمتد من يديها وتُضيء الرمال من حولها على بُعد عشرة أمتار.", speech: "أوه. كثيرٌ جداً. قليلاً... قليلاً... هكذا!", speaker: "نور", isNour: true, scene: "teenage girl with golden light circle exploding from her hands illuminating the whole beach around her, then concentrating it smaller, learning control, expression of concentration and delight, beautiful pre-dawn comic art" },
      { caption: "ثم طلع الفجر. وحين لمسَت خيوط الشمس الأولى يديها — ازداد النور في داخلها حتى شعرت أنها ستطير.", speech: "الفجر... الفجر يُغذّيني! أنا مصنوعة منه!", speaker: "نور", isNour: true, scene: "teenage girl at the exact moment of dawn, first sunrays touching her hands and face, her golden power blazing to full strength, hair blowing back, eyes shining, the sea and sunrise behind her, magnificent origin revelation comic art" },
      { caption: "وقفت نور في ضوء الفجر وفهمت: هي ليست شخصاً يملك قوة. هي ابنة الفجر. وهذا كان دائماً اسمها الحقيقي.", speech: "نور الفجر. هذا ما كانت تعنيه جدّتي حين سمّتني.", speaker: "نور", isNour: true, scene: "teenage girl standing tall at dawn on the beach, golden light surrounding her entirely, the sunrise behind her, realizing the meaning of her name, beautiful peaceful self-discovery, the most important moment of the origin story, comic art" }
    ]
  },
  {
    title: "أول إنقاذ",
    setting: "سوق مدينة الفجر القديم — حريق في المخزن",
    isOrigin: true,
    story: "لم تكن نور قد قرّرت بعد ماذا ستفعل بقدرتها. كانت لا تزال تتعلم، تتدرّب، تطرح أسئلة لا إجابة لها. ثم جاء الصباح الثالث، ومعه رائحة الدخان من السوق القديم، وصوت طفل يصرخ من الطابق الثاني، وقرار لم تفكر فيه — بل فعلته قبل أن تفكر.",
    panels: [
      { caption: "صباح اليوم الثالث. رائحة الدخان تملأ حارة السوق القديم. حريق اشتعل في مخزن الأقمشة، والنيران تتسلل إلى البنايات المجاورة.", speech: "حريق! حريق في المخزن! اتصلوا بالإطفاء!", speaker: "صاحب الدكان", isNour: false, scene: "fire spreading in an old market warehouse, smoke billowing into a narrow alley, shopkeepers running and shouting, the cramped old market architecture with adjacent buildings at risk, urgent comic panel" },
      { caption: "من نافذة الطابق الثاني، كان صوت طفل يصرخ. السلّم محترق. الإطفاء لن يصل في الوقت المناسب. ونور كانت في السوق لتشتري خبزاً.", speech: "في الداخل — طفل في الداخل! لا أحد يقدر يصل إليه!", speaker: "امرأة", isNour: false, scene: "woman pointing desperately at second floor window through which a child can be seen, the staircase below burning, crowd of helpless onlookers, nour visible at the edge of the crowd, her expression changing from bystander to hero, comic panel" },
      { caption: "لم تفكر نور. رفعت يديها وأطلقت درعاً من النور بينها وبين النيران — وصعدت.", speech: "لا تتحرك. أنا قادمة إليك.", speaker: "نور", isNour: true, scene: "teenage girl walking through fire with golden light shield surrounding her, flames parting around her protective light barrier, determined fearless expression, smoke and fire all around her, first hero moment, powerful comic art" },
      { caption: "نزلت نور تحمل الطفل — محاطَين بفقاعة نور ذهبية — أمام أعين الناس المذهولين في الشارع.", speech: "من هي هذه البنت؟ خرجت من النار!", speaker: "رجل من الحشد", isNour: false, scene: "teenage girl emerging from burning building holding a small child, both enclosed in a golden light bubble, the crowd watching in astonishment, fire visible behind them, first public hero rescue, dramatic triumphant comic art" }
    ]
  },
  {
    title: "سرّ العائلة",
    setting: "بيت الجدة — ليلة الاعتراف",
    isOrigin: true,
    story: "بعد حادثة الحريق، انتشر خبر 'الفتاة النورانية' في السوق. وعندما سمعت جدة نور — رحمة الحاجة، التي عاشت تسعين عاماً وتعرف أكثر مما تقول — قالت بهدوء تام: 'اجلسي يا نور. كنت أنتظر أن تحدث هذه اللحظة.' وكشفت لها سراً كان مدفوناً في العائلة منذ ثلاثة أجيال.",
    panels: [
      { caption: "جدة نور تقرأ الأخبار على هاتفها — 'فتاة مجهولة تنقذ طفلاً من حريق بنور خارج من يديها' — ثم تضع الهاتف وتشرب قهوتها بهدوء تام.", speech: "جدّتي... شوفتِ الأخبار؟", speaker: "نور", isNour: true, scene: "grandmother sitting calmly reading news article about the fire rescue on her phone, granddaughter watching her nervously, the grandmother's expression utterly unsurprised, cup of coffee in hand, quiet domestic moment before a revelation, comic panel" },
      { caption: "قالت الجدة: 'اجلسي.' وأخرجت من درج قديم صورة عائلية التقطت منذ خمسين عاماً. فيها امرأة تقف في ضوء فجر غريب يخرج من يديها.", speech: "جدّتكِ الكبرى — أم أمّكِ — كانت مثلكِ تماماً. والتي قبلها كذلك.", speaker: "الجدة", isNour: false, scene: "elderly grandmother showing granddaughter an old photograph from fifty years ago of a woman standing in unusual golden dawn light from her hands, the resemblance clear, the family secret revealed, emotional family moment, comic art" },
      { caption: "أمضت نور والجدة ساعتين تتحدثان. عرفت نور أنها ليست غريبة ولا مختلفة — بل هي آخر من يحمل هبة الفجر في عائلتها.", speech: "كلهن أخفينها؟ لماذا؟", speaker: "نور", isNour: true, scene: "grandmother and granddaughter deep in conversation at kitchen table, old photographs between them, late night, the weight of family secrets and the relief of understanding, intimate warm comic panel" },
      { caption: "قالت الجدة ببساطة: 'لأن الهبة تنتظر الشخص المناسب، في الوقت المناسب. ويبدو يا نور أن وقتكِ قد جاء الآن.'", speech: "أنتِ لستِ وحدكِ في هذا. لم تكوني يوماً وحدكِ.", speaker: "الجدة", isNour: false, scene: "grandmother taking granddaughter's glowing hands in her own weathered ones, looking at her with deep love and certainty, golden light between their joined hands, most tender moment of the origin story, beautiful comic art" }
    ]
  },
  {
    title: "فجر جديد",
    setting: "مدينة الفجر — الصباح الذي اختارت فيه اسمها",
    isOrigin: true,
    story: "في الصباح التالي، صعدت نور إلى سطح البناية قبل الفجر، وحدها، وانتظرت. انتظرت ضوء الشمس الأول بصبر من يعرف أن شيئاً جميلاً قادم. وحين جاء الفجر — بكل ألوانه الذهبية والفيروزية — فتحت يديها وقالت بصوت عالٍ لأول مرة: 'أنا نور الفجر.' وردّ عليها الفجر.",
    panels: [
      { caption: "قبل الفجر بدقائق. نور تقف على سطح البناية، ظهرها للمدينة النائمة، ووجهها نحو الأفق المعتم. تنتظر.", speech: "لم أختر هذه القوة. لكنني أختار ما سأفعله بها.", speaker: "نور", isNour: true, scene: "teenage girl standing alone on rooftop before dawn facing the dark horizon, city sleeping behind her, completely calm and resolute, the stillness before a decision, beautiful atmospheric comic panel" },
      { caption: "لمسَت الشمسُ الأفقَ. وكأن العالم أخذ نفساً. فتحت نور يديها — وجاء الفجر.", speech: "أهلاً يا فجر. أنا هنا.", speaker: "نور", isNour: true, scene: "teenage girl opening her hands at the exact moment of sunrise, dawn light flooding into her palms and blazing outward, teal and gold energy filling the rooftop, the city below beginning to wake, magnificent dawn scene comic art" },
      { caption: "طار نور للمرة الأولى — محمولةً على خيوط ضوء الفجر، تحلّق فوق مدينتها النائمة وهي تضحك.", speech: "أستطيع الطيران! الفجر يحملني! يا إلهي — الجميع نائم ولا أحد يرى هذا!", speaker: "نور", isNour: true, scene: "teenage girl flying for the first time carried on beams of dawn light, soaring over her sleeping coastal city, laughing with pure joy, the sunrise behind her, gold and teal trails, the most joyful panel of the origin story, exuberant comic art" },
      { caption: "هبطت على سطح البناية. المدينة تصحو تدريجياً. واتخذت نور قرارها النهائي: من اليوم وصاعداً، هي نور الفجر — وهبتها ليست لنفسها. هي لمن يحتاج النور.", speech: "أنا نور الفجر. ونوري ليس لي وحدي.", speaker: "نور", isNour: true, scene: "teenage girl landing back on rooftop at full sunrise, city fully lit by dawn behind her, standing with quiet confidence and open hands, the hero she has decided to become fully visible in her expression, perfect origin ending comic art" }
    ]
  }
];

// ===== المغامرات اليومية =====

const ADVENTURES = [
  {
    title: "الطفل الضائع",
    setting: "سوق مدينة الفجر — يوم جمعة مزدحم",
    isOrigin: false,
    story: "سوق الجمعة في مدينة الفجر مزدحم كالعادة — آلاف الأشخاص، أصوات، روائح، ألوان. في هذا الفوضى الجميلة، ضاع طفل صغير لا يتجاوز الرابعة من عمره. أمه تصرخ اسمه منذ عشر دقائق. والناس يتوقفون ليساعدوا لكن السوق واسع وكل شارع يبدو مثل الآخر. نور كانت تتسوّق للجدة حين سمعت الصراخ.",
    panels: [
      { caption: "سوق الجمعة. ازدحام وضجيج وفرحة. وسط كل هذا، صوت أم تصرخ اسم ابنها بيأس متزايد منذ عشر دقائق.", speech: "يوسف! يوسف أين أنتَ؟! ساعدوني — ابني ضاع!", speaker: "الأم", isNour: false, scene: "crowded Friday market in a coastal city, a mother looking desperately in every direction calling for her child, helpful shoppers stopping to assist, the overwhelming scale of the market making the search seem impossible, urgent human comic panel" },
      { caption: "نور أغمضت عينيها. النور يرى ما لا تراه العيون — كل مصدر دفء بشري في محيط خمسمائة متر. الطفل الصغير: درجة حرارته أعلى لأنه يبكي.", speech: "أشعر به. هناك — عند الجزء الجنوبي من السوق، عند بائع التوابل.", speaker: "نور", isNour: true, scene: "teenage girl with eyes closed sensing with her dawn-light the heat signatures of people around her, identifying the small child by the elevated warmth of crying, focused sensing expression, the ability described beautifully in visual form, comic art" },
      { caption: "وجدت نور يوسف جالساً بكل هدوء تحت طاولة التوابل، يأكل تمرة أعطاه إياها البائع الطيب، غير مدركٍ لأي شيء.", speech: "يوسف؟ أنا نور. أمك تبحث عنكَ. أتيت لأوصلك إليها.", speaker: "نور", isNour: true, scene: "teenage girl crouching to find small boy happily eating a date under a spice vendor's table, the vendor watching kindly, the boy completely calm, funny contrast with his panicked mother, warm gentle comic scene" },
      { caption: "حين رأت الأم ابنها قادماً يمشي مع الفتاة النورانية، أمسكته وبكت وضحكت في نفس الوقت. ويوسف نظر إلى نور وقال شيئاً لم تتوقعه.", speech: "أنتِ لامعة مثل الصبح. هل أنتِ الشمس؟", speaker: "يوسف", isNour: false, scene: "mother tearfully embracing her son while also laughing with relief, the small boy looking back at Nour who is glowing gently, his innocent question hanging in the air, warm heartfelt funny comic ending" }
    ]
  },
  {
    title: "الحريق في المدرسة",
    setting: "مدرسة الفجر الابتدائية — منتصف يوم الدراسة",
    isOrigin: false,
    story: "منتصف يوم الإثنين. مئتان وعشرون طالباً في فصولهم. حريق بدأ من مختبر العلوم في الطابق الثالث — شرارة صغيرة من معدات قديمة — وانتشر أسرع مما توقعه أحد. المعلمون يحاولون تنظيم الإخلاء بكل هدوء. لكن الطابق الثالث به أربعة فصول والدخان يقطع طريق السلّم الرئيسي.",
    panels: [
      { caption: "صافرة الإنذار تصدح في مدرسة الفجر الابتدائية. في الطابق الثالث، الدخان يملأ الممر. أربعة فصول — ستة وثمانون طالباً — لا يستطيعون الوصول للسلم.", speech: "الطابق الثالث مقطوع! الدخان في السلم الرئيسي — لا يمكنهم النزول!", speaker: "مديرة المدرسة", isNour: false, scene: "school fire alarm blaring, smoke filling a third floor corridor, four classroom doors visible with children trapped inside, main staircase blocked by smoke, principal on the phone urgently, comic panel" },
      { caption: "نور وصلت قبل الإطفاء. من الخارج، رفعت يديها وخلقت ممراً من النور — حاجزاً شفافاً يدفع الدخان بعيداً ويُبقي الهواء نظيفاً في الممر.", speech: "سأفتح لكم طريقاً. اسمعوني — امشوا في الضوء الذهبي ولا تتوقفوا.", speaker: "نور", isNour: true, scene: "teenage girl outside school with arms raised creating a corridor of clear golden light pushing smoke away, inside the school the children can see the golden path through the smoke, teachers beginning to lead students through it, remarkable visual, comic art" },
      { caption: "طفل واحد بقي — رفض المغادرة وهو يبكي لأن قطته الصغيرة كانت في حقيبته وسقطت منه في الفوضى.", speech: "هرتي! هرتي ضاعت في الممر! ما أقدر أمشي بدونها!", speaker: "طالب", isNour: false, scene: "one small boy refusing to leave, crying about his kitten lost in the smoky corridor, teacher trying to guide him, the heroism of a child's love, comic panel" },
      { caption: "دخلت نور إلى الممر المليء بالدخان، وجدت القطة الصغيرة خائفة تحت خزانة، وخرجت بها محمولةً في فقاعة نور. الطفل توقف عن البكاء على الفور.", speech: "هرتك بخير. وأنتَ بخير. والآن — نمشي.", speaker: "نور", isNour: true, scene: "Nour emerging from smoky school corridor holding a small frightened kitten in a protective bubble of golden light, the crying boy's face transforming to pure relief, teachers and students watching, warm funny heroic moment, comic art" }
    ]
  },
  {
    title: "عاصفة على البحر",
    setting: "البحر قبالة مدينة الفجر — قارب صيد في عاصفة",
    isOrigin: false,
    story: "خرج أبو كريم وابنه للصيد فجراً، كما يفعلون كل يوم منذ عشرين عاماً. لكن هذا الفجر لم يكن كالمعتاد — عاصفة صيفية مفاجئة تحوّلت في ساعة واحدة من نسيم خفيف إلى أمواج تتجاوز أربعة أمتار. المحرك توقف. لا رادار. لا رؤية. وموجة عالية قادمة نحوهم.",
    panels: [
      { caption: "في البحر، على بُعد كيلومترين من الشاطئ، يتمسّك أبو كريم وابنه كريم بجانبي القارب الصغير وسط أمواج عاتية لم يرياها من قبل.", speech: "يا كريم! تمسّك! لا تترك السطح — تمسّك!", speaker: "أبو كريم", isNour: false, scene: "small fishing boat being tossed violently by huge storm waves, father and teenage son holding on desperately, rain and waves overwhelming them, the scale of the sea dwarfing their small vessel, terrifying but beautiful comic panel" },
      { caption: "نور شعرت بهم — دفء الإنسان وسط بُرودة العاصفة — من على سطح بنايتها. قفزت إلى الهواء وطارت نحو البحر.", speech: "شخصان. كيلومتران. في القلب. أطير.", speaker: "نور", isNour: true, scene: "teenage girl launching herself off a rooftop toward the stormy sea, golden light trailing behind her, flying straight into the storm, the city and coastline behind her, decisive urgent action, comic art" },
      { caption: "حين وصلت، أحاطت القارب بدرع من نور الفجر — يوقف الأمواج، يثبّت الجسم، يُبقي الهواء جافاً بداخله.", speech: "لستم وحدكم الآن. درعي سيُبقيكم بأمان حتى تهدأ العاصفة.", speaker: "نور", isNour: true, scene: "teenage girl hovering above the small boat in the middle of the storm, both arms extended creating a golden dome shield around the boat, massive waves crashing against the shield harmlessly, father and son inside watching in awe, spectacular comic art" },
      { caption: "بعد ثلاثين دقيقة، هدأت العاصفة. وكريم نظر إلى نور وقال الجملة الوحيدة المناسبة لهذه اللحظة.", speech: "بابا... أعتقد أن فجر اليوم كان مختلفاً عن المعتاد.", speaker: "كريم", isNour: false, scene: "storm calming, the golden dome dissolved, father and son in their boat safe and wet, looking up at Nour who is floating above them smiling, the sun beginning to break through the clouds, wonderful understatement comic ending" }
    ]
  },
  {
    title: "امتحان الفيزياء",
    setting: "مدرسة الفجر الثانوية — يوم الامتحان",
    isOrigin: false,
    story: "نور بنت عادية في كل شيء تقريباً — إلا في الفيزياء. الفيزياء أصعب حين تكونين أنتِ نفسكِ ظاهرة فيزيائية غير مُفسَّرة. سؤال 'اشرحي ما هو الضوء' يأخذ معنى مختلفاً حين يخرج الضوء من يديكِ. والأصعب: إخفاء ذلك عن زميلاتكِ الفضوليات.",
    panels: [
      { caption: "امتحان الفيزياء. السؤال الثاني: 'اشرحي بالتفصيل طبيعة الضوء.' نور تحدّق في الورقة. الضوء. نعم. تعرفه جيداً.", speech: "الضوء هو... أنا. كيف أشرح نفسي في ثلاثة أسطر؟", speaker: "نور", isNour: true, scene: "teenage girl staring at her physics exam paper, question about the nature of light, her hand beginning to glow slightly without her intending it, trying to suppress it, funny ironic situation comic panel" },
      { caption: "في لحظة تركيز شديد، أضاءت ورقة الامتحان من تلقاء نفسها — والزميلة التي بجانبها رفعت رأسها.", speech: "نور... ورقتك... تضيء؟", speaker: "زميلة", isNour: false, scene: "exam paper glowing with golden light, the student sitting next to Nour noticing and staring, Nour's mortified expression, other students beginning to look, comic scene" },
      { caption: "حوّلت نور الضوء الهارب إلى قلمها — وكتبت إجابة الفيزياء من التجربة الشخصية المباشرة، لا من الكتاب.", speech: "الضوء طاقة تنتقل في موجات... أشعر بها. حرفياً.", speaker: "نور", isNour: true, scene: "Nour channeling the accidental glow into her pen, writing furiously and brilliantly, her pen leaving slightly glowing words on the paper, the most accurate physics answer ever written from personal experience, funny proud comic panel" },
      { caption: "علامة نور في الامتحان: مئة من مئة. تعليق المعلمة على ورقتها: 'إجابة استثنائية. تكتبين كأنك عشتِ الضوء.'", speech: "لا تعرفين مدى دقة تعليقك يا أستاذة.", speaker: "نور", isNour: true, scene: "Nour looking at her exam paper marked 100/100 with teacher's comment, trying to keep a straight face, warm funny ending, the comedy of being a superhero with physics homework, delightful comic panel" }
    ]
  },
  {
    title: "الجدة والمرض",
    setting: "بيت الجدة — ليلة صعبة",
    isOrigin: false,
    story: "نور تستطيع كثيراً من الأشياء. تطير. تُضيء. تحمي. تشفي. لكن حين مرضت جدتها رحمة الحاجة وارتفعت درجة حرارتها في الليل ورفضت الطبيب، وجلست نور بجانبها تمسك يدها في الظلام — في تلك اللحظة أدركت أن أهم استخدامات النور هو أبسطها.",
    panels: [
      { caption: "منتصف الليل. جدة نور نائمة بصعوبة، وجهها ساخن، تنفسها ثقيل. نور جالسة بجانبها في الظلام تمسك يدها.", speech: "جدّتي... أنا هنا. لا تقلقي.", speaker: "نور", isNour: true, scene: "teenage girl sitting beside her sleeping elderly grandmother's bed in the dark, holding her hand, the grandmother's face showing mild fever, the quiet vigil of someone who loves another and can only be present, gentle comic panel" },
      { caption: "بهدوء، دون أن تُيقظها، أخرجت نور ضوءاً دافئاً خافتاً من يديها — مثل ضوء الفجر تماماً — وأمرّته ببطء على جبهة جدتها.", speech: "الشفاء لا يحتاج ضوضاء. يحتاج صبراً ودفئاً.", speaker: "نور", isNour: true, scene: "Nour gently passing warm soft golden healing light over her grandmother's forehead, the grandmother's tense expression relaxing, the light subtle and tender like dawn light rather than dramatic, most intimate healing scene, beautiful comic art" },
      { caption: "بعد ساعة، فتحت الجدة عينيها. الحرارة أقل. تنفسها أهدأ. نظرت إلى يدي نور المضيئتين وابتسمت.", speech: "كنتِ تشفينني يا نور؟ منذ متى وأنتِ هنا؟", speaker: "الجدة", isNour: false, scene: "grandmother opening her eyes to find Nour still sitting beside her, the fever clearly reduced, Nour's hands softly glowing, the grandmother's expression of love and gratitude, middle-of-the-night quiet warmth, comic art" },
      { caption: "أجابت نور ببساطة مطلقة.", speech: "منذ البداية. ومن الآن لن أذهب إلى أي مكان.", speaker: "نور", isNour: true, scene: "Nour squeezing grandmother's hand, both of them in the quiet dark room, the simplest and most powerful use of her gift, no explosions or rescues, just love expressed through light, the most human comic panel of the whole series" }
    ]
  },
  {
    title: "يوم في الحديقة",
    setting: "حديقة مدينة الفجر العامة — يوم إجازة",
    isOrigin: false,
    story: "ليس كل يوم يجب أن يكون مليئاً بالإنقاذ والبطولة. أحياناً — في يوم إجازة دافئ، في حديقة مليئة بالأطفال والموسيقى وبائعي الفشار — نور تريد فقط أن تكون فتاة عادية تقرأ كتابها وتشرب عصيرها البرتقالي. لكن هذه الحديقة تعرف نور، والأطفال الذين فيها يعرفون نور.",
    panels: [
      { caption: "يوم إجازة. نور في الحديقة العامة بملابس عادية، كتابها في يدها، شمس دافئة فوقها. خطتها: لا بطولة اليوم. فقط راحة.", speech: "اليوم لا أحد يحتاج إنقاذاً. سأقرأ خمسين صفحة وأنام ساعة. هذا القرار نهائي.", speaker: "نور", isNour: true, scene: "teenage girl in casual clothes sitting on park bench with a book, enjoying a normal day off, looking determined to relax, a rare moment of planned ordinariness, comic panel" },
      { caption: "خمس دقائق لاحقاً، خمسة أطفال يحيطون بها يسألونها أن تصنع لهم فراشات من النور.", speech: "أنتِ بنت النور! صنعي لنا فراشات! أمس صنعتِ لعمر فيلاً!", speaker: "الأطفال", isNour: false, scene: "five small children immediately surrounding Nour on the park bench, pulling at her sleeve, asking for light creatures, Nour's resigned expression, her book face-down on the bench, the impossibility of a superhero taking a day off, funny comic scene" },
      { caption: "صنعت نور الفراشات. والسمكة الذهبية. والغزال. وقطار صغير طاف حول الحديقة مرتين. خطة الراحة انتهت في خمس دقائق.", speech: "والآن أريد تنيناً! تنيناً كبيراً يطير!", speaker: "طفل", isNour: false, scene: "Nour creating beautiful golden light butterflies and animals for a group of increasingly excited children, she's now completely surrounded, her book forgotten, the park gathering to watch, joyful chaos, comic art" },
      { caption: "في نهاية اليوم، وهي تمشي للبيت متعبة وسعيدة في نفس الوقت، قررت نور أن بعض أنواع الراحة تأتي بأشكال غير متوقعة.", speech: "لم أقرأ ولا صفحة واحدة. وكان أجمل يوم في الأسبوع.", speaker: "نور", isNour: true, scene: "Nour walking home at sunset tired and happy, looking back at the park where children are still talking about the light animals, a smile she can't suppress, the joy of unexpected gifts, wonderful warm comic ending" }
    ]
  },
  {
    title: "لقاء فوق الغيوم",
    setting: "السماء فوق البحر المتوسط — لقاء غير متوقع",
    isOrigin: false,
    story: "أكبر مفاجأة في رحلة نور الطائرة فوق البحر لم تكن الإعصار الصغير الذي رأته على الأفق — بل كانت الفتاة الأخرى التي طارت بجانبها من الاتجاه الثاني، تحمل في يديها برق أحمر وذهبي. نور لم تكن تعرف أن هناك أحداً مثلها. وريما الجارة الخليجية لم تتوقع أن تجد أحداً يطير فوق البحر في هذا الصباح.",
    panels: [
      { caption: "فوق البحر. نور تطير في الصباح الباكر، الهواء بارد ونظيف، لا شيء حولها إلا السماء. ثم — من الجهة الأخرى — رأت شيئاً.", speech: "انتظري... هل ذاك... شخص آخر يطير؟", speaker: "نور", isNour: true, scene: "Nour flying above the Mediterranean sea in early morning, spotting another flying figure approaching from the opposite direction, both trailing energy of different colors, gold-teal and red-gold, surprise recognition comic panel" },
      { caption: "اقتربا من بعضهما بحذر. ريما بضوءها البرقي الأحمر. نور بنور فجرها الذهبي. توقفتا في الهواء تتأملان بعضهما.", speech: "أنت أيضاً...؟", speaker: "كلتاهما معاً", isNour: true, scene: "two teenage girl superheroes hovering facing each other above the sea, one in red and gold crackling lightning, one in gold and teal dawn light, both with identical expression of surprised recognition, speaking the same words at the same moment, wonderful comic moment" },
      { caption: "ضحكتا معاً. ثم جلستا على سحابة — بطريقة لم تحاول أي منهما من قبل — وتحدثتا ساعة كاملة.", speech: "أنا ريما من الخليج. البرق. أنتِ؟", speaker: "ريما", isNour: false, scene: "two teenage superheroes sitting on a cloud above the sea talking, casual impossible normalcy, Rima with lightning around her and Nour with dawn light, getting to know each other, wonderful first meeting comic art" },
      { caption: "حين افترقتا، وعدتا بأن تقابلا مجدداً. وريما قالت شيئاً بقي في ذهن نور طويلاً.", speech: "كون سنهافن كبير يا نور. وأعتقد أننا نحتاج بعضنا.", speaker: "ريما", isNour: false, scene: "two heroes flying off in their different directions over the sea, one red trail and one gold-teal trail diverging, both looking back at each other with new friendship, the vast sky and sea, hopeful universe-building comic ending" }
    ]
  }
];

const TOTAL_ORIGIN = ORIGIN_STORY.length;
const TOTAL_ADVENTURES = ADVENTURES.length;

function dateToDayNumber(date) {
  const epoch = new Date(2026, 3, 18);
  return Math.max(1, Math.floor((date - epoch) / 86400000) + 1);
}
function dayNumberToDate(n) {
  return new Date(new Date(2026, 3, 18).getTime() + (n - 1) * 86400000);
}
function formatDate(date) {
  return date.toLocaleDateString('ar-SA', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}
function getEpisodeForDay(dayNum) {
  if (dayNum <= TOTAL_ORIGIN) return { episode: ORIGIN_STORY[dayNum - 1], isOrigin: true, originIndex: dayNum };
  return { episode: ADVENTURES[(dayNum - TOTAL_ORIGIN - 1) % TOTAL_ADVENTURES], isOrigin: false, originIndex: null };
}
function buildImageUrl(panel, panelIndex, dayNum) {
  const seed = (dayNum * 100 + panelIndex + 999);
  const prompt = `${NOUR_BASE_PROMPT}, ${panel.scene}, vibrant colors, clean lines, no text, no watermark, manga comic book panel`;
  return `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=400&height=300&seed=${seed}&nologo=true&enhance=false&model=flux-schnell`;
}

function renderComic(dayNum) {
  const todayNum = dateToDayNumber(new Date());
  const { episode, isOrigin, originIndex } = getEpisodeForDay(dayNum);
  const date = dayNumberToDate(dayNum);
  document.getElementById('episodeNum').textContent = `#${dayNum}`;
  document.getElementById('dateLabel').textContent = formatDate(date);
  document.getElementById('comicTitle').textContent = episode.title;
  document.getElementById('comicSetting').textContent = `📍 ${episode.setting}`;
  document.getElementById('comicStory').textContent = episode.story || '';
  const originTag = document.getElementById('originTag');
  const originBanner = document.getElementById('originBanner');
  if (isOrigin) {
    originTag.style.display = 'block';
    originTag.textContent = `📖 قصة البدايات — الفصل ${originIndex} من ${TOTAL_ORIGIN}`;
    originBanner.style.display = 'block';
    document.getElementById('originProgress').textContent = `الفصل ${originIndex} من ${TOTAL_ORIGIN} — تابعي نور من البداية.`;
  } else { originTag.style.display = 'none'; originBanner.style.display = 'none'; }
  document.getElementById('prevBtn').disabled = dayNum <= 1;
  document.getElementById('nextBtn').disabled = dayNum >= todayNum;
  const grid = document.getElementById('panelsGrid');
  grid.innerHTML = '';
  episode.panels.forEach((panel, i) => {
    const panelLabel = `اللوحة ${i + 1}`;
    const el = document.createElement('div');
    el.className = 'panel';
    el.innerHTML = `
      <div class="panel-num">${panelLabel}</div>
      <div class="panel-img-wrap">
        <div class="panel-loader" id="nloader-${i}"><div class="loader-dawn">🌅</div><div class="loader-text">جار رسم ${panelLabel}…</div></div>
        <img class="panel-img loading" id="nimg-${i}" alt="${panelLabel}: ${panel.caption}" />
        <div class="speech-bubble ${panel.isNour ? 'nour' : ''}"><span class="bubble-speaker">${panel.speaker}</span>"${panel.speech}"</div>
      </div>
      <div class="panel-caption">${panel.caption}</div>
    `;
    grid.appendChild(el);
    const img = el.querySelector(`#nimg-${i}`), loader = el.querySelector(`#nloader-${i}`);
    img.onload = () => { img.classList.remove('loading'); img.classList.add('loaded'); loader.classList.add('hidden'); };
    img.onerror = () => { img.style.display = 'none'; loader.innerHTML = `<div style="text-align:center;padding:20px;font-size:.85rem;color:#0f4c48;font-family:Cairo,sans-serif;"><div style="font-size:2rem;margin-bottom:8px">🌅</div><div><em>${panel.caption}</em></div><div style="margin-top:8px;font-size:.75rem;color:#aaa">جار توليد الصورة…<br>حدّث الصفحة للمحاولة مجدداً</div></div>`; loader.classList.remove('hidden'); };
    setTimeout(() => { img.src = buildImageUrl(panel, i, dayNum); }, i * 500);
  });
  const url = new URL(window.location);
  dayNum === todayNum ? url.searchParams.delete('day') : url.searchParams.set('day', dayNum);
  window.history.replaceState({}, '', url);
  document.querySelector('main').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

let currentDay = dateToDayNumber(new Date());
function changeDay(delta) { currentDay += delta; renderComic(currentDay); }
function toggleCharCard() { document.getElementById('charCard').classList.toggle('open'); }
function copyLink() { const u = window.location.href; navigator.clipboard ? navigator.clipboard.writeText(u).then(() => showToast('تم نسخ الرابط! 🌅')).catch(() => fallbackCopy(u)) : fallbackCopy(u); }
function fallbackCopy(text) { const ta = document.createElement('textarea'); ta.value = text; ta.style.cssText = 'position:fixed;opacity:0'; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); document.body.removeChild(ta); showToast('تم نسخ الرابط! 🌅'); }
function shareTwitter() { const { episode } = getEpisodeForDay(currentDay); const text = `أقرأ قصة نور الفجر الحلقة #${currentDay}: "${episode.title}" — قصص يومية مجانية! 🌅`; window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(window.location.href)}`, '_blank'); }
function showToast(msg) { const t = document.getElementById('toast'); t.textContent = msg; t.classList.add('show'); setTimeout(() => t.classList.remove('show'), 2500); }

(function init() {
  const params = new URLSearchParams(window.location.search);
  const dayParam = parseInt(params.get('day'));
  const todayNum = dateToDayNumber(new Date());
  currentDay = (dayParam && dayParam >= 1 && dayParam <= todayNum) ? dayParam : todayNum;
  renderComic(currentDay);
})();
