// ===== KAEL THE WINDRUNNER — Daily Comic Generator =====

let currentLang = 'en';

const KAEL_BASE_PROMPT = "anime comic book illustration, young boy superhero named Kael, wild windswept dark curly hair, bright sky blue hoodie with silver wind swirl emblem, silver glowing eyes, playful grin, wind and air currents swirling around him";

const ADVENTURES = [

  // ── Story 1: HONESTY ──────────────────────────────────────────────────────
  {
    title: { en: "THE RACE THAT MATTERS", ar: "السباق الحقيقي" },
    setting: { en: "Sunhaven Sports Day — a breezy morning", ar: "يوم الرياضة في صنهيفن — صباح ممطر بالنسيم" },
    story: {
      en: "Kael's friend Rami wins the big race — but Kael saw him take a shortcut. Nobody else noticed. Rami is holding the trophy. Kael must decide: say nothing, or say what's true. Only one of those will help Rami in the long run.",
      ar: "يفوز صديق كيل رامي في السباق الكبير — لكن كيل رآه يأخذ طريقاً مختصراً. لم يلاحظ أحد غيره. رامي يحمل الكأس. يجب على كيل أن يقرر: يصمت أم يقول الحقيقة. فقط أحدهما سيفيد رامي على المدى البعيد."
    },
    panels: [
      {
        caption: { en: "Rami crosses the finish line first — the crowd goes wild!", ar: "يعبر رامي خط النهاية أولاً — يهتف الحشد بحماس!" },
        speech: { en: "YES! I won! First place!", ar: "نعم! فزت! المركز الأول!" },
        speaker: "Rami", isHero: false,
        scene: "excited boy crossing finish line at school sports day, crowd cheering, trophy waiting, celebratory atmosphere, comic art"
      },
      {
        caption: { en: "Kael saw what really happened.", ar: "رأى كيل ما حدث فعلاً." },
        speech: { en: "He went around the course marker… nobody else saw it. Should I just let it go?", ar: "التف حول علامة المسار… لم ير أحد غيري. هل أترك الأمر؟" },
        speaker: "Kael", isHero: true,
        scene: "boy superhero with wind-blown curly hair looking conflicted, wind swirling gently around him, sports field background"
      },
      {
        caption: { en: "Kael pulls Rami aside — just the two of them.", ar: "يأخذ كيل رامي جانباً — بينهما فقط." },
        speech: { en: "I saw the shortcut, Rami. I'm not telling anyone else. But you know what you need to do.", ar: "رأيت الطريق المختصر يا رامي. لن أخبر أحداً غيرك. لكنك تعرف ما يجب فعله." },
        speaker: "Kael", isHero: true,
        scene: "boy superhero speaking quietly and privately to his friend at edge of sports field, serious but kind expression, wind barely moving"
      },
      {
        caption: { en: "Rami takes a breath — and walks to the judge.", ar: "يأخذ رامي نفساً عميقاً — ويمشي نحو الحَكَم." },
        speech: { en: "I… I have to be honest. I didn't complete the full course.", ar: "أنا… يجب أن أكون صادقاً. لم أكمل المسار بالكامل." },
        speaker: "Rami", isHero: false,
        scene: "boy walking toward judge at sports day with honest nervous expression, returning trophy, crowd watching, Kael watching proudly, comic art"
      }
    ]
  },

  // ── Story 2: PATIENCE ─────────────────────────────────────────────────────
  {
    title: { en: "THE SLOW CLOUD", ar: "السحابة البطيئة" },
    setting: { en: "Dusty farmlands east of Sunhaven — midsummer", ar: "أراضي المزارع المغبّرة شرق صنهيفن — منتصف الصيف" },
    story: {
      en: "The farmers' crops are dying. They beg Kael to bring rain right now. Kael has the power — but he knows the winds aren't ready yet. Bringing rain too early could ruin everything. Sometimes the hardest thing is to wait when others are desperate.",
      ar: "محاصيل المزارعين تذبل. يتوسلون كيل أن يجلب المطر الآن. لدى كيل القدرة — لكنه يعلم أن الرياح لم تكن مستعدة بعد. إحضار المطر مبكراً قد يدمر كل شيء. أحياناً أصعب شيء هو الانتظار عندما يكون الآخرون يائسين."
    },
    panels: [
      {
        caption: { en: "The corn is yellow. The soil is cracked. The farmers gather around Kael.", ar: "الذرة صفراء. التربة متشققة. يحتشد المزارعون حول كيل." },
        speech: { en: "Please, Kael — bring the rain! We can't wait any longer!", ar: "من فضلك يا كيل — أحضر المطر! لا نستطيع الانتظار أكثر!" },
        speaker: "Farmer", isHero: false,
        scene: "desperate farmers in dry cracked field, yellowing crops, hot summer sun beating down, boy superhero in center being pleaded with, comic art"
      },
      {
        caption: { en: "Kael closes his eyes and feels the wind patterns far above.", ar: "يغمض كيل عينيه ويحس بأنماط الرياح في الأعلى البعيد." },
        speech: { en: "The moisture is up there — but the wind direction isn't right yet. If I force it now, the rain will miss the fields entirely.", ar: "الرطوبة موجودة هناك فوق — لكن اتجاه الرياح لم يستو بعد. إن أجبرتها الآن، سيتخطى المطر الحقول بالكامل." },
        speaker: "Kael", isHero: true,
        scene: "boy superhero with eyes closed, silver glow around him, wind swirling, sensing the atmosphere above, focused serious expression"
      },
      {
        caption: { en: "Kael asks for one more day. The farmers are unhappy — but they trust him.", ar: "يطلب كيل يوماً إضافياً واحداً. المزارعون غير سعيدين — لكنهم يثقون به." },
        speech: { en: "I know it's hard. But trust the timing. Tomorrow will be right.", ar: "أعلم أنه صعب. لكن ثقوا بالتوقيت. غداً سيكون الوقت مناسباً." },
        speaker: "Kael", isHero: true,
        scene: "boy superhero speaking calmly to frustrated farmers, wind swirling gently around him, cloudy sky above, reassuring posture"
      },
      {
        caption: { en: "The next morning — Kael raises his arms. The clouds answer.", ar: "صباح اليوم التالي — يرفع كيل ذراعيه. تستجيب السحب." },
        speech: { en: "NOW it's right — every drop will land exactly where it's needed!", ar: "الآن الوقت مناسب — كل قطرة ستسقط بالضبط حيث تُحتاج!" },
        speaker: "Kael", isHero: true,
        scene: "boy superhero arms raised triumphantly, huge rain clouds forming above, gentle rain beginning to fall on green fields, farmers cheering below, beautiful comic art"
      }
    ]
  },

  // ── Story 3: KINDNESS ─────────────────────────────────────────────────────
  {
    title: { en: "THE KITE IN THE SKY", ar: "طائرة الورق في السماء" },
    setting: { en: "Sunhaven Park — a windy weekend afternoon", ar: "حديقة صنهيفن — بعد ظهر نهاية أسبوع عاصف" },
    story: {
      en: "Little Dani's handmade kite is stuck way up in a tree — the one his grandfather made for him. He's been crying for an hour. Kael could fly past. But he doesn't.",
      ar: "طائرة الورق اليدوية الصغيرة لداني علقت في قمة شجرة — تلك التي صنعها له جده. يبكي منذ ساعة. كان بإمكان كيل أن يمر. لكنه لم يفعل."
    },
    panels: [
      {
        caption: { en: "A small boy stands under a huge tree, kite string wrapped in branches far above.", ar: "يقف ولد صغير تحت شجرة ضخمة، خيط طائرة الورق ملتف في الأفرع عالياً." },
        speech: { en: "Grandpa made it for me… I can't lose it… I can't!", ar: "جدي صنعها لي… لا أستطيع خسارتها… لا أستطيع!" },
        speaker: "Dani", isHero: false,
        scene: "small boy crying at base of tall tree, kite trapped high in branches, touching sad moment, park setting, comic art"
      },
      {
        caption: { en: "Kael was heading somewhere important. He stops.", ar: "كان كيل متوجهاً لمكان مهم. يتوقف." },
        speech: { en: "Hey — tell me about your kite. Your grandfather made it?", ar: "مرحباً — أخبرني عن طائرتك. جدك صنعها؟" },
        speaker: "Kael", isHero: true,
        scene: "boy superhero pausing mid-flight, wind slowing around him, noticing crying child below, descending to help"
      },
      {
        caption: { en: "Kael sends a careful, gentle gust up through the branches.", ar: "يرسل كيل هبة هواء لطيفة وحذرة عبر الأغصان." },
        speech: { en: "Easy… easy… I don't want to tear it. Slowly now…", ar: "برفق… برفق… لا أريد تمزيقها. ببطء الآن…" },
        speaker: "Kael", isHero: true,
        scene: "boy superhero floating near treetop, concentrating intensely, gentle swirl of wind carefully untangling kite from branches"
      },
      {
        caption: { en: "The kite floats free. Dani's face lights up.", ar: "تتحرر طائرة الورق. يضيء وجه داني." },
        speech: { en: "Thank you! Thank you! It's okay — Grandpa's kite is safe!", ar: "شكراً! شكراً! كل شيء بخير — طائرة الورق سالمة!" },
        speaker: "Dani", isHero: false,
        scene: "small boy jumping for joy holding colorful kite, boy superhero smiling warmly beside him, park background, heartwarming comic scene"
      }
    ]
  },

  // ── Story 4: COURAGE ──────────────────────────────────────────────────────
  {
    title: { en: "INTO THE STORM", ar: "إلى قلب العاصفة" },
    setting: { en: "The open sea — a sudden violent storm", ar: "البحر المفتوح — عاصفة عنيفة مفاجئة" },
    story: {
      en: "A fishing boat with a family aboard is caught in the worst storm Kael has ever seen. His power can redirect wind — but this storm is enormous. Every instinct says turn back. One thing says keep going: the family inside that boat.",
      ar: "قارب صيد بداخله عائلة علق في أسوأ عاصفة رآها كيل في حياته. يستطيع التحكم في الرياح — لكن هذه العاصفة هائلة. كل غريزة تقول: ارجع. شيء واحد يقول تابع: العائلة داخل ذلك القارب."
    },
    panels: [
      {
        caption: { en: "The storm is massive — bigger than anything Kael has faced before.", ar: "العاصفة ضخمة — أكبر مما واجهه كيل من قبل." },
        speech: { en: "That's… a category five. I've never gone into anything that big.", ar: "هذه… عاصفة من الفئة الخامسة. لم أدخل شيئاً بهذا الحجم من قبل." },
        speaker: "Kael", isHero: true,
        scene: "boy superhero hovering at edge of massive storm system over ocean, enormous dark storm clouds and waves visible ahead, moment of hesitation"
      },
      {
        caption: { en: "Through the rain he sees the lights of the boat — flickering.", ar: "عبر المطر يرى أضواء القارب — تومض." },
        speech: { en: "There's a family in there. A scared family.", ar: "هناك عائلة في الداخل. عائلة خائفة." },
        speaker: "Kael", isHero: true,
        scene: "boy superhero squinting through rain and wind, seeing small fishing boat in distance with faint light, determined expression replacing fear"
      },
      {
        caption: { en: "He goes in.", ar: "يدخل." },
        speech: { en: "HOLD ON! I'M COMING!", ar: "تمسّكوا! أنا قادم!" },
        speaker: "Kael", isHero: true,
        scene: "boy superhero diving into massive storm clouds, silver wind trail behind him, dramatic heroic moment, lightning flashing around him"
      },
      {
        caption: { en: "Kael parts the storm — a corridor of calm opens. The boat sails through.", ar: "يشق كيل العاصفة — يفتح ممرٌ هادئ. يبحر القارب عبره." },
        speech: { en: "He… he split the storm. He actually split it.", ar: "لقد… شق العاصفة. شقّها فعلاً." },
        speaker: "Family member", isHero: false,
        scene: "small fishing boat sailing through a dramatic parted storm, boy superhero with arms spread wide holding the massive winds apart, rescue miracle, epic comic art"
      }
    ]
  },

  // ── Story 5: GRATITUDE ────────────────────────────────────────────────────
  {
    title: { en: "WIND UNDER WINGS", ar: "الريح تحت الأجنحة" },
    setting: { en: "Sunhaven Mountain Pass — a cold autumn morning", ar: "ممر جبال صنهيفن — صباح خريفي بارد" },
    story: {
      en: "Every year, thousands of birds fly over Sunhaven's mountains on their migration. This year, headwinds are blocking their path — they're exhausted and falling behind. Kael realizes something important: sometimes you need to give back to nature, not just take from it.",
      ar: "كل عام تطير آلاف الطيور فوق جبال صنهيفن في رحلة الهجرة. هذا العام، رياح معاكسة تعترض طريقها — مرهقة ومتأخرة عن المسار. يدرك كيل شيئاً مهماً: أحياناً تحتاج أن ترد الجميل للطبيعة، لا أن تأخذ منها فقط."
    },
    panels: [
      {
        caption: { en: "A vast flock of birds struggles against fierce headwinds, falling exhausted.", ar: "يكافح سرب ضخم من الطيور في مواجهة رياح معاكسة شديدة، يسقطون مرهقين." },
        speech: { en: "They're going to miss their migration window. They'll freeze if they don't make it through tonight.", ar: "سيفوتهم موعد الهجرة. سيتجمدون إن لم يعبروا الليلة." },
        speaker: "Kael", isHero: true,
        scene: "massive flock of migrating birds struggling against fierce winds over mountain pass, some birds dropping in exhaustion, Kael watching concerned"
      },
      {
        caption: { en: "Kael thinks about all the times the wind has carried him.", ar: "يفكر كيل في كل المرات التي حملته فيها الرياح." },
        speech: { en: "The wind has always been there for me. Maybe today I can be there for them.", ar: "الرياح كانت دائماً معي. ربما اليوم يمكنني أن أكون معهم." },
        speaker: "Kael", isHero: true,
        scene: "boy superhero looking up at struggling birds, thoughtful expression, wind swirling gently around him, mountain backdrop"
      },
      {
        caption: { en: "Kael reverses the winds — turning headwinds into a powerful tailwind.", ar: "يعكس كيل الرياح — يحوّل الرياح المعاكسة إلى رياح خلفية قوية." },
        speech: { en: "Fly! I've got you — all of you!", ar: "طيروا! أنا معكم — جميعاً!" },
        speaker: "Kael", isHero: true,
        scene: "boy superhero arms outstretched above mountain pass, reversing wind currents, thousands of birds now soaring effortlessly forward on new tailwind, spectacular aerial scene"
      },
      {
        caption: { en: "The flock clears the mountains. A murmuration spirals over Kael — a kind of thank you.", ar: "يعبر السرب الجبال. يرسم تشكيل طيور اللقلاق حلزوناً فوق كيل — كنوع من الشكر." },
        speech: { en: "I didn't know birds could say thank you… but I think that was it.", ar: "لم أعلم أن الطيور تستطيع الشكر… لكنني أعتقد أن هذا ما كان." },
        speaker: "Kael", isHero: true,
        scene: "thousands of birds flying in beautiful swirling murmuration pattern above mountain peak, boy superhero watching below with wonder and smile, breathtaking comic art"
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
  const seed = dayNum * 100 + panelIndex + 200;
  const prompt = `${KAEL_BASE_PROMPT}, ${panel.scene}, vibrant colors, clean lines, no text, no watermark`;
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
          <div class="loader-wind">💨</div>
          <div class="loader-text">${currentLang === 'ar' ? `رسم اللوحة ${i + 1}…` : `Drawing panel ${i + 1}…`}</div>
        </div>
        <img class="panel-img loading" id="img-${i}" alt="${caption}" />
        <div class="speech-bubble ${panel.isHero ? 'kael' : ''}">
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
  const text = encodeURIComponent('Check out today\'s KAEL THE WINDRUNNER comic! 💨');
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
