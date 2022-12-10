import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contacts/filterSlice';
import { TextField } from '@mui/material';

export default function SearchForm() {
  const filter = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();
  return (
    <TextField
      sx={{ mt: 2 }}
      fullWidth
      label="Search contact"
      value={filter}
      inputProps={{ 'aria-label': 'search contact' }}
      onChange={e => dispatch(changeFilter(e.target.value.toLowerCase()))}
    ></TextField>
  );
}
