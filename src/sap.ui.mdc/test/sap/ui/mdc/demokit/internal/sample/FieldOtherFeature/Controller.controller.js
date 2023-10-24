sap.ui.define([
	"sap/ui/core/Messaging",
	"sap/ui/core/mvc/Controller"
], function(Messaging, Controller) {
	"use strict";

	return Controller.extend("sap.ui.mdc.sample.FieldOtherFeature.Controller", {

		onInit: function() {
			this.getView().bindElement("/Books(1)");
			Messaging.registerObject(this.getView(), true);
		}
	});
});
