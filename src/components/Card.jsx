/* eslint-disable */
import React, { useState } from 'react'
import '../assets/Card.scss';
import styled from 'styled-components';
import img  from '../assets/forme.png'
import ReactStars from "react-rating-stars-component";
import Item from './Item';



const Header = styled.div`
     background-color: #a3a3a3;
    border-radius:7px 7px 0 0;
    border:1px solid transparent;
    color:white;
    background:url(${img});

`;

const Main = styled.div`
  padding: 0 1.2rem;
  background: #000;
  background-color: white;

  color:black;
`;

const Text = styled.div`
  padding: 0.5rem 2.5rem 0.5rem 0;
  `;

const Footer = styled.div`
  display:flex;
  flex-flow:column;
  justify-content: space-evently;
  align-items:stretch;

  padding: 1rem 1.2rem;
  background: white;
`;
const Subtitle=styled.h2`
  color:#333;
  font-size:1.3rem;
  margin-bottom:0.8rem;

`
const Action = styled.span`
  color: #a25afc;
  align-self:start;
  text-transform: uppercase;

  padding-top:1.5rem;
  font-weight:800;
  transition: 0.6s 0s ease-in-out;
  
 
  &:hover{
    cursor:pointer;
    transform:scale(1.1);
    font-weight:900;
  }
`

const Note = styled.span`
  color: gray;
  position:relative;
  top:-0.7rem;
  margin:0 1rem;
`

const Pline = styled.div`
  margin-top:1rem;
  padding:0;
  border-bottom: 1px solid #666;
`
const Star=styled.span`
color:orangered;
`
const ItemList=styled.div`
  display:flex;
  flex-flow:row wrap;
  justify-content: center;
  justify-items: center;
`

const Card = () => {

const[currentStar, setCurrentStar] = useState(3);
const [averageStar, setAverageStar] = useState(3);
const [countnb, setCountnb] = useState(1);

 
  const ratingChanged = (newRating) => {
    const moyenne = (countnb * averageStar + newRating) /( countnb+1)
    // console.log(countnb, newRating, moyenne,averageStar);
    setCurrentStar(newRating);
    setAverageStar(moyenne)
    setCountnb(countnb+1);
  };

  return (

    <div className="card__container b1">
      <div className="grid__container">
        <Header className="header"/>
        <Main className="main">
          <h1>Title</h1>
          <ReactStars 
              className="react-stars-wrapper inline-flex"
            count={5}
            onChange={ratingChanged}
            size={28}
            isHalf={true}
            display="inline-block"
            activeColor="#ffd700"
          />
          <Note>{(averageStar).toFixed(2)} ({countnb}) </Note>
          <h2>Secondary text</h2>
          <Text >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quae tempora tenetur!</p>
          </Text>
          <Pline/>
        </Main>

        <Footer className="footer">
          <Subtitle>SubTitle</Subtitle>
          <ItemList>
            {[1, 2, 3, 4].map((elt, index) => <Item key={index} name={`Item ${index}`} />
            )}
          </ItemList>
        
          <Action>Action 1</Action>
        </Footer>
      </div>
    </div>
  );
}

export default Card