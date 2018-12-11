import * as AppActions from '../actions/files.actions';

export interface State {
    files: Array<any>;
}
const initialState = {
    files: null,
};

export function filesReducer(state = initialState, action: AppActions.AttributesActions) {
    switch (action.type) {
        case AppActions.SET_FILES:
            return {
                ...state,
                files: action.payload
            };
        default:
            return state;
    }

}

