/**
 * Pagination Hooks Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.29
 */
export interface IPaginationHooks {
  action: IPaginationHooksAction;
  state: IPaginationHooksState;
}

/**
 * Pagination Base State Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.29
 */
export interface IPaginationBaseState {
  offset: number;
  totalData: number;
}

/**
 * Pagination Hooks State Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.29
 */
export interface IPaginationHooksState extends IPaginationBaseState {
  enableLoadMore: boolean;
}

/**
 * Pagination Hooks Action Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.29
 */
export interface IPaginationHooksAction {
  updateRange(param: IPaginationBaseState): void;
}
