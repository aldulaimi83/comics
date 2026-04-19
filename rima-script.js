// ===== RIMA THE STORMCALLER — Daily Comic Generator =====

let currentLang = 'en';

const RIMA_BASE_PROMPT = "anime comic book illustration, teenage girl superhero named Rima, long black hair with red and gold lightning streaks, crimson cape with gold trim, electric storm power crackling around her, fierce determined eyes";

const ADVENTURES = [

  // ── Story 1: HONESTY ──────────────────────────────────────────────────────
  {
    title: { en: "LIGHTNING NEVER LIES", ar: "البرق لا يكذب" },
    setting: { en: "Sunhaven School — after class", ar: "مدرسة صنهيفن — بعد الحصص" },
    story: {
      en: "Rima's classmate Yusuf is falsely accused of breaking the science lab equipment. The real culprit is staying silent. Rima knows who did it — and she has to decide: stay quiet to keep the peace, or speak up for the truth.",
      ar: "يُتّهم زميل ريما يوسف زوراً بكسر معدات مختبر العلوم. الجاني الحقيقي يصمت. ريما تعلم من فعل ذلك — عليها أن تقرر: تصمت لتحمي السلام، أم تتكلم من أجل الحقيقة."
    },
    panels: [
      {
        caption: { en: "The teacher stands before the class. Yusuf's face goes pale.", ar: "يقف المعلم أمام الصف. يشحب وجه يوسف." },
        speech: { en: "Someone broke the microscope. I know it wasn't an accident. Who was it?", ar: "أحدهم كسر المجهر. أعلم أنه لم يكن بالخطأ. من فعل ذلك؟" },
        speaker: "Teacher", isHero: false,
        scene: "teacher standing before classroom, broken microscope on desk, innocent boy looking scared and falsely accused, classmates looking around nervously"
      },
      {
        caption: { en: "Rima glances at the real culprit — who stares at the floor.", ar: "تنظر ريما إلى الجاني الحقيقي — الذي يحدق في الأرض." },
        speech: { en: "He's not going to say anything. And Yusuf is going to take the blame for something he didn't do.", ar: "لن يقول شيئاً. ويوسف سيتحمل اللوم على شيء لم يفعله." },
        speaker: "Rima", isHero: true,
        scene: "girl superhero in civilian clothes looking conflicted in classroom, glancing between falsely accused boy and guilty classmate staring at floor"
      },
      {
        caption: { en: "Rima raises her hand. It takes everything she has.", ar: "ترفع ريما يدها. يكلفها ذلك كل ما لديها." },
        speech: { en: "Sir — it wasn't Yusuf. I saw what happened.", ar: "سيدي — لم يكن يوسف. رأيت ما حدث." },
        speaker: "Rima", isHero: true,
        scene: "girl in classroom raising her hand with courage, lightning faintly visible at her fingertips, serious honest expression"
      },
      {
        caption: { en: "Yusuf is cleared. The real culprit steps forward.", ar: "يُبرَّأ يوسف. يتقدم الجاني الحقيقي." },
        speech: { en: "I was too scared to speak up… I'm sorry, Yusuf.", ar: "كنت خائفاً جداً من التحدث… أنا آسف يا يوسف." },
        speaker: "Classmate", isHero: false,
        scene: "classroom scene of resolution, boy coming forward to admit truth, accused boy relieved, teacher and class watching, girl hero standing firm nearby"
      }
    ]
  },

  // ── Story 2: PATIENCE ─────────────────────────────────────────────────────
  {
    title: { en: "THE STORM THAT WAITED", ar: "العاصفة التي انتظرت" },
    setting: { en: "Sunhaven Hills — a tense summer evening", ar: "تلال صنهيفن — مساء صيفي متوتر" },
    story: {
      en: "A wildfire is sweeping through the hills. Rima could call a storm immediately — but striking too early could spread the fire. She must hold back her greatest power and wait for exactly the right moment.",
      ar: "حريق يجتاح التلال. تستطيع ريما استدعاء عاصفة فوراً — لكن الضرب مبكراً قد ينشر الحريق. يجب أن تكبح أعظم قوة لديها وتنتظر اللحظة المناسبة تماماً."
    },
    panels: [
      {
        caption: { en: "Flames race through the hills. Every second counts.", ar: "تتسابق النيران عبر التلال. كل ثانية مهمة." },
        speech: { en: "I can stop this — just call the lightning and bring the rain now!", ar: "أستطيع إيقاف هذا — فقط أستدعي البرق وأُحضر المطر الآن!" },
        speaker: "Rima", isHero: true,
        scene: "girl superhero hovering above hillside wildfire, lightning crackling ready at her hands, urgent night sky, orange flames below"
      },
      {
        caption: { en: "She checks the wind direction carefully.", ar: "تتحقق من اتجاه الرياح بعناية." },
        speech: { en: "No. Not yet. If I strike now the fire jumps the road. Ten more minutes.", ar: "لا. ليس بعد. إن ضربت الآن سيقفز الحريق فوق الطريق. عشر دقائق أخرى." },
        speaker: "Rima", isHero: true,
        scene: "girl superhero hovering tense, checking wind direction, holding back her lightning power with great effort, fire spreading below"
      },
      {
        caption: { en: "The longest ten minutes of her life. She holds the lightning in her hands.", ar: "أطول عشر دقائق في حياتها. تمسك البرق بين يديها." },
        speech: { en: "Firefighters — hold your ground. Trust me. Almost.", ar: "يا رجال الإطفاء — تمسكوا بمواقعكم. ثقوا بي. قريباً." },
        speaker: "Rima", isHero: true,
        scene: "girl superhero fists clenched with restrained lightning energy, intense focus, firefighters below watching and trusting"
      },
      {
        caption: { en: "NOW. The storm breaks — perfectly placed. Rain pours. Fire dies.", ar: "الآن. تنكسر العاصفة — في مكانها الصحيح تماماً. ينهمر المطر. تموت النار." },
        speech: { en: "She waited — and it worked! Every drop landed exactly right!", ar: "انتظرت — ونجح الأمر! كل قطرة سقطت في مكانها الصحيح تماماً!" },
        speaker: "Fire Chief", isHero: false,
        scene: "girl superhero releasing massive controlled lightning strike triggering perfect rainstorm, fire extinguished, firefighters cheering below, dramatic epic moment"
      }
    ]
  },

  // ── Story 3: KINDNESS ─────────────────────────────────────────────────────
  {
    title: { en: "THE BOY WHO FEARED THUNDER", ar: "الولد الذي خاف الرعد" },
    setting: { en: "Sunhaven Park — during a thunderstorm", ar: "حديقة صنهيفن — أثناء عاصفة رعدية" },
    story: {
      en: "A little boy gets caught alone in the park during a sudden storm and can't move from fear. Rima — who commands storms — decides to sit with him instead of flying past.",
      ar: "يُضبط ولد صغير وحيداً في الحديقة أثناء عاصفة مفاجئة ولا يستطيع الحركة من الخوف. ريما — التي تقود العواصف — تقرر الجلوس معه بدلاً من أن تطير مبتعدةً."
    },
    panels: [
      {
        caption: { en: "A storm rolls in fast. Little Amir freezes on a bench, covering his ears.", ar: "تتدحرج العاصفة بسرعة. يتجمد عامر الصغير على مقعد، يغطي أذنيه." },
        speech: { en: "Too loud… too loud! I want my mom!", ar: "صوت عالٍ جداً… عالٍ جداً! أريد أمي!" },
        speaker: "Little Amir", isHero: false,
        scene: "small terrified boy sitting frozen on park bench in thunderstorm, covering ears, lightning in background, alone and scared"
      },
      {
        caption: { en: "Rima sees him from above. She lands quietly beside him.", ar: "ترى ريما الطفل من الأعلى. تهبط بهدوء بجانبه." },
        speech: { en: "Hey. Can I sit here with you?", ar: "مرحباً. هل يمكنني الجلوس معك هنا؟" },
        speaker: "Rima", isHero: true,
        scene: "girl superhero landing gently beside frightened small boy on park bench, calm and gentle despite being the storm hero, rain around them"
      },
      {
        caption: { en: "Rima gently calms the storm just above them — a small circle of quiet.", ar: "تهدئ ريما برفق العاصفة فوقهما — دائرة صغيرة من الهدوء." },
        speech: { en: "I'll tell you a secret: I used to be afraid of thunder too.", ar: "سأخبرك بسر: كنت أخاف من الرعد أنا أيضاً." },
        speaker: "Rima", isHero: true,
        scene: "girl superhero sitting beside small boy, small circle of calm weather around them while storm rages nearby, gentle intimate moment"
      },
      {
        caption: { en: "The storm passes. The boy looks up, surprised he's no longer shaking.", ar: "تمر العاصفة. يرفع الولد نظره، مندهشاً أنه لم يعد يرتجف." },
        speech: { en: "…With you here it wasn't so scary. Thank you.", ar: "…بوجودك لم يكن مخيفاً جداً. شكراً لك." },
        speaker: "Little Amir", isHero: false,
        scene: "small boy and girl superhero together as storm clears, boy calmer and grateful, warm moment after the fear fades"
      }
    ]
  },

  // ── Story 4: COURAGE ──────────────────────────────────────────────────────
  {
    title: { en: "THE EYE OF THE STORM", ar: "عين العاصفة" },
    setting: { en: "Open ocean — a massive storm system", ar: "المحيط المفتوح — منظومة عاصفة ضخمة" },
    story: {
      en: "A research ship with twelve scientists is trapped inside a massive storm. Rima has never tried to break a storm this enormous. But twelve people are running out of time.",
      ar: "سفينة بحثية بداخلها اثنا عشر عالماً محاصرة داخل عاصفة ضخمة. لم تحاول ريما من قبل تفكيك عاصفة بهذا الحجم. لكن وقت اثني عشر شخصاً ينفد."
    },
    panels: [
      {
        caption: { en: "The storm is enormous. Rima has never seen anything like it.", ar: "العاصفة هائلة. لم ترَ ريما مثلها قط." },
        speech: { en: "This is… four times bigger than anything I've controlled before.", ar: "هذه… أربعة أضعاف أكبر شيء سيطرت عليه من قبل." },
        speaker: "Rima", isHero: true,
        scene: "girl superhero floating before an enormous spinning storm system over ocean, tiny compared to the massive clouds, dramatic perspective"
      },
      {
        caption: { en: "She hears the distress call from inside.", ar: "تسمع نداء الاستغاثة من الداخل." },
        speech: { en: "Mayday — twelve crew — we have two hours. Please. Anyone.", ar: "ميداي — اثنا عشر شخصاً — لدينا ساعتان. رجاءً. أي أحد." },
        speaker: "Radio", isHero: false,
        scene: "close up of Rima's face listening to crackling radio distress call, enormous storm behind her, the weight of the decision on her face"
      },
      {
        caption: { en: "Rima enters the storm.", ar: "تدخل ريما العاصفة." },
        speech: { en: "I've never done this. But those twelve people need me to try.", ar: "لم أفعل هذا من قبل. لكن هؤلاء الاثنا عشر يحتاجون مني أن أحاول." },
        speaker: "Rima", isHero: true,
        scene: "girl superhero diving into massive swirling storm, lightning exploding around her, pure courageous determination, epic moment"
      },
      {
        caption: { en: "From inside, Rima tears the storm apart — layer by layer.", ar: "من الداخل، تفكّك ريما العاصفة طبقة طبقة." },
        speech: { en: "She's doing it! She's breaking it apart — deploy the lifeboats!", ar: "إنها تفعل ذلك! إنها تفككها — أنزلوا قوارب النجاة!" },
        speaker: "Ship Captain", isHero: false,
        scene: "girl superhero at center of massive storm, lightning radiating outward as she breaks it apart from inside, research ship visible below, triumphant rescue"
      }
    ]
  },

  // ── Story 5: GENEROSITY ───────────────────────────────────────────────────
  {
    title: { en: "SHELTER FROM THE STORM", ar: "ملاذ من العاصفة" },
    setting: { en: "Sunhaven Outskirts — a stormy November night", ar: "أطراف صنهيفن — ليلة نوفمبر عاصفة" },
    story: {
      en: "A family caught in a storm at the edge of the city has nowhere to go. Rima can't give them a home — but she can give them this night, dry and safe.",
      ar: "عائلة علقت في العاصفة على أطراف المدينة وليس لها مكان تذهب إليه. لا تستطيع ريما أن تمنحهم منزلاً — لكن يمكنها أن تمنحهم هذه الليلة، جافة وآمنة."
    },
    panels: [
      {
        caption: { en: "On the cold road, a family huddles under a thin blanket in the rain.", ar: "على الطريق الباردة، تتجمع عائلة تحت بطانية رقيقة في المطر." },
        speech: { en: "It's okay, my love. It will stop soon.", ar: "لا بأس يا حبيبتي. ستتوقف قريباً." },
        speaker: "Parent", isHero: false,
        scene: "family huddled together on dark rainy road, children shivering, parents protecting them with thin blanket, heartbreaking scene"
      },
      {
        caption: { en: "Rima spots them from above.", ar: "ترى ريما العائلة من الأعلى." },
        speech: { en: "I can't fix everything for them. But I can fix tonight.", ar: "لا أستطيع إصلاح كل شيء لهم. لكن يمكنني إصلاح هذه الليلة." },
        speaker: "Rima", isHero: true,
        scene: "girl superhero hovering above looking down at family with compassion, rain around her, gentle lightning sparking at hands"
      },
      {
        caption: { en: "Rima raises a dome of warm charged air above them.", ar: "ترفع ريما قبة من الهواء الدافئ فوقهم." },
        speech: { en: "You're safe now. Stay here tonight. I'll keep the rain away.", ar: "أنتم بأمان الآن. ابقوا هنا الليلة. سأبعد المطر عنكم." },
        speaker: "Rima", isHero: true,
        scene: "girl superhero creating glowing warm dome of energy above family, rain deflected around them, family looking up in wonder and relief"
      },
      {
        caption: { en: "She stays all night. Not because it's easy — because it's right.", ar: "تبقى طوال الليل. ليس لأنه سهل — لأنه صحيح." },
        speech: { en: "Thank you… we will never forget you.", ar: "شكراً… لن ننساكِ أبداً." },
        speaker: "Parent", isHero: false,
        scene: "dawn breaking, girl superhero still standing guard above sleeping family, exhausted but at peace, beautiful sunrise"
      }
    ]
  }

];

// ===== DATE UTILS =====
function dateToDayNumber(date) {
  const epoch = new Date(2026, 3, 18);
  return Math.max(1, Math.floor((date - epoch) / 86400000) + 1);
}
function dayNumberToDate(n) {
  return new Date(new Date(2026, 3, 18).getTime() + (n - 1) * 86400000);
}
function formatDate(date) {
  return date.toLocaleDateString(currentLang === 'ar' ? 'ar-SA' : 'en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}
function getAdventureForDay(dayNum) { return ADVENTURES[(dayNum - 1) % ADVENTURES.length]; }

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
  ['prevBtn','nextBtn','episodeLabel','shareLabel','copyBtn','twitterBtn'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = t[id.replace('Btn','').replace('Label','')];
  });
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
  const seed = dayNum * 100 + panelIndex + 333;
  const prompt = `${RIMA_BASE_PROMPT}, ${panel.scene}, vibrant colors, clean lines, no text, no watermark`;
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
          <div style="font-size:2rem">⚡</div>
          <div class="loader-text">${currentLang === 'ar' ? `رسم اللوحة ${i + 1}…` : `Drawing panel ${i + 1}…`}</div>
        </div>
        <img class="panel-img loading" id="img-${i}" alt="${caption}" />
        <div class="speech-bubble ${panel.isHero ? 'rima' : ''}">
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
      img.onerror = null;
      img.src = 'assets/panel-fallback.svg';
      img.classList.replace('loading', 'loaded');
      loader.classList.add('hidden');
    };
    setTimeout(() => { img.src = imgUrl; }, i * 600);
  });

  const url = new URL(window.location);
  dayNum === todayNum ? url.searchParams.delete('day') : url.searchParams.set('day', dayNum);
  window.history.replaceState({}, '', url);
  document.querySelector('main').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

let currentDay = dateToDayNumber(new Date());
function changeDay(delta) { currentDay += delta; renderComic(currentDay); }
function toggleCharCard() { document.getElementById('charCard').classList.toggle('open'); }
function copyLink() {
  navigator.clipboard?.writeText(window.location.href).then(() => showToast(currentLang === 'ar' ? 'تم نسخ الرابط! 🔗' : 'Link copied! 🔗'));
}
function shareTwitter() {
  const text = encodeURIComponent('Check out today\'s RIMA THE STORMCALLER comic! ⚡');
  window.open(`https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(window.location.href)}`, '_blank');
}
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}
document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  if (params.has('day')) currentDay = Math.max(1, parseInt(params.get('day')) || currentDay);
  renderComic(currentDay);
  updateStaticUI();
});
