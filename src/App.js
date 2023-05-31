import { SiAnalogue } from "react-icons/si";
import { ImFire } from "react-icons/im";

// containers
import Header from "./containers/Header";
import Footer from "./containers/Footer";

// assets
import forestImage from "./assets/images/forestImage.jpg";
import logo from "./assets/images/logo.png";

function App() {


  return (
    <main className="lsn-maim">
      <Header/>
      <SiAnalogue/>
      <ImFire className="test-class" onClick={() => console.log("icon click")}/>
      <section>
        <img src={forestImage} alt="forest"/>
        <img src={logo} alt="forest"/>
        <img src="https://picsum.photos/200/300"/>
      </section>
      <Footer/>
    </main>
  );
}

export default App;
