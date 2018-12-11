import {Action} from '@ngrx/store';

export const GET_FILES = 'GET_FILES';
export const SET_FILES = 'SET_FILES';
export const SORT_FILES = 'SORT_FILES';
export const SEARCH_FILES = 'SEARCH_FILES';
export const SET_SEARCH_RESULTS = 'SET_SEARCH_RESULTS';


export class GetFiles implements  Action {
    readonly  type = 'GET_FILES';
}
export class SetFiles implements Action {
    readonly type = 'SET_FILES';

    constructor(public payload: Array<any>) {}
}
export class SetSearchResults implements Action {
    readonly type = 'SET_SEARCH_RESULTS';

    constructor(public payload: Array<any>) {}
}
export class SortFiles implements Action {
    readonly type = 'SORT_FILES';

    constructor(public payload: string) {}
}
export class SearchFiles implements Action {
    readonly type = 'SEARCH_FILES';

    constructor(public payload: string) {}
}

export type AttributesActions =
    GetFiles |
    SetFiles |
    SetSearchResults |
    SortFiles |
    SearchFiles;
