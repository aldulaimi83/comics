// ===== KAEL THE WINDRUNNER — Daily Comic Generator =====
// A brand-new hero. A brand-new power. The origin story starts from Day 1.

const KAEL_BASE_PROMPT = "anime comic book illustration, young boy superhero named Kael, wild windswept dark curly hair, bright sky blue hoodie with silver wind swirl emblem, silver glowing eyes, playful grin, wind and air currents swirling around him";

// ===== ORIGIN STORY (Episodes 1–5) =====
// These always play in order, telling how Kael became the Windrunner.

const ORIGIN_STORY = [
  {
    title: "THE NIGHT OF THE GREAT STORM",
    setting: "Coastal Town of Breezhaven — 10 years ago, and today",
    isOrigin: true,
    panels: [
      {
        caption: "Ten years ago, the worst storm in a century struck Breezhaven. Everyone ran for shelter…",
        speech: "The hurricane — it's changing direction! That's impossible!", speaker: "Weather Reporter", isKael: false,
        scene: "massive hurricane storm over a small coastal town at night, terrified townspeople running for shelter, dramatic dark sky with lightning, news reporter in rain, intense comic art"
      },
      {
        caption: "…and then, in the middle of the howling wind, a baby cried for the first time.",
        speech: "He's… he's here! And the storm — listen — it's stopping!", speaker: "Doctor", isKael: false,
        scene: "hospital delivery room, doctor and nurses looking amazed at newborn baby, storm suddenly calming outside the window, peaceful golden light entering, emotional comic panel"
      },
      {
        caption: "Today. Ten-year-old Kael has no idea why strange breezes always seem to follow him…",
        speech: "Kael! Did you leave the window open AGAIN? My papers are everywhere!", speaker: "Teacher", isKael: false,
        scene: "elementary school classroom, papers flying everywhere in indoor gust of wind, sheepish dark-haired boy raising hand apologetically, confused teacher, funny comic scene"
      },
      {
        caption: "He doesn't know it yet — but the wind has been waiting for him his whole life.",
        speech: "It wasn't me! I was just… thinking really hard.", speaker: "Kael", isKael: true,
        scene: "young dark-haired boy sitting at school desk looking nervous, air currents subtly swirling around him invisibly, other students staring, comic art with subtle wind effect detail"
      }
    ]
  },
  {
    title: "PAPERS EVERYWHERE!",
    setting: "Breezhaven Primary School — a perfectly ordinary Tuesday",
    isOrigin: true,
    panels: [
      {
        caption: "Science class. Kael is trying hard to concentrate. Too hard.",
        speech: "Now class, the answer to this equation is—", speaker: "Mr. Hassan", isKael: false,
        scene: "science classroom, strict teacher at chalkboard, students paying attention, young dark-haired boy at desk concentrating intensely, everything calm before a storm, comic panel"
      },
      {
        caption: "Kael sneezes. The result is… spectacular.",
        speech: "ACHOO!", speaker: "Kael", isKael: true,
        scene: "young boy sneezing at school desk, MASSIVE indoor gust of wind exploding outward in all directions, papers books bags flying everywhere, students ducking, teacher's hat flying, chaotic funny comic panel"
      },
      {
        caption: "Every single paper in the room is now on the ceiling.",
        speech: "My homework… is on the ceiling.", speaker: "Student", isKael: false,
        scene: "classroom with all papers and objects stuck to the ceiling, students looking up stunned, Kael standing in the middle looking mortified and amazed at his own hands, funny shocked comic art"
      },
      {
        caption: "The wind stops. Kael looks at his hands. Something just changed — forever.",
        speech: "I… did that. That was ME. What AM I?", speaker: "Kael", isKael: true,
        scene: "young dark-haired boy staring at his own hands, tiny wind currents visibly swirling between his fingers glowing faintly silver-blue, eyes wide with discovery, dramatic origin moment comic art"
      }
    ]
  },
  {
    title: "UP, UP AND… OOPS.",
    setting: "Breezhaven Cliffs — after school, in secret",
    isOrigin: true,
    panels: [
      {
        caption: "After school, Kael sneaks to the cliffs to test his powers in secret.",
        speech: "Okay. I saw birds do this. How hard can it be?", speaker: "Kael", isKael: true,
        scene: "young dark-haired boy standing at edge of seaside cliffs, arms stretched out, confident pose, ocean behind him, afternoon light, determined expression, comic art"
      },
      {
        caption: "Attempt one. He leaps. The wind catches him… sort of.",
        speech: "I'M FLYING! I'M— wait, why am I upside d—AAAHH!", speaker: "Kael", isKael: true,
        scene: "young boy tumbling upside down through air, wind swirling chaotically around him, seagulls flying away startled, panicked expression, comedic action comic panel"
      },
      {
        caption: "Attempt seven. Kael is covered in sand. But he refuses to quit.",
        speech: "Wind… I know you can hear me. Please. Just once. Work WITH me.", speaker: "Kael", isKael: true,
        scene: "young boy standing up from sand covered in it, hair a mess, determined smile, talking to the air around him like it's a friend, wind beginning to respond gently, touching comic panel"
      },
      {
        caption: "Attempt eight. The wind listens.",
        speech: "Oh. OH. I'm… I'm actually doing it this time!", speaker: "Kael", isKael: true,
        scene: "young dark-haired boy hovering perfectly above the cliffs at sunset, wind lifting him gently, silver-blue air currents flowing beautifully around him, huge joyful grin, triumphant golden hour comic art"
      }
    ]
  },
  {
    title: "THE WIND SPEAKS TO ME",
    setting: "Breezhaven Town — late afternoon, a strange feeling",
    isOrigin: true,
    panels: [
      {
        caption: "Two days after learning to fly. Kael is walking home when the wind changes.",
        speech: "Wait… does anyone else hear that?", speaker: "Kael", isKael: true,
        scene: "young boy walking home on a quiet street, stopping suddenly, head tilted, wind picking up around him, other pedestrians walking past not noticing anything, curious comic panel"
      },
      {
        caption: "Carried on the breeze — a sound. A child. Crying. Far away.",
        speech: "Someone's scared. Someone needs help. But… where?", speaker: "Kael", isKael: true,
        scene: "close-up of young boy's face, silver-blue eyes glowing faintly, concentrating hard, wind currents flowing into his ears like streams, expression shifting from confused to determined, beautiful comic art"
      },
      {
        caption: "Kael follows the wind like a compass needle pointing at someone who needs him.",
        speech: "This way. It's coming from the old harbour district.", speaker: "Kael", isKael: true,
        scene: "young boy running and then launching into the air following a stream of visible wind, low over rooftops of a coastal town at sunset, focused expression, dynamic action comic panel"
      },
      {
        caption: "He finds a small girl, alone on a capsized boat, too frightened to swim.",
        speech: "I heard you on the wind. I'm here now. You're going to be okay.", speaker: "Kael", isKael: true,
        scene: "young superhero boy floating above water reaching hand down to small frightened girl on capsized boat, gentle silver wind currents holding him up, reassuring smile, harbour at golden hour, comic art"
      }
    ]
  },
  {
    title: "WINDRUNNER",
    setting: "Breezhaven Harbour — the moment everything begins",
    isOrigin: true,
    panels: [
      {
        caption: "Kael lifts the girl to safety on a cushion of warm air — his first real rescue.",
        speech: "Hold on! These wind currents are strong. You won't fall — I promise.", speaker: "Kael", isKael: true,
        scene: "young superhero boy carrying small girl on a gentle platform of swirling silver-blue wind, flying low over harbour water toward the dock, girl holding on wide-eyed but beginning to smile, beautiful comic art"
      },
      {
        caption: "The crowd at the harbour watches, speechless.",
        speech: "That boy just… flew. Out of nowhere. Who IS he?", speaker: "Harbour Worker", isKael: false,
        scene: "crowd of harbour workers and townspeople staring up open-mouthed, pointing at flying boy carrying rescued girl, golden sunset behind them, phones out filming, awe-struck comic panel"
      },
      {
        caption: "Kael sets the girl safely on the dock. She's the first person to ask the question.",
        speech: "You saved me. What's your name?", speaker: "Little Girl", isKael: false,
        scene: "young superhero boy setting small girl gently on wooden dock, kneeling to her eye level, tender moment, wind settling around him, golden light, townspeople watching from behind, heartfelt comic scene"
      },
      {
        caption: "He thinks for exactly one second. Then he grins.",
        speech: "…Call me the Windrunner.", speaker: "Kael", isKael: true,
        scene: "young boy superhero standing on dock edge, wind dramatically lifting his hair, silver-blue eyes bright, huge confident grin, sun setting behind him over the ocean, heroic full-body pose, epic triumphant origin comic art"
      }
    ]
  }
];

// ===== ONGOING ADVENTURES (Episode 6+, cycling) =====

const ADVENTURES = [
  {
    title: "THE SANDSTORM WALL",
    setting: "Desert Village of Al-Reem — a storm approaching fast",
    isOrigin: false,
    panels: [
      { caption: "A massive sandstorm is minutes from burying the village of Al-Reem.", speech: "We can't evacuate in time — the children are still inside!", speaker: "Village Elder", isKael: false, scene: "massive brown sandstorm wall approaching small desert village, panicked villagers running, children visible through windows, terrifying scale, dramatic comic panel" },
      { caption: "Kael picks up the storm signal from two hundred miles away.", speech: "Al-Reem. Three minutes. I can make it.", speaker: "Kael", isKael: true, scene: "young superhero boy streaking through blue sky as silver-blue blur, extreme speed, wind trail behind him, desert landscape below, urgent action comic art" },
      { caption: "Kael creates a counter-current — spinning the storm apart from the inside.", speech: "You want to blow? Fine. Blow MY way!", speaker: "Kael", isKael: true, scene: "young superhero boy in centre of swirling sandstorm, arms spinning creating opposite wind vortex, sand flying outward away from village, incredible power display, epic comic art" },
      { caption: "The storm breaks apart. The village stands. Children run out to cheer.", speech: "The Windrunner! He broke it! HE BROKE THE STORM!", speaker: "Child", isKael: false, scene: "desert village safe under clear sky, sandstorm dissipating in distance, children running out to cheer, young superhero landing with grin, joyful community comic scene" }
    ]
  },
  {
    title: "CLEAR SKIES OVER THE CITY",
    setting: "Metropolis Industrial Zone — a week of smog",
    isOrigin: false,
    panels: [
      { caption: "After seven days of thick smog, the city's children can't go outside to play.", speech: "Mum, I just want to breathe fresh air. Can the sky be blue again?", speaker: "Child", isKael: false, scene: "city covered in thick grey smog, children looking out through windows, facemasks on pedestrians, grey unhealthy sky, sad city scene comic panel" },
      { caption: "Kael hears the wish on the wind.", speech: "Fresh air for a whole city? That's a big ask. Let's see what I've got.", speaker: "Kael", isKael: true, scene: "young superhero boy hovering above smoggy city skyline, looking down thoughtfully, wind beginning to swirl around him, morning light, comic art" },
      { caption: "Kael creates a massive clean-air spiral, pulling pollution upward and out to sea.", speech: "Come on, wind — work with me. Push it ALL out!", speaker: "Kael", isKael: true, scene: "young superhero boy arms wide above city, massive spiral of wind lifting dirty smog upward away from buildings in giant column, incredible aerial view, spectacular comic art" },
      { caption: "The sky turns blue. Children pour into parks, arms wide open.", speech: "I can smell the flowers! KAEL YOU DID IT!", speaker: "Children", isKael: false, scene: "city with completely clear blue sky, children running through parks arms wide, parents crying happy tears, young superhero watching from rooftop with satisfied smile, beautiful comic art" }
    ]
  },
  {
    title: "MEDICINE MOUNTAIN",
    setting: "Snowpeak Remote Hospital — roads blocked for 5 days",
    isOrigin: false,
    panels: [
      { caption: "A mountain hospital has been cut off by avalanche. Patients need medicine — urgently.", speech: "If we don't get insulin to these patients in four hours, we'll lose them.", speaker: "Doctor", isKael: false, scene: "mountain hospital cut off by snow and avalanche, worried doctor on radio, patients in beds, blizzard outside, desperate comic panel" },
      { caption: "The emergency broadcast reaches Kael mid-flight over the valley.", speech: "Four hours. Mountain pass is twenty minutes if I push it.", speaker: "Kael", isKael: true, scene: "young superhero boy catching radio signal on the wind mid-flight, silver eyes focusing, immediately banking direction toward snowcapped mountains, urgent comic art" },
      { caption: "Kael creates a wind-tunnel through the pass — cutting travel time to eight minutes.", speech: "Delivery for Dr. Fatima — one hundred vials, signed by the wind!", speaker: "Kael", isKael: true, scene: "young superhero boy landing on snowy hospital rooftop holding medical case, doctors and nurses rushing out, blizzard around him, triumphant grin, heroic comic scene" },
      { caption: "The patients receive treatment. The doctors breathe again.", speech: "You got here in eight minutes. How?", speaker: "Doctor", isKael: false, scene: "warm hospital interior, patients being treated, relieved doctors, young superhero boy leaning in doorway still windswept from flight, humble shrug, heartwarming comic scene" }
    ]
  },
  {
    title: "THE KITE FESTIVAL",
    setting: "Breezhaven Beach — the Annual Children's Kite Day",
    isOrigin: false,
    panels: [
      { caption: "The children's kite festival is a Breezhaven tradition. Today, a sudden dead calm threatens to ruin it.", speech: "Not a breath of wind. All these beautiful kites… just lying flat.", speaker: "Festival Organiser", isKael: false, scene: "beach covered in colourful kites all lying flat, disappointed children, clear but completely windless day, adults shrugging, sad festival scene comic panel" },
      { caption: "Kael spots the grounded kites from above. A slow smile spreads across his face.", speech: "Heh. I think I can help with this one.", speaker: "Kael", isKael: true, scene: "young superhero boy descending from sky toward beach, spotting all the flat kites below, playful grin growing, seagulls parting around him, comic art" },
      { caption: "Kael conjures a hundred perfect individual breezes — one for every child's kite.", speech: "Ready? Three… two… one… FLY!", speaker: "Kael", isKael: true, scene: "young superhero boy on beach with arms wide, hundreds of silver-blue wind streams shooting out toward each kite individually, kites all launching simultaneously in perfectly controlled gusts, spectacular magical comic art" },
      { caption: "The sky fills with colour. Every child laughing. Kael laughing loudest of all.", speech: "This is officially my favourite mission EVER!", speaker: "Kael", isKael: true, scene: "beach sky filled with hundreds of colourful kites soaring high, children laughing and running, young superhero boy floating above surrounded by kite strings looking pure joy, beautiful celebratory comic art" }
    ]
  },
  {
    title: "THE FISHERMEN'S COMPASS",
    setting: "Open Ocean, East of Breezhaven — heavy fog",
    isOrigin: false,
    panels: [
      { caption: "A fleet of fishing boats is lost in heavy fog with no radio signal.", speech: "I can't see anything. We've been circling for six hours.", speaker: "Fisherman", isKael: false, scene: "fishing boats lost in thick ocean fog, fishermen looking worried, no visibility, foghorns sounding, eerie lost-at-sea comic panel" },
      { caption: "Kael reads the ocean winds like a map.", speech: "Eight boats. All within two miles of each other. I can work with that.", speaker: "Kael", isKael: true, scene: "young superhero boy flying above thick fog bank, silver eyes reading wind currents below, confident navigating pose, aerial view of fog-covered ocean, comic art" },
      { caption: "Kael creates a corridor of clear air through the fog, whispering directions on the breeze.", speech: "Follow the warm current — it's blowing northeast, toward home!", speaker: "Kael", isKael: true, scene: "young superhero flying ahead of fishing boats that are following a clear wind corridor he's created through the fog, boats in a line behind him, guiding them home, beautiful comic art" },
      { caption: "The fleet sails into harbour as the fog lifts. Families waiting on the dock burst into cheers.", speech: "The Windrunner brought them home!", speaker: "Family Member", isKael: false, scene: "fishing boats arriving safely at harbour, families on dock cheering and embracing fishermen, young superhero waving from above, warm sunset, joyful reunion comic scene" }
    ]
  },
  {
    title: "THE RAIN GIFT",
    setting: "Farmland of Dry River Valley — third year of drought",
    isOrigin: false,
    panels: [
      { caption: "The Dry River Valley farms have had no rain in three years. The ground is cracked and pale.", speech: "My grandfather farmed this land. And his grandfather before him. I won't give up.", speaker: "Farmer", isKael: false, scene: "cracked dry farmland stretching to horizon, old farmer standing with dignity looking at withered crops, cloudless sky above, poignant comic panel" },
      { caption: "Kael studies the upper atmosphere — there's moisture, but it's passing miles to the north.", speech: "Those clouds are full of rain. They just don't know where they're needed.", speaker: "Kael", isKael: true, scene: "young superhero boy hovering high in sky, silver eyes studying distant cloud formations, thinking strategically, vast sky view, comic art" },
      { caption: "Kael coaxes the clouds southward, guiding them on warm updrafts — patient work over three hours.", speech: "Come on. Come on… just a little further south. The people down there need you.", speaker: "Kael", isKael: true, scene: "young superhero boy gently guiding massive rain clouds with careful wind currents over many miles, arms working carefully like a conductor, vast sky view, beautiful atmospheric comic art" },
      { caption: "The first drops fall on Dry River Valley. The farmer kneels and laughs and cries at once.", speech: "Rain. After three years… RAIN!", speaker: "Farmer", isKael: false, scene: "rain falling on dry farmland, old farmer on knees arms raised laughing and crying in joy, crops beginning to revive, young superhero watching from above in the rain smiling, deeply moving comic art" }
    ]
  },
  {
    title: "THE WIND BRIDGE",
    setting: "Gorge City — the morning commuter bridge collapses",
    isOrigin: false,
    panels: [
      { caption: "At 8am, the Gorge City bridge fails. Forty commuters are stranded mid-fall.", speech: "THE BRIDGE IS GOING! HOLD ON—", speaker: "Driver", isKael: false, scene: "bridge collapsing over deep gorge, cars and pedestrians falling, chaos and screaming, dramatic emergency scene, intense comic panel" },
      { caption: "Kael is three blocks away — eating breakfast. His coffee never hits the table.", speech: "The bridge. NOW.", speaker: "Kael", isKael: true, scene: "young boy dropping bowl launching himself through apartment window at incredible speed, silver wind trail behind him, determined face, explosive action comic panel" },
      { caption: "Kael creates a solid wind platform — holding forty people and twelve cars in mid-air.", speech: "I've got you ALL. Not one person is falling today. Not ONE.", speaker: "Kael", isKael: true, scene: "young superhero boy arms spread wide beneath collapsing bridge, enormous silver-blue wind platform holding all cars and people perfectly suspended in mid-air over gorge, intense powerful comic art" },
      { caption: "One by one he guides everyone to solid ground. It takes twenty-two minutes.", speech: "He held a bridge together with wind. For twenty-two minutes. Alone.", speaker: "News Anchor", isKael: false, scene: "all forty commuters safe on solid ground, young superhero exhausted but grinning, news helicopters filming, crowds cheering, dramatic aftermath comic scene" }
    ]
  },
  {
    title: "THE MIGRATING BIRDS",
    setting: "High Altitude Air Corridor — unexpected storm zone",
    isOrigin: false,
    panels: [
      { caption: "Fifty thousand migrating birds hit an unexpected storm wall they cannot fly through or around.", speech: "They've been circling for twelve hours. They're exhausted.", speaker: "Wildlife Scientist", isKael: false, scene: "enormous flock of exhausted migrating birds circling in place, blocked by storm wall ahead, scientists watching through binoculars, bird welfare crisis comic panel" },
      { caption: "Kael climbs to altitude. The birds watch him, uncertain.", speech: "Hello, friends. I know you're tired. I'm going to make you a door.", speaker: "Kael", isKael: true, scene: "young superhero boy floating at altitude surrounded by thousands of birds, speaking to them calmly, silver eyes warm, birds watching him with curious hope, magical comic scene" },
      { caption: "Kael carves a calm corridor through the storm, thirty miles long, steady and smooth.", speech: "There. A safe path. I'll fly alongside you the whole way. Let's go.", speaker: "Kael", isKael: true, scene: "young superhero boy flying at the head of enormous bird flock through a clear wind corridor he carved through a dark storm, silver-blue tunnel of calm air, epic beautiful migration scene comic art" },
      { caption: "Fifty thousand birds reach their nesting grounds. Kael lands, exhausted and beaming.", speech: "That was the most beautiful thing I have ever been part of.", speaker: "Kael", isKael: true, scene: "young superhero boy sitting on clifftop watching thousands of birds land safely in distant marshlands at sunset, peaceful exhausted happy expression, golden light, profound comic moment" }
    ]
  },
  {
    title: "THE EXAM MORNING",
    setting: "Breezhaven — a flooded road, 7:45am",
    isOrigin: false,
    panels: [
      { caption: "Overnight rain has flooded the only road to school — on the morning of final exams.", speech: "Six months of study and I'm going to miss it because of a puddle the size of a lake!", speaker: "Student", isKael: false, scene: "flooded road blocking students from getting to school, group of students in school uniforms standing at water's edge frustrated and anxious, exam morning panic, relatable comic scene" },
      { caption: "A familiar blue-eyed figure lands beside them, already grinning.", speech: "Final exams? I heard the wind talking. Well — technically, you talking.", speaker: "Kael", isKael: true, scene: "young superhero boy landing casually beside group of panicked students, thumbs up grin, students recognising Kael and lighting up with hope, comic art" },
      { caption: "Kael creates a wide dry path of rushing air, pushing the water aside.", speech: "Walk fast — I can hold this for about four minutes!", speaker: "Kael", isKael: true, scene: "young superhero boy arms spread, wide corridor of dry ground through floodwater created by powerful wind pushing water aside, students running through the gap, funny urgent comic scene" },
      { caption: "Every student reaches school with two minutes to spare. Their essays all blow off the desks.", speech: "Kael. You can put us down now. Also — our papers!", speaker: "Student", isKael: false, scene: "students arriving at school wind-blown but happy, rushing through school gate, exam papers flying everywhere, Kael hovering overhead looking apologetic-but-laughing, funny warm comic ending" }
    ]
  },
  {
    title: "THE LOST BALLOON",
    setting: "Breezhaven Park — a birthday afternoon",
    isOrigin: false,
    panels: [
      { caption: "At his birthday party, five-year-old Omar lets go of his favourite balloon by accident.", speech: "My balloon!! It's going away forever!!", speaker: "Omar", isKael: false, scene: "young child at birthday party watching red balloon floating away into sky, devastated crying expression, party in background, other children watching, comic panel" },
      { caption: "The balloon is already forty feet up and rising. Kael is nearby buying a sandwich.", speech: "Balloon emergency. Clearly this is a job for the Windrunner.", speaker: "Kael", isKael: true, scene: "young superhero boy spotting flying balloon over park, sandwich in hand, amused expression, preparing to launch, bystanders watching, funny casual comic panel" },
      { caption: "Rather than chase it, Kael redirects the breeze — sailing the balloon back to Omar's hand.", speech: "Come on, little guy. Someone important is waiting for you.", speaker: "Kael", isKael: true, scene: "young superhero boy gently guiding a red balloon through the air with precise small wind currents, balloon curving back down beautifully toward small boy's outstretched hand, sweet comic moment" },
      { caption: "Omar stares at the balloon. Then at Kael. Then back at the balloon.", speech: "My balloon came HOME! Are you magic?!", speaker: "Omar", isKael: false, scene: "small child clutching returned balloon looking up at young superhero with absolute wonder, Kael kneeling to his eye level with warm grin, party guests watching and laughing, wholesome heartwarming comic art" }
    ]
  }
];

// ===== TOTAL EPISODES =====
const TOTAL_ORIGIN = ORIGIN_STORY.length;      // 5
const TOTAL_ADVENTURES = ADVENTURES.length;     // 10

// ===== DATE SYSTEM =====
// Kael's story begins April 13, 2026 (Day 1 = Origin Episode 1)

function dateToDayNumber(date) {
  const epoch = new Date(2026, 3, 13); // April 13, 2026
  const ms = date - epoch;
  return Math.max(1, Math.floor(ms / 86400000) + 1);
}

function dayNumberToDate(n) {
  const epoch = new Date(2026, 3, 13);
  return new Date(epoch.getTime() + (n - 1) * 86400000);
}

function formatDate(date) {
  return date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}

function getEpisodeForDay(dayNum) {
  if (dayNum <= TOTAL_ORIGIN) {
    // Origin story episodes
    return { episode: ORIGIN_STORY[dayNum - 1], isOrigin: true, originIndex: dayNum };
  } else {
    // Regular adventures cycling
    const advIndex = (dayNum - TOTAL_ORIGIN - 1) % TOTAL_ADVENTURES;
    return { episode: ADVENTURES[advIndex], isOrigin: false, originIndex: null };
  }
}

// ===== IMAGE URL =====

function buildImageUrl(panel, panelIndex, dayNum) {
  const seed = (dayNum * 100 + panelIndex + 42);
  const prompt = `${KAEL_BASE_PROMPT}, ${panel.scene}, vibrant colors, clean lines, no text, no watermark, manga comic book panel`;
  const encoded = encodeURIComponent(prompt);
  return `https://image.pollinations.ai/prompt/${encoded}?width=512&height=384&seed=${seed}&nologo=true&model=flux`;
}

// ===== RENDER COMIC =====

function renderComic(dayNum) {
  const todayNum = dateToDayNumber(new Date());
  const { episode, isOrigin, originIndex } = getEpisodeForDay(dayNum);
  const date = dayNumberToDate(dayNum);

  // Update header info
  document.getElementById('episodeNum').textContent = `#${dayNum}`;
  document.getElementById('dateLabel').textContent = formatDate(date);
  document.getElementById('comicTitle').textContent = episode.title;
  document.getElementById('comicSetting').textContent = `📍 ${episode.setting}`;

  // Origin tag
  const originTag = document.getElementById('originTag');
  const originBanner = document.getElementById('originBanner');
  const originProgress = document.getElementById('originProgress');

  if (isOrigin) {
    originTag.style.display = 'block';
    originTag.textContent = `📖 ORIGIN STORY — Chapter ${originIndex} of ${TOTAL_ORIGIN}`;
    originBanner.style.display = 'block';
    originProgress.textContent = `Chapter ${originIndex} of ${TOTAL_ORIGIN} — Follow Kael as he discovers who he is.`;
  } else {
    originTag.style.display = 'none';
    originBanner.style.display = 'none';
  }

  // Nav buttons
  document.getElementById('prevBtn').disabled = dayNum <= 1;
  document.getElementById('nextBtn').disabled = dayNum >= todayNum;

  // Render panels
  const grid = document.getElementById('panelsGrid');
  grid.innerHTML = '';

  episode.panels.forEach((panel, i) => {
    const el = document.createElement('div');
    el.className = 'panel';
    el.innerHTML = `
      <div class="panel-num">${i + 1}</div>
      <div class="panel-img-wrap">
        <div class="panel-loader" id="kloader-${i}">
          <div class="loader-wind">💨</div>
          <div class="loader-text">Drawing panel ${i + 1}…</div>
        </div>
        <img
          class="panel-img loading"
          id="kimg-${i}"
          alt="Panel ${i + 1}: ${panel.caption}"
        />
        <div class="speech-bubble ${panel.isKael ? 'kael' : ''}">
          <span class="bubble-speaker">${panel.speaker}</span>
          "${panel.speech}"
        </div>
      </div>
      <div class="panel-caption">${panel.caption}</div>
    `;

    grid.appendChild(el);

    const img = el.querySelector(`#kimg-${i}`);
    const loader = el.querySelector(`#kloader-${i}`);

    function revealImage() {
      img.classList.remove('loading');
      img.classList.add('loaded');
      loader.classList.add('hidden');
    }

    img.onload = revealImage;

    img.onerror = () => {
      img.style.display = 'none';
      loader.innerHTML = `<div style="text-align:center;padding:20px;font-size:.85rem;color:#0369A1;">
        <div style="font-size:2rem;margin-bottom:8px">💨</div>
        <div><em>${panel.caption}</em></div>
        <div style="margin-top:8px;font-size:.75rem;color:#94A3B8">Image on the wind…<br>Refresh to try again</div>
      </div>`;
      loader.classList.remove('hidden');
    };

    img.src = buildImageUrl(panel, i, dayNum);
  });

  // Update URL
  const url = new URL(window.location);
  if (dayNum === todayNum) {
    url.searchParams.delete('day');
  } else {
    url.searchParams.set('day', dayNum);
  }
  window.history.replaceState({}, '', url);

  document.querySelector('main').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ===== NAVIGATION =====

let currentDay = dateToDayNumber(new Date());

function changeDay(delta) {
  currentDay += delta;
  renderComic(currentDay);
}

// ===== CHARACTER CARD =====

function toggleCharCard() {
  document.getElementById('charCard').classList.toggle('open');
}

// ===== SHARING =====

function copyLink() {
  const url = window.location.href;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(url).then(() => showToast('Link copied! 💨')).catch(() => fallbackCopy(url));
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
  showToast('Link copied! 💨');
}

function shareTwitter() {
  const { episode, isOrigin } = getEpisodeForDay(currentDay);
  const tag = isOrigin ? '(Origin Story)' : '';
  const text = `Reading KAEL THE WINDRUNNER Episode #${currentDay} ${tag}: "${episode.title}" — a new free comic every day! 💨`;
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
