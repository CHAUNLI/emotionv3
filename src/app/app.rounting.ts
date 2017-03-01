import {Routes, RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
import {FirstpageComponent} from "./firstpage/firstpage.component";
import {ContentComponent} from "./content/content.component";
import {ToolbarComponent} from "./toolbar/toolbar.component";
import {SecondpageComponent} from "./secondpage/secondpage.component";
import {ThirdpageComponent} from "./thirdpage/thirdpage.component";
import {FourthpageComponent} from "./fourthpage/fourthpage.component";
import {FifthpageComponent} from "./fifthpage/fifthpage.component";
import {AddtiononeComponent} from "./addtionone/addtionone.component";
import {AddtiontwoComponent} from "./addtiontwo/addtiontwo.component";
import {AddtionthreeComponent} from "./addtionthree/addtionthree.component";
import {AddtionfourComponent} from "./addtionfour/addtionfour.component";
import {AddtionfiveComponent} from "./addtionfive/addtionfive.component";
import {Addtiothree1Component} from "./addtiothree1/addtiothree1.component";
const APP_ROUTES: Routes = [
  {path: '', redirectTo: 'content', pathMatch: 'full' },
  {path: 'firstpage', component: FirstpageComponent},
  {path: 'secondpage', component: SecondpageComponent},
  {path: 'toolbar', component:ToolbarComponent},
  {path: 'content', component:ContentComponent},
  {path: 'thirdpage', component:ThirdpageComponent},
  {path: 'fourthpage', component:FourthpageComponent},
  {path: 'fifthpage', component:FifthpageComponent},
  {path: 'addtionone', component: AddtiononeComponent},
  {path: 'addtiontwo', component: AddtiontwoComponent},
  {path: 'addtionthree', component: AddtionthreeComponent},
  {path: 'addtionthree1', component: Addtiothree1Component},
  {path: 'addtionfour', component: AddtionfourComponent},
  {path: 'addtionfive', component:AddtionfiveComponent}
];
export const routing = RouterModule.forRoot(APP_ROUTES);
