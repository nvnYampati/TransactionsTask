import { LightningElement, wire, track } from 'lwc';
//import getParentRecords from '@salesforce/apex/DualListController.parentList';
import getChildRecords from '@salesforce/apex/DualListController.relatedChildList';
import getParentRecords from '@salesforce/apex/DualListController.parentList';
export default class DualListSelector extends LightningElement {
    //ParentRecordList;
    @wire(getParentRecords) parentRecordList;
    childRecordList = [];
   
    @track updatedChildList=[];
    
    handleParentSelect(event){
        const parentRecId = event.detail.value;
        // this.updatedChildList = this.ChildRecordList.data.find(
        //              (record) => record.Id === parentRecId
        //         );
        getChildRecords({ parentId: '$parentRecId' })
        .then((result) => {
            this.ChildRecordList = result;
            this.error = undefined;
        })
        .catch((error) => {
            this.error = error;
            this.ChildRecordList = undefined;
        });
    }
}