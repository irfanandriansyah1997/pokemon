import { FC } from 'react';

import MyPokemonContext from './context/my-pokemon.context';
import { useMyPokemon } from './hooks/my-pokemon.hooks';

/**
 * My Pokemon Provider
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.01
 */
const MyPokemonProvider: FC = ({ children }) => {
  const { action, state } = useMyPokemon();

  return (
    <MyPokemonContext.Provider value={{ action, state }}>
      {children}
    </MyPokemonContext.Provider>
  );
};

export default MyPokemonProvider;
