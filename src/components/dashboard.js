import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import {fetchQuestion, fetchLoad, checkAnswer} from '../actions/question';
import QuestionForm from './questionForm';
import Score from './score';
import './dashboard.css'

export class Dashboard extends React.Component {
    constructor(props) {
        super(props)
            this.state={
                currentQuestion: 0,
                response: "", 
                input: ""
            }
            this.loadNext=this.loadNext.bind(this) //take load next to place as same level as everything else
    }
    
    async componentDidMount() { //return loadNext, fixing prev bug
        await this.props.dispatch(fetchQuestion());
        await this.loadNext();
    }

    async loadNext() {
        this.props.dispatch(fetchLoad(this.props.questionArray[this.state.currentQuestion]));
        this.setState({
            currentQuestion: this.state.currentQuestion + 1,
            response: ""
        })
        await this.props.dispatch(fetchQuestion());  

    }

    async onSubmit(input) {
        const userInput = input
        const dbAnswer = this.props.currentQuestion.questions[0].answer
        if(userInput === dbAnswer) {
            this.setState({response: "YEEEEEEEEE! Correct"})
        } else {
            this.setState({response: `Incorrect. It's name is ${dbAnswer}`})
        }
        await this.props.dispatch(checkAnswer(input))

        
    }

    render() {
        return (
            <div className="dashboard">
                <div className="dashboard-username">
                    oh haaay {this.props.username}
                </div>
                <div className="img-question">
                <QuestionForm onSubmit={(e)=>this.onSubmit(e)}
                    proploadNext={this.loadNext}
                    propQuestion={this.props.currentQuestion} />
                </div>
                <div className="response">{this.state.response}</div>
                <Score />
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username, name: `${currentUser.fullname}`,
        questionArray: state.auth.currentUser.questions,
        currentQuestion: state.question.currentQuestion
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
