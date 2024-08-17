import React from 'react'
import styled from 'styled-components'

// Styled Components
const Wrapper = styled.section` 
    height: 300px;
    width: 80%; 
    background-color: #181818;
    border-radius: 8px;
    overflow: hidden;
    margin: 20px 0px;
`
const Title = styled.h1`
    font-size: 24px;
`

const TvCard = ({ fields }) => {

  const { tvName, tvImage, tvPrice, tvSpecs } = fields

  return (
    <>
      <Wrapper>
        <Title>{tvName}</Title>
      </Wrapper>
    </>
  )
}

export default TvCard