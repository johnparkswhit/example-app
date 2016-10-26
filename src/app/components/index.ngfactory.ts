/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from './index';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/forms/src/directives';
import * as import4 from '@angular/forms/src/form_providers';
import * as import5 from '@angular/material/core/ripple/ripple';
import * as import6 from '@angular/material/button/button';
import * as import7 from '@angular/material/button-toggle/button-toggle';
import * as import8 from '@angular/material/card/card';
import * as import9 from '@angular/material/checkbox/checkbox';
import * as import10 from '@angular/material/core/portal/portal-directives';
import * as import11 from '@angular/material/core/overlay/overlay-directives';
import * as import12 from '@angular/material/core/a11y/index';
import * as import13 from '@angular/material/dialog/dialog';
import * as import14 from '@angular/material/core/line/line';
import * as import15 from '@angular/material/grid-list/grid-list';
import * as import16 from '@angular/http/src/http_module';
import * as import17 from '@angular/material/icon/icon';
import * as import18 from '@angular/material/input/input';
import * as import19 from '@angular/material/list/list';
import * as import20 from '@angular/material/menu/menu';
import * as import21 from '@angular/material/progress-bar/progress-bar';
import * as import22 from '@angular/material/progress-circle/progress-circle';
import * as import23 from '@angular/material/radio/radio';
import * as import24 from '@angular/material/select/index';
import * as import25 from '@angular/material/sidenav/sidenav';
import * as import26 from '@angular/material/slider/slider';
import * as import27 from '@angular/material/slide-toggle/slide-toggle';
import * as import28 from '@angular/material/snack-bar/snack-bar';
import * as import29 from '@angular/material/tabs/tabs';
import * as import30 from '@angular/material/toolbar/toolbar';
import * as import31 from '@angular/material/tooltip/tooltip';
import * as import32 from '@angular/material/core/rtl/dir';
import * as import33 from '@angular/material/module';
import * as import34 from '@angular/router/src/router_module';
import * as import35 from '../pipes/index';
import * as import36 from '@angular/common/src/localization';
import * as import37 from '@angular/forms/src/form_builder';
import * as import38 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import39 from '@angular/http/src/backends/browser_xhr';
import * as import40 from '@angular/http/src/base_response_options';
import * as import41 from '@angular/http/src/backends/xhr_backend';
import * as import42 from '@angular/http/src/base_request_options';
import * as import43 from '@angular/material/core/gestures/MdGestureConfig';
import * as import44 from '@angular/core/src/di/injector';
import * as import45 from '../../node_modules/@angular/material/dialog/dialog-container.ngfactory';
import * as import46 from '../../node_modules/@angular/material/snack-bar/snack-bar-container.ngfactory';
import * as import47 from '../../node_modules/@angular/material/snack-bar/simple-snack-bar.ngfactory';
import * as import48 from '../../node_modules/@angular/material/tooltip/tooltip.ngfactory';
import * as import49 from '@angular/core/src/i18n/tokens';
import * as import50 from '@angular/http/src/interfaces';
import * as import51 from '@angular/http/src/http';
import * as import52 from '@angular/platform-browser/src/dom/events/hammer_gestures';
class ComponentsModuleInjector extends import0.NgModuleInjector<import1.ComponentsModule> {
  _CommonModule_0:import2.CommonModule;
  _InternalFormsSharedModule_1:import3.InternalFormsSharedModule;
  _ReactiveFormsModule_2:import4.ReactiveFormsModule;
  _MdRippleModule_3:import5.MdRippleModule;
  _MdButtonModule_4:import6.MdButtonModule;
  _FormsModule_5:import4.FormsModule;
  _MdButtonToggleModule_6:import7.MdButtonToggleModule;
  _MdCardModule_7:import8.MdCardModule;
  _MdCheckboxModule_8:import9.MdCheckboxModule;
  _PortalModule_9:import10.PortalModule;
  _OverlayModule_10:import11.OverlayModule;
  _A11yModule_11:import12.A11yModule;
  _MdDialogModule_12:import13.MdDialogModule;
  _MdLineModule_13:import14.MdLineModule;
  _MdGridListModule_14:import15.MdGridListModule;
  _HttpModule_15:import16.HttpModule;
  _MdIconModule_16:import17.MdIconModule;
  _MdInputModule_17:import18.MdInputModule;
  _MdListModule_18:import19.MdListModule;
  _MdMenuModule_19:import20.MdMenuModule;
  _MdProgressBarModule_20:import21.MdProgressBarModule;
  _MdProgressCircleModule_21:import22.MdProgressCircleModule;
  _MdRadioModule_22:import23.MdRadioModule;
  _MdSelectModule_23:import24.MdSelectModule;
  _MdSidenavModule_24:import25.MdSidenavModule;
  _MdSliderModule_25:import26.MdSliderModule;
  _MdSlideToggleModule_26:import27.MdSlideToggleModule;
  _MdSnackBarModule_27:import28.MdSnackBarModule;
  _MdTabsModule_28:import29.MdTabsModule;
  _MdToolbarModule_29:import30.MdToolbarModule;
  _MdTooltipModule_30:import31.MdTooltipModule;
  _RtlModule_31:import32.RtlModule;
  _MaterialModule_32:import33.MaterialModule;
  _RouterModule_33:import34.RouterModule;
  _PipesModule_34:import35.PipesModule;
  _ComponentsModule_35:import1.ComponentsModule;
  __NgLocalization_36:import36.NgLocaleLocalization;
  __FormBuilder_37:import37.FormBuilder;
  __RadioControlRegistry_38:import38.RadioControlRegistry;
  __BrowserXhr_39:import39.BrowserXhr;
  __ResponseOptions_40:import40.BaseResponseOptions;
  __XSRFStrategy_41:any;
  __XHRBackend_42:import41.XHRBackend;
  __RequestOptions_43:import42.BaseRequestOptions;
  __Http_44:any;
  __HAMMER_GESTURE_CONFIG_45:import43.MdGestureConfig;
  constructor(parent:import44.Injector) {
    super(parent,[
      import45.MdDialogContainerNgFactory,
      import46.MdSnackBarContainerNgFactory,
      import47.SimpleSnackBarNgFactory,
      import48.TooltipComponentNgFactory
    ]
    ,([] as any[]));
  }
  get _NgLocalization_36():import36.NgLocaleLocalization {
    if ((this.__NgLocalization_36 == (null as any))) { (this.__NgLocalization_36 = new import36.NgLocaleLocalization(this.parent.get(import49.LOCALE_ID))); }
    return this.__NgLocalization_36;
  }
  get _FormBuilder_37():import37.FormBuilder {
    if ((this.__FormBuilder_37 == (null as any))) { (this.__FormBuilder_37 = new import37.FormBuilder()); }
    return this.__FormBuilder_37;
  }
  get _RadioControlRegistry_38():import38.RadioControlRegistry {
    if ((this.__RadioControlRegistry_38 == (null as any))) { (this.__RadioControlRegistry_38 = new import38.RadioControlRegistry()); }
    return this.__RadioControlRegistry_38;
  }
  get _BrowserXhr_39():import39.BrowserXhr {
    if ((this.__BrowserXhr_39 == (null as any))) { (this.__BrowserXhr_39 = new import39.BrowserXhr()); }
    return this.__BrowserXhr_39;
  }
  get _ResponseOptions_40():import40.BaseResponseOptions {
    if ((this.__ResponseOptions_40 == (null as any))) { (this.__ResponseOptions_40 = new import40.BaseResponseOptions()); }
    return this.__ResponseOptions_40;
  }
  get _XSRFStrategy_41():any {
    if ((this.__XSRFStrategy_41 == (null as any))) { (this.__XSRFStrategy_41 = import16._createDefaultCookieXSRFStrategy()); }
    return this.__XSRFStrategy_41;
  }
  get _XHRBackend_42():import41.XHRBackend {
    if ((this.__XHRBackend_42 == (null as any))) { (this.__XHRBackend_42 = new import41.XHRBackend(this._BrowserXhr_39,this._ResponseOptions_40,this._XSRFStrategy_41)); }
    return this.__XHRBackend_42;
  }
  get _RequestOptions_43():import42.BaseRequestOptions {
    if ((this.__RequestOptions_43 == (null as any))) { (this.__RequestOptions_43 = new import42.BaseRequestOptions()); }
    return this.__RequestOptions_43;
  }
  get _Http_44():any {
    if ((this.__Http_44 == (null as any))) { (this.__Http_44 = import16.httpFactory(this._XHRBackend_42,this._RequestOptions_43)); }
    return this.__Http_44;
  }
  get _HAMMER_GESTURE_CONFIG_45():import43.MdGestureConfig {
    if ((this.__HAMMER_GESTURE_CONFIG_45 == (null as any))) { (this.__HAMMER_GESTURE_CONFIG_45 = new import43.MdGestureConfig()); }
    return this.__HAMMER_GESTURE_CONFIG_45;
  }
  createInternal():import1.ComponentsModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._InternalFormsSharedModule_1 = new import3.InternalFormsSharedModule();
    this._ReactiveFormsModule_2 = new import4.ReactiveFormsModule();
    this._MdRippleModule_3 = new import5.MdRippleModule();
    this._MdButtonModule_4 = new import6.MdButtonModule();
    this._FormsModule_5 = new import4.FormsModule();
    this._MdButtonToggleModule_6 = new import7.MdButtonToggleModule();
    this._MdCardModule_7 = new import8.MdCardModule();
    this._MdCheckboxModule_8 = new import9.MdCheckboxModule();
    this._PortalModule_9 = new import10.PortalModule();
    this._OverlayModule_10 = new import11.OverlayModule();
    this._A11yModule_11 = new import12.A11yModule();
    this._MdDialogModule_12 = new import13.MdDialogModule();
    this._MdLineModule_13 = new import14.MdLineModule();
    this._MdGridListModule_14 = new import15.MdGridListModule();
    this._HttpModule_15 = new import16.HttpModule();
    this._MdIconModule_16 = new import17.MdIconModule();
    this._MdInputModule_17 = new import18.MdInputModule();
    this._MdListModule_18 = new import19.MdListModule();
    this._MdMenuModule_19 = new import20.MdMenuModule();
    this._MdProgressBarModule_20 = new import21.MdProgressBarModule();
    this._MdProgressCircleModule_21 = new import22.MdProgressCircleModule();
    this._MdRadioModule_22 = new import23.MdRadioModule();
    this._MdSelectModule_23 = new import24.MdSelectModule();
    this._MdSidenavModule_24 = new import25.MdSidenavModule();
    this._MdSliderModule_25 = new import26.MdSliderModule();
    this._MdSlideToggleModule_26 = new import27.MdSlideToggleModule();
    this._MdSnackBarModule_27 = new import28.MdSnackBarModule();
    this._MdTabsModule_28 = new import29.MdTabsModule();
    this._MdToolbarModule_29 = new import30.MdToolbarModule();
    this._MdTooltipModule_30 = new import31.MdTooltipModule();
    this._RtlModule_31 = new import32.RtlModule();
    this._MaterialModule_32 = new import33.MaterialModule();
    this._RouterModule_33 = new import34.RouterModule(this.parent.get(import34.ROUTER_FORROOT_GUARD,(null as any)));
    this._PipesModule_34 = new import35.PipesModule();
    this._ComponentsModule_35 = new import1.ComponentsModule();
    return this._ComponentsModule_35;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import3.InternalFormsSharedModule)) { return this._InternalFormsSharedModule_1; }
    if ((token === import4.ReactiveFormsModule)) { return this._ReactiveFormsModule_2; }
    if ((token === import5.MdRippleModule)) { return this._MdRippleModule_3; }
    if ((token === import6.MdButtonModule)) { return this._MdButtonModule_4; }
    if ((token === import4.FormsModule)) { return this._FormsModule_5; }
    if ((token === import7.MdButtonToggleModule)) { return this._MdButtonToggleModule_6; }
    if ((token === import8.MdCardModule)) { return this._MdCardModule_7; }
    if ((token === import9.MdCheckboxModule)) { return this._MdCheckboxModule_8; }
    if ((token === import10.PortalModule)) { return this._PortalModule_9; }
    if ((token === import11.OverlayModule)) { return this._OverlayModule_10; }
    if ((token === import12.A11yModule)) { return this._A11yModule_11; }
    if ((token === import13.MdDialogModule)) { return this._MdDialogModule_12; }
    if ((token === import14.MdLineModule)) { return this._MdLineModule_13; }
    if ((token === import15.MdGridListModule)) { return this._MdGridListModule_14; }
    if ((token === import16.HttpModule)) { return this._HttpModule_15; }
    if ((token === import17.MdIconModule)) { return this._MdIconModule_16; }
    if ((token === import18.MdInputModule)) { return this._MdInputModule_17; }
    if ((token === import19.MdListModule)) { return this._MdListModule_18; }
    if ((token === import20.MdMenuModule)) { return this._MdMenuModule_19; }
    if ((token === import21.MdProgressBarModule)) { return this._MdProgressBarModule_20; }
    if ((token === import22.MdProgressCircleModule)) { return this._MdProgressCircleModule_21; }
    if ((token === import23.MdRadioModule)) { return this._MdRadioModule_22; }
    if ((token === import24.MdSelectModule)) { return this._MdSelectModule_23; }
    if ((token === import25.MdSidenavModule)) { return this._MdSidenavModule_24; }
    if ((token === import26.MdSliderModule)) { return this._MdSliderModule_25; }
    if ((token === import27.MdSlideToggleModule)) { return this._MdSlideToggleModule_26; }
    if ((token === import28.MdSnackBarModule)) { return this._MdSnackBarModule_27; }
    if ((token === import29.MdTabsModule)) { return this._MdTabsModule_28; }
    if ((token === import30.MdToolbarModule)) { return this._MdToolbarModule_29; }
    if ((token === import31.MdTooltipModule)) { return this._MdTooltipModule_30; }
    if ((token === import32.RtlModule)) { return this._RtlModule_31; }
    if ((token === import33.MaterialModule)) { return this._MaterialModule_32; }
    if ((token === import34.RouterModule)) { return this._RouterModule_33; }
    if ((token === import35.PipesModule)) { return this._PipesModule_34; }
    if ((token === import1.ComponentsModule)) { return this._ComponentsModule_35; }
    if ((token === import36.NgLocalization)) { return this._NgLocalization_36; }
    if ((token === import37.FormBuilder)) { return this._FormBuilder_37; }
    if ((token === import38.RadioControlRegistry)) { return this._RadioControlRegistry_38; }
    if ((token === import39.BrowserXhr)) { return this._BrowserXhr_39; }
    if ((token === import40.ResponseOptions)) { return this._ResponseOptions_40; }
    if ((token === import50.XSRFStrategy)) { return this._XSRFStrategy_41; }
    if ((token === import41.XHRBackend)) { return this._XHRBackend_42; }
    if ((token === import42.RequestOptions)) { return this._RequestOptions_43; }
    if ((token === import51.Http)) { return this._Http_44; }
    if ((token === import52.HAMMER_GESTURE_CONFIG)) { return this._HAMMER_GESTURE_CONFIG_45; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const ComponentsModuleNgFactory:import0.NgModuleFactory<import1.ComponentsModule> = new import0.NgModuleFactory(ComponentsModuleInjector,import1.ComponentsModule);