import { useDispatch, useSelector } from 'react-redux';
import { searchContact } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';
import { Input } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(searchContact(event.target.value));
  };

  return (
    <>
      <Input
        type="text"
        name="search"
        value={filter}
        onChange={handleChange}
        placeholder="Search..."
      />
    </>
  );
};
