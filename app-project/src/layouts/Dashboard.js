import React from 'react'
import Navi from './Navi'
import BudgetList from '../pages/BudgetList'
import ExpenseList from '../pages/ExpenseList'
import IncomeList from '../pages/IncomeList'
import {Route, Routes} from 'react-router-dom'
import { GridColumn, Grid, Image } from 'semantic-ui-react'
import IncomeDetails from '../pages/IncomeDetails'
import UserInfo from '../pages/UserInfo'
import UserAdd from '../pages/userAdd'
import IncomeAdd from '../pages/incomeAdd'

export default function Dashboard() {
  return (
    <div>

{/* <Navi></Navi>
<IncomeList></IncomeList>
<BudgetList></BudgetList>
<ExpenseList></ExpenseList> */}


{/* <Navi></Navi> */}

<Routes> 
  
  <Route exact path='/incomes' element={<IncomeList/>}/>
  <Route path='/expenses' element={<ExpenseList/>}/>
  <Route path='/budgets' element={<BudgetList/>}/>
  <Route path='/userinfo' element={<UserInfo/>}/>
  <Route path='/userform' element={<UserAdd/>}/>
  <Route path='/incomesadd' element={<IncomeAdd/>}/>
</Routes>

      {/* <Grid>
        <Grid.Row>
          <Grid.Column width = {4}>
            <Navi/>
          </Grid.Column>
          
          <Grid.Column width={12}>
            <Route path='/products' Component={IncomeList}></Route>
          </Grid.Column>
        </Grid.Row>
      </Grid> */}      
      {/* <IncomeList></IncomeList> */}
      
    </div>
  )
}
