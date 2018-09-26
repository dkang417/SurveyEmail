import React, { Component } from 'react';

// connecting authreducer to verify user in header
import { connect } from 'react-redux';

class Header extends Component {
    // checks if user is logged in
    renderContent() {
        switch (this.props.auth) {
            case null:
                return 'Still deciding';
            case false:
                return 'im logged out';
            default:
                return 'im logged in';    
        }
    }
    render() {
        console.log(this.props);
        return (
            <nav>
                <div className="nav-wrapper">
                    <a className="left brand-logo">
                        Emaily    
                    </a>

                    <ul className="right">
                       {this.renderContent()}
                    </ul>

                </div>
            </nav>
        );
    }
}
// checking state of authreducer
function mapStateToProps({auth}) {
    return {auth};
}
export default connect(mapStateToProps)(Header);