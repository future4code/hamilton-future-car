import React from 'react';
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/TextField';
import { withStyles} from '@material-ui/core/styles';

const Container = styled.div`
width: 100%;
height: 88vh;
display: flex;
justify-content: center;
margin: auto;
`

const Filtro = styled.div`
width: 25%;
height: 85%;
padding: 1vw;
margin: 2vw;
display: flex;
flex-direction: column;
justify-content: space-around;
border-radius: 20px;
box-shadow: 0px 10px 50px rgba(0,0,0,0.1);
background-color: white;
align-items: center;
`
const Background = styled.div`
background-color: #f0f1f2;
`

const Text = styled(Input)`
margin-top: 20px;
`

   
class TelaVendedor extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            nomeDigitado: "",
            email: "",
            aoSalvarBotao: 0
        }
    }
    handleChangeNomeDigitado = event => {
        this.setState({
           nomeDigitado: event.target.value
        }
        )
        console.log(this.state.nomeDigitado)
    }
    
    render(){
        return(
            <Background>
            <Container>
                <Filtro>
                    <h2>Anuncie seu carro</h2>
                    <Text onChange={this.handleChangeNomeDigitado} value={this.state.nomeDigitado}label="Nome do vendedor" variant="outlined" />
                    <Text label="Email" variant="outlined" />
                    <Text label="Modelo do carro" variant="outlined" />
                    <Text label="Valor do Carro" variant="outlined" />
                    <Text label="Descrição do Produto" variant="outlined" />
                    <Text label="Prazo de entrega" variant="outlined" />
                    <Text label="Pagamento" variant="outlined" />
                    <Button variant="contained" color="primary">Enviar</Button>
                </Filtro>
            </Container>
            </Background>
        )
    }
}








export default TelaVendedor