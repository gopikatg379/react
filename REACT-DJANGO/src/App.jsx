import React from 'react';
import { Route,Routes, useLocation } from 'react-router-dom';
import Navbar from './components/navbar'
import Footer from './components/footer'
import Home from './components/home';
import BookDetails from './components/bookDetails';
import About from './components/about';
import Services from './components/services';
import ContactUs from './components/contact';
import AddBook from './components/AddBook';
import UpdateBook from './components/update';
import Login from './components/login';
const App = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== '/' && <Navbar />}
      <Routes>
        <Route path='home' element={<Home/>}/>
        <Route path='book/:id'element={<BookDetails/>}/>
        <Route path='about'element={<About/>}/>
        <Route path='services'element={<Services/>}/>
        <Route path='contact'element={<ContactUs/>}/>
        <Route path='add'element={<AddBook/>}/>
        <Route path='update/:id' element={<UpdateBook/>}/>
        <Route path='' element={<Login />} />
      </Routes>
      {location.pathname !== '/' && <Footer />}
    </div>
  );
};

export default App
