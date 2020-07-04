import React from 'react';

class Operation extends React.Component {
    render() {
        return (
            <button className="btn btn-info rounded-circle btn-lg" onClick={(e) => this.props.onClick(this.props.opera)}>{this.props.opera}</button>
        );
    }
}

export default Operation;