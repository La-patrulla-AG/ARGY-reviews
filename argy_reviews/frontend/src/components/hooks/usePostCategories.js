import { useEffect, useState } from "react";
import api from "../../api/api";

const usePostCategories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            // Verificar si ya están en localStorage
            const storedCategories = localStorage.getItem("postCategories");
            if (storedCategories) {
                setCategories(JSON.parse(storedCategories));
                return; // No hacer fetch si ya existen
            }

            try {
                // Obtener las tres categorías en paralelo
                const response = await api.get("/categories/");
                const sortedCategories = response.data.sort((a, b) => a.name.localeCompare(b.name));

                setCategories(sortedCategories);
                localStorage.setItem("postCategories", JSON.stringify(sortedCategories));
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        fetchCategories();
    }, []);
    return {categories};
};

export default usePostCategories;
