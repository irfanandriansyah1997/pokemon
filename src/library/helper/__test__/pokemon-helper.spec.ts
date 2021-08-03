import mockedEnv from 'mocked-env';

import {
  formattedPokemonID,
  getDescriptionText
} from '@/library/helper/pokemon.helper';

import PokemonDescriptionFixture from './__fixture__/pokemon-description.fixture.json';

const restoreMock = mockedEnv({
  REACT_APP_GRAPHQL_HOST: `https://graphql-pokeapi.vercel.app/api/graphql`,
  REACT_APP_POKEMON_LANGUAGE: `en`,
  REACT_APP_POKEMON_PHOTO: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`,
  REACT_APP_POKEMON_VERSION: `ruby`,
  REACT_APP_STORAGE: `pokemon-list`
});

describe(`Testing Pokemon Helper`, () => {
  describe(`Testing Generate Description`, () => {
    it(`Testing With Fixture`, () => {
      expect(getDescriptionText(PokemonDescriptionFixture)).toBe(
        `BULBASAUR can be seen napping in\nbright sunlight.\nThere is a seed on its back.\fBy soaking up the sun’s rays, the seed\ngrows progressively larger.`
      );
    });
  });

  describe(`Testing Reformatted Pokemon ID`, () => {
    it(`Testing with 1 digit`, () => {
      expect(formattedPokemonID(`1`)).toBe(`#001`);
    });

    it(`Testing with 2 digit`, () => {
      expect(formattedPokemonID(`13`)).toBe(`#013`);
    });

    it(`Testing with 3 digit`, () => {
      expect(formattedPokemonID(`125`)).toBe(`#125`);
    });
  });

  beforeEach(() => {
    restoreMock();
  });
});
