import React ,{Component} from "react";

const URL_HOME = 'http://localhost:3004/teams'

class Poll extends Component {
  constructor(props) {
    super(props);

    this.state = {
        pollTeams: []
    }
  }

    fetchPoll() {
        fetch(`${URL_HOME}?poll=true&_sort=count_order=desc`, {method:"GET"})
            .then(response => response.json())
            .then(json => {
                console.log(json);
                this.setState({
                    pollTeams: json
                })
            })
    }

    componentDidMount() {
        this.fetchPoll();
    }

    renderPoll() {
        const position = ['1ST','2ND', '3RD']
            return this.state.pollTeams.map((item, index) => {
                return (
                    <div key={item.id} className="poll_team">
                        <img alt={item.name} src={`/images/teams/${item.logo}`} />
                        <h4>{position[index]}</h4>
                        <div>{item.count} votes</div>
                    </div>
                )
            })
    }

    render() {
        return (
            <div className="home_poll">
                <h3>Who will be the next champion ? </h3>
                <div className="poll_container">
                    {this.renderPoll()}
                </div>
            </div>
        )
    }
}

export default Poll;
