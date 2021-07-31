import { verifiedIsNotEmpty } from '@99/helper';
import { useQuery } from '@apollo/client';
import { FC, ReactNode, useEffect, useState } from 'react';
import Loadable from 'react-loadable';
import Sheet from 'react-modal-sheet';

import { QueryPokemonArgs as Args } from '@/contract/graphql';
import TabAction from '@/library/component/tab-action';
import { ITabActionEvent } from '@/library/component/tab-action/interface';
import { POKEMON_TAB_ITEM } from '@/library/constant/pokemon';
import { usePokemonDetail } from '@/library/features/pokemon-detail/hooks';
import {
  IPokemonDialogProps,
  IPokemonTab
} from '@/library/features/pokemon-detail/interface';
import { PickGQL } from '@/library/interface/gql';
import { IPokemon } from '@/library/interface/pokemon';
import { POKEMON_DETAIL_QUERY } from '@/library/query';
import { PokemonDetailContainer } from '@/library/styles/pokemon.styles';
import { translateApolloError } from '@/modules/graphql/helper';

import PokemonDialogBackdrop from './section/pokemon-backdrop.component';
import PokemonTopSection from './section/pokemon-top-section.component';

const PokemonAbout = Loadable({
  loader: () =>
    import(`@/library/features/pokemon-detail/component/pokemon-about`),
  loading: () => null
});

const PokemonStats = Loadable({
  loader: () =>
    import(`@/library/features/pokemon-detail/component/pokemon-stats`),
  loading: () => null
});

/**
 * Pokemon Dialog Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.30
 */
const PokemonDialog: FC<IPokemonDialogProps> = ({ on, showDialog, ...res }) => {
  const {
    action: { setPokemon, setSelection, toggleLoading },
    state: { isLoadingRest, pokemon, selection }
  } = usePokemonDetail();
  const [enableScroll, setEnableScroll] = useState(false);
  const [showBackdrop, toggleShowBackdrop] = useState(false);
  const { id, name, pokeSpecies, sprites } = pokemon || {};
  const { color, genera = [] } = pokeSpecies || {};

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
          toggleLoading(true);
        }
      },
      onError: (error) => {
        translateApolloError(error);
      },
      skip:
        !showDialog || !res.pokemon || !verifiedIsNotEmpty(res.pokemon.name),
      variables: { name: res.pokemon?.name as string }
    }
  );

  /**
   * On Close Dialog
   * @returns {void}
   */
  const onCloseDialog = (): void => {
    setPokemon(undefined);
    setSelection(0);

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

  /**
   * Generate Content
   * @returns {ReactNode}
   */
  const generateContent = (): ReactNode => {
    if (pokemon) {
      switch (selection) {
        case IPokemonTab.about: {
          return <PokemonAbout {...(pokemon as IPokemon)} />;
        }

        case IPokemonTab.stats: {
          return <PokemonStats {...(pokemon as IPokemon)} />;
        }

        default:
          break;
      }
    }

    return null;
  };

  /**
   * On Change Index
   * @param {IEventOnChangeIndex} event - event when user change tab selection
   * @returns {void}
   */
  const onChangeSelection: ITabActionEvent = ({ event, payload }): void => {
    switch (event) {
      case `on-change-index`:
        setSelection(payload);
        break;

      default:
        break;
    }
  };

  return (
    <>
      <PokemonDialogBackdrop
        show={showBackdrop}
        color={loading ? `#ddd` : (color?.name as string)}
      />
      <Sheet
        isOpen={showDialog}
        snapPoints={[600, 450]}
        onCloseStart={() => toggleShowBackdrop(false)}
        onOpenStart={() => toggleShowBackdrop(true)}
        initialSnap={1}
        onSnap={onSnapSheet}
        onClose={onCloseDialog}
      >
        <div>
          <Sheet.Container>
            <Sheet.Header />
            <Sheet.Header>
              <TabAction
                active={selection}
                list={POKEMON_TAB_ITEM}
                on={onChangeSelection}
              />
            </Sheet.Header>
            <Sheet.Content
              style={{ overflow: enableScroll ? `scroll` : `hidden` }}
            >
              {!loading && (
                <PokemonDetailContainer>
                  {generateContent()}
                </PokemonDetailContainer>
              )}
            </Sheet.Content>
          </Sheet.Container>
          {pokemon ? (
            <PokemonTopSection
              id={`${id}`}
              showImage={!enableScroll}
              name={name as string}
              showWrapper={!loading}
              genus={
                genera.find(
                  ({ language }) =>
                    language.name === process.env.REACT_APP_POKEMON_LANGUAGE
                )?.genus || ``
              }
              sprite={sprites}
            />
          ) : null}
        </div>
      </Sheet>
    </>
  );
};

export default PokemonDialog;
