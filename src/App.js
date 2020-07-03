import React from 'react';
import Button from './Button';
import './App.css';
import * as math from 'mathjs';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: "",
      number: "0"
    };
    this.clear = this.clear.bind(this);
    this.equals = this.equals.bind(this);
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.multiply = this.multiply.bind(this);
    this.divide = this.divide.bind(this);
    this.decimal = this.decimal.bind(this);
    this.zero = this.zero.bind(this);
    this.numberConcat = this.numberConcat.bind(this);
    this.regexEndDigit = /\d$/;
    this.regexNotDigit = /\D/;
    this.regexEndOperation = /([-*/])$/g;
    this.regexEndOperationSub = /([+*/])$/g;
    this.regexEndSubtract = /([-])$/;
  }

  add() {
    if (this.regexEndDigit.test(this.state.number)) {
      this.setState((state) => ({
        count: state.count.concat("+"),
        number: "+"
      }));
    }
    if (this.regexEndOperation.test(this.state.number)) {
      const newCount = this.state.count.slice(0, -1);
      this.setState((state) => ({
        count: newCount.concat("+"),
        number: "+"
      }));
    }
  }

  subtract() {
    if (
      this.regexEndDigit.test(this.state.number) ||
      this.regexEndOperationSub.test(this.state.number)
    ) {
      this.setState((state) => ({
        count: state.count.concat("-"),
        number: "-"
      }));
    }
  }

  multiply() {
    if (this.regexEndDigit.test(this.state.number)) {
      this.setState((state) => ({
        count: state.count.concat("*"),
        number: "*"
      }));
    }
    if (this.regexEndOperation.test(this.state.number)) {
      const newCount = this.state.count.slice(0, -1);
      this.setState((state) => ({
        count: newCount.concat("*"),
        number: "*"
      }));
    }
  }

  divide() {
    if (this.regexEndDigit.test(this.state.number)) {
      this.setState((state) => ({
        count: state.count.concat("/"),
        number: "/"
      }));
    }
    if (this.regexEndOperation.test(this.state.number)) {
      const newCount = this.state.count.slice(0, -1);
      this.setState((state) => ({
        count: newCount.concat("/"),
        number: "/"
      }));
    }
  }

  clear() {
    this.setState((state) => ({
      count: "",
      number: "0"
    }));
  }

  equals() {
    this.setState((state) => ({
      count: state.count.concat("="),
      number: math.evaluate(this.state.count).toString()
    }));
  }

  decimal() {
    const regexDecimal = /(^\d+$|[\+\-\*\/]\d+$)/g;
    if (regexDecimal.test(this.state.count)) {
      this.setState((state) => ({
        count: state.count.concat("."),
        number: state.count.concat(".")
      }));
    }
  }

  zero() {
    if (this.state.count.charAt(0) !== 0) {
      this.setState((state) => ({
        count: state.count.concat(0),
        number: state.number.concat(0)
      }));
    }
  }

  numberConcat(num) {
    if (this.state.number === "0") {
      this.setState((state) => ({
        number: ""
      }));
      this.setState((state) => ({
        count: state.count.concat(num),
        number: state.number.concat(num)
      }));
    }
    if (this.regexNotDigit.test(this.state.number)) {
      this.setState((state) => ({
        count: state.count.concat(num),
        number: num
      }));
    }
    if (this.regexEndDigit.test(this.state.number) && this.state.number !== "0") {
      this.setState((state) => ({
        count: state.count.concat(num),
        number: state.number.concat(num)
      }));
    }
  }

  render() {
    return (
      <div className="container h-100 p-5 bg-light text-right">
        <h3>React Calculator</h3>
        <p className="text-secondary"><small>Coded by <a href="http://www.vinweb.hu" className="text-secondary">Janos Vincze</a></small></p>
        <div className="row">
          <div className="col alert alert-info text-right pr-2">
            <div className="counter mb-2">{this.state.count}</div>
            <div id="display">{this.state.number}</div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button
              id="clear"
              className="btn btn-danger rounded-circle btn-lg"
              onClick={this.clear}
            >
              C
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Button digit={"7"} onClick={this.numberConcat} />
            <Button digit={"8"} onClick={this.numberConcat} />
            <Button digit={"9"} onClick={this.numberConcat} />
            <button
              id="divide"
              className="btn btn-info rounded-circle btn-lg"
              onClick={this.divide}
            >
              /
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Button digit={"4"} onClick={this.numberConcat} />
            <Button digit={"5"} onClick={this.numberConcat} />
            <Button digit={"6"} onClick={this.numberConcat} />
            <button
              id="multiply"
              className="btn btn-info rounded-circle btn-lg"
              onClick={this.multiply}
            >
              x
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Button digit={"1"} onClick={this.numberConcat} />
            <Button digit={"2"} onClick={this.numberConcat} />
            <Button digit={"3"} onClick={this.numberConcat} />
            <button
              id="subtract"
              className="btn btn-info rounded-circle btn-lg"
              onClick={this.subtract}
            >
              -
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button
              id="decimal"
              className="btn btn-secondary rounded-circle btn-lg"
              onClick={this.decimal}
            >
              .
            </button>
            <button
              id="zero"
              className="btn btn-secondary rounded-circle btn-lg"
              onClick={this.zero}
            >
              0
            </button>
            <button
              id="equals"
              className="btn btn-success rounded-circle btn-lg"
              onClick={this.equals}
            >
              =
            </button>
            <button
              id="add"
              className="btn btn-info rounded-circle btn-lg"
              onClick={this.add}
            >
              +
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
