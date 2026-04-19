// ===== TARIQ THE IRONWALL — Daily Comic Generator =====

const TARIQ_BASE_PROMPT = "anime comic book illustration, muscular teenage Arab boy superhero named Tariq, brown skin, copper bronze stone armor on arms and chest, boulders and earth floating around him, powerful heroic expression, desert mountain setting";

const ORIGIN_STORY = [
  {
    title: "THE COLLAPSE AT IRON MOUNTAIN",
    setting: "Jabal Al-Hadid Mining Village — fourteen years ago and today",
    isOrigin: true,
    story: "The mining village of Jabal Al-Hadid has worked the same iron-rich mountain for four generations. Tariq grew up knowing every tunnel, every seam, every rumble of the earth that meant nothing — and the one kind that meant everything. At fourteen, he was bringing his father's lunch to the mine when the mountain decided to change shape. What happened next didn't make the news, because nobody saw it except the thirty-one miners who walked out alive, and they all agreed on the same story: the tunnel held because the boy held it.",
    panels: [
      { caption: "Fourteen years of age. Tariq is walking the familiar mountain path to his father's mine when he feels something through the soles of his boots — a vibration that doesn't belong there.", speech: "That's not equipment. That's the mountain. Something's wrong.", speaker: "Tariq", isTariq: true, scene: "muscular teenage Arab boy on mountain path, stopping suddenly, looking at the ground with intense focus, distant mine entrance visible, morning light, dust beginning to rise from the mountain, tense comic panel" },
      { caption: "The mine entrance collapses. Thirty-one miners are inside — including his father — under thirty metres of rock.", speech: "FATHER! The collapse — there are people inside — someone CALL—", speaker: "Tariq", isTariq: true, scene: "mine entrance collapsing in huge cloud of dust and falling rock, teenage boy running toward it through the debris, horror on his face, other villagers rushing from the distance, dramatic crisis comic panel" },
      { caption: "He presses both hands to the collapsed entrance — and feels the tunnel system under his palms like a map. Thirty-one heartbeats. Alive. He can hold it.", speech: "I don't understand what I'm doing. But I'm not letting go.", speaker: "Tariq", isTariq: true, scene: "teenage boy kneeling at mine entrance with both palms flat against the rock, eyes closed in extreme concentration, copper-bronze light beginning to glow from his hands and spread through the stone around him, mountain visibly stabilising, profound comic art" },
      { caption: "He holds the tunnel open for twenty-seven minutes. Thirty-one miners walk out. His father is last.", speech: "Son. What… what did you do?", speaker: "Father", isTariq: false, scene: "thirty-one miners emerging from mine entrance into daylight, some supporting each other, all alive, teenage boy still kneeling at entrance utterly exhausted but solid as the mountain itself, father reaching for him with stunned wonder, deeply emotional comic art" }
    ]
  },
  {
    title: "WHAT THE MOUNTAIN KNOWS",
    setting: "Jabal Al-Hadid — the week after",
    isOrigin: true,
    story: "A week after the collapse, the rescue is officially credited to 'structural luck' and 'a fortunate fault line'. Tariq's father says nothing to anyone. But at night, he takes Tariq to the top of the mountain and tells him the family story — the one his grandfather told him, and his great-grandfather told him, about the men of their line who could hear the earth speak. Tariq listens. Then he puts his hand on the summit rock — and the mountain tells him everything it knows.",
    panels: [
      { caption: "Tariq's father leads him to the mountain summit at midnight — the same summit his grandfather climbed on the night he discovered the same thing.", speech: "Our family has always been close to the earth, Tariq. Closer than most men know. It's time I told you what that means.", speaker: "Father", isTariq: false, scene: "father and son at mountain summit at night, stars above, distant village lights below, father's hand on son's shoulder, solemn important conversation, beautiful quiet night comic panel" },
      { caption: "Tariq places his palm flat on the summit rock. He feels the whole mountain — every seam of iron, every underground river, every tunnel, every sleeping fault.", speech: "I can… I can feel all of it. The whole mountain. It goes down so far…", speaker: "Tariq", isTariq: true, scene: "teenage boy with both palms on mountain rock, eyes wide with wonder, glowing copper light spreading from his hands through the rock veins, feeling the scale of the mountain below him, awe-inspiring comic art" },
      { caption: "The mountain shows him something else too — the valley below, the village, the people. It knows where they are. It wants them protected.", speech: "It's not just stone. It has a… a kind of memory. It remembers every person who's ever walked on it.", speaker: "Tariq", isTariq: true, scene: "teenage boy still in contact with mountain, expression shifting from wonder to understanding to deep calm, copper energy flowing from mountain into him, the landscape glowing gently below, profound origin moment comic art" },
      { caption: "He stands up. He's the same height he was five minutes ago. But he feels like a mountain.", speech: "I understand now. I'm not just from this place. I'm made of it.", speaker: "Tariq", isTariq: true, scene: "teenage boy standing tall on mountain summit, arms slightly out, copper-bronze stone armor beginning to form on his arms for the first time without trying, stars above, village below, father watching with quiet pride, epic comic art" }
    ]
  },
  {
    title: "THE FIRST WALL",
    setting: "Jabal Al-Hadid Valley — practice day",
    isOrigin: true,
    story: "He needs to understand what he can do before he can do it for anyone else. Three days alone in the high desert, with nothing but rock and patience and a notebook full of questions. What he discovers: he can move earth the way other people move their hands — naturally, without effort, as if it's been waiting for him to ask. What he also discovers: his first instinct is never to attack. It's always to protect.",
    panels: [
      { caption: "Day one in the high desert. Tariq tries to move a boulder. It moves — along with thirty others he didn't intend.", speech: "Okay. Less force. It's not about pushing — it's about asking.", speaker: "Tariq", isTariq: true, scene: "teenage boy standing in desert with thirty boulders accidentally floating around him looking surprised, one small targeted boulder he intended to move, the rest he did not, funny overwhelmed comic panel" },
      { caption: "Day two. He tries raising a wall. It rises perfectly — and keeps going. Eight metres. Twelve. Seventeen. He stops it at twenty.", speech: "Hm. The earth really wants to help. Maybe a little too much.", speaker: "Tariq", isTariq: true, scene: "teenage boy staring up at a perfect twenty-metre stone wall he just raised, looking slightly awed by his own power, desert landscape, the wall casting a long shadow, funny grand comic panel" },
      { caption: "Day three. He discovers the instinct that defines him: when he senses danger, his first impulse isn't to attack. It's to BUILD.", speech: "I'm not a weapon. I'm a wall. That's what I'm supposed to be.", speaker: "Tariq", isTariq: true, scene: "teenage boy standing in middle of desert, copper-bronze armor growing naturally from his body like a second skin, calm realisation on his face, boulders arranged protectively around him in a ring, beautiful moment of self-discovery, comic art" },
      { caption: "He walks home with sand in his hair, copper dust on his hands, and a plan.", speech: "A wall doesn't fight. A wall protects. That's enough. That's everything.", speaker: "Tariq", isTariq: true, scene: "teenage boy walking home toward his mountain village at sunset, village lights twinkling below, stone armor receded, just a young man walking home, quiet confident expression, warm comic panel" }
    ]
  },
  {
    title: "THE LANDSLIDE",
    setting: "Mountain Road 7 — a bus, sixty children, a falling hillside",
    isOrigin: true,
    story: "His first real rescue wasn't planned. He was sitting his history exam when he felt it through the desk, through the floor, through the mountain under the school: the vibration of a hillside coming loose. Mountain Road 7. A school bus. The exact frequency of sixty small heartbeats. He put down his pen, walked out of the exam — and became the Ironwall.",
    panels: [
      { caption: "Halfway through his history exam, Tariq feels a vibration through the desk that nobody else notices. Mountain Road 7. Something is wrong.", speech: "Excuse me. I have to go.", speaker: "Tariq", isTariq: true, scene: "teenage boy calmly standing up in the middle of an exam, putting down his pen, teacher looking astonished, other students staring, Tariq's expression utterly serious and calm, urgency without panic, striking comic panel" },
      { caption: "He feels the hillside separating from the mountain a full eight seconds before it falls. He's already on the road.", speech: "Bus. Sixty children. Three seconds. Build.", speaker: "Tariq", isTariq: true, scene: "teenage boy sprinting along mountain road, stone armor growing on his body as he runs, the hillside above beginning to crack and shift, massive rocks starting to fall, explosive urgent action comic panel" },
      { caption: "He plants both fists in the earth at the roadside and raises a curved stone barrier thirty metres long, two seconds before the landslide hits.", speech: "HOLD.", speaker: "Tariq", isTariq: true, scene: "teenage boy in full copper-bronze stone armor, fists buried in mountain road, massive curved stone wall rising from the earth between the landslide and the school bus, thousands of tonnes of rock hitting the wall, the bus untouched, epic power display comic art" },
      { caption: "The landslide breaks around his wall like a river around a stone. Sixty children look out the bus windows at a boy standing in the middle of a rockslide, completely still.", speech: "Is that boy… is he holding back the MOUNTAIN?", speaker: "Child on Bus", isTariq: false, scene: "school bus windows with amazed children's faces pressed against the glass, through the window they can see teenage boy in stone armor holding back the entire landslide, massive rocks parting around his wall, dawn breaking, spectacular heroic comic art" }
    ]
  },
  {
    title: "IRONWALL",
    setting: "Jabal Al-Hadid — the day the name is chosen",
    isOrigin: true,
    story: "The landslide rescue makes the regional news. The police call it 'a geological anomaly'. The bus driver calls it 'the boy made of mountain'. The children call it 'the stone superhero'. Tariq's father reads every article, says nothing at dinner, and then after the meal pushes a small copper pendant across the table — the same one his grandfather wore. Tariq picks it up. It's the shape of a wall.",
    panels: [
      { caption: "The regional news leads with a strange photo: a perfect curved wall of stone on Mountain Road 7, with no construction equipment nearby. Nobody can explain it.", speech: "'Geological formation' — they're calling it a geological formation. A twenty-metre curved wall that appeared in three seconds is a geological formation.", speaker: "Reporter", isTariq: false, scene: "television news showing the perfect stone wall on the mountain road, reporter gesturing at it in bewilderment, news ticker reading MYSTERY WALL SAVES SCHOOL BUS, living room where Tariq's family watches, comic panel" },
      { caption: "The bus driver gives his own interview. He's very clear about what he saw.", speech: "It wasn't geology. It was a boy. A big boy with stone hands. He stood in front of my bus and held the mountain. That's what happened.", speaker: "Bus Driver", isTariq: false, scene: "bus driver in interview giving statement with total conviction, looking directly at camera, unshakeable in his account, reporter looking doubtful, the certainty of the witness compelling comic panel" },
      { caption: "After dinner, Tariq's father slides a small copper pendant across the table without a word.", speech: "Your great-grandfather made this. He said the family wall would rise again one day. I think today was that day.", speaker: "Father", isTariq: false, scene: "father and son at dinner table, father sliding small copper pendant shaped like a wall across the wood, Tariq picking it up, quiet significant moment, warm kitchen light, intergenerational legacy comic art" },
      { caption: "Tariq holds the pendant. The copper is warm — the same warmth as his armor. He understands now. He didn't become something new. He became what his family has always been.", speech: "The Ironwall. That's what I am. That's what we've always been.", speaker: "Tariq", isTariq: true, scene: "teenage boy holding copper wall pendant, stone armor rising gently on his arms and shoulders as he holds it, eyes quiet and certain, father watching with proud tears, mountain visible through the window behind them, beautiful origin conclusion comic art" }
    ]
  }
];

const ADVENTURES = [
  {
    title: "THE EARTHQUAKE",
    setting: "Al-Rashid City — 4:47am, a 6.2 magnitude quake",
    isOrigin: false,
    story: "A 6.2 magnitude earthquake hits Al-Rashid at 4:47 in the morning, when the city is asleep. Thirty-four buildings develop structural failures in the first sixty seconds. Tariq wakes up the moment it starts — he felt the fault line twitching three seconds before the seismographs did. He's already dressed.",
    panels: [
      { caption: "The earthquake hits at 4:47am. Tariq was already awake — he felt the fault line shift three seconds before the first tremor reached the surface.", speech: "Thirty-four buildings. I can feel the ones that are going to fail. I have maybe four minutes.", speaker: "Tariq", isTariq: true, scene: "teenage boy already dressed at 4am, city shaking outside his window, he presses hands to the floor reading the exact pattern of structural failures across the city, calm in crisis, copper energy mapping visible, comic art" },
      { caption: "He can't save every building. But he can find the ones with people still trapped inside them and hold them long enough.", speech: "This one. Twelve floors. Twenty people. The east corner is collapsing — brace it from the inside.", speaker: "Tariq", isTariq: true, scene: "teenage boy in stone armor running through earthquake-shaking city streets, buildings cracking around him, reaching a specific residential tower where the east corner is visibly failing, emergency action comic panel" },
      { caption: "He braces six buildings from inside their foundations before the main quake passes — pressing his hands to the walls and pushing the earth back into alignment.", speech: "Come on. Hold. Hold. I've got you. I'm not letting you fall.", speaker: "Tariq", isTariq: true, scene: "teenage boy in full stone armor inside a collapsing building stairwell, arms spread pressing against both walls, copper energy flowing through the building structure, sweat and effort, building holding, fierce determination, powerful comic art" },
      { caption: "Six buildings. Eighty-nine people. All unharmed. The rescue teams arrive at dawn to find every critical building mysteriously, impossibly stable.", speech: "The structural engineering on these is insane. These buildings should be rubble. How are they standing?", speaker: "Structural Engineer", isTariq: false, scene: "engineer inspecting building at dawn, emergency lights, rescue crews around her, all the buildings intact, workers bewildered, Tariq visible in the background sitting on a kerb eating breakfast like nothing happened, wonderful comic scene" }
    ]
  },
  {
    title: "THE OPEN PIT",
    setting: "Wadi Al-Hadid Quarry — a sinkhole emergency",
    isOrigin: false,
    story: "A sinkhole opens beneath the Wadi Al-Hadid quarry during the morning shift, swallowing two excavator machines and four workers in under thirty seconds. The hole is expanding. The quarry foreman is screaming into a radio. And Tariq, who grew up playing in this quarry as a child, feels the earth open from twelve kilometres away.",
    panels: [
      { caption: "The sinkhole opens at 9:22am. In thirty seconds it swallows two excavators and four workers. The edge of the hole is still crumbling outward.", speech: "SINKHOLE! Everyone back — the EDGE IS MOVING—", speaker: "Quarry Foreman", isTariq: false, scene: "massive sinkhole opening in quarry floor, two excavators disappearing into it, workers running, dust and falling rock, chaos and terror, dramatic crisis comic panel" },
      { caption: "The four workers are alive — trapped on a ledge fifteen metres down in the sinkhole. Tariq can feel all four of them.", speech: "Four people. Fifteen metres down. The ledge is stable for now — maybe six minutes.", speaker: "Tariq", isTariq: true, scene: "teenage boy arriving at quarry edge looking down into sinkhole, sensing the people below, copper energy flowing from feet into the earth reading the geological structure, calm rapid assessment, comic art" },
      { caption: "He descends the sinkhole wall by reshaping the rock into stairs as he goes — pulling the workers up one by one on a rising stone platform.", speech: "Step on. Don't look down. I'll bring the ground up to meet you.", speaker: "Tariq", isTariq: true, scene: "teenage boy descending sinkhole on reshaping stone stairs he's creating as he goes, reaching trapped workers on ledge, stone platform rising to carry them all up, remarkable engineering display, comic art" },
      { caption: "All four workers surface. Tariq seals the sinkhole from below — pushing the earth back into the void and compacting it solid. He surfaces last.", speech: "He sealed a thirty-metre sinkhole from the inside. With his hands. I've been mining for forty years. I quit.", speaker: "Quarry Foreman", isTariq: false, scene: "quarry foreman watching in total disbelief as Tariq emerges from the sealed sinkhole, which is now solid ground, four rescued workers behind him covered in dust but unhurt, Tariq brushing rock dust off his armor, dry funny comic scene" }
    ]
  },
  {
    title: "THE BRIDGE FOUNDATION",
    setting: "River Hadid — the old bridge, forty years past its lifespan",
    isOrigin: false,
    story: "The old Hadid Bridge has been 'due for replacement' for twelve years and 'critically dangerous' for three. It finally decides to start collapsing on a Tuesday afternoon, with rush-hour traffic on it. The city engineers have six minutes to close both approaches. They don't make it. Tariq has two minutes and no interest in waiting.",
    panels: [
      { caption: "The Hadid Bridge begins its forty-years-overdue collapse at 5:14pm on a Tuesday, with sixty-three vehicles on it.", speech: "Bridge failure in progress — CLOSE THE APPROACHES — we have vehicles on the span!", speaker: "Traffic Control", isTariq: false, scene: "old bridge beginning to crumble at its central supports, cars stopping on the span, people trying to reverse, the supports visibly failing, urgent mass emergency comic panel" },
      { caption: "Tariq reaches the riverbank and reads the bridge through the water. Three foundation columns are failing. He can support two of them — but not three.", speech: "Three columns. Two hands. The middle one is the most critical — start there.", speaker: "Tariq", isTariq: true, scene: "teenage boy on riverbank pressing hand to the water-covered stone, reading the bridge structure, copper energy mapping the three failing columns, mathematical rapid problem-solving expression, comic art" },
      { caption: "He enters the river, plants himself at the central column, and raises two stone buttresses from the riverbed to take the load of the outer two.", speech: "The outer columns will transfer load to my buttresses — I just have to hold the middle. Sixty tonnes. Manageable.", speaker: "Tariq", isTariq: true, scene: "teenage boy in full stone armor standing in river at bridge column, two massive stone buttresses rising from the riverbed to support outer columns while he physically holds the central one, water rushing around him, vehicles moving off the bridge above, incredible engineering comic art" },
      { caption: "Every vehicle clears the bridge in four minutes and eleven seconds. Tariq holds the bridge for four minutes and twelve seconds. Then he lets it go.", speech: "Everyone's clear.", speaker: "Tariq", isTariq: true, scene: "teenage boy releasing the bridge, stepping back in the river as the old bridge finally, safely collapses into the water with a massive splash, vehicles all safely off, watching from riverbank with complete calm, bridge collapse reflected in the water around him, satisfying comic scene" }
    ]
  },
  {
    title: "THE IRON HEART",
    setting: "Jabal Al-Hadid School — career day",
    isOrigin: false,
    story: "Career day at Jabal Al-Hadid school. Every student's parent is coming to talk about their job. Tariq's father is a miner. His mother is a teacher. They are both, in their different ways, people who build things that last. Tariq sits in the front row and realises that he already knows what he's going to be — and that it's not on any of the career day posters.",
    panels: [
      { caption: "Career day. The gymnasium is full of parents, tables, and brochures. Tariq's father stands at the mining table looking thoroughly uncomfortable in his good shirt.", speech: "I don't know how to describe what I do. I go into the earth and I bring out what's useful. That's it.", speaker: "Father", isTariq: false, scene: "school gymnasium career day, parents at tables, father at mining display looking uncomfortable but dignified, students walking around, Tariq watching his father with quiet pride, warm everyday comic scene" },
      { caption: "A student from another class asks Tariq what he wants to be. He thinks about it honestly.", speech: "My dad finds what the earth hides. I think I protect what the earth holds. We're in the same business, really.", speaker: "Tariq", isTariq: true, scene: "teenage boy thoughtfully answering a question from another student at career day, his father visible in background hearing this and stopping in surprise, Tariq speaking quietly but clearly, warm comic panel" },
      { caption: "After the event, his father walks with him home up the mountain path in silence for a long time.", speech: "When I was your age, my father told me: a wall doesn't care who it's protecting. It just protects. I understand now why he said that.", speaker: "Father", isTariq: false, scene: "father and son walking up mountain path after school, afternoon sun, father speaking quietly and thoughtfully, the mountain around them, comfortable silence between two people who understand each other, beautiful quiet comic panel" },
      { caption: "Tariq puts his hand on his father's shoulder — careful with his strength, as always. His armor doesn't come out. He doesn't need it tonight.", speech: "I'm going to be fine, Baba. The mountain's not going anywhere. Neither am I.", speaker: "Tariq", isTariq: true, scene: "teenage son with hand gently on father's shoulder on mountain path at sunset, no armor, just a boy and his father, the mountain village glowing warmly below them, stars beginning to appear, tender family comic art" }
    ]
  },
  {
    title: "CAVE RESCUE",
    setting: "The Limestone Caves of Wadi Bayda — a scout troop, lost underground",
    isOrigin: false,
    story: "A scout troop of twelve children entered the Wadi Bayda limestone caves for a guided tour. The guide made a navigational error — twice. Now they're four kilometres underground, the guide's torch has failed, two children are mildly hurt, and the limestone above them has a crack that Tariq can feel from the surface: the crack of a roof about to let go.",
    panels: [
      { caption: "Twelve scouts and their guide are four kilometres into the Wadi Bayda cave system when the guide admits they've been lost for two hours.", speech: "I know these caves. I've done this tour a hundred times. I just need a moment to— okay, I'm lost.", speaker: "Cave Guide", isTariq: false, scene: "group of children and adults with failing torches in beautiful but disorienting limestone cave system, guide looking at map upside down with embarrassed expression, children looking nervously at the ceiling above, comic panel" },
      { caption: "Tariq feels the cave system from the surface — and immediately feels the hairline fracture in the roof above where they're standing.", speech: "They're 4.2 kilometres in, chamber seven. And there's a fracture above them. I have maybe twenty minutes.", speaker: "Tariq", isTariq: true, scene: "teenage boy on surface pressing palm to the limestone ground, copper energy mapping the cave system below like an X-ray, face tense with urgency, locations of the children glowing, comic art" },
      { caption: "He descends through the limestone — not by the path, but through it — reshaping the rock around himself to carve a direct route to the children.", speech: "I'm not using the tunnels. I'll make my own.", speaker: "Tariq", isTariq: true, scene: "teenage boy in stone armor moving through solid limestone rock, the stone parting ahead of him and closing behind him, bioluminescent cave formations around him, purposeful and extraordinary, beautiful underground comic art" },
      { caption: "He braces the roof fracture, guides the scouts out through a new tunnel he carves in real time, and seals the crack behind them.", speech: "Stay close. The new tunnel is about sixty metres. It'll be snug but it's solid — I made it solid.", speaker: "Tariq", isTariq: true, scene: "teenage boy leading line of twelve relieved children through a freshly carved stone tunnel, the tunnel smooth and safe, cave guide at the back looking both grateful and humiliated, copper glow lighting the way, hopeful comic scene" }
    ]
  },
  {
    title: "THE SAND AND THE SEA",
    setting: "Al-Rashid Beach — coastal erosion emergency",
    isOrigin: false,
    story: "Three decades of coastal erosion have brought the sea to within eight metres of Al-Rashid's famous beachfront district — a hundred and forty shops, restaurants, and homes. Tonight, a storm surge makes the sea's final approach. Engineers have been saying the sea wall needs replacing for ten years. Tonight the sea wall disagrees and removes itself from the conversation.",
    panels: [
      { caption: "The storm surge hits the old sea wall at 11pm. The wall, which has been politely disagreeing with structural assessments for a decade, finally concedes the point and collapses.", speech: "THE SEA WALL IS DOWN! The beachfront is going under — we have ten minutes!", speaker: "Harbour Master", isTariq: false, scene: "old sea wall collapsing in storm surge, enormous waves crashing through the gap, beachfront buildings in direct path of rushing seawater, emergency lights, chaos, ten-minute countdown comic panel" },
      { caption: "Tariq reaches the beach in two minutes. The sea is already through the gap and advancing on the first row of buildings.", speech: "One hundred and forty structures. I need a wall seventy metres long and four metres high. Now.", speaker: "Tariq", isTariq: true, scene: "teenage boy arriving at collapsed sea wall gap in full stone armor, seawater rushing past his feet, quickly calculating the defensive geometry needed, focused utterly calm in crisis comic panel" },
      { caption: "He raises the new sea wall from the seabed itself — stone and compacted sand, shaped and sealed in under three minutes.", speech: "The earth under the sea is still the earth. It answers me the same way.", speaker: "Tariq", isTariq: true, scene: "teenage boy knee-deep in surging seawater with both hands raised, massive new stone wall rising from the sea floor between him and the beachfront, water crashing against it and holding, incredible power display, spectacular comic art" },
      { caption: "The sea wall holds. The beachfront survives. Engineers arrive in the morning to find a better sea wall than the one they built thirty years ago.", speech: "The stone density on this wall is higher than anything we can manufacture. How is that even possible.", speaker: "Engineer", isTariq: false, scene: "morning after storm, engineers inspecting the new sea wall in amazement, beachfront cafes open and serving breakfast, Tariq sitting at one of them having tea and watching the sea calmly, the quiet heroism of an ordinary morning, warm funny comic ending" }
    ]
  }
];

const TOTAL_ORIGIN = ORIGIN_STORY.length;
const TOTAL_ADVENTURES = ADVENTURES.length;

function dateToDayNumber(date) {
  const epoch = new Date(2026, 3, 18);
  const ms = date - epoch;
  return Math.max(1, Math.floor(ms / 86400000) + 1);
}

function dayNumberToDate(n) {
  const epoch = new Date(2026, 3, 18);
  return new Date(epoch.getTime() + (n - 1) * 86400000);
}

function formatDate(date) {
  return date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}

function getEpisodeForDay(dayNum) {
  if (dayNum <= TOTAL_ORIGIN) return { episode: ORIGIN_STORY[dayNum - 1], isOrigin: true, originIndex: dayNum };
  const idx = (dayNum - TOTAL_ORIGIN - 1) % TOTAL_ADVENTURES;
  return { episode: ADVENTURES[idx], isOrigin: false, originIndex: null };
}

function buildImageUrl(panel, panelIndex, dayNum) {
  const seed = (dayNum * 100 + panelIndex + 555);
  const prompt = `${TARIQ_BASE_PROMPT}, ${panel.scene}, vibrant colors, clean lines, no text, no watermark, manga comic book panel`;
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
    originTag.textContent = `📖 ORIGIN STORY — Chapter ${originIndex} of ${TOTAL_ORIGIN}`;
    originBanner.style.display = 'block';
    document.getElementById('originProgress').textContent = `Chapter ${originIndex} of ${TOTAL_ORIGIN} — Follow Tariq from the mountain's first call.`;
  } else {
    originTag.style.display = 'none';
    originBanner.style.display = 'none';
  }

  document.getElementById('prevBtn').disabled = dayNum <= 1;
  document.getElementById('nextBtn').disabled = dayNum >= todayNum;

  const grid = document.getElementById('panelsGrid');
  grid.innerHTML = '';

  episode.panels.forEach((panel, i) => {
    const el = document.createElement('div');
    el.className = 'panel';
    el.innerHTML = `
      <div class="panel-num">PANEL ${i + 1}</div>
      <div class="panel-img-wrap">
        <div class="panel-loader" id="tloader-${i}">
          <div class="loader-rock">🪨</div>
          <div class="loader-text">Drawing panel ${i + 1}…</div>
        </div>
        <img class="panel-img loading" id="timg-${i}" alt="Panel ${i + 1}: ${panel.caption}" />
        <div class="speech-bubble ${panel.isTariq ? 'tariq' : ''}">
          <span class="bubble-speaker">${panel.speaker}</span>
          "${panel.speech}"
        </div>
      </div>
      <div class="panel-caption">${panel.caption}</div>
    `;
    grid.appendChild(el);
    const img = el.querySelector(`#timg-${i}`);
    const loader = el.querySelector(`#tloader-${i}`);
    img.onload = () => { img.classList.remove('loading'); img.classList.add('loaded'); loader.classList.add('hidden'); };
    img.onerror = () => {
      img.style.display = 'none';
      loader.innerHTML = `<div style="text-align:center;padding:20px;font-size:.85rem;color:#451a03;"><div style="font-size:2rem;margin-bottom:8px">🪨</div><div><em>${panel.caption}</em></div><div style="margin-top:8px;font-size:.75rem;color:#aaa">Drawing from stone…<br>Refresh to retry</div></div>`;
      loader.classList.remove('hidden');
    };
    setTimeout(() => { img.src = buildImageUrl(panel, i, dayNum); }, i * 500);
  });

  const url = new URL(window.location);
  if (dayNum === todayNum) { url.searchParams.delete('day'); } else { url.searchParams.set('day', dayNum); }
  window.history.replaceState({}, '', url);
  document.querySelector('main').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

let currentDay = dateToDayNumber(new Date());
function changeDay(delta) { currentDay += delta; renderComic(currentDay); }
function toggleCharCard() { document.getElementById('charCard').classList.toggle('open'); }

function copyLink() {
  const url = window.location.href;
  if (navigator.clipboard) { navigator.clipboard.writeText(url).then(() => showToast('Link copied! 🪨')).catch(() => fallbackCopy(url)); }
  else { fallbackCopy(url); }
}
function fallbackCopy(text) {
  const ta = document.createElement('textarea'); ta.value = text; ta.style.cssText = 'position:fixed;opacity:0';
  document.body.appendChild(ta); ta.select(); document.execCommand('copy'); document.body.removeChild(ta); showToast('Link copied! 🪨');
}
function shareTwitter() {
  const { episode } = getEpisodeForDay(currentDay);
  const text = `Reading TARIQ THE IRONWALL Episode #${currentDay}: "${episode.title}" — daily free comics! 🪨`;
  window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(window.location.href)}`, '_blank');
}
function showToast(msg) { const t = document.getElementById('toast'); t.textContent = msg; t.classList.add('show'); setTimeout(() => t.classList.remove('show'), 2500); }

(function init() {
  const params = new URLSearchParams(window.location.search);
  const dayParam = parseInt(params.get('day'));
  const todayNum = dateToDayNumber(new Date());
  if (dayParam && dayParam >= 1 && dayParam <= todayNum) { currentDay = dayParam; } else { currentDay = todayNum; }
  renderComic(currentDay);
})();
