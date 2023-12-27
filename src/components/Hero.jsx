import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  `;

const Container = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    width: 1400px;
    display: flex;
    justify-content: space-between;
`;
const Left = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
`;
const Right = styled.div`
    flex: 3;
    position: relative;
`;

const Title = styled.h2`
    font-size: 74px;
    color: #0BDFF5;
`;

const Who = styled.h3`
    font-size: 34px;
`;
const Color = styled.h3`
    font-size: 34px;
    color: #F560E9;
`;
const Discription = styled.p`
    font-size: 20px;
`;
const Button = styled.button`
    cursor: pointer;
    width: 100px;
    padding: 10px;
    background-color:  #a301ac;
    color: white;
    border: none;
    border-radius: 4px;
`;

const Img = styled.img`
    height: 500px;
    object-fit: contain;
    position: absolute;
    top: 0;
    bottom:0;
    right: 0;
    left: 0;
    margin: auto;
`;

const Hero = () =>{
    return (
        <Section>
            <Navbar/> 
            <Container>
                <Left>
                    <Title>Hello</Title>
                    <Who>I'm <Color>Anastasiia,</Color>Frontend Developer</Who>
                    <Discription>I design and code beautifully simple things, and I love what I do.</Discription>
                    <Button>Hello</Button>    
                </Left> 
                <Right>
                    {/*3D model*/}
                    <Img src="./img/HeroMable.png"/>
                </Right>           
            </Container>
        </Section>
    )
}

export default Hero
