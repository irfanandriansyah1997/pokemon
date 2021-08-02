import { verifiedIsNotEmpty } from '@99/helper';
import { FC, useState } from 'react';
import Loadable from 'react-loadable';

import { useMyPokemonContext } from '@/library/features/my-pokemon/hooks/my-pokemon.hooks';
import { IPokemonDialogEvent } from '@/library/features/pokemon-detail/interface';
import PokemonCard from '@/library/features/pokemon-list/component/pokemon-card';
import { NullAble } from '@/library/interface/general';
import { IPokemon } from '@/library/interface/pokemon';
import { Text } from '@/library/styles/general.styles';
import {
  PokeListingNotFound,
  PokeListingSection
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
const MyPokemonList: FC = () => {
  const [selectedPokemon, registerPokemon] = useState<NullAble<IPokemon>>();

  const {
    state: { pokemon }
  } = useMyPokemonContext();

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
        {pokemon.length === 0 && (
          <PokeListingNotFound>
            <Text color="primary" fontSize="medium" fontWeight={500}>
              Pokemon
            </Text>
            <Text fontSize="text">You don`t have any pokemon</Text>
          </PokeListingNotFound>
        )}
      </div>
      <PokemonDialog
        pokemon={selectedPokemon}
        showDialog={verifiedIsNotEmpty(selectedPokemon)}
        on={eventListenerPokeDialog}
      />
    </PokeListingSection>
  );
};

export default MyPokemonList;
