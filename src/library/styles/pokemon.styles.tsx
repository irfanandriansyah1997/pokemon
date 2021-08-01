import { verifiedIsNotEmpty } from '@99/helper';
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
  ({ backgroundImage, color, show }) => {
    let background = ``;
    if (verifiedIsNotEmpty(backgroundImage)) {
      background = `url('${backgroundImage}') repeat`;
    } else {
      background = `${
        show ? color || `rgba(255,255,255,0.15)` : `rgba(255,255,255,0.15)`
      }`;
    }

    return {
      background,
      height: `100%`,
      left: 0,
      opacity: verifiedIsNotEmpty(backgroundImage) ? 0.4 : 1,
      position: `fixed`,
      top: 0,
      transition: `0.3s cubic-bezier(0.7, 0.3, 0, 1)`,
      visibility: show ? `visible` : `hidden`,
      width: `100%`,
      zIndex: 999
    };
  }
);

export const PokemonTopSectionDialog = styled.div<{ showSection: boolean }>(
  ({ showSection }) => ({
    '.genus': {
      background: `rgba(0, 0, 0, 0.15)`,
      borderRadius: `20px`,
      display: `inline-block`,
      padding: `5px 10px`
    },
    '> div': {
      left: 0,
      position: `absolute`,
      top: 40,
      width: `100vw`
    },
    left: 0,
    opacity: showSection ? 1 : 0,
    p: {
      textShadow: `rgb(0 0 0 / 40%) 0px 2px 16px`,
      transition: `0.3s cubic-bezier(0.7, 0.3, 0, 1)`
    },
    'p:first-of-type': {
      marginBottom: -5
    },
    padding: `24px 18px 0`,
    position: `absolute`,
    top: 0,
    transition: `0.3s cubic-bezier(0.7, 0.3, 0, 1)`,
    width: `calc(100vw - 36px)`
  })
);

export const PokemonCloseDialog = styled.section({
  alignItems: `center`,
  background: `rgba(0, 0, 0, 0.15)`,
  borderRadius: `50%`,
  display: `flex`,
  height: 30,
  justifyContent: `center`,
  overflow: `hidden`,
  'p:first-of-type': {
    margin: 0
  },
  position: `absolute`,
  right: 18,
  top: 18,
  width: 30,
  zIndex: 100
});

export const PokemonCardContainer = styled.div<{ color: string }>(
  ({ color }) => ({
    '&::after': {
      background: `rgba(0,0,0,0.1)`,
      clipPath: `polygon(0 0, 100% 0%, 79% 100%, 0% 100%)`,
      content: `''`,
      height: `130px`,
      left: 0,
      position: `absolute`,
      top: `50%`,
      transform: `translateY(-50%)`,
      width: `130px`
    },
    '&::before': {
      background: `rgba(255,255,255,0.15)`,
      content: `''`,
      height: `100%`,
      left: 0,
      position: `absolute`,
      top: 0,
      width: `100%`
    },
    '.poke-ball': {
      bottom: 10,
      position: `absolute`,
      right: 10
    },
    '.pokemon-text': {
      left: 140
    },
    '.pokemon-text, > div img': {
      position: `absolute`,
      top: `50%`,
      transform: `translateY(-50%)`
    },
    '> div': {
      height: `100%`,
      img: {
        height: 100,
        objectFit: `contain`,
        width: 100
      },
      left: 0,
      position: `absolute`,
      top: 0,
      width: `100%`,
      zIndex: 1
    },
    background: color,
    borderRadius: 10,
    height: 100,
    margin: `10px`,
    minWidth: `calc(100% - 20px)`,
    overflow: `hidden`,
    position: `relative`,
    transition: `0.3s cubic-bezier(0.7, 0.3, 0, 1)`
  })
);

export const PokeBallContainer = styled.div<{ active: boolean }>(() => ({
  '&::after': {
    background: COLOR.red,
    border: `2px solid ${COLOR.white}`,
    borderRadius: `50%`,
    height: 6,
    width: 6
  },
  '&::before': {
    background: COLOR.white,
    height: `2px`,
    width: `100%`
  },
  '&::before, &::after': {
    content: `''`,
    left: `50%`,
    position: `absolute`,
    top: `50%`,
    transform: `translate(-50%, -50%)`
  },
  background: COLOR.red,
  border: `2px solid #fff`,
  borderRadius: `50%`,
  height: 25,
  position: `relative`,
  width: 25
}));

export const PokeInfoItem = styled.div({
  alignItems: `center`,
  borderRadius: 10,
  boxShadow: `0 0 2px rgb(40 41 61 / 2%), 0 4px 8px rgb(96 97 112 / 8%)`,
  display: `flex`,
  flexDirection: `column`,
  img: {
    background: COLOR.light,
    height: 100,
    objectFit: `contain`,
    width: 130
  },
  justifyContent: `center`,
  margin: `10px 0`,
  overflow: `hidden`,
  p: {
    margin: `10px 0`
  }
});

export const PokeEvoLabel = styled.div({
  alignItems: `center`,
  display: `flex`,
  flexDirection: `column`,
  img: {
    background: COLOR.white,
    borderRadius: `50%`,
    height: 20,
    marginBottom: 5,
    objectFit: `contain`,
    opacity: 0.75,
    padding: 5,
    width: 20
  },
  justifyContent: `center`,
  'p:first-of-type': {
    lineHeight: `20px`,
    marginBottom: 0
  }
});
