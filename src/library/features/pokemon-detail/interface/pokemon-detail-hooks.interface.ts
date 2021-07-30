import { IPokemon, IPokemonSpecies } from '@/library/interface/pokemon';

import { IPokemonDetailReducer } from './pokemon-detail-reducer.interface';

/**
 * Pokemon Detail Hooks
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.30
 */
export interface IPokemonDetailHooks {
  action: IPokemonDetailHooksAction;
  state: IPokemonDetailReducer;
}

/**
 * Pokemon Detail Hooks Action Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.30
 */
export interface IPokemonDetailHooksAction {
  setPokemon(param: IPokemon | undefined): void;
  setPokemonSpecies(param: IPokemonSpecies): void;
  toggleLoading(param: boolean): void;
}
