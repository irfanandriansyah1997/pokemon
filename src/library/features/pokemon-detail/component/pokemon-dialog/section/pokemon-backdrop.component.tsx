import { FC } from 'react';

import { IPokemonDialogBackdropProps } from '@/library/features/pokemon-detail/interface';
import { PokemonBackdropStyle } from '@/library/styles/pokemon.styles';

/**
 * Pokemon Dialog Backdrop
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2021.07.31
 */
const PokemonDialogBackdrop: FC<IPokemonDialogBackdropProps> = (props) => (
  <>
    <PokemonBackdropStyle {...props} />
    <PokemonBackdropStyle {...props} color={undefined} />
  </>
);

export default PokemonDialogBackdrop;
