import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import TermsPolicy from './components/TermsPolicy';
import NavMobile from './components/NavMobile';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import LoginSignupPage from './screens/LoginSignupPage';
import PizzasScreens from './screens/PizzasScreens';
import AdminPanelScreen from './screens/AdminPanelScreen';



const App = () => {
  return (
    <>

        <BrowserRouter>
        <NavMobile/>
          <Routes>
            <Route exact path='/' element={<HomeScreen/>} />
            <Route exact path="/pizza's" element={<PizzasScreens/>} />
          <Route exact path='/About' element={<About/>} />
            <Route exact path='/ContactUs' element={<Contact/>} />
            <Route exact path='/Policy' element={<TermsPolicy/>} />
            <Route exact path='/Cart' element={<CartScreen/>} />
            <Route exact path='/login' element={<LoginSignupPage/>} />
            <Route exact path='/accounts' element={<AdminPanelScreen/>} />
          </Routes>
        </BrowserRouter>

    </>

  )
}

export default App
