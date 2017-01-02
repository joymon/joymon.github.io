var JoymonOnline;
(function (JoymonOnline) {
    "use strict";
    var HTMLTagRemover = (function () {
        function HTMLTagRemover() {
        }
        HTMLTagRemover.filter = function () {
            return function (text) { return text ? String(text).replace(/<[^>]+>/gm, '') : ''; };
        };
        return HTMLTagRemover;
    }());
    JoymonOnline.HTMLTagRemover = HTMLTagRemover;
    JoymonOnline.AppModule.getInstance().registerFilter("removeTags", HTMLTagRemover.filter);
    var ToDateFilter = (function () {
        function ToDateFilter() {
        }
        ToDateFilter.filter = function () {
            return function (text) { return new Date(text.replace(/-/g, "/")); };
        };
        return ToDateFilter;
    }());
    JoymonOnline.ToDateFilter = ToDateFilter;
    JoymonOnline.AppModule.getInstance().registerFilter("toDate", ToDateFilter.filter);
})(JoymonOnline || (JoymonOnline = {}));
//# sourceMappingURL=HtmlTagRemover.filter.js.map