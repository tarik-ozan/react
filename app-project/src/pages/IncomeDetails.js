import React from 'react'
import { useParams } from 'react-router-dom'


export default function IncomeDetails() {
    let {id} =useParams()
  return (
    <div>
        Gelir : {id}
    </div>
  )
}
