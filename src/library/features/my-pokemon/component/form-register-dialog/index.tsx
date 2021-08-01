import { FC } from 'react';

import Dialog from '@/library/component/dialog';
import { IDialogProps } from '@/library/component/dialog/interface';
import {
  MyPokemonButtonCancel,
  MyPokemonButtonOk,
  MyPokemonTextfield
} from '@/library/styles/pokemon.styles';

/**
 * Form Registration Dialog
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.01
 */
const FormRegistrationDialog: FC<IDialogProps> = ({ on, show }) => (
  <Dialog show={show} on={on} title="Catch Pokemon Succeess">
    <Dialog.Body>
      <MyPokemonTextfield type="text" placeholder="Give a pokemon name" />
    </Dialog.Body>
    <Dialog.Footer>
      <MyPokemonButtonOk type="button">Save</MyPokemonButtonOk>
      <MyPokemonButtonCancel type="button">Cancel</MyPokemonButtonCancel>
    </Dialog.Footer>
  </Dialog>
);

export default FormRegistrationDialog;
