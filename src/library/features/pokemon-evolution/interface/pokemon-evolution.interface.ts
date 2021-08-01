/**
 * Evolution Label Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.01
 */
export interface IEvolutionItem {
  imageAfter: IEvolutionItemPokemon;
  imageBefore: IEvolutionItemPokemon;
  key: string;
  label: IEvolutionItemLabel;
}

/**
 * Evolution Item Label Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.01
 */
export interface IEvolutionItemLabel {
  attributes: string;
  name: string;
}

/**
 * Evolution Item Pokemon Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.01
 */
export interface IEvolutionItemPokemon {
  images: string;
  pokeName: string;
}
