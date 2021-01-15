import {TEST_RESULT, TEST_WORD} from "./words.types";


export function testWord(word) {
    return function (dispatch) {
        dispatch({type: TEST_WORD});
        fetch(`http://localhost:3000/iecho?text=${word}`)
            .then(response => response.json())
            .then(json => dispatch(showResult(json, {})))
            .catch(error => dispatch(showResult(error, {error: "error"})));
    };
};

export function showResult(result, error) {
    return {type: TEST_RESULT, result: result, error: error}
}
