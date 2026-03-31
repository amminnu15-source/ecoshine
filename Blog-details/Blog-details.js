

const BLOGS = [
  {
    id:0,title:"10 Rooms, 10 Eco Swaps: Your Room-by-Room Green Cleaning Checklist",
    excerpt:"Transform every room in your home with these simple product swaps that are safer for your family and kinder to the planet.",
    category:"Cleaning Tips",date:"March 15, 2026",readTime:"5 min read",
    author:{initials:"MG",name:"Maria Garcia",role:"Deep Clean Specialist · EcoShine"},
    heroImg:"../images/about.jpg",
    artImg:"../images/about main.jpg",
    caption:"Room-by-room eco swaps — EcoShine certified cleaners at work",
    tags:["#EcoSwaps","#GreenCleaning","#HomeHacks","#NonToxic","#EcoLiving"],
    highlights:[
      {icon:"🏠",value:"10 Rooms",label:"Fully Covered"},
      {icon:"♻️",value:"30+",label:"Swaps Listed"},
      {icon:"💰",value:"50%",label:"Cost Saved"},
      {icon:"🌿",value:"0",label:"Toxic Chemicals"}
    ],
    lead:"You don't have to overhaul your entire home in one weekend. The easiest way to go green is one room at a time — and the savings in cost, health, and environmental impact add up faster than you'd expect.",
    sections:[
      {num:"Room 01",title:"Kitchen — The Grease Battleground",
       content:"The kitchen is where most toxic cleaning products live. Conventional degreasers, oven cleaners, and antibacterial sprays are packed with ammonia, bleach, and phthalates. The good news? Your kitchen already contains the best cleaners in the world.",
       list:["Replace chemical degreaser → Orange-peel citrus spray (D-Limonene based)","Replace oven cleaner fumes → Baking soda + white vinegar paste","Replace antibacterial dish soap → Plant-based castile soap","Replace paper towels → Reusable bamboo fibre cloths"],
       tip:{icon:"💡",text:"<strong>Pro tip:</strong> A half lemon dipped in coarse salt scrubs copper pots and cutting boards better than any commercial product — and costs pennies."},
       swaps:[{from:"Chemical oven cleaner",to:"Baking soda + lemon paste"},{from:"Synthetic degreaser",to:"Citrus enzyme spray"},{from:"Antibacterial dish soap",to:"Plant-based castile soap"}]},
      {num:"Room 02",title:"Bathroom — The Mould Magnet",
       content:"Bathrooms get hit hardest with conventional bleach-based cleaners. The irony? Bleach doesn't actually remove mould — it just bleaches the surface colour while leaving mould spores alive. Tea tree oil kills mould at the spore level.",
       list:["Replace bleach mould spray → Tea tree oil + water spray (10 drops per 200ml)","Replace synthetic air freshener → Beeswax candle + essential oil diffuser","Replace chemical toilet cleaner → Citric acid tablet (drop in, fizz, flush)","Replace disposable scrub pads → Biodegradable loofah or bamboo pad"],
       tip:{icon:"🌿",text:"<strong>EcoShine tip:</strong> After your shower, spray tiles with white vinegar + tea tree spray and leave it. The steam activates it — no scrubbing needed."}},
      {num:"Room 03",title:"Living Room — Dust & Allergen Control",
       content:"Living rooms are where allergens accumulate most — pet dander, dust mites, and VOCs from synthetic sprays all combine here. HEPA vacuuming + microfibre dusting is the gold standard.",
       list:["Replace aerosol furniture polish → Beeswax-based wood polish (apply monthly)","Replace synthetic carpet freshener → Baking soda sprinkled and vacuumed","Replace standard vacuum → HEPA-filter vacuum (captures 0.3 micron particles)","Replace dryer sheet fabric softener → Wool dryer balls + 3 drops lavender oil"],
       tip:{icon:"💧",text:"<strong>Did you know?</strong> Synthetic fabric softeners coat fibres with chemicals that off-gas for hours. Wool dryer balls reduce drying time by 25% AND leave clothes naturally soft."}},
      {num:"Rooms 04–10",title:"Bedrooms, Office, Kids' Rooms & More",
       content:"The same principles apply in every remaining room — replace synthetic chemicals with plant-based alternatives, switch to reusable cloths, and your home becomes healthier and greener.",
       list:["Bedroom: Lavender linen mist instead of synthetic fabric freshener","Kids' room: Plant-based all-purpose spray safe to touch immediately after","Home office: Anti-static microfibre cloth instead of alcohol screen wipes","Utility room: Enzyme laundry strips instead of plastic-bottle detergent","Windows: Water + white vinegar (50/50) instead of ammonia window cleaner"],
       tip:{icon:"🏆",text:"<strong>The result:</strong> Clients who complete a full room-by-room transition typically cut their cleaning product spend by 40–60% per year while eliminating an average of 28 plastic bottles from landfill."}}
    ],
    takeaways:["Start with one room — kitchen or bathroom gives the biggest immediate health impact","Citric acid, baking soda, castile soap and white vinegar cover 80% of cleaning needs","HEPA vacuuming + microfibre cloths replace the need for most spray products entirely","Concentrated formulas in refillable bottles save up to 60% cost vs conventional products","Tea tree and lavender essential oils provide natural antibacterial and antifungal properties"],
    products:[
      {icon:"🧴",name:"Castile Soap",desc:"Plant-based, multi-purpose",badge:"EPA Rated"},
      {icon:"🍋",name:"Citric Acid",desc:"Descaler & disinfectant",badge:"Natural"},
      {icon:"🧽",name:"Bamboo Cloths",desc:"Reusable, zero waste",badge:"Zero Waste"},
      {icon:"🌿",name:"Tea Tree Oil",desc:"Antifungal & antibacterial",badge:"Non-Toxic"},
      {icon:"💧",name:"White Vinegar",desc:"Universal cleaner",badge:"Natural"},
      {icon:"🕯️",name:"Beeswax Candles",desc:"Natural air purifier",badge:"Eco"}
    ],
    ecoTip:"Swap one cleaning product this week. Just one. The habit of making eco swaps is more important than doing everything at once."
  },
  {
    id:1,title:"Hidden Toxins in Common Cleaning Products (And How to Avoid Them)",
    excerpt:"Many household cleaners contain ingredients linked to asthma, hormone disruption, and even cancer. Here's what to look for on labels.",
    category:"Health & Safety",date:"March 10, 2026",readTime:"7 min read",
    author:{initials:"RK",name:"Dr. Rachel Kim",role:"Environmental Health Researcher · EcoShine"},
    heroImg:"../images/Health & Safety.jpg",
    artImg:"../images/Health & Safety.jpg",
    caption:"Understanding what's in your cleaning products — knowledge is your first defence",
    tags:["#HiddenToxins","#HealthAndSafety","#NonToxicLiving","#EcoHome","#CleanLabel"],
    highlights:[
      {icon:"⚠️",value:"62",label:"Toxic chemicals avg. home"},
      {icon:"🫁",value:"5×",label:"Worse indoor air quality"},
      {icon:"🔬",value:"12+",label:"Ingredients to avoid"},
      {icon:"🛡️",value:"100%",label:"EcoShine products safe"}
    ],
    lead:"The average home contains 62 different synthetic chemical compounds, many introduced through conventional cleaning products. What's alarming is that most products don't list all their ingredients — and the ones they do list are often impossible to understand without a chemistry degree.",
    sections:[
      {num:"Danger 01",title:"Phthalates — The Hidden Hormone Disruptors",
       content:"Phthalates are found in synthetic fragrances — and because 'fragrance' is considered a trade secret, manufacturers don't have to list them. They're linked to hormone disruption, reproductive issues, and developmental problems in children.",
       list:["Found in: Air fresheners, fabric softeners, scented cleaning sprays","Health risk: Hormone disruption, reduced fertility, developmental delays","Look for: 'Fragrance' or 'Parfum' on labels — these mask phthalates","Safe alternative: Products using pure essential oils only"],
       tip:{icon:"⚠️",text:"<strong>Red flag:</strong> If a cleaning product smells strongly 'fresh' but lists 'fragrance' as an ingredient, it almost certainly contains phthalates."}},
      {num:"Danger 02",title:"Quaternary Ammonium Compounds (QACs)",
       content:"QACs — found in most commercial disinfectants and antibacterial wipes — are increasingly linked to respiratory problems and antibiotic resistance. They linger on surfaces long after application.",
       list:["Found in: Disinfectant wipes, fabric softeners, 'antibacterial' products","Health risk: Asthma, respiratory irritation, antibiotic resistance","Look for: Benzalkonium chloride, alkyl dimethyl on ingredient lists","Safe alternative: Citric acid + tea tree enzyme disinfectants"],
       tip:{icon:"🔬",text:"<strong>Research:</strong> A 2024 study found QAC residues on 78% of household surfaces tested, even 24 hours after cleaning."}},
      {num:"Danger 03",title:"Chlorine Bleach & Its Toxic Reactions",
       content:"Bleach itself is harmful, but the real danger comes from mixing — chlorine gas forms when bleach contacts ammonia (found in many glass cleaners). This combination sends thousands to emergency rooms every year.",
       list:["Found in: Toilet cleaners, mould removers, whitening sprays","Health risk: Lung irritation, chlorine gas poisoning when mixed with ammonia","Never mix with: Vinegar, ammonia, hydrogen peroxide, rubbing alcohol","Safe alternative: Hydrogen peroxide-based or plant enzyme cleaners"],
       swaps:[{from:"Bleach toilet cleaner",to:"Citric acid fizzing tablet"},{from:"Bleach mould spray",to:"Tea tree enzyme spray"},{from:"Chlorine pool cleaner",to:"Hydrogen peroxide treatment"}]},
      {num:"Danger 04–12",title:"Ammonia, SLS, Triclosan & More",
       content:"The full list of chemicals to avoid is long — but knowing the most common ones puts you in the top 5% of informed consumers.",
       list:["Ammonia (glass cleaners) → Lung and eye irritant, especially for asthma sufferers","SLS / SLES (dish soaps) → Skin irritant, strips protective oils from surfaces","Triclosan (antibacterials) → Antibiotic resistance, endocrine disruption","2-Butoxyethanol (all-purpose) → Linked to blood disorders at high exposure","Formaldehyde (preservatives) → Known carcinogen — still found in some products","Phosphates (dishwasher tabs) → Aquatic ecosystem damage, algae blooms"],
       tip:{icon:"🛡️",text:"<strong>EcoShine Promise:</strong> Every product we use is EPA Safer Choice certified with all ingredients fully disclosed. Zero of the chemicals listed above appear in our formula."}}
    ],
    takeaways:["The word 'fragrance' on a label can legally mask dozens of synthetic chemicals","QACs in disinfectant wipes contribute to antibiotic resistance — avoid daily use","Never mix bleach with any other cleaning product — toxic gas can form instantly","EPA Safer Choice, EWG 'A' rated, or MADE SAFE certified are your gold standards","Plant-based enzyme cleaners achieve hospital-grade sanitization without any of these risks"],
    products:[
      {icon:"🧴",name:"Plant Enzyme Spray",desc:"EPA Safer Choice certified",badge:"A Rated"},
      {icon:"🌿",name:"Tea Tree Solution",desc:"Natural disinfectant",badge:"Non-Toxic"},
      {icon:"💧",name:"Citric Acid Tabs",desc:"Bleach-free sanitizer",badge:"Safe"},
      {icon:"🫧",name:"Castile Soap",desc:"SLS-free cleaning base",badge:"Natural"},
      {icon:"🍊",name:"Citrus Degreaser",desc:"Ammonia-free degreaser",badge:"Bio"},
      {icon:"🧽",name:"Microfibre System",desc:"Chemical-free dusting",badge:"Zero Waste"}
    ],
    ecoTip:"Check your cleaning products on the EWG Healthy Living app before buying. An 'A' rating means genuinely safe. Anything 'F' — replace it."
  },
  {
    id:2,title:"5 Powerful DIY Cleaners You Can Make With Lemons, Vinegar & Baking Soda",
    excerpt:"Skip the store — these kitchen staples can tackle grease, mold, and grime just as well as chemical cleaners, for pennies.",
    category:"DIY",date:"March 5, 2026",readTime:"4 min read",
    author:{initials:"TW",name:"Tom Wilson",role:"Eco Product Specialist · EcoShine"},
    heroImg:"../images/blog-card3.jpg",
    artImg:"../images/blog-card3.jpg",
    caption:"Five powerful DIY cleaning formulas using ingredients already in your kitchen",
    tags:["#DIYCleaning","#NaturalCleaners","#ZeroWaste","#KitchenHacks","#EcoLiving"],
    highlights:[
      {icon:"🍋",value:"5",label:"DIY Formulas"},
      {icon:"💰",value:"95%",label:"Cheaper than store"},
      {icon:"🌿",value:"0%",label:"Synthetic chemicals"},
      {icon:"⚡",value:"2 min",label:"To make each one"}
    ],
    lead:"Lemons, white vinegar, and baking soda have been used as cleaning agents for centuries — before the chemical industry convinced us we needed 'stronger' products. These three ingredients cover 90% of all household cleaning tasks when used correctly.",
    sections:[
      {num:"Formula 01",title:"All-Purpose Kitchen Spray",
       content:"This is the cleaner you'll reach for every single day. It cuts through grease, disinfects food-prep surfaces, and leaves a fresh citrus scent — completely naturally.",
       list:["1 cup white vinegar (5% acidity)","1 cup water","15 drops tea tree essential oil","10 drops lemon essential oil","Peel of 1 lemon (steep 2 weeks for stronger citrus)"],
       tip:{icon:"🍋",text:"<strong>How to make it:</strong> Combine in a reusable glass spray bottle. Shake before each use. Lasts 3–4 weeks. Works on countertops, stovetops & sinks. <em>Do not use on marble — vinegar is too acidic.</em>"}},
      {num:"Formula 02",title:"Baking Soda Paste — The Scrubbing Hero",
       content:"This thick paste tackles jobs that need physical scrubbing power — oven interiors, burned pots, grout, and bathroom tiles. Mildly abrasive without scratching most surfaces.",
       list:["4 tablespoons baking soda","2–3 tablespoons liquid castile soap","10 drops essential oil (lavender or peppermint)","Mix to a thick paste consistency"],
       tip:{icon:"🧽",text:"<strong>Best uses:</strong> Apply to oven walls, grout lines, bathroom tiles. Leave 10 minutes, scrub and wipe. Rivals commercial oven cleaners — without the toxic fumes."}},
      {num:"Formula 03",title:"Streak-Free Window & Mirror Spray",
       content:"Commercial window cleaners rely on ammonia for cutting power — but a simple vinegar and cornstarch combination works just as well and leaves zero streaks.",
       list:["2 cups water","½ cup white vinegar","¼ teaspoon cornstarch (prevents streaking — the secret ingredient!)","Shake well in a spray bottle before each use"],
       swaps:[{from:"Ammonia window cleaner",to:"Vinegar + cornstarch spray"},{from:"Paper towels",to:"Crumpled newspaper (zero streak)"},{from:"Synthetic wipes",to:"Dry microfibre cloth"}]},
      {num:"Formula 04–05",title:"Mould Killer & Natural Drain Unclogger",
       content:"Tea tree oil kills mould spores at the root — unlike bleach which only removes surface colour. The baking soda + vinegar drain treatment prevents blockages naturally.",
       list:["Mould spray: 2 cups water + 25 drops tea tree oil + 15 drops clove oil + 1 tsp vinegar — do NOT rinse","Drain: Pour ½ cup baking soda down drain, follow with ½ cup white vinegar","Cover drain and wait 20 minutes, flush with boiling water","Repeat monthly as maintenance — prevents most blockages entirely"],
       tip:{icon:"🌿",text:"<strong>Tea tree tip:</strong> This spray needs no rinsing — the tea tree oil continues working for hours and prevents mould regrowth for 2–4 weeks after application."}}
    ],
    takeaways:["White vinegar + tea tree spray covers daily kitchen and bathroom cleaning","Baking soda paste rivals any commercial oven or grout cleaner without fumes","Adding cornstarch to window spray eliminates streaks — the key secret","Tea tree oil kills mould spores — bleach only removes surface colour","Monthly drain treatment with baking soda + vinegar prevents costly blockages"],
    products:[
      {icon:"🍋",name:"Lemons",desc:"Citric acid + antibacterial",badge:"Natural"},
      {icon:"🧪",name:"White Vinegar",desc:"Acetic acid cleaner",badge:"Non-Toxic"},
      {icon:"🫙",name:"Baking Soda",desc:"Mild abrasive & deodorizer",badge:"Zero Waste"},
      {icon:"🌿",name:"Tea Tree Oil",desc:"Natural antifungal",badge:"Organic"},
      {icon:"🫧",name:"Castile Soap",desc:"Plant-based surfactant",badge:"Bio"},
      {icon:"🌺",name:"Essential Oils",desc:"Natural fragrance & function",badge:"Pure"}
    ],
    ecoTip:"Make a double batch of the all-purpose spray and keep one under every sink. You'll reach for it constantly — and save money every single day."
  },
  {
    id:3,title:"Zero-Waste Cleaning: How We Cut Our Plastic Waste by 90% in One Month",
    excerpt:"Switching to refillable bottles, bar soaps, and compostable cloths made a huge difference. Here's our step-by-step zero-waste transition.",
    category:"Eco Living",date:"February 28, 2026",readTime:"6 min read",
    author:{initials:"JA",name:"Jessica Adams",role:"Head of Eco Research · EcoShine"},
    heroImg:"../images/Zero-Waste.jpg",
    artImg:"../images/Zero-Waste.jpg",
    caption:"Zero-waste cleaning setup — everything reusable, refillable, or compostable",
    tags:["#ZeroWaste","#EcoLiving","#PlasticFree","#Sustainability","#GreenHome"],
    highlights:[
      {icon:"♻️",value:"90%",label:"Plastic reduced"},
      {icon:"📦",value:"28",label:"Bottles eliminated"},
      {icon:"💰",value:"£180",label:"Annual saving"},
      {icon:"🌍",value:"1 mo",label:"Full transition time"}
    ],
    lead:"Last January, our team documented what a complete zero-waste cleaning transition actually looks like — starting from 30+ plastic bottles and ending with a fully refillable, compostable system. Here's exactly what we did, what worked, and what didn't.",
    sections:[
      {num:"Week 01",title:"The Audit — Counting What You Have",
       content:"Before buying anything new, count every single cleaning product in the home. Most households are shocked by the number — the average UK home has 34 cleaning products generating around 28 empty plastic bottles per year.",
       list:["Count every cleaning product (include under sinks, garage, utility room)","Check the EWG Healthy Living app rating for each product","Anything rated D or F — bin it now and replace with safer alternatives","Note which products you use most frequently — these are your priority replacements"],
       tip:{icon:"📊",text:"<strong>Our audit result:</strong> We found 31 different products across the home. 14 contained ingredients rated 'High Concern' by EWG. All 14 were replaced in the first week."}},
      {num:"Week 02",title:"The Refillable Revolution",
       content:"The biggest plastic reduction comes from switching to concentrated refill systems. One 500ml bottle of concentrate can replace 10 standard spray bottles — and costs significantly less per use.",
       list:["Buy 6 high-quality glass spray bottles (last years, not months)","Choose one concentrated all-purpose eco cleaner to refill from","Switch dish soap to a concentrated bar (lasts 3x as long as liquid)","Replace laundry liquid with compostable laundry strips — no plastic at all"],
       tip:{icon:"💧",text:"<strong>Cost comparison:</strong> Conventional spray bottles cost ~£3.50 each and last 3 weeks. A concentrate sachet costs 60p and fills the same bottle. Annual saving per bottle: around £45."}},
      {num:"Week 03",title:"Replacing Paper & Disposables",
       content:"Paper towels, disposable wipes, and single-use sponges account for significant cleaning waste. The alternatives are cheaper, work better, and last for years.",
       list:["12 reusable microfibre cloths — colour-coded (kitchen, bathroom, glass, dusting)","Compostable dish sponges made from plant cellulose and loofah","Reusable bamboo paper towels that can be washed 100+ times","Natural coconut fibre scrubbing brush instead of plastic-handled brushes"],
       swaps:[{from:"Disposable sponge (weekly)",to:"Compostable cellulose sponge (monthly)"},{from:"Paper towels (1 roll/week)",to:"Washable bamboo roll (1 lasts 1 year)"},{from:"Plastic scrubbing brush",to:"Natural coconut fibre brush"}]},
      {num:"Week 04",title:"The Results",
       content:"After 30 days, from 28 bottles destined for landfill annually, we were down to 3 — a 90% reduction. Total transition cost: £87. Annual saving: £180.",
       list:["Plastic bottles eliminated per year: 25 (from 28 down to 3)","Cost of transition (one-time): £87 for glass bottles + starter products","Annual saving compared to before: £180 per year ongoing","Cleaning performance: Equal or better in 9 out of 10 tasks"],
       tip:{icon:"🏆",text:"<strong>What we got wrong:</strong> We tried to do everything in week 1. Transition room by room or product category by category — it's more manageable and you waste fewer existing products."}}
    ],
    takeaways:["Audit your current products before buying anything new — you may be shocked","Concentrated refill systems deliver the biggest plastic and cost reduction immediately","Reusable microfibre cloths replace paper towels AND most spray products for dusting","Laundry strips are the single best zero-waste swap — zero plastic, equal performance","The full transition costs around £87 and saves £180+ every year after that"],
    products:[
      {icon:"🍶",name:"Glass Spray Bottles",desc:"Reusable, durable, stylish",badge:"Zero Waste"},
      {icon:"🧴",name:"Concentrate Refills",desc:"1 bottle = 10 sprays",badge:"Eco"},
      {icon:"🧽",name:"Microfibre Cloths",desc:"Washable 500+ times",badge:"Reusable"},
      {icon:"📃",name:"Laundry Strips",desc:"Zero plastic packaging",badge:"Plastic Free"},
      {icon:"🌿",name:"Cellulose Sponges",desc:"Compostable, natural",badge:"Compostable"},
      {icon:"🥥",name:"Coconut Brush",desc:"Biodegradable bristles",badge:"Natural"}
    ],
    ecoTip:"Start your zero-waste journey with just one swap — laundry strips. They arrive plastic-free, perform as well as any liquid, and cost less per wash."
  },
  {
    id:4,title:"Pet-Safe Cleaning: The Complete Guide for Dog and Cat Owners",
    excerpt:"Common floor cleaners and disinfectants can be toxic to pets. Learn which products are truly safe and how to keep your furry family members protected.",
    category:"Health & Safety",date:"February 20, 2026",readTime:"5 min read",
    author:{initials:"LP",name:"Lisa Park",role:"Move-In Specialist · EcoShine"},
    heroImg:"../images/blog-card5.jpg",
    artImg:"../images/blog-card5.jpg",
    caption:"Keeping furry family members safe — pet-friendly cleaning that actually works",
    tags:["#PetSafe","#DogOwner","#CatOwner","#NonToxicCleaning","#PetHealth"],
    highlights:[
      {icon:"🐾",value:"67%",label:"Pet homes use unsafe cleaners"},
      {icon:"🐕",value:"12",label:"Chemicals toxic to dogs"},
      {icon:"🐈",value:"18",label:"Chemicals toxic to cats"},
      {icon:"🛡️",value:"100%",label:"EcoShine pet-safe certified"}
    ],
    lead:"Dogs and cats spend far more time on the floor than we do — and they lick their paws. The residue left by conventional floor cleaners is absorbed through paw pads and ingested during grooming. For small animals especially, this daily low-level chemical exposure adds up.",
    sections:[
      {num:"Risk 01",title:"The Floor Problem — Your Pet's Main Exposure Route",
       content:"Most conventional floor cleaners leave a chemical residue film that pets walk through, absorb through their paws, and lick off during grooming. Pine oil, phenols, and QACs are among the most dangerous.",
       list:["Pine oil cleaners → Highly toxic to cats — can cause liver failure","Phenol-based disinfectants (Dettol-type) → Toxic to cats and small dogs","QAC disinfectants → Linked to respiratory issues in pets","Bleach residue on floors → Causes chemical burns to paw pads"],
       tip:{icon:"🐾",text:"<strong>Safe alternative:</strong> Plant enzyme floor cleaners (EWG A-rated) leave zero residue and are safe for pets to walk on immediately after mopping."}},
      {num:"Risk 02",title:"Cats — Extra Vulnerable",
       content:"Cats are uniquely vulnerable because they groom extensively, lack a liver enzyme to detoxify many aromatic compounds, and spend significant time on cleaned surfaces.",
       list:["Never use Pine-Sol, Fabuloso, or phenol-based cleaners near cats","Essential oils to avoid around cats: tea tree, eucalyptus, peppermint, citrus","Many 'natural' diffuser oils are toxic to cats — lavender and frankincense only","Let all cleaned surfaces dry completely before allowing cats back in"],
       tip:{icon:"🐈",text:"<strong>Cat owners note:</strong> Even 'natural' essential oil diffusers can harm cats. Stick to unscented products in rooms where cats sleep."}},
      {num:"Risk 03",title:"Dogs & Building a Safe Routine",
       content:"Dogs handle more chemical exposure than cats due to their liver enzymes — but are still at risk, particularly small breeds and puppies.",
       list:["Avoid xylene and benzene-containing products near dogs","Laundry detergent residue in bedding → skin irritation and respiratory issues","Carpet freshener powders → Inhaled and causes lung irritation in dogs","Use only EPA Safer Choice or EWG 'A' rated cleaning products throughout"],
       swaps:[{from:"Pine floor cleaner",to:"Plant enzyme floor wash"},{from:"Bleach disinfectant",to:"Hydrogen peroxide + citric acid"},{from:"Carpet freshener powder",to:"Baking soda (vacuum after 15 mins)"}]}
    ],
    takeaways:["Pine oil and phenol-based cleaners can cause liver failure in cats","Let all cleaned surfaces dry completely before letting pets back in — 30 mins minimum","Essential oil diffusers can harm cats — stick to lavender and frankincense only","Baking soda on carpets is safe for pets; commercial carpet fresheners are not","EPA Safer Choice certified products are verified safe for pets at normal use concentrations"],
    products:[
      {icon:"🌿",name:"Plant Enzyme Cleaner",desc:"Zero phenols, pet-safe",badge:"Pet Safe"},
      {icon:"🫧",name:"Castile Soap",desc:"Safe for food bowls",badge:"Non-Toxic"},
      {icon:"💧",name:"Citric Disinfectant",desc:"Kills germs, safe for pets",badge:"EPA A"},
      {icon:"🧽",name:"Microfibre Cloths",desc:"No chemical residue",badge:"Zero Residue"},
      {icon:"🫙",name:"Baking Soda",desc:"Safe carpet deodorizer",badge:"Natural"},
      {icon:"🧺",name:"Enzyme Laundry Strip",desc:"Safe for pet bedding",badge:"Fragrance Free"}
    ],
    ecoTip:"If you have cats, go through your cleaning cupboard today and remove anything with 'pine' or 'phenol' in the ingredients. These are genuinely dangerous to cats."
  },
  {
    id:5,title:"EcoShine Services Achieves B Corp Certification — Here's What It Means for You",
    excerpt:"We're proud to announce our B Corp certification, recognizing our commitment to environmental standards, worker welfare, and community impact.",
    category:"News",date:"February 14, 2026",readTime:"3 min read",
    author:{initials:"GN",name:"EcoShine Team",role:"EcoShine Services HQ"},
    heroImg:"../images/blog-card6.jpg",
    artImg:"../images/blog-card6.jpg",
    caption:"EcoShine team celebrating B Corp certification — a milestone for eco-business",
    tags:["#BCorp","#EcoShineNews","#Sustainability","#SocialImpact","#GreenBusiness"],
    highlights:[
      {icon:"🏆",value:"B Corp",label:"Certified 2026"},
      {icon:"📊",value:"91.2",label:"Impact score (min 80)"},
      {icon:"🌍",value:"Top 5%",label:"Cleaning industry"},
      {icon:"👥",value:"100%",label:"Living wage staff"}
    ],
    lead:"After 18 months of rigorous assessment, documentation, and third-party verification, EcoShine Services is now an officially certified B Corporation. This is the most significant milestone in our company's history — and here's exactly what it means for you.",
    sections:[
      {num:"What",title:"What is B Corp Certification?",
       content:"B Corp certification is awarded by B Lab to companies that meet the highest verified standards of social and environmental performance, transparency, and legal accountability across five areas.",
       list:["Environment: Products, waste, water use, energy, and supply chain impact","Workers: Wages, benefits, training, health, safety, and job satisfaction","Community: Charitable giving, volunteering, and local impact","Customers: Data protection, product safety, and transparent labelling","Governance: Mission, ethics, and transparent company reporting"],
       tip:{icon:"🔬",text:"<strong>How hard is it?</strong> Of every 1,000 companies that apply, fewer than 250 achieve certification. Assessment involves thousands of data points and an in-person audit."}},
      {num:"Score",title:"Our Score — 91.2 / 200 (Minimum: 80)",
       content:"Our B Impact Score of 91.2 places us in the top 5% of cleaning businesses globally and above the median score of all certified B Corps.",
       list:["Environment: 28.4 / 40 — top marks for plant-based product use and zero-waste packaging","Workers: 21.6 / 40 — 100% living wage, health cover, flexible hours for all staff","Community: 18.2 / 20 — 1% revenue donated, tree-planting programme, local hiring","Customers: 15.1 / 20 — full ingredient transparency, satisfaction guarantee"],
       tip:{icon:"🌿",text:"<strong>What this means for you:</strong> Every booking directly contributes to our community giving programme, tree planting, and living wage commitments."}},
      {num:"Impact",title:"What Changes for Clients",
       content:"For most things — nothing changes. The service quality, products, and team remain the same. What changes is the independent verification that every claim we make is real and auditable.",
       list:["Annual public impact report — see exactly how your bookings create social good","Verified ingredient transparency — every product ingredient is now publicly listed","Worker welfare guarantee — every cleaner is paid living wage, no exceptions","Environmental audit — annual third-party review of our product and waste impact"],
       swaps:[{from:"Our word on eco standards",to:"Third-party verified annually"},{from:"Internal product safety claims",to:"Independent NABL lab testing"},{from:"Informal community giving",to:"Legally committed 1% revenue pledge"}]}
    ],
    takeaways:["B Corp certification requires verified evidence — it's the gold standard for ethical business","Our 91.2 score places EcoShine in the top 5% of cleaning companies globally","Every booking you make directly funds living wages, community giving, and tree planting","Our annual impact report is now published publicly — full transparency on every metric","Ingredient transparency is now legally required of us — full disclosure on everything we use"],
    products:[
      {icon:"🏆",name:"B Corp Certified",desc:"91.2 impact score",badge:"Verified"},
      {icon:"🌿",name:"Plant-Based Only",desc:"100% ingredient disclosed",badge:"Transparent"},
      {icon:"👷",name:"Living Wage",desc:"All staff, no exceptions",badge:"Fair"},
      {icon:"🌳",name:"Tree Planting",desc:"1 tree per booking",badge:"Impact"},
      {icon:"📊",name:"Annual Report",desc:"Public impact data",badge:"Open"},
      {icon:"🔬",name:"Lab Tested",desc:"NABL accredited testing",badge:"Verified"}
    ],
    ecoTip:"When choosing any service company, look for the B Corp logo. It's the only certification that verifies social AND environmental impact with independent auditing."
  },
  {
    id:6,title:"Water-Wise Cleaning: How to Clean Your Whole Home Using 50% Less Water",
    excerpt:"Smart cleaning techniques and concentrated formulas can dramatically reduce water usage without sacrificing cleanliness.",
    category:"Eco Living",date:"January 24, 2026",readTime:"6 min read",
    author:{initials:"JA",name:"Jessica Adams",role:"Head of Eco Research · EcoShine"},
    heroImg:"../images/blog-card7.jpg",
    artImg:"../images/blog-card7.jpg",
    caption:"Water-wise cleaning techniques — maximum results with minimal water use",
    tags:["#WaterWise","#EcoLiving","#WaterConservation","#GreenCleaning","#Sustainability"],
    highlights:[
      {icon:"💧",value:"50%",label:"Water reduction possible"},
      {icon:"🏠",value:"380L",label:"Avg water saved per year"},
      {icon:"💰",value:"£45",label:"Annual water bill saving"},
      {icon:"🌍",value:"6",label:"Techniques covered"}
    ],
    lead:"The average UK household uses 40 litres of water just on cleaning tasks every week. With the right techniques and concentrated formulas, most people can cut this in half without any reduction in cleanliness.",
    sections:[
      {num:"Technique 01",title:"Two-Bucket Mopping — The Biggest Single Win",
       content:"Traditional mopping with a single bucket means you're mopping with increasingly dirty water — pushing grime around rather than removing it, and using far more water trying to compensate.",
       list:["Bucket 1: Clean water + concentrated floor cleaner (a few drops only)","Bucket 2: Plain rinse water for wringing your mop","Dip mop in bucket 1, mop 2–3 square metres, wring in bucket 2, repeat","You'll use 40% less water AND clean more effectively — floors dry faster too"],
       tip:{icon:"💧",text:"<strong>Result:</strong> Traditional single-bucket mopping uses 8–10 litres per session. Two-bucket technique uses 4–5 litres and cleans better. Annual saving: approximately 200 litres."}},
      {num:"Technique 02",title:"Microfibre — The Water Eliminator",
       content:"Microfibre cloths work by physically trapping dirt in their fibres rather than relying on chemical action and water. A damp microfibre cloth cleans most surfaces with no spray at all.",
       list:["Dampen a microfibre cloth — just damp, not wet — for countertops","No spray needed for light daily cleaning — the microfibre does the work","Use dry microfibre for dusting — it electrostatically attracts dust without water","Wash cloths in cold water at 30°C — hot water damages the microfibre structure"],
       tip:{icon:"🧽",text:"<strong>How much does this save?</strong> Replacing daily spraying with damp microfibre eliminates approximately 2 sprays (40ml) per surface per session. Across a typical home: 3–4 litres saved per week."}},
      {num:"Techniques 03–06",title:"Concentrates, Spray-and-Leave, Cold Laundry & More",
       content:"Four more techniques that together cut another 80+ litres per month from your cleaning water use.",
       list:["Concentrated formulas: Add your own water — 100ml sachet makes 750ml spray","Spray-and-leave: Apply cleaner and leave 5–10 minutes → less scrubbing, less rinsing","Cold laundry: 90% of washing machine energy heats water — 30°C works for 95% of loads","Full dishwasher loads: Running half-full uses the same water as full — always wait","Soaking power: Soak burned pots 20 mins instead of scrubbing under running tap"],
       swaps:[{from:"750ml spray (95% water)",to:"Concentrate + tap water"},{from:"New bottle each time",to:"Same glass bottle, refill"},{from:"Excess rinsing needed",to:"Plant enzymes need no rinsing"}]}
    ],
    takeaways:["Two-bucket mopping uses 40% less water AND gives a better result","Damp microfibre cloths clean most surfaces without any spray — litres saved per week","Concentrated cleaning formulas let you add your own water at the right dilution","Cold laundry (30°C) cleans 95% of loads as well as hot while using 90% less energy","Spray-and-leave technique reduces rinsing need and cuts water use per surface by half"],
    products:[
      {icon:"🧽",name:"Microfibre Set",desc:"8-pack, colour-coded",badge:"Water Free"},
      {icon:"🪣",name:"Two-Bucket System",desc:"Clean + rinse method",badge:"Eco"},
      {icon:"🧴",name:"Concentrate Sachet",desc:"Add your own water",badge:"Efficient"},
      {icon:"🌡️",name:"Cold Wash Strips",desc:"Works at 20–30°C",badge:"Energy Save"},
      {icon:"🍶",name:"Glass Spray Bottle",desc:"Refillable, 750ml",badge:"Reusable"},
      {icon:"💧",name:"Enzyme Spray",desc:"No-rinse formula",badge:"Zero Rinse"}
    ],
    ecoTip:"Switch your laundry to 30°C today. You'll save around £40 per year on energy bills, extend the life of your clothes, and reduce microplastic shedding. Zero sacrifice, instant win."
  },
  {
    id:7,title:"Natural Air Fresheners: 8 Ways to Make Your Home Smell Amazing Without Synthetic Fragrances",
    excerpt:"Synthetic air fresheners release VOCs that pollute indoor air. Try these natural alternatives using essential oils, herbs, and citrus.",
    category:"DIY",date:"February 1, 2026",readTime:"4 min read",
    author:{initials:"TW",name:"Tom Wilson",role:"Eco Product Specialist · EcoShine"},
    heroImg:"../images/blog-card8.jpg",
    artImg:"../images/blog-card8.jpg",
    caption:"Natural ingredients that make your home smell incredible — no synthetic chemicals needed",
    tags:["#NaturalFragrance","#AirFreshener","#EssentialOils","#DIYHome","#IndoorAirQuality"],
    highlights:[
      {icon:"🌸",value:"8",label:"Natural methods"},
      {icon:"🌬️",value:"0",label:"VOCs released"},
      {icon:"💰",value:"90%",label:"Cheaper than sprays"},
      {icon:"🏡",value:"24hr",label:"Lasting freshness"}
    ],
    lead:"The average aerosol air freshener contains 20+ synthetic fragrance chemicals — including benzene, formaldehyde, and phthalates — that turn your indoor air into a chemical cocktail. Here are 8 genuinely natural alternatives.",
    sections:[
      {num:"Methods 01–02",title:"Simmer Pots & Beeswax Candles",
       content:"Simmer pots are the oldest air freshening technique in the world — and still one of the most effective. Beeswax candles are one of the few candles that actually improve air quality while burning.",
       list:["Simmer pot: Fill a saucepan with water, citrus peel, cinnamon sticks, cloves, rosemary — simmer on low heat","Best combination: Orange peel + cinnamon + star anise (warm, inviting scent)","Summer version: Lemon + mint + lavender (fresh, clean scent)","Beeswax candles: Release negative ions when burning, attracting positively-charged pollutant particles","Unlike paraffin candles, beeswax produces no toxic soot or synthetic fragrance"],
       tip:{icon:"🕯️",text:"<strong>Beeswax science:</strong> Burning genuine beeswax candles measurably reduces dust, mould spores, and pet dander in the air — the only candle that actively improves indoor air quality."}},
      {num:"Methods 03–04",title:"Essential Oil Diffusers & Reed Diffusers",
       content:"Electric ultrasonic diffusers disperse pure essential oil molecules into the air without heat. Reed diffusers in natural carrier oil work passively 24 hours a day.",
       list:["Best for freshness: Lemon, peppermint, eucalyptus, bergamot","Best for relaxation: Lavender, frankincense, cedarwood, ylang ylang","Best antibacterial: Tea tree, thyme, oregano (use sparingly)","DIY reed diffuser: 50ml sweet almond oil + 15 drops essential oil + bamboo reeds in glass bottle"],
       tip:{icon:"🌸",text:"<strong>Cat owners:</strong> Avoid diffusing tea tree, eucalyptus, citrus, or peppermint near cats. Stick to lavender and frankincense only in cat households."}},
      {num:"Methods 05–08",title:"Fresh Herbs, Activated Charcoal, Citrus Hack & Linen Spray",
       content:"Living herb plants do double duty — they look beautiful, smell wonderful, and several species genuinely filter indoor air. Activated charcoal absorbs odours at the source.",
       list:["Best herb plants: Rosemary, lavender, mint, lemon balm, jasmine","Activated charcoal bags: Place in shoes, fridge, wardrobe, or any musty space","Recharge charcoal bags monthly by placing in direct sunlight for 1 hour","Citrus peel in oven (low heat, 30 mins): Fills entire home with fresh citrus naturally","DIY linen spray: 100ml water + 50ml vodka + 20 drops lavender oil","Spray on pillows and sheets — the alcohol evaporates instantly, leaving only lavender"],
       swaps:[{from:"Aerosol air freshener spray",to:"Essential oil diffuser"},{from:"Plug-in air freshener",to:"Beeswax candle"},{from:"Synthetic fabric spray",to:"Lavender + vodka linen spray"}]}
    ],
    takeaways:["Synthetic air fresheners introduce benzene, formaldehyde, and phthalates into your indoor air","Simmer pots (citrus + spices + water) fill an entire home with natural scent immediately","Beeswax candles are the only candles that actively improve air quality when burning","Activated charcoal absorbs odours at the source — it doesn't mask them, it eliminates them","DIY linen spray (water + vodka + lavender) transforms bedrooms for pennies per month"],
    products:[
      {icon:"🫙",name:"Beeswax Candles",desc:"Purifies while scenting",badge:"Air Purifying"},
      {icon:"💧",name:"Ultrasonic Diffuser",desc:"Cold-mist essential oils",badge:"No Heat"},
      {icon:"🌿",name:"Activated Charcoal",desc:"Absorbs odours + VOCs",badge:"Natural"},
      {icon:"🌸",name:"Lavender Oil",desc:"Pure, therapeutic grade",badge:"Organic"},
      {icon:"🍋",name:"Citrus Blend",desc:"Lemon + orange + bergamot",badge:"Fresh"},
      {icon:"🌾",name:"Reed Diffuser Set",desc:"Bamboo reeds + carrier oil",badge:"Passive"}
    ],
    ecoTip:"Put a simmer pot on right now — orange peel, two cinnamon sticks, and three cloves in water on your lowest hob setting. Your home will smell incredible within 15 minutes and cost less than 10p."
  }
];


const html = document.documentElement;
const bdBtn = document.getElementById('bdThemeBtn');
const bdSaved = localStorage.getItem('bdTheme');
if (bdSaved) html.setAttribute('data-theme', bdSaved);
else if (window.matchMedia('(prefers-color-scheme: dark)').matches) html.setAttribute('data-theme','dark');
if (bdBtn) {
  bdBtn.addEventListener('click', () => {
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('bdTheme', next);
    bdBtn.style.transform = 'scale(1.2) rotate(20deg)';
    setTimeout(() => bdBtn.style.transform = '', 300);
  });
}


const bdBar = document.getElementById('bdReadProgress');
if (bdBar) {
  window.addEventListener('scroll', () => {
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    bdBar.style.width = Math.min((window.scrollY / docH) * 100, 100) + '%';
  });
}


let currentBlog = 0;


function renderBlog(id) {
  const b = BLOGS[id];
  if (!b) return;
  currentBlog = id;

 
  document.getElementById('heroBg').style.backgroundImage = `url('${b.heroImg}')`;
  document.getElementById('bcTitle').textContent = b.title.substring(0,40) + '...';
  document.getElementById('heroCat').textContent = b.category;
  document.getElementById('heroDate').textContent = b.date;
  document.getElementById('heroRead').textContent = b.readTime;
  document.getElementById('heroTitle').textContent = b.title;
  document.getElementById('heroExcerpt').textContent = b.excerpt;
  document.getElementById('haAvatar').textContent = b.author.initials;
  document.getElementById('haName').textContent = b.author.name;
  document.getElementById('haRole').textContent = b.author.role;

 
  document.getElementById('artImg').style.backgroundImage = `url('${b.artImg}')`;
  document.getElementById('artCaption').textContent = b.caption;

  
  document.getElementById('artIntro').innerHTML = `<p class="bd-lead">${b.lead}</p>`;

  
  document.getElementById('artHighlights').innerHTML = b.highlights.map(h => `
    <div class="bd-hl-item">
      <div class="bd-hl-icon">${h.icon}</div>
      <strong>${h.value}</strong>
      <span>${h.label}</span>
    </div>`).join('');

  
  document.getElementById('artBody').innerHTML = b.sections.map((s,i) => `
    <div class="bd-ab-section" style="animation-delay:${i*0.1}s">
      <div class="bd-ab-num">${s.num}</div>
      <h3>${s.title}</h3>
      <p>${s.content}</p>
      ${s.list ? `<ul class="bd-ab-list">${s.list.map(l=>`<li>${l}</li>`).join('')}</ul>` : ''}
      ${s.tip ? `<div class="bd-ab-tip"><div class="bd-ab-tip-icon">${s.tip.icon}</div><p>${s.tip.text}</p></div>` : ''}
      ${s.swaps ? `
        <div class="bd-swap-table">
          <div class="bd-st-head"><span>Instead of</span><span>→</span><span>Use This</span></div>
          ${s.swaps.map(sw=>`
            <div class="bd-st-row">
              <span>${sw.from}</span>
              <span class="bd-st-arrow">→</span>
              <span>${sw.to}</span>
            </div>`).join('')}
        </div>` : ''}
    </div>`).join('');


  document.getElementById('artTakeaways').innerHTML = `
    <div class="bd-at-header"><div class="bd-at-icon">✅</div><h3>Key Takeaways</h3></div>
    <div class="bd-at-list">
      ${b.takeaways.map((t,i)=>`
        <div class="bd-at-item"><div class="bd-at-num">${i+1}</div><span>${t}</span></div>`).join('')}
    </div>`;


  document.getElementById('artProducts').innerHTML = `
    <div class="bd-ap-label">Products We Recommend</div>
    <h3 class="bd-ap-title">EcoShine Approved Products</h3>
    <div class="bd-ap-grid">
      ${b.products.map(p=>`
        <div class="bd-ap-card">
          <div class="bd-ap-icon">${p.icon}</div>
          <strong>${p.name}</strong>
          <span>${p.desc}</span>
          <div class="bd-ap-badge">${p.badge}</div>
        </div>`).join('')}
    </div>`;

  
  document.getElementById('artTags').innerHTML = `
    <span>Tags:</span>${b.tags.map(t=>`<a href="#">${t}</a>`).join('')}`;


  document.getElementById('artAuthorCard').innerHTML = `
    <div class="bd-aac-avatar" style="background:var(--bd-brand)">${b.author.initials}</div>
    <div class="bd-aac-info">
      <strong>${b.author.name}</strong>
      <span>${b.author.role}</span>
      <p>A dedicated member of the EcoShine team passionate about sustainable living, eco-friendly cleaning, and helping families create healthier homes.</p>
    </div>`;


  document.getElementById('anDots').innerHTML = BLOGS.map((_,i)=>
    `<div class="bd-an-dot ${i===id?'bd-active':''}" onclick="bdSwitchBlog(${i})"></div>`).join('');

  
  document.getElementById('tocNav').innerHTML = b.sections.map(s=>
    `<a href="#" class="bd-toc-link">${s.title.substring(0,38)}${s.title.length>38?'...':''}</a>`).join('');


  const others = BLOGS.filter(x=>x.id!==id).slice(0,3);
  document.getElementById('relatedPosts').innerHTML = others.map(r=>`
    <div class="bd-rp-item" onclick="bdSwitchBlog(${r.id})">
      <div class="bd-rp-icon">${r.highlights[0].icon}</div>
      <div class="bd-rp-info">
        <strong>${r.title.substring(0,55)}${r.title.length>55?'...':''}</strong>
        <span>${r.date} · ${r.readTime}</span>
      </div>
    </div>`).join('');


  const tipEl = document.getElementById('ecoTipText');
  if (tipEl) tipEl.textContent = b.ecoTip;


  document.getElementById('maGrid').innerHTML = BLOGS.filter(x=>x.id!==id).slice(0,6).map(r=>`
    <div class="bd-ma-card" onclick="bdSwitchBlog(${r.id})">
      <div class="bd-ma-img" style="background-image:url('${r.artImg}')"></div>
      <div class="bd-ma-body">
        <div class="bd-ma-cat">${r.category}</div>
        <h3>${r.title}</h3>
        <p>${r.excerpt.substring(0,90)}...</p>
        <div class="bd-ma-meta">
          <span>${r.date}</span>
          <span class="bd-ma-read">${r.readTime} →</span>
        </div>
      </div>
    </div>`).join('');

  
  document.querySelectorAll('.bd-tab').forEach(t=>{
    t.classList.toggle('active', parseInt(t.dataset.id)===id);
  });

  
  setTimeout(() => {
    document.querySelectorAll('.bd-reveal').forEach(el => {
      el.classList.remove('bd-visible');
    });
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('bd-visible'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.bd-reveal').forEach(el => obs.observe(el));
  }, 100);
}

function bdSwitchBlog(id) {
  renderBlog(id);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


document.querySelectorAll('.bd-tab').forEach(tab => {
  tab.addEventListener('click', () => bdSwitchBlog(parseInt(tab.dataset.id)));
});


const prevBtn = document.getElementById('prevArticle');
const nextBtn = document.getElementById('nextArticle');
if (prevBtn) prevBtn.addEventListener('click', () => bdSwitchBlog((currentBlog - 1 + BLOGS.length) % BLOGS.length));
if (nextBtn) nextBtn.addEventListener('click', () => bdSwitchBlog((currentBlog + 1) % BLOGS.length));


window.bdShareArticle = function() {
  navigator.clipboard.writeText(window.location.href).catch(()=>{});
  const btn = document.querySelector('.bd-share-btn');
  if (btn) { btn.textContent = '✓ Copied!'; setTimeout(() => btn.textContent = '↗ Share', 2000); }
};


window.bdLikeArticle = function(btn) {
  const span = btn.querySelector('.bd-like-count');
  const liked = btn.classList.contains('bd-liked');
  span.textContent = liked ? 0 : 1;
  btn.classList.toggle('bd-liked');
};


window.bdNlSubscribe = function() {
  const inp = document.getElementById('nlEmail');
  if (!inp || !inp.value.includes('@')) return;
  const btn = document.querySelector('.bd-nl-btn');
  btn.textContent = '✓ Subscribed!';
  btn.style.background = '#259e83';
  inp.value = '';
  setTimeout(() => { btn.textContent = 'Subscribe Free 🌿'; btn.style.background = ''; }, 3000);
};


window.bdSubscribe = function() {
  const inp = document.getElementById('subEmail');
  if (!inp || !inp.value.includes('@')) return;
  const btn = inp.nextElementSibling;
  btn.textContent = "✓ You're in!";
  inp.value = '';
  setTimeout(() => btn.textContent = 'Subscribe 🌿', 3000);
};


renderBlog(0);
setTimeout(() => {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('bd-visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.bd-reveal').forEach(el => obs.observe(el));
}, 200);










document.addEventListener("DOMContentLoaded", () => {


  if (!document.querySelector(".bd-tab")) return;

  const params = new URLSearchParams(window.location.search);
  const blogParam = params.get("blog");

  const blogMap = {
    eco: 0,
    toxins: 1,
    diy: 2,
    zero: 3,
    pet: 4,
    bcorp: 5,
    water: 6,
    air: 7
  };

  if (blogParam && blogMap[blogParam] !== undefined) {
    const index = blogMap[blogParam];

    const tab = document.querySelector(`.bd-tab[data-id="${index}"]`);
    if (tab) tab.click();
  }

});