import { IPokemonSpecies } from './pokemon-species.interface';
import {
  IPokemonAbilities,
  IPokemonBase,
  IPokemonSprites,
  IPokemonStat,
  IPokemonType
} from './pokemon-util.interface';

/**
 * Pokemon Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.30
 */
export interface IPokemon extends Partial<IPokemonOptional> {
  id: number;
  image: string;
  name: string;
}

/**
 * Pokemon Optional Data
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.30
 */
export interface IPokemonOptional {
  abilities: IPokemonAbilities[];
  base_experience: number;
  color: string;
  height: number;
  moves: { move: Partial<IPokemonBase> }[];
  nickname: string;
  pokeSpecies: IPokemonSpecies;
  species: IPokemonBase;
  sprites: IPokemonSprites;
  stats: IPokemonStat[];
  types: IPokemonType[];
  weight: number;
}
