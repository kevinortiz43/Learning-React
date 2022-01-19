// to   make a navigation link you have to   import
// in here you can create navigation bar using
// link hook

import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul className="nav-links">
     
        <Link to="">
          <li></li>
        </Link>

        <Link to="">
          <li></li>
        </Link>
        
        <Link to="">
          <li></li>
        </Link>
        
        <Link to="">
          <li></li>
        </Link>
        
        <Link to="">
          <li></li>
        </Link>
        
        <Link to="">
          <li></li>
        </Link>
        
        <Link to="">
          <li></li>
        </Link>
     
      </ul>
    </nav>
  );
}

export default Nav;
