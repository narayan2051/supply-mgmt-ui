import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {BrowserDynamicTestingModule} from "@angular/platform-browser-dynamic/testing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[BrowserDynamicTestingModule,FormsModule, ReactiveFormsModule, HttpClientTestingModule],
      providers:[HttpClient]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
