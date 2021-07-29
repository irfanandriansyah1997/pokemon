import { verifiedIsNotEmpty } from '@99/helper/validation.helper';
import { useQuery } from '@apollo/client';
import { useState } from 'react';

import { PokemonItem, QueryPokemonsArgs as Args } from '@/contract/graphql';
import { usePagination } from '@/library/hooks/pagination';
import { IBaseQueryError, PickGQL } from '@/library/interface';
import { NullAble } from '@/library/interface/type-checking.interface';
import { POKEMON_LIST_QUERY } from '@/library/query';
import { translateApolloError } from '@/modules/graphql/helper';

import { IPokemonListHooks } from './interface/pokemon-list-hooks.interface';
import { DEFAULT_ARGS_POKEMON_LIST } from './constant';

/**
 * Pokemon List Hooks
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.29
 */
export const usePokemonList = (): IPokemonListHooks => {
  const [variables, setVariables] = useState<Args>(DEFAULT_ARGS_POKEMON_LIST);
  const [pokemon, setPokemon] = useState<PokemonItem[]>([]);
  const [error, setError] = useState<NullAble<IBaseQueryError>>();
  const {
    action: { updateRange },
    state: { enableLoadMore, offset }
  } = usePagination();

  const { loading } = useQuery<PickGQL<'pokemons'>>(POKEMON_LIST_QUERY, {
    onCompleted: ({ pokemons }) => {
      const result = (pokemons?.results || []).filter(
        verifiedIsNotEmpty
      ) as PokemonItem[];
      const count = pokemons?.count || 0;
      const nextOffset = pokemons?.nextOffset || 0;

      setPokemon([...pokemon, ...result]);
      updateRange({
        offset: nextOffset,
        totalData: count
      });
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
