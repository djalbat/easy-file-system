"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
const _necessary = require("necessary");
const _easy = require("easy");
const _nameSpan = /*#__PURE__*/ _interop_require_default(require("../mixins/nameSpan"));
const _constants = require("../constants");
const _customEventTypes = require("../customEventTypes");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { first } = _necessary.arrayUtilities, { ENTER_KEY_CODE, ESCAPE_KEY_CODE } = _necessary.keyCodes;
class NameSpan extends _easy.Element {
    keyDownHandler = (event, element)=>{
        const { keyCode } = event;
        if (keyCode === ENTER_KEY_CODE) {
            const customEventType = _customEventTypes.CHANGE_CUSTOM_EVENT_TYPE;
            this.callCustomHandlers(customEventType, event, element);
            event.preventDefault();
        }
        if (keyCode === ESCAPE_KEY_CODE) {
            const customEventType = _customEventTypes.CANCEL_CUSTOM_EVENT_TYPE;
            this.callCustomHandlers(customEventType, event, element);
            event.preventDefault();
        }
    };
    getName() {
        const html = this.html(), name = html; ///
        return name;
    }
    setName(name) {
        const domElement = this.getDOMElement(), { firstChild } = domElement;
        let textNode;
        if (firstChild !== null) {
            textNode = firstChild; ///
        } else {
            textNode = _easy.document.createTextNode();
            domElement.appendChild(textNode);
        }
        textNode.nodeValue = name; ///
    }
    edit() {
        this.focus();
        this.addAttribute(_constants.CONTENT_EDITABLE, _constants.TRUE);
        this.onKeyDown(this.keyDownHandler);
        const html = this.html(), range = _easy.document.createRange(), selection = _easy.window.getSelection(), domElement = this.getDOMElement(), htmlLength = html.length, { childNodes } = domElement, firstChildNode = first(childNodes), textNode = firstChildNode; ///
        range.setStart(textNode, 0);
        range.setEnd(textNode, htmlLength);
        selection.removeAllRanges();
        selection.addRange(range);
    }
    reset() {
        this.offKeyDown(this.keyDownHandler);
        this.removeAttribute(_constants.CONTENT_EDITABLE, _constants.TRUE);
    }
    isEditable() {
        const contentEditableAttribute = this.hasAttribute(_constants.CONTENT_EDITABLE), editable = contentEditableAttribute; ///
        return editable;
    }
    didMount() {
    ///
    }
    willUnmount() {
        const editable = this.isEditable();
        if (editable) {
            this.reset();
        }
    }
    parentContext() {
        const isEditable = this.isEditable.bind(this), editNameSpan = this.edit.bind(this), resetNameSpan = this.reset.bind(this), getNameSpanName = this.getName.bind(this), setNameSpanName = this.setName.bind(this), onCustomNameSpanCancel = this.onCustomCancel.bind(this), onCustomNameSpanChange = this.onCustomChange.bind(this), offCustomNameSpanCancel = this.offCustomCancel.bind(this), offCustomNameSpanChange = this.offCustomChange.bind(this); ///
        return {
            isEditable,
            editNameSpan,
            resetNameSpan,
            getNameSpanName,
            setNameSpanName,
            onCustomNameSpanCancel,
            onCustomNameSpanChange,
            offCustomNameSpanCancel,
            offCustomNameSpanChange
        };
    }
    static tagName = "span";
    static defaultProperties = {
        className: "name"
    };
}
Object.assign(NameSpan.prototype, _easy.focusMixins);
Object.assign(NameSpan.prototype, _nameSpan.default);
const _default = (0, _easywithstyle.default)(NameSpan)`

  border: none;
  display: inline-block;
  font-size: inherit;
  text-align: left;
  background: transparent;
  font-weight: inherit;
  font-family: inherit;

  [contentEditable] {
    border: 1px solid black;
    padding: 4px;
  }
  
`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zcGFuL25hbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IGtleUNvZGVzLCBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IEVsZW1lbnQsIHdpbmRvdywgZG9jdW1lbnQsIGZvY3VzTWl4aW5zIH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IG5hbWVTcGFuTWl4aW5zIGZyb20gXCIuLi9taXhpbnMvbmFtZVNwYW5cIjtcblxuaW1wb3J0IHsgVFJVRSwgQ09OVEVOVF9FRElUQUJMRSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7Q0FOQ0VMX0NVU1RPTV9FVkVOVF9UWVBFLCBDSEFOR0VfQ1VTVE9NX0VWRU5UX1RZUEV9IGZyb20gXCIuLi9jdXN0b21FdmVudFR5cGVzXCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBFTlRFUl9LRVlfQ09ERSwgRVNDQVBFX0tFWV9DT0RFIH0gPSBrZXlDb2RlcztcblxuY2xhc3MgTmFtZVNwYW4gZXh0ZW5kcyBFbGVtZW50IHtcbiAga2V5RG93bkhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCB7IGtleUNvZGUgfSA9IGV2ZW50O1xuXG4gICAgaWYgKGtleUNvZGUgPT09IEVOVEVSX0tFWV9DT0RFKSB7XG4gICAgICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBDSEFOR0VfQ1VTVE9NX0VWRU5UX1RZUEU7XG5cbiAgICAgIHRoaXMuY2FsbEN1c3RvbUhhbmRsZXJzKGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQpO1xuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGlmIChrZXlDb2RlID09PSBFU0NBUEVfS0VZX0NPREUpIHtcbiAgICAgIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IENBTkNFTF9DVVNUT01fRVZFTlRfVFlQRTtcblxuICAgICAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnMoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCk7XG5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5odG1sKCksXG4gICAgICAgICAgbmFtZSA9IGh0bWw7ICAvLy9cblxuICAgIHJldHVybiBuYW1lO1xuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpLFxuICAgICAgICAgIHsgZmlyc3RDaGlsZCB9ID0gZG9tRWxlbWVudDtcblxuICAgIGxldCB0ZXh0Tm9kZTtcblxuICAgIGlmIChmaXJzdENoaWxkICE9PSBudWxsKSB7XG4gICAgICB0ZXh0Tm9kZSA9IGZpcnN0Q2hpbGQ7ICAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgpO1xuXG4gICAgICBkb21FbGVtZW50LmFwcGVuZENoaWxkKHRleHROb2RlKTtcbiAgICB9XG5cbiAgICB0ZXh0Tm9kZS5ub2RlVmFsdWUgPSBuYW1lOyAgLy8vXG4gIH1cblxuICBlZGl0KCkge1xuICAgIHRoaXMuZm9jdXMoKTtcblxuICAgIHRoaXMuYWRkQXR0cmlidXRlKENPTlRFTlRfRURJVEFCTEUsIFRSVUUpO1xuXG4gICAgdGhpcy5vbktleURvd24odGhpcy5rZXlEb3duSGFuZGxlcik7XG5cbiAgICBjb25zdCBodG1sID0gdGhpcy5odG1sKCksXG4gICAgICAgICAgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpLFxuICAgICAgICAgIHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKSxcbiAgICAgICAgICBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXG4gICAgICAgICAgaHRtbExlbmd0aCA9IGh0bWwubGVuZ3RoLFxuICAgICAgICAgIHsgY2hpbGROb2RlcyB9ID0gZG9tRWxlbWVudCxcbiAgICAgICAgICBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIHRleHROb2RlID0gZmlyc3RDaGlsZE5vZGU7ICAvLy9cblxuICAgIHJhbmdlLnNldFN0YXJ0KHRleHROb2RlLCAwKTtcblxuICAgIHJhbmdlLnNldEVuZCh0ZXh0Tm9kZSwgaHRtbExlbmd0aCk7XG5cbiAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XG5cbiAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5vZmZLZXlEb3duKHRoaXMua2V5RG93bkhhbmRsZXIpO1xuXG4gICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoQ09OVEVOVF9FRElUQUJMRSwgVFJVRSk7XG4gIH1cblxuICBpc0VkaXRhYmxlKCkge1xuICAgIGNvbnN0IGNvbnRlbnRFZGl0YWJsZUF0dHJpYnV0ZSA9IHRoaXMuaGFzQXR0cmlidXRlKENPTlRFTlRfRURJVEFCTEUpLFxuICAgICAgICAgIGVkaXRhYmxlID0gY29udGVudEVkaXRhYmxlQXR0cmlidXRlOyAvLy9cblxuICAgIHJldHVybiBlZGl0YWJsZTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIC8vL1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgY29uc3QgZWRpdGFibGUgPSB0aGlzLmlzRWRpdGFibGUoKTtcblxuICAgIGlmIChlZGl0YWJsZSkge1xuICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH1cbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgaXNFZGl0YWJsZSA9IHRoaXMuaXNFZGl0YWJsZS5iaW5kKHRoaXMpLFxuICAgICAgICAgIGVkaXROYW1lU3BhbiA9IHRoaXMuZWRpdC5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICByZXNldE5hbWVTcGFuID0gdGhpcy5yZXNldC5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBnZXROYW1lU3Bhbk5hbWUgPSB0aGlzLmdldE5hbWUuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgc2V0TmFtZVNwYW5OYW1lID0gdGhpcy5zZXROYW1lLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIG9uQ3VzdG9tTmFtZVNwYW5DYW5jZWwgPSB0aGlzLm9uQ3VzdG9tQ2FuY2VsLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIG9uQ3VzdG9tTmFtZVNwYW5DaGFuZ2UgPSB0aGlzLm9uQ3VzdG9tQ2hhbmdlLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIG9mZkN1c3RvbU5hbWVTcGFuQ2FuY2VsID0gdGhpcy5vZmZDdXN0b21DYW5jZWwuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgb2ZmQ3VzdG9tTmFtZVNwYW5DaGFuZ2UgPSB0aGlzLm9mZkN1c3RvbUNoYW5nZS5iaW5kKHRoaXMpOyAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgaXNFZGl0YWJsZSxcbiAgICAgIGVkaXROYW1lU3BhbixcbiAgICAgIHJlc2V0TmFtZVNwYW4sXG4gICAgICBnZXROYW1lU3Bhbk5hbWUsXG4gICAgICBzZXROYW1lU3Bhbk5hbWUsXG4gICAgICBvbkN1c3RvbU5hbWVTcGFuQ2FuY2VsLFxuICAgICAgb25DdXN0b21OYW1lU3BhbkNoYW5nZSxcbiAgICAgIG9mZkN1c3RvbU5hbWVTcGFuQ2FuY2VsLFxuICAgICAgb2ZmQ3VzdG9tTmFtZVNwYW5DaGFuZ2VcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJzcGFuXCI7ICAvLy9cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcIm5hbWVcIlxuICB9O1xufVxuXG5PYmplY3QuYXNzaWduKE5hbWVTcGFuLnByb3RvdHlwZSwgZm9jdXNNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihOYW1lU3Bhbi5wcm90b3R5cGUsIG5hbWVTcGFuTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKE5hbWVTcGFuKWBcblxuICBib3JkZXI6IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuXG4gIFtjb250ZW50RWRpdGFibGVdIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBwYWRkaW5nOiA0cHg7XG4gIH1cbiAgXG5gO1xuIl0sIm5hbWVzIjpbImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJFTlRFUl9LRVlfQ09ERSIsIkVTQ0FQRV9LRVlfQ09ERSIsImtleUNvZGVzIiwiTmFtZVNwYW4iLCJFbGVtZW50Iiwia2V5RG93bkhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJrZXlDb2RlIiwiY3VzdG9tRXZlbnRUeXBlIiwiQ0hBTkdFX0NVU1RPTV9FVkVOVF9UWVBFIiwiY2FsbEN1c3RvbUhhbmRsZXJzIiwicHJldmVudERlZmF1bHQiLCJDQU5DRUxfQ1VTVE9NX0VWRU5UX1RZUEUiLCJnZXROYW1lIiwiaHRtbCIsIm5hbWUiLCJzZXROYW1lIiwiZG9tRWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJmaXJzdENoaWxkIiwidGV4dE5vZGUiLCJkb2N1bWVudCIsImNyZWF0ZVRleHROb2RlIiwiYXBwZW5kQ2hpbGQiLCJub2RlVmFsdWUiLCJlZGl0IiwiZm9jdXMiLCJhZGRBdHRyaWJ1dGUiLCJDT05URU5UX0VESVRBQkxFIiwiVFJVRSIsIm9uS2V5RG93biIsInJhbmdlIiwiY3JlYXRlUmFuZ2UiLCJzZWxlY3Rpb24iLCJ3aW5kb3ciLCJnZXRTZWxlY3Rpb24iLCJodG1sTGVuZ3RoIiwibGVuZ3RoIiwiY2hpbGROb2RlcyIsImZpcnN0Q2hpbGROb2RlIiwic2V0U3RhcnQiLCJzZXRFbmQiLCJyZW1vdmVBbGxSYW5nZXMiLCJhZGRSYW5nZSIsInJlc2V0Iiwib2ZmS2V5RG93biIsInJlbW92ZUF0dHJpYnV0ZSIsImlzRWRpdGFibGUiLCJjb250ZW50RWRpdGFibGVBdHRyaWJ1dGUiLCJoYXNBdHRyaWJ1dGUiLCJlZGl0YWJsZSIsImRpZE1vdW50Iiwid2lsbFVubW91bnQiLCJwYXJlbnRDb250ZXh0IiwiYmluZCIsImVkaXROYW1lU3BhbiIsInJlc2V0TmFtZVNwYW4iLCJnZXROYW1lU3Bhbk5hbWUiLCJzZXROYW1lU3Bhbk5hbWUiLCJvbkN1c3RvbU5hbWVTcGFuQ2FuY2VsIiwib25DdXN0b21DYW5jZWwiLCJvbkN1c3RvbU5hbWVTcGFuQ2hhbmdlIiwib25DdXN0b21DaGFuZ2UiLCJvZmZDdXN0b21OYW1lU3BhbkNhbmNlbCIsIm9mZkN1c3RvbUNhbmNlbCIsIm9mZkN1c3RvbU5hbWVTcGFuQ2hhbmdlIiwib2ZmQ3VzdG9tQ2hhbmdlIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiZm9jdXNNaXhpbnMiLCJuYW1lU3Bhbk1peGlucyIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBZ0pBOzs7ZUFBQTs7O3NFQTlJc0I7MkJBRW1CO3NCQUNjO2lFQUU1QjsyQkFFWTtrQ0FDMEI7Ozs7OztBQUVqRSxNQUFNLEVBQUVBLEtBQUssRUFBRSxHQUFHQyx5QkFBYyxFQUMxQixFQUFFQyxjQUFjLEVBQUVDLGVBQWUsRUFBRSxHQUFHQyxtQkFBUTtBQUVwRCxNQUFNQyxpQkFBaUJDLGFBQU87SUFDNUJDLGlCQUFpQixDQUFDQyxPQUFPQztRQUN2QixNQUFNLEVBQUVDLE9BQU8sRUFBRSxHQUFHRjtRQUVwQixJQUFJRSxZQUFZUixnQkFBZ0I7WUFDOUIsTUFBTVMsa0JBQWtCQywwQ0FBd0I7WUFFaEQsSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQ0YsaUJBQWlCSCxPQUFPQztZQUVoREQsTUFBTU0sY0FBYztRQUN0QjtRQUVBLElBQUlKLFlBQVlQLGlCQUFpQjtZQUMvQixNQUFNUSxrQkFBa0JJLDBDQUF3QjtZQUVoRCxJQUFJLENBQUNGLGtCQUFrQixDQUFDRixpQkFBaUJILE9BQU9DO1lBRWhERCxNQUFNTSxjQUFjO1FBQ3RCO0lBQ0YsRUFBQztJQUVERSxVQUFVO1FBQ1IsTUFBTUMsT0FBTyxJQUFJLENBQUNBLElBQUksSUFDaEJDLE9BQU9ELE1BQU8sR0FBRztRQUV2QixPQUFPQztJQUNUO0lBRUFDLFFBQVFELElBQUksRUFBRTtRQUNaLE1BQU1FLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CLEVBQUVDLFVBQVUsRUFBRSxHQUFHRjtRQUV2QixJQUFJRztRQUVKLElBQUlELGVBQWUsTUFBTTtZQUN2QkMsV0FBV0QsWUFBYSxHQUFHO1FBQzdCLE9BQU87WUFDTEMsV0FBV0MsY0FBUSxDQUFDQyxjQUFjO1lBRWxDTCxXQUFXTSxXQUFXLENBQUNIO1FBQ3pCO1FBRUFBLFNBQVNJLFNBQVMsR0FBR1QsTUFBTyxHQUFHO0lBQ2pDO0lBRUFVLE9BQU87UUFDTCxJQUFJLENBQUNDLEtBQUs7UUFFVixJQUFJLENBQUNDLFlBQVksQ0FBQ0MsMkJBQWdCLEVBQUVDLGVBQUk7UUFFeEMsSUFBSSxDQUFDQyxTQUFTLENBQUMsSUFBSSxDQUFDMUIsY0FBYztRQUVsQyxNQUFNVSxPQUFPLElBQUksQ0FBQ0EsSUFBSSxJQUNoQmlCLFFBQVFWLGNBQVEsQ0FBQ1csV0FBVyxJQUM1QkMsWUFBWUMsWUFBTSxDQUFDQyxZQUFZLElBQy9CbEIsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JrQixhQUFhdEIsS0FBS3VCLE1BQU0sRUFDeEIsRUFBRUMsVUFBVSxFQUFFLEdBQUdyQixZQUNqQnNCLGlCQUFpQjFDLE1BQU15QyxhQUN2QmxCLFdBQVdtQixnQkFBaUIsR0FBRztRQUVyQ1IsTUFBTVMsUUFBUSxDQUFDcEIsVUFBVTtRQUV6QlcsTUFBTVUsTUFBTSxDQUFDckIsVUFBVWdCO1FBRXZCSCxVQUFVUyxlQUFlO1FBRXpCVCxVQUFVVSxRQUFRLENBQUNaO0lBQ3JCO0lBRUFhLFFBQVE7UUFDTixJQUFJLENBQUNDLFVBQVUsQ0FBQyxJQUFJLENBQUN6QyxjQUFjO1FBRW5DLElBQUksQ0FBQzBDLGVBQWUsQ0FBQ2xCLDJCQUFnQixFQUFFQyxlQUFJO0lBQzdDO0lBRUFrQixhQUFhO1FBQ1gsTUFBTUMsMkJBQTJCLElBQUksQ0FBQ0MsWUFBWSxDQUFDckIsMkJBQWdCLEdBQzdEc0IsV0FBV0YsMEJBQTBCLEdBQUc7UUFFOUMsT0FBT0U7SUFDVDtJQUVBQyxXQUFXO0lBQ1QsR0FBRztJQUNMO0lBRUFDLGNBQWM7UUFDWixNQUFNRixXQUFXLElBQUksQ0FBQ0gsVUFBVTtRQUVoQyxJQUFJRyxVQUFVO1lBQ1osSUFBSSxDQUFDTixLQUFLO1FBQ1o7SUFDRjtJQUVBUyxnQkFBZ0I7UUFDZCxNQUFNTixhQUFhLElBQUksQ0FBQ0EsVUFBVSxDQUFDTyxJQUFJLENBQUMsSUFBSSxHQUN0Q0MsZUFBZSxJQUFJLENBQUM5QixJQUFJLENBQUM2QixJQUFJLENBQUMsSUFBSSxHQUNsQ0UsZ0JBQWdCLElBQUksQ0FBQ1osS0FBSyxDQUFDVSxJQUFJLENBQUMsSUFBSSxHQUNwQ0csa0JBQWtCLElBQUksQ0FBQzVDLE9BQU8sQ0FBQ3lDLElBQUksQ0FBQyxJQUFJLEdBQ3hDSSxrQkFBa0IsSUFBSSxDQUFDMUMsT0FBTyxDQUFDc0MsSUFBSSxDQUFDLElBQUksR0FDeENLLHlCQUF5QixJQUFJLENBQUNDLGNBQWMsQ0FBQ04sSUFBSSxDQUFDLElBQUksR0FDdERPLHlCQUF5QixJQUFJLENBQUNDLGNBQWMsQ0FBQ1IsSUFBSSxDQUFDLElBQUksR0FDdERTLDBCQUEwQixJQUFJLENBQUNDLGVBQWUsQ0FBQ1YsSUFBSSxDQUFDLElBQUksR0FDeERXLDBCQUEwQixJQUFJLENBQUNDLGVBQWUsQ0FBQ1osSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHO1FBRXBFLE9BQVE7WUFDTlA7WUFDQVE7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUU7WUFDQUU7WUFDQUU7UUFDRjtJQUNGO0lBRUEsT0FBT0UsVUFBVSxPQUFPO0lBRXhCLE9BQU9DLG9CQUFvQjtRQUN6QkMsV0FBVztJQUNiLEVBQUU7QUFDSjtBQUVBQyxPQUFPQyxNQUFNLENBQUNyRSxTQUFTc0UsU0FBUyxFQUFFQyxpQkFBVztBQUM3Q0gsT0FBT0MsTUFBTSxDQUFDckUsU0FBU3NFLFNBQVMsRUFBRUUsaUJBQWM7TUFFaEQsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ3pFLFNBQVMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBZW5DLENBQUMifQ==