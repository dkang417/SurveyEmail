// shows a form for a user to add input
import _ from 'lodash';
// lodash helps us map through array
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';


class SurveyForm extends Component {
    renderFields() {
        return _.map(formFields, ({label, name}) => {
            return (
                <Field key={name} component={SurveyField} type="text" label={label} name={name} />
            );
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    {this.renderFields()}
                    <Link to="/surveys" className="red btn-flat white-text" >
                    Cancel
                    </Link>        
                    <button  type="submit" className="teal btn-flat right white-text">Next <i className="material-icons right">done</i></button>
                </form>    
            </div>
        );
   }
}
function validate(values) {
    const errors = {};
    errors.recipients = validateEmails(values.recipients || '');
    // if (!values.title) {
    //     errors.title = 'You must provide a title';
    // }
    // if (!values.subject) {
    //     errors.subject = 'You must provide a subject';
    // }
    // if (!values.body) {
    //     errors.body = 'You must provide a body';
    // }
    // dry up above code here:
    _.each(formFields, ({ name }) => {
        if (!values[name]) {
            errors[name] = 'You must provide a value';
        }
    });



    return errors;
}
export default reduxForm({
    validate,
    form:'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);
