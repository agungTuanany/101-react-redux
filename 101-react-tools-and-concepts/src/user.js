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
//  The main idea for propTypes is validating

User.propTypes = {
    // name: propTypes.string, // STRING
    lastname: propTypes.string, // STRING
    age: propTypes.number, // NUMBER
    // hobbies: propTypes.array, // ARRAY
    spanish: propTypes.bool, // NUMBER
    message: propTypes.func, // FUNCTION
    car: propTypes.object, // OBJECT

    // oneOf
    //name: propTypes.oneOf(['Francis', 'James']), // ACCEPT DIFFERENT VALUES

    // OneOfTypes
    name: propTypes.oneOfType([
        propTypes.string,
        propTypes.number,
        propTypes.oneOf(["Francis", "James"])
    ]),

    // arrayof
    hobbies: propTypes.arrayOf(propTypes.string),

    // isRequired
    // mother: propTypes.string.isRequired

    // Custom Prototypes
    mother: function(props, propName, componentName) {
        if (props[propName] !== "Martha") {
            return new Error(
                `The name ${props[propName]} is incorrect, should be Martha`
            );
        }
    }
};

export default User;
