import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItemsToBuyHouse } from '../../redux/items/operations.js';
import { selectItemsToBuyHouses, selectIsLoading, selectIsError } from '../../redux/items/selectors.js';
import css from './BuyHouses.module.css'
import ItemCard from '../ItemCard/ItemCard.jsx';

const BuyHouses = () => {
  const dispatch = useDispatch();
  const itemsToBuyHouses = useSelector(selectItemsToBuyHouses);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(fetchItemsToBuyHouse());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading items...</div>;
  }

  if (isError) {
    return <div>Error loading items.</div>;
  }

  return (
    <div className={css.list}>
      {itemsToBuyHouses?.map((item) => (
        <ItemCard key={item._id} item={item} />
      ))}
    </div>
  );
};

export default BuyHouses;
