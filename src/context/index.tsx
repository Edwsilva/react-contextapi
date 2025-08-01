import React, { createContext, useCallback, useState, type JSX } from "react";
import { useLocalStorage } from "react-use";

interface IUser {
  img: string;
  name: string;
  header: string;
}

// Uma interface para representar todo contexto
// Pois se depois precisar de algo como theme...
interface IAppContext {
  user?: IUser;
  // Colocando a função abaixo na interface
  updateUser(user: IUser): void;
}

// Criando o contexto - Tipando IAppContext
const AppContext = createContext<IAppContext>({
  // Passando o valor inicial do contexto
  user: undefined,
  // Definindo a função com valor inicial vazio
  updateUser: () => {},
});

// Criar o provider para disponibilizar para todo o APP
const AppProvider = ({ children }: { children: JSX.Element }) => {
  // Criando a variável que seré enviada para o contexto
  // const [data, setData] = useState<IUser>();
  // Persistindo os dados no browser do usuário
  const [data, setData] = useLocalStorage<IUser>("user-logged");

  // Função para mudar o estado. Ela precisa ser exportada
  // Quando passamos funções para dentro do contexto é aconselhável utilizar
  // o useCallback para armazenar o valor da função na memória.
  const updateUser = useCallback((user: IUser) => {
    console.log("updateUser called ", user);

    setData(user);
  }, []);

  // O contexto criado será exportado como um provider
  // valor=={{será distribuído no APP}}
  return (
    <AppContext.Provider value={{ user: data, updateUser }}>
      {/* Ele é utilizado para renderizar tudo que estiver
      dentro do privider */}
      {children}
    </AppContext.Provider>
  );
};

// Agora preciso exportar  as constantes
export { AppContext, AppProvider };
