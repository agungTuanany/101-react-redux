import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

class Form extends Component {
    renderInputFiled(field) {
        return (
            <div className="form-input">
                <label>{field.myLabel}</label>
                <input type="text" {...field.input} />
                <div className="error">{field.meta.error}</div>
            </div>
        );
    }

    renderTextareaField(field) {
        return (
            <div className="from-input">
                <label>{field.myLabel}</label>
                <textarea {...field.input} />
                <div className="error">{field.meta.error}</div>
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
                        name="from"
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

function validate(values) {
    const errors = {};

    if (!values.title) {
        errors.title = 'The title is empty';
    }

    if (!values.from) {
        errors.from = 'Enter your name';
    }

    if (!values.message) {
        errors.message = 'Enter a Message';
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'PostMessage'
})(Form);
