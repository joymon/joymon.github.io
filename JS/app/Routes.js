var JoymonOnline;
(function (JoymonOnline) {
    var HomeRoute = (function () {
        function HomeRoute() {
            this.template = "<home></home>";
            this.caseInsensitiveMatch = true;
        }
        return HomeRoute;
    }());
    JoymonOnline.HomeRoute = HomeRoute;
    var ResumeRoute = (function () {
        function ResumeRoute() {
            this.template = "<resume></resume>";
            this.caseInsensitiveMatch = true;
        }
        return ResumeRoute;
    }());
    JoymonOnline.ResumeRoute = ResumeRoute;
    var ViewResumeRoute = (function () {
        function ViewResumeRoute() {
            this.template = "<view-resume></view-resume>";
            this.caseInsensitiveMatch = false;
        }
        return ViewResumeRoute;
    }());
    JoymonOnline.ViewResumeRoute = ViewResumeRoute;
    var BlogsRoute = (function () {
        function BlogsRoute() {
            this.template = "<blogs-view></blogs-view>";
            this.caseInsensitiveMatch = true;
        }
        return BlogsRoute;
    }());
    JoymonOnline.BlogsRoute = BlogsRoute;
    var LinksRoute = (function () {
        function LinksRoute() {
            this.template = "<links></links>";
            this.caseInsensitiveMatch = true;
        }
        return LinksRoute;
    }());
    JoymonOnline.LinksRoute = LinksRoute;
    var ProjectsRoute = (function () {
        function ProjectsRoute() {
            this.template = "<projects></projects>";
            this.caseInsensitiveMatch = true;
        }
        return ProjectsRoute;
    }());
    JoymonOnline.ProjectsRoute = ProjectsRoute;
    var ChangelogRoute = (function () {
        function ChangelogRoute() {
            this.template = "<changelog></changelog>";
            this.caseInsensitiveMatch = true;
        }
        return ChangelogRoute;
    }());
    JoymonOnline.ChangelogRoute = ChangelogRoute;
})(JoymonOnline || (JoymonOnline = {}));
//# sourceMappingURL=routes.js.map