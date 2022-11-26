import React from "react";
import { useRouteError } from "react-router-dom";

const DispalyError = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>Something Wen wrong {error?.message}</h1>
    </div>
  );
};

export default DispalyError;
