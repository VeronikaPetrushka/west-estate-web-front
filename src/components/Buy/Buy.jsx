import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItemsToBuy } from '../../redux/items/operations.js';
import { selectItemsToBuy, selectIsLoading, selectIsError } from '../../redux/items/selectors.js';
import css from './Buy.module.css'
import ItemCard from '../ItemCard/ItemCard.jsx';

const Buy = () => {
  const dispatch = useDispatch();
  const itemsToBuy = useSelector(selectItemsToBuy);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(fetchItemsToBuy());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading items...</div>;
  }

  if (isError) {
    return <div>Error loading items.</div>;
  }

  return (
    <div className={css.list}>
      {itemsToBuy?.map((item) => (
        <ItemCard key={item._id} item={item} />
      ))}
    </div>
  );
};

export default Buy;
