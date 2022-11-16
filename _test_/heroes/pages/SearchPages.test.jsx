import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SearchPage } from "../../../src/heroes/pages/SearchPage";

const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate,
}));

describe("Pruebas en searchpage", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  //   test("debe de mostrarse correctamente con los valores por defecto", () => {
  //     //memory router es un componente que nos permite hacer pruebas de rutas
  //     const { container } = render(
  //       <MemoryRouter>
  //         <SearchPage />
  //       </MemoryRouter>
  //     );

  //     expect(container).toMatchSnapshot();
  //   });

  //   test("debe de mostrar a batman y el input con el valor del querystring", () => {
  //     //memory router es un componente que nos permite hacer pruebas de rutas
  //     // initialEntries es un arreglo de rutas que queremos probar

  //     render(
  //       <MemoryRouter initialEntries={["/search?q=batman"]}>
  //         <SearchPage />
  //       </MemoryRouter>
  //     );

  //     screen.debug();
  //     const input = screen.getByRole("textbox");
  //     expect(input.value).toBe("batman");
  //     const img = screen.getByRole("img");
  //     expect(img.src).toBe("http://localhost/assets/dc-batman.jpg");
  //   });

  //   test("debe de mostrar un herror sin no muestra el hero", () => {
  //     render(
  //       <MemoryRouter initialEntries={["/search?q=batman123"]}>
  //         <SearchPage />
  //       </MemoryRouter>
  //     );
  //     //screen.debug();
  //     const valor = screen.getByText("No hero whith");
  //     expect(valor).toBeTruthy();
  //   });

  test("Debe llamar al navigate a la pantalla nueva", () => {
    render(
      <MemoryRouter initialEntries={["/search"]}>
        <SearchPage />
      </MemoryRouter>
    );

    const input = screen.getByRole("textbox");
    fireEvent.change(input, {
      target: { name: "searchText", value: "superman" },
    });

    const form = screen.getByTestId("searchForm");
    fireEvent.submit(form);

    //esto es para ver si se llamo la funcion con los parametros que se esperan
    expect(mockedUseNavigate).toHaveBeenCalledWith("?q=superman");

  });
});
