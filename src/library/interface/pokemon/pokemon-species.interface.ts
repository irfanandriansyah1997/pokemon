import {
  IPokemonBase,
  IPokemonFlavorTextEntries,
  IPokemonGeneral
} from './pokemon-util.interface';

/**
 * Pokemon Species Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.30
 */
export interface IPokemonSpecies {
  base_happiness: number;
  capture_rate: number;
  color: Partial<IPokemonBase>;
  egg_groups: Partial<IPokemonBase>[];
  evolution_chain: Partial<IPokemonBase>;
  flavor_text_entries: IPokemonFlavorTextEntries[];
  genera: IPokemonGeneral[];
  growth_rate: Partial<IPokemonBase>;
  habitat: Partial<IPokemonBase>;
  hatch_counter: number;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  shape: Partial<IPokemonBase>;
}
