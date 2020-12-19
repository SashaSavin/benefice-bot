
export interface Area { height : number, width : number}
export type Time = string
export type CommunicationWay = string
export type AdditionalInfo = string

export enum Field 
	{ NameF
	, PhoneF
	, AreaF
	, CallTimeF
	, CommunicationWayF
	, AdditionalInfoF }

export type FormField
	= NameField
	| PhoneField
	| AreaField
	| CallTimeField
	| CommunicationWayField
	| AdditionalInfoField

export interface NameField { name : string }
export interface PhoneField { phone : number }
export interface AreaField { area : Area }
export interface CallTimeField { call_time : string }
export interface CommunicationWayField { communication_way : string }
export interface AdditionalInfoField { additional_info : string }

export interface IncompletedForm 
	{ name_field? : NameField
	, phone_field? : PhoneField
	, area_field? : AreaField
	, calltime_field? : CallTimeField
	, communication_way_field? : CommunicationWay
	, additional_info_field? : AdditionalInfo }

export interface Form 
	{ name_field : NameField
	, phone_field : PhoneField
	, area_field : AreaField
	, calltime_field : CallTimeField
	, communication_way_field : CommunicationWayField
	, additional_info_field : AdditionalInfoField }

export interface UserMessage 
	{ subscription_info
	, msg : string }

export interface TelegramStatusChanged { status : string }

export type ExternalEvent 
	= UserMessage
	| TelegramStatusChanged

export class FormFilled 
	{ name : string
	; phone : number
	; area : Area
	; call_time : Time
	; communication_way : CommunicationWay
	; additional_info : AdditionalInfo}

export class NameFieldFilled { field : NameField }
export class PhoneFieldFilled { field : PhoneField }
export class AreaFieldFilled { field : AreaField }
export class CallTimeFieldFilled { field : CallTimeField }
export class CommunicationWayFieldFilled { field : CommunicationWayField }
export class AdditionalInfoFieldFilled { field : AdditionalInfoField }

export class FormFillingStarted
	{ subscription_info
	; time }
export class UserNotified
	{ subscription_info
	; time }
export class FormFieldCommited {field:FormField}
export class SaveFormField {field : FormField}
export class NotifyUser { notification : string }
export class SendFormField { field : Field }
export class CommitFilledForm { form : Form }
export class StartNewFormFilling { subscription_info }

export class FormFieldFilled {
	field 
	: NameFieldFilled
	| PhoneFieldFilled
	| AreaFieldFilled
	| CallTimeFieldFilled
	| CommunicationWayFieldFilled
	| AdditionalInfoFieldFilled
}
export type DomainEvent 
	= FormFilled
	| FormFieldFilled
	| FormFillingStarted
	| UserNotified
	| FormFieldCommited

export type DomainCommand 
	= NotifyUser 
	| SendFormField
	| CommitFilledForm
	| StartNewFormFilling
	| SaveFormField

export interface Sub<T>
	{ subscription_info
	, data : T}
