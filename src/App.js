//import './App.css';
import TopBar from './SubAdminComponents/TopBar';
import Home from './SubAdminComponents/Home';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import AddMovies from './SubAdminComponents/AddMovies';
import MovieMange from './SubAdminComponents/MovieManage';
import MovieEdit from './SubAdminComponents/MovieEdit';
import MovieDelete from './SubAdminComponents/MovieDelete';
import Reports from './SubAdminComponents/Reports';
import Login from './Public Components/login';
import NotFound from './Public Components/NotFound';


function App() {
  return (
    <div className="App">


      
      <Router>
        
        <TopBar/>

        <Routes>
              <Route path="/" element={<Login />}></Route>
              <Route path="/home" element={<Home />}></Route>
              <Route path="/addmovies" element={<AddMovies />}></Route>
              <Route path="/moviemanage" element={<MovieMange/>}></Route>
              <Route path="/movie/edit/:id" element={<MovieEdit/>} />
              <Route path="/movie/delete/:id" element={<MovieDelete/>} />
              <Route path="/report" element={<Reports/>} />
              <Route path="/notfound" element={<NotFound/>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;


