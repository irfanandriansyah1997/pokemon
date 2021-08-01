import { FC } from 'react';

import PokemonCard from '@/library/features/pokemon-list/component/pokemon-card';
import { usePokemonList } from '@/library/features/pokemon-list/hooks';
import { IPokemonListProps } from '@/library/features/pokemon-list/interface';
import { Text } from '@/library/styles/general.styles';
import {
  PokeListingSection,
  PokeLoadMoreButton
} from '@/library/styles/pokemon.styles';

/**
 * Pokemon List Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.01
 */
const PokemonList: FC<IPokemonListProps> = ({ on }) => {
  const {
    action: { loadMore },
    state: { loading, response }
  } = usePokemonList();

  /**
   * Selected Pokemon
   * @param {string} pokemonName - pokemon name selected when user click pokemon card
   * @returns {void}
   */
  const setSelectedPokemon = (pokemonName: string): void => {
    const selected = response.find(({ name }) => name === pokemonName);
    if (selected)
      on({
        event: `on-click`,
        payload: selected
      });
  };

  return (
    <PokeListingSection>
      <div
        style={{
          display: `flex`,
          flexDirection: `column`,
          margin: `auto`,
          maxWidth: 500,
          width: `100%`
        }}
      >
        {response.map(({ ...res }) => (
          <PokemonCard key={res.id} {...res} onClick={setSelectedPokemon} />
        ))}
      </div>
      <PokeLoadMoreButton
        loading={loading}
        type="submit"
        onClick={(e): void => {
          e.preventDefault();
          loadMore();
        }}
      >
        <Text color="white" fontWeight={500} textAlign="center">
          Load More
        </Text>
      </PokeLoadMoreButton>
    </PokeListingSection>
  );
};

export default PokemonList;
