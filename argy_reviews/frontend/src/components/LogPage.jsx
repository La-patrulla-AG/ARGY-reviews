import React, { useEffect, useState } from "react";
import LogList from "./ui/LogList";
import axios from "axios";

const sampleLogs = [
  {
    id: 1,
    username: "sarah_dev",
    subject: "API Authentication Issue",
    status: "unanswered",
    content: "Users are being logged out randomly when making API calls.",
    timestamp: "2024-03-10T10:30:00Z",
    responses: [
      {
        id: 1,
        username: "john_backend",
        content:
          "This might be related to token expiration. I'll investigate the JWT refresh mechanism.",
        timestamp: "2024-03-10T11:00:00Z",
        adminResponse: {
          content:
            "Issue confirmed. Token refresh mechanism has been fixed in latest deployment.",
          timestamp: "2024-03-10T14:30:00Z",
        },
      },
    ],
  },
  {
    id: 2,
    username: "alex_frontend",
    subject: "Mobile Layout Breaking",
    status: "answered",
    content:
      "The dashboard layout is breaking on mobile devices below 375px width.",
    timestamp: "2024-03-09T15:20:00Z",
    responses: [
      {
        id: 2,
        username: "emma_ui",
        content:
          "I can reproduce this. It seems to be caused by a fixed width container.",
        timestamp: "2024-03-09T16:45:00Z",
        adminResponse: {
          content:
            "Fixed with responsive container implementation. Please verify on staging.",
          timestamp: "2024-03-09T18:15:00Z",
        },
      },
    ],
  },
];



const LogPage = () => {
    const [logs, setLogs] = useState([]);
  
    const fetchData = async () => {
      try {
        const [ticketsResponse, messagesResponse] = await Promise.all([
          axios.get("http://127.0.0.1:8001/api/tickets/", {
            headers: {
              Authorization: `Token efea112a025fa03cd045e499a10b113adcd6b056`,
            },
          }),
          axios.get("http://127.0.0.1:8001/api/ticket-messages/", {
            headers: {
              Authorization: `Token efea112a025fa03cd045e499a10b113adcd6b056`,
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
