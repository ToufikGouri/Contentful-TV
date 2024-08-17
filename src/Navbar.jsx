import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section` 
    height: 60px;
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    top: 0px;
    z-index: 10;
    border-bottom: 1px solid gray;
`
const UL = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style: none; 
    width: 50%;
    font-size: 20px;
`
const LI = styled.li`
    cursor: pointer; 
    padding: 2px 0;
    &:hover {
        color: skyblue;  
    }
`

const Navbar = () => {
    return (
        <>
            <Wrapper>
                <h1>Tv Store</h1>
                <UL>
                    <LI>Home</LI>
                    <LI>About</LI>
                    <LI>Contact</LI>
                    <LI>Orders</LI>
                </UL>
                <h1>Signup</h1>
            </Wrapper>
        </>
    )
}

export default Navbar