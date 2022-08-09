import React from "react";
import { Link } from "react-router-dom";
const TopBar=()=>{

    return(
        <div>
            <Link to="/">Home</Link> &nbsp;&nbsp;
            <Link to="/addmovies">Add Movies</Link> &nbsp;&nbsp;
            <Link to="">Manage Movies</Link> &nbsp;&nbsp;
            <Link to="">Report</Link> &nbsp;&nbsp;
            <Link to="">Logout</Link> &nbsp;&nbsp;
        </div>
    )
}

export default TopBar;