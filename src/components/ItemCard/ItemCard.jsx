import PropTypes from 'prop-types'; 
import { NavLink, useLocation } from 'react-router-dom';
import css from './ItemCard.module.css'

const ItemCard = ({ item }) => {
  const location = useLocation();

  return (
    <div className={css.card}>
      <div className={css.cardRow}>
        {item.images && item.images.length > 0 ? (
          <img
            src={item.images[0]}
            alt={`${item.name} image`}
            className={css.cardImage}
          />
        ) : (
          <div className={css.imagePlaceholder}></div>
        )}
        <div className={css.infoContainer}>
          <h3 className={css.cardTitle}>{item.name}</h3>
          <p className={css.cardDesc}><strong>Price:</strong> {item.price}</p>
          <p className={css.cardDesc}><strong>Category:</strong> {item.category}</p>
          {item.subCategory && <p className={css.cardDesc}><strong>Subcategory:</strong> {item.subCategory}</p>}
          <p className={css.cardLocation}><strong>Location:</strong> {item.location}</p>
          {item.size && <p className={css.cardDesc}><strong>Size:</strong> {item.size} sq.m.</p>}
          {item.description && 
            <p className={css.cardDescShort}>
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
            <p className={css.detailsButtonText}>Details</p>
          </NavLink>    
        </div>
      </div>
    </div>
  );
};

ItemCard.propTypes = {
    item: PropTypes.object.isRequired,
  };

export default ItemCard;
