import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class TryThisItem extends NavigationMixin(LightningElement) {
    //@api testObj;                    // now this component gets an attribute on its element in the doc
    navUrlId;                    //if navigation link is to be generated
    recId;
    testObj;
    @api set recordId(value){               //this get,set sequence must be tested 
        this.testObj = value;
        this.navUrlId = value.id;
    }
    
    get recordId(){             
        return this.testObj;
    }; // can it get data?
    
    handleOnClick(){ // action tags handler
        //const obj = event.target.value ; 
        
        this[NavigationMixin.Navigate]({
                    type: 'standard__recordPage',
                    attributes: {
                        recordId: this.navUrlId,
                        //recordId: this.record,        //event.detail.value,
                        objectApiName: 'TestObj__c',    // objectApiName is optional
                        actionName: 'view'
                    }
                });
    }
   
    //setup the attribute to get data 
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