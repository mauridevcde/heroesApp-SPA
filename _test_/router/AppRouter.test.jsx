import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../src/auth";
import { AppRouter } from "../../src/router/AppRouter";

describe("Pruebas en AppRouter", () => {
  //   test("Debe de mostrar el login si no esta autenticado", () => {
  //     const contextValue = {
  //       logged: false,
  //     }

  //     render(
  //       <MemoryRouter initialEntries={["/marvel"]}>
  //         <AuthContext.Provider value={contextValue}>
  //           <AppRouter />
  //         </AuthContext.Provider>
  //       </MemoryRouter>
  //     );

  //     screen.debug();
  //     expect(screen.getByText("Login")).toBeTruthy();
  //   });

  test("Debe de mostrar el el componente de marvel si esta autenticado", () => {
    const contextValue = {
      logged: true,
      user: {
        name: "mauricio",
        id: 123,
      },
    };

    render(
      <MemoryRouter initialEntries={["/login"]}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    //screen.debug();
    expect(screen.getAllByText("Marvel").length).toBeGreaterThanOrEqual(1);
  });
});
