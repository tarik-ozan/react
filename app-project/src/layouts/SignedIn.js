import React from 'react'
import { NavLink } from 'react-router-dom'
import {Dropdown, Menu,Image} from 'semantic-ui-react'
export default function SignedIn({signOut}) {
  return (
    <div>
        <Menu.Item>
            <Image avatar spaced="right" src="https://avatars.githubusercontent.com/u/58374496?v=4"/>
            <Dropdown pointing="top left" text = "Tarık">
                <Dropdown.Menu>
                <Dropdown.Item as={NavLink} to="/userinfo" text="Hesap Bilgileri" icon="info"/>
                <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out"/>

            </Dropdown.Menu>
            </Dropdown>
            
        </Menu.Item>
    </div>
  )
}
