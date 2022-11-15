import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../src/auth";
import { NavBar } from "../../../src/ui";

const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate,
}));

describe("Pruebas en NavBar", () => {
  const contextValue = {
    user: {
      name: "Mauricio",
      id: 123,
    },
    logout: jest.fn(),
  };

  beforeEach(() => jest.clearAllMocks());

  //   test("Debe de mostrar el nombre del usuario logueado", () => {
  //     render(
  //       <AuthContext.Provider value={contextValue}>
  //         <MemoryRouter>
  //           <NavBar />
  //         </MemoryRouter>
  //       </AuthContext.Provider>
  //     );

  //     screen.debug();
  //     expect(screen.getByText("Mauricio")).toBeTruthy();
  //   });

  test("debe de llamar al logout y al navigate cuando se hace click en boton ", () => {
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <NavBar />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    const logoutBtn = screen.getByRole("button");

    fireEvent.click(logoutBtn);

    expect(contextValue.logout).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith("/login", {"replace": true});
  });
});
