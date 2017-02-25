import { Component, OnInit } from "@angular/core"
import { sharedService, MasterCollectionInfo } from "../shared/data.share.service"
@Component({
    moduleId: module.id,
    selector: "collection-my",
    templateUrl: "./collection.component.html"
})

export class Collection implements OnInit {
    collectable: Array<MasterCollectionInfo>;
    removeCollectableItems;
    constructor(private collectionService: sharedService) {

    }
    ngOnInit() {
        this.collectable = this.collectionService.getCollectionInfo();
        this.removeCollectableItems = this.collectionService.removeCollectableItems.bind(this.collectionService);

    }


}