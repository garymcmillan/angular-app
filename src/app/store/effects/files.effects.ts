import {Actions, Effect} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, map, switchMap } from 'rxjs/operators';
import * as FolderActions from '../actions/files.actions';
import {Store} from '@ngrx/store';
import * as fromApp from '../reducers/app.reducers';

@Injectable()
export class FilesEffects {
    @Effect () getFolders = this.actions$.pipe(
            filter(action => action.type === FolderActions.GET_FILES),
            map((action: FolderActions.GetFiles) => {
                console.log('here');
                return action;
            }),
            switchMap(() => {
                return this.http.get('assets/data.json', {});
            }),
            map(
                (res) => {
                    console.log(res);
                    return {type: FolderActions.SET_FILES, payload: res};
                }
            )
        );

    constructor(
        private actions$: Actions,
        private store: Store<fromApp.AppState>,
        private http: HttpClient) {}
}
