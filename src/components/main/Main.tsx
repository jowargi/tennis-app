import React, { FC } from "react";

const Main: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <main>{children}</main>;
};

export default Main;
