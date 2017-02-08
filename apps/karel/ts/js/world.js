var World = (function () {
    function World(canvas) {
        this.context = canvas.getContext("2d");
        this.size = { rows: 9, cols: 9 };
    }
    World.prototype.getSize = function () {
        return this.size;
    };
    World.prototype.getCellSize = function () {
        return { w: this.boardWidth / this.size.cols, h: this.boardHeight / this.size.rows };
    };
    World.prototype.getCellCenter = function (row, col) {
        var cellWidth = this.boardWidth / this.size.cols;
        var cellHeight = this.boardHeight / this.size.rows;
        return { x: (col * cellWidth) + (cellWidth / 2), y: (row * cellHeight) + (cellHeight / 2) };
    };
    World.prototype.draw = function () {
        this.context.strokeStyle = "black";
        this.boardWidth = this.context.canvas.width;
        this.boardHeight = this.context.canvas.height;
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        this.drawAllSquares(0, 0);
    };
    World.prototype.drawAllSquares = function (x, y) {
        this.context.strokeStyle = "grey";
        var cellWidth = this.boardWidth / this.size.cols;
        var cellHeight = this.boardHeight / this.size.rows;

        // draw all 81 little squares
        this.context.lineWidth = 1;
        for (var row = 0; row < this.size.rows; row++) {
            this.drawSquaresForRow(row, cellWidth, cellHeight);
        }
    };
    World.prototype.drawSquaresForRow = function (row, cellWidth, cellHeight) {
        var x = 0, y = 0;
        for (var col = 0; col < this.size.cols; col++) {
            this.context.strokeRect(x + (col * cellWidth), y + (row * cellHeight), cellWidth, cellHeight);
        }
    };
    return World;
})();
//# sourceMappingURL=world.js.map
