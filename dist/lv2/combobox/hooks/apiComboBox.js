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
import { useCallback } from 'react';
import { KeyCodes } from '../../../utilities/keyboard';
import { useComboBox, initialFetchParams, useFetchItems, useFetchItemsForComboBox, } from '.';
export var useApiComboBoxInternal = function (_a) {
    var createNewItem = _a.createNewItem, currentPage = _a.currentPage, fetchItems = _a.fetchItems, onBlur = _a.onBlur, onChange = _a.onChange, onFocus = _a.onFocus, onKeyDown = _a.onKeyDown, options = _a.options, totalPages = _a.totalPages, value = _a.value;
    var _b = useComboBox({ value: value }), fieldValue = _b.fieldValue, isOpen = _b.isOpen, isFieldChanged = _b.isFieldChanged, listOptionsRef = _b.listOptionsRef, selectedIndex = _b.selectedIndex, selectedOptionRef = _b.selectedOptionRef, setFieldValue = _b.setFieldValue, setOpen = _b.setOpen, setIsFieldChanged = _b.setIsFieldChanged, setSelectedIndex = _b.setSelectedIndex;
    var _c = useFetchItems({
        fieldValue: fieldValue,
        currentPage: currentPage,
        fetchItems: fetchItems,
        totalPages: totalPages,
        isFieldChanged: isFieldChanged,
    }), isLoadingMore = _c.isLoadingMore, fetchParams = _c.fetchParams, debouncedFetchItems = _c.debouncedFetchItems, loadMore = _c.loadMore;
    var handleSelectOption = useCallback(function (option) {
        setFieldValue(option ? option.label : '');
        if (onChange) {
            onChange(option);
        }
    }, [onChange, setFieldValue]);
    var onFieldFocus = useCallback(function (e) {
        setOpen(true);
        setSelectedIndex(value ? options.indexOf(value) : -1);
        if (onFocus) {
            onFocus(e, fetchParams, isFieldChanged, value);
        }
    }, [
        setOpen,
        setSelectedIndex,
        value,
        options,
        onFocus,
        fetchParams,
        isFieldChanged,
    ]);
    var onFieldBlur = useCallback(function (e) {
        var filteredByLabelOptions = options.filter(function (option) { return option.label === fieldValue; });
        var labelMatchedOption = filteredByLabelOptions.length === 1
            ? filteredByLabelOptions[0]
            : undefined;
        if (labelMatchedOption) {
            handleSelectOption(labelMatchedOption);
        }
        else if (!fieldValue) {
            handleSelectOption();
        }
        else if (value) {
            setFieldValue(value.label);
        }
        setOpen(false);
        setSelectedIndex(-1);
        setIsFieldChanged(false);
        if (onBlur) {
            onBlur(e, fetchParams, value);
        }
    }, [
        options,
        fieldValue,
        value,
        setOpen,
        setSelectedIndex,
        setIsFieldChanged,
        onBlur,
        handleSelectOption,
        setFieldValue,
        fetchParams,
    ]);
    var onFieldChange = useCallback(function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var newFieldValue, selectedOption, selectedOptionIndex;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    newFieldValue = e.target.value;
                    selectedOption = selectedIndex >= 0 ? options[selectedIndex] : null;
                    selectedOptionIndex = selectedOption
                        ? options.indexOf(selectedOption)
                        : -1;
                    setFieldValue(newFieldValue);
                    setOpen(true);
                    setIsFieldChanged(true);
                    setSelectedIndex(selectedOptionIndex);
                    return [4 /*yield*/, debouncedFetchItems(__assign(__assign({}, initialFetchParams), { name: newFieldValue }))];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); }, [
        selectedIndex,
        options,
        setFieldValue,
        setOpen,
        setIsFieldChanged,
        setSelectedIndex,
        debouncedFetchItems,
    ]);
    var onSelectOption = useCallback(function (option) {
        handleSelectOption(option);
        setOpen(false);
    }, [handleSelectOption, setOpen]);
    var onFieldKeyDown = useCallback(function (e) {
        var items = __spreadArray(__spreadArray([], options, true), [
            currentPage < totalPages && 'loadMore',
            createNewItem &&
                !options.find(function (_a) {
                    var label = _a.label;
                    return label === fieldValue;
                }) &&
                'createNewItem',
        ], false).filter(function (v) { return v; });
        switch (e.keyCode) {
            case KeyCodes.UP:
                if (selectedIndex > 0) {
                    setSelectedIndex(selectedIndex - 1);
                }
                else {
                    setSelectedIndex(items.length - 1);
                }
                e.preventDefault();
                break;
            case KeyCodes.DOWN:
                if (selectedIndex >= 0 && selectedIndex < items.length - 1) {
                    setSelectedIndex(selectedIndex + 1);
                }
                else {
                    setSelectedIndex(0);
                }
                e.preventDefault();
                break;
            case KeyCodes.ENTER:
                if (selectedIndex >= 0) {
                    var item = items[selectedIndex];
                    if (item === 'loadMore') {
                        loadMore();
                    }
                    else if (item === 'createNewItem') {
                        if (createNewItem) {
                            createNewItem(fieldValue);
                            setOpen(false);
                        }
                    }
                    else {
                        onSelectOption(item);
                    }
                }
                e.preventDefault();
                break;
        }
        if (onKeyDown) {
            onKeyDown(e);
        }
    }, [
        options,
        currentPage,
        totalPages,
        createNewItem,
        onKeyDown,
        fieldValue,
        selectedIndex,
        setSelectedIndex,
        loadMore,
        setOpen,
        onSelectOption,
    ]);
    return {
        fieldValue: fieldValue,
        isLoadingMore: isLoadingMore,
        isOpen: isOpen,
        listOptionsRef: listOptionsRef,
        loadMore: loadMore,
        onFieldBlur: onFieldBlur,
        onFieldChange: onFieldChange,
        onFieldFocus: onFieldFocus,
        onFieldKeyDown: onFieldKeyDown,
        onSelectOption: onSelectOption,
        selectedIndex: selectedIndex,
        selectedOptionRef: selectedOptionRef,
    };
};
/**
 * ApiComboBoxのためにAPIをラップし、以下の機能を付与します。
 *
 * - 複数のApiComboBoxで利用するためのリソース管理
 * - ローディング状態の管理
 * - 初期化時のAPI呼び出し
 * - フォーカス時の挙動制御
 *
 * このhooksの利用は必須ではありません。
 *
 */
export var useApiComboBox = function (_a) {
    var createOptions = _a.createOptions, fetchItems = _a.fetchItems, fetchOnInit = _a.fetchOnInit, initialName = _a.initialName, responseAdapter = _a.responseAdapter;
    var _b = useFetchItemsForComboBox({
        createOptions: createOptions,
        fetchItems: fetchItems,
        fetchOnInit: fetchOnInit,
        initialName: initialName,
        responseAdapter: responseAdapter,
    }), items = _b.items, meta = _b.meta, options = _b.options, setResponse = _b.setResponse, isLoading = _b.isLoading, hasFetched = _b.hasFetched, currentFetchParams = _b.currentFetchParams, fetchItemsForComboBox = _b.fetchItemsForComboBox;
    /* eslint-disable @typescript-eslint/no-unused-vars */
    var onFocus = function (_e, _fetchParams, _isFieldChanged, _value) {
        /* eslint-enable @typescript-eslint/no-unused-vars */
        var nextFetchParams = {
            name: '',
            page: 1,
        };
        if (!hasFetched ||
            nextFetchParams.name !== currentFetchParams.name ||
            nextFetchParams.page !== currentFetchParams.page) {
            fetchItemsForComboBox(nextFetchParams);
        }
    };
    return {
        fetchItems: fetchItemsForComboBox,
        isLoading: isLoading,
        meta: meta,
        onFocus: onFocus,
        options: options,
        /**
         * ApiComboBox の props としては使用しないが、useApiComboBox で取得したリソースを
         * 他のコンポーネントから参照・編集したいケースのために返している
         */
        items: items,
        createOptions: createOptions,
        setItems: function (newItems) { return setResponse({ items: newItems, meta: meta }); },
        setMeta: function (newMeta) { return setResponse({ items: items, meta: newMeta }); },
    };
};
//# sourceMappingURL=apiComboBox.js.map