/// <reference path="../../Scripts/typings/angularjs/angular.d.ts" />
//Directive for Changelog view.
var JoymonOnline;
(function (JoymonOnline) {
    var ViewResumeComponent = (function () {
        function ViewResumeComponent() {
            this.templateUrl = 'JS/app/viewResume.component.html';
        }
        return ViewResumeComponent;
    }());
    JoymonOnline.ViewResumeComponent = ViewResumeComponent;
    JoymonOnline.AppModule.getInstance().registerComponent("viewResume", new ViewResumeComponent());
})(JoymonOnline || (JoymonOnline = {}));
//# sourceMappingURL=viewResume.component.js.map