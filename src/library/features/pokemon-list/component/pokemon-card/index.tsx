import { FC, MouseEventHandler } from 'react';

import { IPokemonCardProps } from '@/library/features/pokemon-list/interface';

/**
 * Pokemon Card Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.30
 */
const PokemonCard: FC<IPokemonCardProps> = ({ image, name, onClick }) => {
  /**
   * On Click Card
   * @returns {void}
   */
  const onClickCard: MouseEventHandler<HTMLDivElement> = (e): void => {
    e.preventDefault();

    onClick(name);
  };

  return (
    <div
      tabIndex={0}
      role="button"
      onClick={onClickCard}
      onKeyPress={(): void => undefined}
      style={{
        alignItems: `center`,
        background: `#fafafa`,
        borderRadius: 10,
        display: `flex`,
        flexDirection: `column`,
        height: 100,
        justifyContent: `center`,
        margin: `10px`,
        minWidth: `calc(50vw - 30px)`
      }}
    >
      <img style={{ width: 50 }} alt={`${name}`} src={`${image}`} />
      {name}
    </div>
  );
};

export default PokemonCard;
