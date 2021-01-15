import {TEST_RESULT, TEST_WORD} from "./words.types";


const INITIAL_STATE = {
    result: {}, testing: false, error: {}
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case TEST_RESULT:
            return {...state, result: action.result, error: action.error, testing: false,};

        case TEST_WORD:
            return {
                ...state, testing: true,
            };

        default:
            return state;

    }

};

export default reducer;
