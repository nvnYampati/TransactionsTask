import { LightningElement, wire, api } from 'lwc';
//import {NavigationMixin} from 'lightning/navigation';
import getTestRecs from '@salesforce/apex/TestObjController.allRecords';
//import  component
export default class ListToNavigate extends LightningElement {
    
    @wire(getTestRecs) AllRecords;
    // allRecords = [];
    // @wire(getTestRecs, {})
    // wiredRecords ({error, data}) {
    //     if (error) {
    //         // TODO: Error handling
    //     } else if (data) {
    //         this.allRecords = data.map(
    //             (record)=>(
    //                 ({
    //                     value : record.id,
    //                     label : record.name
    //                 })
    //             )
    //         );
    //     }
    // }
    //@wire(getTestRecs) alRecs().then(result).catch();
    TestRecord;
    navOnClick(){
        this.dispatchEvent(new CustomEvent( "RecordIdEvt",
        detail="something"
            //
        ));
    }
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