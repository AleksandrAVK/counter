import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Counter extends Component {

    state = {
        num: 0,
        color: ''
    };

    changeColor = () => {
        let arr = [];
        for (let i = 0; i < 3; i++) {
            arr.push(Math.floor(Math.random() * 256))
        }
        this.setState({ color: arr.join(',') });
    }

    buttonMinus = () => {
        let { colors, num, color } = this.state;
        if (num !== -10) {

            this.setState({
                num: this.state.num - 1,
            })
            this.changeColor()
        }
        else {
            alert('Минимальное значение -10. Начните  прибавлять');
        }
    }

    buttonPlus = () => {
        let { colors, num } = this.state;
        if (num !== 10) {
            this.setState({
                num: this.state.num + 1,
            })
            this.changeColor()
        }
        else {
            alert('Максимальное значение +10. Начните  уменьшать');
        }
    }



    render() {
        let { num, color } = this.state;
        return (
            <div className="container" style={{ background: `rgb(${this.state.color})` }}>
                <h1 className="header">Super Counter</h1>
                <div className="countBlock">
                    <div className="minus" onClick={this.buttonMinus}>-</div>
                    <p className="number">{num}</p>
                    <div className="plus" onClick={this.buttonPlus}>+</div>
                </div>

            </div>
        )
    }


}

export default Counter