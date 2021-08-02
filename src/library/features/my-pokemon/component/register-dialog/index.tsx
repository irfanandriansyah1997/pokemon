import { verifiedIsNotEmpty } from '@99/helper';
import { FC, useState } from 'react';

import PokeBall from '@/library/component/pokeball';
import ConfirmationDialog from '@/library/features/my-pokemon/component/confirmation-dialog';
import ErrorDialog from '@/library/features/my-pokemon/component/error-dialog';
import FormRegistrationDialog from '@/library/features/my-pokemon/component/form-register-dialog';
import { getPokemonByCustomName } from '@/library/features/my-pokemon/helper';
import { useMyPokemonContext } from '@/library/features/my-pokemon/hooks/my-pokemon.hooks';
import {
  IConfirmationEvent,
  IFormRegisterEvent,
  IRegisterPokemonProps
} from '@/library/features/my-pokemon/interface';
import { NullAble } from '@/library/interface/general';
import { PokemonRegisterFAB } from '@/library/styles/pokemon.styles';

/**
 * Pokemon Register Dialog
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.01
 */
const PokemonRegisterDialog: FC<IRegisterPokemonProps> = ({
  on,
  pokemon,
  saved,
  show
}) => {
  const {
    action: { enableToCatch, registerPokemon, releasePokemon }
  } = useMyPokemonContext();
  const [loading, setLoading] = useState(false);
  const [formDialog, setFormDialog] = useState(false);
  const [errorDialog, setErrorDialog] = useState(false);
  const [confirmationDialog, setConfirmationDialog] = useState(false);
  const [errorForm, setErrorFormDialog] = useState<NullAble<string>>();

  if (!pokemon) return null;

  /**
   * Save Pokemon Into Localstorage
   * @returns {void}
   */
  const onSavePokemon = (pokemonName: string): void => {
    if (pokemon) {
      const response = registerPokemon(pokemon, pokemonName);

      if (verifiedIsNotEmpty(response))
        on({
          event: `on-save`,
          payload: response as string
        });
    }
  };

  /**
   * Delete Pokemon Into Localstorage
   * @returns {void}
   */
  const onDeletePokemon = (): void => {
    if (pokemon) {
      const response = releasePokemon(`${pokemon.customName}`);

      if (response)
        on({
          event: `on-release`
        });
    }
  };

  /**
   * Simulate On Click Button
   * @returns {void}
   */
  const onClickButton = (): void => {
    if (pokemon) {
      if (!saved) {
        setLoading(true);
        enableToCatch().then((item) => {
          setLoading(false);

          if (item) {
            setFormDialog(true);
          } else {
            setErrorDialog(true);
          }
        });
      } else {
        setConfirmationDialog(true);
      }
    }
  };

  /**
   * Event Handler Form Registration
   * @param {IEventClose | IEventSubmit} event -  event when user interact form registration
   * @returns {void}
   */
  const eventHandlerFormRegistration: IFormRegisterEvent = ({
    event,
    payload
  }): void => {
    switch (event) {
      case `on-close`:
        setFormDialog(false);
        break;

      case `on-submit`: {
        const isExist = getPokemonByCustomName(payload as string) !== undefined;

        if (isExist) {
          setErrorFormDialog(`Duplicate Pokemon`);
        } else {
          onSavePokemon(payload as string);
          setFormDialog(false);
        }

        break;
      }

      default:
        break;
    }
  };

  /**
   * Event Handler Form Registration
   * @param {IEventClose | IConfirmationEventSubmit} event -  event when user interact form confirmation
   * @returns {void}
   */
  const eventHandlerConfirmationRegistration: IConfirmationEvent = ({
    event
  }): void => {
    switch (event) {
      case `on-close`:
        setConfirmationDialog(false);
        break;

      case `on-delete`: {
        setConfirmationDialog(false);
        onDeletePokemon();
        break;
      }

      default:
        break;
    }
  };

  return (
    <>
      <PokemonRegisterFAB
        active={saved}
        loading={loading}
        show={show}
        onClick={onClickButton}
      >
        <PokeBall />
      </PokemonRegisterFAB>
      <FormRegistrationDialog
        on={eventHandlerFormRegistration}
        show={formDialog}
        error={errorForm}
      />
      <ErrorDialog on={() => setErrorDialog(false)} show={errorDialog} />
      <ConfirmationDialog
        on={eventHandlerConfirmationRegistration}
        name={pokemon?.customName}
        show={confirmationDialog}
      />
    </>
  );
};

export default PokemonRegisterDialog;
