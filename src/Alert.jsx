import React from 'react';
import { useEffect } from 'react';

function Alert({ msg, removeAlert, list }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 2000);
    return () => clearTimeout(timeout);
  }, [list]);

  return (
    <div className='alert'>
      <p>{msg}</p>
    </div>
  );
}

export default Alert;
