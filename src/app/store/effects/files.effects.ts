import {Actions, Effect} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, map, switchMap, withLatestFrom } from 'rxjs/operators';
import * as FilesActions from '../actions/files.actions';
import {Store} from '@ngrx/store';
import * as fromApp from '../reducers/app.reducers';

@Injectable()
export class FilesEffects {
    @Effect () getFolders = this.actions$.pipe(
            filter(action => action.type === FilesActions.GET_FILES),
            map((action: FilesActions.GetFiles) => {
                return action;
            }),
            switchMap(() => {
                return this.http.get('assets/data.json', {});
            }),
            map(
                (res) => {
                    return {type: FilesActions.SET_FILES, payload: res};
                }
            )
        );
    @Effect () sortFolders = this.actions$.pipe(
            filter(action => action.type === FilesActions.SORT_FILES),
            map((action: FilesActions.SortFiles) => {
                return action.payload;
            }),
            withLatestFrom(this.store, (action, state) => ({action, state})),
            map(
                (action) => {
                    const sortBy = action.action;
                    const oldOrder = [...action.state.files.files];
                    const newOrder = oldOrder.sort(
                        (a,b) => (a[sortBy] > b[sortBy]) ? 1 : ((b[sortBy] > a[sortBy]) ? -1 : 0)
                    );
                    console.log(newOrder);
                    return {type: FilesActions.SET_FILES, payload: newOrder};
                }
            )
        );

    @Effect () searchFiles = this.actions$.pipe(
            filter(action => action.type === FilesActions.SEARCH_FILES),
            map((action: FilesActions.SearchFiles) => {
                return action.payload;
            }),
            withLatestFrom(this.store, (action, state) => ({action, state})),
            map(
                (action) => {
                    const allfiles = [...action.state.files.files];
                    let results;
                    return {type: FilesActions.SET_SEARCH_RESULTS, payload: results};
                }
            )
        );

    constructor(
        private actions$: Actions,
        private store: Store<fromApp.AppState>,
        private http: HttpClient) {}
}
