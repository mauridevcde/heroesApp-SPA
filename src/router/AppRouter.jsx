import { Routes, Route } from "react-router-dom";

import { LoginPage } from "../auth";
import { HeroesRoutes } from "../heroes";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";

export const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />
      {/* <Route path="/login" element={<LoginPage />} /> */}

      {/* Vamos a generar una ruta privada con nuestro componente creado en el router <PrivateRoute/> */}
      <Route
        path="/*"
        element={
          <PrivateRoute>
            <HeroesRoutes />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
