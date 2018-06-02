import React, { Component } from "react";

class subscriptions extends Component {
    constructor(props) {
        super();

        this.state = {
            email: ""
        };
    }

    saveSubscription = email => {
        const URL_EMAIL = "http://localhost:3004/subcriptions";

        fetch(URL_EMAIL, {
            method: "post",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email })
        })
            .then(res => res.json())
            .then(() => {
                this.setState({
                    email: "",
                    success: true
                });
            });
    };

    handleSubmit = event => {
        event.preventDefault();
        let email = this.state.email;
        let regex = /\S+@\S+\.\S+/;

        if (regex.test(email)) {
            this.saveSubscription(email);
        } else {
            // will reset the email
        }
    };

    onChageInput = event => {
        this.setState({
            email: event.target.value
        });
    };

    render() {
        return (
            <div className="subcribe_panel">
                <h3> Subscribe to us</h3>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            placeholder="youreamail@email.com"
                            value={this.state.input}
                            onChange={this.onChageInput}
                        />
                    </form>
                </div>
                <small>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illo veniam quis ipsum voluptatibus cumque officia
                    voluptatum quibusdam voluptas architecto consequatur?
                </small>
            </div>
        );
    }
}

export default subscriptions;
