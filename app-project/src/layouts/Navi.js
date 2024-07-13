import React , {useState}from 'react'
import {
    DropdownMenu,
    DropdownItem,
    MenuMenu,
    MenuItem,
    Button,
    Dropdown,
    Menu,
    Container
} from 'semantic-ui-react'
import UserInfo from '../pages/UserInfo'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'
import { NavLink } from 'react-router-dom'

export default function Navi() {
    const [isAuthenticated, setIsAuthenticated] = useState(true)

    

    function handleSignOut() {
        setIsAuthenticated(false)        
    }
    function handleSignIn() {
        setIsAuthenticated(true)        
    }


    return (
        <div>
            <Menu inverted fixed='top'>
                <Container>
                    <Menu.Item as={NavLink} to="/budgets" name='Bütçeler'/>
                    <Menu.Item as={NavLink} to="/incomes" name='Gelirler'/>
                    <Menu.Item as={NavLink} to="/expenses" name='Giderler'/>
                    <Menu.Item as={NavLink} to="/incomesadd" name='gelir ekle'/>

                    <Menu.Menu position='right'>
                        
                        {isAuthenticated?<SignedIn signOut={handleSignOut} />:
                        <SignedOut signIn={handleSignIn} />}                        
                        

                        
                    </Menu.Menu>
                </Container>

            </Menu>
        </div>
    )
}
