import React from "react";
import { Trash2, AlertCircle, HelpCircle } from "lucide-react";

const modalConfigs = {
  delete: {
    message: "Do you want to delete this post?",
    buttonA: "Cancel",
    buttonB: "Yes, I want to delete",
    icon: Trash2,
    iconClassName: "text-red-600 dark:text-red-400",
    iconContainerClassName: "bg-red-100 dark:bg-red-900",
  },
  warning: {
    message: "This action cannot be undone. Please proceed with caution.",
    buttonA: "Got it",
    buttonB: "Continue anyway",
    icon: AlertCircle,
    iconClassName: "text-amber-600 dark:text-amber-400",
    iconContainerClassName: "bg-amber-100 dark:bg-amber-900",
  },
  help: {
    message: "Need help? Contact our support team for assistance.",
    buttonA: "Close",
    buttonB: "Contact Support",
    icon: HelpCircle,
    iconClassName: "text-blue-600 dark:text-blue-400",
    iconContainerClassName: "bg-blue-100 dark:bg-blue-900",
  },
};

const Modal = ({ isOpen, onClose, mode, onButtonBClick }) => {
  if (!isOpen || !modalConfigs[mode]) return null;

  const {
    message,
    buttonA,
    buttonB,
    icon: Icon = Trash2, // Icon prop con AlertTriangle como valor por defecto
    iconClassName = "text-red-600 dark:text-red-400", // Clases por defecto para el ícono
    iconContainerClassName = "bg-red-100 dark:bg-red-900", // Clases por defecto para el contenedor del ícono
  } = modalConfigs[mode];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 dark:bg-black/70 transition-opacity" />

      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative transform overflow-hidden rounded-lg bg-white dark:bg-gray-800 px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
          <div className="sm:flex sm:items-start">
            {/* Icon */}
            <div
              className={`mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full ${iconContainerClassName} sm:mx-0 sm:h-10 sm:w-10`}
            >
              <Icon className={`h-6 w-6 ${iconClassName}`} />
            </div>

            {/* Message */}
            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
              <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                Alert
              </h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {message}
                </p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse gap-3">
            <button
              type="button"
              className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 sm:w-auto sm:text-sm"
              onClick={() => {
                onButtonBClick();
                onClose();
              }}
            >
              {buttonB}
            </button>
            <button
              type="button"
              className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-2 text-base font-medium text-gray-700 dark:text-gray-200 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:ring-offset-2 dark:focus:ring-offset-gray-800 sm:mt-0 sm:w-auto sm:text-sm"
              onClick={onClose}
            >
              {buttonA}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
