import styled from '@emotion/styled';

import {
  ITabActionItemProps,
  ITabActionWrapperProps
} from '@/library/component/tab-action/interface';
import { COLOR } from '@/library/styles/constant';

export const TabActionWrapper = styled.div<ITabActionWrapperProps>(
  ({ count }) => ({
    alignItems: `center`,
    backgroundColor: COLOR.white,
    borderBottom: `1px solid #ddd`,
    boxShadow: `0 0px 1px rgba(40, 41, 61, 0.08), 0 2px 2px rgba(96, 97, 112, 0.08)`,
    display: `grid`,
    gap: 12,
    gridTemplateColumns: `repeat(${count}, 1fr)`,
    height: 40,
    rowGap: 0,
    width: `100%`
  })
);

export const TabActionItem = styled.div<ITabActionItemProps>(({ active }) => ({
  alignItems: `center`,
  borderBottom: `2px solid ${active ? COLOR.red : `transparent`}`,
  display: `flex`,
  height: `100%`,
  justifyContent: `center`
}));
