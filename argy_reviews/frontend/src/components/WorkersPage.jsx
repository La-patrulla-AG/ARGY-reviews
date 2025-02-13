import React, { useEffect, useState } from "react";

const WorkersPage = () => {
    const [cvLink, setCvLink] = useState("");

    useEffect(() => {
        // Reemplaza esta URL con la URL correcta para obtener los datos del trabajador
        const fetchWorkerData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/app/interaccion/");
                const workerData = response.data;
                setCvLink(`http://localhost:5000${workerData.cvlink}`);
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
