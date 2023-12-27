import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
    display: flex;
    justify-content: center;
  `;
const Container = styled.div`
    width: 1400px;
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
`;
const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;
const Logo = styled.img`
    height: 40px;
`;
const List = styled.ul`
    display: flex;
    list-style: none;
    gap: 20px;
`;
const ListItem = styled.li`
`;
const Icons = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;
const Icon = styled.img`
    height: 20px;
    cursor: pointer;
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

const Navbar = () => {
    return (
        <Section>
            <Container>
                <Links>
                    <Logo src="./img/logoM.png"/>
                    <List>
                        <ListItem>Home</ListItem>
                        <ListItem>Studio</ListItem>
                        <ListItem>Works</ListItem>
                        <ListItem>Contacts</ListItem>
                    </List>
                </Links>
                <Icons>
                    <Icon src="./img/search.png"/>
                    <Button>Hire Now</Button>
                </Icons>
            </Container>
        </Section>
    )
}

export default Navbar