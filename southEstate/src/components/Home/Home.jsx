import css from './Home.module.css'
import ItemForm from '../ItemForm/ItemForm';

const Home = () => {
    return (
        <main className={css.container}>
            <ItemForm />
        </main>
    )
};

export default Home;