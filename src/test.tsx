import React, { useState } from 'react';

type TodosContextProps = {
  age: number | null;
  name: string;
  setAge: React.Dispatch<React.SetStateAction<number | null>>;
  setName: React.Dispatch<React.SetStateAction<string>>;
};

type Props = {
  children: React.ReactNode;
};

export const ContextTodos = React.createContext({} as TodosContextProps);

export const TodoContext: React.FC<Props> = ({ children }) => {
  const [age, setAge] = useState<number | null>(null);
  const [name, setName] = useState('');

  return (
    <ContextTodos.Provider value={{ age, name, setAge, setName }}>
      {children}
    </ContextTodos.Provider>
  );
};
