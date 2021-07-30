import { useReducer, useRef } from 'react';

import {
  IPokemonDetailHooks,
  IPokemonDetailReducer,
  IPokemonDetailTypesEnum
} from '@/library/features/pokemon-detail/interface';
import { pokemonDetailReducer } from '@/library/features/pokemon-detail/reducers';
import { IPokemon } from '@/library/interface/pokemon';

/**
 * Pokemon Detail Hooks
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.29
 */
export const usePokemonDetail = (
  initialData?: IPokemon
): IPokemonDetailHooks => {
  const { current: initialState } = useRef<IPokemonDetailReducer>({
    isLoadingRest: false,
    pokemon: initialData
  });
  const [state, dispatch] = useReducer(pokemonDetailReducer, initialState);

  return {
    action: {
      setPokemon: (payload) =>
        dispatch({
          payload,
          type: IPokemonDetailTypesEnum.setPokemonState
        }),
      setPokemonSpecies: (payload) =>
        dispatch({
          payload,
          type: IPokemonDetailTypesEnum.setPokemonSpecies
        }),
      toggleLoading: (payload) =>
        dispatch({
          payload,
          type: IPokemonDetailTypesEnum.setLoading
        })
    },
    state
  };
};
