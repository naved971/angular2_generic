import { NgModule, Component } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { AppComponent } from "./app.component"
import { Collection } from "./collection/collection.component"
import { MasterCollection } from "./master/master.component"
import { sharedService } from "./shared/data.share.service"

@NgModule({

    imports: [BrowserModule],
    declarations: [AppComponent, Collection, MasterCollection],
    bootstrap: [AppComponent],
    providers: [sharedService]

})
export class AppModule {

}