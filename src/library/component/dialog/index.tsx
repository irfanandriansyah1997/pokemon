import { useEffect } from 'react';

import { Text } from '@/library/styles/general.styles';
import { PokemonBackdropStyle } from '@/library/styles/pokemon.styles';

import { IDialogExportDefault } from './interface';
import {
  DialogBody,
  DialogClose,
  DialogFooter,
  DialogHeader,
  DialogStyled,
  DialogWrapper
} from './style';

/**
 * Dialog Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.01
 */
const Dialog: IDialogExportDefault = ({ children, on, show, title }) => {
  /**
   * Simulate Close
   * @returns {void}
   * */
  const onClose = () => {
    if (show)
      on({
        event: `on-close`
      });
  };

  useEffect(() => {
    if (show && document) {
      document.body.style.overflow = `hidden`;
    } else {
      document.body.style.overflow = `inherit`;
    }
  }, [show]);

  return (
    <>
      <PokemonBackdropStyle
        show={show}
        color="rgba(0,0,0,0.25)"
        zIndex={99999999}
        onClick={onClose}
      />
      <DialogWrapper show={show}>
        <DialogStyled show={show}>
          <DialogHeader>
            <Text fontSize="normal" color="primary" fontWeight={500}>
              {title}
            </Text>
            <DialogClose onClick={onClose}>
              <Text fontSize="medium">&times;</Text>
            </DialogClose>
          </DialogHeader>
          {children}
        </DialogStyled>
      </DialogWrapper>
    </>
  );
};

Dialog.Footer = DialogFooter;
Dialog.Body = DialogBody;

export default Dialog;
