import { Helmet } from 'react-helmet-async';
import BuyHouses from "../../components/BuyHouses/BuyHouses"
import Page from '../../components/Page/Page'

const BuyHousesPage = () => {
    return (
        <>
            <Helmet>
                <title>Південний Центр Нерухомості: Купити - Будинки</title>
            </Helmet>
            <Page>
                <BuyHouses />
            </Page>
        </>
    )
}

export default BuyHousesPage;