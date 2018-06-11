import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

class Form extends Component {
    renderInputFiled(field) {
        return (
            <div className="form-input">
                <label>{field.myLabel}</label>
                <input type="text" {...field.input} />
            </div>
        );
    }

    renderTextareaField(field) {
        return (
            <div className="from-input">
                <label>{field.myLabel}</label>
                <textarea {...field.input} />
            </div>
        );
    }

    render() {
        return (
            <div className="Form">
                <div className="top">
                    <h3>Add a Message</h3>
                    <Link to="/">Back</Link>
                </div>
                <form
                    onSubmit={this.props.handleSubmit(event =>
                        this.onSubmit(event)
                    )}>
                    <Field
                        myLabel="Title"
                        name="title"
                        component={this.renderInputFiled}
                    />

                    <Field
                        myLabel="From"
                        name="form"
                        component={this.renderInputFiled}
                    />

                    <Field
                        myLabel="Message"
                        name="message"
                        component={this.renderTextareaField}
                    />
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'PostMessage'
})(Form);
