import AdminTop from "./AdminTop";
import { Link } from "react-router-dom";
const AdminTopBar=()=>{
    return(
        <div>
            <center><h1>DEKHO</h1></center>

            <Link to={`/admin/profile/`} ><p align='right'>EDIT</p> </Link>

            <hr/>
            <AdminTop url="/Admin/CustomersMoviesList" value="Customers-Movies"/> |
            | <AdminTop url="/Admin/UsersList" value="All Users"/>
        </div>
    )
}
export default AdminTopBar;