import { LightningElement, api } from 'lwc';
import childModal from 'c/childObjModal';
export default class ModalListItem extends LightningElement {

    @api testRecord;            //a single record is passed from parent, for loop tag in parent html
   
    async openChildModal() {
        const result =  await childModal.open({
            size: 'large',
            description: 'Accessible description of modal\'s purpose',
            testChildObjId: this.testRecord.Id,
        });
        // if modal closed with X button, promise returns result = 'undefined'
        // if modal closed with OK button, promise returns result = 'okay'
        console.log(result);
    }
}