import { IEventComponent } from '@/library/interface/general/event.interface';

export type IEventOnClose = IEventComponent<'on-close'>;

export type IEventOnRelease = IEventComponent<'on-release'>;

/**
 * Pokemon Dialog Props
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.30
 */
export interface IPokemonDialogProps {
  on: (event: IEventOnClose | IEventOnRelease) => void;
  showDialog: boolean;
}
