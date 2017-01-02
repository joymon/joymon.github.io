/// <reference path="../../Scripts/typings/angularjs/angular.d.ts" />
//Directive for Changelog view.
var JoymonOnline;
(function (JoymonOnline) {
    var ResumeComponent = (function () {
        function ResumeComponent() {
            this.templateUrl = 'JS/app/resume.component.html';
        }
        return ResumeComponent;
    }());
    JoymonOnline.ResumeComponent = ResumeComponent;
    JoymonOnline.AppModule.getInstance().registerComponent("resume", new ResumeComponent());
})(JoymonOnline || (JoymonOnline = {}));
//# sourceMappingURL=resume.component.js.map