import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItemsToBuyFlat } from '../../redux/items/operations.js';
import { selectItemsToBuyFlats, selectIsLoading, selectIsError } from '../../redux/items/selectors.js';
import css from './BuyFlats.module.css'
import ItemCard from '../ItemCard/ItemCard.jsx';

const BuyFlats = () => {
  const dispatch = useDispatch();
  const itemsToBuyFlats = useSelector(selectItemsToBuyFlats);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(fetchItemsToBuyFlat());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading items...</div>;
  }

  if (isError) {
    return <div>Error loading items.</div>;
  }

  return (
    <div className={css.list}>
      {itemsToBuyFlats?.map((item) => (
        <ItemCard key={item._id} item={item} />
      ))}
    </div>
  );
};

export default BuyFlats;
