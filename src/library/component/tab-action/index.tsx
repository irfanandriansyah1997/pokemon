import { FC } from 'react';

import { Text } from '@/library/styles/general.styles';

import { ITabActionProps } from './interface';
import { TabActionItem, TabActionWrapper } from './style';

/**
 * Tab Action Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.31
 */
const TabAction: FC<ITabActionProps> = ({ active, list, on }) => (
  <TabActionWrapper count={list.length}>
    {list.map(({ id, text }) => (
      <TabActionItem
        key={id}
        active={active === id}
        onClick={(e) => {
          e.preventDefault();
          on({
            event: `on-change-index`,
            payload: id
          });
        }}
      >
        <Text
          color={active === id ? `red` : `secondary`}
          fontWeight={500}
          fontSize="normal"
        >
          {text}
        </Text>
      </TabActionItem>
    ))}
  </TabActionWrapper>
);

export default TabAction;
