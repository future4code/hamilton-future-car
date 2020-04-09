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
        margin: theme.spacing.unit * 1,
        background: '#e0f7fa',
        boxShadow: '0 0 5px 3px #00bcd4',
        padding: '5px'

    },



});


//----------------------CSS GRID----------------//

const ContainerDisplay = styled.div`


main>.card{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 5px;
    border: 1px dashed #01baef;
    width: 220px;
    height: 100%;
  }
  
main>.card>img{
    
    height: 150px;
    padding-top: 5px;
    
  }
  
main>div>span{
    
    text-decoration: none;
    color: #0b4f6c;
    font-weight: bold;
    font-size: 18px;
  }
  
u{
    color: whitesmoke;
}  

`
const BotaoComprar = styled.button`

      margin-left: 23%;
      height: 35px;
      width: 50%;
      color: #dfe6e9;
      font-size: 13px;
      background-color: #2d3436;
      box-shadow: none;
      border-style: none;
      border-radius: 10px;

    :hover {
        background: #17c0eb;
    } 

`


class SimpleFade extends React.Component {

    state = {
        checked: false,
    };

    state = {
        anchorEl: null,
    };

    handleClick = event => {
        this.setState({
            anchorEl: event.currentTarget,
        });
    };

    handleClose = () => {
        this.setState({
            anchorEl: null,
        });
    };

    handleChange = () => {
        this.setState(state => ({ checked: !state.checked }));
    };



    render() {
        const { classes } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
            <div className={classes.root}>
                <ContainerDisplay>
                    <main>
                        <div className="card">
                            <img src={require("../imagens/azera.jpg")} /><br />
                            <span>{this.props.modelo}</span><br />
                            <span>R$ {this.props.preco}</span>
                            <br />
                            <Button
                                variant="contained"
                                size="medium"
                                color="secondary"
                                aria-owns={open ? 'simple-popper' : undefined}
                                aria-haspopup="true"
                                onClick={this.handleClick}><span>detalhes</span>
                            </Button>


                            <Popover
                                id="simple-popper"
                                open={open}
                                anchorEl={anchorEl}
                                onClose={this.handleClose}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'center',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center',
                                }}>

                                <Typography className={classes.typography}>
                                    <i>{this.props.descricao}</i>
                                    <p> <b>Carro:</b> {this.props.modelo}</p>
                                    <p> <b>Método de pagamento:</b> {this.props.pagamento}</p>
                                    <p><b>Entrega:</b> {this.props.entrega} dias</p>
                                    <BotaoComprar>COMPRAR</BotaoComprar>
                                </Typography>

                            </Popover>


                        </div>
                    </main>
                </ContainerDisplay>
            </div>
        )
    }
}
SimpleFade.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(SimpleFade);