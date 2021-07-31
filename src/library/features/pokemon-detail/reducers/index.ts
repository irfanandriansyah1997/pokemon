import { verifiedIsNotEmpty } from '@99/helper';

import {
  IPokemonDetailActionType as Action,
  IPokemonDetailReducer as Reducer,
  IPokemonDetailTypesEnum as Types
} from '@/library/features/pokemon-detail/interface';
import { GenReducer } from '@/library/interface/general';
import { IPokemon, IPokemonSpecies } from '@/library/interface/pokemon';

/**
 * Pokemon Detail Reducer
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.30
 */
export const pokemonDetailReducer: GenReducer<Reducer, Action> = (
  state,
  { payload, type }
) => {
  switch (type) {
    case Types.setPokemonSpecies: {
      const { pokemon } = state;
      if (pokemon) {
        return {
          ...state,
          pokemon: {
            ...pokemon,
            pokeSpecies: payload as IPokemonSpecies
          }
        };
      }

      return {
        ...state,
        pokemon: undefined
      };
    }

    case Types.setLoading: {
      return { ...state, isLoadingRest: payload as boolean };
    }

    case Types.setSelection: {
      return { ...state, selection: payload as number };
    }

    case Types.setPokemonState: {
      const { pokemon } = state;

      if (!verifiedIsNotEmpty(payload)) {
        return {
          ...state,
          pokemon: undefined
        };
      }

      if (pokemon) {
        return {
          ...state,
          pokemon: {
            ...pokemon,
            ...(payload as IPokemon)
          }
        };
      }

      return {
        ...state,
        pokemon: payload as IPokemon
      };
    }

    default: {
      throw new Error(`Unsupported type: ${type}`);
    }
  }
};
