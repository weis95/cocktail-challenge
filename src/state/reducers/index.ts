import { combineReducers } from "redux"
import cocktailReducer from "./cocktailReducer"


const reducers = combineReducers({
    cocktail: cocktailReducer
})

export default reducers

export type RootState = ReturnType<typeof reducers>