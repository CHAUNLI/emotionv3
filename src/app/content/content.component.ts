import {Component,  Optional} from '@angular/core';
import {MdDialog, MdDialogRef, MdSnackBar} from '@angular/material';
import {Router} from "@angular/router";
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent  {


  title = 'app works!';
  progress: number = 0;
  lastDialogResult: string;
  constructor(private _dialog: MdDialog, private _snackbar: MdSnackBar) {


    // Update the value for the progress-bar on an interval.
    setInterval(() => {
      this.progress = (this.progress + Math.floor(Math.random() * 4) + 1) % 100;
    }, 200);
  }
  openDialog() {
    let dialogRef = this._dialog.open(DialogContent);


    dialogRef.afterClosed().subscribe(result => {
      this.lastDialogResult = result;
    })
  }

  showSnackbar() {
    this._snackbar.open('YUM SNACKS', 'CHEW');

  }

}@Component({
  templateUrl: './app.dialog.html'
})
export class DialogContent {
  constructor(@Optional() public dialogRef: MdDialogRef<DialogContent>) { }}

