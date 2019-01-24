({
    handleCoverageEvent : function(component, event, helper) {
        console.log("______ In handle coverage event function __________");
        var obj = event.getParam("componentId");
        if(obj !== null && obj !== undefined) {
            //  console.log("the driver is " + obj.fields.FirstName.value);
            console.log("the coverage id is not null ------------> " + obj);
            component.set("v.basicPlanId", obj);
            //               component.set("v.driver", obj);
            console.log("after set attribute");
        }
    }
})
