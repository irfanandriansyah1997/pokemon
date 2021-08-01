import { useContext, useEffect, useState } from 'react';

import MyPokemonContext from '@/library/features/my-pokemon/context/my-pokemon.context';
import {
  deleteMyPokemon,
  getPokemon,
  savedMyPokemon
} from '@/library/features/my-pokemon/helper';
import { IMyPokemonHooks } from '@/library/features/my-pokemon/interface';
import { IPokemon } from '@/library/interface/pokemon';

/**
 * My Pokemon Hooks
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.01
 */
export const useMyPokemon = (): IMyPokemonHooks => {
  const [pokemon, setMyPokemon] = useState<IPokemon[]>([]);

  useEffect(() => {
    setMyPokemon(getPokemon());
  }, []);

  /**
   * Register New Pokemon
   * @param {IPokemon} pokemon - new pokemon list
   * @param {string} customName - pokemon custom name
   * @returns {void}
   */
  const registerPokemon = (pokemon: IPokemon, customName: string) => {
    setMyPokemon(savedMyPokemon(pokemon, customName));
  };

  /**
   * Delete New Pokemon
   * @param {string} customName - pokemon custom name
   * @returns {void}
   */
  const releasePokemon = (customName: string) => {
    setMyPokemon(deleteMyPokemon(customName));
  };

  return {
    action: {
      registerPokemon,
      releasePokemon
    },
    state: {
      pokemon
    }
  };
};

/**
 * My Pokemon Context
 * @returns {IMyPokemonHooks}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.01
 */
export const useMyPokemonContext = (): IMyPokemonHooks => {
  const context = useContext(MyPokemonContext);

  if (context === undefined) {
    throw new Error(
      `useMyPokemonContext must be used within a <MyPokemonProvider />`
    );
  }

  return context;
};
