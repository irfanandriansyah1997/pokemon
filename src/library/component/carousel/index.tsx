import { FC, useState } from 'react';

import { ICarouselProps } from './interface';
import {
  CarouselIndicator,
  CarouselItem,
  CarouselNext,
  CarouselPrev,
  CarouselWrapper
} from './style';

/**
 * Carousel Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.31
 */
const Carousel: FC<ICarouselProps> = ({ item, showCarousel }) => {
  const [position, setPosition] = useState(0);

  return (
    <CarouselWrapper showCarousel={showCarousel}>
      <div
        style={{
          transform: position === 0 ? `translateX(0%)` : `translateX(-100%)`
        }}
      >
        {item.map((image) => (
          <CarouselItem key={image}>
            <img loading="lazy" src={image} alt="Pokemon" />
          </CarouselItem>
        ))}
      </div>
      <CarouselPrev
        show={position === 1}
        onClick={(e): void => {
          e.preventDefault();
          setPosition(0);
        }}
      />
      <CarouselNext
        show={position === 0}
        onClick={(e): void => {
          e.preventDefault();
          setPosition(1);
        }}
      />
      <CarouselIndicator indicator={position}>
        <div />
        <div />
      </CarouselIndicator>
    </CarouselWrapper>
  );
};

export default Carousel;
