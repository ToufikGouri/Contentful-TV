import React, { useEffect, useState } from 'react'
import { createClient } from 'contentful'
import styled from 'styled-components'
import TvCard from "../components/TvCard"

// Styled Components
const Wrapper = styled.section`
    display: flex; 
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 20px; 
    // width: 80%;
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

                {allTvData?.items.map(val =>
                    <TvCard key={val.sys.id} fields={val.fields} />
                )}

            </Wrapper>
        </>
    )
}

export default TvList