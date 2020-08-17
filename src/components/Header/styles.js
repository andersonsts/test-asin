import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  padding: 0px 40px;
  align-items: center;
  justify-content: space-between;
  height: 64px;

  > a {
    text-decoration: none;
    color: inherit;
    display: flex;
    align-items: center;
    border-bottom: 1px solid transparent;
    padding-bottom: 2px;
    margin-top: 2px;

    svg {
      transition: all 0.25s ease-in-out;
    }

    &:hover svg {
      color: #054f99;
    }

    > p {
      margin-left: 10px;
      font-size: 24px;
      margin-top: 4px;
      transition: all 0.3s ease-in-out;
    }
  }
`;

export const TotalPokemonsContainer = styled.div`
  display: flex;
  align-items: baseline;

  > p {
    margin-right: 8px;
  }

  > strong {
    font-size: 24px;
    color: #054f99;
  }
`;
