import { Helmet } from 'react-helmet-async';
import Buy from "../../components/Buy/Buy"
import Page from '../../components/Page/Page'

const BuyPage = () => {
    return (
        <>
            <Helmet>
                <title>Південний Центр Нерухомості: Купити</title>
            </Helmet>
            <Page>
                <Buy />
            </Page>
        </>
    )
}

export default BuyPage;