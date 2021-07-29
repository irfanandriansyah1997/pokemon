import { ApolloProvider } from '@apollo/client';
import { PureComponent, ReactNode } from 'react';
import { HashRouter } from 'react-router-dom';

import { GraphqlConnection } from '@/modules/graphql/singleton';
import { GenerateRouting } from '@/modules/routing/helper';
import { IRouteConstruct as Construct } from '@/modules/routing/interface';

/**
 * Routing App Abstract
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.02.28
 */
export abstract class RoutingAPPAbstract extends PureComponent {
  abstract get modules(): Construct[];

  /**
   * Render
   * @returns {ReactNode}
   */
  render(): ReactNode {
    return (
      <HashRouter>
        <ApolloProvider client={GraphqlConnection.singleton()}>
          {GenerateRouting(this.modules)}
        </ApolloProvider>
      </HashRouter>
    );
  }
}
