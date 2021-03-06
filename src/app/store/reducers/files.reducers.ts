import * as AppActions from '../actions/files.actions';

export interface State {
    files: Array<any>;
    searchResults: Array<any>;
}
const initialState = {
    files: null,
    searchResults: null,
};

export function filesReducer(state = initialState, action: AppActions.AttributesActions) {
    switch (action.type) {
        case AppActions.SET_FILES:
            return {
                ...state,
                files: action.payload
            };
        case AppActions.SET_SEARCH_RESULTS:
            return {
                ...state,
                searchResults: action.payload
            };
        default:
            return state;
    }

}

