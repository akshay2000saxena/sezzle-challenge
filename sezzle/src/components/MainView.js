import React from 'react';
import {Results} from './Results'
import {Calculator} from './Calculator/Calculator'

export class MainView extends React.Component { 
    
    state = {
        calculationList: this.props.calculationList,
        result: "",
        bracket: ""
    }

    removeExtraCalcs = (list) => {
        if (list.length > 10) {
            list.pop();
        }
        return list;
    }

    updateList = () => {
        let calcs = [this.state.result].concat(this.state.calculationList);
        return this.removeExtraCalcs(calcs);
    }

    enterLatestCalculation = () => {
        this.setState({
            calculationList: this.updateList()
        });  
    }

    onClick = e => {
        switch (e) {
            case "%":
                this.percentage();
                break;
            case "<-":
                this.erase();
                break;
            case "AC":
                this.eraseAll();
                break;
            case "()":
                this.brackets();
                break;
            case "=":
                this.equals();
                break;
            case "+/-":
                this.negation();
                break;
            default:
                this.concatValue(e);
                break;
        }
    }

    // percentage = () => {
    //     this.setState({
    //         result: 
    //     });
    // }

    negation = () => {
        if(this.state.result === "-"){
            this.setState({
                result: ""
            }); 
        } else if(this.state.result.length <= 1){
            this.setState({
                result: "-" + this.state.result
            });
        } else {
            const check = this.state.result.length > 1 && this.state.result[0] !== '-';
            this.setState({
                result: check ? "-" + this.state.result : this.state.result.substr(1)
            });
        }
    }

    erase = () => {
        this.setState({
            result: this.state.result.pop()
        });
    }

    eraseAll = () => {
        this.setState({
            result: ""
        });
    }

    decimal = () => {
        this.setState({
            result: this.state.result + "."
        })
    }

    equals = () => {
        const final = eval(this.state.result.replace("x", "*"));
        this.setState({
            result: Number.isNaN(final) ? "Infinity" : final
        })
        this.enterLatestCalculation();
    }

    concatValue = e => {
        this.setState({
            result: this.state.result + e
        })
    }

    brackets = () => {
        this.setState({
            result: this.state.result + (this.state.bracket === "" ? "(" : ")"),
            bracket: this.state.bracket === "" ? "(": ""
        });
    }

    render(){
        return(
            <div style={{backgroundColor: 'black', height: '100%'}}>
                <Calculator onClick={this.onClick} result={this.state.result}/>
                <Results result={this.state.result}/>
            </div>
        )
    }
}