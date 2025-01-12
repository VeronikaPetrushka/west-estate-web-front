import { Helmet } from 'react-helmet-async';
import Commercial from "../../components/Commercial/Commercial"
import Page from '../../components/Page/Page'

const CommercialPage = () => {
    return (
        <>
            <Helmet>
                <title>Південний Центр Нерухомості: Комерційна нерухомість</title>
            </Helmet>
            <Page>
                <Commercial />
            </Page>
        </>
    )
}

export default CommercialPage;