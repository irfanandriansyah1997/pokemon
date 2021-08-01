import { verifiedIsNotEmpty } from '@99/helper';
import styled from '@emotion/styled';

import { COLOR, FONT_SIZE, PRIMARY_FONT } from './constant';
import {
  IGridProps,
  IHeadingProps,
  ILabelProps,
  ITextProps
} from './interface';

export const Grid = styled.div<Partial<IGridProps>>(
  ({ templates = [`auto`, `auto`], rowGap = 12 }) => ({
    alignItems: `center`,
    display: `grid`,
    gap: 12,
    gridTemplateColumns: Array.isArray(templates)
      ? `${templates.join(` `)}`
      : templates,
    rowGap
  })
);

export const Text = styled.p<ITextProps>(
  ({
    color = `secondary`,
    textAlign = `left`,
    fontSize = `normal`,
    fontWeight = 400
  }) => ({
    color: COLOR[color],
    fontFamily: PRIMARY_FONT,
    fontSize: FONT_SIZE[fontSize],
    fontWeight,
    margin: 0,
    textAlign
  })
);

export const Label = styled.p<ILabelProps>(({ textAlign = `left` }) => ({
  color: COLOR.secondary,
  fontFamily: PRIMARY_FONT,
  fontSize: FONT_SIZE.normal,
  fontWeight: 400,
  margin: 0,
  textAlign
}));

export const Heading = styled.p<IHeadingProps>(
  ({ textAlign = `left`, color = `primary` }) => ({
    color: COLOR[color],
    fontFamily: PRIMARY_FONT,
    fontSize: FONT_SIZE.medium,
    fontWeight: 700,
    margin: `24px 0 12px`,
    textAlign
  })
);

export const Badge = styled.div<{ color?: string }>(({ color }) => ({
  backgroundColor: verifiedIsNotEmpty(color)
    ? `${color}`
    : `rgba(0, 0, 0, 0.25)`,
  borderRadius: 20,
  color: COLOR.white,
  fontFamily: PRIMARY_FONT,
  fontSize: FONT_SIZE.text,
  fontWeight: 400,
  padding: `5px 10px`
}));
