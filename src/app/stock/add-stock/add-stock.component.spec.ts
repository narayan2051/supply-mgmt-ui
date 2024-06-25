import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStockComponent } from './add-stock.component';
import {BrowserDynamicTestingModule} from "@angular/platform-browser-dynamic/testing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatAutocompleteModule} from "@angular/material/autocomplete";

describe('Add Stock Component', () => {
  let component: AddStockComponent;
  let fixture: ComponentFixture<AddStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStockComponent ],
      imports:[BrowserDynamicTestingModule, FormsModule, ReactiveFormsModule,MatAutocompleteModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
