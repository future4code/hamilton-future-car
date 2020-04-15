import React from 'react';
import styled from 'styled-components'
import FutureCar from '../imagens/futurecar.png'
import FloatingActionButtonSize from './BotaoFlutuante';


const Container = styled.div`
background-image: url(${props => props.img});
background-repeat: no-repeat;
background-position: top;
background-size: auto 35%;
width: 100%;
height: 88vh;
display: flex;
align-items: flex-end;
justify-content: center;
margin: 15px 0;
`

const ContainerButton = styled.div`
display: flex;
flex-direction: column;
width: 20%;
height: 50%;
align-items: flex-end;
`

const DivButton = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

class LandingPage extends React.Component {
  
  render(){
    
    return (
      <Container img={FutureCar}>
        <ContainerButton>
        <DivButton>
          <FloatingActionButtonSize
          funcao = {this.props.funcao2}
          />
        </DivButton>
        </ContainerButton>
      </Container>
    );
  }
  }
  

export default LandingPage;
