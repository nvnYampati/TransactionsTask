import { LightningElement, wire } from 'lwc';
import childRecords  from '@salesforce/apex/TileControlDev.allChildRecords';
import {NavigationMixin} from 'lightning/navigation';
export default class TestTile extends NavigationMixin(LightningElement) {
    buttonProp = 'Click Me';
    Counter = 0;
    //imageURL;
    testObj;
    // onClickHandler(event){
    //     this.Counter++;
    //     this.buttonProp=this.Counter;
    // }
    firstName = '';
    lastName = '';
@wire(childRecords)testObj({error, data}) {
    if (error) {
        // TODO: Error handling
        console.log(error);
    } else if (data) {
        // TODO: Data handling
        this.testObj = data;
        console.log(data);
    }
}
imageURL = this.testObj.data.picture_url;
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