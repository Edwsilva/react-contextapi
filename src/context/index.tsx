import React, { createContext, useState, type JSX } from "react";

interface IUser {
  img: string;
  name: string;
}

// Uma interface para representar todo contexto
// Pois se depois precisar de algo como theme...
interface IAppContext {
  user?: IUser;
  // Colocando a função abaixo na interface
  updateUser: () => void;
}

// Criando o contexto - Tipando IAppContext
const AppContext = createContext<IAppContext>({
  // Passando o valor inicial do contexto
  user: undefined,
});

// Criar o provider para disponibilizar para todo o APP
const AppProvider = ({ children }: { children: JSX.Element }) => {
  // Criando a variável que seré enviada para o contexto
  const [data, setData] = useState<IUser>();

  // Função para mudar o estado. Ela precisa ser exportada
  function updateUser(user: IUser) {
    setData(user);
  }
  // O contexto criado será exportado como um provider
  // valor=={{será distribuído no APP}}
  return (
    <AppContext.Provider value={{ user: data }}>
      {/* Ele é utilizado para renderizar tudo que estiver
      dentro do privider */}
      {children}
    </AppContext.Provider>
  );
};

// Agora preciso exportar  as constantes
export { AppContext, AppProvider };
