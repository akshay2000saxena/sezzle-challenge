import React from 'react';
import styled from 'styled-components';

const Li = styled.li`
    background-color: black;
    color: white;
    text-align: left;
    font-size: 6vh;
    font-family: sans-serif;
    margin-right: 5vh;
    /* list-style: none; */
`;


export class Results extends React.Component { 
    
    state = {
        calculationList: this.props.calculationList
    }

    listItem = this.state.calculationList.map(calc => {
        <li>{calc}</li>
    });

    render(){
        return(
            <div style={{color: 'white', alignItems:'right', marginLeft: '10vh'}}>
                {this.props.calculationList.map((calc, index) => {
                    return(<Li key={index}>{calc}</Li>)
                })}
            </div>
        )
    }
}