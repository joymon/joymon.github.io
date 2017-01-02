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
})(JoymonOnline || (JoymonOnline = {}));
