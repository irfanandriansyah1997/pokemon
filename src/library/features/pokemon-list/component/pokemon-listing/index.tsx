import { verifiedIsNotEmpty } from '@99/helper';
import { FC, useEffect, useState } from 'react';
import Loadable from 'react-loadable';

import { IPokemonDialogEvent } from '@/library/features/pokemon-detail/interface';
import PokemonCard from '@/library/features/pokemon-list/component/pokemon-card';
import { usePokemonList } from '@/library/features/pokemon-list/hooks';
import { useInfiniteScroll } from '@/library/hooks/infinite-scroll';
import { NullAble } from '@/library/interface/general';
import { IPokemon } from '@/library/interface/pokemon';
import { Text } from '@/library/styles/general.styles';
import {
  PokeListingSection,
  PokeLoadMoreButton
} from '@/library/styles/pokemon.styles';

const PokemonDialog = Loadable({
  loader: () =>
    import(`@/library/features/pokemon-detail/component/pokemon-dialog`),
  loading: () => null
});

/**
 * Pokemon List Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.01
 */
const PokemonList: FC = () => {
  const [isFetching, setIsFetching] = useInfiniteScroll();
  const [selectedPokemon, registerPokemon] = useState<NullAble<IPokemon>>();
  const {
    action: { loadMore },
    state: { loading, response: pokemon }
  } = usePokemonList();

  /**
   * Event Listener Poke Dialog
   * @param {e} event - pokemon dialog event when user interact
   * @returns {void}
   */
  const eventListenerPokeDialog: IPokemonDialogEvent = ({ event }): void => {
    switch (event) {
      case `on-close`:
        registerPokemon(undefined);
        break;

      default:
        break;
    }
  };

  /**
   * Selected Pokemon
   * @param {string} pokemonName - pokemon name selected when user click pokemon card
   * @returns {void}
   */
  const setSelectedPokemon = (pokemonName: string): void => {
    const selected = pokemon.find(({ name }) => name === pokemonName);

    if (selected) registerPokemon(selected);
  };

  useEffect(() => {
    if (isFetching) {
      loadMore();
      setIsFetching(false);
    }
  }, [isFetching, loadMore, setIsFetching]);

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
        {pokemon.map(({ ...res }) => (
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
      <PokemonDialog
        pokemon={selectedPokemon}
        showDialog={verifiedIsNotEmpty(selectedPokemon)}
        on={eventListenerPokeDialog}
      />
    </PokeListingSection>
  );
};

export default PokemonList;
