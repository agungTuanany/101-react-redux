import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCars } from '../actions';
import { bindActionCreators } from 'redux';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: ''
        };
    }

    searchCars = event => {
        event.preventDefault();
        this.props.getCars(this.state.keyword);
    };
    handleChange = event => {
        this.setState({
            keyword: event.target.value
        });
    };

    componentDidAmount() {
        console.log(this.state);
    }

    render() {
        return (
            <div className="main_search">
                <form onSubmit={this.searchCars}>
                    <input
                        type="text"
                        placeholder="input the car"
                        onChange={this.handleChange}
                        value={this.state.keyword}
                    />
                </form>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getCars }, dispatch);
}
export default connect(
    null,
    mapDispatchToProps
)(Search);
