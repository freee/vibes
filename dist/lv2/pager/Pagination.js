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
import * as React from 'react';
import Paragraph from '../../lv1/typography/Paragraph';
import SelectBox from '../../lv1/forms/SelectBox';
import { pickCommonProps } from '../../utilities/commonProps';
import { HStack } from '../../lv1';
import { Digits } from '../../utilities/Digits';
/**
 * ページネーションがあるコレクション画面で、「1ページの表示件数」と「いま表示されているページ（何件目から何件目が表示されてるのか）」を表示するコンポーネント
 *
 * - 使用例は Examples の Collection を参照してください
 *   - ListTable等の右上に配置することを想定しています
 * - 表示件数の選択肢、表示件数の初期値、いま何ページ目なのか、レコード総数表示は外からpropsで渡します
 *   - Pager コンポーネントと併用する場合、currentPage は Pager と同じ値を渡してください
 *   - レコード総数は実際のレコード数をわたすだけでなく、「1000件以上」といった文字列で渡すことも可能です
 */
var Pagination = function (props) {
    var rowsPerPageOptions = props.rowsPerPageOptions, currentPage = props.currentPage, defaultRowsPerPageValue = props.defaultRowsPerPageValue, rowsPerPageValue = props.rowsPerPageValue, rowCount = props.rowCount, displayRowCount = props.displayRowCount, currentPageRowCount = props.currentPageRowCount, selectBoxWidth = props.selectBoxWidth, disabled = props.disabled, onChange = props.onChange, onFocus = props.onFocus, onBlur = props.onBlur;
    var options = rowsPerPageOptions.map(function (option) {
        return {
            value: option.value,
            name: option.name || Digits.formalize(option.value) + '件',
        };
    });
    var rowsPerPage = rowsPerPageValue || defaultRowsPerPageValue || 0;
    var startNum = Math.min((currentPage - 1) * rowsPerPage + 1, rowCount || Infinity);
    var endNum = Math.min((currentPage - 1) * rowsPerPage + (currentPageRowCount || rowsPerPage), rowCount || Infinity);
    return (React.createElement(HStack, __assign({ inline: true, alignItems: "center", gap: 1, wrap: "nowrap" }, pickCommonProps(props)),
        React.createElement(SelectBox, { label: "\u8868\u793A\u4EF6\u6570", width: selectBoxWidth || 'small', options: options, defaultValue: defaultRowsPerPageValue === null || defaultRowsPerPageValue === void 0 ? void 0 : defaultRowsPerPageValue.toString(), disabled: disabled, value: rowsPerPageValue === null || rowsPerPageValue === void 0 ? void 0 : rowsPerPageValue.toString(), onChange: onChange, onFocus: onFocus, onBlur: onBlur }),
        React.createElement(Paragraph, { inline: true },
            Digits.formalize(startNum),
            " - ",
            Digits.formalize(endNum),
            displayRowCount || rowCount
                ? " / ".concat(Digits.formalize(displayRowCount || rowCount))
                : '')));
};
export default Pagination;
//# sourceMappingURL=Pagination.js.map