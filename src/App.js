import "./App.css";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import About from "./components/About/About";

function Main(props) {
  return <Main>{props.children}</Main>;
}

function App() {
  return (
    <>
      <Header />
      <Menu />
      <Main>
        <About />
      </Main>
    </>
  );
}

export default App;
