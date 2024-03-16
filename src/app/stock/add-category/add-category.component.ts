import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
  closeDialog: boolean = false;

  categoryFormGroup: FormGroup | any;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.categoryFormGroup = this.fb.group({
      name: '',
      description: ''
    })
  }

  submit() {
    console.log(this.categoryFormGroup.value);
    this.closeDialog = true;
  }
}
