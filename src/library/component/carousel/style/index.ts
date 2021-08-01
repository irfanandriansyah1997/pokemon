import styled from '@emotion/styled';

import Next from '@/assets/images/next.svg';
import Prev from '@/assets/images/prev.svg';
import { ICarouselWrapper } from '@/library/component/carousel/interface';
import { COLOR } from '@/library/styles/constant';

export const CarouselWrapper = styled.div<ICarouselWrapper>(
  ({ showCarousel }) => ({
    '> div:first-of-type': {
      alignItems: `center`,
      display: `flex`,
      transform: `translateX(0%)`,
      transition: `0.3s cubic-bezier(0.7, 0.3, 0, 1)`,
      width: `100%`
    },
    alignItems: `center`,
    display: `flex`,
    height: 200,
    opacity: showCarousel ? 1 : 0,
    position: `relative`,
    transition: `0.3s cubic-bezier(0.7, 0.3, 0, 1)`,
    width: `100%`
  })
);

export const CarouselItem = styled.div({
  '&::before': {
    background: `rgba(0, 0, 0, 0.1)`,
    borderRadius: `50%`,
    content: `''`,
    height: 160,
    position: `absolute`,
    width: 160
  },
  alignItems: `center`,
  display: `flex`,
  flex: `0 0 100%`,
  img: {
    width: 130
  },
  justifyContent: `center`,
  position: `relative`
});

export const CarouselPrev = styled.div<{ show: boolean }>(({ show }) => ({
  '&::before': {
    background: `url(${Prev}) no-repeat`,
    backgroundSize: `10px 10px`,
    content: `''`,
    height: 10,
    left: `50%`,
    position: `absolute`,
    top: `50%`,
    transform: `translate(-50%, -50%)`,
    width: 10
  },
  alignItems: `center`,
  background: COLOR.white,
  borderRadius: `50%`,
  boxShadow: `0 2px 8px rgba(40, 41, 61, 0.08), 0 16px 24px rgba(96, 97, 112, 0.32)`,
  display: `flex`,
  flex: `0 0 100%`,
  height: 45,
  justifyContent: `center`,
  left: 10,
  opacity: show ? 1 : 0,
  position: `absolute`,
  top: `60%`,
  transform: `translateY(-50%)`,
  transition: `0.3s cubic-bezier(0.7, 0.3, 0, 1)`,
  width: 45
}));

export const CarouselNext = styled.div<{ show: boolean }>(({ show }) => ({
  '&::before': {
    background: `url(${Next}) no-repeat`,
    backgroundSize: `10px 10px`,
    content: `''`,
    height: 10,
    left: `50%`,
    position: `absolute`,
    top: `50%`,
    transform: `translate(-50%, -50%)`,
    width: 10
  },
  alignItems: `center`,
  background: COLOR.white,
  borderRadius: `50%`,
  boxShadow: `0 2px 8px rgba(40, 41, 61, 0.08), 0 16px 24px rgba(96, 97, 112, 0.32)`,
  display: `flex`,
  flex: `0 0 100%`,
  height: 45,
  justifyContent: `center`,
  opacity: show ? 1 : 0,
  position: `absolute`,
  right: 10,
  top: `60%`,
  transform: `translate(-50%, -50%)`,
  transition: `0.3s cubic-bezier(0.7, 0.3, 0, 1)`,
  width: 45
}));

export const CarouselIndicator = styled.div<{ indicator: number }>(
  ({ indicator }) => ({
    '> div:first-of-type': {
      background: indicator === 0 ? COLOR.white : undefined
    },
    '> div:last-of-type': {
      background: indicator === 1 ? COLOR.white : undefined
    },
    alignItems: `center`,
    bottom: -20,
    display: `flex`,
    div: {
      border: `1px solid ${COLOR.white}`,
      borderRadius: `50%`,
      margin: `0 5px`,
      minHeight: 10,
      minWidth: 10,
      transition: `0.3s cubic-bezier(0.7, 0.3, 0, 1)`
    },
    justifyContent: `center`,
    left: `50%`,
    position: `absolute`,
    transform: `translateX(-50%)`,
    width: 50
  })
);
