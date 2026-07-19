import React from 'react';

const AlertModal = ({ message, type = 'error', onClose }) => {
  if (!message) return null;

  const styles = {
    error: 'bg-red-100 border-red-500 text-red-700',
    success: 'bg-green-100 border-green-500 text-green-700',
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#2b0909e1] bg-opacity-50 z-50">
      <div className={`border-l-4 p-4 rounded shadow-lg max-w-sm w-full ${styles[type]}`}>
        <div className="flex justify-between items-start">
          <p className="font-bold">{type === 'error' ? 'Error' : 'Success'}</p>
          <button onClick={onClose} className="text-xl font-bold">&times;</button>
        </div>
        <p className="mt-2">{message}</p>
        <button 
          onClick={onClose}
          className="mt-4 w-full py-1 px-4 bg-white bg-opacity-50 hover:bg-opacity-100 rounded transition cursor-pointer text-red-600 active:bg-red-800 active:text-amber-50"
        >
          ReTry
        </button>
      </div>
    </div>
  );
};

export default AlertModal;   