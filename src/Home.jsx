import React, { useEffect, useState } from 'react'
import { createClient } from 'contentful'
import TvList from './components/TvList'
import styled from 'styled-components'
import Hero from './components/Hero'
import SupportBanner from './components/SupportBanner'
import Trending from './components/Trending'
import Categories from './components/Categories'

// Styled Components
const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

// Api keys for client data
const space = import.meta.env.VITE_SPACE
const accessToken = import.meta.env.VITE_ACCESS_TOKEN

// Getting client data
export const client = createClient({
    space,
    accessToken,
})

const Home = () => {

    const [allTvData, setAllTvData] = useState(null)

    useEffect(() => {
        ; (async () => {
            try {
                await client.getEntries({ content_type: "tvData" })
                    .then((data) => setAllTvData(data))
            } catch (error) {
                console.log(error);
            }
        })()
    }, [setAllTvData])

    console.log(allTvData);

    return (
        <>
            <Wrapper>
                <Hero data={allTvData?.items[1].fields} />
                <SupportBanner />
                <Trending />
                <TvList allTvData={allTvData} />
                <Categories />
            </Wrapper>
        </>
    )
}

export default Home