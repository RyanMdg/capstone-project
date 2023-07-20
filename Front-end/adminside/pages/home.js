import Navbar from "../../../../Mp-2/Front-End/seller/src/app/components/navbar";
import "../src/app/globals.css";
import { useState } from "react";
import Dashboard from "../../../../Mp-2/Front-End/seller/src/app/components/dashBoard";

const dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main>
      <title>Dashboard</title>

      <Navbar />
      <section>
        <Dashboard />
      </section>
    </main>
  );
};

export default dashboard;
