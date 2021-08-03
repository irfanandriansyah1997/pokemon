import { PokemonItem } from '@/contract/graphql';
import { translatePokemonItem } from '@/library/features/pokemon-list/helper/pokemon-list-translator.helper';

import PokemonListFixture from './fixture/pokemon-list.fixture.json';

describe(`Testing Pokemon List Helper`, () => {
  describe(`Testing Translate Pokemon Item`, () => {
    it(`Testing With Parameter Is Not Undefined`, () => {
      expect(
        translatePokemonItem(PokemonListFixture as PokemonItem[])
      ).toStrictEqual([
        {
          id: 1,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png`,
          name: `bulbasaur`
        },
        {
          id: 2,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png`,
          name: `ivysaur`
        },
        {
          id: 3,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png`,
          name: `venusaur`
        },
        {
          id: 4,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png`,
          name: `charmander`
        },
        {
          id: 5,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png`,
          name: `charmeleon`
        },
        {
          id: 6,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png`,
          name: `charizard`
        },
        {
          id: 7,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png`,
          name: `squirtle`
        },
        {
          id: 8,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png`,
          name: `wartortle`
        },
        {
          id: 9,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png`,
          name: `blastoise`
        },
        {
          id: 10,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png`,
          name: `caterpie`
        }
      ]);
    });

    it(`Testing With Parameter Is  Undefined`, () => {
      expect(translatePokemonItem(undefined)).toStrictEqual([]);
    });
  });
});
