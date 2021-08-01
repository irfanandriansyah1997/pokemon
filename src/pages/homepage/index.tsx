import { verifiedIsNotEmpty } from '@99/helper';
import { FC, useState } from 'react';
import Loadable from 'react-loadable';

import TabAction from '@/library/component/tab-action';
import MyPokemonProvider from '@/library/features/my-pokemon';
import { IPokemonDialogEvent as DialogEvent } from '@/library/features/pokemon-detail/interface';
import PokemonList from '@/library/features/pokemon-list/component/pokemon-listing';
import { NullAble } from '@/library/interface/general';
import { IPokemon } from '@/library/interface/pokemon';
import { Header } from '@/library/styles/general.styles';

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
  const [tabSelection, registerTabSelection] = useState<number>(0);

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
    <MyPokemonProvider>
      <Header>
        <img
          loading="lazy"
          src="https://i.ibb.co/bBTTVbp/logo.png"
          alt="Pokedex Apps"
        />
        <TabAction
          active={tabSelection}
          list={[
            {
              id: 0,
              text: `Pokedex List`
            },
            {
              id: 1,
              text: `My Pokemon`
            }
          ]}
          on={({ event, payload }): void => {
            if (event === `on-change-index`) {
              registerTabSelection(payload);
            }
          }}
        />
      </Header>
      {tabSelection === 0 ? (
        <PokemonList
          on={({ event, payload }): void => {
            if (event === `on-click`) registerPokemon(payload);
          }}
        />
      ) : (
        <p>Comming Soon</p>
      )}

      <PokemonDialog
        pokemon={selectedPokemon}
        showDialog={verifiedIsNotEmpty(selectedPokemon)}
        on={eventListenerPokeDialog}
      />
    </MyPokemonProvider>
  );
};

export default Homepage;
