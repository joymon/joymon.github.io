var TurnLeftAction = (function () {
    function TurnLeftAction() {
    }
    TurnLeftAction.prototype.Execute = function (karel) {
        switch (karel.direction) {
            case 0 /* North */:
                karel.direction = 3 /* West */;
                break;
            case 3 /* West */:
                karel.direction = 1 /* South */;
                break;
            case 1 /* South */:
                karel.direction = 2 /* East */;
                break;
            case 2 /* East */:
                karel.direction = 0 /* North */;
                break;
        }
    };
    return TurnLeftAction;
})();
//# sourceMappingURL=TurnLeftAction.js.map
