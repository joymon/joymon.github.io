var KarelDrawer = (function () {
    function KarelDrawer(karel) {
        this.smallCircleRadius = 2;
        this.largeCircleRadius = 5;
        this.karel = karel;
        this.context = karel.world.context;
        this.world = karel.world;
    }
    KarelDrawer.prototype.draw = function (row, col, direction) {
        this.world.draw();
        var cellCenter = this.world.getCellCenter(row, col);
        switch (direction) {
            case 0 /* North */:
                this.circle(this.context, cellCenter.x, cellCenter.y - this.smallCircleRadius, this.smallCircleRadius);
                this.circle(this.context, cellCenter.x, cellCenter.y + this.largeCircleRadius, this.largeCircleRadius);
                break;
            case 3 /* West */:
                this.circle(this.context, cellCenter.x - this.smallCircleRadius, cellCenter.y, this.smallCircleRadius);
                this.circle(this.context, cellCenter.x + this.largeCircleRadius, cellCenter.y, this.largeCircleRadius);
                break;
            case 1 /* South */:
                this.circle(this.context, cellCenter.x, cellCenter.y + this.smallCircleRadius, this.smallCircleRadius);
                this.circle(this.context, cellCenter.x, cellCenter.y - this.largeCircleRadius, this.largeCircleRadius);
                break;
            case 2 /* East */:
                this.circle(this.context, cellCenter.x + this.smallCircleRadius, cellCenter.y, this.smallCircleRadius);
                this.circle(this.context, cellCenter.x - this.largeCircleRadius, cellCenter.y, this.largeCircleRadius);
                break;
        }
    };
    KarelDrawer.prototype.circle = function (context, x, y, radius) {
        context.beginPath();
        context.strokeStyle = "red";
        context.lineWidth = 1;
        context.arc(x, y, radius, 0, (Math.PI / 180) * 360, false);
        context.stroke();
        context.closePath();
    };
    return KarelDrawer;
})();
//# sourceMappingURL=KarelDrawer.js.map
