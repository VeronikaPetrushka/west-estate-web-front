import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItemsToRentFlat } from '../../redux/items/operations.js';
import { selectItemsToRentFlats, selectIsLoading, selectIsError } from '../../redux/items/selectors.js';
import css from './RentFlats.module.css'
import ItemCard from '../ItemCard/ItemCard.jsx';

const RentFlats = () => {
  const dispatch = useDispatch();
  const itemsToRentFlats = useSelector(selectItemsToRentFlats);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(fetchItemsToRentFlat());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading items...</div>;
  }

  if (isError) {
    return <div>Error loading items.</div>;
  }

  return (
    <div className={css.list}>
      {itemsToRentFlats?.map((item) => (
        <ItemCard key={item._id} item={item} />
      ))}
    </div>
  );
};

export default RentFlats;
