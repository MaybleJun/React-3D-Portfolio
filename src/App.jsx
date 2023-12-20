import styled from "styled-components"
import Hero from "./components/Hero"
import About from "./components/About"
import Works from "./components/Works"
import Contacts from "./components/Contacts"

const Container = styled.div`
    height: 100vh;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    overflow-y: auto;
    scrollbar-width: none;
    color: white;
    background: url("./img/b10.jpg");
    &::-webkit-scrollbar{
      display: none;
    }
  `;

function App() {

  return (
    <Container>
      <Hero/>
      <About/>
      <Works/>
      <Contacts/>
    </Container>
  )
}

export default App
