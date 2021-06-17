import React from 'react'
import styled from 'styled-components'

function CardComponent({post}) {
   
    return (
        <Card>
            <ImageContainer>
                <Image src={post.image} alt='' />
            </ImageContainer>
            <Details> 
            <Name> 
                {post.name}
            </Name>
            <Price>
                {`$${post.Price}`}
            </Price>
            </Details>
          
            <Description>
               {post.description}
            </Description>
        </Card>
    )
}

export default CardComponent

const ImageContainer = styled.div`
width: 100%;
height: 20rem;
`

const Card = styled.div`
width: 20rem;
height: 35rem;
margin: 15px;
border-radius: 10px;
background-color: #FFFFFF;
box-shadow: 0 0 0 1px rgb(63 63 68 / 5%), 0 1px 3px 0 rgb(63 63 68 / 15%);
transition: all .3s;
&:hover ${ImageContainer} {
transform: scale(1.02);
}
`

// const ImageContainer = styled.div`
// width: 100%;
// height: 20rem;
// `

const Image = styled.img`
height: 100%;
object-fit: cover;
width: 100%;

`
const Details = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 5px;
border-bottom: 1px solid #eeeeee;
`

const Name = styled.h3`
text-transform: capitalize;

`
const Description = styled.p`
padding: 0 5px;
padding-bottom: 20px;
text-transform: capitalize;



`

const Price = styled.p`

` 