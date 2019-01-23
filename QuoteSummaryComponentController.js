({
    handleOnload : function(component, event, helper) {
        console.log("quote summary onload========>");
        
    },
    
    getQuote : function (component, event) {
        console.log('get quote');
        var action = component.get("c.getInsuranceQuote");
       	var stObj = component.get("v.stateId");
        console.log(stObj);
        var drvObj = component.get("v.driverId");
        var vehObj = component.get("v.vehicleId");
        var rdObj = component.get("v.drivingRecordId");
        console.log("quote summary about to apex controller ");
        action.setParams({
            "stateId" : stObj,
            "newContactId" : drvObj,
            "newVehicleId" : vehObj,
            "violationId" : rdObj
        });
        action.setCallback(this, function(response) {
            var state = response.getState();
            
            if(component.isValid() && state==="SUCCESS") {
                console.log("Quote create success " + response.getReturnValue());
                component.set("v.coverageId", response.getReturnValue());
//                var cvgEvent = component.getEvent("coverageEvent");
//                cvgEvent.setParams({"componentId" : response.getReturnValue()});
//                cvgEvent.fire();
            } else if (state==="ERROR") {
                console.log("problem when creating quote " + state);
            } else {
                console.log("unknow problem, response state " + state);
            }
        }); 
        $A.enqueueAction(action);
    }
    
})
