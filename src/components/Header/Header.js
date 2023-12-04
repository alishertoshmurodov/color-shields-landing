import BtnGetQuote from "../BtnGetQuote/BtnGetQuote";
import Logo from "../Logo/Logo";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <a href="index.html">
        <Logo />
      </a>
      <BtnGetQuote />
    </header>
  );
}

export default Header;
