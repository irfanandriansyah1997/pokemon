import { useState } from 'react';

import { IPaginationBaseState, IPaginationHooks } from './interface';

/**
 * Use Pagination Hooks
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.29
 */
export const usePagination = (): IPaginationHooks => {
  const [offset, setOffset] = useState(0);
  const [totalData, setTotalData] = useState(0);

  /**
   * Update Range State
   * @param {IPaginationBaseState} param - base pagination state
   * @returns {void}
   */
  const updateRange = ({
    offset: nextOffset,
    totalData: nextTotalData
  }: IPaginationBaseState): void => {
    if (offset !== nextOffset) {
      setOffset(nextOffset);
    }

    if (totalData !== nextTotalData) {
      setTotalData(nextTotalData);
    }
  };

  return {
    action: {
      updateRange
    },
    state: {
      enableLoadMore: offset <= totalData,
      offset,
      totalData
    }
  };
};
