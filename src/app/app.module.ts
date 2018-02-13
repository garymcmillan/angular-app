import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { DataService } from './services/data.service';
import { OverviewComponent } from './overview/overview.component';
import { FolderContentsComponent } from './folder-contents/folder-contents.component';


@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    FolderContentsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
