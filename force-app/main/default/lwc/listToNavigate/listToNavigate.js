import { LightningElement, wire,track } from 'lwc';
//import {NavigationMixin} from 'lightning/navigation';
import getTestRecs from '@salesforce/apex/TestObjController.allRecords';
//import  component
export default class ListToNavigate extends LightningElement {
//export default class ListToNavigate extends NavigationMixin(LightningElement) {   

    @wire(getTestRecs) AllRecords;
    //@wire(getTestRecs) alRecs().then(result).catch();
    @track selectedRecord;

    // handleSelected(event){
    //     console.log(event.detail);
    //     const navId = event.detail;
    //     this.selectedRecord = this.AllRecords.data.find(
    //         (record) => record.Id === navId
    //     );

    //     // this[NavigationMixin.Navigate]({             //attempt to navigate from here
    //     //     type: 'standard__recordPage',
    //     //     attributes: {
    //     //         recordId: this.selectedRecord.Id,                           //this.navUrlId,
    //     //         objectApiName: 'TestObj__c',    // objectApiName is optional
    //     //         actionName: 'view'
    //     //     }
    //     // });
    // }

   

    // handleOnClick(event){    // this should be on parent?
    //     //dispatch product or testobj?
    //     this.dispatchEvent( new CustomEvent({           // dispatch a custom event instance
    //         detail : testObj.id                        // in detail 
    //     })
    //     );
    // }
    
    //    @api set objid(value){
    //         this.RecordId = value;
    //     }

}