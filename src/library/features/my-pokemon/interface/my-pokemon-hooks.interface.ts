import { NullAble } from '@/library/interface/general';
import { IPokemon } from '@/library/interface/pokemon';

/**
 * My Pokemon Hooks Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.01
 */
export interface IMyPokemonHooks {
  action: IMyPokemonHooksAction;
  state: IMyPokemonHooksState;
}

/**
 * My Pokemon Hooks Action Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.01
 */
export interface IMyPokemonHooksAction {
  enableToCatch(): Promise<boolean>;
  registerPokemon(pokemon: IPokemon, customName: string): NullAble<string>;
  releasePokemon(customName: string): boolean;
}

/**
 * My Pokemon Hooks State Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.01
 */
export interface IMyPokemonHooksState {
  pokemon: IPokemon[];
}
