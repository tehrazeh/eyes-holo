import './App.scss';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main'
import Items from './Components/Main/Content/Items/Items';
import Heroes from './Components/Main/Content/Heroes/Heroes';
import Hero from './Pages/Hero';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header />
      <div className='Main'>
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/Heroes" element={<Heroes />}/>
          <Route path="/Items" element={<Items />}/>
          <Route path="/Heroes/:id" element={<Hero />}/>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
