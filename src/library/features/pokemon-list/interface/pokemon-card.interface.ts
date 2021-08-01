import { IEventComponent } from '@/library/interface/general';
import { IPokemon } from '@/library/interface/pokemon';

export type IEventOnClick = IEventComponent<'on-click', IPokemon>;

export type IPokemonListEvent = (event: IEventOnClick) => void;

/**
 * Pokemon Card Props
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.30
 */
export interface IPokemonCardProps extends IPokemon {
  onClick(pokemonName: string): void;
}

/**
 * Pokemon List Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.01
 */
export interface IPokemonListProps {
  on: IPokemonListEvent;
}
