import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/TextField';
import axios from 'axios';

const styles = theme => ({
    container: {
        marginTop: '20px',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    dense: {
    },
    menu: {
        width: 200,
    },
});

const currencies = [
    
    {
        value: 'financiamento',
        label: 'Financiamento',
    },
    {
        value: 'cartao',
        label: 'Débito/Crédito',
    },
    {
        value: 'deposito',
        label: 'Depósito',
    },
];

const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
margin: auto;

`

const Background = styled.div`
background-color: #f0f1f2;
display: flex;
justify-content: center;
align-items: center;
height: 100%;
 `

const Filtro = styled.div`
width: 25%;
height: 80%;
padding: 1vw;
margin: 0vw;
display: flex;
flex-direction: column;
justify-content: space-around;
border-radius: 20px;
box-shadow: 0px 10px 50px rgba(0,0,0,0.1);
background-color: white;
align-items: center;
`

const Text = styled(Input)`
margin-top: 20px;
`

class TextFields extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pagamento: "financiamento",
            nomeDigitado: "",
            emailDigitado: "",
            modeloDigitado: "",
            valorDigitado: "",
            descriçãoDigitado: "",
            prazoDigitado: "",
            aoSalvarBotao: 0
        };
    }

    handleChangePagamento = event => {
        console.log(this.state.pagamento)
        this.setState({ pagamento: event.target.value });
    };

    handleChangeNomeDigitado = event => {
        this.setState({
            nomeDigitado: event.target.value
        }
        )
       
    }

    handleChangeEmailDigitado = event => {
        this.setState({
            emailDigitado: event.target.value
        })
    }

    handleModelo = event => {
        this.setState({
            modeloDigitado: event.target.value
        })
    }

    handleValor = event => {
        this.setState({
            valorDigitado: event.target.value
        })
    }

    handleDescrição = event => {
        this.setState({
            descriçãoDigitado: event.target.value
        })
    }
    handlePrazo = event => {
        this.setState({
            prazoDigitado: event.target.value
        })
    }
    onClickEnviar = event => {
        let body = {
            name: this.state.modeloDigitado,
            description: this.state.descriçãoDigitado,
            price: this.state.valorDigitado,
            paymentMethod: this.state.pagamento,
            shipping: this.state.prazoDigitado
        }
        if (body.name === "" || body.description === "" || body.price <= 0 || body.shipping <= 0) {
            alert("Preencha os campos corretamente")
        } else {
            axios.post("https://us-central1-future-apis.cloudfunctions.net/futureCar/cars", body, {
                headers: {
                    "Content-Type": "application/json"

                }
            }
            ).then(() => {
                alert(" Carro cadastrado com sucesso")
            }).catch(() => {
                alert("err")
            }
            )
            console.log(this.state.pagamento)
        }

    }

    render() {
        const { classes } = this.props;

        return (
            <Background>
                <Container>
                    <Filtro>
                        <h2>Anuncie seu carro</h2>
                        <Text onChange={this.handleChangeNomeDigitado}
                            value={this.state.nomeDigitado} label="Nome do vendedor" variant="outlined" />
                        <Text onChange={this.handleChangeEmailDigitado}
                            value={this.state.emailDigitado} label="Email" variant="outlined" />
                        <Text onChange={this.handleModelo}
                            value={this.state.modeloDigitado} label="Modelo do carro" variant="outlined" />
                        <Text onChange={this.handleValor}
                            value={this.state.valorDigitado} label="Valor do Carro" variant="outlined" />
                        <Text onChange={this.handleDescrição}
                            value={this.state.descriçãoDigitado} label="Descrição do Produto" variant="outlined" />
                        <Text onChange={this.handlePrazo}
                            value={this.state.prazoDigitado} label="Prazo de entrega" type="number" placeholder="Em dias úteis" variant="outlined" />
                        <TextField
                            id="standard-select-currency-native"
                            select
                            className={classes.textField}
                            value={this.state.pagamento}
                            onChange={this.handleChangePagamento}
                            SelectProps={{
                                native: true,
                                MenuProps: {
                                    className: classes.menu,
                                },
                            }}
                            helperText="Escolha seu método de pagamento"
                            margin="normal"
                        >
                            {currencies.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </TextField>

                        <Button onClick={this.onClickEnviar} variant="contained" color="primary">Enviar</Button>

                    </Filtro>


                </Container>
            </Background>
        );
    }
}

TextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);





