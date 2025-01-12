import { Helmet } from 'react-helmet-async';
import Home from "../../components/Home/Home"
import Page from '../../components/Page/Page'

const HomePage = () => {
    return (
        <>
            <Helmet>
                <title>Південний Центр Нерухомості: Головна</title>
            </Helmet>
            <Page>
                <Home />
            </Page>
        </>
    )
}

export default HomePage;