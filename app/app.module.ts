import { NgModule, Component } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { AppComponent } from "./app.component"
import { Collection } from "./collection/collection.component"
import { MasterCollection } from "./master/master.component"
import { sharedService } from "./shared/data.share.service"
import {UserForm} from "./formDemo/form.component"
import { FormsModule }   from '@angular/forms';

@NgModule({

    imports: [BrowserModule,FormsModule],
    declarations: [AppComponent, Collection, MasterCollection,UserForm],
    bootstrap: [AppComponent],
    providers: [sharedService]

})
export class AppModule {

}