import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul className="nav-links">
        <Link to="home"><h1>Home</h1></Link>
        <Link to="free"><h1>List of free games</h1></Link>
        <Link to="deals"><h1>List of Deals</h1></Link>
        <Link to="contact"><h1>Contact us</h1></Link>
      </ul>
    </nav>
  );
}

export default Nav;
