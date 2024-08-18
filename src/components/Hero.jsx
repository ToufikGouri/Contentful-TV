import { ArrowRight } from 'lucide-react'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section` 
    height: 100vh;
    width: 100%;
    background-color: black;
    color: white;
    display: flex; 
    justify-content: center;
    align-items: center;
    @media (max-width: 768px){
        flex-direction: column;
    }
`

const SectionImg = styled.section` 
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center; 
    @media (max-width: 768px){
        width: 100%;
        justify-content: center;
        align-items: start; 
    }
`
const Image = styled.img`
    height: 550px;
    width: 550px; 
    object-fit: contain;
    @media (max-width: 1024px){ 
        height: 300px;
        width: 300px; 
    }
`

const SectionText = styled.section` 
    height: 100%;
    width: 50%; 
    padding: 0 9rem;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: right;
    @media (max-width: 768px){ 
        width: 100%;
        padding: 0;
        text-align: center;
        justify-content: end;
    } 
`
const HeroPara = styled.p`
    width: 100%;
    font-size: 20px;  
    font-weight: bold;
    @media (max-width: 768px){ 
        font-size: 16px;
    }
`
const HeroTitle = styled.h1`
    width: 100%;
    font-size: 58px; 
    margin: 20px 0;
    @media (max-width: 1024px){
        font-size: 38px;
    }
`
const HeroBtn = styled.button`
    width: 30%;
    padding: 12px 0;
    font-size: 16px;   
    align-self: start;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 200ms ease-in-out;
    &:hover {
        color: white;
        background-color: #e73c17;
        }
    @media (max-width: 768px){
        align-self: center;
        width: 40%;
    }
`

const Hero = ({ data }) => {

    return (
        <>
            <Wrapper>
                <SectionText>
                    <HeroPara>
                        {data?.tvSpecs.specs.screenSize} .&nbsp;
                        {data?.tvSpecs.specs.resolution}
                    </HeroPara>
                    <HeroTitle>Wide & Thin Next Generation Smart TV's</HeroTitle>
                    <HeroBtn>Shop Now <ArrowRight fill='black' height={16} /> </HeroBtn>
                </SectionText>
                <SectionImg>
                    <Image src={data?.tvImage?.fields.file.url} alt={data?.tvName} />
                </SectionImg>
            </Wrapper>
        </>
    )
}

export default Hero