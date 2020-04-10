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
min-height: 4vw;
display: flex;
justify-content: space-between;
align-items: center;
box-shadow: 1px 1px 10px;
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
  margin: 0 1vw;
  border-radius: 10px;
  border: #ff5c5c 2px solid;
  cursor: pointer;
`

const SuaConta = styled.div`
  border: #ff5c5c 2px solid;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ff595c;
  margin-right: 1vw;
  font-weight: 900;
  height: 70%;
  padding: 0 3px;
  cursor: pointer;
`

const Footer = styled.div`
position: relative;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
width:100%;
height: 25%;
background: rgba(11,79,96,1);
box-shadow: 1px 1px 10px;
`

const Contato = styled.div`
display: flex;
justify-content: space-around;
padding-left: 33%;
align-items: center;
height: 50%;
width: 17%;
`

const RedesSociais = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
padding-left: 1%;
height: 40%;
width: 49%;
border-left: 1px dashed white;
`
const DivIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px dashed rgba(11,79,96,1);
  background-color: white;
  border-radius: 50%;
  height: 2vw;
  width: 2vw;
`

const DivIcon2 = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px dashed rgba(11,79,96,1);
  background-color: white;
  border-radius: 5px;
  height: 2vw;
  width: 2vw;
  margin-right: 1vw;
`
const Texto = styled.p`
  color: white;
  text-align: center;
  font-size: 12px;
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
            <SuaConta><span>Sua Conta</span></SuaConta>
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
                <h3>Atendimento</h3>
                  <p>1001 -0101</p>
                  <h4>De Segunda à Sexta, das 8h às 20h</h4>
                  <h4>Sábado, das 8h às 18h</h4>
                </Texto>
              </Contato>
              <RedesSociais>
                <DivIcon2>
                  <img src={FacebookIcon}/>
                </DivIcon2>
                <DivIcon2>
                  <img src={InstagramIcon}/>
                </DivIcon2>
                <DivIcon2>
                  <img src={WhatsappIcon}/>
                </DivIcon2>
              </RedesSociais>
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
                <h3>Atendimento</h3>
                  <p>1001 -0101</p>
                  <h4>De Segunda à Sexta, das 8h às 20h</h4>
                  <h4>Sábado, das 8h às 18h</h4>
                </Texto>
              </Contato>
              <RedesSociais>
                <DivIcon2>
                  <img src={FacebookIcon}/>
                </DivIcon2>
                <DivIcon2>
                  <img src={InstagramIcon}/>
                </DivIcon2>
                <DivIcon2>
                  <img src={WhatsappIcon}/>
                </DivIcon2>
              </RedesSociais>
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
                <h3>Atendimento</h3>
                  <p>1001 -0101</p>
                  <h4>De Segunda à Sexta, das 8h às 20h</h4>
                  <h4>Sábado, das 8h às 18h</h4>
                </Texto>
              </Contato>
              <RedesSociais>
                <DivIcon2>
                  <img src={FacebookIcon}/>
                </DivIcon2>
                <DivIcon2>
                  <img src={InstagramIcon}/>
                </DivIcon2>
                <DivIcon2>
                  <img src={WhatsappIcon}/>
                </DivIcon2>
              </RedesSociais>
            </Footer>
          </Container>
        );
        }

  }
  }

export default App;