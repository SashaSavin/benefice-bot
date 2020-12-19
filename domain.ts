import * as Dom from "./main"

function handleDomainEvent(event:Dom.DomainEvent): Dom.DomainCommand[]{
	if (event instanceof Dom.FormFilled){
		let form : Dom.Form = 
			{ name_field : {name: event.name}
			, phone_field : {phone: event.phone}
			, area_field :{area: event.area}
			, calltime_field : {call_time: event.call_time}
			, communication_way_field : {communication_way: event.communication_way}
			, additional_info_field : {additional_info: event.additional_info}}
		let commit : Dom.CommitFilledForm = {form : form}
		let notify : Dom.NotifyUser = {notification : "Форма отправлена!"}
		return [commit,notify]
	}
	if (event instanceof Dom.FormFieldFilled){
		let notify : Dom.NotifyUser = {notification : "Поле успешно заполнено!"}
		let save_field : Dom.SaveFormField = 
			{field : event.field.field}
		return [notify, save_field]
	}
	if (event instanceof Dom.FormFillingStarted){
		let start_new : Dom.StartNewFormFilling = 
			{subscription_info : event.subscription_info}
		let notify : Dom.NotifyUser = 
			{notification : "Пожалуйста заполните форму"}
		return [notify, start_new]
	}
	if (event instanceof Dom.FormFieldCommited){
		// place your commands here
		return []
	}
	if (event instanceof Dom.UserNotified){
		return []
	}
	return []
}



function nextStep(form:Dom.IncompletedForm): Dom.Form | Dom.SendFormField {
	if (! form.name_field) {
		return {field : Dom.Field.NameF}
	}
	if (! form.phone_field) {
		return {field : Dom.Field.PhoneF}
	}
	if (! form.area_field) {
		return {field : Dom.Field.AreaF}
	}
	if (! form.calltime_field) {
		return {field : Dom.Field.CallTimeF}
	}
	if (! form.communication_way_field) {
		return {field : Dom.Field.CommunicationWayF}
	}
	if (! form.additional_info_field) {
		return {field : Dom.Field.AdditionalInfoF}
	}
	let completed_form : Dom.Form = 
		{ name_field : form.name_field
		, phone_field : form.phone_field
		, area_field : form.area_field
		, calltime_field : form.calltime_field
		, communication_way_field : form.communication_way_field
		, additional_info_field : form.additional_info_field}
	return completed_form
}