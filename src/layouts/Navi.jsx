import React, { useState } from "react";
import CartSummary from './CartSummary';
import { Container, Menu } from 'semantic-ui-react'
import SignetOut from "./SignetOut";
import SignedIn from "./SignedIn";
import { useHistory } from "react-router";

export default function Navi() {
  const [isAuthanticated, setiIsAuthanticated] = useState(true)
  const history = useHistory()
  
  function handleSignOut(params) {
    setiIsAuthanticated(false)
    history.push("/")
  }
  
  function handleSignIn(params) {
    setiIsAuthanticated(true)
  }
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
        <Menu.Item name="home"/>
        <Menu.Item name="messages"/>

        <Menu.Menu position="right">
         <CartSummary/>
         {isAuthanticated?<SignedIn signOut={handleSignOut}/>
         :<SignetOut signIn={handleSignIn}/>}  
        </Menu.Menu>
        </Container> 
      </Menu>
    </div>
  );
}
