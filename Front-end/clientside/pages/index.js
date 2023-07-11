import "../src/app/globals.css";
import Navbar from "../src/app/components/navbar";
import Hero from "../src/app/components/hero";
import FirstSec from "../src/app/components/firstsec";
import Secondsec from "@/app/components/secondsec";
import Thirdsec from "../src/app/components/thirdsec";
import Fourthsec from "../src/app/components/fourthsec";
import Newsletter from "../src/app/components/newlettersection";

const home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FirstSec />
      <Secondsec />
      <Thirdsec />
      <Fourthsec />
      <Newsletter />
    </div>
  );
};

export default home;
