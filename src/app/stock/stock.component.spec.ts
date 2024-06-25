import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockComponent } from './stock.component';
import {BrowserDynamicTestingModule} from "@angular/platform-browser-dynamic/testing";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {Overlay} from "@angular/cdk/overlay";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {HttpClient} from "@angular/common/http";

describe('StockComponent', () => {
  let component: StockComponent;
  let fixture: ComponentFixture<StockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockComponent ],
      imports:[BrowserDynamicTestingModule,HttpClientTestingModule,MatDialogModule],
      providers:[HttpClient,MatDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
