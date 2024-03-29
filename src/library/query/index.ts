import gql from 'graphql-tag';

export const POKEMON_LIST_QUERY = gql`
  query getPokemonList($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      nextOffset
      prevOffset
      params
      status
      message
      results {
        id
        image
        name
      }
    }
  }
`;

export const POKEMON_DETAIL_QUERY = gql`
  query getPokemon($name: String!) {
    pokemon(name: $name) {
      status
      message
      weight
      height
      base_experience
      species {
        url
        name
      }
      types {
        type {
          name
        }
      }
      abilities {
        ability {
          name
        }
        is_hidden
      }
      sprites {
        back_default
        front_default
      }
      stats {
        base_stat
        effort
        stat {
          name
        }
      }
    }
  }
`;

export const POKEMON_EVOLUTION_QUERY = gql`
  query getEvolution($id: String!) {
    evolutionChain(id: $id) {
      status
      message
      response
    }
  }
`;
