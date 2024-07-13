import React from 'react'
import { useState, useEffect } from 'react'
import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableFooter,
  TableCell,
  TableBody,
  MenuItem,
  Icon,
  Label,
  Menu,
  Table,
} from 'semantic-ui-react'
import ExpenseService from '../services/expenseService'
export default function ExpenseList() {

  const[expenses ,setExpenses ] = useState([])
    
    useEffect(()=>{
        let expenseService = new ExpenseService()
        expenseService.getExpenses().then(result=>setExpenses(result.data.data))
    },[])



  return (
    <div>
      <Table celled>
    <TableHeader>
        <TableRow>
            <TableHeaderCell>Gider No</TableHeaderCell>
            <TableHeaderCell>Miktar</TableHeaderCell>
            <TableHeaderCell>Açıklama</TableHeaderCell>
        </TableRow>
    </TableHeader>

    <TableBody>
        {
            expenses.map(expenses=>(
                <TableRow key={expenses.id}>
                <TableCell>{expenses.id}</TableCell>
                <TableCell>{expenses.amount}</TableCell>
                <TableCell>{expenses.description}</TableCell>
            </TableRow>
            ))
        }
        
    </TableBody>

    <TableFooter>
        <TableRow>
            <TableHeaderCell colSpan='3'>
                <Menu floated='right' pagination>
                    <MenuItem as='a' icon>
                        <Icon name='chevron left' />
                    </MenuItem>
                    <MenuItem as='a'>1</MenuItem>
                    <MenuItem as='a'>2</MenuItem>
                    <MenuItem as='a'>3</MenuItem>
                    <MenuItem as='a'>4</MenuItem>
                    <MenuItem as='a' icon>
                        <Icon name='chevron right' />
                    </MenuItem>
                </Menu>
            </TableHeaderCell>
        </TableRow>
    </TableFooter>
</Table>
    </div>
  )
}
