// pages/_error.js
import React from 'react';

const ErrorPage = ({ statusCode }) => {
  return (
    <div>
      <h1>Error {statusCode}</h1>
      <p>Oops! Something went wrong.</p>
    </div>
  );
};

export default ErrorPage;
    