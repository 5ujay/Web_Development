import Herosec from "./components/Herosec/Herosec"
import Navbar from "./components/Navbar/Navbar"
import Stories from "./components/Stories/Stories"
import Tv from "./components/Tv/Tv"
import Offer from "./components/Offers/Offer"
import Appinfo from "./components/Appinfo/Appinfo"
import Patners from "./components/Patners/Patners"
import News from "./components/News/News"
import LastSection from "./components/LastSection/LastSection"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"


function App() {

  return (
    <div>
      <Navbar />
      <Herosec />
      <Stories />
      <Tv />
      <Offer />
      <Appinfo />
      <Patners />
      <News />
      <LastSection />
      <Contact />
      <Footer />

    </div>
  )
}

export default App
