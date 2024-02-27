import { Container, Title, Input } from './Filter.styled';

const Filter = ({ title, value, onChange }) => {
  return (
    <Container>
      Find contacts by name
      {<Title>{title}</Title>}
      <Input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search your name"
      />
    </Container>
  );
};
export default Filter;
