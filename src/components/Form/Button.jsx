import React from 'react';

const Button = ({ onClick, children, className, disabled }) => {
  return (
    <button
      onClick={!disabled ? onClick : null}
      className={`px-4 py-2 rounded ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
