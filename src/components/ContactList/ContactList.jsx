import { List, Title, Item, Button } from './ContactList.styled';

const ContactList = ({ contacts, title, onDelete }) => {
  return (
    <div>
      <List>
        {<Title>{title}</Title>}
        {contacts.map(contact => (
          <Item key={contact.id}>
            {contact.name} - {contact.number}
            <Button onClick={() => onDelete(contact.id)}>Delete</Button>
          </Item>
        ))}
      </List>
    </div>
  );
};

export default ContactList;
