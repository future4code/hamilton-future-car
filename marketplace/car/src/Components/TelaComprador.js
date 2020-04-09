import React from 'react';
import styled, { ThemeConsumer } from 'styled-components';
import PropTypes from 'prop-types';
import Cartao from './Cartao';
import axios from "axios";
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';




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
        value: 'todos',
        label: '-',
    },

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

const Text = styled(Input)`
margin-top: 20px;
`


const Container = styled.div`
width: 100%;
display: flex;
align-items: flex-start;
justify-content: space-evenly;

`

const FiltroDois = styled.div`
width: 25%;
padding: 8vw 0;
margin: 2vw;
display: flex;
flex-direction: column;
justify-content: center;
border-radius: 20px;
box-shadow: 0px 10px 50px rgba(0,0,0,0.1);
background-color: white;
align-items: center;
`

const Catalogo = styled.div`
    display:grid;
    grid-template-rows: repeat(2, 18vw);
    grid-template-columns: repeat(3, 18vw);
    width: 60%;
    grid-gap: 4vw 0; 
  
`

class TextFields extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            produtos: [
            ],
            inputNome: "",
            inputMin: null,
            inputMax: Infinity,
            inputEntrega: Infinity,
            metodoPagamento: "todos"
        }
    }

    

    componentDidMount() {
        axios.get("https://us-central1-future-apis.cloudfunctions.net/futureCar/cars")
            .then(res => {

                this.setState({ produtos: res.data.cars })
            }).catch(err => {
                console.log(err)
            })
    }


    onChangeNome = (e) => {
        this.setState({ inputNome: e.target.value })
    }

    onChangeMin = (e) => {
        if (e.target.value === "") {
            this.setState({ inputMin: null })
        }
        else {
            this.setState({ inputMin: e.target.value })
        }

    }

    onChangeMax = (e) => {
        if (e.target.value === "") {
            this.setState({ inputMax: Infinity })
        }
        else {
            this.setState({ inputMax: e.target.value })
        }
    }

    onChangeEntrega = (e) => {
        if (e.target.value === "") {
            this.setState({ inputEntrega: Infinity })
        }
        else {
            this.setState({ inputEntrega: e.target.value })
        }
    }

    onChangePagamento = (e) => {
        this.setState({ metodoPagamento: e.target.value })
    }

   

    render() {
        const { classes } = this.props;

        const produtosFiltrados = this.state.produtos.filter(produtos => {
            if (this.state.metodoPagamento !== "todos") {
                return produtos.price >= this.state.inputMin && produtos.price <= this.state.inputMax && produtos.name.includes(this.state.inputNome)
                    && produtos.shipping <= this.state.inputEntrega && produtos.paymentMethod === this.state.metodoPagamento
            }
            else {
                return produtos.price >= this.state.inputMin && produtos.price <= this.state.inputMax && produtos.name.includes(this.state.inputNome)
                    && produtos.shipping <= this.state.inputEntrega
            }
        }).sort((a, b) => {
            return a.price - b.price
        })

        return (
            
            <Container>
                <FiltroDois>
                    <h2>Filtro de Venda</h2>
                    <Text variant="outlined" placeholder="Nome" value={this.state.inputNome} onChange={this.onChangeNome}></Text>
                    <Text variant="outlined" placeholder="Preço Minímo" value={this.state.inputMin} onChange={this.onChangeMin} type="number"></Text>
                    <Text variant="outlined" placeholder="Preço Máximo" value={this.state.inputMax} onChange={this.onChangeMax} type="number"></Text>
                    <Text variant="outlined" placeholder="Tempo de entrega (dias)" value={this.state.inputEntrega} onChange={this.onChangeEntrega} type="number"></Text>
                    <TextField
                        id="standard-select-currency-native"
                        select

                        className={classes.textField}
                        value={this.state.metodoPagamento}
                        onChange={this.onChangePagamento}
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
                    

                </FiltroDois>
                <Catalogo>
                    {produtosFiltrados.map(produtos => {
                        return (
                            <Cartao
                                key={produtos.id}
                                preco={produtos.price}
                                modelo={produtos.name}
                                descricao={produtos.description}
                                pagamento={produtos.paymentMethod}
                                entrega={produtos.shipping}
                            />
                        )
                    })}
                </Catalogo>
            </Container>
        )
    }
}

TextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);