import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createItem } from '../../redux/items/operations.js';
import css from './ItemForm.module.css'

const ItemForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [size, setSize] = useState('');
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const itemData = {
      name,
      price,
      description,
      location,
      size,
      category,
      subCategory,
    };

    dispatch(createItem(itemData))
      .then((response) => {
        console.log('Item added:', response);
      })
      .catch((error) => {
        console.error('Error adding item:', error);
      });

    console.log('Form Data Submitted:', itemData);
    
    setName('');
    setPrice('');
    setDescription('');
    setLocation('');
    setSize('');
    setCategory('');
    setSubCategory('');
  };

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
    setSubCategory('');
  };

  const handleSubCategoryChange = (selectedSubCategory) => {
    setSubCategory(selectedSubCategory);
  };

  const getSubCategories = () => {
    if (category === 'Buy' || category === 'Rent') {
      return (
        <>
          <button
            type="button"
            className={`${css.option} ${subCategory === 'Houses' ? css.selected : ''}`}
            onClick={() => handleSubCategoryChange('Houses')}
          >
            Houses
          </button>
          <button
            type="button"
            className={`${css.option} ${subCategory === 'Flats' ? css.selected : ''}`}
            onClick={() => handleSubCategoryChange('Flats')}
          >
            Flats
          </button>
        </>
      );
    } else if (category === 'Commercial') {
      return (
        <>
          <button
            type="button"
            className={`${css.option} ${subCategory === 'Buy' ? css.selected : ''}`}
            onClick={() => handleSubCategoryChange('Buy')}
          >
            Buy
          </button>
          <button
            type="button"
            className={`${css.option} ${subCategory === 'Rent' ? css.selected : ''}`}
            onClick={() => handleSubCategoryChange('Rent')}
          >
            Rent
          </button>
        </>
      );
    }
    return null;
  };

  return (
    <div className={css.form}>
      <h2 className={css.title}>Create Item</h2>
      <form onSubmit={handleSubmit} className={css.inner}>
        <div className={css.itemBox}>
          <label className={css.label} htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className={css.input}
            placeholder='Fancy building'
          />
        </div>

        <div className={css.itemBox}>
          <label className={css.label} htmlFor="price">Price</label>
          <input
            type="text"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            className={css.input}
            placeholder='300 $'
          />
        </div>

        <div className={css.itemBox}>
          <label className={css.label} htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className={css.description}
            placeholder='Write smth about this item'
          />
        </div>

        <div className={css.itemBox}>
          <label className={css.label} htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
            className={css.input}
            placeholder='Space street, 1/7m'
          />
        </div>

        <div className={css.itemBox}>
          <label className={css.label} htmlFor="size">Size</label>
          <input
            type="text"
            id="size"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            required
            className={css.input}
            placeholder='700 m³'
          />
        </div>

        <div className={css.itemBox}>
          <label className={css.label} htmlFor="category">Category</label>
          <div className={css.buttonGroup}>
            <button
              type="button"
              className={`${css.option} ${category === 'Buy' ? css.selected : ''}`}
              onClick={() => handleCategoryChange('Buy')}
            >
              Buy
            </button>
            <button
              type="button"
              className={`${css.option} ${category === 'Rent' ? css.selected : ''}`}
              onClick={() => handleCategoryChange('Rent')}
            >
              Rent
            </button>
            <button
              type="button"
              className={`${css.option} ${category === 'Commercial' ? css.selected : ''}`}
              onClick={() => handleCategoryChange('Commercial')}
            >
              Commercial
            </button>
          </div>
        </div>

        {category && (
          <div className={css.itemBox}>
            <label className={css.label} htmlFor="subCategory">Sub - category</label>
            <div className={css.buttonGroup}>
              {getSubCategories()}
            </div>
          </div>
        )}

        <button className={css.createBtn} type="submit">Create</button>

      </form>
    </div>
  );
};

export default ItemForm;
