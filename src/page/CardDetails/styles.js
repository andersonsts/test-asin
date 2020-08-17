import styled from 'styled-components';

export const Container = styled.div`
  background: #48d0b0;
  width: 400px;
  display: flex;
  align-items: center;
  height: 300px;
  margin: 80px auto;
  border-radius: 8px;
  position: relative;

  > span {
    color: #eee;
    font-weight: bold;
    position: absolute;
    top: 12px;
    right: 12px;
    font-size: 24px;
  }
`;

export const PokemonDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;

  > strong {
    color: #fff;
    font-size: 32px;
  }
`;

export const BodyPokemon = styled.div`
  color: #fff;
  margin: 10px 0px;

  > p {
    font-size: 18px;

    & + p {
      margin-top: 4px;
    }
  }
`;

export const Abilities = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;

  > p {
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    margin: 5px 0px;
  }

  > li {
    color: #fff;
  }
`;

export const Types = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;

  > p {
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    margin: 5px 0px;
  }

  > li {
    color: #fff;
  }
`;

export const AvatarPokemon = styled.img`
  margin-left: auto;
`;
