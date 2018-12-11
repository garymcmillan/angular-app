import {Action} from '@ngrx/store';

export const GET_FILES = 'GET_FILES';
export const SET_FILES = 'SET_FILES';


export class GetFiles implements  Action {
    readonly  type = 'GET_FILES';
}
export class SetFiles implements Action {
    readonly type = 'SET_FILES';

    constructor(public payload: Array<any>) {}
}

export type AttributesActions =
    GetFiles |
    SetFiles;
