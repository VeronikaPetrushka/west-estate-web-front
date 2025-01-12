import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItemsToRent } from '../../redux/items/operations.js';
import { selectItemsToRent, selectIsLoading, selectIsError } from '../../redux/items/selectors.js';
import css from './Rent.module.css'
import ItemCard from '../ItemCard/ItemCard.jsx';

const Rent = () => {
  const dispatch = useDispatch();
  const itemsToRent = useSelector(selectItemsToRent);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(fetchItemsToRent());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading items...</div>;
  }

  if (isError) {
    return <div>Error loading items.</div>;
  }

  return (
    <div className={css.list}>
      {itemsToRent?.map((item) => (
        <ItemCard key={item._id} item={item} />
      ))}
    </div>
  );
};

export default Rent;
