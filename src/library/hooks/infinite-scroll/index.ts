import { Dispatch, SetStateAction, useEffect, useState } from 'react';

/**
 * Infinite Scroll React Hooks
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.02
 */
export const useInfiniteScroll = (): [
  boolean,
  Dispatch<SetStateAction<boolean>>
] => {
  const [isFetching, setIsFetching] = useState(false);

  /**
   * Handle Scroll
   * @return {void}
   */
  const handleScroll = (): void => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isFetching
    )
      return;
    setIsFetching(true);
  };

  useEffect(() => {
    window.addEventListener(`scroll`, handleScroll);
    return (): void => window.removeEventListener(`scroll`, handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [isFetching, setIsFetching];
};
