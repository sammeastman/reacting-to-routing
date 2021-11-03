import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
return (
    
    
    <nav>
        <ul class="nav">
  <li class="nav-item">
    <Link class="nav-link active" to={"/"}>Home</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to={"/films"}>See Films</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to={"/people"}>See People</Link>
  </li>
</ul>
</nav>

)
}

export default Navbar