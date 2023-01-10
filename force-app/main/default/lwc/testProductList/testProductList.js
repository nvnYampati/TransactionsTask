import { LightningElement, wire, api } from 'lwc';
import getChef from '@salesforce/apex/ChefController.getChef';
import Chef from '@salesforce/schema/Chef__c'
import ChefName from '@salesforce/schema/Chef__c.Name'
import { NavigationMixin } from 'lightning/navigation';

export default class TestProductList extends NavigationMixin(LightningElement){
    searchKey;
   tableCol=[
        {label:'Chef', fieldName : ChefName.fieldAPIName ,type:'Text'},
        {label:'Chef', fieldName : ChefName ,type:'Text'},
        {label:'Menu', fieldName : ChefName ,type:'Text'}
    ];
    //tableData;
    itemAction;
    prop;
    
    // @wire(getChef,{}).then(
    //     result=>{
    //         this.tableData = result
    //     }
    // ).catch(
    //     error=>{
    //         console.log(error);
    //     }
    // );
   // @wire(getChef)tableData;
   @wire(getChef,{name:'$searchKey'})tableData;
 
    tableData = this.Chefs;
    searchChef(event){
        this.searchKey = event.target.value;
        this.prop = this.searchKey;
        //@wire(getChef,{name:'$searchKey'})this.tableData;
    }

}