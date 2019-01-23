({
    doInit : function(component, event) {
        /*
        component.find("contactRecordCreator").getNewRecord(
        	"Contact",
            null,
            false,
			null
        ); */
    },
    handleOnload : function(component, event) {
        var driverState = component.get("v.driverState");
        
        console.log("In DriverInfoComponent handleOnload.");
        console.log(component.get("v.driverState"));
  //      component.set("v.MailingState", "v.driverState");
 //       component.find("theState").set("v.value", driverState);
        console.log('----> onload');
        var rec = event.getParam("recordUi");
        //        var name = component.find("firstname").set("v.value", "matt");
//        console.log('recordUi ' + rec.record.firstname);
    },
    
    handleOnsubmit : function(component, event) {
        console.log('---> onsubmit');
        event.preventDefault();
        var recui = event.getParam("recordUi");
        var fields = event.getParam("fields");
        console.log("fields " + fields["FirstName"]);
        component.find("driverForm").submit(fields);
    },
    
    handleOnsuccess : function(component, event) {
        console.log('---> onSuccess');
        var record = event.getParam("response");
        if(record !== null) {
            console.log("record is not null " + record.id);
            component.set("v.driverId", record.id);
        }
        var cmpEvent = component.getEvent("driverEvent");
        cmpEvent.setParams({"componentAction" : "vehicle"});
        cmpEvent.setParams({"componentObject" : record});
        cmpEvent.fire();
    },
    
    handleOnerror : function(component, event) {
        console.log('---> onError');
    },
    
    goNext : function(component, event, helper) {
        var cmpEvent = component.getEvent("driverEvent");
        cmpEvent.setParams({"componentAction" : "vehicle"});
        //      console.log("Driver about to fire");
        cmpEvent.fire();
    }    
})
