import React from 'react'
import { Form, Formik, Field, ErrorMessage } from 'formik'
import * as Yup from "yup"
import { Button, FormField, Label } from 'semantic-ui-react'

import { useState, useEffect } from 'react'
import IncomeService from '../services/incomeService'
import TextInput from '../utilities/TextInput'
export default function () {

    const[incomesAdd ,postIncomes ] = useState([])
    useEffect(()=>{
        let incomeService = new IncomeService()
        incomeService.postIncomes().then(result=>postIncomes(result.data.data))
    },[])

    
    const initialValues = { amount: "", description: "" }

    const schema = Yup.object({
        amount: Yup.string().required("Tutar girin"),
        
    });

  return (
    <div>

            <Formik 
                initialValues={initialValues} 
                validationSchema={schema}
                onSubmit = {(values)=>{
                 console.log(values)
            }}
      >         
      
                <Form className='ui form'>
                    
                    <TextInput name = "amount" placeholder="Tutar"></TextInput>
                    <TextInput name = "description" placeholder="Açıklama"></TextInput>
      
                    <Button type='submit'>Ekle</Button>
                    
                </Form>
            </Formik>


    </div>
  )
}
