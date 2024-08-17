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

const Home = () => {
    return (
        <>
            <Wrapper>
                <TvList />
            </Wrapper>
        </>
    )
}

export default Home