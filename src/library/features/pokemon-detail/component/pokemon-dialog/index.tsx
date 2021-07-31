import { verifiedIsNotEmpty } from '@99/helper';
import { useQuery } from '@apollo/client';
import { FC, useEffect, useState } from 'react';
import Sheet from 'react-modal-sheet';

import { QueryPokemonArgs as Args } from '@/contract/graphql';
import { usePokemonDetail } from '@/library/features/pokemon-detail/hooks';
import { IPokemonDialogProps } from '@/library/features/pokemon-detail/interface';
import { PickGQL } from '@/library/interface/gql';
import { IPokemon } from '@/library/interface/pokemon';
import { POKEMON_DETAIL_QUERY } from '@/library/query';
import { PokemonDetailContainer } from '@/library/styles/pokemon.styles';
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
  const [enableScroll, setEnableScroll] = useState(false);

  const { pokeSpecies } = pokemon || {};
  const { color } = pokeSpecies || {};

  useEffect(() => {
    if (showDialog && document) {
      document.body.style.overflow = `hidden`;
    } else {
      document.body.style.overflow = `inherit`;
    }
  }, [showDialog]);

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

  /**
   * On Close Dialog
   * @returns {void}
   */
  const onCloseDialog = (): void => {
    setPokemon(undefined);
    on({
      event: `on-close`
    });
  };

  /**
   * Event Listener When User Snap Dialog
   * @param {number} index - stage position
   * @returns {void}
   */
  const onSnapSheet = (index: number) => {
    if (index === 0) {
      setEnableScroll(true);
    } else {
      setEnableScroll(false);
    }
  };

  const loading = isLoadingGQL || isLoadingRest;

  return (
    <Sheet
      isOpen={showDialog}
      snapPoints={[600, 450]}
      initialSnap={1}
      onSnap={onSnapSheet}
      onClose={onCloseDialog}
    >
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Header>Test</Sheet.Header>
        <Sheet.Content style={{ overflow: enableScroll ? `scroll` : `hidden` }}>
          {loading ? (
            <p>Loading</p>
          ) : (
            <PokemonDetailContainer>
              <PokemonAbout {...(pokemon as IPokemon)} />
            </PokemonDetailContainer>
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
