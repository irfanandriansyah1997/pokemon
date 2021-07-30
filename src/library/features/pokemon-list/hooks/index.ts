import { useQuery } from '@apollo/client';
import { useState } from 'react';

import { QueryPokemonsArgs as Args } from '@/contract/graphql';
import { DEFAULT_ARGS_POKEMON_LIST } from '@/library/features/pokemon-list/constant';
import { IPokemonListHooks } from '@/library/features/pokemon-list/interface';
import { usePagination } from '@/library/hooks/pagination';
import { NullAble } from '@/library/interface/general/type-checking.interface';
import { IBaseQueryError, PickGQL } from '@/library/interface/gql';
import { IPokemon } from '@/library/interface/pokemon';
import { POKEMON_LIST_QUERY } from '@/library/query';
import { translateApolloError } from '@/modules/graphql/helper';

import { translatePokemonItem } from '../helper';

/**
 * Pokemon List Hooks
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.29
 */
export const usePokemonList = (): IPokemonListHooks => {
  const [variables, setVariables] = useState<Args>(DEFAULT_ARGS_POKEMON_LIST);
  const [pokemon, setPokemon] = useState<IPokemon[]>([]);
  const [error, setError] = useState<NullAble<IBaseQueryError>>();
  const {
    action: { updateRange },
    state: { enableLoadMore, offset }
  } = usePagination();

  const { loading } = useQuery<PickGQL<'pokemons'>, Args>(POKEMON_LIST_QUERY, {
    onCompleted: ({ pokemons }) => {
      if (pokemons) {
        const { count = 0, nextOffset = 0, results } = pokemons;

        setPokemon([...pokemon, ...translatePokemonItem(results)]);
        updateRange({
          offset: nextOffset as number,
          totalData: count as number
        });
      }
    },
    onError: (error) => {
      setError(translateApolloError(error));
    },
    skip: false,
    variables
  });

  /**
   * Simulate Load More
   * @returns {void}
   */
  const simulateLoadMore = (): void => {
    if (enableLoadMore) setVariables({ ...variables, offset });
  };

  return {
    action: {
      loadMore: simulateLoadMore
    },
    state: {
      error,
      loading,
      response: pokemon
    }
  };
};
