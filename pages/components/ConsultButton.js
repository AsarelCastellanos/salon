import React from "react";
import { PopupButton } from "@typeform/embed-react";

const ConsultButton = () => {
  return (
    <PopupButton id="<form-id>" type="button" className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      Book a Consult
    </PopupButton>
  );
};

export default ConsultButton;
