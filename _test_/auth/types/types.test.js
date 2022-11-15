import { types } from "../../../src/auth/types/types"

describe('Pruebas en "Types"', () => {
    test('debe de retornar estos types', () => {

        console.log(types);
        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout',
        })
    })
})