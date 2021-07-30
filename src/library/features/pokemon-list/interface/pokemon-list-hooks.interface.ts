import { IBaseQueryState } from '@/library/interface/gql';
import { IPokemon } from '@/library/interface/pokemon';

/**
 * Pokemon List Hooks Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.29
 */
export interface IPokemonListHooks {
  action: IPokemonListHooksAction;
  state: IPokemonListHooksState;
}

/**
 * Pokemon List Hooks State
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.29
 */
export type IPokemonListHooksState = IBaseQueryState<IPokemon[]>;

/**
 * Pokemon List Hooks Action
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.29
 */
export interface IPokemonListHooksAction {
  loadMore(): void;
}
