/* Camper Gift Finder - curated gift dataset.
   Product links were checked on Amazon.com on Nov 2, 2026. Prices change; the price on Amazon at the time of purchase applies.
   Affiliate tag is set in config below. */
window.GF_CONFIG = {
  AMAZON_TAG: 'campergiftfinder-20',
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
  "why": "Two burners, so pancakes and coffee can cook at the same time; runs on 1 lb propane cylinders. Outdoor use only.",
  "stocking": false,
  "asin": "B09HN1C1YJ",
  "checked": "2026-11-02"
 },
 {
  "id": "lodge-skillet",
  "name": "Lodge 10.25\" Pre-Seasoned Cast Iron Skillet",
  "brand": "Lodge",
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
  "why": "Pre-seasoned cast iron that works on a camp stove or over a campfire grate.",
  "stocking": false,
  "asin": "B00WTSCXIS",
  "checked": "2026-11-02"
 },
 {
  "id": "lodge-dutch",
  "name": "Lodge 6 qt Deep Camp Dutch Oven",
  "brand": "Lodge",
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
  "why": "Legs and a flanged lid designed to hold coals, for baking cobbler or simmering chili at a campfire.",
  "stocking": false,
  "asin": "B00006JSUH",
  "checked": "2026-11-02"
 },
 {
  "id": "pie-iron",
  "name": "Rome Square Cast Iron Pie Iron",
  "brand": "Rome Industries",
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
  "why": "Makes campfire grilled cheese and pie pockets; long handles keep hands back from the coals. Adults should supervise kids at the fire.",
  "stocking": false,
  "asin": "B000FNLXWG",
  "checked": "2026-11-02"
 },
 {
  "id": "yeti-rambler",
  "name": "YETI Rambler 20 oz Tumbler with MagSlider Lid",
  "brand": "YETI",
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
  "why": "A vacuum-insulated tumbler for hot coffee on a cold morning, with YETI's slide-to-close MagSlider lid.",
  "stocking": true,
  "asin": "B073WJMKHN",
  "checked": "2026-11-02"
 },
 {
  "id": "stanley-classic",
  "name": "Stanley Classic Legendary Vacuum Bottle (1.5 qt)",
  "brand": "Stanley",
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
  "why": "A large vacuum-insulated bottle for hot coffee in a tree stand, on a boat, or at a cold campsite.",
  "stocking": false,
  "asin": "B0CLZ1KY7Y",
  "checked": "2026-11-02"
 },
 {
  "id": "biolite-alpenglow",
  "name": "BioLite AlpenGlow 500 Rechargeable Lantern",
  "brand": "BioLite",
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
  "why": "A USB-rechargeable lantern with warm white light and color modes; no propane or mantles.",
  "stocking": false,
  "asin": "B08Z6294Y5",
  "checked": "2026-11-02"
 },
 {
  "id": "solo-bonfire",
  "name": "Solo Stove Bonfire 2.0 with Stand",
  "brand": "Solo Stove",
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
  "why": "A fire pit that Solo Stove markets as low-smoke, with a stand; a big-ticket gift for a backyard or campsite where fire pits are allowed.",
  "stocking": false,
  "asin": "B0B7BFJ5Y6",
  "checked": "2026-11-02"
 },
 {
  "id": "luminaid",
  "name": "LuminAID PackLite Nova Solar Lantern",
  "brand": "LuminAID",
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
  "why": "An inflatable solar lantern that folds flat, recharges in the sun, and hangs from a tent loop.",
  "stocking": true,
  "asin": "B0716JV1SG",
  "checked": "2026-11-02"
 },
 {
  "id": "goalzero-micro",
  "name": "Goal Zero Lighthouse Micro Flash",
  "brand": "Goal Zero",
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
  "why": "A pocket lantern-and-flashlight that recharges by USB; small enough to keep in a jacket pocket.",
  "stocking": true,
  "asin": "B01IQXDTGY",
  "checked": "2026-11-02"
 },
 {
  "id": "petzl-tikkina",
  "name": "Petzl Tikkina Headlamp",
  "brand": "Petzl",
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
  "why": "A simple, lightweight headlamp at a stocking-stuffer price; a handy spare for the car or pack.",
  "stocking": true,
  "asin": "B0FD64NN69",
  "checked": "2026-11-02"
 },
 {
  "id": "bd-spot",
  "name": "Black Diamond Spot 400 Headlamp",
  "brand": "Black Diamond",
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
  "why": "A headlamp Black Diamond lists at 400 lumens and rates waterproof, with a red-light mode for keeping night vision.",
  "stocking": false,
  "asin": "B0H1R7P6L2",
  "checked": "2026-11-02"
 },
 {
  "id": "gci-rocker",
  "name": "GCI Outdoor Freestyle Rocker Chair",
  "brand": "GCI Outdoor",
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
  "why": "A folding camp chair that rocks, for sitting around the campfire.",
  "stocking": false,
  "asin": "B087DRTZBF",
  "checked": "2026-11-02"
 },
 {
  "id": "kelty-loveseat",
  "name": "Kelty Low Loveseat Camp Chair",
  "brand": "Kelty",
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
  "why": "A blanket made with sleeping-bag-style insulation and shell fabric, for chilly campfire nights, stadiums, and the couch.",
  "stocking": false,
  "asin": "B0D8JR9JGJ",
  "checked": "2026-11-02"
 },
 {
  "id": "eno-doublenest",
  "name": "ENO DoubleNest Hammock",
  "brand": "Eagles Nest Outfitters",
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
  "why": "A roomy nylon hammock that packs into an attached stuff sack; check whether the listing includes tree straps.",
  "stocking": false,
  "asin": "B09KNX51D2",
  "checked": "2026-11-02"
 },
 {
  "id": "coghlans-forks",
  "name": "Coghlan's Telescoping Roasting Fork",
  "brand": "Coghlan's",
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
  "why": "A telescoping fork that extends to keep hands back from the fire for s'mores; inexpensive enough to get one per kid. Supervise kids at the fire.",
  "stocking": true,
  "asin": "B001F9Y560",
  "checked": "2026-11-02"
 },
 {
  "id": "carson-bugview",
  "name": "Carson BugView Bug Catcher Magnifier",
  "brand": "Carson",
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
  "why": "Catch, magnify, and release bugs; a nature activity for young kids at camp.",
  "stocking": true,
  "asin": "B000JQ5AZK",
  "checked": "2026-11-02"
 },
 {
  "id": "kidnoculars",
  "name": "Educational Insights GeoSafari Jr. Kidnoculars",
  "brand": "Educational Insights",
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
  "why": "Low-power kids' binoculars sized for small hands, for spotting birds and deer around camp. Check the listed age range.",
  "stocking": true,
  "asin": "B082VYVV8T",
  "checked": "2026-11-02"
 },
 {
  "id": "coleman-kids-bag",
  "name": "Coleman Kids 45°F Sleeping Bag",
  "brand": "Coleman",
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
  "why": "A kid-sized sleeping bag of their own; Coleman rates it to 45°F, so it's for mild nights.",
  "stocking": false,
  "asin": "B0CVSGRFW8",
  "checked": "2026-11-02"
 },
 {
  "id": "planisphere",
  "name": "The Night Sky Star Finder (40°–50° N, large)",
  "brand": "David Chandler",
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
  "why": "Set the date and time to identify constellations over camp; made for 40°–50° N, which covers most of the continental US.",
  "stocking": true,
  "asin": "0961320745",
  "checked": "2026-11-02"
 },
 {
  "id": "bananagrams",
  "name": "Bananagrams Word Game",
  "brand": "Bananagrams",
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
  "why": "A cookbook of campfire and camp-stove recipes, from breakfasts to dinners and desserts.",
  "stocking": true,
  "asin": "1579657990",
  "checked": "2026-11-02"
 },
 {
  "id": "celestron-upclose",
  "name": "Celestron UpClose G2 10x25 Compact Binoculars",
  "brand": "Celestron",
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
  "why": "A guidebook to the U.S. national parks for planning next season's trips.",
  "stocking": true,
  "asin": "1426221665",
  "checked": "2026-11-02"
 },
 {
  "id": "lodge-6",
  "name": "Lodge 6.5\" Cast Iron Skillet",
  "brand": "Lodge",
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
  "why": "A small cast iron skillet for eggs, a single trout, or a campfire cookie.",
  "stocking": true,
  "asin": "B00063RWT8",
  "checked": "2026-11-02"
 },
 {
  "id": "jetboil-flash",
  "name": "Jetboil Flash Cooking System",
  "brand": "Jetboil",
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
  "why": "An all-in-one stove and insulated cooking cup for boiling water for coffee or freeze-dried meals. Fuel sold separately; outdoor use only.",
  "stocking": false,
  "asin": "B0DXQCVVYB",
  "checked": "2026-11-02"
 },
 {
  "id": "msr-pocketrocket",
  "name": "MSR PocketRocket 2 Stove",
  "brand": "MSR",
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
  "why": "A compact canister stove that MSR lists at under 3 oz. Fuel sold separately; outdoor use only.",
  "stocking": false,
  "asin": "B01N5O7551",
  "checked": "2026-11-02"
 },
 {
  "id": "sawyer-squeeze",
  "name": "Sawyer Squeeze Water Filter System",
  "brand": "Sawyer",
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
  "why": "A squeeze filter that Sawyer rates for removing bacteria and protozoa. It does not remove viruses or chemicals.",
  "stocking": false,
  "asin": "B00B1OSU4W",
  "checked": "2026-11-02"
 },
 {
  "id": "lifestraw-peak",
  "name": "LifeStraw Peak Series Personal Water Filter Straw",
  "brand": "LifeStraw",
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
  "why": "A filter straw that LifeStraw rates for removing bacteria, parasites, and microplastics; a light backup for a pack or emergency kit.",
  "stocking": true,
  "asin": "B09SBPWHS7",
  "checked": "2026-11-02"
 },
 {
  "id": "katadyn-befree",
  "name": "Katadyn BeFree 1L Filter Bottle",
  "brand": "Katadyn",
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
  "why": "A soft filter bottle: fill, squeeze, and drink, and it collapses small when empty. See Katadyn for what it filters.",
  "stocking": false,
  "asin": "B075X5R67T",
  "checked": "2026-11-02"
 },
 {
  "id": "s2s-aeros",
  "name": "Sea to Summit Aeros Ultralight Pillow",
  "brand": "Sea to Summit",
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
  "why": "An inflatable pillow that packs to about fist size; an upgrade from a rolled-up jacket.",
  "stocking": false,
  "asin": "B07PCSHKFQ",
  "checked": "2026-11-02"
 },
 {
  "id": "zlite",
  "name": "Therm-a-Rest Z Lite Sol Sleeping Pad",
  "brand": "Therm-a-Rest",
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
  "why": "A foam sleeping pad that can't puncture; doubles as a camp seat or as an extra layer under an air pad.",
  "stocking": false,
  "asin": "B005I6R0WC",
  "checked": "2026-11-02"
 },
 {
  "id": "bd-trail-poles",
  "name": "Black Diamond Trail Trekking Poles",
  "brand": "Black Diamond",
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
  "why": "Adjustable trekking poles for balance on descents and stream crossings.",
  "stocking": false,
  "asin": "B07KXXX6ZF",
  "checked": "2026-11-02"
 },
 {
  "id": "darn-tough",
  "name": "Darn Tough Hiker Micro Crew Socks",
  "brand": "Darn Tough",
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
  "why": "Merino wool hiking socks, backed by Darn Tough's lifetime guarantee (see Darn Tough for terms).",
  "stocking": true,
  "asin": "B01AITV95C",
  "checked": "2026-11-02"
 },
 {
  "id": "inreach-mini",
  "name": "Garmin inReach Mini 2 Satellite Communicator",
  "brand": "Garmin",
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
  "why": "Two-way satellite messaging and SOS where there's no cell service. Needs an active Garmin subscription, and coverage depends on conditions.",
  "stocking": false,
  "asin": "B09PSKG7C3",
  "checked": "2026-11-02"
 },
 {
  "id": "nitecore-nu25",
  "name": "Nitecore NU25 UL Rechargeable Headlamp",
  "brand": "Nitecore",
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
  "why": "A headlamp Nitecore lists at 400 lumens and about 2 oz, recharging by USB-C.",
  "stocking": false,
  "asin": "B0DY2SW4CH",
  "checked": "2026-11-02"
 },
 {
  "id": "opinel-8",
  "name": "Opinel No. 08 Carbon Steel Folding Knife",
  "brand": "Opinel",
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
  "why": "A traditional French folding knife for slicing cheese, rope, or kindling. Adults only.",
  "stocking": true,
  "asin": "B002SCUO04",
  "checked": "2026-11-02"
 },
 {
  "id": "leatherman-wave",
  "name": "Leatherman Wave+ Multi-Tool",
  "brand": "Leatherman",
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
  "why": "Pliers, knives, and drivers in one tool for camp and RV repairs.",
  "stocking": false,
  "asin": "B079MJBP21",
  "checked": "2026-11-02"
 },
 {
  "id": "victorinox-huntsman",
  "name": "Victorinox Huntsman Swiss Army Knife",
  "brand": "Victorinox",
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
  "why": "Saw, scissors, can opener, and blades in one Swiss Army knife.",
  "stocking": false,
  "asin": "B000MLU73W",
  "checked": "2026-11-02"
 },
 {
  "id": "nitecore-nb10000",
  "name": "Nitecore NB10000 Gen 2 Power Bank",
  "brand": "Nitecore",
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
  "why": "A light 10,000 mAh power bank for phones, headlamps, and GPS units on multi-day trips.",
  "stocking": false,
  "asin": "B0C1Q7R2HS",
  "checked": "2026-11-02"
 },
 {
  "id": "hydroflask-32",
  "name": "Hydro Flask 32 oz Wide Mouth Bottle",
  "brand": "Hydro Flask",
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
  "why": "A vacuum-insulated bottle for cold water at a hot campsite, and handy at home too.",
  "stocking": false,
  "asin": "B09SQQL36M",
  "checked": "2026-11-02"
 },
 {
  "id": "nalgene-32",
  "name": "Nalgene 32 oz Wide Mouth Bottle",
  "brand": "Nalgene",
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
  "why": "A durable wide-mouth water bottle that's easy to fill and clean.",
  "stocking": true,
  "asin": "B09LMP8NB2",
  "checked": "2026-11-02"
 },
 {
  "id": "firesteel",
  "name": "Light My Fire Swedish FireSteel Scout",
  "brand": "Light My Fire",
  "priceApprox": 15,
  "band": "u25",
  "who": [
   "teen",
   "dad",
   "friend"
  ],
  "styles": [
   "backpacking",
   "car",
   "hunting",
   "winter"
  ],
  "level": "any",
  "why": "A ferro-rod fire starter that sparks in wind and wet weather; Light My Fire rates it for thousands of strikes.",
  "stocking": true,
  "asin": "B07NQHP4KX",
  "checked": "2026-11-02"
 },
 {
  "id": "uco-matches",
  "name": "UCO Stormproof Match Kit",
  "brand": "UCO",
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
  "why": "Stormproof matches that UCO says keep burning in wind and relight after getting wet; a backup fire starter for a pack.",
  "stocking": true,
  "asin": "B003I1T7ES",
  "checked": "2026-11-02"
 },
 {
  "id": "leukotape",
  "name": "Leukotape P Sports Tape",
  "brand": "Leukotape",
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
  "why": "A strong-adhesive sports tape that some hikers use to help prevent blisters.",
  "stocking": true,
  "asin": "B000E59HXC",
  "checked": "2026-11-02"
 },
 {
  "id": "ti-spork",
  "name": "Light My Fire Titanium Spork",
  "brand": "Light My Fire",
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
  "why": "Spoon, fork, and knife edge in one lightweight titanium tool.",
  "stocking": true,
  "asin": "B08NF675DY",
  "checked": "2026-11-02"
 },
 {
  "id": "camco-regulator",
  "name": "Camco Brass RV Water Pressure Regulator",
  "brand": "Camco",
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
  "why": "A brass regulator that limits incoming campground water pressure to help protect RV plumbing; a practical gift for new owners.",
  "stocking": true,
  "asin": "B003BZD08U",
  "checked": "2026-11-02"
 },
 {
  "id": "camco-filter",
  "name": "Camco TastePURE RV Water Filter (2-pack)",
  "brand": "Camco",
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
  "why": "Inline hose filters that Camco says reduce bad taste, odor, and sediment; RVers replace them regularly.",
  "stocking": true,
  "asin": "B0024E6V30",
  "checked": "2026-11-02"
 },
 {
  "id": "andersen-leveler",
  "name": "Andersen Camper Leveler (3604)",
  "brand": "Andersen Hitches",
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
  "why": "Level a trailer by driving onto a curved ramp and chocking it, instead of stacking blocks.",
  "stocking": false,
  "asin": "B07H9J47HR",
  "checked": "2026-11-02"
 },
 {
  "id": "camco-hose",
  "name": "Camco TastePURE 25 ft Drinking Water Hose",
  "brand": "Camco",
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
  "why": "A drinking-water hose that Camco makes for RV fresh-water hookups (unlike a garden hose).",
  "stocking": true,
  "asin": "B004ME11FS",
  "checked": "2026-11-02"
 },
 {
  "id": "blackstone-17",
  "name": "Blackstone 17\" Tabletop Griddle",
  "brand": "Blackstone",
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
  "why": "A tabletop propane griddle for smash burgers and full breakfasts at the campsite or tailgate. Outdoor use only.",
  "stocking": false,
  "asin": "B07ZS5HWCC",
  "checked": "2026-11-02"
 },
 {
  "id": "kidde-co",
  "name": "Kidde Battery Carbon Monoxide Detector",
  "brand": "Kidde",
  "priceApprox": 28,
  "band": "25-50",
  "who": [
   "dad",
   "mom",
   "partner"
  ],
  "styles": [
   "winter",
   "hunting"
  ],
  "level": "any",
  "why": "A battery carbon monoxide alarm for a cabin or for travel to rentals. Kidde says it is not approved for RV or boat use.",
  "stocking": false,
  "asin": "B004Y6V5CI",
  "checked": "2026-11-02"
 },
 {
  "id": "spikeball",
  "name": "Spikeball 3-Ball Original Set",
  "brand": "Spikeball",
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
  "why": "A fast lawn game for teens and adults that packs into one bag.",
  "stocking": false,
  "asin": "B002V7A7MQ",
  "checked": "2026-11-02"
 },
 {
  "id": "vortex-crossfire",
  "name": "Vortex Crossfire HD 10x42 Binoculars",
  "brand": "Vortex",
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
  "why": "10x42 binoculars for glassing deer at dawn, backed by Vortex's VIP warranty (see Vortex for terms).",
  "stocking": false,
  "asin": "B07V3LB5DN",
  "checked": "2026-11-02"
 },
 {
  "id": "hothands-40",
  "name": "HotHands Hand Warmers (40 pairs)",
  "brand": "HotHands",
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
  "why": "Forty pairs of air-activated hand warmers to split across stockings, for cold stands, ice fishing, and frosty camp mornings.",
  "stocking": true,
  "asin": "B0007ZF4OA",
  "checked": "2026-11-02"
 },
 {
  "id": "ocoopa",
  "name": "OCOOPA Rechargeable Hand Warmers (2-pack)",
  "brand": "OCOOPA",
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
  "why": "Rechargeable hand warmers that split into two, instead of buying disposables.",
  "stocking": true,
  "asin": "B0FHH5SLZB",
  "checked": "2026-11-02"
 },
 {
  "id": "thermacell",
  "name": "Thermacell Portable Mosquito Repeller",
  "brand": "Thermacell",
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
  "why": "A no-spray mosquito repeller that runs on fuel cartridges, for tree stands, docks, and picnic tables.",
  "stocking": true,
  "asin": "B07JCQ8GQJ",
  "checked": "2026-11-02"
 },
 {
  "id": "mr-heater-buddy",
  "name": "Mr. Heater Portable Buddy Heater",
  "brand": "Mr. Heater",
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
  "why": "A propane heater that Mr. Heater approves for indoor use in ventilated tents, blinds, and ice shanties. Its manual says never run it while sleeping.",
  "stocking": false,
  "asin": "B0GYT8HCT6",
  "checked": "2026-11-02"
 },
 {
  "id": "bushnell-core",
  "name": "Bushnell Core DS-4K No Glow Trail Camera",
  "brand": "Bushnell",
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
  "why": "A trail camera for seeing what walks past the stand all season; needs batteries and an SD card.",
  "stocking": false,
  "asin": "B09DHL4S6J",
  "checked": "2026-11-02"
 },
 {
  "id": "primos-can",
  "name": "Primos The Original Can Deer Call",
  "brand": "Primos",
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
  "why": "Flip it over to make a doe bleat; a simple, easy-to-use deer call.",
  "stocking": true,
  "asin": "B07C7HZ79N",
  "checked": "2026-11-02"
 },
 {
  "id": "koola-game-bags",
  "name": "Koola Buck Game Bags",
  "brand": "Koola Buck",
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
  "why": "Breathable game bags for keeping meat clean on the pack-out; hunters use them up.",
  "stocking": true,
  "asin": "B085MNYKDQ",
  "checked": "2026-11-02"
 },
 {
  "id": "buck-110",
  "name": "Buck 110 Folding Hunter Knife",
  "brand": "Buck Knives",
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
  "why": "Buck's long-running folding hunting knife, with brass bolsters and a wood handle. Adults only.",
  "stocking": false,
  "asin": "B000EHYZKK",
  "checked": "2026-11-02"
 },
 {
  "id": "lem-jerky",
  "name": "LEM Jerky Cannon",
  "brand": "LEM Products",
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
  "why": "Steven Rinella's recipes for venison, birds, and fish; turns this season's harvest into dinner.",
  "stocking": true,
  "asin": "0399590072",
  "checked": "2026-11-02"
 },
 {
  "id": "meateater-skills",
  "name": "The MeatEater Guide to Wilderness Skills and Survival",
  "brand": "Steven Rinella",
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
  "why": "Steven Rinella's practical backcountry skills, from fire to navigation.",
  "stocking": true,
  "asin": "0593129695",
  "checked": "2026-11-02"
 },
 {
  "id": "ugly-stik-gx2",
  "name": "Ugly Stik GX2 Spinning Combo",
  "brand": "Ugly Stik",
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
  "why": "A spinning rod-and-reel combo with a graphite-and-fiberglass rod; a good fit for a first setup.",
  "stocking": false,
  "asin": "B0D1537STT",
  "checked": "2026-11-02"
 },
 {
  "id": "rapala-fillet",
  "name": "Rapala Fish 'n Fillet Knife (6\")",
  "brand": "Rapala",
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
  "why": "Rapala's long-running fillet knife, sold with a sheath. Adults only.",
  "stocking": false,
  "asin": "B001NXC89O",
  "checked": "2026-11-02"
 },
 {
  "id": "piscifun-pliers",
  "name": "Piscifun Aluminum Fishing Pliers",
  "brand": "Piscifun",
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
  "why": "Unhooks fish, cuts braid, and opens split rings; rides on a belt.",
  "stocking": true,
  "asin": "B075965MS3",
  "checked": "2026-11-02"
 },
 {
  "id": "penn-battle",
  "name": "PENN Battle IV Spinning Reel",
  "brand": "PENN",
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
  "why": "A spinning reel with a full-metal body for bigger fish and saltwater; better as an upgrade than a starter.",
  "stocking": false,
  "asin": "B08BQ5GJLL",
  "checked": "2026-11-02"
 },
 {
  "id": "zebco-dock-demon",
  "name": "Zebco Dock Demon Kids Combo",
  "brand": "Zebco",
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
  "why": "A short, easy rod for kids to catch their first sunfish off the dock. An adult should handle the hooks.",
  "stocking": true,
  "asin": "B07XW34KKX",
  "checked": "2026-11-02"
 },
 {
  "id": "kastking-glasses",
  "name": "KastKing Tarkio Polarized Sunglasses",
  "brand": "KastKing",
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
  "why": "Polarized lenses cut surface glare, which can make fish and snags easier to see.",
  "stocking": false,
  "asin": "B0DGLD9XVV",
  "checked": "2026-11-02"
 },
 {
  "id": "buff-coolnet",
  "name": "Buff CoolNet UV Neck Gaiter",
  "brand": "Buff",
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
  "why": "A neck gaiter that Buff rates UPF 50, for long days on the water; pulls up as a face cover.",
  "stocking": true,
  "asin": "B07GR42L3C",
  "checked": "2026-11-02"
 },
 {
  "id": "carhartt-beanie",
  "name": "Carhartt Acrylic Watch Cap Beanie",
  "brand": "Carhartt",
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
  "why": "Carhartt's warm, inexpensive knit watch cap, sold in many colors.",
  "stocking": true,
  "asin": "B002G9UDYG",
  "checked": "2026-11-02"
 },
 {
  "id": "smartwool-beanie",
  "name": "Smartwool Thermal Merino Reversible Cuffed Beanie",
  "brand": "Smartwool",
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
  "why": "A merino wool beanie; merino stays warm when damp and resists odor, which makes it good for cold nights.",
  "stocking": false,
  "asin": "B01GQX0AEK",
  "checked": "2026-11-02"
 },
 {
  "id": "coleman-northrim",
  "name": "Coleman North Rim 0°F Mummy Sleeping Bag",
  "brand": "Coleman",
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
  "why": "A budget cold-weather mummy bag that Coleman rates to 0°F, for late-season hunting camps. Comfort varies, so layer up.",
  "stocking": false,
  "asin": "B0D643KDKN",
  "checked": "2026-11-02"
 },
 {
  "id": "xtherm",
  "name": "Therm-a-Rest NeoAir XTherm NXT Sleeping Pad",
  "brand": "Therm-a-Rest",
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
  "why": "An ultralight air pad that Therm-a-Rest lists at R-value 7.3; an upgrade for winter campers.",
  "stocking": false,
  "asin": "B0CS54SN91",
  "checked": "2026-11-02"
 },
 {
  "id": "hothands-toe",
  "name": "HotHands Toe Warmers",
  "brand": "HotHands",
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
  "why": "A small suction tool marketed for use on bug bites and stings.",
  "stocking": true,
  "asin": "B01576DWQU",
  "checked": "2026-11-02"
 }
];
