import React, {Component} from 'react';
import Counter from './Counter.js';
import Summary from './Summary.js';

const style = {
    margin: '20px'
};

class ControlPanel extends Component {

    // constructor(props) {     super(props);     this.initValue = [0, 10, 20]
    // const initSum = this         .initValue         .reduce((a, b) => a + b, 0);
    //    this.state = {         sum: initSum     }     this.onCounterUpdate = this
    //        .onCounterUpdate         .bind(this); }; onCounterUpdate(newValue,
    // previousValue) {     const valueChange = newValue - previousValue;
    // this.setState({         sum: this.state.sum + valueChange     }) };

    render() {
        return (
            <div style={style}>
                <Counter caption='First'></Counter>
                <Counter caption='Second'></Counter>
                <Counter caption='Third'></Counter>
                <hr/> {/* <div>Total Count: {this.state.sum}</div>
                 */}
                <Summary></Summary>
            </div>
        )
    }

}

export default ControlPanel;