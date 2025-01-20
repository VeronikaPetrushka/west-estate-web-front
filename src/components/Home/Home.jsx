import { useState } from 'react';
import css from './Home.module.css'
import ItemForm from '../ItemForm/ItemForm';
import { ToastContainer } from 'react-toastify';

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <main className={css.container}>
            <button onClick={openModal} className={css.addItemButton}>
                Створити об`єкт
            </button>
            <ItemForm isOpen={isModalOpen} onClose={closeModal} />
            <ToastContainer position="top-right" autoClose={3000} />
        </main>
    )
};

export default Home;