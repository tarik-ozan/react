import axios from "axios"


export default class BudgetService{

    getBudgets(){
        return axios.get("http://localhost:8080/api/budgets/getall")
    }

}