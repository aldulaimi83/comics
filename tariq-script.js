// ===== TARIQ THE IRONWALL — Daily Comic Generator =====

let currentLang = 'en';

const TARIQ_BASE_PROMPT = "anime comic book illustration, muscular teenage Arab boy superhero named Tariq, brown skin, copper bronze stone armor on arms and chest, boulders and earth floating around him, powerful heroic expression, desert mountain setting";

const ADVENTURES = [

  // ── Story 1: HONESTY ──────────────────────────────────────────────────────
  {
    title: { en: "THE CRACKED WALL", ar: "الجدار المتشقق" },
    setting: { en: "Sunhaven Construction Site — a busy weekday", ar: "موقع البناء في صنهيفن — يوم عمل مزدحم" },
    story: {
      en: "While training, Tariq accidentally brings down a section of a wall being built for a community center. He could reshape the earth to hide the damage before anyone notices. He knows he shouldn't — but it would be so easy.",
      ar: "أثناء التدريب، يُسقط طارق عن طريق الخطأ جزءاً من جدار يُبنى لمركز مجتمعي. يستطيع إعادة تشكيل الأرض لإخفاء الضرر قبل أن يلاحظ أحد. يعلم أنه لا يجب — لكنه سيكون سهلاً جداً."
    },
    panels: [
      {
        caption: { en: "Tariq practices his earth control — and misjudges the force.", ar: "يتدرب طارق على التحكم في الأرض — ويُخطئ في تقدير القوة." },
        speech: { en: "Oh no… I hit the foundation. The whole east wall is cracked.", ar: "أوه لا… ضربت الأساس. الجدار الشرقي بأكمله متشقق." },
        speaker: "Tariq", isHero: true,
        scene: "teenage Arab boy superhero looking in dismay at cracked wall at construction site, earth still vibrating around him, boulder nearby"
      },
      {
        caption: { en: "He looks at his hands. He could fix this so no one would ever know.", ar: "ينظر إلى يديه. يستطيع إصلاح هذا دون أن يعلم أحد." },
        speech: { en: "I could just… reshape it. Smooth it over. No one would know. …Right?", ar: "يمكنني فقط… إعادة تشكيله. تسويته. لن يعلم أحد. …أليس كذلك؟" },
        speaker: "Tariq", isHero: true,
        scene: "close up of boy superhero with copper armor on hands looking at cracked wall, inner conflict on his face"
      },
      {
        caption: { en: "He walks to the site foreman.", ar: "يمشي إلى مشرف الموقع." },
        speech: { en: "Sir — I broke the east wall while training. I'm sorry. Tell me what I need to do to help fix it.", ar: "سيدي — لقد كسرت الجدار الشرقي أثناء التدريب. آسف. أخبرني ما يجب فعله للمساعدة في إصلاحه." },
        speaker: "Tariq", isHero: true,
        scene: "teenage boy superhero speaking honestly to site foreman, standing straight and accountable, construction site background"
      },
      {
        caption: { en: "The foreman nods — and gives Tariq a job to do.", ar: "يومئ المشرف برأسه — ويعطي طارق عملاً ليفعله." },
        speech: { en: "Good lad. Honest mistake, honest fix. Get to work.", ar: "ولد طيب. خطأ صادق، إصلاح صادق. ابدأ العمل." },
        speaker: "Foreman", isHero: false,
        scene: "foreman nodding with respect at honest teenage superhero, both working together to fix the wall, teamwork scene, community center construction site"
      }
    ]
  },

  // ── Story 2: PATIENCE ─────────────────────────────────────────────────────
  {
    title: { en: "BUILDING TAKES TIME", ar: "البناء يحتاج وقتاً" },
    setting: { en: "Earthquake-hit village — the morning after", ar: "قرية ضربها الزلزال — صباح اليوم التالي" },
    story: {
      en: "A small village was damaged by an earthquake. Tariq wants to rebuild all the homes right now, in one go, with his full power. But moving too much earth too fast will cause another tremor. Good building takes patience.",
      ar: "تضررت قرية صغيرة من زلزال. يريد طارق إعادة بناء كل المنازل الآن، دفعة واحدة، بكامل قوته. لكن تحريك الكثير من الأرض بسرعة كبيرة سيسبب ارتجاجاً آخر. البناء الجيد يحتاج صبراً."
    },
    panels: [
      {
        caption: { en: "The village is in ruins. Families sleep in the open.", ar: "القرية في حالة خراب. تنام العائلات في العراء." },
        speech: { en: "I can fix ALL of this right now — just watch!", ar: "يمكنني إصلاح كل هذا الآن — فقط شاهدوا!" },
        speaker: "Tariq", isHero: true,
        scene: "boy superhero standing in earthquake-damaged village, families camped outside ruined homes, Tariq eager and impatient to fix everything"
      },
      {
        caption: { en: "An old engineer stops him.", ar: "يوقفه مهندس عجوز." },
        speech: { en: "Son — if you move that much earth at once, you'll set off another tremor. Bigger than the first.", ar: "يا بني — إن حركت كل هذه الأرض دفعة واحدة، ستتسبب في ارتجاج آخر. أكبر من الأول." },
        speaker: "Engineer", isHero: false,
        scene: "old engineer stopping eager teenage superhero, pointing at ground, explaining the danger, village rubble background"
      },
      {
        caption: { en: "Tariq rebuilds slowly — one home at a time — for three days.", ar: "يُعيد طارق البناء ببطء — منزل واحد في كل مرة — لمدة ثلاثة أيام." },
        speech: { en: "This is taking so long… but I understand. One at a time. Do it right.", ar: "هذا يستغرق وقتاً طويلاً… لكنني أفهم. واحداً في كل مرة. أفعله بشكل صحيح." },
        speaker: "Tariq", isHero: true,
        scene: "boy superhero carefully raising one house at a time from earth, concentrated patient expression, villagers watching and helping"
      },
      {
        caption: { en: "Three days later — every home rebuilt. No tremors. Families back inside.", ar: "بعد ثلاثة أيام — كل منزل أُعيد بناؤه. لا ارتجاجات. العائلات عادت للداخل." },
        speech: { en: "You did it right, son. Faster would have been worse. Slower was the real strength.", ar: "فعلتها بشكل صحيح يا بني. الأسرع كان سيكون أسوأ. الأبطأ كان القوة الحقيقية." },
        speaker: "Engineer", isHero: false,
        scene: "rebuilt village with happy families returning to their homes, boy superhero exhausted but satisfied, old engineer shaking his hand, peaceful sunrise"
      }
    ]
  },

  // ── Story 3: KINDNESS ─────────────────────────────────────────────────────
  {
    title: { en: "THE FALLEN NEST", ar: "العش الساقط" },
    setting: { en: "Sunhaven Forest — a windy spring day", ar: "غابة صنهيفن — يوم ربيعي عاصف" },
    story: {
      en: "A windstorm knocks a nest with baby birds from a tall tree. Tariq is on his way to an important training session. He almost walks past — but one tiny sound changes everything.",
      ar: "تُسقط عاصفة هوائية عشاً فيه طيور صغيرة من شجرة طويلة. طارق في طريقه لجلسة تدريبية مهمة. كاد يمر — لكن صوتاً صغيراً واحداً يغير كل شيء."
    },
    panels: [
      {
        caption: { en: "The storm passes. A nest lies broken on the ground. Tiny cheeping fills the air.", ar: "تمر العاصفة. عش محطم على الأرض. تملأ الهواء زقزقة صغيرة." },
        speech: { en: "I'm late for training already… I don't have time for this.", ar: "أنا متأخر بالفعل على التدريب… لا وقت لديّ لهذا." },
        speaker: "Tariq", isHero: true,
        scene: "teenage boy superhero walking past fallen bird nest on forest floor, baby birds inside, looking at his watch, pulled in two directions"
      },
      {
        caption: { en: "One tiny bird looks straight up at him.", ar: "طائر صغير واحد ينظر مباشرة نحوه." },
        speech: { en: "…Okay. Training can wait ten minutes.", ar: "…حسناً. يمكن للتدريب أن ينتظر عشر دقائق." },
        speaker: "Tariq", isHero: true,
        scene: "close up of tiny baby bird looking up at boy superhero, his expression softening with compassion"
      },
      {
        caption: { en: "Tariq raises a new platform of strong earth — a perfect cradle — back up into the tree.", ar: "يرفع طارق منصة جديدة من الأرض الصلبة — مهداً مثالياً — للأعلى داخل الشجرة." },
        speech: { en: "There. Safe and high. Your mother will find you.", ar: "هاكم. بأمان وفي العالي. أمكم ستجدكم." },
        speaker: "Tariq", isHero: true,
        scene: "boy superhero gently using earth powers to lift repaired nest safely back into tall tree, baby birds nestled inside, careful and tender"
      },
      {
        caption: { en: "He arrives at training late. Completely worth it.", ar: "يصل للتدريب متأخراً. يستحق ذلك تماماً." },
        speech: { en: "You're twenty minutes late, Tariq.", ar: "أنت متأخر عشرين دقيقة يا طارق." },
        speaker: "Trainer", isHero: false,
        scene: "boy superhero arriving late to training ground with messy hair and dirt on his hands, slight smile on his face that says it was worth it, trainer with crossed arms"
      }
    ]
  },

  // ── Story 4: COURAGE ──────────────────────────────────────────────────────
  {
    title: { en: "THE DEEP MINE", ar: "المنجم العميق" },
    setting: { en: "Sunhaven Iron Mines — a cave-in emergency", ar: "مناجم حديد صنهيفن — طارئ انهيار" },
    story: {
      en: "Seven miners are trapped deep underground after a tunnel collapse. Tariq must go down — deep underground — and move earth in complete darkness. But Tariq's power comes from feeling the earth, and underground, surrounded by millions of tons of rock, he can feel everything at once. It's overwhelming. He goes anyway.",
      ar: "سبعة عمال مناجم محاصرون في أعماق الأرض بعد انهيار نفق. يجب على طارق النزول — عميقاً في الأرض — وتحريك التربة في ظلام تام. لكن قوة طارق تأتي من الشعور بالأرض، وتحت الأرض، محاطاً بملايين الأطنان من الصخور، يشعر بكل شيء في آنٍ واحد. إنه أمر مرهق. لكنه يذهب على أي حال."
    },
    panels: [
      {
        caption: { en: "The mine entrance is collapsed. Muffled cries come from somewhere far below.", ar: "مدخل المنجم منهار. تأتي أصوات خافتة من مكان عميق في الأسفل." },
        speech: { en: "Seven people down there. I have to go underground — where my powers get… loud.", ar: "سبعة أشخاص هناك في الأسفل. يجب أن أنزل تحت الأرض — حيث تصبح قواي… مزعجة." },
        speaker: "Tariq", isHero: true,
        scene: "boy superhero at collapsed mine entrance, emergency workers around, grim determined expression, darkness below"
      },
      {
        caption: { en: "Underground. Tariq feels every rock, every crack, every tremor. It's deafening.", ar: "تحت الأرض. يشعر طارق بكل صخرة، كل شق، كل ارتجاج. إنه صمم مذهل." },
        speech: { en: "Too much… every rock is screaming… focus. FOCUS. Seven people.", ar: "كثير جداً… كل صخرة تصرخ… ركّز. ركّز. سبعة أشخاص." },
        speaker: "Tariq", isHero: true,
        scene: "boy superhero deep underground surrounded by rock and darkness, overwhelmed by sensory power overload, sweating but pushing through"
      },
      {
        caption: { en: "He finds them. He begins to move the rock — slowly, precisely.", ar: "يجدهم. يبدأ في تحريك الصخر — ببطء، بدقة." },
        speech: { en: "I hear you! Stay still — I'm opening a path. Don't move, whatever you feel.", ar: "أسمعكم! لا تتحركوا — أنا أفتح طريقاً. لا تتحركوا مهما شعرتم." },
        speaker: "Tariq", isHero: true,
        scene: "boy superhero carefully moving massive underground rock formations with glowing copper hands, carving a rescue tunnel in darkness"
      },
      {
        caption: { en: "Seven miners step into the light. Tariq follows — barely standing.", ar: "سبعة عمال مناجم يخطون نحو الضوء. طارق يتبعهم — بالكاد يقف." },
        speech: { en: "He went into the dark for us. All the way down — and all the way back.", ar: "نزل في الظلام من أجلنا. كل الطريق للأسفل — وكل الطريق للعودة." },
        speaker: "Miner", isHero: false,
        scene: "seven miners emerging into daylight from mine, exhausted but alive, boy superhero coming out behind them barely standing, emotional rescue scene"
      }
    ]
  },

  // ── Story 5: GENEROSITY ───────────────────────────────────────────────────
  {
    title: { en: "STONE SOUP", ar: "حساء الحجر" },
    setting: { en: "Sunhaven Valley — after a long drought", ar: "وادي صنهيفن — بعد جفاف طويل" },
    story: {
      en: "A drought has left the valley with almost no food. Families have a little — but everyone is hoarding what they have, afraid to share. Tariq plants himself in the center of the village and asks everyone to bring just one thing. What happens next surprises even him.",
      ar: "أفضى الجفاف إلى شُح شديد في الطعام. لدى العائلات القليل — لكن كل شخص يخزّن ما لديه خوفاً من المشاركة. يضع طارق نفسه في وسط القرية ويطلب من الجميع أن يحضروا شيئاً واحداً. ما يحدث بعد ذلك يفاجئه هو نفسه."
    },
    panels: [
      {
        caption: { en: "The valley is bare. Each family eats alone — and alone, no one has enough.", ar: "الوادي جرداء. كل عائلة تأكل وحدها — ووحدها، لا أحد لديه ما يكفي." },
        speech: { en: "If everyone keeps their little separately, everyone goes hungry. But together…", ar: "إن احتفظ كل شخص بقليله منفرداً، سيجوع الجميع. لكن معاً…" },
        speaker: "Tariq", isHero: true,
        scene: "teenage boy superhero standing in center of sparse valley village, looking at families eating alone in separate homes, thoughtful expression"
      },
      {
        caption: { en: "Tariq uses his power to raise a giant stone pot from the earth — right in the center of the village.", ar: "يستخدم طارق قوته لرفع إناء حجري ضخم من الأرض — في وسط القرية تماماً." },
        speech: { en: "Come! Bring one thing — whatever you have. Anything at all.", ar: "تعالوا! أحضروا شيئاً واحداً — أي شيء لديكم. أي شيء على الإطلاق." },
        speaker: "Tariq", isHero: true,
        scene: "boy superhero raising a giant stone cooking pot from the earth in village center, calling to villagers in their doorways"
      },
      {
        caption: { en: "One by one, families come. A handful of lentils. Two carrots. A bit of oil. A cup of barley.", ar: "واحدة تلو الأخرى، تأتي العائلات. حفنة من العدس. جزرتان. قليل من الزيت. كوب من الشعير." },
        speech: { en: "We have a little barley…", ar: "لدينا قليل من الشعير…" },
        speaker: "Villager", isHero: false,
        scene: "villagers coming one by one to add their small contributions to the giant stone pot, first hesitant then more willing, community gathering forming"
      },
      {
        caption: { en: "By evening, the pot is full — and there is enough for everyone.", ar: "بحلول المساء، الإناء ممتلئ — وهناك ما يكفي للجميع." },
        speech: { en: "How is this possible? We each had so little — but together…", ar: "كيف هذا ممكن؟ لدى كل منا القليل — لكن معاً…" },
        speaker: "Elder", isHero: false,
        scene: "whole village eating together around giant stone pot, laughing and passing food, children playing, warm firelight, community united scene"
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
  const seed = dayNum * 100 + panelIndex + 555;
  const prompt = `${TARIQ_BASE_PROMPT}, ${panel.scene}, vibrant colors, clean lines, no text, no watermark`;
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
          <div style="font-size:2rem">🪨</div>
          <div class="loader-text">${currentLang === 'ar' ? `رسم اللوحة ${i + 1}…` : `Drawing panel ${i + 1}…`}</div>
        </div>
        <img class="panel-img loading" id="img-${i}" alt="${caption}" />
        <div class="speech-bubble ${panel.isHero ? 'tariq' : ''}">
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
  const text = encodeURIComponent('Check out today\'s TARIQ THE IRONWALL comic! 🪨');
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
