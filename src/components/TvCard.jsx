import React from 'react'
import styled from 'styled-components'

// Styled Components
const Wrapper = styled.section` 
  width: 30%; 
  border-radius: 8px;
  overflow: hidden;
  margin: 20px 0px;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  background-color: white;
`

const SectionImg = styled.section` 
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center; 
`
const Image = styled.img`
  height: 350px;
  width: 350px; 
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
const Title = styled.h1`
  font-size: 20px;
`
const Description = styled.p`
  margin-right: 30px;
`
const Specs = styled.div` 
  font-size: 12px;
  color: gray; 
  margin: 10px 0;
`
const Price = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: green;
`



const TvCard = ({ fields }) => {

  const { tvName, tvDescription, tvImage, tvPrice, tvSpecs } = fields

  return (
    <>
      <Wrapper className='card'>

        <SectionImg>
          <Image src={tvImage?.fields.file.url} alt={tvName} />
        </SectionImg>

        <SectionText>
          <Title>{tvName}</Title>
          <Description>{tvDescription}</Description>
          <Specs>
            <p>Hdmi ports: {tvSpecs?.specs.hdmiPorts} </p>
            <p>Resolution: {tvSpecs?.specs.resolution} </p>
            <p>Screen size: {tvSpecs?.specs.screenSize} </p>
            <p>SmartTV: {tvSpecs?.specs.smartTV ? "Yes" : "No"} </p>
          </Specs>
          <Price>${tvPrice}</Price>
        </SectionText>

      </Wrapper>
    </>
  )
}

export default TvCard