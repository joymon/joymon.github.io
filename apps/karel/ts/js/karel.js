/// <reference path="kareldrawer.ts" />
/// <reference path="moveaction.ts" />
/// <reference path="turnleftaction.ts" />
/// <reference path="world.ts" />
var Karel = (function () {
    function Karel(canvas, world) {
        this.row = 0;
        this.col = 0;
        this.direction = 0 /* North */;
        this.world = world;
        this.drawer = new KarelDrawer(this);
        this.draw();
    }
    Karel.prototype.draw = function () {
        this.drawer.draw(this.row, this.col, this.direction);
    };
    Karel.prototype.move = function () {
        var action = new MoveAction();
        this.executeAction(action);
    };
    Karel.prototype.turnLeft = function () {
        var action = new TurnLeftAction();
        this.executeAction(action);
    };
    Karel.prototype.executeAction = function (action) {
        var _this = this;
        action.Execute(this);
        setTimeout(function () {
            return _this.draw();
        }, 1000);
    };
    return Karel;
})();
//# sourceMappingURL=karel.js.map
