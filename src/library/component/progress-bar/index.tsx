import { FC } from 'react';

import { IProgressBarProps } from './interface';
import { ProgressBarContent, ProgressBarWrapper } from './style';

/**
 * Progress Bar Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.31
 */
const ProgressBar: FC<IProgressBarProps> = (props) => (
  <ProgressBarWrapper>
    <ProgressBarContent {...props} />
  </ProgressBarWrapper>
);

export default ProgressBar;
