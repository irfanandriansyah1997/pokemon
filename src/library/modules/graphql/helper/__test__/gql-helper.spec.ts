import { ApolloError } from '@apollo/client';

import { translateApolloError } from '@/library/modules/graphql/helper';

describe(`Testing Pokemon Helper`, () => {
  describe(`Testing Generate Description`, () => {
    it(`Testing With Fixture`, () => {
      const sampleError: ApolloError = {
        extraInfo: ``,
        graphQLErrors: [],
        message: `Error sample message`,
        name: `error name`,
        networkError: null,
        stack: `Error sample message stack`
      };

      expect(translateApolloError(sampleError)).toStrictEqual({
        message: `Error sample message`,
        stack: `Error sample message stack`
      });
    });
  });
});
