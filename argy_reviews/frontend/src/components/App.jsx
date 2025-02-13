import "../../static/css/homePage.css";
import React from "react";
import MainLayout from "./MainLayout";
import HomePage from "./HomePage";
import PostPage from "./PostPage";
import CreatePostPage from "./CreatePostPage";
import EditPostPage from "./EditPostPage";
import MyPostsPage from "./MyPostsPage";
import ReglasPage from "./ReglasPage";
import PrivacyPage from "./PrivacyPage";
import TermsAndConditionsPage from "./TermsAndConditionsPage"
import WorkWithUsFormPage from "./WorkWithUsFormPage";
import SearchPage from "./SearchPage";


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ProtectedRoute from "./ui/ProtectedRoute";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import NotFound from "./NotFoundPage";


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

              <Route path="/buscar" element={<SearchPage/>}/>

              <Route path="/reglas" element={<ReglasPage />} />
              <Route path="/terminos-condiciones" element={<TermsAndConditionsPage />} />
              <Route path="/privacidad" element={<PrivacyPage />} />
              <Route path="/trabaja-con-nosotros" element={<WorkWithUsFormPage />} />

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
