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
import { initialFetchParams, useFetchItems, useFetchItemsForComboBox, useMultiComboBox, } from '.';
export var useApiMultiComboBoxInternal = function (_a) {
    var createNewItem = _a.createNewItem, currentPage = _a.currentPage, fetchItems = _a.fetchItems, onBlur = _a.onBlur, onChange = _a.onChange, onFocus = _a.onFocus, onKeyDown = _a.onKeyDown, options = _a.options, totalPages = _a.totalPages, values = _a.values, maxSelectionCount = _a.maxSelectionCount;
    var _b = useMultiComboBox({
        values: values,
        options: options,
        onChange: onChange,
        onKeyDown: onKeyDown,
        maxSelectionCount: maxSelectionCount,
        alreadyFilteredByFieldValue: true,
    }), fieldValue = _b.fieldValue, setFieldValue = _b.setFieldValue, isOpen = _b.isOpen, setOpen = _b.setOpen, selectedIndex = _b.selectedIndex, setSelectedIndex = _b.setSelectedIndex, borderRef = _b.borderRef, selectedOptionRef = _b.selectedOptionRef, listOptionsRef = _b.listOptionsRef, filteredOptions = _b.filteredOptions, handleKeyDown = _b.handleKeyDown;
    var _c = useFetchItems({
        fieldValue: fieldValue,
        currentPage: currentPage,
        fetchItems: fetchItems,
        totalPages: totalPages,
    }), isLoadingMore = _c.isLoadingMore, fetchParams = _c.fetchParams, debouncedFetchItems = _c.debouncedFetchItems, loadMore = _c.loadMore;
    var onFieldBlur = useCallback(function (e) {
        setOpen(false);
        setFieldValue('');
        if (onBlur) {
            onBlur(e, fetchParams, values);
        }
    }, [fetchParams, onBlur, setFieldValue, setOpen, values]);
    var onFieldChange = useCallback(function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var newFieldValue;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    newFieldValue = e.target.value;
                    setFieldValue(newFieldValue);
                    setSelectedIndex(0);
                    setOpen(true);
                    return [4 /*yield*/, debouncedFetchItems(__assign(__assign({}, initialFetchParams), { name: newFieldValue }))];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); }, [debouncedFetchItems, setFieldValue, setOpen, setSelectedIndex]);
    var onFieldFocus = useCallback(function () {
        (!maxSelectionCount || values.length < maxSelectionCount) && setOpen(true);
        if (onFocus) {
            onFocus();
        }
    }, [onFocus, setOpen, maxSelectionCount, values]);
    var onSelectOption = useCallback(function (option) {
        if (option.disabled) {
            return;
        }
        setFieldValue('');
        setSelectedIndex(0);
        if (onChange) {
            onChange(__spreadArray(__spreadArray([], values, true), [option], false));
        }
        // もっと見るが出ている状態で全て選択し切ったら、loadMore()する
        if (filteredOptions.filter(function (_a) {
            var id = _a.id;
            return id !== option.id;
        }).length === 0 &&
            currentPage < totalPages) {
            loadMore();
        }
    }, [
        currentPage,
        filteredOptions,
        loadMore,
        onChange,
        setFieldValue,
        setSelectedIndex,
        totalPages,
        values,
    ]);
    var onRemoveOption = useCallback(function (option) {
        if (onChange && values) {
            onChange(values.filter(function (v) { return v.id !== option.id; }));
        }
    }, [onChange, values]);
    var onClickNewItem = useCallback(function (fieldValue) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (!createNewItem)
                return [2 /*return*/];
            createNewItem(fieldValue);
            setFieldValue('');
            return [2 /*return*/];
        });
    }); }, [createNewItem, setFieldValue]);
    var onFieldKeyDown = useCallback(function (e) {
        handleKeyDown(e, currentPage < totalPages ? loadMore : undefined, !filteredOptions.find(function (_a) {
            var label = _a.label;
            return label === fieldValue;
        })
            ? onClickNewItem
            : undefined);
    }, [
        currentPage,
        fieldValue,
        filteredOptions,
        handleKeyDown,
        loadMore,
        onClickNewItem,
        totalPages,
    ]);
    return {
        filteredOptions: filteredOptions,
        isLoadingMore: isLoadingMore,
        loadMore: loadMore,
        fieldValue: fieldValue,
        isOpen: isOpen,
        setOpen: setOpen,
        selectedIndex: selectedIndex,
        listOptionsRef: listOptionsRef,
        selectedOptionRef: selectedOptionRef,
        borderRef: borderRef,
        onFieldBlur: onFieldBlur,
        onFieldChange: onFieldChange,
        onFieldFocus: onFieldFocus,
        onFieldKeyDown: onFieldKeyDown,
        onSelectOption: onSelectOption,
        onRemoveOption: onRemoveOption,
        onClickNewItem: onClickNewItem,
    };
};
/**
 * ApiMultiComboBoxのためにAPIをラップし、以下の機能を付与します。
 *
 * - 複数のApiMultiComboBoxで利用するためのリソース管理
 * - ローディング状態の管理
 * - 初期化時のAPI呼び出し
 * - フォーカス時の挙動制御
 *
 * このhooksの利用は必須ではありません。
 *
 */
export var useApiMultiComboBox = function (_a) {
    var createOptions = _a.createOptions, fetchItems = _a.fetchItems, fetchOnInit = _a.fetchOnInit, responseAdapter = _a.responseAdapter;
    var _b = useFetchItemsForComboBox({
        createOptions: createOptions,
        fetchItems: fetchItems,
        fetchOnInit: fetchOnInit,
        responseAdapter: responseAdapter,
    }), items = _b.items, meta = _b.meta, options = _b.options, setResponse = _b.setResponse, isLoading = _b.isLoading, hasFetched = _b.hasFetched, currentFetchParams = _b.currentFetchParams, fetchItemsForComboBox = _b.fetchItemsForComboBox;
    var onFocus = function () {
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
         * ApiMultiComboBox の props としては使用しないが、useApiMultiComboBox で取得したリソースを
         * 他のコンポーネントから参照・編集したいケースのために返している
         */
        items: items,
        createOptions: createOptions,
        setItems: function (newItems) { return setResponse({ items: newItems, meta: meta }); },
        setMeta: function (newMeta) { return setResponse({ items: items, meta: newMeta }); },
    };
};
//# sourceMappingURL=apiMultiComboBox.js.map