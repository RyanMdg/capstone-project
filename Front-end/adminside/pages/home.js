import "../src/app/globals.css";
import Navbar from "../src/app/components/navbar";
import Dashboard from "../src/app/components/dashBoard";

const dashboard = () => {
  return (
    <main>
      <Navbar />
      <Dashboard />
    </main>
  );
};

export default dashboard;
