public with sharing class ChefController {
    @AuraEnabled(cacheable=true)
    public static List<Chef__C> getChef(string name){
        string keyword = name+'%';
        return [SELECT id, Name FROM Chef__c WHERE Name Like :keyword];
    }
}