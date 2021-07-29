import { Query } from '@/contract/graphql';

/**
 * Base Query State Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.29
 */
export interface IBaseQueryState<T> {
  error?: IBaseQueryError;
  loading: boolean;
  response: T;
}

/**
 * Base Query Error Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.29
 */
export interface IBaseQueryError {
  message: string;
  stack?: string;
}

/**
 * Gen GQL Result
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2021.07.29
 */
export type PickGQL<K extends keyof Query> = Pick<Query, K>;
