import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';

//----------------------CSS MATERIAL-UI----------------//
const styles = theme => ({
    root: {
        height: 180,
    },
    container: {
        display: 'flex',
    },
    paper: {
        margin: theme.spacing.unit,

    },
    typography: {
        margin: theme.spacing.unit * 0.5,

    },

});





//----------------------CSS GRID----------------//

// const Container = styled.div`
//  height: 200px;
//  width: 100px;
//  border: solid 1px green;
// `

const ContainerDisplay = styled.div`
    /* main{
    margin: auto;
    display:grid;
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: repeat(4, 1fr);
    margin: 7px;
    max-width: 50vh;
    height: 95vh;
    grid-gap: 4%;
  } */
  
  .card{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 5px;
    border: 1px dashed #01baef;
    width: 220px;
    height: 100%;
  }
  
  .card>img{
    
    height: 150px;
    /* padding-left: 13px;
    padding-top: 7px; */
  }
  
span{
    /* margin-left: 7px; */
    text-decoration: none;
    color: #0b4f6c;
    font-weight: bold;
    font-size: 15px;
  }
  
  button{
      /* margin-left: 9px; */
      height: 25px;
      width: 50%;
      color: #dfe6e9;
      font-size: 14px;
      background-color: #2d3436;
      box-shadow: none;
      border-style: none;
      border-radius: 10px;
      
  
  
  :hover {
  background: #17c0eb;
    } 
  }
  `



class Cartao extends React.Component {

    render() {
        return (

            <ContainerDisplay>
                {/* <p>{this.props.nome}</p>
                <p>{this.props.preco}</p> */}
                

                    <div className="card">
                        <img src={require("../imagens/azera.jpg")} />
                        <span>HYUNDAI AZERA(2012)</span>
                        <br/>
                        
                        <span>R$ 77.000 </span>
                        <br/>
                        <button>COMPRAR</button>

                    </div>

                

            </ContainerDisplay>

        )
    }
}

export default Cartao