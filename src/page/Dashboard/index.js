import React, { useEffect, useState, useCallback } from 'react';
import { FiSmartphone } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import Card from '../../components/Card';
import Header from '../../components/Header';
import api from '../../services/api';
import {
  Container,
  ContainerCards,
  TopContainer,
  PaginationContainer,
  PageItem,
  LimitSelectContainer,
} from './styles';

function Dashboard() {
  const [pokemons, setPokemons] = useState([]);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(40);
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadPokemons() {
      setLoading(true);
      const response = await api.get(
        `pokemons?page=${currentPage}&limit=${limit}`
      );

      setTotal(response.data.totalRegisters);
      const quantityPages = Math.ceil(total / limit);
      const pagesArray = [];
      for (let i = 1; i < quantityPages; i += 1) {
        pagesArray.push(i);
      }
      setPages(pagesArray);
      setPokemons(response.data.allPokemons);
      setLoading(false);
    }

    loadPokemons();
  }, [currentPage, limit, total]);

  const handleChangeLimitPerPage = useCallback(e => {
    setLimit(e.target.value);
    setCurrentPage(1);
  }, []);

  return (
    <>
      <Header quantity={total} />

      <Container>
        <TopContainer>
          <h1 data-cy="page-title">
            <FiSmartphone />
            PokeDex
          </h1>

          <LimitSelectContainer>
            <p>Items per page</p>
            <select onBlur={handleChangeLimitPerPage}>
              <option value={40}>40</option>
              <option value={50}>50</option>
              <option value={60}>60</option>
            </select>
          </LimitSelectContainer>

          <PaginationContainer>
            <p>Pages</p>
            <div>
              {pages.map(page => (
                <PageItem
                  onClick={() => setCurrentPage(page)}
                  key={page}
                  selected={page === currentPage}
                />
              ))}
            </div>
          </PaginationContainer>
        </TopContainer>

        {!!pokemons && !loading ? (
          <ContainerCards>
            {pokemons.map(pokemon => (
              <Link key={String(pokemon.id)} to={`/pokemons/${pokemon.id}`}>
                <Card pokemon={pokemon} />
              </Link>
            ))}
          </ContainerCards>
        ) : (
          'Carregando...'
        )}
      </Container>
    </>
  );
}

export default Dashboard;
