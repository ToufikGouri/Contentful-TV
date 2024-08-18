import React, { useEffect, useState } from 'react'
import CategoriesBg from "../assets/Categories_Bg.jpg"
import styled from 'styled-components'
import { client } from '../Home'
import { Zap } from 'lucide-react'

const Wrapper = styled.section`
    height: 450px;
    width: 100%;
    padding: 0 150px;
    position: relative;
    color: white;
    display: flex; 
    // flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: black;
    margin: 80px 0;
    font-weight: bold;
    overflow: hidden;
    background-position: center;
    @media (max-width: 768px){
        justify-content: center;
    }
`
const Heading = styled.h1` 
    font-size: 32px;
    position: absolute;
    top: 60px;
`
const Card = styled.div`
    height: 150px;
    weight: 150px;
    color: white;
    display: flex; 
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    transition: all 200ms ease-in-out;
    &:hover {
        scale: 1.05;
        color: #e73c17;
    }
    @media (max-width: 768px){
        text-align: center;
        margin: 0 40px;
    } 
`

const Categories = () => {

    const [allCategories, setAllCategories] = useState(null)

    useEffect(() => {
        ; (async () => {
            try {
                await client.getEntries({ content_type: "categoriesData" })
                    .then((data) => setAllCategories(data))
            } catch (error) {
                console.log(error);
            }
        })()
    }, [setAllCategories])


    return (
        <>
            <Wrapper style={{ backgroundImage: `url("${CategoriesBg}")` }}>
                <Heading>Top Categories</Heading>
                {allCategories?.items.map(val =>
                    <Card key={val.sys.id}>
                        <img src={val.fields.categoryImage.fields.file.url} alt="Category" height={100} width={100} />
                        <p>{val.fields.categoryName}</p>
                    </Card>
                )}
            </Wrapper>

            <h1 style={{fontSize: 42, margin: 40}}>More Coming Soon<Zap fill='gold' height={40} width={40} />... </h1>
        </>
    )
}

export default Categories