import React from 'react';
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
    this.one = this.one.bind(this);
    this.two = this.two.bind(this);
    this.three = this.three.bind(this);
    this.four = this.four.bind(this);
    this.five = this.five.bind(this);
    this.six = this.six.bind(this);
    this.seven = this.seven.bind(this);
    this.eight = this.eight.bind(this);
    this.nine = this.nine.bind(this);
    this.regexEndDigit = /\d$/;
    this.regexEndOperation = /[\-\*\/]$/g;
    this.regexEndOperationSub = /[\+\*\/]$/g;
    this.regexEndSubtract = /[\-]$/;
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
      count: math.evaluate(this.state.count).toString(),
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
        number: state.count.concat(0)
      }));
    }
  }

  one() {
    this.setState((state) => ({
      count: state.count.concat(1),
      number: state.count.concat(1)
    }));
  }

  two() {
    this.setState((state) => ({
      count: state.count.concat(2),
      number: state.count.concat(2)
    }));
  }

  three() {
    this.setState((state) => ({
      count: state.count.concat(3),
      number: state.count.concat(3)
    }));
  }

  four() {
    this.setState((state) => ({
      count: state.count.concat(4),
      number: state.count.concat(4)
    }));
  }

  five() {
    this.setState((state) => ({
      count: state.count.concat(5),
      number: state.count.concat(5)
    }));
  }

  six() {
    this.setState((state) => ({
      count: state.count.concat(6),
      number: state.count.concat(6)
    }));
  }

  seven() {
    this.setState((state) => ({
      count: state.count.concat(7),
      number: state.count.concat(7)
    }));
  }

  eight() {
    this.setState((state) => ({
      count: state.count.concat(8),
      number: state.count.concat(8)
    }));
  }

  nine() {
    this.setState((state) => ({
      count: state.count.concat(9),
      number: state.count.concat(9)
    }));
  }

  render() {
    return (
      <div className="container p-5 border shadow rounded bg-light text-right">
        <h3>React Calculator 0.5</h3>
        <p class="text-secondary"><small>Coded by <a href="http://www.vinweb.hu" class="text-secondary">Janos Vincze</a></small></p>
        <div className="row">
          <div className="col alert alert-info text-right">
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
            <button
              id="seven"
              className="btn btn-secondary rounded-circle btn-lg"
              onClick={this.seven}
            >
              7
            </button>
            <button
              id="eight"
              className="btn btn-secondary rounded-circle btn-lg"
              onClick={this.eight}
            >
              8
            </button>
            <button
              id="nine"
              className="btn btn-secondary rounded-circle btn-lg"
              onClick={this.nine}
            >
              9
            </button>
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
            <button
              id="four"
              className="btn btn-secondary rounded-circle btn-lg"
              onClick={this.four}
            >
              4
            </button>
            <button
              id="five"
              className="btn btn-secondary rounded-circle btn-lg"
              onClick={this.five}
            >
              5
            </button>
            <button
              id="six"
              className="btn btn-secondary rounded-circle btn-lg"
              onClick={this.six}
            >
              6
            </button>
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
            <button
              id="one"
              className="btn btn-secondary rounded-circle btn-lg"
              onClick={this.one}
            >
              1
            </button>
            <button
              id="two"
              className="btn btn-secondary rounded-circle btn-lg"
              onClick={this.two}
            >
              2
            </button>
            <button
              id="three"
              className="btn btn-secondary rounded-circle btn-lg"
              onClick={this.three}
            >
              3
            </button>
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
