import React from 'react'
import {Menu,Dropdown,Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const SignedInMenu = ({ signout , profile, auth }) => {
  return (
            <Menu.Item position="right">
              <Image avatar spaced="right" src={profile.photoURL || '/assets/user.png'} />
              <Dropdown pointing="top left" text={profile.displayName}>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to={`/createEvent`} text="Create Event" icon="plus" />
                  <Dropdown.Item as={Link} to={`/people`} text="People" icon="users" />
                  <Dropdown.Item as={Link} to={`/profile/${auth.uid}`} text="My Profile" icon="user" />
                  <Dropdown.Item as={Link} to='/settings' text="Settings" icon="settings" />
                  <Dropdown.Item onClick={signout} text="Sign Out" icon="power" />
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>
  )
}

export default SignedInMenu
