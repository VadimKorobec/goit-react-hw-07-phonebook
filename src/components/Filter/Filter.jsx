import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { Input } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(setFilter(event.target.value));
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
