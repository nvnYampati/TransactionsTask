import { LightningElement, wire, api } from 'lwc';
//import {NavigationMixin} from 'lightning/navigation';
import getTestRecs from '@salesforce/apex/TestObjController.allRecords';
//import  component
export default class ListToNavigate extends LightningElement {
   
    @wire(getTestRecs) AllRecords;
    //@wire(getTestRecs) alRecs().then(result).catch();
    TestRecord;
    // handleOnClick(event){
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