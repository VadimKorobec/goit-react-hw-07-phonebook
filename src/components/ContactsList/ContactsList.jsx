import { ContactsListItem } from 'components/ContactsListItem/ContactsListItem';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { List, Item } from './ContactsList.styled';

export const ContactsList = () => {
  const contacts = useSelector(selectContacts);

  return (
    <>
      <List>
        {contacts.map(contact => (
          <Item key={contact.id}>
            <ContactsListItem contact={contact} />
          </Item>
        ))}
      </List>
    </>
  );
};
