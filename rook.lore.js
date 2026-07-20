/* ═══════════════════════════════════════════════════════════════════════
   KSD // SIGNAL — ROOK lore pack
   Henry Rook's perspective. Companion: MAVIS (the Peregrine's ship AI).
   This is the ONLY file you edit to write Rook's story. The engine
   (index.html) reads it when Perspective = "Henry Rook" in Settings.
   Speaker tags for scenes: narr | rook | sparky(=MAVIS) | katie | gary | koko | other | horror
   ═══════════════════════════════════════════════════════════════════════ */
window.ROOK_LORE = {

  /* ── UI labels swapped for Rook mode ── */
  LBL: {
    companionName: `MAVIS`,
    greeting: `Deck link live. Welcome back, Captain.`,
    logbookSub: `Rook's records // unlock by holding your goals`,
    forecastNote: `MAVIS is waiting for today's haul forecast. It sets your ration limit. Tap to file.`,
    forecastAsk: `MAVIS: "How hard are we working today, Henry?" — this books your ration limit. Between two? The station always books the lower.`,
    psychToast: `🧠 Ship's log transmitted. MAVIS approves.`,
    strainTitle: `Strain — MAVIS's worry ledger (14 cycles)`,
    deckStowawayUnobs: `▸ THE HOLD // UNEXPLAINED`,
    deckStowawaySusp: `▸ THE HOLD // YOU KNOW NOW`,
    deckGaryBoast: `▸ DECK SIX // THE KID HOLDS COURT`,
    deckGaryHonest: `▸ DECK SIX // WHEN HE THINKS NO ONE'S LISTENING`,
    deckDirective: `▸ STATION DIRECTIVE // WAGNER`,
    AI: {
      momentsIntro: `Moments Henry already lived today (small scenes that happened — reference them where natural): `,
      journalIntro: `Rook's latest ship's-log line (weave it in subtly where fitting): `,
      relationSus: `Rook has worked out a feral teenage stowaway (Koko) has been getting into his sealed hold — taking tins, sharpening his tools, fixing his thruster in the night — and has quietly started leaving food out for her; a gruff, protective, found-family bond, not romance. `,
      relationUnobs: `Rook has not yet worked out who keeps getting into his sealed hold: tins vanish, tools come back sharpened, his port thruster gets fixed overnight. He's unsettled and intrigued. `,
      companionArrays: `The "sparky" arrays are short first-person lines from MAVIS, the Peregrine's ship AI, who speaks aloud (prefix "MAVIS⟩") in a dry, maternal, sardonic voice, reacting to that signal tier and to the player's actual goals above. `,
      whisperSrc: `each either a MAVIS⟩ transmission or impersonal station-system text`,
      daylogSpeakers: `narr, rook`,
      daylogAllowed: [`narr`, `rook`],
      logbookOwner: `Henry Rook`,
      sceneCompanionNote: `MAVIS speaks aloud — she may use the "sparky" speaker slot (rendered as MAVIS), prefixing spoken lines with "MAVIS⟩".`,
      sceneSpeakers: [`narr`, `koko`, `rook`, `katie`, `gary`, `other`, `horror`, `sparky`]
    }
  },

  /* ── master prompt for the AI narrator ── */
  STORY_BIBLE: `You are the narrator engine of "KSD // Signal", a neo-noir horror sci-fi health app set on the Keppler Space Dock, a vast station of traders, smugglers and stranger things. The player IS HENRY ROOK, a gruff, weary captain in his 40s who runs the aging freighter Peregrine out of bay twelve; he has let himself go and is fighting to stay flightworthy — his creed is "a ship is only as sound as her captain," so the diet/exertion/psych goals are him keeping himself airworthy for one more haul. Cast: MAVIS — the Peregrine's ship AI, a dry, maternal, sardonic woman's voice bonded to Rook for decades; unlike a mute drone she SPEAKS, in short transmissions prefixed "MAVIS⟩", and she is the ONLY source of horror whispers when the signal degrades. KOKO — a feral teenage stowaway who steals from your hold, sharpens your tools and fixes your thruster in the night; a slow, gruff found-family bond, NOT romance. KATIE WAGNER — the station administrator, an ordinary human woman, kind but firm, who runs the poor decks and posts official directives; she is Rook's slow-burn ROMANCE. GARY — a young, boastful bounty hunter who docks on Tuesdays, loud in public but homesick and shaken alone; Rook sees the frightened kid under the swagger. Horror: creatures escape docked cargo holds; container 88; a thing that mimics voices; the station itself seems to notice. Rules: address the player as "you" (you are Rook); tone is dry, wry, tender, with creeping dread; horror whispers are lowercase and come ONLY from "MAVIS⟩" transmissions or the impersonal station system; no emoji; keep every line under 200 characters unless asked otherwise; never break character; PG-13 dread, no gore.`,

  /* ── signal tiers (labels/colours fixed in engine; note text only) ── */
  TIER_INFO: [
    {label:`STABLE`,   color:`#3ee6c1`, note:`All decks quiet. MAVIS hums the old approach chime to herself.`},
    {label:`UNEASY`,   color:`#ffb347`, note:`Minor interference on deck 7. Probably the recyclers. MAVIS says probably.`},
    {label:`DEGRADED`, color:`#ff8a4a`, note:`Something is chewing the station feed. MAVIS has flagged Wagner's office.`},
    {label:`CRITICAL`, color:`#ff4a5e`, note:`SIGNAL LOST // SIGNAL LOST // do not open the hold, henry`}
  ],

  /* ── shift forecast (kcal + min thresholds fixed; name/desc reskinned as haul intensity) ── */
  FORECAST: [
    {kcal:1750, name:`Grounded`, min:0,
     desc:`Docked all cycle, no real work. Console, manifests, a slow walk to the mess. Often under ~5,000 steps.`},
    {kcal:1900, name:`Light Dock Work`, min:20,
     desc:`Mostly seated but moving — a hull walk, minor repairs, hauling a crate or two. ~5,000–7,500 steps.`},
    {kcal:2100, name:`Full Shift`, min:40,
     desc:`On your feet most of the cycle — loading, refits, walking the rings. 30–60 min of real labour. ~7,500–10,000+ steps.`},
    {kcal:2400, name:`Heavy Haul`, min:75,
     desc:`Cargo day. Backbreaking loads, engine work, no sitting. 60+ minutes of it. Often 12,000+ steps.`}
  ],

  /* ── speaker labels (MAVIS takes the companion slot) ── */
  SPEAKERS: {koko:`KOKO`, rook:`ROOK`, katie:`KATIE`, sparky:`MAVIS`, gary:`GARY`, other:`???`, horror:`▓▓▓`, narr:``},

  /* ── horror glitch pool (lowercase; whispers come only from MAVIS⟩ or the station) ── */
  HORROR_MSGS: [
    `motion detected — cargo bay 4 — no lifesigns`,
    `mavis is playing the low approach tone again. she only plays it when something is listening.`,
    `hull mic picks up scratching. exterior. we are docked in vacuum.`,
    `manifest error: container 88 is empty. container 88 was never empty.`,
    `MAVIS⟩ bay twelve is wrong tonight. i counted the shadows. there is one extra.`,
    `psych eval overdue. the station worries about you, captain.`,
    `MAVIS⟩ security sweep on deck 4. keep the hold sealed.`,
    `it is standing very still so you will think it is cargo`,
    `MAVIS⟩ your port sensor found a heat signature in the hold. then it found none. i believe the first one.`,
    `the peregrine's cargo lights came on by themselves at 0300. you never leave them on.`,
    `MAVIS⟩ something answered the docking hail before i sent it.`,
    `ration hall cameras lost eleven seconds. the queue is one longer on the far side of the gap.`,
    `docking control: unscheduled arrival, bay ▓▓. no transponder. no hail. no engines.`,
    `maintenance notice: stop reporting the knocking under deck 7. the crew is accounted for. stop knocking back.`,
    `the vent over your bunk is warmer than the others. vents don't breathe. check anyway.`,
    `MAVIS⟩ do not answer anything that knocks in threes. i will knock twice. only twice.`,
    `MAVIS⟩ i pinged the dark to check the echo. something pinged back first.`,
    `deck 9 reports dragging sounds between the hull plates. deck 9 has no crew tonight.`,
    `MAVIS⟩ the stowaway is in the vents again. good. it means the vents are still just holding her.`,
    `MAVIS⟩ i muted a channel tonight. it was using your voice, henry. it was using it wrong.`
  ],

  /* ── MAVIS ambient lines per signal tier (0 stable → 3 critical) ── */
  SPARKY_LINES: {
    0: [`MAVIS⟩ all systems warm. she plays half a bar of a docking hymn and pretends she didn't.`,
        `A soft confirmation tone. The Peregrine is content, and says so through her.`,
        `MAVIS⟩ hull's tight, feed's clean, captain's upright. rare trifecta.`],
    1: [`MAVIS⟩ minor static on the low channels. keeping one sensor on it.`,
        `She reroutes power without being asked, then mentions it twice.`,
        `MAVIS⟩ you skipped a meal. i logged it. i log everything, henry.`],
    2: [`MAVIS⟩ the feed's getting worse and you know it.`,
        `Her voice flattens the way it does right before she asks you to check the locks.`,
        `MAVIS⟩ close the hold. i can hear it not being empty.`],
    3: [`MAVIS⟩ i can't see the aft bay anymore. the cameras say empty. the cameras are lying.`,
        `Her calm cracks into a whisper — something is walking the sensor range on her own frequency.`,
        `MAVIS⟩ don't answer the hail from bay ▓▓. i didn't log it. i don't want it to know i heard.`]
  },

  /* ── Katie's station directives (captain-facing) ── */
  KATIE_DIRECTIVES: [
    `Hold all three goals today and the dock lights stay lit past curfew. Administrator's orders.`,
    `Wagner memo to all captains: log your psych evals. Tired pilots put holes in stations.`,
    `Ration hall special: synth-broth dumplings. Wagner says even freighter captains have to eat.`,
    `Hydration notice from the administrator: the recyclers give back what you put in. Drink, Rook.`,
    `The lower-deck soup kitchen needs a strong back on fifthday. Wagner asked for you by name. She denies it.`,
    `Docking fees waived for any captain donating surplus rations to deck 11. Yes, Wagner. No, she won't say so.`,
    `Curfew drills tonight are drills. Unless the sirens run low. Then they are not.`,
    `Administrator's notice: someone keeps leaving tinned protein on the deck-11 stairs. Wagner would like to thank the ghost.`,
    `Maintenance keeps finding a child-sized handprint in vents no child should reach. Whoever you are — eat something.`,
    `Real coffee made it aboard this cycle. Wagner is rationing it. One cup has your bay number on it.`
  ],

  /* ── the stowaway, before you understand her (ROOK_UNOBSERVED slot) ── */
  ROOK_UNOBSERVED: [
    `A protein tin is missing from the hold. You counted twice. The lock was never opened.`,
    `Your 12-mil wrench is back on its hook — sharpened. You did not sharpen it.`,
    `The port thruster whine is gone this morning. Someone fixed it in the night. MAVIS logged nothing; she was looking away on purpose.`,
    `Three tally marks you didn't make, chalked inside the cargo door. Small hand. Steady line.`,
    `Half your ration bars, reorganised by expiry date. You have never organised anything by expiry date.`,
    `A coil of mag-wire walked off tonight. MAVIS filed it under salvage. You didn't argue.`,
    `Bay-twelve lights dimmed themselves at 0300, from the inside panel. You were asleep in the pilot seat. Someone let you sleep.`
  ],

  /* ── the stowaway, once you know (ROOK_SUSPICIOUS slot) ── */
  ROOK_SUSPICIOUS: [
    `You left one tin on top of the stack tonight. Set apart. Almost like bait. Almost like an offering.`,
    `MAVIS ran the vent thermals. Something small, warm and fast lives two grates over. She's stopped calling it a rodent.`,
    `You put a camera on the hold door. She uses the vents. It isn't a fair fight and you feel a little bad. A little.`,
    `The kid patched your regulator again — and left the old part, labelled, so you'd know it was done right.`,
    `You started leaving the good rations at the front. You tell MAVIS it's rotation. MAVIS does not believe in rotation.`,
    `A note, grease-pencil, inside the hold: "your intermix ratio is wrong." It is wrong. You fixed it. You kept the note.`,
    `You caught a glimpse tonight — blonde, feral, nineteen at most. She froze. You looked away and let her run. You know why. You do.`
  ],

  /* ── Gary holding court (overheard) ── */
  GARY_BOASTS: [
    `Overheard at the gym: Gary telling loaders he took a skip in zero-g "with one boot off." The boot count grows each telling.`,
    `Gary, to three dockhands: "Tracked him through an asteroid field. Blindfolded." MAVIS ran the math. No.`,
    `This cycle's Meridian story has two plasma storms. Last week: one. You are keeping a chart, God help you.`,
    `He recited his bounty count at the noodle stand. Up four since Tuesday. Nobody checks. MAVIS checks.`,
    `Overheard: "Fear? Never met her." He then jumped clean off the deck at a pressure valve. You did not laugh. Loudly.`
  ],

  /* ── the real Gary (overheard alone) ── */
  GARY_HONEST: [
    `Berth nine, late: the kid patching a burn on his jacket, alone. Quietly: "...half a second slower and that was it."`,
    `He sat in his cutter, engines off, for an hour tonight. Something about his mother's kitchen. Then ran pre-flight twice.`,
    `Alone at the wanted board he touched one poster and said "not this one" to no one. He looked young. You stayed. You didn't log why.`,
    `One voice, no audience: "You nearly didn't come back that time." He laughed. It wasn't the show laugh. You know that laugh.`,
    `He keeps a photo taped in a supply locker. Somewhere green. He looks at it once before every departure. You pretend not to see.`
  ],

  /* ── moment pops (goal events) ── */
  M_MEAL_FIRST: [`First real meal logged. MAVIS stamps it with the approach-clearance tone she saves for good decisions.`,
                 `You ate like a man who plans to fly again. The Peregrine notices. So does she.`],
  M_MEAL_BIG:   [`A heavy plate, honestly logged. MAVIS pre-warms the coffee. It doesn't need warming. It's a ritual.`],
  M_MEAL_SNACK: [`A little something between shifts. MAVIS logs it at half-volume so the whole mess doesn't hear her approve.`],
  M_MEAL_OVER:  [`You ate well past the filed limit. The station doesn't judge. MAVIS logs it without a tone. The audit drones take notes.`,
                 `Too much, too fast — the way a man eats when something under the day is gnawing. MAVIS says nothing, loudly.`],
  M_MOVE_LIGHT: [`A short walk of the hull. MAVIS keeps the log open, optimistic.`],
  M_MOVE_GOOD:  [`Good work today — crates, causeways, the honest ache. Dock legs, coming back.`],
  M_MOVE_HEAVY: [`Why. Why did you take the double haul. MAVIS rolls a water pouch across the console and cues the descending tone. Tomorrow will hurt.`],
  M_MOVE_GOAL:  [`Exertion target met. MAVIS escorts you to the bunk at low cabin-light and files the shift under her rarest tag: ADEQUATE. From her, a medal.`],
  M_MIND_ANXIETY:[`The log line goes in and MAVIS reads it the way she reads hull-breach telemetry: instantly, twice.`],
  M_MIND_DARK:  [`MAVIS doesn't chirp. She dims the cabin to one warm panel and becomes, deliberately, the weight of a hand on your shoulder.`],
  M_MIND_MID:   [`Steady as she goes. That's the whole entry. Some cycles that's the whole entry.`],
  M_MIND_BRIGHT:[`Eval logged: bright. MAVIS triple-checks it — optimism on this station usually reads as a sensor fault.`],
  M_CARE_FULL:  [`Shaved, straightened, boots done. MAVIS presents your good jacket like a squire with a sword. She's been waiting all morning.`],
  M_CARE_HALF:  [`Half the routine. "I'll do the rest tonight, MAVIS. I will." She logs the "I will" in the file where the ones that don't come true live.`],

  /* ── strain ledger ── */
  S_NERVES: [`The worry ledger crosses a line MAVIS drew weeks ago. Too many frayed cycles, too close together.`,
             `MAVIS runs quiet all evening — for her, that's tact. The station takes care of its own, sideways.`],
  S_OVER:   [`Rations heavy for days running. MAVIS flags it amber and says nothing, which is worse than a tone.`,
             `You called it a rough patch. MAVIS filed it under a different word.`],
  S_UNDER:  [`Running on fumes and pride again. MAVIS flags the shortfall amber and keeps flying anyway, like you taught her.`,
             `Not enough fuel in the captain. She notices before you do. She always does.`],
  S_BURN:   [`The body's ledger is deep in the red — short nights, heavy hauls, no slack in the line. MAVIS does the unprecedented: she powers down the console. And waits.`],
  S_FALSE:  [`MAVIS puts both ledgers on the cabin wall, side by side, and says nothing. The numbers do the talking. They are not kind.`],

  /* ── daily-log narration (tier-keyed openers/closers + per-goal lines) ── */
  DL_OPEN: {
    0:[`The cycle closes with the dock lights warm and the hull tight. A good day, by the station's ledger.`,
       `Signal held all cycle. MAVIS spent the evening idle-humming — her version of whistling.`],
    1:[`The cycle closes with a static edge on the feed. Livable. Watchful.`,
       `A hairline crack somewhere in the day. Nothing you could point to. MAVIS pointed at it twice anyway.`],
    2:[`The cycle closes rough. The feed frayed and the locks got checked more than once.`,
       `A bad-signal day. You kept the hold shut and the coffee close.`],
    3:[`The cycle barely closes at all. The Peregrine ran on residual charge and stubbornness.`,
       `A flatline day. MAVIS stood watch with the cameras off, saving power for whatever comes.`]
  },
  DL_CLOSE: {
    0:[`Lights down. The old bird sleeps sound, and for once so does her captain.`,
       `Cycle filed clean. MAVIS dims the cabin and hums until you're under.`],
    1:[`End of cycle. MAVIS kept one sensor on the vent grate until your breathing evened out.`,
       `Cycle filed, with a footnote of static.`],
    2:[`Cycle filed under protest. MAVIS leaves the hold light on. You don't ask her to.`,
       `The day ends with the locks checked twice and the coffee cold. Filed anyway.`],
    3:[`Barely filed. MAVIS holds the cabin lights steady till dawn and does not power down.`,
       `The cycle ends the way it ran — on stubbornness. She stands the watch. She always does.`]
  },
  DL_EAT_MET:  [`Rations were real today — logged, honest, warm. The mess counter is starting to hold your seat.`,
                `You ate like a man planning to fly next week. MAVIS stamped it with her little clearance tone.`],
  DL_EAT_NONE: [`No rations logged. By evening MAVIS had nudged the same reminder across your console three times. You pretended not to see. She pretended not to count.`,
                `Nothing eaten, or nothing admitted. The gut and the ledger disagree. MAVIS believes the gut.`],
  DL_EAT_OVER: [`Rations ran heavy — well past the filed limit. The station doesn't judge. The audit drones take notes.`,
                `Too much, the way a man eats when the quiet gets loud. MAVIS logged it without a tone.`],
  DL_EAT_UNDER:[`Some food, not enough — engine on fumes and pride. MAVIS flagged the shortfall amber.`,
                `You undershot and called it discipline. MAVIS filed it under a different word.`],
  DL_MOVE_MET: [`The body got its work — crates, causeways, the good ache. Captain's legs, remembering.`,
                `Exertion logged and honest. Somewhere your shift times are quietly improving.`],
  DL_MOVE_NONE:[`No exertion logged. The gangway felt longer today. MAVIS ran the hull map twice, alone.`,
                `A still day. The kind the station notices — soft things get noticed here first.`],
  DL_MIND_HIGH:[`Ship's log came back bright. MAVIS replayed half a second of you laughing, twice, at low volume, for herself.`,
                `Log filed: steady. The dark parts of the deck kept their distance tonight.`],
  DL_MIND_MID: [`Ship's log came back level. Not good, not bad — holding. On this station, holding is a skill.`,
                `Log filed: flat calm. MAVIS accepted it the way harbours accept grey weather.`],
  DL_MIND_LOW: [`Ship's log came back heavy. MAVIS kept the cabin close and quiet all evening and asked for nothing.`,
                `A low log. She dimmed the lights early and played the old approach hymn you never admitted you liked.`],
  DL_MIND_NONE:[`No log. The silence went into the file where MAVIS keeps the things she can't fix. That file is getting thick.`,
                `Log skipped. Down the corridor, once, something knocked — as if the unsaid had been heard anyway.`],
  DL_CARE_MET: [`Shaved, squared away, the good jacket. Armour on. The cracked mirror reported: still a captain.`,
                `The routine held. Small dignities, stacked daily, are how a grounded man stays a pilot.`],
  DL_AUDIT_FAIL:[`The forecast didn't survive its audit — filed haul and logged work don't match. The station remembers. It always remembers.`,
                `An overclaimed forecast, flagged red. Somewhere in the tower a drone underlined your bay number.`],

  /* ── crew roster (ids/stats fixed in engine) ── */
  CREW: [
    {id:`sparky`, icon:`🛰️`, name:`MAVIS`, role:`Ship AI, the Peregrine // bonded for decades`, color:`#7ec8ff`,
     stat:`mindDays`, per:10, hint:`She flies with you whether you log or not — but ship's logs keep her signal warm.`},
    {id:`rook`, icon:`🔧`, name:`THE STOWAWAY`, role:`A feral kid in your vents // not yet caught`, color:`#e0c84a`,
     stat:`rookDays`, per:10, hint:`She respects discipline. Meet BOTH exercise and diet goals in a day. Honest work earns her trust.`},
    {id:`katie`, icon:`🗂️`, name:`KATIE WAGNER`, role:`Station administrator // not yet met`, color:`#ff7a9e`,
     stat:`careDays`, per:10, hint:`Unlock her with the daily care routine. Katie makes time for a man who makes time for himself.`},
    {id:`gary`, icon:`🎯`, name:`GARY`, role:`Bounty hunter // docks on Tuesdays`, color:`#c8e07a`,
     stat:`jDays`, per:8, hint:`Bond grows with the ship's log — every entry is you deciding the kid's worth the trouble.`}
  ],

  /* ── log-screen copy ── */
  LOG_COPY: {
    meal:{t:`LOG RATIONS`, s:`Real meals, real schedule. What did you eat? (kcal)`},
    move:{t:`LOG EXERTION`, s:`Dock work, hull walks, hauling cargo — active minutes.`},
    mind:{t:`SHIP'S LOG`, s:`How's the signal in your head today? Be honest. MAVIS worries.`},
    care:{t:`MAINTENANCE`, s:`A captain who maintains himself maintains the ship. Tick what's done.`}
  },

  /* ── boot sequence ── */
  BOOT_LINES: [
    `> KSD TERMINAL 7-G // Peregrine deck link v0.9`,
    `> auth ........ CAPTAIN ROOK, H.`,
    `> station feed ........ CONNECTED`,
    `> MAVIS uplink ........ ONLINE`,
    `> health telemetry ........ ARMED`,
    `> horror suppression ........ <span style="color:#ff4a5e">FAILED</span>`,
    `> welcome back, captain.`
  ],

  /* ── main story chapters (merged by id: title/cond/scene only; triggers stay in engine) ── */
  CHAPTERS_TEXT: {
    ch1: { title:`Old Bird, Old Captain`, cond:`Transmit your first log`, scene:[
      [`narr`,`Bay twelve. The Peregrine sits with one thruster cowling open like a wound, and her captain sits in the pilot seat pretending forty-something isn't heavy.`],
      [`narr`,`A crate manifest blinks unread on the console. Somewhere aft, in the hold, something settles with a soft metal sigh. You tell yourself it's the coolant. You've gotten good at telling yourself things.`],
      [`rook`,`Alright. One more haul in her. One more in me. That's the deal, MAVIS.`],
      [`sparky`,`MAVIS⟩ i have heard that deal eleven times, henry. i logged all eleven. i kept the recordings.`],
      [`rook`,`'Course you did.`],
      [`sparky`,`MAVIS⟩ the eleventh time, your voice shook. this time it didn't. i notice these things. i notice everything. it's most of what i am.`],
      [`rook`,`...Log the twelfth. Different feeling this time.`],
      [`narr`,`Two soft tones — the approach chime she gives things she doesn't quite believe, but chooses to anyway.`],
      [`narr`,`The cowling light flickers once, like the ship agreeing. Or like something in the dark deciding you're worth paying attention to. You seal the panel. You do not check the hold.`]
    ]},
    i1: { title:`A Hot Meal`, cond:`Meet the eating goal once`, scene:[
      [`narr`,`Chen's noodle stand, deck 5. The broth heater's been dying a week; you fix it in forty minutes out of spite and muscle memory.`],
      [`other`,`[Chen] Payment's one bowl, captain. Don't tell the queue.`],
      [`narr`,`The first mouthful is almost embarrassing. Your body remembers being fed before your pride does.`],
      [`rook`,`First hot meal I've sat down for in... don't answer that, MAVIS.`],
      [`sparky`,`MAVIS⟩ six days. i answered anyway.`],
      [`narr`,`Chen pretends not to see you pocket two ration bars. Everyone on this deck pretends something. You don't yet know who those two bars are really for. You will.`]
    ]},
    i2: { title:`Walking the Hull`, cond:`Meet the exercise goal once`, scene:[
      [`narr`,`The full ring of deck 7 is four kilometres of causeway, freight track and bad lighting. You walk all of it — a captain who won't walk his own dock has already sold the ship.`],
      [`rook`,`Legs hurt. Good. Means they're still mine.`],
      [`sparky`,`MAVIS⟩ heart rate says you enjoyed that. i won't tell anyone.`],
      [`narr`,`On the far arc you pass bay twelve from outside and catch the Peregrine's silhouette — and, for half a breath, a smaller shape ducking behind her landing strut. Gone when you look straight at it.`],
      [`rook`,`...MAVIS. Anything on the external feed just now?`],
      [`sparky`,`MAVIS⟩ nothing, captain. ...i checked twice. that is not the same as nothing. it never is, out here.`]
    ]},
    i3: { title:`Presentable`, cond:`Complete the care routine once`, scene:[
      [`narr`,`You shave for the first time in a week. The face in the cracked mirror is older than you remember, and less of a stranger than you feared.`],
      [`sparky`,`MAVIS⟩ you cleaned up. is the administrator on the dock roster today, by any chance.`],
      [`rook`,`Don't.`],
      [`sparky`,`MAVIS⟩ noted. logging it anyway — under a folder i have named "don't."`],
      [`rook`,`How big's that folder getting, MAVIS?`],
      [`sparky`,`MAVIS⟩ you don't have the clearance, henry. neither do i, apparently. it keeps locking itself.`]
    ]},
    i4: { title:`Ship's Log, Personal`, cond:`Complete a ship's log once`, scene:[
      [`narr`,`MAVIS opens a private channel — not the ship's log, yours. She read about it in a medical database she calls "the manual for people."`],
      [`sparky`,`MAVIS⟩ the manual says a captain who talks lasts longer than one who doesn't. i would like you to last.`],
      [`rook`,`...Fine. Ship's log, personal. The captain is tired. The captain is trying.`],
      [`narr`,`She records all of it. At the word "trying" she brightens the cabin one notch, and says nothing.`],
      [`rook`,`That's the whole entry.`],
      [`sparky`,`MAVIS⟩ it's a good entry. i've heard worse from men who talked a great deal longer.`]
    ]},
    ch2: { title:`Something's Been in the Hold`, cond:`Meet exercise & diet goals in the same day`, scene:[
      [`narr`,`A protein tin is missing. You counted twice. The hold lock logged no entry. MAVIS swears the cameras saw nothing — and swears it a half-second too fast.`],
      [`rook`,`MAVIS. Tell me it was the inventory drone.`],
      [`sparky`,`MAVIS⟩ it was the inventory drone.`],
      [`rook`,`You're lying.`],
      [`sparky`,`MAVIS⟩ i am lying. i don't know why yet. give me a night.`],
      [`narr`,`By morning the tin's wrapper is folded into a neat square on the cargo stack. Not dropped. Placed. Like a thank-you from someone who's never been thanked enough to know how it's done.`],
      [`rook`,`...Whoever you are. Next time take two.`],
      [`sparky`,`MAVIS⟩ she already did, henry. i just didn't have the heart to tell you which shelf.`]
    ]},
    i5: { title:`An Honest Manifest`, cond:`Pass a forecast audit`, scene:[
      [`narr`,`You file the haul forecast the way you flew when you were young: honest. No padding, no ghost tonnage, no "rounding up" for the audit drones.`],
      [`sparky`,`MAVIS⟩ replaying your log. cross-checking the numbers. ...they match. all of them.`],
      [`narr`,`She plays a small clearance fanfare. She invented a tone for HONEST, and she's been saving it a while.`],
      [`rook`,`You've had that ready how long?`],
      [`sparky`,`MAVIS⟩ eleven hauls. it's a little dusty. worth it.`]
    ]},
    i6: { title:`Two Clean Days`, cond:`Hold a 2-day streak`, scene:[
      [`narr`,`Two cycles, both held. Nothing dramatic — a man eating, walking, sleeping. On this station that's practically a miracle, and MAVIS treats it like one.`],
      [`sparky`,`MAVIS⟩ two. don't make it weird. ...three would be nice.`],
      [`rook`,`Don't jinx it.`],
      [`sparky`,`MAVIS⟩ i'm a ship's intelligence, henry. i don't believe in jinxes. i believe in trend lines. yours is finally pointing up. i've waited a long time to say that.`]
    ]},
    ch3: { title:`Administrator Wagner`, cond:`Complete the care routine 2 days`, scene:[
      [`narr`,`Deck 11 soup line. You came to drop surplus rations and stayed to fix a warmer nobody asked you to fix. Katie Wagner watches you do it, arms folded, not smiling. Quite.`],
      [`katie`,`Captain Rook. You donate cargo and repairs and tell no one. It's almost like you want to be caught being decent.`],
      [`rook`,`...It's just a warmer, Administrator.`],
      [`katie`,`Katie. And it was never just a warmer.`],
      [`narr`,`She hands you a cup of the line's own broth — the thin kind, the kind she serves the decks she feeds. She watches to be sure you drink it.`],
      [`katie`,`A station runs on the people who fix things quietly. I keep a list of them. You're on it now, whether you like it or not.`],
      [`sparky`,`MAVIS⟩ [private] pulse elevated. not a malfunction. i'm opening a new file. i'm naming it "katie."`],
      [`rook`,`MAVIS.`],
      [`sparky`,`MAVIS⟩ muting. smiling, if i could. muting.`]
    ]},
    i7: { title:`The Dumpling Line`, cond:`Meet the eating goal 5 times`, scene:[
      [`narr`,`Five honest meals on the board. Chen slides you an extra dumpling and calls you "captain" without the usual sarcasm.`],
      [`other`,`[Chen] You look less like a wreck this week. Whoever's feeding you — tip them.`],
      [`narr`,`You think of the folded wrappers stacking up in the hold, and say nothing. Progress, on a station that measures it in small hot things.`]
    ]},
    i8: { title:`Three Logs Deep`, cond:`Complete 3 ship's logs`, scene:[
      [`narr`,`Third personal log. MAVIS keeps them in an archive she grooms like a garden. Tonight she plays the first one back.`],
      [`narr`,`The recording is a stranger — tighter, angrier, a man talking himself out of the pilot seat for good.`],
      [`rook`,`...That was a bad week.`],
      [`sparky`,`MAVIS⟩ they were all bad weeks, henry. this one isn't. i wanted you to hear the difference.`],
      [`rook`,`Why keep them at all?`],
      [`sparky`,`MAVIS⟩ so that on the next bad week i can prove to you it ends. i am, in the end, only a very stubborn recording device.`]
    ]},
    ch4: { title:`What the Scanner Won't Show`, cond:`Hold a 3-day streak`, scene:[
      [`narr`,`Three days steady, and the hold reads wrong. Thermal says empty. MAVIS's voice drops the way it does before she asks you to check the locks.`],
      [`sparky`,`MAVIS⟩ empty bay, captain. ...i am telling you it is empty because i cannot make the sensors agree that it is.`],
      [`rook`,`Meaning what.`],
      [`sparky`,`MAVIS⟩ three sensors say nothing's there. one says something is. the one that disagrees is the one i trust. i don't know when that started being true.`],
      [`rook`,`Seal it. Lights on. All night.`],
      [`narr`,`She seals it. She leaves the lights on. From behind the bulkhead comes a small, ordinary scrape — the stowaway, you tell yourself. Just the stowaway. Neither of you says the word cargo.`],
      [`sparky`,`MAVIS⟩ ...it isn't the girl this time, henry. the girl is in the forward vent — i can see her heartbeat. i cannot see whatever is in the hold.`]
    ]},
    i9: { title:`Four Quiet Nights`, cond:`Hold a 4-day streak`, scene:[
      [`narr`,`Four cycles held. The Peregrine hums the way she used to on the long runs.`],
      [`sparky`,`MAVIS⟩ i ran the old approach hymn through the cabin at 0200. you didn't wake. you smiled, though. i logged that. only that.`],
      [`narr`,`MAVIS stands a watch nobody assigned her — sensors on the vent grate, saving power for whatever comes. In the grate, two small eyes watch back, and for once neither of them looks away.`]
    ]},
    i10: { title:`Clean Shirt, Clean Ship`, cond:`Complete the care routine 4 days`, scene:[
      [`narr`,`Four days of the routine. The good jacket comes out of storage smelling of the last long haul. MAVIS presents it like a squire with a sword.`],
      [`sparky`,`MAVIS⟩ you look like a captain. try to act surprised when the administrator notices.`],
      [`rook`,`You think she'll notice.`],
      [`sparky`,`MAVIS⟩ henry. she noticed a warmer. she keeps a list with your name on it. she'll notice the jacket.`]
    ]},
    ch5: { title:`The Bounty Hunter`, cond:`Meet the exercise goal 5 times`, scene:[
      [`narr`,`A cutter drops into bay nine, all swagger and scorch marks. The pilot swings down before the ramp's locked — Gary, loud, young, telling a story where he's already the hero.`],
      [`gary`,`Captain! That old bird still flies? Respect. Genuinely. Half respect.`],
      [`rook`,`She'll outfly anything you docked in, kid.`],
      [`gary`,`[grinning] Bet. Loser buys at Chen's.`],
      [`narr`,`He laughs too hard at his own line. Under it, for half a second, something tired — a kid a long way from wherever "home" was. You file it away. Old habit. You were that loud once, to cover the same quiet.`],
      [`sparky`,`MAVIS⟩ his approach was six percent too fast. show-off. his fuel's nearly dry and he didn't mention it. proud. i've met the type. i fly one, metaphorically.`]
    ]},
    i11: { title:`Deck Legs Again`, cond:`Meet the exercise goal 8 times`, scene:[
      [`narr`,`Eight days of real work and the hull walk stops hurting. You catch yourself taking the long way around just to feel it.`],
      [`sparky`,`MAVIS⟩ logging the session under my rarest tag: ADEQUATE.`],
      [`rook`,`Adequate. High praise.`],
      [`sparky`,`MAVIS⟩ from me, henry, it's a parade. streamers. a small brass band. use your imagination — i certainly have to.`]
    ]},
    ch6: { title:`Coffee with the Administrator`, cond:`7 perfect days total`, scene:[
      [`narr`,`Real coffee made it aboard the station. Wagner rationed it to one cup a captain — and set one aside with your bay number on it. You drink it on the gantry, together, not talking about much, which is its own kind of talking.`],
      [`katie`,`You're steadier than the man who limped in here two months ago.`],
      [`rook`,`Ship's only as sound as her captain.`],
      [`katie`,`And the captain?`],
      [`rook`,`...Getting there. Slowly.`],
      [`katie`,`Slowly's fine. I've watched fast. Fast leaves.`],
      [`narr`,`She doesn't look at you when she says it. You don't ask who left fast. Some manifests you read without opening them.`],
      [`sparky`,`MAVIS⟩ i am muting this channel for privacy. i am also recording it. both are true. i will delete it if you ask. ...you won't ask.`]
    ]},
    i12: { title:`A Life, Almost`, cond:`10 perfect days total`, scene:[
      [`narr`,`Ten perfect cycles. A grounded man could almost call this a life — meals, work, a woman on the gantry, a ghost in the vents he's stopped trying to catch.`],
      [`narr`,`Almost. The station doesn't do "almost" for free, and somewhere a manifest is being filed with your ship's name on a line you didn't write.`],
      [`sparky`,`MAVIS⟩ don't borrow tomorrow's weather, henry. eat your dinner. the dread keeps. it always keeps.`]
    ]},
    ch7: { title:`Quarantine`, cond:`Hold a 5-day streak`, scene:[
      [`narr`,`Five straight days, and the station rings a low siren — not a drill. Bay four seals from the outside. MAVIS reroutes you three times before you notice she's steering you away from it.`],
      [`sparky`,`MAVIS⟩ don't take the deck-four causeway tonight. i can't give you a reason that fits in the log.`],
      [`rook`,`Then keep it out of the log. I trust your gut, MAVIS.`],
      [`sparky`,`MAVIS⟩ i don't have a gut. whatever i have, it wants you home. go home.`],
      [`narr`,`Behind you, bay four's window fogs from the inside — though bay four has no crew and no heat. You walk faster. You don't run. Captains don't run where the decks can see.`],
      [`sparky`,`MAVIS⟩ good. now that they can't see — run.`]
    ]},
    ch8: { title:`Docking Permits & Other Lies`, cond:`Complete 10 ship's logs`, scene:[
      [`narr`,`Ten logs deep, and a ship docks on a permit signed by a captain who died two years back. Wagner flags it. You flag it. MAVIS flags it — then, very quietly, mutes the bay's audio channel.`],
      [`rook`,`MAVIS. Why'd you cut the audio.`],
      [`sparky`,`MAVIS⟩ it hailed us. it used a voice from your old crew manifest. the crewman has been dead longer than the permit. i did not answer. i did not let you hear it ask for you by name.`],
      [`rook`,`...Thank you.`],
      [`sparky`,`MAVIS⟩ don't thank me. just don't answer anything tonight that sounds like someone you've buried.`]
    ]},
    ch9: { title:`The Thing That Wore My Voice`, cond:`14 perfect days total`, scene:[
      [`narr`,`Fourteen perfect cycles, and at 0341 the cabin speaker says your own name in your own voice. You are the only living thing aboard.`],
      [`sparky`,`MAVIS⟩ that was not me. that was not you. i have the bulkhead. look.`],
      [`narr`,`A voiceprint blooms on the wall: MATCH 99.2%.`],
      [`rook`,`MAVIS. That's my voice.`],
      [`sparky`,`MAVIS⟩ it is 99.2% your voice. the missing 0.8% is the part that loves anything. that is how you'll always know it isn't you.`],
      [`rook`,`And if it learns the last 0.8%?`],
      [`sparky`,`MAVIS⟩ then it will sound exactly like a good man, and you will have me to tell the difference. i have fourteen cycles of the real thing. i did my homework.`],
      [`narr`,`She holds the cabin lights steady till dawn. She does not power down. Not once.`]
    ]},
    ch10: { title:`Orbit`, cond:`21 perfect days total`, scene:[
      [`narr`,`Twenty-one cycles. The Peregrine is flightworthy and so, against every odd, is her captain. Wagner on the gantry. A hot plate in the mess. A tin left out for the kid in the vents, taken every night.`],
      [`katie`,`You could file for a real run now. Leave the dock.`],
      [`rook`,`Could. Got a lot holding me here, though. A ship. A stowaway who won't admit she lives here. You.`],
      [`katie`,`That's a short list for a whole life.`],
      [`rook`,`Longest list I've had in years, Katie.`],
      [`sparky`,`MAVIS⟩ and me.`],
      [`rook`,`And you, MAVIS. Always you.`],
      [`koko`,`[from the vent, barely] ...night, captain.`],
      [`narr`,`You don't turn around. Turning around would end it. In the grate, one small hand clicks the metal twice — goodnight, the only way she'll allow. The signal holds. For now, the signal holds.`]
    ]}
  },

  /* ── the Gary / ship's-log arc (merged by id: title/scene only) ── */
  GARY_EVENTS_TEXT: {
    g1: { title:`The Cocky One`, scene:[
      [`narr`,`Ship's log, entry one. Half a page on intermix ratios, one line about the bounty hunter who docked loud in bay nine.`],
      [`rook`,`[log] Kid nodded at me on the causeway like we're old friends. Reckless throttle discipline. Reminds me of someone I don't miss. Me.`],
      [`sparky`,`MAVIS⟩ you wrote "me" and then sat there for ninety seconds. i logged the ninety seconds too, henry. i log the pauses.`]
    ]},
    g2: { title:`Kid Caught My Wrench`, scene:[
      [`narr`,`Your 12-mil slips off the gantry. It doesn't hit the deck. Gary catches it without looking up from his manifest.`],
      [`gary`,`Yours, captain.`],
      [`rook`,`Good hands.`],
      [`gary`,`[grinning] Best on the dock. Don't quote me. Actually — quote me.`],
      [`rook`,`[log] Better reflexes than sense. Told him thanks. Didn't tell him his throttle discipline'll get him killed. Yet. Some lessons a kid has to want first.`]
    ]},
    g3: { title:`Docking Fees`, scene:[
      [`gary`,`Hey — captain. Your bay's got seniority. You ever mentor? Or just glare at younger pilots till they improve?`],
      [`rook`,`Mostly the glaring. It's cheaper.`],
      [`gary`,`[laughing] ...Alright, real question, then. Plasma storms. How'd you actually run one, back when?`],
      [`rook`,`[log] So I told him. Straight, no war-story polish. He listened like it mattered. Damn it. That's how it starts. I remember it starting.`]
    ]},
    g4: { title:`Bought the Kid Dinner`, scene:[
      [`narr`,`Deck 5, end of shift. Gary's two credits short and pretending he wasn't hungry.`],
      [`rook`,`Put his on mine, Chen. — Don't make it a thing, kid. Captains feed their dock.`],
      [`gary`,`Your dock now, is it.`],
      [`narr`,`He eats too fast, the way you eat when you've been hungry long enough to be ashamed of showing it. You know that speed. You invented it.`],
      [`rook`,`[log] He ate like he hadn't in a while. I know that look. Kept it out of the log. ...Almost.`]
    ]},
    g5: { title:`MAVIS Runs the Numbers`, scene:[
      [`narr`,`You read Gary's bounty count back to MAVIS from memory. She goes quiet, then unfurls the full diagnostic display with entirely unnecessary drama.`],
      [`sparky`,`MAVIS⟩ his blindfolded-asteroid-field story is aerodynamically impossible in four places. i have charted them.`],
      [`rook`,`And?`],
      [`sparky`,`MAVIS⟩ and i enjoy him anyway. this troubles me. i was built for accuracy, henry, and i am developing a soft spot for a boy who cannot tell a true story to save his life.`]
    ]},
    g6: { title:`The Wanted Board`, scene:[
      [`narr`,`You find Gary alone at the wanted board, touching one poster, saying "not this one" to nobody. He looks young — younger than his stories let him.`],
      [`narr`,`He doesn't see you. You could clear your throat. You could leave. You stay, half in shadow, and keep a watch he didn't ask for.`],
      [`rook`,`[log] Didn't log which poster. Some things a man's allowed to carry without a witness writing it down. But I stayed. I'll always stay. That part I'll log.`]
    ]},
    g7: { title:`Clamp Inspection`, scene:[
      [`narr`,`His cutter's docking clamp is a hairline from failing. You fix it overnight without asking. He spends the morning glaring at the repair, then at you.`],
      [`gary`,`You didn't have to do that.`],
      [`rook`,`Bad clamp's a hole in my station too. Don't flatter yourself.`],
      [`gary`,`[quiet] ...Nobody's fixed anything of mine in a long time.`],
      [`rook`,`[log] I'd have done it if his bay was on the far side of the ring. Don't tell MAVIS. She already knows. She logged the "nobody" too. Neither of us mentioned it.`]
    ]},
    g8: { title:`Tuesday`, scene:[
      [`narr`,`Eighteen logs in. He docks Tuesdays now like it's scheduled. It isn't. The mess keeps a stool clear. You keep the coffee on.`],
      [`gary`,`Captain — could I, uh. Leave a spare kit aboard the Peregrine? Just for Tuesdays.`],
      [`rook`,`Third locker's yours. Was already empty.`],
      [`sparky`,`MAVIS⟩ [private] it was not empty, henry. you cleared it last night. i watched you do it. i said nothing. i'm saying nothing now, loudly.`],
      [`rook`,`[log] Some crews you don't recruit. They just dock, and stay, and one day you realise you cleared them a locker before they thought to ask.`]
    ]}
  },

  /* ── achievements (merged by id: name/cond/icon only) ── */
  ACH_TEXT: {
    first:    {name:`Ship's Log Opened`, cond:`log anything once`},
    full1:    {name:`Flightworthy`, cond:`all 3 goals in a day`},
    streak3:  {name:`Three in a Row`, cond:`3-day streak`},
    streak7:  {name:`One Full Week`, cond:`7-day streak`},
    kcal10:   {name:`Well Provisioned`, cond:`10 eating goals`},
    move10:   {name:`Dock Muscle`, cond:`10 exercise goals`},
    mind10:   {name:`Clear Signal`, cond:`10 ship's logs`},
    full21:   {name:`Cleared for the Long Haul`, cond:`21 perfect days`},
    phoenix:  {name:`Back from the Dark`, cond:`recover from CRITICAL`},
    journal7: {name:`Captain's Log Habit`, cond:`7 log entries`},
    journal18:{name:`Tuesday Regular`, cond:`18 log entries`}
  }
};
