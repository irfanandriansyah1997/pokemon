import { verifiedIsNotEmpty } from '@99/helper';
import { useQuery } from '@apollo/client';
import { FC, useEffect } from 'react';
import Sheet from 'react-modal-sheet';

import { QueryPokemonArgs as Args } from '@/contract/graphql';
import { usePokemonDetail } from '@/library/features/pokemon-detail/hooks';
import { IPokemonDialogProps } from '@/library/features/pokemon-detail/interface';
import { PickGQL } from '@/library/interface/gql';
import { IPokemon } from '@/library/interface/pokemon';
import { POKEMON_DETAIL_QUERY } from '@/library/query';
import { translateApolloError } from '@/modules/graphql/helper';

/**
 * Pokemon Dialog Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.30
 */
const PokemonDialog: FC<IPokemonDialogProps> = ({ on, showDialog, ...res }) => {
  const {
    action: { setPokemon },
    state: { pokemon }
  } = usePokemonDetail(res.pokemon);

  useEffect(() => {
    if (res.pokemon && res.pokemon.id !== pokemon?.id) {
      setPokemon(res.pokemon);
    }
  }, [pokemon, res.pokemon, setPokemon]);

  const { loading } = useQuery<PickGQL<'pokemon'>, Args>(POKEMON_DETAIL_QUERY, {
    onCompleted: ({ pokemon: resultGQL }) => {
      if (resultGQL) {
        setPokemon({ ...res.pokemon, ...(resultGQL as IPokemon) });
      }
    },
    onError: (error) => {
      translateApolloError(error);
    },
    skip: !showDialog || !pokemon || !verifiedIsNotEmpty(pokemon.name),
    variables: { name: pokemon?.name as string }
  });

  return (
    <Sheet
      isOpen={showDialog}
      snapPoints={[700, 450]}
      initialSnap={1}
      onClose={() =>
        on({
          event: `on-close`
        })
      }
    >
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Content>
          {loading ? (
            <p>Loading</p>
          ) : (
            <div
              style={{
                alignItems: `center`,
                display: `flex`,
                flexDirection: `column`
              }}
            >
              <img src={pokemon?.image} alt={pokemon?.name} />
              {pokemon?.name}
            </div>
          )}
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop
        style={{
          backgroundColor: `rgba(100, 100, 100, 0.5)`
        }}
      />
    </Sheet>
  );
};

export default PokemonDialog;
