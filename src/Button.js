import React from 'react';

class Button extends React.Component {
    render() {
        return (
            <button className="btn btn-secondary rounded-circle btn-lg" onClick={(e) => this.props.onClick(this.props.digit)}>{this.props.digit}</button>
        );
    }
}

export default Button;