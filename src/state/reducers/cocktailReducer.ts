import { ActionType } from "../action-types/index"
import { Action } from "../actions"
import { Cocktails } from "../models"

const initialState = [{ name: 'Moscow Mule', type: 'Alcoholic', glass: 'Copper mug or highball glass', index: 99}]

const reducer = (state: Array<Cocktails> = initialState, action: Action): Array<Cocktails> => {
    switch (action.type){
        case ActionType.SET:
            return state = action.payload

        case ActionType.EDIT:
            state[action.payload[0].index].name = action.payload[0].name
            return state = [...state]

        case ActionType.DELETE:
            if(action.payload === 0){
                state.shift()
            } else if(action.payload === state.length - 1 ){
                state.pop()
            } else {
                state.splice(action.payload, 1)
            }
            return state = [...state]

        default:
            return state
    }
}

export default reducer