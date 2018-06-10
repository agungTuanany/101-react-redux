import React, { Component } from 'react';

class LikesCounter extends Component {
    addLikes = action => {
        const props = this.props;
        const newLikes =
            action === 'ADD'
                ? [this.props.likes + 1, this.props.dislikes]
                : [this.props.likes, this.props.dislikes + 1];

        console.log(newLikes);
    };

    render() {
        return (
            <div className="addlikes-wrapper">
                <h3>How do you fell about this</h3>
                <div className="addlikes-container">
                    <div
                        className="btn-like"
                        onClick={() => this.addLikes('ADD')}>
                        <div className="hits">{this.props.likes}</div>
                        <div className="icon">
                            <i className="fa fa-thumbs-up" aria-hidden="true" />
                        </div>
                    </div>
                    <div
                        className="btn-dislike"
                        onClick={() => this.addLikes('REMOVE')}>
                        <div className="hits">{this.props.dislikes}</div>
                        <div className="icon">
                            <i
                                className="fa fa-thumbs-down"
                                aria-hidden="true"
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LikesCounter;
