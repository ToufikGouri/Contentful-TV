import React from 'react'
import CT_Logo from "../public/CT_Logo.png"
import styled from 'styled-components'
import { LogIn, Menu, ShoppingCart } from 'lucide-react'

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
    justify-content: space-around;
    list-style: none; 
    width: 40%;
    text-transform: Uppercase;
    font-weight: 500;
    @media (max-width: 769px){
        border: 2px solid red;
        display: none;
    }    
`
const LI = styled.li`
    cursor: pointer; 
    padding: 2px 0;
    display: flex; 
    align-items: center; 
    &:hover {
        color: #e73c17;  
    }  
`
const MenuBtn = styled.div`
    display: none;
    @media (max-width: 769px){
    display: block;
  }
`

const Navbar = () => {
    return (
        <>
            <Wrapper>
                <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                    <img src={CT_Logo} alt="CT" height={30} />
                    <h1 style={{ margin: "0 5px" }}>Contentful TV</h1>
                </div>
                <UL>
                    <LI style={{ color: "#e73c17" }}>Home</LI>
                    <LI>About</LI>
                    <LI>Shop</LI>
                    <LI>Contact</LI>
                    <LI>Orders <ShoppingCart height={16} /> </LI>
                    <LI>Login <LogIn height={16} /> </LI>
                </UL>
                {/* For mobile screen > 768px */}
                <MenuBtn>
                    <Menu />
                </MenuBtn>
            </Wrapper>
        </>
    )
}

export default Navbar