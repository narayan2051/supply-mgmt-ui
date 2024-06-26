import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ApiService} from "../../../api.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.scss']
})
export class ClientInfoComponent implements OnInit {

  clientForm: any;
  closeDialog: boolean = false;


  constructor(private fb: FormBuilder, readonly apiService: ApiService, @Inject(MAT_DIALOG_DATA) private dialogData: any, private dialogRef: MatDialogRef<ClientInfoComponent>) {
  }

  ngOnInit(): void {
    this.clientForm = this.fb.group({
      name: [''],
      phone: [''],
      pan: [''],
      address: [''],
    });
  }

  submit() {
    console.log(this.clientForm.value);
    this.apiService.saveCompanyInfo(this.clientForm.value).subscribe(res => {
      this.dialogData = {action: "submit"}
      this.dialogRef.close(this.dialogData);
    });
  }

}
