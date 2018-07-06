import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
// import './header.css'

// const style = {
//     margin: 12,
//   };

export class HeaderBar extends React.Component {
    logOut() {
        this
            .props
            .dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        // Only render the log out button if we are logged in
        let logOutButton;
        if (this.props.loggedIn) {
            logOutButton = (
                <button
                // <FlatButton
                    // label="Log out" 
                    // primary={true} 
                    // style={style} 
                    // type="submit"
                    onClick={() => this.logOut()}
                />
            );
        }
        return (
            <div className="header">
                <header>
                    <h1 className="banner">WHAT DO YOU MEME?
                    </h1>
                </header>
                <div className="logout-button">
                    {logOutButton}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);
