import { LightningElement, wire, api } from 'lwc';
//import {NavigationMixin} from 'lightning/navigation';
import getTestRecs from '@salesforce/apex/TestObjController.allRecords';
export default class TestObjModal extends LightningElement {
    @wire(getTestRecs) AllRecords;
    //@wire(getTestRecs) alRecs().then(result).catch();
    RecordId;
    TestRecord;

    
//    @api set objid(value){
//         this.RecordId = value;
//     }


    // handleOnClick(){             //when clicked, this function opens the record page
    //     this[NavigationMixin.Navigate]({
    //         type: 'standard__recordPage',
    //         attributes: {
    //             recordId: 'a03B0000002tEurIAE',
    //             objectApiName: 'TestObj__c', // objectApiName is optional
    //             actionName: 'view'
    //         }
    //     });
    // }

}