/**
 * Pokemon Base Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.30
 */
export interface IPokemonBase {
  id: string;
  name: string;
  url: string;
}

/**
 * Pokemon Type Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.30
 */
export interface IPokemonType {
  slot: number;
  type: Partial<IPokemonBase>;
}

/**
 * Pokemon Type Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.30
 */
export interface IPokemonAbilities {
  ability: Partial<IPokemonBase>;
  is_hidden: boolean;
}

/**
 * Pokemon Stat Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.30
 */
export interface IPokemonStat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
  };
}

/**
 * Pokemon Sprites Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.30
 */
export interface IPokemonSprites {
  back_default: string;
  front_default: string;
}

export interface IPokemonGeneral {
  genus: string;
  language: Partial<IPokemonBase>;
}

/**
 * Pokemon Flavor Text Entries
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.30
 */
export interface IPokemonFlavorTextEntries {
  flavor_text: string;
  language: Partial<IPokemonBase>;
  version?: Partial<IPokemonBase>;
  version_group?: Partial<IPokemonBase>;
}
