import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar({ onSearch }) {
    const [query, setQuery] = useState(localStorage.getItem("searchQuery") || "");
    const navigate = useNavigate();

    const handleChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        localStorage.setItem("searchQuery", value);

    };

    const handleFocus = () => {
        navigate("/buscar");
    };



    return (
        <input
            type="text"
            placeholder="Buscar publicaciones..."
            value={query}
            onChange={handleChange}
            onFocus={handleFocus}  // Navega a /buscar al hacer clic
            className="p-2 border-2 border-gray-600 rounded w-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
    );
}
