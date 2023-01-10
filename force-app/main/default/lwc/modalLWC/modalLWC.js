/* c/myApp.js */

import { LightningElement } from 'lwc';
import MyModal from 'c/unitModal';

export default class ModalLWC extends LightningElement {
    async handleClick() {
        const result = await MyModal.open({
            size: 'large',
            description: 'Accessible description of modal\'s purpose',
            content: 'Passed into content api',
        });
        // if modal closed with X button, promise returns result = 'undefined'
        // if modal closed with OK button, promise returns result = 'okay'
        console.log(result);
    }
}
