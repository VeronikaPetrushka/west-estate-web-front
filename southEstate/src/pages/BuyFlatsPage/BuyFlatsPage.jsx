import { Helmet } from 'react-helmet-async';
import BuyFlats from "../../components/BuyFlats/BuyFlats"
import Page from '../../components/Page/Page'

const BuyFlatsPage = () => {
    return (
        <>
            <Helmet>
                <title>Південний Центр Нерухомості: Купити - Квартири</title>
            </Helmet>
            <Page>
                <BuyFlats />
            </Page>
        </>
    )
}

export default BuyFlatsPage;