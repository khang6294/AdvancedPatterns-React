import React, { Component } from 'react';
import RenderProps from './RenderProps/RenderProps'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            amount: 0
        }
    }


    render(){
        return (
            <div>
                <RenderProps />
            </div>
        );
    }
}

export default App;
