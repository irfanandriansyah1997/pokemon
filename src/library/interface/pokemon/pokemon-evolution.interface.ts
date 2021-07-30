import { IPokemonBase } from './pokemon-util.interface';

/**
 * Pokemon Evolution Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.30
 */
export interface IPokemonEvo {
  evolution_details: IPokemonEvoDetail[];
  evolves_to: IPokemonEvo[];
  species: Partial<IPokemonBase>;
}

/**
 * Pokemon Evolution Detail Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.30
 */
export interface IPokemonEvoDetail {
  held_item: Partial<IPokemonBase>;
  item: Partial<IPokemonBase>;
  known_move: Partial<IPokemonBase>;
  known_move_type: Partial<IPokemonBase>;
  location: Partial<IPokemonBase>;
  min_affection: number;
  min_beauty: number;
  min_happiness: number;
  min_level: number;
  time_of_day: string;
  trigger: Partial<IPokemonBase>;
}
