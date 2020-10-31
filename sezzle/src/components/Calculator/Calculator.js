import React from 'react';
import {CalculatorButton} from '../CalculatorButton/CalculatorButton'
import styled from 'styled-components';

const Row = styled.div`
    width : 50vh;
`;

const Container = styled.div`
    width : 50vh;
`;

const Display = styled.div`
    width : 50vh;
    `;

const DisplayText = styled.div`
    background-color: black;
    color: white;
    text-align: right;
    font-size: 10vh;
    font-family: sans-serif;
    margin-right: 5vh;
`;

export class Calculator extends React.Component { 

    onClick = e => {
        this.props.onClick(e);
    }

    render() {
        return (
            <Container>  
                <Display>
                    <DisplayText>{this.props.result || '0'}</DisplayText>                          
                </Display>
                <Row>
                    <CalculatorButton value="AC" color={'grey'} onClickHandler={this.onClick}/>
                    <CalculatorButton value="+/-" color={'grey'} onClickHandler={this.onClick}/>
                    <CalculatorButton value="%" color={'grey'} onClickHandler={this.onClick}/>
                    <CalculatorButton value="/" color={'orange'} onClickHandler={this.onClick}/>
                </Row>
                <Row>
                    <CalculatorButton value="7" color={'#282828'} onClickHandler={this.onClick}/>
                    <CalculatorButton value="8" color={'#282828'} onClickHandler={this.onClick}/>
                    <CalculatorButton value="9" color={'#282828'} onClickHandler={this.onClick}/>
                    <CalculatorButton value="x" color={'orange'} onClickHandler={this.onClick}/>
                </Row>
                <Row>
                    <CalculatorButton value="4" color={'#282828'} onClickHandler={this.onClick}/>
                    <CalculatorButton value="5" color={'#282828'} onClickHandler={this.onClick}/>
                    <CalculatorButton value="6" color={'#282828'} onClickHandler={this.onClick}/>
                    <CalculatorButton value="-" color={'orange'} onClickHandler={this.onClick}/>
                </Row>
                <Row>
                    <CalculatorButton value="1" color={'#282828'} onClickHandler={this.onClick}/>
                    <CalculatorButton value="2" color={'#282828'} onClickHandler={this.onClick}/>
                    <CalculatorButton value="3" color={'#282828'} onClickHandler={this.onClick}/>
                    <CalculatorButton value="+" color={'orange'} onClickHandler={this.onClick}/>
                </Row>
                <Row>
                    <CalculatorButton value="0" color={'#282828'} onClickHandler={this.onClick}/>
                    <CalculatorButton value="." color={'#282828'} onClickHandler={this.onClick}/>
                    <CalculatorButton value="()" color={'#282828'} onClickHandler={this.onClick}/>
                    <CalculatorButton value="=" color={'orange'} onClickHandler={this.onClick}/>
                </Row>
            </Container>
        );
    }
}