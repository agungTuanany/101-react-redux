import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectedNews, clearSelectedNews } from '../actions';
import { bindActionCreators } from 'redux';

class News extends Component {
    componentDidMount() {
        this.props.selectedNews(this.props.match.params.id);
    }

    UNSAFE_componentWillUnmount() {
        this.props.clearSelectedNews();
    }

    renderNews = ({ selected }) => {
        if (selected) {
            return selected.map(item => {
                return (
                    <div key={item.id}>
                        <div className="tags">
                            <span>
                                <i className="fa fa-eye" />
                                {item.views}
                            </span>
                            <span>
                                <i className="fa fa-thumbs-up" />
                                {item.likes[0]}
                            </span>
                            <span>
                                <i className="fa fa-thumbs-down" />
                                {item.likes[1]}
                            </span>
                        </div>
                        <div>
                            <h2>{item.title}</h2>
                            <span>
                                Article by:<strong>{item.author}</strong>
                            </span>
                        </div>
                        <img
                            alt={item.title}
                            src={`/images/articles/${item.img}`}
                        />
                        <div>{item.body}</div>
                    </div>
                );
            });
        }
    };

    render() {
        return (
            <div className="news-container">
                {this.renderNews(this.props.articles)}
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        articles: state.articles
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            selectedNews,
            clearSelectedNews
        },
        dispatch
    );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(News);
