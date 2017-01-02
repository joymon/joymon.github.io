/// <reference path="../../Scripts/typings/angularjs/angular.d.ts" />
//Directive for individual Blog Feed
var JoymonOnline;
(function (JoymonOnline) {
    var BlogFeedDirective = (function () {
        function BlogFeedDirective() {
            this.restrict = 'E';
            this.templateUrl = 'JS/app/feed.component.html';
            this.controller = "BlogFeedController";
            this.controllerAs = "ctrl";
            this.bindToController = true;
            this.scope = {
                rss: '@'
            };
        }
        return BlogFeedDirective;
    }());
    JoymonOnline.BlogFeedDirective = BlogFeedDirective;
    JoymonOnline.AppModule.getInstance().registerDirective("blogFeed", function () {
        console.log("Called reg fn");
        return new BlogFeedDirective();
    });
    var BlogFeedController = (function () {
        //static $inject = ['DataService'];
        function BlogFeedController($scope, dataServie) {
            var _this = this;
            console.log("BlogFeedController created");
            this.Url = "joymons world wpf";
            this.Feed = { entries: [] };
            //this.Feed.entries.push({ Title: "Test Title", publishDate: new Date(), content: "test content", link: 'test ur' });
            //this.Feed.entries.push({ Title: "Test Title2", publishDate: new Date(), content: "test content2", link: 'test url2' });
            //console.log("rss" + $scope.ctrl.rss);
            dataServie.GetPosts($scope.ctrl.rss)
                .then(function (value) {
                console.log(value.data.feed);
                _this.Feed = value.data.feed;
            })
                .catch(function (err) { console.log("Error" + err); });
        }
        BlogFeedController.prototype.getUrl = function () {
            return this.Url;
        };
        return BlogFeedController;
    }());
    JoymonOnline.BlogFeedController = BlogFeedController;
    //    AppModule.getInstance().registerController("BlogFeedController", new BlogFeedController());
    JoymonOnline.AppModule.getInstance().registerControllerWithFactory("BlogFeedController", function ($scope, DataService) { return new BlogFeedController($scope, DataService); });
})(JoymonOnline || (JoymonOnline = {}));
//# sourceMappingURL=feed.component.js.map