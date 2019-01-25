({
    closeModal:function(component,event,helper){    
        var cmpTarget = component.find('Modalbox');
        var cmpBack = component.find('Modalbackdrop');
        $A.util.removeClass(cmpBack,'slds-backdrop--open');
        $A.util.removeClass(cmpTarget, 'slds-fade-in-open'); 
    },
    openmodal: function(component,event,helper) {
        var cmpTarget = component.find('Modalbox');
        var cmpBack = component.find('Modalbackdrop');
        $A.util.addClass(cmpTarget, 'slds-fade-in-open');
        $A.util.addClass(cmpBack, 'slds-backdrop--open'); 
    },
    
    doInit1	: function(component, event, helper) {
        // Prepare a new record from template
        component.find("paymentRecordCreator").getNewRecord(
            "Payment__c", // sObject type (objectApiName)
            null,      // recordTypeId
            true,     // skip cache?
            null	  // callback
        );
        
        
    },
    makePayment: function(component, event, helper) {
        
        component.find("paymentRecordCreator").saveRecord(function(saveResult) {
            if (saveResult.state === "SUCCESS") {
                var resultsToast = $A.get("e.force:showToast");
                resultsToast.setParams({
                    "title": "Saved",
                    "message": "The record was saved."
                });
                resultsToast.fire();
                
                //Clear component record
                component.find("paymentRecordCreator").getNewRecord(
                    "Payment__c", // sObject type (objectApiName)
                    null,      // recordTypeId
                    true,     // skip cache?
                    null	  // callback
                );
            } else {
                // handle the incomplete state
                component.set("v.newPaymentError", "Error saving payment.");
            }
            
            
        });

        console.log('recahed');
      	window.alert("Payment Processed.");  
    },
    
    
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
