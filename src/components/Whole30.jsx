import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import { Link } from 'react-router-dom'

function Whole30 () {
  const [Whole30, setWhole30] = useState([])

  useEffect(() => {
    getWhole30();
  }, [])

  const getWhole30 = async () => {
    const check = localStorage.getItem('whole30')

    if (check) {
      setWhole30(JSON.parse(check))
    } else {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=whole30`)
      const data = await api.json()

      localStorage.setItem('whole30', JSON.stringify(data.recipes))
      setWhole30(data.recipes)
      console.log(data.recipes)
    }
  }

  return (
    <div>
      <Wrapper>
        <h3>Whole30 LifeStyle</h3>

        <Splide options={{
          perPage: 3,
          // arrows: false,
          pagination: false,
          drag: 'free',
          gap: '5rem '
        }}
        >
          {Whole30.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <Link to={'/recipe/' + recipe.id}>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt='recipe.title' />
                    <Gradient />
                  </Link>
                </Card>
              </SplideSlide>
            )
          })}
        </Splide>
      </Wrapper>
    </div>
  )
}
const Wrapper = styled.div`
margin: 4rem 0rem;
`

const Card = styled.div`
min-height: 25rem;
border-radius: 2rem;
overflow: hidden;
position: relative;
    img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
 }
p{
    position: absolute;
    z-index: 1;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
   text-align: center;
   font-weight: 600;
   font-size: 1rem;
   height: 40%;
   display flex;
   align-items: center;
}
`

const Gradient = styled.div`
// z-index: 3;
position: absolute;
width: 100%;
height: 100%;
background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`

export default Whole30
