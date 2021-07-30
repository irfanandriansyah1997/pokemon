import { bulkVerifiedIsNotEmpty, verifiedIsNotEmpty } from '@99/helper';
import { Maybe } from 'graphql/jsutils/Maybe';

import { PokemonItem } from '@/contract/graphql';
import { IPokemon } from '@/library/interface/pokemon';

/**
 * Translate Pokemon Item To IPokemon
 * @param {Maybe<Maybe<PokemonItem>[]>} pokemonList - data payload from graphql
 * @returns {IPokemon[]}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.30
 */
export const translatePokemonItem = (
  pokemonList: Maybe<Maybe<PokemonItem>[]>
): IPokemon[] => {
  if (pokemonList) {
    const filterredPokemon = pokemonList.filter(
      verifiedIsNotEmpty
    ) as PokemonItem[];

    return filterredPokemon
      .map(({ id, image, name }: PokemonItem): IPokemon | undefined => {
        if (bulkVerifiedIsNotEmpty([id, image, name])) {
          return {
            id: id as number,
            image: image as string,
            name: name as string
          };
        }

        return undefined;
      })
      .filter(verifiedIsNotEmpty) as IPokemon[];
  }

  return [];
};
