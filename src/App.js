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
import AdminCustomersMoviesList from "./AdminComponents/AdminCustomersMoviesList";
import AdminHome from "./AdminComponents/AdminHome";
import AdminUsersList from "./AdminComponents/AdminUsersList";
import Registration from './Public Components/Registration';
import ForgetPassword from './Public Components/ForgetPassword';
import Profile from './AdminComponents/Profile';
import ChangePass from './AdminComponents/ChangePass';


function App() {
  return (
    <div className="App">


      
      <Router>
        
        {/* <TopBar/> */}

        <Routes>

              
              <Route path="/" element={<Login />}></Route>
              <Route path="/registration" element={<Registration />}></Route>
              <Route path="/forgetpassword" element={<ForgetPassword />}></Route>


              
              <Route path="/home" element={<Home />}></Route>
              <Route path="/addmovies" element={<AddMovies />}></Route>
              <Route path="/moviemanage" element={<MovieMange/>}></Route>
              <Route path="/movie/edit/:id" element={<MovieEdit/>} />
              <Route path="/movie/delete/:id" element={<MovieDelete/>} />
              <Route path="/report" element={<Reports/>} />
              <Route path="/notfound" element={<NotFound/>} />


              <Route path="/Admin/CustomersMoviesList" element={<AdminCustomersMoviesList/>}/>
              <Route path="/Admin/UsersList" element={<AdminUsersList/>}/>
              <Route path="/Admin/Home" element={<AdminHome/>}/>
              <Route path="/Admin/Profile" element={<Profile/>}/>
              <Route path="/Admin/Profile/ChangePassword" element={<ChangePass/>}/>


        </Routes>

      </Router>

    </div>
  );
}

export default App;


