import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Params, Router,RouterModule, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';

import { FolderContentsComponent } from './folder-contents.component';

import { DataService } from '../services/data.service';

describe('FolderContentsComponent', () => {
  let component: FolderContentsComponent;
  let fixture: ComponentFixture<FolderContentsComponent>;
  const fakeActivatedRoute = {
    snapshot: { data: {  } }
  } as ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterModule, RouterTestingModule ],
      declarations: [ FolderContentsComponent ],
      providers: [{provide: ActivatedRoute, useValue: fakeActivatedRoute}, DataService, HttpClient ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FolderContentsComponent);
    component = fixture.componentInstance;
    let userService = fixture.debugElement.injector.get(DataService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check if a folder is selected', () => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('span').textContent).toContain('There seems to be an error');
  });
});
