// ===== RIMA THE STORMCALLER — Daily Comic Generator =====

const RIMA_BASE_PROMPT = "anime comic book illustration, teenage girl superhero named Rima, long black hair with red and gold lightning streaks, crimson cape with gold trim, fierce determined dark eyes, storm clouds and electric energy crackling around her";

// ===== ORIGIN STORY (Episodes 1–5) =====

const ORIGIN_STORY = [
  {
    title: "THE NIGHT THE CITY WENT DARK",
    setting: "Al-Rashid City — a violent electrical storm, twelve years ago and today",
    isOrigin: true,
    story: "Twelve years ago, a storm unlike anything in recorded history struck Al-Rashid City. Every light in the city died at once — every light except one. In the maternity ward of Al-Rashid General Hospital, a newborn baby reached her tiny hand upward toward a bolt of lightning that had shattered the window — and caught it. The nurses saw nothing. The doctors saw nothing. But the storm paused. Today, twelve-year-old Rima is standing on her apartment rooftop in the rain, wondering why every thunderstorm feels like it's calling her name.",
    panels: [
      { caption: "Twelve years ago. Al-Rashid City. The worst electrical storm in living memory sweeps in from the sea without warning. In minutes, the entire city is dark.", speech: "Every grid in the district is down! We've never seen anything like this — not in fifty years!", speaker: "Power Station Worker", isRima: false, scene: "massive electrical superstorm over a dense Middle Eastern city at night, every light going out street by street, lightning everywhere, terrified citizens at windows, dramatic dark comic panel" },
      { caption: "In the hospital delivery room — a baby's first cry pierces the thunder. And then, impossibly, the storm hesitates.", speech: "She's — she's here. And the lightning… did it just stop?", speaker: "Doctor", isRima: false, scene: "hospital delivery room, doctor and nurse looking amazed, newborn baby girl with tiny fist raised toward broken window where lightning was, storm suddenly pausing outside, warm emotional comic panel" },
      { caption: "Today. Twelve-year-old Rima stands on her rooftop in a downpour. Everyone else ran inside. She never does.", speech: "I don't understand it. Every time there's a storm… it feels like it's looking for me.", speaker: "Rima", isRima: true, scene: "confident dark-haired teenage girl standing on rooftop in heavy rain, arms slightly out, face tilted up to storm clouds above, electricity crackling faintly in her hair, curious not afraid, atmospheric comic art" },
      { caption: "Then something new happens. A bolt of lightning breaks from the clouds — and curves. Directly toward her hand.", speech: "What… what IS this?!", speaker: "Rima", isRima: true, scene: "massive lightning bolt arcing from storm clouds curving impossibly toward teenage girl's outstretched hand, her eyes wide with shock and recognition, dramatic hero origin moment, electric comic art" }
    ]
  },
  {
    title: "THE GIRL WHO HELD LIGHTNING",
    setting: "Al-Rashid City Rooftops — the morning after",
    isOrigin: true,
    story: "She held a lightning bolt in her bare hands and didn't die. She should be terrified. Instead, Rima is back on the rooftop at first light, heart hammering, trying to understand what lives inside her. The electricity didn't burn her. It sang. And now it's still there — humming under her skin like a second heartbeat — waiting for her to figure out what comes next.",
    panels: [
      { caption: "Morning. Rima hasn't slept. She's been sitting on the rooftop since midnight, turning the memory over and over in her mind.", speech: "I held a lightning bolt. It didn't burn me. It felt like… like shaking hands with something that knows me.", speaker: "Rima", isRima: true, scene: "teenage girl sitting on rooftop at dawn, knees pulled to chest, storm clouds clearing, golden morning light touching her face, contemplative expression, comic art" },
      { caption: "She raises her hand. Focuses. A tiny arc of electricity jumps between her fingers.", speech: "Okay. So it wasn't a dream. Okay.", speaker: "Rima", isRima: true, scene: "close-up of teenage girl's hand with tiny lightning arcs jumping between her fingers, glowing gold and red, expression shifting from fear to wonder to fierce determination, beautiful comic art" },
      { caption: "She tries again, bigger this time. A bolt leaps from her palm and blows a water tower clean off its stand.", speech: "OKAY. BIGGER THAN EXPECTED. Way, way bigger.", speaker: "Rima", isRima: true, scene: "teenage girl looking shocked as massive accidental lightning bolt destroys a nearby water tower, water spraying everywhere, pigeons scattering, her eyes wide and stunned but secretly thrilled, funny shocked comic scene" },
      { caption: "Rima looks at her hands. She doesn't feel like a girl who just blew up a water tower. She feels like a girl who just found out what she's made of.", speech: "Alright, storm. You've been waiting for me my whole life. I think I'm ready now.", speaker: "Rima", isRima: true, scene: "teenage girl standing tall on rooftop, city spread below her, storm clouds behind her parting to show sun, electricity glowing gold in her hair and along her arms, determined heroic expression, epic origin comic art" }
    ]
  },
  {
    title: "EVERY BOLT HAS A NAME",
    setting: "The Abandoned Lighthouse — three miles outside Al-Rashid",
    isOrigin: true,
    story: "Rima needs somewhere big enough to practice without destroying anything important. The old lighthouse outside the city has been abandoned for twenty years — its beacon dark, its walls scorched by decades of coastal storms. It's perfect. Over three days of practice, Rima discovers that her powers aren't just about raw force. She can feel the electricity in the air the way other people feel warmth. Every storm system within fifty miles is a voice she can almost understand.",
    panels: [
      { caption: "Day one of practice at the old lighthouse. Rima tries to control a single bolt. It splits into fourteen.", speech: "ONE. I asked for ONE. Why are there fourteen?!", speaker: "Rima", isRima: true, scene: "teenage girl in dramatic stance in front of lighthouse, fourteen simultaneous lightning bolts shooting in every direction, completely chaotic, look of exasperated concentration on her face, funny action comic panel" },
      { caption: "Day two. She can feel the electricity in the air itself — every cloud a reservoir, every raindrop a wire.", speech: "It's like… the storm is a language. I'm just learning the alphabet.", speaker: "Rima", isRima: true, scene: "teenage girl eyes closed, storm surrounding her gently, electricity flowing like rivers of light from the clouds to her fingertips, serene focused expression, magical atmospheric comic art" },
      { caption: "Day three. She calls a single, perfect lightning bolt from a clear sky. It lands exactly where she points.", speech: "There. THERE. That's what you feel like when you listen.", speaker: "Rima", isRima: true, scene: "teenage girl pointing a single perfect precise lightning bolt to a specific spot on the ground, clear sky otherwise, triumphant expression, smoke rising from her target, beautiful controlled power comic art" },
      { caption: "On the way home, she passes a burning building. The fire started from a faulty wire. She doesn't hesitate.", speech: "This is what it's for. I know it now.", speaker: "Rima", isRima: true, scene: "teenage girl running toward a building with a small electrical fire, lightning crackling ready in her hand, determined expression, other people backing away, a hero recognising her purpose, powerful comic panel" }
    ]
  },
  {
    title: "THE FIRST REAL STORM",
    setting: "Al-Rashid City Harbour — a supercell closing in fast",
    isOrigin: true,
    story: "She had planned to practice more before her first real rescue. But storms don't check your schedule. A supercell — the kind that forms once a decade — is bearing down on the busy harbour district at three in the afternoon. Forty fishing boats are still at sea. The coast guard is overwhelmed. And Rima, standing on the harbour wall watching the black wall of cloud roll in, feels something she hasn't felt since that first lightning bolt touched her hand: the storm recognising her. She steps off the harbour wall and into the sky.",
    panels: [
      { caption: "The supercell appears on the horizon without warning — a black wall of cloud thirty miles wide, moving at sixty kilometres an hour. The harbour warning sirens go off.", speech: "All vessels return to port immediately! This is not a drill — RETURN TO PORT!", speaker: "Coast Guard", isRima: false, scene: "massive supercell storm wall approaching a busy harbour, fishing boats in distance trying to outrun it, coast guard vehicles with sirens, terrified dockworkers, dramatic scale comic panel" },
      { caption: "Rima can feel the storm from a mile away — its fury, its electricity, the forty boats caught in its path.", speech: "Forty boats. I can feel every one of them. And I can feel the storm choosing them.", speaker: "Rima", isRima: true, scene: "teenage girl standing on harbour wall, eyes glowing red-gold, storm in background, expression of intense concentration and sudden total certainty, hair rising with electricity, comic art" },
      { caption: "She does the thing she never planned to do in public. She steps off the harbour wall — and the sky catches her.", speech: "I'm going in. All forty boats are coming home.", speaker: "Rima", isRima: true, scene: "teenage girl leaping from harbour wall into the air toward the oncoming superstorm, lightning crackling around her, storm clouds parting slightly ahead of her, first public flight, epic defiant comic art" },
      { caption: "From inside the storm, Rima doesn't fight it. She joins it — and then she redirects it. The fishing fleet watches a girl rewrite the weather.", speech: "She's standing INSIDE the lightning. And it's… listening to her.", speaker: "Fisherman", isRima: false, scene: "teenage girl at the centre of the supercell, arms spread wide, lightning radiating outward in controlled streams away from the fishing boats, storm bending around her command, awe-struck fishermen watching from boats, spectacular epic comic art" }
    ]
  },
  {
    title: "STORMCALLER",
    setting: "Al-Rashid City — the morning after the harbour rescue",
    isOrigin: true,
    story: "By morning, every screen in the city shows the same image: a girl standing inside a supercell, redirecting forty lightning bolts at once while forty fishing boats sail home beneath her. Nobody knows her name yet. The coast guard is calling it a 'freak atmospheric event'. The fishermen know better. And Rima, sitting on her school wall reading the news coverage with her morning tea, smiles for the first time since this all started — because for the first time, the storm inside her feels exactly the right size.",
    panels: [
      { caption: "Morning. Every news channel in Al-Rashid is showing the same video: a girl in a crimson cape, standing in a supercell, alive.", speech: "Who IS she? There's no record of any registered metahuman in this city!", speaker: "News Anchor", isRima: false, scene: "city apartment, television showing blurry footage of girl inside lightning storm, people gathered around screens in disbelief, news ticker reading 'MYSTERY GIRL SAVES HARBOUR FLEET', comic art" },
      { caption: "The forty fishing captains have a different question. One old captain tells a reporter exactly what he saw.", speech: "She walked into the heart of the storm and told it where to go. That's not a freak event. That's a guardian.", speaker: "Captain Omar", isRima: false, scene: "weathered old fishing captain speaking seriously to reporter on dock, other fishermen nodding behind him, harbour in background, morning light, authentic emotional comic panel" },
      { caption: "Rima reads the news coverage on her school wall, sipping tea, trying to look like someone who didn't just stand inside a supercell twelve hours ago.", speech: "'Unidentified girl'… 'freak event'… nobody can spell my name if they don't know it yet.", speaker: "Rima", isRima: true, scene: "teenage girl in school uniform sitting on wall reading news on phone with slight satisfied smile, electricity crackling faintly at her fingertips as she scrolls, casual confident pose, fun comic panel" },
      { caption: "She looks up at the clear morning sky. The storm is quiet now — waiting, patient, like an old friend who knows you'll be back.", speech: "Alright. Let's give them a name to print next time. I'm the Stormcaller.", speaker: "Rima", isRima: true, scene: "teenage girl standing up from wall, backpack over shoulder, looking up at blue sky with quiet fierce smile, electricity glowing warmly in her dark hair, the whole city spread behind her, triumphant origin ending comic art" }
    ]
  }
];

// ===== ONGOING ADVENTURES =====

const ADVENTURES = [
  {
    title: "FIRE IN THE ELECTRICAL GRID",
    setting: "Al-Rashid Power Station — midnight, a catastrophic surge",
    isOrigin: false,
    story: "A cascading failure in Al-Rashid's main power station sends a surge through the grid that could level three city blocks — and the automated shutdown systems have already failed. The engineers have three minutes to evacuate. Rima has four minutes to fix it. She doesn't do maths well, but she does electricity very well indeed.",
    panels: [
      { caption: "A catastrophic power surge rips through Al-Rashid's central grid at midnight. In three minutes, the main transformer will detonate — and take three city blocks with it.", speech: "Evacuation protocol ALPHA! Everyone out — we have THREE minutes!", speaker: "Chief Engineer", isRima: false, scene: "power station interior with sparking electrical equipment, alarms blazing, engineers running for exits, massive transformer beginning to glow dangerously, urgent crisis comic panel" },
      { caption: "Rima is four blocks away when every streetlight explodes at once. She knows exactly what that means.", speech: "Main transformer. Overload cascade. Two minutes if the cooling system is already gone.", speaker: "Rima", isRima: true, scene: "teenage girl in street at night, streetlights exploding around her in sequence, expression of instant calm assessment, already launching herself into the sky toward the power station, decisive comic panel" },
      { caption: "She lands in the transformer vault and does what no human tool can: she absorbs the surge directly into herself.", speech: "Come on. All of it. I can hold it — I was MADE to hold it.", speaker: "Rima", isRima: true, scene: "teenage girl standing at the centre of the power station transformer vault, arms wide open, absorbing massive electrical surge into her body, hair blazing gold, entire body glowing with contained energy, spectacular comic art" },
      { caption: "She releases the energy harmlessly into the storm clouds above — one perfect upward bolt. The grid stabilises. The city sleeps on, unknowing.", speech: "She absorbed a transformer explosion. With her HANDS. I don't understand what I just watched.", speaker: "Engineer", isRima: false, scene: "power station stable, engineers returning to find everything normal, only evidence is Rima standing on the roof releasing one magnificent upward lightning bolt into clouds, looking satisfied, awed engineers below, triumphant comic art" }
    ]
  },
  {
    title: "THE DESERT DROUGHT",
    setting: "Wadi Al-Nakheel — the farming valley, its third dry year",
    isOrigin: false,
    story: "Three years without meaningful rain have turned Wadi Al-Nakheel's once-green farming valley into cracked earth and dust. The farmers have done everything right — terraced fields, careful irrigation, prayers offered faithfully. The clouds pass above and never stop. Rima, flying home from a rescue, looks down and sees the cracked earth. Then she looks up and sees the clouds full of rain that simply haven't found the valley yet. She decides to introduce them.",
    panels: [
      { caption: "Three years of drought have drained Wadi Al-Nakheel's valley dry. Old Hassan kneels at his cracked field, hands pressed to earth that remembers rain but has forgotten the feeling.", speech: "My father's father built these terraces. I will not be the one who lets them fail.", speaker: "Farmer Hassan", isRima: false, scene: "elderly farmer kneeling at badly cracked dry farmland, terraced fields of withered crops, dusty air, cloudless sky, dignity and sadness in his expression, moving comic panel" },
      { caption: "Rima spots the valley from altitude — and above it, rain clouds passing two kilometres too far north.", speech: "There's water right there. The clouds just don't know where they need to be.", speaker: "Rima", isRima: true, scene: "teenage girl flying high above arid valley, looking down at dry land and up at rain clouds passing slightly to the north, thinking strategically, electric energy building around her, aerial view comic art" },
      { caption: "She rises into the clouds and does what feels natural: she calls the lightning — and where the lightning goes, the rain follows.", speech: "Come south. Just twenty kilometres south. There are people down there who've been waiting three years for you.", speaker: "Rima", isRima: true, scene: "teenage girl inside storm clouds conducting them southward with controlled lightning strikes, guiding the entire cloud system toward the valley below, dramatic scale, atmospheric power comic art" },
      { caption: "The first drops hit the cracked earth of Wadi Al-Nakheel. Hassan puts his face up to the sky and stays that way for a long time.", speech: "Rain. Real rain. Al-hamdulillah — thank God. Thank God.", speaker: "Farmer Hassan", isRima: false, scene: "elderly farmer with face raised to falling rain, tears mixed with raindrops, cracked earth drinking in water greedily, other farmers rushing out of homes with arms raised, Rima watching from above with a quiet warm smile, deeply moving comic art" }
    ]
  },
  {
    title: "THE SCHOOL ON THE CLIFF",
    setting: "Jabal Al-Nour School — lightning has struck the building",
    isOrigin: false,
    story: "The old school on Jabal Al-Nour cliff has stood for eighty years through every storm. Tonight, a freak direct lightning strike ignites the roof while sixty students are sitting their final exams inside. The fire spreads faster than the old building's sprinklers can manage. The road up the cliff is too narrow for fire engines. And the only rescue option is one girl who happens to speak lightning.",
    panels: [
      { caption: "Sixty students are deep in their final exams when the roof of Jabal Al-Nour School ignites from a direct lightning strike. Smoke fills the corridors in minutes.", speech: "FIRE! Everyone leave your papers — leave everything — GO!", speaker: "Teacher", isRima: false, scene: "school building on clifftop at night, roof on fire, smoke pouring from upper windows, panicked students streaming out, fire visible through windows, emergency chaos comic panel" },
      { caption: "Twelve students are trapped on the third floor — the stairwell is already filled with smoke.", speech: "We can't go down! The stairs are gone. The windows are fifty feet up!", speaker: "Trapped Student", isRima: false, scene: "terrified students at third-floor windows above smoke and flames, looking down at long drop, one student on phone calling for help, nighttime cliff backdrop, urgent helpless comic panel" },
      { caption: "Rima creates a storm above the building — using controlled lightning to punch ventilation channels through the smoke and rain the fire down.", speech: "I need to do two things at once — clear the smoke AND fight the fire. So I will.", speaker: "Rima", isRima: true, scene: "teenage girl hovering above burning school, one arm directing precise lightning bolts to clear smoke channels, other arm guiding rain clouds to douse the flames, intensely focused, multi-task heroism comic art" },
      { caption: "She carries all twelve students down on individual platforms of static-charged air. The last student out is the last one through his exam paper.", speech: "You saved my paper too. Thank you. I needed that grade.", speaker: "Student", isRima: false, scene: "teenage girl lowering last student safely to ground on cushion of electrical force, student still somehow clutching his exam paper, Rima raising an eyebrow with amused expression, other students and teachers cheering, fire safely out behind them, warm funny comic scene" }
    ]
  },
  {
    title: "THE SAND DUNE RACE",
    setting: "The Eastern Desert — the annual Dune Rally, an emergency",
    isOrigin: false,
    story: "The Eastern Desert Dune Rally is a beloved annual race — forty off-road vehicles, three hundred kilometres, no roads, no shortcuts. This year, a sudden sandstorm buries the lead vehicle at the base of the Great Red Dune. The driver is alive beneath six metres of sand, and the rescue diggers won't arrive for ninety minutes. Rima arrives in four.",
    panels: [
      { caption: "Race vehicle 7 — driven by champion racer Lina Al-Khalid — disappears under six metres of sand when the Red Dune collapses. The distress beacon blinks red.", speech: "Vehicle 7 is buried! We have a driver down — coordinates sent — ninety minutes ETA!", speaker: "Race Control", isRima: false, scene: "massive sand dune having collapsed on top of a buried racing vehicle, only the tail of it visible, emergency beacons, other race vehicles stopped nearby, drivers looking helplessly at the sand, race officials on radios, tense comic panel" },
      { caption: "Rima picks up the distress signal on the emergency frequency and looks at the desert on her radar. Ninety minutes. She decides ninety minutes is unacceptable.", speech: "Ninety minutes? I'll be there in four. Keep that beacon on.", speaker: "Rima", isRima: true, scene: "teenage girl in flight checking her wrist communicator, already turning toward the desert at high speed, lightning trail behind her over the landscape, urgent focused face, action comic panel" },
      { caption: "She can't dig — but she can do something better. She creates a precise electromagnetic field that vibrates the sand particles apart — like reversing the collapse.", speech: "Sand is just tiny particles. Electricity moves particles. Come on — move.", speaker: "Rima", isRima: true, scene: "teenage girl crouching over buried car, hands pressed to sand, electricity flowing through the sand in visible golden waves, sand particles separating and rising away from the vehicle, scientific and beautiful comic art" },
      { caption: "Lina Al-Khalid climbs out of her car into the desert sun, shaking sand from her helmet and looking at the girl crouched above her like it's perfectly normal.", speech: "Four minutes. Is that your best time?", speaker: "Lina Al-Khalid", isRima: false, scene: "racing driver climbing out of her car looking at teenage superhero with competitive amusement, sand still settling around them, Rima grinning, wide desert and dramatic sky behind them, warm funny adventurous comic scene" }
    ]
  },
  {
    title: "LIGHTNING DOES NOT FORGET",
    setting: "The Old Lighthouse — a ghost from Rima's training ground",
    isOrigin: false,
    story: "The old lighthouse where Rima first learned to control her powers has been empty for twenty years. Tonight it isn't empty — a family of four, sheltering from a storm in what they thought was an abandoned building, has triggered an ancient electrical fault in its walls. The fault is spreading, and the building's stone structure has become a literal lightning rod. Rima returns to where it all began.",
    panels: [
      { caption: "A tourist family — parents and two children — shelters from the coastal storm in the old lighthouse. They don't know it's been condemned. They don't know about the fault in its walls.", speech: "It's just until the storm passes. It looks solid enough.", speaker: "Father", isRima: false, scene: "family sheltering inside old lighthouse during coastal storm, children playing cards, rain against the windows, they look comfortable and unaware of danger, warm cosy scene before crisis, comic panel" },
      { caption: "The electrical fault in the lighthouse walls activates with the storm. The building becomes a channel for uncontrolled lightning — and starts to tear itself apart.", speech: "THE WALLS — something's wrong with the walls — CHILDREN COME HERE—", speaker: "Mother", isRima: false, scene: "lighthouse interior with electricity arcing through the walls, stone cracking, family huddled in corner, children terrified, mother shielding them with her body, dramatic crisis comic panel" },
      { caption: "Rima lands on the lighthouse roof — the place where she first learned what she was — and does something she's never done before: she draws the fault current entirely into herself to drain it.", speech: "I learned what I am in this building. I am not going to let it hurt anyone.", speaker: "Rima", isRima: true, scene: "teenage girl standing at the top of the lighthouse in the storm, arms spread against the walls, absorbing all the fault current from the old stone structure, lightning pouring into her from the building, hair blazing, intense and determined, powerful comic art" },
      { caption: "The fault drains. The building stills. The family comes out to find a teenage girl sitting calmly on the sea wall, watching the storm pass.", speech: "Thank you. Thank you. Who ARE you?", speaker: "Father", isRima: false, scene: "grateful family emerging from lighthouse, father shaking Rima's hand with deep emotion, children looking at her with wide eyes, Rima sitting on sea wall with quiet smile, storm clearing behind her, warm beautiful comic ending" }
    ]
  },
  {
    title: "THE FLOODED SUBWAY",
    setting: "Al-Rashid Metro — Central Station, a flash flood",
    isOrigin: false,
    story: "A flash flood overwhelms the stormwater drains and pours sixty million litres of water into Al-Rashid's central metro station in under three minutes. Two hundred and twelve commuters are on the platforms and in the tunnels. The pumps are offline. The exits are blocked. And the water is rising at a rate of thirty centimetres per minute.",
    panels: [
      { caption: "Without warning, three storm drains above Central Metro Station fail simultaneously. Sixty million litres of floodwater pour into the tunnels. In three minutes, the platforms are knee-deep.", speech: "FLOOD ALERT! All passengers move to the upper concourse immediately — DO NOT USE THE ESCALATORS!", speaker: "Station Controller", isRima: false, scene: "massive metro station flooding rapidly, water pouring from multiple points, hundreds of panicked commuters wading and running for stairs, station lights flickering, dramatic emergency comic panel" },
      { caption: "Two hundred and twelve people. Exits blocked. Water rising. Rima is already underground before the emergency broadcast finishes.", speech: "Two hundred and twelve people. I counted the signals on my way down. Nobody gets left in the water.", speaker: "Rima", isRima: true, scene: "teenage girl dropping through an emergency access hatch into flooded metro tunnel, water waist-deep, flashlight beams from trapped commuters in background, focused heroic expression, dark underground comic art" },
      { caption: "She can't pump water with lightning — but she CAN use electromagnetic force to push it back. She plants herself at the tunnel junction and PUSHES.", speech: "I'm creating a pressure wall. It'll hold ten minutes. Everyone MOVE — now, fast, go!", speaker: "Rima", isRima: true, scene: "teenage girl standing in flooded metro tunnel with both hands forward, massive electromagnetic force wave pushing floodwater back up the tunnel, creating a dry corridor for commuters to escape through, straining with effort, epic underground comic art" },
      { caption: "Two hundred and twelve people reach the upper concourse. Rima is last out — and she's soaking wet, which she finds extremely funny.", speech: "I control lightning and I still got completely drenched. This is embarrassing.", speaker: "Rima", isRima: true, scene: "teenage girl emerging from metro exit dripping wet, all rescued commuters on the street cheering, Rima looking at her soaked clothes with amused disbelief, warm crowd around her, funny heartfelt comic ending" }
    ]
  },
  {
    title: "THE MARATHON STORM",
    setting: "Al-Rashid City — the Annual Marathon, race day",
    isOrigin: false,
    story: "Four thousand runners are in the middle of the Al-Rashid City Marathon when a severe thunderstorm warning is issued. Lightning strikes on a course with no shelter is a mass-casualty scenario. The race organisers have no choice but to stop the event — except one runner, a seventeen-year-old girl named Maya, has been training for this marathon for two years and has been told by her doctors it's likely her last chance to ever run one. Rima has an idea.",
    panels: [
      { caption: "Four thousand marathon runners hit the 30-kilometre mark when the sky turns black. Race officials are calling it off — there's no safe option with lightning incoming.", speech: "All runners stop! Take shelter immediately — severe lightning warning in effect!", speaker: "Race Official", isRima: false, scene: "4000 marathon runners stopping as dark storm clouds roll in, race officials with megaphones, runners looking frustrated and disappointed, dramatic weather change, comic panel" },
      { caption: "Rima spots Maya — still running. She's heard about her story. She knows why she won't stop.", speech: "Maya Al-Nassir. Age 17. This is her race. I'm not letting a thunderstorm take it from her.", speaker: "Rima", isRima: true, scene: "teenage superhero girl spotting a determined young female runner still moving through the stopped crowd, expression of recognition and decision, electric energy beginning to build around her, comic art" },
      { caption: "Rima runs alongside Maya for the last twelve kilometres — not using her powers to carry her, but creating a perfect bubble of calm, clear air around her that moves with her.", speech: "Keep running, Maya. I'll keep the sky clear for both of us.", speaker: "Rima", isRima: true, scene: "teenage superhero girl running alongside marathon runner, a perfect bubble of clear calm air surrounding both of them while storm rages outside, crowds watching in amazement from shelter, beautiful moving comic art" },
      { caption: "Maya crosses the finish line in 3 hours, 47 minutes, in perfect sunshine — a circle of calm in the middle of the storm. The crowd erupts.", speech: "I didn't finish it for me. I finished it for everyone who said I couldn't.", speaker: "Maya", isRima: false, scene: "young marathon runner crossing finish line with arms raised in triumph, tears streaming, surrounded by cheering crowd, Rima standing at the finish line with a huge proud smile, the storm still visible outside their circle of calm sky, deeply emotional triumphant comic art" }
    ]
  },
  {
    title: "RIMA AND THE SEA",
    setting: "The Gulf Coast — a waterspout emergency",
    isOrigin: false,
    story: "A chain of five waterspouts forms in the Gulf within thirty minutes of each other — an almost impossible meteorological event. Each one is large enough to capsize a container ship. Three ships are in their path. Rima has seen waterspouts before in her storm-sense. She's never fought five at once. She is, however, unreasonably willing to try.",
    panels: [
      { caption: "Five waterspouts appear on the Gulf surface in thirty minutes. Each one is a hundred metres wide and climbing. Three container ships are in direct path.", speech: "Five simultaneous waterspouts — this is a one-in-a-century event. God help anyone who's out there.", speaker: "Meteorologist", isRima: false, scene: "five massive waterspouts visible on Gulf waters, coast guard monitoring station, three large ships visible in the path of the storms, enormous scale, awe-inspiring and terrifying meteorological comic panel" },
      { caption: "Rima flies out over the Gulf and sizes up all five at once. Her storm-sense is showing her the rotation pattern — the core that holds each one together.", speech: "Five cores. Five pressure hearts. I just have to break all five — simultaneously.", speaker: "Rima", isRima: true, scene: "teenage girl flying above Gulf waters, five waterspouts visible in background, she has her eyes closed reading the storm energy, expression of intense calm focus, hair crackling with red-gold electricity, aerial comic art" },
      { caption: "She sends five separate lightning strikes — one into the core of each waterspout — precisely timed, precisely aimed. The waterspouts collapse in sequence like dominoes.", speech: "There's a specific frequency that disrupts a waterspout's rotation. I can feel it. It's like a heartbeat. Stop the heart…", speaker: "Rima", isRima: true, scene: "teenage girl with both arms spread firing five simultaneous targeted lightning bolts each into the core of a separate waterspout, all five collapsing simultaneously, magnificent display of precise power, spectacular comic art" },
      { caption: "The Gulf goes flat. Three ships sail on. The meteorologist at the monitoring station stares at her screen for a very long time.", speech: "She collapsed five simultaneous waterspouts with precision lightning strikes. I've been in meteorology for thirty years. I need to sit down.", speaker: "Meteorologist", isRima: false, scene: "monitoring station, meteorologist staring slack-jawed at screen showing Gulf with no waterspouts and three safe ships, Rima visible as small figure flying away over the now-calm water, sunny aftermath, wonderful comic scene" }
    ]
  },
  {
    title: "THE POWER OF PATIENCE",
    setting: "Rima's School — exam week, a personal storm",
    isOrigin: false,
    story: "Not every storm Rima faces is meteorological. This week it's exam week, and Rima has failed her physics paper — the subject she arguably understands better than anyone on Earth, having personally experienced electromagnetism from the inside. The problem isn't the knowledge. It's that she keeps accidentally ionising the air around her when she gets frustrated, which sets off the smoke detectors, which triggers the fire alarm, which cancels the exam for everyone. Again.",
    panels: [
      { caption: "Exam week. Rima stares at her physics paper. The question is about electromagnetic induction. She has personally induced electromagnetic fields in the Gulf of Oman. She cannot explain it on paper.", speech: "This question asks what happens when a conductor moves through a magnetic field. I AM a conductor. This is unfair.", speaker: "Rima", isRima: true, scene: "teenage girl at exam desk staring intensely at physics paper, tiny sparks of electricity flickering from her pencil, other students around her looking nervous, smoke detector on ceiling above her, tense funny comic panel" },
      { caption: "She gets frustrated. The air around her ionises. The smoke detector goes off. For the second time this week.", speech: "I — it wasn't — I was just thinking really hard about—", speaker: "Rima", isRima: true, scene: "fire alarm going off in exam room, students evacuating in exasperation, Rima standing with hands raised in innocent protest, smoke detector directly above her blinking red, teacher face-palming, very funny comic scene" },
      { caption: "Her teacher, Ms. Farouk, sits with her after the evacuation and says something Rima doesn't expect.", speech: "Rima, the reason your written answers are wrong is that you're thinking in feelings, not in words. Translate what you feel into language.", speaker: "Ms. Farouk", isRima: false, scene: "teacher and teenage girl sitting outside school building after evacuation, teacher speaking with wise kindness, Rima listening with dawning understanding, other students in background, warm afternoon light, emotional learning comic panel" },
      { caption: "She rewrites her paper from the beginning — describing electromagnetism the way she experiences it from the inside. She gets a hundred percent. The smoke detectors survive.", speech: "A conductor experiences the magnetic field as a pressure — a direction — a conversation between motion and energy. It feels like this…", speaker: "Rima", isRima: true, scene: "teenage girl writing intently with no electrical accidents, peaceful focused expression, physics formulas flowing from her pen that look almost beautiful, sunlight through classroom windows, teacher watching from doorway with proud smile, warm comic scene" }
    ]
  },
  {
    title: "MEETING IN THE CLOUDS",
    setting: "High altitude, somewhere above the Sunhaven region",
    isOrigin: false,
    story: "Rima isn't the only person who flies. She knows about Zara — everyone does. What she didn't expect was to literally run into her at thirty thousand feet during a routine patrol. What follows is one of the most unusual conversations in the history of the Sunhaven Universe: two girls, floating in a cloud, talking about what it's like to be made of weather.",
    panels: [
      { caption: "Rima is on a high-altitude patrol when she rounds a cumulus cloud and nearly collides with someone coming the other way.", speech: "WATCH WHERE YOU'RE — oh. Oh, you're Zara. Hello.", speaker: "Rima", isRima: true, scene: "teenage girl in red-gold crackling electricity nearly colliding with golden-glowing girl in purple and gold costume high in the clouds, both looking equally startled, funny meeting-at-altitude comic panel" },
      { caption: "Zara, for her part, is delighted. She's been wanting to meet the girl everyone is talking about in Al-Rashid City.", speech: "You're Rima! I've heard so much about you! I love what you did with those waterspouts!", speaker: "Zara", isRima: false, scene: "golden-glowing superhero girl floating with big enthusiastic smile and energy, electric storm girl looking slightly overwhelmed by the friendliness, clouds all around them at altitude, fun contrast of personalities comic scene" },
      { caption: "They float for a while. Zara talks with warmth. Rima talks with electricity. Between them, they accidentally create a small but perfect rainbow.", speech: "You heat the air with your light and I ionise it with my field and apparently that makes… a rainbow.", speaker: "Rima", isRima: true, scene: "two teenage girl superheroes floating in clouds, a small perfect rainbow forming between their intersecting energy fields, both looking at it with surprised delight, beautiful magical unexpected moment, comic art" },
      { caption: "They go their separate ways with one agreement: the Sunhaven Universe just got more interesting.", speech: "Same sky, different storms. But I think we're going to get along, Rima.", speaker: "Zara", isRima: false, scene: "two superheroes flying off in different directions from the clouds, one golden trail and one red-electric trail crossing in the sky, both looking back at each other with grins, wide beautiful sky, hopeful comic ending" }
    ]
  }
];

// ===== DATE SYSTEM =====
// Rima's story begins April 18, 2026 (Day 1 = Origin Episode 1)

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
  if (dayNum <= TOTAL_ORIGIN) {
    return { episode: ORIGIN_STORY[dayNum - 1], isOrigin: true, originIndex: dayNum };
  } else {
    const idx = (dayNum - TOTAL_ORIGIN - 1) % TOTAL_ADVENTURES;
    return { episode: ADVENTURES[idx], isOrigin: false, originIndex: null };
  }
}

// ===== IMAGE URL =====

function buildImageUrl(panel, panelIndex, dayNum) {
  const seed = (dayNum * 100 + panelIndex + 333);
  const prompt = `${RIMA_BASE_PROMPT}, ${panel.scene}, vibrant colors, clean lines, no text, no watermark, manga comic book panel`;
  return `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=400&height=300&seed=${seed}&nologo=true&enhance=false&model=flux-schnell`;
}

// ===== RENDER COMIC =====

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
  const originProgress = document.getElementById('originProgress');

  if (isOrigin) {
    originTag.style.display = 'block';
    originTag.textContent = `📖 ORIGIN STORY — Chapter ${originIndex} of ${TOTAL_ORIGIN}`;
    originBanner.style.display = 'block';
    originProgress.textContent = `Chapter ${originIndex} of ${TOTAL_ORIGIN} — Follow Rima from the very first storm.`;
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
        <div class="panel-loader" id="rloader-${i}">
          <div class="loader-bolt">⚡</div>
          <div class="loader-text">Drawing panel ${i + 1}…</div>
        </div>
        <img class="panel-img loading" id="rimg-${i}" alt="Panel ${i + 1}: ${panel.caption}" />
        <div class="speech-bubble ${panel.isRima ? 'rima' : ''}">
          <span class="bubble-speaker">${panel.speaker}</span>
          "${panel.speech}"
        </div>
      </div>
      <div class="panel-caption">${panel.caption}</div>
    `;
    grid.appendChild(el);

    const img = el.querySelector(`#rimg-${i}`);
    const loader = el.querySelector(`#rloader-${i}`);

    img.onload = () => { img.classList.remove('loading'); img.classList.add('loaded'); loader.classList.add('hidden'); };
    img.onerror = () => {
      img.style.display = 'none';
      loader.innerHTML = `<div style="text-align:center;padding:20px;font-size:.85rem;color:#7f1d1d;"><div style="font-size:2rem;margin-bottom:8px">⚡</div><div><em>${panel.caption}</em></div><div style="margin-top:8px;font-size:.75rem;color:#aaa">Storm generating…<br>Refresh to retry</div></div>`;
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
  if (navigator.clipboard) { navigator.clipboard.writeText(url).then(() => showToast('Link copied! ⚡')).catch(() => fallbackCopy(url)); }
  else { fallbackCopy(url); }
}

function fallbackCopy(text) {
  const ta = document.createElement('textarea'); ta.value = text; ta.style.cssText = 'position:fixed;opacity:0';
  document.body.appendChild(ta); ta.select(); document.execCommand('copy'); document.body.removeChild(ta);
  showToast('Link copied! ⚡');
}

function shareTwitter() {
  const { episode, isOrigin } = getEpisodeForDay(currentDay);
  const tag = isOrigin ? '(Origin Story)' : '';
  const text = `Reading RIMA THE STORMCALLER Episode #${currentDay} ${tag}: "${episode.title}" — a new free comic every day! ⚡`;
  window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(window.location.href)}`, '_blank');
}

function showToast(msg) {
  const t = document.getElementById('toast'); t.textContent = msg; t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

(function init() {
  const params = new URLSearchParams(window.location.search);
  const dayParam = parseInt(params.get('day'));
  const todayNum = dateToDayNumber(new Date());
  if (dayParam && dayParam >= 1 && dayParam <= todayNum) { currentDay = dayParam; } else { currentDay = todayNum; }
  renderComic(currentDay);
})();
