// ===== ZARA THE SUNBEAM — Daily Comic Generator =====
// Free forever: Pollinations.ai (image gen) + GitHub Pages (hosting)

const ZARA_BASE_PROMPT = "anime comic book illustration, young girl superhero named Zara, long glowing golden hair with tiny sparkling stars, bright purple and gold costume with shining sun emblem on chest, warm golden glow aura around her, big friendly smile";

const ADVENTURES = [
  {
    title: "THE KITTEN IN THE SKY",
    setting: "Sunhaven Village — a warm sunny afternoon",
    panels: [
      { caption: "In the peaceful village of Sunhaven, a tiny cry breaks the silence…", speech: "Help! My kitten Mochi is stuck way up there!", speaker: "Lily", isZara: false, scene: "small girl with pigtails looking up at tall oak tree, worried expression, golden afternoon light, comic book style" },
      { caption: "Zara hears the call from three blocks away!", speech: "I'm on my way, Lily! No one gets left behind!", speaker: "Zara", isZara: true, scene: "girl superhero flying upward through blue sky, golden hair streaming, determined heroic expression, warm sunlight, comic book art" },
      { caption: "With gentle sunlight hands, Zara calms the frightened kitten…", speech: "Shh… you're safe now, little one. ☀", speaker: "Zara", isZara: true, scene: "girl superhero floating in midair cradling small white kitten, soft golden glow, peaceful gentle expression, tree branches around, comic art style" },
      { caption: "Back on the ground — a reunion full of joy!", speech: "MOCHI! Thank you, Zara! You're the best ever!", speaker: "Lily", isZara: false, scene: "happy little girl hugging white kitten, smiling superhero girl beside them, golden sunset background, heartwarming comic book scene" }
    ]
  },
  {
    title: "FLOOD AT RAINBOW BRIDGE",
    setting: "Rainbow Bridge — during a fierce storm",
    panels: [
      { caption: "A sudden storm breaks the old river dam. Waters rise fast!", speech: "The bridge! Families are stranded — someone help!", speaker: "Villager", isZara: false, scene: "stormy river flooding a bridge, panicked townspeople, dark rain clouds, dramatic comic book panel" },
      { caption: "A golden streak pierces the storm clouds!", speech: "I see them! Hold on, everyone — sunlight is here!", speaker: "Zara", isZara: true, scene: "girl superhero diving through storm clouds, golden light cutting through dark rain, heroic silhouette, manga action style" },
      { caption: "Zara raises a warm force shield, holding back the flood!", speech: "My shield will hold until you all cross safely!", speaker: "Zara", isZara: true, scene: "girl superhero arms stretched wide, large golden dome shield holding back raging floodwater, families running across bridge to safety, epic comic art" },
      { caption: "The storm passes. The village is safe — thanks to one brave heart.", speech: "She saved every single one of us…", speaker: "Elder", isZara: false, scene: "sunny aftermath of storm, smiling townspeople hugging, superhero girl waving goodbye flying upward, rainbow in background, hopeful comic art" }
    ]
  },
  {
    title: "THE LONELY LIGHTHOUSE",
    setting: "The Foggy Cliffs — a cold misty morning",
    panels: [
      { caption: "Old keeper Marco tends his lighthouse alone. No ships in months.", speech: "No one needs this lighthouse anymore… maybe no one needs me.", speaker: "Marco", isZara: false, scene: "elderly man alone in old lighthouse, foggy sea outside, sad expression, warm interior light, comic book style" },
      { caption: "Zara was passing when she spotted the fading light.", speech: "That lighthouse is losing power — and I sense something else too…", speaker: "Zara", isZara: true, scene: "girl superhero pausing mid-flight over misty cliffs, looking toward lighthouse with concerned expression, fog rolling in, comic art" },
      { caption: "Zara shares her solar warmth — not just with the lamp.", speech: "You light the way for others, Marco. That never stops mattering.", speaker: "Zara", isZara: true, scene: "girl superhero sitting beside elderly lighthouse keeper, glowing hands illuminating the room, both smiling warmly, cozy interior, heartfelt comic panel" },
      { caption: "The lighthouse shines bright as ever. Marco smiles for the first time in years.", speech: "Ha! Brighter than ever! Thank you, young sunbeam!", speaker: "Marco", isZara: false, scene: "old lighthouse blazing with golden light cutting through fog, ships in the distance turning toward it, elderly man waving happily from tower, beautiful comic art" }
    ]
  },
  {
    title: "FIRE IN THE FOREST",
    setting: "Emerald Forest — an emergency at dawn",
    panels: [
      { caption: "A wildfire sweeps through Emerald Forest before sunrise…", speech: "My family — the animals! They can't escape the flames!", speaker: "Ranger", isZara: false, scene: "forest fire spreading at dawn, worried park ranger, animals fleeing, dramatic orange flames, urgent comic panel" },
      { caption: "Zara arrives in moments, her aura blazing against the blaze.", speech: "I'll create a firebreak with my shield wall — guide the animals through!", speaker: "Zara", isZara: true, scene: "girl superhero facing wildfire, massive golden energy wall forming between her and the flames, determined expression, epic comic art" },
      { caption: "One by one, every creature passes to safety through Zara's golden corridor.", speech: "Come on — deer, foxes, rabbits — everyone through! You're safe!", speaker: "Zara", isZara: true, scene: "girl superhero surrounded by deer rabbits foxes birds all walking through glowing golden pathway away from fire, beautiful protective scene, vibrant comic art" },
      { caption: "Morning breaks over a forest saved. New life will grow here again.", speech: "Every single animal made it. You're remarkable, Zara.", speaker: "Ranger", isZara: false, scene: "sunrise over partially burned forest, animals resting safely, superhero girl and park ranger looking out at hopeful dawn, green shoots growing from ashes, touching comic panel" }
    ]
  },
  {
    title: "THE HOSPITAL VISIT",
    setting: "Sunhaven Children's Hospital — a grey Tuesday",
    panels: [
      { caption: "Ward 7 is quiet today. Little Amir hasn't smiled in three weeks.", speech: "I don't feel like being brave today…", speaker: "Amir", isZara: false, scene: "young sick boy in hospital bed looking at window sadly, grey sky outside, medical equipment nearby, soft comic panel" },
      { caption: "A warm golden glow fills the corridor outside Room 12…", speech: "I heard there's a kid here who could use some sunshine!", speaker: "Zara", isZara: true, scene: "girl superhero peeking around hospital door frame with big smile, golden light filling the hallway, nurses smiling in background, cheerful comic art" },
      { caption: "Zara spends the whole afternoon — stories, laughter, and light.", speech: "And THEN the dragon tried to eat the homework — but I said NO!", speaker: "Zara", isZara: true, scene: "girl superhero sitting on edge of hospital bed storytelling with animated gestures, sick boy laughing with huge smile, golden warm light filling room, joyful comic scene" },
      { caption: "When Zara leaves, the whole ward is filled with laughter.", speech: "I think I feel braver now. Will she come back?", speaker: "Amir", isZara: false, scene: "hospital ward full of laughing children in beds, golden sunlight streaming through windows, nurse wiping happy tear, hopeful warm comic art" }
    ]
  },
  {
    title: "LOST IN THE MOUNTAINS",
    setting: "Snowpeak Mountains — a blizzard rolling in fast",
    panels: [
      { caption: "Three hikers took a wrong turn. A blizzard is minutes away.", speech: "No signal. No shelter. We're not going to make it…", speaker: "Hiker", isZara: false, scene: "three hikers lost on snowy mountain trail, dark blizzard clouds approaching, fearful expressions, dramatic cold comic panel" },
      { caption: "Zara spots the emergency beacon through the whiteout.", speech: "Three heat signatures, two hundred feet below — I'm going in!", speaker: "Zara", isZara: true, scene: "girl superhero flying through snowstorm, golden light cutting through white blizzard, focused determined face, dynamic action comic panel" },
      { caption: "Zara wraps them in her warm shield and carries them down the mountain.", speech: "My golden shield will keep you warm all the way down. I promise.", speaker: "Zara", isZara: true, scene: "girl superhero flying carrying three people wrapped in glowing golden bubble shield, blizzard raging outside but warm inside, comic art" },
      { caption: "Safe in the mountain lodge, hot cocoa and grateful hearts.", speech: "I've never felt so warm in a blizzard in my life! Thank you!", speaker: "Hiker", isZara: false, scene: "mountain rescue lodge interior, three rescued hikers with hot drinks and blankets, superhero girl smiling by fireplace, cozy warm comic scene" }
    ]
  },
  {
    title: "THE BULLY PROBLEM",
    setting: "Sunhaven School — recess on a Thursday",
    panels: [
      { caption: "On the playground, a kind boy named Sam stands alone.", speech: "Why won't you just leave me alone!", speaker: "Sam", isZara: false, scene: "school playground, small sad boy confronted by bigger kid pointing at him, other children watching, tense comic panel" },
      { caption: "Zara was passing by on her way to a far-off adventure…", speech: "Hold on — something's not right here.", speaker: "Zara", isZara: true, scene: "girl superhero pausing mid-flight above school fence, noticing the scene below, concerned expression, sunny school setting, comic art" },
      { caption: "Zara lands and speaks softly — to BOTH of them.", speech: "You know, the strongest people I've ever met lift others up.", speaker: "Zara", isZara: true, scene: "girl superhero kneeling at eye level speaking gently to two boys, calm wise expression, golden light around her, school setting, thoughtful comic panel" },
      { caption: "By afternoon, new friends walk home together.", speech: "I'm sorry, Sam. Want to play tomorrow?", speaker: "Former Bully", isZara: false, scene: "two boys walking together smiling after school, superhero girl watching from rooftop with satisfied smile, warm golden afternoon light, heartwarming comic" }
    ]
  },
  {
    title: "POWER OUT CITY",
    setting: "Metropolis Central — midnight blackout",
    panels: [
      { caption: "Every light in the city goes dark at midnight. Panic spreads.", speech: "The hospital backup grid is failing — patients are at risk!", speaker: "Doctor", isZara: false, scene: "entire city in blackout at night, panicked people with flashlights, hospital windows going dark, urgent dramatic comic panel" },
      { caption: "Zara sees the city from above — a sea of darkness.", speech: "The hospital first. Then I'll light the whole city.", speaker: "Zara", isZara: true, scene: "girl superhero flying over completely dark city at night, only her golden glow visible from above, heroic silhouette, epic comic art" },
      { caption: "Zara channels solar energy stored in her core — enough for hours.", speech: "I've been soaking up sunlight for this exact moment!", speaker: "Zara", isZara: true, scene: "girl superhero hovering above city releasing massive golden energy wave outward lighting up buildings below, arms extended glowing intensely, spectacular comic art" },
      { caption: "The city wakes up. Every light blazes. Every monitor beeps back to life.", speech: "She powered the ENTIRE CITY. With herself.", speaker: "Reporter", isZara: false, scene: "city fully lit up at night seen from above, joyful people at windows, hospital glowing, girl superhero exhausted but smiling floating above, news helicopter filming, triumphant comic art" }
    ]
  },
  {
    title: "THE SUNFLOWER FIELD",
    setting: "Meadowvale Farm — a drought has hit hard",
    panels: [
      { caption: "Farmer Rosa's sunflowers are dying. A year of work — fading away.", speech: "Without these flowers, we can't pay for the school building repairs…", speaker: "Rosa", isZara: false, scene: "elderly farmer woman looking at wilting sunflower field in drought, cracked dry earth, worried expression, comic art" },
      { caption: "Zara hears the worry in Rosa's voice from the sky above.", speech: "Those flowers want to bloom — I can feel it. Let me help.", speaker: "Zara", isZara: true, scene: "girl superhero landing gently in wilted sunflower field, kneeling down touching dry soil with glowing hand, kind expression, comic panel" },
      { caption: "Zara draws moisture from the clouds and sunlight from within.", speech: "Sunshine from above AND below — that's the secret!", speaker: "Zara", isZara: true, scene: "girl superhero standing in field arms raised, golden light flowing downward into soil, water droplets forming and falling, sunflowers beginning to glow, magical comic art" },
      { caption: "By sunset — a sea of gold. The school will be saved.", speech: "I've farmed fifty years… but I've never seen anything like this.", speaker: "Rosa", isZara: false, scene: "vast blooming golden sunflower field at sunset, old farmer and girl superhero standing together amid flowers, warm golden light, beautiful peaceful comic art" }
    ]
  },
  {
    title: "FRIENDS ACROSS THE SEA",
    setting: "A Refugee Camp — a rainy grey morning",
    panels: [
      { caption: "Far from home, a family waits in the rain with nowhere warm to go.", speech: "Papa, will we ever find a home again?", speaker: "Child", isZara: false, scene: "family sitting under a tent in refugee camp in rain, father and young daughter hugging, sad but hopeful, grey skies, empathetic comic panel" },
      { caption: "Zara arrives with aid workers — and something extra.", speech: "I can't build a new home today. But I can make today feel like one.", speaker: "Zara", isZara: true, scene: "girl superhero walking with aid workers carrying supplies into refugee camp, warm golden glow pushing back the grey rain, gentle smile, comic art" },
      { caption: "Golden warmth fills the camp. Stories are shared. Songs are sung.", speech: "Tell me your home — I want to hear every wonderful thing about it.", speaker: "Zara", isZara: true, scene: "girl superhero sitting in large circle of camp residents of all ages, glowing warm dome over them keeping dry and warm, people laughing and talking, joyful community comic scene" },
      { caption: "Some problems are too big for one hero. But kindness always fits.", speech: "She made us feel like people again. That's everything.", speaker: "Father", isZara: false, scene: "refugee camp with golden light breaking through clouds, children playing, adults smiling, superhero girl flying up and away waving, hopeful sunrise comic art" }
    ]
  },
  {
    title: "THE BROKEN ROBOT",
    setting: "A Science Classroom — the day of the big competition",
    panels: [
      { caption: "Mia worked months on her robot. The morning of the show — it stops.", speech: "It won't turn on! Everything I worked for is gone…", speaker: "Mia", isZara: false, scene: "teenage girl sitting on floor crying next to broken robot science fair project, scattered parts, competition banner in background, sad comic panel" },
      { caption: "Zara spotted the crying girl through the school window.", speech: "What happened? Tell me everything.", speaker: "Zara", isZara: true, scene: "girl superhero leaning through open school window looking concerned at upset teenage girl, golden morning light, comic art style" },
      { caption: "Zara doesn't fix it FOR Mia. She helps Mia fix it HERSELF.", speech: "The spark is in YOU, Mia — the robot just needs a little of it.", speaker: "Zara", isZara: true, scene: "girl superhero and teenage girl working together on robot, glowing hands helping guide the repair, both focused and determined, tools scattered around, empowering comic panel" },
      { caption: "First place. But Mia knows — the real win happened earlier today.", speech: "I didn't just win a trophy. I learned I can solve anything.", speaker: "Mia", isZara: false, scene: "teenage girl holding first place trophy beaming with pride, robot standing working beside her, superhero girl applauding from crowd in background, triumphant school comic art" }
    ]
  },
  {
    title: "OCEAN RESCUE",
    setting: "The Open Sea — a sailing race gone wrong",
    panels: [
      { caption: "A youth sailing team capsizes in rough waters miles from shore.", speech: "MAYDAY! MAYDAY! We're taking on water — four kids aboard!", speaker: "Coast Guard Radio", isZara: false, scene: "capsized sailboat in stormy ocean waves, four young sailors in life jackets in water, dark clouds, emergency flare in sky, dramatic comic panel" },
      { caption: "Zara is already moving before the broadcast ends.", speech: "Four heat signatures. Northeast. Three minutes.", speaker: "Zara", isZara: true, scene: "girl superhero shooting across ocean surface extremely fast leaving golden trail on water, determined face, stormy sea, dynamic action comic art" },
      { caption: "She lifts all four aboard a makeshift platform of solid sunlight.", speech: "This platform is solid — it'll hold! Let's get you home.", speaker: "Zara", isZara: true, scene: "girl superhero creating glowing golden platform on water surface with four young sailors sitting on it safely, calming rough waves around them, comic art" },
      { caption: "The coastguard couldn't believe their instruments.", speech: "They're all safe — dried off and smiling. HOW is that possible?!", speaker: "Coast Guard Captain", isZara: false, scene: "coast guard boat with four young sailors wrapped in blankets grinning, superhero girl waving from the water, coast guard captain speechless, sunny sky returning, joyful comic" }
    ]
  },
  {
    title: "THE MIDNIGHT GARDEN",
    setting: "City Community Garden — a surprise late-night visit",
    panels: [
      { caption: "The community garden has been vandalized. Weeks of work destroyed.", speech: "All our vegetables… the children's art… everything is ruined.", speaker: "Garden Keeper", isZara: false, scene: "elderly garden keeper looking at vandalized community garden at night, broken plants and torn artwork, devastated expression, moonlit comic panel" },
      { caption: "Zara can heal more than people.", speech: "Broken things can grow back stronger. I'll prove it.", speaker: "Zara", isZara: true, scene: "girl superhero kneeling in ruined garden at night, hands glowing golden touching broken plants, focused healing expression, moonlight and golden light, comic art" },
      { caption: "Golden light accelerates new growth. In hours, the garden blooms anew.", speech: "Come ON, little seeds — there are children counting on you!", speaker: "Zara", isZara: true, scene: "girl superhero surrounded by rapidly blooming plants and flowers in golden light, magical growth accelerating all around her, night garden glowing, spectacular comic panel" },
      { caption: "Dawn reveals a garden MORE beautiful than before.", speech: "The children will arrive in one hour… and they will find magic.", speaker: "Garden Keeper", isZara: false, scene: "dawn breaking over lush beautiful community garden, elderly keeper and superhero standing together in wonder, more vibrant than before, hopeful morning comic art" }
    ]
  },
  {
    title: "THE SINGING STORM",
    setting: "Harmony Hall — the night of the big concert",
    panels: [
      { caption: "Omar practised all year for this. Stage fright has him frozen solid.", speech: "I… I can't go out there. My voice won't work. I'm so sorry.", speaker: "Omar", isZara: false, scene: "young boy in concert outfit frozen with stage fright backstage, audience murmur visible through curtain, anxious expression, comic panel" },
      { caption: "Zara found him in the wings — shaking, silent.", speech: "Your voice is in there. Locked up by fear. Let's find the key.", speaker: "Zara", isZara: true, scene: "girl superhero crouching to eye level with nervous young boy backstage, kind steady eyes, golden warm light, reassuring moment, comic art" },
      { caption: "A little golden warmth on the heart goes a long way.", speech: "Feel that? That's YOUR light, Omar. It was always there.", speaker: "Zara", isZara: true, scene: "girl superhero gently placing glowing hand on young boy's chest, boy's eyes widening with confidence, warm golden light blooming from within him, touching comic scene" },
      { caption: "The standing ovation lasted four full minutes.", speech: "That was the most beautiful thing I have ever heard.", speaker: "Audience Member", isZara: false, scene: "young boy on stage performing to packed audience in standing ovation, tears of joy, superhero girl watching proudly from empty seat in back row smiling, triumphant comic art" }
    ]
  },
  {
    title: "ZARA AND THE LITTLE STAR",
    setting: "A Remote Desert — a meteor shower night",
    panels: [
      { caption: "Deep in the desert, a young girl spots something glowing in the sand.", speech: "What… are you? You're hurt, aren't you?", speaker: "Nadia", isZara: false, scene: "young girl in desert at night crouching near small glowing object in sand, meteor shower above, curious and gentle expression, magical comic panel" },
      { caption: "It's a piece of star — lost and fading far from home.", speech: "I've seen this before. A stellar fragment. We have to help it.", speaker: "Zara", isZara: true, scene: "girl superhero landing in desert kneeling beside small glowing star fragment, Nadia beside her, wonder on both faces, night sky with meteors, comic art" },
      { caption: "Zara uses every bit of solar energy she has to guide it home.", speech: "This might take everything I've got — but it's worth it.", speaker: "Zara", isZara: true, scene: "girl superhero channeling all her golden energy upward in beam toward night sky carrying small star fragment up and up, straining with effort but determined, spectacular comic art" },
      { caption: "A new star appears in the constellation above. It twinkles — just for them.", speech: "Did it… did it make it home?", speaker: "Nadia", isZara: false, scene: "Nadia and exhausted but happy superhero girl lying in desert sand staring up at night sky, new bright star twinkling among constellations, beautiful peaceful comic art" }
    ]
  }
];

// ===== DATE UTILS =====

function dateToDayNumber(date) {
  const epoch = new Date(2025, 0, 1); // Jan 1 2025 = Day 1
  const ms = date - epoch;
  return Math.max(1, Math.floor(ms / 86400000) + 1);
}

function dayNumberToDate(n) {
  const epoch = new Date(2025, 0, 1);
  return new Date(epoch.getTime() + (n - 1) * 86400000);
}

function formatDate(date) {
  return date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}

function getAdventureForDay(dayNum) {
  const idx = (dayNum - 1) % ADVENTURES.length;
  return ADVENTURES[idx];
}

// ===== POLLINATIONS IMAGE URL =====

function buildImageUrl(panel, panelIndex, dayNum) {
  const seed = dayNum * 100 + panelIndex;
  const prompt = `${ZARA_BASE_PROMPT}, ${panel.scene}, vibrant colors, clean lines, no text, no watermark, comic book panel`;
  const encoded = encodeURIComponent(prompt);
  return `https://image.pollinations.ai/prompt/${encoded}?width=400&height=300&seed=${seed}&nologo=true&enhance=false&model=flux-schnell`;
}

// ===== RENDER COMIC =====

function renderComic(dayNum) {
  const adventure = getAdventureForDay(dayNum);
  const date = dayNumberToDate(dayNum);
  const todayNum = dateToDayNumber(new Date());

  // Update header info
  document.getElementById('episodeNum').textContent = `#${dayNum}`;
  document.getElementById('dateLabel').textContent = formatDate(date);
  document.getElementById('comicTitle').textContent = adventure.title;
  document.getElementById('comicSetting').textContent = `📍 ${adventure.setting}`;
  const storyEl = document.getElementById('comicStory');
  if (storyEl) storyEl.textContent = adventure.story || '';

  // Nav buttons
  document.getElementById('prevBtn').disabled = dayNum <= 1;
  document.getElementById('nextBtn').disabled = dayNum >= todayNum;

  // Render panels
  const grid = document.getElementById('panelsGrid');
  grid.innerHTML = '';

  adventure.panels.forEach((panel, i) => {
    const imgUrl = buildImageUrl(panel, i, dayNum);

    const el = document.createElement('div');
    el.className = 'panel';
    // Build HTML without src — attach handlers first, then set src to avoid race condition
    el.innerHTML = `
      <div class="panel-num">${i + 1}</div>
      <div class="panel-img-wrap">
        <div class="panel-loader" id="loader-${i}">
          <div class="loader-sun">☀</div>
          <div class="loader-text">Drawing panel ${i + 1}…</div>
        </div>
        <img
          class="panel-img loading"
          id="img-${i}"
          alt="Panel ${i + 1}: ${panel.caption}"
        />
        <div class="speech-bubble ${panel.isZara ? 'zara' : ''}">
          <span class="bubble-speaker">${panel.speaker}</span>
          "${panel.speech}"
        </div>
      </div>
      <div class="panel-caption">${panel.caption}</div>
    `;

    grid.appendChild(el);

    const img = el.querySelector(`#img-${i}`);
    const loader = el.querySelector(`#loader-${i}`);

    function revealImage() {
      img.classList.remove('loading');
      img.classList.add('loaded');
      loader.classList.add('hidden');
    }

    img.onload = revealImage;

    img.onerror = () => {
      img.style.display = 'none';
      loader.innerHTML = `<div style="text-align:center;padding:20px;font-size:.85rem;color:#666;">
        <div style="font-size:2rem;margin-bottom:8px">🎨</div>
        <div><em>${panel.caption}</em></div>
        <div style="margin-top:8px;font-size:.75rem;color:#aaa">Image generating…<br>Refresh to retry</div>
      </div>`;
      loader.classList.remove('hidden');
    };

    // Stagger loads so panels don't all hit the API simultaneously
    setTimeout(() => { img.src = imgUrl; }, i * 500);
  });

  // Update URL without reload
  const url = new URL(window.location);
  if (dayNum === todayNum) {
    url.searchParams.delete('day');
  } else {
    url.searchParams.set('day', dayNum);
  }
  window.history.replaceState({}, '', url);

  // Scroll to main
  document.querySelector('main').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ===== NAVIGATION =====

let currentDay = dateToDayNumber(new Date());

function changeDay(delta) {
  currentDay += delta;
  renderComic(currentDay);
}

// ===== CHARACTER CARD TOGGLE =====

function toggleCharCard() {
  const card = document.getElementById('charCard');
  card.classList.toggle('open');
}

// ===== SHARING =====

function copyLink() {
  const url = window.location.href;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(url).then(() => showToast('Link copied! ☀')).catch(() => fallbackCopy(url));
  } else {
    fallbackCopy(url);
  }
}

function fallbackCopy(text) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.cssText = 'position:fixed;opacity:0';
  document.body.appendChild(ta);
  ta.select();
  document.execCommand('copy');
  document.body.removeChild(ta);
  showToast('Link copied! ☀');
}

function shareTwitter() {
  const adventure = getAdventureForDay(currentDay);
  const text = `Reading ZARA THE SUNBEAM Episode #${currentDay}: "${adventure.title}" — a new free comic every day! 🌟`;
  const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(window.location.href)}`;
  window.open(url, '_blank');
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

// ===== INIT =====

(function init() {
  // Check for ?day= param
  const params = new URLSearchParams(window.location.search);
  const dayParam = parseInt(params.get('day'));
  const todayNum = dateToDayNumber(new Date());

  if (dayParam && dayParam >= 1 && dayParam <= todayNum) {
    currentDay = dayParam;
  } else {
    currentDay = todayNum;
  }

  renderComic(currentDay);
})();
