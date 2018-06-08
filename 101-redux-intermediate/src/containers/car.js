import React, { Component } from 'react';
import { connect } from 'react-redux';
import { carDetail } from '../actions';
import { bindActionCreators } from 'redux';

class Car extends Component {
    UNSAFE_componentWillMount() {
        this.props.carDetail(this.props.match.params.id);
    }

    render() {
        return <div>{this.props.match.params.id}</div>;
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        carDetail: state.carDetail
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ carDetail }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Car);
