import Navbar from "../src/app/components/navbar";
import Brand from "../src/app/components/nike";
import Footer from "../src/app/components/footer";

const product = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div className=" pt-32">
          <ul className=" bg-black py-10 text-white font-extrabold text-lg uppercase flex justify-center gap-4 mb-10 ">
            <a className=" hover:underline" href="products">
              <li>All Products</li>
            </a>
            <a className=" hover:underline" href="/nike">
              <li>Nike</li>
            </a>
            <a className=" hover:underline" href="/adidas">
              <li>Adidas</li>
            </a>
            <a className=" hover:underline" href="/fubu">
              <li>Fubu</li>
            </a>
            <a className=" hover:underline" href="/newera">
              <li>New Era</li>
            </a>
          </ul>
          <Brand brand="New Era" />
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default product;
