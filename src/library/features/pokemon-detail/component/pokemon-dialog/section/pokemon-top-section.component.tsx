import { FC } from 'react';

import Carousel from '@/library/component/carousel';
import { IPokemonTopSectionProps } from '@/library/features/pokemon-detail/interface';
import { Text } from '@/library/styles/general.styles';
import { PokemonTopSectionDialog } from '@/library/styles/pokemon.styles';

/**
 * Pokemon Top Section
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.31
 */
const PokemonTopSection: FC<IPokemonTopSectionProps> = ({
  genus,
  id,
  name,
  showImage,
  showWrapper,
  sprite
}) => (
  <PokemonTopSectionDialog>
    <Text color={showWrapper ? `white` : `secondary`} fontSize="text">
      #{id.toString().padStart(3, `0`)}
    </Text>
    <Text
      color={showWrapper ? `white` : `secondary`}
      fontSize="title"
      fontWeight={600}
    >
      {name}
    </Text>
    <Text color={showWrapper ? `white` : `secondary`} fontSize="text">
      {genus}
    </Text>
    {sprite && (
      <Carousel
        showCarousel={showImage || false}
        item={[sprite.front_default, sprite.back_default]}
      />
    )}
  </PokemonTopSectionDialog>
);

export default PokemonTopSection;
