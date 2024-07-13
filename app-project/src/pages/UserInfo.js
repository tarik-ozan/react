import React from 'react'
import {
    DropdownMenu,
    DropdownItem,
    Dropdown,
    
} from 'semantic-ui-react'

import { useState, useEffect } from 'react'
import {
  CardMeta,
  CardHeader,
  CardGroup,
  CardDescription,
  CardContent,
  Button,
  Card,
  Image,
} from 'semantic-ui-react'
import UserService from '../services/userService'
import { useParams } from 'react-router-dom'

export default function UserInfo() {

  // let {email} =useParams();

  // const[users ,setUsers ] = useState([])
    
  // useEffect(()=>{
  //     let userService = new UserService()
  //     userService.getByEmail(email).then(result=>setUsers(result.data.data))
  // },[])



  return (
   <div>
<Dropdown item text='Hesap'>
    
     
  
 </Dropdown>
</div>
  )
}
