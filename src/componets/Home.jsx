import React, { useState } from 'react'
import { useEffect } from 'react'
import Axios from 'axios'
import Coin from './Coin'
import styled from 'styled-components'


const Headingcontainer = styled.div`
    height: 15vh;
    background-color: #212121;
    display: flex;
    justify-content: center;
    align-self: center;
`
const Heading = styled.h1`
    margin-top: 40px;
    font-family: 'Montserrat', sans-serif;
    color: white;
`
const Search = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px;
    
`
const Input =styled.input`
    width: 40vw;
    font-size: 1.2rem;
    margin: 0px 10px;
    color: white;
    background-color: transparent;
    padding: 10px 20px;
   
    
    outline: none;
        border: none;
        border-bottom: 1px solid lightgray;
    &:focus{
        outline: none;
        border: none;
        border-bottom: 1px solid white;
        transition: 1s;
        
    }
`
const Button = styled.button`
    padding: 10px 30px;
    background-color: #0458e9;
    border-radius: 5px; 
    color: white;
    border: none;
    font-size: 1.2rem;
    font-weight: 500;
    &:active{
        background-color: #616060;
    }

    &:hover{
            background-color: #0249c4;
            transition: 0.1s;
            color: #b8b9b9;
            box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
        }
`
const ListContainer = styled.div`
    padding: 0px 80px;
    grid-gap: 30px;
    display: grid;
    grid-template-columns: repeat(3, 1fr );
        
    @media only screen and (max-width: 800px) {
        display: flex;
    flex-direction: column;
    margin-top: 20px;
    padding-top: 20px;
}
    
`

const Home = () => {

    const [list, setList] = useState([])
    const [input, setInput] = useState('')
    useEffect(()=>{
  Axios.get('https://api.coinstats.app/public/v1/coins?skip=0').then((response)=>{
      console.log(response.data);
      setList(response.data.coins);
    })
}, [])

    const filtercoin = list.filter((coin) => {
        return coin.name.toLowerCase().includes(input.toLowerCase())
    })
   
    return (
        <div>
            <Headingcontainer>
                <Heading>Live Crypto pricing</Heading>
            </Headingcontainer>
           <div>
               <Search>
                   <Input type="text" placeholder='Search...' onChange={(e) => setInput(e.target.value)} value={input} />
                   <Button onClick={()=> setInput('')}>Clear</Button>
               </Search>

              <ListContainer  className="list-container">
              {filtercoin.map((coin) => {
                   return <Coin name={coin.name}  key={coin.id} rank={coin.rank } price={coin.price} icon={coin.icon} symbol={coin.symbol} />
               })}
              </ListContainer>
           </div>
           <div>
           {/* {list.map((coin) => {
                   return <Coin name={coin.name} price={coin.price} icon={coin.icon} symbol={coin.symbol} />
               })} */}
           </div>
        </div>
    )
}

export default Home
