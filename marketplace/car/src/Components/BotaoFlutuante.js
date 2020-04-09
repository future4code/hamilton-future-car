import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import styled from 'styled-components'

const Container = styled.div`
  height: 25vw;
  width: 28vw;
  border-radius: 0%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Span = styled.span`
  font-weight: 700;
`

export default class FloatingActionButtonSize extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        telaComprador:"telacomprador",
        telaVendedor: "telavendedor"
      }
    }


    onClickMudarTela = () => {
      this.props.funcao(this.state.telaComprador)
    }

    onClickMudarTela2 = () => {
      this.props.funcao(this.state.telaVendedor)
    }

  render (){
    
  return (
    <Container>
        <Fab
          variant="extended"
          size="medium"
          color="primary"
          aria-label="add"
          onClick={this.onClickMudarTela}
        >
          <Span>Comprador</Span>
        </Fab>
        <Fab
          variant="extended"
          size="medium"
          color="primary"
          aria-label="add"
          onClick={this.onClickMudarTela2}
        >
          <Span>Vendedor</Span>
        </Fab>
    </Container>
  );
  }

}