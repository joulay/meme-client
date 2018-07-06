import * as actions from '../actions/question';

const initialState = {
	question: [],
	currentQuestion: {},
	loading: false,
	error: null,

};

export default function questionReducer(state = initialState, action) {
	if (action.type === actions.FETCH_QUESTION_REQUEST) {
		return Object.assign({}, state, {
			loading: true
		});
    }
	else if (action.type === actions.FETCH_QUESTION_SUCCESS) {
		return Object.assign({}, state, {
			loading: false,
			currentQuestion: action.question
		});
    }
	else if (action.type === actions.FETCH_QUESTION_ERROR) {
		return Object.assign({}, state, {
			loading: false,
			error: action.error
		});
	}
	else if (action.type === actions.FETCH_LOAD_SUCCESS) {
		return Object.assign({}, state, {
			currentQuestion: action.question
		});
	}
	else if (action.type === actions.CHECK_ANSWER_REQUEST) {
        return Object.assign({}, state, {
			loading: true
		});
	}
	else if (action.type === actions.CHECK_ANSWER_SUCCESS) {
		return Object.assign({}, state, {
			loading: false
		});
	}
	else if (action.type === actions.CHECK_ANSWER_ERROR) {
		return Object.assign({}, state, {
			error: action.error
		});
	}

    return state;     
}
