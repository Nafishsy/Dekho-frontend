//import './App.css';
import TopBar from './Components/TopBar';
import Home from './Components/Home';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import AddMovies from './Components/AddMovies';
import MovieMange from './Components/MovieManage';


function App() {
  return (
    <div className="App">
      
      <Router>
        
        <TopBar/>

        <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/addmovies" element={<AddMovies />}></Route>
              <Route path="/moviemanage" element={<MovieMange/>}></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;


