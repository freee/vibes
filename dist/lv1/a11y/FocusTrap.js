var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as React from 'react';
import commonProps from '../../utilities/commonProps';
import { getFocusableElements } from '../../utilities/FocusableEelements';
/**
 * フォーカストラップ（Tabキー/Shift+Tabキーによるフォーカス移動では脱出できない領域）を作るコンポーネントです
 *
 * フォーカストラップは、上手く作ればキーボードによる操作が効率化され、ユーザーの理解を助けることができます。
 * しかし、作り方が悪いとキーボードによる操作の完遂が不可能になってしまうことがあります。
 *
 * **フォーカストラップを作る場合は、慎重に設計とテストを行ってください**。
 * 特に、Tabキー、矢印キー、Escキーなどを使って、簡単かつユーザーが予想しやすい方法でフォーカストラップから脱出できるような仕組みを必ず用意してください
 * （[キーボード・トラップの回避](https://a11y-guidelines.freee.co.jp/categories/input_device.html#gl-input-device-no-trap)）。
 *
 * このコンポーネントは、単純なフォーカストラップのほか、先端/末尾から移動する際に特定の場所にフォーカスを移すような挙動や、
 * フォーカス順序を意図的にDOM上の順序とは変えるようなこともできます。
 *
 * `onFocusOutsideTop` `onFocusOutsideBottom` は、FocusTrap内へフォーカスが進入しようとした場合の処理を定義できます。
 * また、 `onFocusInsideTop` `onFocusInsideBottom` は、FocusTrapの外へフォーカスが脱出しようとした場合の処理を定義できます。
 * これらのコールバックが `true` を返す場合、FocusTrapコンポーネントはフォーカスを移動させる処理を行いません（通常はFocusTrap内の先頭または末尾の要素にフォーカスを移します）。
 * これらを使うことで、複雑な順序のフォーカス制御を行うことができます。
 *
 *
 */
export var FocusTrap = function (_a) {
    var children = _a.children, loop = _a.loop, inline = _a.inline, onFocusOutsideTop = _a.onFocusOutsideTop, onFocusOutsideBottom = _a.onFocusOutsideBottom, onFocusInsideTop = _a.onFocusInsideTop, onFocusInsideBottom = _a.onFocusInsideBottom, props = __rest(_a, ["children", "loop", "inline", "onFocusOutsideTop", "onFocusOutsideBottom", "onFocusInsideTop", "onFocusInsideBottom"]);
    var ref = React.useRef(null);
    return React.createElement(inline ? 'span' : 'div', commonProps(props, 'vb-focusTrap', { inline: inline }), React.createElement(React.Fragment, null,
        React.createElement("span", { 
            // 外から来たときは先頭の要素にフォーカスさせる
            // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
            tabIndex: 0, onFocus: function (e) {
                if (onFocusOutsideTop && onFocusOutsideTop(e)) {
                    return;
                }
                if (ref.current) {
                    var focusable = getFocusableElements(ref.current);
                    (focusable.length > 0
                        ? focusable[0]
                        : ref.current).focus();
                }
            } }),
        React.createElement("span", { 
            // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
            tabIndex: 0, onFocus: function (e) {
                if (onFocusInsideTop && onFocusInsideTop(e)) {
                    return;
                }
                if (ref.current) {
                    var focusable = getFocusableElements(ref.current);
                    (focusable.length > 0
                        ? (loop
                            ? focusable[focusable.length - 1]
                            : focusable[0])
                        : ref.current).focus();
                }
            } }),
        React.createElement(inline ? 'span' : 'div', { tabIndex: -1, ref: ref }, children),
        React.createElement("span", { 
            // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
            tabIndex: 0, onFocus: function (e) {
                if (onFocusInsideBottom && onFocusInsideBottom(e)) {
                    return;
                }
                if (ref.current) {
                    var focusable = getFocusableElements(ref.current);
                    (focusable.length > 0
                        ? (loop
                            ? focusable[0]
                            : focusable[focusable.length - 1])
                        : ref.current).focus();
                }
            } }),
        React.createElement("span", { 
            // 外から来たときは末尾の要素にフォーカスさせる
            // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
            tabIndex: 0, onFocus: function (e) {
                if (onFocusOutsideBottom && onFocusOutsideBottom(e)) {
                    return;
                }
                if (ref.current) {
                    var focusable = getFocusableElements(ref.current);
                    (focusable.length > 0
                        ? focusable[focusable.length - 1]
                        : ref.current).focus();
                }
            } })));
};
//# sourceMappingURL=FocusTrap.js.map