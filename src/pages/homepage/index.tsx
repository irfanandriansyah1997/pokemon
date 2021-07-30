import { FC, useState } from 'react';
import Loadable from 'react-loadable';

import { IPokemonDialogEvent as DialogEvent } from '@/library/features/pokemon-detail/interface';
import PokemonCard from '@/library/features/pokemon-list/component/pokemon-card';
import { usePokemonList } from '@/library/features/pokemon-list/hooks';
import { NullAble } from '@/library/interface/general';
import { IPokemon } from '@/library/interface/pokemon';

const PokemonDialog = Loadable({
  loader: () =>
    import(`@/library/features/pokemon-detail/component/pokemon-dialog`),
  loading: () => null
});

/**
 * Homepage Page
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.03
 */
const Homepage: FC = () => {
  const [selectedPokemon, registerPokemon] = useState<NullAble<IPokemon>>();
  const {
    action: { loadMore },
    state: { response }
  } = usePokemonList();

  /**
   * Selected Pokemon
   * @param {string} pokemonName - pokemon name selected when user click pokemon card
   * @returns {void}
   */
  const setSelectedPokemon = (pokemonName: string): void => {
    registerPokemon(response.find(({ name }) => name === pokemonName));
  };

  /**
   * Event Listener Poke Dialog
   * @param {e} event - pokemon dialog event when user interact
   * @returns {void}
   */
  const eventListenerPokeDialog: DialogEvent = ({ event }): void => {
    switch (event) {
      case `on-close`:
        registerPokemon(undefined);
        break;

      default:
        break;
    }
  };

  return (
    <>
      <div style={{ display: `flex`, flexWrap: `wrap` }}>
        {response.map(({ ...res }) => (
          <PokemonCard key={res.id} {...res} onClick={setSelectedPokemon} />
        ))}
      </div>
      <PokemonDialog
        pokemon={selectedPokemon}
        showDialog={Boolean(selectedPokemon)}
        on={eventListenerPokeDialog}
      />
      <button
        type="submit"
        onClick={(e): void => {
          e.preventDefault();
          loadMore();
        }}
      >
        Load More
      </button>
    </>
  );
};

export default Homepage;
