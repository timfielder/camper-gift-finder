/* Camper Gift Finder - curated gift dataset.
   Every item was checked live on Amazon.com on Nov 2, 2026 (title + price + page loads).
   Prices are approximate and change often. Affiliate tag is set in config below. */
window.GF_CONFIG = {
  AMAZON_TAG: 'campergiftfinder-20',   // e.g. 'campergifts-20' once Amazon Associates approves
  REI_AVANTLINK: 'TAG_PENDING' // reserved for REI/AvantLink later
};
window.GF_LINK = function (p) {
  var t = window.GF_CONFIG.AMAZON_TAG;
  var u = 'https://www.amazon.com/dp/' + p.asin;
  return (t && t !== 'TAG_PENDING') ? u + '?tag=' + encodeURIComponent(t) : u;
};
window.GF_PRODUCTS = [
 {
  "id": "coleman-stove",
  "name": "Coleman Triton 2-Burner Propane Stove",
  "brand": "Coleman",
  "price": "approx. $115–$120",
  "priceApprox": 120,
  "band": "100+",
  "who": [
   "partner",
   "dad",
   "mom"
  ],
  "styles": [
   "car",
   "rv",
   "hunting"
  ],
  "level": "beginner",
  "why": "The classic two-burner that turns a campsite into a real kitchen; pancakes and coffee at the same time.",
  "stocking": false,
  "asin": "B09HN1C1YJ",
  "checked": "2026-11-02"
 },
 {
  "id": "lodge-skillet",
  "name": "Lodge 10.25\" Pre-Seasoned Cast Iron Skillet",
  "brand": "Lodge",
  "price": "approx. $25–$30",
  "priceApprox": 30,
  "band": "25-50",
  "who": [
   "partner",
   "dad",
   "mom",
   "friend"
  ],
  "styles": [
   "car",
   "rv",
   "hunting",
   "fishing"
  ],
  "level": "any",
  "why": "Goes straight on the fire grate or stove and will outlive every other piece of camp gear.",
  "stocking": false,
  "asin": "B00WTSCXIS",
  "checked": "2026-11-02"
 },
 {
  "id": "lodge-dutch",
  "name": "Lodge 6 qt Deep Camp Dutch Oven",
  "brand": "Lodge",
  "price": "approx. $75–$80",
  "priceApprox": 80,
  "band": "50-100",
  "who": [
   "dad",
   "mom",
   "partner"
  ],
  "styles": [
   "car",
   "rv",
   "hunting"
  ],
  "level": "seasoned",
  "why": "Legs and a flanged lid built for coals, so they can bake cobbler or chili right in the fire.",
  "stocking": false,
  "asin": "B00006JSUH",
  "checked": "2026-11-02"
 },
 {
  "id": "pie-iron",
  "name": "Rome Square Cast Iron Pie Iron",
  "brand": "Rome Industries",
  "price": "approx. $25–$30",
  "priceApprox": 30,
  "band": "25-50",
  "who": [
   "partner",
   "dad",
   "mom",
   "kid",
   "teen",
   "friend",
   "coworker"
  ],
  "styles": [
   "car",
   "rv"
  ],
  "level": "any",
  "why": "Campfire grilled cheese and pie pockets; the gift every kid at the fire will fight over.",
  "stocking": false,
  "asin": "B000FNLXWG",
  "checked": "2026-11-02"
 },
 {
  "id": "yeti-rambler",
  "name": "YETI Rambler 20 oz Tumbler with MagSlider Lid",
  "brand": "YETI",
  "price": "approx. $35–$40",
  "priceApprox": 35,
  "band": "25-50",
  "who": [
   "partner",
   "dad",
   "mom",
   "teen",
   "friend",
   "coworker"
  ],
  "styles": [
   "car",
   "rv",
   "hunting",
   "fishing",
   "winter"
  ],
  "level": "any",
  "why": "Keeps morning coffee hot through a cold sunrise, and nobody buys a YETI for themselves.",
  "stocking": true,
  "asin": "B073WJMKHN",
  "checked": "2026-11-02"
 },
 {
  "id": "stanley-classic",
  "name": "Stanley Classic Legendary Vacuum Bottle (1.5 qt)",
  "brand": "Stanley",
  "price": "approx. $45–$50",
  "priceApprox": 45,
  "band": "25-50",
  "who": [
   "dad",
   "partner",
   "friend",
   "mom"
  ],
  "styles": [
   "car",
   "hunting",
   "fishing",
   "winter",
   "rv"
  ],
  "level": "any",
  "why": "The green thermos that keeps coffee hot all day in a tree stand, on a boat, or in a snowy campsite.",
  "stocking": false,
  "asin": "B0CLZ1KY7Y",
  "checked": "2026-11-02"
 },
 {
  "id": "biolite-alpenglow",
  "name": "BioLite AlpenGlow 500 Rechargeable Lantern",
  "brand": "BioLite",
  "price": "approx. $75–$80",
  "priceApprox": 80,
  "band": "50-100",
  "who": [
   "partner",
   "mom",
   "friend",
   "dad"
  ],
  "styles": [
   "car",
   "rv",
   "backpacking"
  ],
  "level": "any",
  "why": "Warm, cozy campsite light (plus color modes kids love) that charges by USB; no more propane mantles.",
  "stocking": false,
  "asin": "B08Z6294Y5",
  "checked": "2026-11-02"
 },
 {
  "id": "solo-bonfire",
  "name": "Solo Stove Bonfire 2.0 with Stand",
  "brand": "Solo Stove",
  "price": "approx. $265–$270",
  "priceApprox": 270,
  "band": "100+",
  "who": [
   "partner",
   "dad",
   "mom"
  ],
  "styles": [
   "car",
   "rv"
  ],
  "level": "any",
  "why": "A low-smoke fire pit for the RV pad or backyard; the big wow gift for someone who has everything.",
  "stocking": false,
  "asin": "B0B7BFJ5Y6",
  "checked": "2026-11-02"
 },
 {
  "id": "luminaid",
  "name": "LuminAID PackLite Nova Solar Lantern",
  "brand": "LuminAID",
  "price": "approx. $30–$35",
  "priceApprox": 33,
  "band": "25-50",
  "who": [
   "partner",
   "dad",
   "mom",
   "kid",
   "teen",
   "friend",
   "coworker"
  ],
  "styles": [
   "car",
   "backpacking",
   "rv"
  ],
  "level": "beginner",
  "why": "Folds flat, charges in the sun, and hangs in a tent; no batteries to forget.",
  "stocking": true,
  "asin": "B0716JV1SG",
  "checked": "2026-11-02"
 },
 {
  "id": "goalzero-micro",
  "name": "Goal Zero Lighthouse Micro Flash",
  "brand": "Goal Zero",
  "price": "approx. $35–$40",
  "priceApprox": 40,
  "band": "25-50",
  "who": [
   "partner",
   "dad",
   "mom",
   "teen",
   "friend",
   "coworker"
  ],
  "styles": [
   "car",
   "backpacking",
   "rv"
  ],
  "level": "any",
  "why": "A pocket lantern-and-flashlight that recharges by USB; light enough to live in a jacket pocket.",
  "stocking": true,
  "asin": "B01IQXDTGY",
  "checked": "2026-11-02"
 },
 {
  "id": "petzl-tikkina",
  "name": "Petzl Tikkina Headlamp",
  "brand": "Petzl",
  "price": "approx. $15–$20",
  "priceApprox": 20,
  "band": "u25",
  "who": [
   "partner",
   "dad",
   "mom",
   "kid",
   "teen",
   "friend",
   "coworker"
  ],
  "styles": [
   "car",
   "backpacking",
   "hunting",
   "fishing",
   "winter",
   "rv"
  ],
  "level": "beginner",
  "why": "Hands-free light from a trusted brand at stocking-stuffer price; every camper needs a spare.",
  "stocking": true,
  "asin": "B0FD64NN69",
  "checked": "2026-11-02"
 },
 {
  "id": "bd-spot",
  "name": "Black Diamond Spot 400 Headlamp",
  "brand": "Black Diamond",
  "price": "approx. $45–$50",
  "priceApprox": 48,
  "band": "25-50",
  "who": [
   "partner",
   "dad",
   "mom",
   "teen",
   "friend"
  ],
  "styles": [
   "backpacking",
   "hunting",
   "fishing",
   "winter"
  ],
  "level": "seasoned",
  "why": "Bright, waterproof, and has a red mode that won't spook game or wreck night vision.",
  "stocking": false,
  "asin": "B0H1R7P6L2",
  "checked": "2026-11-02"
 },
 {
  "id": "gci-rocker",
  "name": "GCI Outdoor Freestyle Rocker Chair",
  "brand": "GCI Outdoor",
  "price": "approx. $80–$85",
  "priceApprox": 80,
  "band": "50-100",
  "who": [
   "dad",
   "mom",
   "partner"
  ],
  "styles": [
   "car",
   "rv",
   "fishing"
  ],
  "level": "any",
  "why": "A folding chair that actually rocks; the most-loved seat at any campfire.",
  "stocking": false,
  "asin": "B087DRTZBF",
  "checked": "2026-11-02"
 },
 {
  "id": "kelty-loveseat",
  "name": "Kelty Low Loveseat Camp Chair",
  "brand": "Kelty",
  "price": "approx. $145–$150",
  "priceApprox": 150,
  "band": "100+",
  "who": [
   "partner"
  ],
  "styles": [
   "car",
   "rv"
  ],
  "level": "any",
  "why": "A two-person camp chair, so couples can share the fire (and the blanket).",
  "stocking": false,
  "asin": "B08X9FK4RB",
  "checked": "2026-11-02"
 },
 {
  "id": "rumpl-puffy",
  "name": "Rumpl Original Puffy Blanket",
  "brand": "Rumpl",
  "price": "approx. $95–$100",
  "priceApprox": 100,
  "band": "50-100",
  "who": [
   "partner",
   "mom",
   "friend",
   "teen"
  ],
  "styles": [
   "car",
   "rv",
   "winter"
  ],
  "level": "any",
  "why": "A sleeping-bag-material blanket for chilly campfire nights, stadiums, and the couch.",
  "stocking": false,
  "asin": "B0D8JR9JGJ",
  "checked": "2026-11-02"
 },
 {
  "id": "eno-doublenest",
  "name": "ENO DoubleNest Hammock",
  "brand": "Eagles Nest Outfitters",
  "price": "approx. $70–$75",
  "priceApprox": 75,
  "band": "50-100",
  "who": [
   "teen",
   "partner",
   "friend"
  ],
  "styles": [
   "car",
   "backpacking"
  ],
  "level": "beginner",
  "why": "Sets up between two trees in two minutes; the teen-approved way to hang out at camp.",
  "stocking": false,
  "asin": "B09KNX51D2",
  "checked": "2026-11-02"
 },
 {
  "id": "coghlans-forks",
  "name": "Coghlan's Telescoping Roasting Fork",
  "brand": "Coghlan's",
  "price": "approx. $3–$6",
  "priceApprox": 4,
  "band": "u25",
  "who": [
   "partner",
   "dad",
   "mom",
   "kid",
   "teen",
   "friend",
   "coworker"
  ],
  "styles": [
   "car",
   "rv"
  ],
  "level": "beginner",
  "why": "Extends far from the flames for perfect s'mores; cheap enough to buy one per kid.",
  "stocking": true,
  "asin": "B001F9Y560",
  "checked": "2026-11-02"
 },
 {
  "id": "carson-bugview",
  "name": "Carson BugView Bug Catcher Magnifier",
  "brand": "Carson",
  "price": "approx. $10–$15",
  "priceApprox": 12,
  "band": "u25",
  "who": [
   "kid"
  ],
  "styles": [
   "car",
   "rv"
  ],
  "level": "beginner",
  "why": "Catch, magnify, and release; turns any campsite into a nature lab for little kids.",
  "stocking": true,
  "asin": "B000JQ5AZK",
  "checked": "2026-11-02"
 },
 {
  "id": "kidnoculars",
  "name": "Educational Insights GeoSafari Jr. Kidnoculars",
  "brand": "Educational Insights",
  "price": "approx. $10–$15",
  "priceApprox": 11,
  "band": "u25",
  "who": [
   "kid"
  ],
  "styles": [
   "car",
   "rv",
   "fishing"
  ],
  "level": "beginner",
  "why": "Real binoculars sized for small hands, for spotting birds and deer around camp.",
  "stocking": true,
  "asin": "B082VYVV8T",
  "checked": "2026-11-02"
 },
 {
  "id": "coleman-kids-bag",
  "name": "Coleman Kids 45°F Sleeping Bag",
  "brand": "Coleman",
  "price": "approx. $45–$50",
  "priceApprox": 47,
  "band": "25-50",
  "who": [
   "kid"
  ],
  "styles": [
   "car",
   "rv"
  ],
  "level": "beginner",
  "why": "Their own kid-sized sleeping bag makes the first campout feel like a big deal.",
  "stocking": false,
  "asin": "B0CVSGRFW8",
  "checked": "2026-11-02"
 },
 {
  "id": "planisphere",
  "name": "The Night Sky Star Finder (40°–50° N, large)",
  "brand": "David Chandler",
  "price": "approx. $10–$15",
  "priceApprox": 15,
  "band": "u25",
  "who": [
   "partner",
   "dad",
   "mom",
   "kid",
   "teen",
   "friend",
   "coworker"
  ],
  "styles": [
   "car",
   "backpacking",
   "rv",
   "winter"
  ],
  "level": "beginner",
  "why": "Dial in the date and time to name the constellations over camp; perfect for a stargazing night.",
  "stocking": true,
  "asin": "0961320745",
  "checked": "2026-11-02"
 },
 {
  "id": "bananagrams",
  "name": "Bananagrams Word Game",
  "brand": "Bananagrams",
  "price": "approx. $10–$15",
  "priceApprox": 12,
  "band": "u25",
  "who": [
   "partner",
   "dad",
   "mom",
   "kid",
   "teen",
   "friend",
   "coworker"
  ],
  "styles": [
   "car",
   "rv"
  ],
  "level": "any",
  "why": "A fast word game in a zip pouch that plays on a picnic table or tent floor.",
  "stocking": true,
  "asin": "1932188126",
  "checked": "2026-11-02"
 },
 {
  "id": "trekking-parks",
  "name": "Trekking the National Parks Board Game",
  "brand": "Underdog Games",
  "price": "approx. $20–$25",
  "priceApprox": 23,
  "band": "u25",
  "who": [
   "kid",
   "teen",
   "partner",
   "mom",
   "dad"
  ],
  "styles": [
   "car",
   "rv"
  ],
  "level": "any",
  "why": "A family board game about visiting real national parks, for rainy-day tent time.",
  "stocking": true,
  "asin": "B07H185K6H",
  "checked": "2026-11-02"
 },
 {
  "id": "campout-cookbook",
  "name": "The Campout Cookbook",
  "brand": "Marnie Hanel & Jen Stevenson",
  "price": "approx. $10–$15",
  "priceApprox": 12,
  "band": "u25",
  "who": [
   "partner",
   "mom",
   "dad",
   "friend",
   "coworker"
  ],
  "styles": [
   "car",
   "rv"
  ],
  "level": "beginner",
  "why": "Fun, doable campfire recipes that upgrade hot dogs into a real camp dinner.",
  "stocking": true,
  "asin": "1579657990",
  "checked": "2026-11-02"
 },
 {
  "id": "celestron-upclose",
  "name": "Celestron UpClose G2 10x25 Compact Binoculars",
  "brand": "Celestron",
  "price": "approx. $25–$30",
  "priceApprox": 27,
  "band": "25-50",
  "who": [
   "teen",
   "kid",
   "mom",
   "friend"
  ],
  "styles": [
   "car",
   "backpacking",
   "rv"
  ],
  "level": "beginner",
  "why": "Small, light binoculars for birds, wildlife, and the moon from camp.",
  "stocking": false,
  "asin": "B006ZN4SDG",
  "checked": "2026-11-02"
 },
 {
  "id": "natgeo-parks",
  "name": "National Geographic Guide to the National Parks (9th ed.)",
  "brand": "National Geographic",
  "price": "approx. $10–$15",
  "priceApprox": 10,
  "band": "u25",
  "who": [
   "partner",
   "mom",
   "dad",
   "coworker",
   "friend"
  ],
  "styles": [
   "car",
   "rv"
  ],
  "level": "beginner",
  "why": "Trip-planning fuel for next season; the gift that starts the next adventure.",
  "stocking": true,
  "asin": "1426221665",
  "checked": "2026-11-02"
 },
 {
  "id": "lodge-6",
  "name": "Lodge 6.5\" Cast Iron Skillet",
  "brand": "Lodge",
  "price": "approx. $10–$15",
  "priceApprox": 13,
  "band": "u25",
  "who": [
   "partner",
   "dad",
   "mom",
   "teen",
   "friend",
   "coworker"
  ],
  "styles": [
   "car",
   "backpacking",
   "rv",
   "fishing"
  ],
  "level": "any",
  "why": "A mini skillet for eggs, a single trout, or a campfire cookie; real cast iron under $15.",
  "stocking": true,
  "asin": "B00063RWT8",
  "checked": "2026-11-02"
 },
 {
  "id": "jetboil-flash",
  "name": "Jetboil Flash Cooking System",
  "brand": "Jetboil",
  "price": "approx. $140–$145",
  "priceApprox": 145,
  "band": "100+",
  "who": [
   "partner",
   "dad",
   "teen",
   "friend"
  ],
  "styles": [
   "backpacking",
   "hunting",
   "fishing",
   "winter"
  ],
  "level": "seasoned",
  "why": "Boils water in about two minutes for coffee or freeze-dried meals; a backpacker's favorite.",
  "stocking": false,
  "asin": "B0DXQCVVYB",
  "checked": "2026-11-02"
 },
 {
  "id": "msr-pocketrocket",
  "name": "MSR PocketRocket 2 Stove",
  "brand": "MSR",
  "price": "approx. $45–$50",
  "priceApprox": 50,
  "band": "25-50",
  "who": [
   "partner",
   "dad",
   "teen",
   "friend"
  ],
  "styles": [
   "backpacking",
   "hunting"
  ],
  "level": "seasoned",
  "why": "An ultralight stove that weighs about 3 oz; the upgrade a backpacker actually wants.",
  "stocking": false,
  "asin": "B01N5O7551",
  "checked": "2026-11-02"
 },
 {
  "id": "sawyer-squeeze",
  "name": "Sawyer Squeeze Water Filter System",
  "brand": "Sawyer",
  "price": "approx. $45–$50",
  "priceApprox": 46,
  "band": "25-50",
  "who": [
   "partner",
   "dad",
   "mom",
   "teen",
   "friend"
  ],
  "styles": [
   "backpacking",
   "hunting",
   "fishing"
  ],
  "level": "any",
  "why": "Turns stream water into drinking water; a trail essential that lasts for years.",
  "stocking": false,
  "asin": "B00B1OSU4W",
  "checked": "2026-11-02"
 },
 {
  "id": "lifestraw-peak",
  "name": "LifeStraw Peak Series Personal Water Filter Straw",
  "brand": "LifeStraw",
  "price": "approx. $20–$25",
  "priceApprox": 25,
  "band": "u25",
  "who": [
   "partner",
   "dad",
   "mom",
   "kid",
   "teen",
   "friend",
   "coworker"
  ],
  "styles": [
   "backpacking",
   "car",
   "hunting",
   "fishing"
  ],
  "level": "beginner",
  "why": "Drink safely straight from a stream; great backup for any pack or emergency kit.",
  "stocking": true,
  "asin": "B09SBPWHS7",
  "checked": "2026-11-02"
 },
 {
  "id": "katadyn-befree",
  "name": "Katadyn BeFree 1L Filter Bottle",
  "brand": "Katadyn",
  "price": "approx. $40–$45",
  "priceApprox": 45,
  "band": "25-50",
  "who": [
   "partner",
   "teen",
   "friend"
  ],
  "styles": [
   "backpacking"
  ],
  "level": "seasoned",
  "why": "Fill, squeeze, and drink; collapses to nothing when empty.",
  "stocking": false,
  "asin": "B075X5R67T",
  "checked": "2026-11-02"
 },
 {
  "id": "s2s-aeros",
  "name": "Sea to Summit Aeros Ultralight Pillow",
  "brand": "Sea to Summit",
  "price": "approx. $30–$35",
  "priceApprox": 35,
  "band": "25-50",
  "who": [
   "partner",
   "dad",
   "mom",
   "teen",
   "friend",
   "coworker"
  ],
  "styles": [
   "backpacking",
   "car",
   "rv",
   "winter"
  ],
  "level": "any",
  "why": "A real pillow that packs to fist size; ends the rolled-up-jacket era.",
  "stocking": false,
  "asin": "B07PCSHKFQ",
  "checked": "2026-11-02"
 },
 {
  "id": "zlite",
  "name": "Therm-a-Rest Z Lite Sol Sleeping Pad",
  "brand": "Therm-a-Rest",
  "price": "approx. $45–$50",
  "priceApprox": 50,
  "band": "25-50",
  "who": [
   "teen",
   "partner",
   "friend",
   "dad"
  ],
  "styles": [
   "backpacking",
   "winter"
  ],
  "level": "any",
  "why": "Unpoppable foam pad; doubles as a camp seat and adds warmth under an air pad in winter.",
  "stocking": false,
  "asin": "B005I6R0WC",
  "checked": "2026-11-02"
 },
 {
  "id": "bd-trail-poles",
  "name": "Black Diamond Trail Trekking Poles",
  "brand": "Black Diamond",
  "price": "approx. $85–$90",
  "priceApprox": 88,
  "band": "50-100",
  "who": [
   "dad",
   "mom",
   "partner"
  ],
  "styles": [
   "backpacking",
   "hunting"
  ],
  "level": "any",
  "why": "Saves knees on steep descents and steadies stream crossings.",
  "stocking": false,
  "asin": "B07KXXX6ZF",
  "checked": "2026-11-02"
 },
 {
  "id": "darn-tough",
  "name": "Darn Tough Hiker Micro Crew Socks",
  "brand": "Darn Tough",
  "price": "approx. $25–$30",
  "priceApprox": 26,
  "band": "25-50",
  "who": [
   "partner",
   "dad",
   "mom",
   "teen",
   "friend",
   "coworker"
  ],
  "styles": [
   "backpacking",
   "hunting",
   "fishing",
   "winter",
   "car"
  ],
  "level": "any",
  "why": "Merino socks with a lifetime guarantee; the stocking stuffer every hiker hopes for.",
  "stocking": true,
  "asin": "B01AITV95C",
  "checked": "2026-11-02"
 },
 {
  "id": "inreach-mini",
  "name": "Garmin inReach Mini 2 Satellite Communicator",
  "brand": "Garmin",
  "price": "approx. $310–$315",
  "priceApprox": 314,
  "band": "100+",
  "who": [
   "partner",
   "dad",
   "mom"
  ],
  "styles": [
   "backpacking",
   "hunting",
   "fishing",
   "winter"
  ],
  "level": "seasoned",
  "why": "SOS and texting from anywhere without cell service; peace of mind for the people at home. (Needs a subscription plan.)",
  "stocking": false,
  "asin": "B09PSKG7C3",
  "checked": "2026-11-02"
 },
 {
  "id": "nitecore-nu25",
  "name": "Nitecore NU25 UL Rechargeable Headlamp",
  "brand": "Nitecore",
  "price": "approx. $35–$40",
  "priceApprox": 37,
  "band": "25-50",
  "who": [
   "teen",
   "partner",
   "friend"
  ],
  "styles": [
   "backpacking",
   "hunting"
  ],
  "level": "seasoned",
  "why": "A 400-lumen headlamp that weighs about 2 oz and charges by USB-C.",
  "stocking": false,
  "asin": "B0DY2SW4CH",
  "checked": "2026-11-02"
 },
 {
  "id": "opinel-8",
  "name": "Opinel No. 08 Carbon Steel Folding Knife",
  "brand": "Opinel",
  "price": "approx. $15–$20",
  "priceApprox": 20,
  "band": "u25",
  "who": [
   "dad",
   "partner",
   "friend",
   "coworker"
  ],
  "styles": [
   "car",
   "backpacking",
   "fishing",
   "hunting"
  ],
  "level": "any",
  "why": "A classic French pocket knife for slicing cheese, rope, or kindling.",
  "stocking": true,
  "asin": "B002SCUO04",
  "checked": "2026-11-02"
 },
 {
  "id": "leatherman-wave",
  "name": "Leatherman Wave+ Multi-Tool",
  "brand": "Leatherman",
  "price": "approx. $100–$105",
  "priceApprox": 104,
  "band": "100+",
  "who": [
   "dad",
   "partner",
   "friend"
  ],
  "styles": [
   "car",
   "rv",
   "hunting",
   "fishing"
  ],
  "level": "any",
  "why": "Pliers, knives, and drivers in one; fixes everything from tent poles to RV trim.",
  "stocking": false,
  "asin": "B079MJBP21",
  "checked": "2026-11-02"
 },
 {
  "id": "victorinox-huntsman",
  "name": "Victorinox Huntsman Swiss Army Knife",
  "brand": "Victorinox",
  "price": "approx. $35–$40",
  "priceApprox": 39,
  "band": "25-50",
  "who": [
   "dad",
   "teen",
   "friend",
   "partner"
  ],
  "styles": [
   "car",
   "backpacking",
   "fishing",
   "hunting"
  ],
  "level": "beginner",
  "why": "Saw, scissors, can opener, and blades; the camp pocket knife people keep for decades.",
  "stocking": false,
  "asin": "B000MLU73W",
  "checked": "2026-11-02"
 },
 {
  "id": "nitecore-nb10000",
  "name": "Nitecore NB10000 Gen 2 Power Bank",
  "brand": "Nitecore",
  "price": "approx. $55–$60",
  "priceApprox": 60,
  "band": "50-100",
  "who": [
   "teen",
   "partner",
   "friend"
  ],
  "styles": [
   "backpacking",
   "car"
  ],
  "level": "any",
  "why": "Featherweight power bank that keeps phones, headlamps, and GPS alive on multi-day trips.",
  "stocking": false,
  "asin": "B0C1Q7R2HS",
  "checked": "2026-11-02"
 },
 {
  "id": "hydroflask-32",
  "name": "Hydro Flask 32 oz Wide Mouth Bottle",
  "brand": "Hydro Flask",
  "price": "approx. $40–$45",
  "priceApprox": 45,
  "band": "25-50",
  "who": [
   "partner",
   "dad",
   "mom",
   "teen",
   "friend",
   "coworker"
  ],
  "styles": [
   "car",
   "backpacking",
   "rv",
   "fishing"
  ],
  "level": "any",
  "why": "Ice water all day at a hot campsite; a gift that gets used every single day at home too.",
  "stocking": false,
  "asin": "B09SQQL36M",
  "checked": "2026-11-02"
 },
 {
  "id": "nalgene-32",
  "name": "Nalgene 32 oz Wide Mouth Bottle",
  "brand": "Nalgene",
  "price": "approx. $15–$20",
  "priceApprox": 16,
  "band": "u25",
  "who": [
   "partner",
   "dad",
   "mom",
   "kid",
   "teen",
   "friend",
   "coworker"
  ],
  "styles": [
   "backpacking",
   "car",
   "winter"
  ],
  "level": "beginner",
  "why": "Nearly indestructible; fill with hot water for a sleeping-bag warmer on cold nights.",
  "stocking": true,
  "asin": "B09LMP8NB2",
  "checked": "2026-11-02"
 },
 {
  "id": "firesteel",
  "name": "Light My Fire Swedish FireSteel Scout",
  "brand": "Light My Fire",
  "price": "approx. $10–$15",
  "priceApprox": 15,
  "band": "u25",
  "who": [
   "teen",
   "dad",
   "friend",
   "kid"
  ],
  "styles": [
   "backpacking",
   "car",
   "hunting",
   "winter"
  ],
  "level": "any",
  "why": "Throws hot sparks in wind and wet; a fire starter that never runs out of fuel.",
  "stocking": true,
  "asin": "B07NQHP4KX",
  "checked": "2026-11-02"
 },
 {
  "id": "uco-matches",
  "name": "UCO Stormproof Match Kit",
  "brand": "UCO",
  "price": "approx. $15–$20",
  "priceApprox": 15,
  "band": "u25",
  "who": [
   "partner",
   "dad",
   "mom",
   "teen",
   "friend",
   "coworker"
  ],
  "styles": [
   "car",
   "backpacking",
   "hunting",
   "fishing",
   "winter"
  ],
  "level": "beginner",
  "why": "Matches that relight after being dunked in water; the fire backup every pack needs.",
  "stocking": true,
  "asin": "B003I1T7ES",
  "checked": "2026-11-02"
 },
 {
  "id": "leukotape",
  "name": "Leukotape P Sports Tape",
  "brand": "Leukotape",
  "price": "approx. $10–$15",
  "priceApprox": 13,
  "band": "u25",
  "who": [
   "friend",
   "partner",
   "teen"
  ],
  "styles": [
   "backpacking",
   "hunting"
  ],
  "level": "seasoned",
  "why": "The blister tape long-distance hikers swear by; a small, insider stocking stuffer.",
  "stocking": true,
  "asin": "B000E59HXC",
  "checked": "2026-11-02"
 },
 {
  "id": "ti-spork",
  "name": "Light My Fire Titanium Spork",
  "brand": "Light My Fire",
  "price": "approx. $20–$25",
  "priceApprox": 25,
  "band": "u25",
  "who": [
   "partner",
   "dad",
   "mom",
   "teen",
   "friend",
   "coworker"
  ],
  "styles": [
   "backpacking"
  ],
  "level": "any",
  "why": "Spoon, fork, and knife edge in one ultralight titanium tool.",
  "stocking": true,
  "asin": "B08NF675DY",
  "checked": "2026-11-02"
 },
 {
  "id": "camco-regulator",
  "name": "Camco Brass RV Water Pressure Regulator",
  "brand": "Camco",
  "price": "approx. $10–$15",
  "priceApprox": 12,
  "band": "u25",
  "who": [
   "dad",
   "partner",
   "mom"
  ],
  "styles": [
   "rv"
  ],
  "level": "beginner",
  "why": "Protects the RV's plumbing from high campground water pressure; a must-have for new owners.",
  "stocking": true,
  "asin": "B003BZD08U",
  "checked": "2026-11-02"
 },
 {
  "id": "camco-filter",
  "name": "Camco TastePURE RV Water Filter (2-pack)",
  "brand": "Camco",
  "price": "approx. $20–$25",
  "priceApprox": 25,
  "band": "u25",
  "who": [
   "dad",
   "mom",
   "partner"
  ],
  "styles": [
   "rv"
  ],
  "level": "beginner",
  "why": "Better-tasting water at every campground hookup; a consumable RVers always need.",
  "stocking": true,
  "asin": "B0024E6V30",
  "checked": "2026-11-02"
 },
 {
  "id": "andersen-leveler",
  "name": "Andersen Camper Leveler (3604)",
  "brand": "Andersen Hitches",
  "price": "approx. $70–$75",
  "priceApprox": 75,
  "band": "50-100",
  "who": [
   "dad",
   "partner"
  ],
  "styles": [
   "rv"
  ],
  "level": "any",
  "why": "Level the trailer in one pull-on move instead of stacking blocks; RVers love these.",
  "stocking": false,
  "asin": "B07H9J47HR",
  "checked": "2026-11-02"
 },
 {
  "id": "camco-hose",
  "name": "Camco TastePURE 25 ft Drinking Water Hose",
  "brand": "Camco",
  "price": "approx. $10–$15",
  "priceApprox": 14,
  "band": "u25",
  "who": [
   "dad",
   "mom",
   "partner",
   "coworker"
  ],
  "styles": [
   "rv"
  ],
  "level": "beginner",
  "why": "Drinking-water-safe hose (not a garden hose); exactly what a new RV owner forgets.",
  "stocking": true,
  "asin": "B004ME11FS",
  "checked": "2026-11-02"
 },
 {
  "id": "blackstone-17",
  "name": "Blackstone 17\" Tabletop Griddle",
  "brand": "Blackstone",
  "price": "approx. $155–$160",
  "priceApprox": 160,
  "band": "100+",
  "who": [
   "dad",
   "partner",
   "mom"
  ],
  "styles": [
   "rv",
   "car",
   "hunting"
  ],
  "level": "any",
  "why": "Smash burgers and full breakfasts at the campsite; RV and tailgate crowd favorite.",
  "stocking": false,
  "asin": "B07ZS5HWCC",
  "checked": "2026-11-02"
 },
 {
  "id": "kidde-co",
  "name": "Kidde Battery Carbon Monoxide Detector",
  "brand": "Kidde",
  "price": "approx. $25–$30",
  "priceApprox": 28,
  "band": "25-50",
  "who": [
   "dad",
   "mom",
   "partner"
  ],
  "styles": [
   "rv",
   "winter",
   "hunting"
  ],
  "level": "any",
  "why": "A small alarm for the RV, cabin, or hunting shack; the thoughtful gift that keeps people safe.",
  "stocking": false,
  "asin": "B004Y6V5CI",
  "checked": "2026-11-02"
 },
 {
  "id": "spikeball",
  "name": "Spikeball 3-Ball Original Set",
  "brand": "Spikeball",
  "price": "approx. $70–$75",
  "priceApprox": 75,
  "band": "50-100",
  "who": [
   "teen",
   "friend",
   "partner"
  ],
  "styles": [
   "car",
   "rv"
  ],
  "level": "any",
  "why": "The campsite game teens and adults actually play; packs into one bag.",
  "stocking": false,
  "asin": "B002V7A7MQ",
  "checked": "2026-11-02"
 },
 {
  "id": "vortex-crossfire",
  "name": "Vortex Crossfire HD 10x42 Binoculars",
  "brand": "Vortex",
  "price": "approx. $145–$150",
  "priceApprox": 149,
  "band": "100+",
  "who": [
   "dad",
   "partner"
  ],
  "styles": [
   "hunting",
   "fishing"
  ],
  "level": "any",
  "why": "Crisp glass for glassing deer at dawn, with Vortex's no-questions lifetime warranty.",
  "stocking": false,
  "asin": "B07V3LB5DN",
  "checked": "2026-11-02"
 },
 {
  "id": "hothands-40",
  "name": "HotHands Hand Warmers (40 pairs)",
  "brand": "HotHands",
  "price": "approx. $25–$30",
  "priceApprox": 26,
  "band": "25-50",
  "who": [
   "partner",
   "dad",
   "mom",
   "kid",
   "teen",
   "friend",
   "coworker"
  ],
  "styles": [
   "hunting",
   "winter",
   "fishing",
   "car"
  ],
  "level": "any",
  "why": "Forty pairs to split across every stocking; used on cold stands, ice, and frosty camp mornings.",
  "stocking": true,
  "asin": "B0007ZF4OA",
  "checked": "2026-11-02"
 },
 {
  "id": "ocoopa",
  "name": "OCOOPA Rechargeable Hand Warmers (2-pack)",
  "brand": "OCOOPA",
  "price": "approx. $10–$15",
  "priceApprox": 15,
  "band": "u25",
  "who": [
   "partner",
   "dad",
   "mom",
   "kid",
   "teen",
   "friend",
   "coworker"
  ],
  "styles": [
   "hunting",
   "winter",
   "fishing"
  ],
  "level": "any",
  "why": "Rechargeable warmers that split into two; no more buying disposables.",
  "stocking": true,
  "asin": "B0FHH5SLZB",
  "checked": "2026-11-02"
 },
 {
  "id": "thermacell",
  "name": "Thermacell Portable Mosquito Repeller",
  "brand": "Thermacell",
  "price": "approx. $20–$25",
  "priceApprox": 24,
  "band": "u25",
  "who": [
   "partner",
   "dad",
   "mom",
   "teen",
   "friend",
   "coworker"
  ],
  "styles": [
   "hunting",
   "fishing",
   "car"
  ],
  "level": "any",
  "why": "A no-spray bug shield for tree stands, docks, and picnic tables.",
  "stocking": true,
  "asin": "B07JCQ8GQJ",
  "checked": "2026-11-02"
 },
 {
  "id": "mr-heater-buddy",
  "name": "Mr. Heater Portable Buddy Heater",
  "brand": "Mr. Heater",
  "price": "approx. $85–$90",
  "priceApprox": 90,
  "band": "50-100",
  "who": [
   "dad",
   "partner"
  ],
  "styles": [
   "hunting",
   "winter",
   "fishing",
   "rv"
  ],
  "level": "seasoned",
  "why": "Indoor-safe propane heat (with auto shutoff) for blinds and ice shanties; follow the ventilation rules.",
  "stocking": false,
  "asin": "B0GYT8HCT6",
  "checked": "2026-11-02"
 },
 {
  "id": "bushnell-core",
  "name": "Bushnell Core DS-4K No Glow Trail Camera",
  "brand": "Bushnell",
  "price": "approx. $175–$180",
  "priceApprox": 176,
  "band": "100+",
  "who": [
   "dad",
   "partner"
  ],
  "styles": [
   "hunting"
  ],
  "level": "seasoned",
  "why": "See what's walking past the stand all season; the gift that pays off before opening day.",
  "stocking": false,
  "asin": "B09DHL4S6J",
  "checked": "2026-11-02"
 },
 {
  "id": "primos-can",
  "name": "Primos The Original Can Deer Call",
  "brand": "Primos",
  "price": "approx. $10–$15",
  "priceApprox": 10,
  "band": "u25",
  "who": [
   "dad",
   "partner",
   "teen",
   "friend"
  ],
  "styles": [
   "hunting"
  ],
  "level": "any",
  "why": "Flip it over to make a doe bleat; the most recognized deer call in the woods, under $15.",
  "stocking": true,
  "asin": "B07C7HZ79N",
  "checked": "2026-11-02"
 },
 {
  "id": "koola-game-bags",
  "name": "Koola Buck Game Bags",
  "brand": "Koola Buck",
  "price": "approx. $20–$25",
  "priceApprox": 24,
  "band": "u25",
  "who": [
   "dad",
   "partner",
   "friend"
  ],
  "styles": [
   "hunting"
  ],
  "level": "seasoned",
  "why": "Breathable bags that keep meat clean on the pack-out; a practical gift hunters run out of.",
  "stocking": true,
  "asin": "B085MNYKDQ",
  "checked": "2026-11-02"
 },
 {
  "id": "buck-110",
  "name": "Buck 110 Folding Hunter Knife",
  "brand": "Buck Knives",
  "price": "approx. $85–$90",
  "priceApprox": 90,
  "band": "50-100",
  "who": [
   "dad",
   "partner"
  ],
  "styles": [
   "hunting",
   "car"
  ],
  "level": "any",
  "why": "An American classic with brass and ebony; the heirloom knife that gets passed down.",
  "stocking": false,
  "asin": "B000EHYZKK",
  "checked": "2026-11-02"
 },
 {
  "id": "lem-jerky",
  "name": "LEM Jerky Cannon",
  "brand": "LEM Products",
  "price": "approx. $55–$60",
  "priceApprox": 60,
  "band": "50-100",
  "who": [
   "dad",
   "partner",
   "friend"
  ],
  "styles": [
   "hunting"
  ],
  "level": "seasoned",
  "why": "Turns ground venison into jerky sticks for the next camp trip.",
  "stocking": false,
  "asin": "B000SQFGRS",
  "checked": "2026-11-02"
 },
 {
  "id": "meateater-cookbook",
  "name": "The MeatEater Fish and Game Cookbook",
  "brand": "Steven Rinella",
  "price": "approx. $10–$15",
  "priceApprox": 14,
  "band": "u25",
  "who": [
   "dad",
   "partner",
   "friend",
   "coworker"
  ],
  "styles": [
   "hunting",
   "fishing"
  ],
  "level": "any",
  "why": "Great recipes for venison, birds, and fish; turns this season's harvest into dinner.",
  "stocking": true,
  "asin": "0399590072",
  "checked": "2026-11-02"
 },
 {
  "id": "meateater-skills",
  "name": "The MeatEater Guide to Wilderness Skills and Survival",
  "brand": "Steven Rinella",
  "price": "approx. $15–$20",
  "priceApprox": 15,
  "band": "u25",
  "who": [
   "dad",
   "teen",
   "partner",
   "friend"
  ],
  "styles": [
   "hunting",
   "backpacking",
   "fishing"
  ],
  "level": "beginner",
  "why": "Practical backcountry skills from fire to navigation, written by hunters.",
  "stocking": true,
  "asin": "0593129695",
  "checked": "2026-11-02"
 },
 {
  "id": "ugly-stik-gx2",
  "name": "Ugly Stik GX2 Spinning Combo",
  "brand": "Ugly Stik",
  "price": "approx. $75–$80",
  "priceApprox": 80,
  "band": "50-100",
  "who": [
   "dad",
   "teen",
   "partner",
   "friend"
  ],
  "styles": [
   "fishing",
   "car"
  ],
  "level": "beginner",
  "why": "Nearly unbreakable rod-and-reel combo; the go-to first serious setup.",
  "stocking": false,
  "asin": "B0D1537STT",
  "checked": "2026-11-02"
 },
 {
  "id": "rapala-fillet",
  "name": "Rapala Fish 'n Fillet Knife (6\")",
  "brand": "Rapala",
  "price": "approx. $25–$30",
  "priceApprox": 27,
  "band": "25-50",
  "who": [
   "dad",
   "partner",
   "friend",
   "coworker"
  ],
  "styles": [
   "fishing"
  ],
  "level": "any",
  "why": "The fillet knife that's been in tackle boxes for 50 years, with sheath.",
  "stocking": false,
  "asin": "B001NXC89O",
  "checked": "2026-11-02"
 },
 {
  "id": "piscifun-pliers",
  "name": "Piscifun Aluminum Fishing Pliers",
  "brand": "Piscifun",
  "price": "approx. $20–$25",
  "priceApprox": 22,
  "band": "u25",
  "who": [
   "dad",
   "partner",
   "friend",
   "teen"
  ],
  "styles": [
   "fishing"
  ],
  "level": "any",
  "why": "Unhooks fish, cuts braid, opens split rings; lives on the belt.",
  "stocking": true,
  "asin": "B075965MS3",
  "checked": "2026-11-02"
 },
 {
  "id": "penn-battle",
  "name": "PENN Battle IV Spinning Reel",
  "brand": "PENN",
  "price": "approx. $125–$130",
  "priceApprox": 129,
  "band": "100+",
  "who": [
   "dad",
   "partner"
  ],
  "styles": [
   "fishing"
  ],
  "level": "seasoned",
  "why": "A tough all-metal reel for bigger fish and saltwater; an upgrade, not a starter.",
  "stocking": false,
  "asin": "B08BQ5GJLL",
  "checked": "2026-11-02"
 },
 {
  "id": "zebco-dock-demon",
  "name": "Zebco Dock Demon Kids Combo",
  "brand": "Zebco",
  "price": "approx. $20–$25",
  "priceApprox": 22,
  "band": "u25",
  "who": [
   "kid"
  ],
  "styles": [
   "fishing",
   "car"
  ],
  "level": "beginner",
  "why": "A short, easy rod for kids to catch their first sunfish off the dock.",
  "stocking": true,
  "asin": "B07XW34KKX",
  "checked": "2026-11-02"
 },
 {
  "id": "kastking-glasses",
  "name": "KastKing Tarkio Polarized Sunglasses",
  "brand": "KastKing",
  "price": "approx. $30–$35",
  "priceApprox": 34,
  "band": "25-50",
  "who": [
   "dad",
   "partner",
   "teen",
   "friend"
  ],
  "styles": [
   "fishing"
  ],
  "level": "any",
  "why": "Polarized lenses cut glare so they can see fish (and snags) under the water.",
  "stocking": false,
  "asin": "B0DGLD9XVV",
  "checked": "2026-11-02"
 },
 {
  "id": "buff-coolnet",
  "name": "Buff CoolNet UV Neck Gaiter",
  "brand": "Buff",
  "price": "approx. $20–$25",
  "priceApprox": 24,
  "band": "u25",
  "who": [
   "partner",
   "dad",
   "mom",
   "teen",
   "friend",
   "coworker"
  ],
  "styles": [
   "fishing",
   "backpacking"
  ],
  "level": "any",
  "why": "UPF 50 sun cover for long days on the water; pulls up as a face cover.",
  "stocking": true,
  "asin": "B07GR42L3C",
  "checked": "2026-11-02"
 },
 {
  "id": "carhartt-beanie",
  "name": "Carhartt Acrylic Watch Cap Beanie",
  "brand": "Carhartt",
  "price": "approx. $15–$20",
  "priceApprox": 20,
  "band": "u25",
  "who": [
   "partner",
   "dad",
   "mom",
   "kid",
   "teen",
   "friend",
   "coworker"
  ],
  "styles": [
   "hunting",
   "winter",
   "fishing",
   "car"
  ],
  "level": "any",
  "why": "The iconic beanie; warm, cheap, and comes in blaze orange for hunters.",
  "stocking": true,
  "asin": "B002G9UDYG",
  "checked": "2026-11-02"
 },
 {
  "id": "smartwool-beanie",
  "name": "Smartwool Thermal Merino Reversible Cuffed Beanie",
  "brand": "Smartwool",
  "price": "approx. $35–$40",
  "priceApprox": 35,
  "band": "25-50",
  "who": [
   "partner",
   "dad",
   "mom",
   "teen",
   "friend",
   "coworker"
  ],
  "styles": [
   "winter",
   "backpacking",
   "hunting"
  ],
  "level": "any",
  "why": "Merino stays warm when damp and doesn't stink; ideal for sleeping in on cold nights.",
  "stocking": false,
  "asin": "B01GQX0AEK",
  "checked": "2026-11-02"
 },
 {
  "id": "coleman-northrim",
  "name": "Coleman North Rim 0°F Mummy Sleeping Bag",
  "brand": "Coleman",
  "price": "approx. $90–$95",
  "priceApprox": 94,
  "band": "50-100",
  "who": [
   "dad",
   "teen",
   "partner"
  ],
  "styles": [
   "winter",
   "hunting"
  ],
  "level": "beginner",
  "why": "An affordable cold-weather bag for late-season hunting camps and first winter trips.",
  "stocking": false,
  "asin": "B0D643KDKN",
  "checked": "2026-11-02"
 },
 {
  "id": "xtherm",
  "name": "Therm-a-Rest NeoAir XTherm NXT Sleeping Pad",
  "brand": "Therm-a-Rest",
  "price": "approx. $225–$230",
  "priceApprox": 230,
  "band": "100+",
  "who": [
   "partner",
   "dad"
  ],
  "styles": [
   "winter",
   "backpacking"
  ],
  "level": "seasoned",
  "why": "Among the warmest ultralight pads (R 7.3); the serious upgrade for winter campers.",
  "stocking": false,
  "asin": "B0CS54SN91",
  "checked": "2026-11-02"
 },
 {
  "id": "hothands-toe",
  "name": "HotHands Toe Warmers",
  "brand": "HotHands",
  "price": "approx. $15–$20",
  "priceApprox": 20,
  "band": "u25",
  "who": [
   "partner",
   "dad",
   "mom",
   "kid",
   "teen",
   "friend",
   "coworker"
  ],
  "styles": [
   "hunting",
   "winter",
   "fishing"
  ],
  "level": "any",
  "why": "Stick-on toe warmers for long sits in the stand or on the ice.",
  "stocking": true,
  "asin": "B07J33BF7V",
  "checked": "2026-11-02"
 },
 {
  "id": "bug-bite-thing",
  "name": "Bug Bite Thing Suction Tool",
  "brand": "Bug Bite Thing",
  "price": "approx. $9–$10",
  "priceApprox": 10,
  "band": "u25",
  "who": [
   "partner",
   "dad",
   "mom",
   "kid",
   "teen",
   "friend",
   "coworker"
  ],
  "styles": [
   "car",
   "fishing",
   "hunting",
   "backpacking"
  ],
  "level": "beginner",
  "why": "Pulls out itch and sting at the source; tiny, cheap, and loved by parents.",
  "stocking": true,
  "asin": "B01576DWQU",
  "checked": "2026-11-02"
 }
];
