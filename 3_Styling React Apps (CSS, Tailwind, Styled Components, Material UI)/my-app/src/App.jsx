import './App.css'
import Header from './Header'
import Footer from './Footer'
import styled from "styled-components";

const Button = styled.button`
  background-color: purple;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: darkviolet;
  }
`;

function App() {

  return (
    <>
      <Header />
      <Footer />
      <Button>Click Me (Styled Components)</Button>
      
    </>
  )
}

export default App
