import {GoSignOut} from 'react-icons/go'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import AuthPage from '../pages/AuthPage/AuthPage'



function SignOut({setUser}) {
    function handleClick() {
        setUser(null)
    }

  return (
    <div>
        <SignoutStyle onClick={handleClick}>
        <GoSignOut color='#e27429'/>
        </SignoutStyle>
    </div>
  )
}

const SignoutStyle = styled(Link)`
font-size: 3rem;
position:absolute;
top: 2rem;
right: 1rem;

`

export default SignOut