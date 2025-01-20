import { Helmet } from 'react-helmet-async';
import Rent from "../../components/Rent/Rent"
import Page from '../../components/Page/Page'

const RentPage = () => {
    return (
        <>
            <Helmet>
                <title>Південний Центр Нерухомості: Орендувати</title>
            </Helmet>
            <Page>
                <Rent />
            </Page>
        </>
    )
}

export default RentPage;