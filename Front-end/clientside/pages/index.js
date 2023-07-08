import "../src/app/globals.css";
import Navbar from "../src/app/components/navbar";
import Hero from "../src/app/components/hero";
import FirstSec from "../src/app/components/firstsec";

const home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FirstSec />
    </div>
  );
};

export default home;
