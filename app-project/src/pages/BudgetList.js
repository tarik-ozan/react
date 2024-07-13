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
import BudgetService from '../services/budgetService'
export default function BudgetList() {

    const[budgets ,setBudgets ] = useState([])
    
    useEffect(()=>{
        let budgetService = new BudgetService()
        budgetService.getBudgets().then(result=>setBudgets(result.data.data))
    },[])



    return (
        <div>
            <Table celled>
    <TableHeader>
        <TableRow>
            <TableHeaderCell>Bütçe No</TableHeaderCell>
            <TableHeaderCell>Toplam Miktar</TableHeaderCell>
            <TableHeaderCell>İsim</TableHeaderCell>
        </TableRow>
    </TableHeader>

    <TableBody>
        {
            budgets.map(budgets=>(
                <TableRow key={budgets.id}>
                <TableCell>{budgets.id}</TableCell>
                <TableCell>{budgets.totalAmount}</TableCell>
                <TableCell>{budgets.name}</TableCell>
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
