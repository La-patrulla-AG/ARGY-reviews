import React, { useEffect, useState } from "react";
import LogList from "./ui/LogList";
import axios from "axios";

const LogPage = () => {
    const [logs, setLogs] = useState([]);
  
    const fetchData = async () => {
      try {
        const [ticketsResponse, messagesResponse] = await Promise.all([
          axios.get("http://127.0.0.1:8001/api/tickets/", {
            headers: {
              Authorization: `Token 81b3adac52c67f90cbe036f752aa6db619e04b48`,
            },
          }),
          axios.get("http://127.0.0.1:8001/api/ticket-messages/", {
            headers: {
              Authorization: `Token 81b3adac52c67f90cbe036f752aa6db619e04b48`,
            },
          }),
        ]);
  
        const ticketsData = ticketsResponse.data;
        const messagesData = messagesResponse.data;
  
        // 🔄 Unimos cada ticket con sus mensajes correspondientes
        const combinedLogs = ticketsData.map((ticket) => {
          const relatedMessages = messagesData.filter(
            (msg) => msg.ticket === ticket.id
          );
  
          return {
            id: ticket.id,
            username: ticket.usuario,
            subject: ticket.asunto,
            status: ticket.estado, // Estado en código (P, R, etc.)
            content: relatedMessages[0]?.mensaje , // Primer mensaje
            timestamp: ticket.fecha_creacion,
            response:
              relatedMessages?.length > 0 && relatedMessages[0]?.respuesta
                ? relatedMessages[0]?.respuesta
                : null, // Primera respuesta
            responseId: relatedMessages[0]?.id 
          };
        });
  
        setLogs(combinedLogs);
      } catch (error) {
        console.error("Error loading data:", error);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto p-6">
          <h1 className="text-2xl font-semibold text-gray-900 mb-8 dark:text-gray-100">
            Bug Logs
          </h1>
          <LogList logs={logs} />
        </div>
      </div>
    );
  }

export default LogPage;
