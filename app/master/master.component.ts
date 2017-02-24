import { Component, OnInit } from "@angular/core"
import { sharedService, MasterCollectionInfo } from "../shared/data.share.service"

@Component({
    moduleId: module.id,
    selector: "master-collection",
    templateUrl: "./master.collection.html"
})



export class MasterCollection implements OnInit {
    masterData: Array<MasterCollectionInfo>
    constructor(private masterService: sharedService) {

    }
    ngOnInit() {
        this.masterData = this.masterService.getMasterCollection();
    }
}