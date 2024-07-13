import axios from "axios"


export default class IncomeService{

    getIncomes(){
        return axios.get("http://localhost:8080/api/incomes/getall")
    }

    postIncomes(values){
        return axios.post("http://localhost:8080/api/incomes/add",values)
    }
}