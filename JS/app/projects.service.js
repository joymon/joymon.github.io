var JoymonOnline;
(function (JoymonOnline) {
    var ProjectsService = (function () {
        function ProjectsService($http, $q) {
            this.repoUrl = 'https://api.github.com/repos/';
            this.prjs = ["joyful-visualstudio",
                "Orchestration",
                "Karel",
                "PrayerBook"];
            this.http = $http;
            this.q = $q;
        }
        ProjectsService.prototype.getProjectUrl = function (userName, projectName) {
            return this.repoUrl + userName + "/" + projectName;
        };
        ProjectsService.prototype.logAPIQuota = function (ret) {
            if (ret.length > 0) {
                console.log(ret[0].headers());
            }
        };
        ProjectsService.prototype.GetAllProjects = function (userName) {
            var _this = this;
            var deffered = this.q.defer();
            this.q.all(this.prjs.map(function (value, index, array) {
                return _this.http.get(_this.getProjectUrl(userName, value));
            }))
                .then(function (s) {
                _this.logAPIQuota(s);
                deffered.resolve({ data: s });
            }, (function (err) { deffered.reject(err); }));
            return deffered.promise;
        };
        ProjectsService.$inject = ["$http", "$q"];
        return ProjectsService;
    }());
    JoymonOnline.ProjectsService = ProjectsService;
    JoymonOnline.AppModule.getInstance().registerService("ProjectsService", ProjectsService);
})(JoymonOnline || (JoymonOnline = {}));
//# sourceMappingURL=projects.service.js.map