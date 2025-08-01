import React from "react";
import { Avatar } from "../../components/Avatar";
import { useAppContext } from "../../hooks/useAppContext";

export const Header = () => {
  const context = useAppContext();

  return (
    <>
      <h1>{context.user?.header}</h1>
      <Avatar />;
    </>
  );
};
