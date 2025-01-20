import { Helmet } from 'react-helmet-async';
import CommercialRent from "../../components/CommercialRent/CommercialRent"
import Page from '../../components/Page/Page'

const CommercialRentPage = () => {
    return (
        <>
            <Helmet>
                <title>Південний Центр Нерухомості: Комерційна нерухомість - Орендувати</title>
            </Helmet>
            <Page>
                <CommercialRent />
            </Page>
        </>
    )
}

export default CommercialRentPage;