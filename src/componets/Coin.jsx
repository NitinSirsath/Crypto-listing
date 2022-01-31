import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
     box-shadow: 0 3px 10px rgb(0 0 0 / 0.3);
     padding: 10px;
     border-radius: 8px;
     display: flex;
     justify-content: center;
     flex-direction: column;
     background-color: #0458e9;
     font-weight: 600;
     color: white;
     
        &:hover{
            background-color: #0249c4;
            transition: 0.1s;
            box-shadow: 3px 3px 4px 1px rgba(0, 0, 0, 0.2);
            color: #b8b9b9;
        }
`
const Img = styled.div`
    display: flex;
    justify-content: center;
`
 const Price =styled.p`
     text-align: center;
 `
const Heading = styled.h1`

text-align: center;
`


const Coin = ({name,icon,price,symbol,id,rank}) => {
    return (
        <Container >
            <Heading >{name}</Heading>
            <Img>
            <img src={icon} height={80} alt={name} />
            </Img>
            {/* <Rank>Rank #{rank}</Rank> */}
            <Price>#{rank} {symbol}</Price>
            <Price>${price}</Price>
        </Container>
    )
}

export default Coin
