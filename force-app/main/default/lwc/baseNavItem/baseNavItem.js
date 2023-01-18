import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class BaseNavItem extends NavigationMixin(LightningElement) {

    @api testRecord;            //a single record is passed from parent, for loop tag in parent html
   
    handleOnClick(event){ 
        event.preventDefault();     //we dont default behaviour of event to bubble above DOM elements
        
        this[NavigationMixin.Navigate]({        //navigation mixin in action
            type: 'standard__recordPage',
            attributes: {
                recordId: this.testRecord.Id,     //navigates to this record page
                objectApiName: 'TestObj__c',   
                actionName: 'view'
                    }
            }
        );
    }
   

}