import React from 'react'
import TvList from './components/TvList'
import styled from 'styled-components'

// Styled Components
const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Title = styled.h1`
    font-size: 48px; 
    margin: 30px 0px; 
    text-align: center;
    line-height: 50px;
`

const Home = () => {
    return (
        <>
            <Wrapper>
                <Title>THE BEST DEALS <br /> IN THIS SEASON</Title>
                <TvList />
            </Wrapper>
        </>
    )
}

export default Home