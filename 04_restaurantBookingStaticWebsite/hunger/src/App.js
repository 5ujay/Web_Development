import Navbar from "./Components/Navbar/Navbar";
import Herosection from "./Components/Herosection/Herosection";
import About from "./Components/About/About";
import Menustarter from "./Components/Menu/Menustarter";
import Testimonials from "./Components/Testimonials/Testimonials";
import Events from "./Components/Events/Events";
import ChefsDisplay from "./Components/Chefs/ChefsDisplay";
import BookTable from "./Components/BookTable/BookTable";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Herosection />
      <About />
      <Menustarter />
      <Testimonials />
      <Events />
      <ChefsDisplay />
      <BookTable />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
