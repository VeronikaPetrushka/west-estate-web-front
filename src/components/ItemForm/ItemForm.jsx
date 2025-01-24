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
  const [images, setImages] = useState([]);

  const handleImageUpload = (e) => {
    const selectedFiles = e.target.files;
    const fileArray = Array.from(selectedFiles);
    setImages(prevImages => [...prevImages, ...fileArray]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    formData.append('description', description || '');
    formData.append('category', category);
    formData.append('subCategory', subCategory || '');
    formData.append('location', location);
    formData.append('size', size || '');
  
    images.forEach((image) => {
      formData.append('images', image);
    });  
  
    try {
      const response = await dispatch(createItem(formData)).unwrap();
      toast.success('Item successfully created!');
      onClose();
      console.log('Item added:', response);
    } catch (error) {
      console.error('Error adding item:', error);
      
      if (error.response) {
        console.error('Error response:', error.response);
        console.error('Error data:', error.response.data);
        console.error('Error status:', error.response.status);
        console.error('Error headers:', error.response.headers);
        toast.error(
          error.response.data.message || 
          `Error: ${error.response.status} - ${error.response.statusText}` || 
          'Failed to create item. Please try again.'
        );
      } else if (error.message) {
        toast.error(error.message);
      } else {
        toast.error('An unexpected error occurred. Please try again.');
      }
    }
  
    console.log('Form Data Submitted:', formData);
  
    setName('');
    setPrice('');
    setDescription('');
    setLocation('');
    setSize('');
    setCategory('');
    setSubCategory('');
    setImages([]);
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

      <div className={css.imageUploadContainer}>
        <div className={css.imagePlaceholder}>
          {images.length === 0 ? (
            <span className={css.placeholderText}>Поки немає завантажених фото</span>
          ) : (
            images.map((img, index) => (
              <img key={index} src={URL.createObjectURL(img)} alt="Uploaded preview" className={css.uploadedImage} />
            ))
          )}
        </div>
        <label htmlFor="images">Виберіть фото:</label>
        <input 
          type="file" 
          id="images" 
          name="images"
          multiple 
          onChange={handleImageUpload} 
          className={css.uploadButton} 
          // required
        />
        <input type="submit" value="submit" />
      </div>
      
        <div className={css.itemBox}>
          <label className={css.label} htmlFor="name">Назва</label>
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
          <label className={css.label} htmlFor="price">Ціна</label>
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
          <label className={css.label} htmlFor="description">Про об`єкт</label>
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
          <label className={css.label} htmlFor="location">Місце знаходження</label>
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
          <label className={css.label} htmlFor="size">Розмір</label>
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
          <label className={css.label} htmlFor="category">Категорія</label>
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
            <label className={css.label} htmlFor="subCategory">Підрозділ</label>
            <div className={css.buttonGroup}>
              {getSubCategories()}
            </div>
          </div>
        )}

        <button className={css.createBtn} type="submit">Створити</button>

      </form>
    </Modal>
  );
};

ItemForm.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ItemForm;
