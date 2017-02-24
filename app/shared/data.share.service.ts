import { Injectable } from '@angular/core'
import { MasterCollectionInfo } from "./MasterCollectionInfo"
import { CollectionInfo } from './CollectionsInfo'
@Injectable()
class sharedService {

    private masterCollection: Array<MasterCollectionInfo> = [];
    private collection: Array<CollectionInfo> = [];

    constructor() {
        var masterObject: MasterCollectionInfo;//= { title: "ATitle", type: "AType" };


        for (let i = 0; i < 10; i++) {

            masterObject = { title: "Atitle " + i, type: "AType " + i }
            this.masterCollection.push(masterObject);

        }


    }


    getMasterCollection(): Array<MasterCollectionInfo> {
        return this.masterCollection;
    }
    getCollectionInfo(): Array<CollectionInfo> {
        return this.collection;
    }
}

export { sharedService, MasterCollectionInfo, CollectionInfo } 