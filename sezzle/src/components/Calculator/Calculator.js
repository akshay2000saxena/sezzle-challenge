import React from 'react';
import {CalculatorButton} from '../CalculatorButton/CalculatorButton'
import styled from 'styled-components';

const Row = styled.div`
    max-width: 90%;
`;

const Container = styled.div`
    width: 60%;
    max-width: 60%;
`;

const Display = styled.div`
    margin-right: 30%;
`;

export class Calculator extends React.Component { 

    onClick = e => {
        this.props.onClick(e);
    }

    render() {
        return (
            <Container>  
                <Display>
                    <h1 style={{backgroundColor: 'black', color: 'white', textAlign: 'right' }}>{this.props.result || '0'}</h1>                          
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