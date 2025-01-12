import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItemsToBuyCommercial } from '../../redux/items/operations.js';
import { selectItemsCommercialToBuy, selectIsLoading, selectIsError } from '../../redux/items/selectors.js';
import css from './CommercialBuy.module.css'
import ItemCard from '../ItemCard/ItemCard.jsx';

const CommercialBuy = () => {
  const dispatch = useDispatch();
  const itemsToBuy = useSelector(selectItemsCommercialToBuy);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(fetchItemsToBuyCommercial());
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

export default CommercialBuy;
