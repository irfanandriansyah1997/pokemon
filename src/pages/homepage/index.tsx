import { FC, useState } from 'react';
import Loadable from 'react-loadable';

import TabAction from '@/library/component/tab-action';
import MyPokemonProvider from '@/library/features/my-pokemon';
import { Header } from '@/library/styles/general.styles';

const MyPokemonList = Loadable({
  loader: () =>
    import(`@/library/features/my-pokemon/component/my-pokemon-list`),
  loading: () => null
});

const PokemonList = Loadable({
  loader: () =>
    import(`@/library/features/pokemon-list/component/pokemon-listing`),
  loading: () => null
});

/**
 * Homepage Page
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.03
 */
const Homepage: FC = () => {
  const [tabSelection, registerTabSelection] = useState<number>(0);

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
      {tabSelection === 0 ? <PokemonList /> : <MyPokemonList />}
    </MyPokemonProvider>
  );
};

export default Homepage;
