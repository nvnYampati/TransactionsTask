import { LightningElement, wire, track } from 'lwc';

import getTestRecs from '@salesforce/apex/TestObjController.allRecords';

export default class BaseNavList extends LightningElement {
 

    @wire(getTestRecs) AllRecords;      //fetch records from controller
    
    @track selectedRecord;

}