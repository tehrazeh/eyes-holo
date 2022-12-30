import './App.scss';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main'
import Items from './Components/Main/Content/Items/Items';
import Heroes from './Components/Main/Content/Heroes/Heroes';
import Hero from './Pages/Hero/Hero';
import Item from './Pages/Item/Item'
import { Routes, Route } from 'react-router-dom';
import Roles from './Pages/Roles/Roles';
import { NotFound } from './Pages/NotFound/NotFound';
import { ErrorBoundary } from 'react-error-boundary'
function App() {
  return (
    <div className="App">
      <Header />
      <div className='Main'>
        <ErrorBoundary FallbackComponent={NotFound}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/Heroes" element={<Heroes />} />
            <Route path="/Items" element={<Items />} />
            <Route path="/Heroes/:id" element={<Hero />} />
            <Route path="/Items/:id" element={<Item />} />
            <Route path="/Roles" element={<Roles />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ErrorBoundary>
      </div>
      <Footer />
    </div>
  );
}

export default App
// export default withErrorBoundary(App, {
//   fallback: 
//   <div className="App">
//     <Header />
//     <div className='Main'>
//       <NotFound />
//     </div>
//     <Footer />
//   </div>
// });
