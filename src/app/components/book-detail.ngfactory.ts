/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './book-detail';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '@angular/common/src/directives/ng_if';
import * as import11 from '@angular/core/src/linker/template_ref';
import * as import12 from '@angular/material/card/card';
import * as import13 from './book-authors';
import * as import14 from '../../node_modules/@angular/material/card/card.ngfactory';
import * as import15 from './book-authors.ngfactory';
import * as import16 from '@angular/core/src/security';
import * as import17 from '@angular/material/button/button';
import * as import18 from '../../node_modules/@angular/material/button/button.ngfactory';
import * as import19 from '@angular/core/src/linker/element_ref';
var renderType_BookDetailComponent_Host:import0.RenderComponentType = (null as any);
class _View_BookDetailComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _BookDetailComponent_0_4:import3.BookDetailComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_BookDetailComponent_Host0,renderType_BookDetailComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('bc-book-detail',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_BookDetailComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._BookDetailComponent_0_4 = new import3.BookDetailComponent();
    this._appEl_0.initComponent(this._BookDetailComponent_0_4,([] as any[]),compView_0);
    compView_0.create(this._BookDetailComponent_0_4,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.BookDetailComponent) && (0 === requestNodeIndex))) { return this._BookDetailComponent_0_4; }
    return notFoundResult;
  }
}
function viewFactory_BookDetailComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_BookDetailComponent_Host === (null as any))) { (renderType_BookDetailComponent_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_BookDetailComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const BookDetailComponentNgFactory:import9.ComponentFactory<import3.BookDetailComponent> = new import9.ComponentFactory<import3.BookDetailComponent>('bc-book-detail',viewFactory_BookDetailComponent_Host0,import3.BookDetailComponent);
const styles_BookDetailComponent:any[] = ['[_nghost-%COMP%] {\n      display: flex;\n      justify-content: center;\n      margin: 75px 0;\n    }\n    md-card[_ngcontent-%COMP%] {\n      max-width: 600px;\n    }\n    md-card-title[_ngcontent-%COMP%] {\n      margin-left: 10px;\n    }\n    img[_ngcontent-%COMP%] {\n      width: 60px;\n      min-width: 60px;\n      margin-left: 5px;\n    }\n    md-card-content[_ngcontent-%COMP%] {\n      margin-top: 15px;\n      margin-bottom: 125px;\n    }\n    md-card-actions[_ngcontent-%COMP%] {\n      margin-bottom: 0 !important;\n      margin-right: 0;\n    }\n    md-card-footer[_ngcontent-%COMP%] {\n      padding: 0 25px 25px;\n    }'];
var renderType_BookDetailComponent:import0.RenderComponentType = (null as any);
class _View_BookDetailComponent0 extends import1.AppView<import3.BookDetailComponent> {
  _text_0:any;
  _anchor_1:any;
  /*private*/ _appEl_1:import2.AppElement;
  _TemplateRef_1_5:any;
  _NgIf_1_6:import10.NgIf;
  _text_2:any;
  /*private*/ _expr_0:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_BookDetailComponent0,renderType_BookDetailComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._anchor_1 = this.renderer.createTemplateAnchor(parentRenderNode,(null as any));
    this._appEl_1 = new import2.AppElement(1,(null as any),this,this._anchor_1);
    this._TemplateRef_1_5 = new import11.TemplateRef_(this._appEl_1,viewFactory_BookDetailComponent1);
    this._NgIf_1_6 = new import10.NgIf(this._appEl_1.vcRef,this._TemplateRef_1_5);
    this._text_2 = this.renderer.createText(parentRenderNode,'\n\n  ',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this.init(([] as any[]),[
      this._text_0,
      this._anchor_1,
      this._text_2
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import11.TemplateRef) && (1 === requestNodeIndex))) { return this._TemplateRef_1_5; }
    if (((token === import10.NgIf) && (1 === requestNodeIndex))) { return this._NgIf_1_6; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0:any = this.context.book;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._NgIf_1_6.ngIf = currVal_0;
      this._expr_0 = currVal_0;
    }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
export function viewFactory_BookDetailComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.BookDetailComponent> {
  if ((renderType_BookDetailComponent === (null as any))) { (renderType_BookDetailComponent = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.Emulated,styles_BookDetailComponent,{})); }
  return new _View_BookDetailComponent0(viewUtils,parentInjector,declarationEl);
}
class _View_BookDetailComponent1 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _MdCard_0_4:import12.MdCard;
  _text_1:any;
  _el_2:any;
  /*private*/ _appEl_2:import2.AppElement;
  _MdCardTitleGroup_2_4:import12.MdCardTitleGroup;
  _text_3:any;
  _el_4:any;
  _MdCardTitle_4_3:import12.MdCardTitle;
  _text_5:any;
  _text_6:any;
  _anchor_7:any;
  /*private*/ _appEl_7:import2.AppElement;
  _TemplateRef_7_5:any;
  _NgIf_7_6:import10.NgIf;
  _text_8:any;
  _anchor_9:any;
  /*private*/ _appEl_9:import2.AppElement;
  _TemplateRef_9_5:any;
  _NgIf_9_6:import10.NgIf;
  _text_10:any;
  _text_11:any;
  _el_12:any;
  _MdCardContent_12_3:import12.MdCardContent;
  _text_13:any;
  _el_14:any;
  _text_15:any;
  _text_16:any;
  _el_17:any;
  _MdCardFooter_17_3:import12.MdCardFooter;
  _text_18:any;
  _el_19:any;
  /*private*/ _appEl_19:import2.AppElement;
  _BookAuthorsComponent_19_4:import13.BookAuthorsComponent;
  _text_20:any;
  _text_21:any;
  _el_22:any;
  _MdCardActions_22_3:import12.MdCardActions;
  _text_23:any;
  _anchor_24:any;
  /*private*/ _appEl_24:import2.AppElement;
  _TemplateRef_24_5:any;
  _NgIf_24_6:import10.NgIf;
  _text_25:any;
  _anchor_26:any;
  /*private*/ _appEl_26:import2.AppElement;
  _TemplateRef_26_5:any;
  _NgIf_26_6:import10.NgIf;
  _text_27:any;
  _text_28:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_BookDetailComponent1,renderType_BookDetailComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'md-card',(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = import14.viewFactory_MdCard0(this.viewUtils,this.injector(0),this._appEl_0);
    this._MdCard_0_4 = new import12.MdCard();
    this._appEl_0.initComponent(this._MdCard_0_4,([] as any[]),compView_0);
    this._text_1 = this.renderer.createText((null as any),'\n      ',(null as any));
    this._el_2 = this.renderer.createElement((null as any),'md-card-title-group',(null as any));
    this._appEl_2 = new import2.AppElement(2,0,this,this._el_2);
    var compView_2:any = import14.viewFactory_MdCardTitleGroup0(this.viewUtils,this.injector(2),this._appEl_2);
    this._MdCardTitleGroup_2_4 = new import12.MdCardTitleGroup();
    this._appEl_2.initComponent(this._MdCardTitleGroup_2_4,([] as any[]),compView_2);
    this._text_3 = this.renderer.createText((null as any),'\n        ',(null as any));
    this._el_4 = this.renderer.createElement((null as any),'md-card-title',(null as any));
    this._MdCardTitle_4_3 = new import12.MdCardTitle();
    this._text_5 = this.renderer.createText(this._el_4,'',(null as any));
    this._text_6 = this.renderer.createText((null as any),'\n        ',(null as any));
    this._anchor_7 = this.renderer.createTemplateAnchor((null as any),(null as any));
    this._appEl_7 = new import2.AppElement(7,2,this,this._anchor_7);
    this._TemplateRef_7_5 = new import11.TemplateRef_(this._appEl_7,viewFactory_BookDetailComponent2);
    this._NgIf_7_6 = new import10.NgIf(this._appEl_7.vcRef,this._TemplateRef_7_5);
    this._text_8 = this.renderer.createText((null as any),'\n        ',(null as any));
    this._anchor_9 = this.renderer.createTemplateAnchor((null as any),(null as any));
    this._appEl_9 = new import2.AppElement(9,2,this,this._anchor_9);
    this._TemplateRef_9_5 = new import11.TemplateRef_(this._appEl_9,viewFactory_BookDetailComponent3);
    this._NgIf_9_6 = new import10.NgIf(this._appEl_9.vcRef,this._TemplateRef_9_5);
    this._text_10 = this.renderer.createText((null as any),'\n      ',(null as any));
    compView_2.create(this._MdCardTitleGroup_2_4,[
      ([] as any[]).concat([
        this._el_4,
        this._appEl_7
      ]
      ),
      ([] as any[]).concat([this._appEl_9]),
      ([] as any[]).concat([
        this._text_3,
        this._text_6,
        this._text_8,
        this._text_10
      ]
      )
    ]
    ,(null as any));
    this._text_11 = this.renderer.createText((null as any),'\n      ',(null as any));
    this._el_12 = this.renderer.createElement((null as any),'md-card-content',(null as any));
    this._MdCardContent_12_3 = new import12.MdCardContent();
    this._text_13 = this.renderer.createText(this._el_12,'\n        ',(null as any));
    this._el_14 = this.renderer.createElement(this._el_12,'p',(null as any));
    this._text_15 = this.renderer.createText(this._el_12,'\n      ',(null as any));
    this._text_16 = this.renderer.createText((null as any),'\n      ',(null as any));
    this._el_17 = this.renderer.createElement((null as any),'md-card-footer',(null as any));
    this.renderer.setElementAttribute(this._el_17,'class','footer');
    this._MdCardFooter_17_3 = new import12.MdCardFooter();
    this._text_18 = this.renderer.createText(this._el_17,'\n        ',(null as any));
    this._el_19 = this.renderer.createElement(this._el_17,'bc-book-authors',(null as any));
    this._appEl_19 = new import2.AppElement(19,17,this,this._el_19);
    var compView_19:any = import15.viewFactory_BookAuthorsComponent0(this.viewUtils,this.injector(19),this._appEl_19);
    this._BookAuthorsComponent_19_4 = new import13.BookAuthorsComponent();
    this._appEl_19.initComponent(this._BookAuthorsComponent_19_4,([] as any[]),compView_19);
    compView_19.create(this._BookAuthorsComponent_19_4,([] as any[]),(null as any));
    this._text_20 = this.renderer.createText(this._el_17,'\n      ',(null as any));
    this._text_21 = this.renderer.createText((null as any),'\n      ',(null as any));
    this._el_22 = this.renderer.createElement((null as any),'md-card-actions',(null as any));
    this.renderer.setElementAttribute(this._el_22,'align','end');
    this._MdCardActions_22_3 = new import12.MdCardActions();
    this._text_23 = this.renderer.createText(this._el_22,'\n        ',(null as any));
    this._anchor_24 = this.renderer.createTemplateAnchor(this._el_22,(null as any));
    this._appEl_24 = new import2.AppElement(24,22,this,this._anchor_24);
    this._TemplateRef_24_5 = new import11.TemplateRef_(this._appEl_24,viewFactory_BookDetailComponent4);
    this._NgIf_24_6 = new import10.NgIf(this._appEl_24.vcRef,this._TemplateRef_24_5);
    this._text_25 = this.renderer.createText(this._el_22,'\n\n        ',(null as any));
    this._anchor_26 = this.renderer.createTemplateAnchor(this._el_22,(null as any));
    this._appEl_26 = new import2.AppElement(26,22,this,this._anchor_26);
    this._TemplateRef_26_5 = new import11.TemplateRef_(this._appEl_26,viewFactory_BookDetailComponent5);
    this._NgIf_26_6 = new import10.NgIf(this._appEl_26.vcRef,this._TemplateRef_26_5);
    this._text_27 = this.renderer.createText(this._el_22,'\n      ',(null as any));
    this._text_28 = this.renderer.createText((null as any),'\n    ',(null as any));
      compView_0.create(this._MdCard_0_4,[([] as any[]).concat([
        this._text_1,
        this._el_2,
        this._text_11,
        this._el_12,
        this._text_16,
        this._el_17,
        this._text_21,
        this._el_22,
        this._text_28
      ]
    )],(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this._expr_3 = import7.UNINITIALIZED;
    this._expr_4 = import7.UNINITIALIZED;
    this._expr_5 = import7.UNINITIALIZED;
    this._expr_6 = import7.UNINITIALIZED;
    this.init(([] as any[]).concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._text_6,
      this._anchor_7,
      this._text_8,
      this._anchor_9,
      this._text_10,
      this._text_11,
      this._el_12,
      this._text_13,
      this._el_14,
      this._text_15,
      this._text_16,
      this._el_17,
      this._text_18,
      this._el_19,
      this._text_20,
      this._text_21,
      this._el_22,
      this._text_23,
      this._anchor_24,
      this._text_25,
      this._anchor_26,
      this._text_27,
      this._text_28
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import12.MdCardTitle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) { return this._MdCardTitle_4_3; }
    if (((token === import11.TemplateRef) && (7 === requestNodeIndex))) { return this._TemplateRef_7_5; }
    if (((token === import10.NgIf) && (7 === requestNodeIndex))) { return this._NgIf_7_6; }
    if (((token === import11.TemplateRef) && (9 === requestNodeIndex))) { return this._TemplateRef_9_5; }
    if (((token === import10.NgIf) && (9 === requestNodeIndex))) { return this._NgIf_9_6; }
    if (((token === import12.MdCardTitleGroup) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 10)))) { return this._MdCardTitleGroup_2_4; }
    if (((token === import12.MdCardContent) && ((12 <= requestNodeIndex) && (requestNodeIndex <= 15)))) { return this._MdCardContent_12_3; }
    if (((token === import13.BookAuthorsComponent) && (19 === requestNodeIndex))) { return this._BookAuthorsComponent_19_4; }
    if (((token === import12.MdCardFooter) && ((17 <= requestNodeIndex) && (requestNodeIndex <= 20)))) { return this._MdCardFooter_17_3; }
    if (((token === import11.TemplateRef) && (24 === requestNodeIndex))) { return this._TemplateRef_24_5; }
    if (((token === import10.NgIf) && (24 === requestNodeIndex))) { return this._NgIf_24_6; }
    if (((token === import11.TemplateRef) && (26 === requestNodeIndex))) { return this._TemplateRef_26_5; }
    if (((token === import10.NgIf) && (26 === requestNodeIndex))) { return this._NgIf_26_6; }
    if (((token === import12.MdCardActions) && ((22 <= requestNodeIndex) && (requestNodeIndex <= 27)))) { return this._MdCardActions_22_3; }
    if (((token === import12.MdCard) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 28)))) { return this._MdCard_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_1:any = this.parent.context.subtitle;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._NgIf_7_6.ngIf = currVal_1;
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = this.parent.context.thumbnail;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this._NgIf_9_6.ngIf = currVal_2;
      this._expr_2 = currVal_2;
    }
    const currVal_4:any = this.parent.context.book;
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this._BookAuthorsComponent_19_4.book = currVal_4;
      this._expr_4 = currVal_4;
    }
    const currVal_5:any = this.parent.context.inCollection;
    if (import4.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this._NgIf_24_6.ngIf = currVal_5;
      this._expr_5 = currVal_5;
    }
    const currVal_6:boolean = !this.parent.context.inCollection;
    if (import4.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this._NgIf_26_6.ngIf = currVal_6;
      this._expr_6 = currVal_6;
    }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = import4.interpolate(1,'',this.parent.context.title,'');
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setText(this._text_5,currVal_0);
      this._expr_0 = currVal_0;
    }
    const currVal_3:any = this.parent.context.description;
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setElementProperty(this._el_14,'innerHTML',this.viewUtils.sanitizer.sanitize(import16.SecurityContext.HTML,currVal_3));
      this._expr_3 = currVal_3;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_BookDetailComponent1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_BookDetailComponent1(viewUtils,parentInjector,declarationEl);
}
class _View_BookDetailComponent2 extends import1.AppView<any> {
  _el_0:any;
  _MdCardSubtitle_0_3:import12.MdCardSubtitle;
  _text_1:any;
  /*private*/ _expr_0:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_BookDetailComponent2,renderType_BookDetailComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'md-card-subtitle',(null as any));
    this._MdCardSubtitle_0_3 = new import12.MdCardSubtitle();
    this._text_1 = this.renderer.createText(this._el_0,'',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this.init(([] as any[]).concat([this._el_0]),[
      this._el_0,
      this._text_1
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import12.MdCardSubtitle) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._MdCardSubtitle_0_3; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = import4.interpolate(1,'',this.parent.parent.context.subtitle,'');
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setText(this._text_1,currVal_0);
      this._expr_0 = currVal_0;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_BookDetailComponent2(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_BookDetailComponent2(viewUtils,parentInjector,declarationEl);
}
class _View_BookDetailComponent3 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _expr_0:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_BookDetailComponent3,renderType_BookDetailComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'img',(null as any));
    this.renderer.setElementAttribute(this._el_0,'md-card-sm-image','');
    this._expr_0 = import7.UNINITIALIZED;
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = this.parent.parent.context.thumbnail;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setElementProperty(this._el_0,'src',this.viewUtils.sanitizer.sanitize(import16.SecurityContext.URL,currVal_0));
      this._expr_0 = currVal_0;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_BookDetailComponent3(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_BookDetailComponent3(viewUtils,parentInjector,declarationEl);
}
class _View_BookDetailComponent4 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _MdButton_0_4:import17.MdButton;
  _text_1:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_BookDetailComponent4,renderType_BookDetailComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'button',(null as any));
    this.renderer.setElementAttribute(this._el_0,'color','warn');
    this.renderer.setElementAttribute(this._el_0,'md-raised-button','');
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = import18.viewFactory_MdButton0(this.viewUtils,this.injector(0),this._appEl_0);
    this._MdButton_0_4 = new import17.MdButton(new import19.ElementRef(this._el_0),this.renderer);
    this._appEl_0.initComponent(this._MdButton_0_4,([] as any[]),compView_0);
    this._text_1 = this.renderer.createText((null as any),'\n        Remove Book from Collection\n        ',(null as any));
    compView_0.create(this._MdButton_0_4,[([] as any[]).concat([this._text_1])],(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_0,'click',this.eventHandler(this._handle_click_0_0.bind(this)));
    var disposable_1:Function = this.renderer.listen(this._el_0,'mousedown',this.eventHandler(this._handle_mousedown_0_1.bind(this)));
    var disposable_2:Function = this.renderer.listen(this._el_0,'focus',this.eventHandler(this._handle_focus_0_2.bind(this)));
    var disposable_3:Function = this.renderer.listen(this._el_0,'blur',this.eventHandler(this._handle_blur_0_3.bind(this)));
    this._expr_4 = import7.UNINITIALIZED;
    this._expr_5 = import7.UNINITIALIZED;
    this.init(([] as any[]).concat([this._el_0]),[
      this._el_0,
      this._text_1
    ]
    ,[
      disposable_0,
      disposable_1,
      disposable_2,
      disposable_3
    ]
    ,([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import17.MdButton) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._MdButton_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changed:boolean = true;
    changed = false;
    const currVal_4:any = 'warn';
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this._MdButton_0_4.color = currVal_4;
      changed = true;
      this._expr_4 = currVal_4;
    }
    if (changed) { this._appEl_0.componentView.markAsCheckOnce(); }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_5:any = this._MdButton_0_4._isKeyboardFocused;
    if (import4.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setElementClass(this._el_0,'md-button-focus',currVal_5);
      this._expr_5 = currVal_5;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_click_0_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.parent.context.remove.emit(this.parent.parent.context.book)) !== false);
    return (true && pd_0);
  }
  private _handle_mousedown_0_1($event:any):boolean {
    this._appEl_0.componentView.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._MdButton_0_4._setMousedown()) !== false);
    return (true && pd_0);
  }
  private _handle_focus_0_2($event:any):boolean {
    this._appEl_0.componentView.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._MdButton_0_4._setKeyboardFocus()) !== false);
    return (true && pd_0);
  }
  private _handle_blur_0_3($event:any):boolean {
    this._appEl_0.componentView.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._MdButton_0_4._removeKeyboardFocus()) !== false);
    return (true && pd_0);
  }
}
function viewFactory_BookDetailComponent4(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_BookDetailComponent4(viewUtils,parentInjector,declarationEl);
}
class _View_BookDetailComponent5 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _MdButton_0_4:import17.MdButton;
  _text_1:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_BookDetailComponent5,renderType_BookDetailComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'button',(null as any));
    this.renderer.setElementAttribute(this._el_0,'color','primary');
    this.renderer.setElementAttribute(this._el_0,'md-raised-button','');
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = import18.viewFactory_MdButton0(this.viewUtils,this.injector(0),this._appEl_0);
    this._MdButton_0_4 = new import17.MdButton(new import19.ElementRef(this._el_0),this.renderer);
    this._appEl_0.initComponent(this._MdButton_0_4,([] as any[]),compView_0);
    this._text_1 = this.renderer.createText((null as any),'\n        Add Book to Collection\n        ',(null as any));
    compView_0.create(this._MdButton_0_4,[([] as any[]).concat([this._text_1])],(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_0,'click',this.eventHandler(this._handle_click_0_0.bind(this)));
    var disposable_1:Function = this.renderer.listen(this._el_0,'mousedown',this.eventHandler(this._handle_mousedown_0_1.bind(this)));
    var disposable_2:Function = this.renderer.listen(this._el_0,'focus',this.eventHandler(this._handle_focus_0_2.bind(this)));
    var disposable_3:Function = this.renderer.listen(this._el_0,'blur',this.eventHandler(this._handle_blur_0_3.bind(this)));
    this._expr_4 = import7.UNINITIALIZED;
    this._expr_5 = import7.UNINITIALIZED;
    this.init(([] as any[]).concat([this._el_0]),[
      this._el_0,
      this._text_1
    ]
    ,[
      disposable_0,
      disposable_1,
      disposable_2,
      disposable_3
    ]
    ,([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import17.MdButton) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._MdButton_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changed:boolean = true;
    changed = false;
    const currVal_4:any = 'primary';
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this._MdButton_0_4.color = currVal_4;
      changed = true;
      this._expr_4 = currVal_4;
    }
    if (changed) { this._appEl_0.componentView.markAsCheckOnce(); }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_5:any = this._MdButton_0_4._isKeyboardFocused;
    if (import4.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setElementClass(this._el_0,'md-button-focus',currVal_5);
      this._expr_5 = currVal_5;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_click_0_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.parent.context.add.emit(this.parent.parent.context.book)) !== false);
    return (true && pd_0);
  }
  private _handle_mousedown_0_1($event:any):boolean {
    this._appEl_0.componentView.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._MdButton_0_4._setMousedown()) !== false);
    return (true && pd_0);
  }
  private _handle_focus_0_2($event:any):boolean {
    this._appEl_0.componentView.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._MdButton_0_4._setKeyboardFocus()) !== false);
    return (true && pd_0);
  }
  private _handle_blur_0_3($event:any):boolean {
    this._appEl_0.componentView.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._MdButton_0_4._removeKeyboardFocus()) !== false);
    return (true && pd_0);
  }
}
function viewFactory_BookDetailComponent5(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_BookDetailComponent5(viewUtils,parentInjector,declarationEl);
}