import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 16px;
`;

const Label = styled.label`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

const Input = styled.input`
  border: 2px solid #007bff;
  padding: 10px;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0b7dda;
  }
`;

export { Form, Label, Input, Button };
