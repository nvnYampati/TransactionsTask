import { LightningElement } from 'lwc';

export default class DemoLifecycleChild extends LightningElement {
    constructor(){
        super();
        alert('this is from constructor');
    }
    renderedCallback(){
        alert('this is from renderedCallback');

    }
    disconnectedCallback(){
        alert('this is from disconnectedCallback');

    }
    errorCallback(){
        alert('this is from errorCallback');

    }
    connectedCallback(){
        alert('this is from connectedCallback');

    }
}