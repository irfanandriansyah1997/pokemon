import { IEventComponent } from '@/library/interface/general';
import { IPokemon, IPokemonSprites } from '@/library/interface/pokemon';

export type IEventOnClose = IEventComponent<'on-close'>;

export type IEventOnRelease = IEventComponent<'on-release'>;

export type IPokemonDialogEvent = (
  event: IEventOnClose | IEventOnRelease
) => void;

/**
 * Pokemon Dialog Props
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.30
 */
export interface IPokemonDialogProps {
  on: IPokemonDialogEvent;
  pokemon?: IPokemon;
  showDialog: boolean;
}

/**
 * Pokemon Dialog Backdrop Props
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.31
 */
export interface IPokemonDialogBackdropProps {
  color?: string;
  show?: boolean;
}

/**
 * Pokemon Top Section Props
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.31
 */
export interface IPokemonTopSectionProps {
  genus: string;
  id: string;
  name: string;
  showImage?: boolean;
  showWrapper?: boolean;
  sprite?: IPokemonSprites;
}
