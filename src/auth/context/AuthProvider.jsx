// esto sirve para proveer el contexto de autenticacion

import { useReducer } from "react";
import { types } from "../types/types";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";

const init = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user ? { logged: true, user } : { logged: false };
};

export const AuthProvider = ({ children }) => {
  //el useReducer recibe 3 parametros el reducer, el estado inicial y el inizializador
  const [authState, dispatch] = useReducer(authReducer, {}, init);

  const login = (name = "") => {
    const user = {
      id: 123,
      name,
    };

    const action = {
      type: types.login,
      payload: user,
    };
    localStorage.setItem("user", JSON.stringify(user));
    dispatch(action);
  };

  const logout = () => {
    localStorage.removeItem("user");
    const action = { type: types.logout };
    dispatch(action);
  };

  return (
    <AuthContext.Provider value={{ ...authState, 
    
    //metodos
    login, logout 
    }}>
      {children}
    </AuthContext.Provider>
  );
};
