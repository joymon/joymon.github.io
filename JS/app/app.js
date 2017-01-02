/// <reference path="../../Scripts/typings/angularjs/angular.d.ts" />
var JoymonOnline;
(function (JoymonOnline) {
    "use strict";
    var AppModule = (function () {
        function AppModule() {
            this.app = angular.module("JoymonOnline", ['ngSanitize', 'ngRoute']);
            AppModule.currentCountryModule = this;
            this.registerRoutes();
        }
        AppModule.getInstance = function () {
            return AppModule.currentCountryModule;
        };
        AppModule.prototype.registerService = function (name, serviceConstructor) {
            console.log("Registered service " + name);
            this.app.service(name, serviceConstructor);
        };
        AppModule.prototype.registerController = function (name, controllerConstructor) {
            this.app.controller(name, function () { return controllerConstructor; });
            var f;
        };
        AppModule.prototype.registerControllerWithFactory = function (name, factory) {
            this.app.controller(name, factory);
        };
        AppModule.prototype.registerDirective = function (name, directiveFactory) {
            console.log("reg dir " + name);
            this.app.directive(name, directiveFactory);
        };
        AppModule.prototype.registerFilter = function (name, fun) {
            this.app.filter(name, fun);
        };
        AppModule.prototype.registerComponent = function (name, options) {
            this.app.component(name, options);
        };
        AppModule.prototype.registerRoutes = function () {
            this.app.config(["$routeProvider",
                function ($routeProvider) {
                    $routeProvider.when("/home", new JoymonOnline.HomeRoute())
                        .when("/Resume", new JoymonOnline.ResumeRoute())
                        .when("/ViewResume", new JoymonOnline.ViewResumeRoute())
                        .when("/Blogs", new JoymonOnline.BlogsRoute())
                        .when("/Links", new JoymonOnline.LinksRoute())
                        .when("/Projects", new JoymonOnline.ProjectsRoute())
                        .when("/Changelog", new JoymonOnline.ChangelogRoute())
                        .otherwise(new JoymonOnline.HomeRoute());
                }]);
        };
        return AppModule;
    }());
    JoymonOnline.AppModule = AppModule;
    var hrApp = new AppModule();
})(JoymonOnline || (JoymonOnline = {}));
//# sourceMappingURL=app.js.map