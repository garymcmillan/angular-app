import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {reducers} from './store/reducers/app.reducers';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import {FilesEffects} from './store/effects/files.effects';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot([FilesEffects]),
        StoreDevtoolsModule.instrument({
            maxAge: 5
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
