import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AddCategoryComponent} from './add-category.component';
import {BrowserDynamicTestingModule} from "@angular/platform-browser-dynamic/testing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {HttpClient} from "@angular/common/http";
import {MAT_DIALOG_DATA, MatDialog, MatDialogContent, MatDialogModule, MatDialogRef} from "@angular/material/dialog";

describe('AddCategoryComponent', () => {
  let component: AddCategoryComponent;
  let fixture: ComponentFixture<AddCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddCategoryComponent],
      imports: [BrowserDynamicTestingModule, FormsModule, ReactiveFormsModule, HttpClientTestingModule, MatDialogModule],
      providers:[ { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },HttpClient]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AddCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
