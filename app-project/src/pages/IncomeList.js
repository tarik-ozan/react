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
import IncomeService from '../services/incomeService'
import { Link } from 'react-router-dom'

export default function IncomeList() {

    const[incomes ,setIncomes ] = useState([])
    
    useEffect(()=>{
        let incomeService = new IncomeService()
        incomeService.getIncomes().then(result=>setIncomes(result.data.data))
    },[])


  return (
    <div><Table celled>
    <TableHeader>
        <TableRow>
            <TableHeaderCell>Gelir No</TableHeaderCell>
            <TableHeaderCell>Miktar</TableHeaderCell>
            <TableHeaderCell>Açıklama</TableHeaderCell>
        </TableRow>
    </TableHeader>

    <TableBody>
        {
            incomes.map(incomes=>(
                <TableRow key={incomes.id}>
                <TableCell>{incomes.id}</TableCell>
                <TableCell>{incomes.amount}</TableCell>
                <TableCell>{incomes.description}</TableCell>
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
</Table></div>
  )
}
