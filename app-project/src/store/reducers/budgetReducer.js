import { ADD_TO_TABLE, REMOVE_FROM_TABLE } from "../actions/budgetActions";
import { budgetItems } from "../initialStates/budgetItems";

const initialState = {
    budgetItems:budgetItems
}

export default function budgetReducer(state = initialState, {type,payload}){
    switch (type) {
        case ADD_TO_TABLE:
                
            break;
    
        default:
            break;
    }

}