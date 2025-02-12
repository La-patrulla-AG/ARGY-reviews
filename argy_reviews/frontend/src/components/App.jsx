import "../../static/css/homePage.css";
import React from "react";
import MainLayout from "./MainLayout";
import HomePage from "./HomePage";
import PostPage from "./PostPage";
import CreatePostPage from "./CreatePostPage";
import EditPostPage from "./EditPostPage";
import MyPostsPage from "./MyPostsPage";
import NotFound from "./NotFoundPage";
import WorkersPage from "./WorkersPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ProtectedRoute from "./ui/ProtectedRoute";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';


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
                  
                    <CreatePostPage />
                  
                }
              />
              <Route
                path="/mis-publicaciones"
                element={
                  
                    <MyPostsPage />
                  
                }
              />
              <Route
                path="/trabajadores"
                element={
                  
                    <WorkersPage />
                  
                }
              />
              <Route
                path="/editar-post/:postId"
                element={
                  
                    <EditPostPage />
                  
                }
              />

              {/* Ruta para manejar 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </MainLayout>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </Router>
    </div>
  );
};

export default App;
