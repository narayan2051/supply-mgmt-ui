import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ClientInfoComponent} from './client-info.component';
import {BrowserDynamicTestingModule} from "@angular/platform-browser-dynamic/testing";
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {HttpClient} from "@angular/common/http";

describe('ClientInfoComponent', () => {
  let component: ClientInfoComponent;
  let fixture: ComponentFixture<ClientInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientInfoComponent],
      imports: [BrowserDynamicTestingModule, FormsModule, ReactiveFormsModule, HttpClientTestingModule, MatDialogModule],
      providers: [{provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: {}}, HttpClient, MatDialog]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ClientInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
