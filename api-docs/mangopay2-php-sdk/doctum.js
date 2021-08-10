

(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '<ul><li data-name="namespace:MangoPay" class="opened"><div style="padding-left:0px" class="hd"><span class="icon icon-play"></span><a href="MangoPay.html">MangoPay</a></div><div class="bd"><ul><li data-name="namespace:MangoPay_Libraries" class="opened"><div style="padding-left:18px" class="hd"><span class="icon icon-play"></span><a href="MangoPay/Libraries.html">Libraries</a></div><div class="bd"><ul><li data-name="class:MangoPay_Libraries_ApiBase" ><div style="padding-left:44px" class="hd leaf"><a href="MangoPay/Libraries/ApiBase.html">ApiBase</a></div></li><li data-name="class:MangoPay_Libraries_ApiOAuth" ><div style="padding-left:44px" class="hd leaf"><a href="MangoPay/Libraries/ApiOAuth.html">ApiOAuth</a></div></li><li data-name="class:MangoPay_Libraries_AuthenticationHelper" ><div style="padding-left:44px" class="hd leaf"><a href="MangoPay/Libraries/AuthenticationHelper.html">AuthenticationHelper</a></div></li><li data-name="class:MangoPay_Libraries_AuthorizationTokenManager" ><div style="padding-left:44px" class="hd leaf"><a href="MangoPay/Libraries/AuthorizationTokenManager.html">AuthorizationTokenManager</a></div></li><li data-name="class:MangoPay_Libraries_Configuration" ><div style="padding-left:44px" class="hd leaf"><a href="MangoPay/Libraries/Configuration.html">Configuration</a></div></li><li data-name="class:MangoPay_Libraries_DefaultStorageStrategy" ><div style="padding-left:44px" class="hd leaf"><a href="MangoPay/Libraries/DefaultStorageStrategy.html">DefaultStorageStrategy</a></div></li><li data-name="class:MangoPay_Libraries_Document" ><div style="padding-left:44px" class="hd leaf"><a href="MangoPay/Libraries/Document.html">Document</a></div></li><li data-name="class:MangoPay_Libraries_Dto" ><div style="padding-left:44px" class="hd leaf"><a href="MangoPay/Libraries/Dto.html">Dto</a></div></li><li data-name="class:MangoPay_Libraries_EntityBase" ><div style="padding-left:44px" class="hd leaf"><a href="MangoPay/Libraries/EntityBase.html">EntityBase</a></div></li><li data-name="class:MangoPay_Libraries_Error" ><div style="padding-left:44px" class="hd leaf"><a href="MangoPay/Libraries/Error.html">Error</a></div></li><li data-name="class:MangoPay_Libraries_Exception" ><div style="padding-left:44px" class="hd leaf"><a href="MangoPay/Libraries/Exception.html">Exception</a></div></li><li data-name="class:MangoPay_Libraries_HttpBase" ><div style="padding-left:44px" class="hd leaf"><a href="MangoPay/Libraries/HttpBase.html">HttpBase</a></div></li><li data-name="class:MangoPay_Libraries_HttpCurl" ><div style="padding-left:44px" class="hd leaf"><a href="MangoPay/Libraries/HttpCurl.html">HttpCurl</a></div></li><li data-name="class:MangoPay_Libraries_HttpResponse" ><div style="padding-left:44px" class="hd leaf"><a href="MangoPay/Libraries/HttpResponse.html">HttpResponse</a></div></li><li data-name="class:MangoPay_Libraries_IStorageStrategy" ><div style="padding-left:44px" class="hd leaf"><a href="MangoPay/Libraries/IStorageStrategy.html">IStorageStrategy</a></div></li><li data-name="class:MangoPay_Libraries_Logs" ><div style="padding-left:44px" class="hd leaf"><a href="MangoPay/Libraries/Logs.html">Logs</a></div></li><li data-name="class:MangoPay_Libraries_OAuthToken" ><div style="padding-left:44px" class="hd leaf"><a href="MangoPay/Libraries/OAuthToken.html">OAuthToken</a></div></li><li data-name="class:MangoPay_Libraries_RequestType" ><div style="padding-left:44px" class="hd leaf"><a href="MangoPay/Libraries/RequestType.html">RequestType</a></div></li><li data-name="class:MangoPay_Libraries_ResponseException" ><div style="padding-left:44px" class="hd leaf"><a href="MangoPay/Libraries/ResponseException.html">ResponseException</a></div></li><li data-name="class:MangoPay_Libraries_RestTool" ><div style="padding-left:44px" class="hd leaf"><a href="MangoPay/Libraries/RestTool.html">RestTool</a></div></li><li data-name="class:MangoPay_Libraries_Upload" ><div style="padding-left:44px" class="hd leaf"><a href="MangoPay/Libraries/Upload.html">Upload</a></div></li><li data-name="class:MangoPay_Libraries_UrlTool" ><div style="padding-left:44px" class="hd leaf"><a href="MangoPay/Libraries/UrlTool.html">UrlTool</a></div></li></ul></div></li><li data-name="class:MangoPay_AVSResult" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/AVSResult.html">AVSResult</a></div></li><li data-name="class:MangoPay_Address" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/Address.html">Address</a></div></li><li data-name="class:MangoPay_ApiBankAccounts" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/ApiBankAccounts.html">ApiBankAccounts</a></div></li><li data-name="class:MangoPay_ApiBankingAliases" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/ApiBankingAliases.html">ApiBankingAliases</a></div></li><li data-name="class:MangoPay_ApiCardPreAuthorizations" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/ApiCardPreAuthorizations.html">ApiCardPreAuthorizations</a></div></li><li data-name="class:MangoPay_ApiCardRegistrations" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/ApiCardRegistrations.html">ApiCardRegistrations</a></div></li><li data-name="class:MangoPay_ApiCards" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/ApiCards.html">ApiCards</a></div></li><li data-name="class:MangoPay_ApiClients" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/ApiClients.html">ApiClients</a></div></li><li data-name="class:MangoPay_ApiDisputeDocuments" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/ApiDisputeDocuments.html">ApiDisputeDocuments</a></div></li><li data-name="class:MangoPay_ApiDisputes" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/ApiDisputes.html">ApiDisputes</a></div></li><li data-name="class:MangoPay_ApiEvents" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/ApiEvents.html">ApiEvents</a></div></li><li data-name="class:MangoPay_ApiHooks" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/ApiHooks.html">ApiHooks</a></div></li><li data-name="class:MangoPay_ApiKycDocuments" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/ApiKycDocuments.html">ApiKycDocuments</a></div></li><li data-name="class:MangoPay_ApiMandates" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/ApiMandates.html">ApiMandates</a></div></li><li data-name="class:MangoPay_ApiPayIns" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/ApiPayIns.html">ApiPayIns</a></div></li><li data-name="class:MangoPay_ApiPayOuts" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/ApiPayOuts.html">ApiPayOuts</a></div></li><li data-name="class:MangoPay_ApiRefunds" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/ApiRefunds.html">ApiRefunds</a></div></li><li data-name="class:MangoPay_ApiReports" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/ApiReports.html">ApiReports</a></div></li><li data-name="class:MangoPay_ApiRepudiations" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/ApiRepudiations.html">ApiRepudiations</a></div></li><li data-name="class:MangoPay_ApiResponses" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/ApiResponses.html">ApiResponses</a></div></li><li data-name="class:MangoPay_ApiTransfers" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/ApiTransfers.html">ApiTransfers</a></div></li><li data-name="class:MangoPay_ApiUboDeclarations" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/ApiUboDeclarations.html">ApiUboDeclarations</a></div></li><li data-name="class:MangoPay_ApiUsers" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/ApiUsers.html">ApiUsers</a></div></li><li data-name="class:MangoPay_ApiWallets" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/ApiWallets.html">ApiWallets</a></div></li><li data-name="class:MangoPay_BankAccount" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/BankAccount.html">BankAccount</a></div></li><li data-name="class:MangoPay_BankAccountDetails" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/BankAccountDetails.html">BankAccountDetails</a></div></li><li data-name="class:MangoPay_BankAccountDetailsCA" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/BankAccountDetailsCA.html">BankAccountDetailsCA</a></div></li><li data-name="class:MangoPay_BankAccountDetailsGB" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/BankAccountDetailsGB.html">BankAccountDetailsGB</a></div></li><li data-name="class:MangoPay_BankAccountDetailsIBAN" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/BankAccountDetailsIBAN.html">BankAccountDetailsIBAN</a></div></li><li data-name="class:MangoPay_BankAccountDetailsOTHER" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/BankAccountDetailsOTHER.html">BankAccountDetailsOTHER</a></div></li><li data-name="class:MangoPay_BankAccountDetailsUS" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/BankAccountDetailsUS.html">BankAccountDetailsUS</a></div></li><li data-name="class:MangoPay_BankingAlias" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/BankingAlias.html">BankingAlias</a></div></li><li data-name="class:MangoPay_BankingAliasIBAN" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/BankingAliasIBAN.html">BankingAliasIBAN</a></div></li><li data-name="class:MangoPay_BankingAliasOTHER" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/BankingAliasOTHER.html">BankingAliasOTHER</a></div></li><li data-name="class:MangoPay_BankingAliasType" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/BankingAliasType.html">BankingAliasType</a></div></li><li data-name="class:MangoPay_Billing" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/Billing.html">Billing</a></div></li><li data-name="class:MangoPay_Birthplace" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/Birthplace.html">Birthplace</a></div></li><li data-name="class:MangoPay_BrowserInfo" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/BrowserInfo.html">BrowserInfo</a></div></li><li data-name="class:MangoPay_BusinessType" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/BusinessType.html">BusinessType</a></div></li><li data-name="class:MangoPay_Card" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/Card.html">Card</a></div></li><li data-name="class:MangoPay_CardPreAuthorization" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/CardPreAuthorization.html">CardPreAuthorization</a></div></li><li data-name="class:MangoPay_CardPreAuthorizationPaymentStatus" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/CardPreAuthorizationPaymentStatus.html">CardPreAuthorizationPaymentStatus</a></div></li><li data-name="class:MangoPay_CardPreAuthorizationStatus" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/CardPreAuthorizationStatus.html">CardPreAuthorizationStatus</a></div></li><li data-name="class:MangoPay_CardRegistration" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/CardRegistration.html">CardRegistration</a></div></li><li data-name="class:MangoPay_CardRegistrationStatus" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/CardRegistrationStatus.html">CardRegistrationStatus</a></div></li><li data-name="class:MangoPay_CardValidity" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/CardValidity.html">CardValidity</a></div></li><li data-name="class:MangoPay_Client" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/Client.html">Client</a></div></li><li data-name="class:MangoPay_ClientLogoUpload" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/ClientLogoUpload.html">ClientLogoUpload</a></div></li><li data-name="class:MangoPay_CurrencyIso" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/CurrencyIso.html">CurrencyIso</a></div></li><li data-name="class:MangoPay_DebitedBankAccount" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/DebitedBankAccount.html">DebitedBankAccount</a></div></li><li data-name="class:MangoPay_DeclaredUbo" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/DeclaredUbo.html">DeclaredUbo</a></div></li><li data-name="class:MangoPay_DeclaredUboStatus" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/DeclaredUboStatus.html">DeclaredUboStatus</a></div></li><li data-name="class:MangoPay_Dispute" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/Dispute.html">Dispute</a></div></li><li data-name="class:MangoPay_DisputeDocument" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/DisputeDocument.html">DisputeDocument</a></div></li><li data-name="class:MangoPay_DisputeDocumentPage" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/DisputeDocumentPage.html">DisputeDocumentPage</a></div></li><li data-name="class:MangoPay_DisputeDocumentStatus" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/DisputeDocumentStatus.html">DisputeDocumentStatus</a></div></li><li data-name="class:MangoPay_DisputeDocumentType" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/DisputeDocumentType.html">DisputeDocumentType</a></div></li><li data-name="class:MangoPay_DisputeReason" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/DisputeReason.html">DisputeReason</a></div></li><li data-name="class:MangoPay_DisputeReasonType" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/DisputeReasonType.html">DisputeReasonType</a></div></li><li data-name="class:MangoPay_DisputeStatus" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/DisputeStatus.html">DisputeStatus</a></div></li><li data-name="class:MangoPay_DisputeType" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/DisputeType.html">DisputeType</a></div></li><li data-name="class:MangoPay_DocumentPageConsult" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/DocumentPageConsult.html">DocumentPageConsult</a></div></li><li data-name="class:MangoPay_EMoney" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/EMoney.html">EMoney</a></div></li><li data-name="class:MangoPay_Event" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/Event.html">Event</a></div></li><li data-name="class:MangoPay_EventType" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/EventType.html">EventType</a></div></li><li data-name="class:MangoPay_FallbackReason" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/FallbackReason.html">FallbackReason</a></div></li><li data-name="class:MangoPay_FilterBankAccounts" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/FilterBankAccounts.html">FilterBankAccounts</a></div></li><li data-name="class:MangoPay_FilterBase" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/FilterBase.html">FilterBase</a></div></li><li data-name="class:MangoPay_FilterCards" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/FilterCards.html">FilterCards</a></div></li><li data-name="class:MangoPay_FilterDisputeDocuments" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/FilterDisputeDocuments.html">FilterDisputeDocuments</a></div></li><li data-name="class:MangoPay_FilterDisputes" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/FilterDisputes.html">FilterDisputes</a></div></li><li data-name="class:MangoPay_FilterEvents" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/FilterEvents.html">FilterEvents</a></div></li><li data-name="class:MangoPay_FilterKycDocuments" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/FilterKycDocuments.html">FilterKycDocuments</a></div></li><li data-name="class:MangoPay_FilterPreAuthorizations" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/FilterPreAuthorizations.html">FilterPreAuthorizations</a></div></li><li data-name="class:MangoPay_FilterRefunds" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/FilterRefunds.html">FilterRefunds</a></div></li><li data-name="class:MangoPay_FilterReports" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/FilterReports.html">FilterReports</a></div></li><li data-name="class:MangoPay_FilterTransactions" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/FilterTransactions.html">FilterTransactions</a></div></li><li data-name="class:MangoPay_FundsType" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/FundsType.html">FundsType</a></div></li><li data-name="class:MangoPay_Hook" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/Hook.html">Hook</a></div></li><li data-name="class:MangoPay_HookStatus" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/HookStatus.html">HookStatus</a></div></li><li data-name="class:MangoPay_HookValidity" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/HookValidity.html">HookValidity</a></div></li><li data-name="class:MangoPay_KeyValueArray" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/KeyValueArray.html">KeyValueArray</a></div></li><li data-name="class:MangoPay_KycDocument" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/KycDocument.html">KycDocument</a></div></li><li data-name="class:MangoPay_KycDocumentRefusedReasonType" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/KycDocumentRefusedReasonType.html">KycDocumentRefusedReasonType</a></div></li><li data-name="class:MangoPay_KycDocumentStatus" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/KycDocumentStatus.html">KycDocumentStatus</a></div></li><li data-name="class:MangoPay_KycDocumentType" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/KycDocumentType.html">KycDocumentType</a></div></li><li data-name="class:MangoPay_KycLevel" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/KycLevel.html">KycLevel</a></div></li><li data-name="class:MangoPay_KycPage" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/KycPage.html">KycPage</a></div></li><li data-name="class:MangoPay_LegalPersonType" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/LegalPersonType.html">LegalPersonType</a></div></li><li data-name="class:MangoPay_Mandate" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/Mandate.html">Mandate</a></div></li><li data-name="class:MangoPay_MandateStatus" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/MandateStatus.html">MandateStatus</a></div></li><li data-name="class:MangoPay_MangoPayApi" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/MangoPayApi.html">MangoPayApi</a></div></li><li data-name="class:MangoPay_Money" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/Money.html">Money</a></div></li><li data-name="class:MangoPay_NaturalUserCapacity" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/NaturalUserCapacity.html">NaturalUserCapacity</a></div></li><li data-name="class:MangoPay_Pagination" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/Pagination.html">Pagination</a></div></li><li data-name="class:MangoPay_PayIn" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/PayIn.html">PayIn</a></div></li><li data-name="class:MangoPay_PayInCardTemplateURLOptions" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/PayInCardTemplateURLOptions.html">PayInCardTemplateURLOptions</a></div></li><li data-name="class:MangoPay_PayInExecutionDetails" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/PayInExecutionDetails.html">PayInExecutionDetails</a></div></li><li data-name="class:MangoPay_PayInExecutionDetailsDirect" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/PayInExecutionDetailsDirect.html">PayInExecutionDetailsDirect</a></div></li><li data-name="class:MangoPay_PayInExecutionDetailsExternalInstruction" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/PayInExecutionDetailsExternalInstruction.html">PayInExecutionDetailsExternalInstruction</a></div></li><li data-name="class:MangoPay_PayInExecutionDetailsWeb" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/PayInExecutionDetailsWeb.html">PayInExecutionDetailsWeb</a></div></li><li data-name="class:MangoPay_PayInExecutionType" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/PayInExecutionType.html">PayInExecutionType</a></div></li><li data-name="class:MangoPay_PayInPaymentDetails" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/PayInPaymentDetails.html">PayInPaymentDetails</a></div></li><li data-name="class:MangoPay_PayInPaymentDetailsApplePay" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/PayInPaymentDetailsApplePay.html">PayInPaymentDetailsApplePay</a></div></li><li data-name="class:MangoPay_PayInPaymentDetailsBankWire" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/PayInPaymentDetailsBankWire.html">PayInPaymentDetailsBankWire</a></div></li><li data-name="class:MangoPay_PayInPaymentDetailsCard" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/PayInPaymentDetailsCard.html">PayInPaymentDetailsCard</a></div></li><li data-name="class:MangoPay_PayInPaymentDetailsDirectDebit" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/PayInPaymentDetailsDirectDebit.html">PayInPaymentDetailsDirectDebit</a></div></li><li data-name="class:MangoPay_PayInPaymentDetailsDirectDebitDirect" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/PayInPaymentDetailsDirectDebitDirect.html">PayInPaymentDetailsDirectDebitDirect</a></div></li><li data-name="class:MangoPay_PayInPaymentDetailsGooglePay" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/PayInPaymentDetailsGooglePay.html">PayInPaymentDetailsGooglePay</a></div></li><li data-name="class:MangoPay_PayInPaymentDetailsPaypal" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/PayInPaymentDetailsPaypal.html">PayInPaymentDetailsPaypal</a></div></li><li data-name="class:MangoPay_PayInPaymentDetailsPreAuthorized" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/PayInPaymentDetailsPreAuthorized.html">PayInPaymentDetailsPreAuthorized</a></div></li><li data-name="class:MangoPay_PayInPaymentType" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/PayInPaymentType.html">PayInPaymentType</a></div></li><li data-name="class:MangoPay_PayInRecurring" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/PayInRecurring.html">PayInRecurring</a></div></li><li data-name="class:MangoPay_PayInRecurringRegistration" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/PayInRecurringRegistration.html">PayInRecurringRegistration</a></div></li><li data-name="class:MangoPay_PayInRecurringRegistrationGet" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/PayInRecurringRegistrationGet.html">PayInRecurringRegistrationGet</a></div></li><li data-name="class:MangoPay_PayInRecurringRegistrationRequestResponse" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/PayInRecurringRegistrationRequestResponse.html">PayInRecurringRegistrationRequestResponse</a></div></li><li data-name="class:MangoPay_PayInRecurringRegistrationUpdate" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/PayInRecurringRegistrationUpdate.html">PayInRecurringRegistrationUpdate</a></div></li><li data-name="class:MangoPay_PayInStatus" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/PayInStatus.html">PayInStatus</a></div></li><li data-name="class:MangoPay_PayInTemplateURLOptions" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/PayInTemplateURLOptions.html">PayInTemplateURLOptions</a></div></li><li data-name="class:MangoPay_PayInWebExtendedView" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/PayInWebExtendedView.html">PayInWebExtendedView</a></div></li><li data-name="class:MangoPay_PayOut" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/PayOut.html">PayOut</a></div></li><li data-name="class:MangoPay_PayOutPaymentDetails" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/PayOutPaymentDetails.html">PayOutPaymentDetails</a></div></li><li data-name="class:MangoPay_PayOutPaymentDetailsBankWire" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/PayOutPaymentDetailsBankWire.html">PayOutPaymentDetailsBankWire</a></div></li><li data-name="class:MangoPay_PayOutPaymentType" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/PayOutPaymentType.html">PayOutPaymentType</a></div></li><li data-name="class:MangoPay_PayOutStatus" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/PayOutStatus.html">PayOutStatus</a></div></li><li data-name="class:MangoPay_PaymentData" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/PaymentData.html">PaymentData</a></div></li><li data-name="class:MangoPay_PersonType" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/PersonType.html">PersonType</a></div></li><li data-name="class:MangoPay_PlatformCategorization" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/PlatformCategorization.html">PlatformCategorization</a></div></li><li data-name="class:MangoPay_RateLimit" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/RateLimit.html">RateLimit</a></div></li><li data-name="class:MangoPay_RecurringPayInCIT" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/RecurringPayInCIT.html">RecurringPayInCIT</a></div></li><li data-name="class:MangoPay_RecurringPayInCurrentState" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/RecurringPayInCurrentState.html">RecurringPayInCurrentState</a></div></li><li data-name="class:MangoPay_RecurringPayInMIT" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/RecurringPayInMIT.html">RecurringPayInMIT</a></div></li><li data-name="class:MangoPay_Refund" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/Refund.html">Refund</a></div></li><li data-name="class:MangoPay_RefundReasonDetails" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/RefundReasonDetails.html">RefundReasonDetails</a></div></li><li data-name="class:MangoPay_RefundStatus" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/RefundStatus.html">RefundStatus</a></div></li><li data-name="class:MangoPay_ReportRequest" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/ReportRequest.html">ReportRequest</a></div></li><li data-name="class:MangoPay_ReportStatus" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/ReportStatus.html">ReportStatus</a></div></li><li data-name="class:MangoPay_ReportType" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/ReportType.html">ReportType</a></div></li><li data-name="class:MangoPay_Repudiation" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/Repudiation.html">Repudiation</a></div></li><li data-name="class:MangoPay_Response" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/Response.html">Response</a></div></li><li data-name="class:MangoPay_ScopeBlocked" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/ScopeBlocked.html">ScopeBlocked</a></div></li><li data-name="class:MangoPay_Sector" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/Sector.html">Sector</a></div></li><li data-name="class:MangoPay_SecurityInfo" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/SecurityInfo.html">SecurityInfo</a></div></li><li data-name="class:MangoPay_SettlementTransfer" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/SettlementTransfer.html">SettlementTransfer</a></div></li><li data-name="class:MangoPay_Shipping" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/Shipping.html">Shipping</a></div></li><li data-name="class:MangoPay_ShippingAddress" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/ShippingAddress.html">ShippingAddress</a></div></li><li data-name="class:MangoPay_SortDirection" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/SortDirection.html">SortDirection</a></div></li><li data-name="class:MangoPay_Sorting" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/Sorting.html">Sorting</a></div></li><li data-name="class:MangoPay_Transaction" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/Transaction.html">Transaction</a></div></li><li data-name="class:MangoPay_TransactionNature" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/TransactionNature.html">TransactionNature</a></div></li><li data-name="class:MangoPay_TransactionStatus" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/TransactionStatus.html">TransactionStatus</a></div></li><li data-name="class:MangoPay_TransactionType" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/TransactionType.html">TransactionType</a></div></li><li data-name="class:MangoPay_Transfer" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/Transfer.html">Transfer</a></div></li><li data-name="class:MangoPay_Ubo" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/Ubo.html">Ubo</a></div></li><li data-name="class:MangoPay_UboDeclaration" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/UboDeclaration.html">UboDeclaration</a></div></li><li data-name="class:MangoPay_UboDeclarationRefusedOrIncompleteReasonType" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/UboDeclarationRefusedOrIncompleteReasonType.html">UboDeclarationRefusedOrIncompleteReasonType</a></div></li><li data-name="class:MangoPay_UboDeclarationRefusedReasonType" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/UboDeclarationRefusedReasonType.html">UboDeclarationRefusedReasonType</a></div></li><li data-name="class:MangoPay_UboDeclarationStatus" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/UboDeclarationStatus.html">UboDeclarationStatus</a></div></li><li data-name="class:MangoPay_UboRefusedReasonType" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/UboRefusedReasonType.html">UboRefusedReasonType</a></div></li><li data-name="class:MangoPay_User" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/User.html">User</a></div></li><li data-name="class:MangoPay_UserBlockStatus" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/UserBlockStatus.html">UserBlockStatus</a></div></li><li data-name="class:MangoPay_UserLegal" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/UserLegal.html">UserLegal</a></div></li><li data-name="class:MangoPay_UserNatural" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/UserNatural.html">UserNatural</a></div></li><li data-name="class:MangoPay_Wallet" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="MangoPay/Wallet.html">Wallet</a></div></li></ul></div></li></ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                        {"type":"Namespace","link":"MangoPay.html","name":"MangoPay","doc":"Namespace MangoPay"},{"type":"Namespace","link":"MangoPay/Libraries.html","name":"MangoPay\\Libraries","doc":"Namespace MangoPay\\Libraries"},                                                 {"type":"Interface","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/BankAccountDetails.html","name":"MangoPay\\BankAccountDetails","doc":"<p>Marker interface for classes with details option in BankAccount entity</p>"},
                
                                                 {"type":"Interface","fromName":"MangoPay\\Libraries","fromLink":"MangoPay/Libraries.html","link":"MangoPay/Libraries/IStorageStrategy.html","name":"MangoPay\\Libraries\\IStorageStrategy","doc":"<p>Storage strategy interface.</p>"},
                                {"type":"Method","fromName":"MangoPay\\Libraries\\IStorageStrategy","fromLink":"MangoPay/Libraries/IStorageStrategy.html","link":"MangoPay/Libraries/IStorageStrategy.html#method_Get","name":"MangoPay\\Libraries\\IStorageStrategy::Get","doc":"<p>Gets the current authorization token.</p>"},
        {"type":"Method","fromName":"MangoPay\\Libraries\\IStorageStrategy","fromLink":"MangoPay/Libraries/IStorageStrategy.html","link":"MangoPay/Libraries/IStorageStrategy.html#method_Store","name":"MangoPay\\Libraries\\IStorageStrategy::Store","doc":"<p>Stores authorization token passed as an argument.</p>"},
            
                                                 {"type":"Interface","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/PayInExecutionDetails.html","name":"MangoPay\\PayInExecutionDetails","doc":"<p>Marker interface for classes with details of execution option in PayIn entity</p>"},
                
                                                 {"type":"Interface","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/PayInPaymentDetails.html","name":"MangoPay\\PayInPaymentDetails","doc":"<p>Marker interface for classes with details of means of payment in PayIn entity</p>"},
                
                                                 {"type":"Interface","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/PayOutPaymentDetails.html","name":"MangoPay\\PayOutPaymentDetails","doc":"<p>Marker interface for classes with details of means of payment in PayOut entity</p>"},
                
                                                        {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/AVSResult.html","name":"MangoPay\\AVSResult","doc":"<p>Address Verification System result</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/Address.html","name":"MangoPay\\Address","doc":"<p>Class represents an address.</p>"},
                                {"type":"Method","fromName":"MangoPay\\Address","fromLink":"MangoPay/Address.html","link":"MangoPay/Address.html#method_CanBeNull","name":"MangoPay\\Address::CanBeNull","doc":null},
            
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/ApiBankAccounts.html","name":"MangoPay\\ApiBankAccounts","doc":"<p>Class to manage MangoPay API for bank accounts</p>"},
                                {"type":"Method","fromName":"MangoPay\\ApiBankAccounts","fromLink":"MangoPay/ApiBankAccounts.html","link":"MangoPay/ApiBankAccounts.html#method_GetTransactions","name":"MangoPay\\ApiBankAccounts::GetTransactions","doc":"<p>Retrieves a list of Transactions pertaining to a certain Bank Account</p>"},
            
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/ApiBankingAliases.html","name":"MangoPay\\ApiBankingAliases","doc":"<p>Class to management MangoPay API for Banking Aliases</p>"},
                                {"type":"Method","fromName":"MangoPay\\ApiBankingAliases","fromLink":"MangoPay/ApiBankingAliases.html","link":"MangoPay/ApiBankingAliases.html#method_Get","name":"MangoPay\\ApiBankingAliases::Get","doc":"<p>Get a banking alias</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiBankingAliases","fromLink":"MangoPay/ApiBankingAliases.html","link":"MangoPay/ApiBankingAliases.html#method_Create","name":"MangoPay\\ApiBankingAliases::Create","doc":"<p>Create a banking alias</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiBankingAliases","fromLink":"MangoPay/ApiBankingAliases.html","link":"MangoPay/ApiBankingAliases.html#method_Update","name":"MangoPay\\ApiBankingAliases::Update","doc":"<p>Update banking alias</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiBankingAliases","fromLink":"MangoPay/ApiBankingAliases.html","link":"MangoPay/ApiBankingAliases.html#method_GetAll","name":"MangoPay\\ApiBankingAliases::GetAll","doc":"<p>Get all banking aliases</p>"},
            
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/ApiCardPreAuthorizations.html","name":"MangoPay\\ApiCardPreAuthorizations","doc":"<p>Class to management MangoPay API for pre-authorization process</p>"},
                                {"type":"Method","fromName":"MangoPay\\ApiCardPreAuthorizations","fromLink":"MangoPay/ApiCardPreAuthorizations.html","link":"MangoPay/ApiCardPreAuthorizations.html#method_Create","name":"MangoPay\\ApiCardPreAuthorizations::Create","doc":"<p>Create new pre-authorization object</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiCardPreAuthorizations","fromLink":"MangoPay/ApiCardPreAuthorizations.html","link":"MangoPay/ApiCardPreAuthorizations.html#method_Get","name":"MangoPay\\ApiCardPreAuthorizations::Get","doc":"<p>Get pre-authorization object</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiCardPreAuthorizations","fromLink":"MangoPay/ApiCardPreAuthorizations.html","link":"MangoPay/ApiCardPreAuthorizations.html#method_Update","name":"MangoPay\\ApiCardPreAuthorizations::Update","doc":"<p>Update pre-authorization object</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiCardPreAuthorizations","fromLink":"MangoPay/ApiCardPreAuthorizations.html","link":"MangoPay/ApiCardPreAuthorizations.html#method_GetTransactions","name":"MangoPay\\ApiCardPreAuthorizations::GetTransactions","doc":null},
            
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/ApiCardRegistrations.html","name":"MangoPay\\ApiCardRegistrations","doc":"<p>Class to management MangoPay API for card registrations</p>"},
                                {"type":"Method","fromName":"MangoPay\\ApiCardRegistrations","fromLink":"MangoPay/ApiCardRegistrations.html","link":"MangoPay/ApiCardRegistrations.html#method_Create","name":"MangoPay\\ApiCardRegistrations::Create","doc":"<p>Create new card registration</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiCardRegistrations","fromLink":"MangoPay/ApiCardRegistrations.html","link":"MangoPay/ApiCardRegistrations.html#method_Get","name":"MangoPay\\ApiCardRegistrations::Get","doc":"<p>Get card registration</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiCardRegistrations","fromLink":"MangoPay/ApiCardRegistrations.html","link":"MangoPay/ApiCardRegistrations.html#method_Update","name":"MangoPay\\ApiCardRegistrations::Update","doc":"<p>Update card registration</p>"},
            
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/ApiCards.html","name":"MangoPay\\ApiCards","doc":"<p>Class to management MangoPay API for cards</p>"},
                                {"type":"Method","fromName":"MangoPay\\ApiCards","fromLink":"MangoPay/ApiCards.html","link":"MangoPay/ApiCards.html#method_Get","name":"MangoPay\\ApiCards::Get","doc":"<p>Get card</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiCards","fromLink":"MangoPay/ApiCards.html","link":"MangoPay/ApiCards.html#method_GetByFingerprint","name":"MangoPay\\ApiCards::GetByFingerprint","doc":"<p>Gets a list of cards having the same fingerprint.</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiCards","fromLink":"MangoPay/ApiCards.html","link":"MangoPay/ApiCards.html#method_Update","name":"MangoPay\\ApiCards::Update","doc":"<p>Update card</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiCards","fromLink":"MangoPay/ApiCards.html","link":"MangoPay/ApiCards.html#method_GetPreAuthorizations","name":"MangoPay\\ApiCards::GetPreAuthorizations","doc":"<p>Gets a Card's PreAuthorizations</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiCards","fromLink":"MangoPay/ApiCards.html","link":"MangoPay/ApiCards.html#method_GetTransactions","name":"MangoPay\\ApiCards::GetTransactions","doc":"<p>Retrieves a list of Transactions pertaining to a certain Card</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiCards","fromLink":"MangoPay/ApiCards.html","link":"MangoPay/ApiCards.html#method_ValidateCard","name":"MangoPay\\ApiCards::ValidateCard","doc":"<p>Validate a card</p>"},
            
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/ApiClients.html","name":"MangoPay\\ApiClients","doc":"<p>Class to management MangoPay API for users</p>"},
                                {"type":"Method","fromName":"MangoPay\\ApiClients","fromLink":"MangoPay/ApiClients.html","link":"MangoPay/ApiClients.html#method_Get","name":"MangoPay\\ApiClients::Get","doc":"<p>Get client information</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiClients","fromLink":"MangoPay/ApiClients.html","link":"MangoPay/ApiClients.html#method_Update","name":"MangoPay\\ApiClients::Update","doc":"<p>Save client</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiClients","fromLink":"MangoPay/ApiClients.html","link":"MangoPay/ApiClients.html#method_UploadLogo","name":"MangoPay\\ApiClients::UploadLogo","doc":"<p>Upload a logo for client.</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiClients","fromLink":"MangoPay/ApiClients.html","link":"MangoPay/ApiClients.html#method_UploadLogoFromFile","name":"MangoPay\\ApiClients::UploadLogoFromFile","doc":"<p>Upload a logo for client from file.</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiClients","fromLink":"MangoPay/ApiClients.html","link":"MangoPay/ApiClients.html#method_GetWallets","name":"MangoPay\\ApiClients::GetWallets","doc":"<p>View your client wallets. To see your fees or credit wallets\nfor each currency set second $fundsType parameter.</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiClients","fromLink":"MangoPay/ApiClients.html","link":"MangoPay/ApiClients.html#method_GetWallet","name":"MangoPay\\ApiClients::GetWallet","doc":"<p>View one of your client wallets (fees or credit) with a particular currency.</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiClients","fromLink":"MangoPay/ApiClients.html","link":"MangoPay/ApiClients.html#method_GetWalletTransactions","name":"MangoPay\\ApiClients::GetWalletTransactions","doc":"<p>View the transactions linked to your client wallets (fees and credit)</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiClients","fromLink":"MangoPay/ApiClients.html","link":"MangoPay/ApiClients.html#method_CreateBankAccount","name":"MangoPay\\ApiClients::CreateBankAccount","doc":null},
        {"type":"Method","fromName":"MangoPay\\ApiClients","fromLink":"MangoPay/ApiClients.html","link":"MangoPay/ApiClients.html#method_CreatePayOut","name":"MangoPay\\ApiClients::CreatePayOut","doc":null},
            
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/ApiDisputeDocuments.html","name":"MangoPay\\ApiDisputeDocuments","doc":"<p>Class ApiDisputeDocuments</p>"},
                                {"type":"Method","fromName":"MangoPay\\ApiDisputeDocuments","fromLink":"MangoPay/ApiDisputeDocuments.html","link":"MangoPay/ApiDisputeDocuments.html#method_Get","name":"MangoPay\\ApiDisputeDocuments::Get","doc":"<p>Gets dispute's document</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiDisputeDocuments","fromLink":"MangoPay/ApiDisputeDocuments.html","link":"MangoPay/ApiDisputeDocuments.html#method_GetAll","name":"MangoPay\\ApiDisputeDocuments::GetAll","doc":"<p>Gets dispute's documents for client</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiDisputeDocuments","fromLink":"MangoPay/ApiDisputeDocuments.html","link":"MangoPay/ApiDisputeDocuments.html#method_CreateDisputeDocumentConsult","name":"MangoPay\\ApiDisputeDocuments::CreateDisputeDocumentConsult","doc":"<p>Creates temporary URLs where each page of a dispute document can be viewed.</p>"},
            
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/ApiDisputes.html","name":"MangoPay\\ApiDisputes","doc":"<p>Class ApiDisputes</p>"},
                                {"type":"Method","fromName":"MangoPay\\ApiDisputes","fromLink":"MangoPay/ApiDisputes.html","link":"MangoPay/ApiDisputes.html#method_Get","name":"MangoPay\\ApiDisputes::Get","doc":"<p>Gets dispute</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiDisputes","fromLink":"MangoPay/ApiDisputes.html","link":"MangoPay/ApiDisputes.html#method_GetAll","name":"MangoPay\\ApiDisputes::GetAll","doc":"<p>Get all disputes</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiDisputes","fromLink":"MangoPay/ApiDisputes.html","link":"MangoPay/ApiDisputes.html#method_GetPendingSettlements","name":"MangoPay\\ApiDisputes::GetPendingSettlements","doc":"<p>List Disputes that need settling</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiDisputes","fromLink":"MangoPay/ApiDisputes.html","link":"MangoPay/ApiDisputes.html#method_Update","name":"MangoPay\\ApiDisputes::Update","doc":"<p>Updates dispute's tag</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiDisputes","fromLink":"MangoPay/ApiDisputes.html","link":"MangoPay/ApiDisputes.html#method_ContestDispute","name":"MangoPay\\ApiDisputes::ContestDispute","doc":"<p>Contests dispute</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiDisputes","fromLink":"MangoPay/ApiDisputes.html","link":"MangoPay/ApiDisputes.html#method_ResubmitDispute","name":"MangoPay\\ApiDisputes::ResubmitDispute","doc":"<p>This method is used to resubmit a Dispute if it is reopened requiring more docs</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiDisputes","fromLink":"MangoPay/ApiDisputes.html","link":"MangoPay/ApiDisputes.html#method_CloseDispute","name":"MangoPay\\ApiDisputes::CloseDispute","doc":"<p>Close dispute</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiDisputes","fromLink":"MangoPay/ApiDisputes.html","link":"MangoPay/ApiDisputes.html#method_GetTransactions","name":"MangoPay\\ApiDisputes::GetTransactions","doc":"<p>Gets dispute's transactions</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiDisputes","fromLink":"MangoPay/ApiDisputes.html","link":"MangoPay/ApiDisputes.html#method_GetDisputesForWallet","name":"MangoPay\\ApiDisputes::GetDisputesForWallet","doc":"<p>Gets dispute's documents for wallet</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiDisputes","fromLink":"MangoPay/ApiDisputes.html","link":"MangoPay/ApiDisputes.html#method_GetDisputesForUser","name":"MangoPay\\ApiDisputes::GetDisputesForUser","doc":"<p>Gets user's disputes</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiDisputes","fromLink":"MangoPay/ApiDisputes.html","link":"MangoPay/ApiDisputes.html#method_GetRepudiation","name":"MangoPay\\ApiDisputes::GetRepudiation","doc":"<p>Gets repudiation</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiDisputes","fromLink":"MangoPay/ApiDisputes.html","link":"MangoPay/ApiDisputes.html#method_CreateSettlementTransfer","name":"MangoPay\\ApiDisputes::CreateSettlementTransfer","doc":"<p>Creates settlement transfer</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiDisputes","fromLink":"MangoPay/ApiDisputes.html","link":"MangoPay/ApiDisputes.html#method_GetSettlementTransfer","name":"MangoPay\\ApiDisputes::GetSettlementTransfer","doc":"<p>Gets settlement transfer</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiDisputes","fromLink":"MangoPay/ApiDisputes.html","link":"MangoPay/ApiDisputes.html#method_GetDocumentsForDispute","name":"MangoPay\\ApiDisputes::GetDocumentsForDispute","doc":"<p>Gets documents for dispute</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiDisputes","fromLink":"MangoPay/ApiDisputes.html","link":"MangoPay/ApiDisputes.html#method_UpdateDisputeDocument","name":"MangoPay\\ApiDisputes::UpdateDisputeDocument","doc":"<p>Update dispute document</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiDisputes","fromLink":"MangoPay/ApiDisputes.html","link":"MangoPay/ApiDisputes.html#method_CreateDisputeDocument","name":"MangoPay\\ApiDisputes::CreateDisputeDocument","doc":"<p>Creates document for dispute</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiDisputes","fromLink":"MangoPay/ApiDisputes.html","link":"MangoPay/ApiDisputes.html#method_CreateDisputeDocumentPage","name":"MangoPay\\ApiDisputes::CreateDisputeDocumentPage","doc":"<p>Creates document's page for dispute</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiDisputes","fromLink":"MangoPay/ApiDisputes.html","link":"MangoPay/ApiDisputes.html#method_CreateDisputeDocumentPageFromFile","name":"MangoPay\\ApiDisputes::CreateDisputeDocumentPageFromFile","doc":"<p>Creates document's page for dispute from file</p>"},
            
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/ApiEvents.html","name":"MangoPay\\ApiEvents","doc":"<p>Class to management MangoPay API for cards</p>"},
                                {"type":"Method","fromName":"MangoPay\\ApiEvents","fromLink":"MangoPay/ApiEvents.html","link":"MangoPay/ApiEvents.html#method_GetAll","name":"MangoPay\\ApiEvents::GetAll","doc":"<p>Get events</p>"},
            
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/ApiHooks.html","name":"MangoPay\\ApiHooks","doc":"<p>Class to management MangoPay API for hooks and notifications</p>"},
                                {"type":"Method","fromName":"MangoPay\\ApiHooks","fromLink":"MangoPay/ApiHooks.html","link":"MangoPay/ApiHooks.html#method_Create","name":"MangoPay\\ApiHooks::Create","doc":"<p>Create new hook</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiHooks","fromLink":"MangoPay/ApiHooks.html","link":"MangoPay/ApiHooks.html#method_Get","name":"MangoPay\\ApiHooks::Get","doc":"<p>Get hook</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiHooks","fromLink":"MangoPay/ApiHooks.html","link":"MangoPay/ApiHooks.html#method_Update","name":"MangoPay\\ApiHooks::Update","doc":"<p>Save hook</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiHooks","fromLink":"MangoPay/ApiHooks.html","link":"MangoPay/ApiHooks.html#method_GetAll","name":"MangoPay\\ApiHooks::GetAll","doc":"<p>Get all hooks</p>"},
            
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/ApiKycDocuments.html","name":"MangoPay\\ApiKycDocuments","doc":"<p>Class to management MangoPay API for KYC document list</p>"},
                                {"type":"Method","fromName":"MangoPay\\ApiKycDocuments","fromLink":"MangoPay/ApiKycDocuments.html","link":"MangoPay/ApiKycDocuments.html#method_GetAll","name":"MangoPay\\ApiKycDocuments::GetAll","doc":"<p>Get all KYC documents</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiKycDocuments","fromLink":"MangoPay/ApiKycDocuments.html","link":"MangoPay/ApiKycDocuments.html#method_Get","name":"MangoPay\\ApiKycDocuments::Get","doc":"<p>Get KYC document</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiKycDocuments","fromLink":"MangoPay/ApiKycDocuments.html","link":"MangoPay/ApiKycDocuments.html#method_CreateKycDocumentConsult","name":"MangoPay\\ApiKycDocuments::CreateKycDocumentConsult","doc":"<p>Creates temporary URLs where each page of a KYC document can be viewed.</p>"},
            
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/ApiMandates.html","name":"MangoPay\\ApiMandates","doc":"<p>Class to management MangoPay API for mandates</p>"},
                                {"type":"Method","fromName":"MangoPay\\ApiMandates","fromLink":"MangoPay/ApiMandates.html","link":"MangoPay/ApiMandates.html#method_Create","name":"MangoPay\\ApiMandates::Create","doc":"<p>Create new mandate</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiMandates","fromLink":"MangoPay/ApiMandates.html","link":"MangoPay/ApiMandates.html#method_Get","name":"MangoPay\\ApiMandates::Get","doc":"<p>Get mandate</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiMandates","fromLink":"MangoPay/ApiMandates.html","link":"MangoPay/ApiMandates.html#method_Cancel","name":"MangoPay\\ApiMandates::Cancel","doc":"<p>Cancel mandate</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiMandates","fromLink":"MangoPay/ApiMandates.html","link":"MangoPay/ApiMandates.html#method_GetAll","name":"MangoPay\\ApiMandates::GetAll","doc":"<p>Get all mandates</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiMandates","fromLink":"MangoPay/ApiMandates.html","link":"MangoPay/ApiMandates.html#method_GetTransactions","name":"MangoPay\\ApiMandates::GetTransactions","doc":"<p>Retrieves list of Transactions pertaining to a certain Mandate</p>"},
            
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/ApiPayIns.html","name":"MangoPay\\ApiPayIns","doc":"<p>Class to management MangoPay API for pay-ins</p>"},
                                {"type":"Method","fromName":"MangoPay\\ApiPayIns","fromLink":"MangoPay/ApiPayIns.html","link":"MangoPay/ApiPayIns.html#method_Create","name":"MangoPay\\ApiPayIns::Create","doc":"<p>Create new pay-in object</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiPayIns","fromLink":"MangoPay/ApiPayIns.html","link":"MangoPay/ApiPayIns.html#method_Get","name":"MangoPay\\ApiPayIns::Get","doc":"<p>Get pay-in object</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiPayIns","fromLink":"MangoPay/ApiPayIns.html","link":"MangoPay/ApiPayIns.html#method_CreateRefund","name":"MangoPay\\ApiPayIns::CreateRefund","doc":"<p>Create refund for pay-in object</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiPayIns","fromLink":"MangoPay/ApiPayIns.html","link":"MangoPay/ApiPayIns.html#method_CreateRecurringRegistration","name":"MangoPay\\ApiPayIns::CreateRecurringRegistration","doc":"<p>Create a recurring payment</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiPayIns","fromLink":"MangoPay/ApiPayIns.html","link":"MangoPay/ApiPayIns.html#method_GetRecurringRegistration","name":"MangoPay\\ApiPayIns::GetRecurringRegistration","doc":"<p>Get recurring payment</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiPayIns","fromLink":"MangoPay/ApiPayIns.html","link":"MangoPay/ApiPayIns.html#method_UpdateRecurringRegistration","name":"MangoPay\\ApiPayIns::UpdateRecurringRegistration","doc":"<p>Update recurring payment</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiPayIns","fromLink":"MangoPay/ApiPayIns.html","link":"MangoPay/ApiPayIns.html#method_CreateRecurringPayInRegistrationCIT","name":"MangoPay\\ApiPayIns::CreateRecurringPayInRegistrationCIT","doc":"<p>Create a Recurring PayIn CIT</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiPayIns","fromLink":"MangoPay/ApiPayIns.html","link":"MangoPay/ApiPayIns.html#method_CreateRecurringPayInRegistrationMIT","name":"MangoPay\\ApiPayIns::CreateRecurringPayInRegistrationMIT","doc":"<p>Create a Recurring PayIn MIT</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiPayIns","fromLink":"MangoPay/ApiPayIns.html","link":"MangoPay/ApiPayIns.html#method_GetRefunds","name":"MangoPay\\ApiPayIns::GetRefunds","doc":"<p>Retrieves a list of Refunds pertaining to a certain PayIn</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiPayIns","fromLink":"MangoPay/ApiPayIns.html","link":"MangoPay/ApiPayIns.html#method_GetExtendedCardView","name":"MangoPay\\ApiPayIns::GetExtendedCardView","doc":"<p>Retrieves a more detailed view of details concerning\nthe card used to process a Web payment.</p>"},
            
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/ApiPayOuts.html","name":"MangoPay\\ApiPayOuts","doc":"<p>Class to management MangoPay API for pay-outs</p>"},
                                {"type":"Method","fromName":"MangoPay\\ApiPayOuts","fromLink":"MangoPay/ApiPayOuts.html","link":"MangoPay/ApiPayOuts.html#method_Create","name":"MangoPay\\ApiPayOuts::Create","doc":"<p>Create new pay-out</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiPayOuts","fromLink":"MangoPay/ApiPayOuts.html","link":"MangoPay/ApiPayOuts.html#method_Get","name":"MangoPay\\ApiPayOuts::Get","doc":"<p>Get pay-out object</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiPayOuts","fromLink":"MangoPay/ApiPayOuts.html","link":"MangoPay/ApiPayOuts.html#method_GetBankwire","name":"MangoPay\\ApiPayOuts::GetBankwire","doc":"<p>Get bankwire pay-out object</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiPayOuts","fromLink":"MangoPay/ApiPayOuts.html","link":"MangoPay/ApiPayOuts.html#method_GetRefunds","name":"MangoPay\\ApiPayOuts::GetRefunds","doc":"<p>Returns a list of Refunds pertaining to a certain PayOut.</p>"},
            
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/ApiRefunds.html","name":"MangoPay\\ApiRefunds","doc":"<p>Class to management MangoPay API for refunds</p>"},
                                {"type":"Method","fromName":"MangoPay\\ApiRefunds","fromLink":"MangoPay/ApiRefunds.html","link":"MangoPay/ApiRefunds.html#method_Get","name":"MangoPay\\ApiRefunds::Get","doc":"<p>Get refund object</p>"},
            
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/ApiReports.html","name":"MangoPay\\ApiReports","doc":"<p>Class to management MangoPay API for reports</p>"},
                                {"type":"Method","fromName":"MangoPay\\ApiReports","fromLink":"MangoPay/ApiReports.html","link":"MangoPay/ApiReports.html#method_Create","name":"MangoPay\\ApiReports::Create","doc":"<p>Creates new report request</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiReports","fromLink":"MangoPay/ApiReports.html","link":"MangoPay/ApiReports.html#method_Get","name":"MangoPay\\ApiReports::Get","doc":"<p>Gets report request.</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiReports","fromLink":"MangoPay/ApiReports.html","link":"MangoPay/ApiReports.html#method_GetAll","name":"MangoPay\\ApiReports::GetAll","doc":"<p>Gets all report requests.</p>"},
            
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/ApiRepudiations.html","name":"MangoPay\\ApiRepudiations","doc":"<p>Class to manage MangoPay API for Repudiations</p>"},
                                {"type":"Method","fromName":"MangoPay\\ApiRepudiations","fromLink":"MangoPay/ApiRepudiations.html","link":"MangoPay/ApiRepudiations.html#method_Get","name":"MangoPay\\ApiRepudiations::Get","doc":""},
        {"type":"Method","fromName":"MangoPay\\ApiRepudiations","fromLink":"MangoPay/ApiRepudiations.html","link":"MangoPay/ApiRepudiations.html#method_GetRefunds","name":"MangoPay\\ApiRepudiations::GetRefunds","doc":"<p>Retrieves a list of Refunds pertaining to a certain Repudiation</p>"},
            
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/ApiResponses.html","name":"MangoPay\\ApiResponses","doc":"<p>Class to management MangoPay API for responses\nSee</p>"},
                                {"type":"Method","fromName":"MangoPay\\ApiResponses","fromLink":"MangoPay/ApiResponses.html","link":"MangoPay/ApiResponses.html#method_Get","name":"MangoPay\\ApiResponses::Get","doc":"<p>Get response from previous call by idempotency key</p>"},
            
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/ApiTransfers.html","name":"MangoPay\\ApiTransfers","doc":"<p>Class to management MangoPay API for transfers</p>"},
                                {"type":"Method","fromName":"MangoPay\\ApiTransfers","fromLink":"MangoPay/ApiTransfers.html","link":"MangoPay/ApiTransfers.html#method_Create","name":"MangoPay\\ApiTransfers::Create","doc":"<p>Create new transfer</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiTransfers","fromLink":"MangoPay/ApiTransfers.html","link":"MangoPay/ApiTransfers.html#method_Get","name":"MangoPay\\ApiTransfers::Get","doc":"<p>Get transfer</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiTransfers","fromLink":"MangoPay/ApiTransfers.html","link":"MangoPay/ApiTransfers.html#method_CreateRefund","name":"MangoPay\\ApiTransfers::CreateRefund","doc":"<p>Create refund for transfer object</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiTransfers","fromLink":"MangoPay/ApiTransfers.html","link":"MangoPay/ApiTransfers.html#method_GetRefunds","name":"MangoPay\\ApiTransfers::GetRefunds","doc":"<p>Retrieve list of Refunds pertaining to a certain Transfer</p>"},
            
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/ApiUboDeclarations.html","name":"MangoPay\\ApiUboDeclarations","doc":"<p>Manages API calls for the UBO declaration entity.</p>"},
                                {"type":"Method","fromName":"MangoPay\\ApiUboDeclarations","fromLink":"MangoPay/ApiUboDeclarations.html","link":"MangoPay/ApiUboDeclarations.html#method_Create","name":"MangoPay\\ApiUboDeclarations::Create","doc":"<p>Creates a new UBO Declaration for an user.</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiUboDeclarations","fromLink":"MangoPay/ApiUboDeclarations.html","link":"MangoPay/ApiUboDeclarations.html#method_GetAll","name":"MangoPay\\ApiUboDeclarations::GetAll","doc":null},
        {"type":"Method","fromName":"MangoPay\\ApiUboDeclarations","fromLink":"MangoPay/ApiUboDeclarations.html","link":"MangoPay/ApiUboDeclarations.html#method_Get","name":"MangoPay\\ApiUboDeclarations::Get","doc":"<p>Gets an UBO Declaration.</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiUboDeclarations","fromLink":"MangoPay/ApiUboDeclarations.html","link":"MangoPay/ApiUboDeclarations.html#method_GetById","name":"MangoPay\\ApiUboDeclarations::GetById","doc":"<p>Gets an UBO Declaration directly by Id.</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiUboDeclarations","fromLink":"MangoPay/ApiUboDeclarations.html","link":"MangoPay/ApiUboDeclarations.html#method_CreateUbo","name":"MangoPay\\ApiUboDeclarations::CreateUbo","doc":"<p>Creates a new UBO for the specified arguments</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiUboDeclarations","fromLink":"MangoPay/ApiUboDeclarations.html","link":"MangoPay/ApiUboDeclarations.html#method_UpdateUbo","name":"MangoPay\\ApiUboDeclarations::UpdateUbo","doc":"<p>Updates an UBO</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiUboDeclarations","fromLink":"MangoPay/ApiUboDeclarations.html","link":"MangoPay/ApiUboDeclarations.html#method_GetUbo","name":"MangoPay\\ApiUboDeclarations::GetUbo","doc":"<p>Gets an UBO</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiUboDeclarations","fromLink":"MangoPay/ApiUboDeclarations.html","link":"MangoPay/ApiUboDeclarations.html#method_SubmitForValidation","name":"MangoPay\\ApiUboDeclarations::SubmitForValidation","doc":"<p>Updates an UBO Declaration with the status <code>VALIDATION_ASKED</code>.</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiUboDeclarations","fromLink":"MangoPay/ApiUboDeclarations.html","link":"MangoPay/ApiUboDeclarations.html#method_GetUboDeclarationById","name":"MangoPay\\ApiUboDeclarations::GetUboDeclarationById","doc":"<p>Gets an UBO Declaration.</p>"},
            
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/ApiUsers.html","name":"MangoPay\\ApiUsers","doc":"<p>Class to manage MangoPay API calls for the user entity.</p>"},
                                {"type":"Method","fromName":"MangoPay\\ApiUsers","fromLink":"MangoPay/ApiUsers.html","link":"MangoPay/ApiUsers.html#method_Create","name":"MangoPay\\ApiUsers::Create","doc":"<p>Create a new user</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiUsers","fromLink":"MangoPay/ApiUsers.html","link":"MangoPay/ApiUsers.html#method_GetAll","name":"MangoPay\\ApiUsers::GetAll","doc":"<p>Get all users</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiUsers","fromLink":"MangoPay/ApiUsers.html","link":"MangoPay/ApiUsers.html#method_Get","name":"MangoPay\\ApiUsers::Get","doc":"<p>Get natural or legal user by ID</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiUsers","fromLink":"MangoPay/ApiUsers.html","link":"MangoPay/ApiUsers.html#method_GetNatural","name":"MangoPay\\ApiUsers::GetNatural","doc":"<p>Get natural user by ID</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiUsers","fromLink":"MangoPay/ApiUsers.html","link":"MangoPay/ApiUsers.html#method_GetLegal","name":"MangoPay\\ApiUsers::GetLegal","doc":"<p>Get legal user by ID</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiUsers","fromLink":"MangoPay/ApiUsers.html","link":"MangoPay/ApiUsers.html#method_Update","name":"MangoPay\\ApiUsers::Update","doc":"<p>Save user</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiUsers","fromLink":"MangoPay/ApiUsers.html","link":"MangoPay/ApiUsers.html#method_CreateBankAccount","name":"MangoPay\\ApiUsers::CreateBankAccount","doc":"<p>Create bank account for user</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiUsers","fromLink":"MangoPay/ApiUsers.html","link":"MangoPay/ApiUsers.html#method_GetBankAccounts","name":"MangoPay\\ApiUsers::GetBankAccounts","doc":"<p>Get all bank accounts for user</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiUsers","fromLink":"MangoPay/ApiUsers.html","link":"MangoPay/ApiUsers.html#method_GetBankAccount","name":"MangoPay\\ApiUsers::GetBankAccount","doc":"<p>Get bank account for user</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiUsers","fromLink":"MangoPay/ApiUsers.html","link":"MangoPay/ApiUsers.html#method_UpdateBankAccount","name":"MangoPay\\ApiUsers::UpdateBankAccount","doc":"<p>Save a bank account</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiUsers","fromLink":"MangoPay/ApiUsers.html","link":"MangoPay/ApiUsers.html#method_GetWallets","name":"MangoPay\\ApiUsers::GetWallets","doc":"<p>Get all wallets for user</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiUsers","fromLink":"MangoPay/ApiUsers.html","link":"MangoPay/ApiUsers.html#method_GetTransactions","name":"MangoPay\\ApiUsers::GetTransactions","doc":"<p>Get all transactions for user</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiUsers","fromLink":"MangoPay/ApiUsers.html","link":"MangoPay/ApiUsers.html#method_GetCards","name":"MangoPay\\ApiUsers::GetCards","doc":"<p>Get all cards for user</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiUsers","fromLink":"MangoPay/ApiUsers.html","link":"MangoPay/ApiUsers.html#method_CreateKycDocument","name":"MangoPay\\ApiUsers::CreateKycDocument","doc":"<p>Create new KYC document</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiUsers","fromLink":"MangoPay/ApiUsers.html","link":"MangoPay/ApiUsers.html#method_GetKycDocuments","name":"MangoPay\\ApiUsers::GetKycDocuments","doc":"<p>Get all KYC documents for user</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiUsers","fromLink":"MangoPay/ApiUsers.html","link":"MangoPay/ApiUsers.html#method_GetKycDocument","name":"MangoPay\\ApiUsers::GetKycDocument","doc":"<p>Get KYC document</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiUsers","fromLink":"MangoPay/ApiUsers.html","link":"MangoPay/ApiUsers.html#method_GetMandates","name":"MangoPay\\ApiUsers::GetMandates","doc":"<p>Get all mandates for user</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiUsers","fromLink":"MangoPay/ApiUsers.html","link":"MangoPay/ApiUsers.html#method_GetMandatesForBankAccount","name":"MangoPay\\ApiUsers::GetMandatesForBankAccount","doc":"<p>Get mandates for user and bank account</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiUsers","fromLink":"MangoPay/ApiUsers.html","link":"MangoPay/ApiUsers.html#method_UpdateKycDocument","name":"MangoPay\\ApiUsers::UpdateKycDocument","doc":"<p>Save KYC document</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiUsers","fromLink":"MangoPay/ApiUsers.html","link":"MangoPay/ApiUsers.html#method_CreateKycPage","name":"MangoPay\\ApiUsers::CreateKycPage","doc":"<p>Create page for Kyc document</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiUsers","fromLink":"MangoPay/ApiUsers.html","link":"MangoPay/ApiUsers.html#method_CreateKycPageFromFile","name":"MangoPay\\ApiUsers::CreateKycPageFromFile","doc":"<p>Create page for Kyc document from file</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiUsers","fromLink":"MangoPay/ApiUsers.html","link":"MangoPay/ApiUsers.html#method_GetEMoney","name":"MangoPay\\ApiUsers::GetEMoney","doc":"<p>Get user EMoney</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiUsers","fromLink":"MangoPay/ApiUsers.html","link":"MangoPay/ApiUsers.html#method_GetPreAuthorizations","name":"MangoPay\\ApiUsers::GetPreAuthorizations","doc":"<p>Gets a list with PreAuthorizations belonging to a specific user</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiUsers","fromLink":"MangoPay/ApiUsers.html","link":"MangoPay/ApiUsers.html#method_GetBlockStatus","name":"MangoPay\\ApiUsers::GetBlockStatus","doc":"<p>Get the Block Status of a User</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiUsers","fromLink":"MangoPay/ApiUsers.html","link":"MangoPay/ApiUsers.html#method_GetRegulatory","name":"MangoPay\\ApiUsers::GetRegulatory","doc":"<p>Get the Block Status Regulatory  of a User</p>"},
            
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/ApiWallets.html","name":"MangoPay\\ApiWallets","doc":"<p>Class to management MangoPay API for wallets</p>"},
                                {"type":"Method","fromName":"MangoPay\\ApiWallets","fromLink":"MangoPay/ApiWallets.html","link":"MangoPay/ApiWallets.html#method_Create","name":"MangoPay\\ApiWallets::Create","doc":"<p>Create new wallet</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiWallets","fromLink":"MangoPay/ApiWallets.html","link":"MangoPay/ApiWallets.html#method_Get","name":"MangoPay\\ApiWallets::Get","doc":"<p>Get wallet</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiWallets","fromLink":"MangoPay/ApiWallets.html","link":"MangoPay/ApiWallets.html#method_Update","name":"MangoPay\\ApiWallets::Update","doc":"<p>Save wallet</p>"},
        {"type":"Method","fromName":"MangoPay\\ApiWallets","fromLink":"MangoPay/ApiWallets.html","link":"MangoPay/ApiWallets.html#method_GetTransactions","name":"MangoPay\\ApiWallets::GetTransactions","doc":"<p>Get transactions for the wallet</p>"},
            
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/BankAccount.html","name":"MangoPay\\BankAccount","doc":"<p>Bank Account entity</p>"},
                                {"type":"Method","fromName":"MangoPay\\BankAccount","fromLink":"MangoPay/BankAccount.html","link":"MangoPay/BankAccount.html#method_GetSubObjects","name":"MangoPay\\BankAccount::GetSubObjects","doc":"<p>Get array with mapping which property is object and what type of object</p>"},
        {"type":"Method","fromName":"MangoPay\\BankAccount","fromLink":"MangoPay/BankAccount.html","link":"MangoPay/BankAccount.html#method_GetDependsObjects","name":"MangoPay\\BankAccount::GetDependsObjects","doc":"<p>Get array with mapping which property depends on other property</p>"},
        {"type":"Method","fromName":"MangoPay\\BankAccount","fromLink":"MangoPay/BankAccount.html","link":"MangoPay/BankAccount.html#method_GetReadOnlyProperties","name":"MangoPay\\BankAccount::GetReadOnlyProperties","doc":"<p>Get array with read-only properties</p>"},
            
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/BankAccountDetails.html","name":"MangoPay\\BankAccountDetails","doc":"<p>Marker interface for classes with details option in BankAccount entity</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/BankAccountDetailsCA.html","name":"MangoPay\\BankAccountDetailsCA","doc":"<p>Class represents CA bank account type for in BankAccount entity</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/BankAccountDetailsGB.html","name":"MangoPay\\BankAccountDetailsGB","doc":"<p>Class represents GB bank account type for in BankAccount entity</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/BankAccountDetailsIBAN.html","name":"MangoPay\\BankAccountDetailsIBAN","doc":"<p>Class represents IBAN bank account type for in BankAccount entity</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/BankAccountDetailsOTHER.html","name":"MangoPay\\BankAccountDetailsOTHER","doc":"<p>Class represents OTHER bank account type for in BankAccount entity</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/BankAccountDetailsUS.html","name":"MangoPay\\BankAccountDetailsUS","doc":"<p>Class represents US bank account type for in BankAccount entity</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/BankingAlias.html","name":"MangoPay\\BankingAlias","doc":"<p>Bank Account entity</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/BankingAliasIBAN.html","name":"MangoPay\\BankingAliasIBAN","doc":"<p>Bank Account entity</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/BankingAliasOTHER.html","name":"MangoPay\\BankingAliasOTHER","doc":null},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/BankingAliasType.html","name":"MangoPay\\BankingAliasType","doc":"<p>Event types</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/Billing.html","name":"MangoPay\\Billing","doc":"<p>Billing information</p>"},
                                {"type":"Method","fromName":"MangoPay\\Billing","fromLink":"MangoPay/Billing.html","link":"MangoPay/Billing.html#method_GetSubObjects","name":"MangoPay\\Billing::GetSubObjects","doc":"<p>Get array with mapping which property is object and what type of object</p>"},
            
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/Birthplace.html","name":"MangoPay\\Birthplace","doc":null},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/BrowserInfo.html","name":"MangoPay\\BrowserInfo","doc":null},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/BusinessType.html","name":"MangoPay\\BusinessType","doc":"<p>Business types</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/Card.html","name":"MangoPay\\Card","doc":"<p>Card entity</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/CardPreAuthorization.html","name":"MangoPay\\CardPreAuthorization","doc":"<p>Pre-authorization entity</p>"},
                                {"type":"Method","fromName":"MangoPay\\CardPreAuthorization","fromLink":"MangoPay/CardPreAuthorization.html","link":"MangoPay/CardPreAuthorization.html#method_GetSubObjects","name":"MangoPay\\CardPreAuthorization::GetSubObjects","doc":"<p>Get array with mapping which property is object and what type of object</p>"},
        {"type":"Method","fromName":"MangoPay\\CardPreAuthorization","fromLink":"MangoPay/CardPreAuthorization.html","link":"MangoPay/CardPreAuthorization.html#method_GetReadOnlyProperties","name":"MangoPay\\CardPreAuthorization::GetReadOnlyProperties","doc":"<p>Get array with read-only properties</p>"},
            
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/CardPreAuthorizationPaymentStatus.html","name":"MangoPay\\CardPreAuthorizationPaymentStatus","doc":"<p>Pre-authorization payment statuses</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/CardPreAuthorizationStatus.html","name":"MangoPay\\CardPreAuthorizationStatus","doc":"<p>Pre-authorization statuses</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/CardRegistration.html","name":"MangoPay\\CardRegistration","doc":"<p>CardRegistration entity</p>"},
                                {"type":"Method","fromName":"MangoPay\\CardRegistration","fromLink":"MangoPay/CardRegistration.html","link":"MangoPay/CardRegistration.html#method_GetReadOnlyProperties","name":"MangoPay\\CardRegistration::GetReadOnlyProperties","doc":"<p>Get array with read-only properties</p>"},
            
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/CardRegistrationStatus.html","name":"MangoPay\\CardRegistrationStatus","doc":"<p>Card registration statuses</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/CardValidity.html","name":"MangoPay\\CardValidity","doc":null},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/Client.html","name":"MangoPay\\Client","doc":"<p>Client entity</p>"},
                                {"type":"Method","fromName":"MangoPay\\Client","fromLink":"MangoPay/Client.html","link":"MangoPay/Client.html#method_GetSubObjects","name":"MangoPay\\Client::GetSubObjects","doc":"<p>Get array with mapping which property is object and what type of object</p>"},
        {"type":"Method","fromName":"MangoPay\\Client","fromLink":"MangoPay/Client.html","link":"MangoPay/Client.html#method_GetReadOnlyProperties","name":"MangoPay\\Client::GetReadOnlyProperties","doc":"<p>Get array with read-only properties</p>"},
            
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/ClientLogoUpload.html","name":"MangoPay\\ClientLogoUpload","doc":"<p>Client logo upload entity</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/CurrencyIso.html","name":"MangoPay\\CurrencyIso","doc":"<p>Currencies</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/DebitedBankAccount.html","name":"MangoPay\\DebitedBankAccount","doc":"<p>Debited bank account object.</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/DeclaredUbo.html","name":"MangoPay\\DeclaredUbo","doc":"<p>Represents validation status of a user declared as UBO.</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/DeclaredUboStatus.html","name":"MangoPay\\DeclaredUboStatus","doc":"<p>Holds enumeration of possible statuses of a declared UBO.</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/Dispute.html","name":"MangoPay\\Dispute","doc":"<p>Dispute entity</p>"},
                                {"type":"Method","fromName":"MangoPay\\Dispute","fromLink":"MangoPay/Dispute.html","link":"MangoPay/Dispute.html#method_GetSubObjects","name":"MangoPay\\Dispute::GetSubObjects","doc":"<p>Get array with mapping which property is object and what type of object</p>"},
        {"type":"Method","fromName":"MangoPay\\Dispute","fromLink":"MangoPay/Dispute.html","link":"MangoPay/Dispute.html#method_GetReadOnlyProperties","name":"MangoPay\\Dispute::GetReadOnlyProperties","doc":"<p>Get array with read-only properties</p>"},
            
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/DisputeDocument.html","name":"MangoPay\\DisputeDocument","doc":"<p>Dispute document entity</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/DisputeDocumentPage.html","name":"MangoPay\\DisputeDocumentPage","doc":"<p>Dispute document page entity for dispute document</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/DisputeDocumentStatus.html","name":"MangoPay\\DisputeDocumentStatus","doc":"<p>Dispute document statuses</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/DisputeDocumentType.html","name":"MangoPay\\DisputeDocumentType","doc":"<p>Dispute document types</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/DisputeReason.html","name":"MangoPay\\DisputeReason","doc":"<p>Class represents dispute's reason</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/DisputeReasonType.html","name":"MangoPay\\DisputeReasonType","doc":"<p>Dispute reason types</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/DisputeStatus.html","name":"MangoPay\\DisputeStatus","doc":"<p>Dispute statuses</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/DisputeType.html","name":"MangoPay\\DisputeType","doc":"<p>Dispute types</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/DocumentPageConsult.html","name":"MangoPay\\DocumentPageConsult","doc":"<p>Holds document page viewing data.</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/EMoney.html","name":"MangoPay\\EMoney","doc":"<p>User entity</p>"},
                                {"type":"Method","fromName":"MangoPay\\EMoney","fromLink":"MangoPay/EMoney.html","link":"MangoPay/EMoney.html#method_GetSubObjects","name":"MangoPay\\EMoney::GetSubObjects","doc":"<p>Get array with mapping which property is object and what type of object</p>"},
            
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/Event.html","name":"MangoPay\\Event","doc":"<p>Event entity</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/EventType.html","name":"MangoPay\\EventType","doc":"<p>Event types</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/FallbackReason.html","name":"MangoPay\\FallbackReason","doc":null},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/FilterBankAccounts.html","name":"MangoPay\\FilterBankAccounts","doc":"<p>Filtering object for Bank Accounts</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/FilterBase.html","name":"MangoPay\\FilterBase","doc":"<p>Base filter object</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/FilterCards.html","name":"MangoPay\\FilterCards","doc":"<p>Filtering object for Cards</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/FilterDisputeDocuments.html","name":"MangoPay\\FilterDisputeDocuments","doc":"<p>Filter for event list</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/FilterDisputes.html","name":"MangoPay\\FilterDisputes","doc":"<p>Filter for dispute list</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/FilterEvents.html","name":"MangoPay\\FilterEvents","doc":"<p>Filter for event list</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/FilterKycDocuments.html","name":"MangoPay\\FilterKycDocuments","doc":"<p>Filter for dispute document list</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/FilterPreAuthorizations.html","name":"MangoPay\\FilterPreAuthorizations","doc":"<p>Filtering object for PreAuthorization lists</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/FilterRefunds.html","name":"MangoPay\\FilterRefunds","doc":"<p>Filtering object for Refunds</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/FilterReports.html","name":"MangoPay\\FilterReports","doc":"<p>Filter for transaction list</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/FilterTransactions.html","name":"MangoPay\\FilterTransactions","doc":"<p>Filter for transaction list</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/FundsType.html","name":"MangoPay\\FundsType","doc":"<p>Funds types</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/Hook.html","name":"MangoPay\\Hook","doc":"<p>Hooks and Notifications entity</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/HookStatus.html","name":"MangoPay\\HookStatus","doc":null},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/HookValidity.html","name":"MangoPay\\HookValidity","doc":null},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/KeyValueArray.html","name":"MangoPay\\KeyValueArray","doc":"<p>Class represents tabular values</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/KycDocument.html","name":"MangoPay\\KycDocument","doc":"<p>KYC document entity</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/KycDocumentRefusedReasonType.html","name":"MangoPay\\KycDocumentRefusedReasonType","doc":"<p>Kyc Refused Reason Type</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/KycDocumentStatus.html","name":"MangoPay\\KycDocumentStatus","doc":"<p>KYC document statuses</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/KycDocumentType.html","name":"MangoPay\\KycDocumentType","doc":"<p>KYC document types</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/KycLevel.html","name":"MangoPay\\KycLevel","doc":"<p>KYC Level</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/KycPage.html","name":"MangoPay\\KycPage","doc":"<p>KYC page entity for Kyc document</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/LegalPersonType.html","name":"MangoPay\\LegalPersonType","doc":"<p>Legal Person types</p>"},
                
                                                {"type":"Class","fromName":"MangoPay\\Libraries","fromLink":"MangoPay/Libraries.html","link":"MangoPay/Libraries/ApiBase.html","name":"MangoPay\\Libraries\\ApiBase","doc":"<p>Base class for MangoPay API managers</p>"},
                                {"type":"Method","fromName":"MangoPay\\Libraries\\ApiBase","fromLink":"MangoPay/Libraries/ApiBase.html","link":"MangoPay/Libraries/ApiBase.html#method_getLogger","name":"MangoPay\\Libraries\\ApiBase::getLogger","doc":""},
        {"type":"Method","fromName":"MangoPay\\Libraries\\ApiBase","fromLink":"MangoPay/Libraries/ApiBase.html","link":"MangoPay/Libraries/ApiBase.html#method___construct","name":"MangoPay\\Libraries\\ApiBase::__construct","doc":"<p>Constructor</p>"},
        {"type":"Method","fromName":"MangoPay\\Libraries\\ApiBase","fromLink":"MangoPay/Libraries/ApiBase.html","link":"MangoPay/Libraries/ApiBase.html#method_GetRequestUrl","name":"MangoPay\\Libraries\\ApiBase::GetRequestUrl","doc":"<p>Get URL for REST Mango Pay API</p>"},
        {"type":"Method","fromName":"MangoPay\\Libraries\\ApiBase","fromLink":"MangoPay/Libraries/ApiBase.html","link":"MangoPay/Libraries/ApiBase.html#method_GetRequestType","name":"MangoPay\\Libraries\\ApiBase::GetRequestType","doc":"<p>Get request type for REST Mango Pay API</p>"},
        {"type":"Method","fromName":"MangoPay\\Libraries\\ApiBase","fromLink":"MangoPay/Libraries/ApiBase.html","link":"MangoPay/Libraries/ApiBase.html#method_CreateObject","name":"MangoPay\\Libraries\\ApiBase::CreateObject","doc":"<p>Create object in API</p>"},
        {"type":"Method","fromName":"MangoPay\\Libraries\\ApiBase","fromLink":"MangoPay/Libraries/ApiBase.html","link":"MangoPay/Libraries/ApiBase.html#method_GetObject","name":"MangoPay\\Libraries\\ApiBase::GetObject","doc":"<p>Get entity object from API</p>"},
        {"type":"Method","fromName":"MangoPay\\Libraries\\ApiBase","fromLink":"MangoPay/Libraries/ApiBase.html","link":"MangoPay/Libraries/ApiBase.html#method_GetList","name":"MangoPay\\Libraries\\ApiBase::GetList","doc":"<p>Get lst with entities object from API</p>"},
        {"type":"Method","fromName":"MangoPay\\Libraries\\ApiBase","fromLink":"MangoPay/Libraries/ApiBase.html","link":"MangoPay/Libraries/ApiBase.html#method_SaveObject","name":"MangoPay\\Libraries\\ApiBase::SaveObject","doc":"<p>Save object in API</p>"},
        {"type":"Method","fromName":"MangoPay\\Libraries\\ApiBase","fromLink":"MangoPay/Libraries/ApiBase.html","link":"MangoPay/Libraries/ApiBase.html#method_CastResponseToEntity","name":"MangoPay\\Libraries\\ApiBase::CastResponseToEntity","doc":"<p>Cast response object to entity object</p>"},
        {"type":"Method","fromName":"MangoPay\\Libraries\\ApiBase","fromLink":"MangoPay/Libraries/ApiBase.html","link":"MangoPay/Libraries/ApiBase.html#method_BuildRequestData","name":"MangoPay\\Libraries\\ApiBase::BuildRequestData","doc":"<p>Get array with request data</p>"},
        {"type":"Method","fromName":"MangoPay\\Libraries\\ApiBase","fromLink":"MangoPay/Libraries/ApiBase.html","link":"MangoPay/Libraries/ApiBase.html#method_GetObjectForIdempotencyUrl","name":"MangoPay\\Libraries\\ApiBase::GetObjectForIdempotencyUrl","doc":null},
            
                                                {"type":"Class","fromName":"MangoPay\\Libraries","fromLink":"MangoPay/Libraries.html","link":"MangoPay/Libraries/ApiOAuth.html","name":"MangoPay\\Libraries\\ApiOAuth","doc":"<p>Authentication manager</p>"},
                                {"type":"Method","fromName":"MangoPay\\Libraries\\ApiOAuth","fromLink":"MangoPay/Libraries/ApiOAuth.html","link":"MangoPay/Libraries/ApiOAuth.html#method_CreateToken","name":"MangoPay\\Libraries\\ApiOAuth::CreateToken","doc":"<p>Get token information to OAuth Authentication</p>"},
            
                                                {"type":"Class","fromName":"MangoPay\\Libraries","fromLink":"MangoPay/Libraries.html","link":"MangoPay/Libraries/AuthenticationHelper.html","name":"MangoPay\\Libraries\\AuthenticationHelper","doc":null},
                                {"type":"Method","fromName":"MangoPay\\Libraries\\AuthenticationHelper","fromLink":"MangoPay/Libraries/AuthenticationHelper.html","link":"MangoPay/Libraries/AuthenticationHelper.html#method___construct","name":"MangoPay\\Libraries\\AuthenticationHelper::__construct","doc":"<p>Constructor</p>"},
        {"type":"Method","fromName":"MangoPay\\Libraries\\AuthenticationHelper","fromLink":"MangoPay/Libraries/AuthenticationHelper.html","link":"MangoPay/Libraries/AuthenticationHelper.html#method_GetHttpHeaderKey","name":"MangoPay\\Libraries\\AuthenticationHelper::GetHttpHeaderKey","doc":"<p>Get HTTP header value with authorization string</p>"},
        {"type":"Method","fromName":"MangoPay\\Libraries\\AuthenticationHelper","fromLink":"MangoPay/Libraries/AuthenticationHelper.html","link":"MangoPay/Libraries/AuthenticationHelper.html#method_GetHttpHeaderBasicKey","name":"MangoPay\\Libraries\\AuthenticationHelper::GetHttpHeaderBasicKey","doc":"<p>Get basic key for HTTP header</p>"},
        {"type":"Method","fromName":"MangoPay\\Libraries\\AuthenticationHelper","fromLink":"MangoPay/Libraries/AuthenticationHelper.html","link":"MangoPay/Libraries/AuthenticationHelper.html#method_GetAutenticationKey","name":"MangoPay\\Libraries\\AuthenticationHelper::GetAutenticationKey","doc":null},
            
                                                {"type":"Class","fromName":"MangoPay\\Libraries","fromLink":"MangoPay/Libraries.html","link":"MangoPay/Libraries/AuthorizationTokenManager.html","name":"MangoPay\\Libraries\\AuthorizationTokenManager","doc":"<p>Authorization token manager</p>"},
                                {"type":"Method","fromName":"MangoPay\\Libraries\\AuthorizationTokenManager","fromLink":"MangoPay/Libraries/AuthorizationTokenManager.html","link":"MangoPay/Libraries/AuthorizationTokenManager.html#method___construct","name":"MangoPay\\Libraries\\AuthorizationTokenManager::__construct","doc":"<p>Constructor</p>"},
        {"type":"Method","fromName":"MangoPay\\Libraries\\AuthorizationTokenManager","fromLink":"MangoPay/Libraries/AuthorizationTokenManager.html","link":"MangoPay/Libraries/AuthorizationTokenManager.html#method_GetToken","name":"MangoPay\\Libraries\\AuthorizationTokenManager::GetToken","doc":"<p>Gets the current authorization token.</p>"},
        {"type":"Method","fromName":"MangoPay\\Libraries\\AuthorizationTokenManager","fromLink":"MangoPay/Libraries/AuthorizationTokenManager.html","link":"MangoPay/Libraries/AuthorizationTokenManager.html#method_StoreToken","name":"MangoPay\\Libraries\\AuthorizationTokenManager::StoreToken","doc":"<p>Stores authorization token passed as an argument in the underlying\nstorage strategy implementation.</p>"},
        {"type":"Method","fromName":"MangoPay\\Libraries\\AuthorizationTokenManager","fromLink":"MangoPay/Libraries/AuthorizationTokenManager.html","link":"MangoPay/Libraries/AuthorizationTokenManager.html#method_RegisterCustomStorageStrategy","name":"MangoPay\\Libraries\\AuthorizationTokenManager::RegisterCustomStorageStrategy","doc":"<p>Registers custom storage strategy implementation.</p>"},
            
                                                {"type":"Class","fromName":"MangoPay\\Libraries","fromLink":"MangoPay/Libraries.html","link":"MangoPay/Libraries/Configuration.html","name":"MangoPay\\Libraries\\Configuration","doc":"<p>Configuration settings</p>"},
                
                                                {"type":"Class","fromName":"MangoPay\\Libraries","fromLink":"MangoPay/Libraries.html","link":"MangoPay/Libraries/DefaultStorageStrategy.html","name":"MangoPay\\Libraries\\DefaultStorageStrategy","doc":"<p>Default storage strategy implementation.</p>"},
                                {"type":"Method","fromName":"MangoPay\\Libraries\\DefaultStorageStrategy","fromLink":"MangoPay/Libraries/DefaultStorageStrategy.html","link":"MangoPay/Libraries/DefaultStorageStrategy.html#method___construct","name":"MangoPay\\Libraries\\DefaultStorageStrategy::__construct","doc":null},
        {"type":"Method","fromName":"MangoPay\\Libraries\\DefaultStorageStrategy","fromLink":"MangoPay/Libraries/DefaultStorageStrategy.html","link":"MangoPay/Libraries/DefaultStorageStrategy.html#method_Get","name":"MangoPay\\Libraries\\DefaultStorageStrategy::Get","doc":"<p>Gets the current authorization token.</p>"},
        {"type":"Method","fromName":"MangoPay\\Libraries\\DefaultStorageStrategy","fromLink":"MangoPay/Libraries/DefaultStorageStrategy.html","link":"MangoPay/Libraries/DefaultStorageStrategy.html#method_Store","name":"MangoPay\\Libraries\\DefaultStorageStrategy::Store","doc":"<p>Stores authorization token passed as an argument.</p>"},
            
                                                {"type":"Class","fromName":"MangoPay\\Libraries","fromLink":"MangoPay/Libraries.html","link":"MangoPay/Libraries/Document.html","name":"MangoPay\\Libraries\\Document","doc":"<p>Abstract class for all documents</p>"},
                                {"type":"Method","fromName":"MangoPay\\Libraries\\Document","fromLink":"MangoPay/Libraries/Document.html","link":"MangoPay/Libraries/Document.html#method_GetReadOnlyProperties","name":"MangoPay\\Libraries\\Document::GetReadOnlyProperties","doc":"<p>Get array with read-only properties</p>"},
            
                                                {"type":"Class","fromName":"MangoPay\\Libraries","fromLink":"MangoPay/Libraries.html","link":"MangoPay/Libraries/Dto.html","name":"MangoPay\\Libraries\\Dto","doc":"<p>Abstract class for all DTOs (entities and their composites)</p>"},
                                {"type":"Method","fromName":"MangoPay\\Libraries\\Dto","fromLink":"MangoPay/Libraries/Dto.html","link":"MangoPay/Libraries/Dto.html#method_GetSubObjects","name":"MangoPay\\Libraries\\Dto::GetSubObjects","doc":"<p>Get array with mapping which property is object and what type of object.</p>"},
        {"type":"Method","fromName":"MangoPay\\Libraries\\Dto","fromLink":"MangoPay/Libraries/Dto.html","link":"MangoPay/Libraries/Dto.html#method_GetDependsObjects","name":"MangoPay\\Libraries\\Dto::GetDependsObjects","doc":"<p>Get array with mapping which property depends on other property\nTo be overridden in child class if has any dependent objects.</p>"},
        {"type":"Method","fromName":"MangoPay\\Libraries\\Dto","fromLink":"MangoPay/Libraries/Dto.html","link":"MangoPay/Libraries/Dto.html#method_GetReadOnlyProperties","name":"MangoPay\\Libraries\\Dto::GetReadOnlyProperties","doc":"<p>Get array with read only properties - not used in response\nTo be overridden in child class if has any read-only properties.</p>"},
            
                                                {"type":"Class","fromName":"MangoPay\\Libraries","fromLink":"MangoPay/Libraries.html","link":"MangoPay/Libraries/EntityBase.html","name":"MangoPay\\Libraries\\EntityBase","doc":"<p>Abstract class with common properties</p>"},
                                {"type":"Method","fromName":"MangoPay\\Libraries\\EntityBase","fromLink":"MangoPay/Libraries/EntityBase.html","link":"MangoPay/Libraries/EntityBase.html#method___construct","name":"MangoPay\\Libraries\\EntityBase::__construct","doc":"<p>Construct</p>"},
        {"type":"Method","fromName":"MangoPay\\Libraries\\EntityBase","fromLink":"MangoPay/Libraries/EntityBase.html","link":"MangoPay/Libraries/EntityBase.html#method_GetReadOnlyProperties","name":"MangoPay\\Libraries\\EntityBase::GetReadOnlyProperties","doc":"<p>Get array with read-only properties</p>"},
            
                                                {"type":"Class","fromName":"MangoPay\\Libraries","fromLink":"MangoPay/Libraries.html","link":"MangoPay/Libraries/Error.html","name":"MangoPay\\Libraries\\Error","doc":"<p>Class represents error object</p>"},
                                {"type":"Method","fromName":"MangoPay\\Libraries\\Error","fromLink":"MangoPay/Libraries/Error.html","link":"MangoPay/Libraries/Error.html#method___toString","name":"MangoPay\\Libraries\\Error::__toString","doc":"<p>Return the stdClass error serialized as string</p>"},
            
                                                {"type":"Class","fromName":"MangoPay\\Libraries","fromLink":"MangoPay/Libraries.html","link":"MangoPay/Libraries/Exception.html","name":"MangoPay\\Libraries\\Exception","doc":null},
                
                                                {"type":"Class","fromName":"MangoPay\\Libraries","fromLink":"MangoPay/Libraries.html","link":"MangoPay/Libraries/HttpBase.html","name":"MangoPay\\Libraries\\HttpBase","doc":"<p>Base class for Http Client</p>"},
                                {"type":"Method","fromName":"MangoPay\\Libraries\\HttpBase","fromLink":"MangoPay/Libraries/HttpBase.html","link":"MangoPay/Libraries/HttpBase.html#method___construct","name":"MangoPay\\Libraries\\HttpBase::__construct","doc":"<p>Constructor</p>"},
        {"type":"Method","fromName":"MangoPay\\Libraries\\HttpBase","fromLink":"MangoPay/Libraries/HttpBase.html","link":"MangoPay/Libraries/HttpBase.html#method_Request","name":"MangoPay\\Libraries\\HttpBase::Request","doc":""},
            
                                                {"type":"Class","fromName":"MangoPay\\Libraries","fromLink":"MangoPay/Libraries.html","link":"MangoPay/Libraries/HttpCurl.html","name":"MangoPay\\Libraries\\HttpCurl","doc":"<p>Curl Http Client</p>"},
                                {"type":"Method","fromName":"MangoPay\\Libraries\\HttpCurl","fromLink":"MangoPay/Libraries/HttpCurl.html","link":"MangoPay/Libraries/HttpCurl.html#method_Request","name":"MangoPay\\Libraries\\HttpCurl::Request","doc":""},
            
                                                {"type":"Class","fromName":"MangoPay\\Libraries","fromLink":"MangoPay/Libraries.html","link":"MangoPay/Libraries/HttpResponse.html","name":"MangoPay\\Libraries\\HttpResponse","doc":"<p>Base class for Http Client</p>"},
                
                                                {"type":"Class","fromName":"MangoPay\\Libraries","fromLink":"MangoPay/Libraries.html","link":"MangoPay/Libraries/IStorageStrategy.html","name":"MangoPay\\Libraries\\IStorageStrategy","doc":"<p>Storage strategy interface.</p>"},
                                {"type":"Method","fromName":"MangoPay\\Libraries\\IStorageStrategy","fromLink":"MangoPay/Libraries/IStorageStrategy.html","link":"MangoPay/Libraries/IStorageStrategy.html#method_Get","name":"MangoPay\\Libraries\\IStorageStrategy::Get","doc":"<p>Gets the current authorization token.</p>"},
        {"type":"Method","fromName":"MangoPay\\Libraries\\IStorageStrategy","fromLink":"MangoPay/Libraries/IStorageStrategy.html","link":"MangoPay/Libraries/IStorageStrategy.html#method_Store","name":"MangoPay\\Libraries\\IStorageStrategy::Store","doc":"<p>Stores authorization token passed as an argument.</p>"},
            
                                                {"type":"Class","fromName":"MangoPay\\Libraries","fromLink":"MangoPay/Libraries.html","link":"MangoPay/Libraries/Logs.html","name":"MangoPay\\Libraries\\Logs","doc":"<p>Class to manage debug logs in MangoPay SDK</p>"},
                                {"type":"Method","fromName":"MangoPay\\Libraries\\Logs","fromLink":"MangoPay/Libraries/Logs.html","link":"MangoPay/Libraries/Logs.html#method_Debug","name":"MangoPay\\Libraries\\Logs::Debug","doc":null},
            
                                                {"type":"Class","fromName":"MangoPay\\Libraries","fromLink":"MangoPay/Libraries.html","link":"MangoPay/Libraries/OAuthToken.html","name":"MangoPay\\Libraries\\OAuthToken","doc":"<p>OAuthToken</p>"},
                                {"type":"Method","fromName":"MangoPay\\Libraries\\OAuthToken","fromLink":"MangoPay/Libraries/OAuthToken.html","link":"MangoPay/Libraries/OAuthToken.html#method___construct","name":"MangoPay\\Libraries\\OAuthToken::__construct","doc":"<p>Constructor</p>"},
        {"type":"Method","fromName":"MangoPay\\Libraries\\OAuthToken","fromLink":"MangoPay/Libraries/OAuthToken.html","link":"MangoPay/Libraries/OAuthToken.html#method_IsExpired","name":"MangoPay\\Libraries\\OAuthToken::IsExpired","doc":"<p>Check that current tokens are expire and return true if yes</p>"},
        {"type":"Method","fromName":"MangoPay\\Libraries\\OAuthToken","fromLink":"MangoPay/Libraries/OAuthToken.html","link":"MangoPay/Libraries/OAuthToken.html#method_GetAutenticationKey","name":"MangoPay\\Libraries\\OAuthToken::GetAutenticationKey","doc":null},
            
                                                {"type":"Class","fromName":"MangoPay\\Libraries","fromLink":"MangoPay/Libraries.html","link":"MangoPay/Libraries/RequestType.html","name":"MangoPay\\Libraries\\RequestType","doc":"<p>Request type enum</p>"},
                
                                                {"type":"Class","fromName":"MangoPay\\Libraries","fromLink":"MangoPay/Libraries.html","link":"MangoPay/Libraries/ResponseException.html","name":"MangoPay\\Libraries\\ResponseException","doc":"<p>Response exception class</p>"},
                                {"type":"Method","fromName":"MangoPay\\Libraries\\ResponseException","fromLink":"MangoPay/Libraries/ResponseException.html","link":"MangoPay/Libraries/ResponseException.html#method___construct","name":"MangoPay\\Libraries\\ResponseException::__construct","doc":"<p>Construct</p>"},
        {"type":"Method","fromName":"MangoPay\\Libraries\\ResponseException","fromLink":"MangoPay/Libraries/ResponseException.html","link":"MangoPay/Libraries/ResponseException.html#method_GetErrorDetails","name":"MangoPay\\Libraries\\ResponseException::GetErrorDetails","doc":"<p>Get Error object returned by REST API</p>"},
            
                                                {"type":"Class","fromName":"MangoPay\\Libraries","fromLink":"MangoPay/Libraries.html","link":"MangoPay/Libraries/RestTool.html","name":"MangoPay\\Libraries\\RestTool","doc":"<p>Class to prepare HTTP request, call the request and decode the response</p>"},
                                {"type":"Method","fromName":"MangoPay\\Libraries\\RestTool","fromLink":"MangoPay/Libraries/RestTool.html","link":"MangoPay/Libraries/RestTool.html#method_GetRequestHeaders","name":"MangoPay\\Libraries\\RestTool::GetRequestHeaders","doc":"<p>Return HTTP header to send with request</p>"},
        {"type":"Method","fromName":"MangoPay\\Libraries\\RestTool","fromLink":"MangoPay/Libraries/RestTool.html","link":"MangoPay/Libraries/RestTool.html#method_GetRequestType","name":"MangoPay\\Libraries\\RestTool::GetRequestType","doc":"<p>Return HTTP request method</p>"},
        {"type":"Method","fromName":"MangoPay\\Libraries\\RestTool","fromLink":"MangoPay/Libraries/RestTool.html","link":"MangoPay/Libraries/RestTool.html#method_GetRequestData","name":"MangoPay\\Libraries\\RestTool::GetRequestData","doc":"<p>Return HTTP request data</p>"},
        {"type":"Method","fromName":"MangoPay\\Libraries\\RestTool","fromLink":"MangoPay/Libraries/RestTool.html","link":"MangoPay/Libraries/RestTool.html#method_GetRequestUrl","name":"MangoPay\\Libraries\\RestTool::GetRequestUrl","doc":"<p>Return HTTP request url</p>"},
        {"type":"Method","fromName":"MangoPay\\Libraries\\RestTool","fromLink":"MangoPay/Libraries/RestTool.html","link":"MangoPay/Libraries/RestTool.html#method___construct","name":"MangoPay\\Libraries\\RestTool::__construct","doc":"<p>Constructor</p>"},
        {"type":"Method","fromName":"MangoPay\\Libraries\\RestTool","fromLink":"MangoPay/Libraries/RestTool.html","link":"MangoPay/Libraries/RestTool.html#method_AddRequestHttpHeader","name":"MangoPay\\Libraries\\RestTool::AddRequestHttpHeader","doc":null},
        {"type":"Method","fromName":"MangoPay\\Libraries\\RestTool","fromLink":"MangoPay/Libraries/RestTool.html","link":"MangoPay/Libraries/RestTool.html#method_Request","name":"MangoPay\\Libraries\\RestTool::Request","doc":"<p>Call request to MangoPay API</p>"},
            
                                                {"type":"Class","fromName":"MangoPay\\Libraries","fromLink":"MangoPay/Libraries.html","link":"MangoPay/Libraries/Upload.html","name":"MangoPay\\Libraries\\Upload","doc":"<p>Abstract class for all documents</p>"},
                
                                                {"type":"Class","fromName":"MangoPay\\Libraries","fromLink":"MangoPay/Libraries.html","link":"MangoPay/Libraries/UrlTool.html","name":"MangoPay\\Libraries\\UrlTool","doc":null},
                                {"type":"Method","fromName":"MangoPay\\Libraries\\UrlTool","fromLink":"MangoPay/Libraries/UrlTool.html","link":"MangoPay/Libraries/UrlTool.html#method___construct","name":"MangoPay\\Libraries\\UrlTool::__construct","doc":"<p>Constructor</p>"},
        {"type":"Method","fromName":"MangoPay\\Libraries\\UrlTool","fromLink":"MangoPay/Libraries/UrlTool.html","link":"MangoPay/Libraries/UrlTool.html#method_GetRestUrl","name":"MangoPay\\Libraries\\UrlTool::GetRestUrl","doc":null},
        {"type":"Method","fromName":"MangoPay\\Libraries\\UrlTool","fromLink":"MangoPay/Libraries/UrlTool.html","link":"MangoPay/Libraries/UrlTool.html#method_GetFullUrl","name":"MangoPay\\Libraries\\UrlTool::GetFullUrl","doc":null},
            
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/Mandate.html","name":"MangoPay\\Mandate","doc":"<p>Direct debit mandate entity.</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/MandateStatus.html","name":"MangoPay\\MandateStatus","doc":null},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/MangoPayApi.html","name":"MangoPay\\MangoPayApi","doc":"<p>MangoPay API main entry point.</p>"},
                                {"type":"Method","fromName":"MangoPay\\MangoPayApi","fromLink":"MangoPay/MangoPayApi.html","link":"MangoPay/MangoPayApi.html#method___construct","name":"MangoPay\\MangoPayApi::__construct","doc":"<p>Constructor</p>"},
        {"type":"Method","fromName":"MangoPay\\MangoPayApi","fromLink":"MangoPay/MangoPayApi.html","link":"MangoPay/MangoPayApi.html#method_setLogger","name":"MangoPay\\MangoPayApi::setLogger","doc":""},
        {"type":"Method","fromName":"MangoPay\\MangoPayApi","fromLink":"MangoPay/MangoPayApi.html","link":"MangoPay/MangoPayApi.html#method_getLogger","name":"MangoPay\\MangoPayApi::getLogger","doc":""},
        {"type":"Method","fromName":"MangoPay\\MangoPayApi","fromLink":"MangoPay/MangoPayApi.html","link":"MangoPay/MangoPayApi.html#method_getConfig","name":"MangoPay\\MangoPayApi::getConfig","doc":""},
        {"type":"Method","fromName":"MangoPay\\MangoPayApi","fromLink":"MangoPay/MangoPayApi.html","link":"MangoPay/MangoPayApi.html#method_setConfig","name":"MangoPay\\MangoPayApi::setConfig","doc":""},
        {"type":"Method","fromName":"MangoPay\\MangoPayApi","fromLink":"MangoPay/MangoPayApi.html","link":"MangoPay/MangoPayApi.html#method_setHttpClient","name":"MangoPay\\MangoPayApi::setHttpClient","doc":""},
        {"type":"Method","fromName":"MangoPay\\MangoPayApi","fromLink":"MangoPay/MangoPayApi.html","link":"MangoPay/MangoPayApi.html#method_getHttpClient","name":"MangoPay\\MangoPayApi::getHttpClient","doc":""},
            
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/Money.html","name":"MangoPay\\Money","doc":"<p>Class represents money value with currency</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/NaturalUserCapacity.html","name":"MangoPay\\NaturalUserCapacity","doc":"<p>Holds enumeration of natural users' capacities within MangoPay.</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/Pagination.html","name":"MangoPay\\Pagination","doc":"<p>Class represents pagination information</p>"},
                                {"type":"Method","fromName":"MangoPay\\Pagination","fromLink":"MangoPay/Pagination.html","link":"MangoPay/Pagination.html#method___construct","name":"MangoPay\\Pagination::__construct","doc":"<p>Construct</p>"},
            
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/PayIn.html","name":"MangoPay\\PayIn","doc":"<p>Pay-in entity</p>"},
                                {"type":"Method","fromName":"MangoPay\\PayIn","fromLink":"MangoPay/PayIn.html","link":"MangoPay/PayIn.html#method_GetDependsObjects","name":"MangoPay\\PayIn::GetDependsObjects","doc":"<p>Get array with mapping which property depends on other property</p>"},
        {"type":"Method","fromName":"MangoPay\\PayIn","fromLink":"MangoPay/PayIn.html","link":"MangoPay/PayIn.html#method_GetReadOnlyProperties","name":"MangoPay\\PayIn::GetReadOnlyProperties","doc":"<p>Get array with read-only properties</p>"},
            
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/PayInCardTemplateURLOptions.html","name":"MangoPay\\PayInCardTemplateURLOptions","doc":"<p>Class represents template URL options</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/PayInExecutionDetails.html","name":"MangoPay\\PayInExecutionDetails","doc":"<p>Marker interface for classes with details of execution option in PayIn entity</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/PayInExecutionDetailsDirect.html","name":"MangoPay\\PayInExecutionDetailsDirect","doc":"<p>Class represents Web type for 'DIRECT' execution option in PayIn entity</p>"},
                                {"type":"Method","fromName":"MangoPay\\PayInExecutionDetailsDirect","fromLink":"MangoPay/PayInExecutionDetailsDirect.html","link":"MangoPay/PayInExecutionDetailsDirect.html#method_GetSubObjects","name":"MangoPay\\PayInExecutionDetailsDirect::GetSubObjects","doc":"<p>Get array with mapping which property is object and what type of object.</p>"},
            
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/PayInExecutionDetailsExternalInstruction.html","name":"MangoPay\\PayInExecutionDetailsExternalInstruction","doc":"<p>Class represents Web type for 'EXTERNAL_INSTRUCTION' execution option in PayIn entity</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/PayInExecutionDetailsWeb.html","name":"MangoPay\\PayInExecutionDetailsWeb","doc":"<p>Class represents Web type for 'WEB' execution option in PayIn entity</p>"},
                                {"type":"Method","fromName":"MangoPay\\PayInExecutionDetailsWeb","fromLink":"MangoPay/PayInExecutionDetailsWeb.html","link":"MangoPay/PayInExecutionDetailsWeb.html#method_GetReadOnlyProperties","name":"MangoPay\\PayInExecutionDetailsWeb::GetReadOnlyProperties","doc":"<p>Get array with read-only properties</p>"},
        {"type":"Method","fromName":"MangoPay\\PayInExecutionDetailsWeb","fromLink":"MangoPay/PayInExecutionDetailsWeb.html","link":"MangoPay/PayInExecutionDetailsWeb.html#method_GetSubObjects","name":"MangoPay\\PayInExecutionDetailsWeb::GetSubObjects","doc":"<p>Get array with mapping which property is object and what type of object</p>"},
            
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/PayInExecutionType.html","name":"MangoPay\\PayInExecutionType","doc":"<p>PayIn execution types</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/PayInPaymentDetails.html","name":"MangoPay\\PayInPaymentDetails","doc":"<p>Marker interface for classes with details of means of payment in PayIn entity</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/PayInPaymentDetailsApplePay.html","name":"MangoPay\\PayInPaymentDetailsApplePay","doc":null},
                                {"type":"Method","fromName":"MangoPay\\PayInPaymentDetailsApplePay","fromLink":"MangoPay/PayInPaymentDetailsApplePay.html","link":"MangoPay/PayInPaymentDetailsApplePay.html#method_GetSubObjects","name":"MangoPay\\PayInPaymentDetailsApplePay::GetSubObjects","doc":"<p>Get array with mapping which property is object and what type of object.</p>"},
            
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/PayInPaymentDetailsBankWire.html","name":"MangoPay\\PayInPaymentDetailsBankWire","doc":"<p>Class represents BankWire type for mean of payment in PayIn entity</p>"},
                                {"type":"Method","fromName":"MangoPay\\PayInPaymentDetailsBankWire","fromLink":"MangoPay/PayInPaymentDetailsBankWire.html","link":"MangoPay/PayInPaymentDetailsBankWire.html#method_GetSubObjects","name":"MangoPay\\PayInPaymentDetailsBankWire::GetSubObjects","doc":"<p>Get array with mapping which property is object and what type of object</p>"},
            
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/PayInPaymentDetailsCard.html","name":"MangoPay\\PayInPaymentDetailsCard","doc":"<p>Class represents Card type for mean of payment in PayIn entity</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/PayInPaymentDetailsDirectDebit.html","name":"MangoPay\\PayInPaymentDetailsDirectDebit","doc":"<p>Class represents direct debit type for mean of payment in PayIn entity</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/PayInPaymentDetailsDirectDebitDirect.html","name":"MangoPay\\PayInPaymentDetailsDirectDebitDirect","doc":"<p>Class represents direct debit type for mean of payment in PayIn entity</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/PayInPaymentDetailsGooglePay.html","name":"MangoPay\\PayInPaymentDetailsGooglePay","doc":null},
                                {"type":"Method","fromName":"MangoPay\\PayInPaymentDetailsGooglePay","fromLink":"MangoPay/PayInPaymentDetailsGooglePay.html","link":"MangoPay/PayInPaymentDetailsGooglePay.html#method_GetSubObjects","name":"MangoPay\\PayInPaymentDetailsGooglePay::GetSubObjects","doc":"<p>Get array with mapping which property is object and what type of object.</p>"},
            
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/PayInPaymentDetailsPaypal.html","name":"MangoPay\\PayInPaymentDetailsPaypal","doc":"<p>Class represents PayPal type for mean of payment in PayIn entity</p>"},
                                {"type":"Method","fromName":"MangoPay\\PayInPaymentDetailsPaypal","fromLink":"MangoPay/PayInPaymentDetailsPaypal.html","link":"MangoPay/PayInPaymentDetailsPaypal.html#method_GetSubObjects","name":"MangoPay\\PayInPaymentDetailsPaypal::GetSubObjects","doc":"<p>Get array with mapping which property is object and what type of object.</p>"},
            
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/PayInPaymentDetailsPreAuthorized.html","name":"MangoPay\\PayInPaymentDetailsPreAuthorized","doc":"<p>Class represents Web type for execution option in PayIn entity</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/PayInPaymentType.html","name":"MangoPay\\PayInPaymentType","doc":"<p>PayIn payment types</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/PayInRecurring.html","name":"MangoPay\\PayInRecurring","doc":null},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/PayInRecurringRegistration.html","name":"MangoPay\\PayInRecurringRegistration","doc":null},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/PayInRecurringRegistrationGet.html","name":"MangoPay\\PayInRecurringRegistrationGet","doc":null},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/PayInRecurringRegistrationRequestResponse.html","name":"MangoPay\\PayInRecurringRegistrationRequestResponse","doc":null},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/PayInRecurringRegistrationUpdate.html","name":"MangoPay\\PayInRecurringRegistrationUpdate","doc":null},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/PayInStatus.html","name":"MangoPay\\PayInStatus","doc":"<p>PayIn statuses</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/PayInTemplateURLOptions.html","name":"MangoPay\\PayInTemplateURLOptions","doc":"<p>Class represents template URL options</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/PayInWebExtendedView.html","name":"MangoPay\\PayInWebExtendedView","doc":"<p>Pay-in entity</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/PayOut.html","name":"MangoPay\\PayOut","doc":"<p>PayOut entity</p>"},
                                {"type":"Method","fromName":"MangoPay\\PayOut","fromLink":"MangoPay/PayOut.html","link":"MangoPay/PayOut.html#method_GetDependsObjects","name":"MangoPay\\PayOut::GetDependsObjects","doc":"<p>Get array with mapping which property depends on other property</p>"},
        {"type":"Method","fromName":"MangoPay\\PayOut","fromLink":"MangoPay/PayOut.html","link":"MangoPay/PayOut.html#method_GetReadOnlyProperties","name":"MangoPay\\PayOut::GetReadOnlyProperties","doc":"<p>Get array with read-only properties</p>"},
            
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/PayOutPaymentDetails.html","name":"MangoPay\\PayOutPaymentDetails","doc":"<p>Marker interface for classes with details of means of payment in PayOut entity</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/PayOutPaymentDetailsBankWire.html","name":"MangoPay\\PayOutPaymentDetailsBankWire","doc":"<p>Class represents BankWire type for mean of payment in PayOut entity</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/PayOutPaymentType.html","name":"MangoPay\\PayOutPaymentType","doc":"<p>PayOut payment types</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/PayOutStatus.html","name":"MangoPay\\PayOutStatus","doc":"<p>PayOut statuses</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/PaymentData.html","name":"MangoPay\\PaymentData","doc":"<p>Information regarding the Apple Pay payment</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/PersonType.html","name":"MangoPay\\PersonType","doc":"<p>Person type for users</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/PlatformCategorization.html","name":"MangoPay\\PlatformCategorization","doc":"<p>Class holds details about the client platform categorization</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/RateLimit.html","name":"MangoPay\\RateLimit","doc":null},
                                {"type":"Method","fromName":"MangoPay\\RateLimit","fromLink":"MangoPay/RateLimit.html","link":"MangoPay/RateLimit.html#method___construct","name":"MangoPay\\RateLimit::__construct","doc":"<p>RateLimit constructor.</p>"},
            
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/RecurringPayInCIT.html","name":"MangoPay\\RecurringPayInCIT","doc":null},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/RecurringPayInCurrentState.html","name":"MangoPay\\RecurringPayInCurrentState","doc":null},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/RecurringPayInMIT.html","name":"MangoPay\\RecurringPayInMIT","doc":null},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/Refund.html","name":"MangoPay\\Refund","doc":"<p>Refund entity</p>"},
                                {"type":"Method","fromName":"MangoPay\\Refund","fromLink":"MangoPay/Refund.html","link":"MangoPay/Refund.html#method_GetSubObjects","name":"MangoPay\\Refund::GetSubObjects","doc":"<p>Get array with mapping which property is object and what type of object</p>"},
            
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/RefundReasonDetails.html","name":"MangoPay\\RefundReasonDetails","doc":"<p>Class represents RefundReason details in Refund entity</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/RefundStatus.html","name":"MangoPay\\RefundStatus","doc":null},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/ReportRequest.html","name":"MangoPay\\ReportRequest","doc":"<p>Report request entity</p>"},
                                {"type":"Method","fromName":"MangoPay\\ReportRequest","fromLink":"MangoPay/ReportRequest.html","link":"MangoPay/ReportRequest.html#method_GetReadOnlyProperties","name":"MangoPay\\ReportRequest::GetReadOnlyProperties","doc":"<p>Get array with read-only properties</p>"},
            
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/ReportStatus.html","name":"MangoPay\\ReportStatus","doc":null},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/ReportType.html","name":"MangoPay\\ReportType","doc":null},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/Repudiation.html","name":"MangoPay\\Repudiation","doc":"<p>Repudiation entity</p>"},
                                {"type":"Method","fromName":"MangoPay\\Repudiation","fromLink":"MangoPay/Repudiation.html","link":"MangoPay/Repudiation.html#method_GetSubObjects","name":"MangoPay\\Repudiation::GetSubObjects","doc":"<p>Get array with mapping which property is object and what type of object</p>"},
            
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/Response.html","name":"MangoPay\\Response","doc":"<p>Response entity</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/ScopeBlocked.html","name":"MangoPay\\ScopeBlocked","doc":null},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/Sector.html","name":"MangoPay\\Sector","doc":"<p>Business sector</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/SecurityInfo.html","name":"MangoPay\\SecurityInfo","doc":"<p>Security &amp; validation information</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/SettlementTransfer.html","name":"MangoPay\\SettlementTransfer","doc":"<p>Settlement transfer entity.</p>"},
                                {"type":"Method","fromName":"MangoPay\\SettlementTransfer","fromLink":"MangoPay/SettlementTransfer.html","link":"MangoPay/SettlementTransfer.html#method_GetSubObjects","name":"MangoPay\\SettlementTransfer::GetSubObjects","doc":"<p>Get array with mapping which property is object and what type of object</p>"},
            
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/Shipping.html","name":"MangoPay\\Shipping","doc":null},
                                {"type":"Method","fromName":"MangoPay\\Shipping","fromLink":"MangoPay/Shipping.html","link":"MangoPay/Shipping.html#method_GetSubObjects","name":"MangoPay\\Shipping::GetSubObjects","doc":"<p>Get array with mapping which property is object and what type of object</p>"},
            
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/ShippingAddress.html","name":"MangoPay\\ShippingAddress","doc":"<p>Class represents the shipping address of a PayPal PayIn.</p>"},
                                {"type":"Method","fromName":"MangoPay\\ShippingAddress","fromLink":"MangoPay/ShippingAddress.html","link":"MangoPay/ShippingAddress.html#method_GetSubObjects","name":"MangoPay\\ShippingAddress::GetSubObjects","doc":"<p>Get array with mapping which property is object and what type of object.</p>"},
            
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/SortDirection.html","name":"MangoPay\\SortDirection","doc":null},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/Sorting.html","name":"MangoPay\\Sorting","doc":"<p>Base sorting object</p>"},
                                {"type":"Method","fromName":"MangoPay\\Sorting","fromLink":"MangoPay/Sorting.html","link":"MangoPay/Sorting.html#method_AddField","name":"MangoPay\\Sorting::AddField","doc":"<p>Add filed to sort</p>"},
        {"type":"Method","fromName":"MangoPay\\Sorting","fromLink":"MangoPay/Sorting.html","link":"MangoPay/Sorting.html#method_AddFiled","name":"MangoPay\\Sorting::AddFiled","doc":""},
        {"type":"Method","fromName":"MangoPay\\Sorting","fromLink":"MangoPay/Sorting.html","link":"MangoPay/Sorting.html#method_GetSortParameter","name":"MangoPay\\Sorting::GetSortParameter","doc":"<p>Get sort parametrs to URL</p>"},
            
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/Transaction.html","name":"MangoPay\\Transaction","doc":"<p>Transaction entity.</p>"},
                                {"type":"Method","fromName":"MangoPay\\Transaction","fromLink":"MangoPay/Transaction.html","link":"MangoPay/Transaction.html#method_GetSubObjects","name":"MangoPay\\Transaction::GetSubObjects","doc":"<p>Get array with mapping which property is object and what type of object</p>"},
        {"type":"Method","fromName":"MangoPay\\Transaction","fromLink":"MangoPay/Transaction.html","link":"MangoPay/Transaction.html#method_GetReadOnlyProperties","name":"MangoPay\\Transaction::GetReadOnlyProperties","doc":"<p>Get array with read-only properties</p>"},
            
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/TransactionNature.html","name":"MangoPay\\TransactionNature","doc":null},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/TransactionStatus.html","name":"MangoPay\\TransactionStatus","doc":null},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/TransactionType.html","name":"MangoPay\\TransactionType","doc":null},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/Transfer.html","name":"MangoPay\\Transfer","doc":"<p>Transfer entity</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/Ubo.html","name":"MangoPay\\Ubo","doc":null},
                                {"type":"Method","fromName":"MangoPay\\Ubo","fromLink":"MangoPay/Ubo.html","link":"MangoPay/Ubo.html#method_GetSubObjects","name":"MangoPay\\Ubo::GetSubObjects","doc":"<p>Get array with mapping which property is object and what type of object</p>"},
            
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/UboDeclaration.html","name":"MangoPay\\UboDeclaration","doc":"<p>UBO Declaration entity.</p>"},
                                {"type":"Method","fromName":"MangoPay\\UboDeclaration","fromLink":"MangoPay/UboDeclaration.html","link":"MangoPay/UboDeclaration.html#method_GetReadOnlyProperties","name":"MangoPay\\UboDeclaration::GetReadOnlyProperties","doc":"<p>Get array with read-only properties</p>"},
        {"type":"Method","fromName":"MangoPay\\UboDeclaration","fromLink":"MangoPay/UboDeclaration.html","link":"MangoPay/UboDeclaration.html#method_GetSubObjects","name":"MangoPay\\UboDeclaration::GetSubObjects","doc":"<p>Get array with mapping which property is object and what type of object.</p>"},
            
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/UboDeclarationRefusedOrIncompleteReasonType.html","name":"MangoPay\\UboDeclarationRefusedOrIncompleteReasonType","doc":"<p>Holds enumeration of possible reasons why a UBO declaration is refused or incomplete.</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/UboDeclarationRefusedReasonType.html","name":"MangoPay\\UboDeclarationRefusedReasonType","doc":""},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/UboDeclarationStatus.html","name":"MangoPay\\UboDeclarationStatus","doc":"<p>Holds enumeration of possible UBO declaration status values.</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/UboRefusedReasonType.html","name":"MangoPay\\UboRefusedReasonType","doc":"<p>Holds enumeration of reasons why declaration of a user as UBO was refused</p>"},
                
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/User.html","name":"MangoPay\\User","doc":"<p>User entity</p>"},
                                {"type":"Method","fromName":"MangoPay\\User","fromLink":"MangoPay/User.html","link":"MangoPay/User.html#method_SetPersonType","name":"MangoPay\\User::SetPersonType","doc":"<p>Construct</p>"},
        {"type":"Method","fromName":"MangoPay\\User","fromLink":"MangoPay/User.html","link":"MangoPay/User.html#method_GetReadOnlyProperties","name":"MangoPay\\User::GetReadOnlyProperties","doc":"<p>Get array with read-only properties</p>"},
            
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/UserBlockStatus.html","name":"MangoPay\\UserBlockStatus","doc":null},
                                {"type":"Method","fromName":"MangoPay\\UserBlockStatus","fromLink":"MangoPay/UserBlockStatus.html","link":"MangoPay/UserBlockStatus.html#method_GetSubObjects","name":"MangoPay\\UserBlockStatus::GetSubObjects","doc":"<p>Get array with mapping which property is object and what type of object</p>"},
            
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/UserLegal.html","name":"MangoPay\\UserLegal","doc":"<p>UserLegal entity</p>"},
                                {"type":"Method","fromName":"MangoPay\\UserLegal","fromLink":"MangoPay/UserLegal.html","link":"MangoPay/UserLegal.html#method___construct","name":"MangoPay\\UserLegal::__construct","doc":"<p>Construct</p>"},
        {"type":"Method","fromName":"MangoPay\\UserLegal","fromLink":"MangoPay/UserLegal.html","link":"MangoPay/UserLegal.html#method_GetSubObjects","name":"MangoPay\\UserLegal::GetSubObjects","doc":"<p>Get array with mapping which property is object and what type of object</p>"},
        {"type":"Method","fromName":"MangoPay\\UserLegal","fromLink":"MangoPay/UserLegal.html","link":"MangoPay/UserLegal.html#method_GetReadOnlyProperties","name":"MangoPay\\UserLegal::GetReadOnlyProperties","doc":"<p>Get array with read-only properties</p>"},
            
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/UserNatural.html","name":"MangoPay\\UserNatural","doc":"<p>UserNatural entity</p>"},
                                {"type":"Method","fromName":"MangoPay\\UserNatural","fromLink":"MangoPay/UserNatural.html","link":"MangoPay/UserNatural.html#method___construct","name":"MangoPay\\UserNatural::__construct","doc":"<p>Construct</p>"},
        {"type":"Method","fromName":"MangoPay\\UserNatural","fromLink":"MangoPay/UserNatural.html","link":"MangoPay/UserNatural.html#method_GetSubObjects","name":"MangoPay\\UserNatural::GetSubObjects","doc":"<p>Get array with mapping which property is object and what type of object</p>"},
        {"type":"Method","fromName":"MangoPay\\UserNatural","fromLink":"MangoPay/UserNatural.html","link":"MangoPay/UserNatural.html#method_GetReadOnlyProperties","name":"MangoPay\\UserNatural::GetReadOnlyProperties","doc":"<p>Get array with read-only properties</p>"},
            
                                                {"type":"Class","fromName":"MangoPay","fromLink":"MangoPay.html","link":"MangoPay/Wallet.html","name":"MangoPay\\Wallet","doc":"<p>Wallet entity</p>"},
                                {"type":"Method","fromName":"MangoPay\\Wallet","fromLink":"MangoPay/Wallet.html","link":"MangoPay/Wallet.html#method_GetSubObjects","name":"MangoPay\\Wallet::GetSubObjects","doc":"<p>Get array with mapping which property is object and what type of object</p>"},
        {"type":"Method","fromName":"MangoPay\\Wallet","fromLink":"MangoPay/Wallet.html","link":"MangoPay/Wallet.html#method_GetReadOnlyProperties","name":"MangoPay\\Wallet::GetReadOnlyProperties","doc":"<p>Get array with read-only properties</p>"},
            
                                // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Doctum = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Doctum.injectApiTree($('#api-tree'));
    });

    return root.Doctum;
})(window);

$(function() {

    
    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').on('click', function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Doctum.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


