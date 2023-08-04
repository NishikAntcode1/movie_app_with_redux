import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import MovieDetails from './Components/MovieDetails/MovieDetails';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className='App bg-gray-800'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/movie/:id' Component={MovieDetails}/>
          <Route Component={PageNotFound}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
