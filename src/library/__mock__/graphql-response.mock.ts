import { MockedResponse } from '@apollo/client/testing';

import {
  POKEMON_DETAIL_QUERY,
  POKEMON_EVOLUTION_QUERY,
  POKEMON_LIST_QUERY
} from '@/library/query';

export const MOCK_GRAPHQL_RESPONSE: MockedResponse[] = [
  {
    request: {
      query: POKEMON_EVOLUTION_QUERY,
      variables: { id: `1` }
    },
    result: {
      data: {
        evolutionChain: {
          __typename: `BaseResponse`,
          message: ``,
          response: {
            baby_trigger_item: null,
            chain: {
              evolution_details: [],
              evolves_to: [
                {
                  evolution_details: [
                    {
                      gender: null,
                      held_item: null,
                      item: null,
                      known_move: null,
                      known_move_type: null,
                      location: null,
                      min_affection: null,
                      min_beauty: null,
                      min_happiness: null,
                      min_level: 16,
                      needs_overworld_rain: false,
                      party_species: null,
                      party_type: null,
                      relative_physical_stats: null,
                      time_of_day: ``,
                      trade_species: null,
                      trigger: {
                        name: `level-up`,
                        url: `https://pokeapi.co/api/v2/evolution-trigger/1/`
                      },
                      turn_upside_down: false
                    }
                  ],
                  evolves_to: [
                    {
                      evolution_details: [
                        {
                          gender: null,
                          held_item: null,
                          item: null,
                          known_move: null,
                          known_move_type: null,
                          location: null,
                          min_affection: null,
                          min_beauty: null,
                          min_happiness: null,
                          min_level: 32,
                          needs_overworld_rain: false,
                          party_species: null,
                          party_type: null,
                          relative_physical_stats: null,
                          time_of_day: ``,
                          trade_species: null,
                          trigger: {
                            name: `level-up`,
                            url: `https://pokeapi.co/api/v2/evolution-trigger/1/`
                          },
                          turn_upside_down: false
                        }
                      ],
                      evolves_to: [],
                      is_baby: false,
                      species: {
                        name: `venusaur`,
                        url: `https://pokeapi.co/api/v2/pokemon-species/3/`
                      }
                    }
                  ],
                  is_baby: false,
                  species: {
                    name: `ivysaur`,
                    url: `https://pokeapi.co/api/v2/pokemon-species/2/`
                  }
                }
              ],
              is_baby: false,
              species: {
                name: `bulbasaur`,
                url: `https://pokeapi.co/api/v2/pokemon-species/1/`
              }
            },
            id: 1
          },
          status: true
        }
      }
    }
  },
  {
    request: {
      query: POKEMON_DETAIL_QUERY,
      variables: { name: `bulbasaur` }
    },
    result: {
      data: {
        pokemon: {
          __typename: `Pokemon`,
          abilities: [
            {
              __typename: `Ability`,
              ability: { __typename: `BaseName`, name: `overgrow` },
              is_hidden: false
            },
            {
              __typename: `Ability`,
              ability: { __typename: `BaseName`, name: `chlorophyll` },
              is_hidden: true
            }
          ],
          base_experience: 64,
          height: 7,
          message: ``,
          species: {
            __typename: `BaseName`,
            name: `bulbasaur`,
            url: `https://pokeapi.co/api/v2/pokemon-species/1/`
          },
          sprites: {
            __typename: `Sprite`,
            back_default: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png`,
            front_default: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png`
          },
          stats: [
            {
              __typename: `Stat`,
              base_stat: 45,
              effort: 0,
              stat: { __typename: `BaseName`, name: `hp` }
            },
            {
              __typename: `Stat`,
              base_stat: 49,
              effort: 0,
              stat: { __typename: `BaseName`, name: `attack` }
            },
            {
              __typename: `Stat`,
              base_stat: 49,
              effort: 0,
              stat: { __typename: `BaseName`, name: `defense` }
            },
            {
              __typename: `Stat`,
              base_stat: 65,
              effort: 1,
              stat: { __typename: `BaseName`, name: `special-attack` }
            },
            {
              __typename: `Stat`,
              base_stat: 65,
              effort: 0,
              stat: { __typename: `BaseName`, name: `special-defense` }
            },
            {
              __typename: `Stat`,
              base_stat: 45,
              effort: 0,
              stat: { __typename: `BaseName`, name: `speed` }
            }
          ],
          status: true,
          types: [
            {
              __typename: `Type`,
              type: { __typename: `BaseName`, name: `grass` }
            },
            {
              __typename: `Type`,
              type: { __typename: `BaseName`, name: `poison` }
            }
          ],
          weight: 69
        }
      }
    }
  },
  {
    request: {
      query: POKEMON_LIST_QUERY,
      variables: { limit: 10, offset: 0 }
    },
    result: {
      data: {
        pokemons: {
          __typename: `PokemonList`,
          count: 1118,
          message: ``,
          nextOffset: 10,
          params: { limit: 10, offset: 0 },
          prevOffset: 0,
          results: [
            {
              __typename: `PokemonItem`,
              id: 1,
              image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png`,
              name: `bulbasaur`
            },
            {
              __typename: `PokemonItem`,
              id: 2,
              image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png`,
              name: `ivysaur`
            },
            {
              __typename: `PokemonItem`,
              id: 3,
              image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png`,
              name: `venusaur`
            },
            {
              __typename: `PokemonItem`,
              id: 4,
              image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png`,
              name: `charmander`
            },
            {
              __typename: `PokemonItem`,
              id: 5,
              image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png`,
              name: `charmeleon`
            },
            {
              __typename: `PokemonItem`,
              id: 6,
              image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png`,
              name: `charizard`
            },
            {
              __typename: `PokemonItem`,
              id: 7,
              image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png`,
              name: `squirtle`
            },
            {
              __typename: `PokemonItem`,
              id: 8,
              image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png`,
              name: `wartortle`
            },
            {
              __typename: `PokemonItem`,
              id: 9,
              image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png`,
              name: `blastoise`
            },
            {
              __typename: `PokemonItem`,
              id: 10,
              image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png`,
              name: `caterpie`
            }
          ],
          status: true
        }
      }
    }
  },
  {
    request: {
      query: POKEMON_LIST_QUERY,
      variables: { limit: 10, offset: 10 }
    },
    result: {
      data: {
        pokemons: {
          __typename: `PokemonList`,
          count: 1118,
          message: ``,
          nextOffset: 20,
          params: { limit: 10, offset: 10 },
          prevOffset: 0,
          results: [
            {
              __typename: `PokemonItem`,
              id: 11,
              image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png`,
              name: `metapod`
            },
            {
              __typename: `PokemonItem`,
              id: 12,
              image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png`,
              name: `butterfree`
            },
            {
              __typename: `PokemonItem`,
              id: 13,
              image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png`,
              name: `weedle`
            },
            {
              __typename: `PokemonItem`,
              id: 14,
              image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png`,
              name: `kakuna`
            },
            {
              __typename: `PokemonItem`,
              id: 15,
              image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png`,
              name: `beedrill`
            },
            {
              __typename: `PokemonItem`,
              id: 16,
              image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png`,
              name: `pidgey`
            },
            {
              __typename: `PokemonItem`,
              id: 17,
              image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png`,
              name: `pidgeotto`
            },
            {
              __typename: `PokemonItem`,
              id: 18,
              image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png`,
              name: `pidgeot`
            },
            {
              __typename: `PokemonItem`,
              id: 19,
              image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png`,
              name: `rattata`
            },
            {
              __typename: `PokemonItem`,
              id: 20,
              image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png`,
              name: `raticate`
            }
          ],
          status: true
        }
      }
    }
  }
];
