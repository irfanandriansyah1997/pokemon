import { useQuery } from '@apollo/client';
import { FC, useState } from 'react';

import NextArrow from '@/assets/images/next-arrow.svg';
import { QueryEvolutionChainArgs } from '@/contract/graphql';
import {
  generateEvolution,
  getIDFromEvolution
} from '@/library/features/pokemon-evolution/helper';
import {
  IEvolutionItem,
  IEvolutionItemLabel,
  IEvolutionItemPokemon,
  IEvolutionListPokemon
} from '@/library/features/pokemon-evolution/interface';
import { IPokemon, IPokemonEvoChain } from '@/library/interface/pokemon';
import { POKEMON_EVOLUTION_QUERY } from '@/library/query';
import { Grid, Heading, Text } from '@/library/styles/general.styles';
import { PokeEvoLabel, PokeInfoItem } from '@/library/styles/pokemon.styles';

/**
 * Pokemon Evolution Label
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.01
 */
const PokemonEvolutionLabel: FC<IEvolutionItemLabel> = ({
  attributes,
  name
}) => (
  <PokeEvoLabel>
    <img loading="lazy" src={NextArrow} alt="evolution arrow" />
    <Text fontWeight={500} fontSize="normal" color="primary">
      {name}
    </Text>
    <Text fontWeight={400} fontSize="text" color="secondary">
      {attributes}
    </Text>
  </PokeEvoLabel>
);

/**
 * Pokemon Evolution Info
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.01
 */
const PokemonEvolutionInfo: FC<IEvolutionItemPokemon> = ({
  images,
  pokeName
}) => (
  <PokeInfoItem>
    <img loading="lazy" src={images} alt={pokeName} />
    <Text fontWeight={500} fontSize="text">
      {pokeName}
    </Text>
  </PokeInfoItem>
);

/**
 * Pokemon Evolution List
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2021.08.03
 */
export const PokemonEvolutionList: FC<IEvolutionListPokemon> = ({
  evolution
}) => (
  <>
    {evolution.map(({ imageAfter, imageBefore, key, label }) => (
      <Grid templates={[`115px`, `auto`, `115px`]} key={key}>
        <PokemonEvolutionInfo {...imageBefore} />
        <PokemonEvolutionLabel {...label} />
        <PokemonEvolutionInfo {...imageAfter} />
      </Grid>
    ))}
  </>
);

/**
 * Pokemon Evolution
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.01
 */
const PokemonEvolution: FC<IPokemon> = ({
  name,
  pokeSpecies: { evolution_chain = {} } = {}
}) => {
  const urlID = getIDFromEvolution(evolution_chain.url || ``);
  const [evolution, setEvolution] = useState<IEvolutionItem[]>([]);

  const { loading } = useQuery<IPokemonEvoChain, QueryEvolutionChainArgs>(
    POKEMON_EVOLUTION_QUERY,
    {
      onCompleted: (response) => {
        setEvolution(generateEvolution(response));
      },
      skip: !urlID,
      variables: { id: urlID }
    }
  );

  if (loading)
    return (
      <Text fontWeight={500} fontSize="medium" textAlign="center">
        <br />
        Loading
      </Text>
    );

  return (
    <>
      <Heading>{`Evolution ${name}`}</Heading>
      <PokemonEvolutionList evolution={evolution} />
    </>
  );
};

export default PokemonEvolution;
