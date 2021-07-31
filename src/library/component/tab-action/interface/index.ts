import { IEventComponent } from '@/library/interface/general';

export type IEventOnChangeIndex = IEventComponent<'on-change-index', number>;

export type ITabActionEvent = (event: IEventOnChangeIndex) => void;

/**
 * Tab Action Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.31
 */
export interface ITabActionProps {
  active: number;
  list: ITabActionItem[];
  on: ITabActionEvent;
}

/**
 * Tab Action Item Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.31
 */
export interface ITabActionItem {
  id: number;
  text: string;
}

/**
 * Tab Action Wrapper Props
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.31
 */
export interface ITabActionWrapperProps {
  count: number;
}

/**
 * Tab Action Item Props
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.31
 */
export interface ITabActionItemProps {
  active: boolean;
}
