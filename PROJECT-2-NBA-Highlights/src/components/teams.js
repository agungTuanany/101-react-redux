import React, { Component } from "react";
import { Link } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const URL_TEAMS = "http://localhost:3004/teams";

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

    renderList({ filtered }) {
        return filtered.map(item => {
            return (
                <Link
                    to={`/team/${item.name}`}
                    key={item.id}
                    className="team_item"
                >
                    <img alt={item.name} src={`/images/teams/${item.logo}`} />
                </Link>
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
                    {this.renderList(this.state)}
                </div>
            </div>
        );
    }
}

export default Teams;
