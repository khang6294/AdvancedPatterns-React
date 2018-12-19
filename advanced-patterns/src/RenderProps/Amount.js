import React, { Component } from 'react';


class Amount extends Component {
    constructor(props){
        super(props)
        this.state = {
            amount: 0,
            amount1:0
        }
    }

    onIncrement = () => {
        this.setState(state => ({ amount: state.amount + 1 , amount1: state.amount1 + 2 }));
    };

    onDecrement = () => {
        this.setState(state => ({ amount: state.amount - 1, amount1: state.amount1 - 2  }));
    };


    render(){
        return (
            <div>
                <span>US Dollar: {this.state.amount} </span>
                <span>US Dollar: {this.state.amount1} </span>
                <button type="button" onClick={this.onIncrement}>
                    +
                </button>
                <button type="button" onClick={this.onDecrement}>
                    -
                </button>
                {this.props.render(this.state)}
                {this.props.render2(this.state)}
            </div>
        );
    }
}

export default Amount;
