import styled from 'styled-components';

const returnBackgroundColor = type => {
  switch (type) {
    case 'grass':
      return '#48d0b0';
    case 'fire':
      return '#fb6c6c';
    case 'water':
      return '#77bdfe';
    case 'normal':
      return '#cd835a';
    case 'bug':
      return '#6a8b5a';
    case 'poison':
      return '#c8a2c8';
    default:
      return '#cd835a';
  }
};

export const Container = styled.div`
  background: ${props => returnBackgroundColor(props.color)};
  width: 260px;
  border-radius: 8px;
  position: relative;

  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

  padding: 15px;

  display: flex;
  align-items: center;

  > span {
    position: absolute;
    top: 0%;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 2px;
    color: rgba(255, 255, 255, 0.8);
    right: 0%;
    margin: 12px 12px 0px 0px;
  }
`;

export const PokemonDescription = styled.div`
  align-self: flex-start;

  > strong {
    color: #fff;
    text-transform: capitalize;
    font-size: 24px;
  }

  > ul {
    list-style: none;
    margin-top: 15px;
    overflow: hidden;

    > li {
      text-transform: capitalize;
      text-align: center;
      padding: 2px 10px;
      color: #fff;
      background: rgba(0, 0, 0, 0.1);
      font-size: 16px;
      border-radius: 12px;

      & + li {
        margin-top: 10px;
      }
    }
  }
`;

export const AvatarPokemon = styled.img`
  /* background: yellow; */
  margin-left: auto;
  margin-top: 10px;
  /* height: 130px;
  width: 130px;
  margin-top: 2px;

  margin-left: 5px; */
`;
