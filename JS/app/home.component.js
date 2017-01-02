/// <reference path="../../Scripts/typings/angularjs/angular.d.ts" />
//Directive for Changelog view.
var JoymonOnline;
(function (JoymonOnline) {
    var HomeDirective = (function () {
        function HomeDirective() {
            this.restrict = 'E';
            this.templateUrl = 'JS/app/home.component.html';
        }
        return HomeDirective;
    }());
    JoymonOnline.HomeDirective = HomeDirective;
    JoymonOnline.AppModule.getInstance().registerDirective("home", function () {
        return new HomeDirective();
    });
})(JoymonOnline || (JoymonOnline = {}));
//# sourceMappingURL=home.component.js.map