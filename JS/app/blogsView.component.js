/// <reference path="../../Scripts/typings/angularjs/angular.d.ts" />
//Directive for blogs view.
var JoymonOnline;
(function (JoymonOnline) {
    var BlogsViewDirective = (function () {
        function BlogsViewDirective() {
            this.restrict = 'E';
            this.templateUrl = 'JS/app/blogsView.component.html';
        }
        return BlogsViewDirective;
    }());
    JoymonOnline.BlogsViewDirective = BlogsViewDirective;
    JoymonOnline.AppModule.getInstance().registerDirective("blogsView", function () {
        return new BlogsViewDirective();
    });
})(JoymonOnline || (JoymonOnline = {}));
//# sourceMappingURL=blogsView.component.js.map