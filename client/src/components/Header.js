import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// connecting authreducer to verify user in header
import { connect } from 'react-redux';

class Header extends Component {
    // checks if user is logged in
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return <li><a href="/auth/google">Login With google</a></li>;
                
            default:
                return <li><a href="/api/logout">Logout</a></li>;    
        }
    }
    render() {
        console.log(this.props);
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link
                        to={this.props.auth ? '/surveys' : '/'}
                        className="left brand-logo"
                    >
                        Emaily    
                    </Link>

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