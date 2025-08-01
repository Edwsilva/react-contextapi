import React, { createContext, type JSX } from "react";

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

// Criar o provider para disponibilizar para todo o APP
const AppProvider = ({ children }: { children: JSX.Element }) => {
  // O contexto criado será exportado como um provider
  // vslur=={{será distribuído no APP}}
  return (
    <AppContext.Provider value={{ user: undefined }}>
      {/* Ele é utilizado para renderizar tudo que estiver
      dentro do privider */}
      {children}
    </AppContext.Provider>
  );
};

// Agora preciso exportar  as constantes
export { AppContext, AppProvider };
