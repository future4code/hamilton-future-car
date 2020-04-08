import React from 'react';
import styled, { ThemeConsumer } from 'styled-components'
import Cartao from './Cartao';


const Container = styled.div`
width: 100%;
height: 88vh;
display: flex;
`

const Filtro = styled.div`
width: 25%;
height: 85%;
padding: 2vw;
margin: 2vw;
display: flex;
flex-direction: column;
justify-content: center;
border: solid 1px purple;
align-items: center;
`

const Catalogo = styled.div`
width: 68%;
height: 85%;
margin: 2vw;
padding: 2vw;

`


class TelaComprador extends React.Component{
    render(){
        return(
            <Container>
                <Filtro>
                    <input placeholder="Nome"></input>
                    <input placeholder="preço Minímo"></input>
                    <input placeholder="preço Máximo"></input>
                    <button>Filtrar</button>
                </Filtro>
                <Catalogo>
                    <Cartao 
                    nome={this.props.nome}
                    preco={this.props.preco}
                    />
                    
                </Catalogo>
            </Container>
        )
    }
}

export default TelaComprador