import React from 'react';
import styled from 'styled-components'


const DivButton = styled.div`
  height: 100px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px orange;
  margin: auto;
  
`
const Container = styled.div`
width: 100%;
height: 88%;
border: solid 1px red;
display: flex;

`




class LandingPage extends React.Component {
  

  render(){
    
    
    return (
      <Container>
          <DivButton>
          <button>Comprador</button>
          <button>Vendedor</button>
          </DivButton>
      </Container>
     
    );
  }

  }
  

export default LandingPage;
