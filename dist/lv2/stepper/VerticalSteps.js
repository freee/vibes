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
import useUniqueId from '../../hooks/useUniqueId';
import { StepNumber, VisuallyHidden } from '../../lv1';
import commonProps from '../../utilities/commonProps';
/**
 * ユーザーに手順を提示し、順番に沿って操作させるためのコンポーネントです。
 *
 * - 手順ごとに `title` `content` `contentSummary` `actions` を指定できます。
 *   - `title` は常に表示されます
 *   - `content` はステップの内容で、フォーム等を配置します。現在のステップのみ表示されます
 *   - `actions` はステップを完了する、または前のステップに戻るボタンを配置します。現在のステップにのみ表示されます。
 *   - `contentSummary` はステップでのユーザーの入力・選択内容の概要を表現します。通過したステップにのみ表示されます
 *     - `contentSummary` にはステップで入力・選択した結果のみを含め、インタラクティブなものを含めないでください
 * - 各ステップの `title` は見出しとなります。デフォルトの見出しレベルは2ですが、 `stepHeadlineLevel` により変更ができます
 *   - `-1` にすると、見出しではなくなります。
 */
export var VerticalSteps = function (_a) {
    var currentStepIndex = _a.currentStepIndex, steps = _a.steps, _b = _a.stepHeadlineLevel, stepHeadlineLevel = _b === void 0 ? 2 : _b, props = __rest(_a, ["currentStepIndex", "steps", "stepHeadlineLevel"]);
    var className = 'vb-verticalSteps';
    var StepHeadlineTag = stepHeadlineLevel === 1
        ? 'h1'
        : stepHeadlineLevel === 2
            ? 'h2'
            : stepHeadlineLevel === 3
                ? 'h3'
                : stepHeadlineLevel === 4
                    ? 'h4'
                    : stepHeadlineLevel === 5
                        ? 'h5'
                        : stepHeadlineLevel === 6
                            ? 'h6'
                            : 'div';
    var uniqueId = useUniqueId(className);
    var selfRef = React.useRef(null);
    var renderedFlagRef = React.useRef(false);
    var getStepTitleIdFromIndex = function (index, uniqueId) {
        return "".concat(uniqueId, "__title-").concat(index + 1);
    };
    React.useEffect(function () {
        if (renderedFlagRef.current && selfRef.current) {
            var elm = selfRef.current.querySelector("#".concat(getStepTitleIdFromIndex(currentStepIndex, uniqueId)));
            if (elm) {
                elm.focus();
            }
        }
        else if (uniqueId) {
            renderedFlagRef.current = true;
        }
    }, [currentStepIndex, uniqueId]);
    return (React.createElement("div", __assign({}, commonProps(props, className), { ref: selfRef, id: uniqueId }), steps.map(function (_a, i) {
        var title = _a.title, content = _a.content, contentSummary = _a.contentSummary, actions = _a.actions;
        return (React.createElement("div", { key: i, className: "".concat(className, "__step") },
            React.createElement("div", { className: "".concat(className, "__number"), "aria-hidden": "true" },
                React.createElement(StepNumber, { number: i + 1, current: currentStepIndex === i, done: i < currentStepIndex })),
            React.createElement(StepHeadlineTag, { className: "".concat(className, "__title").concat(i > currentStepIndex ? " ".concat(className, "__title--future") : ''), id: getStepTitleIdFromIndex(i, uniqueId), tabIndex: -1, "aria-current": currentStepIndex === i ? 'step' : undefined },
                React.createElement(VisuallyHidden, null, i + 1),
                title),
            React.createElement("div", { className: "".concat(className, "__content") },
                i === currentStepIndex
                    ? content
                    : i < currentStepIndex
                        ? contentSummary
                        : '',
                actions && i === currentStepIndex && (React.createElement("div", { className: "".concat(className, "__actions") }, actions)))));
    })));
};
//# sourceMappingURL=VerticalSteps.js.map