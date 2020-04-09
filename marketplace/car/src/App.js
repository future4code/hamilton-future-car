import React from 'react';
import LandingPage from './Components/LandingPage';
import styled from 'styled-components'
import TelaComprador from './Components/TelaComprador';
import TelaVendedor from './Components/TelaVendedor'
import Logo from './imagens/logo.png';
import Phone from '@material-ui/icons/PhoneInTalkOutlined'
import FacebookIcon from './imagens/facebook.png'
import InstagramIcon from './imagens/instagram.png'
import WhatsappIcon from './imagens/whatsapp.png'





const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: space-between;

`
const Header = styled.div`
width:100%;
height: 7vh;
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: #757575 2px ridge;
background: rgb(251,251,255);
background: linear-gradient(
90deg, 
rgba(251,251,255,1) 10%, 
rgba(11,79,96,1) 50%, 
rgba(251,251,255,1) 90%
);
`

const Img = styled.img`
  width: 3vw;
  padding: 0 1vw;
  border-radius: 40%;
  cursor: pointer;
`

const SuaConta = styled.div`
  color: #ff595c;
  padding-right: 1vw;
  font-weight: 900;
`

const Footer = styled.div`
position: relative;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width:100%;
height: 25%;
border-top: #757575 2px groove;
background: rgba(11,79,96,1);
`

const Contato = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
height: 35%;
width: 37%;
/* border-bottom: 1px dashed white; */
`

const RedesSociais = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
height: 40%;
width: 80%;
`
const DivIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px dashed #01baef;
  background-color: white;
  border-radius: 50%;
  height: 2vw;
  width: 2vw;
`
const Texto = styled.p`
  color: white;
  text-align: center;
  font-size: 14px;
`


class App extends React.Component {
constructor(props){
  super(props)
  this.state ={
    tela: "landingpage",
  }

}

  onClickMudarTelaLanding = () => {
    this.setState({tela: "landingpage"})
  }

  onClickMudarTelaBotao = (e) => {
    this.setState({tela: e})
  }

  render(){
    switch(this.state.tela){
      case "landingpage":
        return (
          <Container>
            <Header> 
            <div>
              <Img src={Logo}
              onClick={this.onClickMudarTelaLanding}/>
            </div>
            <SuaConta>Sua Conta</SuaConta>
            </Header>
            <LandingPage 
            funcao2 = {this.onClickMudarTelaBotao}
            />  
            <Footer>
              <Contato>
                <DivIcon>
                  <Phone/>
                </DivIcon>
                <Texto>
                <p>Atendimento</p>
                  <p>1001 -0101</p>
                </Texto>
                <Texto>
                  <p>De Segunda à Sexta, das 8h às 20h</p>
                  <p>Sábado, das 8h às 18h</p>
                </Texto>
              </Contato>
              {/* <RedesSociais>
                
              </RedesSociais> */}
            </Footer>
          </Container>
            
        );
      case "telacomprador":
        return(
          <Container>
            <Header> 
            <div>
              <Img src={Logo}
              onClick={this.onClickMudarTelaLanding}/>
              </div>
            <SuaConta>Sua Conta</SuaConta>
            </Header>

            <TelaComprador/> 

            <Footer>
              <Contato>
                <DivIcon>
                  <Phone/>
                </DivIcon>
                <Texto>
                <p>Atendimento</p>
                  <p>1001 -0101</p>
                </Texto>
                <Texto>
                  <p>De Segunda à Sexta, das 8h às 20h</p>
                  <p>Sábado, das 8h às 18h</p>
                </Texto>
              </Contato>
              {/* <RedesSociais>
                
              </RedesSociais> */}
            </Footer>
          </Container>
        );
        case "telavendedor":
        return(
          <Container>
            <Header> 
            <div>
              <Img src={Logo}
              onClick={this.onClickMudarTelaLanding}/>
              </div>
            <SuaConta>Sua Conta</SuaConta>
            </Header>
              <TelaVendedor/>  
              <Footer>
              <Contato>
                <DivIcon>
                  <Phone/>
                </DivIcon>
                <Texto>
                <p>Atendimento</p>
                  <p>1001 -0101</p>
                </Texto>
                <Texto>
                  <p>De Segunda à Sexta, das 8h às 20h</p>
                  <p>Sábado, das 8h às 18h</p>
                </Texto>
              </Contato>
              {/* <RedesSociais>
                
              </RedesSociais> */}
            </Footer>
          </Container>
        );
        }
    
  }
  }
  
export default App;