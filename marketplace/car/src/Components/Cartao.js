import React from 'react';
import styled from 'styled-components'



const Container = styled.div`
 height: 200px;
 width: 100px;
 border: solid 1px green;
`

class Cartao extends React.Component{
    render(){
        return(
            <Container>
                <p>{this.props.nome}</p>
                <p>{this.props.preco}</p>
    
            </Container>
        )
    }
}

export default Cartao