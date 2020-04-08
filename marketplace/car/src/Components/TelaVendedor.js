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
padding: 2vw;
margin: 2vw;
display: flex;
flex-direction: column;
justify-content: center;
border: solid 1px purple;
align-items: center;
`

const Text = styled.input`
padding: 20px;
margin: 20px;
`

//     handleChange = event => {
//     const conteudoDigitado = event.target.name
//     this.setState({
//         nomeDigitado: conteudoDigitado
//     }
//     )
// }

class TelaVendedor extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            nome: "",
            email: "",
            aoSalvarBotao: 0
        }
    }
    render(){
        return(
            <Container>
                <Filtro>
                    <h2>Anuncie seu carro</h2>
                    <Input onChange={this.handleChange} value={this.state.value}label="Nome do vendedor" variant="outlined" />
                    <Input label="Email" variant="outlined" />
                    <Input label="Modelo do carro" variant="outlined" />
                    <Input label="Valor do Carro" variant="outlined" />
                    <Input label="Descrição do Produto" variant="outlined" />
                    <Input label="Prazo de entrega" variant="outlined" />
                    <Input label="Pagamento" variant="outlined" />
                    <Button variant="contained" color="primary">Enviar</Button>
                </Filtro>
            </Container>
        )
    }
}








export default TelaVendedor