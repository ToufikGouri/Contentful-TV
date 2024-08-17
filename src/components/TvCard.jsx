import React from 'react'
import styled from 'styled-components'

// Styled Components
const Wrapper = styled.section` 
  width: 40%; 
  border-radius: 8px;
  overflow: hidden;
  margin: 20px 0px;
  padding: 0 10px;
  display: flex;
`

const SectionImg = styled.section` 
  width: 45%;
`
const Image = styled.img`
  height: 250px;
  width: 250px; 
  object-fit: contain;
`

const SectionText = styled.section` 
  width: 100%;
  margin-left: 10px;
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
`
const Price = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: green;
`



const TvCard = ({ fields }) => {

  const { tvName, tvDescription, tvImage, tvPrice, tvSpecs } = fields

  // Specs: tvSpecs.specs.(hdmiPorts | resolution | screenSize | smartTV)

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