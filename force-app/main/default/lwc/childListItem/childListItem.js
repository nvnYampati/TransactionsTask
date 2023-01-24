import { LightningElement,api } from 'lwc';

export default class ChildListItem extends LightningElement {
    @api childRecord;
    
    handleOnClick(event){ // action tags handler
        event.preventDefault();

        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.childRecord.Id,     //this.navUrlId
                objectApiName: 'TestChildObj__c',    // objectApiName is optional
                actionName: 'view'
            }
        });
    }
}