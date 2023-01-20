import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class TryThisItem extends NavigationMixin(LightningElement) {
//export default class TryThisItem extends LightningElement {
    //@api testObj;                    // now this component gets an attribute on its element in the doc
    
    //recId;
    @api testRecord;
    //@api testRecordId;
   // @track navUrlId = this.testRecord.id;                    //if navigation link is to be generated
    // @api set recordId(value){               //this get,set sequence must be tested 
    //     this.testObj = value;
    //     this.navUrlId = value.id;
    // }
    // get recordId(){             
    //     return this.testObj;
    // }; // can it get data?   

   // stringObject = JSON.stringify(testRecord);
    handleOnClick(event){ // action tags handler
               
                // 1. Prevent default behavior of anchor tag click which is to navigate to the href url
                event.preventDefault();
                // 2. Read about event best practices at http://developer.salesforce.com/
                // const recordSelectEvent = new CustomEvent('recordSelect', {
                //     detail: this.testRecord.Id
                // });
                // // 3. Fire the custom event
                // this.dispatchEvent(recordSelectEvent);
        
        //const obj = event.target.value ; 
        console.log(this.testRecordId);
        this[NavigationMixin.Navigate]({
                    type: 'standard__recordPage',
                    attributes: {
                        recordId: this.testRecord.Id,     //this.navUrlId,
                        //recordId: this.record,        //event.detail.value,
                        objectApiName: 'TestObj__c',    // objectApiName is optional
                        actionName: 'view'
                    }
                });
    }
   

}