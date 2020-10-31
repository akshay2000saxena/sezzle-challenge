import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    background: ${props => props.color};
    margin: 2px;
    color: ${props => (props.color === "grey") ? 'black' : 'white'};
    align-items: center;
    justify-content: center;
    flex: 1;
    margin: 1;
    border-radius: 100%;
    width: 10vh;
    height: 10vh;
    outline: none;
    font-size: 40px;
    font-family: sans-serif;
    :hover{
        opacity: 0.8;
    }
`;


export class CalculatorButton extends React.Component {
    onClick = e => {
        this.props.onClickHandler(e.target.value)
    }
    
    render(){
        return(
            <Button value={this.props.value} onClick={this.onClick} color={this.props.color}>
                {this.props.value}
            </Button>
        )
    }
}   