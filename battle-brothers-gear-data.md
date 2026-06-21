# Battle Brothers - Gear Stats Data

Source: Battle Brothers Fextralife/Fandom wiki (battlebrothers.fandom.com), verified against game version 1.5.2.2.
Purpose: structured data file for building a data-driven, sortable gear stats page on The Arcanum.

---

## How to use this file

Every weapon and armor entry below is a row of real stats pulled from the wiki. Categories are grouped by header. Stat columns are consistent within each weapon/armor type (noted at the top of each section). Sections marked **[TODO - NEEDS FETCH]** still need their numbers pulled in (the wiki kept bot-blocking or truncating those tables); they are listed with the item names that belong there so the structure is ready.

Suggested JS data shape when you build the page:

```js
// weapons
{ name, category, hands, worth, dmgMin, dmgMax, ignoreArmor, vsArmor, durability, maxFatigue, headChance, shieldDamage, dlc, notes }
// body armor / helmets
{ name, durability, maxFatigue, ratio, vision, worth, dlc, notes }
// shields
{ name, durability, maxFatigue, meleeDef, rangedDef, worth, dlc, notes }
```

---

## General Combat Notes (apply to all weapons)

- Each skill deals its listed damage vs. HP. Against armor, that damage is modified by the weapon's armor effectiveness (Vs. Armor %).
- Ignores Armor % is the portion of damage that always goes to HP regardless of armor.
- A hit to the head with any weapon deals +50% additional damage to HP (not to armor).
- Orc Weapons (Tree Limb, Cudgel, Head Splitter, etc.) require 5 additional fatigue points per skill use when wielded by humans.
- Barbarian-variant maces/hammers/axes get a higher Direct Damage % on their special skills (noted where relevant).
- Two-handed weapons add two extra stat columns: Chance to hit head, and Shield Damage (where applicable).

Damage type quick reference:
- Cutting (swords, axes, cleavers): strong armor penetration scaling, head-hit bonus.
- Piercing (daggers, spears): Puncture/Thrust options, ignores armor on Puncture.
- Blunt (maces, hammers, flails): high Vs. Armor %, stun/daze/fatigue effects.

---

# MELEE WEAPONS

Weapon stat columns: Name | Worth | Damage | Ignores Armor % | Vs. Armor % | Durability | Max. Fatigue (penalty) | DLC
Two-handers add: Chance to hit head | Shield Damage

---

## Daggers

Skills: Stab (4 AP / 7 fat), Puncture (4 AP / 20 fat, -15% hit, 100% ignores armor, body hits only), Deathblow (Qatal), Slash (Notched Blade).

| Name | Worth | Damage | Ignores Armor | Vs. Armor | Durability | Max. Fatigue | DLC |
|------|-------|--------|---------------|-----------|------------|--------------|-----|
| Knife | 30 | 15-25 | 20% | 50% | 32 | 0 | - |
| Dagger | 180 | 15-35 | 20% | 60% | 40 | 0 | - |
| Notched Blade | 350 | 20-30 | 20% | 60% | 44 | -3 | - |
| Rondel Dagger | 400 | 20-40 | 20% | 70% | 50 | 0 | - |
| Qatal Dagger | 1000 | 30-45 | 20% | 70% | 60 | 0 | Blazing Deserts |

---

## Swords

### One-Handed Swords
Skills: Slash (+10% hit), Gash (injury threshold), Riposte (counter), Lunge (Fencing), Puncture (Saif/Cruel Falchion variants).

| Name | Worth | Damage | Ignores Armor | Vs. Armor | Durability | Max. Fatigue | DLC |
|------|-------|--------|---------------|-----------|------------|--------------|-----|
| Broken Ancient Sword | 200 | 30-35 | 20% | 75% | 24 | -3 | - |
| Shortsword | 350 | 30-40 | 20% | 75% | 48 | -4 | - |
| Saif | 350 | 35-40 | 20% | 65% | 48 | -4 | Blazing Deserts |
| Falchion | 500 | 35-45 | 20% | 70% | 48 | -6 | - |
| Cruel Falchion | 900 | 35-45 | 20% | 70% | 52 | -4 | - |
| Ancient Sword | 850 | 38-43 | 20% | 80% | 42 | -6 | - |
| Scimitar | 1000 | 40-45 | 20% | 70% | 48 | -6 | Warriors of the North / Blazing Deserts |
| Arming Sword | 1250 | 40-45 | 20% | 80% | 56 | -6 | - |
| Shamshir | 2900 | 45-50 | 20% | 75% | 72 | -8 | Warriors of the North / Blazing Deserts |
| Noble Sword | 3200 | 45-50 | 20% | 85% | 72 | -8 | - |
| Fencing Sword | 1550 | 35-50 | 20% | 75% | 48 | -4 | Beasts & Exploration / Blazing Deserts (Sword Eater event) |
| Notched Blade | 350 | 20-30 | 20% | 60% | 44 | -3 | - |

### Two-Handed Swords
Skills: Slash, Overhead Strike (+20 dmg), Split (2 targets in line), Swing (3 targets), Split Shield, Execute (+15% head, Executioner's), Decapitate (Executioner's).

| Name | Worth | Damage | Ignores Armor | Vs. Armor | Head Chance | Shield Dmg | Durability | Max. Fatigue | DLC |
|------|-------|--------|---------------|-----------|-------------|-----------|------------|--------------|-----|
| Rhomphaia | 1300 | 45-65 | 20% | 105% | +5% | - | 42 | -10 | - |
| Warbrand | 1600 | 50-75 | 20% | 75% | +5% | - | 64 | -10 | - |
| Longsword | 1700 | 65-85 | 25% | 100% | +5% | 12 | 60 | -10 | Beasts & Exploration |
| Greatsword | 3200 | 85-100 | 25% | 100% | +5% | 16 | 72 | -12 | - |
| Executioner's Sword | 2900 | 95-110 | 35% | 90% | +5% | 16 | 72 | -12 | - (v1.5.2.2) |

---

## Maces

### One-Handed Maces
Skills: Bash (+10 fatigue to target, 40% direct dmg), Knock Out (75% stun, -50% dmg). Barbarian mace variants get +10% direct dmg.

| Name | Worth | Damage | Ignores Armor | Vs. Armor | Durability | Max. Fatigue | DLC |
|------|-------|--------|---------------|-----------|------------|--------------|-----|
| Wooden Stick | 35 | 15-25 | 40% | 50% | 32 | -6 | - |
| Claw Club | 100 | 20-30 | 50% | 75% | 76 | -10 | Warriors of the North |
| Bludgeon | 90 | 20-35 | 40% | 75% | 64 | -8 | - |
| Nomad Mace | 100 | 25-35 | 40% | 90% | 64 | -8 | Blazing Deserts |
| Light Southern Mace | 400 | 30-40 | 40% | 110% | 72 | -10 | Blazing Deserts |
| Morning Star | 650 | 30-45 | 40% | 100% | 72 | -10 | - |
| Heavy Southern Mace | 2000 | 35-50 | 40% | 120% | 80 | -10 | Blazing Deserts |
| Winged Mace | 2000 | 35-55 | 40% | 110% | 80 | -10 | - |
| Gnarly Staff | 1000 | 25-35 | 40% | 70% | 56 | -4 | - |
| Tree Limb (Orc) | 150 | 25-40 | 40% | 75% | 44 | -20 | - |
| Cudgel (Orc) | 300 | 30-50 | 40% | 90% | 68 | -20 | - |
| Lute | 120 | 5-10 | 40% | 10% | 2 | -4 | - |

### Two-Handed Maces
Skills: Cudgel (+20 dmg, 100% daze), Strike Down (75% stun 2 turns), Split Shield, Crumble (AoE), Knock Over (75% stun AoE), Thrust (Polemace), Knock Out (Goedendag). Mace Mastery makes stuns/dazes near-guaranteed.

| Name | Worth | Damage | Ignores Armor | Vs. Armor | Head Chance | Durability | Shield Dmg | Max. Fatigue | DLC |
|------|-------|--------|---------------|-----------|-------------|------------|-----------|--------------|-----|
| Two-Handed Spiked Mace | 900 | 50-70 | 60% | 115% | +-0% | 72 | 20 | -14 | Warriors of the North |
| Two-Handed Mace | 1100 | 50-75 | 50% | 115% | +-0% | 80 | 20 | -14 | Beasts & Exploration |
| Two-Handed Flanged Mace | 1900 | 75-95 | 50% | 125% | +-0% | 120 | 26 | -16 | Beasts & Exploration |
| Polemace | 1400 | 60-75 | 40% | 120% | +5% | 64 | - | -14 | Blazing Deserts |
| Goedendag | 600 | 45-75 | 25% | 110% | +-0% | 64 | - | -14 | Beasts & Exploration |

---

## Spears

### One-Handed Spears
Skills: Thrust (+20% hit), Spearwall (-50% dmg reaction), Ignite (Fire Lance, ranged-skill based).

| Name | Worth | Damage | Ignores Armor | Vs. Armor | Durability | Max. Fatigue | DLC |
|------|-------|--------|---------------|-----------|------------|--------------|-----|
| Militia Spear | 180 | 25-30 | 25% | 90% | 48 | -6 | - |
| Ancient Spear | 150 | 20-35 | 25% | 100% | 36 | -6 | - |
| Goblin Skewer | 300 | 25-35 | 25% | 70% | 36 | -3 | - |
| Boar Spear | 750 | 30-35 | 25% | 95% | 64 | -8 | - |
| Fire Lance | 750 | 30-35 | 25% | 110% | 48 | -12 | Blazing Deserts |
| Fighting Spear | 2250 | 35-40 | 25% | 100% | 72 | -10 | - |

### Two-Handed Spears
Skills: Prong (+10% hit, AoE), Spearwall, Thrust, Knock Out (Goedendag).

| Name | Worth | Damage | Ignores Armor | Vs. Armor | Head Chance | Durability | Max. Fatigue | DLC |
|------|-------|--------|---------------|-----------|-------------|------------|--------------|-----|
| Warfork | 400 | 40-60 | 25% | 100% | +5% | 50 | -10 | Warriors of the North |
| Spetum | 750 | 55-75 | 25% | 100% | +5% | 60 | -14 | Beasts & Exploration |
| Goedendag | 600 | 45-75 | 25% | 110% | +-0% | 64 | -14 | Beasts & Exploration |

---

## Axes

### One-Handed Axes
Skills: Chop (+50% HP dmg on head hit, 30% direct), Split Shield, Batter (Axehammer, min 10 HP dmg). Barbarian axe variants get +10% direct on Chop.

| Name | Worth | Damage | Ignores Armor | Vs. Armor | Shield Dmg | Durability | Max. Fatigue | DLC |
|------|-------|--------|---------------|-----------|-----------|------------|--------------|-----|
| Hatchet | 210 | 25-40 | 30% | 110% | 8 | 52 | -6 | - |
| Crude Axe | 800 | 30-40 | 40% | 120% | 12 | 82 | -12 | Warriors of the North |
| Handaxe | 900 | 30-45 | 30% | 120% | 12 | 68 | -10 | - |
| Fighting Axe | 2800 | 35-55 | 30% | 130% | 16 | 80 | -12 | - |
| Head Splitter (Orc) | 1100 | 35-65 | 30% | 130% | 16 | 64 | -22 | - |
| Axehammer | **[TODO - NEEDS FETCH: stats cut off in wiki, ~Wildmen/Barbarian axe]** | | | | | | | Warriors of the North |

### Two-Handed Axes
**[TODO - NEEDS FETCH]** Items in this category (pull stats):
- Greataxe
- Two Handed Axe / Double Axe
- Bardiche (note: sometimes classified polearm-adjacent; confirm)
- Orc Greataxe variant
Skills: Round Swing (AoE), Split Shield, Decapitate.

---

## Flails

### One-Handed Flails
**[TODO - NEEDS FETCH]** Items:
- Flail
- Spiked Flail
- Three-Headed Flail (DLC)
Skills: Flail (ignores shield/Nimble via flexible head), Lash. Flails bypass shield defense bonuses.

### Two-Handed Flails
**[TODO - NEEDS FETCH]** Items:
- Two-Handed Flail
- Two-Handed Spiked Flail
Skills: Swing-type AoE that ignores shield bonus.

---

## Cleavers

### One-Handed Cleavers
**[TODO - NEEDS FETCH]** Items:
- Cleaver
- Hooked Blade (Goblin)
- Falchion-class cleavers
- Serpentine Cleaver (DLC)
Skills: Slash, Hook (pull), high fatality/decapitation rate on HP kills.

### Two-Handed Cleavers
**[TODO - NEEDS FETCH]** Items:
- Two-Handed Cleaver / Butcher's variants
Skills: high bleed/fatality.

---

## Hammers

### One-Handed Hammers
**[TODO - NEEDS FETCH]** Items:
- Skull Hammer
- War Hammer (1H)
- Warbrand-adjacent? no
- Barbarian Hammer variant
Skills: Hammer (armor-ignoring blunt), Batter (min 10 HP dmg). Very high Vs. Armor, low ignore.

### Two-Handed Hammers
**[TODO - NEEDS FETCH]** Items:
- Two-Handed Hammer / Maul
- Two-Handed War Hammer
- Barbarian Two-Handed Hammer
Skills: Split Shield, Strike Down-type stun, high armor damage.

---

## Polearms
**[TODO - NEEDS FETCH]** Items:
- Pike (range 2, Repel)
- Billhook (pull target)
- Glaive (AoE swing)
- Longaxe (range 2 axe)
- Berdiche / Bardiche
- Ancient Legionary Pike variant
- Necrosavant/Honor Guard polearms
Skills: range 2 reach, Repel, Hook/Pull, Swing. Polearms attack from the second row.

---

# RANGED WEAPONS
**[TODO - NEEDS FETCH for all subsections below]**
Ranged stat columns differ: Name | Worth | Damage | Ignores Armor % | Vs. Armor % | Effective Range | Max. Fatigue | DLC

## Bows
- Short Bow, Hunting Bow, War Bow, Long Bow, Ancient Bow, Goblin bows. Skills: Quick Shot, Aimed Shot.

## Crossbows
- Light Crossbow, Crossbow, Heavy Crossbow, Goblin variants. Skills: Shoot Bolt, Aimed Shot, reload mechanic.

## Firearms (Blazing Deserts)
- Handgonne, Matchlock Pistol, Arquebus / Hand Mortar. Skills: high armor pen, reload, AoE (mortar).

## Throwing Weapons
- Throwing Axe, Throwing Spear / Javelin, Throwing Knife / Dagger, Goblin variants. Limited ammo per stack.

## Throwable Items
- Firepot, Acid Flask, Net, Beehive, Holy Water, Sack (debuff/utility consumables).

---

# BODY ARMOR

Stat columns: Name | Durability | Max. Fatigue | Durability/Fatigue Ratio | Worth | DLC | Notes (who wears)

| Name | Durability | Max. Fatigue | Ratio | Worth | DLC | Notes |
|------|-----------|--------------|-------|-------|-----|-------|
| Tattered Sackcloth | 5 | 0 | - | 0 | - | - |
| Sackcloth | 10 | 0 | - | 20 | - | - |
| Linen Tunic | 20 | 0 | - | 45 | - | - |
| Cloth Sash | 20 | 0 | - | 30 | Blazing Deserts | - |
| Leather Wraps | 20 | 0 | - | 40 | - | Wildmen |
| Monk's Robe | 20 | 0 | - | 45 | - | Monks |
| Noble Tunic | 20 | 0 | - | 100 | - | Pimps |
| Wizard's Robe | 20 | 0 | - | 60 | - | Event item |
| Apron | 25 | 0 | - | 55 | - | - |
| Butcher's Apron | 25 | 0 | - | 55 | - | Butchers |
| Undertaker's Apron | 30 | 0 | - | 65 | Of Flesh and Faith | Anatomists |
| Leather Tunic | 30 | 0 | - | 65 | - | - |
| Thick Furs | 30 | -1 | 30.00 | 40 | Warriors of the North | Barbarian Thrall |
| Nomad Robe | 30 | -2 | 15.00 | 50 | Blazing Deserts | - |
| Dark Thick Tunic | 35 | -2 | 17.50 | 75 | - | Necromancers |
| Thick Tunic | 35 | -3 | 11.67 | 75 | - | - |
| Gladiator Harness | 40 | -4 | 10.00 | 150 | Blazing Deserts | Pairs with armor attachment |
| Animal Hide Armor | 45 | -3 | 15.00 | 80 | Warriors of the North | Barbarian Thrall |
| Padded Surcoat | 50 | -4 | 12.50 | 90 | - | - |
| Thick Nomad Robe | 50 | -5 | 10.00 | 80 | Blazing Deserts | - |
| Rugged Surcoat | 55 | -6 | 9.17 | 100 | - | - |
| Dark Rugged Surcoat | 60 | -4 | 15.00 | 100 | - | Necromancers |
| Padded Vest | 60 | -5 | 12.00 | 140 | Blazing Deserts | - |
| Wanderer's Coat | 65 | -5 | 13.00 | 180 | Of Flesh and Faith | Anatomists |
| Gambeson | 65 | -6 | 10.83 | 150 | - | - |
| Leather Nomad Robe | 65 | -7 | 9.29 | 140 | Blazing Deserts | Nomad Outlaws |
| Reinforced Animal Hide Armor | 65 | -7 | 9.29 | 120 | Warriors of the North | Barbarian Reaver |
| Blotched Gambeson | 70 | -8 | 8.75 | 160 | - | Brigand Thugs/Marksmen |
| Linothorax | 75 | -7 | 10.71 | 180 | Blazing Deserts | Conscripts |
| Scrap Metal Armor | 75 | -8 | 9.38 | 130 | Warriors of the North | Barbarian Reaver |
| Padded Leather | 80 | -8 | 10.00 | 200 | - | Brigand Raiders, Armored Wiedergangers |
| Stitched Nomad Armor | 80 | -8 | 10.00 | 200 | Blazing Deserts | Nomad Outlaws |
| Cultist Leather Robe | 88 | -9 | 9.78 | 240 | Warriors of the North | Cultists |
| Patched Mail Shirt | 90 | -10 | 9.00 | 250 | - | Brigand Raiders, Mercenaries |
| Leather Lamellar Armor | 95 | -10 | 9.50 | 300 | - | Brigand Raiders |
| Hide and Bone Armor | 95 | -10 | 9.50 | 220 | Warriors of the North | Barbarian Reaver |
| Reinforced Leather Armor | 100 | -9 | 11.11 | 500 | Of Flesh and Faith | Anatomists |
| Direwolf Hide Armor | 100 | -9 | 11.11 | 500 | (no Beasts & Exploration) | - |
| Ancient Mail | 100 | -14 | 7.14 | 350 | - | Ancient Legionary |
| Plated Nomad Mail | 105 | -11 | 9.55 | 350 | Blazing Deserts | Nomad Outlaws/Leaders, Desert Stalkers |
| Southern Mail Shirt | 110 | -11 | 10.00 | 400 | Blazing Deserts | Conscripts |
| Worn Mail Shirt | 110 | -12 | 9.17 | 400 | - | Brigand Raiders, Armored Wiedergangers |
| Basic Mail Shirt | 115 | -12 | 9.58 | 450 | - | Mercenaries, Swordmaster, Noble House Forces |
| Assassin's Robe | 120 | -9 | 13.33 | 1400 | Blazing Deserts | Assassins, Blade Dancers |
| Ancient Double Layer Mail | 120 | -16 | 7.50 | 450 | - | Ancient Legionary |
| Ancient Scale Harness | 125 | -20 | 6.25 | 750 | - | Ancient Legionary |
| Mail Shirt | 130 | -14 | 9.29 | 650 | - | Brigand Leaders, Mercenaries, Swordmaster, Noble House Forces |
| Mail with Lamellar Plating | 135 | -15 | 9.00 | 750 | Blazing Deserts | Officers |

**[TODO - NEEDS FETCH: heaviest body armor tier, cut off after Mail with Lamellar Plating]** Remaining heavy armors to pull (durability ~140-300):
- Coat of Plates
- Lamellar Armor / Heavy Lamellar
- Scale Armor / Heavy Scale Armor
- Mail Hauberk
- Heraldic Mail Hauberk
- Black Mail / Ancient heavy plate
- Lamellar Harness
- Noble Mail
- Hexamail / Heavy plate variants (~300 dur top tier)

---

# HEADGEAR (HELMETS)

Stat columns: Name | Durability | Max. Fatigue | Durability/Fatigue Ratio | Vision (penalty) | Worth | DLC | Notes

| Name | Durability | Max. Fatigue | Ratio | Vision | Worth | DLC | Notes |
|------|-----------|--------------|-------|--------|-------|-----|-------|
| Mouthpiece | 10 | 0 | - | 0 | 15 | - | Miners |
| Headscarf | 20 | 0 | - | 0 | 30 | - | - |
| Hood | 30 | 0 | - | 0 | 40 | - | - |
| Straw Hat | 30 | 0 | - | 0 | 60 | - | - |
| Nomad Head Wrap | 30 | 0 | - | 0 | 40 | Blazing Deserts | - |
| Southern Head Wrap | 30 | 0 | - | 0 | 50 | Blazing Deserts | - |
| Hunter's Hat | 30 | 0 | - | 0 | 70 | - | Hunters |
| Feathered Hat | 30 | 0 | - | 0 | 80 | - | - |
| Leather Headband | 30 | 0 | - | 0 | 30 | Warriors of the North | Barbarian Thrall/Reaver |
| Engineer's Hat | 30 | 0 | - | 0 | 50 | Blazing Deserts | Engineers |
| Gunner's Hat | 30 | 0 | - | 0 | 50 | Blazing Deserts | Gunners |
| Jester's Hat | 30 | 0 | - | 0 | 70 | - | Jugglers |
| Cultist Hood | 30 | 0 | - | -1 | 20 | - | Cultists |
| Undertaker's Hat | 40 | 0 | - | 0 | 120 | Of Flesh and Faith | Anatomists |
| Witchhunter's Hat | 40 | 0 | - | 0 | 100 | - | Witchhunters, Necromancers |
| Dark Cowl | 40 | 0 | - | 0 | 100 | - | Necromancers |
| Assassin's Head Wrap | 40 | 0 | - | 0 | 60 | Blazing Deserts | Assassins |
| Aketon Cap | 40 | -1 | 40.00 | 0 | 70 | - | - |
| Open Leather Cap | 40 | -2 | 20.00 | 0 | 60 | - | - |

**[TODO - NEEDS FETCH: all mid and heavy helmets, cut off after Open Leather Cap]** Remaining headgear to pull (the combat-relevant ones, durability ~45-300):
- Leather Cap, Padded Coif, Nasal Helmet
- Mail Coif, Padded Cap variants
- Kettle Hat / Open Kettle Hat
- Sallet, Open Sallet, Closed Sallet
- Barbute, Closed Barbute
- Nordic / Northern helmets (WotN): Norse Helmet, Antlered Helmet, Winged variants
- Southern helmets (BD): turban-plate variants
- Bascinet, Open Bascinet
- Great Helm / Closed Great Helm
- Ornate / Noble helms
- Orc helmets, Goblin helmets
- Ancient Dead helmets (Legionary, Honor Guard)
- Top tier ~300 durability closed helms

---

# SHIELDS

Stat columns: Name | Durability | Max. Fatigue | Melee Defense | Ranged Defense | Worth | DLC | Notes

| Name | Durability | Max. Fatigue | Melee Def | Ranged Def | Worth | DLC | Notes |
|------|-----------|--------------|-----------|-----------|-------|-----|-------|
| Buckler | 16 | -4 | +10 | +5 | 45 | - | No Shieldwall skill |
| Wooden Skirmisher Shield | 12 | -4 | +10 | +10 | 45 | - | Goblin Skirmishers, no Knock Back |
| Reinforced Skirmisher Shield | 16 | -8 | +10 | +10 | 65 | - | Goblin Skirmishers, no Knock Back |
| Old Wooden Shield | 16 | -10 | +15 | +15 | 60 | - | Barbarian Thralls/Reavers, Armored Wiedergangers |
| Ancient Auxiliary Shield | 16 | -10 | +15 | +15 | 80 | - | Ancient Auxiliary |
| Wooden Shield | 24 | -10 | +15 | +15 | 100 | - | Common human factions |
| Heavy Metal Shield | 72 | -22 | +15 | +15 | 250 | - | Orc Warriors, +5 fatigue on shield skills for humans |
| Feral Shield | 16 | -12 | +15 | +20 | 50 | - | Orc Youngs |
| Adarga Shield | 18 | -10 | +15 | +20 | 100 | Blazing Deserts | Southern factions |
| Ancient Coffin Shield | 20 | -12 | +15 | +20 | 100 | - | Ancient Legionary |
| Worn Kite Shield | 40 | -16 | +15 | +20 | 150 | - | Fallen Heroes |
| Kite Shield | 48 | -16 | +15 | +25 | 200 | - | Common human factions |
| Lindwurm Shield | 64 | -14 | +17 | +25 | 800 | Beasts & Exploration | Crafted |
| Sipar Shield | 60 | -18 | +18 | +18 | 250 | Blazing Deserts | Southern factions |
| Decayed Heater Shield | 24 | -14 | +20 | +15 | 150 | - | Fallen Heroes |
| Heater Shield | 32 | -14 | +20 | +15 | 250 | - | Common human factions |
| Living Tree Shield | 40 | -12 | +20 | +17 | 1000 | Beasts & Exploration | Crafted, regens 50% durability/turn |
| Ancient Tower Shield | 24 | -20 | +20 | +20 | 200 | - | Ancient Legionary / Honor Guard |
| Kraken Shield | 50 | -15 | +24 | +24 | 1200 | Beasts & Exploration | Crafted |

---

## STILL TO FETCH (summary for next session / Claude Code)

Confirmed complete: Daggers, all Swords, all Maces, all Spears, One-Handed Axes (minus Axehammer numbers), all Body Armor through Mail with Lamellar Plating, all Shields, low-tier Headgear.

Needs pulling:
1. One-Handed Axes: Axehammer stats
2. Two-Handed Axes (full)
3. Flails (1H + 2H, full)
4. Cleavers (1H + 2H, full)
5. Hammers (1H + 2H, full)
6. Polearms (full)
7. All Ranged Weapons (Bows, Crossbows, Firearms, Throwing, Throwable)
8. Heavy Body Armor tier (durability 140-300)
9. Mid/Heavy Headgear (durability 45-300)
10. Optional: Named & Legendary items

Fetch tips: individual category pages (e.g. /wiki/Axes) trigger bot-detection. The aggregate /wiki/Weapons page carries all melee tables but truncates; /wiki/Body_Armor, /wiki/Headgear, /wiki/Shields work directly but the long ones truncate at the heavy end. Use high token limits and pull the back half specifically.
