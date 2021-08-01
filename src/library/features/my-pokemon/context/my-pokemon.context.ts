import { createContext } from 'react';

import { IMyPokemonHooks } from '@/library/features/my-pokemon/interface';
import { NullAble } from '@/library/interface/general';

/**
 * My Pokemon Context
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.01
 */
const MyPokemonContext = createContext<NullAble<IMyPokemonHooks>>(undefined);

export default MyPokemonContext;
