var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import vbClassName from '../../../utilities/vbClassNames';
import { debounce } from 'throttle-debounce';
import { KeyCodes, Keys } from '../../../utilities/keyboard';
export var initialFetchParams = {
    name: '',
    page: 1,
};
// 選択肢のリストのスクロール位置を調整する
var adjustListOptionsScroll = function (listOptionsElement, selectedOptionElement) {
    var selectedRect = selectedOptionElement.getBoundingClientRect();
    var listRect = listOptionsElement.getBoundingClientRect();
    if (selectedRect.bottom > listRect.bottom) {
        listOptionsElement.scrollTop =
            selectedRect.bottom +
                listOptionsElement.scrollTop -
                listRect.top -
                listRect.height;
    }
    else if (selectedRect.top < listRect.top) {
        listOptionsElement.scrollTop =
            selectedRect.top + listOptionsElement.scrollTop - listRect.top;
    }
};
export var useComboBox = function (_a) {
    var value = _a.value;
    var _b = useState(false), isOpen = _b[0], setOpen = _b[1];
    var _c = useState(value ? value.label : ''), fieldValue = _c[0], setFieldValue = _c[1];
    var _d = useState(-1), selectedIndex = _d[0], setSelectedIndex = _d[1];
    var _e = useState(false), isFieldChanged = _e[0], setIsFieldChanged = _e[1];
    var listOptionsRef = useRef(null);
    var selectedOptionRef = useRef(null);
    useEffect(function () {
        if (isOpen) {
            return;
        }
        setFieldValue(value ? value.label : '');
    }, [value, setFieldValue, isOpen]);
    useEffect(function () {
        if (isOpen &&
            listOptionsRef.current &&
            selectedOptionRef.current &&
            selectedIndex !== -1) {
            adjustListOptionsScroll(listOptionsRef.current, selectedOptionRef.current);
        }
    }, [isOpen, listOptionsRef, selectedOptionRef, selectedIndex]);
    return {
        fieldValue: fieldValue,
        isOpen: isOpen,
        isFieldChanged: isFieldChanged,
        listOptionsRef: listOptionsRef,
        selectedIndex: selectedIndex,
        selectedOptionRef: selectedOptionRef,
        setFieldValue: setFieldValue,
        setOpen: setOpen,
        setIsFieldChanged: setIsFieldChanged,
        setSelectedIndex: setSelectedIndex,
    };
};
export var useMultiComboBox = function (_a) {
    var values = _a.values, options = _a.options, onChange = _a.onChange, onKeyDown = _a.onKeyDown, maxSelectionCount = _a.maxSelectionCount, alreadyFilteredByFieldValue = _a.alreadyFilteredByFieldValue;
    var _b = useState(''), fieldValue = _b[0], setFieldValue = _b[1];
    var _c = useState(false), isOpen = _c[0], setOpen = _c[1];
    var _d = useState(0), selectedIndex = _d[0], setSelectedIndex = _d[1];
    var selectedOptionRef = useRef(null);
    var borderRef = useRef(null);
    var listOptionsRef = useRef(null);
    var filteredOptions = useMemo(function () {
        var filteredOptions = options.filter(function (opt) {
            var _a;
            return !values.find(function (v) { return v.id === opt.id; }) &&
                (alreadyFilteredByFieldValue ||
                    opt.label.includes(fieldValue) ||
                    ((_a = opt.keywords) === null || _a === void 0 ? void 0 : _a.some(function (k) { return k.includes(fieldValue); })));
        });
        var result = __spreadArray(__spreadArray([], filteredOptions.filter(function (option) { return option.label === fieldValue; }), true), filteredOptions.filter(function (option) { return option.label !== fieldValue; }), true);
        return result;
    }, [options, values, fieldValue, alreadyFilteredByFieldValue]);
    useEffect(function () {
        if (isOpen &&
            listOptionsRef.current &&
            selectedOptionRef.current &&
            selectedIndex !== -1) {
            adjustListOptionsScroll(listOptionsRef.current, selectedOptionRef.current);
        }
    }, [isOpen, listOptionsRef, selectedOptionRef, selectedIndex]);
    var onSelectOption = useCallback(function (option) {
        if (option.disabled ||
            (maxSelectionCount && values.length >= maxSelectionCount)) {
            return;
        }
        setFieldValue('');
        setSelectedIndex(0);
        if (onChange) {
            onChange(__spreadArray(__spreadArray([], values, true), [option], false));
        }
    }, [onChange, values, maxSelectionCount]);
    var onRemoveOption = useCallback(function (option) {
        if (onChange && values) {
            onChange(values.filter(function (v) { return v.id !== option.id; }));
        }
    }, [onChange, values]);
    var handleKeyDown = useCallback(function (e, loadMore, onClickNewItem) {
        var items = __spreadArray(__spreadArray([], filteredOptions, true), [
            loadMore && 'loadMore',
            onClickNewItem && 'onClickNewItem',
        ], false).filter(function (v) { return v; });
        switch (e.key) {
            case Keys.UP:
                if (selectedIndex > 0) {
                    setSelectedIndex(selectedIndex - 1);
                }
                else {
                    setSelectedIndex(items.length - 1);
                }
                e.preventDefault();
                break;
            case Keys.DOWN:
                if (selectedIndex >= 0 && selectedIndex < items.length - 1) {
                    setSelectedIndex(selectedIndex + 1);
                }
                else {
                    setSelectedIndex(0);
                }
                e.preventDefault();
                break;
            case Keys.ENTER:
                // KeyboardEvent.keys では変換確定のEnterを除外する方法がない
                // KeyboardEvent.isComposing (e.nativeEvent.isComposing) でも macOS Safari で変換確定のEnterではfalseになってしまったので、ここだけ keyCodeを使用している
                if (e.keyCode === KeyCodes.ENTER &&
                    selectedIndex >= 0 &&
                    items[selectedIndex]) {
                    var item = items[selectedIndex];
                    if (item === 'loadMore') {
                        if (loadMore) {
                            loadMore();
                        }
                    }
                    else if (item === 'onClickNewItem') {
                        if (onClickNewItem) {
                            onClickNewItem(fieldValue);
                        }
                    }
                    else {
                        onSelectOption(item);
                    }
                }
                e.preventDefault();
                break;
            case Keys.BACKSPACE:
                if (fieldValue.length === 0 && values.length > 0) {
                    onRemoveOption(values[values.length - 1]);
                }
        }
        if (onKeyDown) {
            onKeyDown(e);
        }
    }, [
        fieldValue,
        filteredOptions,
        onKeyDown,
        onRemoveOption,
        onSelectOption,
        selectedIndex,
        values,
    ]);
    return {
        fieldValue: fieldValue,
        setFieldValue: setFieldValue,
        isOpen: isOpen,
        setOpen: setOpen,
        selectedIndex: selectedIndex,
        setSelectedIndex: setSelectedIndex,
        borderRef: borderRef,
        selectedOptionRef: selectedOptionRef,
        listOptionsRef: listOptionsRef,
        filteredOptions: filteredOptions,
        handleKeyDown: handleKeyDown,
        onSelectOption: onSelectOption,
        onRemoveOption: onRemoveOption,
    };
};
export var useAdjustListPosition = function (isOpen, ref) {
    var tmpTextFieldRef = useRef();
    var textFieldRef = (ref ||
        tmpTextFieldRef);
    var _a = useState('15vh'), listOptionsMaxHeight = _a[0], setListOptionsMaxHeight = _a[1];
    // listOptionsMaxHeight が画面からはみ出さないようにtextFieldRefの位置を基準に
    // 15vh ~ 50vh 間で調整
    useEffect(function () {
        if (!(textFieldRef.current && isOpen)) {
            return;
        }
        var _a = textFieldRef.current.getBoundingClientRect(), top = _a.top, height = _a.height;
        setListOptionsMaxHeight("".concat(Math.min(Math.max(15, Math.round(((window.innerHeight - (top + height)) / window.innerHeight) * 100) - 1), 50), "vh"));
    }, [isOpen, textFieldRef]);
    return {
        textFieldRef: textFieldRef,
        listOptionsMaxHeight: listOptionsMaxHeight,
    };
};
export var createListBoxClassName = function (_a) {
    var isOpen = _a.isOpen, width = _a.width, listWidth = _a.listWidth;
    return vbClassName('vb-comboBox__listBox', {
        modifier: {
            open: isOpen,
            widthXSmall: listWidth === 'xSmall' || (!listWidth && width === 'xSmall'),
            widthSmall: listWidth === 'small' || (!listWidth && width === 'small'),
            widthMedium: listWidth === 'medium' ||
                (!listWidth && (!width || width === 'medium')),
            widthLarge: listWidth === 'large' || (!listWidth && width === 'large'),
        },
    });
};
export var useFetchItems = function (_a) {
    var fieldValue = _a.fieldValue, currentPage = _a.currentPage, fetchItems = _a.fetchItems, totalPages = _a.totalPages, isFieldChanged = _a.isFieldChanged;
    var _b = useState(false), isLoadingMore = _b[0], setIsLoadingMore = _b[1];
    var _c = useState(initialFetchParams), fetchParams = _c[0], setFetchParams = _c[1];
    var debouncedFetchItems = useMemo(function () {
        return debounce(300, function (params) { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, , 2, 3]);
                        if (params.page > 1) {
                            setIsLoadingMore(true);
                        }
                        return [4 /*yield*/, fetchItems(params)];
                    case 1:
                        _a.sent();
                        setFetchParams(params);
                        return [3 /*break*/, 3];
                    case 2:
                        setIsLoadingMore(false);
                        return [7 /*endfinally*/];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    }, [fetchItems]);
    var loadMore = useCallback(function () {
        debouncedFetchItems({
            name: isFieldChanged === false ? '' : fieldValue,
            page: Math.min(currentPage + 1, totalPages),
        });
    }, [
        currentPage,
        debouncedFetchItems,
        isFieldChanged,
        fieldValue,
        totalPages,
    ]);
    return {
        isLoadingMore: isLoadingMore,
        fetchParams: fetchParams,
        debouncedFetchItems: debouncedFetchItems,
        loadMore: loadMore,
    };
};
export var useFetchItemsForComboBox = function (_a) {
    var createOptions = _a.createOptions, fetchItems = _a.fetchItems, fetchOnInit = _a.fetchOnInit, initialName = _a.initialName, responseAdapter = _a.responseAdapter;
    var _b = useState({
        items: [],
        meta: {
            limit: 30,
            currentPage: 1,
            totalPages: 1,
            totalCount: 0,
        },
    }), _c = _b[0], items = _c.items, meta = _c.meta, setResponse = _b[1];
    var options = useMemo(function () { return createOptions(items); }, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [items]);
    var _d = useState({
        name: initialName || initialFetchParams.name,
        page: initialFetchParams.page,
    }), currentFetchParams = _d[0], setCurrentFetchParams = _d[1];
    var _e = useState(false), isLoading = _e[0], setIsLoading = _e[1];
    var _f = useState(false), hasFetched = _f[0], setHasFetched = _f[1];
    var fetchItemsForComboBox = useCallback(function (_a) {
        var _b = _a === void 0 ? currentFetchParams : _a, name = _b.name, page = _b.page;
        return __awaiter(void 0, void 0, void 0, function () {
            var response;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        setIsLoading(true);
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, , 3, 4]);
                        return [4 /*yield*/, fetchItems({ name: name, page: page })];
                    case 2:
                        response = _c.sent();
                        if (responseAdapter) {
                            response = responseAdapter(response);
                        }
                        setResponse(__assign(__assign({}, response), { items: page > 1 ? __spreadArray(__spreadArray([], items, true), response.items, true) : response.items }));
                        setHasFetched(true);
                        setCurrentFetchParams({ name: name, page: page });
                        return [3 /*break*/, 4];
                    case 3:
                        setIsLoading(false);
                        return [7 /*endfinally*/];
                    case 4: return [2 /*return*/];
                }
            });
        });
    }, [currentFetchParams, fetchItems, responseAdapter, setResponse, items]);
    useEffect(function () {
        if (fetchOnInit || initialName) {
            fetchItemsForComboBox();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return {
        items: items,
        meta: meta,
        options: options,
        setResponse: setResponse,
        isLoading: isLoading,
        hasFetched: hasFetched,
        currentFetchParams: currentFetchParams,
        fetchItemsForComboBox: fetchItemsForComboBox,
    };
};
//# sourceMappingURL=index.js.map