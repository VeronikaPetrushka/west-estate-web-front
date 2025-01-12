import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchItemById } from '../../redux/items/operations.js';
import { selectItem, selectIsLoading, selectIsError } from '../../redux/items/selectors.js';
import css from './ItemDetails.module.css';

const ItemDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const item = useSelector(selectItem);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    if (id) {
      dispatch(fetchItemById(id));
    }
  }, [dispatch, id]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading item.</div>;
  if (!item) return <div>Item not found.</div>;

  return (
    <div className={css.detailsContainer}>
      <h2>{item.name}</h2>
      <p><strong>Price:</strong> {item.price}</p>
      <p><strong>Location:</strong> {item.location}</p>
      {item.size && <p><strong>Size:</strong> {item.size} sq.m.</p>}
      {item.description && <p><strong>Description:</strong> {item.description}</p>}
      <p><strong>Category:</strong> {item.category}</p>
      {item.subCategory && <p><strong>Subcategory:</strong> {item.subCategory}</p>}

      <button onClick={() => navigate(-1)} className={css.goBackButton}>Go Back</button>
    </div>
  );
};

export default ItemDetails;
