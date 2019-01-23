({
    doInit : function(component, event) {

    },
    handleOnload : function(component, event) {
        console.log("<----- onload vehicle ---->");
    },
    handleOnsubmit : function(component, event) {
        console.log("<----- onsubmit vehicle ---->");
        event.preventDefault();
        var fields = event.getParam("fields");
        console.log("year " + fields["Year"] + " make " + fields["Make"] + " model " + fields["Model"]);
        component.find("vehicleForm").submit(fields);
    },
    handleOnsuccess : function(component, event) {
        console.log("<----- onsuccess vehicle ---->");
        var record = event.getParam("response");
        if(record !== null) {
            console.log("vehicle record is not null " + record);
            component.set("v.vehicleId", record.id);
        }
        var cmpEvent = component.getEvent("vehicleEvent");
        cmpEvent.setParams({"componentAction" : "driving record"});
        cmpEvent.setParams({"componentObject" : record});
        console.log("before fire to driving record");
        cmpEvent.fire();
    },
    handleOnerror : function() {
        console.log("<----- onerror vehicle ---->");
        
    },
    goNext : function(component, event, helper) {
        var cmpEvent = component.getEvent("vehicleEvent");
        cmpEvent.setParams({"componentAction" : "driving record"});
        console.log("Vehicle about to fire");
        cmpEvent.fire();
    },
    goBack : function(component, event, helper) {
        var cmpEvent = component.getEvent("vehicleEvent");
        cmpEvent.setParams({"componentAction" : "driver"});
        console.log("Vehicle about to fire");
        cmpEvent.fire();
    }    
})
