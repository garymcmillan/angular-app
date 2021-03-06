import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromApp from './store/reducers/app.reducers';
import * as filesActions from './store/actions/files.actions';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    files: Array<any>;
    filesState;
    filesSubscription;
    openedFolder: string;

    constructor(private store: Store<fromApp.AppState>) {
        this.store.dispatch(new filesActions.GetFiles());
    }

    ngOnInit() {
        this.filesState = this.store.select('files');
        this.filesSubscription = this.filesState.subscribe((filesState) => {
            this.files = filesState.files
        });
    }

    toggleFolder(folder: string) {
        if (this.openedFolder === folder) {
            this.openedFolder = null;
        } else {
            this.openedFolder = folder;
        }
    }

    sort(sortBy: string) {
        this.store.dispatch(new filesActions.SortFiles(sortBy));
    }

    search(event) {
        this.store.dispatch((new filesActions.SearchFiles(event.target.value)))
    }
}
