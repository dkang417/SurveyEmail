// surveynew shows surveyform and surveyform review
import React, { Component } from 'react';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { new: true };
    // }
    // initialize our state using babel. same as above code:
    state = { showFormReview: false };

    renderContent() {
        if (this.state.showFormReview) {
            return <SurveyFormReview
                onCancel={() => this.setState({ showFormReview: false })}    
            />;
        }
        return <SurveyForm onSurveySubmit={() => this.setState({ showFormReview: true })} />;
    }

    render() {
        return (
            <div>
               {this.renderContent()}
            </div>
        );
   }
}
export default SurveyNew;
