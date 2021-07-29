import Loadable from 'react-loadable';

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
  public render = undefined;

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
