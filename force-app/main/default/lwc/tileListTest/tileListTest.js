import { LightningElement, wire } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

import childRecords  from '@salesforce/apex/TileControlDev.allChildRecords';

export default class TileListTest extends NavigationMixin{LightningElement} {
    isVisble = true;
    searchKey;
    childData ;
    
    childRecords()
        .then(result => {
            this.childData = result;
        })
        .catch(error => {
            // TODO Error handling

        });
   //alert(childData);
        //console.log(childData);
}