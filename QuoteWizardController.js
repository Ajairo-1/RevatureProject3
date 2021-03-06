({
    doInit: function(component, event, helper) {
        // Prepare a new record from template
        
        //var getQuoDiv = component.find("getQuoteDiv");
        //$A.util.addClass(getQuoDiv,'toggle');
        var driverDiv = component.find("driverDiv");
        $A.util.addClass(driverDiv, 'toggle'); 
        var vehicleDiv = component.find("vehicleDiv");
        $A.util.addClass(vehicleDiv,'toggle');
        var drvRecDiv = component.find("drivingRecordDiv");
        $A.util.addClass(drvRecDiv, 'toggle');        
        var covgDiv = component.find("coverageDiv");
        $A.util.addClass(covgDiv, 'toggle');
        
        
        var summaryDiv = component.find("quoteSummaryDiv");
        $A.util.addClass(summaryDiv, 'toggle');
        
    },
    
    handleComponentEvent : function(component, event) {
        var myAction = event.getParam("componentAction");
        console.log(component.get("v.State"));
        console.log("capture the action " + myAction);
        component.set("v.message", myAction);
        
        var quoDiv;        
        var vehDiv;
        var drvDiv;
        var drvRecDiv;      
        var revDiv;        
        var summDiv;
        
        if(myAction==="getQuotePath") {
            //     quoDiv = component.find("getQuoteDiv");
            //     $A.util.addClass(quoDiv, 'toggle');
            
            
            drvDiv = component.find("driverDiv");
            $A.util.addClass(drvDiv, 'toggle');
            vehDiv = component.find('vehicleDiv');
            $A.util.removeClass(quoDiv, 'toggle');
            var quoteState = component.get("v.State");
            var quoEvent = event.getParam("componentObject");
            component.set("v.State", quoEvent.fields.theStates__c.value);
            console.log(component.get("v.State"));
            //var step = component.get("v.currentStep");
            component.set("v.currentStep", "step0");
        }
        if(myAction==="driver") {
            var obj = event.getParam("componentObject");
            if(obj !== null && obj !== undefined) {
                //  console.log("the driver is " + obj.fields.FirstName.value);
                console.log("in driver action, and state id is------------> " + obj.id);
                component.set("v.newStateId", obj.id);
                //               component.set("v.driver", obj);
                console.log("after set attribute");
            }             
            console.log("in myAction = driver");
            console.log(component.get("v.dstate"));
            quoDiv = component.find("getQuoteDiv");
            $A.util.addClass(quoDiv, 'toggle');
            vehDiv = component.find("vehicleDiv");
            $A.util.addClass(vehDiv, 'toggle');
            drvRecDiv = component.find("drivingRecordDiv");
            $A.util.addClass(drvRecDiv, 'toggle');
            drvDiv = component.find('driverDiv');
            $A.util.removeClass(drvDiv, 'toggle');
            //var step = component.get("v.currentStep");
            component.set("v.currentStep", "step1");
            
        }
        if(myAction==="vehicle") {
            var obj = event.getParam("componentObject");
            if(obj !== null && obj !== undefined) {
                //  console.log("the driver is " + obj.fields.FirstName.value);
                console.log("in vehicle action, and driver id is------------> " + obj.id);
                component.set("v.newDriverId", obj.id);
                //                component.set("v.driver", obj);
                console.log("after set attribute");
            }         
            
            vehDiv = component.find("driverDiv");
            $A.util.addClass(vehDiv, 'toggle');
            drvRecDiv = component.find("drivingRecordDiv");
            $A.util.addClass(drvRecDiv, 'toggle');            
            drvDiv = component.find('vehicleDiv');
            $A.util.removeClass(drvDiv, 'toggle');
            //var step = component.get("v.currentStep");
            component.set("v.currentStep", "step2");
        }
        if(myAction==="driving record") {
            var obj = event.getParam("componentObject");
            if(obj !== null && obj !== undefined) {
                //  console.log("the driver is " + obj.fields.FirstName.value);
                console.log("in vehicle action, and vehicle id is------------> " + obj.id);
                component.set("v.newVehicleId", obj.id);
                console.log(component.get("v.newVehicleId"));
                console.log("after set attribute");
            }            
            vehDiv = component.find("driverDiv");
            $A.util.addClass(vehDiv, 'toggle');
            vehDiv = component.find("vehicleDiv");
            $A.util.addClass(vehDiv, 'toggle');
            drvRecDiv = component.find("drivingRecordDiv");
            $A.util.removeClass(drvRecDiv, 'toggle');
            // var step = component.get("v.currentStep");
            component.set("v.currentStep", "step3");            
        }

        if(myAction==="summary") {
            var obj = event.getParam("componentObject");
            if(obj !== null && obj !== undefined) {
                //  console.log("the driver is " + obj.fields.FirstName.value);
                console.log("in summary action, and drivingRecord id is------------> " + obj.id);
                component.set("v.newRecordId", obj.id);
                console.log(component.get("v.newVehicleId"));
                console.log("after set attribute");
            }            
            drvRecDiv = component.find("drivingRecordDiv");
            $A.util.addClass(drvRecDiv, 'toggle');
            summDiv = component.find("quoteSummaryDiv");
            $A.util.removeClass(summDiv, 'toggle');
            // var step = component.get("v.currentStep");
            console.log("before log id ");
            console.log(component.get("v.newDriverId"));
            component.set("v.currentStep", "step4");
        }        
        
        if(myAction==="review") {
            var obj = event.getParam("coverageIDs");
            if(obj !== null && obj !== undefined) {
                console.log("in review action, and record id is------------> " + obj);                
				console.log("the size of obj in review is " + obj.length);
                component.set("v.bcoverageId", obj[0]);
                component.set("v.pcoverageId", obj[1]);
                console.log(component.get("v.bcoverageId"));
                console.log(component.get("v.pcoverageId"));                
                console.log("after set attribute in review");
            }            
            summDiv = component.find("quoteSummaryDiv");
            $A.util.addClass(summDiv, 'toggle');
            revDiv = component.find("coverageDiv");
            $A.util.removeClass(revDiv, 'toggle');
            // var step = component.get("v.currentStep");
            component.set("v.currentStep", "step5");       
        }      
    }
})
