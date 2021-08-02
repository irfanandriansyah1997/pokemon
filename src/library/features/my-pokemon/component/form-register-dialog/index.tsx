import { verifiedIsNotEmpty } from '@99/helper';
import { ChangeEventHandler, FC, useEffect, useState } from 'react';

import Dialog from '@/library/component/dialog';
import { IFormRegisterDialog } from '@/library/features/my-pokemon/interface';
import { Text } from '@/library/styles/general.styles';
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
const FormRegistrationDialog: FC<IFormRegisterDialog> = ({
  error: errorProps,
  on,
  show
}) => {
  const [name, setName] = useState<string>(``);
  const [error, setError] = useState(() => errorProps);

  useEffect(() => {
    setError(errorProps);
  }, [errorProps]);

  /**
   * Method Name
   * @description
   */
  const onChangeInput: ChangeEventHandler<HTMLInputElement> = ({
    target: { value }
  }): void => {
    setError(undefined);
    setName(value);
  };

  return (
    <Dialog show={show} on={on} title="Catch Pokemon Succeess!">
      <Dialog.Body>
        <MyPokemonTextfield
          type="text"
          placeholder="Give a pokemon name"
          value={name}
          onChange={onChangeInput}
        />
        <Text color="red">{error && error}</Text>
      </Dialog.Body>
      <Dialog.Footer>
        <MyPokemonButtonOk
          type="button"
          disabled={verifiedIsNotEmpty(error) || name.length === 0}
          onClick={() =>
            on({
              event: `on-submit`,
              payload: name
            })
          }
        >
          Save
        </MyPokemonButtonOk>
        <MyPokemonButtonCancel
          type="button"
          disabled={verifiedIsNotEmpty(error) || name.length === 0}
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
};

export default FormRegistrationDialog;
