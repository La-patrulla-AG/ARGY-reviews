import "../../static/css/homePage.css";
import React from "react";
import MainLayout from "./MainLayout";
import HomePage from "./HomePage";
import PostPage from "./PostPage";
import CreatePost from "./CreatePost";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import AsideProvider from "./context/AsideContext";
import AuthProvider from "./context/AuthContext";
import PrivateRoute from "./ui/ProtectedRoute";

const App = () => {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <AsideProvider>
            <MainLayout>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/post/:id" element={<PostPage />} />

                <Route element={<PrivateRoute />}>
                  <Route path="/crear-post" element={<CreatePost />} />
                </Route>
                {/* Redirige a la página principal si la ruta no existe */}
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </MainLayout>
          </AsideProvider>
        </AuthProvider>
      </Router>
    </div>
  );
};

export default App;
