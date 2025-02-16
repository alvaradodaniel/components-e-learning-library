import React, { FC, ReactNode } from "react";

interface LectionProps {
  children: ReactNode | ReactNode[];
}

const Lection: FC<LectionProps> = ({ children }) => {
  return (
    <button
      style={{
        padding: "1em",
      }}
    >
      {children}
    </button>
  );
};

export default Lection;
