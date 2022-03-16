"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _marker = _interopRequireDefault(require("../../../item/entry/marker"));
var _name = require("../../../utilities/name");
var _entryTypes = require("../../../entryTypes");
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
var FileNameMarkerEntryItem = /*#__PURE__*/ function(MarkerEntryItem) {
    _inherits(FileNameMarkerEntryItem, MarkerEntryItem);
    var _super = _createSuper(FileNameMarkerEntryItem);
    function FileNameMarkerEntryItem() {
        _classCallCheck(this, FileNameMarkerEntryItem);
        return _super.apply(this, arguments);
    }
    _createClass(FileNameMarkerEntryItem, [
        {
            key: "isBefore",
            value: function isBefore(dragEntryItem) {
                var before;
                var dragEntryItemType = dragEntryItem.getType();
                switch(dragEntryItemType){
                    case _entryTypes.FILE_NAME_DRAG_ENTRY_TYPE:
                        var name = this.getName(), dragEntryItemName = dragEntryItem.getName();
                        before = (0, _name).nameIsBeforeEntryItemName(name, dragEntryItemName);
                        break;
                    case _entryTypes.DIRECTORY_NAME_DRAG_ENTRY_TYPE:
                        before = false;
                        break;
                }
                return before;
            }
        }
    ]);
    return FileNameMarkerEntryItem;
}(_marker.default);
exports.default = FileNameMarkerEntryItem;
_defineProperty(FileNameMarkerEntryItem, "type", _entryTypes.FILE_NAME_MARKER_ENTRY_TYPE);
_defineProperty(FileNameMarkerEntryItem, "defaultProperties", {
    className: "file-name"
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L21hcmtlci9maWxlTmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1hcmtlckVudHJ5SXRlbSBmcm9tIFwiLi4vLi4vLi4vaXRlbS9lbnRyeS9tYXJrZXJcIjtcblxuaW1wb3J0IHsgbmFtZUlzQmVmb3JlRW50cnlJdGVtTmFtZSB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvbmFtZVwiO1xuaW1wb3J0IHsgRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRSwgRklMRV9OQU1FX01BUktFUl9FTlRSWV9UWVBFLCBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUgfSBmcm9tIFwiLi4vLi4vLi4vZW50cnlUeXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSBleHRlbmRzIE1hcmtlckVudHJ5SXRlbSB7XG4gIGlzQmVmb3JlKGRyYWdFbnRyeUl0ZW0pIHtcbiAgICBsZXQgYmVmb3JlO1xuXG4gICAgY29uc3QgZHJhZ0VudHJ5SXRlbVR5cGUgPSBkcmFnRW50cnlJdGVtLmdldFR5cGUoKTtcblxuICAgIHN3aXRjaCAoZHJhZ0VudHJ5SXRlbVR5cGUpIHtcbiAgICAgIGNhc2UgRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRTpcbiAgICAgICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICBkcmFnRW50cnlJdGVtTmFtZSA9IGRyYWdFbnRyeUl0ZW0uZ2V0TmFtZSgpO1xuXG4gICAgICAgIGJlZm9yZSA9IG5hbWVJc0JlZm9yZUVudHJ5SXRlbU5hbWUobmFtZSwgZHJhZ0VudHJ5SXRlbU5hbWUpO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIERJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRTpcbiAgICAgICAgYmVmb3JlID0gZmFsc2U7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJlZm9yZTtcbiAgfVxuXG4gIHN0YXRpYyB0eXBlID0gRklMRV9OQU1FX01BUktFUl9FTlRSWV9UWVBFO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZmlsZS1uYW1lXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSIsImlzQmVmb3JlIiwiZHJhZ0VudHJ5SXRlbSIsImJlZm9yZSIsImRyYWdFbnRyeUl0ZW1UeXBlIiwiZ2V0VHlwZSIsIkZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUiLCJuYW1lIiwiZ2V0TmFtZSIsImRyYWdFbnRyeUl0ZW1OYW1lIiwibmFtZUlzQmVmb3JlRW50cnlJdGVtTmFtZSIsIkRJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSIsIk1hcmtlckVudHJ5SXRlbSIsInR5cGUiLCJGSUxFX05BTUVfTUFSS0VSX0VOVFJZX1RZUEUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWSxXQUFBLENBQUM7OztFQUFiO3dCQUFBO0FBRTRCLEdBQTRCLENBQTVCLE9BQTRCO0FBRWQsR0FBeUIsQ0FBekIsS0FBeUI7QUFDb0MsR0FBcUIsQ0FBckIsV0FBcUI7Ozs7Ozs7Ozs7Ozs7Ozs4REFMNUg7c0NBQUE7NkRBQUE7aUVBQUE7Ozs7d0VBQUE7Z0VBQUE7Ozs7Ozs7Ozs7VUFBQTs7d0JBQUE7Ozs7Ozs7S0FBQTs7Ozs7Ozs7Ozs7OztNQUFBO3lEQUFBOzs7Ozs7Ozs7Ozs7Ozs7dUJBQUE7O0tBQUE7Ozs7MkJBQUE7Ozs7Ozs7O3FGQUFBOzs7Ozs7Ozs7Ozs7bUVBQUE7O2lEQUFBOzs7OztBQU9lLEdBQUssQ0FBQ0EsdUJBQXVCLGlCQUE3QixRQUFRO3VEQVB2Qjs7YUFPcUJBLHVCQUF1QjtzREFQNUM7Ozs7O1lBUUVDLEdBQVEsRUFBUkEsQ0FBUTttQkFBUkEsUUFBUSxDQUFSQSxRQUFRLENBQUNDLGFBQWEsRUFBRSxDQUFDO2dCQUN2QixHQUFHLENBQUNDLE1BQU07Z0JBRVYsR0FBSyxDQUFDQyxpQkFBaUIsR0FBR0YsYUFBYSxDQUFDRyxPQUFPO2dCQUUvQyxNQUFNLENBQUVELGlCQUFpQjtvQkFDdkIsSUFBSSxDQUFDRSxXQUF5Qjt3QkFDNUIsR0FBSyxDQUFDQyxJQUFJLEdBQUcsSUFBSSxDQUFDQyxPQUFPLElBQ25CQyxpQkFBaUIsR0FBR1AsYUFBYSxDQUFDTSxPQUFPO3dCQUUvQ0wsTUFBTSxPQUFHTyxLQUF5Qiw0QkFBQ0gsSUFBSSxFQUFFRSxpQkFBaUIsQ0FBQyxDQUFDO3dCQUU1RCxLQUFLO29CQUVQLElBQUksQ0FBQ0UsV0FBOEI7d0JBQ2pDUixNQUFNLEdBQUcsS0FBSyxDQUFDO3dCQUVmLEtBQUs7O2dCQUdULE1BQU0sQ0FBQ0EsTUFBTTtZQUNmLENBQUM7O01BN0JIOztFQU9xRFMsT0FBZTtrQkFBL0NaLHVCQUF1QixBQVA1QztnQkFPcUJBLHVCQUF1QixFQXdCbkNhLENBQUksT0FBR0MsV0FBMkIsNkJBL0IzQztnQkFPcUJkLHVCQUF1QixFQTBCbkNlLENBQWlCLG9CQUFHLENBQUM7SUFDMUJDLFNBQVMsRUFBRSxDQUFXO0FBQ3hCLENBQUMsQ0FuQ0gifQ==