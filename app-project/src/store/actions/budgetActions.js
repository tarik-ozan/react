export const ADD_TO_TABLE = "ADD_TO_TABLE"
export const REMOVE_FROM_TABLE = "REMOVE_FROM_TABLE"


export function addToTable(budgets){
    return{
        type : ADD_TO_TABLE,
        payload : budgets
    }
}


export function removeFromTable(budgets){
    return{
        type : REMOVE_FROM_TABLE,
        payload : budgets
    }
}
