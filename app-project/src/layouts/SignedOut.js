import React from 'react'
import {Dropdown, Menu,Image, Button} from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
export default function SignedOut({signIn}) {
  return (
    <div>
        <Menu.Item>
        <Button onClick={signIn} primary>Giriş Yap</Button>
        <Button as={NavLink} to="/userform">Kayıt Ol</Button>
        </Menu.Item>
    </div>
  )
}
