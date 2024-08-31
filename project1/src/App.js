import logo from './logo.svg';
import './App.css';
import Home1 from './comp/Home';
import About1 from './comp/About';
import Book1 from './comp/Book';
import Test from './comp/test';
import Header from './source/header';
import Main from './source/main';
import Destination from './source/destination';
import Contact from './source/contact';
import Login from './source/login';
import Des from './source/des';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App(){
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/destination" element={<Destination />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/adddestination" element={<Des />} />
        </Routes>
      </Router>
    
    </>
  )

};

export default App;
