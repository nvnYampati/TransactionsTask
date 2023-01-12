import { LightningElement, wire } from 'lwc';
import childRecords  from '@salesforce/apex/TileControlDev.allChildRecords';
import {NavigationMixin} from 'lightning/navigation';
export default class TestTile extends NavigationMixin(LightningElement) {
    buttonProp = 'Click Me';
    Counter = 0;
    //imageURL;
    AllRecords;
    // onClickHandler(event){
    //     this.Counter++;
    //     this.buttonProp=this.Counter;
    // }
    firstName = '';
    lastName = '';
@wire(childRecords)AllRecords;

    onClickHandler(event){
        const field = event.target.name;
        if (field === 'firstName') {
            this.firstName = event.target.value;
        } else if (field === 'lastName') {
            this.lastName = event.target.value;
        }
    }

    get uppercasedFullName() {
        return `${this.firstName} ${this.lastName}`.toUpperCase();
    }

}