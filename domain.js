"use strict";
exports.__esModule = true;
var Dom = require("./main");
var foo = { height: 5, width: 7 };
function nextStep(form) {
    if (!form.name_field) {
        return { field: Dom.Field.NameF };
    }
    if (!form.phone_field) {
        return { field: Dom.Field.PhoneF };
    }
    if (!form.area_field) {
        return { field: Dom.Field.AreaF };
    }
    if (!form.calltime_field) {
        return { field: Dom.Field.CallTimeF };
    }
    if (!form.communication_way_field) {
        return { field: Dom.Field.CommunicationWayF };
    }
    if (!form.additional_info_field) {
        return { field: Dom.Field.AdditionalInfoF };
    }
    var completed_form = { name_field: form.name_field,
        phone_field: form.phone_field,
        area_field: form.area_field,
        calltime_field: form.calltime_field,
        communication_way_field: form.communication_way_field,
        additional_info_field: form.additional_info_field };
    return completed_form;
}
