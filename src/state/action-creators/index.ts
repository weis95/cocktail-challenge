import { Dispatch } from "redux"
import { ActionType } from "../action-types"
import { Action } from "../actions/index"
import { Cocktails, CocktailsDelete, CocktailsEdit } from "../models"

export const editCocktail = (cocktails: Array<CocktailsEdit>) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.EDIT,
            payload: cocktails
        })
    }
}

export const deleteCocktail = (cocktails: Array<CocktailsDelete>) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.DELETE,
            payload: cocktails
        })
    }
}

export const setCocktail = (cocktails: Array<Cocktails>) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SET,
            payload: cocktails
        })
    }
}