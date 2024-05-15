import './Header.css';
import React from 'react'
import { Link } from 'react-router-dom';


function Header() {
    return (
        <nav class="navbar navbar-expand-sm header ">
            <div class="container-fluid d-flex justify-content-center">
                <Link to={`/`}><h1 class="navbar-text mt-4">Travel Destinations</h1></Link>

            </div>
        </nav>
    )
}
//className = "header"
export default Header