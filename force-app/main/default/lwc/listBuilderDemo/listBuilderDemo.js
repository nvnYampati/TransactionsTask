import { LightningElement, wire, track } from 'lwc';
import getChildRecords from '@salesforce/apex/TestObjController.allChildRecords';
import sendChildRecordId from '@salesforce/apex/TestObjController.listBuilderMethod';


export default class ListBuilderDemo extends LightningElement {
    @wire(getChildRecords) recordList;      //get record list from Org

    eventDetail;                // capture id from event detail object
    @track idList=[];          // put the eventDeetail in this array, send this to org 
    listLabel;                 // capture name from event detail object
    lishowText=[];              // add the show text in this array, show this on lwc

    handleOnParentSelect(event){
        this.eventDetail = event.detail.value;
        this.listLabel = event.detail.name;
        const showText = event.detail.value+' '+event.detail.name;
        if(!this.idList.includes(this.eventDetail)){
            this.idList.push( this.eventDetail);
            this.lishowText.push(showText);
        }
    }

    refreshList(){              // refresh the list of labels and ids
        this.idList = [];
        this.lishowText = [];
    }

    sendList(){                 // send the list of ids to Org using a controller
        alert(this.idList);
        sendChildRecordId({idList : this.idList});       // imported it, calling imperatively 
                                                        // and passing the parameters idList with the present idList array
    }

}  
    // uniqueChars = someList.filter((c, index) => {
    //     return someList.indexOf(c) === index;
    // });
    // someList = uniqueChars;
    //this.someList = dupList.filter((item, index) => dupList.indexOf(item) === index);
    //dupList=[];
    //finalList=[...new Set(someList)];

    // noDuplicate(list) {        //Not working, to avoid duplicate values
    // return list.filter((item, 
    //     index) => list.indexOf(item) === index);
    // }
    // finalList = noDuplicate(someList);

