import PropTypes from 'prop-types'; 
import { NavLink, useLocation } from 'react-router-dom';
import css from './ItemCard.module.css'

const ItemCard = ({ item }) => {
  const location = useLocation();

  return (
    <div className={css.card}>
      <h3>{item.name}</h3>
      <p><strong>Price:</strong> {item.price}</p>
      {/* <p><strong>Category:</strong> {item.category}</p>
      {item.subCategory && <p><strong>Subcategory:</strong> {item.subCategory}</p>} */}
      <p><strong>Location:</strong> {item.location}</p>
      {item.size && <p><strong>Size:</strong> {item.size} sq.m.</p>}
      {item.description && 
        <p className={css.description}>
          <strong className={css.description}>Description:</strong> 
          {item.description}</p>
      }
      <NavLink 
        to={{
          pathname: `${location.pathname}/${item._id}`,
          state: { item }
        }} 
        className={css.detailsButton}
      >
        Details
      </NavLink>    
    </div>
  );
};

ItemCard.propTypes = {
    item: PropTypes.object.isRequired,
  };

export default ItemCard;
