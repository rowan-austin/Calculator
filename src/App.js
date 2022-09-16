import { StrictMode, Component } from "react";
import { render } from "react-dom";
import Button from "./Button";
import ClearButton from "./ClearButton";
import Screen from "./Screen";
import * as math from "mathjs";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
          input: "",
        };
    }

    addToInput = val => {
        this.setState({ input: this.state.input + val});
    }

    handleEqual = () => {
        this.setState({input: math.eval(this.state.input)});
    }

    render() {
        return (
            <div className='calculator-wrapper'>
                <div className='screen-wrapper'><Screen input={this.state.input}/></div>
                <div className='operator-buttons'>
                    <Button handleClick={this.addToInput}>+</Button>
                    <Button handleClick={this.addToInput}>-</Button>
                    <Button handleClick={this.addToInput}>/</Button>
                    <Button handleClick={this.addToInput}>*</Button>
                    <Button handleClick={() => this.handleEqual}>=</Button>
                    <ClearButton onClick={() => this.setState({ input: ""})}>CE</ClearButton>
                </div>
                <div className='number-buttons'>
                    <Button handleClick={this.addToInput}>1</Button>
                    <Button handleClick={this.addToInput}>2</Button>
                    <Button handleClick={this.addToInput}>3</Button>
                    <Button handleClick={this.addToInput}>4</Button>
                    <Button handleClick={this.addToInput}>5</Button>
                    <Button handleClick={this.addToInput}>6</Button>
                    <Button handleClick={this.addToInput}>7</Button>
                    <Button handleClick={this.addToInput}>8</Button>
                    <Button handleClick={this.addToInput}>9</Button>
                </div>
            </div>
        );
    }
};

render(
    <StrictMode>
        <App />
    </StrictMode>,
    document.getElementById("root")
);