import {combineReducers} from 'redux';


import wordsReducer from './Words/words.reducer';


const rootReducer = combineReducers({

    wordsReducer: wordsReducer,

});

export default rootReducer;
