import * as FilesReducer from './files.reducers';
import {ActionReducerMap} from '@ngrx/store';

export interface AppState {
    files: FilesReducer.State;
}

export const reducers: ActionReducerMap<AppState> = {
    files: FilesReducer.filesReducer,
};