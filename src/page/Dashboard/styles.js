import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 30px;
  padding: 0px 40px 40px;
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;

  > h1 {
    color: #054f77;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(43, 43, 94, 0.1);
    width: 200px;
    padding: 5px 0px;
    margin-bottom: 10px;

    > svg {
      margin-right: 5px;
    }
  }
`;

export const LimitSelectContainer = styled.div`
  > p {
    color: #666;
    margin-bottom: 4px;
  }

  > select {
    width: 100px;
    height: 24px;
    border: 0;
    color: #fff;
    background: #054f77;
    border-radius: 4px;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  flex-direction: column;

  > p {
    color: #666;
    margin-bottom: 4px;
  }

  > div {
    display: flex;
    align-items: center;
  }
`;

export const PageItem = styled.button`
  border: 0;
  outline: 0;
  margin-top: 2px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  padding: 10px;
  background: ${props => (props.selected ? '#054f77' : '#999')};

  transform: ${props => (props.selected ? 'scale(1.1)' : 'scale(1.0)')};

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${props => (props.selected ? '#054f66' : '#777')};
  }

  & + button {
    margin-left: 5px;
  }
`;

export const ContainerCards = styled.div`
  margin-top: 30px;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 15px;

  > a {
    text-decoration: none;
  }
`;
