import "../../static/css/homePage.css";
import React from "react";
import MainLayout from "./MainLayout";
import HomePage from "./HomePage";
import PostPage from "./PostPage";
import CreatePost from "./CreatePost";
import MyPostsSection from "./ui/MyPostsSection";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import AsideProvider from "./context/AsideContext";
import AuthProvider from "./context/AuthContext";
import ProtectedRoute from "./ui/ProtectedRoute";

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

                <Route
                  path="/crear-post"
                  element={
                    <ProtectedRoute>
                      <CreatePost />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/mis-publicaciones"
                  element={
                    <ProtectedRoute>
                      <MyPostsSection />
                    </ProtectedRoute>
                  }
                />

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
