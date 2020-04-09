import React from 'react';
import styled from 'styled-components'
import FutureCar from '../imagens/futurecar.png'
import FloatingActionButtonSize from './BotaoFlutuante';



const Container = styled.div`
background-image: url(${props => props.img});
background-repeat: no-repeat;
background-position: top;
width: 100%;
height: 88%;
display: flex;
`

const ContainerButton = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
align-items: center;
justify-content: end;
`

const DivButton = styled.div`
  height: 25vw;
  border-radius: 0%;
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
