import { IPokemon } from '@/library/interface/pokemon';

/**
 * Pokemon Card Props
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.30
 */
export interface IPokemonCardProps extends IPokemon {
  onClick(pokemonName: string): void;
}
