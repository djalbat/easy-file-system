"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return View;
    }
});
const _easy = require("easy");
const _necessary = require("necessary");
const _button = /*#__PURE__*/ _interop_require_default(require("./view/button"));
const _rubbishBin = /*#__PURE__*/ _interop_require_default(require("./view/rubbishBin"));
const _first = /*#__PURE__*/ _interop_require_default(require("./view/explorer/first"));
const _second = /*#__PURE__*/ _interop_require_default(require("./view/explorer/second"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { first, second } = _necessary.arrayUtilities;
class View extends _easy.Element {
    createDirectoryPathButtonClickHandler = (event, element)=>{
        const Explorer = this.getFirstExplorer();
        Explorer.createDirectoryPath();
    };
    renameSelectedPathButtonClickHandler = (event, element)=>{
        const firstExplorer = this.getFirstExplorer();
        firstExplorer.renameSelectedPath();
    };
    createFilePathButtonClickHandler = (event, element)=>{
        const firstExplorer = this.getFirstExplorer();
        firstExplorer.createFilePath();
    };
    renameCustomHandler = (event, element, pathMaps, done)=>{
        console.log("rename", JSON.stringify(pathMaps, null, 2));
        done();
    };
    createCustomHandler = (event, element, pathMaps, done)=>{
        console.log("create", JSON.stringify(pathMaps, null, 2));
        done();
    };
    selectCustomHandler = (event, element, path, selected, readOnly)=>{
        console.log("select", path, selected, readOnly);
    };
    removeCustomHandler = (event, element, pathMaps, done)=>{
        console.log("remove", JSON.stringify(pathMaps, null, 2));
        done();
    };
    moveCustomHandler = (event, element, pathMaps, done)=>{
        console.log("move", JSON.stringify(pathMaps, null, 2));
        done();
    };
    openCustomHandler = (event, element, filePath)=>{
        console.log("open", filePath);
    };
    getExplorers() {
        const explorerDivChildElements = this.getChildElements("div.explorer"), explorers = explorerDivChildElements; ///
        return explorers;
    }
    getFirstExplorer() {
        const explorers = this.getExplorers(), firstExplorer = first(explorers);
        return firstExplorer;
    }
    getSecondExplorer() {
        const explorers = this.getExplorers(), secondExplorer = second(explorers);
        return secondExplorer;
    }
    childElements() {
        return [
            /*#__PURE__*/ React.createElement(_rubbishBin.default, {
                onCustomRemove: this.removeCustomHandler
            }),
            /*#__PURE__*/ React.createElement(_first.default, {
                onCustomOpen: this.openCustomHandler,
                onCustomMove: this.moveCustomHandler,
                onCustomRemove: this.removeCustomHandler,
                onCustomRename: this.renameCustomHandler,
                onCustomCreate: this.createCustomHandler,
                onCustomSelect: this.selectCustomHandler
            }),
            /*#__PURE__*/ React.createElement(_second.default, {
                onCustomOpen: this.openCustomHandler,
                onCustomMove: this.moveCustomHandler,
                onCustomRename: this.renameCustomHandler,
                onCustomRemove: this.removeCustomHandler,
                onCustomCreate: this.createCustomHandler
            }),
            /*#__PURE__*/ React.createElement(_button.default, {
                onClick: this.renameSelectedPathButtonClickHandler
            }, "Rename selected path"),
            /*#__PURE__*/ React.createElement(_button.default, {
                onClick: this.createFilePathButtonClickHandler
            }, "Create file path"),
            /*#__PURE__*/ React.createElement(_button.default, {
                onClick: this.createDirectoryPathButtonClickHandler
            }, "Create directory path")
        ];
    }
    static tagName = "div";
    static defaultProperties = {
        className: "view"
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vdmlldy9idXR0b25cIjtcbmltcG9ydCBSdWJiaXNoQmluIGZyb20gXCIuL3ZpZXcvcnViYmlzaEJpblwiO1xuaW1wb3J0IEZpcnN0RXhwbG9yZXIgZnJvbSBcIi4vdmlldy9leHBsb3Jlci9maXJzdFwiO1xuaW1wb3J0IFNlY29uZEV4cGxvcmVyIGZyb20gXCIuL3ZpZXcvZXhwbG9yZXIvc2Vjb25kXCI7XG5cbmNvbnN0IHsgZmlyc3QsIHNlY29uZCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY3JlYXRlRGlyZWN0b3J5UGF0aEJ1dHRvbkNsaWNrSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IEV4cGxvcmVyID0gdGhpcy5nZXRGaXJzdEV4cGxvcmVyKCk7XG5cbiAgICBFeHBsb3Jlci5jcmVhdGVEaXJlY3RvcnlQYXRoKCk7XG4gIH1cblxuICByZW5hbWVTZWxlY3RlZFBhdGhCdXR0b25DbGlja0hhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBmaXJzdEV4cGxvcmVyID0gdGhpcy5nZXRGaXJzdEV4cGxvcmVyKCk7XG5cbiAgICBmaXJzdEV4cGxvcmVyLnJlbmFtZVNlbGVjdGVkUGF0aCgpO1xuICB9XG5cbiAgY3JlYXRlRmlsZVBhdGhCdXR0b25DbGlja0hhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBmaXJzdEV4cGxvcmVyID0gdGhpcy5nZXRGaXJzdEV4cGxvcmVyKCk7XG5cbiAgICBmaXJzdEV4cGxvcmVyLmNyZWF0ZUZpbGVQYXRoKCk7XG4gIH1cblxuICByZW5hbWVDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCBwYXRoTWFwcywgZG9uZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwicmVuYW1lXCIsIEpTT04uc3RyaW5naWZ5KHBhdGhNYXBzLCBudWxsLCAyKSlcblxuICAgIGRvbmUoKTtcbiAgfVxuXG4gIGNyZWF0ZUN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHBhdGhNYXBzLCBkb25lKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJjcmVhdGVcIiwgSlNPTi5zdHJpbmdpZnkocGF0aE1hcHMsIG51bGwsIDIpKVxuXG4gICAgZG9uZSgpO1xuICB9XG5cbiAgc2VsZWN0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgcGF0aCwgc2VsZWN0ZWQsIHJlYWRPbmx5KSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJzZWxlY3RcIiwgcGF0aCwgc2VsZWN0ZWQsIHJlYWRPbmx5KVxuICB9XG5cbiAgcmVtb3ZlQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgcGF0aE1hcHMsIGRvbmUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcInJlbW92ZVwiLCBKU09OLnN0cmluZ2lmeShwYXRoTWFwcywgbnVsbCwgMikpXG5cbiAgICBkb25lKCk7XG4gIH1cblxuICBtb3ZlQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgcGF0aE1hcHMsIGRvbmUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIm1vdmVcIiwgSlNPTi5zdHJpbmdpZnkocGF0aE1hcHMsIG51bGwsIDIpKVxuXG4gICAgZG9uZSgpO1xuICB9XG5cbiAgb3BlbkN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIGZpbGVQYXRoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJvcGVuXCIsIGZpbGVQYXRoKVxuICB9XG5cbiAgZ2V0RXhwbG9yZXJzKCkge1xuICAgIGNvbnN0IGV4cGxvcmVyRGl2Q2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cyhcImRpdi5leHBsb3JlclwiKSxcbiAgICAgICAgICBleHBsb3JlcnMgPSBleHBsb3JlckRpdkNoaWxkRWxlbWVudHM7IC8vL1xuXG4gICAgcmV0dXJuIGV4cGxvcmVycztcbiAgfVxuXG4gIGdldEZpcnN0RXhwbG9yZXIoKSB7XG4gICAgY29uc3QgZXhwbG9yZXJzID0gdGhpcy5nZXRFeHBsb3JlcnMoKSxcbiAgICAgICAgICBmaXJzdEV4cGxvcmVyID0gZmlyc3QoZXhwbG9yZXJzKTtcblxuICAgIHJldHVybiBmaXJzdEV4cGxvcmVyO1xuICB9XG5cbiAgZ2V0U2Vjb25kRXhwbG9yZXIoKSB7XG4gICAgY29uc3QgZXhwbG9yZXJzID0gdGhpcy5nZXRFeHBsb3JlcnMoKSxcbiAgICAgICAgICBzZWNvbmRFeHBsb3JlciA9IHNlY29uZChleHBsb3JlcnMpO1xuXG4gICAgcmV0dXJuIHNlY29uZEV4cGxvcmVyO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgPFJ1YmJpc2hCaW4gb25DdXN0b21SZW1vdmU9e3RoaXMucmVtb3ZlQ3VzdG9tSGFuZGxlcn0gLz4sXG4gICAgICA8Rmlyc3RFeHBsb3JlciBvbkN1c3RvbU9wZW49e3RoaXMub3BlbkN1c3RvbUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICBvbkN1c3RvbU1vdmU9e3RoaXMubW92ZUN1c3RvbUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICBvbkN1c3RvbVJlbW92ZT17dGhpcy5yZW1vdmVDdXN0b21IYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgb25DdXN0b21SZW5hbWU9e3RoaXMucmVuYW1lQ3VzdG9tSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgIG9uQ3VzdG9tQ3JlYXRlPXt0aGlzLmNyZWF0ZUN1c3RvbUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICBvbkN1c3RvbVNlbGVjdD17dGhpcy5zZWxlY3RDdXN0b21IYW5kbGVyfVxuICAgICAgLz4sXG4gICAgICA8U2Vjb25kRXhwbG9yZXIgb25DdXN0b21PcGVuPXt0aGlzLm9wZW5DdXN0b21IYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ3VzdG9tTW92ZT17dGhpcy5tb3ZlQ3VzdG9tSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICBvbkN1c3RvbVJlbmFtZT17dGhpcy5yZW5hbWVDdXN0b21IYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ3VzdG9tUmVtb3ZlPXt0aGlzLnJlbW92ZUN1c3RvbUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgb25DdXN0b21DcmVhdGU9e3RoaXMuY3JlYXRlQ3VzdG9tSGFuZGxlcn1cbiAgICAgIC8+LFxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLnJlbmFtZVNlbGVjdGVkUGF0aEJ1dHRvbkNsaWNrSGFuZGxlcn0+XG4gICAgICAgIFJlbmFtZSBzZWxlY3RlZCBwYXRoXG4gICAgICA8L0J1dHRvbj4sXG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuY3JlYXRlRmlsZVBhdGhCdXR0b25DbGlja0hhbmRsZXJ9PlxuICAgICAgICBDcmVhdGUgZmlsZSBwYXRoXG4gICAgICA8L0J1dHRvbj4sXG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuY3JlYXRlRGlyZWN0b3J5UGF0aEJ1dHRvbkNsaWNrSGFuZGxlcn0+XG4gICAgICAgIENyZWF0ZSBkaXJlY3RvcnkgcGF0aFxuICAgICAgPC9CdXR0b24+XG5cbiAgICBdKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIlZpZXciLCJmaXJzdCIsInNlY29uZCIsImFycmF5VXRpbGl0aWVzIiwiRWxlbWVudCIsImNyZWF0ZURpcmVjdG9yeVBhdGhCdXR0b25DbGlja0hhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJFeHBsb3JlciIsImdldEZpcnN0RXhwbG9yZXIiLCJjcmVhdGVEaXJlY3RvcnlQYXRoIiwicmVuYW1lU2VsZWN0ZWRQYXRoQnV0dG9uQ2xpY2tIYW5kbGVyIiwiZmlyc3RFeHBsb3JlciIsInJlbmFtZVNlbGVjdGVkUGF0aCIsImNyZWF0ZUZpbGVQYXRoQnV0dG9uQ2xpY2tIYW5kbGVyIiwiY3JlYXRlRmlsZVBhdGgiLCJyZW5hbWVDdXN0b21IYW5kbGVyIiwicGF0aE1hcHMiLCJkb25lIiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJjcmVhdGVDdXN0b21IYW5kbGVyIiwic2VsZWN0Q3VzdG9tSGFuZGxlciIsInBhdGgiLCJzZWxlY3RlZCIsInJlYWRPbmx5IiwicmVtb3ZlQ3VzdG9tSGFuZGxlciIsIm1vdmVDdXN0b21IYW5kbGVyIiwib3BlbkN1c3RvbUhhbmRsZXIiLCJmaWxlUGF0aCIsImdldEV4cGxvcmVycyIsImV4cGxvcmVyRGl2Q2hpbGRFbGVtZW50cyIsImdldENoaWxkRWxlbWVudHMiLCJleHBsb3JlcnMiLCJnZXRTZWNvbmRFeHBsb3JlciIsInNlY29uZEV4cGxvcmVyIiwiY2hpbGRFbGVtZW50cyIsIlJ1YmJpc2hCaW4iLCJvbkN1c3RvbVJlbW92ZSIsIkZpcnN0RXhwbG9yZXIiLCJvbkN1c3RvbU9wZW4iLCJvbkN1c3RvbU1vdmUiLCJvbkN1c3RvbVJlbmFtZSIsIm9uQ3VzdG9tQ3JlYXRlIiwib25DdXN0b21TZWxlY3QiLCJTZWNvbmRFeHBsb3JlciIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBcUJBOzs7c0JBVkc7MkJBQ087K0RBRVo7bUVBQ0k7OERBQ0c7K0RBQ0M7Ozs7OztBQUUzQixNQUFNLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFF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