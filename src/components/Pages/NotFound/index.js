import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {
  return (
    <div
      style={{
        height: '100vh',
      }}
      className="d-flex w-100 justify-content-center align-items-center"
    >
      <div className="d-flex flex-column text-center">
        <h1>404</h1>
        <h4>Səhifə tapılmadı 🤷</h4>
        <Link to="/">Əsas səhifə</Link>
      </div>
    </div>
  );
};

export default Notfound;
