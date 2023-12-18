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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import * as React from 'react';
import PagerButton from '../../lv1/buttons/PagerButton';
import PagerBreak from './PagerBreak';
import IconOnlyButton from '../../lv1/buttons/IconOnlyButton';
import VisuallyHidden from '../../lv1/a11y/VisuallyHidden';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import commonProps from '../../utilities/commonProps';
var DEFAULT_PAGE_RANGE = 5;
var DEFAULT_SIDE_PAGE_RANGE = 1;
var LEFT_BREAK = 'LEFT_BREAK';
var RIGHT_BREAK = 'RIGHT_BREAK';
// pageの重複を排除
function uniquePages(pages) {
    var result = [];
    pages.forEach(function (page) {
        if (result.indexOf(page) < 0) {
            result.push(page);
        }
    });
    return result;
}
// buttonとbreakの並びを
// [1,2,LEFT_BREAK,5,6,7,8,9,RIGHT_BREAK,19,20] のように配列で取得
function createPages(_a) {
    var currentPage = _a.currentPage, pageCount = _a.pageCount, pageRange = _a.pageRange, sidePageRange = _a.sidePageRange;
    // 左端から...までのページ
    var leftSidePages = Array.from({ length: sidePageRange }, function (_, i) { return i + 1; }).filter(function (i) { return i > 0 && i <= pageCount; });
    // ...から...までのページ
    var centerPages = Array.from({ length: pageRange }, function (_, i) { return i + currentPage - Math.floor(pageRange / 2); })
        .map(function (_, i) { return i + currentPage - Math.floor(pageRange / 2); })
        .map(function (i) {
        // [-1,0,1,2,3] のようなケースは [1,2,3,4,5] に補正
        if (i < 1) {
            return i + pageRange;
        }
        else if (i > pageCount) {
            return i - pageRange;
        }
        return i;
    })
        .filter(function (i) { return i > 0 && i <= pageCount; })
        .sort(function (a, b) { return a - b; });
    // ...から右端までのページ
    var rightSidePages = Array.from({ length: sidePageRange }, function (_, i) { return pageCount - i; })
        .filter(function (i) { return i > 0 && i <= pageCount; })
        .reverse();
    var pages = __spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([], leftSidePages, true), [
        leftSidePages[leftSidePages.length - 1] < centerPages[0] - 1
            ? LEFT_BREAK
            : null
    ], false), centerPages, true), [
        rightSidePages[0] > centerPages[centerPages.length - 1] + 1
            ? RIGHT_BREAK
            : null
    ], false), rightSidePages, true).filter(function (i) { return i; });
    return uniquePages(pages);
}
/**
 * ページャー
 */
var Pager = function (props) {
    var currentPage = props.currentPage, disabled = props.disabled, onPageChange = props.onPageChange, pageCount = props.pageCount, _a = props.pageRange, pageRange = _a === void 0 ? DEFAULT_PAGE_RANGE : _a, _b = props.sidePageRange, sidePageRange = _b === void 0 ? DEFAULT_SIDE_PAGE_RANGE : _b, small = props.small;
    return (React.createElement("nav", __assign({}, commonProps(props, 'vb-pager'), { role: "navigation", "aria-label": "\u30DA\u30FC\u30B8\u9001\u308A" }),
        React.createElement("div", { className: "vb-pager__list" },
            React.createElement(IconOnlyButton, { label: "\u524D\u306E\u30DA\u30FC\u30B8\u3078", onClick: function () {
                    onPageChange(currentPage - 1);
                }, disabled: disabled || currentPage === 1, mr: 1, small: small, IconComponent: MdKeyboardArrowLeft }),
            createPages({ currentPage: currentPage, pageCount: pageCount, pageRange: pageRange, sidePageRange: sidePageRange }).map(function (page) {
                if (typeof page === 'number') {
                    return (React.createElement(PagerButton, { key: page, current: page === currentPage, disabled: disabled, onClick: function () {
                            page !== currentPage && onPageChange(page);
                        }, marginLeft: page === 1, marginRight: true, small: small, label: "\u30DA\u30FC\u30B8 ".concat(page) },
                        React.createElement("span", null, page)));
                }
                return React.createElement(PagerBreak, { key: "".concat(page) });
            }),
            React.createElement(IconOnlyButton, { label: "\u6B21\u306E\u30DA\u30FC\u30B8\u3078", onClick: function () {
                    onPageChange(currentPage + 1);
                }, disabled: disabled || currentPage === pageCount, ml: 1, small: small, IconComponent: MdKeyboardArrowRight })),
        React.createElement(VisuallyHidden, { autoRead: true }, "".concat(pageCount, "\u30DA\u30FC\u30B8\u4E2D\u3001").concat(currentPage, "\u30DA\u30FC\u30B8\u76EE\u3092\u8868\u793A\u4E2D"))));
};
export default Pager;
//# sourceMappingURL=Pager.js.map