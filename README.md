# 🌾 Virtual Farming Simulator

A browser-based incremental farming game where you grow crops, unlock better tools, and progress through various upgrades and achievements.

## Overview

Virtual Farming Simulator is a single-page HTML/JavaScript game that runs entirely in the browser. Players harvest crops, sell them for money, and invest in upgrades to increase their farming efficiency. The game features a prestige system for long-term progression and saves progress automatically to local storage [file:1].

## Features

### 🌱 Core Gameplay
- **Farming**: Click the Farm button or press Space to harvest crops
- **20 Plant Types**: Ranging from common vegetables (Lettuce, Potato) to legendary items (Truffle, Saffron)
- **5 Rarity Tiers**: Normal, Rare, Epic, Mythical, and Legendary plants with increasing values

### ⛏️ Tools & Equipment
- **13 Hoes**: Progress from Wooden Hoe (1.0x multiplier) to Titanium Hoe (3.5x multiplier)
- **10 Fertilizers**: Consumable items that boost yield (Mud, Soil, Compost, Bio, Chemical, and more)
- Each hoe unlocks access to higher-tier plants [file:1]

### ⬆️ Upgrades
| Upgrade | Effect | Max Level |
|---------|--------|-----------|
| Sharper Tools | +1 yield per level | 20 |
| Expert Farmer | +10% sell price | 10 |
| Irrigation System | ×1.2 yield | 5 |
| Duplicator | +5% chance to double yield | 3 |
| Experienced | +20% XP per level | 5 |

### ⭐ Prestige System
Reset progress to earn permanent bonuses (+2% per prestige level, +1% per prestige point). This allows for infinite progression and replayability [file:1].

### 🏆 Achievements
12 achievements including First Steps, Millionaire, Tool Master, Collector, and more—each tracking different milestones.

## Controls

| Key | Action |
|-----|--------|
| Space | Farm |
| S | Sell all plants |
| 1-9 | Select hoe |
| F | Cycle fertilizer |

## Technical Details

- **Technology**: Vanilla HTML5, CSS3, JavaScript (no frameworks)
- **Storage**: LocalStorage for save/load functionality
- **Export/Import**: Base64-encoded save data for backup
- **Responsive**: Mobile-friendly design with media queries [file:1]

## Installation

1. Download the `virtualfarm.html` file
2. Open it in any modern web browser
3. No server or installation required

## Save System

- Auto-saves to browser localStorage
- Export saves as Base64 strings
- Import previously exported saves
- Full reset option available in Settings
