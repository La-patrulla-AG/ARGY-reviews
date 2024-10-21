import Aside from "./ui/Aside";
import React from "react";
import HomePage from "./HomePage";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import Header from "./ui/Header";
import { AsideProvider } from "./context/AsideContext";

const MainLayout = ({ children }) => {
  const [barraLateralAbierta, setBarraLateralAbierta] = useState(true);
  const [modoOscuro, setModoOscuro] = useState(false);

  const toggleModoOscuro = () => setModoOscuro(!modoOscuro);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", modoOscuro);
  }, [modoOscuro]);

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <AsideProvider>
        <div>
          <Aside
            state={barraLateralAbierta}
            toggle={() => setBarraLateralAbierta(!barraLateralAbierta)}
          ></Aside>
          <main
            className={`flex-1 p-0 transition-all duration-300 ${
              !barraLateralAbierta ? "ml-64" : "ml-16"
            }`}
          >
            {" "}
            <Header />
            {children}
          </main>
        </div>
      </AsideProvider>

      {/* Botón de modo oscuro */}
      <button
        className="fixed bottom-4 right-4 p-2 bg-gray-200 dark:bg-gray-700 rounded-full shadow-lg z-50"
        onClick={toggleModoOscuro}
      >
        {modoOscuro ? (
          <Sun className="text-yellow-400" />
        ) : (
          <Moon className="text-gray-700" />
        )}
      </button>
    </div>
  );
};

export default MainLayout;
