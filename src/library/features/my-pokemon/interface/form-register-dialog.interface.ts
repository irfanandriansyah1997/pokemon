import {
  IDialogProps,
  IEventClose
} from '@/library/component/dialog/interface';
import { IEventComponent } from '@/library/interface/general';

export type IRegisterEventSubmit = IEventComponent<'on-submit', string>;

export type IFormRegisterEvent = (
  param: IEventClose | IRegisterEventSubmit
) => void;

/**
 * Form Register Dialog
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.02
 */
export interface IFormRegisterDialog extends Pick<IDialogProps, 'show'> {
  error?: string;
  on: IFormRegisterEvent;
}
