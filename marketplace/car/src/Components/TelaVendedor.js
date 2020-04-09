import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/TextField';
import axios from 'axios';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
});

const currencies = [
    {
        value: 'financiamento',
        label: 'Financiamento'
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

class TextFields extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pagamento: '',
            nomeDigitado: "",
            emailDigitado: "",
            modeloDigitado: "",
            valorDigitado: "",
            descriçãoDigitado: "",
            prazoDigitado: "",
            aoSalvarBotao: 0
        };
    }
    handleChangePagamento = pagamento => event => {
        this.setState({ [pagamento]: event.target.value });
    };
    handleChangeNomeDigitado = event => {
        this.setState({
            nomeDigitado: event.target.value
        }
        )
        console.log(this.state.nomeDigitado)
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
                            onChange={this.handleChangePagamento('pagamento')}
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





// import React from 'react';
// import styled from 'styled-components'
// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import Input from '@material-ui/core/TextField';
// import { withStyles } from '@material-ui/core/styles';
// import axios from 'axios';
// import MenuItem from '@material-ui/core/MenuItem';
// import classNames from 'classnames';

// const styles = theme => ({
//     container: {
//       display: 'flex',
//       flexWrap: 'wrap',
//     },
//     textField: {
//       marginLeft: theme.spacing.unit,
//       marginRight: theme.spacing.unit,
//       width: 200,
//     },
//     dense: {
//       marginTop: 19,
//     },
//     menu: {
//       width: 200,
//     },
//   });

// const Container = styled.div`
// width: 100%;
// height: 88vh;
// display: flex;
// justify-content: center;
// margin: auto;
// `

// const Filtro = styled.div`
// width: 25%;
// height: 85%;
// padding: 1vw;
// margin: 2vw;
// display: flex;
// flex-direction: column;
// justify-content: space-around;
// border-radius: 20px;
// box-shadow: 0px 10px 50px rgba(0,0,0,0.1);
// background-color: white;
// align-items: center;
// `
// const Background = styled.div`
// background-color: #f0f1f2;
// `

// const Text = styled(Input)`
// margin-top: 20px;
// `


// class TelaVendedor extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             nomeDigitado: "",
//             emailDigitado: "",
//             modeloDigitado: "",
//             valorDigitado: "",
//             descriçãoDigitado: "",
//             prazoDigitado: "",
//             pagamentoDigitado: "",
//             aoSalvarBotao: 0
//         }
//     }
//     handleChangeNomeDigitado = event => {
//         this.setState({
//             nomeDigitado: event.target.value
//         }
//         )
//         console.log(this.state.nomeDigitado)
//     }

//     handleChangeEmailDigitado = event => {
//         this.setState({
//             emailDigitado: event.target.value
//         })
//     }

//     handleModelo = event => {
//         this.setState({
//             modeloDigitado: event.target.value
//         })
//     }

//     handleValor = event => {
//         this.setState({
//             valorDigitado: event.target.value
//         })
//     }

//     handleDescrição = event => {
//         this.setState({
//             descriçãoDigitado: event.target.value
//         })
//     }
//     handlePrazo = event => {
//         this.setState({
//             prazoDigitado: event.target.value
//         })
//     }

//     handlePagamento = event => {
//         this.setState({
//             pagamentoDigitado: event.target.value
//         })
//     }

//     onClickEnviar = event => {
//         let body = {
//             name: this.state.modeloDigitado,
//             description: this.state.descriçãoDigitado,
//             price: this.state.valorDigitado,
//             paymentMethod: this.state.pagamentoDigitado,
//             shipping: this.state.prazoDigitado
//         }
//         axios.post("https://us-central1-future-apis.cloudfunctions.net/futureCar/cars", body, {
//             headers: {
//                 "Content-Type": "application/json"

//             }
//         }
//         ).then(() => {
//             alert(" Carro cadastrado com sucesso")
//         }).catch(() => {
//             alert("err")
//         }
//         )
//     }

//     render() {
//         const pagamentos = [
//             {
//                 value: 'financiamento',
//                 label: 'Financiamento'
//             },
//             {
//                 value: 'cartao',
//                 label: 'Débito/Crédito',
//             },
//             {
//                 value: 'deposito',
//                 label: 'Depósito',
//             }
//         ]
//         return (
//             <Background>
//                 <Container>
//                     <Filtro>
//                         <h2>Anuncie seu carro</h2>
//                         <Text onChange={this.handleChangeNomeDigitado}
//                             value={this.state.nomeDigitado} label="Nome do vendedor" variant="outlined" />
//                         <Text onChange={this.handleChangeEmailDigitado}
//                             value={this.state.emailDigitado} label="Email" variant="outlined" />
//                         <Text onChange={this.handleModelo}
//                             value={this.state.modeloDigitado} label="Modelo do carro" variant="outlined" />
//                         <Text onChange={this.handleValor}
//                             value={this.state.valorDigitado} label="Valor do Carro" variant="outlined" />
//                         <Text onChange={this.handleDescrição}
//                             value={this.state.descriçãoDigitado} label="Descrição do Produto" variant="outlined" />
//                         <Text onChange={this.handlePrazo}
//                             value={this.state.prazoDigitado} label="Prazo de entrega" type="number" placeholder="Em dias úteis" variant="outlined" />
//                         <Text onChange={this.handlePagamento}
//                             value={this.state.pagamentoDigitado} label="Pagamento" variant="outlined" />
//                         <Button onClick={this.onClickEnviar} variant="contained" color="primary">Enviar</Button>
//                         <Text
//                             id="standard-select-currency-native"
//                             select
//                             label="Método de pagamento"
//                             className={classes.textField}
//                             value={this.state.currency}
//                             onChange={this.handleChange('currency')}
//                             SelectProps={{
//                                 native: true,
//                                 MenuProps: {
//                                     className: classes.menu,
//                                 },
//                             }}

//                             helperText="Please select your currency"
//                             margin="normal"
//                         >
//                             {pagamentos.map(option => (
//                                 <option key={option.value} value={option.value}>
//                                     {option.label}
//                                 </option>
//                             ))}
//                         </Text>
//                     </Filtro>
//                 </Container>
//             </Background>
//         )
//     }
// }







//   export default TelaVendedor;


