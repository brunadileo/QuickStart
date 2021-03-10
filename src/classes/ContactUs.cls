public class ContactUs {
    @AuraEnabled
    public static string CreateCase(String Description,String Subject){
        List<FieloPLT__Member__c> FieloMember=[select id,name, FieloPLT__Contact__c from FieloPLT__Member__c where FieloPLT__User__c =: UserInfo.getUserId()]; 
        List<Contact> con = [select Id,AccountId,Email,Phone from Contact where Id=:FieloMember[0].FieloPLT__Contact__c];
        Case cs= new Case();
        cs.Description=Description;
        cs.Subject=Subject;
        cs.Origin='Email';
        if(con[0].AccountId!=null){
            cs.AccountId=con[0].AccountId;
        }
        if(con[0].Id!=null){
            cs.ContactId=con[0].Id;
        }
        insert cs;
        return null;
    }
}