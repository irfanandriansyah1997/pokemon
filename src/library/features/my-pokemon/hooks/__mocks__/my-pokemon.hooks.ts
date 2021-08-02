import { useContext, useEffect, useState } from 'react';

import MyPokemonContext from '@/library/features/my-pokemon/context/my-pokemon.context';
import {
  deleteMyPokemon,
  getPokemon,
  savedMyPokemon
} from '@/library/features/my-pokemon/helper';
import { IMyPokemonHooks } from '@/library/features/my-pokemon/interface';
import { NullAble } from '@/library/interface/general';
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
   * @returns {NullAble<string>}
   */
  const registerPokemon = (
    pokemon: IPokemon,
    customName: string
  ): NullAble<string> => {
    const [response, isSuccess] = savedMyPokemon(pokemon, customName);
    setMyPokemon(response);

    if (isSuccess) return customName;

    return undefined;
  };

  /**
   * Delete New Pokemon
   * @param {string} customName - pokemon custom name
   * @returns {boolean}
   */
  const releasePokemon = (customName: string): boolean => {
    const [response, isSuccess] = deleteMyPokemon(customName);
    setMyPokemon(response);

    return isSuccess;
  };

  return {
    action: {
      enableToCatch: () =>
        new Promise<boolean>((resolve) => {
          const random = Math.random();

          resolve(random < 0.8);
        }),
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
