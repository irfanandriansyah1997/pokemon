import {
  IPokemonBase,
  IPokemonFlavorTextEntries
} from './pokemon-util.interface';

/**
 * Pokemon Move Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.30
 */
export interface IPokemonMove {
  accuracy: number;
  damage_class: Partial<IPokemonBase>;
  effect_chance: number;
  effect_entries: { effect: string }[];
  flavor_text_entries: IPokemonFlavorTextEntries[];
  id: number;
  power: number;
  pp: number;
  target: Partial<IPokemonBase>;
  type: Partial<IPokemonBase>;
}
