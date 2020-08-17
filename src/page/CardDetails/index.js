import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';

import Header from '../../components/Header';
import api from '../../services/api';
import { numberWith3Digits } from '../../util';
import {
  Container,
  PokemonDetails,
  AvatarPokemon,
  BodyPokemon,
  Types,
  Abilities,
} from './styles';

export default function CardDetails() {
  const [pokemon, setPokemon] = useState({});

  const { params } = useRouteMatch();

  useEffect(() => {
    api.get(`/pokemons/${params.pokemonId}`).then(response => {
      setPokemon(response.data);
    });
  }, [params]);

  return (
    <>
      <Header />
      <Container>
        <span># {numberWith3Digits(pokemon.id)}</span>
        <PokemonDetails>
          <strong>{pokemon.name}</strong>
          <BodyPokemon>
            <p>Height: {(pokemon.height / 10).toFixed(1)} m</p>
            <p>Weight: {(pokemon.weight / 10).toFixed(1)} Kg</p>
          </BodyPokemon>
          <Abilities>
            <p>Abilities</p>
            {!!pokemon.abilities &&
              pokemon.abilities.map(ability => (
                <li key={ability}>{ability}</li>
              ))}
          </Abilities>
          <Types>
            <p>Types</p>
            {!!pokemon.types &&
              pokemon.types.map(type => <li key={type}>{type}</li>)}
          </Types>
        </PokemonDetails>
        <AvatarPokemon src={pokemon.avatar_url} alt={pokemon.name} />
      </Container>
    </>
  );
}
