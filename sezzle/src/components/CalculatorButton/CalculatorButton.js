import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    background: ${props => props.color};
    margin: 2px;
    color: white;
    align-items: center;
    justify-content: center;
    flex: 1;
    margin: 1;
    border-radius: 100%;
    width: 50px;
    height: 50px;
    outline: none;
    font-size: 25px;
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