import "./Menu.css";
import { ReactComponent as Vector } from "./Vector.svg";

function Menu() {
  return (
    <nav className="menu">
      <ul className="menu__menu-list">
        <li>
          <a href="index.html">
            About Us
            <Vector className="vector" />
          </a>
        </li>
        <li>
          <a href="index.html">
            Our Works
            <Vector className="vector" />
          </a>
        </li>
        <li>
          <a href="index.html">
            Reviews
            <Vector className="vector" />
          </a>
        </li>
        <li>
          <a href="index.html">
            FAQ
            <Vector className="vector" />
          </a>
        </li>
        <li>
          <a href="index.html">
            Request a quote
            <Vector className="vector" />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
