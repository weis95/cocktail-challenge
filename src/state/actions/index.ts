import { ActionType } from "../action-types/index"
import { Cocktails, CocktailsDelete, CocktailsEdit } from "../models"

interface EditAction {
    type: ActionType.EDIT,
    payload: Array<CocktailsEdit>
}

interface DeleteAction {
    type: ActionType.DELETE,
    payload: Array<CocktailsDelete>
}

interface SetAction {
    type: ActionType.SET,
    payload: Array<Cocktails>
}

export type Action = EditAction | DeleteAction | SetAction