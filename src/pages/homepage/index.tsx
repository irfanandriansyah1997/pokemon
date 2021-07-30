import { FC } from 'react';

import { usePokemonList } from '@/library/features/pokemon-list/hooks';

/**
 * Homepage Page
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.03
 */
const Homepage: FC = () => {
  const {
    action: { loadMore },
    state: { response }
  } = usePokemonList();

  return (
    <div style={{ display: `flex`, flexWrap: `wrap` }}>
      {response.map(({ image, name }) => (
        <div
          key={name}
          style={{
            alignItems: `center`,
            background: `#fafafa`,
            borderRadius: 10,
            display: `flex`,
            flexDirection: `column`,
            height: 100,
            justifyContent: `center`,
            margin: `10px`,
            minWidth: `calc(50vw - 30px)`
          }}
        >
          <img style={{ width: 50 }} alt={`${name}`} src={`${image}`} />
          {name}
        </div>
      ))}
      <button
        type="submit"
        style={{
          border: 0,
          borderRadius: 10,
          margin: `10px auto 10px`,
          padding: 10
        }}
        onClick={(e): void => {
          e.preventDefault();
          loadMore();
        }}
      >
        Load More
      </button>
    </div>
  );
};

export default Homepage;
