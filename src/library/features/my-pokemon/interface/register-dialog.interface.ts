import { IEventComponent } from '@/library/interface/general';
import { IPokemon } from '@/library/interface/pokemon';

export type IEventOnSave = IEventComponent<'on-save', string>;

export type IEventOnRelease = IEventComponent<'on-release'>;

export type IRegisterPokemonEvent = (
  event: IEventOnSave | IEventOnRelease
) => void;

/**
 * Register Pokemon Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.01
 */
export interface IRegisterPokemonProps {
  on: IRegisterPokemonEvent;
  pokemon?: IPokemon;
  saved: boolean;
  show: boolean;
}
