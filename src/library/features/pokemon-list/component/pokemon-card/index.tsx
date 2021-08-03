import { verifiedIsNotEmpty } from '@99/helper';
import { FC, MouseEventHandler } from 'react';
import { usePalette } from 'react-palette';

import { formattedPokemonID } from '@/helper/pokemon.helper';
import PokeBall from '@/library/component/pokeball';
import { IPokemonCardProps } from '@/library/features/pokemon-list/interface';
import { Text } from '@/library/styles/general.styles';
import { PokemonCardContainer } from '@/library/styles/pokemon.styles';

/**
 * Pokemon Card Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.30
 */
const PokemonCard: FC<IPokemonCardProps> = ({
  customName,
  id,
  image,
  name,
  onClick
}) => {
  const { data } = usePalette(image);

  /**
   * On Click Card
   * @returns {void}
   */
  const onClickCard: MouseEventHandler<HTMLDivElement> = (e): void => {
    e.preventDefault();

    onClick(name);
  };

  return (
    <PokemonCardContainer
      tabIndex={0}
      color={data.vibrant || `#ddd`}
      role="button"
      onClick={onClickCard}
    >
      <div>
        <img loading="lazy" alt={`Pokemon ${name}`} src={`${image}`} />
        <div className="pokemon-text">
          <Text fontSize="large" fontWeight={700} color="white">
            {formattedPokemonID(`${id}`)}
          </Text>
          <Text fontSize="normal" fontWeight={400} color="white">
            {verifiedIsNotEmpty(customName) ? `${customName}` : name}
          </Text>
        </div>
        <PokeBall />
      </div>
    </PokemonCardContainer>
  );
};

export default PokemonCard;
