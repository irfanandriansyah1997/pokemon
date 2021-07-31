import { verifiedKeyIsExist } from '@99/helper';

/**
 * Translate Label Stats
 * @param {string} label - label stats
 * @returns {string}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.31
 */
export const translateLabelStats = (label: string): string => {
  const defaultLabel: Record<string, string> = {
    attack: `Attack`,
    defense: `Defense`,
    hp: `Hp`,
    'special-attack': `Spc. Attack`,
    'special-defense': `Spc. Defense`,
    speed: `Speed`
  };

  if (verifiedKeyIsExist(defaultLabel, label)) {
    return defaultLabel[label];
  }

  return label;
};
