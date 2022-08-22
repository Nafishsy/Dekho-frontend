import AdminTop from "./AdminTop";

const AdminTopBar=()=>{
    return(
        <div>
            <center><h1>DEKHO</h1></center>
            <hr/>
            <AdminTop url="/Admin/CustomersMoviesList" value="Customers-Movies"/> |
            | <AdminTop url="/Admin/UsersList" value="All Users"/>
        </div>
    )
}
export default AdminTopBar;