import { verifiedIsNotEmpty } from '@99/helper';
import { useQuery } from '@apollo/client';
import { ComponentType, FC, ReactNode, useEffect, useState } from 'react';
import Loadable, { LoadableComponent } from 'react-loadable';
import Sheet from 'react-modal-sheet';
import { usePalette } from 'react-palette';

import { QueryPokemonArgs as Args } from '@/contract/graphql';
import TabAction from '@/library/component/tab-action';
import { ITabActionEvent } from '@/library/component/tab-action/interface';
import { POKEMON_TAB_ITEM } from '@/library/constant/pokemon';
import PokemonRegisterDialog from '@/library/features/my-pokemon/component/register-dialog';
import { IRegisterPokemonEvent } from '@/library/features/my-pokemon/interface';
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

const PokemonEvolution = Loadable({
  loader: () =>
    import(`@/library/features/pokemon-evolution/component/pokemon-evolution`),
  loading: () => null
});

type IPokemonTabSection = ComponentType<IPokemon> & LoadableComponent;

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
  const { customName, id, image, name, pokeSpecies, sprites } = pokemon || {};
  const { genera = [] } = pokeSpecies || {};
  const {
    data: { vibrant: color = `#ddd` }
  } = usePalette(image || ``);

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
  const onCloseDialog = (fromTopSection = false) => (): void => {
    toggleShowBackdrop(false);

    setTimeout(
      () => {
        setPokemon(undefined);
        setSelection(0);

        on({
          event: `on-close`
        });
      },
      fromTopSection ? 100 : 0
    );
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
      let Component: IPokemonTabSection = PokemonAbout;

      switch (selection) {
        case IPokemonTab.about:
          Component = PokemonAbout as IPokemonTabSection;
          break;

        case IPokemonTab.stats:
          Component = PokemonStats as IPokemonTabSection;
          break;

        case IPokemonTab.evolution:
          Component = PokemonEvolution as IPokemonTabSection;
          break;

        default:
          return null;
      }

      return <Component {...(pokemon as IPokemon)} />;
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

  /**
   * Event Handler On Change State From Register
   * @param {IEventOnSave | IEventOnRelease} event - event when user change register pokemon
   * @returns {void}
   */
  const onChangeStateRegister: IRegisterPokemonEvent = ({
    event,
    payload
  }): void => {
    switch (event) {
      case `on-save`: {
        if (pokemon)
          setPokemon({
            ...pokemon,
            customName: payload as string
          });
        break;
      }

      case `on-release`: {
        if (pokemon)
          setPokemon({
            ...pokemon,
            customName: undefined
          });

        onCloseDialog()();
        break;
      }

      default:
        break;
    }
  };

  return (
    <>
      <PokemonDialogBackdrop
        show={showBackdrop}
        color={loading ? `#ddd` : color}
      />
      <PokemonRegisterDialog
        pokemon={res.pokemon}
        saved={verifiedIsNotEmpty(customName)}
        show={showBackdrop}
        on={onChangeStateRegister}
      />
      <Sheet
        isOpen={showDialog}
        snapPoints={[600, 450]}
        onCloseStart={() => toggleShowBackdrop(false)}
        onOpenStart={() => toggleShowBackdrop(true)}
        initialSnap={1}
        onSnap={onSnapSheet}
        onClose={onCloseDialog()}
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
              on={onCloseDialog(true)}
              showImage={!enableScroll}
              name={name as string}
              customName={customName}
              showWrapper={showBackdrop}
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
