import Aside from "./ui/Aside";
import React from "react";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import Header from "./ui/Header";

//toast
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainLayout = ({ children }) => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") ?? "dark"
  );

  const isDark = theme === "dark";

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", theme);
  }, [theme, isDark]);

  return (
    <>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-grow">
        <Aside />
        <main className="flex-1 p-4 transition-all duration-300 ml-16">
          <Header />
          {children}
        </main>
        <ThemeSelector theme={theme} setTheme={setTheme} />
      </div>

      {/* Pasamos el tema dinámico */}
      <ToastContainer
        theme={theme}
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        pauseOnHover={false}
        pauseOnFocusLoss
        draggable
        transition={Bounce}
      />
    </>
  );
};

export const ThemeSelector = ({ theme, setTheme }) => {
  const isDark = theme === "dark";

  return (
    <button
      className="fixed bottom-4 right-4 p-2 bg-gray-200 dark:bg-gray-700 rounded-full shadow-lg z-50"
      onClick={() => setTheme((old) => (old === "dark" ? "light" : "dark"))}
    >
      {isDark ? (
        <Sun className="text-yellow-400" />
      ) : (
        <Moon className="text-gray-700" />
      )}
    </button>
  );
};

export default MainLayout;
