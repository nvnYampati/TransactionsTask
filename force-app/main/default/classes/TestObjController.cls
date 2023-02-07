public class TestObjController {
	@AuraEnabled(cacheable=true)
    public static list<testObj__c> allRecords(){
        return [SELECT Id, Name FROM TestObj__c LIMIT 200];
    }
    @AuraEnabled(cacheable=true)
    public static list<TestChildObj__c> allChildRecords(){
        return [SELECT Id, Name FROM TestChildObj__c LIMIT 200];
    }
    @AuraEnabled(cacheable=true)
    public static void listBuilderMethod(list<id> idList){
        system.debug('ID list');
        for(string str : idList){
            system.debug(str);
        }
    }
}