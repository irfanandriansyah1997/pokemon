import {
  IPokemonEvo,
  IPokemonEvoChain,
  IPokemonEvoDetail
} from '@/library/interface/pokemon';

import {
  IEvolutionItem,
  IEvolutionItemLabel,
  IEvolutionItemPokemon
} from '../interface';
/**
 * Get ID Evolution
 * @param {string} url - evolution parameter
 * @returns {string}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.01
 */
export const getIDFromEvolution = (url: string): string => {
  const splitUrl = url.split(`/`);
  return splitUrl ? splitUrl[splitUrl.length - 2] : ``;
};

/**
 * Generate Pokemon
 * @author Irfan Andriansyah <irfan@99.co>
 * @param {IPokemonEvo} chain - chain pokemon evolution
 * @returns {IEvolutionItemPokemon}
 * @since 2021.08.01
 */
const generatePokemon = ({
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
const generateEvolutionLabel = (
  evolutionDetails: IPokemonEvoDetail[]
): IEvolutionItemLabel => {
  const response: IEvolutionItemLabel = {
    attributes: ``,
    name: ``
  };

  evolutionDetails.slice(0, 1).forEach(({ min_level, trigger: { name } }) => {
    response.name = name || `-`;

    if (min_level) {
      response.attributes = `Min Level ${min_level}`;
    }
  });

  return response;
};

/**
 * Generate Evolution Item
 * @param {IPokemonEvo} chain - chain pokemon evolution
 * @returns {IEvolutionItem[]}
 */
const generateEvolutionItem = (
  chain: IPokemonEvo,
  level = 0
): IEvolutionItem[] => {
  const response: any[] = [];
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
): any[] => generateEvolutionItem(chain, index);
