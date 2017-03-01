import { Component } from '@angular/core';
import {MdSnackBar} from "@angular/material";
import {Router} from "@angular/router";

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css'],
})
export class FirstpageComponent {
  parentRouter : Router;

  constructor(private _snackbar: MdSnackBar, _router: Router) {
    this.parentRouter=_router;
  }

  myNav(){
  this.parentRouter.navigateByUrl('/secondpage');

  }

  showSnackbar() {
    this._snackbar.open('YUM SNACKS','hello',{duration:500});

  }

}
