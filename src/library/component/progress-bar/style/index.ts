import styled from '@emotion/styled';

import { IProgressBarProps } from '@/library/component/progress-bar/interface';
import { COLOR } from '@/library/styles/constant';

export const ProgressBarWrapper = styled.div({
  backgroundColor: COLOR.light,
  borderRadius: 5,
  boxShadow: `0 0 1px rgba(40, 41, 61, 0.08), 0 0.5px 2px rgba(96, 97, 112, 0.16)`,
  height: 4,
  overflow: `hidden`,
  width: `100%`
});

export const ProgressBarContent = styled.div<IProgressBarProps>(
  ({ maxValue, value }) => {
    const percentage = (value / maxValue) * 100;
    let color = ``;

    if (percentage <= 50) {
      color = `#fb8500`;
    } else if (percentage <= 75) {
      color = `#ffb703`;
    } else {
      color = `#219ebc`;
    }

    return {
      backgroundColor: color,
      borderRadius: 5,
      height: 4,
      overflow: `hidden`,
      width: `${percentage}%`
    };
  }
);
