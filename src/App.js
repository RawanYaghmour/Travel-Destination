import './App.css';
import Home from './Components/home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import TourDetails from './Components/TourDetails/TourDetails';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/header/Header'
import Footer from './Components/footer/Footer';




function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/city/:id' element={<TourDetails />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
