import { IPokemonFlavorTextEntries } from '../interface/pokemon';

/**
 * Generate Description Pokemon
 * @param {IPokemonFlavorTextEntries[]} flavorText - array of pokemon flavor get from species api
 * @returns {string}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.31
 */
export const getDescriptionText = (
  flavorText: IPokemonFlavorTextEntries[]
): string =>
  flavorText.find(
    ({
      language,
      version: { name: versionName } = {},
      version_group: { name: versionGroupName } = {}
    }) => {
      const version = process.env.REACT_APP_POKEMON_VERSION as string;
      if (language?.name === process.env.REACT_APP_POKEMON_LANGUAGE) {
        if (
          versionName?.includes(version) ||
          versionGroupName?.includes(version)
        ) {
          return true;
        }
      }

      return false;
    }
  )?.flavor_text || ``;
