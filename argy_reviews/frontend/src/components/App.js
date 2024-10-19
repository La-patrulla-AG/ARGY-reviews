import "../../static/css/homePage.css";
import React from "react";
import MainLayout from "./MainLayout";
import HomePage from "./HomePage";
import PostPage from "./PostPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
        <Route path="/" element={<HomePage />} />
          <Route path="/post/:id" element={<PostPage />} />
          {/* Redirige a la página principal si la ruta no existe */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
