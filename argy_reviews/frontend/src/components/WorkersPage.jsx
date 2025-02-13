import React, { useEffect, useState } from "react";
import axios from "axios";

const WorkersPage = () => {
    const [cvLink, setCvLink] = useState("");

    useEffect(() => {
        // Reemplaza esta URL con la URL correcta para obtener los datos del trabajador
        const fetchWorkerData = async () => {
            try {
                const response = await axios.get("http://localhost:8001/app/trabajador/6/");
                const workerData = response.data;
                setCvLink(`http://localhost:8001${workerData.cvlink}`);
                console.log("Worker data:", workerData);
            } catch (error) {
                console.error("Error fetching worker data:", error);
            }
        };

        fetchWorkerData();
    }, []);

    return (
        <>
            {cvLink && (
                <a target="_blank" href={cvLink} rel="noopener noreferrer">
                    Descargar CV
                </a>
            )}
        </>
    );
};

export default WorkersPage;
