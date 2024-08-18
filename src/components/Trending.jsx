import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { client } from '../Home'
import { ArrowRight } from 'lucide-react'

const Wrapper = styled.section` 
    display: flex; 
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px; 
    width: 80%;
    @media (max-width: 768px){
        width: 100%;
        flex-direction: column;
    }
`
const Card = styled.div` 
    height: 300px;
    width: 30%;
    color: white;
    display: flex; 
    flex-direction: column;
    // align-items: center;
    padding-left: 20px;
    justify-content: center;
    transition: all 200ms ease-in-out;
    &:hover {
        scale: 1.05;
    }
    @media (max-width: 768px){ 
        width: 90%;
        margin: 20px 0;
        background-repeat: no-repeat;
        background-size: cover; 
    }
`
const CardContent = styled.div` 
    font-size: 28px;
    font-weight: bold; 
    width: 60%;
`
const CardBtn = styled.button`
    border: 1px solid transparent;
    padding: 12px 0;
    color: white;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 200ms ease-in-out;
    &:hover {
        color: #e73c17;
    }
`

const Trending = () => {

    const [allTrending, setAllTrending] = useState(null)

    useEffect(() => {
        ; (async () => {
            try {
                await client.getEntries({ content_type: "trendingData" })
                    .then((data) => setAllTrending(data))
            } catch (error) {
                console.log(error);
            }
        })()
    }, [setAllTrending]) 


    return (
        <>
            <Wrapper>
                {allTrending?.items.map(val =>
                    <Card key={val.sys.id} style={{ backgroundImage: `url("${val.fields.productImage.fields.file.url}")` }}>
                        <CardContent>
                            <p style={{ fontSize: 16 }}>{val.fields.productDiscount}</p>
                            <p>{val.fields.productTitle}</p>
                            <CardBtn>SHOP NOW <ArrowRight fill='black' height={16} /></CardBtn>
                        </CardContent>
                    </Card>
                )}
            </Wrapper>
        </>
    )
}

export default Trending