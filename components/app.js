import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Counter from "./Counter";

class App extends Component {
    render() {
        return < Counter />
    }
}

export default App
// const rootElement = document.querySelector('#root');
// ReactDOM.render(<App />, rootElement);