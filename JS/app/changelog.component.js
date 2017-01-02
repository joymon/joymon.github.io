/// <reference path="../../Scripts/typings/angularjs/angular.d.ts" />
//Directive for Changelog view.
var JoymonOnline;
(function (JoymonOnline) {
    var ChangelogDirective = (function () {
        function ChangelogDirective() {
            this.restrict = 'E';
            this.templateUrl = 'JS/app/changelog.component.html';
        }
        return ChangelogDirective;
    }());
    JoymonOnline.ChangelogDirective = ChangelogDirective;
    JoymonOnline.AppModule.getInstance().registerDirective("changelog", function () {
        return new ChangelogDirective();
    });
})(JoymonOnline || (JoymonOnline = {}));
//# sourceMappingURL=changelog.component.js.map