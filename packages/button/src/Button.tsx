import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      {...props}
      style={{
        padding: '8px 16px',
        borderRadius: 4,
        border: '1px solid #ccc',
        cursor: 'pointer',
      }}
    />
  );
};
