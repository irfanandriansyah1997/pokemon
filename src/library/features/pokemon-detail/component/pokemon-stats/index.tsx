import { FC, Fragment } from 'react';

import ProgressBar from '@/library/component/progress-bar';
import { MAX_POKEMON_STATS } from '@/library/constant/pokemon';
import { translateLabelStats } from '@/library/features/pokemon-detail/helper';
import { IPokemon, IPokemonStat } from '@/library/interface/pokemon';
import { Grid, Heading, Label, Text } from '@/library/styles/general.styles';

/**
 * Pokemon Stats Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.31
 */
const PokemonStats: FC<IPokemon> = ({ stats = [] }) => (
  <>
    <Heading>Basic Stats</Heading>
    <Grid templates={[`120px`, `25px`, `auto`, `25px`]} rowGap={22}>
      {stats?.map(({ base_stat, stat: { name } }: IPokemonStat) => (
        <Fragment key={name}>
          <Label>{translateLabelStats(name)}</Label>
          <Text fontSize="text" fontWeight={500} color="primary">
            {base_stat}
          </Text>
          <ProgressBar value={base_stat} maxValue={MAX_POKEMON_STATS} />
          <Text fontSize="text" fontWeight={500} color="primary">
            {MAX_POKEMON_STATS}
          </Text>
        </Fragment>
      ))}
    </Grid>
  </>
);

export default PokemonStats;
