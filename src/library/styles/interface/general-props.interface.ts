import { Property } from 'csstype';

import { COLOR, FONT_SIZE } from '@/library/styles/constant';

export type IColor = keyof typeof COLOR;
export type IFontSize = keyof typeof FONT_SIZE;

/**
 * Grid Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.31
 */
export interface IGridProps {
  rowGap: number;
  templates: string | string[];
}

interface IBaseTextProps {
  textAlign?: Property.TextAlign;
}

/**
 * Text Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.31
 */
export interface ITextProps extends IBaseTextProps {
  color?: IColor;
  fontSize?: IFontSize;
  fontWeight?: Property.FontWeight;
}

/**
 * Label Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.31
 */
export type ILabelProps = IBaseTextProps;

/**
 * Heading Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.31
 */
export interface IHeadingProps extends IBaseTextProps {
  color?: IColor;
}
