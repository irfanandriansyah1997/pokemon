import { FC, Fragment } from 'react';

import Eggs from '@/assets/images/eggs.svg';
import { getDescriptionText } from '@/helper/pokemon.helper';
import { IPokemon, IPokemonAbilities } from '@/library/interface/pokemon';
import {
  Badge,
  Grid,
  Heading,
  Label,
  Text
} from '@/library/styles/general.styles';
import {
  PokemonAbilities,
  PokemonAttributes,
  PokemonTrainingSlider,
  PokemonTypes
} from '@/library/styles/pokemon.styles';

import { generatePokemonAttribute } from '../../helper/pokemon-attribute.helper';
import PokemonTraining from '../pokemon-training';

/**
 * Pokemon About
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2021.07.31
 */
const PokemonAbout: FC<IPokemon> = ({
  pokeSpecies,
  types = [],
  base_experience,
  height = 0,
  weight = 0,
  abilities = []
}) => {
  const {
    flavor_text_entries: flavorText = [],
    base_happiness,
    capture_rate,
    growth_rate
  } = pokeSpecies || {};
  const description = getDescriptionText(flavorText);
  const attributes = generatePokemonAttribute({
    height,
    pokeSpecies,
    weight
  });

  return (
    <>
      <Label textAlign="justify">{description}</Label>
      <PokemonTypes>
        {types.map(({ type: { name } }) => (
          <Badge key={name}>{name}</Badge>
        ))}
      </PokemonTypes>
      <Heading>Pokedex Data</Heading>
      <Grid templates={[`90px`, `5px`, `auto`]} rowGap={16}>
        {attributes.map(({ key, value }) => (
          <Fragment key={key}>
            <Text fontWeight={500} fontSize="text">
              {key}
            </Text>
            <Text fontSize="text">:</Text>
            {typeof value === `string` ? (
              <Text fontSize="text">{value}</Text>
            ) : (
              <PokemonAttributes>
                {value.map((item) => (
                  <Text fontSize="text" key={item}>
                    <img src={Eggs} alt={item} />
                    {item}
                  </Text>
                ))}
              </PokemonAttributes>
            )}
          </Fragment>
        ))}
      </Grid>
      <Heading>Ability</Heading>
      <PokemonAbilities>
        {abilities.map(({ ability, is_hidden }: IPokemonAbilities) => (
          <li key={ability?.name}>
            <Text fontSize="normal" fontWeight={500}>
              {ability?.name}
              {` `}
              {is_hidden && `(Hidden Ability)`}
            </Text>
          </li>
        ))}
      </PokemonAbilities>
      <Heading>Training</Heading>
      <PokemonTrainingSlider>
        <PokemonTraining title="Base Experience" value={`${base_experience}`} />
        <PokemonTraining title="Base Happiness" value={`${base_happiness}`} />
        <PokemonTraining title="Catch Rate" value={`${capture_rate}%`} />
        <PokemonTraining title="Growth Rate" value={`${growth_rate?.name}`} />
      </PokemonTrainingSlider>
    </>
  );
};

export default PokemonAbout;
