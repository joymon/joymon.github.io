/// <reference path="../../Scripts/typings/angularjs/angular.d.ts" />
//Directive for Changelog view.
var JoymonOnline;
(function (JoymonOnline) {
    var LinksComponent = (function () {
        function LinksComponent() {
            this.templateUrl = 'JS/app/links.component.html';
        }
        return LinksComponent;
    }());
    JoymonOnline.LinksComponent = LinksComponent;
    JoymonOnline.AppModule.getInstance().registerComponent("links", new LinksComponent());
})(JoymonOnline || (JoymonOnline = {}));
//# sourceMappingURL=links.component.js.map