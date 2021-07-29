import { ApolloError } from '@apollo/client';

import { IBaseQueryError } from '@/library/interface';

/**
 * Translate Error
 * @author Irfan Andriansyah <irfan@99.co>
 * @description transform ApolloError into IBaseQueryError
 * @since 2021.07.29
 */
export const translateApolloError = ({
  message,
  stack
}: ApolloError): IBaseQueryError => ({
  message,
  stack
});
