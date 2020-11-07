import React, { useEffect } from 'react';
import { Results } from './Results'
import { Calculator } from './Calculator/Calculator'
import { db } from '../services/firebase'

export class MainView extends React.Component { 
    
    state = {
        calculationList: [],
        question: "",
        result: "",
        bracket: "",
        isLoaded: false
    }

    componentDidMount(){
        this.getCalculationListFromDb();
        const thisRefreshData = this.getCalculationListFromDb.bind(this);
    }

    getCalculationListFromDb = () => {
        this.setState({
            // isLoaded: false,
            calculationList: this.state.calculationList,
        });
        db.collection('calculationList')
          .get()
          .then(snapshot => {
            this.initialList(snapshot)
          })
          .catch(error => console.log(error));
    }

    initialList = snapshot => {
        snapshot.forEach(doc => {
            const data = doc.data();
            this.setState({
                calculationList: data.list,
                isLoaded: true
            })
        })
        console.log(this.state.calculationList);
    }

    addCalculationToDB = newList => {
        db.collection('calculationList')
          .doc('docList')
          .update({
            list: newList
          })
    }

    removeExtraCalcs = (list) => {
        if (list.length > 10) {
            list.pop();
        }
        return list;
    }

    updateList = total => {
        let calcs = [total].concat(this.state.calculationList);
        calcs = this.removeExtraCalcs(calcs);
        this.addCalculationToDB(calcs);
        return calcs;
    }

    enterLatestCalculation = total => {
        this.setState({
            calculationList: this.updateList(total),
        });  
    }

    onClick = e => {
        switch (e) {
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

    negation = () => {
        try {
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
        } catch (error) {
            this.setState({
                result: "-" + this.state.result
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
        try {
            let final = eval(this.state.result.replace("x", "*").replace("%", "/100"));
            final = Math.round(final * 10000) / 10000;

            this.setState({
                result: Number.isNaN(final) ? "Infinity" : final,
            })

            const total = this.state.result + " = " + String(final);
            this.enterLatestCalculation(total);
        } catch (error) {
            this.setState({
                result: "Invalid"
            })
        }
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
            <div>
                <h1>Real-Time Calculator</h1>
                <div style={{backgroundColor: 'black', height: '100vh', display: 'flex', flexDirection:'row', alignItems: 'center'}}>
                    <Calculator onClick={this.onClick} result={this.state.result}/>
                    {this.state.isLoaded ? <Results calculationList={this.state.calculationList}/> : <h1>No data loaded</h1>}
                </div>
            </div>
        )
    }
}