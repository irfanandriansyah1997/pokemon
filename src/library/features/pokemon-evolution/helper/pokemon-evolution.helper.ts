import {
  IEvolutionItem,
  IEvolutionItemLabel,
  IEvolutionItemPokemon
} from '@/library/features/pokemon-evolution/interface';
import {
  IPokemonEvo,
  IPokemonEvoChain,
  IPokemonEvoDetail
} from '@/library/interface/pokemon';
/**
 * Get ID Evolution
 * @param {string} url - evolution parameter
 * @returns {string}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.01
 */
export const getIDFromEvolution = (url: string): string => {
  const splitUrl = url.split(`/`);
  if (splitUrl && splitUrl.length > 2) {
    return splitUrl[splitUrl.length - 2];
  }

  return ``;
};

/**
 * Generate Pokemon
 * @author Irfan Andriansyah <irfan@99.co>
 * @param {IPokemonEvo} chain - chain pokemon evolution
 * @returns {IEvolutionItemPokemon}
 * @since 2021.08.01
 */
export const generatePokemon = ({
  species: { name, url }
}: IPokemonEvo): IEvolutionItemPokemon => {
  const id = getIDFromEvolution(`${url}`);
  const imagesUrl = `${process.env.REACT_APP_POKEMON_PHOTO}${id}.png`;

  return {
    images: `${imagesUrl}`,
    pokeName: name || `-`
  };
};

/**
 * Generate Evolution Label
 * @param {IPokemonEvoDetail[]} evoDetail - evolution detail array
 * @returns {IEvolutionItemLabel}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.01
 */
export const generateEvolutionLabel = (
  evolutionDetails: IPokemonEvoDetail[]
): IEvolutionItemLabel => {
  const response: IEvolutionItemLabel = {
    attributes: ``,
    name: ``
  };

  evolutionDetails
    .slice(0, 1)
    .forEach(
      ({
        held_item,
        item,
        known_move,
        known_move_type,
        location,
        min_affection,
        min_beauty,
        min_happiness,
        min_level,
        time_of_day,
        trigger: { name }
      }) => {
        response.name = name || `-`;
        const attributes: string[] = [];

        if (min_level) {
          attributes.push(`Min Level ${min_level}`);
        }
        if (min_happiness) {
          attributes.push(`Min Happines ${min_happiness}`);
        }
        if (min_affection) {
          attributes.push(`Min Affection ${min_affection}`);
        }
        if (min_beauty) {
          attributes.push(`Min Beauty ${min_beauty}`);
        }
        if (item) {
          attributes.push(`${item?.name}`);
        }
        if (known_move) {
          attributes.push(`Move ${known_move?.name}`);
        }
        if (known_move_type) {
          attributes.push(`Know ${known_move_type?.name} Move`);
        }
        if (location) {
          attributes.push(`Near ${location?.name}`);
        }
        if (held_item) {
          attributes.push(`Held item ${held_item?.name}`);
        }
        if (time_of_day !== ``) {
          attributes.push(`${time_of_day}time`);
        }

        response.attributes = attributes.join(`, `);
      }
    );

  return response;
};

/**
 * Generate Evolution Item
 * @param {IPokemonEvo} chain - chain pokemon evolution
 * @returns {IEvolutionItem[]}
 */
export const generateEvolutionItem = (
  chain: IPokemonEvo,
  level = 0
): IEvolutionItem[] => {
  const response: IEvolutionItem[] = [];
  const { evolves_to } = chain;

  if (evolves_to.length > 0) {
    evolves_to.forEach((evolvesItem, index) => {
      const { evolution_details } = evolvesItem;
      response.push({
        imageAfter: generatePokemon(evolvesItem),
        imageBefore: generatePokemon(chain),
        key: `level-${level}-${index}`,
        label: generateEvolutionLabel(evolution_details)
      });
    });

    response.push(
      ...evolves_to
        .map((evolvesItem) => generateEvolutionItem(evolvesItem, level + 1))
        .reduce((prev, current) => [...prev, ...current], [])
    );
  }

  return response;
};

/**
 * Generate Evolution
 * @param {IEvolutionChain} evolution - evolution chain
 * @returns {any[]}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.01
 */
export const generateEvolution = (
  {
    evolutionChain: {
      response: { chain }
    }
  }: IPokemonEvoChain,
  index = 0
): IEvolutionItem[] => generateEvolutionItem(chain, index);
