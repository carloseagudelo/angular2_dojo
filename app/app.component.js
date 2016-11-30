"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var painter_detail_component_1 = require('./painter-detail.component');
var painter_service_1 = require('./painter.service');
var AppComponent = (function () {
    function AppComponent(service) {
        this.service = service;
        this.titulo = "";
    }
    AppComponent.prototype.getPainters = function () {
        var _this = this;
        this.service.getPainters().then(function (p) { return _this.painters = p; });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getPainters();
    };
    AppComponent.prototype.onSelect = function (p) { this.selectedPainter = p; };
    AppComponent = __decorate([
        core_1.Component({
            directives: [painter_detail_component_1.PainterDetailComponent],
            providers: [painter_service_1.PainterService],
            selector: 'my-app',
            template: "\n        <h1><img class=\"iimg-thumbnail\" src=\"img/brush.png\" />{{titulo}}</h1>\n        <ul class=\"list-unstyled\">\n            <li *ngFor=\"let p of ListaDePintores\"\n                [class.selected]=\"p === selectedPainter\"\n                (click)=\"onSelect(p)\">\n                <span class=\"badge\">{{p.id}}</span> {{p.name}}\n            </li>\n        </ul>\n        <my-painter-detail [painter]=\"selectedPainter\"></my-painter-detail>\n    "
        }), 
        __metadata('design:paramtypes', [painter_service_1.PainterService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map