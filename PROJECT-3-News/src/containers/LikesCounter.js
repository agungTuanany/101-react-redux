import React, { Component } from 'react';

class LikesCounter extends Component {
    render() {
        return (
            <div className="addlikes-wrapper">
                <h3>How do you fell about this</h3>
                <div className="addlikes-container">
                    <div className="btn-like">
                        <div className="hits">{this.props.likes}</div>
                        <div className="icon">
                            <i className="fa fa-thumbs-up" aria-hidden="true" />
                        </div>
                    </div>
                    <div className="btn-dislike">
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
