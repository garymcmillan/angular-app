import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { FolderContentsComponent } from './folder-contents/folder-contents.component';

const appRoutes: Routes = [
  { path: '', component: OverviewComponent, children: [
   { path: ':id', component: FolderContentsComponent}
 ]}
];

@NgModule({
  imports: [
    //RouterModule.forRoot(appRoutes)
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
