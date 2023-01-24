import { api, wire } from 'lwc';
import LightningModal from 'lightning/modal';

//import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';

import TEST_CHILD_OBJ from '@salesforce/schema/TestChildObj__c';
import NAME_FIELD from '@salesforce/schema/TestChildObj__c.Name';
import PIC_URL from '@salesforce/schema/TestChildObj__c.Picture_URL__c';


export default class ChildObjModal extends LightningModal  {
    //record comes this portal
    @api testChildObjId;
    // name = this.testChildObj.Name;
    // picUrl = this.testChildObj.Picture_URL__c;

    objectApiName = TEST_CHILD_OBJ;
    
    @wire(getRecord, { recordId: '$testChildObjId', fields: [NAME_FIELD, PIC_URL] })wiredRecord;

    //getters go below here 
    get name(){
        return getFieldValue(this.wiredRecord.data, NAME_FIELD);
    }
    get picUrl(){
        return getFieldValue(this.wiredRecord.data, PIC_URL);
    }

    handleOkay() {
        this.close('okay');
    }


}