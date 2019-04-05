sap.ui.define([
	'jquery.sap.global',
	'sap/ui/core/Fragment',
	'sap/ui/core/mvc/Controller',
	'sap/ui/model/json/JSONModel',
	'sap/m/MessageToast'
], function(jQuery, Fragment, Controller, JSONModel, MessageToast) {
	"use strict";

	var Controller = Controller.extend("quick.quickView.controller.View1", {

		_mData : null,
		_oModel : null,
		onInit: function() {
			//	create JSON model instance
			this._oModel = new JSONModel();

			// JSON sample data
			var mData = {
				pages: [
					{
						pageId: "companyPageId",
						header: "Company info",
						title: "Accenture",
						titleUrl: "http://accenture.com",
						icon: "sap-icon://building",
						description: "Hugo Issao Uraga",
						groups: [
							{
								heading: "Detalhes para contato",
								elements: [
									{
										label: "Telefone",
										value: "81 99885-5029",
										elementType: sap.m.QuickViewGroupElementType.phone
									},
									{
										label: "Endereço",
										value: "Rua Antonio Valdevino da Costa, nº 280",
										elementType: sap.m.QuickViewGroupElementType.text
									}
								]
							},
							{
								heading: "Contato principal",
								elements: [
									{
										label: "Nome",
										value: "Hugo Issao Uraga",
										elementType: sap.m.QuickViewGroupElementType.pageLink,
										pageLinkId: "companyEmployeePageId"
									},
									{
										label: "Celular",
										value: "81 99885-5029",
										elementType: sap.m.QuickViewGroupElementType.mobile
									},
									{
										label: "Whatsapp",
										value: "81 99885-5029",
										elementType: sap.m.QuickViewGroupElementType.phone
									},
									{
										label: "Email",
										value: "hiu@cin.ufpe.br",
										emailSubject : 'Subject',
										elementType: sap.m.QuickViewGroupElementType.email
									}
								]
							}
						]
					},
					{
						pageId: "companyEmployeePageId",
						header: "Employee Info",
						title: "Hugo Issao Uraga",
						icon: "sap-icon://person-placeholder",
						description: "Departamento de SAP Leonardo",
						groups: [
							{
								heading: "Empresa",
								elements: [
									{
										label: "Name",
										value: "Accenture",
										url: "https://www.accenture.com/br-pt",
										elementType: sap.m.QuickViewGroupElementType.link
									},
									{
										label: "Endereço",
										value: "Av. Alfredo Lisboa - Recife, PE, 50030-230"
									},
									{
										label: "Slogan",
										value: "Alta performance e inovação."
									}
								]
							},
							{
								heading: "Other",
								elements: [
									{
										label: "Email",
										value: "hugouraga61@gmail.com",
										emailSubject : 'Subject',
										elementType: sap.m.QuickViewGroupElementType.email
									},
									{
										label: "Phone",
										value: "-",
										elementType: sap.m.QuickViewGroupElementType.mobile
									}
								]
							}
						]
					}
				]
			};

			this._mData = mData;

			// set the data for the model
			this._oModel.setData(this._mData);
			this.getView().setModel(this._oModel);
		},

		onAfterRendering: function() {
			this.byId("quickViewCardContainer").$().css("maxWidth", "320px");
		},

		onButtonBackClick : function() {
			var oQuickViewCard = this.byId('quickViewCard');
			oQuickViewCard.navigateBack();
		},

		onNavigate : function(oEvent) {
			var oNavOrigin = oEvent.getParameter("navOrigin");

			if (oNavOrigin) {
				MessageToast.show('Link "' + oNavOrigin.getText() + '" was clicked');
			} else {
				MessageToast.show('Back button was clicked');
			}
		},

		onAfterNavigate : function(oEvent) {
			var oButton = this.byId('buttonBack');
			oButton.setEnabled(!oEvent.getParameter('isTopPage'));
		}
	});



	return Controller;

});
