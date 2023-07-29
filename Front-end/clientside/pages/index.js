// pages/index.js
import React from "react";
import "../src/app/globals.css";
import Navbar from "../src/app/components/navbar";
import Hero from "../src/app/components/hero";
import FirstSec from "../src/app/components/firstsec";
import Secondsec from "@/app/components/secondsec";
import Thirdsec from "../src/app/components/thirdsec";
import Fourthsec from "../src/app/components/fourthsec";
import Newsletter from "../src/app/components/newlettersection";
import Footer from "../src/app/components/footer";

const Home = () => {
  return (
    <div>
      <Navbar />

      <Hero />
      <FirstSec />
      <h1 className="flex justify-center text-[#100c0cdb] text-[2rem] mt-20 screen2:text-[3rem] font-[800] uppercase">
        our products
      </h1>
      <Secondsec />
      <Thirdsec />
      <Fourthsec />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
