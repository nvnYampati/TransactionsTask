/* c/myModal.js */

import { api } from 'lwc';
import LightningModal from 'lightning/modal';

import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { createRecord } from 'lightning/uiRecordApi';

import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';


export default class unitModal extends LightningModal {
    @api content;

    handleOkay() {
        this.close('okay');
    }

   
}
