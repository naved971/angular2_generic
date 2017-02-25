import { Injectable } from '@angular/core'
import { MasterCollectionInfo } from "./MasterCollectionInfo"
import { CollectionInfo } from './CollectionsInfo'
@Injectable()
class sharedService {

    private masterCollection: Array<MasterCollectionInfo> = [];
    private collection: Array<CollectionInfo> = [];

    constructor() {
        var masterObject: MasterCollectionInfo;//= { title: "ATitle", type: "AType" };


        for (let i = 0; i < 5; i++) {

            masterObject = { title: "Atitle " + i, type: "AType " + i }
            this.masterCollection.push(masterObject);

        }


    }

    setCollectionInfo(item: MasterCollectionInfo) {
        if (this.collection.indexOf(item) == -1) {
            this.collection.push(item);
        }
    }

    getMasterCollection(): Array<MasterCollectionInfo> {
        return this.masterCollection;
    }
    getCollectionInfo(): Array<CollectionInfo> {
        return this.collection;
    }
    removeCollectableItems (item:MasterCollectionInfo){
        var currentIndex= this.collection.indexOf(item);
        this.collection.splice(currentIndex,1);
    }

}

export { sharedService, MasterCollectionInfo, CollectionInfo } 