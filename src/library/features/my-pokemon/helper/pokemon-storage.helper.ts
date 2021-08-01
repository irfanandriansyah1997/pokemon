import { verifiedIsNotEmpty } from '@99/helper';

import { NullAble } from '@/library/interface/general';
import { IPokemon } from '@/library/interface/pokemon';

const STORAGE_KEY = process.env.REACT_APP_STORAGE as string;

/**
 * Get Pokemon List From Localstorage
 * @returns {IPokemon[]}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.01
 */
export const getPokemon = (): IPokemon[] => {
  const temp = localStorage.getItem(STORAGE_KEY) || `[]`;

  return JSON.parse(temp) as IPokemon[];
};

/**
 * Get Pokemon Based On Name
 * @param {string} name - custom name
 * @returns {NullAble<IPokemon>}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.01
 */
const getPokemonByName = (name: string): IPokemon[] =>
  getPokemon().filter(({ name: pokemonName }) => pokemonName === name);

/**
 * Get Pokemon Based On Custom Name
 * @param {string} name - custom name
 * @returns {NullAble<IPokemon>}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.01
 */
export const getPokemonByCustomName = (name: string): NullAble<IPokemon> =>
  getPokemon().find(({ customName }) => customName === name);

/**
 * Get Count Pokemon Based On Name
 * @param {string} name - custom name
 * @returns {number}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.01
 */
export const getCountPokemon = (name: string): number =>
  getPokemonByName(name).length;

/**
 * Pokemon Is Not Exist
 * @param {string} name - custom name
 * @returns {boolean}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.01
 */
export const pokemonIsNotExist = (name: string): boolean => {
  const pokemonList = getPokemon();
  if (pokemonList.length > 0) {
    return !verifiedIsNotEmpty(getPokemonByCustomName(name));
  }

  return true;
};

/**
 * Set Pokemon List
 * @param {IPokemon} param - pokemon
 * @returns {IPokemon[]}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.01
 */
const setPokemon = (param: IPokemon): IPokemon[] => {
  const pokemonList = [...getPokemon(), param];

  localStorage.setItem(STORAGE_KEY, JSON.stringify(pokemonList));

  return pokemonList;
};

/**
 * Saved My Pokemon
 * @param {IPokemon} pokemon - pokemon item from graphql
 * @param {string} customName - pokemon custom name
 * @returns {IPokemon[]}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.01
 */
export const savedMyPokemon = (
  pokemon: IPokemon,
  customName: string
): IPokemon[] => {
  const isNotExist = pokemonIsNotExist(customName);

  if (isNotExist) {
    return setPokemon({ ...pokemon, customName });
  }

  return getPokemon();
};

/**
 * Delete My Pokemon
 * @param {string} name - pokemon custom name
 * @returns {IPokemon[]}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.01
 */
export const deleteMyPokemon = (name: string): IPokemon[] => {
  const isExist = getPokemonByCustomName(name);

  if (isExist) {
    const response = getPokemon().filter(
      ({ customName }) => customName !== name
    );

    localStorage.setItem(STORAGE_KEY, JSON.stringify(response));

    return response;
  }

  return getPokemon();
};
