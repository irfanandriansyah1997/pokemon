import {
  IPokemonDetailReducer,
  IPokemonDetailTypesEnum
} from '@/library/features/pokemon-detail/interface';
import { pokemonDetailReducer } from '@/library/features/pokemon-detail/reducers';
import { IPokemon, IPokemonSpecies } from '@/library/interface/pokemon';

import PokemonFixtures from './__fixture__/pokemon.fixture.json';
import PokemonReducersFixtures from './__fixture__/pokemon-reducers.fixture.json';
import PokemonSpeciesFixtures from './__fixture__/pokemon-species.fixtures.json';
import PokemonSpeciesOutputFixtures from './__fixture__/pokemon-species-output.fixtures.json';

describe(`Testing Pokemon Detail Reducers`, () => {
  describe(`Testing Set Pokemon Species`, () => {
    it(`Testing when pokemon state not undefined`, () => {
      expect(
        pokemonDetailReducer(
          {
            ...((PokemonReducersFixtures as unknown) as IPokemonDetailReducer)
          },
          {
            payload: (PokemonSpeciesFixtures as unknown) as IPokemonSpecies,
            type: IPokemonDetailTypesEnum.setPokemonSpecies
          }
        ).pokemon
      ).toStrictEqual(PokemonSpeciesOutputFixtures);
    });

    it(`Testing when pokemon state undefined`, () => {
      expect(
        pokemonDetailReducer(
          {
            ...((PokemonReducersFixtures as unknown) as IPokemonDetailReducer),
            pokemon: undefined
          },
          {
            payload: (PokemonSpeciesFixtures as unknown) as IPokemonSpecies,
            type: IPokemonDetailTypesEnum.setPokemonSpecies
          }
        ).pokemon
      ).toBeUndefined();
    });
  });

  it(`Testing Set Loading Reducers Action`, () => {
    expect(
      pokemonDetailReducer(
        {
          ...((PokemonReducersFixtures as unknown) as IPokemonDetailReducer)
        },
        {
          payload: true,
          type: IPokemonDetailTypesEnum.setLoading
        }
      ).isLoadingRest
    ).toBeTruthy();
  });

  it(`Testing Set Tab Selection Reducers Action`, () => {
    expect(
      pokemonDetailReducer(
        {
          ...((PokemonReducersFixtures as unknown) as IPokemonDetailReducer)
        },
        {
          payload: 2,
          type: IPokemonDetailTypesEnum.setSelection
        }
      ).selection
    ).toBe(2);
  });

  describe(`Testing Set Pokemon`, () => {
    it(`Testing When Payload Is Undefined`, () => {
      expect(
        pokemonDetailReducer(
          {
            ...((PokemonReducersFixtures as unknown) as IPokemonDetailReducer)
          },
          {
            payload: undefined,
            type: IPokemonDetailTypesEnum.setPokemonState
          }
        ).pokemon
      ).toBeUndefined();
    });

    it(`Testing When Initial Pokemon State Is Undefined `, () => {
      expect(
        pokemonDetailReducer(
          {
            ...((PokemonReducersFixtures as unknown) as IPokemonDetailReducer),
            pokemon: undefined
          },
          {
            payload: (PokemonFixtures as unknown) as IPokemon,
            type: IPokemonDetailTypesEnum.setPokemonState
          }
        ).pokemon
      ).toStrictEqual(PokemonFixtures);
    });

    it(`Testing When Initial Pokemon State Is Not Undefined `, () => {
      expect(
        pokemonDetailReducer(
          {
            ...((PokemonReducersFixtures as unknown) as IPokemonDetailReducer)
          },
          {
            payload: (PokemonFixtures as unknown) as IPokemon,
            type: IPokemonDetailTypesEnum.setPokemonState
          }
        ).pokemon
      ).toStrictEqual(PokemonFixtures);
    });
  });
});
