var JoymonOnline;
(function (JoymonOnline) {
    var BlogDataService = (function () {
        function BlogDataService($http, $q) {
            this.http = $http;
            this.q = $q;
        }
        BlogDataService.prototype.GetPosts = function (feedURL) {
            var lurl = '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=3&callback=JSON_CALLBACK&q=' + encodeURIComponent(feedURL);
            var deffered = this.q.defer();
            this.http.jsonp(lurl)
                .error(function (err) { deffered.reject(err); })
                .then(function (s) {
                deffered.resolve({ data: s.data.responseData });
            });
            return deffered.promise;
        };
        BlogDataService.prototype.GetWhatsNew = function () {
            return "Test data";
        };
        BlogDataService.prototype.GetWhoAmI = function () {
            return "Test data";
        };
        BlogDataService.$inject = ["$http", "$q"];
        return BlogDataService;
    }());
    JoymonOnline.BlogDataService = BlogDataService;
    //angular.module('CountryApp').service("CountryMetaDataService", ["$http", '$q', 'HttpService', CountryMetaDataService]);
    JoymonOnline.AppModule.getInstance().registerService("DataService", BlogDataService);
    var ProjectsDataService = (function () {
        function ProjectsDataService() {
        }
        ProjectsDataService.prototype.GetAllProjects = function () {
            return null;
        };
        return ProjectsDataService;
    }());
    JoymonOnline.ProjectsDataService = ProjectsDataService;
})(JoymonOnline || (JoymonOnline = {}));
//# sourceMappingURL=feed.service.js.map