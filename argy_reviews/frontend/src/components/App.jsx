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
import ProtectedRoute from "./ui/ProtectedRoute";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient();

const App = () => {
  return (
    <div className="App">
      <Router>
        <QueryClientProvider client={queryClient}>
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
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </Router>
    </div>
  );
};

export default App;
