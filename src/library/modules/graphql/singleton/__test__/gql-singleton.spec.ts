import { GraphqlConnection } from '..';

test(`Testing Generate Singleton Graphql Connect`, () => {
  expect(GraphqlConnection.singleton()).not.toBeUndefined();
});
