import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItemsCommercial } from '../../redux/items/operations.js';
import { selectItemsCommercial, selectIsLoading, selectIsError } from '../../redux/items/selectors.js';
import css from './Commercial.module.css'
import ItemCard from '../ItemCard/ItemCard.jsx';

const Commercial = () => {
  const dispatch = useDispatch();
  const itemsCommercial = useSelector(selectItemsCommercial);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(fetchItemsCommercial());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading items...</div>;
  }

  if (isError) {
    return <div>Error loading items.</div>;
  }

  return (
    <div className={css.list}>
      {itemsCommercial?.map((item) => (
        <ItemCard key={item._id} item={item} />
      ))}
    </div>
  );
};

export default Commercial;
