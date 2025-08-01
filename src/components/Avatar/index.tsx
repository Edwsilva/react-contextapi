import React, { useContext } from "react";
import { AppContext } from "../../context";

export const Avatar = () => {
  const context = useContext(AppContext);

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <img
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
        }}
        src={context.user?.img}
      />
      <p>{context.user?.name}</p>
    </div>
  );
};
