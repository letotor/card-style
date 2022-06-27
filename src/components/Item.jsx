/* eslint-disable */
import React from 'react'
import styled from 'styled-components';

const Item = ({name}) => {

    const Item=styled.div`
     color: #333;
     padding:0.4rem 1rem;
     font-weight:500;
     margin:0.3rem;
     background-color:#ebebeb;
     border-radius: 15px;
      opacity:1;
      border:2px solid transparent;
     
  transition: 0.6s 0s cubic-bezier(0.25, 0.1, 0.25, 1);;
     &:hover{
      cursor:pointer;
      color:#ffd700;
      transform : scale(1.1);
      background-color:orangered;
      opacity:0.9;
      border:2px solid #ffd700;
     }
    `

  return (
      <Item>{name}</Item>
  )
}

export default Item;
