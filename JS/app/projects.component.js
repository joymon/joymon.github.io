/// <reference path="../../Scripts/typings/angularjs/angular.d.ts" />
//Directive for individual Blog Feed
var JoymonOnline;
(function (JoymonOnline) {
    var ProjectsDirective = (function () {
        function ProjectsDirective() {
            this.restrict = 'E';
            this.templateUrl = 'JS/app/projects.component.html';
            this.controller = "ProjectsController";
            this.controllerAs = "ctrl";
            this.bindToController = true;
            this.scope = {
                rss: '@'
            };
        }
        return ProjectsDirective;
    }());
    JoymonOnline.ProjectsDirective = ProjectsDirective;
    JoymonOnline.AppModule.getInstance().registerDirective("projects", function () {
        console.log("Called reg fn");
        return new ProjectsDirective();
    });
    var ProjectsController = (function () {
        //static $inject = ['DataService'];
        function ProjectsController($scope, dataServie) {
            var _this = this;
            console.log("ProjectsController created");
            this.Url = "joymons world wpf";
            this.Projects = [];
            //this.Feed.entries.push({ Title: "Test Title", publishDate: new Date(), content: "test content", link: 'test ur' });
            //this.Feed.entries.push({ Title: "Test Title2", publishDate: new Date(), content: "test content2", link: 'test url2' });
            //console.log("rss" + $scope.ctrl.rss);
            dataServie.GetAllProjects('joymon')
                .then(function (value) {
                console.log(value.data);
                _this.Projects = value.data;
            })
                .catch(function (err) { console.log("Error" + err); });
        }
        ProjectsController.prototype.getUrl = function () {
            return this.Url;
        };
        return ProjectsController;
    }());
    JoymonOnline.ProjectsController = ProjectsController;
    //    AppModule.getInstance().registerController("BlogFeedController", new BlogFeedController());
    JoymonOnline.AppModule.getInstance().registerControllerWithFactory("ProjectsController", function ($scope, ProjectsService) { return new ProjectsController($scope, ProjectsService); });
})(JoymonOnline || (JoymonOnline = {}));
//# sourceMappingURL=projects.component.js.map