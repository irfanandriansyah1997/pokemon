import { useEffect, useReducer, useRef } from 'react';

import {
  IPokemonDetailHooks,
  IPokemonDetailReducer,
  IPokemonDetailTypesEnum
} from '@/library/features/pokemon-detail/interface';
import { pokemonDetailReducer } from '@/library/features/pokemon-detail/reducers';
import { NullAble } from '@/library/interface/general';
import {
  IPokemon,
  IPokemonBase,
  IPokemonSpecies
} from '@/library/interface/pokemon';

import { getSpeciesAPI } from '../helper';

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
  const { pokemon } = state;
  const { species } = pokemon || {};

  /**
   * Set Pokemon
   * @param {NullAble<IPokemon>} pokemon - Pokemon object from gql
   * @returns {void}
   */
  const setPokemon = (payload: NullAble<IPokemon>): void =>
    dispatch({
      payload,
      type: IPokemonDetailTypesEnum.setPokemonState
    });

  /**
   * Set Pokemon Species
   * @param {IPokemonSpecies} species - pokemon species object from rest api
   * @returns {void}
   */
  const setPokemonSpecies = (payload: IPokemonSpecies) =>
    dispatch({
      payload,
      type: IPokemonDetailTypesEnum.setPokemonSpecies
    });

  /**
   * Toggle Loading
   * @param {boolean} payload - indicator loading api
   * @returns {void}
   */
  const toggleLoading = (payload: boolean) =>
    dispatch({
      payload,
      type: IPokemonDetailTypesEnum.setLoading
    });

  /**
   * Fetch Species From API
   * @param {IPokemonBase} species - species object from gql
   * @returns {Promise<void>}
   */
  const getSpecies = async ({ url }: IPokemonBase): Promise<void> => {
    toggleLoading(true);
    try {
      setPokemonSpecies(await getSpeciesAPI(url));
      toggleLoading(false);
    } catch {
      toggleLoading(false);
    }
  };

  useEffect(() => {
    if (species) {
      getSpecies(species);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [species]);

  return {
    action: {
      setPokemon,
      setPokemonSpecies,
      toggleLoading
    },
    state
  };
};
