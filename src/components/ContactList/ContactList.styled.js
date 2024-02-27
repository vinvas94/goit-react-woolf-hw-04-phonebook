import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding-left: 0;
  gap: 16px;
`;

const Title = styled.h2``;

const Item = styled.li``;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #f44336;
  color: white;
  margin-left: 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #da190b;
  }
`;

export { List, Title, Item, Button };
