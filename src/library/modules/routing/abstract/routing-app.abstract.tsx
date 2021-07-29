import { PureComponent, ReactNode } from 'react';
import { HashRouter } from 'react-router-dom';

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
    return <HashRouter>{GenerateRouting(this.modules)}</HashRouter>;
  }
}
