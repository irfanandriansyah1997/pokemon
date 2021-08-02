import {
  IDialogProps,
  IEventClose
} from '@/library/component/dialog/interface';
import { IEventComponent } from '@/library/interface/general';

export type IConfirmationEventSubmit = IEventComponent<'on-delete'>;

export type IConfirmationEvent = (
  param: IEventClose | IConfirmationEventSubmit
) => void;

/**
 * Confirmation Dialog Props
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.02
 */
export interface IConfirmationDialog extends Pick<IDialogProps, 'show'> {
  error?: string;
  name?: string;
  on: IConfirmationEvent;
}
