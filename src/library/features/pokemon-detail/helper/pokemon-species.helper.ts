import { ISpeciesResponse } from '@/contract/rest';
import { IPokemonSpecies } from '@/library/interface/pokemon';

/**
 * Get Species API
 * @param {string} url - url api
 * @returns {Promise<IPokemonSpecies>}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.31
 */
export const getSpeciesAPI = async (url: string): Promise<IPokemonSpecies> => {
  const response = await fetch(url);
  const pokeSpecies: ISpeciesResponse = await response.json();

  return pokeSpecies;
};
