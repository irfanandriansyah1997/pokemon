import { GenActionMap, NullAble } from '@/library/interface/general';
import { IBaseQueryError } from '@/library/interface/gql';
import { IPokemon, IPokemonSpecies } from '@/library/interface/pokemon';

/**
 * Pokemon Detail Reducer
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.30
 */
export interface IPokemonDetailReducer {
  error?: IBaseQueryError;
  isLoadingRest: boolean;
  pokemon?: IPokemon;
  selection: number;
}

/**
 * Pokemon Detail Enum Reducers
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.30
 */
export enum IPokemonDetailTypesEnum {
  setLoading = `SET_LOADING`,
  setPokemonState = `SET_POKEMON`,
  setSelection = `SET_SELECTION`,
  setPokemonSpecies = `SET_POKEMON_SPECIES`
}

/**
 * Pokemon Detail Payload Action Reducers
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.30
 */
type IPokemonDetailPayload = {
  [IPokemonDetailTypesEnum.setLoading]: boolean;
  [IPokemonDetailTypesEnum.setPokemonState]: NullAble<IPokemon>;
  [IPokemonDetailTypesEnum.setSelection]: number;
  [IPokemonDetailTypesEnum.setPokemonSpecies]: IPokemonSpecies;
};

export type IPokemonDetailActionType = GenActionMap<IPokemonDetailPayload>[keyof GenActionMap<IPokemonDetailPayload>];
