import "../src/app/globals.css";
import Navbar from "../src/app/components/navbar";
import Hero from "../src/app/components/hero";

const home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
};

export default home;
