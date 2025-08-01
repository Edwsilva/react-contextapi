import React, { createContext } from "react";

interface IUser {
  img: string;
  name: string;
}

// Uma interface para representar todo contexto
// Pois se depois precisar de algo como theme...
interface IAppContext {
  user?: IUser;
}

// Criando o contexto - Tipando IAppContext
const AppContext = createContext<IAppContext>({
  // Passando o valor inicial do contexto
  user: undefined,
});
