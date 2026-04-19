// ===== LUNA THE NIGHTWEAVER — Daily Comic Generator =====

const LUNA_BASE_PROMPT = "anime comic book illustration, mysterious teenage girl superhero named Luna, silver white flowing hair, pale violet glowing eyes, dark midnight cloak with starry sky pattern, moonlight and silver light surrounding her, night sky backdrop";

const ORIGIN_STORY = [
  {
    title: "THE NIGHT OF THE ECLIPSE",
    setting: "The Rooftop Observatory — the night of the blood moon eclipse",
    isOrigin: true,
    story: "Luna has spent every clear night on her grandmother's rooftop for as long as she can remember. She knows the sky better than she knows most people — which stars rise when, which constellations argue with each other at the horizon, which clouds lie about rain. On the night of the blood moon eclipse, she was exactly where she always is: alone with the sky, her notebook, and a cup of cold tea. What came down from the dark that night was not something she can explain. But she can feel it in her hands every time a shadow moves.",
    panels: [
      { caption: "Luna, age 15, lives on a rooftop. Not metaphorically — she has a chair, a telescope, a notebook, and a blanket up there, and she prefers them to everything below.", speech: "The eclipse maximum is at 11:47. I have twelve minutes. I should have brought better tea.", speaker: "Luna", isLuna: true, scene: "teenage girl with silver hair alone on rooftop at night, sitting in old chair with telescope and notebook, city lights below her, full moon beginning to eclipse, peaceful solitary atmosphere, beautifully atmospheric comic panel" },
      { caption: "The blood moon reaches total eclipse. The city goes quiet in a way cities almost never do. Luna notices — and looks up.", speech: "That's… odd. I've never felt the dark be this heavy. Like it's watching back.", speaker: "Luna", isLuna: true, scene: "teenage girl looking up at total blood moon eclipse, shadow falling completely across the moon, the darkness suddenly feeling different and present, her expression shifting from calm to alert, atmospheric comic art" },
      { caption: "Something descends from the eclipsed moon — not light, not darkness, but something between. It passes through Luna like a cold wind that leaves warmth behind.", speech: "I — what was—", speaker: "Luna", isLuna: true, scene: "something intangible and silver-dark passing through a teenage girl on a rooftop, she staggers slightly, her hair blazing silver-white, her eyes lighting with violet glow, the shadow of her cloak spreading briefly like wings, origin moment comic art" },
      { caption: "When the moon reappears, Luna's tea is cold, her notebook is full of writing she doesn't remember, and her shadow is doing something shadows don't normally do.", speech: "My shadow is pointing the wrong way. That's… actually fascinating.", speaker: "Luna", isLuna: true, scene: "teenage girl staring at her shadow which is pointing toward the moon instead of away from it, her expression not afraid but intensely curious and analytical, silver light in her eyes, strange and wonderful comic panel" }
    ]
  },
  {
    title: "WHAT SHADOWS CARRY",
    setting: "The Rooftop — three nights after the eclipse",
    isOrigin: true,
    story: "Three nights of experiments. Three notebooks full of observations. Luna approaches her new abilities the way she approaches everything — like a scientist who happens to be the subject. She can step into a shadow and emerge from any other shadow she can see. She can shape moonlight the way a sculptor shapes clay. She can create illusions so detailed that even she sometimes forgets they're not real. And she can see, in the dark, things that the dark would rather keep hidden.",
    panels: [
      { caption: "Night one. Luna steps into her own shadow — and emerges from the shadow under the neighbour's water tank, twelve metres away.", speech: "Shadow-to-shadow transit. Instantaneous. No sensation of movement. I need a bigger sample size.", speaker: "Luna", isLuna: true, scene: "teenage girl stepping calmly into her own shadow and appearing simultaneously in a different shadow on the rooftop, looking at a stopwatch, scientific expression, methodical testing, funny serious comic panel" },
      { caption: "Night two. She discovers she can shape moonlight into solid forms — barriers, platforms, anything she can hold in her mind.", speech: "It's not heavy. It has the weight of intention — it's solid because I believe it's solid. Remarkable.", speaker: "Luna", isLuna: true, scene: "teenage girl holding a solid platform of silver moonlight as easily as a book, testing its weight, pressing it against things, scientific wonder on her face, beautiful silver light, rooftop at night, comic art" },
      { caption: "Night three. She creates an illusion of herself — perfect, detailed, moving — and walks around it studying it.", speech: "The illusion copies my memory of myself, not my current state. My hair in it is slightly longer. Interesting bias.", speaker: "Luna", isLuna: true, scene: "teenage girl walking around a perfect illusion copy of herself, comparing them analytically, the illusion version slightly different in small ways, both visible, strange and fascinating scientific self-examination comic art" },
      { caption: "End of three nights. Two full notebooks. Luna makes a single-line conclusion in her journal.", speech: "'Powers confirmed. Applications: significant. Side effects: none yet. Next steps: use them for something useful.' — Luna's notebook, page 47.", speaker: "Narrator", isLuna: false, scene: "close-up of handwritten notebook page in neat careful handwriting with diagrams, the journal of a meticulous mind, silver moonlight falling on the page, Luna's hand writing the final entry, beautiful composed comic panel" }
    ]
  },
  {
    title: "THE FIRST SHADOW STEP",
    setting: "Sunhaven City — a night that needed her",
    isOrigin: true,
    story: "She'd planned to wait. To understand more before doing anything she couldn't undo. But the city doesn't wait for anyone's research schedule. She was on the rooftop at midnight when she heard — through the quiet she's learned to read — a cry from six blocks away. She closed her notebook, stepped into the shadow of her telescope, and came out the other side of the city.",
    panels: [
      { caption: "Midnight. Luna is still writing when she hears something that shouldn't be happening six blocks to the east — a sound the city's usual noise normally covers.", speech: "That's a child. Top floor of a building with no fire escape. Something's wrong.", speaker: "Luna", isLuna: true, scene: "teenage girl on rooftop stopping mid-sentence in her notebook, tilting her head with violet glowing eyes narrowing, the nighttime city spread around her, the moment of detection before action, comic art" },
      { caption: "She steps into the shadow of her telescope. She steps out of a shadow on a fire escape, six blocks away, four floors up.", speech: "Shadow transit. Six blocks. Less than a second. I should have noted the exact time.", speaker: "Luna", isLuna: true, scene: "teenage girl stepping out of a fire escape shadow six blocks from her starting point, landing with perfect balance, looking at her watch with scientific interest, city night around her, matter-of-fact heroism comic panel" },
      { caption: "A young boy, maybe eight, is on a window ledge — he'd climbed out after a nightmare and couldn't get back in. The window latch is stuck.", speech: "My name is Luna. I'm going to help you down. Don't move — the ledge is fine, and so are you.", speaker: "Luna", isLuna: true, scene: "teenage girl in dark cloak appearing calmly on fire escape, speaking gently to small frightened boy on window ledge above her, her expression utterly calm and reassuring, silver light around her, nighttime city, comic art" },
      { caption: "She creates a cushioned platform of moonlight beneath him and guides him to the fire escape. His first question is completely reasonable.", speech: "Did you come out of the shadow?", speaker: "Boy", isLuna: false, scene: "small boy safely on fire escape, looking at teenage girl with wide fascinated eyes, she's crouching to his level with quiet smile, silver platform of moonlight still visible, night city behind them, wonderful heartfelt comic panel" }
    ]
  },
  {
    title: "THE MUSEUM AT MIDNIGHT",
    setting: "Sunhaven City Museum of History — a theft in progress",
    isOrigin: true,
    story: "Four professional thieves have spent three months planning the theft of the Sunhaven Moonstone — a rare meteorite on loan from the national collection. They chose midnight because the museum has no guards after 11:30. They chose a Tuesday because the alarm maintenance happens on Tuesdays. They didn't plan for a girl who lives in the dark.",
    panels: [
      { caption: "The four thieves enter through the skylight at 12:03am, having correctly identified the window in the alarm system. They think they're alone in the museum.", speech: "Two minutes. Extract the stone, replace it with the replica, out through the service entrance. Perfect.", speaker: "Lead Thief", isLuna: false, scene: "four professional thieves in dark clothes dropping from museum skylight, methodical and confident, large museum gallery below them, valuable exhibits, the calm before something goes wrong for them comic panel" },
      { caption: "They are not alone. Luna has been reading in the museum's astronomy reading room — after hours, via the shadow of the fire exit — and hears them land.", speech: "Four of them. Professional movement. They know exactly where they're going. The Moonstone case.", speaker: "Luna", isLuna: true, scene: "teenage girl in museum reading room looking up from a book at the sound above her, absolutely calm, violet eyes glowing faintly, quickly processing the situation, composed comic panel" },
      { caption: "Luna doesn't fight four professional thieves. Instead, she fills the museum with perfect illusions of the same exhibit — thirty copies of the Moonstone case, all identical.", speech: "Now find the real one.", speaker: "Luna", isLuna: true, scene: "teenage girl standing in museum gallery with arms raised, moonlight creating thirty identical copies of the meteorite display case throughout the gallery, thieves visible in background staring around in total confusion, elegant and clever solution comic art" },
      { caption: "When the police arrive, all four thieves are sitting quietly in the centre of the gallery looking defeated. Luna is back in the reading room, finishing her chapter.", speech: "They all sat down at the same time. None of them will explain why. The meteorite is untouched.", speaker: "Police Officer", isLuna: false, scene: "police in museum finding four thieves sitting in resigned circle, utterly confused, Moonstone case perfectly intact, no sign of struggle, police officer baffled, in background through reading room window Luna's small light still on, wonderful comic ending" }
    ]
  },
  {
    title: "NIGHTWEAVER",
    setting: "The Rooftop — and everywhere else",
    isOrigin: true,
    story: "Her grandmother asks where she goes at night. Luna says 'out'. Her grandmother, who has lived ninety years and knows more than she says, looks at her granddaughter's silver hair and violet eyes and nods once. 'Be careful with the dark,' she says. 'It respects people who respect it.' Luna thinks about that on the rooftop that night, watching the moon, feeling the city's shadows like a map under her hands.",
    panels: [
      { caption: "Her grandmother finds her at 6am in the kitchen, still in her dark cloak, drinking tea. She doesn't ask where she's been. She makes her own tea and sits down.", speech: "Luna. Your eyes are a different colour than they were last month.", speaker: "Grandmother", isLuna: false, scene: "elderly woman sitting across kitchen table from teenage girl at dawn, both with tea, grandmother looking at granddaughter with ancient knowing eyes, the silver-violet eyes visible, morning light, quiet profound domestic comic panel" },
      { caption: "Luna tells her everything. Her grandmother listens without interrupting once.", speech: "I can move through shadows. I can shape moonlight. I see things in the dark that people can't see in the light. I don't fully understand it yet. I'm working on it.", speaker: "Luna", isLuna: true, scene: "teenage girl speaking calmly and honestly to elderly grandmother, showing a small silver moonlight form in her hand as demonstration, grandmother watching with quiet interest and no fear, intimate warm comic scene" },
      { caption: "Her grandmother is quiet for a long time. Then she says the thing that matters.", speech: "Be careful with the dark. It respects people who respect it. And it remembers people who abuse it. Your great-grandmother said the same about the night market on our old street.", speaker: "Grandmother", isLuna: false, scene: "elderly grandmother with gentle wisdom in her face speaking to attentive teenage girl, morning light through the kitchen window, the weight of family wisdom passed across the table, beautiful intergenerational comic art" },
      { caption: "Luna thinks about that on the rooftop that evening. She watches the first star appear. She decides: respect, always. And the dark can be her partner.", speech: "Nightweaver. That's what my grandmother's generation would call someone like me. I think I'll keep it.", speaker: "Luna", isLuna: true, scene: "teenage girl on rooftop at dusk, silver hair flowing, dark cloak spreading slightly around her as the night begins, violet eyes watching the first star, city below, quiet certainty on her face, beautiful origin ending comic art" }
    ]
  }
];

const ADVENTURES = [
  {
    title: "THE FEAR BENEATH THE BED",
    setting: "Sunhaven Children's Hospital — ward 6, after midnight",
    isOrigin: false,
    story: "Fear is a kind of darkness too. Luna discovered this in ward 6 of Sunhaven Children's Hospital — a place where small people face very large things in the long hours after visiting time ends. She can't cure illness. But darkness, and the fear that lives in it — that she understands.",
    panels: [
      { caption: "Ward 6. 2am. Most of the children are asleep — except seven-year-old Samira, who hasn't slept properly in two weeks because of the thing she's sure lives under her hospital bed.", speech: "I know there's nothing there. I'm not a baby. But I can't sleep because I keep thinking—", speaker: "Samira", isLuna: false, scene: "small girl in hospital bed wide awake at 2am, looking over the edge of the bed at the dark floor below, trying to be brave, medical equipment nearby, sad and exhausted, comic panel" },
      { caption: "Luna steps out of the shadow under the bed — the exact shadow in question — and sits on the floor at eye level with Samira.", speech: "I live in shadows. I know everything in every shadow in this ward. Do you know what's under your bed? Me. Nothing else.", speaker: "Luna", isLuna: true, scene: "teenager appearing calmly from the exact shadow under the bed and sitting cross-legged on the floor, looking up at the small girl with warm matter-of-fact violet eyes, Samira's expression shifting from fear to amazed relief, comic panel" },
      { caption: "Luna spends the next hour in ward 6 — not fighting, not flying — just sitting with children who can't sleep and filling the dark with small beautiful things made of moonlight.", speech: "What shape would make you less scared of the dark? Tell me and I'll make it.", speaker: "Luna", isLuna: true, scene: "teenager sitting in darkened hospital ward surrounded by five children who have gathered around her, small moonlight animals and stars and ships floating around the room she's created, children's faces lit with wonder, magical peaceful comic art" },
      { caption: "By 3:30am, every child in ward 6 is asleep. Luna leaves through the shadow under the door, quietly.", speech: "She made the dark into a good place. For all of us.", speaker: "Night Nurse", isLuna: false, scene: "night nurse peering into ward 6 to find every child sleeping peacefully, small moonlight stars still drifting gently above the beds, no Luna visible, nurse's expression of wonder and comfort, beautiful quiet comic ending" }
    ]
  },
  {
    title: "THE MISSING PAINTING",
    setting: "The Sunhaven Gallery of Modern Art — a mystery",
    isOrigin: false,
    story: "The Sunhaven Gallery's most famous piece — 'Moonrise Over the Old City', by artist Leila Hassan, painted in 1987 — disappeared overnight. No alarms. No broken glass. No evidence. The police are baffled. Luna, who has been to this gallery seventeen times and knows where every shadow falls, has a theory. Several, actually.",
    panels: [
      { caption: "The gallery director arrives at 8am to find an empty frame where the most valuable painting in the collection used to hang. Every alarm, every sensor, every camera — nothing.", speech: "It's gone. It's simply GONE. Not a single alarm triggered. Not a single frame of footage.", speaker: "Gallery Director", isLuna: false, scene: "gallery director staring at empty ornate frame on the wall, pale and shocked, police taking notes, the blank space where the painting was almost more dramatic than the painting itself, comic panel" },
      { caption: "Luna reads the shadows of the room. Every object casts a shadow — and shadows remember what passes through them.", speech: "Something moved through the east shadow at 2:14am. Something large and flat. Heading toward the service corridor. Let me look further.", speaker: "Luna", isLuna: true, scene: "teenage girl crouching in the gallery, pressing her hands to the floor shadow, reading the shadow-memory of what passed through the room, violet eyes seeing what cameras missed, investigation scene, comic art" },
      { caption: "The painting is in a storage unit three streets away, kept by a man who loved it and couldn't afford to buy it — he planned to return it after one night alone with it.", speech: "He borrowed it. He's had it for four hours. He's sitting in front of it crying. I don't think this is a crime so much as a very costly love letter.", speaker: "Luna", isLuna: true, scene: "teenage girl shadow-stepping into a storage unit to find an elderly man sitting on a crate in front of the famous painting, weeping quietly with love and appreciation, harmless and profoundly human, moving comic scene" },
      { caption: "The painting is back by morning. The borrower writes a letter to the gallery that the director reads three times.", speech: "'I needed one night with it. I understand that was wrong. But I needed it to remember what beauty is for.' — the letter", speaker: "Gallery Director", isLuna: false, scene: "painting back in its frame, gallery director reading the letter with complicated emotions, somewhere between moved and exasperated, Luna visible outside through the gallery window watching from a shadow, satisfied small smile, comic panel" }
    ]
  },
  {
    title: "THE SHADOW THIEF",
    setting: "Sunhaven City — someone else is using the dark",
    isOrigin: false,
    story: "Luna isn't the only person who knows how to move through shadows. She discovers this at 3am on a Thursday when she steps into a shadow and finds it already occupied — warm, recently used, smelling of a very specific cologne. Someone else is moving through Sunhaven's darkness. The question is whether they're doing it for the same reasons she is.",
    panels: [
      { caption: "Thursday 3am. Luna steps into a shadow and finds it warm. Someone has been here in the last thirty seconds.", speech: "Someone has been using this shadow. Recently. The shadow-residue is directional — they went north. Someone else can do what I can do.", speaker: "Luna", isLuna: true, scene: "teenage girl pausing inside a shadow, noticing the residual warmth and direction of someone else's recent transit, expression shifting to alert and fascinated rather than alarmed, detective energy, comic panel" },
      { caption: "She follows the shadow-trail north, stepping from shadow to shadow, reading the path. Whoever they are, they're fast and they know the city's dark geometry well.", speech: "Skilled. They know which shadows are permanent and which change with the streetlights. Someone trained, or someone who's been doing this a long time.", speaker: "Luna", isLuna: true, scene: "teenage girl shadow-stepping rapidly across rooftops following a trail only she can read, night city, fast movement, detective pursuit energy, dynamic action comic panel" },
      { caption: "She finds them: an elderly woman, moving through shadows with practiced ease, delivering medicine to an elderly man who lives on the twentieth floor and can't use the elevator.", speech: "I've been doing this for forty years, young lady. Since long before you were born. Who are you?", speaker: "Old Woman", isLuna: false, scene: "teenage girl and elderly woman facing each other in a rooftop shadow, the old woman utterly unintimidated, holding a medicine bag, the most unexpected shadow-traveller imaginable, wonderful comic moment" },
      { caption: "They sit together in the dark for an hour. Luna learns that shadow-walking is not as rare as she thought — just very rarely talked about.", speech: "My mother could do it. Her mother before her. We keep quiet because quiet keeps us useful. You understand that, I think.", speaker: "Old Woman", isLuna: false, scene: "teenage girl and elderly woman sitting together on rooftop at night, talking quietly, the city lit below them, unexpected companionship across generations, beautiful comic scene" }
    ]
  },
  {
    title: "LIGHTS OUT",
    setting: "Sunhaven City — a city-wide power failure",
    isOrigin: false,
    story: "When Sunhaven's entire power grid fails at 9pm on a November evening, the darkness it produces is comprehensive and absolute — no backup generators, no emergency lighting in most buildings, no streetlights for thirty-two square kilometres. For everyone else this is a crisis. For Luna it is something else entirely: it is the moment the whole city belongs to her element.",
    panels: [
      { caption: "9:07pm. Every light in Sunhaven goes out simultaneously. The city is blacker than it has been since before electricity. People freeze wherever they are.", speech: "Total grid failure. Thirty-two square kilometres. No backup systems responding. This is going to be a very long night.", speaker: "Emergency Dispatcher", isLuna: false, scene: "Sunhaven city plunging into total darkness street by street, people stopping in place, cars pulling over, the city in a sudden profound silence and dark, small phone lights beginning to appear, eerie atmospheric comic panel" },
      { caption: "For Luna, the darkness is information. She sees everything — every person, every obstacle, every danger — with perfect clarity.", speech: "The city is scared. I can see every face. I need to move fast and give the dark back to them gently.", speaker: "Luna", isLuna: true, scene: "teenage girl standing in the total darkness, her violet eyes seeing everything perfectly, the city visible to her in silver shadow-sight, her expression calm and purposeful, beautiful contrast of her clarity against universal darkness, comic art" },
      { caption: "She moves through the city for three hours — guiding people to shelter via shadow-step, leaving moonlight markers at intersections, calming panicked crowds with reassuring illusions.", speech: "Follow the silver light on the pavement. It leads to the community centre. I'll keep it lit for you.", speaker: "Luna", isLuna: true, scene: "teenage girl leaving trails of gentle silver moonlight across dark streets like breadcrumbs, people following them calmly, Luna moving ahead in shadows to set the next marker, graceful systematic rescue, beautiful atmospheric comic art" },
      { caption: "When the power returns at midnight, the city has somehow managed three hours of darkness without a single serious injury. Nobody can quite explain it.", speech: "There were lights in the streets. Small ones. Silver. Nobody knows where they came from.", speaker: "City Mayor", isLuna: false, scene: "press conference next morning, mayor looking bewildered but grateful, news footage showing the mysterious silver path-lights visible during the blackout, Luna watching on television from her rooftop with quiet satisfaction, warm comic ending" }
    ]
  },
  {
    title: "THE ASTRONOMER'S DAUGHTER",
    setting: "Sunhaven University Observatory — a late-night visit",
    isOrigin: false,
    story: "Professor Yusuf Al-Hadid has been the university's head astronomer for thirty years. He mapped 847 variable stars and named a comet. He is also, as of three months ago, completely blind — the result of a medical incident that took his sight overnight. Tonight, Luna climbs to the university observatory because she has an idea.",
    panels: [
      { caption: "Professor Al-Hadid sits alone in the dark university observatory. His telescope is still there. He hasn't touched it in three months.", speech: "I can describe the sky to my students from memory. But to never see it again myself — that is harder than I expected.", speaker: "Professor", isLuna: false, scene: "elderly professor sitting alone in dark observatory, large telescope beside him unused, his hands resting on the desk, profound quiet sadness, the observatory dome open to the night sky above, moving comic panel" },
      { caption: "Luna steps from the shadow beside his desk. He doesn't startle — he heard her breathing.", speech: "Professor Al-Hadid. I can't restore your sight. But I think I can give you something.", speaker: "Luna", isLuna: true, scene: "teenage girl appearing calmly from shadow beside the elderly professor's desk, speaking quietly and directly, his expression becoming still and attentive though he cannot see her, observatory around them, gentle comic scene" },
      { caption: "She shapes moonlight into a three-dimensional map of the current night sky above them — every star, every constellation, every planet — solid enough to touch.", speech: "Feel where your hand goes. That cluster you're touching — those are the Pleiades. Seven sisters. You named the variable in the northwest one.", speaker: "Luna", isLuna: true, scene: "teenage girl creating intricate three-dimensional moonlight star map that fills the observatory dome, elderly blind professor reaching up with trembling hands to feel the stars as solid points of light, tears on his face, extraordinarily beautiful and moving comic art" },
      { caption: "They spend two hours together in the observatory. He touches every constellation he spent thirty years mapping.", speech: "I've seen the sky ten thousand times. I've never touched it before. Thank you, Luna. Thank you.", speaker: "Professor", isLuna: false, scene: "elderly professor and teenage girl together in moonlight-filled observatory, professor's hands among silver stars, both of them looking upward, profound and tender, one of the most beautiful moments in the Sunhaven Universe, comic art" }
    ]
  },
  {
    title: "FOUR IN THE MORNING",
    setting: "A Sunhaven rooftop — an unexpected meeting",
    isOrigin: false,
    story: "Four in the morning is the quietest hour in any city — too late for the night people, too early for the day ones. Luna patrols at four because that's when the city shows you its true face: the people who clean it, guard it, worry about it, love it. Tonight she finds someone else on a rooftop who shouldn't be there — and has a conversation she doesn't expect.",
    panels: [
      { caption: "4:12am. Luna spots a figure on the roof of the Sunhaven Central Library — sitting on the edge, not in danger, just watching the dark city with an expression she recognises.", speech: "She's not in danger. She's just thinking somewhere nobody will interrupt her. I understand that completely.", speaker: "Luna", isLuna: true, scene: "Luna on adjacent rooftop looking at another teenage girl sitting on library roof edge watching the city, reading the situation accurately, expression of recognition and decision, two figures in the night, comic panel" },
      { caption: "She crosses to the library roof and sits down nearby — not too close. The other girl doesn't startle.", speech: "I wondered when you'd come say hi. You've been watching this part of the city for weeks. I've seen your silver light.", speaker: "Stranger", isLuna: false, scene: "teenage girl sitting on library roof edge turning to look at Luna with calm curiosity, not afraid, clearly has been aware of her for some time, interesting equals meeting, comic panel" },
      { caption: "They sit for a while without talking — something Luna finds extremely comfortable. Eventually the other girl explains why she's there.", speech: "I come up here when the anxiety gets too loud. The city at four in the morning is the only thing that's quieter than my head.", speaker: "Stranger", isLuna: false, scene: "two teenage girls sitting on library roof edge at 4am, the city spread below them, quiet companionship, the kind of silence that feels chosen and comfortable, deeply relatable comic panel" },
      { caption: "Luna creates a small moonlight scene in the air between them — a miniature city, quiet, everything in its place, nothing moving. It stays for an hour while they watch it together.", speech: "Here. A quiet city that stays quiet. For as long as you need.", speaker: "Luna", isLuna: true, scene: "Luna creating a beautiful tiny moonlight cityscape floating between her and the other girl, both of them watching it in silence, the real city below, 4am and peaceful, one of the most gentle moments in the comic series, beautiful art" }
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
  return date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}
function getEpisodeForDay(dayNum) {
  if (dayNum <= TOTAL_ORIGIN) return { episode: ORIGIN_STORY[dayNum - 1], isOrigin: true, originIndex: dayNum };
  return { episode: ADVENTURES[(dayNum - TOTAL_ORIGIN - 1) % TOTAL_ADVENTURES], isOrigin: false, originIndex: null };
}
function buildImageUrl(panel, panelIndex, dayNum) {
  const seed = (dayNum * 100 + panelIndex + 777);
  const prompt = `${LUNA_BASE_PROMPT}, ${panel.scene}, vibrant colors, clean lines, no text, no watermark, manga comic book panel`;
  return `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=512&height=384&seed=${seed}&nologo=true&model=flux`;
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
    document.getElementById('originProgress').textContent = `Chapter ${originIndex} of ${TOTAL_ORIGIN} — Luna's night is just beginning.`;
  } else { originTag.style.display = 'none'; originBanner.style.display = 'none'; }
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
        <div class="panel-loader" id="lloader-${i}"><div class="loader-moon">🌙</div><div class="loader-text">Drawing panel ${i + 1}…</div></div>
        <img class="panel-img loading" id="limg-${i}" alt="Panel ${i + 1}: ${panel.caption}" />
        <div class="speech-bubble ${panel.isLuna ? 'luna' : ''}"><span class="bubble-speaker">${panel.speaker}</span>"${panel.speech}"</div>
      </div>
      <div class="panel-caption">${panel.caption}</div>
    `;
    grid.appendChild(el);
    const img = el.querySelector(`#limg-${i}`), loader = el.querySelector(`#lloader-${i}`);
    img.onload = () => { img.classList.remove('loading'); img.classList.add('loaded'); loader.classList.add('hidden'); };
    img.onerror = () => { img.style.display = 'none'; loader.innerHTML = `<div style="text-align:center;padding:20px;font-size:.85rem;color:#4C1D95;"><div style="font-size:2rem;margin-bottom:8px">🌙</div><div><em>${panel.caption}</em></div><div style="margin-top:8px;font-size:.75rem;color:#aaa">Moonlight gathering…<br>Refresh to retry</div></div>`; loader.classList.remove('hidden'); };
    img.src = buildImageUrl(panel, i, dayNum);
  });
  const url = new URL(window.location);
  dayNum === todayNum ? url.searchParams.delete('day') : url.searchParams.set('day', dayNum);
  window.history.replaceState({}, '', url);
  document.querySelector('main').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

let currentDay = dateToDayNumber(new Date());
function changeDay(delta) { currentDay += delta; renderComic(currentDay); }
function toggleCharCard() { document.getElementById('charCard').classList.toggle('open'); }
function copyLink() { const u = window.location.href; navigator.clipboard ? navigator.clipboard.writeText(u).then(() => showToast('Link copied! 🌙')).catch(() => fallbackCopy(u)) : fallbackCopy(u); }
function fallbackCopy(text) { const ta = document.createElement('textarea'); ta.value = text; ta.style.cssText = 'position:fixed;opacity:0'; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); document.body.removeChild(ta); showToast('Link copied! 🌙'); }
function shareTwitter() { const { episode } = getEpisodeForDay(currentDay); const text = `Reading LUNA THE NIGHTWEAVER Episode #${currentDay}: "${episode.title}" — daily free comics! 🌙`; window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(window.location.href)}`, '_blank'); }
function showToast(msg) { const t = document.getElementById('toast'); t.textContent = msg; t.classList.add('show'); setTimeout(() => t.classList.remove('show'), 2500); }

(function init() {
  const params = new URLSearchParams(window.location.search);
  const dayParam = parseInt(params.get('day'));
  const todayNum = dateToDayNumber(new Date());
  currentDay = (dayParam && dayParam >= 1 && dayParam <= todayNum) ? dayParam : todayNum;
  renderComic(currentDay);
})();
