import React, { Component } from "react";
class ClassProps extends Component {
    render() {
        const {name, tech} = this.props;
        return (
            <div>
                <h1>Example of class props</h1>
                <p>{name}</p>
                <p>{tech}</p>
            </div>
        )
    }
}
export default ClassProps