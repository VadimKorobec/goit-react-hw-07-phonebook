import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
// import { getFilter } from 'redux/selectors';
import { Input } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const onFilterInput = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <>
      <Input
        type="text"
        value={filter}
        onChange={onFilterInput}
        placeholder="Search..."
      />
    </>
  );
};
