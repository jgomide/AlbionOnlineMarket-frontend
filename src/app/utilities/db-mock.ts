import { CategoryModel } from '../models/category.model'
import { SubCategoryModel } from '../models/subcategory.model'
import { QualityModel } from '../models/quality.model'
import { TierModel } from '../models/tier.model'
import { EnchantedModel } from '../models/enchanted.model'


export const TIER: TierModel[] = [      
    { id: 'all', name: "All"},    
    { id: '1', name: "Tier 1 - Beginner's"},
    { id: '2', name: "Tier 2 - Novice's"},
    { id: '3', name: "Tier 3 - Journeyman's"},
    { id: '4', name: "Tier 4 - Adept's"},
    { id: '5', name: "Tier 5 - Expert's"},
    { id: '6', name: "Tier 6 - Master's"},
    { id: '7', name: "Tier 7 - Grandmaster's"},
    { id: '8', name: "Tier 8 - Elder's"},
    
];

export const ENCHANTED: EnchantedModel[] = [  
    { id: 'all', name: 'All'},
    { id: '0', name: '0 - Normal'},
    { id: '1', name: '1 - Rune'},
    { id: '2', name: '2 - Soul'},
    { id: '3', name: '3 - Relic'},    
    
];

export const QUALITY: QualityModel[] = [  
    { id: 'all', name: 'All'},
    { id: '1', name: 'Normal'},
    { id: '2', name: 'Good'},
    { id: '3', name: 'Outstanding'},
    { id: '4', name: 'Excellent'},
    { id: '5', name: 'Masterpiece'}
];

export const CATEGORY: CategoryModel[] = [      
      { name: 'All' },
      { name: 'Accessories' },
      { name: 'Armor' },
      { name: 'Artifact' },
      { name: 'City Resources' },
      { name: 'Consumable' },
      { name: 'Farmable' },
      { name: 'Furniture' },
      { name: 'Gathering Gear' },
      { name: 'Luxury Goods' },
      { name: 'Magic' },
      { name: 'Materials' },
      { name: 'Melee' },
      { name: 'Mount' },
      { name: 'Off-Hand' },
      { name: 'Other' },
      { name: 'Product' },
      { name: 'Ranged' },
      { name: 'Resource' },
      { name: 'Token' },
      { name: 'Tool' },
      { name: 'Trophies' }       
];

export const SUBCATEGORY: SubCategoryModel[] = [      
  {
    name: 'All',
    category: 'All'
  },
  {
      name: 'Bag',
      category: 'Accessories'
  },
  {
      name: 'Cape',
      category: 'Accessories'
  },    
  {
      name: 'Cloth Armor',
      category: 'Armor'
  },
  {
      name: 'Cloth Helmet',
      category: 'Armor'
  },
  {
      name: 'Cloth Shoes',
      category: 'Armor'
  },
  {
      name: 'Leather Armor',
      category: 'Armor'
  },
  {
      name: 'Leather Helmet',
      category: 'Armor'
  },
  {
      name: 'Leather Shoes',
      category: 'Armor'
  },
  {
      name: 'Plate Armor',
      category: 'Armor'
  },
  {
      name: 'Plate Helmet',
      category: 'Armor'
  },
  {
      name: 'Plate Shoes',
      category: 'Armor'
  },
  {
      name: 'Unique Armor',
      category: 'Armor'
  },
  {
      name: 'Unique Helmet',
      category: 'Armor'
  },
  {
      name: 'Unique Shoes',
      category: 'Armor'
  },    
  {
      name: 'Armor',
      category: 'Artifact'
  },
  {
      name: 'Magic',
      category: 'Artifact'
  },
  {
      name: 'Melee',
      category: 'Artifact'
  },
  {
      name: 'Offhand',
      category: 'Artifact'
  },
  {
      name: 'Ranged',
      category: 'Artifact'
  },    
  {
      name: 'Beastheart',
      category: 'City Resources'
  },
  {
      name: 'Mountainheart',
      category: 'City Resources'
  },
  {
      name: 'Rockheart',
      category: 'City Resources'
  },
  {
      name: 'Treeheart',
      category: 'City Resources'

  },
  {
      name: 'Vineheart',
      category: 'City Resources'

  },    
  {
      name: 'Cooked',
      category: 'Consumable'
  },
  {
      name: 'Fish',
      category: 'Consumable'
  },
  {
      name: 'Fishing Bait',
      category: 'Consumable'
  },
  {
      name: 'Map',
      category: 'Consumable'
  },
  {
      name: 'Other',
      category: 'Consumable'
  },
  {
      name: 'Potion',
      category: 'Consumable'
  },
  {
      name: 'Tome of Insight',
      category: 'Consumable'
  },
  {
      name: 'Vanity',
      category: 'Consumable'
  },    
  {
      name: 'Animal',
      category: 'Farmable'
  },
  {
      name: 'Seed',
      category: 'Farmable'
  },    
  {
      name: 'Banner',
      category: 'Furniture'
  },
  {
      name: 'Bed',
      category: 'Furniture'
  },
  {
      name: 'Chest',
      category: 'Furniture'
  },
  {
      name: 'Decoration',
      category: 'Furniture'
  },
  {
      name: 'Flag',
      category: 'Furniture'
  },
  {
      name: 'Heretic',
      category: 'Furniture'
  },
  {
      name: 'Keeper',
      category: 'Furniture'
  },
  {
      name: 'Morgana',
      category: 'Furniture'
  },
  {
      name: 'Repair Kit',
      category: 'Furniture'
  },
  {
      name: 'Table',
      category: 'Furniture'
  },
  {
      name: 'Unique',
      category: 'Furniture'
  },    
  {
      name: 'Harvester Garb',
      category: 'Gathering Gear'
  },
  {
      name: 'Harvester Backpack',
      category: 'Gathering Gear'
  },
  {
      name: 'Harvester Cap',
      category: 'Gathering Gear'
  },
  {
      name: 'Harvester Workboots',
      category: 'Gathering Gear'
  },
  {
      name: 'Fisherman Garb',
      category: 'Gathering Gear'
  },
  {
      name: 'Fisherman Backpack',
      category: 'Gathering Gear'
  },
  {
      name: 'Fisherman Cap',
      category: 'Gathering Gear'
  },
  {
      name: 'Fisherman Boots',
      category: 'Gathering Gear'
  },
  {
      name: 'Skinner Garb',
      category: 'Gathering Gear'
  },
  {
      name: 'Skinner Backpack',
      category: 'Gathering Gear'
  },
  {
      name: 'Skinner Cap',
      category: 'Gathering Gear'
  },
  {
      name: 'Skinner Workboots',
      category: 'Gathering Gear'
  },
  {
      name: 'Miner Garb',
      category: 'Gathering Gear'
  },
  {
      name: 'Miner Backpack',
      category: 'Gathering Gear'
  },
  {
      name: 'Miner Cap',
      category: 'Gathering Gear'
  },
  {
      name: 'Miner Workboots',
      category: 'Gathering Gear'
  },
  {
      name: 'Quarrier Garb',
      category: 'Gathering Gear'
  },
  {
      name: 'Quarrier Backpack',
      category: 'Gathering Gear'
  },
  {
      name: 'Quarrier Cap',
      category: 'Gathering Gear'
  },
  {
      name: 'Quarrier Workboots',
      category: 'Gathering Gear'
  },
  {
      name: 'Lumberjack Garb',
      category: 'Gathering Gear'
  },
  {
      name: 'Lumberjack Backpack',
      category: 'Gathering Gear'
  },
  {
      name: 'Lumberjack Cap',
      category: 'Gathering Gear'
  },
  {
      name: 'Lumberjack Workboots',
      category: 'Gathering Gear'
  },    
  {
      name: 'Any',
      category: 'Luxury Goods'
  },
  {
      name: 'Bridgewatch',
      category: 'Luxury Goods'
  },
  {
      name: 'Caerleon',
      category: 'Luxury Goods'
  },
  {
      name: 'Fort Sterling',
      category: 'Luxury Goods'
  },
  {
      name: 'Lymhurst',
      category: 'Luxury Goods'
  },
  {
      name: 'Martlock',
      category: 'Luxury Goods'
  },
  {
      name: 'Thetford',
      category: 'Luxury Goods'
  },    
  {
      name: 'Arcane Staff',
      category: 'Magic'
  },
  {
      name: 'Cursed Staff',
      category: 'Magic'
  },
  {
      name: 'Fire Staff',
      category: 'Magic'
  },
  {
      name: 'Frost Staff',
      category: 'Magic'
  },
  {
      name: 'Holy Staff',
      category: 'Magic'
  },
  {
      name: 'Nature Staff',
      category: 'Magic'
  },    
  {
      name: 'Essence',
      category: 'Materials'
  },
  {
      name: 'Other',
      category: 'Materials'
  },
  {
      name: 'Relic',
      category: 'Materials'
  },
  {
      name: 'Rune',
      category: 'Materials'
  },
  {
      name: 'Soul',
      category: 'Materials'
  },    
  {
      name: 'Axe',
      category: 'Melee'
  },
  {
      name: 'Dagger',
      category: 'Melee'
  },
  {
      name: 'Hammer',
      category: 'Melee'
  },
  {
      name: 'Mace',
      category: 'Melee'
  },
  {
    name: 'Quarterstaff',
    category: 'Melee'
  },
  
  {
      name: 'Spear',
      category: 'Melee'
  },
  {
      name: 'Sword',
      category: 'Melee'
  },    
  {
      name: 'Armored Horse',
      category: 'Mount'
  },
  {
      name: 'Ox',
      category: 'Mount'
  },
  {
      name: 'Rare Mount',
      category: 'Mount'
  },
  {
      name: 'Riding Horse',
      category: 'Mount'
  },    
  {
      name: 'Book',
      category: 'Off-Hand'
  },
  {
      name: 'Horn',
      category: 'Off-Hand'
  },
  {
      name: 'Orb',
      category: 'Off-Hand'
  },
  {
      name: 'Shield',
      category: 'Off-Hand'
  },
  {
      name: 'Torch',
      category: 'Off-Hand'
  },
  {
      name: 'Totem',
      category: 'Off-Hand'
  },    
  {
      name: 'Mission Item',
      category: 'Other'
  },
  {
      name: 'Trash',
      category: 'Other'
  },    
  {
      name: 'Animal',
      category: 'Product'
  },
  {
      name: 'Cooked',
      category: 'Product'
  },
  {
      name: 'Farming',
      category: 'Product'
  },
  {
      name: 'Journals',
      category: 'Product'
  },    
  {
      name: 'Bow',
      category: 'Ranged'
  },
  {
      name: 'Crossbow',
      category: 'Ranged'
  },    
  {
      name: 'Cloth',
      category: 'Resource'
  },
  {
      name: 'Fiber',
      category: 'Resource'
  },
  {
      name: 'Hide',
      category: 'Resource'
  },
  {
      name: 'Leather',
      category: 'Resource'
  },
  {
      name: 'Metal Bar',
      category: 'Resource'
  },
  {
      name: 'Ore',
      category: 'Resource'
  },
  {
      name: 'Other',
      category: 'Resource'
  },
  {
      name: 'Planks',
      category: 'Resource'
  },
  {
      name: 'Rock',
      category: 'Resource'
  },
  {
      name: 'Stone Block',
      category: 'Resource'
  },
  {
      name: 'Wood',
      category: 'Resource'
  },    
  {
      name: 'Arena Sigil',
      category: 'Token'
  },
  {
      name: 'Event',
      category: 'Token'
  },
  {
      name: 'Map',
      category: 'Token'
  },
  {
      name: 'Other',
      category: 'Token'
  },
  {
      name: 'Royal Sigil',
      category: 'Token'
  },    
  {
      name: 'Demolition Hammer',
      category: 'Tool'
  },
  {
      name: 'Fishing Rod',
      category: 'Tool'
  },
  {
      name: 'Pickaxe',
      category: 'Tool'
  },
  {
      name: 'Sickle',
      category: 'Tool'
  },
  {
      name: 'Skinning Knife',
      category: 'Tool'
  },
  {
      name: 'Stone Hammer',
      category: 'Tool'
  },
  {
      name: 'Wood Axe',
      category: 'Tool'
  },    
  {
      name: 'Fiber Trophy',
      category: 'Trophies'
  },
  {
      name: 'Fishing Trophy',
      category: 'Trophies'
  },
  {
      name: 'General Trophy',
      category: 'Trophies'
  },
  {
      name: 'Hide Trophy',
      category: 'Trophies'
  },
  {
      name: 'Mercenary Trophy',
      category: 'Trophies'
  },
  {
      name: 'Ore Trophy',
      category: 'Trophies'
  },
  {
      name: 'Stone Trophy',
      category: 'Trophies'
  },
  {
      name: 'Wood Trophy',
      category: 'Trophies'
  },   
];