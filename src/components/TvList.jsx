import React, { useEffect, useState } from 'react'
import { createClient } from 'contentful'
import styled from 'styled-components'
import TvCard from "../components/TvCard"
import Banner from './Banner'

// Styled Components
const Wrapper = styled.section`
    display: flex; 
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px; 
    width: 80%;
`
const Title = styled.h1`
    font-size: 32px; 
    margin: 30px 0px; 
    text-align: center;
    line-height: 50px;
    width: 100%;
`

// Main Component
const TvList = () => {

    // Api keys for client data
    const space = import.meta.env.VITE_SPACE
    const accessToken = import.meta.env.VITE_ACCESS_TOKEN

    // Getting client data
    const client = createClient({
        space,
        accessToken,
    })

    const [allTvData, setAllTvData] = useState(null)

    // For random banner data (0-5)
    const randomInd = () => Math.floor(Math.random() * 6)
    const randomBannerTitle = ["Experience a New Era of", "Presenting our all new", "Introducing the Revolutionary", "Experience Unmatched Quality with", "Unveiling the Latest", "Discover the Future with"]

    useEffect(() => {
        ; (async () => {
            await client.getEntries().then((data) => setAllTvData(data))
        })()
    }, [setAllTvData])

    console.log(allTvData);



    return (
        <>
            {/* {allTvData?.items[1].fields.tvName}   */}
            <Wrapper>

                {allTvData && <Banner heroTitle={randomBannerTitle[randomInd()]} fields={allTvData.items[randomInd()].fields} />}

                <Title>Browse All Available TVs on Sale</Title>

                {allTvData?.items.map(val =>
                    <TvCard key={val.sys.id} fields={val.fields} />
                )}

            </Wrapper>
        </>
    )
}

export default TvList