import {
  calculateDimension,
  generatePokemonAttribute
} from '@/library/features/pokemon-detail/helper';
import PokespeciesFixture from '@/library/features/pokemon-detail/reducers/__test__/__fixture__/pokemon-species.fixtures.json';

describe(`Testing Pokemon Attribute Helper`, () => {
  describe(`Testing Calculate Dimension`, () => {
    it(`With Param Is 15`, () => {
      expect(calculateDimension(15)).toBe(1.5);
    });

    it(`With Param Is 0`, () => {
      expect(calculateDimension(0)).toBe(0);
    });
  });

  describe(`Testing Generate Pokemon Attribute`, () => {
    it(`When Poke Species Is Undefined`, () => {
      expect(
        generatePokemonAttribute({
          height: 15,
          weight: 1000
        })
      ).toStrictEqual([
        {
          key: `Height`,
          value: `1.5 m`
        },
        {
          key: `Weight`,
          value: `100 kg`
        }
      ]);
    });

    it(`With Pokespecies Not Undefined`, () => {
      expect(
        generatePokemonAttribute({
          height: 15,
          pokeSpecies: PokespeciesFixture,
          weight: 1000
        })
      ).toStrictEqual([
        {
          key: `Height`,
          value: `1.5 m`
        },
        {
          key: `Weight`,
          value: `100 kg`
        },
        {
          key: `Egg Cycle`,
          value: `20 Days`
        },
        {
          key: `Egg Groups`,
          value: [`monster`, `plant`]
        }
      ]);
    });
  });
});
