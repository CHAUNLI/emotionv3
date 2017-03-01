import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent} from './app.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import {routing} from "./app.rounting";
import { ContentComponent, DialogContent } from './content/content.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SecondpageComponent } from './secondpage/secondpage.component';
import { ThirdpageComponent } from './thirdpage/thirdpage.component';
import { FourthpageComponent } from './fourthpage/fourthpage.component';
import { FifthpageComponent } from './fifthpage/fifthpage.component';
import { AddtiononeComponent } from './addtionone/addtionone.component';
import { AddtiontwoComponent } from './addtiontwo/addtiontwo.component';
import { AddtionthreeComponent } from './addtionthree/addtionthree.component';
import { AddtionfourComponent } from './addtionfour/addtionfour.component';
import { AddtionfiveComponent } from './addtionfive/addtionfive.component';
import { Addtiothree1Component } from './addtiothree1/addtiothree1.component';

@NgModule({
  declarations: [
    AppComponent, DialogContent, FirstpageComponent, ContentComponent, ToolbarComponent, SecondpageComponent, ThirdpageComponent, FourthpageComponent, FifthpageComponent, AddtiononeComponent, AddtiontwoComponent, AddtionthreeComponent, AddtionfourComponent, AddtionfiveComponent, Addtiothree1Component
  ],
  imports: [
    MaterialModule.forRoot(),
    routing,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  entryComponents: [DialogContent],
  bootstrap: [AppComponent]
})
export class AppModule { }
