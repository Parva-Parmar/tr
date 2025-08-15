"use client";

export const Button = ({ label }: any) => {
  return (
    <button
      onClick={() => alert(`Hello from your  app!`)}
    >
      {label}
    </button>
  );
};
