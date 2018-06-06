import React, { Component } from "react";
import { Link } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const URL_TEAMS = "http://localhost:3004/teams";

const fadeAnimations = {
    classNames: "fade",
    timeout: 500,
    appear: true
};

class Teams extends Component {
    constructor(props) {
        super(props);

        this.state = {
            teams: [],
            filtered: [],
            keyword: ""
        };
    }

    componentDidMount() {
        fetch(`${URL_TEAMS}`, { method: "GET" })
            .then(response => response.json())
            .then(json => {
                this.setState({ teams: json, filtered: json });
            });
    }

	searchTeam = event => {
	    const keyword = event.target.value;
	    if (keyword !== "") {
	        const list = this.state.teams.filter(item => {
	            return (
	                item.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1
	            );
	        });
	        this.setState({
	            filtered: list,
	            keyword
	        });
	    } else {
	        this.setState({
	            filtered: this.state.teams,
	            keyword
	        });
	    }
	};

	renderList({ filtered }) {
	    return filtered.map(item => {
	        return (
	            <CSSTransition key={item.id} {...fadeAnimations}>
	                <Link
	                    to={`/team/${item.name}`}
	                    key={item.id}
	                    className="team_item"
	                >
	                    <img
	                        alt={item.name}
	                        src={`/images/teams/${item.logo}`}
	                    />
	                </Link>
	            </CSSTransition>
	        );
	    });
	}

	render() {
	    return (
	        <div className="teams_component">
	            <div className="teams_input">
	                <input
	                    type="text"
	                    value={this.state.keyword}
	                    onChange={e => this.searchTeam(e)}
	                    placeholder="Search for a Team"
	                />
	            </div>
	            <div className="teams_container">
	                <TransitionGroup>
	                    {this.renderList(this.state)}
	                </TransitionGroup>
	            </div>
	        </div>
	    );
	}
}

export default Teams;
