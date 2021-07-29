import { ReactNode } from 'react';
import Loadable from 'react-loadable';
import { Link } from 'react-router-dom';

import { ILoadableComponent } from '@/library/interface';
import { modules, subModules } from '@/modules/routing';
import { IRoutingModules } from '@/modules/routing/interface';

/**
 * Apps Routing
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.02.28
 */
@modules()
class AppsRouting implements IRoutingModules {
  /**
   * Render Basic Props
   * @param {ReactNode} children -  children props
   * @returns {ReactNode}
   */
  public render(children: ReactNode): ReactNode {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Homepage</Link>
            <Link to="/page-1">Other Page</Link>
          </li>
        </ul>
        {children}
      </div>
    );
  }

  /**
   * Homepage Page
   * @return {ILoadableComponent}
   */
  @subModules(`/`)
  public index(): ILoadableComponent {
    return Loadable({
      loader: () => import(`@/pages/homepage`),
      loading: () => null
    });
  }
}

export default AppsRouting;
