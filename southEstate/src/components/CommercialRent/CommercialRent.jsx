import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItemsToRentCommercial } from '../../redux/items/operations.js';
import { selectItemsCommercialToRent, selectIsLoading, selectIsError } from '../../redux/items/selectors.js';
import css from './CommercialRent.module.css'
import ItemCard from '../ItemCard/ItemCard.jsx';

const CommercialRent = () => {
  const dispatch = useDispatch();
  const itemsToRent = useSelector(selectItemsCommercialToRent);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(fetchItemsToRentCommercial());
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

export default CommercialRent;
