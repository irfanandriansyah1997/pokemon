/* eslint-disable @typescript-eslint/no-unused-vars */
import mockedEnv from 'mocked-env';

import {
  deleteMyPokemon,
  getCountPokemon,
  getPokemon,
  getPokemonByCustomName,
  pokemonIsNotExist,
  savedMyPokemon
} from '@/library/features/my-pokemon/helper/pokemon-storage.helper';

import SamplePokemon from './__fixture__/sample-pokemon.fixture.json';

mockedEnv({
  REACT_APP_GRAPHQL_HOST: `https://graphql-pokeapi.vercel.app/api/graphql`,
  REACT_APP_POKEMON_LANGUAGE: `en`,
  REACT_APP_POKEMON_PHOTO: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`,
  REACT_APP_POKEMON_VERSION: `ruby`,
  REACT_APP_STORAGE: `pokemon-list`
});

describe(`Testing Pokemon Storage Helper`, () => {
  beforeAll(() => {
    localStorage.setItem(`pokemon-list`, JSON.stringify(SamplePokemon));
  });

  describe(`Testing Get Pokemon`, () => {
    it(`Testing Get Pokemon With Correct Key`, () => {
      expect(getPokemon()).toStrictEqual([
        {
          customName: `sample-testing`,
          id: 2,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png`,
          name: `ivysaur`
        },
        {
          customName: `my-turtle`,
          id: 8,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png`,
          name: `wartortle`
        }
      ]);
    });

    it(`Testing Get Pokemon With Wrong Key`, () => {
      expect(getPokemon(`wrong-key`)).toStrictEqual([]);
    });
  });

  describe(`Testing Get Pokemon By Custom Name`, () => {
    it(`Case Not Found`, () => {
      expect(getPokemonByCustomName(`pikachu`)).toBeUndefined();
    });

    it(`Case Found`, () => {
      expect(getPokemonByCustomName(`my-turtle`)).toStrictEqual({
        customName: `my-turtle`,
        id: 8,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png`,
        name: `wartortle`
      });
    });
  });

  describe(`Testing Get Count Pokemon By  Name`, () => {
    it(`Case Not Found`, () => {
      expect(getCountPokemon(`pikachu`)).toBe(0);
    });

    it(`Case Found`, () => {
      expect(getCountPokemon(`wartortle`)).toBe(1);
    });
  });

  describe(`Testing Is Pokemon Is Not Exist`, () => {
    it(`Case Not Found`, () => {
      expect(pokemonIsNotExist(`pikachu`)).toBeTruthy();
    });

    it(`Case Found`, () => {
      expect(pokemonIsNotExist(`my-turtle`)).toBeFalsy();
    });

    it(`Case With Wrong Key`, () => {
      expect(pokemonIsNotExist(`my-turtle`, `sample-wrong-key`)).toBeTruthy();
    });
  });

  describe(`Testing Saved My Pokemon`, () => {
    it(`Case Pokemon Not Exists`, () => {
      const [_, isSuccess] = savedMyPokemon(
        {
          id: 2,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png`,
          name: `ivysaur`
        },
        `testing-save-pokemon`
      );

      expect(isSuccess).toBeTruthy();
    });

    it(`Case Pokemon Exist`, () => {
      const [_, isSuccess] = savedMyPokemon(
        {
          id: 2,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png`,
          name: `ivysaur`
        },
        `my-turtle`
      );

      expect(isSuccess).toBeFalsy();
    });
  });

  describe(`Testing Delete My Pokemon`, () => {
    it(`Case Pokemon Not Exists`, () => {
      const [_, isSuccess] = deleteMyPokemon(`sample-wrong-case`);

      expect(isSuccess).toBeFalsy();
    });

    it(`Case Pokemon Exist`, () => {
      const [_, isSuccess] = deleteMyPokemon(`testing-save-pokemon`);

      expect(isSuccess).toBeTruthy();
    });
  });

  afterAll(() => {
    localStorage.setItem(`pokemon-list`, JSON.stringify([]));
  });
});
