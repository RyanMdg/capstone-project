import Navbar from "../src/app/components/navbar";
import CartBody from "@/app/components/cartpage";
import Hero from "../src/app/components/hero";
import "../src/app/globals.css";
const cart = () => {
  return (
    <main>
      <Navbar />
      <div>divider</div>

      <CartBody />
    </main>
  );
};

export default cart;
