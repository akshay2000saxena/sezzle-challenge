import React from 'react';

export class Results extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            calculationList: this.props.calculationList
        }
    }    

    render(){
        return(
            <div>
                {this.state.calculationList}
            </div>
        )
    }
}