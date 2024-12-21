import "../../static/css/homePage.css";
import React from "react";
import MainLayout from "./MainLayout";
import HomePage from "./HomePage";
import PostPage from "./PostPage";
import CreatePostPage from "./CreatePostPage";
import EditPostPage from "./EditPostPage";
import MyPostsPage from "./MyPostsPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AuthProvider from "./context/AuthContext";
import ProtectedRoute from "./ui/ProtectedRoute";

const App = () => {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <MainLayout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/post/:postId" element={<PostPage />} />

              <Route
                path="/crear-post"
                element={
                  <ProtectedRoute>
                    <CreatePostPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/mis-publicaciones"
                element={
                  <ProtectedRoute>
                    <MyPostsPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/editar-post/:postId"
                element={
                  <ProtectedRoute>
                    <EditPostPage />
                  </ProtectedRoute>
                }
              />

              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </MainLayout>
        </AuthProvider>
      </Router>
    </div>
  );
};

export default App;
