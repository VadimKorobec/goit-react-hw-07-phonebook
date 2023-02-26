import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { Button, Item, Text } from './ContactsListItem.styled';

export const ContactsListItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = () => dispatch(deleteContact(contact.id));

  return (
    <Item>
      <Text>
        {contact.name} : {contact.phone}
      </Text>
      <Button type="button" onClick={handleDeleteContact}>
        Delete
      </Button>
    </Item>
  );
};

ContactsListItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};
