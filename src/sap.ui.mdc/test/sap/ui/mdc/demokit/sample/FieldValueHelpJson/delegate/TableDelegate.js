sap.ui.define([
	"sap/ui/mdc/TableDelegate",
	"mdc/sample/model/metadata/JSONPropertyInfo",
	"sap/ui/core/Core",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (TableDelegate, JSONPropertyInfo, Core, Filter, FilterOperator) {
	"use strict";

	var JSONTableDelegate = Object.assign({}, TableDelegate);

	JSONTableDelegate.fetchProperties = function (oTable) {
		return Promise.resolve(JSONPropertyInfo);
	};

	JSONTableDelegate.updateBindingInfo = function (oTable, oBindingInfo) {
		TableDelegate.updateBindingInfo.apply(this, arguments);
		oBindingInfo.path = oTable.getPayload().collectionPath;
	};

	JSONTableDelegate.getFilters = function(oTable) {
		var aSearchFilters = _createSearchFilters(Core.byId(oTable.getFilter()).getSearch());
		return TableDelegate.getFilters.apply(this, arguments).concat(aSearchFilters);
	};

	function _createSearchFilters(sSearch) {
		var aFilters = [];
		if (sSearch) {
			var aPaths = ["name", "id"];
			aFilters = aPaths.map(function (sPath) {
				return new Filter({
					path: sPath,
					operator: FilterOperator.Contains,
					value1: sSearch
				});
			});
			aFilters = [new Filter(aFilters, false)];
		}
		return aFilters;
	}

	return JSONTableDelegate;
});