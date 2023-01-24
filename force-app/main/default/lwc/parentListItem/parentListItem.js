import { LightningElement, api } from 'lwc';

export default class ParentListItem extends LightningElement {
    @api parentRecord;
    handleOnClick(event){
        event.preventDefault();
        this.dispatchEvent(
            new CustomEvent( 'parentselect', //define the event and make its handler on selector
                {
                    detail: this.parentRecord.Id
                }
            )
        );
    }
}