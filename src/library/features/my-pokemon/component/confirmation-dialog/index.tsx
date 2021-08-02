import { FC } from 'react';

import Dialog from '@/library/component/dialog';
import { IConfirmationDialog } from '@/library/features/my-pokemon/interface';
import { Text } from '@/library/styles/general.styles';
import {
  MyPokemonButtonCancel,
  MyPokemonButtonOk
} from '@/library/styles/pokemon.styles';

/**
 * Confirmation Dialog
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.01
 */
const ConfirmationDialog: FC<IConfirmationDialog> = ({ name, on, show }) => (
  <Dialog show={show} on={on} title="Failed">
    <Dialog.Body>
      <Text>Are you sure delete {name} ?</Text>
    </Dialog.Body>
    <Dialog.Footer>
      <MyPokemonButtonOk
        type="button"
        onClick={() =>
          on({
            event: `on-delete`
          })
        }
      >
        Delete
      </MyPokemonButtonOk>
      <MyPokemonButtonCancel
        type="button"
        onClick={() =>
          on({
            event: `on-close`
          })
        }
      >
        Cancel
      </MyPokemonButtonCancel>
    </Dialog.Footer>
  </Dialog>
);

export default ConfirmationDialog;
