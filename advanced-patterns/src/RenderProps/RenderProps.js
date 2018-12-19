import React, { Component } from 'react';
import Amount from './Amount'
import Pound from './Pound'
import Euro from './Euro'

class RenderProps extends Component {
    constructor(props){
        super(props)
        this.state = {
            amount: 0
        }
    }


    render(){
        return (
            <div>
                <Amount
                    render = {({amount}) => <div>
                        <Pound amount={amount}/>
                        <Euro amount={amount}/>
                    </div>}
                    render2 = {({amount1}) => <div>
                        <h1>This is another render</h1>
                        <Pound amount={amount1}/>
                        <Euro amount={amount1}/>
                    </div>}
                />
            </div>
        );
    }
}

export default RenderProps;
