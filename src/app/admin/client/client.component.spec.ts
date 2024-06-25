import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientComponent } from './client.component';
import {BrowserDynamicTestingModule} from "@angular/platform-browser-dynamic/testing";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {Overlay} from "@angular/cdk/overlay";
import {InjectionToken} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('ClientComponent', () => {
  let component: ClientComponent;
  let fixture: ComponentFixture<ClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientComponent ],
      imports:[BrowserDynamicTestingModule,MatDialogModule,HttpClientTestingModule],
      providers:[MatDialog,HttpClient]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
