import { useSelector, useDispatch } from 'react-redux';
import { filterContactAction } from 'redux/reducer';

export const Filter = () => {
  const dispatch = useDispatch();
  const serchName = useSelector(state => state.Filter);

  const handleChangeInput = e => {
    dispatch(filterContactAction(e.target.value));
  };
  return (
    <label>
      Find contacts by name
      <input
        type="text"
        name="filter"
        required
        value={serchName}
        onChange={handleChangeInput}
      />
    </label>
  );
};
