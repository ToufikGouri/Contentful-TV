import { CreditCard, MessageSquareText, PackageOpen, Truck } from 'lucide-react'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
    width: 90%;
    margin: 40px 0;
    display: flex;
    justify-content: space-evenly; 
`
const Card = styled.div`
    // border: 2px solid red; 
    display: flex;
    align-items: center; 
`

const SupportBanner = () => {

    const data = [
        {
            heading: "Support 24/7",
            desc: "Delicated 24/7 Support",
            icon: <MessageSquareText width={40} height={40} color='#e63910' />
        },
        {
            heading: "Easy Returns",
            desc: "Shop With Confidence",
            icon: <PackageOpen width={40} height={40} color='#e63910' />
        },
        {
            heading: "Card Payment",
            desc: "12 Months Installments",
            icon: <CreditCard width={40} height={40} color='#e63910' />
        },
        {
            heading: "Free Shipping",
            desc: "Capped at $50 per order",
            icon: <Truck width={40} height={40} color='#e63910' />
        },
    ]

    return (
        <>
            <Wrapper>

                {data.map((val, ind) =>
                    <Card key={ind}>
                        {val.icon}
                        <div style={{ padding: "20px" }}>
                            <h1 style={{ textTransform: "Uppercase" }}>{val.heading}</h1>
                            <p>{val.desc}</p>
                        </div>
                    </Card>
                )}

            </Wrapper >
        </>
    )
}

export default SupportBanner