import { useEffect, useState } from "react";
import api from "../../api/api"; 

const useReportCategories = () => {
  const [reportCategories, setReportCategories] = useState({
    posts: [],
    users: [],
    reviews: [],
  });

  useEffect(() => {
    const fetchCategories = async () => {
      // Verificar si ya están en localStorage
      const storedCategories = localStorage.getItem("reportCategories");
      if (storedCategories) {
        setReportCategories(JSON.parse(storedCategories));
        return; // No hacer fetch si ya existen
      }

      try {
        // Obtener las tres categorías en paralelo
        const [postsRes, usersRes, reviewsRes] = await Promise.all([
          api.get(`/report_categories/posts/`),
          api.get(`/report_categories/users/`),
          api.get(`/report_categories/reviews/`),
        ]);

        // Crear objeto con las categorías
        const categoriesData = {
          posts: postsRes.data,
          users: usersRes.data,
          reviews: reviewsRes.data,
        };

        // Guardar en el estado y en localStorage
        setReportCategories(categoriesData);
        localStorage.setItem("reportCategories", JSON.stringify(categoriesData));
      } catch (error) {
        console.error("Error fetching report categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return reportCategories;
};

export default useReportCategories;
