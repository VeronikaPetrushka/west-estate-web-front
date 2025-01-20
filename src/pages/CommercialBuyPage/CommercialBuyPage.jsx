import { Helmet } from 'react-helmet-async';
import CommercialBuy from "../../components/CommercialBuy/CommercialBuy"
import Page from '../../components/Page/Page'

const CommercialBuyPage = () => {
    return (
        <>
            <Helmet>
                <title>Південний Центр Нерухомості: Комерційна нерухомість - Купити</title>
            </Helmet>
            <Page>
                <CommercialBuy />
            </Page>
        </>
    )
}

export default CommercialBuyPage;