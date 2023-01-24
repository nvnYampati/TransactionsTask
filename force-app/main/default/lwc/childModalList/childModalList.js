import { LightningElement, wire } from 'lwc';
import getChildRecords from '@salesforce/apex/TestObjController.allChildRecords';

export default class ChildModalList extends LightningElement {
    @wire(getChildRecords) allChildRecords;
}