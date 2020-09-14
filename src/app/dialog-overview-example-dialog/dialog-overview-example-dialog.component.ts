import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog'
import { Message } from '../message';

export interface DialogData {
  message:string
}
@Component({
  selector: 'app-dialog-overview-example-dialog',
  templateUrl: './dialog-overview-example-dialog.component.html',
  styleUrls: ['./dialog-overview-example-dialog.component.css']
})
export class DialogOverviewExampleDialog implements OnInit {

  

  constructor(public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { 
    }


    onNoClick(): void {
      this.dialogRef.close();
      
    }

  ngOnInit(): void {
  }

}
