({
    handleOnload : function(component, event, helper) {
        
    },
    handleOnsubmit : function(component, event) {
        console.log('Driving Record---> onsubmit');
        event.preventDefault();
        var recui = event.getParam("recordUi");
        var fields = event.getParam("fields");
        component.find("drivingRecordForm").submit(fields);
    },
    handleOnsuccess : function(component, event) {
        console.log('Driving Record ---> onSuccess');
        var record = event.getParam("response");
        if(record !== null) {
            console.log("record is not null " + record.id);
            component.set("v.drivingRecordId", record.id);
        }
        var cmpEvent = component.getEvent("drivingRecordEvent");
        cmpEvent.setParams({"componentAction" : "summary"});
        cmpEvent.setParams({"componentObject" : record});
        cmpEvent.fire();
    },
    handleOnerror : function(component, event) {
        
    },
    goNext : function(component, event) {
        var cmpEvent = component.getEvent("drivingRecordEvent");
        cmpEvent.setParams({"componentAction" : "summary"});
        cmpEvent.fire();
    },
    goBack : function(component, event) {
        var cmpEvent = component.getEvent("drivingRecordEvent");
        cmpEvent.setParams({"componentAction" : "vehicle"});
        cmpEvent.fire();        
    }
})
