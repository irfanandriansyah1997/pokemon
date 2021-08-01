import { verifiedIsNotEmpty } from '@99/helper';
import { FC } from 'react';

import { formattedPokemonID } from '@/helper/pokemon.helper';
import Carousel from '@/library/component/carousel';
import { IPokemonTopSectionProps } from '@/library/features/pokemon-detail/interface';
import { Text } from '@/library/styles/general.styles';
import {
  PokemonCloseDialog,
  PokemonTopSectionDialog
} from '@/library/styles/pokemon.styles';

/**
 * Pokemon Top Section
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.31
 */
const PokemonTopSection: FC<IPokemonTopSectionProps> = ({
  customName,
  genus,
  id,
  name,
  on,
  showImage,
  showWrapper,
  sprite
}) => (
  <PokemonTopSectionDialog showSection={showWrapper || false}>
    <PokemonCloseDialog
      onClick={(e) => {
        e.preventDefault();
        on({
          event: `on-close`
        });
      }}
    >
      <Text
        className="close"
        color={showWrapper ? `white` : `secondary`}
        fontSize="normal"
        fontWeight={400}
      >
        x
      </Text>
    </PokemonCloseDialog>
    <Text
      color={showWrapper ? `white` : `secondary`}
      fontSize="normal"
      fontWeight={500}
    >
      {formattedPokemonID(id)}
    </Text>
    <Text
      color={showWrapper ? `white` : `secondary`}
      fontSize="title"
      fontWeight={600}
    >
      {verifiedIsNotEmpty(customName) ? customName : name}
    </Text>
    {verifiedIsNotEmpty(genus) && (
      <Text
        className="genus"
        color={showWrapper ? `white` : `secondary`}
        fontSize="text"
      >
        {genus}
      </Text>
    )}
    {sprite && (
      <Carousel
        showCarousel={showImage || false}
        item={[sprite.front_default, sprite.back_default]}
      />
    )}
  </PokemonTopSectionDialog>
);

export default PokemonTopSection;
