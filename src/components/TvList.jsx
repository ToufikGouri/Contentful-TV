import React, { useEffect, useState } from 'react'
import { createClient } from 'contentful'
import styled from 'styled-components'
import TvCard from "../components/TvCard"

// Styled Components
const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    border: 2px solid;
    width: 80%;
`

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

    console.log(allTvData?.items, "Main");

    return (
        <>
            {/* {allTvData?.items[1].fields.tvName}   */}
            <Wrapper>
                <h1>Here will be the list</h1>

                {allTvData?.items.map(val =>
                    <TvCard key={val.sys.id} fields={val.fields} />
                )}

            </Wrapper>
        </>
    )
}

export default TvList