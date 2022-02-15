export interface Cocktails {
    name: string, 
    type: string, 
    glass: string,
    index: number
}

export interface CocktailsEdit {
    name: string,
    index: number
}

export interface CocktailsDelete {
    index: number
}