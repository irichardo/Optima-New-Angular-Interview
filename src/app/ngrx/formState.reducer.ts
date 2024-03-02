import { Action } from "@ngrx/store";
import { Formulario } from "../components/types/types";



export function formReducer(state: Formulario = { age: 0, city: '', first_name: '', last_name: '', actualBusiness: '', birthday: null, lastSalary: null, partnerBirthday: null, university: '', yearsOfExperience: null }, action: Action) {

    switch (action.type) {
        case 'SAVE_STATE':
            return 'Hola'
        default:
            return state
    }

}