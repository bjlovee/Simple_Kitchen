// AuthPage.js

import SignUpForm from "../../components/SignUpForm/SignUpForm"
import LoginForm from "../../components/LoginForm/LoginForm"
import styled from "styled-components"
import {GiFruitBowl} from "react-icons/gi"


export default function AuthPage(props){
   
    return(
        <main>
            <Logo>
            <GiFruitBowl color="#e27429" /> 
            <h4 className="authLogo">Simple Kitchen</h4>
            </Logo>
            <br/>
            <br/>
            <Form>
            <SignUpForm setUser={props.setUser}/>
            <Vertical />
            <LoginForm setUser={props.setUser}/>
            </Form>
            <img  className="Img" src="/images/food.jpg" alt=""/>
        </main>
    )
}

const Logo = styled.div`
display: flex;
justify-content: start;
text-decoration: none;
font-size 2.5rem;
font-weight 400;
font-family: 'Lobster Two', cursive;
color:white;
`

const Form = styled.div`
display: flex;
color: #e27429;
    height:200px;
    font-size:14pt;
    height:200px;
    font-size:14pt;
}
`

const Vertical = styled.div`
border-left: 6px solid #e27429;
      height: 320px;
      position:absolute;
      left: 50%;
`
