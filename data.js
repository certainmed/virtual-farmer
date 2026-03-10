// ==================== DATA DEFINITIONS ====================
const HOES = [
    { name: "Wooden Hoe", multiplier: 1.0, cost: 0 },
    { name: "Stone Hoe", multiplier: 2.4, cost: 500 },
    { name: "Lapis Hoe", multiplier: 3.7, cost: 1000 },
    { name: "Gold Hoe", multiplier: 4.9, cost: 1500 },
    { name: "Iron Hoe", multiplier: 4, cost: 2000 },
    { name: "Diamond Hoe", multiplier: 2.3, cost: 2500 },
    { name: "Netherite Hoe", multiplier: 2.58, cost: 3000 },
    { name: "Special Hoe", multiplier: 1.95, cost: 5000 },
    { name: "Emerald Hoe", multiplier: 3.2, cost: 7000 },
    { name: "Obsidian Hoe", multiplier: 3.9, cost: 10000 },
    { name: "Mythic Hoe", multiplier: 3.6, cost: 15000 },
    { name: "Platinum Hoe", multiplier: 5.2, cost: 20000 },
    { name: "Titanium Hoe", multiplier: 6.99, cost: 450000 },
    { name: "God Hoe", multiplier: 10.9, cost: 950000 },
    { name: "Dark Matter Hoe", multiplier: 15.0, cost: 2500000 },
    { name: "Quantum Hoe", multiplier: 25.0, cost: 10000000 },
    { name: "Singularity Hoe", multiplier: 50.0, cost: 50000000 },
    { name: "Plasma Cutter", multiplier: 85.5, cost: 150000000 },
    { name: "Solar Flare Hoe", multiplier: 140.0, cost: 450000000 },
    { name: "Nebula Harvester", multiplier: 255.2, cost: 1200000000 },
    { name: "String Theory Hoe", multiplier: 420.0, cost: 5500000000 },
    { name: "Antimatter Scythe", multiplier: 666.6, cost: 25000000000 },
    { name: "Time-Weaver's Tool", multiplier: 1024.0, cost: 100000000000 },
    { name: "Reality Glitch", multiplier: 2400.5, cost: 850000000000 },
    { name: "The Developer's Cursor", multiplier: 5555.5, cost: 5000000000000 },
    { name: "Admin Console", multiplier: 12500.0, cost: 45000000000000 },
    { name: "The 'NULL' Pointer", multiplier: 99999.9, cost: 999000000000000 }
];

// List of Plant Rarity Levels:
// 01  common
// 02  uncommon
// 03  rare
// 04  epic
// 05  legendary
// 06  mythic
// 07  ancient
// 08  celestial
// 09  eldritch
// 10  eternal
// 11  divine
// 12  cosmic
// 13  primordial
// 14  singularity
// 15  null
const PLANT_RARITY_LEVELS = [
    "common",
    "uncommon",
    "rare",
    "epic",
    "legendary",
    "mythic",
    "ancient",
    "celestial",
    "eldritch",
    "eternal",
    "divine",
    "cosmic",
    "primordial",
    "singularity",
    "null"
];

const NEW_PLANTS = [

    // 01 COMMON - range: 5-15 | minHoe: 0
    { name: "Cabbage",       price: 6,   rarity: "common", minHoe: 0 },
    { name: "Zucchini",      price: 11,  rarity: "common", minHoe: 0 },
    { name: "Turnip",        price: 7,   rarity: "common", minHoe: 0 },
    { name: "Garlic",        price: 13,  rarity: "common", minHoe: 0 },
    { name: "Leek",          price: 9,   rarity: "common", minHoe: 0 },
    { name: "Cauliflower",   price: 14,  rarity: "common", minHoe: 0 },
    { name: "Parsnip",       price: 8,   rarity: "common", minHoe: 0 },
    { name: "Celery",        price: 12,  rarity: "common", minHoe: 0 },
    { name: "Asparagus",     price: 5,   rarity: "common", minHoe: 0 },
    { name: "Lemongrass",    price: 10,  rarity: "common", minHoe: 0 },
    { name: "Clove",         price: 15,  rarity: "common", minHoe: 0 },
    { name: "Green Bean",    price: 7,   rarity: "common", minHoe: 0 },
    { name: "White Onion",   price: 11,  rarity: "common", minHoe: 0 },
    { name: "Radish",        price: 6,   rarity: "common", minHoe: 0 },
    { name: "Artichoke",     price: 13,  rarity: "common", minHoe: 0 },

    // 02 UNCOMMON - range: 17-43 | minHoe: 1-2
    { name: "Honeycrisp Apple", price: 23,  rarity: "uncommon", minHoe: 1 },
    { name: "Purple Yam",       price: 37,  rarity: "uncommon", minHoe: 1 },
    { name: "Cherry Tomato",    price: 19,  rarity: "uncommon", minHoe: 1 },
    { name: "Snow Pea",         price: 41,  rarity: "uncommon", minHoe: 1 },
    { name: "Blood Orange",     price: 28,  rarity: "uncommon", minHoe: 1 },
    { name: "Blue Corn",        price: 17,  rarity: "uncommon", minHoe: 1 },
    { name: "Starfruit",        price: 34,  rarity: "uncommon", minHoe: 1 },
    { name: "Pomegranate",      price: 22,  rarity: "uncommon", minHoe: 1 },
    { name: "Rhubarb",          price: 43,  rarity: "uncommon", minHoe: 2 },
    { name: "Bok Choy",         price: 31,  rarity: "uncommon", minHoe: 2 },
    { name: "Taro Root",        price: 18,  rarity: "uncommon", minHoe: 2 },
    { name: "Tiger Nut",        price: 39,  rarity: "uncommon", minHoe: 2 },
    { name: "Persimmon",        price: 26,  rarity: "uncommon", minHoe: 2 },
    { name: "Fig",              price: 21,  rarity: "uncommon", minHoe: 2 },
    { name: "Yellow Squash",    price: 33,  rarity: "uncommon", minHoe: 2 },

    // 03 RARE - range: 48-117 | minHoe: 2-4
    { name: "Sapphire Grape",    price: 73,   rarity: "rare", minHoe: 2 },
    { name: "Frost Mint",        price: 91,   rarity: "rare", minHoe: 2 },
    { name: "Ghost Pepper",      price: 54,   rarity: "rare", minHoe: 2 },
    { name: "Golden Beet",       price: 117,  rarity: "rare", minHoe: 3 },
    { name: "Crystal Rose",      price: 62,   rarity: "rare", minHoe: 3 },
    { name: "Ironcap Mushroom",  price: 84,   rarity: "rare", minHoe: 3 },
    { name: "Silver Leaf",       price: 48,   rarity: "rare", minHoe: 3 },
    { name: "Azure Kelp",        price: 107,  rarity: "rare", minHoe: 3 },
    { name: "Crimson Lotus",     price: 69,   rarity: "rare", minHoe: 3 },
    { name: "Ember Spice",       price: 96,   rarity: "rare", minHoe: 4 },
    { name: "Twilight Plum",     price: 51,   rarity: "rare", minHoe: 4 },
    { name: "Obsidian Cacao",    price: 113,  rarity: "rare", minHoe: 4 },
    { name: "Sun-Kissed Melon",  price: 77,   rarity: "rare", minHoe: 4 },
    { name: "Coral Berry",       price: 58,   rarity: "rare", minHoe: 4 },
    { name: "Silk Vine",         price: 88,   rarity: "rare", minHoe: 4 },

    // 04 EPIC - range: 124-318 | minHoe: 4-6
    { name: "Lava Melon",          price: 241,  rarity: "epic", minHoe: 4 },
    { name: "Whispering Reed",     price: 163,  rarity: "epic", minHoe: 5 },
    { name: "Sunsilk Corn",        price: 307,  rarity: "epic", minHoe: 5 },
    { name: "Thunderbloom",        price: 189,  rarity: "epic", minHoe: 5 },
    { name: "Glacier Berry",       price: 124,  rarity: "epic", minHoe: 5 },
    { name: "Venomous Pitcher",    price: 274,  rarity: "epic", minHoe: 5 },
    { name: "Shimmering Fig",      price: 147,  rarity: "epic", minHoe: 5 },
    { name: "Wind-Dancer Grass",   price: 318,  rarity: "epic", minHoe: 6 },
    { name: "Starflower",          price: 211,  rarity: "epic", minHoe: 6 },
    { name: "Bloodmoon Pumpkin",   price: 136,  rarity: "epic", minHoe: 6 },
    { name: "Magma Pod",           price: 258,  rarity: "epic", minHoe: 6 },
    { name: "Nightshade Orchid",   price: 178,  rarity: "epic", minHoe: 6 },
    { name: "Echoing Spore",       price: 293,  rarity: "epic", minHoe: 6 },
    { name: "Mirage Pear",         price: 154,  rarity: "epic", minHoe: 6 },
    { name: "Storm Kelp",          price: 226,  rarity: "epic", minHoe: 6 },

    // 05 LEGENDARY - range: 341-893 | minHoe: 7-9
    { name: "Phoenix Sprout",        price: 583,  rarity: "legendary", minHoe: 7 },
    { name: "Titan Root",            price: 412,  rarity: "legendary", minHoe: 7 },
    { name: "Dragon's Breath Chili", price: 761,  rarity: "legendary", minHoe: 7 },
    { name: "Midas Wheat",           price: 341,  rarity: "legendary", minHoe: 7 },
    { name: "Siren's Kelp",          price: 847,  rarity: "legendary", minHoe: 8 },
    { name: "Kraken Vine",           price: 476,  rarity: "legendary", minHoe: 8 },
    { name: "Gorgon's Basil",        price: 629,  rarity: "legendary", minHoe: 8 },
    { name: "Pegasus Grass",         price: 374,  rarity: "legendary", minHoe: 8 },
    { name: "Chimera Fruit",         price: 718,  rarity: "legendary", minHoe: 8 },
    { name: "Nectar Blossom",        price: 893,  rarity: "legendary", minHoe: 9 },
    { name: "Yeti's Frost-Bite",     price: 512,  rarity: "legendary", minHoe: 9 },
    { name: "Basilisk Scale Berry",  price: 667,  rarity: "legendary", minHoe: 9 },
    { name: "Unicorn Horn Root",     price: 438,  rarity: "legendary", minHoe: 9 },
    { name: "Griffin's Beak Seed",   price: 791,  rarity: "legendary", minHoe: 9 },
    { name: "Leviathan Core",        price: 554,  rarity: "legendary", minHoe: 9 },

    // 06 MYTHIC - range: 947-2483 | minHoe: 10-11
    { name: "Spirit Blossom",      price: 1673,  rarity: "mythic", minHoe: 10 },
    { name: "Fairy Tear Dew",      price: 947,   rarity: "mythic", minHoe: 10 },
    { name: "World Tree Acorn",    price: 2217,  rarity: "mythic", minHoe: 10 },
    { name: "Yggdrasil Bark",      price: 1384,  rarity: "mythic", minHoe: 10 },
    { name: "Valhalla Berry",      price: 2483,  rarity: "mythic", minHoe: 10 },
    { name: "Nirvana Lotus",       price: 1091,  rarity: "mythic", minHoe: 10 },
    { name: "Styx Lily",           price: 1856,  rarity: "mythic", minHoe: 11 },
    { name: "Elysian Grass",       price: 1243,  rarity: "mythic", minHoe: 11 },
    { name: "Ambrosia Apple",      price: 2074,  rarity: "mythic", minHoe: 11 },
    { name: "Nymph's Delight",     price: 1518,  rarity: "mythic", minHoe: 11 },
    { name: "Dryad's Heart",       price: 978,   rarity: "mythic", minHoe: 11 },
    { name: "Banshee Orchid",      price: 2341,  rarity: "mythic", minHoe: 11 },
    { name: "Will-o'-Wisp Bud",    price: 1127,  rarity: "mythic", minHoe: 11 },
    { name: "Muse's Inspiration",  price: 1762,  rarity: "mythic", minHoe: 11 },
    { name: "Pandora's Seed",      price: 2089,  rarity: "mythic", minHoe: 11 },

    // 07 ANCIENT - range: 2614-7183 | minHoe: 12-13
    { name: "Petrified Spore",        price: 4871,  rarity: "ancient", minHoe: 12 },
    { name: "First-Era Fern",         price: 2614,  rarity: "ancient", minHoe: 12 },
    { name: "Amber Bark",             price: 6347,  rarity: "ancient", minHoe: 12 },
    { name: "Mammoth Tusk Root",      price: 3782,  rarity: "ancient", minHoe: 12 },
    { name: "Fossilized Frond",       price: 7183,  rarity: "ancient", minHoe: 12 },
    { name: "Jurassic Amber",         price: 2943,  rarity: "ancient", minHoe: 12 },
    { name: "Dawn Moss",              price: 5614,  rarity: "ancient", minHoe: 13 },
    { name: "Proterozoic Algae",      price: 3217,  rarity: "ancient", minHoe: 13 },
    { name: "Stone-Fruit",            price: 6728,  rarity: "ancient", minHoe: 13 },
    { name: "Cave-Painter's Pigment", price: 4193,  rarity: "ancient", minHoe: 13 },
    { name: "Saber-Tooth Thorn",      price: 2871,  rarity: "ancient", minHoe: 13 },
    { name: "Neanderthal Nut",        price: 5439,  rarity: "ancient", minHoe: 13 },
    { name: "Ice-Age Lichen",         price: 7041,  rarity: "ancient", minHoe: 13 },
    { name: "Paleo-Plum",             price: 3564,  rarity: "ancient", minHoe: 13 },
    { name: "Forgotten Sprout",       price: 4807,  rarity: "ancient", minHoe: 13 },

    // 08 CELESTIAL - range: 7841-21673 | minHoe: 14-15
    { name: "Comet Dust",           price: 14382,  rarity: "celestial", minHoe: 14 },
    { name: "Starfall Berry",       price: 7841,   rarity: "celestial", minHoe: 14 },
    { name: "Lunar Lotus",          price: 19247,  rarity: "celestial", minHoe: 14 },
    { name: "Solar Flare Chili",    price: 11563,  rarity: "celestial", minHoe: 14 },
    { name: "Asteroid Bean",        price: 8374,   rarity: "celestial", minHoe: 14 },
    { name: "Milky Way Gourd",      price: 21673,  rarity: "celestial", minHoe: 14 },
    { name: "Constellation Vine",   price: 16091,  rarity: "celestial", minHoe: 15 },
    { name: "Shooting Star-Fruit",  price: 9618,   rarity: "celestial", minHoe: 15 },
    { name: "Aurora Bloom",         price: 13274,  rarity: "celestial", minHoe: 15 },
    { name: "Meteorite Mushroom",   price: 18432,  rarity: "celestial", minHoe: 15 },
    { name: "Orbiting Olive",       price: 7993,   rarity: "celestial", minHoe: 15 },
    { name: "Zodiac Zucchini",      price: 20814,  rarity: "celestial", minHoe: 15 },
    { name: "Eclipse Eggplant",     price: 12047,  rarity: "celestial", minHoe: 15 },
    { name: "Supermoon Strawberry", price: 17639,  rarity: "celestial", minHoe: 15 },
    { name: "Galaxy Grape",         price: 10283,  rarity: "celestial", minHoe: 15 },

    // 09 ELDRITCH - range: 23814-61273 | minHoe: 16-17
    { name: "Whispering Eye-Stalk",     price: 41837,  rarity: "eldritch", minHoe: 16 },
    { name: "Abyssal Kelp",             price: 23814,  rarity: "eldritch", minHoe: 16 },
    { name: "Madman's Gourd",           price: 57492,  rarity: "eldritch", minHoe: 16 },
    { name: "Tentacled Turnip",         price: 31658,  rarity: "eldritch", minHoe: 16 },
    { name: "Cthulhu's Cabbage",        price: 48374,  rarity: "eldritch", minHoe: 16 },
    { name: "Non-Euclidean Carrot",     price: 26193,  rarity: "eldritch", minHoe: 16 },
    { name: "Void-Watcher's Vine",      price: 61273,  rarity: "eldritch", minHoe: 17 },
    { name: "Deep-One's Delight",       price: 37841,  rarity: "eldritch", minHoe: 17 },
    { name: "R'lyeh Radish",            price: 24917,  rarity: "eldritch", minHoe: 17 },
    { name: "Madness Spore",            price: 53618,  rarity: "eldritch", minHoe: 17 },
    { name: "Shoggoth Slime",           price: 29473,  rarity: "eldritch", minHoe: 17 },
    { name: "Crawling Chaos Corn",      price: 44291,  rarity: "eldritch", minHoe: 17 },
    { name: "Unnamable Onion",          price: 34758,  rarity: "eldritch", minHoe: 17 },
    { name: "Color-Out-Of-Space Berry", price: 59014,  rarity: "eldritch", minHoe: 17 },
    { name: "Innsmouth Herb",           price: 27346,  rarity: "eldritch", minHoe: 17 },

    // 10 ETERNAL - range: 67483-184729 | minHoe: 18-19
    { name: "Timeless Blossom",   price: 112847,  rarity: "eternal", minHoe: 18 },
    { name: "Infinity Sprout",    price: 67483,   rarity: "eternal", minHoe: 18 },
    { name: "Chrono-Vine",        price: 158362,  rarity: "eternal", minHoe: 18 },
    { name: "Undying Acorn",      price: 84917,   rarity: "eternal", minHoe: 18 },
    { name: "Everlasting Ember",  price: 143758,  rarity: "eternal", minHoe: 18 },
    { name: "Ouroboros Root",     price: 73291,   rarity: "eternal", minHoe: 18 },
    { name: "Perma-Frost Peach",  price: 184729,  rarity: "eternal", minHoe: 19 },
    { name: "Immortal Iris",      price: 96143,   rarity: "eternal", minHoe: 19 },
    { name: "Endless Echo",       price: 127584,  rarity: "eternal", minHoe: 19 },
    { name: "Hourglass Herb",     price: 71836,   rarity: "eternal", minHoe: 19 },
    { name: "Millennium Melon",   price: 163491,  rarity: "eternal", minHoe: 19 },
    { name: "Eon Eggplant",       price: 89274,   rarity: "eternal", minHoe: 19 },
    { name: "Ageless Apple",      price: 137628,  rarity: "eternal", minHoe: 19 },
    { name: "Forever Fig",        price: 104857,  rarity: "eternal", minHoe: 19 },
    { name: "Time-Loop Tomato",   price: 178364,  rarity: "eternal", minHoe: 19 },

    // 11 DIVINE - range: 193847-548291 | minHoe: 20-21
    { name: "Ambrosia Bean",      price: 348291,  rarity: "divine", minHoe: 20 },
    { name: "Seraphim Petal",     price: 193847,  rarity: "divine", minHoe: 20 },
    { name: "God's Tear",         price: 471836,  rarity: "divine", minHoe: 20 },
    { name: "Archangel's Halo",   price: 264173,  rarity: "divine", minHoe: 20 },
    { name: "Holy Lily",          price: 517294,  rarity: "divine", minHoe: 20 },
    { name: "Eden's Apple",       price: 214638,  rarity: "divine", minHoe: 20 },
    { name: "Blessed Herb",       price: 392847,  rarity: "divine", minHoe: 21 },
    { name: "Retribution Pepper", price: 237594,  rarity: "divine", minHoe: 21 },
    { name: "Miracle Mustard",    price: 548291,  rarity: "divine", minHoe: 21 },
    { name: "Prophet's Peach",    price: 304817,  rarity: "divine", minHoe: 21 },
    { name: "Sacred Papyrus",     price: 427563,  rarity: "divine", minHoe: 21 },
    { name: "Benediction Berry",  price: 281947,  rarity: "divine", minHoe: 21 },
    { name: "Heavenly Chive",     price: 196384,  rarity: "divine", minHoe: 21 },
    { name: "Celestial Choir",    price: 463817,  rarity: "divine", minHoe: 21 },
    { name: "Omnipotent Onion",   price: 318472,  rarity: "divine", minHoe: 21 },

    // 12 COSMIC - range: 587463-1637284 | minHoe: 22-23
    { name: "Quasar Citrus",       price: 1247836,  rarity: "cosmic", minHoe: 22 },
    { name: "Supernova Plum",      price: 587463,   rarity: "cosmic", minHoe: 22 },
    { name: "Pulsar Pod",          price: 1483927,  rarity: "cosmic", minHoe: 22 },
    { name: "Dark Matter Melon",   price: 784291,   rarity: "cosmic", minHoe: 22 },
    { name: "Nebula Nectarine",    price: 1073648,  rarity: "cosmic", minHoe: 22 },
    { name: "Event Horizon Berry", price: 637184,   rarity: "cosmic", minHoe: 22 },
    { name: "Gravity Pumpkin",     price: 1637284,  rarity: "cosmic", minHoe: 23 },
    { name: "Interstellar Ivy",    price: 914873,   rarity: "cosmic", minHoe: 23 },
    { name: "Wormhole Wheat",      price: 1382947,  rarity: "cosmic", minHoe: 23 },
    { name: "Tachyon Tomato",      price: 712638,   rarity: "cosmic", minHoe: 23 },
    { name: "Cosmic Dust Carrot",  price: 1194827,  rarity: "cosmic", minHoe: 23 },
    { name: "Anti-Matter Apple",   price: 843917,   rarity: "cosmic", minHoe: 23 },
    { name: "Red Giant Radish",    price: 593748,   rarity: "cosmic", minHoe: 23 },
    { name: "White Dwarf Walnut",  price: 1528364,  rarity: "cosmic", minHoe: 23 },
    { name: "Background Bean",     price: 974182,   rarity: "cosmic", minHoe: 23 },

    // 13 PRIMORDIAL - range: 1738492-4927361 | minHoe: 24-25
    { name: "Genesis Seed",          price: 3284917,  rarity: "primordial", minHoe: 24 },
    { name: "Chaos Root",            price: 1738492,  rarity: "primordial", minHoe: 24 },
    { name: "First-Spark Cabbage",   price: 4193847,  rarity: "primordial", minHoe: 24 },
    { name: "Big Bang Berry",        price: 2374816,  rarity: "primordial", minHoe: 24 },
    { name: "Elemental Earth",       price: 3847291,  rarity: "primordial", minHoe: 24 },
    { name: "Raw Fire Pod",          price: 1924738,  rarity: "primordial", minHoe: 24 },
    { name: "Unshaped Water Kelp",   price: 4627183,  rarity: "primordial", minHoe: 25 },
    { name: "Howling Wind Reed",     price: 2847361,  rarity: "primordial", minHoe: 25 },
    { name: "Void-Before-Time Vine", price: 4927361,  rarity: "primordial", minHoe: 25 },
    { name: "The First Spore",       price: 2193847,  rarity: "primordial", minHoe: 25 },
    { name: "Alpha Adamant",         price: 3617284,  rarity: "primordial", minHoe: 25 },
    { name: "Ooze-Plant",            price: 1847362,  rarity: "primordial", minHoe: 25 },
    { name: "Spark of Life",         price: 4284917,  rarity: "primordial", minHoe: 25 },
    { name: "Base Reality Root",     price: 2638471,  rarity: "primordial", minHoe: 25 },
    { name: "Origin Orange",         price: 3974182,  rarity: "primordial", minHoe: 25 },

    // 14 SINGULARITY - range: 5284917-15847362 | minHoe: 25-26
    { name: "Horizon Peach",            price: 9473861,   rarity: "singularity", minHoe: 25 },
    { name: "Graviton Grape",           price: 5284917,   rarity: "singularity", minHoe: 25 },
    { name: "Schwarzschild Fig",        price: 13847291,  rarity: "singularity", minHoe: 25 },
    { name: "Spaghettification Squash", price: 7382941,   rarity: "singularity", minHoe: 25 },
    { name: "Infinite Density Plum",    price: 11294738,  rarity: "singularity", minHoe: 25 },
    { name: "Time-Dilation Tomato",     price: 6174382,   rarity: "singularity", minHoe: 26 },
    { name: "Hawking Radish",           price: 14738291,  rarity: "singularity", minHoe: 26 },
    { name: "Wormhole Watermelon",      price: 8473619,   rarity: "singularity", minHoe: 26 },
    { name: "Entangled Eggplant",       price: 5847362,   rarity: "singularity", minHoe: 26 },
    { name: "Absolute Zero Zucchini",   price: 12738491,  rarity: "singularity", minHoe: 26 },
    { name: "Light-Bending Berry",      price: 7193847,   rarity: "singularity", minHoe: 26 },
    { name: "Singularity Spore",        price: 15847362,  rarity: "singularity", minHoe: 26 },
    { name: "Collapsed Star-Fruit",     price: 9284731,   rarity: "singularity", minHoe: 26 },
    { name: "Macro-Gravity Melon",      price: 6473819,   rarity: "singularity", minHoe: 26 },
    { name: "Point of No Return",       price: 13284917,  rarity: "singularity", minHoe: 26 },

    // 15 NULL - range: 17384729-53847362 | minHoe: 26
    { name: "MissingNo Berry",           price: 34817293,  rarity: "null", minHoe: 26 },
    { name: "undefined_crop",            price: 17384729,  rarity: "null", minHoe: 26 },
    { name: "The Void Shard",            price: 48273641,  rarity: "null", minHoe: 26 },
    { name: "Zero-State Spore",          price: 23847162,  rarity: "null", minHoe: 26 },
    { name: "NaN Banana",                price: 53847362,  rarity: "null", minHoe: 26 },
    { name: "Syntax Error Sprout",       price: 19283746,  rarity: "null", minHoe: 26 },
    { name: "404 Fruit Not Found",       price: 41738291,  rarity: "null", minHoe: 26 },
    { name: "Segmentation Seed",         price: 27364819,  rarity: "null", minHoe: 26 },
    { name: "Null Pointer Plum",         price: 18473628,  rarity: "null", minHoe: 26 },
    { name: "Glitched Gourd",            price: 46283917,  rarity: "null", minHoe: 26 },
    { name: "[REDACTED] Root",           price: 32847163,  rarity: "null", minHoe: 26 },
    { name: "Memory Leak Melon",         price: 21947382,  rarity: "null", minHoe: 26 },
    { name: "Binary Bean",               price: 38174926,  rarity: "null", minHoe: 26 },
    { name: "Stack Overflow Strawberry", price: 51283746,  rarity: "null", minHoe: 26 },
    { name: "End of Execution",          price: 29473816,  rarity: "null", minHoe: 26 }
];

const PLANTS = NEW_PLANTS;

const FERTILIZERS = [
    { name: "Mud", bonus: 1, cost: 50 },
    { name: "Soil", bonus: 2, cost: 100 },
    { name: "Compost", bonus: 3, cost: 200 },
    { name: "Manure", bonus: 5, cost: 300 },
    { name: "Organic", bonus: 8, cost: 500 },
    { name: "Bio", bonus: 10, cost: 800 },
    { name: "Vermicompost", bonus: 12, cost: 1000 },
    { name: "Liquid", bonus: 15, cost: 1200 },
    { name: "Chemical", bonus: 30, cost: 1500 },
    { name: "Superphosphate", bonus: 40, cost: 1800 },
    { name: "Growth Serum", bonus: 100, cost: 5000 },
    { name: "Magic Dust", bonus: 250, cost: 15000 },
    { name: "Time Warp", bonus: 1000, cost: 50000 },
    { name: "Radioactive Waste", bonus: 2500, cost: 150000 },
    { name: "Nanobots Swarm", bonus: 6000, cost: 450000 },
    { name: "Phoenix Ash", bonus: 15000, cost: 1200000 },
    { name: "Dragon's Breath", bonus: 40000, cost: 3500000 },
    { name: "Liquid Luck", bonus: 100000, cost: 15000000 },
    { name: "Dark Energy", bonus: 250000, cost: 75000000 },
    { name: "Condensed Star", bonus: 777777, cost: 350000000 },
    { name: "Source Code Leak", bonus: 2500000, cost: 1500000000 },
    { name: "Cheat Engine", bonus: 10000000, cost: 8000000000 },
    { name: "Game Master's Blessing", bonus: 50000000, cost: 50000000000 }
];

// Upgrade categories for UI grouping
const UPGRADE_CATEGORIES = {
    farming: { label: "Farming", ids: ["sharperTools", "expertFarmer", "businessman", "marketSpecialist", "irrigationSystem", "automatedSprinkler", "duplicator", "experienced", "fertilizerEfficiency", "seedMultiplier", "advancedAnalytics"] },
    efficiency: { label: "Efficiency & Utility", ids: ["timeDilator", "recyclingProtocol", "geneticMutation", "rootExpansion", "autoNegotiator"] },
    economy: { label: "Economy & Wealth", ids: ["lobbying", "treasureHunter", "inflationMastery", "offshoreAccount", "taxEvasion"] },
    scifi: { label: "Anomaly & Sci-Fi", ids: ["quantumEntanglement", "cosmicRay", "realityAnchor", "darkMatterSoil", "singularityEngine"] }
};

const UPGRADES = [
    // Farming
    { id: "sharperTools", name: "Sharper Tools", desc: "+1 yield per level", maxLevel: 20, baseCost: 250 },
    { id: "expertFarmer", name: "Expert Farmer", desc: "+10% sell price per level", maxLevel: 10, baseCost: 250 },
    { id: "businessman", name: "Businessman", desc: "+5% sell price per level", maxLevel: 20, baseCost: 500 },
    { id: "marketSpecialist", name: "Market Specialist", desc: "+5% sell price per level", maxLevel: 10, baseCost: 750 },
    { id: "irrigationSystem", name: "Irrigation System", desc: "x1.2 yield per level", maxLevel: 5, baseCost: 1000 },
    { id: "automatedSprinkler", name: "Automated Sprinkler", desc: "+2 yield per level", maxLevel: 10, baseCost: 2000 },
    { id: "duplicator", name: "Duplicator", desc: "+5% double yield chance per level", maxLevel: 3, baseCost: 2500 },
    { id: "experienced", name: "Experienced", desc: "+20% XP per level", maxLevel: 5, baseCost: 2500 },
    { id: "fertilizerEfficiency", name: "Fertilizer Efficiency", desc: "+10% fertilizer bonus per level", maxLevel: 5, baseCost: 1500 },
    { id: "seedMultiplier", name: "Seed Multiplier", desc: "+5% yield per level", maxLevel: 20, baseCost: 4000 },
    { id: "advancedAnalytics", name: "Advanced Analytics", desc: "+3% to all bonuses per level", maxLevel: 40, baseCost: 3000 },
    // Efficiency & Utility
    { id: "timeDilator", name: "Time Dilator", desc: "-0.05s cooldown per level", maxLevel: 10, baseCost: 15000 },
    { id: "recyclingProtocol", name: "Recycling Protocol", desc: "5% chance to save fertilizer per level", maxLevel: 10, baseCost: 8000 },
    { id: "geneticMutation", name: "Genetic Mutation", desc: "0.5% chance for 10x Yield per level", maxLevel: 20, baseCost: 12000 },
    { id: "rootExpansion", name: "Root Expansion", desc: "+1 Yield for every 100 XP you have", maxLevel: 5, baseCost: 25000 },
    { id: "autoNegotiator", name: "Auto Negotiator", desc: "+2% sell price per Achievement unlocked", maxLevel: 10, baseCost: 30000 },
    // Economy & Wealth
    { id: "lobbying", name: "Lobbying", desc: "Reduces Hoe prices by 2% per level", maxLevel: 20, baseCost: 50000 },
    { id: "treasureHunter", name: "Treasure Hunter", desc: "1% chance to find direct Cash while farming", maxLevel: 10, baseCost: 10000 },
    { id: "inflationMastery", name: "Inflation Mastery", desc: "Sell price increases as you hold more items", maxLevel: 15, baseCost: 75000 },
    { id: "offshoreAccount", name: "Offshore Account", desc: "Keep 1% of Balance after Prestige per level", maxLevel: 10, baseCost: 500000 },
    { id: "taxEvasion", name: "Tax Evasion", desc: "+10% Money but -5% XP per level", maxLevel: 5, baseCost: 200000 },
    // Anomaly & Sci-Fi
    { id: "quantumEntanglement", name: "Quantum Entanglement", desc: "Harvesting gives 1 random owned crop too", maxLevel: 5, baseCost: 1000000 },
    { id: "cosmicRay", name: "Cosmic Ray", desc: "Permanently adds +0.1 to Hoe Multiplier per level", maxLevel: 20, baseCost: 5000000 },
    { id: "realityAnchor", name: "Reality Anchor", desc: "Prestige Bonus is 5% more effective per level", maxLevel: 10, baseCost: 25000000 },
    { id: "darkMatterSoil", name: "Dark Matter Soil", desc: "Base Yield +50 but Fertilizer costs double", maxLevel: 5, baseCost: 100000000 },
    { id: "singularityEngine", name: "Singularity Engine", desc: "Multiplies FINAL yield by 1.1x per level", maxLevel: 10, baseCost: 500000000 }
];

const ACHIEVEMENTS = [
    { id: "firstSteps", name: "First Steps", desc: "Harvest your first plant", icon: "1", check: (g, s) => s.totalFarms >= 1 },
    { id: "businessman", name: "Businessman", desc: "Earn $10,000 in a single sale", icon: "$", check: (g, s) => s.bestSale >= 10000 },
    { id: "collector", name: "Collector", desc: `Harvest all ${PLANTS.length} plant types at least once`, icon: "C", check: (g, s) => s.uniquePlantsHarvested >= PLANTS.length },
    { id: "legendaryHarvest", name: "Legendary Harvest", desc: "Harvest a Tier 05 Legendary plant", icon: "L", check: (g, s) => s.legendaryHarvested > 0 },
    { id: "efficiencyExpert", name: "Efficiency Expert", desc: "Max out Fertilizer Efficiency", icon: "E", check: (g) => g.upgrades.fertilizerEfficiency >= 5 },
    { id: "toolMaster", name: "Tool Master", desc: `Unlock all ${HOES.length} hoes`, icon: "T", check: (g) => g.unlockedHoes.length >= HOES.length },
    { id: "greenThumb", name: "Green Thumb", desc: "Harvest 10,000 total plants", icon: "G", check: (g, s) => s.totalPlantsHarvested >= 10000 },
    { id: "millionaire", name: "Millionaire", desc: "Accumulate $1,000,000 total balance", icon: "M", check: (g, s) => s.totalEarned >= 1000000 },
    { id: "prestigeI", name: "Prestige I", desc: "Complete your first prestige", icon: "P", check: (g) => g.prestigeLevel >= 1 },
    { id: "prestigeV", name: "Prestige V", desc: "Reach prestige level 5", icon: "V", check: (g) => g.prestigeLevel >= 5 },
    { id: "fertilzerFanatic", name: "Fertilizer Fanatic", desc: "Use 1,000 fertilizer units", icon: "F", check: (g, s) => s.totalFertilizerUsed >= 1000 },
    { id: "speedRunner", name: "Speed Runner", desc: "Perform 100 farms in one session", icon: "S", check: (g, s) => s.sessionFarms >= 100 },
    { id: "richFarmer", name: "Rich Farmer", desc: "Have $50,000 balance at once", icon: "R", check: (g) => g.balance >= 50000 },
    { id: "upgradeAddict", name: "Upgrade Addict", desc: "Purchase 50 total upgrade levels", icon: "U", check: (g) => Object.values(g.upgrades).reduce((a, b) => a + b, 0) >= 50 },
    { id: "completionist", name: "Completionist", desc: "Max all upgrades", icon: "X", check: (g) => UPGRADES.every(u => g.upgrades[u.id] >= u.maxLevel) },
    { id: "legendaryFarmer", name: "Legendary Farmer", desc: "Harvest 100 Legendary plants", icon: "D", check: (g, s) => s.legendaryHarvested >= 100 },
    { id: "billionaire", name: "Billionaire", desc: "Reach 1 Billion balance", icon: "B", check: (g) => g.balance >= 1000000000 },
    { id: "prestigeMaster", name: "Prestige Master", desc: "Reach Prestige level 10", icon: "K", check: (g) => g.prestigeLevel >= 10 }
];

const RARITY_CONSUMPTION = {
    common: 1,
    uncommon: 2,
    rare: 3,
    epic: 4,
    legendary: 5,
    mythic: 8,
    ancient: 16,
    celestial: 32,
    eldritch: 64,
    eternal: 128,
    divine: 256,
    cosmic: 512,
    primordial: 1024,
    singularity: 2048,
    null: 4096
};
const RARITY_ORDER = {
    common: 0,
    uncommon: 1,
    rare: 2,
    epic: 3,
    legendary: 4,
    mythic: 5,
    ancient: 6,
    celestial: 7,
    eldritch: 8,
    eternal: 9,
    divine: 10,
    cosmic: 11,
    primordial: 12,
    singularity: 13,
    null: 14
};
const COOLDOWN_DURATION = 1500;
const MAX_NOTIFICATIONS = 5;
