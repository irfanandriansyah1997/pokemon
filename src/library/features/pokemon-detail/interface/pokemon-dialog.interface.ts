import { IEventComponent } from '@/library/interface/general';
import { IPokemon, IPokemonSprites } from '@/library/interface/pokemon';

export type IEventOnClose = IEventComponent<'on-close'>;

export type IEventOnRelease = IEventComponent<'on-release'>;

export type IPokemonDialogEvent = (event: IEventOnClose) => void;

export type IPokemonTopSectionEvent = (event: IEventOnClose) => void;

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
  backgroundImage?: string;
  color?: string;
  show?: boolean;
  zIndex?: number;
}

/**
 * Pokemon Top Section Props
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.31
 */
export interface IPokemonTopSectionProps {
  customName?: string;
  genus: string;
  id: string;
  name: string;
  on: IPokemonTopSectionEvent;
  showImage?: boolean;
  showWrapper?: boolean;
  sprite?: IPokemonSprites;
}
