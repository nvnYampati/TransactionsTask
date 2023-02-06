import { LightningElement, api } from 'lwc';

export default class TestObjTile extends LightningElement {
    @api parentRecord;
    
    handleOnCLick(event){           // on test record tile click, an event is sent
        event.preventDefault();
    
        this.dispatchEvent(
            new CustomEvent('parentselect',
                {
                    detail : {      // here detail is a key-object, usually it's a key-value, even a record can be loaded
                        value : this.parentRecord.Id,
                        name : this.parentRecord.Name
                        }
                }
            )
        );
    }
}