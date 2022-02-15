import { ActionType } from "../action-types/index"
import { Action } from "../actions"
import { Cocktails } from "../models"

const initialState = [{ name: 'Moscow Mule', type: 'Alcoholic', glass: 'Copper mug or highball glass', index: 99}];

const reducer = (state: Array<Cocktails> = initialState, action: Action): Array<Cocktails> => {
    switch (action.type){
        case ActionType.SET:
            return state = action.payload;
        case ActionType.EDIT:
            let arrayEdit = state
            arrayEdit[action.payload[0].index].name = action.payload[0].name
            return state = [...arrayEdit];
        case ActionType.DELETE:
            let array = state;
            if(action.payload[0].index === 0){
                array.shift()
            } else if(action.payload[0].index === array.length){
                array.pop()
            } else {
                array.splice(action.payload[0].index, 1);
            }
            return state = [...array];
        default:
            return state
    }
}

export default reducer