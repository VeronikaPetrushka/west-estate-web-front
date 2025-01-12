import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItemsToRentHouse } from '../../redux/items/operations.js';
import { selectItemsToRentHouses, selectIsLoading, selectIsError } from '../../redux/items/selectors.js';
import css from './RentHouses.module.css'
import ItemCard from '../ItemCard/ItemCard.jsx';

const RentHouses = () => {
  const dispatch = useDispatch();
  const itemsToRentHouses = useSelector(selectItemsToRentHouses);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(fetchItemsToRentHouse());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading items...</div>;
  }

  if (isError) {
    return <div>Error loading items.</div>;
  }

  return (
    <div className={css.list}>
      {itemsToRentHouses?.map((item) => (
        <ItemCard key={item._id} item={item} />
      ))}
    </div>
  );
};

export default RentHouses;
