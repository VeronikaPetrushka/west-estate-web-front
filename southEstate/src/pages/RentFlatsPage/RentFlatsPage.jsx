import { Helmet } from 'react-helmet-async';
import RentFlats from "../../components/RentFlats/RentFlats"
import Page from '../../components/Page/Page'

const RentFlatsPage = () => {
    return (
        <>
            <Helmet>
                <title>Південний Центр Нерухомості: Орендувати - Квартири</title>
            </Helmet>
            <Page>
                <RentFlats />
            </Page>
        </>
    )
}

export default RentFlatsPage;