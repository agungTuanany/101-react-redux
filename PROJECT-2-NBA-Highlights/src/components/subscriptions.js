import React, { Component } from "react";

class subscriptions extends Component {
    constructor(props) {
        super();

        this.state = {
            email: ""
        };
    }

    clearMessages() {
        setTimeout(
            function() {
                this.setState({
                    error: false,
                    success: false
                });
            }.bind(this),
            3000
        );
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
            this.setState({ error: true });
        }
        this.clearMessages();
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
                        <div
                            className={
                                this.state.error ? "error show" : "error"
                            }
                        >
                            Check your email{" "}
                        </div>
                        <div
                            className={
                                this.state.success ? "success show" : "success"
                            }
                        >
                            Thanks for subcribe{" "}
                        </div>
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
