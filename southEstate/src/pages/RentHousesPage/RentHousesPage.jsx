import { Helmet } from 'react-helmet-async';
import RentHouses from "../../components/RentHouses/RentHouses"
import Page from '../../components/Page/Page'

const RentHousesPage = () => {
    return (
        <>
            <Helmet>
                <title>Південний Центр Нерухомості: Орендувати - Будинки</title>
            </Helmet>
            <Page>
                <RentHouses />
            </Page>
        </>
    )
}

export default RentHousesPage;