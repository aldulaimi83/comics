// ===== LUNA THE NIGHTWEAVER — Daily Comic Generator =====

let currentLang = 'en';

const LUNA_BASE_PROMPT = "anime comic book illustration, mysterious teenage girl superhero named Luna, silver white flowing hair, pale violet glowing eyes, dark midnight cloak with starry sky pattern, moonlight and silver light surrounding her, night sky backdrop";

const ADVENTURES = [

  // ── Story 1: HONESTY ──────────────────────────────────────────────────────
  {
    title: { en: "THE SHADOW THAT SPEAKS", ar: "الظل الذي يتكلم" },
    setting: { en: "Sunhaven Museum — after closing time", ar: "متحف صنهيفن — بعد ساعات العمل" },
    story: {
      en: "A valuable painting goes missing from the museum. A guard is blamed — but Luna, moving through the shadows, saw exactly what happened. She can reveal the truth, or stay in the dark. Luna has never been able to walk past injustice.",
      ar: "تختفي لوحة قيّمة من المتحف. يُلام حارس أمن — لكن لونا، تتحرك عبر الظلال، رأت بالضبط ما حدث. تستطيع الكشف عن الحقيقة، أو البقاء في الظلام. لونا لم تستطع يوماً تجاوز الظلم."
    },
    panels: [
      {
        caption: { en: "The police question the night guard. His hands shake.", ar: "تستجوب الشرطة حارس الليل. ترتجف يداه." },
        speech: { en: "I didn't take it! I've worked here ten years — I would never!", ar: "لم آخذها! لقد عملت هنا عشر سنوات — لن أفعل ذلك أبداً!" },
        speaker: "Guard", isHero: false,
        scene: "night guard being questioned by police at museum, frightened and falsely accused, dark museum hallway, paintings on walls"
      },
      {
        caption: { en: "Luna steps from the shadows — she was there all along.", ar: "تخرج لونا من الظلال — كانت هناك طوال الوقت." },
        speech: { en: "He didn't take it. I was in the gallery. I saw everything.", ar: "لم يأخذها. كنت في القاعة. رأيت كل شيء." },
        speaker: "Luna", isHero: true,
        scene: "girl superhero emerging dramatically from shadow into museum corridor, silver light trailing behind her, police and guard both startled"
      },
      {
        caption: { en: "Luna points to a corner camera — and describes what it captured.", ar: "تشير لونا إلى كاميرا في الزاوية — وتصف ما التقطته." },
        speech: { en: "The camera recorded it. Check the feed from 11:47. You'll see exactly what happened.", ar: "التقطت الكاميرا الأمر. تحققوا من التسجيل في الساعة 11:47. ستروا بالضبط ما حدث." },
        speaker: "Luna", isHero: true,
        scene: "girl superhero pointing to security camera, silver moonlight illuminating evidence, police officer and guard listening carefully"
      },
      {
        caption: { en: "The real thief is found. The guard goes home to his family.", ar: "يُعثر على اللص الحقيقي. يعود الحارس لعائلته." },
        speech: { en: "You didn't have to come forward… why did you?", ar: "لم يكن عليكِ التقدم… لماذا فعلتِ؟" },
        speaker: "Guard", isHero: false,
        scene: "grateful guard talking to girl superhero in museum, relief and gratitude on his face, soft moonlight through windows"
      }
    ]
  },

  // ── Story 2: PATIENCE ─────────────────────────────────────────────────────
  {
    title: { en: "THE LONG NIGHT", ar: "الليل الطويل" },
    setting: { en: "Sunhaven Hospital — a children's ward, 2 AM", ar: "مستشفى صنهيفن — جناح الأطفال، الساعة الثانية صباحاً" },
    story: {
      en: "A young girl named Sara has a high fever and keeps having terrible nightmares. Luna can weave peaceful illusions into dreams — but it takes long, concentrated effort through the night, with no one to see it and no reward. Luna stays anyway.",
      ar: "فتاة صغيرة اسمها سارة مصابة بحمى شديدة وتعاني من كوابيس مرعبة. تستطيع لونا نسج أوهام سلمية في الأحلام — لكنه يتطلب جهداً مركزاً طويلاً طوال الليل، دون أن يراه أحد ودون مكافأة. لونا تبقى على أي حال."
    },
    panels: [
      {
        caption: { en: "2 AM. Sara wakes screaming again. Her mother is exhausted.", ar: "الساعة الثانية صباحاً. تستيقظ سارة وهي تصرخ مجدداً. أمها منهكة." },
        speech: { en: "Make it stop… please make the dreams stop…", ar: "أوقفوهم… أرجوكم أوقفوا الأحلام…" },
        speaker: "Sara", isHero: false,
        scene: "sick little girl in hospital bed waking from nightmare, mother beside her exhausted, dark hospital ward, 2am lighting"
      },
      {
        caption: { en: "Luna steps from the corner of the room, moonlight in her hands.", ar: "تخرج لونا من زاوية الغرفة، ضوء القمر بين يديها." },
        speech: { en: "I'll sit with her tonight. You sleep. I won't leave until morning.", ar: "سأجلس معها الليلة. نامي أنتِ. لن أغادر حتى الصباح." },
        speaker: "Luna", isHero: true,
        scene: "girl superhero stepping from shadow into hospital room, gentle silver glow in her palms, speaking quietly to exhausted mother"
      },
      {
        caption: { en: "Luna weaves starlight and silver calm into Sara's dreams — hour by hour.", ar: "تنسج لونا ضوء النجوم والهدوء الفضي في أحلام سارة — ساعة بساعة." },
        speech: { en: "This takes all night. No one will see it. But she'll sleep. Keep going.", ar: "هذا يستغرق طوال الليل. لن يراه أحد. لكنها ستنام. استمري." },
        speaker: "Luna", isHero: true,
        scene: "girl superhero sitting beside sick child's bed through the night, gently weaving moonlight patterns into the air above sleeping girl, concentration and care visible"
      },
      {
        caption: { en: "Morning. Sara wakes up — smiling. No nightmares. Fever broken.", ar: "الصباح. تستيقظ سارة — وهي تبتسم. لا كوابيس. الحمى انتهت." },
        speech: { en: "I dreamed about stars and silver oceans… it was the best dream I ever had.", ar: "حلمت بنجوم وبحار فضية… كان أجمل حلم رأيته في حياتي." },
        speaker: "Sara", isHero: false,
        scene: "little girl waking up smiling in hospital bed, first morning light streaming in, girl superhero sitting quietly nearby exhausted but happy, mother returning with breakfast"
      }
    ]
  },

  // ── Story 3: KINDNESS ─────────────────────────────────────────────────────
  {
    title: { en: "THE CHILD WHO FEARED THE DARK", ar: "الطفل الذي خاف الظلام" },
    setting: { en: "Sunhaven Apartments — a stormy night", ar: "شقق صنهيفن — ليلة عاصفة" },
    story: {
      en: "The power goes out across the whole neighborhood. A little boy named Khalid is alone in his apartment, terrified of the dark. Luna — who lives in darkness — knows exactly how that feels. And she knows exactly what to do.",
      ar: "تنقطع الكهرباء عن الحي بأكمله. ولد صغير اسمه خالد وحيد في شقته، مرعوب من الظلام. لونا — التي تعيش في الظلام — تعرف تماماً كيف يشعر. وتعرف تماماً ما يجب فعله."
    },
    panels: [
      {
        caption: { en: "Total blackout. Khalid curls under his blanket, heart pounding.", ar: "انقطاع تام للكهرباء. يتجمع خالد تحت بطانيته، قلبه يدق بعنف." },
        speech: { en: "Hello? Is anyone there? Please, is ANYONE there?", ar: "مرحباً؟ هل هناك أحد؟ رجاءً، هل هناك أي أحد؟" },
        speaker: "Khalid", isHero: false,
        scene: "small boy hiding under blanket in completely dark apartment during power outage, storm outside window, terrified expression"
      },
      {
        caption: { en: "A soft silver glow appears under his door.", ar: "يظهر ضوء فضي ناعم تحت بابه." },
        speech: { en: "Khalid? My name is Luna. I saw your window and I thought you might want some company.", ar: "خالد؟ اسمي لونا. رأيت نافذتك وفكرت أنك ربما تريد رفيقاً." },
        speaker: "Luna", isHero: true,
        scene: "soft silver moonlight glowing under apartment door, girl superhero's calm voice coming from outside"
      },
      {
        caption: { en: "Luna fills the room with soft starlight — the whole apartment becomes a night sky.", ar: "تملأ لونا الغرفة بضوء النجوم الناعم — تتحول الشقة بأكملها إلى سماء ليلية." },
        speech: { en: "See? The dark isn't empty. It's full of light you just couldn't see yet.", ar: "هل ترى؟ الظلام ليس فارغاً. إنه مليء بالضوء الذي لم تستطع رؤيته بعد." },
        speaker: "Luna", isHero: true,
        scene: "apartment transformed into beautiful indoor night sky, stars and moonlight filling the room, boy sitting up in awe instead of fear, girl superhero smiling"
      },
      {
        caption: { en: "The power returns. But Khalid already isn't afraid anymore.", ar: "تعود الكهرباء. لكن خالد لم يعد خائفاً بالفعل." },
        speech: { en: "Can we turn the lights off again? The stars were better.", ar: "هل يمكننا إطفاء الأضواء مرة أخرى؟ النجوم كانت أجمل." },
        speaker: "Khalid", isHero: false,
        scene: "lights returning in apartment, boy asking to turn them off again to see the stars, girl superhero laughing warmly, complete transformation from fear to wonder"
      }
    ]
  },

  // ── Story 4: COURAGE ──────────────────────────────────────────────────────
  {
    title: { en: "THE DARKNESS THAT DOESN'T MOVE", ar: "الظلام الذي لا يتحرك" },
    setting: { en: "The Old Sunhaven Tunnels — deep underground", ar: "أنفاق صنهيفن القديمة — عميق تحت الأرض" },
    story: {
      en: "Three children are lost in the old tunnels beneath the city. There's a section of the tunnels where no light works — not even Luna's moonlight. She has to walk through total blackness using only her sense of shadow. She is terrified. She goes anyway.",
      ar: "ثلاثة أطفال ضائعون في الأنفاق القديمة تحت المدينة. هناك قسم من الأنفاق لا يعمل فيه أي ضوء — ولا حتى ضوء قمر لونا. يجب أن تسير في ظلام تام باستخدام حاسة الظلال فقط. إنها خائفة. لكنها تذهب على أي حال."
    },
    panels: [
      {
        caption: { en: "The deepest section of the tunnel — Luna's moonlight fades out completely.", ar: "القسم الأعمق من النفق — ضوء قمر لونا يتلاشى تماماً." },
        speech: { en: "My light doesn't work here. I've never been somewhere my power just… stops.", ar: "ضوئي لا يعمل هنا. لم أكن في مكان تتوقف فيه قوتي فجأة…" },
        speaker: "Luna", isHero: true,
        scene: "girl superhero in underground tunnel where even her moonlight fails, complete darkness, fear on her face, hands reaching forward"
      },
      {
        caption: { en: "Somewhere ahead, she hears three small voices.", ar: "في مكان ما في الأمام، تسمع ثلاثة أصوات صغيرة." },
        speech: { en: "Hello? Is somebody there? Please — we've been down here so long…", ar: "مرحباً؟ هل هناك أحد؟ من فضلكم — نحن هنا منذ وقت طويل جداً…" },
        speaker: "Child's voice", isHero: false,
        scene: "three small children huddled in darkness far down tunnel, faint voices calling out, Luna hearing them in total darkness"
      },
      {
        caption: { en: "Luna closes her eyes — and feels the shadows instead of seeing.", ar: "تغمض لونا عينيها — وتحس الظلال بدلاً من الرؤية." },
        speech: { en: "I can't see. But I know shadows. Follow my voice. We're going home.", ar: "لا أستطيع الرؤية. لكنني أعرف الظلال. اتبعوا صوتي. نحن ذاهبون للبيت." },
        speaker: "Luna", isHero: true,
        scene: "girl superhero moving through complete darkness with eyes closed, sensing through shadow, three small children following her voice, tense rescue scene"
      },
      {
        caption: { en: "They emerge into moonlight. Luna has never been so glad to see the sky.", ar: "يخرجون إلى ضوء القمر. لونا لم تكن يوماً بهذا الفرح لرؤية السماء." },
        speech: { en: "I was scared the whole way. But you were worth every step of it.", ar: "كنت خائفة طوال الطريق. لكنكم كنتم يستحقون كل خطوة." },
        speaker: "Luna", isHero: true,
        scene: "girl superhero and three rescued children emerging from tunnel into beautiful moonlit night, relief and joy, Luna looking up at the moon with gratitude"
      }
    ]
  },

  // ── Story 5: GENEROSITY ───────────────────────────────────────────────────
  {
    title: { en: "MOONLIGHT FOR EVERYONE", ar: "ضوء القمر للجميع" },
    setting: { en: "Sunhaven — a citywide power failure, midwinter", ar: "صنهيفن — انقطاع كهرباء على مستوى المدينة، منتصف الشتاء" },
    story: {
      en: "The entire city loses power on the coldest night of the year. Hospitals need light. Old people are alone in the dark. Children are scared. Luna cannot be everywhere — but she can light up the whole sky.",
      ar: "تنقطع الكهرباء عن المدينة بأكملها في أبرد ليلة في السنة. المستشفيات تحتاج ضوءاً. كبار السن وحيدون في الظلام. الأطفال خائفون. لا تستطيع لونا أن تكون في كل مكان — لكن يمكنها إضاءة السماء بأكملها."
    },
    panels: [
      {
        caption: { en: "Every light in Sunhaven goes dark at once.", ar: "تنطفئ كل أضواء صنهيفن دفعة واحدة." },
        speech: { en: "Hospitals on backup power. Elderly residents alone. Children scared. This city needs light — right now.", ar: "المستشفيات على الطاقة الاحتياطية. كبار السن وحيدون. الأطفال خائفون. هذه المدينة تحتاج ضوءاً — الآن." },
        speaker: "Luna", isHero: true,
        scene: "entire city in darkness, girl superhero hovering above, seeing the scope of the problem below, hospitals emergency lights, dark residential buildings"
      },
      {
        caption: { en: "Luna could keep her power for emergencies. But this IS the emergency.", ar: "تستطيع لونا الاحتفاظ بقوتها للطوارئ. لكن هذا هو الطارئ." },
        speech: { en: "Every drop of moonlight I have — all of it — tonight.", ar: "كل قطرة من ضوء القمر لديّ — كلها — الليلة." },
        speaker: "Luna", isHero: true,
        scene: "girl superhero making a decision, silver light building in her hands and hair, determination on her face"
      },
      {
        caption: { en: "Luna rises into the sky and releases everything.", ar: "ترتفع لونا في السماء وتطلق كل شيء." },
        speech: { en: "She lit up the whole sky — like a second moon!", ar: "أضاءت السماء بأكملها — كقمر ثانٍ!" },
        speaker: "Citizen", isHero: false,
        scene: "girl superhero rising high above city releasing massive wave of silver moonlight that illuminates the entire city below, spectacular aerial view, citizens looking up in awe"
      },
      {
        caption: { en: "The city glows silver all night. She gives until there is nothing left — then gives a little more.", ar: "تتوهج المدينة بالفضي طوال الليل. تعطي حتى لا يبقى لديها شيء — ثم تعطي قليلاً أكثر." },
        speech: { en: "She held the light for all of us — all night long.", ar: "أمسكت بالضوء لأجلنا جميعاً — طوال الليل." },
        speaker: "Citizen", isHero: false,
        scene: "dawn coming, girl superhero exhausted but smiling, city lit by her light all night, citizens looking up at her with awe and gratitude, beautiful morning scene"
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
  const seed = dayNum * 100 + panelIndex + 777;
  const prompt = `${LUNA_BASE_PROMPT}, ${panel.scene}, vibrant colors, clean lines, no text, no watermark`;
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
          <div style="font-size:2rem">🌙</div>
          <div class="loader-text">${currentLang === 'ar' ? `رسم اللوحة ${i + 1}…` : `Drawing panel ${i + 1}…`}</div>
        </div>
        <img class="panel-img loading" id="img-${i}" alt="${caption}" />
        <div class="speech-bubble ${panel.isHero ? 'luna' : ''}">
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
      loader.innerHTML = `<div style="text-align:center;padding:20px;color:#888;"><div style="font-size:2rem">🎨</div><em style="font-size:.85rem">${caption}</em></div>`;
      loader.classList.remove('hidden');
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
  const text = encodeURIComponent('Check out today\'s LUNA THE NIGHTWEAVER comic! 🌙');
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
