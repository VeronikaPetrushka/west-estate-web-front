import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import './App.css'
import Navigation from './components/Navigation/Navigation';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));

function App() {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <Navigation />
        {/* <Switch>
          <Route path="/buy" component={KupitiComponent} />
          <Route path="/rent" component={OrenduvaliComponent} />
          <Route path="/contacts" component={KontaktiComponent} />
          <Route path="/favorite" component={VybraneComponent} />
        </Switch> */}
        <Routes>
          <Route path="/" element={<HomePage />}/>
        </Routes>
      </div>
    </Suspense>
  )
}

export default App
