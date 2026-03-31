
document.addEventListener("DOMContentLoaded", () => {

  const html = document.documentElement;
  const themeBtn = document.getElementById("themeToggle");


  const savedTheme = localStorage.getItem("theme") || "light";


  html.setAttribute("data-theme", savedTheme);


  if (themeBtn) {
    themeBtn.textContent = savedTheme === "dark" ? "☀️" : "🌙";
  }


  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const current = html.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";

      html.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);

      themeBtn.textContent = next === "dark" ? "☀️" : "🌙";
    });
  }

});



const SERVICES = [
  {
    id: 0,
    name: "Regular Home Cleaning",
    category: "Home Cleaning",
    badge: "Popular",
    badgeColor: "#36b89a",
    duration: "2–3 hrs",
    price: "$89",
    priceNum: "89",
    icon: "🏠",
heroImg: "../images/Regular Results-3.jpg",
    gallery: [
      "../images/Regular Results-2.jpg",
      "../images/Regular Results-3.jpg",
      "../images/Pricing-2.jpg",
    ],

    overview: "Our Regular Home Cleaning is designed to keep your home consistently fresh and hygienic. Using only EPA-certified plant-based products, our trained eco-cleaners follow a detailed 40-point checklist across every room — ensuring nothing is missed and every surface is left spotless, naturally fragrant, and 99.9% germ-free. Perfect for weekly, bi-weekly or monthly schedules.",
    checklist: [
      { title: "All Rooms Vacuumed", desc: "Carpets, rugs, hardwood and tile floors" },
      { title: "Dusting Top-to-Bottom", desc: "Shelves, frames, ceiling fans & vents" },
      { title: "Bathroom Sanitization", desc: "Toilets, sinks, mirrors and surfaces" },
      { title: "Kitchen Wipe-Down", desc: "Countertops, stovetop & appliance exteriors" },
      { title: "Floors Mopped", desc: "All hard floors mopped with eco cleaner" },
      { title: "Trash Removed", desc: "All bins emptied & relined" },
      { title: "Mirrors & Glass", desc: "Streak-free clean with plant-based formula" },
      { title: "Eco-Certified Products", desc: "100% plant-based, no synthetic chemicals" },
    ],
    process: [
      { title: "Arrival & Assessment", desc: "Your EcoShine cleaner arrives, introduces themselves and does a quick walkthrough of your home to note any special areas." },
      { title: "Top-Down Dusting", desc: "We always work from top to bottom — ceiling fans, shelves, furniture — so fallen dust is then captured in the next step." },
      { title: "Bathroom & Kitchen", desc: "High-touch areas are sanitized with our enzyme-based formula that kills 99.9% of germs without harsh chemicals." },
      { title: "Vacuuming & Mopping", desc: "HEPA-filtration vacuuming followed by plant-based floor mopping leaves your floors gleaming." },
      { title: "Final Quality Check", desc: "We do a full room-by-room inspection before leaving to guarantee everything meets our 40-point standard." },
    ],
    ecoProducts: [
      { icon: "🧴", name: "All-Purpose Spray", desc: "Plant enzyme formula, kills 99.9% germs", badge: "EPA Certified" },
      { icon: "🫧", name: "Floor Cleaner", desc: "Coconut-derived surfactants, safe on all floors", badge: "Bio-Preferred" },
      { icon: "🧽", name: "Microfibre Cloths", desc: "Reusable, colour-coded to avoid cross-contamination", badge: "Zero Waste" },
      { icon: "🌿", name: "Bathroom Sanitizer", desc: "Citric acid + tea tree — no bleach needed", badge: "Non-Toxic" },
      { icon: "💧", name: "Glass Cleaner", desc: "Alcohol-free, streak-free plant formula", badge: "Allergen Free" },
      { icon: "🌬️", name: "Air Freshener", desc: "Pure essential oils — no synthetic fragrance", badge: "Natural" },
    ],
    expectations: [
      { icon: "⏰", title: "On-Time Arrival", desc: "Your cleaner arrives within a 30-minute window and notifies you 15 mins before." },
      { icon: "🪪", title: "ID Verified Cleaner", desc: "All cleaners pass a 7-step background check and carry photo ID." },
      { icon: "📋", title: "40-Point Checklist", desc: "Every task is checked off — you receive a digital completion report." },
      { icon: "📸", title: "After Photos", desc: "We photograph key areas after cleaning so you can see the results even if you're away." },
    ],
    addons: [
      { icon: "🪟", name: "Window Washing", desc: "Interior and exterior windows cleaned streak-free", price: "+$15", badge: "Popular" },
      { icon: "🛏️", name: "Laundry Folding", desc: "Wash, dry and neatly fold one load of laundry", price: "+$20", badge: "" },
      { icon: "🌱", name: "Eco Deodorize", desc: "Natural enzyme odour neutralizer applied throughout", price: "+$10", badge: "Eco" },
      { icon: "🧺", name: "Inside Oven", desc: "Full oven interior deep-clean with baking soda paste", price: "+$25", badge: "" },
    ],
    faqs: [
      { q: "Do I need to be home during the cleaning?", a: "Not at all! Most clients give us a spare key or door code. All our cleaners are fully insured and background-checked. We'll send you photos when complete." },
      { q: "What if I'm not satisfied with the results?", a: "We offer a 100% satisfaction guarantee. If you're not happy, contact us within 24 hours and we'll return to re-clean any missed areas completely free of charge." },
      { q: "Do you bring your own products and equipment?", a: "Yes — we arrive fully equipped with all eco-certified products, HEPA vacuums, and reusable microfibre cloths. You don't need to provide anything." },
      { q: "How do I reschedule or cancel?", a: "You can cancel or reschedule for free up to 24 hours before your appointment via our app, website, or phone. No penalties, no fuss." },
    ],
  },
  {
    id: 1,
    name: "Deep Cleaning",
    category: "Home Cleaning",
    badge: "Best Value",
    badgeColor: "#f59e0b",
    duration: "3–6 hrs",
    price: "$149",
    priceNum: "149",
    icon: "✨",
    heroImg: "../images/Deep Clean-1.jpg",
    gallery: [
      "../images/Deep Clean-2.jpg",
      "../images/Deep Clean-3.jpg",
      "../images/Deep Clean-1.jpg",
    ],
    overview: "The Deep Clean is our most thorough residential service — a top-to-bottom reset of your entire home. We go far beyond the surface, cleaning inside appliances, scrubbing grout, wiping baseboards, and tackling every area that standard cleaning doesn't reach. Ideal for first-time clients, post-party recovery, seasonal cleans, or whenever your home needs a full restoration.",
    checklist: [
      { title: "Everything in Regular Clean", desc: "Full standard checklist included" },
      { title: "Inside Oven & Refrigerator", desc: "Full interior clean of both appliances" },
      { title: "Grout Scrubbing", desc: "Tiles and grout lines hand-scrubbed" },
      { title: "Baseboards & Door Frames", desc: "Wiped down throughout the home" },
      { title: "Ceiling Fans & Light Fixtures", desc: "Dusted and wiped clean" },
      { title: "Inside Kitchen Cabinets", desc: "Cabinet interiors emptied and wiped" },
      { title: "Window Sills & Tracks", desc: "Vacuumed and wiped free of grime" },
      { title: "50-Point Quality Checklist", desc: "Documented and photo-verified" },
    ],
    process: [
      { title: "Pre-Clean Consultation", desc: "We call you the day before to confirm priorities and any specific areas you'd like us to focus on." },
      { title: "Appliance Deep-Clean", desc: "Oven interior, refrigerator, and microwave are fully cleaned with our degreasing plant formula." },
      { title: "Grout & Tile Restoration", desc: "Bathroom and kitchen tiles are scrubbed by hand with citric-based cleaners that dissolve mineral build-up." },
      { title: "Fixtures & Fittings", desc: "Light switches, door handles, skirting boards, and vents are all wiped down meticulously." },
      { title: "Full Deep Vacuum & Mop", desc: "HEPA vacuuming under furniture and in corners followed by a hot water plant-formula mop." },
      { title: "Documented Completion", desc: "A 50-point digital checklist is completed and photos are sent to you upon finishing." },
    ],
    ecoProducts: [
      { icon: "🧴", name: "Heavy Degreaser", desc: "Orange-peel d-limonene formula, cuts grease instantly", badge: "Bio-Preferred" },
      { icon: "🍋", name: "Citric Acid Cleaner", desc: "Descales grout and tiles without fumes", badge: "Non-Toxic" },
      { icon: "🧽", name: "Abrasive Pads", desc: "Biodegradable, compostable scrub pads", badge: "Zero Waste" },
      { icon: "🌿", name: "Enzyme Disinfectant", desc: "Breaks down organic matter naturally", badge: "EPA Certified" },
      { icon: "💧", name: "Steam Cleaner", desc: "Chemical-free steam for deep sanitization", badge: "Natural" },
      { icon: "🫧", name: "Cabinet Polish", desc: "Beeswax-based wood cabinet protector", badge: "Allergen Free" },
    ],
    expectations: [
      { icon: "🕐", title: "Longer Service Time", desc: "Deep cleans take 3–6 hours. We recommend being away for the first visit so we can work freely." },
      { icon: "📋", title: "50-Point Report", desc: "You receive a digital before/after report documenting every task completed." },
      { icon: "📸", title: "Before & After Photos", desc: "We photograph key areas before and after so you can see the dramatic transformation." },
      { icon: "🔄", title: "Satisfaction Guarantee", desc: "If anything is missed, we return within 24 hours for a free re-clean of that area." },
    ],
    addons: [
      { icon: "🪟", name: "Exterior Window Wash", desc: "Full exterior window cleaning for all ground-floor windows", price: "+$30", badge: "Popular" },
      { icon: "🛁", name: "Grout Sealing", desc: "Professional grout sealer applied after cleaning to protect tiles", price: "+$45", badge: "" },
      { icon: "🌱", name: "Mold Prevention Spray", desc: "Anti-mold coating applied to bathroom walls and tiles", price: "+$20", badge: "Eco" },
      { icon: "🧺", name: "Fridge Deodorize", desc: "Deep deodorize and baking soda refresh for refrigerator", price: "+$15", badge: "" },
    ],
    faqs: [
      { q: "How is Deep Cleaning different from Regular Cleaning?", a: "Deep Cleaning goes far beyond surface maintenance — we clean inside appliances, scrub grout, wipe every baseboard and tackle areas your regular clean doesn't reach. It's a complete home reset." },
      { q: "How often should I book a Deep Clean?", a: "We recommend a full Deep Clean every 3–6 months alongside regular maintenance cleans. Many clients do one at the start of each season." },
      { q: "Do I need to prepare anything before the deep clean?", a: "Clear personal items from countertops and floors where possible. We'll handle everything else. For the oven and fridge, ideally empty them the night before." },
      { q: "Is it safe for children and pets during the clean?", a: "We recommend keeping children and pets in a separate room or away during the clean. Once surfaces have dried (30–60 mins after), everything is completely safe — our products have zero harmful residue." },
    ],
  },
  {
    id: 2,
    name: "Move-In / Out Cleaning",
    category: "Moving",
    badge: "Moving",
    badgeColor: "#3b82f6",
    duration: "4–7 hrs",
    price: "$199",
    priceNum: "199",
    icon: "📦",
    heroImg: "../images/services-8.jpg",
    gallery: [
      "../images/Moving-1.jpg",
      "../images/Moving-2.jpg",
      "../images/Moving-3.jpg",
    ],
    overview: "Moving is stressful enough — let EcoShine handle the cleaning. Our Move-In/Out service is a comprehensive top-to-bottom clean of an empty property, ensuring you get your full deposit back or move into a spotless new home. We clean every corner, cabinet, appliance, wall smudge, and floor surface with complete thoroughness.",
    checklist: [
      { title: "Full Deep Clean Included", desc: "All standard and deep clean tasks" },
      { title: "Inside All Cabinets & Drawers", desc: "Emptied, wiped inside and out" },
      { title: "Walls Spot-Cleaned", desc: "Scuffs, fingerprints and marks removed" },
      { title: "Light Switches & Outlets", desc: "Disinfected and polished" },
      { title: "Garage & Laundry Area", desc: "Full sweep, mop and wipe-down" },
      { title: "All Appliances Inside & Out", desc: "Oven, fridge, dishwasher, washer" },
      { title: "Window Interior & Exterior", desc: "All accessible windows cleaned" },
      { title: "Deposit-Return Checklist", desc: "We follow estate agency standards" },
    ],
    process: [
      { title: "Pre-Clean Planning", desc: "We review the property layout and any landlord checklist requirements before the day of the clean." },
      { title: "Empty Property Sweep", desc: "The entire property is swept and vacuumed from top floor to bottom, including all built-in storage." },
      { title: "Appliance Restoration", desc: "Every appliance interior is cleaned — oven, fridge, dishwasher, washing machine — to like-new condition." },
      { title: "Wall & Surface Detailing", desc: "Scuffs, marks, and smudges on walls and skirting boards are carefully treated and cleaned." },
      { title: "Final Sanitization Sweep", desc: "All bathrooms and kitchens receive a final disinfection before we issue your completion checklist." },
    ],
    ecoProducts: [
      { icon: "🧴", name: "Wall Spot Cleaner", desc: "Magic eraser effect with plant-based ingredients", badge: "Non-Toxic" },
      { icon: "🍋", name: "Limescale Remover", desc: "Natural citric acid dissolves water deposits", badge: "Bio-Preferred" },
      { icon: "🧽", name: "Grout Restorer", desc: "Whitens grout lines without bleach", badge: "EPA Certified" },
      { icon: "🌿", name: "Odour Eliminator", desc: "Enzyme-based, removes pet and cooking odours", badge: "Natural" },
      { icon: "💧", name: "Appliance Degreaser", desc: "Cuts through years of oven grease safely", badge: "Zero Waste" },
      { icon: "🫧", name: "Floor Restorer", desc: "Brings dull floors back to a natural shine", badge: "Allergen Free" },
    ],
    expectations: [
      { icon: "🕐", title: "Full Day Availability", desc: "Move cleans take 4–7 hours. Book the whole day and we'll work until the property meets deposit-return standards." },
      { icon: "📋", title: "Deposit Checklist", desc: "We follow standard agency inspection checklists so you maximize your deposit return." },
      { icon: "📸", title: "Completion Photos", desc: "A full set of before and after photos is provided for your records." },
      { icon: "🔄", title: "Re-Clean Guarantee", desc: "If your landlord or agent identifies a missed area, we return for free within 48 hours." },
    ],
    addons: [
      { icon: "🪞", name: "Exterior Window Wash", desc: "Full exterior clean of all windows", price: "+$40", badge: "Popular" },
      { icon: "🛋️", name: "Carpet Steam Clean", desc: "Professional steam extraction for all carpets", price: "+$60", badge: "" },
      { icon: "🌿", name: "Odour Bomb Treatment", desc: "Industrial-strength natural deodoriser left overnight", price: "+$35", badge: "Eco" },
      { icon: "🔦", name: "Garage Power Wash", desc: "High-pressure eco wash for garage floor", price: "+$50", badge: "" },
    ],
    faqs: [
      { q: "Do you guarantee deposit return?", a: "While we can't guarantee a specific landlord's decision, our clean follows all standard inspection checklists. If anything is flagged by your agent within 48 hours, we return to re-clean it free of charge." },
      { q: "Should the property be empty during the clean?", a: "Yes — move cleans work best in completely empty properties. This allows us to clean all built-in cupboards, under units, and every corner without obstacles." },
      { q: "How far in advance should I book?", a: "We recommend booking at least 3–5 days in advance, especially for end-of-month dates which fill up quickly. Same-week booking may be possible depending on availability." },
      { q: "Do you clean communal areas or just the flat?", a: "Our standard service covers only your property. We can quote for communal stairwells or hallways as a separate add-on." },
    ],
  },
  {
    id: 3,
    name: "Office Cleaning",
    category: "Commercial",
    badge: "Business",
    badgeColor: "#36b89a",
    duration: "2–5 hrs",
    price: "$129",
    priceNum: "129",
    icon: "🏢",
    heroImg: "../images/services-hero1.jpg",
    gallery: [
      "../images/Commercial-card.jpg",
      "../images/Office Cleaning-1 .jpg",
      "../images/Office Cleaning-2.jpg",
    ],
    overview: "EcoShine's Office Cleaning service keeps your workspace hygienic, professional, and inspiring — without disrupting your team. We schedule around your hours (early morning, evenings, or weekends) and use plant-based products that leave no chemical smell, making the workspace pleasant to return to. Safe for electronics, upholstery, and open-plan environments.",
    checklist: [
      { title: "Desks & Work Surfaces", desc: "Wiped, disinfected and polished" },
      { title: "Computer Screens & Equipment", desc: "Safely cleaned with anti-static cloth" },
      { title: "Communal Kitchen", desc: "Surfaces, sink, appliances and floor" },
      { title: "Meeting Rooms", desc: "Tables, chairs and presentation screens" },
      { title: "Restrooms", desc: "Full sanitization of all facilities" },
      { title: "Reception & Lobbies", desc: "Floors, furniture and glass partitions" },
      { title: "Waste & Recycling", desc: "Bins emptied and segregated correctly" },
      { title: "Floor Vacuum & Mop", desc: "All carpeted and hard floor areas" },
    ],
    process: [
      { title: "Out-of-Hours Scheduling", desc: "We work before 8am, after 6pm, or on weekends — whatever causes zero disruption to your team." },
      { title: "High-Touch Disinfection", desc: "Door handles, lift buttons, light switches, and shared equipment are disinfected with our hospital-safe eco formula." },
      { title: "Kitchen & Break Room", desc: "Communal food preparation areas are thoroughly cleaned and sanitized including inside microwaves." },
      { title: "Restroom Sanitization", desc: "All restroom surfaces, fixtures and floors are scrubbed and disinfected to the highest standard." },
      { title: "Floors & Common Areas", desc: "Vacuuming and mopping of all floor types including under desks and in corners." },
    ],
    ecoProducts: [
      { icon: "🧴", name: "Office Surface Spray", desc: "Safe around electronics, no sticky residue", badge: "Non-Toxic" },
      { icon: "🫧", name: "Restroom Sanitizer", desc: "Kills 99.9% germs without bleach fumes", badge: "EPA Certified" },
      { icon: "🧽", name: "Anti-Static Cloths", desc: "Microfibre cloths safe for screens and tech", badge: "Zero Waste" },
      { icon: "🌿", name: "Kitchen Degreaser", desc: "Plant enzyme formula for food surfaces", badge: "Bio-Preferred" },
      { icon: "💧", name: "Glass & Partition Cleaner", desc: "Streak-free formula for glass office walls", badge: "Allergen Free" },
      { icon: "🌬️", name: "Workspace Freshener", desc: "Essential oil diffuser blend, no VOCs", badge: "Natural" },
    ],
    expectations: [
      { icon: "🔕", title: "Zero Disruption", desc: "We clean before you arrive or after you leave — your team never has to work around us." },
      { icon: "🪪", title: "Vetted & Insured Team", desc: "All commercial cleaners are DBS checked and carry company ID at all times." },
      { icon: "📋", title: "Cleaning Log", desc: "A sign-off sheet is left at reception after every clean for your records." },
      { icon: "📞", title: "Dedicated Account Manager", desc: "Business clients get a named point of contact for all scheduling and queries." },
    ],
    addons: [
      { icon: "🪟", name: "Window Cleaning", desc: "Internal and external office windows, floor by floor", price: "+$50", badge: "Popular" },
      { icon: "🛋️", name: "Upholstery Cleaning", desc: "Office chairs and waiting room sofas deep cleaned", price: "+$40", badge: "" },
      { icon: "🌿", name: "Plant Care", desc: "Watering and leaf-cleaning of office plants", price: "+$15", badge: "Eco" },
      { icon: "🔦", name: "Deep Restroom Restore", desc: "Monthly deep sanitization of all restroom tiles and grout", price: "+$35", badge: "" },
    ],
    faqs: [
      { q: "Can you clean our office every day?", a: "Yes — we offer daily, 3×/week, and weekly office cleaning plans. Daily clients receive a 20% loyalty discount." },
      { q: "Are your products safe around expensive electronics?", a: "Absolutely. Our anti-static microfibre cloths and electronics-safe sprays are specifically chosen to be safe around screens, keyboards, and office equipment." },
      { q: "Do we need to supply anything?", a: "No. We bring all products, equipment and cloths. All you need to do is grant us access." },
      { q: "What if a cleaner is sick on a scheduled day?", a: "We always have backup cover. We'll notify you at least 2 hours in advance and send a replacement cleaner the same day." },
    ],
  },
  {
    id: 4,
    name: "Bathroom Deep Clean",
    category: "Specialty",
    badge: "Specialty",
    badgeColor: "#f59e0b",
    duration: "1–2 hrs",
    price: "$79",
    priceNum: "79",
    icon: "🚿",
    heroImg: "../images/BathroomClean-4.jpg",
    gallery: [
      "../images/BathroomClean-1.jpg",
      "../images/BathroomClean-3.jpg",
      "../images/BathroomClean-4.jpg",
    ],
    overview: "Our Bathroom Deep Clean is an intensive, specialist treatment for your most hygiene-critical room. We tackle stubborn soap scum, hard water deposits, mould, grout discolouration, and limescale that regular cleaning can't shift — using citric acid, enzyme solutions, and steam, all completely bleach-free and safe for your family.",
    checklist: [
      { title: "Grout Scrubbing", desc: "Hand-scrubbed with citric acid paste" },
      { title: "Tile Polish", desc: "Tiles buffed to a natural shine" },
      { title: "Mould & Mildew Treatment", desc: "Tea tree enzyme spray applied and removed" },
      { title: "Limescale Descaling", desc: "Taps, showerhead and fittings descaled" },
      { title: "Toilet Deep Sanitize", desc: "Under rim, seat, base and surrounding floor" },
      { title: "Shower / Bath Restore", desc: "Soap scum removed, surfaces polished" },
      { title: "Mirror & Glass", desc: "Streak-free alcohol-free clean" },
      { title: "Ventilation Fan", desc: "Dust and grime removed from extractor fan" },
    ],
    process: [
      { title: "Mould Assessment", desc: "We assess the level of mould and mildew present and apply the appropriate treatment concentration." },
      { title: "Citric Acid Soak", desc: "Limescale on taps, showerheads, and tiles is treated with a natural citric acid soak that dissolves mineral deposits." },
      { title: "Grout Restoration", desc: "All grout lines are hand-scrubbed with our biodegradable paste to restore their original colour." },
      { title: "Deep Toilet Sanitize", desc: "The entire toilet — including under the rim, the base, the seat, and the surrounding floor — is thoroughly disinfected." },
      { title: "Polish & Finish", desc: "All surfaces, mirrors, and glass panels are buffed to a streak-free finish." },
    ],
    ecoProducts: [
      { icon: "🍋", name: "Citric Acid Descaler", desc: "Natural limescale dissolution, zero fumes", badge: "Non-Toxic" },
      { icon: "🌿", name: "Tea Tree Sanitizer", desc: "Anti-mould and antibacterial naturally", badge: "Natural" },
      { icon: "🧽", name: "Grout Brush System", desc: "Biodegradable handle, reusable heads", badge: "Zero Waste" },
      { icon: "💧", name: "Tile Polish", desc: "Beeswax-based tile protector and shine", badge: "Bio-Preferred" },
      { icon: "🧴", name: "Enzyme Toilet Cleaner", desc: "Breaks down waste organically, no bleach", badge: "EPA Certified" },
      { icon: "🫧", name: "Glass Restorer", desc: "Removes water spots from shower glass", badge: "Allergen Free" },
    ],
    expectations: [
      { icon: "⏱", title: "1–2 Hour Service", desc: "A thorough bathroom deep clean takes between 1 and 2 hours per bathroom, depending on size and condition." },
      { icon: "💨", title: "No Bleach Fumes", desc: "Our products are bleach-free — no strong chemical smell, safe to use the bathroom 30 minutes after we leave." },
      { icon: "🦠", title: "Hospital-Grade Results", desc: "Our citric acid and enzyme combination achieves hospital-grade sanitization without any pharmaceutical chemicals." },
      { icon: "✨", title: "Visible Transformation", desc: "Soap scum, grout discolouration, and limescale that has built up over months can often be restored in a single session." },
    ],
    addons: [
      { icon: "🛁", name: "Grout Sealing", desc: "Protective sealant applied to all cleaned grout to prevent staining", price: "+$30", badge: "Popular" },
      { icon: "🌿", name: "Mould Prevention Coat", desc: "Anti-mould spray applied to walls and ceiling to prevent recurrence", price: "+$20", badge: "Eco" },
      { icon: "💧", name: "Shower Glass Restore", desc: "Specialised water-spot and hard calcium removal from glass panels", price: "+$25", badge: "" },
      { icon: "🪟", name: "Bathroom Window Wash", desc: "Interior and exterior clean of bathroom windows", price: "+$10", badge: "" },
    ],
    faqs: [
      { q: "Can you remove black mould?", a: "We can treat surface mould with our tea tree enzyme spray which kills mould spores and prevents regrowth. Structural or penetrating mould may require specialist remediation beyond cleaning." },
      { q: "How often should I book a bathroom deep clean?", a: "We recommend a bathroom deep clean every 2–3 months alongside your regular cleaning to prevent limescale and mould build-up." },
      { q: "Is it safe for kids straight after?", a: "Yes. All our products are plant-based with zero toxic residue. The bathroom is safe to use 30 minutes after we finish — once surfaces have dried." },
      { q: "Do you clean all types of tiles?", a: "Yes — ceramic, porcelain, natural stone, glass tiles. We adjust our products and technique based on the tile material to avoid any damage." },
    ],
  },
  {
    id: 5,
    name: "Kitchen Deep Clean",
    category: "Kitchen",
    badge: "Popular",
    badgeColor: "#36b89a",
    duration: "1–3 hrs",
    price: "$99",
    priceNum: "99",
    icon: "🍳",
    heroImg: "../images/Kitchen-1.jpg",
    gallery: [
      "../images/Kitchen-2.jpg",
      "../images/Kitchen-3.jpg",
      "../images/services-6.jpg",
    ],
    overview: "The kitchen is the hardest-working room in your home and the hardest to deep-clean. Our Kitchen Deep Clean uses citrus-based degreasers, enzyme formulas, and biodegradable pads to cut through years of grease, sanitize food contact surfaces, and restore every corner of your kitchen to sparkling condition — safely and without toxic chemicals.",
    checklist: [
      { title: "Inside Oven", desc: "Full interior degreased and polished" },
      { title: "Inside Microwave", desc: "Cleaned and deodorized naturally" },
      { title: "Fridge Interior", desc: "Emptied, cleaned and deodorized" },
      { title: "Cabinet Interiors & Drawers", desc: "Emptied, wiped and relaid" },
      { title: "Backsplash Degreasing", desc: "Grease cut from tiles and grout" },
      { title: "Sink & Taps Descaled", desc: "Limescale dissolved and polished" },
      { title: "Hob & Extractor Fan", desc: "Filter cleaned, surfaces degreased" },
      { title: "Floor Deep Mop", desc: "Grease film removed from floor" },
    ],
    process: [
      { title: "Appliance Pre-Treatment", desc: "Oven and hob surfaces receive a citrus degreaser soak while we work on other areas — maximizing cleaning effectiveness." },
      { title: "Cabinet & Drawer Clear", desc: "We carefully remove contents, wipe all interior surfaces, and replace items neatly." },
      { title: "Oven Restoration", desc: "Interior oven walls, racks, and glass door are cleaned using our non-fume baking soda and lemon formula." },
      { title: "Backsplash & Grout", desc: "Kitchen tiles and grout are scrubbed free of accumulated grease and cooking residue." },
      { title: "Sink & Appliance Polish", desc: "Sink, taps, fridge exterior, and all visible appliances are polished to a streak-free finish." },
    ],
    ecoProducts: [
      { icon: "🍊", name: "Citrus Degreaser", desc: "D-limonene orange extract cuts grease instantly", badge: "Bio-Preferred" },
      { icon: "🍋", name: "Citric Descaler", desc: "Natural tap and sink limescale remover", badge: "Non-Toxic" },
      { icon: "🧽", name: "Biodegradable Pads", desc: "Plant-fibre scouring pads, compostable", badge: "Zero Waste" },
      { icon: "🌿", name: "Enzyme Spray", desc: "Breaks down food and fat organically", badge: "EPA Certified" },
      { icon: "💧", name: "Fridge Deodorizer", desc: "Activated charcoal + baking soda sachets", badge: "Natural" },
      { icon: "🧴", name: "Surface Polish", desc: "Coconut oil-based countertop protector", badge: "Allergen Free" },
    ],
    expectations: [
      { icon: "🍽️", title: "Clear Your Kitchen", desc: "Please remove loose items from countertops and empty your fridge the evening before for the best results." },
      { icon: "⏱", title: "1–3 Hours", desc: "Duration depends on kitchen size and level of soiling. A heavily used kitchen may take the full 3 hours." },
      { icon: "🌬️", title: "No Chemical Smell", desc: "Unlike conventional oven cleaners, our citrus formula leaves a fresh natural scent — not a chemical cloud." },
      { icon: "✨", title: "Like-New Results", desc: "Even years of baked-on oven grease can typically be resolved in a single deep clean session." },
    ],
    addons: [
      { icon: "🪟", name: "Window Wash", desc: "Kitchen window interior and exterior cleaned", price: "+$10", badge: "" },
      { icon: "🧺", name: "Dishwasher Clean", desc: "Interior cleaning and filter descale of dishwasher", price: "+$15", badge: "Popular" },
      { icon: "🌱", name: "Natural Odour Reset", desc: "Essential oil diffuser treatment to refresh the kitchen air", price: "+$10", badge: "Eco" },
      { icon: "🔦", name: "Under-Unit Sweep", desc: "Vacuum and mop under all kitchen units and the fridge", price: "+$20", badge: "" },
    ],
    faqs: [
      { q: "Do I need to empty my fridge before the clean?", a: "Yes — we recommend emptying your fridge the evening before so we can clean the full interior thoroughly, including shelves, drawers, and door seals." },
      { q: "Can you remove years of baked-on oven grease?", a: "In most cases, yes. Our citrus and baking soda formula is extremely effective on baked-on grease. Very severe cases may require a follow-up treatment." },
      { q: "Is it safe for food surfaces straight after?", a: "Yes. All our products are food-safe and leave zero harmful residue. You can cook in your oven the same evening after it cools." },
      { q: "Do you clean the extractor fan filter?", a: "Yes — the extractor fan filter is removed, soaked in our degreaser solution, rinsed, and replaced. This is included in the standard kitchen deep clean." },
    ],
  },
  {
    id: 6,
    name: "Carpet & Upholstery",
    category: "Specialty",
    badge: "Add-On",
    badgeColor: "#8b5cf6",
    duration: "2–4 hrs",
    price: "$119",
    priceNum: "119",
    icon: "🛋️",
    heroImg: "../images/Carpet-1.jpg",
    gallery: [
      "../images/Carpet-2.jpg",
      "../images/services-7.jpg",
      "../images/services-5.jpg",
    ],
    overview: "Our Carpet & Upholstery service uses HEPA-powered extraction cleaning combined with plant-based pre-treatments to deeply clean carpets, rugs, sofas, armchairs, and fabric headboards. We remove embedded dirt, allergens, pet dander, odours, and stains that regular vacuuming simply cannot reach — restoring your soft furnishings to their original freshness.",
    checklist: [
      { title: "HEPA Vacuum Pre-Treatment", desc: "Deep extraction before wet cleaning" },
      { title: "Stain Pre-Treatment", desc: "Targeted enzyme spray on all stains" },
      { title: "Hot Water Extraction", desc: "Deep clean with eco cleaning solution" },
      { title: "Pet Dander Removal", desc: "Specialist treatment for pet households" },
      { title: "Odour Neutralization", desc: "Enzyme deodoriser eliminates smells at source" },
      { title: "Sofa & Chair Cleaning", desc: "All seat cushions and fabric surfaces" },
      { title: "Fabric Protection Spray", desc: "Optional protector applied after drying" },
      { title: "Rug Spot Cleaning", desc: "Hand-cleaned with appropriate solution" },
    ],
    process: [
      { title: "Fabric Assessment", desc: "We check fabric type and care labels before choosing the appropriate cleaning solution and method." },
      { title: "HEPA Pre-Vacuum", desc: "Powerful HEPA vacuuming removes loose dirt, hair, and surface debris before wet treatment." },
      { title: "Stain Pre-Spray", desc: "All identified stains receive a targeted enzyme pre-treatment spray to break down the stain before extraction." },
      { title: "Hot Water Extraction", desc: "Our eco hot water extraction machine injects a small amount of plant-based cleaning solution and immediately extracts it — along with deep dirt." },
      { title: "Drying & Protection", desc: "We use air movers to speed drying time. Optional fabric protector spray is then applied to guard against future staining." },
    ],
    ecoProducts: [
      { icon: "🌿", name: "Enzyme Pre-Spray", desc: "Breaks down proteins in stains and odours", badge: "Non-Toxic" },
      { icon: "💧", name: "Hot Water Extract Formula", desc: "Plant-based, rinse-out cleaning solution", badge: "EPA Certified" },
      { icon: "🧴", name: "Odour Neutralizer", desc: "Enzyme formula destroys odour at the source", badge: "Natural" },
      { icon: "🐾", name: "Pet Dander Treatment", desc: "Breaks down pet allergens in fabric fibres", badge: "Allergen Free" },
      { icon: "🛡️", name: "Fabric Guard", desc: "Plant-based stain-repellent protector", badge: "Bio-Preferred" },
      { icon: "🌬️", name: "Rapid-Dry Formula", desc: "Fast-drying agent reduces drying time by 40%", badge: "Zero Waste" },
    ],
    expectations: [
      { icon: "💧", title: "Drying Time", desc: "Carpets take 2–4 hours to dry. Upholstery takes 4–6 hours. We recommend ventilating the room well." },
      { icon: "🐾", title: "Pet Household Special", desc: "Tell us about your pets so we can apply the specialist pet-dander and odour treatment as a priority." },
      { icon: "🔵", title: "Stain Honesty", desc: "Most stains are removable, but very old or set stains may only be lightened — we'll tell you honestly before we start." },
      { icon: "✨", title: "Noticeable Results", desc: "Even heavily soiled carpets typically look dramatically refreshed after a single extraction clean." },
    ],
    addons: [
      { icon: "🛡️", name: "Scotchgard Protection", desc: "Premium fabric protector applied to all cleaned surfaces", price: "+$30", badge: "Popular" },
      { icon: "🐾", name: "Pet Odour Bomb", desc: "Industrial enzyme diffuser left for 24hrs for severe pet odour", price: "+$25", badge: "Eco" },
      { icon: "🪑", name: "Dining Chair Seats", desc: "All dining chair fabric seats cleaned individually", price: "+$20", badge: "" },
      { icon: "🛏️", name: "Mattress Cleaning", desc: "HEPA vacuum + enzyme treatment for all mattresses", price: "+$40", badge: "" },
    ],
    faqs: [
      { q: "Will you be able to remove my stain?", a: "Most stains respond well to our enzyme pre-treatment and extraction process. Wine, coffee, mud, and pet stains are typically fully removed. Very old or set stains may only be lightened — we'll assess honestly before starting." },
      { q: "How long until I can walk on my carpet?", a: "Light foot traffic is fine after about 1 hour. We recommend waiting 2–4 hours for full drying before moving furniture back." },
      { q: "Is the cleaning solution safe for my children?", a: "Yes — our plant-based extraction solution is completely non-toxic. Once carpets are dry, they are safe for children and pets to be on immediately." },
      { q: "Can you clean wool or delicate rugs?", a: "Yes, but we assess each rug individually. For antique or very delicate wool rugs, we may recommend a specialist rug cleaning service instead of machine extraction." },
    ],
  },
  {
    id: 7,
    name: "Post-Construction Clean",
    category: "Construction",
    badge: "Pro",
    badgeColor: "#3b82f6",
    duration: "5–8 hrs",
    price: "$249",
    priceNum: "249",
    icon: "🔨",
    heroImg: "../images/Post-Construction-3.jpg",
    gallery: [
      "../images/Post-Construction-1.jpg",
      "../images/Post-Construction-2.jpg",
      "../images/Post-Construction-4.jpg",
    ],
    overview: "After construction or renovation, your space is left with fine dust, plaster particles, paint splatters, adhesive residue, and construction debris that standard cleaning can't handle. EcoShine's Post-Construction Clean is a specialist service using HEPA commercial vacuums, specialist residue removers, and a methodical room-by-room approach to make your space truly move-in ready.",
    checklist: [
      { title: "Construction Dust Removal", desc: "Multi-pass HEPA vacuum of all surfaces" },
      { title: "Paint Splatter Removal", desc: "Safely removed from floors, glass, fittings" },
      { title: "Plaster & Adhesive Residue", desc: "Dissolved and removed from all surfaces" },
      { title: "Window & Frame Detailing", desc: "All stickers, labels and construction film removed" },
      { title: "Fixture & Fitting Clean", desc: "New fittings cleaned and polished" },
      { title: "Floor Deep Clean & Polish", desc: "All floor types cleaned and protected" },
      { title: "Air Duct & Vent Clean", desc: "Construction dust removed from ventilation" },
      { title: "Final Sanitization Sweep", desc: "Full property sanitized before handover" },
    ],
    process: [
      { title: "Site Assessment", desc: "Our team walks through the site to assess dust levels, identify hazardous materials, and plan the clean sequence." },
      { title: "Rough Clean — Debris Removal", desc: "All large debris, packaging, and loose material is removed from the site before cleaning begins." },
      { title: "HEPA Dust Extraction", desc: "Commercial-grade HEPA vacuums remove fine construction dust from all surfaces, including walls, ceilings and skirting." },
      { title: "Paint & Adhesive Removal", desc: "Specialist solvents safely remove paint splatters and adhesive residue from floors, glass, tiles and fittings." },
      { title: "Final Detail & Sanitize", desc: "All surfaces are wiped down, windows cleaned, and a final sanitization pass is made through every room." },
    ],
    ecoProducts: [
      { icon: "🧴", name: "Construction Degreaser", desc: "Removes adhesives and sealants safely", badge: "Bio-Preferred" },
      { icon: "💧", name: "Paint Remover Spray", desc: "Water-based, no fumes, safe on all surfaces", badge: "Non-Toxic" },
      { icon: "🫧", name: "HEPA Vacuum System", desc: "Commercial grade, captures 0.3 micron particles", badge: "EPA Certified" },
      { icon: "🌿", name: "Plaster Dissolver", desc: "Citric-based plaster residue remover", badge: "Natural" },
      { icon: "🔬", name: "Anti-Dust Coating", desc: "Applied to surfaces after clean to prevent re-settlement", badge: "Allergen Free" },
      { icon: "🧽", name: "Floor Protector", desc: "Plant-based sealant applied to new floors", badge: "Zero Waste" },
    ],
    expectations: [
      { icon: "🕐", title: "Full Day Service", desc: "Post-construction cleans are full-day operations. Our team typically works in pairs or groups of 3 depending on property size." },
      { icon: "⚠️", title: "Hazardous Material Check", desc: "We cannot clean properties with asbestos or other hazardous materials — these require specialist remediation first." },
      { icon: "📋", title: "Stage Cleaning Available", desc: "For ongoing projects, we offer rough clean, second fix clean, and final handover clean as separate stages." },
      { icon: "✨", title: "Move-In Ready", desc: "After our post-construction clean, your property is fully move-in ready — no builder dust or residue remains." },
    ],
    addons: [
      { icon: "🔦", name: "Exterior Power Wash", desc: "Driveway, pathways and building exterior pressure washed", price: "+$80", badge: "Popular" },
      { icon: "🪟", name: "Full Window Polish", desc: "All windows cleaned inside and out including new frames", price: "+$50", badge: "" },
      { icon: "🌿", name: "Air Quality Test", desc: "Post-construction air particle test with digital report", price: "+$40", badge: "Eco" },
      { icon: "🛋️", name: "Furniture Unwrap & Clean", desc: "New furniture unwrapped, positioned and cleaned", price: "+$35", badge: "" },
    ],
    faqs: [
      { q: "How many cleaners will come for a post-construction clean?", a: "Typically 2–4 cleaners depending on the property size. Larger commercial projects are quoted separately with a dedicated site team." },
      { q: "Can you clean while construction is still ongoing?", a: "We can carry out rough cleans between construction phases. For the final clean, we require the site to be fully completed and safe." },
      { q: "Do you remove construction packaging and waste?", a: "We remove cleaning debris and construction dust. Large packaging materials and skip waste are not included — these should be arranged separately with your contractor." },
      { q: "Can you protect new flooring during the clean?", a: "Yes — we lay protective coverings before cleaning adjacent areas to prevent new floors being scratched or soiled during the process." },
    ],
  },
  {
    id: 8,
    name: "Air Quality Care",
    category: "Air Quality",
    badge: "Eco Pick",
    badgeColor: "#36b89a",
    duration: "1–2 hrs",
    price: "$89",
    priceNum: "89",
    icon: "🌬️",
    heroImg: "../images/Air Quality-3.jpg",
    gallery: [
      "../images/Air Quality-1.jpg",
      "../images/Air Quality-2.jpg",
      "../images/services-9.jpg",
    ],
    overview: "Indoor air can be 5× more polluted than outdoor air. EcoShine's Air Quality Care service combines HEPA-grade vacuuming, vent and duct surface cleaning, and natural air purification treatments to measurably improve your home's indoor air quality within 24 hours. Ideal for allergy sufferers, asthma patients, pet owners, and new parents.",
    checklist: [
      { title: "HEPA Vacuum All Surfaces", desc: "Captures particles down to 0.3 microns" },
      { title: "AC Vent Surface Clean", desc: "All vent covers removed, washed and replaced" },
      { title: "Duct Accessible Surface Wipe", desc: "Reachable duct interior surfaces wiped" },
      { title: "Ceiling Fan & Fixture Dusting", desc: "Major dust sources eliminated" },
      { title: "Natural Odour Elimination", desc: "Enzyme spray neutralizes airborne odours" },
      { title: "Mould Prevention Spray", desc: "Applied to damp-prone walls and corners" },
      { title: "Essential Oil Diffusion", desc: "Purifying oils diffused through the home" },
      { title: "Air Quality Report", desc: "Before/after particle count provided" },
    ],
    process: [
      { title: "Air Quality Baseline", desc: "We use a digital particle counter to measure your indoor air quality before the service, noting PM2.5 and PM10 levels." },
      { title: "HEPA Mega-Vacuum", desc: "All upholstery, mattresses, carpets, and hard surfaces are HEPA vacuumed to remove settled particulate matter." },
      { title: "Vent & Duct Clean", desc: "AC vent covers are removed and washed. Accessible duct interiors are wiped to remove accumulated dust." },
      { title: "Natural Purification", desc: "Beeswax candles are lit in key rooms, and our essential oil diffuser blend (eucalyptus, tea tree, lavender) is run for 30 minutes per room." },
      { title: "Post-Service Air Test", desc: "We re-measure particle levels and provide you with a printed before/after air quality report." },
    ],
    ecoProducts: [
      { icon: "🌬️", name: "HEPA Vacuum System", desc: "Captures 99.97% of particles 0.3 microns+", badge: "EPA Certified" },
      { icon: "🌿", name: "Enzyme Odour Spray", desc: "Destroys airborne volatile organic compounds", badge: "Non-Toxic" },
      { icon: "🍃", name: "Tea Tree Mould Spray", desc: "Natural antifungal for walls and surfaces", badge: "Natural" },
      { icon: "🕯️", name: "Beeswax Candles", desc: "Ionize the air to attract and drop particles", badge: "Allergen Free" },
      { icon: "💧", name: "Eucalyptus Diffuser", desc: "Anti-microbial essential oil diffusion", badge: "Bio-Preferred" },
      { icon: "📊", name: "Air Quality Monitor", desc: "Digital PM2.5/PM10 particle counter", badge: "Zero Waste" },
    ],
    expectations: [
      { icon: "📊", title: "Measurable Results", desc: "You receive a before and after air quality report showing the reduction in airborne particle levels." },
      { icon: "🤧", title: "Allergy Sufferer Favourite", desc: "Clients with hay fever, asthma, and dust allergies report noticeable improvement within 24–48 hours." },
      { icon: "🐾", title: "Great for Pet Homes", desc: "Pet dander is one of the most common indoor air pollutants. Our HEPA system removes it from all surfaces." },
      { icon: "🌿", title: "No Chemical Fragrance", desc: "We use only pure essential oils — no synthetic air fresheners that introduce VOCs into your air." },
    ],
    addons: [
      { icon: "🌡️", name: "Full HVAC Filter Replace", desc: "We supply and fit new HEPA-grade filters in your AC and heating units", price: "+$35", badge: "Popular" },
      { icon: "🐾", name: "Pet Dander Deep Treatment", desc: "Specialist HEPA mattress and sofa treatment for pet allergens", price: "+$30", badge: "Eco" },
      { icon: "🕯️", name: "Beeswax Candle Pack", desc: "3 natural beeswax candles to use between services", price: "+$15", badge: "" },
      { icon: "📋", name: "Monthly Air Report", desc: "Monthly air quality monitoring with written health report", price: "+$20", badge: "" },
    ],
    faqs: [
      { q: "Will this actually help my allergies?", a: "Most clients with dust, pet, or mould allergies report significant improvement within 24–48 hours. We provide before/after particle counts so you can see the measurable difference." },
      { q: "Is this the same as duct cleaning?", a: "No — full duct cleaning requires specialist equipment that goes inside the ductwork. Our Air Quality Care cleans accessible vent surfaces and uses HEPA vacuuming and natural air treatment. For deep duct cleaning, we can recommend a specialist." },
      { q: "How often should I book this service?", a: "For allergy sufferers or pet households, we recommend every 2–3 months. For standard households, once or twice a year alongside regular cleaning." },
      { q: "Can I stay home during the air quality clean?", a: "Yes — all our products are non-toxic and safe to breathe around. In fact, most clients choose to stay home and immediately notice the improvement in air quality during the service." },
    ],
  },
];


let current = 0;


const html = document.documentElement;
const toggleBtn = document.getElementById('themeToggle');
const saved = localStorage.getItem('ecoshineTheme');
if (saved) html.setAttribute('data-theme', saved);
else if (window.matchMedia('(prefers-color-scheme: dark)').matches) html.setAttribute('data-theme', 'dark');

toggleBtn.addEventListener('click', () => {
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('ecoshineTheme', next);
  toggleBtn.style.transform = 'scale(1.2) rotate(20deg)';
  setTimeout(() => toggleBtn.style.transform = '', 280);
});


function renderService(id) {
  const s = SERVICES[id];
  if (!s) return;
  current = id;


  document.getElementById('heroBg').style.backgroundImage = `url('${s.heroImg}')`;
  document.getElementById('heroCat').textContent = s.category;
  document.getElementById('heroTitle').textContent = s.name;
  document.getElementById('heroDesc').textContent = s.overview.slice(0, 160) + '...';
  document.getElementById('heroDuration').textContent = s.duration;
  document.getElementById('heroPrice').textContent = s.price;
  document.getElementById('bcService').textContent = s.name;


  const hbadge = document.getElementById('heroBadge');
  hbadge.style.background = hexToRgba(s.badgeColor, .2);
  hbadge.style.borderColor = hexToRgba(s.badgeColor, .4);


  document.getElementById('scPrice').textContent = s.price.replace('From ', '');
  document.getElementById('scDuration').textContent = s.duration;


  document.getElementById('detailTitle').textContent = s.name + ' — Full Details';
  document.getElementById('detailOverview').textContent = s.overview;


  const gal = document.getElementById('imgGallery');
  gal.innerHTML = s.gallery.map((src, i) => `
    <div class="gallery-img">
      <img src="${src}" alt="${s.name} ${i+1}" loading="lazy" onload="this.classList.add('loaded')"/>
    </div>`).join('');


  document.getElementById('checklistGrid').innerHTML = s.checklist.map(c => `
    <div class="cl-item">
      <div class="cl-check">✓</div>
      <div class="cl-text"><strong>${c.title}</strong><span>${c.desc}</span></div>
    </div>`).join('');


  document.getElementById('processSteps').innerHTML = s.process.map((p, i) => `
    <div class="ps-item">
      <div class="ps-num">${String(i+1).padStart(2,'0')}</div>
      <div class="ps-content"><h4>${p.title}</h4><p>${p.desc}</p></div>
    </div>`).join('');


  document.getElementById('ecoProducts').innerHTML = s.ecoProducts.map(p => `
    <div class="ep-card">
      <div class="ep-icon">${p.icon}</div>
      <strong>${p.name}</strong>
      <span>${p.desc}</span>
      <div class="ep-badge">${p.badge}</div>
    </div>`).join('');


  document.getElementById('expectGrid').innerHTML = s.expectations.map(e => `
    <div class="eg-item">
      <div class="eg-icon">${e.icon}</div>
      <div><strong>${e.title}</strong><p>${e.desc}</p></div>
    </div>`).join('');


  document.getElementById('addonsList').innerHTML = s.addons.map(a => `
    <div class="addon-item">
      <div class="addon-icon">${a.icon}</div>
      <div class="addon-info">
        <strong>${a.name}</strong>
        <span>${a.desc}</span>
      </div>
      ${a.badge ? `<div class="addon-badge">${a.badge}</div>` : ''}
      <div class="addon-price">${a.price}</div>
    </div>`).join('');


  document.getElementById('faqList').innerHTML = s.faqs.map((f, i) => `
    <div class="faq-item" id="faq${i}">
      <button class="faq-q" onclick="toggleFaq(${i})">
        ${f.q}
        <div class="faq-icon">+</div>
      </button>
      <div class="faq-a">${f.a}</div>
    </div>`).join('');


  const spcImg = document.getElementById('spcImg');
  if (spcImg) spcImg.style.backgroundImage = `url('${s.heroImg.replace('w=1400','w=600')}')`;
  const spcCat = document.getElementById('spcCat');
  if (spcCat) spcCat.textContent = s.category;


  const stcEl = document.getElementById('stcServices');
  if (stcEl) {
    stcEl.innerHTML = SERVICES.map(r => `
      <div class="oc-srv-row ${r.id === id ? 'active-svc' : ''}" onclick="switchServiceAndReset(${r.id})">
        <div class="oc-srv-dot"></div>
        <span class="oc-srv-icon">${r.icon}</span>
        <span class="oc-srv-name">${r.name}</span>
        <span class="oc-srv-price">${r.price}</span>
      </div>`).join('');
  }

  const stcCounter = document.getElementById('stcCounter');
  if (stcCounter) stcCounter.textContent = `${id + 1}/${SERVICES.length}`;


  const relEl = document.getElementById('relatedList');
  if (relEl) relEl.innerHTML = '';


  document.getElementById('allSrvGrid').innerHTML = SERVICES.map(r => `
    <div class="asrv-card ${r.id === id ? 'active' : ''}" onclick="switchService(${r.id})">
      <div class="asrv-img">
        <img src="${r.heroImg.replace('w=1400','w=120')}" alt="${r.name}" loading="lazy" onload="this.style.opacity=1" style="opacity:0;transition:opacity .4s"/>
      </div>
      <div class="asrv-info">
        <strong>${r.name}</strong>
        <span>${r.duration} · ${r.price}</span>
      </div>
      <span class="asrv-arrow">→</span>
    </div>`).join('');


  document.querySelectorAll('.stab').forEach(t => {
    t.classList.toggle('active', parseInt(t.dataset.id) === id);
  });


  document.querySelectorAll('.reveal').forEach(el => {
    el.classList.remove('visible');
    setTimeout(() => el.classList.add('visible'), 80);
  });


  if (id !== current) window.scrollTo({ top: 0, behavior: 'smooth' });
}

function switchService(id) {
  renderService(id);
  current = id;
  if (!isPaused) startAutoRotate();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


document.querySelectorAll('.stab').forEach(tab => {
  tab.addEventListener('click', () => switchService(parseInt(tab.dataset.id)));
});


window.toggleFaq = function(i) {
  const item = document.getElementById('faq' + i);
  const wasOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('open'));
  if (!wasOpen) item.classList.add('open');
};


const revObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); revObs.unobserve(e.target); }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => revObs.observe(el));


function animCount(el, target, suffix = '') {
  const start = performance.now();
  const dur = 1800;
  const run = now => {
    const p = Math.min((now - start) / dur, 1);
    const e = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.floor(e * target).toLocaleString() + suffix;
    if (p < 1) requestAnimationFrame(run);
    else el.textContent = target.toLocaleString() + suffix;
  };
  requestAnimationFrame(run);
}
const cntObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      animCount(e.target, +e.target.dataset.count);
      cntObs.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('[data-count]').forEach(el => cntObs.observe(el));


const tabsBar = document.querySelector('.service-tabs-bar');
window.addEventListener('scroll', () => {
  tabsBar.style.boxShadow = window.scrollY > 440 ? '0 4px 24px rgba(54,184,154,.12)' : '';
});


function hexToRgba(hex, a) {
  const r = parseInt(hex.slice(1,3),16);
  const g = parseInt(hex.slice(3,5),16);
  const b = parseInt(hex.slice(5,7),16);
  return `rgba(${r},${g},${b},${a})`;
}


const AUTO_INTERVAL = 10000; 
let autoTimer = null;
let timerStart = null;
let isPaused = false;
let rafId = null;


function startProgressBar() {
  const fill = document.getElementById('spcAutoFill');
  const label = document.getElementById('spcAutoLabel');
  if (!fill) return;
  timerStart = performance.now();
  let remaining = AUTO_INTERVAL / 1000;

  function tick(now) {
    const elapsed = now - timerStart;
    const pct = Math.min((elapsed / AUTO_INTERVAL) * 100, 100);
    fill.style.width = pct + '%';
    remaining = Math.max(0, Math.round((AUTO_INTERVAL - elapsed) / 1000));
    if (label) label.textContent = `Next in ${remaining}s`;
    if (pct < 100) rafId = requestAnimationFrame(tick);
  }
  if (rafId) cancelAnimationFrame(rafId);
  rafId = requestAnimationFrame(tick);
}

function stopProgressBar() {
  if (rafId) cancelAnimationFrame(rafId);
  const fill = document.getElementById('spcAutoFill');
  const label = document.getElementById('spcAutoLabel');
  if (fill) fill.style.width = '0%';
  if (label) label.textContent = 'Paused';
}

function resetProgressBar() {
  const fill = document.getElementById('spcAutoFill');
  if (fill) { fill.style.transition = 'none'; fill.style.width = '0%'; setTimeout(() => fill.style.transition = '', 50); }
}

function startAutoRotate() {
  if (autoTimer) clearInterval(autoTimer);
  resetProgressBar();
  startProgressBar();
  autoTimer = setInterval(() => {
    if (!isPaused) {
      const next = (current + 1) % SERVICES.length;
      renderService(next);
      current = next;
      resetProgressBar();
      startProgressBar();
    }
  }, AUTO_INTERVAL);
}

function stopAutoRotate() {
  clearInterval(autoTimer);
  autoTimer = null;
  stopProgressBar();
}


document.addEventListener('DOMContentLoaded', () => {});
window.addEventListener('load', () => {
  const pauseBtn = document.getElementById('pauseBtn');
  if (pauseBtn) {
    pauseBtn.addEventListener('click', () => {
      isPaused = !isPaused;
      pauseBtn.textContent = isPaused ? '▶' : '⏸';
      pauseBtn.classList.toggle('paused', isPaused);
      if (isPaused) {
        stopProgressBar();
        const label = document.getElementById('spcAutoLabel');
        if (label) label.textContent = 'Paused';
      } else {
        startProgressBar();
      }
    });
  }


  const prevBtn = document.getElementById('prevSvc');
  const nextBtn = document.getElementById('nextSvc');
  if (prevBtn) prevBtn.addEventListener('click', () => {
    const prev = (current - 1 + SERVICES.length) % SERVICES.length;
    switchServiceAndReset(prev);
  });
  if (nextBtn) nextBtn.addEventListener('click', () => {
    const next = (current + 1) % SERVICES.length;
    switchServiceAndReset(next);
  });
});

window.switchServiceAndReset = function(id) {
  renderService(id);
  current = id;
  if (!isPaused) {
    startAutoRotate();
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
};


window.copyCode = function() {
  navigator.clipboard.writeText('ECOSHINE10').catch(() => {});
  const btn = document.getElementById('promoCopy');
  if (btn) {
    btn.textContent = '✓ Copied!';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.textContent = 'Copy Code: ECOSHINE10';
      btn.classList.remove('copied');
    }, 2500);
  }
};


renderService(0);
startAutoRotate();










document.addEventListener("DOMContentLoaded", () => {

  const hero = document.querySelector(".sd-hero");
  const nextSection = hero ? hero.nextElementSibling : null;

  if (!hero || !nextSection) return;

  function fixGap() {
    const heroRect = hero.getBoundingClientRect();
    const nextRect = nextSection.getBoundingClientRect();

    const gap = nextRect.top - heroRect.bottom;

  
    if (gap > 0) {
      nextSection.style.marginTop = `-${gap}px`;
    } else {
      nextSection.style.marginTop = "0px";
    }
  }

 
  fixGap();

  window.addEventListener("resize", fixGap);

});



window.addEventListener("load", () => {

  function forceFix() {
    const hero = document.querySelector(".sd-hero");
    const next = hero?.nextElementSibling;

    if (!hero || !next) return;

    
    const heroBottom = hero.offsetTop + hero.offsetHeight;

    
    next.style.position = "relative";
    next.style.top = "0";
    next.style.marginTop = "0";

 
    const currentTop = next.offsetTop;
    const diff = currentTop - heroBottom;

    if (diff > 0) {
      next.style.transform = `translateY(-${diff}px)`;
    } else {
      next.style.transform = "translateY(0)";
    }
  }


  forceFix();
  setTimeout(forceFix, 300);
  setTimeout(forceFix, 800);

  window.addEventListener("resize", forceFix);
});
















document.addEventListener("DOMContentLoaded", () => {

 
  if (!document.querySelector(".stab")) return;

  const params = new URLSearchParams(window.location.search);
  const serviceParam = params.get("service");

  const serviceMap = {
    regular: 0,
    deep: 1,
    move: 2,
    office: 3,
    bathroom: 4,
    kitchen: 5,
    carpet: 6,
    post: 7,
    air: 8
  };

  if (serviceParam && serviceMap[serviceParam] !== undefined) {
    const index = serviceMap[serviceParam];

    const tab = document.querySelector(`.stab[data-id="${index}"]`);
    if (tab) tab.click();
  }

});