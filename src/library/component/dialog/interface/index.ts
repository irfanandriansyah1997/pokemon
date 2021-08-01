import { FC } from 'react';

import { IEventComponent } from '@/library/interface/general';

export type IEventClose = IEventComponent<'on-close'>;

/**
 * Dialog Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.01
 */
export interface IDialogProps {
  on(param: IEventClose): void;
  show: boolean;
  title: string;
}

/**
 * Dialog Export Default Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.01
 */
export type IDialogExportDefault = FC<IDialogProps> & {
  Body: FC;
  Footer: FC;
};
