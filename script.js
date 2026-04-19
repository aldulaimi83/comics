// ===== ZARA THE SUNBEAM — Daily Comic Generator =====

let currentLang = 'en';

const ZARA_BASE_PROMPT = "anime comic book illustration, young girl superhero named Zara, long glowing golden hair with tiny sparkling stars, bright purple and gold costume with shining sun emblem on chest, warm golden glow aura, big friendly smile";

const ADVENTURES = [

  // ── Story 1: HONESTY ──────────────────────────────────────────────────────
  {
    title: { en: "THE HONEST MISTAKE", ar: "الخطأ الصادق" },
    setting: { en: "Sunhaven Market — a busy Saturday morning", ar: "سوق صنهيفن — صباح السبت المزدحم" },
    story: {
      en: "Omar is playing near the market when his ball accidentally smashes a shop window. His first instinct is to run — nobody saw him. But Zara was watching. One honest choice changes everything.",
      ar: "يلعب عمر بالقرب من السوق عندما تُحطّم كرته زجاج محل بالخطأ. أول شيء يفكر فيه: أن يهرب. لم يره أحد! لكن زارا كانت ترقبه. اختيار صادق واحد يغيّر كل شيء."
    },
    panels: [
      {
        caption: { en: "Omar's ball flies — CRASH! The shop window shatters.", ar: "تطير كرة عمر — طقطق! ينكسر زجاج المحل." },
        speech: { en: "Oh no… did anyone see? I'll just… walk away.", ar: "لا! هل رآني أحد؟ سأمشي ببساطة…" },
        speaker: "Omar", isHero: false,
        scene: "young boy in busy market, his ball just broke a shop window, looking around nervously to see if anyone noticed, comic book style"
      },
      {
        caption: { en: "Zara lands quietly beside him.", ar: "تهبط زارا بهدوء بجانبه." },
        speech: { en: "I saw what happened. You didn't mean to break it — but you still need to tell him.", ar: "رأيت ما حدث. لم تقصد كسره — لكنك لا تزال بحاجة لإخباره." },
        speaker: "Zara", isHero: true,
        scene: "girl superhero with golden hair kneeling beside nervous young boy in market, gentle serious expression, soft golden light"
      },
      {
        caption: { en: "Omar swallows hard and turns to face the shop owner.", ar: "يبتلع عمر ريقه ويواجه صاحب المحل." },
        speech: { en: "Sir… I broke your window. I'm sorry. I want to help fix it.", ar: "سيدي… أنا كسرت الزجاجة. آسف. وأريد المساعدة في إصلاحها." },
        speaker: "Omar", isHero: false,
        scene: "young boy looking up at shop owner with honest worried expression, girl superhero standing supportively beside him, warm market setting"
      },
      {
        caption: { en: "The shop owner smiles. He's heard a hundred excuses — but never the truth.", ar: "يبتسم صاحب المحل. سمع مئة عذر — لكن أبداً لم يسمع الحقيقة." },
        speech: { en: "You're braver than most grown-ups, young man. Thank you for being honest.", ar: "أنت أشجع من كثير من البالغين يا بني. شكراً لك على صدقك." },
        speaker: "Shop Owner", isHero: false,
        scene: "kind old shop owner smiling warmly at brave young boy, girl superhero watching proudly in background, golden afternoon market light"
      }
    ]
  },

  // ── Story 2: PATIENCE ─────────────────────────────────────────────────────
  {
    title: { en: "THE WAITING SEED", ar: "البذرة الصابرة" },
    setting: { en: "Sunhaven Garden — a slow spring morning", ar: "حديقة صنهيفن — صباح الربيع الهادئ" },
    story: {
      en: "Little Maya planted a seed three weeks ago and checks it every day. Today she's so frustrated she wants to dig it up. Zara helps her understand: the best things in life take time.",
      ar: "زرعت مايا الصغيرة بذرة منذ ثلاثة أسابيع وتتفقدها كل يوم. اليوم تشعر بالإحباط وتريد خلعها. تساعدها زارا على فهم شيء مهم: أجمل الأشياء تحتاج وقتاً."
    },
    panels: [
      {
        caption: { en: "Maya kneels beside her pot. Still nothing. Three whole weeks!", ar: "تركع مايا بجانب أصيصها. لا شيء حتى الآن. ثلاثة أسابيع كاملة!" },
        speech: { en: "That's IT! It's NEVER going to grow! I'm digging it up!", ar: "كفى! لن تنمو أبداً! سأخلعها!" },
        speaker: "Maya", isHero: false,
        scene: "frustrated little girl kneeling over small plant pot in garden, arms crossed, upset expression, empty soil in pot, sunny garden background"
      },
      {
        caption: { en: "Zara floats down, golden light catching in the leaves.", ar: "تهبط زارا وضوؤها الذهبي يلمع في الأوراق." },
        speech: { en: "May I show you something first?", ar: "هل تسمحين لي بإريتك شيئاً أولاً؟" },
        speaker: "Zara", isHero: true,
        scene: "girl superhero with golden glow floating down to garden beside young girl, mysterious gentle smile, dappled sunlight"
      },
      {
        caption: { en: "Zara uses her sun-vision to see beneath the soil.", ar: "تستخدم زارا رؤيتها الشمسية لترى تحت التراب." },
        speech: { en: "Look — it's growing underground right now! Your seed is working so hard where you can't see it yet.", ar: "انظري — إنها تنمو تحت التراب الآن! بذرتك تعمل بجد حيث لا تستطيعين رؤيتها بعد." },
        speaker: "Zara", isHero: true,
        scene: "girl superhero with glowing eyes showing little girl an x-ray vision view underground showing tiny seedling roots growing, magical illustration"
      },
      {
        caption: { en: "Maya decides to wait. One week later…", ar: "تقرر مايا الانتظار. بعد أسبوع واحد…" },
        speech: { en: "ZARA! IT GREW! I'm SO glad I didn't give up!", ar: "زارا! نمت! سعيدة جداً أنني لم أستسلم!" },
        speaker: "Maya", isHero: false,
        scene: "delighted little girl holding small plant pot with a beautiful green sprout emerging, huge smile, sunny garden, girl superhero clapping happily in background"
      }
    ]
  },

  // ── Story 3: KINDNESS ─────────────────────────────────────────────────────
  {
    title: { en: "THE NEW KID", ar: "الطفل الجديد" },
    setting: { en: "Sunhaven School — first day of autumn term", ar: "مدرسة صنهيفن — أول يوم من الفصل الخريفي" },
    story: {
      en: "Sam just moved to Sunhaven. At lunch, he sits alone at the end of a long table. Everyone has their own group. Everyone except Zara, who notices the one thing others miss — an empty seat and a sad face.",
      ar: "انتقل سام للتو إلى صنهيفن. في وقت الغداء يجلس وحيداً في نهاية الطاولة الطويلة. كل شخص لديه مجموعته. كل شخص إلا زارا، التي لاحظت ما لم يلاحظه الآخرون."
    },
    panels: [
      {
        caption: { en: "Lunchtime. Sam sits alone at the far end, staring at his food.", ar: "وقت الغداء. يجلس سام وحيداً في الطرف البعيد، محدقاً في طعامه." },
        speech: { en: "I knew this school would be the same as the last one…", ar: "علمت أن هذه المدرسة ستكون مثل المدرسة السابقة…" },
        speaker: "Sam", isHero: false,
        scene: "lonely boy sitting alone at end of school cafeteria table, other kids in happy groups in background, sad expression, comic book art"
      },
      {
        caption: { en: "Zara spots Sam from across the cafeteria.", ar: "ترى زارا سام من الجانب الآخر من المقصف." },
        speech: { en: "There's a boy who looks like he could really use a friend today.", ar: "هناك ولد يبدو أنه يحتاج صديقاً اليوم." },
        speaker: "Zara", isHero: true,
        scene: "girl with golden hair in school cafeteria noticing lonely boy across the room, warm determined expression"
      },
      {
        caption: { en: "Zara walks over and brings her whole group with her.", ar: "تمشي زارا نحوه وتجلب معها مجموعتها بأكملها." },
        speech: { en: "Hi! I'm Zara. We're making room — what's your name?", ar: "أهلاً! أنا زارا. نحن نوسع المكان — ما اسمك؟" },
        speaker: "Zara", isHero: true,
        scene: "girl with golden hair sitting beside lonely boy at cafeteria table, group of cheerful kids joining them, boy looking surprised and slowly smiling"
      },
      {
        caption: { en: "By the time lunch is over, Sam has four new friends.", ar: "بحلول نهاية الغداء، أصبح لسام أربعة أصدقاء جدد." },
        speech: { en: "You know what? This might actually be a good school.", ar: "تعلمون؟ قد تكون هذه مدرسة جيدة في الواقع." },
        speaker: "Sam", isHero: false,
        scene: "group of kids laughing together at cafeteria table, previously lonely boy now smiling and chatting, girl with golden hair beaming happily"
      }
    ]
  },

  // ── Story 4: GRATITUDE ────────────────────────────────────────────────────
  {
    title: { en: "THE INVISIBLE GARDENER", ar: "البستاني الخفي" },
    setting: { en: "Sunhaven Central Park — a warm Tuesday", ar: "الحديقة المركزية في صنهيفن — يوم ثلاثاء دافئ" },
    story: {
      en: "Old Hassan tends Sunhaven's park every single day — raking, watering, fixing. But no one ever notices him. They enjoy the park but never say thank you. Zara decides to change that.",
      ar: "يعتني الشيخ حسان بحديقة صنهيفن كل يوم — يكنس ويسقي ويصلح. لكن لا أحد يلاحظه. يستمتعون بالحديقة دون أن يشكروه. تقرر زارا تغيير ذلك."
    },
    panels: [
      {
        caption: { en: "Every morning, Hassan arrives before anyone else to care for the park.", ar: "كل صباح يصل حسان قبل أي شخص آخر ليعتني بالحديقة." },
        speech: { en: "Another beautiful morning… I wonder if anyone even notices the flowers I planted.", ar: "صباح جميل آخر… أتساءل إن كان أحد يلاحظ الزهور التي زرعتها." },
        speaker: "Hassan", isHero: false,
        scene: "old kind man sweeping park path in early morning light, beautiful flowers and clean benches around him, looking a little lonely but continuing his work"
      },
      {
        caption: { en: "Families play all around him — but no one looks his way.", ar: "العائلات تلعب حوله — لكن لا أحد ينظر نحوه." },
        speech: { en: "What a lovely park! The kids had such a great time!", ar: "يا لها من حديقة جميلة! استمتع الأطفال كثيراً!" },
        speaker: "Parent", isHero: false,
        scene: "families playing in beautiful park, old groundskeeper working in background completely unnoticed, showing contrast between happy crowd and unseen worker"
      },
      {
        caption: { en: "Zara gathers the families together.", ar: "تجمع زارا العائلات معاً." },
        speech: { en: "See that man? This park you love — he makes it beautiful every single morning. Every flower. Every clean path. That's his work.", ar: "هل ترون ذلك الرجل؟ هذه الحديقة التي تحبونها — يجعلها جميلة كل صباح. كل زهرة. كل طريق نظيف. هذا عمله." },
        speaker: "Zara", isHero: true,
        scene: "girl superhero pointing to old groundskeeper while speaking to gathered families and children who look surprised and moved"
      },
      {
        caption: { en: "The park fills with thank-yous. Hassan is overwhelmed.", ar: "تمتلئ الحديقة بالشكر. يغمر حسان بالعاطفة." },
        speech: { en: "In forty years… no one ever said that to me. Thank you — all of you.", ar: "في أربعين عاماً… لم يقلها لي أحد. شكراً لكم — جميعاً." },
        speaker: "Hassan", isHero: false,
        scene: "old gardener surrounded by grateful families and children, some handing him flowers, tears of joy in his eyes, girl superhero watching warmly"
      }
    ]
  },

  // ── Story 5: COURAGE ──────────────────────────────────────────────────────
  {
    title: { en: "THE BIG STAGE", ar: "المسرح الكبير" },
    setting: { en: "Sunhaven School — show night", ar: "مدرسة صنهيفن — ليلة العرض" },
    story: {
      en: "Layla has a solo in the school show. She practiced for months. But standing backstage, her legs won't move. Zara whispers something that will stay with her forever.",
      ar: "لدى ليلى دور منفرد في عرض المدرسة. تدربت لأشهر. لكنها تقف خلف الكواليس وساقاها لا تتحركان. تهمس زارا لها بشيء سيبقى معها إلى الأبد."
    },
    panels: [
      {
        caption: { en: "Backstage. The audience buzzes. Layla can't breathe.", ar: "خلف الكواليس. الجمهور يدوي. ليلى لا تستطيع التنفس." },
        speech: { en: "I can't do it. I'll forget everything. Everyone will laugh at me.", ar: "لا أستطيع فعل ذلك. سأنسى كل شيء. سيضحك الجميع عليّ." },
        speaker: "Layla", isHero: false,
        scene: "terrified young girl backstage at school theater, audience visible through curtain, hands shaking, frozen with stage fright"
      },
      {
        caption: { en: "Zara appears quietly at her side.", ar: "تظهر زارا بهدوء بجانبها." },
        speech: { en: "I'm scared every single time I fly into danger. Every time. The feeling doesn't go away.", ar: "أشعر بالخوف في كل مرة أطير فيها نحو الخطر. كل مرة. الشعور لا يختفي." },
        speaker: "Zara", isHero: true,
        scene: "girl superhero with golden hair crouching beside scared girl backstage, speaking quietly and sincerely, warm glowing light, intimate moment"
      },
      {
        caption: { en: "\"But you always go anyway?\" Layla whispers.", ar: "«لكنك تذهبين على أي حال؟» تهمس ليلى." },
        speech: { en: "Always. Because being brave doesn't mean you're not scared. It means you go anyway.", ar: "دائماً. لأن الشجاعة لا تعني أنك لست خائفاً. تعني أنك تمضي على أي حال." },
        speaker: "Zara", isHero: true,
        scene: "girl superhero holding hand of young girl backstage, both sharing a brave moment, golden light glowing softly, curtain about to open"
      },
      {
        caption: { en: "Layla walks onto the stage — and sings like the whole world is listening.", ar: "تمشي ليلى على المسرح — وتغني كأن العالم بأسره يصغي." },
        speech: { en: "She's wonderful! How was she not scared?", ar: "إنها رائعة! كيف لم تكن خائفة؟" },
        speaker: "Audience member", isHero: false,
        scene: "young girl singing solo on bright stage, spotlight on her, audience applauding, expression of pride replacing fear, triumphant scene"
      }
    ]
  },

  // ── Story 6: GENEROSITY ───────────────────────────────────────────────────
  {
    title: { en: "THE EMPTY LUNCH BOX", ar: "صندوق الغداء الفارغ" },
    setting: { en: "Sunhaven School Cafeteria — Monday lunchtime", ar: "مقصف مدرسة صنهيفن — وقت غداء الاثنين" },
    story: {
      en: "Kareem has the best lunch in class. But his classmate Hana quietly opens an empty bag. Kareem notices — but sharing means giving up his favorite things. Zara helps him see what really matters.",
      ar: "لدى كريم أفضل غداء في الصف. لكن زميلته هنا تفتح حقيبتها الفارغة بهدوء. يلاحظ كريم — لكن المشاركة تعني التنازل عن أشيائه المفضلة. تساعده زارا على رؤية ما يهم حقاً."
    },
    panels: [
      {
        caption: { en: "Kareem opens his amazing lunch. Hana quietly closes her empty bag.", ar: "يفتح كريم غداءه الرائع. تُغلق هنا حقيبتها الفارغة بهدوء." },
        speech: { en: "I'm not hungry anyway. It's fine.", ar: "لست جائعة على أي حال. لا بأس." },
        speaker: "Hana", isHero: false,
        scene: "school cafeteria, boy with amazing lunchbox, girl beside him quietly closing empty lunch bag, trying to hide that she has nothing"
      },
      {
        caption: { en: "Kareem sees. His sandwich is his favorite. He hesitates.", ar: "يرى كريم. ساندويشه هو المفضل لديه. يتردد." },
        speech: { en: "But… it's my favorite. Mom only makes it once a week…", ar: "لكن… إنه المفضل لديّ. أمي تعمله مرة في الأسبوع…" },
        speaker: "Kareem", isHero: false,
        scene: "boy looking at his lunch then glancing at classmate, inner conflict visible on his face"
      },
      {
        caption: { en: "Zara leans in quietly.", ar: "تميل زارا بهدوء." },
        speech: { en: "You'll have another sandwich next week. But Hana will remember today for the rest of her life.", ar: "ستأكل ساندويشاً آخر الأسبوع القادم. لكن هنا ستتذكر هذا اليوم طوال حياتها." },
        speaker: "Zara", isHero: true,
        scene: "girl superhero whispering gently to boy, warm golden aura, gentle knowing smile, cafeteria background"
      },
      {
        caption: { en: "Kareem slides half his lunch across the table.", ar: "يدفع كريم نصف غدائه عبر الطاولة." },
        speech: { en: "Hey — my mom always packs too much. Want to share?", ar: "مرحباً — أمي دائماً تحضّر أكثر من اللازم. تريدين المشاركة؟" },
        speaker: "Kareem", isHero: false,
        scene: "boy pushing half his lunch to surprised and grateful girl at cafeteria table, both beginning to smile, Zara watching happily in background"
      }
    ]
  },

  // ── Story 7: FORGIVENESS ──────────────────────────────────────────────────
  {
    title: { en: "THE WORDS THAT WEIGH", ar: "الكلمات الثقيلة" },
    setting: { en: "Sunhaven Park — after school", ar: "حديقة صنهيفن — بعد المدرسة" },
    story: {
      en: "Nadia broke a promise to her best friend Sara and hasn't apologized. She tells herself it's not a big deal. But deep down she knows the truth. Zara shows her that saying sorry is one of the bravest things you can do.",
      ar: "أخلفت ناديا وعداً لصديقتها سارة ولم تعتذر. تقول لنفسها إنه ليس بالأمر الكبير. لكنها في قرارة نفسها تعرف الحقيقة. تريها زارا أن قول آسف من أشجع الأشياء."
    },
    panels: [
      {
        caption: { en: "Nadia sees Sara at the park. Sara turns away.", ar: "ترى ناديا سارة في الحديقة. تنعطف سارة بعيداً." },
        speech: { en: "She should be over it by now. It wasn't even that big a deal!", ar: "يجب أن تكون قد تجاوزت الأمر. لم يكن بهذه الأهمية!" },
        speaker: "Nadia", isHero: false,
        scene: "two girls in park, one turning away from the other, tension between former friends, afternoon light"
      },
      {
        caption: { en: "Zara sits beside Nadia on the bench.", ar: "تجلس زارا بجانب ناديا على المقعد." },
        speech: { en: "Do you actually think it wasn't a big deal — or are you just afraid to say sorry?", ar: "هل تعتقدين فعلاً أنه لم يكن مهماً — أم أنك خائفة من قول آسف؟" },
        speaker: "Zara", isHero: true,
        scene: "girl superhero sitting beside defensive girl on park bench, asking a direct honest question gently"
      },
      {
        caption: { en: "The honest question lands hard.", ar: "يُصيب السؤال الصادق هدفه." },
        speech: { en: "…I knew I hurt her. I just didn't want to feel bad about it.", ar: "…علمت أنني أذيتها. فقط لم أرد الشعور بالسوء حيال ذلك." },
        speaker: "Nadia", isHero: false,
        scene: "girl on park bench looking down with realization on her face, the truth dawning on her, golden afternoon light"
      },
      {
        caption: { en: "Nadia walks over to Sara. Two words. All the difference.", ar: "تمشي ناديا نحو سارة. كلمتان. كل الفارق." },
        speech: { en: "Sara… I'm really sorry. You deserved better from me.", ar: "سارة… أنا آسفة حقاً. كنت تستحقين أفضل مني." },
        speaker: "Nadia", isHero: false,
        scene: "girl approaching her friend with genuine sorry expression, friend's cold expression beginning to soften, park setting, Zara watching with warm smile from distance"
      }
    ]
  }

];

// ===== DATE UTILS =====

function dateToDayNumber(date) {
  const epoch = new Date(2026, 3, 18); // April 18 2026 = Day 1
  return Math.max(1, Math.floor((date - epoch) / 86400000) + 1);
}

function dayNumberToDate(n) {
  const epoch = new Date(2026, 3, 18);
  return new Date(epoch.getTime() + (n - 1) * 86400000);
}

function formatDate(date) {
  const locale = currentLang === 'ar' ? 'ar-SA' : 'en-US';
  return date.toLocaleDateString(locale, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}

function getAdventureForDay(dayNum) {
  return ADVENTURES[(dayNum - 1) % ADVENTURES.length];
}

// ===== LANGUAGE =====

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  updateStaticUI();
  renderComic(currentDay);
}

const UI_TEXT = {
  en: { prev: '◀ PREV', next: 'NEXT ▶', episode: 'EPISODE', share: 'Share today\'s comic:', copy: '🔗 Copy Link', twitter: '🐦 Twitter' },
  ar: { prev: '◀ السابق', next: 'التالي ▶', episode: 'الحلقة', share: 'شارك قصة اليوم:', copy: '🔗 نسخ الرابط', twitter: '🐦 تويتر' }
};

function updateStaticUI() {
  const t = UI_TEXT[currentLang];
  const el = id => document.getElementById(id);
  if (el('prevBtn')) el('prevBtn').textContent = t.prev;
  if (el('nextBtn')) el('nextBtn').textContent = t.next;
  if (el('episodeLabel')) el('episodeLabel').textContent = t.episode;
  if (el('shareLabel')) el('shareLabel').textContent = t.share;
  if (el('copyBtn')) el('copyBtn').textContent = t.copy;
  if (el('twitterBtn')) el('twitterBtn').textContent = t.twitter;
}

// ===== IMAGE URL =====

function buildImageUrl(panel, panelIndex, dayNum) {
  const seed = dayNum * 100 + panelIndex + 100;
  const prompt = `${ZARA_BASE_PROMPT}, ${panel.scene}, vibrant colors, clean lines, no text, no watermark`;
  return `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=400&height=300&seed=${seed}&nologo=true&enhance=false&model=flux-schnell`;
}

// ===== RENDER =====

function renderComic(dayNum) {
  const adventure = getAdventureForDay(dayNum);
  const date = dayNumberToDate(dayNum);
  const todayNum = dateToDayNumber(new Date());

  document.getElementById('episodeNum').textContent = `#${dayNum}`;
  document.getElementById('dateLabel').textContent = formatDate(date);
  document.getElementById('comicTitle').textContent = adventure.title[currentLang];
  document.getElementById('comicSetting').textContent = `📍 ${adventure.setting[currentLang]}`;
  const storyEl = document.getElementById('comicStory');
  if (storyEl) storyEl.textContent = adventure.story[currentLang];

  document.getElementById('prevBtn').disabled = dayNum <= 1;
  document.getElementById('nextBtn').disabled = dayNum >= todayNum;

  const grid = document.getElementById('panelsGrid');
  grid.innerHTML = '';

  adventure.panels.forEach((panel, i) => {
    const imgUrl = buildImageUrl(panel, i, dayNum);
    const label = currentLang === 'ar' ? `اللوحة ${i + 1}` : `${i + 1}`;
    const caption = panel.caption[currentLang];
    const speech = panel.speech[currentLang];

    const el = document.createElement('div');
    el.className = 'panel';
    el.innerHTML = `
      <div class="panel-num">${label}</div>
      <div class="panel-img-wrap">
        <div class="panel-loader" id="loader-${i}">
          <div class="loader-sun">☀</div>
          <div class="loader-text">${currentLang === 'ar' ? `رسم اللوحة ${i + 1}…` : `Drawing panel ${i + 1}…`}</div>
        </div>
        <img class="panel-img loading" id="img-${i}" alt="${caption}" />
        <div class="speech-bubble ${panel.isHero ? 'zara' : ''}">
          <span class="bubble-speaker">${panel.speaker}</span>
          "${speech}"
        </div>
      </div>
      <div class="panel-caption">${caption}</div>
    `;
    grid.appendChild(el);

    const img = el.querySelector(`#img-${i}`);
    const loader = el.querySelector(`#loader-${i}`);

    img.onload = () => { img.classList.replace('loading', 'loaded'); loader.classList.add('hidden'); };
    img.onerror = () => {
      img.style.display = 'none';
      loader.innerHTML = `<div style="text-align:center;padding:20px;color:#888;">
        <div style="font-size:2rem">🎨</div>
        <em style="font-size:.85rem">${caption}</em>
        <div style="font-size:.75rem;margin-top:8px;color:#aaa">${currentLang === 'ar' ? 'جارٍ رسم الصورة… أعد التحميل' : 'Generating… refresh to retry'}</div>
      </div>`;
      loader.classList.remove('hidden');
    };
    setTimeout(() => { img.src = imgUrl; }, i * 600);
  });

  const url = new URL(window.location);
  dayNum === todayNum ? url.searchParams.delete('day') : url.searchParams.set('day', dayNum);
  window.history.replaceState({}, '', url);
  document.querySelector('main').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ===== NAV =====
let currentDay = dateToDayNumber(new Date());
function changeDay(delta) { currentDay += delta; renderComic(currentDay); }
function toggleCharCard() { document.getElementById('charCard').classList.toggle('open'); }

// ===== SHARE =====
function copyLink() {
  navigator.clipboard?.writeText(window.location.href).then(() => showToast(currentLang === 'ar' ? 'تم نسخ الرابط! 🔗' : 'Link copied! 🔗'));
}
function shareTwitter() {
  const text = encodeURIComponent('Check out today\'s ZARA THE SUNBEAM comic! ☀');
  window.open(`https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(window.location.href)}`, '_blank');
}
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  if (params.has('day')) currentDay = Math.max(1, parseInt(params.get('day')) || currentDay);
  renderComic(currentDay);
  updateStaticUI();
});
