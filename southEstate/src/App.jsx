import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import './App.css'
import Navigation from './components/Navigation/Navigation';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));

const BuyPage = lazy(() => import('./pages/BuyPage/BuyPage'));
const BuyHousesPage = lazy(() => import('./pages/BuyHousesPage/BuyHousesPage'));
const BuyFlatsPage = lazy(() => import('./pages/BuyFlatsPage/BuyFlatsPage'));

const RentPage = lazy(() => import('./pages/RentPage/RentPage'));
const RentHousesPage = lazy(() => import('./pages/RentHousesPage/RentHousesPage'));
const RentFlatsPage = lazy(() => import('./pages/RentFlatsPage/RentFlatsPage'));

const CommercialPage = lazy(() => import('./pages/CommercialPage/CommercialPage'));
const CommercialBuyPage = lazy(() => import('./pages/CommercialBuyPage/CommercialBuyPage'));
const CommercialRentPage = lazy(() => import('./pages/CommercialRentPage/CommercialRentPage'));

const ItemDetailsPage = lazy(() => import('./pages/ItemDetailsPage/ItemDetailsPage'));

function App() {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/buy" element={<BuyPage />}/>
          <Route path="/buy/apartments" element={<BuyFlatsPage />}/>
          <Route path="/buy/houses" element={<BuyHousesPage />}/>
          <Route path="/rent" element={<RentPage />}/>
          <Route path="/rent/apartments" element={<RentFlatsPage />}/>
          <Route path="/rent/houses" element={<RentHousesPage />}/>
          <Route path="/commercial" element={<CommercialPage />}/>
          <Route path="/commercial/buy" element={<CommercialBuyPage />}/>
          <Route path="/commercial/rent" element={<CommercialRentPage />}/>
          <Route path="/:currentRoute/:id" element={<ItemDetailsPage />}/>
        </Routes>
      </div>
    </Suspense>
  )
}

export default App
