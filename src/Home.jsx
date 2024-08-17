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
const MainTitle = styled.h1`
    text-align: center;
    text-transform: capitalize;
    margin-top: 32px;
`

const Home = () => {
    return (
        <>
            <Wrapper>
                <MainTitle>Out top seller TVs</MainTitle>
                <TvList />
            </Wrapper>
        </>
    )
}

export default Home