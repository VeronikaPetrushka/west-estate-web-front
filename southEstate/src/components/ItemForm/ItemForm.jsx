import { useState } from 'react';
import PropTypes from 'prop-types'; 
import { useDispatch } from 'react-redux';
import Modal from 'react-modal';
import { createItem } from '../../redux/items/operations.js';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './ItemForm.module.css'

Modal.setAppElement('#root');

const ItemForm = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [size, setSize] = useState('');
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  // const [images, setImages] = useState([]);

  // const handleImageUpload = (e) => {
  //   const selectedFiles = e.target.files;
  //   const fileArray = Array.from(selectedFiles);
  //   setImages(prevImages => [...prevImages, ...fileArray]);
  // };

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
      // images,
    };

    dispatch(createItem(itemData))
      .then((response) => {
        console.log('Item added:', response);
        toast.success('Item successfully created!');
        onClose();
      })
      .catch((error) => {
        console.error('Error adding item:', error);
        toast.error('Failed to create item. Please try again.');
      });

    console.log('Form Data Submitted:', itemData);
    
    setName('');
    setPrice('');
    setDescription('');
    setLocation('');
    setSize('');
    setCategory('');
    setSubCategory('');
    // setImages([]); 
  };

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
    setSubCategory('');
  };

  const handleSubCategoryChange = (selectedSubCategory) => {
    setSubCategory(selectedSubCategory);
  };

  const getSubCategories = () => {
    if (category === 'Купити' || category === 'Орендувати') {
      return (
        <>
          <button
            type="button"
            className={`${css.option} ${subCategory === 'Будинки' ? css.selected : ''}`}
            onClick={() => handleSubCategoryChange('Будинки')}
          >
            Будинки
          </button>
          <button
            type="button"
            className={`${css.option} ${subCategory === 'Квартири' ? css.selected : ''}`}
            onClick={() => handleSubCategoryChange('Квартири')}
          >
            Квартири
          </button>
        </>
      );
    } else if (category === 'Комерційне') {
      return (
        <>
          <button
            type="button"
            className={`${css.option} ${subCategory === 'Купити' ? css.selected : ''}`}
            onClick={() => handleSubCategoryChange('Купити')}
          >
            Купити
          </button>
          <button
            type="button"
            className={`${css.option} ${subCategory === 'Орендувати' ? css.selected : ''}`}
            onClick={() => handleSubCategoryChange('Орендувати')}
          >
            Орендувати
          </button>
        </>
      );
    }
    return null;
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Create Item"
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <button className={css.closeBtn} onClick={onClose}>
        <img src="src/assets/icons/close.png" alt="close" className={css.close} />
      </button>
      <h2 className={css.title}>Create Item</h2>
      <form onSubmit={handleSubmit} className={css.inner}>

      {/* <div className={css.imageUploadContainer}>
        <div className={css.imagePlaceholder}>
          {images.length === 0 ? (
            <span className={css.placeholderText}>No images uploaded</span>
          ) : (
            images.map((img, index) => (
              <img key={index} src={URL.createObjectURL(img)} alt="Uploaded preview" className={css.uploadedImage} />
            ))
          )}
        </div>
        <input 
          type="file" 
          id="imageUpload" 
          multiple 
          onChange={handleImageUpload} 
          className={css.uploadButton} 
        />
      </div> */}
      
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
              className={`${css.option} ${category === 'Купити' ? css.selected : ''}`}
              onClick={() => handleCategoryChange('Купити')}
            >
              Купити
            </button>
            <button
              type="button"
              className={`${css.option} ${category === 'Орендувати' ? css.selected : ''}`}
              onClick={() => handleCategoryChange('Орендувати')}
            >
              Орендувати
            </button>
            <button
              type="button"
              className={`${css.option} ${category === 'Комерційне' ? css.selected : ''}`}
              onClick={() => handleCategoryChange('Комерційне')}
            >
              Комерційне
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
    </Modal>
  );
};

ItemForm.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ItemForm;
