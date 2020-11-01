import React from 'react';

export class Results extends React.Component { 
    
    state = {
        calculationList: this.props.calculationList
    }

    componentDidMount = () => {
        console.log(this.state.calculationList);
    }

    render(){
        return(
            <div style={{color: 'white'}}>
                {this.state.calculationList}
            </div>
        )
    }
}