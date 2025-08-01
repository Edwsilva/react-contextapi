import React from "react";

export const Avatar = () => {
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
        src={
          "https://media.istockphoto.com/id/172735497/pt/foto/senior-cidad%C3%A3o.webp?a=1&s=612x612&w=0&k=20&c=FBEcUyMy4ltWZUIvLcaHbepZHdngz2S1f3XNjd1O6Cg="
        }
      />
      <p>Edwilson da Silva</p>
    </div>
  );
};
