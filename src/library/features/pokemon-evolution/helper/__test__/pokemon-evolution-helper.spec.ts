import {
  IPokemonEvoChain,
  IPokemonEvoDetail
} from '@/library/interface/pokemon';

import {
  generateEvolution,
  generateEvolutionLabel,
  generatePokemon,
  getIDFromEvolution
} from '../pokemon-evolution.helper';
import PokemonEvoChainFixture from './__fixture__/pokemon-evo-chain.fixture.json';
import PokemonEvolutionDetailFixture from './__fixture__/pokemon-evolution-detail.fixture.json';

describe(`Testing Pokemon Evolution Helper`, () => {
  describe(`Testing Generate ID From Evolution Chain URL`, () => {
    it(`Testing Correct Case`, () => {
      expect(
        getIDFromEvolution(`https://pokeapi.co/api/v2/evolution-chain/1/`)
      ).toBe(`1`);
    });

    it(`Testing Wrong Case`, () => {
      expect(getIDFromEvolution(`sample-random-url`)).toBe(``);
    });
  });

  it(`Testing Generate Pokemon Card Props`, () => {
    expect(
      generatePokemon({
        evolution_details: [],
        evolves_to: [],
        species: {
          name: `ivysaur`,
          url: `https://pokeapi.co/api/v2/pokemon-species/2/`
        }
      })
    ).toStrictEqual({
      images: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png`,
      pokeName: `ivysaur`
    });
  });

  describe(`Testing Generate Evolution Label`, () => {
    it(`Testing Correct Case`, () => {
      expect(
        generateEvolutionLabel(
          PokemonEvolutionDetailFixture as IPokemonEvoDetail[]
        )
      ).toStrictEqual({
        attributes: `Min Level 16, Min Happines 100, Min Affection 76, Min Beauty 10, saphire item, Move move sample, Know move type sample Move, Near location sample, Held item held item sample, 100time`,
        name: `level-up`
      });
    });

    it(`Testing Without Name`, () => {
      const state: IPokemonEvoDetail[] = [
        ...(PokemonEvolutionDetailFixture as IPokemonEvoDetail[])
      ];
      state[0].trigger = {};

      expect(generateEvolutionLabel(state)).toStrictEqual({
        attributes: `Min Level 16, Min Happines 100, Min Affection 76, Min Beauty 10, saphire item, Move move sample, Know move type sample Move, Near location sample, Held item held item sample, 100time`,
        name: `-`
      });
    });
  });

  it(`Testing Generate Pokemon Card Props`, () => {
    expect(
      generateEvolution((PokemonEvoChainFixture as unknown) as IPokemonEvoChain)
    ).toStrictEqual([
      {
        imageAfter: {
          images: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png`,
          pokeName: `ivysaur`
        },
        imageBefore: {
          images: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png`,
          pokeName: `bulbasaur`
        },
        key: `level-0-0`,
        label: { attributes: `Min Level 16`, name: `level-up` }
      },
      {
        imageAfter: {
          images: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png`,
          pokeName: `venusaur`
        },
        imageBefore: {
          images: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png`,
          pokeName: `ivysaur`
        },
        key: `level-1-0`,
        label: { attributes: `Min Level 32`, name: `level-up` }
      }
    ]);
  });
});
