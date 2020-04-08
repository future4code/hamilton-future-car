import React from 'react';
import LandingPage from './Components/LandingPage';
import styled from 'styled-components'
import TelaComprador from './Components/TelaComprador';
import TelaVendedor from './Components/TelaVendedor'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



const Container = styled.div`
width: 100%;
height: 100vh;
border: solid 1px black;

`
const Menu = styled.div`
width:100%;
height: 6vh;
border: solid 1px blue;

`
const Footer = styled.div`

width:100%;
height: 6vh;
border: solid 1px black;
`


const tela = "telacomprador"

class App extends React.Component {
constructor(props){
  super(props)
  this.state ={
    produtos: 
      {
      id: "1",
      name: "BMW 320",
      shipping: 3,
      description: "2.0 gasolina automático",
      paymentMethod: "cartão de crédito",
      price: 77000
      
    }
    
  }

}
  render(){
    switch(tela){
      case "landingpage":
        return (
          <Container>
            <Menu> 
            Aqui é header
            </Menu>
              <LandingPage />  
              <Footer>
                Aqui é o footer
              </Footer>
          </Container>
            
        );
      case "telacomprador":
        return(
          <Container>
            <Menu> 
            Aqui é header
            </Menu>
              <TelaComprador nome={this.state.produtos.name}
                            preco={this.state.produtos.price}
              />  
              <Footer>
                Aqui é o footer
              </Footer>
          </Container>
        );
        case "telavendedor":
        return(
          <Container>
            <Menu> 
            Aqui é header
            </Menu>
              <TelaVendedor/>  
              <Footer>
                Aqui é o footer
              </Footer>
          </Container>
        );
        }
    
  }

  }
  



export default App;
