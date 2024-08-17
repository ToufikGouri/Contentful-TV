import React from 'react'
import styled from 'styled-components'

// Styled Components
const Wrapper = styled.section` 
    width: 100%;
    height: 300px;
    margin-top: 50px;
    padding: 0 10px;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    cursor: pointer;
    background: rgb(255,255,255);
    background: linear-gradient(45deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 0%, rgba(0,255,196,0.1601890756302521) 100%);
`

const SectionImg = styled.section` 
  width: 50%;
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
  display: flex;
  flex-direction: column;
  justify-content: space-around; 
`
const Title = styled.h1`
  font-size: 32px;
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


const Banner = ({ fields, heroTitle }) => {

    const { tvName, tvDescription, tvImage, tvPrice, tvSpecs } = fields

    return (
        <>
            <Wrapper>

                <SectionImg>
                    <Image src={tvImage?.fields.file.url} alt={tvName} />
                </SectionImg>

                <SectionText>
                    <Title>{heroTitle} {tvName}</Title>
                    <Description>{tvDescription} <br /> With {tvSpecs?.specs.hdmiPorts} Hdmi Ports & an impressive {tvSpecs?.specs.resolution} Screen. </Description>
                    <div>
                        Starting only from
                        <Price>${tvPrice}</Price>
                    </div>
                </SectionText>
            </Wrapper>
        </>
    )
}

export default Banner