import { IPokemonSpecies } from '@/library/interface/pokemon';

/**
 * Pokemon Attribute Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.31
 */
export interface IPokemonAttribute {
  key: string;
  value: string | string[];
}

/**
 * Pokemon Attribute Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.31
 */
export interface IPokemonAttributeParameter {
  height: number;
  pokeSpecies?: IPokemonSpecies;
  weight: number;
}
