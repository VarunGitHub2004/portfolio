import Home from "./components/Home";
import Header, { HeaderPhone } from "./components/Header";
import Work from "./components/Work";
import Timeline from "./components/Timeline";
import "./styles/app.scss";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import {  useState } from "react";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  // const [ratio, setRatio] = useState(window.innerWidth, window.innerHeight);
  // console.log(ratio);
  // useEffect(() => {
  //   const resizeRatio = () => {
  //     setRatio(window.innerWidth / window.innerHeight);
  //   };
  //   window.addEventListener("resize", resizeRatio);
  //   return () => {
  //     window.removeEventListener("resize", resizeRatio());
  //   };
  // }, [ratio]);

  // if (window.innerWidth < 600) {
  //   return ratio < 2 ? (
  //     <>
  //       <HeaderPhone setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
  //       <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
  //       <Home ratio={ratio} />
  //       <Work />
  //       <Timeline />
  //       <Services />
  //       <Contact />
  //       <Footer />
  //     </>
  //   ) : (
  //     <em className="Custom Message">Please change the ratio to View!</em>
  //   );
  // }

  return (
    <>
      <HeaderPhone setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home  />
      <Work />
      {/* <Timeline /> */}
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
