import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/auth/types/types";

describe('Pruebas en authReducer', () => {
    test('debe retornar el estado por defecto', () => { 

        const state = authReducer({ logged: false }, {});
        expect(state).toEqual({ logged: false });
     })

    test('debe de (login) llamar el login autenticar y establecer el user', () => {
        const action = {
            type: types.login,
            payload: {
                user: 'Ricardo',
                id: '123'
            }
        }

        const state = authReducer({ logged: false }, action);

        expect(state).toEqual({ logged: true, user:action.payload });
    })


    test('debe de (logout) llamar el logout y borrar el user', () => {
        const state = {
            logged: true,
            user: {
                id: '123',
                name: 'Ricardo'
            }
        }
        const action = {
            type: types.logout,
        }

        const newState = authReducer(state, action);

        expect(newState).toEqual({ logged: false });

    })
})