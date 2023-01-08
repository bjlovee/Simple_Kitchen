import Pages from './pages/Pages'
import AuthPage from './pages/AuthPage/AuthPage'
import Catagory from './components/Catagory'
import { BrowserRouter, Link } from 'react-router-dom'
import Search from './components/Search'
import styled from 'styled-components'
import { GiFruitBowl } from 'react-icons/gi'
import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'

function App () {
  const [state, setState] = useState(null)
  const [user, setUser] = useState(null)

  const fetchState = async () => {
    try {
      const response = await fetch('/api/test')
      const data = await response.json()
      setState(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchState()
  }, [])

  return (
    <div className='App'>
      <Helmet>
        <meta charSet='utf-8' />
        <title>simple-kitchen</title>
        <link rel='canonical' href='http://mysite.com/example' />
        <meta name='description' content='Helmet application' />
      </Helmet>
      {
        user
          ? <>
            <BrowserRouter>
              <Nav>
                <GiFruitBowl color='#e27429' />
                <Logo  to='/'>Simple Kitchen</Logo>
              </Nav>
              <Search />
              <Catagory />
              <Pages />
            </BrowserRouter>
          </>
          : <AuthPage setUser={setUser} />
      }

    </div>
  )
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size 2.0rem;
  font-weight 400;
  font-family: 'Lobster Two', cursive;
  color:white;
`

const Nav = styled.div`
padding: 4rem  0rem;
display: flex;
justify-content: flex-start;
align-items: center;
svg{
  font-size: 2.5rem;
}
`

export default App
