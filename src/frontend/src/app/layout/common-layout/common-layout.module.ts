import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditableTextComponent } from './components/editable-text/editable-text.component';
import { ConfirmDeleteModalComponent } from './components/confirm-delete-modal/confirm-delete-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BasicSelectComponent } from './components/dynamic-form/dynamic-field-input-only/basic-select/basic-select.component';
import { IconButtonComponent } from './components/trash-icon-button/icon-button.component';
import { CreateNewEventModalComponent } from './components/create-new-event-modal/create-new-event-modal.component';
import { CreateNewEnvironmentModalComponent } from './components/create-new-environment-modal/create-new-environment-modal.component';
import { CreateAccountModalComponent } from './components/create-account-modal/create-account-modal.component';
import { TimeagoModule } from 'ngx-timeago';
import { HighlightService } from './service/highlightservice';
import { DeployModalComponent } from './components/deploy-modal/deploy-modal.component';
import { StateIconComponent } from './components/status-icon/state-icon.component';
import { JsonViewComponent } from './components/json-view/json-view.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SelectDeploymentEnvironmentStepComponent } from './components/deploy-modal/select-targeted-environment-step/select-deployment-environment-step.component';
import { DeployStepGlobalConfigComponent } from './components/deploy-modal/deploy-step-collection-configs/deploy-step-collection-configs.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ClickStopPropagationDirective } from './click-stop-propgation.directive';
import { ApButtonComponent } from './components/ap-button/ap-button.component';
import { ApImgComponent } from './components/ap-img/ap-img.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ResponsiveTableComponent } from './components/responsive-table/responsive-table.component';
import { LoadingSkeletonComponent } from './components/loading-skeleton/loading-skeleton.component';
import { DictionaryFormComponent } from './components/dynamic-form/dynamic-field-input-only/dictionary-form/dictionary-form.component';
import { CreateNewPieceModalComponent } from './components/create-new-piece-modal/create-new-piece-modal.component';
import { MultiDropdownComponent } from './components/dynamic-form/dynamic-field-input-only/multi-dropdown/multi-dropdown.component';
import { ApInputComponent } from './components/ap-input/ap-input.component';
import { ConnectOauth2Component } from './components/dynamic-form/dynamic-field-input-only/connect-oauth2/connect-oauth2.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { LoadingIconComponent } from './components/loading-icon/loading-icon.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { UploadImageControlComponent } from './components/upload-image-control/upload-image-control.component';
import { DragDropDirective } from './components/upload-image-control/drag-drop.directive';
import { SaveCancelPanelSectionComponent } from './components/save-cancel-panel-section/save-cancel-panel-section.component';
import { DefaultFalsePipe } from './pipe/default-false.pipe';
import { DefaultTruePipe } from './pipe/default-true.pipe';
import { OutputLogPipe } from './pipe/output-log';
import { DefaultZeroPipe } from './pipe/default-zero.pipe';
import { CodeEmbeddedEditorComponent } from './components/dynamic-form/dynamic-field-input-only/code-embeddedEditor/code-embedded-editor.component';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { SelectOauth2Component } from './components/dynamic-form/dynamic-field-input-only/select-oauth2/select-oauth2.component';
import { SelectEventComponent } from './components/dynamic-form/dynamic-field-input-only/select-event/select-event.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { EventsEffect } from './store/effect/events.effect';
import { eventsReducer } from './store/reducer/events.reducer';
import { MatButtonModule } from '@angular/material/button';
import { BsDropdownConfig, BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { DocumentationLinkComponent } from './components/dynamic-form/dynamic-field-input-only/documentation-link/documentation-link.component';
import { JsonViewModalComponent } from './components/json-view-modal/json-view-modal.component';
import { MatTooltipDefaultOptions, MatTooltipModule, MAT_TOOLTIP_DEFAULT_OPTIONS } from '@angular/material/tooltip';
import { MonacoEditorModule } from '@materia-ui/ngx-monaco-editor';
import { RawOutputLogPipe } from './pipe/raw-output-log';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { CheckboxComponent } from './components/app-checkbox/checkbox.component';
import { TableComponent } from './components/table/table.component';
import { LongTextFormControlComponent } from './components/form-controls/long-text-form-control/long-text-form-control.component';
import { DictionaryFormControlComponent } from './components/form-controls/dictionary-form-control/dictionary-form-control.component';
import { OAuth2ConnectControlComponent } from './components/form-controls/o-auth2-connect-control/o-auth2-connect-control.component';
import { ConfigsFormComponent } from './components/configs-form/configs-form.component';
import { NgSelectItemTemplateComponent } from './components/form-controls/ng-select-item-template/ng-select-item-template.component';
import { NgSelectLoadingSpinnerTemplateComponent } from './components/form-controls/ng-select-loading-spinner-template/ng-select-loading-spinner-template.component';
import { CodeArtifactFormControlComponent } from './components/form-controls/code-artifact-form-control/code-artifact-form-control.component';
import { CodeArtifactControlFullscreenComponent } from './components/form-controls/code-artifact-form-control/code-artifact-control-fullscreen/code-artifact-control-fullscreen.component';
import { TestCodeFormModalComponent } from './components/form-controls/code-artifact-form-control/code-artifact-control-fullscreen/test-code-form-modal/test-code-form-modal.component';
import { NewAddNpmPackageModalComponent } from './components/form-controls/code-artifact-form-control/code-artifact-control-fullscreen/add-npm-package-modal/add-npm-package-modal.component';
import { NgSelectTagValueTemplateComponent } from './components/form-controls/ng-select-tag-value-template/ng-select-tag-value-template.component';
import { organizationReducer } from './store/reducer/organization.reducer';
import { projectReducer } from './store/reducer/project.reducer';
import { OrganizationsEffect } from './store/effect/organizations.effect';
import { ProjectsEffect } from './store/effect/projects.effect';
import { environmentReducer } from './store/reducer/environments.reducer';
import { EnvironmentsEffect } from './store/effect/environments.effect';
import { ItemTextPipe } from './components/form-controls/ng-select-tag-value-template/item-text.pipe';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { TrackHoverDirective } from './components/form-controls/dictionary-form-control/track-hover.directive';
import { NgSelectConnectorActionItemTemplateComponent } from './components/form-controls/ng-select-connector-action-item-template/ng-select-connector-action-item-template.component';
import { RequestTypeTemplateComponent } from './components/form-controls/request-type-template/request-type-template.component';
import { NgSelectCustomRequestComponent } from './components/form-controls/ng-select-custom-request/ng-select-custom-request.component';
import { NgSelectNoItemsFoundTemplateComponent } from './components/form-controls/ng-select-no-items-found-template/ng-select-no-items-found-template.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { EndpointFormControlComponent } from './components/form-controls/endpoint-form-control/endpoint-form-control.component';
import { ConnectorCustomRequestFormControlComponent } from './components/form-controls/connector-custom-request-form-control/connector-custom-request-form-control.component';
import { MatMenuModule } from '@angular/material/menu';
import { ConfigsFormForConnectorsComponent } from './components/configs-form/configs-form-for-connectors/configs-form-for-connectors.component';
export const materialTooltipDefaults: MatTooltipDefaultOptions = {
	showDelay: 500,
	hideDelay: 0,
	touchendHideDelay: 0,
};

@NgModule({
	declarations: [
		EditableTextComponent,
		ConfirmDeleteModalComponent,
		BasicSelectComponent,
		IconButtonComponent,
		DictionaryFormComponent,
		CreateNewEventModalComponent,
		CreateNewEnvironmentModalComponent,
		CreateAccountModalComponent,
		DeployModalComponent,
		StateIconComponent,
		JsonViewComponent,
		PaginationComponent,
		SelectDeploymentEnvironmentStepComponent,
		DeployStepGlobalConfigComponent,
		ClickStopPropagationDirective,
		ApButtonComponent,
		ApImgComponent,
		ResponsiveTableComponent,
		LoadingSkeletonComponent,
		CreateNewPieceModalComponent,
		ApInputComponent,
		MultiDropdownComponent,
		ConnectOauth2Component,
		LoadingIconComponent,
		CodeEmbeddedEditorComponent,
		SaveCancelPanelSectionComponent,
		UploadImageControlComponent,
		DragDropDirective,
		DefaultFalsePipe,
		DefaultTruePipe,
		OutputLogPipe,
		RawOutputLogPipe,
		DefaultZeroPipe,
		SelectOauth2Component,
		SelectEventComponent,
		DocumentationLinkComponent,
		JsonViewModalComponent,
		LongTextFormControlComponent,
		CheckboxComponent,
		TableComponent,
		DictionaryFormControlComponent,
		OAuth2ConnectControlComponent,
		ConfigsFormComponent,
		NgSelectItemTemplateComponent,
		NgSelectLoadingSpinnerTemplateComponent,
		CodeArtifactFormControlComponent,
		CodeArtifactControlFullscreenComponent,
		TestCodeFormModalComponent,
		NewAddNpmPackageModalComponent,
		NgSelectTagValueTemplateComponent,
		ItemTextPipe,
		TrackHoverDirective,
		NgSelectConnectorActionItemTemplateComponent,
		RequestTypeTemplateComponent,
		NgSelectCustomRequestComponent,
		NgSelectNoItemsFoundTemplateComponent,
		EndpointFormControlComponent,
		ConnectorCustomRequestFormControlComponent,
		ConfigsFormForConnectorsComponent,
	],
	imports: [
		TimeagoModule,
		FontAwesomeModule,
		BsDropdownModule.forRoot(),
		CommonModule,
		ReactiveFormsModule,
		AccordionModule,
		NgxSkeletonLoaderModule,
		TooltipModule,
		MatExpansionModule,
		MatTabsModule,
		CodemirrorModule,
		FormsModule,
		MatMenuModule,
		EffectsModule.forFeature([EventsEffect, OrganizationsEffect, ProjectsEffect, EnvironmentsEffect]),
		StoreModule.forFeature('commonState', {
			eventsState: eventsReducer,
			organizationsState: organizationReducer,
			projectsState: projectReducer,
			environmentsState: environmentReducer,
		}),
		AngularSvgIconModule,
		MatTooltipModule,
		MonacoEditorModule,
		NgSelectModule,
		MatSnackBarModule,
		MatButtonModule,
		PopoverModule,
		MatSlideToggleModule,
		MatMenuModule,
	],
	exports: [
		EditableTextComponent,
		PopoverModule,
		ConfirmDeleteModalComponent,
		BasicSelectComponent,
		IconButtonComponent,
		CreateNewEnvironmentModalComponent,
		CreateAccountModalComponent,
		CreateNewEventModalComponent,
		DictionaryFormComponent,
		DeployModalComponent,
		StateIconComponent,
		JsonViewComponent,
		PaginationComponent,
		ApButtonComponent,
		ApImgComponent,
		ResponsiveTableComponent,
		LoadingSkeletonComponent,
		CreateNewPieceModalComponent,
		MultiDropdownComponent,
		ApInputComponent,
		LoadingIconComponent,
		DragDropDirective,
		UploadImageControlComponent,
		SaveCancelPanelSectionComponent,
		DefaultFalsePipe,
		DefaultTruePipe,
		DefaultZeroPipe,
		BsDropdownModule,
		TooltipModule,
		AngularSvgIconModule,
		FontAwesomeModule,
		ClickStopPropagationDirective,
		MatSnackBarModule,
		MatButtonModule,
		NgSelectModule,
		LongTextFormControlComponent,
		CheckboxComponent,
		TableComponent,
		CodeEmbeddedEditorComponent,
		OAuth2ConnectControlComponent,
		DictionaryFormControlComponent,
		ConfigsFormComponent,
		NgSelectItemTemplateComponent,
		CodeArtifactFormControlComponent,
		NgSelectTagValueTemplateComponent,
		NgSelectLoadingSpinnerTemplateComponent,
		MatTooltipModule,
		MatMenuModule,
		MatSlideToggleModule,
		NgSelectConnectorActionItemTemplateComponent,
		NgSelectCustomRequestComponent,
		NgSelectNoItemsFoundTemplateComponent,
		EndpointFormControlComponent,
		ConnectorCustomRequestFormControlComponent,
		MatMenuModule,
		ConfigsFormForConnectorsComponent,
	],
	providers: [
		HighlightService,
		BsDropdownConfig,
		{ provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 3000 } },
		{ provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: materialTooltipDefaults },
	],
})
export class CommonLayoutModule {}