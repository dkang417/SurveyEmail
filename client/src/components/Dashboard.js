import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <h5>Click Below to start a new survey to email out to Clients!</h5>
            <p>
                <Link to="/surveys/new" className="btn-floating btn-small red">
                    <i className="tiny material-icons">local_post_office</i>    
                </Link>
            </p>

        </div>
    );
};
export default Dashboard;
