import { verifiedIsNotEmpty } from '@99/helper/validation.helper';
import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject
} from '@apollo/client';

/**
 * Singleton Graphql Connection
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.29
 */
export class GraphqlConnection {
  private static instance: ApolloClient<NormalizedCacheObject>;

  /**
   * Execute to create new connection
   * @return {ApolloClient<NormalizedCacheObject>}
   */
  private execute(): ApolloClient<NormalizedCacheObject> {
    return new ApolloClient({
      cache: new InMemoryCache(),
      uri: process.env.NEXT_PUBLIC_GRAPHQL_URL
    });
  }

  /**
   * Singleton Generator
   * @returns {ApolloClient<NormalizedCacheObject>}
   */
  public static singleton(): ApolloClient<NormalizedCacheObject> {
    if (!verifiedIsNotEmpty(GraphqlConnection.instance)) {
      const instance = new GraphqlConnection().execute();

      GraphqlConnection.instance = instance;
    }

    return GraphqlConnection.instance;
  }
}
