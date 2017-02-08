var MoveAction = (function () {
    function MoveAction() {
    }
    MoveAction.prototype.Execute = function (karel) {
        var worldSize = karel.world.getSize();
        switch (karel.direction) {
            case 0 /* North */:
                if (karel.row === 0) {
                    alert("cannot move");
                } else {
                    karel.row = karel.row - 1;
                }
                break;
            case 3 /* West */:
                if (karel.col === 0) {
                    alert("cannot move");
                } else {
                    karel.col = karel.col - 1;
                }
                break;
            case 1 /* South */:
                if (karel.row === worldSize.rows - 1) {
                    alert("cannot move");
                } else {
                    karel.row = karel.row + 1;
                }
                break;
            case 2 /* East */:
                if (karel.col === worldSize.cols - 1) {
                    alert("cannot move");
                } else {
                    karel.col = karel.col + 1;
                }
                break;
        }
    };
    return MoveAction;
})();
//# sourceMappingURL=MoveAction.js.map
