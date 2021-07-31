import { ITabActionItem } from '@/library/component/tab-action/interface';
import { IPokemonTab } from '@/library/features/pokemon-detail/interface';

export const MAX_POKEMON_STATS = 180;

export const POKEMON_TAB_ITEM: ITabActionItem[] = [
  {
    id: IPokemonTab.about,
    text: `About`
  },
  {
    id: IPokemonTab.stats,
    text: `Stats`
  },
  {
    id: IPokemonTab.evolution,
    text: `Evolution`
  }
];
