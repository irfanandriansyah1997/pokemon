import { FC } from 'react';

import Pokemon from '@/assets/images/pokemon.svg';
import { IPokemonTrainingProps } from '@/library/features/pokemon-detail/interface/pokemon-training.interface';
import { Text } from '@/library/styles/general.styles';
import { PokemonTrainingCard } from '@/library/styles/pokemon.styles';

/**
 * Pokemon Training Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.31
 */
const PokemonTraining: FC<IPokemonTrainingProps> = ({ title, value }) => (
  <PokemonTrainingCard>
    <img src={Pokemon} alt="Training" />
    <Text fontSize="normal" fontWeight={400}>
      {title}
    </Text>
    <Text fontSize="medium" fontWeight={700} color="primary">
      {value}
    </Text>
  </PokemonTrainingCard>
);

export default PokemonTraining;
