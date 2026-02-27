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
        console.log("rename", JSON.stringify(pathMaps, null, "  "));
        done();
    };
    createCustomHandler = (event, element, pathMaps, done)=>{
        console.log("create", JSON.stringify(pathMaps, null, "  "));
        done();
    };
    selectCustomHandler = (event, element, path, selected, readOnly)=>{
        console.log("select", path, selected, readOnly);
    };
    removeCustomHandler = (event, element, pathMaps, done)=>{
        console.log("remove", JSON.stringify(pathMaps, null, "  "));
        done();
    };
    moveCustomHandler = (event, element, pathMaps, done)=>{
        console.log("move", JSON.stringify(pathMaps, null, "  "));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vdmlldy9idXR0b25cIjtcbmltcG9ydCBSdWJiaXNoQmluIGZyb20gXCIuL3ZpZXcvcnViYmlzaEJpblwiO1xuaW1wb3J0IEZpcnN0RXhwbG9yZXIgZnJvbSBcIi4vdmlldy9leHBsb3Jlci9maXJzdFwiO1xuaW1wb3J0IFNlY29uZEV4cGxvcmVyIGZyb20gXCIuL3ZpZXcvZXhwbG9yZXIvc2Vjb25kXCI7XG5cbmNvbnN0IHsgZmlyc3QsIHNlY29uZCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY3JlYXRlRGlyZWN0b3J5UGF0aEJ1dHRvbkNsaWNrSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IEV4cGxvcmVyID0gdGhpcy5nZXRGaXJzdEV4cGxvcmVyKCk7XG5cbiAgICBFeHBsb3Jlci5jcmVhdGVEaXJlY3RvcnlQYXRoKCk7XG4gIH1cblxuICByZW5hbWVTZWxlY3RlZFBhdGhCdXR0b25DbGlja0hhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBmaXJzdEV4cGxvcmVyID0gdGhpcy5nZXRGaXJzdEV4cGxvcmVyKCk7XG5cbiAgICBmaXJzdEV4cGxvcmVyLnJlbmFtZVNlbGVjdGVkUGF0aCgpO1xuICB9XG5cbiAgY3JlYXRlRmlsZVBhdGhCdXR0b25DbGlja0hhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBmaXJzdEV4cGxvcmVyID0gdGhpcy5nZXRGaXJzdEV4cGxvcmVyKCk7XG5cbiAgICBmaXJzdEV4cGxvcmVyLmNyZWF0ZUZpbGVQYXRoKCk7XG4gIH1cblxuICByZW5hbWVDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCBwYXRoTWFwcywgZG9uZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwicmVuYW1lXCIsIEpTT04uc3RyaW5naWZ5KHBhdGhNYXBzLCBudWxsLCBcIiAgXCIpKVxuXG4gICAgZG9uZSgpO1xuICB9XG5cbiAgY3JlYXRlQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgcGF0aE1hcHMsIGRvbmUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImNyZWF0ZVwiLCBKU09OLnN0cmluZ2lmeShwYXRoTWFwcywgbnVsbCwgXCIgIFwiKSlcblxuICAgIGRvbmUoKTtcbiAgfVxuXG4gIHNlbGVjdEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHBhdGgsIHNlbGVjdGVkLCByZWFkT25seSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwic2VsZWN0XCIsIHBhdGgsIHNlbGVjdGVkLCByZWFkT25seSlcbiAgfVxuXG4gIHJlbW92ZUN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHBhdGhNYXBzLCBkb25lKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJyZW1vdmVcIiwgSlNPTi5zdHJpbmdpZnkocGF0aE1hcHMsIG51bGwsIFwiICBcIikpXG5cbiAgICBkb25lKCk7XG4gIH1cblxuICBtb3ZlQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgcGF0aE1hcHMsIGRvbmUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIm1vdmVcIiwgSlNPTi5zdHJpbmdpZnkocGF0aE1hcHMsIG51bGwsIFwiICBcIikpXG5cbiAgICBkb25lKCk7XG4gIH1cblxuICBvcGVuQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgZmlsZVBhdGgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIm9wZW5cIiwgZmlsZVBhdGgpXG4gIH1cblxuICBnZXRFeHBsb3JlcnMoKSB7XG4gICAgY29uc3QgZXhwbG9yZXJEaXZDaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKFwiZGl2LmV4cGxvcmVyXCIpLFxuICAgICAgICAgIGV4cGxvcmVycyA9IGV4cGxvcmVyRGl2Q2hpbGRFbGVtZW50czsgLy8vXG5cbiAgICByZXR1cm4gZXhwbG9yZXJzO1xuICB9XG5cbiAgZ2V0Rmlyc3RFeHBsb3JlcigpIHtcbiAgICBjb25zdCBleHBsb3JlcnMgPSB0aGlzLmdldEV4cGxvcmVycygpLFxuICAgICAgICAgIGZpcnN0RXhwbG9yZXIgPSBmaXJzdChleHBsb3JlcnMpO1xuXG4gICAgcmV0dXJuIGZpcnN0RXhwbG9yZXI7XG4gIH1cblxuICBnZXRTZWNvbmRFeHBsb3JlcigpIHtcbiAgICBjb25zdCBleHBsb3JlcnMgPSB0aGlzLmdldEV4cGxvcmVycygpLFxuICAgICAgICAgIHNlY29uZEV4cGxvcmVyID0gc2Vjb25kKGV4cGxvcmVycyk7XG5cbiAgICByZXR1cm4gc2Vjb25kRXhwbG9yZXI7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICA8UnViYmlzaEJpbiBvbkN1c3RvbVJlbW92ZT17dGhpcy5yZW1vdmVDdXN0b21IYW5kbGVyfSAvPixcbiAgICAgIDxGaXJzdEV4cGxvcmVyIG9uQ3VzdG9tT3Blbj17dGhpcy5vcGVuQ3VzdG9tSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgIG9uQ3VzdG9tTW92ZT17dGhpcy5tb3ZlQ3VzdG9tSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgIG9uQ3VzdG9tUmVtb3ZlPXt0aGlzLnJlbW92ZUN1c3RvbUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICBvbkN1c3RvbVJlbmFtZT17dGhpcy5yZW5hbWVDdXN0b21IYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgb25DdXN0b21DcmVhdGU9e3RoaXMuY3JlYXRlQ3VzdG9tSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgIG9uQ3VzdG9tU2VsZWN0PXt0aGlzLnNlbGVjdEN1c3RvbUhhbmRsZXJ9XG4gICAgICAvPixcbiAgICAgIDxTZWNvbmRFeHBsb3JlciBvbkN1c3RvbU9wZW49e3RoaXMub3BlbkN1c3RvbUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgb25DdXN0b21Nb3ZlPXt0aGlzLm1vdmVDdXN0b21IYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ3VzdG9tUmVuYW1lPXt0aGlzLnJlbmFtZUN1c3RvbUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgb25DdXN0b21SZW1vdmU9e3RoaXMucmVtb3ZlQ3VzdG9tSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICBvbkN1c3RvbUNyZWF0ZT17dGhpcy5jcmVhdGVDdXN0b21IYW5kbGVyfVxuICAgICAgLz4sXG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMucmVuYW1lU2VsZWN0ZWRQYXRoQnV0dG9uQ2xpY2tIYW5kbGVyfT5cbiAgICAgICAgUmVuYW1lIHNlbGVjdGVkIHBhdGhcbiAgICAgIDwvQnV0dG9uPixcbiAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5jcmVhdGVGaWxlUGF0aEJ1dHRvbkNsaWNrSGFuZGxlcn0+XG4gICAgICAgIENyZWF0ZSBmaWxlIHBhdGhcbiAgICAgIDwvQnV0dG9uPixcbiAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5jcmVhdGVEaXJlY3RvcnlQYXRoQnV0dG9uQ2xpY2tIYW5kbGVyfT5cbiAgICAgICAgQ3JlYXRlIGRpcmVjdG9yeSBwYXRoXG4gICAgICA8L0J1dHRvbj5cblxuICAgIF0pO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmlld1wiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiVmlldyIsImZpcnN0Iiwic2Vjb25kIiwiYXJyYXlVdGlsaXRpZXMiLCJFbGVtZW50IiwiY3JlYXRlRGlyZWN0b3J5UGF0aEJ1dHRvbkNsaWNrSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsIkV4cGxvcmVyIiwiZ2V0Rmlyc3RFeHBsb3JlciIsImNyZWF0ZURpcmVjdG9yeVBhdGgiLCJyZW5hbWVTZWxlY3RlZFBhdGhCdXR0b25DbGlja0hhbmRsZXIiLCJmaXJzdEV4cGxvcmVyIiwicmVuYW1lU2VsZWN0ZWRQYXRoIiwiY3JlYXRlRmlsZVBhdGhCdXR0b25DbGlja0hhbmRsZXIiLCJjcmVhdGVGaWxlUGF0aCIsInJlbmFtZUN1c3RvbUhhbmRsZXIiLCJwYXRoTWFwcyIsImRvbmUiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsImNyZWF0ZUN1c3RvbUhhbmRsZXIiLCJzZWxlY3RDdXN0b21IYW5kbGVyIiwicGF0aCIsInNlbGVjdGVkIiwicmVhZE9ubHkiLCJyZW1vdmVDdXN0b21IYW5kbGVyIiwibW92ZUN1c3RvbUhhbmRsZXIiLCJvcGVuQ3VzdG9tSGFuZGxlciIsImZpbGVQYXRoIiwiZ2V0RXhwbG9yZXJzIiwiZXhwbG9yZXJEaXZDaGlsZEVsZW1lbnRzIiwiZ2V0Q2hpbGRFbGVtZW50cyIsImV4cGxvcmVycyIsImdldFNlY29uZEV4cGxvcmVyIiwic2Vjb25kRXhwbG9yZXIiLCJjaGlsZEVsZW1lbnRzIiwiUnViYmlzaEJpbiIsIm9uQ3VzdG9tUmVtb3ZlIiwiRmlyc3RFeHBsb3JlciIsIm9uQ3VzdG9tT3BlbiIsIm9uQ3VzdG9tTW92ZSIsIm9uQ3VzdG9tUmVuYW1lIiwib25DdXN0b21DcmVhdGUiLCJvbkN1c3RvbVNlbGVjdCIsIlNlY29uZEV4cGxvcmVyIiwiQnV0dG9uIiwib25DbGljayIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBWUE7OztlQUFxQkE7OztzQkFWRzsyQkFDTzsrREFFWjttRUFDSTs4REFDRzsrREFDQzs7Ozs7O0FBRTNCLE1BQU0sRUFBRUMs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