import React from 'react';

import { numberWith3Digits } from '../../util';
import { Container, PokemonDescription, AvatarPokemon } from './styles';

function Card({ pokemon }) {
  return (
    <Container color={pokemon.types[0]}>
      <span># {numberWith3Digits(pokemon.id)}</span>

      <PokemonDescription>
        <strong>{pokemon.name}</strong>

        <ul>
          {pokemon.types.map(type => (
            <li key={type}>{type}</li>
          ))}
        </ul>
      </PokemonDescription>

      <AvatarPokemon
        src={pokemon.avatar_url}
        alt={`Front sprite if ${pokemon.name}`}
      />
    </Container>
  );
}

export default Card;
