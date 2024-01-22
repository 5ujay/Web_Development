
import './App.css';
import NavLine from './NavLine/NavLine';
import Navbar from './Navbar/Navbar';
import HeadItem from "./HeadItems/HeadItem"
import Header from './Header/Header';
import BodyOne from "./BodyOne/BodyOne"
import BodyTwo from "./BodyTwo/BodyTwo"
import BodyThree from "./BodyThree/BodyThree"
import EndPage from "./EndPage/EndPage"
import End from "./End/End"
import Footer from "./Footer/Footer"
function App() {
  return (
    <div className="App">
      <Navbar />
      <NavLine />
      <HeadItem />
      <Header />
      <BodyOne />
      <BodyTwo />
      <BodyThree />
      <EndPage />
      <End />
      <Footer />

    </div>
  );
}

export default App;
