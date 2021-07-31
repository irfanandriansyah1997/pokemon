import styled from '@emotion/styled';

import Ability from '@/assets/images/ability.svg';

import { IPokemonDialogBackdropProps } from '../features/pokemon-detail/interface';
import { COLOR } from './constant';
import { IPokemonContainerProps } from './interface';

export const PokemonDetailContainer = styled.div<IPokemonContainerProps>(
  ({ enableScroll = true }) => ({
    margin: `auto`,
    maxWidth: 700,
    overflowX: `hidden`,
    overflowY: enableScroll ? `auto` : `hidden`,
    padding: `0 18px`,
    width: `calc(100vw - 36px)`
  })
);

export const PokemonTypes = styled.div({
  alignItems: `center`,
  display: `flex`,
  div: {
    margin: `0 6px`
  },
  margin: `18px -6px 10px`
});

export const PokemonAttributes = styled.div({
  alignItems: `center`,
  display: `flex`,
  margin: `0 -6px`,
  p: {
    alignItems: `center`,
    background: COLOR.white,
    border: `thin dashed rgba(0, 0, 0, 0.15)`,
    borderRadius: 10,
    color: COLOR.secondary,
    display: `flex`,
    img: {
      height: 20,
      marginRight: 5,
      objectFit: `cover`,
      width: 20
    },
    margin: `0 6px`,
    padding: `5px 10px`
  }
});

export const PokemonAbilities = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    position: relative;
    padding: 10px 0px 10px 35px;

    &::before {
      content: '';
      z-index: 1;
      width: 25px;
      border-radius: 50%;
      height: 25px;
      position: absolute;
      top: 50%;
      left: 0;
      background-image: url('${Ability}');
      background-size: cover;
      transform: translateY(-50%);
    }
  }
`;

export const PokemonTrainingSlider = styled.div`
  display: flex;
  max-width: calc(100% + 36px);
  overflow-x: scroll;
  flex-wrap: nowrap;
  margin: 0 -18px;
  padding: 5px 8px 20px;
`;

export const PokemonTrainingCard = styled.div`
  align-items: center;
  box-shadow: 0 0 2px rgba(40, 41, 61, 0.04), 0 4px 8px rgba(96, 97, 112, 0.16);
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 150px;
  min-width: 150px;
  padding: 15px;
  width: 150px;
  border-radius: 10px;
  margin: 0 10px;

  img {
    height: 70px;
    margin-bottom: 20px;
    width: 100px;
    object-fit: contain;
  }

  p:last-child {
    margin-top: 5px;
  }
`;

export const PokemonBackdropStyle = styled.div<IPokemonDialogBackdropProps>(
  ({ color, show }) => ({
    background: `${
      show ? color || `rgba(255,255,255,0.5)` : `rgba(255,255,255,0.5)`
    }`,
    height: `100%`,
    left: 0,
    position: `fixed`,
    top: 0,
    transition: `0.3s cubic-bezier(0.7, 0.3, 0, 1)`,
    visibility: show ? `visible` : `hidden`,
    width: `100%`,
    zIndex: 999
  })
);

export const PokemonTopSectionDialog = styled.div({
  '> div': {
    left: 0,
    position: `absolute`,
    width: `100vw`
  },
  left: 0,
  p: {
    transition: `0.3s cubic-bezier(0.7, 0.3, 0, 1)`
  },
  'p:first-of-type': {
    marginBottom: -5
  },
  'p:last-of-type': {
    background: `rgba(255, 255, 255, 0.25)`,
    borderRadius: `20px`,
    display: `inline-block`,
    padding: `5px 10px`
  },
  padding: `24px 18px 0`,
  position: `absolute`,
  top: 0,
  width: `100vw`
});
