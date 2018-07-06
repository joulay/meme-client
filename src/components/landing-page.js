import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import './landing-page.css';

export function LandingPage(props) {

    return (
        <div className="home">
            <img className="yao" src="https://vignette.wikia.nocookie.net/cardfight/images/c/cb/Yao-ming-meme.jpg/revision/latest?cb=20150317072431" alt="yao ming" />

            <p className="landing-page-info">What if I told you, a meme acts as a unit for carrying cultural ideas and references. <br/>
            They are a viral phenomenon that evolve analogous to that of a biological evolution.<br/>
            They're essentially internet greatness. <br/>
            Enjoy learning the names of some dank memes with spaced repitition</p>

        </div>
    );
}



const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);