import { verifiedIsNotEmpty } from '@99/helper';

import {
  IPokemonAttribute,
  IPokemonAttributeParameter
} from '@/library/features/pokemon-detail/interface';

/**
 * Calculate Dimension Pokemon
 * @param {number} dimension - dimension of pokemon
 * @returns {number}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.31
 */
export const calculateDimension = (dimension: number): number =>
  dimension ? dimension / 10 : 0;

/**
 * Generate Pokemon Attribute
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.31
 */
export const generatePokemonAttribute = ({
  height,
  pokeSpecies,
  weight
}: IPokemonAttributeParameter): IPokemonAttribute[] => {
  const response: IPokemonAttribute[] = [];

  response.push({ key: `Height`, value: `${calculateDimension(height)} m` });
  response.push({ key: `Weight`, value: `${calculateDimension(weight)} kg` });

  if (pokeSpecies) {
    const { egg_groups: eggs = [], hatch_counter } = pokeSpecies;

    response.push({
      key: `Egg Cycle`,
      value: `${hatch_counter} Days`
    });
    response.push({
      key: `Egg Groups`,
      value: eggs.map(({ name }) => name).filter(verifiedIsNotEmpty) as string[]
    });
  }

  return response;
};
