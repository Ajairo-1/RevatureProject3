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
        console.log('DriverComponent ----> onload');
        var rec = event.getParam("recordUi");
    },
    
    handleOnsubmit : function(component, event) {
        console.log('DriverComponent ---> onsubmit');
        event.preventDefault();
        var recui = event.getParam("recordUi");
        var fields = event.getParam("fields");
        console.log("fields " + fields["FirstName"]);
        component.find("driverForm").submit(fields);
    },
    
    handleOnsuccess : function(component, event) {
        console.log('DriverComponent ---> onSuccess');
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
        console.log('DriverComponent ---> onError');
    },
    
    goNext : function(component, event, helper) {
        var cmpEvent = component.getEvent("driverEvent");
        cmpEvent.setParams({"componentAction" : "vehicle"});
        //      console.log("Driver about to fire");
        cmpEvent.fire();
    }    
})
