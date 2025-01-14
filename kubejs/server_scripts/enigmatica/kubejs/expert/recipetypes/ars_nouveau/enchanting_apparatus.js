onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    var data = {
        recipes: [
            {
                inputs: ['#forge:dusts/silver', '#forge:dusts/silver', '#forge:dusts/silver', '#forge:dusts/silver'],
                reagent: '#forge:dusts/sulfur',
                output: 'architects_palette:sunmetal_blend',
                count: 4,
                id: 'architects_palette:sunmetal_blend'
            },
            {
                inputs: [
                    'aquaculture:worm',
                    'quark:bottled_cloud',
                    'minecraft:string',
                    'thermal:phytogro',
                    'thermal:phytogro',
                    'minecraft:string',
                    'quark:bottled_cloud',
                    'aquaculture:worm'
                ],
                reagent: '#forge:beehives/tier_0',
                output: 'betterendforge:silk_moth_nest',
                count: 1
            },
            {
                inputs: [
                    'architects_palette:sunmetal_blend',
                    'architects_palette:sunmetal_blend',
                    'architects_palette:sunmetal_blend',
                    'architects_palette:sunmetal_blend'
                ],
                reagent: 'betterendforge:silk_fiber',
                output: 'naturesaura:gold_fiber',
                count: 4,
                id: 'naturesaura:gold_fiber'
            },
            {
                inputs: [
                    'eidolon:pewter_inlay',
                    'betterendforge:andesite_pedestal',
                    'eidolon:pewter_inlay',
                    'thermal:phytogro'
                ],
                reagent: 'eidolon:crucible',
                output: 'botania:apothecary_default',
                count: 1,
                id: 'botania:apothecary_default'
            },
            {
                inputs: [
                    'occultism:otherstone',
                    '#forge:dusts/mana',
                    'occultism:otherstone',
                    'eidolon:pewter_inlay',
                    'eidolon:pewter_inlay',
                    'occultism:otherstone',
                    'occultism:otherstone',
                    'occultism:otherstone'
                ],
                reagent: 'minecraft:bowl',
                output: 'occultism:sacrificial_bowl',
                count: 1,
                id: 'occultism:crafting/sacrificial_bowl'
            },
            {
                inputs: [
                    'eidolon:gold_inlay',
                    '#forge:dusts/mana',
                    'eidolon:gold_inlay',
                    'eidolon:gold_inlay',
                    'eidolon:gold_inlay'
                ],
                reagent: 'occultism:sacrificial_bowl',
                output: 'occultism:golden_sacrificial_bowl',
                count: 1,
                id: 'occultism:crafting/golden_sacrificial_bowl'
            },
            {
                inputs: [
                    'eidolon:pewter_inlay',
                    'occultism:stable_wormhole',
                    'eidolon:pewter_inlay',
                    'occultism:otherstone',
                    'occultism:otherstone',
                    'eidolon:pewter_inlay',
                    'occultism:otherstone_pedestal',
                    'eidolon:pewter_inlay'
                ],
                reagent: 'eidolon:crucible',
                output: 'bloodmagic:soulforge',
                count: 1,
                id: 'bloodmagic:soul_forge'
            },
            {
                inputs: [
                    'eidolon:gold_inlay',
                    '#forge:ingots/silver',
                    'eidolon:gold_inlay',
                    '#forge:ingots/silver',
                    '#forge:ingots/silver',
                    'eidolon:gold_inlay',
                    '#forge:ingots/silver',
                    'eidolon:gold_inlay'
                ],
                reagent: 'astralsorcery:aquamarine',
                output: 'undergarden:catalyst',
                count: 1,
                id: 'undergarden:catalyst'
            },
            {
                inputs: [
                    'quark:white_candle',
                    'quark:white_candle',
                    'quark:white_candle',
                    'quark:white_candle',
                    'quark:white_candle',
                    'quark:white_candle',
                    'quark:white_candle',
                    'quark:white_candle'
                ],
                reagent: 'bloodmagic:holy_water_anointment',
                output: 'eidolon:candle',
                count: 8,
                id: 'eidolon:candle'
            },
            {
                inputs: [
                    '#forge:nuggets/gold_brass',
                    'bloodmagic:lavacrystal',
                    '#forge:nuggets/gold_brass',
                    '#forge:ingots/gold_brass',
                    '#forge:ingots/gold_brass',
                    'eidolon:gold_inlay',
                    'eidolon:gold_inlay',
                    'eidolon:gold_inlay'
                ],
                reagent: 'ars_nouveau:mana_jar',
                output: 'ars_nouveau:volcanic_accumulator',
                count: 1
            },
            {
                inputs: [
                    '#forge:ingots/gold_brass',
                    'ars_nouveau:warding_stone',
                    '#forge:ingots/gold_brass',
                    '#forge:nuggets/gold_brass',
                    '#forge:nuggets/gold_brass',
                    '#forge:ingots/gold_brass',
                    'ars_nouveau:warding_stone',
                    '#forge:ingots/gold_brass'
                ],
                reagent: '#forge:gems/mana',
                output: 'ars_nouveau:crystallizer',
                count: 1
            },
            {
                inputs: [
                    '#forge:ingots/gold_brass',
                    'ars_nouveau:warding_stone',
                    '#forge:ingots/gold_brass',
                    'ars_nouveau:glyph_extract',
                    'ars_nouveau:glyph_extract',
                    'astralsorcery:illumination_powder',
                    'astralsorcery:illumination_powder',
                    'astralsorcery:illumination_powder'
                ],
                reagent: 'ars_nouveau:potion_jar',
                output: 'ars_nouveau:potion_melder',
                count: 1,
                id: 'ars_nouveau:potion_melder'
            },
            {
                inputs: [
                    '#forge:ingots/gold_brass',
                    'ars_nouveau:glyph_projectile',
                    'minecraft:conduit',
                    '#forge:gems/mana',
                    'ars_nouveau:glyph_accelerate',
                    'ars_nouveau:spell_parchment',
                    '#forge:gems/mana',
                    '#forge:ingots/gold_brass'
                ],
                reagent: 'botania:livingwood',
                output: 'ars_nouveau:wand',
                count: 1,
                id: 'ars_nouveau:wand'
            },
            {
                inputs: [
                    '#resourcefulbees:resourceful_honeycomb_block',
                    'ars_nouveau:summoning_crystal',
                    '#resourcefulbees:resourceful_honeycomb_block',
                    'naturesaura:token_joy',
                    'naturesaura:token_anger',
                    '#resourcefulbees:resourceful_honeycomb_block',
                    'ars_nouveau:summoning_crystal',
                    '#resourcefulbees:resourceful_honeycomb_block'
                ],
                reagent: 'minecraft:spawner',
                output: 'naturesaura:animal_spawner',
                count: 1,
                id: 'naturesaura:animal_spawner'
            },

            /// Patchouli Removals
            {
                inputs: ['kubejs:altered_recipe_indicator'],
                reagent: 'kubejs:altered_recipe_indicator',
                output: 'ars_nouveau:void_jar',
                count: 1,
                id: 'ars_nouveau:jar_of_light'
            },
            {
                inputs: ['kubejs:altered_recipe_indicator'],
                reagent: 'kubejs:altered_recipe_indicator',
                output: 'ars_nouveau:void_jar',
                count: 1,
                id: 'ars_nouveau:void_jar'
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        let constructed_recipe = {
            type: 'ars_nouveau:enchanting_apparatus',
            reagent: [Ingredient.of(recipe.reagent).toJson()],
            output: { item: recipe.output, count: recipe.count }
        };

        recipe.inputs.forEach((input, index) => {
            let i = index + 1;
            constructed_recipe[`item_${i}`] = [Ingredient.of(input).toJson()];
        });

        if (recipe.mana) {
            constructed_recipe['mana'] = recipe.mana;
        }

        const re = event.custom(constructed_recipe);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
