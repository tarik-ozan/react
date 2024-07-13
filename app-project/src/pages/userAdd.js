import React from 'react'
import { Form, Formik, Field, ErrorMessage } from 'formik'
import * as Yup from "yup"
import { Button, FormField, Label } from 'semantic-ui-react'
import UserService from '../services/userService'
import { useState, useEffect } from 'react'

import axios from "axios"
export default function () {

    const[users ,postUsers ] = useState([])
    
    
    useEffect(()=>{
        let userService = new UserService()
        userService.postUsers().then(result=>postUsers(result.data.data))
    },[])




    const initialValues = { email: "", password: "" }

    const schema = Yup.object({
        email: Yup.string().required("Email zorunludur"),
        password: Yup.string().required("Parola zorunludur")
    })

    
    return (
        <div>
            <Formik
                initialValues={initialValues} 
                validationSchema={schema}
                onSubmit={(values)=>{
                    UserService.postUsers(values)
                    
                }}>
                <Form className='ui form'>
                    <FormField>
                        {/* <label>Email</label>
                        <input value="email" name='email' placeholder='Email' /> */}

                        <Field name="email" placeholder="Email"></Field>
                        
                        <ErrorMessage name='email' render={error=>
                            <Label pointing basic color='red' content={error}></Label>}></ErrorMessage>

                    </FormField>

                    <FormField>
                        {/* <label>Parola</label>
                        <input value="password" name='password' placeholder='Parola' /> */}

                        <Field name="password" placeholder="Parola"></Field>
                        <ErrorMessage name='password' render={error=>
                            <Label pointing basic color='red' content={error}></Label>}></ErrorMessage>
                    </FormField>
                    
                    <Button type='submit'>Ekle</Button>
                    
                </Form>
            </Formik>
        </div>
    )
}
