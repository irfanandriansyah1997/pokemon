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

import PokemonAbout from '../pokemon-about';

/**
 * Pokemon Dialog Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.30
 */
const PokemonDialog: FC<IPokemonDialogProps> = ({ on, showDialog, ...res }) => {
  const {
    action: { setPokemon },
    state: { isLoadingRest, pokemon }
  } = usePokemonDetail(res.pokemon);

  const { pokeSpecies } = pokemon || {};
  const { color } = pokeSpecies || {};

  useEffect(() => {
    if (res.pokemon && res.pokemon.id !== pokemon?.id) {
      setPokemon(res.pokemon);
    }
  }, [pokemon, res.pokemon, setPokemon]);

  const { loading: isLoadingGQL } = useQuery<PickGQL<'pokemon'>, Args>(
    POKEMON_DETAIL_QUERY,
    {
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
    }
  );

  const loading = isLoadingGQL || isLoadingRest;

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
              <PokemonAbout {...(pokemon as IPokemon)} />
            </div>
          )}
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop
        style={{
          backgroundColor: loading ? `#ddd` : color?.name,
          transition: `all 0.5s`
        }}
      />
    </Sheet>
  );
};

export default PokemonDialog;
