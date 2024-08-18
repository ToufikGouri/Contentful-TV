import { ShoppingCart } from 'lucide-react'
import React from 'react'
import styled from 'styled-components'

// Styled Components
const Wrapper = styled.section` 
  width: 28%; 
  border-radius: 8px;
  overflow: hidden;
  margin: 20px;
  padding: 0px 10px;
  display: flex;
  flex-direction: column;
  background-color: #f2f2f2;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  box-shadow: 0px 2px 10px -6px black;
  &:hover{
    scale: 1.05;
    box-shadow: 0px 2px 10px -2px black;
  }
  @media (max-width: 768px){ 
    width: 100%;
    margin: 20px 0;
  }
  @media (min-width: 769px) and (max-width: 1024px){
    width: 40%;
    margin: 20px 0;
  }
`

const SectionImg = styled.section` 
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Image = styled.img`
  height: 250px;
  width: 250px; 
  object-fit: contain;
`

const SectionText = styled.section` 
  width: 100%;
  margin-left: 10px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
const Title = styled.p`
  font-size: 20px;
`
const Description = styled.p`
  margin-right: 30px;
`
const Specs = styled.div` 
  font-size: 14px;
  color: gray; 
  margin: 10px 0;
`
const Price = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: green;
`
const CardBtn = styled.button`  
    width: 95%;
    margin: auto;
    margin-bottom: 20px;
    padding: 12px 10px; 
    background-color: transparent;
    border: 1px solid black;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 200ms ease-in-out;
    &:hover {
        color: white;
        background-color: black;
    }
`


const TvCard = ({ fields }) => {

  const { tvName, tvDescription, tvImage, tvPrice, tvSpecs } = fields

  return (
    <>
      <Wrapper>

        <SectionImg>
          <Image src={tvImage?.fields.file.url} alt={tvName} />
        </SectionImg>

        <SectionText>
          <Title>{tvName}</Title>
          {/* <Description>{tvDescription}</Description> */}
          <Specs>
            <p>{tvSpecs?.specs.hdmiPorts} Hdmi ports . {tvSpecs?.specs.resolution}</p>
            <p>{tvSpecs?.specs.screenSize} . {tvSpecs?.specs.smartTV ? "SmartTV" : "No"} </p>
          </Specs>
          <Price>${tvPrice}</Price>
        </SectionText>
        <CardBtn>Add To Cart <ShoppingCart height={16} /></CardBtn>

      </Wrapper>
    </>
  )
}

export default TvCard