import React from 'react';
import styled, { ThemeConsumer } from 'styled-components'
import Cartao from './Cartao';
import axios from "axios"

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

    margin: auto;
    display:grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(3, 1fr);
    margin: 7px;
    width: 100%;
    height: 100%;
    grid-gap: 4%;
    border: solid 1px red;

`

class TelaComprador extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            produtos:[               
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
        .then(res =>{

            this.setState({produtos: res.data.cars})
        }).catch(err => {
            console.log(err)
        })
    }


    onChangeNome = (e) => {
        this.setState({inputNome: e.target.value})
    }

    onChangeMin = (e) => {
        if(e.target.value === ""){
            this.setState({inputMin: null})
        }
        else
        {
            this.setState({inputMin: e.target.value})
        }
        
    }

    onChangeMax = (e) => {
        if(e.target.value === ""){
            this.setState({inputMax: Infinity})
        }
        else
        {
            this.setState({inputMax: e.target.value})
        }
    }

    onChangeEntrega = (e) => {
        if(e.target.value === ""){
            this.setState({inputEntrega: Infinity})
        }
        else
        {
            this.setState({inputEntrega: e.target.value})
        }
    }

    onChangePagamento = (e) => {
        this.setState({metodoPagamento: e.target.value})
    }

    render(){
        const produtosFiltrados = this.state.produtos.filter(produtos => {
            if(this.state.metodoPagamento !== "todos") {
                return produtos.price >= this.state.inputMin && produtos.price <= this.state.inputMax && produtos.name.includes(this.state.inputNome) 
                && produtos.shipping <= this.state.inputEntrega && produtos.paymentMethod === this.state.metodoPagamento
            }
            else{
                return produtos.price >= this.state.inputMin && produtos.price <= this.state.inputMax && produtos.name.includes(this.state.inputNome) 
                && produtos.shipping <= this.state.inputEntrega 
            }
        }).sort((a,b) => {
            return a.price - b.price
        })

        return(
            <Container>
                <Filtro>
                    <input placeholder="Nome" value= {this.state.inputNome} onChange = {this.onChangeNome}></input>
                    <input placeholder="Preço Minímo" value= {this.state.inputMin} onChange = {this.onChangeMin} type= "number"></input>
                    <input placeholder="Preço Máximo" value= {this.state.inputMax} onChange = {this.onChangeMax} type= "number"></input>
                    <input placeholder="Tempo de entrega (dias)" value= {this.state.inputEntrega} onChange = {this.onChangeEntrega} type= "number"></input>

                    <label htmlFor = "Pagamento">Método de pagamento</label>
                    <select name= "Pagamento" onChange= {this.onChangePagamento}>
                        <option value= "todos">Todos</option>
                        <option value= "financiamento">Financiamento</option>
                        <option value= "cartao">À vista (Cartão)</option>
                        <option value= "deposito">Depósito Bancário</option>
                    </select>

                </Filtro>
                <Catalogo>
                    {produtosFiltrados.map(produtos => {
                        return (
                            <Cartao
                            key= {produtos.id} 
                            preco= {produtos.price}
                            nome= {produtos.name}
                            />
                        )
                    })}                                                                 
                </Catalogo>
            </Container>
        )
    }
}

export default TelaComprador