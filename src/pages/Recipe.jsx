import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import StarRating from '../components/StarRating'

function Recipe () {
  const params = useParams()
  const [details, setDtails] = useState({})
  const [activeTab, setActiveTab] = useState('instructions')
  const [rating, setRating] = useState(0)

  const fetchDetails = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
    const detailData = await data.json()
    setDtails(detailData)
  }

  useEffect(() => {
    fetchDetails()
  }, [params.name])

  return (
    <DetailWrapper>
      <div>
        <StarRating />
        <br />
        <h2>{details.title}</h2>
        <img src={details.image} alt='' />
      </div>
      <Info>
        <Button
          className={activeTab === 'instructions' ? 'active' : ''}
          onClick={() => setActiveTab('instructions')}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === 'ingredients' ? 'active' : ''}
          onClick={() => setActiveTab('ingredients')}
        >
          Ingredients
        </Button>
        {activeTab === 'instructions' && (
          <diV>
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }} />
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }} />
          </diV>
        )}
        {activeTab === 'ingredients' && (
          <ul>
            {details.extendedIngredients.map((ingredients) =>
              <li key={ingredients.id}>{ingredients.original}</li>
            )}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
margin-top: 10rem;
margin-bottom: 2rem;
display: flex;
.active{
    background: linear-gradient(35deg, #e27429, #313131);
    color: white;
}
h2 {
  color: white;
    margin-bottom: 2rem;
}
li {
    font-size: 1.2rem;
    line-height: 2.4rem;
}
ul {
    margin-top: 2rem;
}

`

const Button = styled.button`
padding: 1rem 2rem;
color: white;
background: #494949;
border: 2px solid black;
 margin-right 2rem;
 font-weight: 600;
 margin-top: 1rem; 
`

const Info = styled.div`
    margin-left 10rem;
`

export default Recipe
