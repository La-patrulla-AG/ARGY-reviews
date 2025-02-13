import React, { useState } from "react";
import {
  MessageCircle,
  CheckCircle,
  XCircle,
  ChevronDown,
  ChevronUp,
  Send,
} from "lucide-react";
import { useMe } from "../hooks/useMe";
import axios from "axios";

function LogList({ logs }) {
  const [expandedLogId, setExpandedLogId] = useState(null);
  const [selectedLog, setSelectedLog] = useState(null);
  const [responses, setResponses] = useState({});
  const { user } = useMe();

  const toggleExpand = (logId) => {
    setExpandedLogId(expandedLogId === logId ? null : logId);
  };

  const openLogModal = (log) => {
    setSelectedLog(log);
  };

  const closeLogModal = () => {
    setSelectedLog(null);
  };

  const handleResponseChange = (logId, value) => {
    setResponses((prev) => ({ ...prev, [logId]: value }));
  };

  const handleSendResponse = (logId) => {
    console.log(responses[0])
    try {
      axios.post(`http://127.0.0.1:8001/api/ticket-messages/${logId}/responder/`, 
        {
          respuesta: responses[0]
        },
        {
          headers: {
            Authorization: `Token 81b3adac52c67f90cbe036f752aa6db619e04b48`,
          },
        }
    )
    } catch {
      console.log("")
    }
    console.log(`Respuesta enviada para el ticket ${logId}:`, responses[logId]);
    setResponses((prev) => ({ ...prev, [logId]: "" }));
  };

  return (
    <div className="space-y-4">
      {logs.map((log) => (
        <div
          key={log.id}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600 overflow-hidden"
        >
          <div
            className="p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center justify-between"
            onClick={() => toggleExpand(log.id)}
          >
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                {log.status === "R" ? (
                  <CheckCircle className="w-5 h-5 text-green-500" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-500" />
                )}
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  {log.subject}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  @{log.username}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <MessageCircle className="w-5 h-5 text-gray-400 dark:text-gray-400" />
              {expandedLogId === log.id ? (
                <ChevronUp className="w-5 h-5 text-gray-400 dark:text-gray-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-400 dark:text-gray-400" />
              )}
            </div>
          </div>

          {expandedLogId === log.id && (
            <div className="px-4 pb-4 border-t border-gray-100 dark:border-gray-700">
              <div className="mt-4 text-sm text-gray-700 dark:text-gray-300">
                {log.content ? log.content : "Sin mensaje"}
              </div>

              <div className="mt-4 space-y-4">
                {log.response ? (
                  <div className="pl-4 border-l-2 border-gray-200 dark:border-gray-600">
                    <div className="text-sm">
                      <span className="font-medium text-gray-900 dark:text-gray-100">
                        @admin
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
                      {log.response}
                    </p>
                  </div>
                ) : user?.is_superuser ? (
                  <div className="mt-4">
                    <input
                      type="text"
                      placeholder="Escribe tu respuesta..."
                      value={responses[log.id] || ""}
                      onChange={(e) =>
                        handleResponseChange(log.id, e.target.value)
                      }
                      className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                    <button
                      onClick={() => handleSendResponse(log.responseId)}
                      className="mt-2 flex items-center px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                    >
                      <Send className="w-4 h-4 mr-2" /> Enviar respuesta
                    </button>
                  </div>
                ) : (
                  <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                    Esperando respuesta de administrador
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default LogList;
