import * as actionTypes from '../actions';

const initialState = {
    results: []
}

const resultReducer = (state = initialState, action) => {

    switch(action.type){
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results : state.results.concat({id: new Date(), value: state.counter})
            }
        case actionTypes.DELETE_RESULT:
            // const is = 2;
            // const newArray = [...state.results]
            // newArray.splice(id, 1);
            const updatedArray = state.results.filter(result => result.id !== action.resultElID);
            return {
                ...state,
                results : updatedArray
            }       
    }
    return state;
};

export default resultReducer;
