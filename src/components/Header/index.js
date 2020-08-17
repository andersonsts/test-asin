import React from 'react';
import { FiHome } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { HeaderContainer, TotalPokemonsContainer } from './styles';

function Header({ quantity = 1048 }) {
  return (
    <HeaderContainer>
      <Link to="/">
        <FiHome size={24} /> <p>Dashboard</p>
      </Link>
      <TotalPokemonsContainer className="header">
        <p>Total of pokemon:</p>
        <strong>{quantity}</strong>
      </TotalPokemonsContainer>
    </HeaderContainer>
  );
}

export default Header;
