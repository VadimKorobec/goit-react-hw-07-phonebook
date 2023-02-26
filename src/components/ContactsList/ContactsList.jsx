import { ContactsListItem } from 'components/ContactsListItem/ContactsListItem';
import { useSelector, useDispatch } from 'react-redux';
import { List, Item } from './ContactsList.styled';
import { selectError, selectIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { selectFilteredContacts } from 'redux/selectors';

export const ContactsList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && !error && <b>Request in progress...</b>}
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
