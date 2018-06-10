import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectedGallery, clearSelectedGallery } from '../actions';
import { bindActionCreators } from 'redux';

class Gallery extends Component {
    componentDidMount() {
        this.props.selectedGallery(this.props.match.params.id);
    }

    UNSAFE_componentWillUnmount() {
        this.props.clearSelectedGallery();
    }

    render() {
        return (
            <div>
                <h3>GALLERY ITEM</h3>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        gallery: state.gallery
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            selectedGallery,
            clearSelectedGallery
        },
        dispatch
    );
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Gallery);
