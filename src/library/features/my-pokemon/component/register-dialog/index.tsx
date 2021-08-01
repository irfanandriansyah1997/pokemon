import { verifiedIsNotEmpty } from '@99/helper';
import { FC, useState } from 'react';

import PokeBall from '@/library/component/pokeball';
import { useMyPokemonContext } from '@/library/features/my-pokemon/hooks/my-pokemon.hooks';
import { IRegisterPokemonProps } from '@/library/features/my-pokemon/interface';
import { PokemonRegisterFAB } from '@/library/styles/pokemon.styles';

import FormRegistrationDialog from '../form-register-dialog';

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

  if (!pokemon) return null;

  /**
   * Save Pokemon Into Localstorage
   * @returns {void}
   */
  const onSavePokemon = (): void => {
    if (pokemon) {
      const response = registerPokemon(pokemon, `${pokemon.name}-sample`);

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
      const response = releasePokemon(`${pokemon.name}-sample`);

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
      setFormDialog(true);

      if (!saved) {
        setLoading(true);
        enableToCatch().then((item) => {
          setLoading(false);

          if (item) {
            onSavePokemon();
          }
        });
      } else {
        onDeletePokemon();
      }
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
        on={() => setFormDialog(false)}
        show={formDialog}
        title="Daftar"
      />
    </>
  );
};

export default PokemonRegisterDialog;
