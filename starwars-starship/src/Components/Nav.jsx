// to   make a navigation link you have to   import
// in here you can create navigation bar using
// link hook

import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul className="nav-links">
        <Link to="cards">
          <h1>Home</h1>
        </Link>

        <Link to="about">
          <h1>About</h1>
        </Link>

        <Link to="contact">
          <h1>Contact us</h1>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
