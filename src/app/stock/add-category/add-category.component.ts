import {Component, EventEmitter, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../api.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  categoryFormGroup: FormGroup | any;

  constructor(private fb: FormBuilder, private apiService: ApiService,
              @Inject(MAT_DIALOG_DATA) private dialogData: any,
              private dialogRef: MatDialogRef<AddCategoryComponent>) {
  }

  ngOnInit(): void {
    this.categoryFormGroup = this.fb.group({
      name: ['', [Validators.required]],
      description: ''
    })
  }

  submit() {
    console.log(this.categoryFormGroup.value);
    let data = {...this.categoryFormGroup.value}
    this.apiService.saveCategory(data).subscribe(res => {
      this.dialogData={action:"submit"}
      this.dialogRef.close(this.dialogData);
    })
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
