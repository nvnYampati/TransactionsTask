public class DualListController {
	@AuraEnabled(cacheable = true)
    public static List<TestObj__c> ParentList(){
        return [SELECT Id, Name FROM TestObj__c];
    }
    
    @AuraEnabled(cacheable = true)
    public static List<TestChildObj__c> ChildList(string parentId){
        //string idString = ParentId+'%';
        list<TestChildObj__c> ChildObjs =  [SELECT Id, Name FROM TestChildObj__c WHERE TestObj__c =:ParentId];
        if(ChildObjs.size()>0){
            return ChildObjs;
        }
        else{
            return null;
        }
    }
}