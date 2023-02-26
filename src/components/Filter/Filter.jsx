import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contactSlice';
import { getFilter } from 'redux/selectors';
import { Input } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <>
      <Input
        type="text"
        value={filter}
        onChange={event => dispatch(setFilter(event.target.value))}
        placeholder="Search..."
      />
    </>
  );
};
