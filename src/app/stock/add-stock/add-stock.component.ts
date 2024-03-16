import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {state} from "@angular/animations";
import {map, Observable, startWith} from "rxjs";

@Component({
  selector: 'app-add',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.scss']
})
export class AddStockComponent implements OnInit {
  stockForm: any;
  closeDialog: boolean = false;
  units: string[] = ["KG", "Liter", "Dozen", "Cartoon", "Bottle"];
  categories: any[] = [
    {label: "Bar", value: "Bar"},
    {label: "Grocery", value: "Grocery"},
    {label: "Bakery", value: "Bakery"},
    {label: "Other", value: "Other"}];

  filteredCategories: Observable<any> | any;
  filteredUnits: Observable<any> | any;


  constructor(private fb: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    this.stockForm = this.fb.group({
      category: [''],
      name: [''],
      quantity: [''],
      price: [''],
      unit: ['']
    });
    this.filteredCategories = this.stockForm.controls['category'].valueChanges.pipe(
      startWith(''),
      map((value: string) => this.categories.filter(option => option.label.toLowerCase().includes(value.toLowerCase()))));

    this.filteredUnits = this.stockForm.controls['unit'].valueChanges.pipe(
      startWith(''),
      map((value: string) => this.units.filter(option => option.toLowerCase().includes(value.toLowerCase()))));
  }

  submit() {
    console.log(this.stockForm.value);
    this.closeDialog = true;
  }
}
