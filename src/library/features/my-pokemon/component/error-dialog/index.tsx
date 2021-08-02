import { FC } from 'react';

import Dialog from '@/library/component/dialog';
import { IErrorDialogProps } from '@/library/features/my-pokemon/interface';
import { Text } from '@/library/styles/general.styles';

/**
 * Error Dialog
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.01
 */
const ErrorDialog: FC<IErrorDialogProps> = ({ on, show }) => (
  <Dialog show={show} on={on} title="Failed">
    <Dialog.Body>
      <Text>It ran away...</Text>
    </Dialog.Body>
  </Dialog>
);

export default ErrorDialog;
