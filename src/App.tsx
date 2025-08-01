//https://www.youtube.com/watch?v=hYNjpbXe7V0&list=PLgM_vQNu_4CBV5D1uLH1gzvZ3lNYWujC3?
import { useState } from "react";

import { HomePage } from "./pages/HomePage";

function App() {
  async function getData() {
    //Simular um delay de 2 segundos em um request
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return {
      img: "https://media.istockphoto.com/id/172735497/pt/foto/senior-cidad%C3%A3o.webp?a=1&s=612x612&w=0&k=20&c=FBEcUyMy4ltWZUIvLcaHbepZHdngz2S1f3XNjd1O6Cg=",
      name: "Edwilson da Silva",
    };
  }
  return <HomePage />;
}

export default App;
