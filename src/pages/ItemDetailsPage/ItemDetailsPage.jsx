import { Helmet } from 'react-helmet-async';
import ItemDetails from "../../components/ItemDetails/ItemDetails"
import Page from '../../components/Page/Page'

const ItemDetailsPage = () => {
    return (
        <>
            <Helmet>
                <title>Південний Центр Нерухомості: об`єкт</title>
            </Helmet>
            <Page>
                <ItemDetails />
            </Page>
        </>
    )
}

export default ItemDetailsPage;