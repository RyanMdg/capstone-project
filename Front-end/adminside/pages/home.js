import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "../src/app/components/navbar";
import Dashboard from "../src/app/components/dashBoard";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });
const dashboard = () => {
  const router = useRouter();

  useEffect(() => {
    const home = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          router.push("/");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    home();
  }, [router]);

  return (
    <main className={montserrat.className}>
      <Navbar />
      <Dashboard />
    </main>
  );
};

export default dashboard;
