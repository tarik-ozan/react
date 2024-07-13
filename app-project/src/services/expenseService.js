import axios from "axios"


export default class ExpenseService{

    getExpenses(){
        return axios.get("http://localhost:8080/api/expenses/getall")
    }

}