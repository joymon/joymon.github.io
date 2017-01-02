/// <reference path="../../Scripts/typings/angularjs/angular.d.ts" />
//Directive for Changelog view.
var JoymonOnline;
(function (JoymonOnline) {
    var MenuController = (function () {
        function MenuController() {
            this.items = this.getMenuItems();
        }
        MenuController.prototype.getMenuItems = function () {
            return [
                {
                    page: "Default",
                    faIcon: "home",
                    title: "Home"
                },
                {
                    page: "Resume",
                    faIcon: "file-text-o",
                    title: "Resume"
                },
                {
                    page: "Blogs",
                    faIcon: "rss",
                    title: "Blogs"
                },
                {
                    page: "Links",
                    faIcon: "link",
                    title: "Links"
                },
                {
                    page: "Projects",
                    faIcon: "windows",
                    title: "Projects"
                },
                {
                    page: "Changelog",
                    faIcon: "list-alt",
                    title: "Changelog"
                }
            ];
        };
        return MenuController;
    }());
    var MenuComponent = (function () {
        function MenuComponent() {
            this.templateUrl = 'JS/app/menu.component.html';
            this.controller = MenuController;
        }
        return MenuComponent;
    }());
    JoymonOnline.MenuComponent = MenuComponent;
    JoymonOnline.AppModule.getInstance().registerComponent("menu", new MenuComponent());
})(JoymonOnline || (JoymonOnline = {}));
//# sourceMappingURL=menu.component.js.map