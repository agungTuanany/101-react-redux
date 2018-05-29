import React, { Component } from "react";
import propTypes from "prop-types";

class User extends Component {
    render() {
        return (
            <div>
                <div>{this.props.name}</div>
                <div>{this.props.lastname}</div>
                <div>{this.props.age}</div>
            </div>
        );
    }
}
//  The main idea for Proptypes is validating

User.propTypes = {
    name: propTypes.string, // STRING
    lastname: propTypes.string, // STRING
    age: propTypes.number, // NUMBER
    hobbies: propTypes.array, // ARRAY
    spanish: propTypes.bool, // NUMBER
    message: propTypes.func, // FUNCTION
    car: propTypes.object // OBJECT
};

export default User;
