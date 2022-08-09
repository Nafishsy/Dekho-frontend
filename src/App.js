//import './App.css';
import TopBar from './Components/TopBar';
import Home from './Components/Home';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import AddMovies from './Components/AddMovies';

function App() {
  return (
    <div className="App">
      
      <Router>
        
        <TopBar/>

        <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/addmovies" element={<AddMovies />}></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;


